function upDate(PreviewPic)
	{
	document.getElementById('bigDisplay').style.backgroundImage = "url("+ PreviewPic.src +")";
	document.getElementById('bigDisplay').style.transition = "1.5s";
	}