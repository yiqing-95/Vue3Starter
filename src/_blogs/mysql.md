CREATE TABLE `tb_test` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `category_ids` json NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `b` ((cast(`category_ids` as unsigned array)))
) ENGINE=InnoDB AUTO_INCREMENT=1000001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci

SELECT
	* 
FROM
	tb_test 
WHERE
	123 member of ( category_ids ) 
	LIMIT 10;


    mysql8的json字段可以加多值索引，像标签、分类都可以用这个做了