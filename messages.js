const  quotes = [
    {
      "quote": "Life isn’t about getting and having, it’s about giving and being.",
      "author": "Kevin Kruse"
    },
    {
      "quote": "Whatever the mind of man can conceive and believe, it can achieve.",
      "author": "Napoleon Hill"
    },
    {
      "quote": "Strive not to be a success, but rather to be of value.",
      "author": "Albert Einstein"
    },
    {
      "quote": "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
      "author": "Robert Frost"
    },
    {
      "quote": "I attribute my success to this: I never gave or took any excuse.",
      "author": "Florence Nightingale"
    },
    {
      "quote": "You miss 100% of the shots you don’t take.",
      "author": "Wayne Gretzky"
    },
    {
      "quote": "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
      "author": "Michael Jordan"
    },
    {
      "quote": "The most difficult thing is the decision to act, the rest is merely tenacity.",
      "author": "Amelia Earhart"
    },
    {
      "quote": "Every strike brings me closer to the next home run.",
      "author": "Babe Ruth"
    }]

    document.addEventListener('DOMContentLoaded', function () {
      
      
        const getRandomQuoteBtn = document.getElementById('getRandomQuoteBtn');
        const quoteDisplay = document.getElementById('quoteDisplay');
        const authorDisplay = document.getElementById('authorDisplay');
      
        getRandomQuoteBtn.addEventListener('click', function () {
          // Get a random index to select a random quote
          const randomIndex = Math.floor(Math.random() * quotes.length);
      
          // Access the quote and author using the random index
          const randomQuote = quotes[randomIndex].quote;
          const randomAuthor = quotes[randomIndex].author;
      
          // Display the random quote and author in the HTML
          quoteDisplay.textContent = `Quote: ${randomQuote}`;
          authorDisplay.textContent = `Author: ${randomAuthor}`;
        });
      });
     

    




