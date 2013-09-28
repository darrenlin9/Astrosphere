// Darren Lin
// This script handles the main menu of the game.
// There are 4 options: Start, Instructions, Credits,
// and exit. Switching between menus is handled by
// switching the current camera.

using UnityEngine;
using System.Collections;

public class MenuControl : MonoBehaviour 
{	

	// The following variables must be public so
	// that the relevant buttons and cameras can
	// tag themselves as 'true' in the Unity editor.
	
	public bool isStartButton = false, 
		isCreditsButton = false,
		isInstructionsButton = false,
		isExitButton = false,
		isInstructionsBackButton = false,
		isCreditsBackButton = false;
	
	public Camera instructionsCamera,
		creditsCamera,
		mainCamera;

	// The following functions: OnMouseEnter()
	// and OnMouseExit()  highlight the menu
	// options when the mouse cursor hovers above.

	void OnMouseEnter()
	{	
		renderer.material.color = Color.yellow;
	}
	void OnMouseExit()
	{
		renderer.material.color = Color.white;
	}

	void OnMouseUp()
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
}