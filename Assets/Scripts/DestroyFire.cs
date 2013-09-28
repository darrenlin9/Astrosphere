using UnityEngine;
using System.Collections;

public class DestroyFireC : MonoBehaviour 
{
	void Awake() 
	{
		int lifeTime = 4;
		Destroy(gameObject, lifeTime);
	}
}
