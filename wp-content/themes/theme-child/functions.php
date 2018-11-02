<?php

function theme_name_parent_styles() {

  $parent = get_template();
  $parent = wp_get_theme( $parent );
  if ( is_rtl() ) {
    wp_enqueue_style( 'theme-name-parent-style-rtl', get_template_directory_uri() . '/rtl.css', array(), $parent['Version'], 'all' );
  }
}
add_action( 'wp_enqueue_scripts', 'theme_name_parent_styles' );


function child_theme_styles() {

  wp_register_style( 'googleFonts', 'https://fonts.googleapis.com/css?family=Roboto:300,400,900', false, false );
  wp_enqueue_style( 'googleFonts' );

  wp_dequeue_style( 'parent-theme-style' );
  wp_enqueue_style( 'child-theme-style', get_stylesheet_directory_uri() .'/css/style.css' );

}
add_action( 'wp_enqueue_scripts', 'child_theme_styles', 99 );

function add_child_scripts() {

  wp_register_script( 'childscripts', get_stylesheet_directory_uri() . '/js/scripts.js', array('jquery'),'', true);
  wp_enqueue_script( 'childscripts' );

}

add_action( 'wp_enqueue_scripts', 'add_child_scripts' );


add_filter( 'post_class', 'wps_first_post_class' );
function wps_first_post_class( $classes ) {
    global $wp_query;
    if( 0 == $wp_query->current_post )
        $classes[] = 'first-post';
        return $classes;
}