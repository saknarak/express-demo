CREATE TABLE `classroom` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`code` CHAR(11) NOT NULL DEFAULT '000-000-000' COLLATE 'utf8mb4_unicode_ci',
	`name` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_unicode_ci',
	`teacher` VARCHAR(50) NOT NULL DEFAULT '' COLLATE 'utf8mb4_unicode_ci',
	`created_at` DATETIME NOT NULL DEFAULT '0000-00-00 00:00:00',
	PRIMARY KEY (`id`),
	UNIQUE INDEX `uk_code` (`code`)
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB
;
