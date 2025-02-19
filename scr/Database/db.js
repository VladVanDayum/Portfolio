import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB
}).promise()

/**
 * Projekt_Tabelle
 */

export async function getAllProjekts() {
    const [rows] = await pool.query("SELECT * FROM projekte")
    return rows
}

export async function getOneProjekt(id) {
    const [rows] = await pool.query("SELECT * FROM projekte WHERE id = ?", [id])
    return rows[0]
}

export async function createProject(titel, beschreibung, technologien, bild) {
    await pool.query("INSERT INTO projekte (titel, beschreibung, technologien, bild) VALUES(?, ?, ?, ?)", [titel, beschreibung, technologien, bild]);
}

export async function removeProject(id) {
    await pool.query("DELETE FROM projekte WHERE id = ?", [id])
}

export async function updateProject(id, titel, beschreibung, technologien) {
    await pool.query("UPDATE projekte SET titel = ?, beschreibung = ?, technologien = ?WHERE id = ?", [titel, beschreibung, technologien, id])
}

export async function updateProjectTitle(id, titel) {
    await pool.query("UPDATE projekte SET titel = ? WHERE id = ?", [titel, id])
}

export async function updateProjectInfo(id, beschreibung) {
    await pool.query("UPDATE projekte SET beschreibung = ? WHERE id = ?", [beschreibung, id])
}

export async function updateProjectTech(id, technologien) {
    await pool.query("UPDATE projekte SET technologien = ? WHERE id = ?", [technologien, id])
}

/**
 * Kontakte_Tabelle
 */

export async function getAllContacts() {
    const [rows] = await pool.query("SELECT * FROM kontakte")
    return rows
}

export async function getOneContact(email) {
    const [rows] = await pool.query("SELECT * FROM kontakte WHERE EMAIL = ?", [email])
    return rows[0]
}

export async function createContact(email, name, grund, nachricht) {
    await pool.query("INSERT INTO kontakte (email, name, grund, nachricht) VALUES (?, ?, ?, ?)", [email, name, grund, nachricht]);
}

export async function removeContact(email) {
    await pool.query("DELETE FROM kontakte WHERE email = ?", [email])
}