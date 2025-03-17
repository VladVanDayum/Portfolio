-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: portfolio_db
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `kontakte`
--

DROP TABLE IF EXISTS `kontakte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kontakte` (
  `EMAIL` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `grund` varchar(100) NOT NULL,
  `nachricht` varchar(500) NOT NULL,
  `datum` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`EMAIL`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kontakte`
--

LOCK TABLES `kontakte` WRITE;
/*!40000 ALTER TABLE `kontakte` DISABLE KEYS */;
/*!40000 ALTER TABLE `kontakte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projekte`
--

DROP TABLE IF EXISTS `projekte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projekte` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titel` varchar(45) DEFAULT NULL,
  `beschreibung` varchar(1000) DEFAULT NULL,
  `technologien` varchar(45) DEFAULT NULL,
  `bild` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projekte`
--

LOCK TABLES `projekte` WRITE;
/*!40000 ALTER TABLE `projekte` DISABLE KEYS */;
INSERT INTO `projekte` VALUES (1,'Restaurantprogramm','Bei meinem ersten Projekt in einer Gruppe war ich an der Entwicklung der grafischen Benutzeroberfläche und der Anbindung an die Datenbank für das Restaurant-Reservierungsprogramm beteiligt. Besonders das Mitarbeitermenü, sowie weitere Menüs mit einem einheitlichen Design, habe ich unter Einsatz von Scenebuilder und CSS gestaltet.','Java, CSS, H2 Database, GitHub','Bilder/Res.png'),(2,'Zeitserver','In unserem Gruppenprojekt entwickelten wir einen Zeitserver mit einem Raspberry Pi, der über eine Platine mit Funksensor und GPS-Empfänger verbunden ist. Meine Aufgabe war die Synchronisierung der Zeit mit mehreren NTP-Servern in einem eigenen Thread. Abschließend erstellten wir eine Webseite zur Anzeige aller synchronisierten Zeiten und der Referenzzeit.','Python, HTML, CSS, GitHub','Bilder/Website.png');
/*!40000 ALTER TABLE `projekte` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-17 19:41:19
