'use strict';




const hotSalesSlider = document.getElementById('hot-sales-slider');
const hotSalesLeft = document.getElementById('hot-sales-left');
const hotSalesRight = document.getElementById('hot-sales-right');

const noveltySlider = document.getElementById('novelty-slider');
const noveltyLeft = document.getElementById('novelty-left');
const noveltyRight = document.getElementById('novelty-right');

const specialsSlider = document.getElementById('specials-slider');
const specialsLeft = document.getElementById('specials-left');
const specialsRight = document.getElementById('specials-right');

const brandsSlider = document.getElementById('brands-slider');
const brandsRight = document.getElementById('brands-right')
const brandsLeft = document.getElementById('brands-left');

function slider(prevButton, nextButton, slideItem, visibleItems) {

  let counter = 0;
  const itemCount = slideItem.querySelectorAll('.item').length
  const itemWidth = +slideItem.querySelector('.item').offsetWidth
  console.log(itemWidth)
  nextButton.addEventListener('click', evt => {
    evt.preventDefault()
    if (counter < Math.ceil(itemCount / visibleItems)) {
      counter++
      slideItem.style.transform = "translateX(" + (-itemWidth * counter) + 'px'
      console.log(counter)
    }
  })

  prevButton.addEventListener('click', evt => {
    evt.preventDefault()
    if (counter > 0) {
      counter--
      slideItem.style.transform = "translateX(" + (-itemWidth * counter) + 'px'
    }
  })
}

slider(noveltyLeft, noveltyRight, noveltySlider, 4)
slider(specialsLeft, specialsRight, specialsSlider, 4)
slider(hotSalesLeft, hotSalesRight, hotSalesSlider, 4)
slider(brandsLeft, brandsRight, brandsSlider, 6)