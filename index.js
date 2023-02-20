let bg = document.querySelector('#bg');
let welcome = document.querySelector('#welcome');
let backList = document.querySelector('#hlight');
const isMobile = !window.matchMedia('only screen and (min-width: 768px)').matches

// if(isMobile){
//     // Future Implementation
// }

document.querySelector('#land').addEventListener('mouseover', function() {
    bg.style.backgroundColor = '#F0F0DD';
    bg.style.transition = '0.7s';
    welcome.style.backgroundSize = '100% 100%';
});

document.querySelector('#green').addEventListener('mouseover', function() {
    bg.style.backgroundColor = '#F0F0C9';
    bg.style.backgroundImage = 'none';
    bg.style.transition = '0.7s';
    wuwei.style.backgroundSize = '100% 100%';
});

document.querySelector('#gradient').addEventListener('mouseover', function() {
    bg.style.backgroundColor = '#EDFF71';
    bg.style.transition = '0.7s';
    interests.style.backgroundSize = '100% 100%';
    interests.style.transitionDelay = '0ms';
    ai.style.backgroundSize = '100% 100%';
    ai.style.transitionDelay = '100ms';
    soft.style.backgroundSize = '100% 100%';
    soft.style.transitionDelay = '200ms';
    bch.style.backgroundSize = '100% 100%';
    bch.style.transitionDelay = '300ms';
    stup.style.backgroundSize = '100% 100%';
    stup.style.transitionDelay = '400ms';
    books.style.backgroundSize = '100% 100%';
    books.style.transitionDelay = '500ms';
});

document.querySelector('#work').addEventListener('mouseover', function() {
    bg.style.backgroundColor = '#0D0619';
    bg.style.transition = '0.7s';
});

document.querySelector('#navb').addEventListener('mouseover', function() {
    bg.style.backgroundColor = '#0D0619';
    bg.style.transition = '0.7s';
});

document.querySelector('#land').addEventListener('mouseout', function() {
    welcome.style.backgroundSize = '0% 100%';
});

document.querySelector('#green').addEventListener('mouseout', function() {
    wuwei.style.backgroundSize = '0% 100%';
    wuwei.style.color = '#FFF';
});

document.querySelector('#gradient').addEventListener('mouseout', function() {
    interests.style.backgroundSize = '0% 100%';
    interests.style.transitionDelay = '600ms';
    gradient.style.color = '#FFF';
    ai.style.backgroundSize = '0% 100%';
    ai.style.transitionDelay = '500ms';
    soft.style.backgroundSize = '0% 100%';
    soft.style.transitionDelay = '400ms';
    bch.style.backgroundSize = '0% 100%';
    bch.style.transitionDelay = '300ms';
    stup.style.backgroundSize = '0% 100%';
    stup.style.transitionDelay = '200ms';
    books.style.backgroundSize = '0% 100%';
    books.style.transitionDelay = '100ms';
});
