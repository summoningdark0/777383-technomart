		var purchasePopup = document.querySelector(".purchase-popup");
		var purchaseLink = document.querySelectorAll(".button-add-to-cart");
		var purchaseClose = document.querySelector(".purchase-close");
		var feedbackPopup = document.querySelector(".feedback-popup");
		var feedbackLink = document.querySelector(".button-contact-us");
		var feedbackClose = document.querySelector(".feedback-close");
		var mapPopup = document.querySelector(".map-popup");
		var mapLink = document.querySelector(".map");
		var	mapClose = document.querySelector(".map-close");
		var tab = document.querySelectorAll(".service-option");
		var tabContents = document.querySelectorAll(".service-description");
		// Попап заказа

		for (var i = 0; i < purchaseLink.length; i++){
			purchaseLink[i].addEventListener("click", function(evt) {
			evt.preventDefault();
			// console.log("Now I Became Horse");
			purchasePopup.classList.remove("display-none");
		});
		}

		purchaseClose.addEventListener("click", function(evt) {
			evt.preventDefault();
			purchasePopup.classList.add("display-none");
		});

		// попап отзыва

		feedbackLink.addEventListener("click", function(evt) {
			evt.preventDefault();
			feedbackPopup.classList.remove("display-none");
		});

		feedbackClose.addEventListener("click", function(evt){
			evt.preventDefault();
			feedbackPopup.classList.add("display-none");
		});
		// попап карты
		mapLink.addEventListener("click", function(evt) {
			evt.preventDefault();
			mapPopup.classList.remove("display-none");
		});

		mapClose.addEventListener("click", function(evt)	{
			evt.preventDefault();
			mapPopup.classList.add("display-none");
		});
//потом!
		// for (var j = 0; j < tab.length; j++) {
		// 	tab[j].addEventListener("click", function(evt) {
		// 		evt.preventDefault();
		// 		debugger;
		// 		tabContents[a].classList.remove("display-none");
		// 	});
		// 	}

	



