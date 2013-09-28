// Darren Lin
// When player collects point targets, play
// sound, destory point target, increase
// player speed, and update score.

static var points = 0;

function OnTriggerEnter (player : Collider)
{
	if(player.tag == 'Player' || player.tag == 'FireBall')
	{
		audio.Play();
		yield WaitForSeconds(0.1);
		Destroy(gameObject);
		AstrospherePlayer.speed += 1.0;
		points++;
	}
}

function Update()
{
	GameObject.Find("GUI_POINTS").guiText.text = ("Score: " + points);
}
