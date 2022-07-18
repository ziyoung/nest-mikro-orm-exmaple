-- MySQL dump 10.13  Distrib 8.0.28, for macos11 (x86_64)
--
-- Host: 127.0.0.1    Database: coffeebar
-- ------------------------------------------------------
-- Server version	8.0.28

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
-- Table structure for table `coffee_flavors`
--

DROP TABLE IF EXISTS `coffee_flavors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coffee_flavors` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT 'coffee flavor id\n',
  `coffee_id` bigint NOT NULL COMMENT 'coffee id',
  `flavor_id` bigint NOT NULL COMMENT 'flavor id',
  `created_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `ix_coffee_id` (`coffee_id`),
  KEY `ix_flavor_id` (`flavor_id`),
  KEY `ix_created_time` (`created_time`),
  KEY `ix_updated_time` (`updated_time`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coffee_flavors`
--

LOCK TABLES `coffee_flavors` WRITE;
/*!40000 ALTER TABLE `coffee_flavors` DISABLE KEYS */;
INSERT INTO `coffee_flavors` VALUES (1,1,1,'2022-05-15 13:13:09','2022-05-15 13:13:09'),(2,1,2,'2022-05-15 13:13:09','2022-05-15 13:13:09'),(3,2,3,'2022-05-15 13:13:09','2022-05-15 13:13:09'),(4,2,4,'2022-05-15 13:13:09','2022-05-15 13:13:09'),(5,3,3,'2022-05-15 13:13:09','2022-05-15 13:13:09'),(6,3,4,'2022-05-15 13:13:09','2022-05-15 13:13:09'),(7,4,1,'2022-05-15 13:13:09','2022-05-15 13:13:09'),(8,4,2,'2022-05-15 13:13:09','2022-05-15 13:13:09'),(9,4,3,'2022-05-15 13:13:09','2022-05-15 13:13:09'),(10,4,4,'2022-05-15 13:13:09','2022-05-15 13:13:09');
/*!40000 ALTER TABLE `coffee_flavors` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-18 23:02:20
