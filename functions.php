<?php
/**
 * Sending Theme functions
 */

/**
 * Register the custom block styles for the theme
 */
add_action( 'enqueue_block_editor_assets', 'sendig_editor_assets' );
function sendig_editor_assets() {
	wp_enqueue_script(
		'sendig-block-styles-script',
		get_theme_file_uri( '/assets/js/sendig-custom.js' ),
		array( 'wp-blocks', 'wp-i18n' )
	);
	wp_set_script_translations( 'sendig-block-styles-script', 'sendig' );
}

/**
 * Register the custom block styles CSS for the theme
 */
add_action( 'enqueue_block_assets', 'sendig_block_styles' );
function sendig_block_styles() {
	wp_enqueue_style(
		'sendig-block-styles',
		get_theme_file_uri( '/assets/css/sendig-custom.css' ),
		false
	);
}
