/**
	* @package Alchemists HTML
	*
	* Template Scripts
	* Created by Dan Fisher
*/

;(function($){
	"use strict";

	$('body:not(.page-loader-disable)').jpreLoader({
		showSplash: false,
		loaderVPos: "50%",
	});

	$.fn.exists = function () {
		return this.length > 0;
	};

	/* ----------------------------------------------------------- */
	/*  Predefined Variables
	/* ----------------------------------------------------------- */
	var $template_var = $('body').attr('class'),
			$color_primary = '#ffdc11',
			$main_nav     = $('.main-nav'),
			$circular_bar = $('.circular__bar'),
			$gmap         = $('.gm-map'),
			$mp_single    = $('.mp_single-img'),
			$mp_gallery   = $('.mp_gallery'),
			$mp_iframe    = $('.mp_iframe'),
			$post_fitRows = $('.post-grid--fitRows'),
			$post_masonry = $('.post-grid--masonry'),
			$post_masonry_filter = $('.post-grid--masonry-filter'),
			$team_album   = $('.album'),
			$slick_featured_slider   = $('.posts--slider-featured'),
			$slick_featured_carousel = $('.featured-carousel'),
			$slick_video_carousel = $('.video-carousel'),
			$slick_team_roster = $('.team-roster--slider'),
			$slick_awards = $('.awards--slider'),
			$slick_player_info = $('.player-info'),
			$slick_product = $('.product__slider'),
			$slick_product_soccer = $('.product__slider-soccer'),
			$slick_team_roster_card = $('.team-roster--card-slider'),
			$slick_team_roster_case = $('.team-roster--case-slider'),
			$slick_team_roster_grid_slider = $('.js-team-roster--grid-sm'),
			$slick_team_roster_card_compact = $('.js-team-roster--card-compact'),
			$slick_hero_slider = $('.hero-slider'),
			$slick_hero_slider_football = $('.posts--slider-top-news'),
			$slick_slider_var_width = $('.posts--slider-var-width'),
			$chart_games_history = $('#games-history'),
			$chart_games_history_soccer = $('#games-history-soccer'),
			$chart_points_history = $('#points-history'),
			$chart_points_history_soccer = $('#points-history-soccer'),
			$chart_points_history_football = $('#points-history-football'),
			$chart_player_stats = $('#player-stats'),
			$content_filter = $('.content-filter'),
			$marquee = $('.marquee'),
			$range_slider = $('#slider-range'),
			$insta_feed = $('#instagram-feed'),
			$insta_feed_alt = $('#instagram-feed-alt'),
			$social_counters = $('.widget-social');

	if ( $template_var == 'template-soccer' ) {
		$color_primary = '#1892ed';
	} else if ( $template_var == 'template-football' ) {
		$color_primary = '#f92552';
	}

	var Core = {

		initialize: function() {

			this.SvgPolyfill();

			this.headerNav();

			this.countDown();

			this.circularBar();

			this.MagnificPopup();

			this.isotope();

			this.SlickCarousel();

			this.ContentFilter();

			this.ChartJs();

			this.RangeSlider();

			this.GoogleMap();

			this.InstagramFeed();

			this.SocialCounters();

			this.miscScripts();

		},

		SvgPolyfill: function() {
			svg4everybody();
		},

		headerNav: function() {

			if ( $main_nav.exists() ) {

				var $top_nav     = $('.nav-account'),
						$top_nav_li  = $('.nav-account > li'),
						$social      = $('.social-links--main-nav'),
						$info_nav_li = $('.info-block--header > li'),
						$wrapper     = $('.site-wrapper'),
						$nav_list    = $('.main-nav__list'),
						$nav_list_li = $('.main-nav__list > li'),
						$toggle_btn  = $('#header-mobile__toggle'),
						$pushy_btn   = $('.pushy-panel__toggle');

				// Clone Search Form
				var $header_search_form = $('.header-search-form').clone();
				$('#header-mobile').append($header_search_form);

				// Clone Shopping Cart to Mobile Menu
				var $shop_cart = $('.info-block__item--shopping-cart > .info-block__link-wrapper').clone();
				$shop_cart.appendTo($nav_list).wrap('<li class="main-nav__item--shopping-cart"></li>');

				// Add arrow and class if Top Bar menu ite has submenu
				$top_nav_li.has('ul').addClass('has-children').prepend('<span class="main-nav__toggle"></span>');

				// Clone Top Bar menu to Main Menu
				if ( $top_nav.exists() ) {
					var children = $top_nav.children().clone();
					$nav_list.append(children);
				}

				// Clone Header Logo to Mobile Menu
				var $logo_mobile = $('.header-mobile__logo').clone();
				$nav_list.prepend($logo_mobile);
				$logo_mobile.prepend('<span class="main-nav__back"></span>');

				// Clone Header Info to Mobile Menu
				var header_info1 = $('.info-block__item--contact-primary').clone();
				var header_info2 = $('.info-block__item--contact-secondary').clone();
				$nav_list.append(header_info1).append(header_info2);

				// Clone Social Links to Main Menu
				if ( $social.exists() ) {
					var social_li = $social.children().clone();
					var social_li_new = social_li.contents().unwrap();
					social_li_new.appendTo($nav_list).wrapAll('<li class="main-nav__item--social-links"></li>');
				}

				// Add arrow and class if Info Header Nav has submenu
				$info_nav_li.has('ul').addClass('has-children');

				// Mobile Menu Toggle
				$toggle_btn.on('click', function(){
					$wrapper.toggleClass('site-wrapper--has-overlay');
				});

				$('.site-overlay, .main-nav__back').on('click', function(){
					$wrapper.toggleClass('site-wrapper--has-overlay');
				});

				// Pushy Panel Toggle
				$pushy_btn.on('click', function(e){
					e.preventDefault();
					$wrapper.toggleClass('site-wrapper--has-overlay-pushy');
				});

				$('.site-overlay, .pushy-panel__back-btn').on('click', function(e){
					e.preventDefault();
					$wrapper.removeClass('site-wrapper--has-overlay-pushy site-wrapper--has-overlay');
				});

				// Add toggle button and class if menu has submenu
				$nav_list_li.has('.main-nav__sub').addClass('has-children').prepend('<span class="main-nav__toggle"></span>');
				$nav_list_li.has('.main-nav__megamenu').addClass('has-children').prepend('<span class="main-nav__toggle"></span>');

				$('.main-nav__toggle').on('click', function(){
					$(this).toggleClass('main-nav__toggle--rotate')
					.parent().siblings().children().removeClass('main-nav__toggle--rotate');

					$(".main-nav__sub, .main-nav__megamenu").not($(this).siblings('.main-nav__sub, .main-nav__megamenu')).slideUp('normal');
					$(this).siblings('.main-nav__sub').slideToggle('normal');
					$(this).siblings('.main-nav__megamenu').slideToggle('normal');
				});

				// Add toggle button and class if submenu has sub-submenu
				$('.main-nav__list > li > ul > li').has('.main-nav__sub-2').addClass('has-children').prepend('<span class="main-nav__toggle-2"></span>');
				$('.main-nav__list > li > ul > li > ul > li').has('.main-nav__sub-3').addClass('has-children').prepend('<span class="main-nav__toggle-2"></span>');

				$('.main-nav__toggle-2').on('click', function(){
					$(this).toggleClass('main-nav__toggle--rotate');
					$(this).siblings('.main-nav__sub-2').slideToggle('normal');
					$(this).siblings('.main-nav__sub-3').slideToggle('normal');
				});

				// Mobile Search
				$('#header-mobile__search-icon').on('click', function(){
					$(this).toggleClass('header-mobile__search-icon--close');
					$('.header-mobile').toggleClass('header-mobile--expanded');
				});
			}
		},

		countDown: function() {

			var countdown = $('.countdown-counter');
			var count_time = countdown.data('date');
			countdown.countdown({
				date: count_time,
				render: function(data) {
					$(this.el).html("<div class='countdown-counter__item countdown-counter__item--days'>" + this.leadingZeros(data.days, 2) + " <span class='countdown-counter__label'>days</span></div><div class='countdown-counter__item countdown-counter__item--hours'>" + this.leadingZeros(data.hours, 2) + " <span class='countdown-counter__label'>hours</span></div><div class='countdown-counter__item countdown-counter__item--mins'>" + this.leadingZeros(data.min, 2) + " <span class='countdown-counter__label'>mins</span></div><div class='countdown-counter__item countdown-counter__item--secs'>" + this.leadingZeros(data.sec, 2) + " <span class='countdown-counter__label'>secs</span></div>");
				}
			});
		},

		circularBar: function() {

			var $track_color = '#ecf0f6';

			if ( $template_var == 'template-football' ) {
				$track_color = '#4e4d73';
			}

			if ( $circular_bar.exists() ) {
				$circular_bar.easyPieChart({
					barColor: $color_primary,
					trackColor: $track_color,
					lineCap: 'square',
					lineWidth: 8,
					size: 90,
					scaleLength: 0
				});
			}

		},

		MagnificPopup: function(){

			if ($mp_single.exists() ) {
				// Single Image
				$('.mp_single-img').magnificPopup({
					type:'image',
					removalDelay: 300,

					gallery:{
						enabled:false
					},
					mainClass: 'mfp-fade',
					autoFocusLast: false,

				});
			}

			if ($mp_gallery.exists() ) {
				// Multiple Images (gallery)
				$('.mp_gallery').magnificPopup({
					type:'image',
					removalDelay: 300,

					gallery:{
						enabled:true
					},
					mainClass: 'mfp-fade',
					autoFocusLast: false,

				});
			}

			if ($mp_iframe.exists() ) {
				// Iframe (video, maps)
				$('.mp_iframe').magnificPopup({
					type:'iframe',
					removalDelay: 300,
					mainClass: 'mfp-fade',
					autoFocusLast: false,

					patterns: {
						youtube: {
							index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

							id: 'v=', // String that splits URL in a two parts, second part should be %id%
							// Or null - full URL will be returned
							// Or a function that should return %id%, for example:
							// id: function(url) { return 'parsed id'; }

							src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
						},
						vimeo: {
							index: 'vimeo.com/',
							id: '/',
							src: '//player.vimeo.com/video/%id%?autoplay=1'
						},
						gmaps: {
							index: '//maps.google.',
							src: '%id%&output=embed'
						}
					},

					srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".

				});
			}
		},


		isotope: function() {

			if ( $post_fitRows.exists() ) {
				var $grid = $post_fitRows.imagesLoaded( function() {
					// init Isotope after all images have loaded
					$grid.isotope({
						itemSelector: '.post-grid__item',
						layoutMode: 'fitRows',
						masonry: {
							columnWidth: '.post-grid__item'
						}
					});
				});
			}

			if ( $post_masonry.exists() ) {
				var masonry = $post_masonry.imagesLoaded( function() {
					// init Isotope after all images have loaded
					masonry.isotope({
						itemSelector: '.post-grid__item',
						layoutMode: 'masonry',
						percentPosition: true,
						masonry: {
							columnWidth: '.post-grid__item'
						}
					});
				});
			}

			if ( $team_album.exists() ) {
				var masonryTeamAlbum = $team_album.imagesLoaded( function() {
					// init Isotope after all images have loaded
					masonryTeamAlbum.isotope({
						itemSelector: '.album__item',
						layoutMode: 'masonry',
						percentPosition: true,
						masonry: {
							columnWidth: '.album__item'
						}
					});
				});
			}


			if ( $post_masonry_filter.exists() ) {
				var masonry_grid = $post_masonry_filter.imagesLoaded( function() {

					var $filter = $('.js-category-filter');

					// init Isotope after all images have loaded
					masonry_grid.isotope({
						filter      : '*',
						itemSelector: '.post-grid__item',
						layoutMode: 'masonry',
						masonry: {
							columnWidth: '.post-grid__item'
						}
					});

					// filter items on button click
					$filter.on( 'click', 'button', function() {
						var filterValue = $(this).attr('data-filter');
						$filter.find('button').removeClass('category-filter__link--active');
						$(this).addClass('category-filter__link--active');
						masonry_grid.isotope({
							filter: filterValue
						});
					});
				});
			}

		},


		SlickCarousel: function() {

			// Featured News Carousel
			if ( $slick_featured_carousel.exists() ) {

				$slick_featured_carousel.slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 5000,
					centerMode: true,
					centerPadding: 0,

					responsive: [
						{
							breakpoint: 992,
							settings: {
								arrows: false,
								centerMode: true,
								centerPadding: 0,
								slidesToShow: 3
							}
						},
						{
							breakpoint: 768,
							settings: {
								arrows: false,
								centerMode: true,
								centerPadding: 0,
								slidesToShow: 2
							}
						},
						{
							breakpoint: 480,
							settings: {
								arrows: false,
								centerMode: true,
								centerPadding: 0,
								slidesToShow: 1,
								dots: true
							}
						}
					]
				});

			}

			// Video Slideshow Carousel
			if ( $slick_video_carousel.exists() ) {

				$slick_video_carousel.slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					autoplay: false,
					autoplaySpeed: 5000,

					responsive: [
						{
							breakpoint: 992,
							settings: {
								arrows: false,
								slidesToShow: 3,
								infinite: true
							}
						},
						{
							breakpoint: 768,
							settings: {
								arrows: false,
								slidesToShow: 2,
								infinite: false
							}
						},
						{
							breakpoint: 480,
							settings: {
								arrows: false,
								slidesToShow: 1,
								infinite: false
							}
						}
					]
				});

				// Filter by Categories
				var filtered = false;

				$('.category-filter--carousel .category-filter__link').on('click', function(e){
					var category = $(this).data('category');
					$slick_video_carousel.slick('slickUnfilter');
					$slick_video_carousel.slick('slickFilter', '.' + category);
					$('.category-filter--carousel .category-filter__link--active').removeClass('category-filter__link--active');
					$(this).addClass('category-filter__link--active');
					e.preventDefault();
				});

				// Reset Filter (Show All posts)
				$('.category-filter--carousel .category-filter__link--reset').on('click', function(e){
					$slick_video_carousel.slick('slickUnfilter');
					$('.category-filter--carousel .category-filter__link').removeClass('category-filter__link--active');
					$(this).addClass('category-filter__link--active');
					filtered = false;
					e.preventDefault();
				});

			}

			// Featured News Slider
			if ( $slick_featured_slider.exists() ) {

				$slick_featured_slider.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
					autoplaySpeed: 5000,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								arrows: false
							}
						}
					]
				});


				// Featured Posts (.posts--slider-featured)

				// Filter by Categories
				var filtered2 = false;

				$('.category-filter--featured .category-filter__link').on('click', function(e){
					var category = $(this).data('category');
					$slick_featured_slider.slick('slickUnfilter');
					$slick_featured_slider.slick('slickFilter', '.' + category);
					$('.category-filter--featured .category-filter__link--active').removeClass('category-filter__link--active');
					$(this).addClass('category-filter__link--active');
					e.preventDefault();
				});

				// Reset Filter (Show All posts)
				$('.category-filter--featured .category-filter__link--reset').on('click', function(e){
					$slick_featured_slider.slick('slickUnfilter');
					$('.category-filter--featured .category-filter__link').removeClass('category-filter__link--active');
					$(this).addClass('category-filter__link--active');
					filtered2 = false;
					e.preventDefault();
				});
			}


			// Team Roster Carousel
			if ( $slick_team_roster.exists() ) {

				$slick_team_roster.slick({
					centerMode: true,
					centerPadding: 0,
					slidesToShow: 3,
					autoplay: true,
					autoplaySpeed: 3000,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								arrows: false,
								centerMode: true,
								centerPadding: 0,
								slidesToShow: 3
							}
						},
						{
							breakpoint: 480,
							settings: {
								arrows: false,
								centerMode: true,
								centerPadding: 0,
								slidesToShow: 1
							}
						}
					]
				});
			}


			// Awards Carousel
			if ( $slick_awards.exists() ) {

				if ( $template_var == 'template-football' ) {

					// Filter by Categories
					var filtered3 = false;

					$('.awards-filter .awards-filter__link').on('click', function(e){
						var category = $(this).data('category');
						$slick_awards.slick('slickUnfilter');
						$slick_awards.slick('slickFilter', '.' + category);
						$('.awards-filter .awards-filter__link--active').removeClass('awards-filter__link--active');
						$(this).addClass('awards-filter__link--active');
						e.preventDefault();
					});

					// Reset Filter (Show All posts)
					$('.awards-filter .awards-filter__link--reset').on('click', function(e){
						$slick_awards.slick('slickUnfilter');
						$('.awards-filter .awards-filter__link').removeClass('awards-filter__link--active');
						$(this).addClass('awards-filter__link--active');
						filtered3 = false;
						e.preventDefault();
					});


					// Awards Slider
					$slick_awards.slick({
						slidesToShow: 1,
						arrows: false,
						dots: true,
						vertical: true,
						verticalSwiping: true,
					});


				} else {

					$slick_awards.slick({
						slidesToShow: 1,
						arrows: true,
						dots: true,
						responsive: [
							{
								breakpoint: 768,
								settings: {
									arrows: false
								}
							}
						]
					});
				}

			}


			// Player Info
			if ( $slick_player_info.exists() ) {

				$(window).on('load', function() {
					$slick_player_info.slick({
						slidesToShow: 3,
						arrows: false,
						dots: false,
						infinite: false,
						variableWidth: true,
						responsive: [
							{
								breakpoint: 992,
								settings: {
									slidesToShow: 1,
									dots: true,
									variableWidth: false
								}
							}
						]
					});
				});
			}


			// Products Slider
			if ( $slick_product.exists() ) {

				$slick_product.slick({
					slidesToShow: 1,
					arrows: false,
					dots: true,
				});
			}


			// Products Slider - Thumbs
			if ( $slick_product_soccer.exists() ) {

				$slick_product_soccer.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					asNavFor: '.product__slider-thumbs'
				});
				$('.product__slider-thumbs').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					asNavFor: $slick_product_soccer,
					focusOnSelect: true,
					vertical: true,
				});
			}


			// Team Roster - Card Slider
			if ( $slick_team_roster_card.exists() ) {

				$slick_team_roster_card.slick({
					slidesToShow: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 992,
							settings: {
								arrows: false,
							}
						}
					]
				});
			}


			// Team Roster - Case Slider
			if ( $slick_team_roster_case.exists() ) {

				$slick_team_roster_case.slick({
					slidesToShow: 3,
					autoplay: true,
					autoplaySpeed: 3000,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								arrows: false,
								slidesToShow: 2
							}
						},
						{
							breakpoint: 480,
							settings: {
								arrows: false,
								slidesToShow: 1
							}
						}
					]
				});
			}


			// Hero Slider
			if ( $slick_hero_slider.exists() ) {

				$slick_hero_slider.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					autoplay: true,
					autoplaySpeed: 8000,
					asNavFor: '.hero-slider-thumbs',

					responsive: [
						{
							breakpoint: 992,
							settings: {
								fade: false,
							}
						}
					]
				});
				$('.hero-slider-thumbs').slick({
					slidesToShow: 3,
					slidesToScroll: 1,
					asNavFor: $slick_hero_slider,
					focusOnSelect: true,
				});
			}



			// Hero Slider - Football
			if ( $slick_hero_slider_football.exists() ) {

				$slick_hero_slider_football.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					fade: true,
					dots: true,
					autoplay: true,
					autoplaySpeed: 8000,
					adaptiveHeight: true,
				});
			}


			// Featured News Slider - variable width
			if ( $slick_slider_var_width.exists() ) {

				$slick_slider_var_width.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: false,
					autoplaySpeed: 5000,
					adaptiveHeight: true,
					responsive: [
						{
							breakpoint: 768,
							settings: {
								arrows: false
							}
						}
					]
				});
			}


			// Team Roster - Grid Small Slider
			if ( $slick_team_roster_grid_slider.exists() ) {

				$slick_team_roster_grid_slider.slick({
					slidesToShow: 3,
					autoplay: false,
					autoplaySpeed: 3000,
					arrows: true,
					dots: false,
					infinite: false,
					responsive: [
						{
							breakpoint: 1199,
							settings: {
								slidesToShow: 2
							}
						},
						{
							breakpoint: 768,
							settings: {
								arrows: false,
								slidesToShow: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								arrows: false,
								slidesToShow: 1
							}
						}
					]
				});
			}


			// Team Cards Compact - Slider
			if ( $slick_team_roster_card_compact.exists() ) {

				$slick_team_roster_card_compact.slick({
					slidesToShow: 3,
					autoplay: false,
					autoplaySpeed: 3000,
					arrows: true,
					dots: false,
					infinite: false,
					responsive: [
						{
							breakpoint: 1199,
							settings: {
								slidesToShow: 2
							}
						},
						{
							breakpoint: 768,
							settings: {
								arrows: false,
								slidesToShow: 1
							}
						},
						{
							breakpoint: 480,
							settings: {
								arrows: false,
								slidesToShow: 1
							}
						}
					]
				});
			}

		},


		ContentFilter: function() {

			if ( $content_filter.exists() ) {
				$('.content-filter__toggle').on('click', function(e){
					e.preventDefault();
					$(this).toggleClass('content-filter__toggle--active');
					$('.content-filter__list').toggleClass('content-filter__list--expanded');
				});
			}

		},


		ChartJs: function() {

			if ( $chart_games_history.exists() ) {
				var data = {
					type: 'bar',
					data: {
						labels: ["2010", "2011", "2012", "2013", "2014", "2015"],
						datasets: [{
							label: 'WON',
							data: [70, 67, 78, 87, 69, 76],
							backgroundColor: "#ffdc11",
						}, {
							label: 'LOST',
							data: [40, 45, 36, 28, 43, 35],
							backgroundColor: "#ff8429"
						}]
					},
					options: {
						legend: {
							display: false,
							labels: {
								boxWidth: 8,
								fontSize: 9,
								fontColor: '#31404b',
								fontFamily: 'Montserrat, sans-serif',
								padding: 20,
							}
						},
						tooltips: {
							backgroundColor: "rgba(49,64,75,0.8)",
							titleFontSize: 0,
							titleSpacing: 0,
							titleMarginBottom: 0,
							bodyFontFamily: 'Montserrat, sans-serif',
							bodyFontSize: 9,
							bodySpacing: 0,
							cornerRadius: 2,
							xPadding: 10,
							displayColors: false,
						},
						scales: {
							xAxes: [{
								barThickness: 14,
								gridLines: {
									display:false,
									color: "rgba(255,255,255,0)",
								},
								ticks: {
									fontColor: '#9a9da2',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
								},
							}],
							yAxes: [{
								gridLines: {
									display:false,
									color: "rgba(255,255,255,0)",
								},
								ticks: {
									beginAtZero: true,
									fontColor: '#9a9da2',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
									padding: 20
								}
							}]
						}
					},
				};

				var ctx = $chart_games_history;
				var gamesHistory = new Chart(ctx, data);
				document.getElementById('gamesHistoryLegend').innerHTML = gamesHistory.generateLegend();
			}



			if ( $chart_games_history_soccer.exists() ) {
				var data2 = {
					type: 'bar',
					data: {
						labels: ["2010", "2011", "2012", "2013", "2014", "2015"],
						datasets: [{
							label: 'WON',
							data: [40, 45, 36, 28, 42, 35],
							backgroundColor: "#c2ff1f",
						}, {
							label: 'LOST',
							data: [70, 67, 75, 86, 68, 76],
							backgroundColor: "#38a9ff",
						}]
					},
					options: {
						legend: {
							display: false,
							labels: {
								boxWidth: 8,
								fontSize: 9,
								fontColor: '#31404b',
								fontFamily: 'Montserrat, sans-serif',
								padding: 20,
							}
						},
						tooltips: {
							backgroundColor: "rgba(49,64,75,0.8)",
							titleFontSize: 0,
							titleSpacing: 0,
							titleMarginBottom: 0,
							bodyFontFamily: 'Montserrat, sans-serif',
							bodyFontSize: 9,
							bodySpacing: 0,
							cornerRadius: 2,
							xPadding: 10,
							displayColors: false,
						},
						scales: {
							xAxes: [{
								stacked: true,
								barThickness: 34,
								gridLines: {
									display:false,
									color: "rgba(255,255,255,0)",
								},
								ticks: {
									fontColor: '#9a9da2',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
								},
							}],
							yAxes: [{
								stacked: true,
								gridLines: {
									display:false,
									color: "rgba(255,255,255,0)",
								},
								ticks: {
									fontColor: '#9a9da2',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
									padding: 20,
								}
							}]
						}
					},
				};

				var ctx2 = $chart_games_history_soccer;
				var gamesHistory2 = new Chart(ctx2, data2);
				document.getElementById('gamesHistoryLegendSoccer').innerHTML = gamesHistory2.generateLegend();
			}



			if ( $chart_points_history.exists() ) {
				var data3 = {
					type: 'line',
					data: {
						labels: ["Aug 8", "Aug 15", "Aug 21", "Aug 28", "Sep 4", "Sep 19", "Sep 26", "Oct 3", "Oct 10", "Oct 16", "Oct 23", "Oct 30"],
						datasets: [{
							label: 'POINTS',
							fill: false,
							lineTension: 0,
							backgroundColor: "#ffdc11",
							borderWidth: 2,
							borderColor: "#ffdc11",
							borderCapStyle: 'butt',
							borderDashOffset: 0.0,
							borderJoinStyle: 'bevel',
							pointRadius: 0,
							pointBorderWidth: 0,
							pointHoverRadius: 5,
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "#ffcc00",
							pointHoverBorderWidth: 5,
							pointHitRadius: 10,
							data: [104, 70, 115, 105, 45, 94, 84, 100, 82, 125, 78, 86, 110],
							spanGaps: false,
						}]
					},
					options: {
						legend: {
							display: false,
							labels: {
								boxWidth: 8,
								fontSize: 9,
								fontColor: '#31404b',
								fontFamily: 'Montserrat, sans-serif',
								padding: 20,
							}
						},
						tooltips: {
							backgroundColor: "rgba(49,64,75,0.8)",
							titleFontSize: 0,
							titleSpacing: 0,
							titleMarginBottom: 0,
							bodyFontFamily: 'Montserrat, sans-serif',
							bodyFontSize: 9,
							bodySpacing: 0,
							cornerRadius: 2,
							xPadding: 10,
							displayColors: false,
						},
						scales: {
							xAxes: [{
								gridLines: {
									color: "#e4e7ed",
								},
								ticks: {
									fontColor: '#9a9da2',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
								},
							}],
							yAxes: [{
								gridLines: {
									display:false,
									color: "rgba(255,255,255,0)",
								},
								ticks: {
									beginAtZero: true,
									fontColor: '#9a9da2',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
									padding: 20
								}
							}]
						}
					},
				};

				var ctx3 = $chart_points_history;
				var gamesHistory3 = new Chart(ctx3, data3);
			}


			if ( $chart_points_history_soccer.exists() ) {
				var data4 = {
					type: 'line',
					data: {
						labels: ["Aug 8", "Aug 15", "Aug 21", "Aug 28", "Sep 4", "Sep 19", "Sep 26", "Oct 3", "Oct 10", "Oct 16", "Oct 23", "Oct 30"],
						datasets: [{
							label: 'PREV RECORD',
							fill: true,
							lineTension: 0.5,
							backgroundColor: "rgba(194,255,31,0.8)",
							borderWidth: 2,
							borderColor: "#c2ff1f",
							borderCapStyle: 'butt',
							borderDashOffset: 0.0,
							borderJoinStyle: 'bevel',
							pointRadius: 0,
							pointBorderWidth: 0,
							pointHoverRadius: 5,
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "#c2ff1f",
							pointHoverBorderWidth: 5,
							pointHitRadius: 10,
							data: [52, 71, 40, 53, 62, 40, 44, 58, 38, 64, 46, 70, 75],
							spanGaps: false,
						}, {
							label: 'THIS YEAR',
							fill: true,
							lineTension: 0.5,
							backgroundColor: "rgba(56,169,255,0.8)",
							borderWidth: 2,
							borderColor: "#38a9ff",
							borderCapStyle: 'butt',
							borderDashOffset: 0.0,
							borderJoinStyle: 'bevel',
							pointRadius: 0,
							pointBorderWidth: 0,
							pointHoverRadius: 5,
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "#38a9ff",
							pointHoverBorderWidth: 5,
							pointHitRadius: 10,
							data: [71, 52, 87, 53, 17, 62, 56, 37, 91, 48, 75, 64, 78],
							spanGaps: false,
						}]
					},
					options: {
						legend: {
							display: false,
							labels: {
								boxWidth: 8,
								fontSize: 9,
								fontColor: '#31404b',
								fontFamily: 'Montserrat, sans-serif',
								padding: 20,
							}
						},
						tooltips: {
							backgroundColor: "rgba(49,64,75,0.8)",
							titleFontSize: 0,
							titleSpacing: 0,
							titleMarginBottom: 0,
							bodyFontFamily: 'Montserrat, sans-serif',
							bodyFontSize: 9,
							bodySpacing: 0,
							cornerRadius: 2,
							xPadding: 10,
							displayColors: false,
						},
						scales: {
							xAxes: [{
								gridLines: {
									color: "#e4e7ed",
								},
								ticks: {
									fontColor: '#9a9da2',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
								},
							}],
							yAxes: [{
								gridLines: {
									display:false,
									color: "rgba(255,255,255,0)",
								},
								ticks: {
									beginAtZero: true,
									fontColor: '#9a9da2',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
									padding: 20
								}
							}]
						}
					},
				};

				var ctx4 = $chart_points_history_soccer;
				var gamesHistory4 = new Chart(ctx4, data4);

				document.getElementById('gamesPoinstsLegendSoccer').innerHTML = gamesHistory4.generateLegend();
			}


			if ( $chart_points_history_football.exists() ) {
				var data5 = {
					type: 'line',
					data: {
						labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
						datasets: [{
							label: '2016',
							fill: false,
							lineTension: 0,
							borderWidth: 4,
							backgroundColor: "#3ffeca",
							borderColor: "#3ffeca",
							borderCapStyle: 'butt',
							borderDashOffset: 0.0,
							borderJoinStyle: 'bevel',
							pointRadius: 5,
							pointBorderWidth: 5,
							pointBackgroundColor: "#fff",
							pointHoverRadius: 5,
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "#3ffeca",
							pointHoverBorderWidth: 5,
							pointHitRadius: 10,
							data: [115, 145, 110, 125, 165, 140, 145, 110, 145, 125, 135, 190],
							spanGaps: false,
						}, {
							label: '2015',
							fill: false,
							lineTension: 0,
							borderWidth: 4,
							backgroundColor: "#9e69ee",
							borderColor: "#9e69ee",
							borderCapStyle: 'butt',
							borderDashOffset: 0.0,
							borderJoinStyle: 'bevel',
							pointRadius: 5,
							pointBorderWidth: 5,
							pointBackgroundColor: "#fff",
							pointHoverRadius: 5,
							pointHoverBackgroundColor: "#fff",
							pointHoverBorderColor: "#9e69ee",
							pointHoverBorderWidth: 5,
							pointHitRadius: 10,
							data: [95, 65, 130, 75, 113, 85, 102, 85, 103, 58, 48, 138],
							spanGaps: false,
						}]
					},
					options: {
						legend: {
							display: false,
							labels: {
								boxWidth: 8,
								fontSize: 9,
								fontColor: '#31404b',
								fontFamily: 'Montserrat, sans-serif',
								padding: 20,
							}
						},
						tooltips: {
							backgroundColor: "rgba(50,49,80,0.8)",
							titleFontSize: 0,
							titleSpacing: 0,
							titleMarginBottom: 0,
							bodyFontFamily: 'Montserrat, sans-serif',
							bodyFontSize: 9,
							bodySpacing: 0,
							cornerRadius: 2,
							xPadding: 10,
							displayColors: false,
						},
						scales: {
							xAxes: [{
								gridLines: {
									color: "#3c3b5b",
								},
								ticks: {
									fontColor: '#9e9caa',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
								},
							}],
							yAxes: [{
								gridLines: {
									color: "#3c3b5b",
								},
								ticks: {
									beginAtZero: true,
									fontColor: '#9e9caa',
									fontFamily: 'Montserrat, sans-serif',
									fontSize: 10,
									padding: 20
								}
							}]
						}
					},
				};

				var ctx5 = $chart_points_history_football;
				var gamesHistory5 = new Chart(ctx5, data5);

				document.getElementById('gamesPoinstsLegendFootball').innerHTML = gamesHistory5.generateLegend();
			}


			if ( $chart_player_stats.exists() ) {
				var radar_data = {
					type: 'radar',
					data: {
						labels: ["OFF", "AST", "3PT", "2PT", "DEF"],
						datasets: [{
							data: [72, 25, 40, 72, 50],
							backgroundColor: "rgba(255,220,17,0.8)",
							borderColor: "#ffdc11",
							pointBorderColor: "rgba(255,255,255,0)",
							pointBackgroundColor: "rgba(255,255,255,0)",
							pointBorderWidth: 0
						}]
					},
					options: {
						legend: {
							display: false,
						},
						tooltips: {
							backgroundColor: "rgba(49,64,75,0.8)",
							titleFontSize: 10,
							titleSpacing: 2,
							titleMarginBottom: 4,
							bodyFontFamily: 'Montserrat, sans-serif',
							bodyFontSize: 9,
							bodySpacing: 0,
							cornerRadius: 2,
							xPadding: 10,
							displayColors: false,
						},
						scale: {
							angleLines: {
								color: "rgba(255,255,255,0.025)",
							},
							pointLabels: {
								fontColor: "#9a9da2",
								fontFamily: 'Montserrat, sans-serif',
							},
							ticks: {
								beginAtZero: true,
								display: false,
							},
							gridLines: {
								color: "rgba(255,255,255,0.05)",
								lineWidth: 2,
							},
							labels: {
								display: false
							}
						}
					},
				};

				var ctx_player_stats = $chart_player_stats;
				var playerInfo = new Chart(ctx_player_stats, radar_data);
			}

		},

		RangeSlider: function(){

			if ( $range_slider.exists() ) {

				var rangeSlider = document.getElementById('slider-range');

				noUiSlider.create(rangeSlider, {
					start: [ 0, 350 ],
					connect: true,
					range: {
						'min': [ 0 ],
						'max': [ 450 ]
					}
				});

				var snapValues = [
					document.getElementById('slider-range-value-min'),
					document.getElementById('slider-range-value-max')
				];

				rangeSlider.noUiSlider.on('update', function( values, handle ) {
					snapValues[handle].innerHTML = values[handle];
				});
			}

		},


		GoogleMap: function() {

			// Google Map
			if ( $gmap.exists()) {
				$gmap.each(function() {

					var $elem = $(this),
							mapAddress = $elem.attr('data-map-address') ? $elem.attr('data-map-address') : "New York, USA",
							mapZoom    = $elem.attr('data-map-zoom') ? $elem.attr('data-map-zoom') : "15",
							mapStyle   = $elem.attr('data-map-style');

					var styles_output = [];

					// Skins
					if ( mapStyle == 'default') {
						// Skin: Default
						styles_output = [{"featureType": "administrative.country", "elementType": "geometry", "stylers": [{"visibility": "simplified"}, {"hue": "#ff0000"}]}];

					} else if ( mapStyle == 'light-dream') {
						// Skin: Light Dream
						styles_output = [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994			},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{				"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}];

					} else if ( mapStyle == 'shades-of-grey') {
						// Skin: Shades of Grey
						styles_output = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}];

					} else if ( mapStyle == 'blue-water') {
						// Skin: Blue Water
						styles_output = [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}];

					} else {
						// Skin: Ultra Light
						styles_output = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
					}

					$elem.gmap3({
						zoom: Number(mapZoom),
						mapTypeId : google.maps.MapTypeId.ROADMAP,
						scrollwheel: false,
						address: mapAddress,
						styles: styles_output,
					})
					.marker({
						address: mapAddress,
					});
				});
			}
		},


		InstagramFeed: function(){

			// Basketball version (Footer)
			if ( $insta_feed.exists() ) {

				var insta_feed = new Instafeed({
					get: 'user',
					target: 'instagram-feed',
					userId: '2251271172',
					accessToken: '',
					limit: 6,
					template: '<li class="widget-instagram__item"><a href="{{link}}" id="{{id}}" class="widget-instagram__link-wrapper" target="_blank"><span class="widget-instagram__plus-sign"><img src="{{image}}" alt="" class="widget-instagram__img" /></span></a></li>'
				});
				insta_feed.run();
			}

			// American Football version (Player Bio)
			if ( $insta_feed_alt.exists() ) {

				var insta_feed_alt = new Instafeed({
					get: 'user',
					target: 'instagram-feed-alt',
					userId: '2251271172',
					accessToken: '',
					limit: 12,
					template: '<li class="widget-instagram__item"><a href="{{link}}" id="{{id}}" class="widget-instagram__link-wrapper" target="_blank"><span class="widget-instagram__plus-sign"><img src="{{image}}" alt="" class="widget-instagram__img" /></span></a></li>'
				});
				insta_feed_alt.run();
			}

		},


		SocialCounters: function(){

			if ( $social_counters.exists() ) {

				$social_counters.SocialCounter({
					// Facebook
					facebook_user: '',
					facebook_token: '',

					// Google+
					google_plus_id: '',
					google_plus_key: '',

					// Instagram
					instagram_user: '',
					instagram_token: '',

					// Twitter
					twitter_user: '',
				});

			}

		},


		miscScripts: function() {
			// Tooltips
			$('[data-toggle="tooltip"]').tooltip();

			[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {
				new SelectFx(el);
			} );

			// Duotone Images
			if ( $template_var == 'template-football' ) {
				if ( $(".duotone-img").exists() ) {
					$(".duotone-img").duotone();
				}
			}

			// Marquee
			if ( $marquee.exists() ) {
				$marquee.marquee({
					allowCss3Support: true,
					pauseOnHover: true
				});
			}

			// Game Result Widget - Expand
			if ( $template_var == 'template-football' ) {

				// Switch Toggle (American Football)
				$('.widget-game-result .switch-toggle').each(function() {
					$(this).on('change', function(){

						var text_expand = $(this).find('.switch__label-txt').data('text-expand');
						var text_shrink = $(this).find('.switch__label-txt').data('text-shrink');

						$(this).parent().parent().parent().find('.widget-game-result__extra-stats').toggleClass('active');
						$(this).find('.switch__label-txt').text(function(i, text){
							return text === text_shrink ? text_expand : text_shrink;
						});
					});
				});

			} else {

				// Switch Toggle (Basketball, Soccer)
				$('.widget-game-result .js-switch-toggle').each(function() {
					$(this).on('click', function(){

						var text_expand = $(this).find('.js-switch-txt').data('text-expand');
						var text_shrink = $(this).find('.js-switch-txt').data('text-shrink');

						$(this).parent().parent().find('.widget-game-result__extra-stats').toggleClass('active');
						$(this).find('.js-switch-txt').text(function(i, text){
							return text === text_shrink ? text_expand : text_shrink;
						});
					});
				});

			}

		},

	};

	$(document).on('ready', function() {
		Core.initialize();
	});

})(jQuery);


























