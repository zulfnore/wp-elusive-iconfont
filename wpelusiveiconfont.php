<?php
/*
Plugin Name: WP Elusive Icon Fonts
Plugin URI: http://www.wpstrapcode.com
Description: Use the Elusive Inconfont set of 271 Sleek vector icons for bootstrap within WordPress. Icons can be inserted using either HTML or a shortcode.
Version: 1.0
Author: WP Strap Code
Author URI: http://wpstrapcode/elusive-iconfont-wordpress-plugins/

Credits:
    The Elusive Iconfont set was created by Aristath
    http://aristath.github.com/elusive-iconfont/index.html

License:

  Copyright (C) 2013  Zulfikar Nore, Nore Marketing.

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/
require_once('assets/tinymce-plugin.php');

class WPElusiveIconfonts {
    public function __construct() {
        add_action( 'init', array( &$this, 'init' ) );
    }

    public function init() {
        add_action( 'wp_enqueue_scripts', array( $this, 'register_plugin_styles' ) );
        add_shortcode( 'icon', array( $this, 'setup_shortcode' ) );
        add_filter( 'widget_text', 'do_shortcode' );
    }

    public function register_plugin_styles() {
        global $wp_styles;
        wp_enqueue_style( 'elusive-iconfont-styles', plugins_url( 'assets/css/elusive-webfont.css', __FILE__  ) );
		wp_enqueue_style( 'elusive-iconfont-custom', plugins_url( 'assets/css/elusive-webfont-custom.css', __FILE__  ) );
        wp_enqueue_style( 'elusive-webfont-ie7', plugins_url( 'assets/css/elusive-webfont-ie7.css', __FILE__ ), array(), '1.0', 'all'  );
        $wp_styles->add_data( 'elusive-webfont-ie7', 'conditional', 'lte IE 7' );
    }

    public function setup_shortcode( $params ) {
        extract( shortcode_atts( array(
            'name'  => 'icon-ok',
            'size'  => 'icon-x5',
			'align'  => 'pull-left',
			'color' => 'icon-red',
			'type'  => ''
            ), $params ) );
        $icon = '<i class="'.$params['name'].' '.$params['size'].' '.$params['align'].' '.$params['color'].' '.$params['type'].'"></i>';

        return $icon;
    }

}

new WPElusiveIconfonts();
