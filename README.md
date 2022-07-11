# Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

[Desktop version](./imgages/rating-00.png)
[Mobile version](./imgages/rating-01.png)
[Hover effect](./imgages/rating-03.png)
[Click effect](./imgages/rating-05.png)
[Rating Result Page](./imgages/rating-06.png)


### Links

- Solution URL: [https://github.com/boba-milktea/Interative-rating.git](https://github.com/boba-milktea/Interative-rating.git)
- Live Site URL: [https://boba-milktea.github.io/Interative-rating/](https://boba-milktea.github.io/Interative-rating/)

## My process

Completed but can be improved

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

- Reviewed CSS flexbox 
- JS / learned how to remove child nodes and append child elements 
- JS / learned insertBefore, but it's not used in this practice
```js
while (card.firstChild) {
            card.removeChild(card.firstChild)
        }
```

### Continued development

- In this project, to change the page after clicking the submit button, I chose to remove all the elements and adding new elements to the container. However, a better would be redirect to a new page. 

- The submit button should be active only after one of the rating buttons is clicked. The page should give an alert when no rating button is active. 
