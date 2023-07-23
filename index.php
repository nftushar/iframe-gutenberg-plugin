<?php
/**
 * Plugin Name: Iframe 7
 * Description: iFrame-7 Gutenberg plugin: Streamline Gutenberg editing with easy-to-use, responsive iframe embedding for videos, live website, and more..
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: iframe
 */
// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }
 
// Constant
define( 'IFM_VERSION', 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'IFM_DIR', plugin_dir_url( __FILE__ ) );

require_once plugin_dir_path( __FILE__ ) . 'inc/block.php';