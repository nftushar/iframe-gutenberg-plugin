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
		$ifmIframeClassName = 'wp-block-ifm-iframe ';

		ob_start(); ?>
		<div class='<?php echo esc_attr( $ifmIframeClassName ); ?>' id='ifm-<?php echo esc_attr( $cId ) ?>' data-attributes='<?php echo esc_attr( wp_json_encode( $attributes ) ); ?>'>


			<iframe
				class="ifmIframe"
				src="<?php echo htmlspecialchars($src); ?>"
				width="<?php echo htmlspecialchars($width); ?>"
				height="<?php echo htmlspecialchars($height); ?>" 
				allowfullscreen="<?php echo $isFullScreen ? 'true' : 'false'; ?>"
				loading="<?php echo htmlspecialchars($loading); ?>" 
				title="<?php echo htmlspecialchars($title); ?> "

			></iframe>
	

			<?php echo $isFullScreen && !strpos($src, 'youtube.com/embed') ? "<button class='fullScreenBtn'>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='24'
				height='24' fill='black' ><path d='M200 32H56C42.7 32 32 42.7 32 56V200c0 9.7 5.8 18.5 14.8 22.2s19.3 1.7 26.2-5.2l40-40 79 79-79 79L73 295c-6.9-6.9-17.2-8.9-26.2-5.2S32 302.3 32 312V456c0 13.3 10.7 24 24 24H200c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-40-40 79-79 79 79-40 40c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H456c13.3 0 24-10.7 24-24V312c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2l-40 40-79-79 79-79 40 40c6.9 6.9 17.2 8.9 26.2 5.2s14.8-12.5 14.8-22.2V56c0-13.3-10.7-24-24-24H312c-9.7 0-18.5 5.8-22.2 14.8s-1.7 19.3 5.2 26.2l40 40-79 79-79-79 40-40c6.9-6.9 8.9-17.2 5.2-26.2S209.7 32 200 32z' /></svg>
			</button>" : ''; ?> 

		</div>

		<?php return ob_get_clean();
	} // Render
}
new BDBBlockDirectory();