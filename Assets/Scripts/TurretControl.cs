/*using UnityEngine;
using System.Collections;

public class TurretControl : MonoBehaviour 
{
	public int damp = 0;
	Transform lookAtTarget;
	Transform bulletPrefab;
	int savedTime;
	
	void Update () 
	{
		if(lookAtTarget)
		{
			var rotate = Quaternion.LookRotation(LookAtTarget.position - transform.position);
			transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime );
			int seconds = Time.time;
			int oddeven = (seconds % 2);
			if(oddeven)
			{
				Shoot(seconds);     
			}
		}
	}

	void Shoot(int seconds)
	{
		//If turret has not fired this second, fire.
		if(seconds != savedTime)
		var bullet = Instantiate(bulletPrefab);
		bullet.rigidbody.AddForce(transform.forward * 50000);
		savedTime = seconds;
	}
}*/
