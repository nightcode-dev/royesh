-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 27, 2022 at 06:18 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `royesh`
--

-- --------------------------------------------------------

--
-- Table structure for table `answers`
--

CREATE TABLE `answers` (
  `id` int(200) NOT NULL COMMENT 'id of answer',
  `author` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL COMMENT 'author of answer',
  `descy` longtext CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL COMMENT 'answer body',
  `answer_date` varchar(200) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL COMMENT 'time of submit answer',
  `question_id` int(150) NOT NULL COMMENT 'id of question answered it'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `answers`
--

INSERT INTO `answers` (`id`, `author`, `descy`, `answer_date`, `question_id`) VALUES
(0, 'nightcode', ' ddhjhsd ', '۲ اردیبهشت ۱۴۰۱', 0),
(34, 'nightcode', ' ddhjhsd ', '۲ اردیبهشت ۱۴۰۱', 0);

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `id` int(100) NOT NULL,
  `title` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `description` longtext CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `author` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `q_date` varchar(200) NOT NULL,
  `status` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `tag` varchar(200) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL COMMENT 'تگ ها در سرچ استفاده شده و با- جدا می شوند'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`id`, `title`, `description`, `author`, `q_date`, `status`, `tag`) VALUES
(0, 'hshhs', 'hhhzhx', 'nightcode', '۲ اردیبهشت ۱۴۰۱', 'open', 'ghxzxzgh');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `AllName` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `UserName` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `Email` varchar(150) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `Articles` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Articles`)),
  `Questions` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`Questions`)),
  `State` varchar(20) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL,
  `City` varchar(20) CHARACTER SET utf8 COLLATE utf8_persian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `AllName`, `UserName`, `password`, `Email`, `Articles`, `Questions`, `State`, `City`) VALUES
(0, 'امیرحسین آخوندزاده', 'nightcode', '1386', 'prog.nightcode@gmail.com', '[]', '[]', 'سیستان بلوچستان', 'کنارک');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answers`
--
ALTER TABLE `answers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answers`
--
ALTER TABLE `answers`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT COMMENT 'id of answer', AUTO_INCREMENT=38;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
