const submit = document.querySelector(".btn-5");
const card_content_landing = document.querySelector(".card-content-landing");
const card_content_thank = document.querySelector(".card-content-thank");
const ratingButtons = document.querySelectorAll(".button");

const chosenRating = document.querySelector('.chosenRating');


ratingButtons.forEach( button => {
  button.addEventListener("click", clickedRating)
});


submit.addEventListener("click", submitted);
function submitted(){
  card_content_landing.classList.add("hide");
  chosenRating.textContent = ratingScore;
  card_content_thank.classList.remove("hide");
}


function clickedRating(event){
  ratingScore = event.target.textContent;

}