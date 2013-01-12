// closure to avoid namespace collision
(function(){
	// creates the plugin
	tinymce.create('tinymce.plugins.wpelusiveiconfont', {
		// creates control instances based on the control's id.
		// our button's id is "wpelusiveiconfont_button"
		createControl : function(id, controlManager) {
			if (id == 'wpelusiveiconfont_button') {
				// creates the button
				var button = controlManager.createButton('wpelusiveiconfont_button', {
					title : 'WP Elusive Icon Font Shortcode Generator', // title of the button
					image : '../wp-content/plugins/wp-elusive-iconfont/img/elusive.png',  // path to the button's image
					onclick : function() {
						// triggers the thickbox
						var width = jQuery(window).width(), H = jQuery(window).height(), W = ( 720 < width ) ? 720 : width;
						W = W - 80;
						H = H - 84;
						tb_show( 'WP Elusive Icon Font Shortcode Generator', '#TB_inline?width=' + W + '&height=' + H + '&inlineId=wpelusiveiconfont-form' );
					}
				});
				return button;
			}
			return null;
		}
	});
	
	// registers the plugin. DON'T MISS THIS STEP!!!
	tinymce.PluginManager.add('wpelusiveiconfont', tinymce.plugins.wpelusiveiconfont);
	
	// executes this when the DOM is ready
	jQuery(function(){
		// creates a form to be displayed everytime the button is clicked
		// you should achieve this using AJAX instead of direct html code like this
		var form = jQuery('<div id="wpelusiveiconfont-form"><table id="wpelusiveiconfont-table" class="form-table">\
			<tr>\
				<th><label for="wpelusiveiconfont-name">Icon Name</label></th>\
				<td><select name="name" id="wpelusiveiconfont-name">\
				    <option value="">Select An Icon</option>\
					<option value="icon-glass">icon-glass</option>\
                    <option value="icon-music">icon-music</option>\
                    <option value="icon-search">icon-search</option>\
                    <option value="icon-search-alt">icon-search-alt</option>\
                    <option value="icon-envelope">icon-envelope</option>\
                    <option value="icon-envelope-alt">icon-envelope-alt</option>\
                    <option value="icon-heart">icon-heart</option>\
                    <option value="icon-heart-alt">icon-heart-alt</option>\
                    <option value="icon-heart-empty">icon-heart-empty</option>\
                    <option value="icon-star">icon-star</option>\
                    <option value="icon-star-alt">icon-star-alt</option>\
                    <option value="icon-star-empty">icon-star-empty</option>\
                    <option value="icon-user">icon-user</option>\
                    <option value="icon-film">icon-film</option>\
                    <option value="icon-th">icon-th</option>\
                    <option value="icon-th-large">icon-th-large</option>\
                    <option value="icon-th-list">icon-th-list</option>\
                    <option value="icon-ok">icon-ok</option>\
                    <option value="icon-remove">icon-remove</option>\
                    <option value="icon-zoom-in">icon-zoom-in</option>\
                    <option value="icon-zoom-out">icon-zoom-out</option>\
                    <option value="icon-off">icon-off</option>\
                    <option value="icon-signal">icon-signal</option>\
                    <option value="icon-cog">icon-cog</option>\
                    <option value="icon-cog-alt">icon-cog-alt</option>\
                    <option value="icon-cogs">icon-cogs</option>\
                    <option value="icon-trash">icon-trash</option>\
                    <option value="icon-home">icon-home</option>\
                    <option value="icon-home-alt">icon-home-alt</option>\
                    <option value="icon-file">icon-file</option>\
                    <option value="icon-file-alt">icon-file-alt</option>\
                    <option value="icon-file-new">icon-file-new</option>\
                    <option value="icon-file-new-alt">icon-file-new-alt</option>\
                    <option value="icon-file-edit">icon-file-edit</option>\
                    <option value="icon-file-edit-alt">icon-file-edit-alt</option>\
                    <option value="icon-time">icon-time</option>\
                    <option value="icon-time-alt">icon-time-alt</option>\
                    <option value="icon-road">icon-road</option>\
                    <option value="icon-download">icon-download</option>\
                    <option value="icon-download-alt">icon-download-alt</option>\
                    <option value="icon-upload">icon-upload</option>\
                    <option value="icon-inbox">icon-inbox</option>\
                    <option value="icon-inbox-alt">icon-inbox-alt</option>\
                    <option value="icon-inbox-box">icon-inbox-box</option>\
                    <option value="icon-cc">icon-cc</option>\
                    <option value="icon-address-book">icon-address-book</option>\
                    <option value="icon-address-book-alt">icon-address-book-alt</option>\
                    <option value="icon-book">icon-book</option>\
                    <option value="icon-bookmark">icon-bookmark</option>\
                    <option value="icon-bookmark-empty">icon-bookmark-empty</option>\
                    <option value="icon-calendar">icon-calendar</option>\
                    <option value="icon-calendar-sign">icon-calendar-sign</option>\
                    <option value="icon-play-circle">icon-play-circle</option>\
                    <option value="icon-repeat">icon-repeat</option>\
                    <option value="icon-refresh">icon-refresh</option>\
                    <option value="icon-list-alt">icon-list-alt</option>\
                    <option value="icon-flag">icon-flag</option>\
                    <option value="icon-flag-alt">icon-flag-alt</option>\
                    <option value="icon-qrcode">icon-qrcode</option>\
                    <option value="icon-barcode">icon-barcode</option>\
                    <option value="icon-tag">icon-tag</option>\
                    <option value="icon-tags">icon-tags</option>\
                    <option value="icon-print">icon-print</option>\
                    <option value="icon-camera">icon-camera</option>\
                    <option value="icon-font">icon-font</option>\
                    <option value="icon-fontsize">icon-fontsize</option>\
                    <option value="icon-bold">icon-bold</option>\
                    <option value="icon-italic">icon-italic</option>\
                    <option value="icon-text-height">icon-text-height</option>\
                    <option value="icon-text-width">icon-text-width</option>\
                    <option value="icon-align-left">icon-align-left</option>\
                    <option value="icon-align-center">icon-align-center</option>\
                    <option value="icon-align-right">icon-align-right</option>\
                    <option value="icon-align-justify">icon-align-justify</option>\
                    <option value="icon-list">icon-list</option>\
                    <option value="icon-indent-left">icon-indent-left</option>\
                    <option value="icon-indent-right">icon-indent-right</option>\
                    <option value="icon-facetime-video">icon-facetime-video</option>\
                    <option value="icon-picture">icon-picture</option>\
                    <option value="icon-pencil">icon-pencil</option>\
                    <option value="icon-pencil-alt">icon-pencil-alt</option>\
                    <option value="icon-map-marker">icon-map-marker</option>\
                    <option value="icon-adjust">icon-adjust</option>\
                    <option value="icon-tint">icon-tint</option>\
                    <option value="icon-edit">icon-edit</option>\
                    <option value="icon-random">icon-random</option>\
                    <option value="icon-comment">icon-comment</option>\
                    <option value="icon-comment-alt">icon-comment-alt</option>\
                    <option value="icon-quotes">icon-quotes</option>\
                    <option value="icon-quotes-alt">icon-quotes-alt</option>\
                    <option value="icon-magnet">icon-magnet</option>\
                    <option value="icon-check">icon-check</option>\
                    <option value="icon-check-empty">icon-check-empty</option>\
                    <option value="icon-move">icon-move</option>\
                    <option value="icon-chevron-left">icon-chevron-left</option>\
                    <option value="icon-chevron-right">icon-chevron-right</option>\
                    <option value="icon-chevron-up">icon-chevron-up</option>\
                    <option value="icon-chevron-down">icon-chevron-down</option>\
                    <option value="icon-plus">icon-plus</option>\
                    <option value="icon-plus-sign">icon-plus-sign</option>\
                    <option value="icon-minus">icon-minus</option>\
                    <option value="icon-minus-sign">icon-minus-sign</option>\
                    <option value="icon-remove-sign">icon-remove-sign</option>\
                    <option value="icon-ok-sign">icon-ok-sign</option>\
                    <option value="icon-ok-circle">icon-ok-circle</option>\
                    <option value="icon-question-sign">icon-question-sign</option>\
                    <option value="icon-info-sign">icon-info-sign</option>\
                    <option value="icon-screenshot">icon-screenshot</option>\
                    <option value="icon-remove-circle">icon-remove-circle</option>\
                    <option value="icon-ban-circle">icon-ban-circle</option>\
                    <option value="icon-arrow-left">icon-arrow-left</option>\
                    <option value="icon-arrow-right">icon-arrow-right</option>\
                    <option value="icon-arrow-up">icon-arrow-up</option>\
                    <option value="icon-arrow-down">icon-arrow-down</option>\
                    <option value="icon-asterisk">icon-asterisk</option>\
                    <option value="icon-exclamation-sign">icon-exclamation-sign</option>\
                    <option value="icon-gift">icon-gift</option>\
                    <option value="icon-leaf">icon-leaf</option>\
                    <option value="icon-fire">icon-fire</option>\
                    <option value="icon-eye-open">icon-eye-open</option>\
                    <option value="icon-eye-close">icon-eye-close</option>\
                    <option value="icon-warning-sign">icon-warning-sign</option>\
                    <option value="icon-plane">icon-plane</option>\
                    <option value="icon-shopping-cart">icon-shopping-cart</option>\
                    <option value="icon-shopping-cart-sign">icon-shopping-cart-sign</option>\
                    <option value="icon-folder">icon-folder</option>\
                    <option value="icon-folder-sign">icon-folder-sign</option>\
                    <option value="icon-folder-close">icon-folder-close</option>\
                    <option value="icon-folder-open">icon-folder-open</option>\
                    <option value="icon-resize-vertical">icon-resize-vertical</option>\
                    <option value="icon-resize-horizontal">icon-resize-horizontal</option>\
                    <option value="icon-hdd">icon-hdd</option>\
                    <option value="icon-bullhorn">icon-bullhorn</option>\
                    <option value="icon-bell">icon-bell</option>\
                    <option value="icon-certificate">icon-certificate</option>\
                    <option value="icon-thumbs-up">icon-thumbs-up</option>\
                    <option value="icon-thumbs-down">icon-thumbs-down</option>\
                    <option value="icon-hand-right">icon-hand-right</option>\
                    <option value="icon-hand-left">icon-hand-left</option>\
                    <option value="icon-hand-up">icon-hand-up</option>\
                    <option value="icon-hand-down">icon-hand-down</option>\
                    <option value="icon-circle-arrow-right">icon-circle-arrow-right</option>\
                    <option value="icon-circle-arrow-left">icon-circle-arrow-left</option>\
                    <option value="icon-circle-arrow-up">icon-circle-arrow-up</option>\
                    <option value="icon-circle-arrow-down">icon-circle-arrow-down</option>\
                    <option value="icon-globe">icon-globe</option>\
                    <option value="icon-globe-alt">icon-globe-alt</option>\
                    <option value="icon-wrench">icon-wrench</option>\
                    <option value="icon-wrench-alt">icon-wrench-alt</option>\
                    <option value="icon-tasks">icon-tasks</option>\
                    <option value="icon-filter">icon-filter</option>\
                    <option value="icon-briefcase">icon-briefcase</option>\
                    <option value="icon-fullscreen">icon-fullscreen</option>\
                    <option value="icon-share">icon-share</option>\
                    <option value="icon-share-alt">icon-share-alt</option>\
                    <option value="icon-facebook">icon-facebook</option>\
                    <option value="icon-instagram">icon-instagram</option>\
                    <option value="icon-twitter">icon-twitter</option>\
                    <option value="icon-googleplus">icon-googleplus</option>\
                    <option value="icon-linkedin">icon-linkedin</option>\
                    <option value="icon-pinterest">icon-pinterest</option>\
                    <option value="icon-foursquare">icon-foursquare</option>\
                    <option value="icon-youtube">icon-youtube</option>\
                    <option value="icon-vimeo">icon-vimeo</option>\
                    <option value="icon-skype">icon-skype</option>\
                    <option value="icon-picasa">icon-picasa</option>\
                    <option value="icon-stumbleupon">icon-stumbleupon</option>\
                    <option value="icon-digg">icon-digg</option>\
                    <option value="icon-tumblr">icon-tumblr</option>\
                    <option value="icon-github">icon-github</option>\
                    <option value="icon-github-text">icon-github-text</option>\
                    <option value="icon-friendfeed">icon-friendfeed</option>\
                    <option value="icon-friendfeed-rect">icon-friendfeed-rect</option>\
                    <option value="icon-wordpress">icon-wordpress</option>\
                    <option value="icon-blogger">icon-blogger</option>\
                    <option value="icon-slideshare">icon-slideshare</option>\
                    <option value="icon-reddit">icon-reddit</option>\
                    <option value="icon-dribble">icon-dribble</option>\
                    <option value="icon-behance">icon-behance</option>\
                    <option value="icon-deviantart">icon-deviantart</option>\
                    <option value="icon-delicious">icon-delicious</option>\
                    <option value="icon-stackoverflow">icon-stackoverflow</option>\
                    <option value="icon-rss">icon-rss</option>\
                    <option value="icon-retweet">icon-retweet</option>\
                    <option value="icon-video-chat">icon-video-chat</option>\
                    <option value="icon-video">icon-video</option>\
                    <option value="icon-video-alt">icon-video-alt</option>\
                    <option value="icon-play">icon-play</option>\
                    <option value="icon-play-alt">icon-play-alt</option>\
                    <option value="icon-pause">icon-pause</option>\
                    <option value="icon-pause-alt">icon-pause-alt</option>\
                    <option value="icon-stop">icon-stop</option>\
                    <option value="icon-stop-alt">icon-stop-alt</option>\
                    <option value="icon-record">icon-record</option>\
                    <option value="icon-repeat-alt">icon-repeat-alt</option>\
                    <option value="icon-forward">icon-forward</option>\
                    <option value="icon-forward-alt">icon-forward-alt</option>\
                    <option value="icon-fast-forward">icon-fast-forward</option>\
                    <option value="icon-step-forward">icon-step-forward</option>\
                    <option value="icon-backward">icon-backward</option>\
                    <option value="icon-step-backward">icon-step-backward</option>\
                    <option value="icon-fast-backward">icon-fast-backward</option>\
                    <option value="icon-eject">icon-eject</option>\
                    <option value="icon-view-mode">icon-view-mode</option>\
                    <option value="icon-reverse-alt">icon-reverse-alt</option>\
                    <option value="icon-mic">icon-mic</option>\
                    <option value="icon-mic-alt">icon-mic-alt</option>\
                    <option value="icon-headphones">icon-headphones</option>\
                    <option value="icon-speaker">icon-speaker</option>\
                    <option value="icon-volume-off">icon-volume-off</option>\
                    <option value="icon-volume-down">icon-volume-down</option>\
                    <option value="icon-volume-up">icon-volume-up</option>\
                    <option value="icon-key">icon-key</option>\
                    <option value="icon-lock">icon-lock</option>\
                    <option value="icon-lock-alt">icon-lock-alt</option>\
                    <option value="icon-unlock">icon-unlock</option>\
                    <option value="icon-unlock-alt">icon-unlock-alt</option>\
                    <option value="icon-trash-alt">icon-trash-alt</option>\
                    <option value="icon-torso">icon-torso</option>\
                    <option value="icon-photo">icon-photo</option>\
                    <option value="icon-photo-alt">icon-photo-alt</option>\
                    <option value="icon-wheelchair">icon-wheelchair</option>\
                    <option value="icon-universal-access">icon-universal-access</option>\
                    <option value="icon-question">icon-question</option>\
                    <option value="icon-phone">icon-phone</option>\
                    <option value="icon-phone-alt">icon-phone-alt</option>\
                    <option value="icon-iphone-home">icon-iphone-home</option>\
                    <option value="icon-person">icon-person</option>\
                    <option value="icon-path">icon-path</option>\
                    <option value="icon-paper-clip">icon-paper-clip</option>\
                    <option value="icon-paper-clip-alt">icon-paper-clip-alt</option>\
                    <option value="icon-network">icon-network</option>\
                    <option value="icon-error">icon-error</option>\
                    <option value="icon-error-alt">icon-error-alt</option>\
                    <option value="icon-map-marker-alt">icon-map-marker-alt</option>\
                    <option value="icon-male">icon-male</option>\
                    <option value="icon-female">icon-female</option>\
                    <option value="icon-child">icon-child</option>\
                    <option value="icon-adult">icon-adult</option>\
                    <option value="icon-idea">icon-idea</option>\
                    <option value="icon-idea-alt">icon-idea-alt</option>\
                    <option value="icon-group">icon-group</option>\
                    <option value="icon-group-alt">icon-group-alt</option>\
                    <option value="icon-hearing-impaired">icon-hearing-impaired</option>\
                    <option value="icon-blind">icon-blind</option>\
                    <option value="icon-braille">icon-braille</option>\
                    <option value="icon-guidedog">icon-guidedog</option>\
                    <option value="icon-graph">icon-graph</option>\
                    <option value="icon-graph-alt">icon-graph-alt</option>\
                    <option value="icon-glasses">icon-glasses</option>\
                    <option value="icon-flickr">icon-flickr</option>\
                    <option value="icon-dashboard">icon-dashboard</option>\
                    <option value="icon-credit-card">icon-credit-card</option>\
                    <option value="icon-compass">icon-compass</option>\
                    <option value="icon-compass-alt">icon-compass-alt</option>\
                    <option value="icon-asl">icon-asl</option>\
                    <option value="icon-cloud">icon-cloud</option>\
                    <option value="icon-cloud-alt">icon-cloud-alt</option>\
                    <option value="icon-w3c">icon-w3c</option>\
                    <option value="icon-css">icon-css</option>\
                    <option value="icon-website">icon-website</option>\
                    <option value="icon-website-alt">icon-website-alt</option>\
                    <option value="icon-laptop">icon-laptop</option>\
                    <option value="icon-laptop-alt">icon-laptop-alt</option>\
                    <option value="icon-screen">icon-screen</option>\
                    <option value="icon-screen-alt">icon-screen-alt</option>\
                    <option value="icon-resize-full">icon-resize-full</option>\
                    <option value="icon-resize-small">icon-resize-small</option>\
                    <option value="icon-smiley">icon-smiley</option>\
                    <option value="icon-smiley-alt">icon-smiley-alt</option>\
				</select><br />\
				<small>Select from over 270+ Icon sets.</small></td>\
			</tr>\
			<tr>\
				<th><label for="wpelusiveiconfont-size">Size</label></th>\
				<td><select name="size" id="wpelusiveiconfont-size">\
				    <option value="">Select icon Size</option>\
					<option value="">Default</option>\
					<option value="icon-large">icon-large</option>\
					<option value="icon-2x">icon-2x</option>\
					<option value="icon-3x">icon-3x</option>\
					<option value="icon-4x">icon-4x</option>\
					<option value="icon-5x">icon-5x</option>\
					<option value="icon-6x">icon-6x</option>\
					<option value="icon-7x">icon-7x</option>\
					<option value="icon-8x">icon-8x</option>\
					<option value="icon-9x">icon-9x</option>\
					<option value="icon-10x">icon-10x</option>\
				</select><br />\
				<small>Specify the size to use for the icon - the size is incremented in multiples of the original size.</small></td>\
			</tr>\
			<tr>\
				<th><label for="wpelusiveiconfont-align">Aligment</label></th>\
				<td><select name="align" id="wpelusiveiconfont-align">\
				    <option value="">Select icon Alignment</option>\
					<option value="">None</option>\
					<option value="pull-left">pull-left</option>\
					<option value="pull-right">pull-right</option>\
				</select><br />\
				<small>Specify the icon alignment in relation to the content.</small></td>\
			</tr>\
			<tr>\
				<th><label for="wpelusiveiconfont-color">Color</label></th>\
				<td><select name="color" id="wpelusiveiconfont-color">\
				    <option value="">Select Icon Color</option>\
					<option value="">Default</option>\
					<option value="icon-red">icon-red</option>\
					<option value="icon-blue">icon-blue</option>\
					<option value="icon-yellow">icon-yellow</option>\
					<option value="icon-green">icon-green</option>\
					<option value="icon-brown">icon-brown</option>\
					<option value="icon-maroon">icon-maroon</option>\
					<option value="icon-purple">icon-purple</option>\
					<option value="icon-pink">icon-pink</option>\
					<option value="icon-navy">icon-navy</option>\
                                        <option value="icon-orange">icon-orange</option>\
                                        <option value="icon-salmon">icon-salmon</option>\
                                        <option value="icon-limegreen">icon-limegreen</option>\
                                        <option value="icon-teal">icon-teal</option>\
                                        <option value="icon-olive">icon-olive</option>\
                                        <option value="icon-tan">icon-tan</option>\
                                        <option value="icon-turquoise">icon-turquoise</option>\
                                        <option value="icon-gray">icon-gray</option>\
				</select><br />\
				<small>Specify the color of the icon.</small></td>\
			</tr>\
			<tr>\
				<th><label for="wpelusiveiconfont-type">Type</label></th>\
				<td><select name="type" id="wpelusiveiconfont-type">\
				    <option value="">None</option>\
					<option value="icon-spin">icon-spin</option>\
					<option value="icon-border">icon-border</option>\
				</select><br />\
				<small>Specify the icon type i.e. a spinning refresh icon.</small></td>\
			</tr>\
		</table>\
		<p class="submit">\
			<input type="button" id="wpelusiveiconfont-submit" class="button-primary" value="Insert Elusive Iconfont" name="submit" />\
		</p>\
		</div>');
		
		var table = form.find('table');
		form.appendTo('body').hide();
		
		// handles the click event of the submit button
		form.find('#wpelusiveiconfont-submit').click(function(){
			// defines the options and their default values
			// again, this is not the most elegant way to do this
			// but well, this gets the job done nonetheless
			var options = { 
				'name'    : '',
				'size'    : '',
                'align'   : '',
				'color'   : '',
			    'type'    : ''				
				};
			var shortcode = '[icon';
			
			for( var index in options) {
				var value = table.find('#wpelusiveiconfont-' + index).val();
				
				// attaches the attribute to the shortcode only if it's different from the default value
				if ( value !== options[index] )
					shortcode += ' ' + index + '=' + value + '';
			}
			
			shortcode += ']';
			
			// inserts the shortcode into the active editor
			tinyMCE.activeEditor.execCommand('mceInsertContent', 0, shortcode);
			
			// closes Thickbox
			tb_remove();
		});
	});
})()
