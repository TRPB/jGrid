$.fn.jGrid = function(options) {
	var table = this;
	if (!options) options = {'height': 400};	
	if (!options.width) {
		$(this).css('display', 'none');
		options.width = $(this).parent().width();
		$(this).css('display', '');
	}
	
	$(table).wrap('<div class="jgrid"></div>');	
	
	var jgrid = $(this).parent();	
	var leftOuterWidth = $(this).find(' > tbody > tr > td:first-child').outerWidth(true);
	var leftWidth = $(this).find('tbody tr td:first-child').width();
	var leftHeight = $(this).find('tbody tr td').last().outerHeight(true);
	
	//Move the thead up by its height as it's now position:absolute
	$(table).find('thead').css({'height': $(this).find('thead').height(), 'margin-top': 0-$(this).find('thead').height()});
	
	//Move the table down by the height of the thead and give it a fixed height so it scrolls
	$(table).css({'margin-top': $(this).find('thead').height(), 'height': options.height-$(this).find('thead').height()});
	
	//set the with and height of the grid area
	jgrid.css({'width': options.width, 'height': options.height});

	$(table).find('> tbody > tr > td:first-child').css({'width': leftWidth, 'height': leftHeight});
	$(table).find('> tbody').css({'padding-left': leftOuterWidth});
	$(table).find('> thead').css({'padding-left': leftOuterWidth});
	$(jgrid).find(' > table > tbody > tr > td:first-child').css('left', $(jgrid).scrollLeft());   
	var scrollAreaTop = this.find('tbody').position().top;
    var scrollAreaBottom = scrollAreaTop + this.height();	
    var tWidth = $(this).outerWidth();
    
    
    $(jgrid).scroll(function(e) {    	
    	//Resize the table to match the horizontal scrolling, this keeps the vertical scrollbar in the right place
    	table.css('width', tWidth + $(this).scrollLeft());
    	//Move the left hand labels across to match the scroll distance
    	$(jgrid).find(' > table > tbody > tr > td:first-child').css('left', $(this).scrollLeft());        
    });
};
