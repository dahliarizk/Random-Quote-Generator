/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//This array contains 6 quote objects, with 3 or more properties each.
let quotes = [
{quote: 'Imagination is more important than knowledge.', source: 'Albert Einstein', citation: 'On Science', tags: 'humor' },
{quote: 'The big lesson in life, baby, is never be scared of anyone or anything.', source: 'Frank Sinatra', citation: 'The Way You Wear Your Hat', tags: 'humor'},
{quote: 'Everybody talks about the weather, but nobody does anything about it.', source: 'Mark Twain', citation: 'editorial in the Hartford Courant', year: 1897, tags: 'humor'},
{quote: 'For myself I am an optimist -- it does not seem to be much use being anything else.', source: 'Winston Churchill', year: 1954},
{quote: 'There is no love sincerer than the love of food.', source: 'George Bernard Shaw', citation: 'Man and Superman', year: 1905, tags: 'humor'},
{quote: 'We are all born mad. Some remain so.', source: 'Samuel Beckett', citation: 'Waiting for Godot', year: 1953}
];



/*
This function generates a random Number from 0 to one less than the length of the array and assigns it to its index value in that array.
It then returns the corresponding quote object.
*/

let createRandomQuote = (arr) => {
  let randomNumber = Math.floor(Math.random() * (arr.length));
  return arr[randomNumber];
}


/*This function calls the createRandomQuote function and assigns the returned quote object in a variable called quoteDisplay.
It then builds HTML and other properties around it in order to display it in the browser, according to whether its properties
have the right kinds of values.
*/

function printQuote(arr) {
  quote = createRandomQuote(arr);
  let quoteDisplay =` <p class="quote"> ${quote.quote} </p>
                     <p class="source"> ${quote.source} `
  if (typeof(quote.citation) === "string") {
      quoteDisplay += ` <span class="citation"> ${quote.citation} </span> `
    }
  if (typeof(quote.year) === "number"){
     quoteDisplay += ` <span class="year"> ${quote.year} </span> `
   }
  if (typeof(quote.tags) === "string") {
    quoteDisplay += `(<span class="tags"> ${quote.tags} </span>) `
  }
return `${quoteDisplay}</p>`;
}

/* This function creates a timer that loads the HTML content created every time the printQuote
function with quotes array is called. In doing so it creates date and time objects to keep track of seconds according
to local time. It also sets the body  of the document object to transition from white to pink and back within the interval.
This setInterval function is assigned to a variable reloadPage.
*/

document.getElementById('quote-box').innerHTML = printQuote(quotes);

var reloadPage = setInterval(myTimer, 5000);

function myTimer() {
  var date = new Date();
  var time = date.toLocaleTimeString();
  var body = document.body;
  body.style.backgroundColor = body.style.backgroundColor ==  "white" ? "pink" : "white";
  document.getElementById('quote-box').innerHTML = printQuote(quotes);
}

reloadPage;


//click event listener for the print quote function
document.getElementById('load-quote').addEventListener("click", printQuote, false);
