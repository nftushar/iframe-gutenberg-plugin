<?php
class BDBBlockDirectory{
	function __construct(){
		add_action( 'init', [$this, 'onInit'] );
	}

	function onInit() {
		wp_register_style( 'ifm-iframe-style', plugins_url( 'dist/style.css', __DIR__ ), [], IFM_VERSION); // Style
		wp_register_style( 'ifm-iframe-editor-style', plugins_url( 'dist/editor.css', __DIR__ ), [ 'ifm-iframe-style' ], IFM_VERSION ); // Backend Style

		register_block_type( __DIR__, [
			'editor_style'		=> 'ifm-iframe-editor-style',
			'render_callback'	=> [$this, 'render']
		] ); // Register Block

		wp_set_script_translations( 'ifm-iframe-editor-script', 'iframe', plugin_dir_path( __DIR__ ) . 'languages' ); // Translate
	}

	function render( $attributes ){
		extract( $attributes );

        wp_enqueue_style('ifm-iframe-style');
        wp_enqueue_script( 'ifm-iframe-script', plugins_url( 'dist/script.js', __DIR__ ), [ 'react', 'react-dom' ], IFM_VERSION, true );

		$className = $className ?? '';
		$blockClassName = "wp-block-ifm-iframe $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr( $blockClassName ); ?>' id='ifmIframe-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'></div>

		<?php return ob_get_clean();
	} // Render
}
new BDBBlockDirectory();