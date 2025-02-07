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

async function getAllProjekts() {
    const [rows] = await pool.query("SELECT * FROM projekte")
    return rows
}

async function getSingleProjekt(id) {
    const [rows] = await pool.query("SELECT * FROM projekte WHERE id = ?", [id])
    return rows[0]
}

/**
 * Kontakte_Tabelle
 */

async function getAllContacts() {
    const [rows] = await pool.query("SELECT * FROM kontakte")
    return rows
}

async function getSingelContact(email) {
    const [rows] = await pool.query("SELECT * FROM kontakte WHERE EMAIL = ?", [email])
    return rows[0]
}

async function createContact(email, name, phonenumber, reason, message) {
    await pool.query("INSERT INTO kontakte (email, name, telefonnummer, grund, nachricht) VALUES(?,?,?,?,?)", [email, name, phonenumber, reason, message])
}

async function removeContact(email) {
    await pool.query("DELETE FROM kontakte WHERE email = ?", [email])
}

const singleContact = await getSingelContact('iwas3@mail.de')
console.log(singleContact)

/*
const allContacts = await getAllContacts()
console.log(allContacts)

const erstellen = await createContact('iwas69@mail.de', 'peter', 12341234, 'Geiler Typ Eyyy', 'Lass Bumsen')
const allContacts2 = await getAllContacts()
console.log(allContacts2)

const del = await removeContact('iwas69@mail.de')
const allContacts3 = await getAllContacts()
console.log(allContacts3)
*/