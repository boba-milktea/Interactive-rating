const submit = document.querySelector("#submit");
const score = document.querySelector("#score");
const rating = document.querySelector('#ratingBox');
const card = document.querySelector("#card");
let parentNode = document.querySelector("main");
const ratingBtn = document.querySelector('#ratingBox').children;
const thankYouMsg = document.querySelector('#thankYouMsg');


console.dir(card);
// console.log(rating.children[0].textContent);

for (let i = 0; i < ratingBtn.length; i++) {
    ratingBtn[i].onclick = function () {
        let btn = ratingBtn[i].textContent;
        console.log(`Btn ${btn} is clicked `);
        showRating(btn);
    }
}

function showRating(btn) {
    submit.addEventListener('click', () => {
        while (card.firstChild) {
            card.removeChild(card.firstChild)
        }
        const newDiv = document.createElement("div");
        newDiv.id = "thanksBlock";
        const newImg = document.createElement("img");
        newImg.src = "./images/illustration-thank-you.svg";
        newImg.alt = "Thank you illustration";
        newImg.id = "newImage";
        const ratingMsg = document.createElement("span");
        ratingMsg.id = "ratingMsg";
        ratingMsg.textContent = `You selected ${btn} out of 5`;
        const thanksTitle = document.createElement("h1");
        thanksTitle.textContent = "Thank you!";
        const thanksText = document.createElement("p");
        thanksText.id = "text";
        thanksText.textContent = "We appreciate you taking time to give a rating. If you need more support, don't hesitate to get in touch!";
        newDiv.append(newImg, ratingMsg, thanksTitle, thanksText);
        card.append(newDiv);
    })

}
