CREATE TABLE `coffeebar`.`coffee` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT COMMENT 'coffee id',
  `name` VARCHAR(45) NOT NULL COMMENT 'coffee name',
  `description` VARCHAR(256) NULL COMMENT 'coffee description',
  `created_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `ix_name` (`name` ASC) VISIBLE,
  INDEX `ix_created_time` (`created_time` ASC) VISIBLE,
  INDEX `ix_updated_time` (`updated_time` ASC) VISIBLE
);

CREATE TABLE `coffeebar`.`brand` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT COMMENT 'brand id',
  `name` VARCHAR(45) NOT NULL COMMENT 'brand name',
  `description` VARCHAR(256) NULL COMMENT 'brand description',
  `created_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `ix_name` (`name` ASC) VISIBLE,
  INDEX `ix_created_time` (`created_time` ASC) VISIBLE,
  INDEX `ix_updated_time` (`updated_time` ASC) VISIBLE
);


CREATE TABLE `coffeebar`.`flavor` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT COMMENT 'flavor id',
  `name` VARCHAR(45) NOT NULL COMMENT 'flavor name',
  `created_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `ix_name` (`name` ASC) VISIBLE,
  INDEX `ix_created_time` (`created_time` ASC) VISIBLE,
  INDEX `ix_updated_time` (`updated_time` ASC) VISIBLE
);

CREATE TABLE `coffeebar`.`coffee_flavor` (
  `id` BIGINT(20) NOT NULL AUTO_INCREMENT COMMENT 'coffee flavor id\n',
  `coffee_id` BIGINT(20) NOT NULL COMMENT 'coffee id',
  `flavor_id` BIGINT(20) NOT NULL COMMENT 'flavor id',
  `created_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `ix_coffee_id` (`coffee_id` ASC) VISIBLE,
  INDEX `ix_flavor_id` (`flavor_id` ASC) VISIBLE,
  INDEX `ix_created_time` (`created_time` ASC) VISIBLE,
  INDEX `ix_updated_time` (`updated_time` ASC) VISIBLE,
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
