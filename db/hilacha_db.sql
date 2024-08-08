-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-08-2023 a las 20:23:26
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

DROP DATABASE IF EXISTS `hilacha_db`;
CREATE DATABASE IF NOT EXISTS `hilacha_db`;
USE `hilacha_db`;


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hilacha_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_empanada`
--

CREATE TABLE `categoria_empanada` (
  `id` int(10) UNSIGNED NOT NULL,
  `categoria` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria_empanada`
--

INSERT INTO `categoria_empanada` (`id`, `categoria`) VALUES
(1, 'tradicionales'),
(2, 'canastitas'),
(3, 'premium');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_pizza`
--

CREATE TABLE `categoria_pizza` (
  `id` int(10) UNSIGNED NOT NULL,
  `categoria` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria_pizza`
--

INSERT INTO `categoria_pizza` (`id`, `categoria`) VALUES
(1, 'eternas'),
(2, 'clasicas'),
(3, 'tradicionales'),
(4, 'especiales');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empanadas`
--

CREATE TABLE `empanadas` (
  `id` int(10) UNSIGNED NOT NULL,
  `producto_id` int(11) NOT NULL,
  `sabor` text NOT NULL,
  `categoria_empanada_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `empanadas`
--

INSERT INTO `empanadas` (`id`, `producto_id`, `sabor`, `categoria_empanada_id`) VALUES
(1, 2, 'Carne a cuchillo', 1),
(2, 2, 'Carne a cuchillo picante', 1),
(3, 2, 'Carne a cuchillo con pasas', 1),
(4, 2, 'Tucumana', 1),
(5, 2, 'Pollo al verdeo con salsa blanca', 1),
(6, 2, 'Humita', 1),
(7, 2, 'Verdura', 1),
(8, 2, 'Jamón y queso', 2),
(9, 2, 'Caprese', 2),
(10, 2, 'Cebolla y queso', 2),
(11, 2, '4 quesos', 2),
(12, 2, 'Panceta', 2),
(13, 2, 'Panceta y ciruela', 2),
(14, 2, 'Calabresa', 2),
(15, 2, 'Jamón, queso y roquefort', 2),
(16, 2, 'Jamón, queso y morrón', 2),
(17, 2, 'Jamón, queso y provolone', 2),
(18, 2, 'Jamón, queso y palmitos', 2),
(19, 2, 'Jamón, queso y ananá', 2),
(20, 2, 'Jamón, queso y huevo', 2),
(21, 2, 'Lomo ahumado', 3),
(22, 2, 'Bondiola', 3),
(23, 2, 'Ratatouille', 3),
(24, 2, 'Champigñones', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pizzas`
--

CREATE TABLE `pizzas` (
  `id` int(10) UNSIGNED NOT NULL,
  `producto_id` int(11) NOT NULL,
  `sabor` text NOT NULL,
  `ingredientes` text NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `tamaño_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pizzas`
--

INSERT INTO `pizzas` (`id`, `producto_id`, `sabor`, `ingredientes`, `categoria_id`, `tamaño_id`) VALUES
(1, 1, 'Muzzarella', '', 1, 0),
(2, 1, 'Anchoa', '', 1, 0),
(3, 1, 'Pizzaiola', '', 1, 0),
(4, 1, 'Fugazza', '', 1, 0),
(5, 1, 'Muzzarella al pesto', '', 2, 0),
(6, 1, 'Muzzarella con anchoas', '', 2, 0),
(7, 1, 'Napolitana', 'Muzza, tomate, ajo, morrón y perejil', 2, 0),
(8, 1, 'Calabresa', 'Muzza, longaniza y morrón', 2, 0),
(9, 1, 'Jamón', '', 2, 0),
(10, 1, 'Provolone', '', 2, 0),
(11, 1, 'Palmitos', '', 2, 0),
(12, 1, 'Panceta', '', 2, 0),
(13, 1, 'Fugazzeta', 'Muzza, cebolla y provolone', 2, 0),
(14, 1, 'Caprese', 'Muzza, tomate y albahaca', 2, 0),
(15, 1, 'Jamón y morrones', '', 3, 0),
(16, 1, 'Jamón y  ananá', '', 3, 0),
(17, 1, 'Jamón y huevo', '', 3, 0),
(18, 1, 'Jamón y roquefort', '', 3, 0),
(19, 1, 'Jamón y palmitos', '', 3, 0),
(20, 1, 'Fugazzeta y jamón', '', 3, 0),
(21, 1, 'Fugazzeta de la casa', 'Muzza, cebolla, fugazzeta y panceta', 3, 0),
(22, 1, 'Vegetariana', 'Muzza, acelga, salsa blanca y provolone', 3, 0),
(23, 1, '7 colores', 'Muzza, huevo,  rollitos de jamón, morrón y aji en vinagre', 3, 0),
(24, 1, 'Jamón y  provolone', '', 4, 0),
(25, 1, 'Cuatro quesos', '', 4, 0),
(26, 1, 'Jamón crudo y rúcula', '', 4, 0),
(27, 1, 'Napolitana especial', 'Muzza, jamón, tomate, ajo, morrón, provolone y perejil', 4, 0),
(28, 1, 'Calabresa especial', 'Muzza, tomate, longaniza, rollitos de jamón y morrón', 4, 0),
(29, 1, 'Gran fachada', 'Muzza, tomate, huevo, rollitos de jamón y provolone', 4, 0),
(30, 1, 'Gran hilacha', 'Muzza, rollitos de jamón, palmitos, ananá y morrón', 4, 0),
(31, 1, 'Genovesa', 'Muzza, tomate, palmitos, tollitos de jamón y provolone', 4, 0),
(32, 1, 'Salerno', 'Muzza, cebolla, roquefort y panceta', 4, 0),
(33, 1, 'Americana', 'Muzza, tomate, huevo, rollitos  de jamón, papas y ketchup', 4, 0),
(34, 1, 'Fainá', '', 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precio_empanada`
--

CREATE TABLE `precio_empanada` (
  `id` int(10) UNSIGNED NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `precio` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `precio_empanada`
--

INSERT INTO `precio_empanada` (`id`, `categoria_id`, `precio`) VALUES
(1, 1, '190.00'),
(2, 2, '190.00'),
(3, 3, '210.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `precio_pizza`
--

CREATE TABLE `precio_pizza` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `tamaño_id` int(11) NOT NULL,
  `precio` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `precio_pizza`
--

INSERT INTO `precio_pizza` (`id`, `categoria_id`, `tamaño_id`, `precio`) VALUES
(1, 1, 1, '950.00'),
(2, 1, 2, '1100.00'),
(3, 1, 3, '1400.00'),
(4, 1, 4, '100.00'),
(5, 2, 1, '1200.00'),
(6, 2, 2, '1400.00'),
(7, 2, 3, '1800.00'),
(8, 3, 1, '1350.00'),
(9, 3, 2, '1600.00'),
(10, 3, 3, '2000.00'),
(11, 4, 1, '1500.00'),
(12, 4, 2, '1800.00'),
(13, 4, 3, '2200.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id` int(10) UNSIGNED NOT NULL,
  `tipo_producto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id`, `tipo_producto`) VALUES
(1, 'pizza'),
(2, 'empanada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tamaño_pizza`
--

CREATE TABLE `tamaño_pizza` (
  `id` int(10) UNSIGNED NOT NULL,
  `tamaño` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tamaño_pizza`
--

INSERT INTO `tamaño_pizza` (`id`, `tamaño`) VALUES
(1, 'chica'),
(2, 'grande'),
(3, 'gigante'),
(4, 'porción');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria_empanada`
--
ALTER TABLE `categoria_empanada`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categoria_pizza`
--
ALTER TABLE `categoria_pizza`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `empanadas`
--
ALTER TABLE `empanadas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pizzas`
--
ALTER TABLE `pizzas`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `precio_empanada`
--
ALTER TABLE `precio_empanada`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `precio_pizza`
--
ALTER TABLE `precio_pizza`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tamaño_pizza`
--
ALTER TABLE `tamaño_pizza`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria_empanada`
--
ALTER TABLE `categoria_empanada`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `categoria_pizza`
--
ALTER TABLE `categoria_pizza`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `empanadas`
--
ALTER TABLE `empanadas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `pizzas`
--
ALTER TABLE `pizzas`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `precio_empanada`
--
ALTER TABLE `precio_empanada`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `precio_pizza`
--
ALTER TABLE `precio_pizza`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tamaño_pizza`
--
ALTER TABLE `tamaño_pizza`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
