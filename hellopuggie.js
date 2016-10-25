var response1 = false; //Used to confirm that the user pressed okay so that the game advances to the next alert/prompt.
var response2; //Used to receive user input and relay that information.
var response3; //Possibly being used to prevent stale data from for loops.
var positiveKeywords = ["good", "great", "awesome", "amazing", "cool", "fine"];
var negativeKeywords = ["bad", "awful", "terrible", "horrible", "sad", "sick", "lonely", "depressed", "hurt", "bad grades", "lost", "job", "attack", "money", "hungry", "dead", "angry",
			"scared", "embarassed", "afraid", "worried", "lose our house", "divorce"]; //MORE KEYWORDS CAN BE ADDED TO BOTH OF THESE AND THE CODE WILL STILL FUNCTION CORRECTLY
var typeFound;
var name;
var negativeFlags = 0; //If the user exceeds 5 negative flags, a counselor or authority figure will be contacted.
var keyword;
var feelingKeyword; //Used so that it's possible to refer back to the data that was in the original keyword variable.
var reasonKeyword;
var haveNotTalkedKeyword;
			
Introduction(); 
LovelyWeatherTodayIsntIt(); //Last question before the keyword arrays come into effect.
DetermineWhatKeywordsUsed();
DivideGame();
DetermineWhatKeywordsUsed();
InvestigationAboutOriginalKeyword();

			
function Introduction()
{
	response1 = confirm("Hi! I'm so happy I can finally talk to a real person! My name is Puggie the Pug! My owner is letting me use the computer for the first time in my life! The internet is such a cool invention! How did you humans ever think of such an incredible thing!");
	//This is the general introduction, it will allow the user to get a general introduction to the game!
	if (response1 == true) //if they press okay, it returns true.
	{
		response2 = prompt("Well, now that you know my name, what's yours?");
		name = response2;
		response1 = false;
		return response2;
	}
	else //this will happen if they press cancel or attempt to exit out of the alert box!
	{
		alert("Aw, you don't want to talk with me? I don't think my owner will let me use a computer again... Goodbye!");
		return 0;
	}
}
	
function LovelyWeatherTodayIsntIt() //Asks the user how they are...
{
	if(response2 != null)
	{
		response1 = confirm("So, your name is " + response2 + "? That's such a wonderful name! You should be proud of it!");
		if(response1 == true)
		{
			response2 = prompt("So, " + response2 + ", How are you feeling today? Try to spell the word correctly! Otherwise, I won't be able to understand you! Also, be nice to me and use an easy word because I'm not as smart as you amazing humans.");
			return response2;
		}
		else
		{
			alert("Aw, you don't want to talk with me? I don't think my owner will let me use a computer again... Goodbye!");
			return 0;
		}
	}
}
			
function DetermineWhatKeywordsUsed()
{
	var found = false;
	var size;
	response3 = response2;
				
	while(!found) 	//The following is a sort that finds keywords.
	{
		//This sort will work for any response in this program that searches for keywords.
		size = positiveKeywords.length;
					for(var x=0; x < size; x++)
					{
						if(response2.includes(positiveKeywords[x]))
						{
							found = true;
							typeFound = "Positive";
						}
					}
					
					size = negativeKeywords.length;
					for(var x=0; x < size; x++)
					{
						if(response3.includes(negativeKeywords[x]))
						{
							keyword = negativeKeywords[x];
							found = true;
							typeFound = "Negative";
						}
					}
					
					if(!found) //Completes the while loop; otherwise the loop would never be able to complete
					{
						alert("I'm sorry! My small doggy brain wasn't able to understand that! My vocabulary is very small, so there are many words I don't recognize. Also, even the slightest spelling mistake could prevent me from understanding you.");
						response2 = prompt("Try again, " + name + ". Remember to say it so a simple Pug like me can understand you!");
						response3 = response2;
					}
				}
			}
			
			function DivideGame() //Section where the game branches off based on the result of typeFound for the first keyword checkpoint.
			{
				if(typeFound == "Positive")//Felt it more necessary to complete the negative portion of the game as that is the most vital.
				{
					confirm("This demo is not geared towards the positive response at the current time. If given adequate time, this positive response would actually trigger a reply that would allow the game to continue.");
				}
				else if(typeFound == "Negative")
				{
					feelingKeyword = keyword;
					negativeFlags ++; 
					//Will be used to keep track of amount of negative flags are accrued during the conversation.
					response2 = prompt("You are feeling " + keyword + "? Oh no! Why are you feeling like this?");
				}
				else
				{
					alert("Aw, you don't want to talk with me? I don't think my owner will let me use a computer again... Goodbye!");
					return 0;
				}
			}
			
			function InvestigationAboutOriginalKeyword()
			{
				if(typeFound == "Negative") //this is done again because the typeFound changes between LovelyWeatherTodayIsntIt and DivideGame functions even though the intermediary is still the DetermineWhatKeywordsUsed
				{
					reasonKeyword = keyword;
					negativeFlags ++;
					response2 = prompt("That's not good that this is causing you to feel " + feelingKeyword + "! Have you spoken to anyone about this?");
					if(response2.includes("yes"))
					{
						alert("That's good! Talking to others always helps. I talk to my friend Rover the Rottweiler all the time about how my owner forgets to give me treats.");
						alert("This demo is not geared towards the positive response at the current time. If given adequate time, this positive response would actually trigger a reply that would allow the game to continue.");
						return 0;
					}
					else if(response2.includes("no"))
					{
						haveNotTalkedKeyword = true;
						negativeFlags ++;
						alert("Why haven't you told anyone about it? Talking to others always helps. Like when my owner forgets to give me a treat, I talk to my best friend Lucy the Labrador and she makes me feel better. Don't you humans have counselors? You should go talk to your local counselor as soon as possible to help you out.");
					}
					else
					{
						alert("Aw, you don't want to talk with me? I don't think my owner will let me use a computer again... Goodbye! I hope you feel better, " + name + "."); 
						//This alert is used when the user fails to enter either yes or no. A yes or no answer is plausible to be expected here, otherwise this would be extremely counteractive and inefficient.
						return 0;
					}
				}
				
				 //window.location.href = 'mailto:mail4epseric@yahoo.com?subject=' + name + '&body=The flags raised for ' + name + ' were that ' + name + ' reported feeling ' + feelingKeyword + ', that ' + name + ' is feeling this way due to issues relating to ' + reasonKeyword + ', and that ' + name + ' did not talk to anyone about this issue.';
				 //I would have to use JQuery to send an email and I do not know JQuery, That being said, the above is an example of how I would do so. I will include the resulting flags in an alert as well.
				
				alert('The flags raised for ' + name + ' were that ' + name + ' reported feeling ' + feelingKeyword + ', that ' + name + ' is feeling this way due to issues relating to ' + reasonKeyword + ', and that ' + name + " did not talk to anyone about this issue. These diagnostics will now be sent to " + name + "'s school counselor.");
				return 0;	
			}
			
		
