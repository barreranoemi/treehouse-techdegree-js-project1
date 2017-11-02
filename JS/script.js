// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Array to hold quotes and sources
var quotes = [

{quote: "Let your plans be dark and impenetrable as night, and when you move fall like a thunderbolt.",
source: "Sun Tzu"},

{quote: "I would rather be a rebel than a slave.",
source: "Emmeline Pankhurst"},

{quote: "A winner is a dreamer who never gives up.",
source: "Nelson Mandela"},

{quote: "Last words are for those fools who believe they have not yet said enough",
source: "Karl Mark"},

{quote: "Don’t follow the path. Go where there is not path and start a trail.",
source: "Ruby Bridges"},

{quote: "I never did give anybody hell. I just told the truth and they thought it was hell.",
source: "Harry S. Truman"},

{quote: "My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.",
source: "Maya Angelou"},

{quote: "I tried to drown my sorrows, but the bastards learned how to swim.",
source: "Frida Kahlo"},

{quote: "I think a lot, but I don’t say much.",
source: "Anne Frank"},

{quote: "An eye for an eye makes the whole world blind.", 
source: "Ghandi"}, 
];

var random_quote = quotes[Math.floor(Math.random() * quotes.length)]; 

//Function to get a random quote
function getRandomQuote(){
	return quotes[Math.floor(Math.random() * quotes.length)]
};

//Function to generate random RGB color
function randomColorGenerator() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var rgb = "rgb(" + red + " , " + green + ", " + blue + ")";
	return rgb 
};

function printQuote() {
	var randomQuote = getRandomQuote();
	var background = randomColorGenerator(); 
	var display = '';

//Function to select random object from array and print it to the screen
	
	display += '<p class="quote">' + randomQuote.quote + '</p>';
	display += '<p class="source">' + randomQuote.source + '</p>';


	document.getElementById("quote-box").innerHTML = display;
	document.body.style.backgroundColor = background;
	document.getElementById("loadQuote").style.backgroundColor = background;

}

printQuote();

setInterval(printQuote, 7000);

