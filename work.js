let ultimaPosicionScroll = window.pageYOffset;
let seccionActiva = null;
document.addEventListener('DOMContentLoaded', () => {

    window.addEventListener('scroll', () => {
        const secciones = document.getElementsByClassName('project');
        let textoDinamico = document.getElementById('texto-dinamico');
        const navLinks = document.getElementsByClassName('mini-nav');
        let current = '';
        // console.log(navLinks)

        Array.prototype.forEach.call(secciones, function(seccion) {
            current = seccion.id;
            const top = seccion.getBoundingClientRect().top;
            const bottom = seccion.getBoundingClientRect().bottom;
    
            if(window.scrollY < 810) {
                document.getElementById('1').classList.remove('activated')
                textoDinamico.textContent = 'Carlos\'s Space';
            }
            if ((top >= 0 && top < window.innerHeight * 0.5)  || (bottom > window.innerHeight * 0.5 && bottom <= window.innerHeight)) {

                // Sección visible en el viewport
                switch(seccion.id) {
                    case 'work-intro':
                        textoDinamico.textContent = 'Carlos\'s Space';
                        break;
                    case 'greenbox':
                        document.getElementById('2').classList.remove('activated')
                        document.getElementById('3').classList.remove('activated')
                        document.getElementById('4').classList.remove('activated')
                        document.getElementById('5').classList.remove('activated')

                        textoDinamico.textContent = 'GreenBox';
                        document.getElementById('1').classList.add('activated')

                        break;
                    case 'cc':
                        document.getElementById('1').classList.remove('activated')
                        document.getElementById('3').classList.remove('activated')
                        document.getElementById('4').classList.remove('activated')
                        document.getElementById('5').classList.remove('activated')
                        textoDinamico.textContent = 'Caring Creatures';
                        document.getElementById('2').classList.add('activated')

                        break;
                    case 'ambiensa':
                        document.getElementById('1').classList.remove('activated')
                        document.getElementById('2').classList.remove('activated')
                        document.getElementById('4').classList.remove('activated')
                        document.getElementById('5').classList.remove('activated')
                        textoDinamico.textContent = 'Ambiensa';
                        document.getElementById('3').classList.add('activated')

                        break;
                    case 'trainer':
                        document.getElementById('1').classList.remove('activated')
                        document.getElementById('2').classList.remove('activated')
                        document.getElementById('3').classList.remove('activated')
                        document.getElementById('5').classList.remove('activated')
                        textoDinamico.textContent = 'TTDNE';
                        document.getElementById('4').classList.add('activated')

                        break;
                
                    case 'car':
                        document.getElementById('1').classList.remove('activated')
                        document.getElementById('2').classList.remove('activated')
                        document.getElementById('3').classList.remove('activated')
                        document.getElementById('4').classList.remove('activated')
                        textoDinamico.textContent = 'V&C Studio';
                        document.getElementById('5').classList.add('activated')

                        break;
                    // Añade más casos según sea necesario
                    default:
                        textoDinamico.textContent = 'Carlos\'s Space';
                }
            }
            
        });
       

   
    });
});

