<?php
/**
* Plugin Name: Gutengeek Components Setup Example
* Author: Plugin Wordpress
* Description: @gutengeek/components example setup via npmjs.org
* Version: 1.0
*/

// Load assets for wp-admin when editor is active
function shaiful_gutenberg_carousel_admin() {
   wp_enqueue_script(
      'gutenberg-example-blocks',
      plugins_url( 'build/index.js', __FILE__ ),
      [ 'wp-edit-post', 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor', 'wp-api-fetch', 'wp-compose', 'wp-data' ]
   );

   wp_enqueue_style(
      'gutenberg-example-blocks',
      plugins_url( 'build/index.css', __FILE__ ),
      array()
   );
}

add_action( 'enqueue_block_editor_assets', 'shaiful_gutenberg_carousel_admin' );
