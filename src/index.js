function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#poem-instructions");
  let apiKey = "9eb73bao77f189244b243a5t4a970760";
  let prompt = `Generate a poem about ${instructionInput.value}`;
  let context =
    "user instructions: You are a romantic poem expert and love to write short poems. Your mission is to generate a six line poem the poem should be wriiten with HTML format and separate each line with a <br/> Do not include a title. Sign the poem at the end with `She Codes AI` and make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
