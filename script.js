document.addEventListener('scroll', onScroll);

function onScroll(event) {
    const curPos = window.scrollY + 100;
    const sects = document.querySelectorAll('#wrapper>section');
    const links = document.querySelectorAll('nav a');

    // console.log(document.querySelectorAll('#wrapper>section'));

    sects.forEach((el) => {
         console.log(el.offsetTop);
        if ((el.offsetTop) < curPos && (el.offsetTop + el.offsetHeight) >= curPos) {
            links.forEach((a) => {
                a.classList.remove('nav-text_active');
                if (el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('nav-text_active');
                }
            })
        }
    })
}


let blackScrenHor = document.querySelector('.blackscren-horizontal_phone').classList;
let blackScrenVer = document.querySelector('.blackscren-vertical_phone').classList;
let actButton = document.querySelector('.item').classList;;


document.querySelector('.button-vertical_phone').onclick = function() {
    if (!(blackScrenVer.contains('show-elem'))&&!actButton.contains('active')) {
		blackScrenVer.add('show-elem');
	}else{
			blackScrenVer.remove('show-elem');	
		} 
  }

document.querySelector('.button-horizontal_phone').onclick = function() {
    if (!(blackScrenHor.contains('show-elem'))&&!actButton.contains('active')) {
		blackScrenHor.add('show-elem');
	}else{
		blackScrenHor.remove('show-elem');
	}
  }  
   
function hideScreen() {
	document.querySelector('.blackscren-vertical_phone').classList.remove('show-elem');
	document.querySelector('.blackscren-horizontal_phone').classList.remove('show-elem');
}


  let items = document.querySelectorAll('.items-container .slider_block');
  let currentItem = 0;
  let isEnabled = true;
  
  function changeCurrentItem(n) {
	  currentItem = (n + items.length) % items.length;
  }
  
  function hideItem(direction) {
	  isEnabled = false;
	  items[currentItem].classList.add(direction);
	  items[currentItem].addEventListener('animationend', function() {
		  this.classList.remove('active', direction);
		  this.classList.add('plus');
	  });
  }
  
  function showItem(direction) {
	  items[currentItem].classList.add('next', direction);
	  items[currentItem].addEventListener('animationend', function() {
		  this.classList.remove('next', direction);
		  this.classList.add('active');
		  this.classList.remove('plus');
		  isEnabled = true;
	  });
  }
  
  function nextItem(n) {
	  hideItem('to-left');
	  changeCurrentItem(n + 1);
	  showItem('from-right');
  }
  
  function previousItem(n) {
	  hideItem('to-right');
	  changeCurrentItem(n - 1);
	  showItem('from-left');
  }
  
  document.querySelector('.left_arrow').addEventListener('click', function() {
	  if (isEnabled) {
		  previousItem(currentItem);
		  hideScreen ();
	  }
  });
  
  document.querySelector('.right_arrow').addEventListener('click', function() {
	  if (isEnabled) {
		  nextItem(currentItem);
		  hideScreen ();
	  }
  });





