		var purchasePopup = document.querySelector(".purchase-popup");
		var purchaseLink = document.querySelectorAll(".button-add-to-cart");
		var purchaseClose = document.querySelector(".purchase-close");
		var feedbackPopup = document.querySelector(".feedback-popup");
		var feedbackLink = document.querySelector(".button-contact-us");
		var feedbackClose = document.querySelector(".feedback-close");
		var mapPopup = document.querySelector(".map-popup");
		var mapLink = document.querySelector(".map");
		var	mapClose = document.querySelector(".map-close");
		// Попап заказа

		for (var i = 0; i < purchaseLink.length; i++){
			purchaseLink[i].addEventListener("click", function(evt) {
			evt.preventDefault();
			purchasePopup.classList.remove("display-none");
			purchasePopup.classList.add("popup-animation");
		});
		}

		purchaseClose.addEventListener("click", function(evt) {
			evt.preventDefault();
			purchasePopup.classList.add("display-none");
			purchasePopup.classList.remove("popup-animation");
		});

		// попап отзыва

		feedbackLink.addEventListener("click", function(evt) {
			evt.preventDefault();
			feedbackPopup.classList.remove("display-none");
			feedbackPopup.classList.add("feedback-popup-animation");
		});

		feedbackClose.addEventListener("click", function(evt){
			evt.preventDefault();
			feedbackPopup.classList.add("display-none");
			feedbackPopup.classList.remove("feedback-popup-animation");
		});
		// попап карты
		mapLink.addEventListener("click", function(evt) {
			evt.preventDefault();
			mapPopup.classList.remove("display-none");
		 	mapPopup.classList.add("map-popup-animation");
		});

		mapClose.addEventListener("click", function(evt)	{
			evt.preventDefault();
			mapPopup.classList.add("display-none");
			mapPopup.classList.remove("map-popup-animation");
		});

