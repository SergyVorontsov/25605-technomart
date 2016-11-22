		var buybut = document.querySelectorAll(".buy");
		var popupcatalog = document.querySelector(".add-to-cart");
		var closebform = document.querySelector(".add-to-cart-close");
		var overlay = document.querySelector(".modal-overlay");


		for (var i = buybut.length - 1; i >= 0; i--) {
  			buybut[i].addEventListener("click", function(event) {
    		event.preventDefault();
    		popupcatalog.classList.add("add-to-cart-show");
    		overlay.classList.add("modal-overlay-show");
  			});
		}

		overlay.addEventListener("click", function(event) {
			overlay.classList.remove("modal-overlay-show");
			popupcatalog.classList.remove("add-to-cart-show");
		});

		closebform.addEventListener("click", function(event) {
			event.preventDefault();
			popupcatalog.classList.remove("add-to-cart-show");
			overlay.classList.remove("modal-overlay-show");
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode == 27) {
				if (popupcatalog.classList.contains("add-to-cart-show")) {
				popupcatalog.classList.remove("add-to-cart-show");
				overlay.classList.remove("modal-overlay-show");
				}
			}
		});

		var feedbackform = document.querySelector(".feedback-btn");
		var popup = document.querySelector(".modal-content"); 
		var closeform = document.querySelector(".modal-content-close");
		var form = popup.querySelector("form");
		var login = popup.querySelector("[name=login]");
		var mail = popup.querySelector("[name=mail]");
		var comment = popup.querySelector("[name=comment]");
		var storage = localStorage.getItem("login");
		var mapbutton = document.querySelector(".openmap");
		var map = document.querySelector(".modal-content-map");
		var closemap = document.querySelector(".map-close");

		feedbackform.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.add("modal-content-show");
			overlay.classList.add("modal-overlay-show");
			if(storage) {
				login.value = storage;
				mail.focus();
			} else {
				login.focus();
			}
		});

		overlay.addEventListener("click", function(event) {
			overlay.classList.remove("modal-overlay-show");
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
			map.classList.remove("modal-content-map-show");
			popupcatalog.classList.remove("add-to-cart-show");

		});

		closeform.addEventListener("click", function(event) {
			event.preventDefault();
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-error");
			overlay.classList.remove("modal-overlay-show");
		});

		form.addEventListener("submit", function(event) {
			if (!login.value || !mail.value || !comment.value) {
			event.preventDefault();
			popup.classList.remove("modal-error");
          	popup.offsetWidth = popup.offsetWidth;
			popup.classList.add("modal-error");
			} 
			else {
				localStorage.setItem("login", login.value);
			} 
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode == 27) {
				if (popup.classList.contains("modal-content-show")) {
				popup.classList.remove("modal-content-show");
				popup.classList.remove("modal-error");
				overlay.classList.remove("modal-overlay-show");
				}
			}
		});

		mapbutton.addEventListener("click", function(event) {
			event.preventDefault();
			map.classList.add("modal-content-map-show");
			overlay.classList.add("modal-overlay-show");
		});

		closemap.addEventListener("click", function(event) {
			event.preventDefault();
			map.classList.remove("modal-content-map-show");
			overlay.classList.remove("modal-overlay-show");
		});

		window.addEventListener("keydown", function(event) {
			if (event.keyCode === 27) {
				if (map.classList.contains("modal-content-map-show")) {
				map.classList.remove("modal-content-map-show");
				overlay.classList.remove("modal-overlay-show");
				}
			}
		});



		