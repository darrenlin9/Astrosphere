// Darren Lin
// This script continuosly checks the static marker variable 
// declared in Player.js, and changes the GUI Texture
// accordingly.

var health1 : Texture2D;
var health2 : Texture2D;
var health3 : Texture2D;

function Update () 
{
	if(Player.marker == 0)
		guiTexture.texture = health3;
	else if(Player.marker == 1)
		guiTexture.texture = health2;
	else 
		guiTexture.texture = health1;
}