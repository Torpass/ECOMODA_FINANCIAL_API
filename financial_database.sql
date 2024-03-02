-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: ECOMODA_FINANCE
-- ------------------------------------------------------
-- Server version	8.0.36

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
-- Table structure for table `ACCOUNTS`
--

DROP TABLE IF EXISTS `ACCOUNTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ACCOUNTS` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(256) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `DEPARTMENTS`
--

DROP TABLE IF EXISTS `DEPARTMENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DEPARTMENTS` (
  `id` int NOT NULL,
  `description` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Description_UNIQUE` (`description`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `FINANCIAL_BACKGROUND`
--

DROP TABLE IF EXISTS `FINANCIAL_BACKGROUND`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FINANCIAL_BACKGROUND` (
  `request_id` int NOT NULL,
  `finanacial_record_id` int NOT NULL,
  PRIMARY KEY (`request_id`,`finanacial_record_id`),
  KEY `fk_FINANCIAL_BACKGROUND_RECORD_idx` (`finanacial_record_id`),
  CONSTRAINT `fk_FINANCIAL_BACKGROUND_RECORD` FOREIGN KEY (`finanacial_record_id`) REFERENCES `FINANCIAL_RECORD` (`id`),
  CONSTRAINT `fk_FINANCIAL_BACKGROUND_REQUESTS` FOREIGN KEY (`request_id`) REFERENCES `REQUESTS` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `FINANCIAL_RECORD`
--

DROP TABLE IF EXISTS `FINANCIAL_RECORD`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `FINANCIAL_RECORD` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` enum('DEBE','HABER') NOT NULL COMMENT '"debe" and "haber" represents incoms and outcomes in that record',
  `description` varchar(45) NOT NULL,
  `amount` float NOT NULL,
  `account_id` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_FINANCIAL_RECORD_ACCOUNTS_idx` (`account_id`),
  CONSTRAINT `fk_FINANCIAL_RECORD_ACCOUNT` FOREIGN KEY (`account_id`) REFERENCES `ACCOUNTS` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `REQUESTS`
--

DROP TABLE IF EXISTS `REQUESTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `REQUESTS` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` float NOT NULL,
  `description` varchar(45) NOT NULL,
  `user_id` int NOT NULL,
  `type_id` int NOT NULL,
  `status` varchar(45) NOT NULL COMMENT 'status:{\\n	0:"en espera",\\n	1: "Aceptada",\\n	2:"rechazada"\\n}',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_REQUESTS_USER_idx` (`user_id`),
  KEY `fk_REQUESTS_TYPE_REQUEST_idx` (`type_id`),
  CONSTRAINT `fk_REQUESTS_TYPE_REQUEST` FOREIGN KEY (`type_id`) REFERENCES `REQUESTS_TYPES` (`id`),
  CONSTRAINT `fk_REQUESTS_USER` FOREIGN KEY (`user_id`) REFERENCES `USERS` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `REQUESTS_TYPES`
--

DROP TABLE IF EXISTS `REQUESTS_TYPES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `REQUESTS_TYPES` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `ROLES`
--

DROP TABLE IF EXISTS `ROLES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ROLES` (
  `id` int NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `USERS`
--

DROP TABLE IF EXISTS `USERS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `USERS` (
  `id` int NOT NULL,
  `email` varchar(256) DEFAULT NULL,
  `password` varchar(64) DEFAULT NULL,
  `department_id` varchar(45) DEFAULT NULL,
  `rol_id` int DEFAULT NULL,
  `USERScol` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_USER_ROL` FOREIGN KEY (`id`) REFERENCES `ROLES` (`id`),
  CONSTRAINT `fk_USERS_DEPARTMENT` FOREIGN KEY (`id`) REFERENCES `DEPARTMENTS` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-01 21:05:08
