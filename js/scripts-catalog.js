		var purchasePopup = document.querySelector(".purchase-popup");
		var purchaseLink = document.querySelectorAll(".button-add-to-cart");
		var purchaseClose = document.querySelector(".purchase-close");
	
		// Попап заказа

		for (var i = 0; i < purchaseLink.length; i++){
			purchaseLink[i].addEventListener("click", function(evt) {
			evt.preventDefault();
			// console.log("Now I Became Horse");
			purchasePopup.classList.remove("display-none");
			purchasePopup.classList.add("popup-animation");
		});
		}

		purchaseClose.addEventListener("click", function(evt) {
			evt.preventDefault();
			purchasePopup.classList.add("display-none");
			purchasePopup.classList.remove("popup-animation");
		});