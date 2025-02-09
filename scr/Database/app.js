import express from 'express'
import {getAllProjekts, getOneProjekt, createContact} from './db.js'

const app = express()
const port = 8080


app.use(express.json())
app.use(express.static('C:\\Users\\Vreyn\\Documents\\GitHub\\Portfolio\\scr\\HTML'))

app.get("/portfolio_db", async (req, res) => {
    try {
        const projekte = await getAllProjekts();
        res.json(projekte);
    } catch (err) {
        res.status(500).json({ error: 'Fehler beim Abrufen der Projekte' });
    }
});

app.get("/portfolio_db/:id", async (req, res) => {
    const id = req.params.id
    const projekt = await getOneProjekt(id)
    res.send(projekt)
})

app.post("/kontakte", async (req, res) => {
    const {email, name, telefonnummer, grund, nachricht} = req.body;
    try {
        const contact = await createContact(email, name, telefonnummer, grund, nachricht);
        res.status(201).send(contact);
    } catch (err) {
        res.status(500).json({ error: 'Fehler beim Erstellen des Kontakts' });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(port, () => {
    console.log('Server is running on port 8080')
})