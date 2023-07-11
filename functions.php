<?php
/**
 * Sending Theme functions
 */
define( 'SENDIG_THEME_VERSION', '1.0.0' );

/**
 * Register the custom block styles JavaScript for the theme
 */
add_action( 'enqueue_block_editor_assets', 'sendig_editor_assets' );
function sendig_editor_assets() {
	$asset_file   = include get_template_directory() . '/build/index.asset.php';
	$dependencies = $asset_file['dependencies'];
	$dependencies[] = 'wp-edit-site';
	$version      = $asset_file['version'];

	wp_enqueue_script(
		'sendig-block-styles-script',
		get_theme_file_uri( '/assets/js/sendig-custom.js' ),
		array( 'wp-blocks', 'wp-i18n' ),
		SENDIG_THEME_VERSION,
		true
	);
	wp_set_script_translations( 'sendig-block-styles-script', 'sendig' );
	wp_enqueue_script(
		'sendig-block-extensions-script',
		get_theme_file_uri( '/build/index.js' ),
		$dependencies,
		$version,
		true
	);
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
