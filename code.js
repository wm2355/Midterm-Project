/* Partial Completed Functionality for Interactive Quiz*/

var btnSubmit = document.getElementById("submitanswer");

function getFeedback() {
  document.getElementById("feedback").classList.remove("hide");
}

function activeNextQuestion () {
  document.getElementById("next-question").classList.remove("disabled");
}

btnSubmit.addEventListener('click',getFeedback);

btnSubmit.addEventListener('click', activeNextQuestion);

/* functionality for interactive quiz

user click on picture(s)
    selected pictures become thumbnails
user submit the answer
  if answers are correct
      computer alert users with success message
      computer mark the link button to next quetion active
      computer mark the question to true
  else if the number of selected pictures do not match with the indictated number
      computer alert user with the warning message
      computer mark the question to false
  else
      computer alert user with wrong message
      computer mark the question to false

if all questions are true
    computer alert user with a congratulation message ("Congratualation, you completed the quiz! Now you are ready to become an interview body langauge expert! ")

*/



/* functionality for self-evaluation checklist

user checkoff items on checklist and submit
    computer respond with a report of the checkoffed items in the form of a pdf (not sure what is the best way...)
user click the download button
    computer pop up a window for the download options
user click the close button
    computer return to the homepage

*/
