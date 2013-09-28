// Darren Lin
// This script destroys "fireball" prefabs after a set period of time
// to prevent memory from being overloaded.

var lifeTime = 4.0;
function Awake ()
{
	Destroy(gameObject, lifeTime);
}