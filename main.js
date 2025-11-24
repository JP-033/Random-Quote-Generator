let currentQuote = "";

function main() {
  const generate = document.getElementById('quote');
  const save = document.getElementById('save');
  const clear = document.getElementById('clear');
  const display = document.getElementById('display');
  const quotes = document.getElementById("quote-here");
  const savedQuote = localStorage.getItem('savedQuote');
  

  if (savedQuote) {
    quotes.textContent = "Saved quote: " + savedQuote;
    clear.classList.remove("hidden");
  } else {
    quotes.textContent = "No quotes currently saved.";
    clear.classList.add("hidden");
  }

  generate.addEventListener("click", e => {
    console.log("Quote generated");
    generateQuote();
  });

  save.addEventListener("click", e => {
    if (currentQuote) {
      localStorage.setItem('savedQuote', currentQuote);
      console.log("Quote saved");
      clear.classList.remove("hidden");
      display.classList.remove("hidden");
    }
  });

  clear.addEventListener("click", e => {
    console.log("Quote deleted");
    localStorage.removeItem('savedQuote');
    clear.classList.add("hidden");
  });

  display.addEventListener("click", () => {
    const savedQuote = localStorage.getItem('savedQuote'); 
    if (savedQuote) {
      quotes.textContent = "Saved quote: " + savedQuote;
      display.classList.add("hidden");
    } else {
      quotes.textContent = "No quotes currently saved.";
    }
  });
  
  
}

function generateQuote() {
  const quotes = document.getElementById("quote-here");
  const save = document.getElementById("save");
  const display = document.getElementById('display');

  fetch('https://quotes.domiadi.com/API')
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      currentQuote = json.quote + " — " + json.from;
      quotes.textContent = currentQuote;
      save.classList.remove("hidden");
      display.classList.remove("hidden");
    })
}

main();
