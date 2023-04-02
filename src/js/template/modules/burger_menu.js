export const burger_menu = () => {
    const button = document.querySelector('.js-header-burger');
    const header_nav = document.querySelector('.js-header_nav');
    const header = document.querySelector('.js-header');

    button.onclick = burger_menu;

    function burger_menu(){
        button.classList.toggle('--opened');
        header_nav.classList.toggle('--opened');
        header.classList.toggle('--opened');
    }

    window.onresize = () =>{
        if(header.clientWidth > 767){
            close_burger();
        }
    }

    function close_burger(){
        button.classList.remove('--opened');
        header_nav.classList.remove('--opened');
        header.classList.remove('--opened');
    }

    window.onscroll = () => {
        if(window.scrollY > 95){
            header.classList.add('--fixed');
        }else{
            header.classList.remove('--fixed');
        }
    }
}