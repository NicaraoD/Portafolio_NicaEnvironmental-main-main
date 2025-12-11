const fs = require('fs');
const path = require('path');

function removeComments(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const ext = path.extname(filePath);
        const originalLength = content.length;

        if (ext === '.css') {
            // CSS: Remove /* ... */
            content = content.replace(/\/\*[\s\S]*?\*\//g, '');
        } else if (ext === '.ts' || ext === '.tsx' || ext === '.js' || ext === '.jsx') {
            // TS/JS: Remove block comments /* */
            content = content.replace(/\/\*[\s\S]*?\*\//g, '');
            // Remove line comments //, avoiding http://
            // Match: (start of line or non-colon char), then //, then rest of line
            content = content.replace(/([^:]|^)\/\/.*$/gm, '$1');
        }

        // Optional: Clean up excessive newlines (more than 2)
        content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

        if (content.length !== originalLength) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Cleaned ${filePath} (removed ${originalLength - content.length} bytes)`);
        } else {
            console.log(`No changes in ${filePath}`);
        }
    } catch (err) {
        console.error(`Error processing ${filePath}:`, err.message);
    }
}

// Get files recursively if directory or just list
const targetFiles = [
    'src/styles/PageLayout.module.css',
    'src/styles/Nav.module.css',
    'src/styles/HeroCard.module.css',
    'src/styles/Hero.module.css',
    'src/styles/Header.module.css',
    'src/index.css',
    'src/pages/Contact.tsx',
    'src/hooks/useScrollAnimation.ts',
    'src/components/Header.tsx',
    'src/components/Footer.tsx'
];

targetFiles.forEach(f => {
    const fullPath = path.resolve(process.cwd(), f);
    if (fs.existsSync(fullPath)) {
        removeComments(fullPath);
    } else {
        console.warn(`File not found: ${f}`);
    }
});
