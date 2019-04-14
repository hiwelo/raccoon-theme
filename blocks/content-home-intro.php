<?php
/**
 * This is the template that renders the home introduction block
 */
?>
<section class="introduction" <?php if (get_field('label')) : ?><?= 'aria-label="' . get_field('label') . '"'; ?><?php endif; ?>>
    <div class=" introduction__container">
        <?php the_field('content'); ?>
    </div><!-- .introduction__container -->
</section><!-- .introduction -->
