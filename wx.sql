/*
 Navicat Premium Data Transfer

 Source Server         : 123.60.77.21
 Source Server Type    : MySQL
 Source Server Version : 50650
 Source Host           : 123.60.77.21:3306
 Source Schema         : wx

 Target Server Type    : MySQL
 Target Server Version : 50650
 File Encoding         : 65001

 Date: 27/05/2024 15:47:24
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `Aname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Apassword` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('wyy', '123456');

-- ----------------------------
-- Table structure for commodity
-- ----------------------------
DROP TABLE IF EXISTS `commodity`;
CREATE TABLE `commodity`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `Picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Cname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Des` char(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Price` char(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Model` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `State` varchar(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of commodity
-- ----------------------------
INSERT INTO `commodity` VALUES (1, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%811.jpg', '辣条', 'cDfckH7u7f', '770.30', 'PDBaxc0m3d', '7c');
INSERT INTO `commodity` VALUES (2, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%8110.jpg', '面包', 'qaSQQigcOS', '87.89', 'OFvsHQLOnH', 'Gb');
INSERT INTO `commodity` VALUES (3, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%812.jpg', '海苔', 'MeC4jyrAmm', '27.78', '1hkPSETolU', 'DP');
INSERT INTO `commodity` VALUES (4, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%813.jpg', '洁厕灵', 'kw8RgeTNaK', '275.99', 'aECTekh8er', 'VZ');
INSERT INTO `commodity` VALUES (5, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%814.jpg', '饼干', 'ci3FfSrDRV', '415.90', 'tmX1qSiPft', 'PA');
INSERT INTO `commodity` VALUES (6, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%816.jpg', '烤肠', 'xwHL971cVU', '582.94', 'o1G0cbU0fu', 'yy');
INSERT INTO `commodity` VALUES (7, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%817.jpg', '三明治', '16HMB03bsE', '707.02', 'dAy4zp8myt', 'a7');
INSERT INTO `commodity` VALUES (8, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%818.jpg', '海绵', 'J5BfZU5LVR', '411.68', 'qBTjIey1XE', 'el');
INSERT INTO `commodity` VALUES (9, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%819.jpg', '电风扇', 'jf6Au7Pzp7', '318.21', 'eMhtWBPGzN', 'NI');
INSERT INTO `commodity` VALUES (10, 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%95%86%E5%93%815.jpg', '点读机', '02E8Az28H1', '406.58', 'AnsL5zksAu', 'np');

-- ----------------------------
-- Table structure for person
-- ----------------------------
DROP TABLE IF EXISTS `person`;
CREATE TABLE `person`  (
  `Name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Sex` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Tx` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Age` int(11) NULL DEFAULT NULL,
  `Address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of person
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NULL DEFAULT NULL,
  `Uname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Sex` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Tx` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `Age` int(11) NULL DEFAULT NULL,
  `Address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'zhangsan', '123456', '女', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F1.jpg', 30, '龙岗区布吉镇西环路795号');
INSERT INTO `user` VALUES (2, 'lisi', '123456', '男', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F9.jpg', 27, '乐丰六路868号');
INSERT INTO `user` VALUES (3, 'wangwu', '123456', '男', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F2.jpg', 26, '罗湖区田贝一路588号');
INSERT INTO `user` VALUES (4, 'zhaoliu', '123456', '女', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F3.jpg', 22, '锦江区人民南路四段650号');
INSERT INTO `user` VALUES (5, 'jia', '123456', '女', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F4.jpg', 29, '龙岗区布吉镇西环路655号');
INSERT INTO `user` VALUES (6, 'yi', '123456', '男', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F5.jpg', 28, '罗湖区蔡屋围深南东路875号');
INSERT INTO `user` VALUES (7, 'bing', '123456', '女', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F6.jpg', 20, '闵行区宾川路335号');
INSERT INTO `user` VALUES (8, 'ding', '123456', '男', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F7.jpg', 29, '罗湖区蔡屋围深南东路716号');
INSERT INTO `user` VALUES (9, 'wu', '123456', '女', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F8.jpg', 27, '天河区天河路97号');
INSERT INTO `user` VALUES (10, '仙人掌', '123456', '男', 'https://shangpin5-27.oss-cn-shanghai.aliyuncs.com/%E5%A4%B4%E5%83%8F10.jpg', 25, '东城区东单王府井东街320号');

SET FOREIGN_KEY_CHECKS = 1;
