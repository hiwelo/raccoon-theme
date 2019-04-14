<?php

// Bootstrapping theme
require_once __DIR__ . '/app/bootstrap.php';

// Register navigations
require_once __DIR__ . '/navigation.php';

// Register blocks for Gutenberg
require_once __DIR__ . '/blocks.php';

// Register option pages
require_once __DIR__ . '/options.php';

// Register some information in Twig context
require_once __DIR__ . '/context.php';
