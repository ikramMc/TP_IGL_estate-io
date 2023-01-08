-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: ai_app
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) DEFAULT NULL,
  `prenom` varchar(45) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `annonce`
--

DROP TABLE IF EXISTS `annonce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `annonce` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` date NOT NULL,
  `userid` int unsigned DEFAULT NULL,
  `bienid` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `iduser_idx` (`userid`),
  KEY `id_idx` (`bienid`),
  CONSTRAINT `bienid` FOREIGN KEY (`bienid`) REFERENCES `bien_immobilier` (`id`),
  CONSTRAINT `userid` FOREIGN KEY (`userid`) REFERENCES `user` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `annonce`
--

LOCK TABLES `annonce` WRITE;
/*!40000 ALTER TABLE `annonce` DISABLE KEYS */;
/*!40000 ALTER TABLE `annonce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add annonce',7,'add_annonce'),(26,'Can change annonce',7,'change_annonce'),(27,'Can delete annonce',7,'delete_annonce'),(28,'Can view annonce',7,'view_annonce'),(29,'Can add bien immobilier',8,'add_bienimmobilier'),(30,'Can change bien immobilier',8,'change_bienimmobilier'),(31,'Can delete bien immobilier',8,'delete_bienimmobilier'),(32,'Can view bien immobilier',8,'view_bienimmobilier'),(33,'Can add user',9,'add_user'),(34,'Can change user',9,'change_user'),(35,'Can delete user',9,'delete_user'),(36,'Can view user',9,'view_user'),(37,'Can add image',10,'add_image'),(38,'Can change image',10,'change_image'),(39,'Can delete image',10,'delete_image'),(40,'Can view image',10,'view_image');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$390000$MYyh5nPnkfsNW8hGm3g3a3$TG646lFtaukb2ANrR1FM2KplO+xrr1yijFDUkZyBx/U=','2022-12-27 20:56:22.934159',1,'igl','','','ki_mechitoua@esi.dz',1,1,'2022-12-27 20:55:57.005464');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backend_annonce`
--

DROP TABLE IF EXISTS `backend_annonce`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backend_annonce` (
  `annonceId` int NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `userId` int NOT NULL,
  `bienId` int NOT NULL,
  PRIMARY KEY (`annonceId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_annonce`
--

LOCK TABLES `backend_annonce` WRITE;
/*!40000 ALTER TABLE `backend_annonce` DISABLE KEYS */;
INSERT INTO `backend_annonce` VALUES (8,'2022-11-29',1,52);
/*!40000 ALTER TABLE `backend_annonce` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backend_bienimmobilier`
--

DROP TABLE IF EXISTS `backend_bienimmobilier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backend_bienimmobilier` (
  `bienImmobilierId` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `surface` int NOT NULL,
  `prix` int NOT NULL,
  `adresse` varchar(80) NOT NULL,
  `commune` varchar(45) NOT NULL,
  `wilaya` varchar(45) NOT NULL,
  PRIMARY KEY (`bienImmobilierId`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_bienimmobilier`
--

LOCK TABLES `backend_bienimmobilier` WRITE;
/*!40000 ALTER TABLE `backend_bienimmobilier` DISABLE KEYS */;
INSERT INTO `backend_bienimmobilier` VALUES (52,'vila 4 etage','belle propre et securisé',150,2000000,'cité sidi mohamed','Meridja','Béchar');
/*!40000 ALTER TABLE `backend_bienimmobilier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backend_image`
--

DROP TABLE IF EXISTS `backend_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backend_image` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `bienid` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_image`
--

LOCK TABLES `backend_image` WRITE;
/*!40000 ALTER TABLE `backend_image` DISABLE KEYS */;
INSERT INTO `backend_image` VALUES (24,'images/2_4EhUXj3.jpg',52),(25,'images/2_PpVH4w4.jpg',52);
/*!40000 ALTER TABLE `backend_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backend_user`
--

DROP TABLE IF EXISTS `backend_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backend_user` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(45) NOT NULL,
  `prenom` varchar(45) NOT NULL,
  `email` varchar(50) NOT NULL,
  `tel` varchar(10) NOT NULL,
  `adresse` varchar(50) NOT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_user`
--

LOCK TABLES `backend_user` WRITE;
/*!40000 ALTER TABLE `backend_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `backend_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bien_immobilier`
--

DROP TABLE IF EXISTS `bien_immobilier`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bien_immobilier` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `titre` varchar(45) NOT NULL,
  `description` varchar(500) NOT NULL,
  `surface` int unsigned NOT NULL,
  `prix` int unsigned NOT NULL,
  `type` enum('vente','echange','location','location pour vacances') NOT NULL,
  `wilaya` varchar(45) NOT NULL,
  `commune` varchar(45) NOT NULL,
  `adresse` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bien_immobilier`
--

LOCK TABLES `bien_immobilier` WRITE;
/*!40000 ALTER TABLE `bien_immobilier` DISABLE KEYS */;
/*!40000 ALTER TABLE `bien_immobilier` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=80 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2022-12-28 10:08:02.201775','1','BienImmobilier object (1)',1,'[{\"added\": {}}]',8,1),(2,'2022-12-28 10:59:29.397669','8','BienImmobilier object (8)',3,'',8,1),(3,'2022-12-28 11:20:54.287547','13','BienImmobilier object (13)',3,'',8,1),(4,'2022-12-28 11:20:54.316867','12','BienImmobilier object (12)',3,'',8,1),(5,'2022-12-28 11:20:54.571059','11','BienImmobilier object (11)',3,'',8,1),(6,'2022-12-28 11:20:54.624922','10','BienImmobilier object (10)',3,'',8,1),(7,'2022-12-28 11:20:54.645868','9','BienImmobilier object (9)',3,'',8,1),(8,'2022-12-28 11:20:54.668909','7','BienImmobilier object (7)',3,'',8,1),(9,'2022-12-28 11:20:54.690806','6','BienImmobilier object (6)',3,'',8,1),(10,'2022-12-28 11:20:54.712699','5','BienImmobilier object (5)',3,'',8,1),(11,'2022-12-28 11:20:54.734648','4','BienImmobilier object (4)',3,'',8,1),(12,'2022-12-28 11:20:54.756879','3','BienImmobilier object (3)',3,'',8,1),(13,'2022-12-28 11:20:54.778513','2','BienImmobilier object (2)',3,'',8,1),(14,'2022-12-28 11:21:07.743272','17','BienImmobilier object (17)',3,'',8,1),(15,'2022-12-28 11:21:07.785159','16','BienImmobilier object (16)',3,'',8,1),(16,'2022-12-28 11:21:07.809161','15','BienImmobilier object (15)',3,'',8,1),(17,'2022-12-28 11:21:07.830892','14','BienImmobilier object (14)',3,'',8,1),(18,'2022-12-28 14:19:31.747254','4','Image object (4)',1,'[{\"added\": {}}]',10,1),(19,'2022-12-28 14:26:22.622948','4','Image object (4)',3,'',10,1),(20,'2022-12-28 14:26:36.173773','5','Image object (5)',1,'[{\"added\": {}}]',10,1),(21,'2022-12-28 14:30:25.942784','5','Image object (5)',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',10,1),(22,'2022-12-28 14:43:40.691771','5','Image object (5)',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',10,1),(23,'2022-12-28 14:58:57.073237','6','Image object (6)',1,'[{\"added\": {}}]',10,1),(24,'2022-12-28 14:59:08.081753','6','Image object (6)',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',10,1),(25,'2022-12-28 14:59:15.332617','5','Image object (5)',3,'',10,1),(26,'2022-12-28 15:30:28.152378','7','Image object (7)',2,'[{\"changed\": {\"fields\": [\"Image\"]}}]',10,1),(27,'2022-12-28 18:40:48.977293','11','Image object (11)',3,'',10,1),(28,'2022-12-28 18:40:49.129449','10','Image object (10)',3,'',10,1),(29,'2022-12-28 18:40:49.198557','9','Image object (9)',3,'',10,1),(30,'2022-12-28 18:40:49.295316','8','Image object (8)',3,'',10,1),(31,'2022-12-28 18:40:49.332753','7','Image object (7)',3,'',10,1),(32,'2022-12-28 18:40:49.394814','6','Image object (6)',3,'',10,1),(33,'2022-12-28 19:17:30.325471','14','Image object (14)',3,'',10,1),(34,'2022-12-28 19:17:30.494989','13','Image object (13)',3,'',10,1),(35,'2022-12-28 19:17:30.521380','14','Image object (14)',3,'',10,1),(36,'2022-12-28 19:17:30.887547','12','Image object (12)',3,'',10,1),(37,'2022-12-28 19:17:31.509124','13','Image object (13)',3,'',10,1),(38,'2022-12-28 19:17:31.734765','12','Image object (12)',3,'',10,1),(39,'2022-12-28 19:17:44.697675','37','BienImmobilier object (37)',3,'',8,1),(40,'2022-12-28 19:17:45.669807','36','BienImmobilier object (36)',3,'',8,1),(41,'2022-12-28 19:17:46.007281','35','BienImmobilier object (35)',3,'',8,1),(42,'2022-12-28 19:17:46.095777','34','BienImmobilier object (34)',3,'',8,1),(43,'2022-12-28 19:17:46.164665','33','BienImmobilier object (33)',3,'',8,1),(44,'2022-12-28 19:17:46.203960','32','BienImmobilier object (32)',3,'',8,1),(45,'2022-12-28 19:17:46.252693','31','BienImmobilier object (31)',3,'',8,1),(46,'2022-12-28 19:17:46.292732','30','BienImmobilier object (30)',3,'',8,1),(47,'2022-12-28 19:17:46.327772','29','BienImmobilier object (29)',3,'',8,1),(48,'2022-12-28 19:17:46.369013','28','BienImmobilier object (28)',3,'',8,1),(49,'2022-12-28 19:17:46.445996','27','BienImmobilier object (27)',3,'',8,1),(50,'2022-12-28 19:17:46.491400','26','BienImmobilier object (26)',3,'',8,1),(51,'2022-12-28 19:17:46.530331','25','BienImmobilier object (25)',3,'',8,1),(52,'2022-12-28 19:17:46.618110','24','BienImmobilier object (24)',3,'',8,1),(53,'2022-12-28 19:17:46.668138','23','BienImmobilier object (23)',3,'',8,1),(54,'2022-12-28 19:17:46.706864','22','BienImmobilier object (22)',3,'',8,1),(55,'2022-12-28 19:17:46.729764','21','BienImmobilier object (21)',3,'',8,1),(56,'2022-12-28 19:17:46.773516','20','BienImmobilier object (20)',3,'',8,1),(57,'2022-12-28 19:17:46.840639','19','BienImmobilier object (19)',3,'',8,1),(58,'2022-12-28 19:17:46.879024','18','BienImmobilier object (18)',3,'',8,1),(59,'2022-12-28 19:17:46.917950','1','BienImmobilier object (1)',3,'',8,1),(60,'2022-12-28 19:23:48.349776','19','Image object (19)',3,'',10,1),(61,'2022-12-28 19:23:48.493301','18','Image object (18)',3,'',10,1),(62,'2022-12-28 19:23:48.530798','17','Image object (17)',3,'',10,1),(63,'2022-12-28 19:23:48.592222','16','Image object (16)',3,'',10,1),(64,'2022-12-28 19:23:48.650323','15','Image object (15)',3,'',10,1),(65,'2022-12-28 19:23:58.290641','40','BienImmobilier object (40)',3,'',8,1),(66,'2022-12-28 19:23:58.454345','39','BienImmobilier object (39)',3,'',8,1),(67,'2022-12-28 19:23:58.492551','38','BienImmobilier object (38)',3,'',8,1),(68,'2022-12-28 19:39:33.326626','1','Annonce object (1)',1,'[{\"added\": {}}]',7,1),(69,'2022-12-29 08:42:41.209959','7','Annonce object (7)',3,'',7,1),(70,'2022-12-29 08:42:41.347792','6','Annonce object (6)',3,'',7,1),(71,'2022-12-29 08:42:41.386040','5','Annonce object (5)',3,'',7,1),(72,'2022-12-29 08:42:41.435912','4','Annonce object (4)',3,'',7,1),(73,'2022-12-29 08:42:41.496476','3','Annonce object (3)',3,'',7,1),(74,'2022-12-29 08:42:41.534726','2','Annonce object (2)',3,'',7,1),(75,'2022-12-29 08:42:41.573682','1','Annonce object (1)',3,'',7,1),(76,'2022-12-29 08:42:53.096449','23','Image object (23)',3,'',10,1),(77,'2022-12-29 08:42:53.127107','22','Image object (22)',3,'',10,1),(78,'2022-12-29 08:42:53.166783','21','Image object (21)',3,'',10,1),(79,'2022-12-29 08:42:53.198527','20','Image object (20)',3,'',10,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(7,'backend','annonce'),(8,'backend','bienimmobilier'),(10,'backend','image'),(9,'backend','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2022-12-27 20:50:17.761122'),(2,'auth','0001_initial','2022-12-27 20:50:21.776044'),(3,'admin','0001_initial','2022-12-27 20:50:22.479548'),(4,'admin','0002_logentry_remove_auto_add','2022-12-27 20:50:22.538547'),(5,'admin','0003_logentry_add_action_flag_choices','2022-12-27 20:50:22.591873'),(6,'contenttypes','0002_remove_content_type_name','2022-12-27 20:50:22.958442'),(7,'auth','0002_alter_permission_name_max_length','2022-12-27 20:50:23.231050'),(8,'auth','0003_alter_user_email_max_length','2022-12-27 20:50:23.358236'),(9,'auth','0004_alter_user_username_opts','2022-12-27 20:50:23.425758'),(10,'auth','0005_alter_user_last_login_null','2022-12-27 20:50:23.774857'),(11,'auth','0006_require_contenttypes_0002','2022-12-27 20:50:23.799170'),(12,'auth','0007_alter_validators_add_error_messages','2022-12-27 20:50:23.854468'),(13,'auth','0008_alter_user_username_max_length','2022-12-27 20:50:24.261034'),(14,'auth','0009_alter_user_last_name_max_length','2022-12-27 20:50:24.625868'),(15,'auth','0010_alter_group_name_max_length','2022-12-27 20:50:24.759621'),(16,'auth','0011_update_proxy_permissions','2022-12-27 20:50:24.871844'),(17,'auth','0012_alter_user_first_name_max_length','2022-12-27 20:50:25.230148'),(18,'backend','0001_initial','2022-12-27 20:50:25.825469'),(19,'backend','0002_rename_bienimmobilerid_bienimmobilier_bienimmobilierid','2022-12-27 20:50:25.941989'),(20,'sessions','0001_initial','2022-12-27 20:50:26.233625'),(21,'backend','0003_image','2022-12-27 21:21:22.115872'),(22,'backend','0004_alter_image_image','2022-12-28 08:09:35.299806'),(23,'backend','0005_alter_image_image','2022-12-28 14:16:46.593712'),(24,'backend','0006_alter_image_image','2022-12-28 14:16:47.942994'),(25,'backend','0007_alter_image_image','2022-12-28 14:36:23.817570'),(26,'backend','0008_bienimmobilier_adresse_bienimmobilier_commune_and_more','2022-12-29 08:40:31.060364');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('c36ften354v6y052aly28xc5u257s3vz','.eJxVjDsOwyAQRO9CHSEwMp-U6XMGtLsswUkEkrErK3ePLblIminmvZlNRFiXEtfOc5ySuAotLr8dAr24HiA9oT6apFaXeUJ5KPKkXd5b4vftdP8OCvSyryEEbaxSODokM6acslcDK6ZgERxxIAXoVXZkzZ6arA5uSOy11eC8-HwB71Y4BA:1pAGzn:QT_scizQDk2ChuvArCtqn-zthlkhh9hVeoWQ27Zqolo','2023-01-10 20:56:23.021346');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image`
--

DROP TABLE IF EXISTS `image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `image` (
  `imageid` int NOT NULL AUTO_INCREMENT,
  `image` varchar(100) DEFAULT NULL,
  `bienid` int unsigned NOT NULL,
  PRIMARY KEY (`imageid`),
  UNIQUE KEY `imageid_UNIQUE` (`imageid`),
  KEY `id_idx` (`bienid`),
  CONSTRAINT `id` FOREIGN KEY (`bienid`) REFERENCES `bien_immobilier` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image`
--

LOCK TABLES `image` WRITE;
/*!40000 ALTER TABLE `image` DISABLE KEYS */;
/*!40000 ALTER TABLE `image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `tel` varchar(10) DEFAULT 'null',
  `nom` varchar(45) DEFAULT 'null',
  `prenom` varchar(45) DEFAULT 'null',
  `adresse` varchar(70) DEFAULT 'null',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-31 17:41:14
