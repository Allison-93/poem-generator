function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "9eb73bao77f189244b243a5t4a970760";
  let prompt = `Generate a poem about ${instructionInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a six line poem in basic HTML";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
