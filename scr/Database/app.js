/**
 * Express Server for Portfolio Website
 * 
 * This module sets up an Express server that serves the frontend files
 * and provides API endpoints for accessing project data and submitting
 * contact information.
 * 
 * @module app
 * @author Wladislaw Stepanenko
 */

import express from 'express';
import { getAllProjekts, getOneProjekt, createContact } from './db.js';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

// Setup for ES module file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Contructs a relative path to HTML
const htmlPath = path.join(__dirname, '..', 'HTML');

/**
 * Express application instance
 * @type {express.Application}
 */
const app = express();

/**
 * Port the server will listen on
 * @type {number}
 */
const port = 80;

// Middleware setup
app.use(express.json());

/**
 * Serve static files from the HTML directory
 * All frontend assets (HTML, CSS, JS, images) are served from this location
 */
app.use(express.static(htmlPath));

/**
 * Root endpoint - serves the main HTML page
 * @route GET /
 * @returns {HTML} The main index.html file
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(htmlPath, 'Index.html'));
});

/**
 * API endpoint to get all projects
 * @route GET /portfolio_db
 * @returns {JSON} Array of all projects from the database
 */
app.get("/portfolio_db", async (req, res) => {
    try {
        const projekte = await getAllProjekts();
        res.json(projekte);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving projects' });
    }
});

/**
 * API endpoint to get a specific project by ID
 * @route GET /portfolio_db/:id
 * @param {string} id - The project ID
 * @returns {JSON} The specified project
 */
app.get("/portfolio_db/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const projekt = await getOneProjekt(id);
        if (!projekt) {
            return res.status(404).json({ error: 'Project not found' });
        }
        res.send(projekt);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving project' });
    }
});

/**
 * API endpoint to create a new contact entry
 * @route POST /kontakte
 * @param {Object} req.body - Contact information
 * @param {string} req.body.email - Contact email
 * @param {string} req.body.name - Contact name
 * @param {string} req.body.grund - Reason for contact
 * @param {string} req.body.nachricht - Message content
 * @returns {JSON} The created contact or error message
 */
app.post("/kontakte", async (req, res) => {
    const { email, name, grund, nachricht } = req.body;
    try {
        const contact = await createContact(email, name, grund, nachricht);
        res.status(201).send(contact);
    } catch (err) {
        res.status(500).json({ error: 'Error creating contact entry' });
    }
});

/**
 * Global error handler
 * Catches any errors that occur during request processing
 * @middleware
 */
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

/**
 * Start the server and listen on the specified port
 * Displays all available network interfaces and their IP addresses
 */
app.listen(port, '0.0.0.0', () => {
    const interfaces = os.networkInterfaces();
    let serverAddressFound = false;
    
    // Find all available network interfaces
    Object.keys(interfaces).forEach((ifaceName) => {
        interfaces[ifaceName].forEach((iface) => {
            // Only show IPv4 and non-internal interfaces
            if (iface.family === 'IPv4' && !iface.internal) {
                console.log(`Server running at http://${iface.address}:${port}`);
                serverAddressFound = true;
            }
        });
    });
    
    // Fallback to localhost if no other interfaces are found
    if (!serverAddressFound) {
        console.log(`Server running at http://localhost:${port}`);
    }
    
    // List all available network interfaces for debugging
    console.log('Available network interfaces:');
    Object.keys(interfaces).forEach(name => {
        console.log(` - ${name}`);
    });
});