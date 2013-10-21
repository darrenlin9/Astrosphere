// Darren Lin
// This script controls the player character and various 
// other vital game mechanics, such as speed, respawning, health,
// and firing projectiles.

static var speed = 7.0;
var rotateSpeed = 5.0;
var bulletPrefab:Transform;
var jumpSpeed = 20.0;
var gravity = 40.0;
static var marker = 0;
static var shotDelay = 0.5;
static var gotHit = false;
private var dead = false;
private var moveDirection : Vector3 = Vector3.zero;

function OnControllerColliderHit (hit : ControllerColliderHit)
{
	 // If the player goes out of bounds, call "dead" function.
	 if(hit.gameObject.tag == "CollisionFloor")
	 {
	 	dead = true;	
	 }
}

function Start()
{
	// Runs continuously and fires when mouse is clicked.
	// Yields for the value of shotDelay variable.
	while (true)
	{
		while(!Input.GetButtonDown("Fire1")) yield;
		var bullet = Instantiate(bulletPrefab, GameObject.Find("spawnPoint").transform.position, Quaternion.identity);
		bullet.rigidbody.AddForce(transform.forward * 20000);
		yield WaitForSeconds(shotDelay);
	}	
}
function Update ()
{
	// Controls player movement.
	var controller : CharacterController = GetComponent(CharacterController);
	var forward = transform.TransformDirection(Vector3.forward);
	var curSpeed = speed * Input.GetAxis ("Vertical");
	transform.Rotate(0, Input.GetAxis ("Horizontal") * rotateSpeed, 0);
	controller.SimpleMove(forward * curSpeed);
	moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
	moveDirection = transform.TransformDirection(moveDirection);
    	moveDirection *= speed;
	if(Input.GetButton("Jump"))
	{
		moveDirection.y = jumpSpeed;
	}
	if (controller.isGrounded)
	{
        	// We are grounded, so recalculate move direction directly from axes.
        	moveDirection = Vector3(Input.GetAxis("Horizontal"), 0, Input.GetAxis("Vertical"));
        	moveDirection = transform.TransformDirection(moveDirection);
        	moveDirection *= speed;        
        	if (Input.GetButton ("Jump")) 
        	{
        		moveDirection.y = jumpSpeed;
        	}
    	}
    	// Applys gravity.
    	moveDirection.y -= gravity * Time.deltaTime;
    	// Moves the controller.
    	controller.Move(moveDirection * Time.deltaTime);
}

function LateUpdate()
{
	// If the player is "dead", respawn the player in the starting coordinates,
	// play a sound, and deduct speed. 
	if(dead)
	{
		transform.position = Vector3(-30, 50, 0);
		audio.Play();
		if(speed > 5)
			speed -= 2;
		dead = false;
	}
}

function OnCollisionEnter(collision : Collision) 
{
	// Call "dead" function when hit 3 times.
	audio.Play();
	if(speed > 5)
		speed -= 1;
	if(Target.points > 1)
		Target.points -= 1;
	marker++;
   	if(marker == 3)
   	{
    		marker = 0;
    		dead = true;
   	}
}

@script RequireComponent(CharacterController)
