import { overwatchHeroes } from './overwatch_heroes.js';

document.addEventListener('DOMContentLoaded', () => {
    const galleryContainer = document.getElementById('hero-gallery-container');
    galleryContainer.innerHTML = ''; // Clear existing content

    const mainContainer = document.createElement('div');
    mainContainer.className = 'gallery-layout-container';

    // Define layout structure
    const layout = {
        tank: { rows: [4, 4, 4, 1], centered: [3] },
        damage: { rows: [5, 5, 5, 4], centered: [3] },
        support: { rows: [4, 4, 3], centered: [2] }
    };

    Object.keys(layout).forEach(role => {
        const roleSection = document.createElement('div');
        roleSection.className = `role-section ${role}`;
        
        const roleHeader = document.createElement('h2');
        roleHeader.className = 'role-header';
        roleHeader.textContent = role.toUpperCase();
        roleSection.appendChild(roleHeader);

        const roleGrid = document.createElement('div');
        roleGrid.className = 'gallery-grid';

        let heroesInRole = [...overwatchHeroes[role]];
        const rowCounts = layout[role].rows;
        let heroIndex = 0;

        rowCounts.forEach((count, rowIndex) => {
            const rowHeroes = heroesInRole.slice(heroIndex, heroIndex + count);
            if (rowHeroes.length > 0) {
                const isCentered = layout[role].centered.includes(rowIndex);
                createHeroRow(roleGrid, rowHeroes, isCentered);
                heroIndex += count;
            }
        });

        roleSection.appendChild(roleGrid);
        mainContainer.appendChild(roleSection);
    });

    galleryContainer.appendChild(mainContainer);
});

function createHeroRow(container, heroes, isCentered) {
    const row = document.createElement('div');
    row.className = 'hero-row';
    if (isCentered) {
        row.classList.add('centered-row');
    }
    heroes.forEach(hero => createHeroCard(hero, row));
    container.appendChild(row);
}

function createHeroCard(hero, container) {
    const heroLink = document.createElement('a');
    const heroPageName = hero.name.toLowerCase().replace(/[^a-z0-9]/g, '') + '.html';
    heroLink.href = `heroes/${heroPageName}`;
    heroLink.className = 'hero-gallery-card';

    heroLink.innerHTML = `
        <img src="../${hero.image}" alt="${hero.name}" class="hero-gallery-image">
        <div class="hero-gallery-name">${hero.name}</div>
    `;
    container.appendChild(heroLink);
}
