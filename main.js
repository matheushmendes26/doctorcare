window.addEventListener('scroll',onScroll)
onScroll()
function onScroll() {

  showNavOnScroll()
  showBackToTopScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  }

  function activateMenuAtCurrentSection(section){
    const targetLine = scrollY +innerHeight/2;

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine>=sectionTop

    const sectionEndsAt = sectionTop+sectionHeight
    const sectionEndPassedTargetline = sectionEndsAt<= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetline

    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute(`id`)}]`)

    menuElement.classList.remove('active')
    if(sectionBoundaries){
      menuElement.classList.add('active')
    } 
  }


  function showNavOnScroll(){
    if (scrollY > 0) {
      navigation.classList.add('scroll')
  
    } else {
      navigation.classList.remove('scroll')
  
    }
  }

  function showBackToTopScroll(){
    if (scrollY > 400) {
      backToTopButton.classList.add('show')
  
    } else {
      backToTopButton.classList.remove('show')
  
    }

  }


function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}



ScrollReveal({
  origin:'top',
  distance:'30px',
  duration:700,
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services header,
  #services .card,
  #about,
  #about header,
  #about .content`);