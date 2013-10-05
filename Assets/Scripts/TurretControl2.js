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
		transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.time * 10 );
		var seconds : int = Time.time;
		
		// This gives the turret a proper delay between calling Shoot.
		var oddeven = (seconds % 3);
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
	
	// The only factor that distinguishes the TurretControl scripts is when the scripts
	// search for the "TurretProjectileSpawn(2-4)".
	var bullet = Instantiate(bulletPrefab, GameObject.Find("TurretProjectileSpawn2").transform.position, 
	Quaternion.identity);
	bullet.rigidbody.AddForce(transform.forward * 10000);
	savedTime = seconds;
}
