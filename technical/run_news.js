var rollingOn=true;
var pad_size=255;

function mainLoop()
{
	document.getElementById("newsContent").style.top = pad_size+"px";
	pad_size=pad_size-1;
	if (pad_size==-25) {pad_size=255;}
	t=setTimeout("gateway()",50);
}

function gateway()
{
	if (rollingOn==true) {mainLoop();}
}

function stopLoop()
	{rollingOn=false;}

function startLoop()
{
	rollingOn=true;
	mainLoop();
}

mainLoop();