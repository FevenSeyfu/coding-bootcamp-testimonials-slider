![Project Demo ](./desktop-preview.jpg)

# Frontend Mentor - Coding bootcamp testimonials slider solution

This is a solution to the [Coding bootcamp testimonials slider challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/coding-bootcamp-testimonials-slider-4FNyLA8JL). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/trackpad or keyboard

### Links

- Solution URL: [Solution URL ](https://github.com/FevenSeyfu/coding-bootcamp-testimonials-slider)
- Live Site URL: [Live site URL](https://codingbootcamp-testimonial-slider.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Mobile-first workflow

### What I learned

Fetch data from json and use slider button to loop through and show testimonials
```js
btnNext.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial + 1) % data.length;
  updateTestimonial(currentTestimonial);
});

btnPrev.addEventListener('click', () => {
  currentTestimonial = (currentTestimonial - 1 + data.length) % data.length;
  updateTestimonial(currentTestimonial);
});
```
## Author

- Website - [Feven Seyfu](https://fevenseyfu.tech/)
- Frontend Mentor - [@FevenSeyfu](https://www.frontendmentor.io/profile/FevenSeyfu)
- Linkedin - [Feven Seyfu](https://www.linkedin.com/in/fevenseyfu/)

## Acknowledgments

I would like to thank all who have reviewed my solution and given me feedback and Frontend mentors for providing the assets and design files I have used for the project.
