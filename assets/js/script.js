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

	var resume = $("#resume-container").offset();
	var blog = $("#blog-container").offset();
	var contact = $("#contact-container").offset();

	$("#me").click(function() {
		$("html, body").animate({scrollTop:0}, 300);
	});

	$("#resume").click(function() {
		$("html, body").animate({scrollTop:resume.top}, 400);
	});

	$("#blog").click(function() {
		$("html, body").animate({scrollTop:blog.top}, 400);
	});

	$("#contact").click(function() {
		$("html, body").animate({scrollTop:contact.top}, 400);
	});

});