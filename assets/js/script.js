$(document).ready(function() {
	
	$("#me").hover(function() {
		if ($("#me").hasClass("menu-item-active")) {
			$("#me").removeClass("menu-item-active");
		} else {
			$("#me").addClass("menu-item-active");
		}
	});

	$("#resume").hover(function() {
		if ($("#resume").hasClass("menu-item-active")) {
			$("#resume").removeClass("menu-item-active");
		} else {
			$("#resume").addClass("menu-item-active");
		}
	});

	$("#blog").hover(function() {
		if ($("#blog").hasClass("menu-item-active")) {
			$("#blog").removeClass("menu-item-active");
		} else {
			$("#blog").addClass("menu-item-active");
		}
	});

	$("#contact").hover(function() {
		if ($("#contact").hasClass("menu-item-active")) {
			$("#contact").removeClass("menu-item-active");
		} else {
			$("#contact").addClass("menu-item-active");
		}
	});

	$("#resume-img").hover(function() {
		if ($("#page-overlay").hasClass("page-overlay-active")) {
			$("#page-overlay").removeClass("page-overlay-active");
			$("#menu-wrapper").css("display", "block");
		} else {
			$("#page-overlay").addClass("page-overlay-active");
			$("#menu-wrapper").css("display", "none");
		}
	});

	$(".post-title").hover(function() {
		if ($(this).hasClass("menu-item-active")) {
			$(this).removeClass("menu-item-active");
		} else {
			$(this).addClass("menu-item-active");
		}
	});

	$(".contact-info").hover(function() {
		if ($(this).hasClass("contact-info-active")) {
			$(this).removeClass("contact-info-active");
		} else {
			$(this).addClass("contact-info-active");
		}
	});

	$("#me").click(function() {
		$("html, body").animate({scrollTop:0}, 400);
	});

	$("#resume").click(function() {
		$("html, body").animate({scrollTop:$("#resume-container").offset().top - 32}, 400);
	});

	$("#blog").click(function() {
		$("html, body").animate({scrollTop:$("#blog-container").offset().top - 32}, 400);
	});

	$("#contact").click(function() {
		$("html, body").animate({scrollTop:$("#contact-container").offset().top - 32}, 400);
	});

	$("#submit-text").click(function() {
		var name = $("#id").val();
		alert("Hello " + name + "! Sorry to disappoint you, but my question feature is currently under construction. Please feel free to e-mail or call me at anytime. Thank you for your time!");
		$("#question").text("Sorry " + name + "! I Cannot Answer You Here!");
	});

});