// ===== Scroll to Top ==== 
$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {    
      $('#top').fadeIn("fast");       
  } else {
      $('#top').fadeOut("fast");     
  }
});
$('#top').click(function() {            
  $('body,html').animate({
      scrollTop : 0                   
  }, 100);
});

// ===== Scroll Animation ==== 

function scrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.8

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0
        if (isSectionVisible) {
          section.classList.add('active')
        }
      })
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}

scrollAnimation()