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
  - [Useful resources](#useful-resources)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

- [Mobile version](./imgages/rating-01.png)
- [Hover & checked effect](./imgages/rating-02.png)
- [Rating Result Page](./imgages/rating-04.png)


### Links

- Solution URL: [https://github.com/boba-milktea/Interactive-rating.git](https://github.com/boba-milktea/Interactive-rating.git)
- Live Site URL: [https://boba-milktea.github.io/Interactive-rating/](https://boba-milktea.github.io/Interactive-rating/)

## My process

The 1st version completed on July 9, 2022
The current version completed on July 16, 2022


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow


### What I learned

- CSS/ Reviewed CSS flexbox 
- CSS/ adding global varaiables
- JS / changing buttons to radio buttons 
```css
--root / var()
z-index
```
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

### Useful resources

- [Pure CSS Radio Button Tiles / Coding Play ](https://youtu.be/UShd9wHTR-o) - This youtube video helped me on the hover/checked effects. The hover effect is astonishing. Clean code. 

