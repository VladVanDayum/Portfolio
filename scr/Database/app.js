import express from 'express';
import { getAllProjekts, getOneProjekt, createContact } from './db.js';
import os from 'os';

const app = express();
const port = 80;

app.use(express.json());
app.use(express.static('C:\\Users\\Vreyn\\Documents\\GitHub\\Portfolio\\scr\\HTML'));

app.get("/portfolio_db", async (req, res) => {
    try {
        const projekte = await getAllProjekts();
        res.json(projekte);
    } catch (err) {
        res.status(500).json({ error: 'Fehler beim Abrufen der Projekte' });
    }
});

app.get("/portfolio_db/:id", async (req, res) => {
    const id = req.params.id;
    const projekt = await getOneProjekt(id);
    res.send(projekt);
});

app.post("/kontakte", async (req, res) => {
    const { email, name, grund, nachricht } = req.body;
    try {
        const contact = await createContact(email, name, grund, nachricht);
        res.status(201).send(contact);
    } catch (err) {
        res.status(500).json({ error: 'Fehler beim Erstellen des Kontakts' });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, '0.0.0.0', () => {
    const interfaces = os.networkInterfaces();
    let serverAddressFound = false;
    
    // Durchsuche alle Netzwerkschnittstellen
    Object.keys(interfaces).forEach((ifaceName) => {
        interfaces[ifaceName].forEach((iface) => {
            // Ignoriere interne Schnittstellen und IPv6
            if (iface.family === 'IPv4' && !iface.internal) {
                console.log(`Server läuft auf http://${iface.address}:${port}`);
                serverAddressFound = true;
            }
        });
    });
    
    if (!serverAddressFound) {
        console.log(`Server läuft auf http://localhost:${port}`);
    }
    
    console.log('Verfügbare Netzwerkschnittstellen:');
    Object.keys(interfaces).forEach(name => {
        console.log(` - ${name}`);
    });
});