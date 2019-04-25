--
-- Database: `burgers_db`
--
CREATE DATABASE burgers_db;

USE burgers_db;


--
-- Table structure for table `burgers`
--
CREATE TABLE IF NOT EXISTS `tasks` (
  `id` int(11) NOT NULL,
  `task` varchar(200) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

--
-- Indexes for table `burgers`
--
ALTER TABLE `burgers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `burgers`
--
ALTER TABLE `burgers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;
