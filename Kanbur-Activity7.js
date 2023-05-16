var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
  
	// Set focus to the Name field on page load
	$("name").focus();
  };
  



window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	
	
};

// function displayResults()
// {
// 	var average = 0;
// 	for(var i=0;i<scores.length;i++)
// 	{
// 		average= (average*(i)+scores[i])/(i+1);
// 	}
	
// 	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br \> "
// }
function displayResults() {
	var average = 0;
	var highestScore = 0;
  
	// Calculate the average score
	for (var i = 0; i < scores.length; i++) {
	  average = (average * i + scores[i]) / (i + 1);
	}
  
	// Find the highest score
	for (var j = 0; j < scores.length; j++) {
	  if (scores[j] > highestScore) {
		highestScore = scores[j];
	  }
	}
  
	// Display the results in the 'results' div element
	var resultsDiv = document.getElementById("results");
	resultsDiv.innerHTML =
	  "<h2>Results</h2>" +
	  "<p>Average score is " + average.toFixed(2) + "</p>" +
	  "<p>Highest score is " + highestScore + "</p>";
  }
  

  function displayScores() {
	var table = document.getElementById("scores_table");
	table.innerHTML = ""; // Clear any existing rows in the table
  
	// Create table header row
	var headerRow = table.insertRow(0);
	var nameHeader = headerRow.insertCell(0);
	nameHeader.textContent = "Name";
	var scoreHeader = headerRow.insertCell(1);
	scoreHeader.textContent = "Score";
  
	// Insert rows for each name and score
	for (var i = 0; i < names.length; i++) {
	  var row = table.insertRow(i + 1);
	  var nameCell = row.insertCell(0);
	  nameCell.textContent = names[i];
	  var scoreCell = row.insertCell(1);
	  scoreCell.textContent = scores[i];
	}
  }

  function addScore() {
	var nameInput = $("name").value;
	var scoreInput = parseInt($("score").value);
  
	// Validate the inputs
	if (nameInput.trim() === "" || isNaN(scoreInput) || scoreInput < 0 || scoreInput > 100) {
	  alert("You must enter a name and a valid score (0-100).");
	  return;
	}
  
	// Add the name and score to the arrays
	names.push(nameInput);
	scores.push(scoreInput);
  
	// Clear the input fields
	$("name").value = "";
	$("score").value = ""
  
	// Move the cursor to the Name field after adding a score
	$("name").focus();
  
  }

  
  
  


