import JohnImg from './src/images/image-john.jpg';
import TanyaImg from './src/images/image-tanya.jpg'
const data = [
  {
    "id": 1,
    "testimony":
      '" I\’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. "',
    "name": "Tanya Sinclair",
    "title": "UX Engineer",
    "img" : TanyaImg
  },
  {
    "id": 2,
    "testimony":
     ' " If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "',
    "name": "John Tarkpor",
    "title": "Junior Front-end Developer",
    "img" : JohnImg
  },
];

// update content with the slider button
const userImg = document.querySelector('.user-img');
const testimonyText = document.querySelector('.testimony-text');
const userName = document.querySelector('.user-name');
const userTitle = document.querySelector('.user-title');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');


let currentTestimonial = 0;


const updateTestimonial = (index) => {
  const testimonial = data[index];
  userImg.src = testimonial.img;
  testimonyText.textContent = testimonial.testimony;
  userName.textContent = testimonial.name;
  userTitle.textContent = testimonial.title;
}
const navigatePrevious = () => {
  currentTestimonial = (currentTestimonial - 1 + data.length) % data.length;
  updateTestimonial(currentTestimonial);
}
const navigateNext = () => {
  currentTestimonial = (currentTestimonial + 1) % data.length;
  updateTestimonial(currentTestimonial);
}

btnNext.addEventListener('click',navigateNext);
btnPrev.addEventListener('click', () => navigatePrevious);
window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case 'ArrowLeft':
      navigatePrevious();
      break;
    case 'ArrowRight':
      navigateNext();
      break;
  }
});

updateTestimonial(currentTestimonial);