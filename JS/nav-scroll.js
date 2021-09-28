
const scrollHeader = () => {
    window.addEventListener('scroll', () => {
        let header = document.querySelector('header');

        if(window.scrollY > 0){
            header.classList.remove('header-top')
            header.classList.add('header-scroll')
        } else{
            header.classList.add('header-top')
            header.classList.remove('header-scroll')
        }
    })
}

scrollHeader()