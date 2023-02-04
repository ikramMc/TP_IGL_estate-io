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
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add annonce',7,'add_annonce'),(26,'Can change annonce',7,'change_annonce'),(27,'Can delete annonce',7,'delete_annonce'),(28,'Can view annonce',7,'view_annonce'),(29,'Can add bien immobilier',8,'add_bienimmobilier'),(30,'Can change bien immobilier',8,'change_bienimmobilier'),(31,'Can delete bien immobilier',8,'delete_bienimmobilier'),(32,'Can view bien immobilier',8,'view_bienimmobilier'),(33,'Can add user',9,'add_user'),(34,'Can change user',9,'change_user'),(35,'Can delete user',9,'delete_user'),(36,'Can view user',9,'view_user'),(37,'Can add image',10,'add_image'),(38,'Can change image',10,'change_image'),(39,'Can delete image',10,'delete_image'),(40,'Can view image',10,'view_image'),(41,'Can add message',11,'add_message'),(42,'Can change message',11,'change_message'),(43,'Can delete message',11,'delete_message'),(44,'Can view message',11,'view_message');
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
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$390000$zdofb1oSlJLa9lCny51ng1$f1s5QenB/Guw1nK6ZHiL+B1Ljq3TeidvQMeCmFRN/ec=','2023-02-01 19:12:11.243636',1,'kim','','','ki_mechitoua@esi.dz',1,1,'2023-02-01 19:11:46.539318');
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
  `date` date NOT NULL,
  `user_id` int NOT NULL,
  `bien_id` int NOT NULL,
  `Categorie` varchar(25) NOT NULL,
  PRIMARY KEY (`annonceId`),
  KEY `backend_annonce_bienId_id_26d81a91` (`bien_id`),
  KEY `backend_annonce_userId_id_675a7532` (`user_id`),
  CONSTRAINT `backend_annonce_bien_id_4c228603_fk_backend_b` FOREIGN KEY (`bien_id`) REFERENCES `backend_bienimmobilier` (`bienImmobilierId`),
  CONSTRAINT `backend_annonce_user_id_506c8d77_fk_backend_user_userId` FOREIGN KEY (`user_id`) REFERENCES `backend_user` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_annonce`
--

LOCK TABLES `backend_annonce` WRITE;
/*!40000 ALTER TABLE `backend_annonce` DISABLE KEYS */;
INSERT INTO `backend_annonce` VALUES (2,'2023-02-01',2,7,'vente'),(3,'2023-02-02',2,8,'vente'),(6,'2023-02-03',3,11,'vente'),(11,'2023-02-04',2,16,'vente');
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
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `type` varchar(25) NOT NULL,
  PRIMARY KEY (`bienImmobilierId`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_bienimmobilier`
--

LOCK TABLES `backend_bienimmobilier` WRITE;
/*!40000 ALTER TABLE `backend_bienimmobilier` DISABLE KEYS */;
INSERT INTO `backend_bienimmobilier` VALUES (7,'a4','propre et avec vaste balcon',250,250000,'r7','El Ogla El Malha','Tébessa',36.7,2.985,'appartement'),(8,'large terrain','desp',1458,1558,'ru47','Ferraoun','Béjaïa',36.81147308433131,4.868510058852871,'terrain agricole'),(11,'jf','kkg',47,14,'jvj','Sidi Makhlouf','Laghouat',36.7,2.985,'terrain agricole'),(16,'apparatement f3','description',150,4500000,'rue 14 cité...','Alger Centre','Alger',36.7,2.985,'appartement');
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
  `image` varchar(100) NOT NULL,
  `bien_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `backend_image_bienid_id_52198076` (`bien_id`),
  CONSTRAINT `backend_image_bien_id_277c0a3a_fk_backend_b` FOREIGN KEY (`bien_id`) REFERENCES `backend_bienimmobilier` (`bienImmobilierId`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_image`
--

