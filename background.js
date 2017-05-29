//nCage 
(function($) {
	
    var self = $.nCage = new function(){};
	
    $.extend(self, {
        nCageImgs : [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBf82XThuoDDZnOEnUUaTM721wNFmkYHymWYMHBrtvNIpa42Bxslerdmi1ZBlQ8y8_-l4',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9MC8Cdbfvzo8X-JP9Cev5o7YHkEDaXlOsi89nB0ATMTs2Jsnqcq2l8MkspqwAigK9STY',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63TNB_RZ26HeOCoy6G0QMXH3mCm3ErJtt_a-68aOrv8e8dkM7jkrGuuYPMNFuLeXj8BM',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpERX71t9lhmGA4CKxB4-73tbgBGxy282uIDJMaOSE-ztL8AQXEsVlORW6KxcYHTjrTsw',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQwtGJNJ95hyxS5yezNStyOWxN4HFXE4Vsc0bRkABNwLU7KQCzUjwQRfnsECVVSFiYe9I',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwEq97aeL8DIk1o-3NrY-TdRO7f4KyMxwSqgMude__wrMyJT1sUP22E8N3WjFEmkXrXxs',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROi3FEZWExTYDbHri0Iq0rWvimZqF5QuvlNZRpkAt2lwwoN_p74ZzZrPb-1t-7Yn8Zmyk',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXpCqgChfRgjZ1JwELvO5ucgOwI_Cwym22FSTx3I_P4RGFsaLxGPlcqvWdjhO4NIc1b3c',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT1BU08859AtKW2jt41Oy6xwWWugkE70eEhN-jNRxAbcqwvMf3liFP4rlIvq7RytJLKts', 'https://vignette1.wikia.nocookie.net/ttte/images/8/85/CGICranky.PNG/revision/latest/scale-to-width-down/250?cb=20091218164859', 'https://vignette1.wikia.nocookie.net/parody/images/3/33/Bill_%28Thomas_%26_Friends%29.jpg/revision/latest?cb=20150125011438', 'http://vignette1.wikia.nocookie.net/ttte/images/9/9c/ConnorCGIpromo3.png/revision/latest?cb=20140109104731', 
            'https://vignette4.wikia.nocookie.net/ttte/images/8/8c/VictorCGIpromo.png/revision/latest?cb=20100529125112',
            'https://s-media-cache-ak0.pinimg.com/originals/81/49/a1/8149a1ed1c5aeeb2d9bfa21bb5baea7b.jpg',
            'http://vignette2.wikia.nocookie.net/thomas-friends-cgi-series/images/6/69/Porterpromo.png/revision/latest?cb=20160223020247',
            'http://vignette2.wikia.nocookie.net/scratchpad/images/a/ab/Stephen-CGIPromo.png/revision/latest?cb=20130824112507', 'https://vignette2.wikia.nocookie.net/ttte/images/5/5b/Samson.png/revision/latest?cb=20150306205359',
            'https://vignette1.wikia.nocookie.net/ttte/images/3/31/Gatorpromo2.png/revision/latest?cb=20140927150026', 'https://vignette3.wikia.nocookie.net/parody/images/d/d3/Ben_%28Thomas_%26_Friends%29.jpg/revision/latest?cb=20150125011456',
            
        ],
        handleImages : function (lstImgs, time)
        {
            $.each($('img'), function(i,item) { 
                //Skip if image is already replaced
                if($.inArray($(item).attr('src'), lstImgs) == -1)
                {
					var h = $(item).height();
					var w = $(item).width();
					
					//If image loaded
					if(h > 0 && w > 0)
					{
						//Replace
						$(item).css('width', w + 'px').css('height', h + 'px');
						$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
					}
					else
					{
						//Replace when loaded
						$(item).load(function(){
							//Prevent 'infinite' loop
							if($.inArray($(item).attr('src'), lstImgs) == -1)
							{
								var h = $(item).height();
								var w = $(item).width();
								$(item).css('width', w + 'px').css('height', h + 'px');
								$(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
							}
						});
					}
				}
            });
			
            //Keep replacing
            if (time > 0) {
                setTimeout(function () { self.handleImages(lstImgs, time); }, time);
            }
        }
    });

    //Run on jQuery ready
    $(function(){
        self.handleImages(self.nCageImgs, 3000);
    });
})(jQuery);

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  // Send a message to the active tab
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

// This block is new!
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "open_new_tab" ) {
      chrome.tabs.create({"url": request.url});
    }
  }
);

 