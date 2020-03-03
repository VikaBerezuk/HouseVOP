console.log("1");



$('[data-spy="scroll"]').on('activate.bs.scrollspy', function (event) {
	var section = event.target.firstChild.innerHTML;

	console.log(">>", section);

	// if (section != "Home" ) {
	// 	document.getElementById("main-header").style.display = "none";
	// 	$("#additional-header").addClass('additional-header-visible');
	// } else {
	// 	document.getElementById("main-header").style.display = "block";
	// 	$("#additional-header").removeClass('additional-header-visible');
	// }
})
