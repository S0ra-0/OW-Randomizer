import { overwatchHeroes } from './overwatch_heroes.js';

// Get a random element from an array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a specified number of unique elements from an array
const getUniqueRandomElements = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

// Get all heroes from specified roles that aren't excluded
const getAvailableHeroes = (roles, exclude = []) => {
    let availableHeroes = [];
    
    roles.forEach(role => {
        if (overwatchHeroes[role]) {
            availableHeroes.push(...overwatchHeroes[role]);
        }
    });
    
    return availableHeroes.filter(hero => !exclude.includes(hero.name));
};

// Get a random hero with optional role filtering and exclusions
export const getRandomHero = (roles = ['tank', 'damage', 'support'], exclude = []) => {
    const availableHeroes = getAvailableHeroes(roles, exclude);
    
    if (availableHeroes.length === 0) {
        return null;
    }
    
    return getRandomElement(availableHeroes);
};

// Get a random team with balanced roles
export const getRandomTeam = (roles = ['tank', 'damage', 'support'], teamSize = 5, exclude = []) => {
    const availableHeroes = getAvailableHeroes(roles, exclude);
    
    // Define team composition based on team size
    const composition = teamSize === 6 ? 
        { tank: 2, damage: 2, support: 2 } : 
        { tank: 1, damage: 2, support: 2 };
    
    // Filter heroes by role
    const heroesByRole = {
        tank: availableHeroes.filter(hero => hero.role === 'tank'),
        damage: availableHeroes.filter(hero => hero.role === 'damage'),
        support: availableHeroes.filter(hero => hero.role === 'support')
    };
    
    // Check if we have enough heroes for each role
    for (const [role, count] of Object.entries(composition)) {
        if (heroesByRole[role].length < count) {
            return null; // Not enough heroes for required roles
        }
    }
    
    // Select heroes for each role
    const selectedHeroes = [];
    const usedHeroNames = new Set();
    
    for (const [role, count] of Object.entries(composition)) {
        const roleHeroes = [...heroesByRole[role]];
        
        for (let i = 0; i < count; i++) {
            if (roleHeroes.length === 0) break;
            
            const randomIndex = Math.floor(Math.random() * roleHeroes.length);
            const selectedHero = roleHeroes.splice(randomIndex, 1)[0];
            
            if (!usedHeroNames.has(selectedHero.name)) {
                selectedHeroes.push(selectedHero);
                usedHeroNames.add(selectedHero.name);
            }
        }
    }
    
    return selectedHeroes;
};
