<?php
/**
 * This file is used to declare all Gutenberg blocks
 */

$blocks = [
    [
        'name' => 'hero',
        'title' => __('Hero'),
        'description' => __('Hero block mainly used on the homepage'),
        'render_template' => 'blocks/content-hero.php',
        'category' => 'widgets',
        'icon' => 'admin-home',
        'mode' => 'preview',
        'supports' => [
            'align' => false,
            'mode' => false,
            'multiple' => false,
        ],
        'keywords' => ['home', 'hero'],
    ], [
        'name' => 'home-introduction',
        'title' => __('Home Introduction'),
        'description' => __('Introduction used on the homepage'),
        'render_template' => 'blocks/content-home-intro.php',
        'category' => 'widgets',
        'icon' => 'admin-home',
        'mode' => 'preview',
        'supports' => [
            'align' => false,
            'mode' => false,
            'multiple' => false,
        ],
        'keywords' => ['home', 'introduction'],
    ],
];

add_action('acf/init', function () use ($blocks) {
    if (function_exists('acf_register_block')) {
        foreach ($blocks as $block) {
            acf_register_block($block);
        }
    }
});
