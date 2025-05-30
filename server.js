const express = require('express');
const next = require('next');

const dev = false; // Set to true if running locally in development
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const PORT = 80;

nextApp.prepare().then(() => {
    const app = express();

    // ✅ Custom health-check route
    app.get('/api/status', (req, res) => {
        res.json({ message: 'API is running' });
    });

    // ✅ Let Next.js handle everything else (pages, static, etc.)
    app.all('*', (req, res) => {
        return handle(req, res);
    });

    // ✅ Start the server on all interfaces (important for deployment)
    app.listen(PORT, '0.0.0.0', (err) => {
        if (err) throw err;
        console.log(`> Server running at http://localhost:${PORT}`);
    });
});
