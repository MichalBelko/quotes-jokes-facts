const text = document.querySelector(".text");
const btnDadJoke = document.querySelector(".btn-2");
const btnChuck = document.querySelector(".btn-3");
const btnQuote = document.querySelector(".btn-1");
const btnAdvice = document.querySelector(".btn-4");
const btnNumberFact = document.querySelector(".btn-5");
const btnCatFact = document.querySelector(".btn-6");
const treti = document.querySelector(".treti");
const btnCovid = document.querySelector(".btn-7");
const btn8 = document.querySelector(".btn-8");

btnDadJoke.addEventListener("click", DadJoke);
btnChuck.addEventListener("click", showChuck);
btnQuote.addEventListener("click", showQuote);
btnAdvice.addEventListener("click", giveAdvice);
btnCatFact.addEventListener("click", giveBeerDescription);
btnCovid.addEventListener("click", CovidCases);

async function CovidCases() {
  try {
    const res = await fetch("https://api.covid19api.com/summary");
    const data = await res.json();
    const random = Math.floor(Math.random() * 190);
    const deaths = data.Countries[random].TotalDeaths;
    text.textContent = `${data.Countries[random].Country} : ${deaths} deaths on Covid`;
  } catch (err) {
    alert(err);
  }
}

async function giveBeerDescription() {
  try {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json();

    const random = Math.floor(Math.random() * 25);
    text.textContent = `${data[random].name}  -  ${data[random].abv}%`;
  } catch (err) {
    alert(err);
  }
}

async function showQuote() {
  try {
    const res = await fetch("https://type.fit/api/quotes");
    const data = await res.json();
    const random = Math.floor(Math.random() * 1643);
    text.textContent = data[random].text;
  } catch (err) {
    alert(err);
  }
}

async function giveAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    text.textContent = data.slip.advice;
  } catch (err) {
    alert(err);
  }
}

async function showChuck() {
  try {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await res.json();
    text.textContent = data.value;
  } catch (err) {
    alert(err);
  }
}

async function DadJoke() {
  try {
    const response = await fetch("https://icanhazdadjoke.com/slack");
    const data = await response.json();
    const joke = await data.attachments[0].fallback;
    text.textContent = joke;
  } catch (err) {
    alert(err);
  }
}
