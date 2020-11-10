

const newQuoteButton = document.getElementById("quote__btn");
const quoteContainer = document.getElementById("quote__container");

newQuoteButton.addEventListener("click", getNewQuote);

async function getNewQuote() {
    const response = await fetch("quotes.json");
    const quotes = await response.json();
    
    let quote = quotes[Math.floor(Math.random() * quotes.length)]
    
    quoteContainer.style.visibility = "visible";
    quoteContainer.innerHTML = `
    <blockquote class="quote__block">"${quote.quote}"</blockquote>
    <cite class="source">${quote.source} by ${quote.author}</cite>`;

    // Wählt eine zufällige Farbe aus der Chroma-Library
    document.body.style.backgroundColor = chroma.random().brighten(2);
}