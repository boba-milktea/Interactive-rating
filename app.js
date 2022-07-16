const submit = document.querySelector("#submit");
const card = document.querySelector("#ratingCard");
const ratings = document.querySelectorAll('input[name="rating"]');


submit.addEventListener('click', (e) => {
    e.preventDefault();
    for (let rating of ratings) {
        // The showRating function will run only if one of the rating buttons is clicked
        // The value has been saved as a variable
        if (rating.checked) {
            let ratingValue = rating.value;
            showRating(ratingValue);
        }
    }
})

function showRating(ratingValue) {
    // First, remove all the elements 
    while (card.firstChild) {
        card.removeChild(card.firstChild);
    }
    // Rebuild the thank you statement
    const newDiv = document.createElement("div");
    newDiv.id = "thanksBlock";
    const newImg = document.createElement("img");
    newImg.src = "./images/illustration-thank-you.svg";
    newImg.alt = "Thank you illustration";
    newImg.id = "newImage";
    const ratingMsg = document.createElement("span");
    ratingMsg.id = "ratingMsg";
    ratingMsg.textContent = `You selected ${ratingValue} out of 5`;
    const thanksTitle = document.createElement("h1");
    thanksTitle.textContent = "Thank you!";
    const thanksText = document.createElement("p");
    thanksText.id = "text";
    thanksText.textContent = "We appreciate you taking time to give a rating. If you need more support, don't hesitate to get in touch!";
    newDiv.append(newImg, ratingMsg, thanksTitle, thanksText);
    card.append(newDiv);
}
