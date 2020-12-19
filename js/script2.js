let quotes = [
{quote: 'Imagination is more important than knowledge.', source: 'Albert Einstein', citation: 'On Science' },
{quote: 'The big lesson in life, baby, is never be scared of anyone or anything.', source: 'Frank Sinatra', citation: 'The Way You Wear Your Hat'},
{quote: 'Everybody talks about the weather, but nobody does anything about it.', source: 'Mark Twain', citation: 'editorial in the Hartford Courant', year: 1897},
{quote: 'For myself I am an optimist -- it does not seem to be much use being anything else.', source: 'Winston Churchill', year: 1954},
{quote: 'There is no love sincerer than the love of food.', source: 'George Bernard Shaw', citation: 'Man and Superman', year: 1905},
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


/*This function calls the createRandomQuote function and assigns the returned quote object in a variable.
It then builds HTML and other properties around it in order to display it in the browser.
*/

function printQuote(arr) {
  quote = createRandomQuote(arr);
  let quoteDisplay =` <p class="quote"> ${quote.quote} </p>
                     <p class="source"> ${quote.source}`
  if (typeof(quote.citation) === "string" || quote.year === undefined) {
      quoteDisplay += ` <span class="citation"> ${quote.citation} </span> `
    } else if (quote.citation === undefined || typeof(quote.year) === "number")
     quoteDisplay += ` <span class="citation"> ${quote.citation} </span> `
return `${quoteDisplay}</p>`;
}


  printQuote(quotes);
