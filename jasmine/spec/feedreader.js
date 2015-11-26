/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
$(function() {
	describe('RSS Feeds', function() {
		// test that there is an allfeeds variable defined that contains data
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).toBeGreaterThan(0);
		});


		// test that each feed has a URL defined and that the URL is not empty.
		it('each feed url is valid', function() {
			allFeeds.forEach( function(feed) {
				expect(feed.url).not.toBe(undefined);
				expect(feed.url.length).toBeGreaterThan(0);
			}); 
		});


		// Test that all feeds have a name defined and that the name is not empty.
		it('each feed name is valid', function() {
			allFeeds.forEach( function(feed) {
				expect(feed.name).not.toBe(undefined);
				expect(feed.name.length).toBeGreaterThan(0);
			}); 
		});
	});


	// selection of tests that test the menu visablity
	describe('The menu', function() {
		// check that the menu is hidden by default
		it('menu is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

		// test that the menu changes classes when clicked
		it('menu changes visiblity when menu icon clicked', function() {
			$('.menu-icon-link').click();
			expect($('body').attr('class')).toBe('');
			$('.menu-icon-link').click();
			expect($('body').attr('class')).toBe('menu-hidden');
		});
	});

	// selection of tests that test the initial content
	describe('Initial Entries', function() {
		
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});

		// check that we get more than 0 articles for each feed we load
		it('check to see if we have entries', function(done) {
			expect($('.entry').length).toBeGreaterThan(0);
			done();
		});
		
		// selection of tests that test the content of the news feed
		describe('New Feed Selection', function() {
			var current_feed;

			// run each function, get the current news
			beforeEach(function(done) {
				current_feed = $('.feed').html();
				loadFeed(1, function() {
					done();
				});
			});
			
			// test that all functions have changed the feed
			it('the content displayed is changed', function(done) {
				expect(current_feed).not.toBe($('.feed').html());
				done();
			});
		});
	});
}());
