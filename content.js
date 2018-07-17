window.onload = function() {
	
	// Check if extention was loaded successfully on website
	console.log("Grafeon Crypto Signal Finder successfully loaded!");
	
	// parse table
	parsed_data = $(".tv-data-table__tbody").html();
	
	// set interval function, checkes every X minutes / seconds (change duration at the very end of file)
	window.setInterval(function(){
		
		// STRONG BUY signals
		$(".tv-screener-table__signal--strong-buy").each(function() {
			
			// Checking ONLY for Binance signals (you can change to yours)
			if ($(this).parent().parent().find("td:last-child").text() == "BINANCE") {
				
				// Getting the symbol
				symbol = $(this).parent().parent().find(".tv-screener__symbol").text();
		   
				/* 
				 * AJAX call to PHP file on your server, use https://github.com/jaggedsoft/php-binance-api to write your custom PHP binance script
				 * - Replace URL attribute to your PHP script, do not forget to set Access-Control-Allow-Origin to ALL - https://stackoverflow.com/questions/7564832/how-to-bypass-access-control-allow-origin
				*/
				$.ajax({  
					type: 'POST',  
					url: 'PLACE-AN-URL-HERE-TO-SEND-DATA', 
					data: { trading_symbol: symbol, signal: "buy" },
					success: function(response) {
						console.log(response);
					}
				});
			
			}

		});
		
		// STRONG SELL signals
		$(".tv-screener-table__signal--sell, .tv-screener-table__signal--strong-sell").each(function() {
			
			// Checking ONLY for Binance signals (you can change to yours)
			if ($(this).parent().parent().find("td:last-child").text() == "BINANCE") {
				
				symbol = $(this).parent().parent().find(".tv-screener__symbol").text();
		   
				/* 
				 * AJAX call to PHP file on your server, use https://github.com/jaggedsoft/php-binance-api to write your custom PHP binance script
				 * - Replace URL attribute to your PHP script, do not forget to set Access-Control-Allow-Origin to ALL - https://stackoverflow.com/questions/7564832/how-to-bypass-access-control-allow-origin
				*/
				$.ajax({  
					type: 'POST',  
					url: 'PLACE-AN-URL-HERE-TO-SEND-DATA', 
					data: { trading_symbol: symbol, signal: "sell" },
					success: function(response) {
						console.log(response);
					}
				});
				
			}
			
		});

	// Change this value to check for signals every X minutes / seconds. Value is in miliseconds.
	// Currently set to check every 5 seconds.
	}, 5000);

}