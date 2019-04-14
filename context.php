<?php
/**
 * Adding social networks in the Timber context for the footer
 */
add_filter('timber_context', function ($context) {
    if (have_rows('social_networks', 'options')) {
        while (have_rows('social_networks', 'options')) {
            the_row();

            $context['social_networks'][get_sub_field('icon')] = [
                'icon' => get_sub_field('icon'),
                'label' => get_sub_field('label'),
                'target' => get_sub_field('target'),
            ];
        }
    }

    return $context;
});
