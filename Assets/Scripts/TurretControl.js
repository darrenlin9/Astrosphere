// Darren Lin
// Turret AI: tracks player and continously instantiates a 
// prefab with a force at the location "TurretProjectileSpawn"
// which is positioned in the Unity editor.

var damp : int = 0;
var LookAtTarget : Transform;
var bulletPrefab : Transform;
var savedTime;

function Update () 
{
	if(LookAtTarget)
	{
		// Track the target.
		var rotate = Quaternion.LookRotation(LookAtTarget.position - transform.position);
		transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.time * 100);
		var seconds : int = Time.time;
		
		// This gives the turret a proper delay between calling Shoot.
		var oddeven = (seconds % 2);
		if(oddeven)
		{
			Shoot(seconds);     
		}
	}
}

function Shoot(seconds)
{
	// If turret has not fired this second, fire.
	if(seconds != savedTime)
	var bullet = Instantiate(bulletPrefab, GameObject.Find("TurretProjectileSpawn").transform.position, 
	Quaternion.identity);
	bullet.rigidbody.AddForce(transform.forward * 50000);
	savedTime = seconds;
}
