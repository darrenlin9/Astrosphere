// Darren Lin
var player : Transform;
var shield : Transform;
var shieldTime : int = 5;
var shieldCooldown : int = 10;

function Start()
{
	while(true)
	{
		while(!Input.GetButtonDown("Fire2")) yield;
		audio.Play();
		renderer.enabled = true;
		collider.enabled = true;
		yield WaitForSeconds(shieldTime);
		renderer.enabled = false;
		collider.enabled = false;
		yield WaitForSeconds(shieldCooldown);
	}
}

function Update()
{
	shield.LookAt(player);
	shield.Translate((Player.speed * 10) * Vector3.forward * Time.deltaTime);
}