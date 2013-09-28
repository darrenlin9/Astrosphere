//#####################################################################################
//#####################################################################################
//#####################################################################################
// COUNTDOWN TIMER CODE FOR THE UNITY 3D ENGINE IN JAVASCRIPT
// THIS HAS BEEN WRITTEN BY KYLE D'AOUST FOR FREE AND EDUCATIONAL USE, ROYALTY FREE.
// FEEL FREE TO USE THIS CODE IN ANY OF YOUR PROJECTS
//#####################################################################################
//#####################################################################################
//#####################################################################################
 
// *Modified variables to static to make it easy to modify in Unity editor.
static var seconds : float = 30;
static var minutes : float = 1;

function Update()
{
    // This is if statement checks how many seconds there are to decide what to do.
    // If there are more than 0 seconds it will continue to countdown.
    // If not then it will reset the amount of seconds to 59 and handle the minutes;
    // Handling the minutes is very similar to handling the seconds.
    if(seconds <= 0)
    {
        seconds = 59;
        if(minutes >= 1)
        {
            minutes--;
        }
        else
        {
            minutes = 0;
            seconds = 0;
            
            // This makes the guiText show the time as X:XX. ToString.("f0") formats it so there is no decimal place.
            GameObject.Find("GUI_COUNTDOWN").guiText.text = minutes.ToString("f0") + ":0" + seconds.ToString("f0");
        }
    }
    else
    {
        seconds -= Time.deltaTime;
    }
     
    // These lines will make sure the time is shown as X:XX and not X:XX.XXXXXX
    if(Mathf.Round(seconds) <= 9)
    {
        GameObject.Find("GUI_COUNTDOWN").guiText.text = minutes.ToString("f0") + ":0" + seconds.ToString("f0");
    }
    else
    {
        GameObject.Find("GUI_COUNTDOWN").guiText.text = minutes.ToString("f0") + ":" + seconds.ToString("f0");
    }
}