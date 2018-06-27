const nav = document.querySelector('.nav-sticky');

function scrolledNav () {
	if (window.scrollY > 0) {
		document.getElementById("navSticky").classList.add("nav-sticky-v2");
	}
	else {
		document.getElementById("navSticky").classList.remove("nav-sticky-v2");
	}
}

window.addEventListener('scroll', scrolledNav);

