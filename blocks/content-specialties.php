<?php
/**
 * This is the template that renders the specialties block
 */
?>
<section class="specialties">
    <h2 class="specialties__title"><?php the_field('title'); ?></h2>
    <ul class="specialties__list">
        <?php
        if (have_rows('specialties')) :
            while (have_rows('specialties')) : the_row();
                ?>
                <li class="specialties__item">
                    <h3 class="specialties__subtitle"><?php the_sub_field('title'); ?></h3>
                    <div class="specialties__abstract"><?php the_sub_field('content'); ?></div>
                    <?php if (get_sub_field('target')) : ?>
                        <a class="specialties__link" href="<?php the_sub_field('target'); ?>">
                            <?php the_sub_field('target_label'); ?>
                            <svg height="20" width="20" viewBox="0 0 20 20">
                                <path d="M9.163 4.516c0.418 0.408 4.502 4.695 4.502 4.695 0.223 0.219 0.335 0.504 0.335 0.789s-0.112 0.57-0.335 0.787c0 0-4.084 4.289-4.502 4.695-0.418 0.408-1.17 0.436-1.615 0-0.446-0.434-0.481-1.041 0-1.574l3.747-3.908-3.747-3.908c-0.481-0.533-0.446-1.141 0-1.576s1.197-0.409 1.615 0z" />
                            </svg>
                        </a>
                    <?php endif; ?>
                </li>
            <?php endwhile; ?>
        <?php endif; ?>
    </ul>
</section><!-- .specialties -->
