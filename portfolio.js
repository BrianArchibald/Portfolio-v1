const nav = document.querySelector('.nav-sticky');

// function scrolledNav () {
// 	if (window.scrollY > 0) {
// 		document.getElementById("navSticky").classList.add("nav-sticky-v2");
// 	}
// 	else {
// 		document.getElementById("navSticky").classList.remove("nav-sticky-v2");
// 	}
// }

// window.addEventListener('scroll', scrolledNav);




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
	 	if (window.scrollY > 220) {
	 		slideUpBoxes[i].classList.add('activeSkills');
	 	}
	  }
	  for (var i=0; i<slideProjects.length; i++) {
	  	if (window.scrollY > 670) {
	  		slideProjects[i].classList.add('projectActive');
	  	}
	  }
	}

window.addEventListener('scroll', debounce(checkSlide));