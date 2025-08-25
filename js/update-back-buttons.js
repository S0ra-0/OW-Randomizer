const fs = require('fs');
const path = require('path');

const heroesDir = path.join(__dirname, 'heroes');

// Read all HTML files in the heroes directory
fs.readdir(heroesDir, (err, files) => {
    if (err) {
        console.error('Error reading heroes directory:', err);
        return;
    }

    const htmlFiles = files.filter(file => file.endsWith('.html') && file !== 'hero-template.html');
    
    htmlFiles.forEach(file => {
        const filePath = path.join(heroesDir, file);
        
        // Read the file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${file}:`, err);
                return;
            }

            // Replace the back button with the new styled version
            const updatedContent = data.replace(
                /<a href="\.\.\/gallery\.html" class="back-button">← Back to Hero Gallery<\/a>/g,
                '<a href="../gallery.html" class="back-to-gallery">\n                <i>←</i>Back to Hero Gallery\n            </a>'
            );

            // Write the updated content back to the file
            fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
                if (err) {
                    console.error(`Error writing file ${file}:`, err);
                    return;
                }
                console.log(`Updated back button in ${file}`);
            });
        });
    });
});
