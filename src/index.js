
// Callbacks
const handleClick = (ramen) => {
  
  document.querySelector('.detail-image').src = ramen.image;
  document.querySelector('.name').textContent = ramen.name;
  document.querySelector('.restaurant').textContent = ramen.restaurant;
  document.querySelector('#rating-display').textContent = ramen.rating;
  document.querySelector('#comment-display').textContent = ramen.comment;
};

const addSubmitListener = () => {
  const form = document.getElementById('new-ramen');
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const newForm = {
        name: document.getElementById('new-name').value,
        restaurant: document.getElementById('new-restaurant').value,
        image: document.getElementById('new-image').value,
        rating: document.getElementById('new-rating').value, 
        comment: document.getElementById('new-comment').value,
      };
      addRamenToMenu(newForm);

      form.reset();
     });
};

const addRamenToMenu = (ramen) => {
  const ramenMenu = document.getElementById('ramen-menu');
  const ramenImg = document.createElement('img');
  ramenImg.src = ramen.image;
  ramenImg.alt = ramen.name;
  ramenImg.addEventListener('click', () => handleClick(ramen));
  ramenMenu.appendChild(ramenImg);

};

// let ramenArray = [];
const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then((response) => response.json())
  .then((data) => {
    const ramenMenu = document.getElementById("ramen-menu");
   
    ramenArray = data;
    data.forEach(ramen => {
      const ramenImg = document.createElement('img');
      ramenImg.src = ramen.image;
      ramenImg.alt = ramen.name;
      ramenImg.addEventListener('click', () => handleClick(ramen));
      ramenMenu.appendChild(ramenImg);
    });
  })
  .catch((error) => console.error('Error', error));
};

// advanced deliverables
const updateButton = document.addEventListener('submit', (event) => {
  event.preventDefault();
  const ratingDisplay = document.getElementById('rating-display');
  const editRating = document.getElementById('edit-rating').value;
  const commentDisplay = document.getElementById('comment-display');
  const editComment = document.getElementById('edit-comment').value;

    ratingDisplay.innerHTML = `${editRating}`;
    commentDisplay.innerHTML = editComment;
  
});

// function displayFirst () {
//   let ramenArray =
// }


const main = () => {
  document.addEventListener('DOMContentLoaded', (event) => {
    let ramenArray = [];
    displayRamens();
    // displayFirst();
    addSubmitListener();
  });
};

main();

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};



