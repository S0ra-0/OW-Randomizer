import { getRandomHero, getRandomTeam } from './randomizer.js';
import { overwatchHeroes } from './overwatch_heroes.js';

document.addEventListener('DOMContentLoaded', () => {
    const randomizeBtn = document.getElementById('randomize');
    const toggleFiltersBtn = document.getElementById('toggle-filters');
    const filtersContainer = document.querySelector('.randomizer-controls');
    const resultDiv = document.getElementById('result');
    const heroSearchInput = document.getElementById('hero-search');
    const searchResults = document.getElementById('search-results');
    const excludedHeroesContainer = document.getElementById('excluded-heroes');
    
    // Store excluded heroes
    let excludedHeroes = [];
    
    // Toggle filters visibility
    toggleFiltersBtn.addEventListener('click', () => {
        const isVisible = filtersContainer.classList.toggle('visible');
        const icon = toggleFiltersBtn.querySelector('.toggle-icon');
        icon.textContent = isVisible ? '▼' : '▶';
    });
    
    // Get filter elements
    const roleCheckboxes = {
        tank: document.getElementById('role-tank'),
        damage: document.getElementById('role-damage'),
        support: document.getElementById('role-support')
    };
    
    const includePerks = document.getElementById('include-perks');
    const modeRadios = document.getElementsByName('mode');
    
    // Get all heroes for search
    const allHeroes = [];
    ['tank', 'damage', 'support'].forEach(role => {
        if (overwatchHeroes[role]) {
            allHeroes.push(...overwatchHeroes[role]);
        }
    });
    allHeroes.sort((a, b) => a.name.localeCompare(b.name));
    
    // Filter heroes based on search input
    heroSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            searchResults.classList.remove('visible');
            return;
        }
        
        const filteredHeroes = allHeroes.filter(hero => 
            hero.name.toLowerCase().includes(query) && 
            !excludedHeroes.includes(hero.name)
        );
        
        if (filteredHeroes.length === 0) {
            searchResults.classList.remove('visible');
            return;
        }
        
        filteredHeroes.forEach(hero => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <img src="${hero.image}" alt="${hero.name}">
                <span>${hero.name}</span>
            `;
            item.addEventListener('click', () => addExcludedHero(hero));
            searchResults.appendChild(item);
        });
        
        searchResults.classList.add('visible');
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.exclude-search')) {
            searchResults.classList.remove('visible');
        }
    });
    
    // Add hero to excluded list
    function addExcludedHero(hero) {
        if (excludedHeroes.includes(hero.name)) return;
        
        excludedHeroes.push(hero.name);
        updateExcludedHeroesUI();
        
        // Clear search
        heroSearchInput.value = '';
        searchResults.classList.remove('visible');
    }
    
    // Remove hero from excluded list
    function removeExcludedHero(heroName) {
        excludedHeroes = excludedHeroes.filter(name => name !== heroName);
        updateExcludedHeroesUI();
    }
    
    // Update the excluded heroes UI
    function updateExcludedHeroesUI() {
        excludedHeroesContainer.innerHTML = '';
        
        if (excludedHeroes.length === 0) {
            excludedHeroesContainer.innerHTML = '<div class="no-heroes">No heroes excluded</div>';
            return;
        }
        
        excludedHeroes.forEach(heroName => {
            const hero = allHeroes.find(h => h.name === heroName);
            if (!hero) return;
            
            const tag = document.createElement('div');
            tag.className = 'excluded-hero-tag';
            tag.innerHTML = `
                <img src="${hero.image}" alt="${hero.name}">
                <span>${hero.name}</span>
                <button class="remove-hero" data-hero="${hero.name}">×</button>
            `;
            
            tag.querySelector('.remove-hero').addEventListener('click', (e) => {
                e.stopPropagation();
                removeExcludedHero(hero.name);
            });
            
            excludedHeroesContainer.appendChild(tag);
        });
    }
    
    // Get selected roles
    function getSelectedRoles() {
        return Object.entries(roleCheckboxes)
            .filter(([_, checkbox]) => checkbox.checked)
            .map(([role]) => role);
    }
    
    // Get selected mode
    function getSelectedMode() {
        return document.querySelector('input[name="mode"]:checked').value;
    }
    
    // Display hero result
    function displayHero(hero) {
        const perks = includePerks.checked ? {
            minor: overwatchHeroes.getRandomPerk(hero.name, 'minor'),
            major: overwatchHeroes.getRandomPerk(hero.name, 'major')
        } : null;
        
        let html = `
            <div class="hero-card">
                <img src="${hero.image}" alt="${hero.name}" class="hero-image">
                <h2>${hero.name}</h2>
                <div class="hero-role">${hero.role.charAt(0).toUpperCase() + hero.role.slice(1)}</div>
        `;
        
        if (perks && (perks.major || perks.minor)) {
            html += '<div class="perks">';
            
            if (perks.major) {
                html += `
                    <div class="perk">
                        <span class="perk-type">Major Perk:</span>
                        ${perks.major}
                    </div>
                `;
            }
            
            if (perks.minor) {
                html += `
                    <div class="perk">
                        <span class="perk-type">Minor Perk:</span>
                        ${perks.minor}
                    </div>
                `;
            }
            
            html += '</div>';
        }
        
        html += '</div>';
        
        resultDiv.innerHTML = html;
        resultDiv.classList.add('hero-selected');
    }
    
    // Display team result
    function displayTeam(team) {
        let html = '<div class="team-result">';
        
        // Group heroes by role
        const roles = {
            tank: [],
            damage: [],
            support: []
        };
        
        team.forEach(hero => {
            roles[hero.role].push(hero);
        });
        
        // Display each role section
        Object.entries(roles).forEach(([role, heroes]) => {
            if (heroes.length === 0) return;
            
            const roleName = role.charAt(0).toUpperCase() + role.slice(1);
            
            html += `
                <div class="team-role-section">
                    <h3>${roleName} (${heroes.length})</h3>
                    <div class="team-role-heroes">
            `;
            
            heroes.forEach(hero => {
                const perks = includePerks.checked ? {
                    minor: overwatchHeroes.getRandomPerk(hero.name, 'minor'),
                    major: overwatchHeroes.getRandomPerk(hero.name, 'major')
                } : null;
                
                html += `
                    <div class="hero-card">
                        <img src="${hero.image}" alt="${hero.name}" class="hero-image">
                        <h3>${hero.name}</h3>
                `;
                
                if (perks && (perks.major || perks.minor)) {
                    html += '<div class="perks">';
                    
                    if (perks.major) {
                        html += `
                            <div class="perk">
                                <span class="perk-type">Major:</span>
                                ${perks.major}
                            </div>
                        `;
                    }
                    
                    if (perks.minor) {
                        html += `
                            <div class="perk">
                                <span class="perk-type">Minor:</span>
                                ${perks.minor}
                            </div>
                        `;
                    }
                    
                    html += '</div>';
                }
                
                html += '</div>';
            });
            
            html += `
                    </div>
                </div>
            `;
        });
        
        html += '</div>';
        
        resultDiv.innerHTML = html;
        resultDiv.classList.add('hero-selected');
    }
    
    // Handle randomize button click
    randomizeBtn.addEventListener('click', () => {
        const selectedRoles = getSelectedRoles();
        const mode = getSelectedMode();
        
        // Check if at least one role is selected
        if (selectedRoles.length === 0) {
            resultDiv.innerHTML = '<div class="error">Please select at least one role.</div>';
            return;
        }
        
        try {
            if (mode === 'single') {
                const hero = getRandomHero(selectedRoles, excludedHeroes);
                if (!hero) {
                    throw new Error('No heroes match the selected filters.');
                }
                displayHero(hero);
            } else {
                const teamSize = mode === '5v5' ? 5 : 6;
                const team = getRandomTeam(selectedRoles, teamSize, excludedHeroes);
                if (!team || team.length === 0) {
                    throw new Error('Not enough heroes match the selected filters to form a team.');
                }
                displayTeam(team);
            }
        } catch (error) {
            resultDiv.innerHTML = `<div class="error">${error.message}</div>`;
        }
    });
    
    // Initialize the page
    updateExcludedHeroesUI();
});