LOCK TABLES `backend_image` WRITE;
/*!40000 ALTER TABLE `backend_image` DISABLE KEYS */;
INSERT INTO `backend_image` VALUES (4,'images/Screenshot_2022-05-25-22-21-35-09_8d474437e659656c01162bbd40f9129c.jpg',7),(5,'images/part2_9bB3stU.PNG',8),(6,'images/part1.PNG',8),(8,'images/appartement_iRueKYr.jpg',16);
/*!40000 ALTER TABLE `backend_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backend_message`
--

DROP TABLE IF EXISTS `backend_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `backend_message` (
  `msgId` int NOT NULL AUTO_INCREMENT,
  `contenu` varchar(150) NOT NULL,
  `emiteur_id` int NOT NULL,
  `recepteur_id` int NOT NULL,
  PRIMARY KEY (`msgId`),
  KEY `backend_message_emiteur_id_d13e072a_fk_backend_user_userId` (`emiteur_id`),
  KEY `backend_message_recepteur_id_e4801ef0_fk_backend_user_userId` (`recepteur_id`),
  CONSTRAINT `backend_message_emiteur_id_d13e072a_fk_backend_user_userId` FOREIGN KEY (`emiteur_id`) REFERENCES `backend_user` (`userId`),
  CONSTRAINT `backend_message_recepteur_id_e4801ef0_fk_backend_user_userId` FOREIGN KEY (`recepteur_id`) REFERENCES `backend_user` (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_message`
--

LOCK TABLES `backend_message` WRITE;
/*!40000 ALTER TABLE `backend_message` DISABLE KEYS */;
INSERT INTO `backend_message` VALUES (2,'hello ikram',3,2),(3,'bonjour monsieur',2,3);
/*!40000 ALTER TABLE `backend_message` ENABLE KEYS */;
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
  `tel` varchar(10) DEFAULT NULL,
  `adresse` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backend_user`
--

LOCK TABLES `backend_user` WRITE;
/*!40000 ALTER TABLE `backend_user` DISABLE KEYS */;
INSERT INTO `backend_user` VALUES (2,'Mechitoua','Ikram','ki_mechitoua@esi.dz',NULL,NULL),(3,'ok','kimkim','kiimokko@gmail.com',NULL,NULL);
/*!40000 ALTER TABLE `backend_user` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2023-02-01 19:46:53.570922','3','BienImmobilier object (3)',3,'',8,1),(2,'2023-02-01 19:46:53.649649','2','BienImmobilier object (2)',3,'',8,1),(3,'2023-02-01 19:46:53.837442','1','BienImmobilier object (1)',3,'',8,1),(4,'2023-02-01 19:47:15.795112','1','User object (1)',3,'',9,1),(5,'2023-02-01 20:08:19.593652','1','Annonce object (1)',3,'',7,1),(6,'2023-02-01 20:08:30.341110','6','BienImmobilier object (6)',3,'',8,1),(7,'2023-02-01 20:08:30.382998','5','BienImmobilier object (5)',3,'',8,1),(8,'2023-02-01 20:08:30.411963','4','BienImmobilier object (4)',3,'',8,1),(9,'2023-02-01 21:06:30.003786','2','Annonce object (2)',2,'[{\"changed\": {\"fields\": [\"Date\"]}}]',7,1),(10,'2023-02-03 07:09:52.251665','1','Message object (1)',3,'',11,1),(11,'2023-02-03 07:58:06.818171','9','BienImmobilier object (9)',3,'',8,1),(12,'2023-02-04 08:24:29.658637','15','BienImmobilier object (15)',3,'',8,1),(13,'2023-02-04 08:24:29.694002','14','BienImmobilier object (14)',3,'',8,1),(14,'2023-02-04 08:24:29.723600','13','BienImmobilier object (13)',3,'',8,1),(15,'2023-02-04 08:24:29.760440','12','BienImmobilier object (12)',3,'',8,1),(16,'2023-02-04 09:18:01.209448','3','Annonce object (3)',2,'[{\"changed\": {\"fields\": [\"Date\"]}}]',7,1),(17,'2023-02-04 15:30:47.025491','7','BienImmobilier object (7)',2,'[{\"changed\": {\"fields\": [\"Description\", \"Surface\", \"Prix\"]}}]',8,1),(18,'2023-02-04 15:31:15.320111','10','BienImmobilier object (10)',3,'',8,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(7,'backend','annonce'),(8,'backend','bienimmobilier'),(10,'backend','image'),(11,'backend','message'),(9,'backend','user'),(5,'contenttypes','contenttype'),(6,'sessions','session');
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
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2023-02-01 18:18:44.263397'),(2,'auth','0001_initial','2023-02-01 18:18:49.376013'),(3,'admin','0001_initial','2023-02-01 18:18:50.130089'),(4,'admin','0002_logentry_remove_auto_add','2023-02-01 18:18:50.213352'),(5,'admin','0003_logentry_add_action_flag_choices','2023-02-01 18:18:50.280950'),(6,'contenttypes','0002_remove_content_type_name','2023-02-01 18:18:50.680511'),(7,'auth','0002_alter_permission_name_max_length','2023-02-01 18:18:50.988067'),(8,'auth','0003_alter_user_email_max_length','2023-02-01 18:18:51.123359'),(9,'auth','0004_alter_user_username_opts','2023-02-01 18:18:51.182068'),(10,'auth','0005_alter_user_last_login_null','2023-02-01 18:18:51.530365'),(11,'auth','0006_require_contenttypes_0002','2023-02-01 18:18:51.798354'),(12,'auth','0007_alter_validators_add_error_messages','2023-02-01 18:18:52.090285'),(13,'auth','0008_alter_user_username_max_length','2023-02-01 18:18:52.795752'),(14,'auth','0009_alter_user_last_name_max_length','2023-02-01 18:18:53.107410'),(15,'auth','0010_alter_group_name_max_length','2023-02-01 18:18:53.260027'),(16,'auth','0011_update_proxy_permissions','2023-02-01 18:18:53.322767'),(17,'auth','0012_alter_user_first_name_max_length','2023-02-01 18:18:53.595986'),(18,'backend','0001_initial','2023-02-01 18:18:54.089471'),(19,'backend','0002_rename_bienimmobilerid_bienimmobilier_bienimmobilierid','2023-02-01 18:18:54.206917'),(20,'backend','0003_image','2023-02-01 18:18:54.408209'),(21,'backend','0004_alter_image_image','2023-02-01 18:18:54.464030'),(22,'backend','0005_alter_image_image','2023-02-01 18:18:54.705080'),(23,'backend','0006_alter_image_image','2023-02-01 18:18:54.929075'),(24,'backend','0007_alter_image_image','2023-02-01 18:18:54.982066'),(25,'backend','0008_bienimmobilier_adresse_bienimmobilier_commune_and_more','2023-02-01 18:18:55.416209'),(26,'backend','0009_alter_annonce_bienid','2023-02-01 18:18:55.853904'),(27,'backend','0010_alter_annonce_bienid','2023-02-01 18:18:56.211397'),(28,'backend','0011_alter_user_adresse_alter_user_tel','2023-02-01 18:18:56.279813'),(29,'backend','0012_alter_user_adresse_alter_user_tel','2023-02-01 18:18:56.679102'),(30,'backend','0013_alter_user_adresse_alter_user_tel','2023-02-01 18:18:56.764838'),(31,'backend','0014_bienimmobilier_latitude_bienimmobilier_longitude','2023-02-01 18:18:57.075300'),(32,'backend','0015_message','2023-02-01 18:18:57.604322'),(33,'backend','0016_message_recepteurid_alter_message_emiteurid','2023-02-01 18:18:57.979253'),(34,'backend','0017_message_contenu','2023-02-01 18:18:58.145787'),(35,'backend','0018_annonce_categorie','2023-02-01 18:18:58.362546'),(36,'backend','0019_bienimmobilier_type','2023-02-01 18:18:58.531240'),(37,'backend','0020_alter_annonce_userid_alter_image_bienid','2023-02-01 18:18:59.529346'),(38,'backend','0021_alter_image_bienid','2023-02-01 18:18:59.780219'),(39,'backend','0022_alter_annonce_userid','2023-02-01 18:19:00.046420'),(40,'backend','0023_alter_annonce_userid_alter_image_bienid','2023-02-01 18:19:00.907296'),(41,'backend','0024_rename_bienid_annonce_bien_and_more','2023-02-01 18:19:04.004895'),(42,'sessions','0001_initial','2023-02-01 18:19:04.485653'),(43,'backend','0025_alter_bienimmobilier_type','2023-02-01 20:02:41.074500');
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
INSERT INTO `django_session` VALUES ('ijcmzbc972517wbjrsu33f8bnx3atzvq','.eJxVjDsOwyAQBe9CHSE-xuCU6X0GtOwuwUlkJGNXUe4eIblI2jcz7y0iHHuJR-MtLiSuQovL75YAn7x2QA9Y71ViXfdtSbIr8qRNzpX4dTvdv4MCrfTaTt5iYJWyBxwy-jDANJJDmtCAc8lhdgrYBqt0cCYYGhOTzj4BGy0-X_-EOJQ:1pNIWh:3HzwOCYaFc6fA_7FWJUzW-E_rPQszMuwzps__v_31F8','2023-02-15 19:12:11.283980');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-02-04 16:32:07
