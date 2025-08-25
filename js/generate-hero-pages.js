const fs = require('fs');
const path = require('path');

// This is a workaround to use ES modules in a CommonJS file.
async function loadHeroes() {
    const { overwatchHeroes } = await import('./overwatch_heroes.js');
    return overwatchHeroes.all();
}

async function generatePages() {
    // Define root directory, which is one level up from the script's location
    const rootDir = path.join(__dirname, '..');

    // Read the template file
    const templatePath = path.join(rootDir, 'heroes', 'hero-template.html');
    const template = fs.readFileSync(templatePath, 'utf8');

    // Ensure heroes directory exists
    const heroesDir = path.join(rootDir, 'heroes');
    if (!fs.existsSync(heroesDir)) {
        fs.mkdirSync(heroesDir, { recursive: true });
    }

    // Function to generate a URL-friendly filename
    function getHeroFilename(heroName) {
        return heroName.toLowerCase().replace(/[^a-z0-9-]/g, '') + '.html';
    }

    const allHeroes = await loadHeroes();

    // Generate a page for each hero
    allHeroes.forEach(hero => {
        const heroName = hero.name;
        const filename = getHeroFilename(heroName);
        const filePath = path.join(heroesDir, filename);
        
        // Since the hero-page-loader.js handles dynamic content,
        // we only need to create a copy of the template.
        // We can replace the title for better SEO and browser history.
        const heroPage = template.replace(/HERO_NAME_PLACEHOLDER/g, heroName);
        
        // Save the hero page
        fs.writeFileSync(filePath, heroPage, 'utf8');
        console.log(`Created page for ${heroName} at ${filePath}`);
    });

    console.log('\nAll hero pages have been generated!');
}

generatePages();
