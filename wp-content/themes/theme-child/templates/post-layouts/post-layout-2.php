<article id="post-<?php the_ID(); ?>" <?php post_class('post-block post-layout-2'); ?>>
  <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" rel="bookmark" >
    <div class="post-block-inner">
      <div class="post-meta">
        <div class="post-categories">
          <i class="ics-envelope"></i><div class="featured">Featured</div>
        </div>
        <div class="post-date"><?php the_time( get_option( 'date_format' ) ); ?></div>
      </div>
      <div class="post-block-content">
        <h3 class="post-block-title"><?php the_title(); ?></h3>
        <div class="post-excerpt">
          <?php the_excerpt(); ?>
        </div>
      </div>
    </div>
  </a>
</article>