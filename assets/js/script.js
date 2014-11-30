$(document).ready(function() {
	
	var size = parseInt($("#me").css("font-size"));
	var original = size;
	var larger = size + 2;

	$("#me").hover(function() {
		if ($("#me").hasClass("menu-item-active")) {
			$("#me").removeClass("menu-item-active");
			$("#me").css("font-size", original);
		} else {
			$("#me").addClass("menu-item-active");
			$("#me").css("font-size", larger);
		}
	});

	var size2 = parseInt($("#resume").css("font-size"));
	var original2 = size;
	var larger2 = size + 2;

	$("#resume").hover(function() {
		if ($("#resume").hasClass("menu-item-active")) {
			$("#resume").removeClass("menu-item-active");
			$("#resume").css("font-size", original2);
		} else {
			$("#resume").addClass("menu-item-active");
			$("#resume").css("font-size", larger2);
		}
	});

	var size3 = parseInt($("#blog").css("font-size"));
	var original3 = size;
	var larger3 = size + 2;

	$("#blog").hover(function() {
		if ($("#blog").hasClass("menu-item-active")) {
			$("#blog").removeClass("menu-item-active");
			$("#blog").css("font-size", original3);
		} else {
			$("#blog").addClass("menu-item-active");
			$("#blog").css("font-size", larger3);
		}
	});

	var size4 = parseInt($("#contact").css("font-size"));
	var original4 = size;
	var larger4 = size + 2;

	$("#contact").hover(function() {
		if ($("#contact").hasClass("menu-item-active")) {
			$("#contact").removeClass("menu-item-active");
			$("#contact").css("font-size", original4);
		} else {
			$("#contact").addClass("menu-item-active");
			$("#contact").css("font-size", larger4);
		}
	});

	$("#resume-img").hover(function() {
		if ($("#page-overlay").hasClass("page-overlay-active")) {
			$("#page-overlay").removeClass("page-overlay-active");
			$("#menu-wrapper").show();
		} else {
			$("#page-overlay").addClass("page-overlay-active");
			$("#menu-wrapper").hide();
		}
	});

	$(".post-title").hover(function() {
		if ($(this).hasClass("menu-item-active")) {
			$(this).removeClass("menu-item-active");
		} else {
			$(this).addClass("menu-item-active");
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
		alert("Hi " + name + "! Sorry to disappoint you, but my question feature is currently under construction. Please feel free to e-mail or call me at anytime. Thank you for your time!");
		$("#question").text("Sorry " + name + "! I Cannot Answer You Here!");
	});

});