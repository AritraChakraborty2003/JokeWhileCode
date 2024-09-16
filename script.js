const URL = "https://icanhazdadjoke.com/slack";
async function getJokes() {
  const response = await fetch(URL);
  const data = await response.json();
  const root = document.getElementById("root");
  root.innerHTML = `${data.attachments[0].text}`;
}
getJokes();
