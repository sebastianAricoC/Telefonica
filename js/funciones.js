$(document).ready(function(){

jQuery(function($){
	var topMenuHeight = $("#desktop-nav").outerHeight();
	$("#desktop-nav").menuScroll(topMenuHeight);
});

// COPY THE FOLLOWING FUNCTION INTO ANY SCRIPTS
jQuery.fn.extend({
    menuScroll: function(offset) {
		// Declare all global variables
        var topMenu = this;
		var topOffset = offset ? offset : 0;
        var menuItems = $(topMenu).find("a");
        var lastId;
	
		// Save all menu items into scrollItems array
        var scrollItems = $(menuItems).map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

		// When the menu item is clicked, get the #id from the href value, then scroll to the #id element
        $(topMenu).on("click", "a", function(e){
            var href = $(this).attr("href");
            
            var offsetTop = href === "#" ? 0 : $(href).offset().top-topOffset;

            $('html, body').stop().animate({ 
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();

        });
		
		// When page is scrolled
        $(window).scroll(function(){
            var nm = $("html").scrollTop();
            var nw = $("body").scrollTop();
            var fromTop = (nm > nw ? nm : nw)+topOffset;

			
			// When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
            var current = $(scrollItems).map(function(){
                if ($(this).offset().top <= fromTop)
                return this;
            });
			
			// Get the most recent passed section from current array
            current = current[current.length-1];
            var id = current && current.length ? current[0].id : "";
            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                $(menuItems)
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
            }      

        });
    }
});


});


    var zoom = 1;
        
        $('.zoom').on('click', function(){
            zoom += 0.1;
            $('.target').css('zoom', zoom);
        });
        $('.zoom-init').on('click', function(){
            zoom = 1;
            $('.target').css('zoom', zoom);
        });
        $('.zoom-out').on('click', function(){
            zoom -= 0.1;
            $('.target').css('zoom', zoom);
        });



 $(document).ready(function() {
  var $window = $(window);
  var div2 = $('#div2');
  var div1 = $('footer');
  var div1_top = div1.offset().top;
  var div1_height = div1.height();
  var div1_bottom = div1_top + div1_height;
  console.log(div1_bottom);
  $window.on('scroll', function() {
    var scrollTop = $window.scrollTop();
    var viewport_height = $(window).height();
    var scrollTop_bottom = scrollTop + viewport_height;
    div2.toggleClass('hide', scrollTop_bottom > div1_bottom);
  });
});       