// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", execute, false);

// set the interval to change the quotes automatically after 5 seconds
var interval = setInterval(execute, 5000);

// selects a random background color from the bgColors array
// returns the randomly selected background color
function getRandomColor() {
  return Math.floor(Math.random() * colors.length);
}

// selects a random quote object from the quotes array
// returns the randomly selected quote object
function getRandomQuote() {
  var randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];
}

// sets the background colors
var oldColor;
function setBgColor() {
  var randomColorIndex = getRandomColor();
  var newColor = colors[randomColorIndex];
  document.getElementById('body').classList.remove(oldColor);
  document.getElementById('body').classList.add(newColor);
  document.getElementById('loadQuote').classList.remove(oldColor);
  document.getElementById('loadQuote').classList.add(newColor);
  oldColor = newColor;
}

// calls the getRandomQuote function and stores the returned quote object in a variable
// doesn't add a <span class="citation"> for a missing citation or a <span class="year"> if the year property is missing
// displays the final HTML string to the page
function printQuote() {
  var randomQuote = getRandomQuote();
  var htmlString =
    '<p class="quote">' + randomQuote['quote'] + '</p>' +
    '<p class="source">' + randomQuote['source'];

  if (typeof randomQuote['citation'] !== "undefined") {
    htmlString += '<span class="citation">' + randomQuote['citation'] + '</span>';
  }

  if (typeof randomQuote['year'] !== "undefined") {
    htmlString += '<span class="year">' + randomQuote['year'] + '</span>';
  }

  htmlString += '</p>';

  if (randomQuote['tags'].length > 0) {
    htmlString += '<p class="tags">tags: ' + randomQuote['tags'].join(', ') + '</p>';
  }

  document.getElementById('quote-box').innerHTML = htmlString;
}

function execute() {
  setBgColor();
  printQuote();
}

execute();
