const fs = require('fs');
const path = require('path');

const heroesDir = path.join(__dirname, 'heroes');

// Read all HTML files in the heroes directory
fs.readdir(heroesDir, (err, files) => {
    if (err) {
        console.error('Error reading heroes directory:', err);
        return;
    }

    const htmlFiles = files.filter(file => file.endsWith('.html'));
    
    htmlFiles.forEach(file => {
        const filePath = path.join(heroesDir, file);
        
        // Read file content
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${file}:`, err);
                return;
            }

            // Replace main.html with index.html
            const updatedContent = data.replace(
                /href="\.\.\/main\.html"/g, 
                'href="../index.html"'
            );

            // Write updated content back to file
            fs.writeFile(filePath, updatedContent, 'utf8', (err) => {
                if (err) {
                    console.error(`Error writing file ${file}:`, err);
                    return;
                }
                console.log(`Updated links in ${file}`);
            });
        });
    });
});
