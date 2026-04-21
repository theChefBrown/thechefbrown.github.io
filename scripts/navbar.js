const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar-logo');

//Display Mobile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling

const highlightMenu = () => {
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const courseMenu = document.querySelector('#courses-page')
    const reasonMenu = document.querySelector('#reason-page')
    const ecoMenu = document.querySelector('#eco-page')
    // const animationMenu = document.querySelector('#animation-page')
    let scrollPos = window.scrollY

    // adds the highlight class to my menu items

    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('.highlight')
        courseMenu.classList.remove('.highlight')
        return
    }else if(window.innerWidth > 960 && scrollPos < 1400){
        courseMenu.classList.add('.highlight')
        homeMenu.classList.remove('.highlight')
        courseMenu.classList.remove('.highlight')
        reasonMenu.classList.remove('.highlight')
        ecoMenu.classList.remove('.highlight')
        return
    
    }else if(window.innerWidth > 960 && scrollPos < 2345){
        reasonMenu.classList.add('.highlight')
        ecoMenu.classList.add('.highlight')
        courseMenu.classList.remove('.highlight')
        return
    
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('.highlight')
    }


}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//close mobile menu when clicking on a menu item

const hideMobileMenu = () => {
    
}


// window.addEventListener("scroll", function(){
//     var header =document.querySelector("navbar");
//     header.classList.toggle("sticky", window.scrollY);
// })

// function changeBg(){
//     var navbar = document.getElementById('navbar');
//     var scrollValue = window.scrollY;
//     if(scrollValue < 150){
//         navbar.classList.remove('change-nav');
//     }else{
//         navbar.classList.add('change-nav');
//     }
// }
// window.addEventListener('scroll', changeBg);

// const highlightMenu = () => {
//     const elem = document.querySelector('.highlight')
//     const homeMenu = document.querySelector('#home-page')
//     const coursesMenu = document.querySelector('#courses-page')
//     const reasonMenu = document.querySelector('#reason-page')
//     const ecoMenu = document.querySelector('#eco-page')
//     const accountMenu = document.querySelector('#account-page')

//     let scrollPos = window.scrollY



// }