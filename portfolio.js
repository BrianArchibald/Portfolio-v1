const nav = document.querySelector('.nav-sticky');
const socialContainer = document.querySelector('#socialContainer');
const navTop = nav.offsetTop;

const mobileNavIcon = document.querySelector('#menu-icon');
const mobileNavList = document.querySelector('#mobile-nav');
const closeMenu = document.querySelector('#close-menu');

//var closeMenu = document.getElementsByClassName('close-menu');

function changeMobileNav() {
	if (nav.style.display != "none") {
		mobileNavIcon.style.display = "none";
		nav.style.display = "none";
		mobileNavList.style.display = "block";
	} else {
		mobileNavIcon.style.display = "inline-block";
		nav.style.display = "grid";
		mobileNavList.style.display = "none";
	}
}
mobileNavIcon.addEventListener('click', changeMobileNav);
closeMenu.addEventListener('click', changeMobileNav);





// function scrolledNav () {


// }

// window.addEventListener('scroll', stickyElement);

	// console.log(socialContainer.scrollTop);
	// if (socialContainer.scrollTop > 0) {
	// 	document.getElementById("navSticky").classList.add("nav-sticky-v2");
	// } else {
	// 	document.getElementById("navSticky").classList.remove("nav-sticky-v2");
	// 	}
	// }

	//   console.log('navTop = ' + navTop);
	//   console.log('scrollY = ' + window.scrollY);




	// 	if (window.scrollY > 800) {
	// 		//if (window.scrollY > 0)
	// 		document.getElementById("navSticky").classList.add("nav-sticky-v2");
	// 	}
	// 	else {
	// 		document.getElementById("navSticky").classList.remove("nav-sticky-v2");
	// 	}
	// }

//window.addEventListener('scroll', scrolledNav);




function stickyElement(e) {
  
  var header = document.querySelector('.header');
  var headerHeight = getComputedStyle(header).height.split('px')[0];
  var navbar = document.querySelector('.nav-sticky');  
  var scrollValue = window.scrollY + 45;
  
  if (scrollValue > headerHeight) {
    navbar.classList.add('nav-sticky-v2');
    
  } else if (scrollValue < headerHeight) {
    navbar.classList.remove('nav-sticky-v2');
    
  }
}
  window.addEventListener('scroll', stickyElement);


// will run checkSlide every 20ms so checkSlide is not running constantly
function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

const slideUpBoxes = document.querySelectorAll('.slideUp');
const slideProjects = document.querySelectorAll('.projects');

function checkSlide() {     
	 for (var i=0; i<slideUpBoxes.length; i++) {
	 	if (window.scrollY > 390) {
	 		slideUpBoxes[i].classList.add('activeSkills');
	 	}
	  }
	  for (var i=0; i<slideProjects.length; i++) {
	  	if (window.scrollY > 890) {
	  		slideProjects[i].classList.add('projectActive');
	  	}
	  }
	}

window.addEventListener('scroll', debounce(checkSlide));



/*  Mobile Navigation  */
// const mobileNav = document.getElementById('menu-icon');
// const mobileNavX = 
// const navList = 


// function changeMobileNav() {
// 	console.log("nav clicked");

// 	//add and remove class to show icon or show nav options,
// 	element.style.display = none;
// 	element.style.display = block;
// 	// then show x when nav is clicked
// 	x.style.display = inline-block;
// 	mobileNav.style.display = none;
// 	// then when x is clicked show nav again.
// }


// mobileNav.addEventListener('click', changeMobileNav);



////  jquery menu toggle
// 


