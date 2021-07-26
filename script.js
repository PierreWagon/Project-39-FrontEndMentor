// Mail validation
const mailBtn = document.getElementById('mail-btn');
const mailInput = document.getElementById('mail');
const correctMail = document.querySelector('.correct-mail');

function validateMail(mail) {
    var mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if(mail.match(mailformat)) {
		return true;
	}
	else {
		return false;
	}
}

mailBtn.addEventListener('click', e => {
	let sub = validateMail(mailInput.value);
	if (sub) {
        mailInput.classList.remove('active');
        correctMail.classList.add('active');
	} 
	else { 
		mailInput.classList.add('active');
        correctMail.classList.remove('active');
	}
})


// Mobile version - Slider
const sliderBtn1 = document.getElementById('t1');
const sliderBtn2 = document.getElementById('t2');
const sliderBtn3 = document.getElementById('t3');
const sliderBtn4 = document.getElementById('t4');

const testimonial1 = document.querySelector('.testimonial.t1');
const testimonial2 = document.querySelector('.testimonial.t2');
const testimonial3 = document.querySelector('.testimonial.t3');
const testimonial4 = document.querySelector('.testimonial.t4');

function displaySlider() {
    if (sliderBtn1.checked) {
        testimonial1.style.display = "block";
        testimonial1.style.animation = "slideIn 0.5s linear";
        testimonial2.style.display = "none";
        testimonial3.style.display = "none";
        testimonial4.style.display = "none";
    }
    else if (sliderBtn2.checked) {
        testimonial2.style.display = "block";
        testimonial2.style.animation = "slideIn 0.5s linear";
        testimonial1.style.display = "none";
        testimonial3.style.display = "none";
        testimonial4.style.display = "none";
    }
    else if (sliderBtn3.checked) {
        testimonial3.style.display = "block";
        testimonial3.style.animation = "slideIn 0.5s linear";
        testimonial2.style.display = "none";
        testimonial1.style.display = "none";
        testimonial4.style.display = "none";
    }
    else if (sliderBtn4.checked) {
        testimonial4.style.display = "block";
        testimonial4.style.animation = "slideIn 0.5s linear";
        testimonial2.style.display = "none";
        testimonial3.style.display = "none";
        testimonial1.style.display = "none";
    }
}

sliderBtn1.addEventListener('change', e => {
    displaySlider();
})
sliderBtn2.addEventListener('change', e => {
    displaySlider();
})
sliderBtn3.addEventListener('change', e => {
    displaySlider();
})
sliderBtn4.addEventListener('change', e => {
    displaySlider();
})


// Mobile version - Hamburger menu
const mobileBtn = document.querySelector('.mobile-menu-open');

mobileBtn.addEventListener('click', e => {
    mobileBtn.classList.toggle('active');
})