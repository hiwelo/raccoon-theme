<?php
/**
 * Declare navigations
 */

add_action('after_setup_theme', function () {
    register_nav_menus([
        'primary_navigation' => 'Primary navigation',
    ]);
});
