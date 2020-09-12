function openProject(projectName,elmnt,color) {

	var i, content, tablinks;

	content = document.getElementsByClassName("content");

	for (i = 0; i < content.length; i++) {
	content[i].style.display = "none";
	}

	tablinks = document.getElementsByClassName("tablink");

	for (i = 0; i < tablinks.length; i++) {
	tablinks[i].style.backgroundColor = "";
	}

	document.getElementById(projectName).style.display = "block";
	elmnt.style.backgroundColor = color;
}

document.getElementById("defaultOpen").click();