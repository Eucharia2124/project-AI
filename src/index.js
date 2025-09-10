function displayResearch(response) {
 

   new Typewriter('#research', {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});
}

function generateResearch(event) {
    event.preventDefault()

    let instructionInput = document.querySelector("#user-instructions");
    let apiKey = "35f4a664892ct08f69ca41oe92eb5099";
    let prompt = `User instructions: Generate a short answer about ${instructionInput.value}`;
    let context = "You are a research expert and can help in any situation. Your mission is to generate a 4 line suggestions in basic HTML and separete each line with a <br />. Make sure the poem in basic HTML. make sure to follow the user`s instructions. Do not include a title to the poem, Sign the poem with `PetOby AI` inside a <strong> element";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let researchElement = document.querySelector("#research");
  researchElement.classList.remove("hidden");
  researchElement.innerHTML = `<div class = "generating">❤ Generating a research note about ${instructionInput.value}</div>`;

   
    axios.get(apiUrl).then(displayResearch);
   
};


let researchElement = document.querySelector("#research-generator-form");
researchElement.addEventListener("submit", generateResearch);