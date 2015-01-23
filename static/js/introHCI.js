'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function projectClick(e) {
	console.log("Project clicked");
	// prevent the page from reloading
	e.preventDefault();
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	console.log("Number of matching items :" + 				 jumbotronHeader.length); 
	jumbotronHeader.text(projectTitle);
	
	// in an event handler, $(this) refers to
	// the object that triggered the event
	$(this).css("background-color", "#7fff00");
	var containingProject = $(this).closest(".project");
	containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");
}

function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Hello good sire"); 
		$("#testjs").text("welcome sire");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}
