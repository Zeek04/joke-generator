const generateButton = document.getElementById("generate");
const joke = document.getElementById("joke");
const punchLine = document.getElementById("punchline");

generateButton.addEventListener("click", async () => {
  
    try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    const data = await response.json();

    displayJoke(data)

  } catch (error) {
    console.error("There's been an error")
    joke.innerText = "Error try again"
  }

  
});

function displayJoke(data){
    console.log(data)
    const setup = data.setup
    const answer = data.punchline

    joke.innerText = setup
    punchLine.innerText = answer
}