// Darren Lin
// Displays an end-game message when the
// time limit is reached with the player's 
// score. Then returns to main menu.

var end : GameObject;

function Start()
{
	// Save end game message.
	end = GameObject.FindWithTag("endGame");
	end.guiText.enabled = false;
	
	// Wait for timer to expire then display message.
	yield WaitForSeconds(90);
	GameObject.Find("GUI_END").guiText.text = ("Level Complete! Final Score: " + Target.points);
	end.guiText.enabled = true;
	
	// Restart
	yield WaitForSeconds(5);
	Target.points = 0;
	Timer.seconds = 30;
	Timer.minutes = 1;
	Application.LoadLevel(0);
}
