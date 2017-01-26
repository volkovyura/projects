jQuery(document).ready(function() { 
	"use strict";
	
	/* Toggles */
	(function ($) { 
		$('.toggles .cmsmasters_toggle_title a').on('click', function (i) { 
			var active_toggle = $(this).parents('.toggles').find('.cmsmasters_toggle_wrap.current_toggle .cmsmasters_toggle'), 
				toggle = $(this).parents('.cmsmasters_toggle_wrap'), 
				acc = ($(this).parents('.toggles').hasClass('toggles_mode_accordion')) ? true : false, 
				dropDown = toggle.find('.cmsmasters_toggle');
			
			
			if (toggle.hasClass('current_toggle')) {
				dropDown.slideUp('fast', function () { 
					toggle.removeClass('current_toggle');
				} );
			} else {
				if (acc) {
					active_toggle.slideUp('fast', function () { 
						active_toggle.parents('.cmsmasters_toggle_wrap').removeClass('current_toggle');
					} );
				}
				
				dropDown.slideDown('fast', function () { 
					toggle.addClass('current_toggle');
				} );
			}
			
			
			i.preventDefault();
			
			
			setTimeout(function () { 
				jQuery('body').trigger('debouncedresize');
			}, 300);
		} );
		
		
		$('.toggles .cmsmasters_toggles_filter a').on('click', function (i) { 
			var filter_wrap = $(this).parents('.cmsmasters_toggles_filter'), 
				filter = $(this).data('key'), 
				toggle = $(this).parents('.toggles').find('.cmsmasters_toggle_wrap');
			
			
			if ($(this).is(':not(.current_filter)')) { 
				filter_wrap.find('a').removeClass('current_filter');
				
				
				$(this).addClass('current_filter');
				
				
				toggle.filter('[data-tags~="' + filter + '"]').slideDown('fast');
				
				
				toggle.filter(':not([data-tags~="' + filter + '"])').slideUp('fast');
				
				
				toggle.filter(':not([data-tags~="' + filter + '"])').removeClass('current_toggle').find('.cmsmasters_toggle').removeAttr('style');
			}
			
			
			i.preventDefault();
		} );
	} )(jQuery);
	
	
	
	/* Tabs */
	(function ($) { 
		$('.cmsmasters_woo_tabs > .cmsmasters_tabs_list > .cmsmasters_tabs_list_item:first-child').addClass('current_tab');
		$('.cmsmasters_woo_tabs > .cmsmasters_tabs_wrap > .cmsmasters_tab:first-child').addClass('active_tab');
		
		$('.cmsmasters_tabs ul.cmsmasters_tabs_list li a').on('click', function (t) { 
			var tabs_parent = $(this).parents('.cmsmasters_tabs'), 
				tabs = tabs_parent.find('.cmsmasters_tabs_wrap'), 
				index = $(this).parents('li').index();
			
			
			tabs_parent.find('.cmsmasters_tabs_list > .current_tab').removeClass('current_tab');
			
			
			$(this).parents('li').addClass('current_tab');
			
			
			tabs.find('.cmsmasters_tab').not(':eq(' + index + ')').slideUp('fast', function () { 
				$(this).removeClass('active_tab');
			} );
			
			
			tabs.find('.cmsmasters_tab:eq(' + index + ')').slideDown('fast', function () { 
				$(this).addClass('active_tab');
			} );
			
			
			t.preventDefault();
			
			
			setTimeout(function () { 
				jQuery('body').trigger('debouncedresize');
			}, 300);
		} );
	} )(jQuery);
} );
