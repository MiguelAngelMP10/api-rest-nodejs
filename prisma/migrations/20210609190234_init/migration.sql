-- CreateTable
CREATE TABLE `city` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` CHAR(35) NOT NULL DEFAULT '',
    `CountryCode` CHAR(3) NOT NULL DEFAULT '',
    `District` CHAR(20) NOT NULL DEFAULT '',
    `Population` INTEGER NOT NULL DEFAULT 0,

    INDEX `CountryCode`(`CountryCode`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country` (
    `Code` CHAR(3) NOT NULL DEFAULT '',
    `Name` CHAR(52) NOT NULL DEFAULT '',
    `Continent` ENUM('Asia', 'Europe', 'North America', 'Africa', 'Oceania', 'Antarctica', 'South America') NOT NULL DEFAULT 'Asia',
    `Region` CHAR(26) NOT NULL DEFAULT '',
    `SurfaceArea` FLOAT NOT NULL DEFAULT 0.00,
    `IndepYear` SMALLINT,
    `Population` INTEGER NOT NULL DEFAULT 0,
    `LifeExpectancy` FLOAT,
    `GNP` FLOAT,
    `GNPOld` FLOAT,
    `LocalName` CHAR(45) NOT NULL DEFAULT '',
    `GovernmentForm` CHAR(45) NOT NULL DEFAULT '',
    `HeadOfState` CHAR(60),
    `Capital` INTEGER,
    `Code2` CHAR(2) NOT NULL DEFAULT '',

    PRIMARY KEY (`Code`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `countrylanguage` (
    `CountryCode` CHAR(3) NOT NULL DEFAULT '',
    `Language` CHAR(30) NOT NULL DEFAULT '',
    `IsOfficial` ENUM('T', 'F') NOT NULL DEFAULT 'F',
    `Percentage` FLOAT NOT NULL DEFAULT 0.0,

    INDEX `CountryCode`(`CountryCode`),
    PRIMARY KEY (`CountryCode`, `Language`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `city` ADD FOREIGN KEY (`CountryCode`) REFERENCES `country`(`Code`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `countrylanguage` ADD FOREIGN KEY (`CountryCode`) REFERENCES `country`(`Code`) ON DELETE CASCADE ON UPDATE CASCADE;
