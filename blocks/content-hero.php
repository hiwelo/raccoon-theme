<?php
/**
 * This is the template that renders the hero block
 */

$fields = [
    'salutations' => get_field('salutations'),
    'content' => get_field('content'),
    'image' => get_field('image'),
];

$heroImage = get_field('image');
?>
<section class="hero">
    <div class="hero__container">
        <h1 class="hero__title">
            <span class="hero__salutations">
                <?php
                if (have_rows('salutations')) :
                    while (have_rows('salutations')) : the_row();
                        ?>
                        <span lang="<?php the_sub_field('language') ?>"><?php the_sub_field('salutation'); ?></span>
                    <?php endwhile; ?>
                <?php endif; ?>
            </span>
            <span><?php the_field('content'); ?></span>
        </h1><!-- .hero__title -->
    </div>
</section><!-- .hero -->
<div class="hero__image">
    <figure>
        <img src="<?= $heroImage['url']; ?>" alt="<?= $heroImage['alt']; ?>">
    </figure>
</div><!-- .hero__image -->
