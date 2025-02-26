Portfolio Website

💻 Technologien

Dieses Projekt verwendet folgende Technologien:

HTML, CSS, JavaScript – Frontend-Entwicklung und Benutzeroberfläche

Node.js & Express – Backend-Server und API-Handling

MySQL – Datenbank zur Speicherung von Projekten und Kontaktanfragen

🔧 Einrichtung

1. Repository klonen

git clone https://github.com/VladVanDayum/portfolio.git
cd portfolio

2. Abhängigkeiten installieren

"Installation von Software.pdf"

3. .env Datei erstellen

Eine .env-Datei muss manuell im Root-Verzeichnis erstellt und mit den folgenden Konfigurationsdaten gefüllt werden:

DB_HOST=dein-datenbank-host
DB_USER=dein-benutzername
DB_PASSWORD=dein-passwort
DB_NAME=portfolio_db

Hinweis: Die .env-Datei speichert sensible Konfigurationsdaten wie Datenbank-Zugangsdaten, API-Schlüssel, Passwörter und Server-Einstellungen. Diese Datei sollte nicht mit in das Repository hochgeladen werden.

4. Datenbank einrichten

Die Datenbank muss mit der beiliegenden portfolio_db.sql Datei initialisiert werden:

MySQL-Server starten.

Die Datei portfolio_db.sql in MySQL importieren.

Sicherstellen, dass die Datenbank-Verbindung korrekt ist.

5. Server starten

cd .\Portfolio\scr\Database\

npm run dev

Im Terminal ist die Webseite hinter der Ausgabe "Server is running on" -> http://besipieldomain erreichbar.

🌟 Funktionen

Dieses Portfolio ist eine dynamische Webseite mit einer MySQL-Datenbank zur Speicherung und Verwaltung von Projekten sowie Kontaktanfragen. Die Webseite beinhaltet folgende Sektionen:

Home – Ein Begrüßungsbereich mit Typing-Effekt und einem Bild von mir.

Biografie – Eine kurze Vorstellung mit einem Download-Link zum Lebenslauf.

Projekte – Eine interaktive Übersicht über Projekte mit Bild und Beschreibung.

Kontakt – Ein Kontaktformular zur Kontaktaufnahme, das direkt mit der Datenbank verbunden ist.

Datenbank-Integration

Die Projekte werden mit Titel, Beschreibung, verwendeten Technologien und Bildpfad in MySQL gespeichert und dynamisch auf der Seite dargestellt.

Das Kontaktformular speichert Name, E-Mail, Grund und Nachricht in der Datenbank.

Node.js und Express verwalten die Datenbankverbindung und die Bereitstellung der Webseite.

🛠️ Weiterentwicklung

Geplante Erweiterungen umfassen:

Admin-Bereich zur Verwaltung der Projekte

Verbesserte UI mit Animationen

Responsive Design für mobile Endgeräte
