-- CreateTable
CREATE TABLE `tb_note` (
    `id` VARCHAR(40) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
