
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


const displayRamens = () => {
  fetch('http://localhost:3000/ramens')
  .then((response) => response.json())
  .then((data) => {
    const ramenMenu = document.getElementById("ramen-menu");
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

// const updateRamen = (ramen) => {
//   fetch(`http://localhost:3000/ramens/${ramen.id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(ramen),
//   })
//   .then(response => response.json())
//   .then(updateRamen => {
//     console.log('Ramen updated:', updateRamen);
//   })
//   .catch(error => {
//     console.error('Error updating Ramen', error);
//   });
// }
// updateRamen(newRamen);

const main = () => {
  document.addEventListener('DOMContentLoaded', (event) => {
    displayRamens();
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
