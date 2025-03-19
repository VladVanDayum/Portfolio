/**
 * Database Access Module for Portfolio Website
 * 
 * This module provides all necessary functions to interact with
 * the MySQL database.
 * 
 * @module db
 * @author Wladislaw Stepanenko
 */

import mysql from 'mysql2'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

/**
 * MySQL connection pool
 * Configuration is loaded from environment variables
 * @type {mysql.Pool}
 */
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB
}).promise()

/**
 * Project Table Operations
 * -----------------------
 * Functions for managing project data
 */

/**
 * Fetches all projects from the database
 * @returns {Promise<Array>} Array of all project objects
 */
export async function getAllProjekts() {
    const [rows] = await pool.query("SELECT * FROM projekte")
    return rows
}

/**
 * Retrieves a specific project by ID
 * @param {number} id - The project ID to retrieve
 * @returns {Promise<Object>} The project object or undefined if not found
 */
export async function getOneProjekt(id) {
    const [rows] = await pool.query("SELECT * FROM projekte WHERE id = ?", [id])
    return rows[0]
}

/**
 * Creates a new project in the database
 * @param {string} titel - The project title
 * @param {string} beschreibung - The project description
 * @param {string} technologien - Technologies used in the project
 * @param {string} bild - Path to the project image
 * @returns {Promise<void>}
 */
export async function createProject(titel, beschreibung, technologien, bild) {
    await pool.query("INSERT INTO projekte (titel, beschreibung, technologien, bild) VALUES(?, ?, ?, ?)", 
        [titel, beschreibung, technologien, bild]);
}

/**
 * Deletes a project from the database
 * @param {number} id - The ID of the project to remove
 * @returns {Promise<void>}
 */
export async function removeProject(id) {
    await pool.query("DELETE FROM projekte WHERE id = ?", [id])
}

/**
 * Updates all editable fields of a project
 * @param {number} id - The project ID to update
 * @param {string} titel - The new title
 * @param {string} beschreibung - The new description
 * @param {string} technologien - The new technologies
 * @returns {Promise<void>}
 */
export async function updateProject(id, titel, beschreibung, technologien) {
    await pool.query("UPDATE projekte SET titel = ?, beschreibung = ?, technologien = ? WHERE id = ?", 
        [titel, beschreibung, technologien, id])
}

/**
 * Updates only the title of a project
 * @param {number} id - The project ID to update
 * @param {string} titel - The new title
 * @returns {Promise<void>}
 */
export async function updateProjectTitle(id, titel) {
    await pool.query("UPDATE projekte SET titel = ? WHERE id = ?", [titel, id])
}

/**
 * Updates only the description of a project
 * @param {number} id - The project ID to update
 * @param {string} beschreibung - The new description
 * @returns {Promise<void>}
 */
export async function updateProjectInfo(id, beschreibung) {
    await pool.query("UPDATE projekte SET beschreibung = ? WHERE id = ?", [beschreibung, id])
}

/**
 * Updates only the technologies of a project
 * @param {number} id - The project ID to update
 * @param {string} technologien - The new technologies
 * @returns {Promise<void>}
 */
export async function updateProjectTech(id, technologien) {
    await pool.query("UPDATE projekte SET technologien = ? WHERE id = ?", [technologien, id])
}

/**
 * Contact Table Operations
 * -----------------------
 * Functions for managing contact requests
 */

/**
 * Fetches all contact entries from the database
 * @returns {Promise<Array>} Array of all contact objects
 */
export async function getAllContacts() {
    const [rows] = await pool.query("SELECT * FROM kontakte")
    return rows
}

/**
 * Retrieves a specific contact by email
 * @param {string} email - The email address to look up
 * @returns {Promise<Object>} The contact object or undefined if not found
 */
export async function getOneContact(email) {
    const [rows] = await pool.query("SELECT * FROM kontakte WHERE EMAIL = ?", [email])
    return rows[0]
}

/**
 * Creates a new contact entry in the database
 * @param {string} email - Contact's email address
 * @param {string} name - Contact's name
 * @param {string} grund - Reason for contact
 * @param {string} nachricht - Message content
 * @returns {Promise<void>}
 */
export async function createContact(email, name, grund, nachricht) {
    await pool.query("INSERT INTO kontakte (email, name, grund, nachricht) VALUES (?, ?, ?, ?)", 
        [email, name, grund, nachricht]);
}

/**
 * Deletes a contact entry from the database
 * @param {string} email - The email address of the contact to remove
 * @returns {Promise<void>}
 */
export async function removeContact(email) {
    await pool.query("DELETE FROM kontakte WHERE email = ?", [email])
}