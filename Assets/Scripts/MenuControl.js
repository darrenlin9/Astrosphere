// Darren Lin
// This script handles the main menu of the game.
// There are 4 options: Start, Instructions, Credits,
// and exit. Switching between menus is handled by
// switching the current camera.

var isStartButton = false;
var isCreditsButton = false;
var isInstructionsButton = false;
var isExitButton = false;
var isInstructionsBackButton = false;
var isCreditsBackButton = false;
var instructionsCamera : Camera;
var creditsCamera : Camera;
var mainCamera : Camera;

// The following functions: OnMouseEnter()
// and OnMouseExit()  highlight the menu
// options when the mouse cursor hovers above.

function OnMouseEnter()
{
	renderer.material.color = Color.yellow;
}
function OnMouseExit()
{
	renderer.material.color = Color.white;
}

function OnMouseUp()
{
	if(isStartButton)
		Application.LoadLevel(1);
	else if(isExitButton)
		Application.Quit();
	
	if(isInstructionsButton)
	{
		instructionsCamera.enabled = true;
		mainCamera.enabled = false;
	}
	else if(isInstructionsBackButton)
	{
		instructionsCamera.enabled = false;
		mainCamera.enabled = true;
	}
	
	if(isCreditsButton)
	{
		creditsCamera.enabled = true;
		mainCamera.enabled = false;
	}
	else if(isCreditsBackButton)
	{
		creditsCamera.enabled = false;
		mainCamera.enabled = true;
	}
}

