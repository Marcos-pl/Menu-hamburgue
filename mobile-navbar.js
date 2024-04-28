class MobileNavbar{
    constructor(mobileMenu, navList, navLinks ){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";


        this.handleClick = this.handleClick.bind(this);
    }

    animatelinks() {
        this.navLinks.forEach((link) => {
            link.style.animation
           ? (link.style.animation = "")
           : (link.style.animation = 'navlinkfade 0.5s ease forwards 0.3s');
        });
    }


    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animatelinks();
    }

     addClickevent() {
           this.mobileMenu.addEventListener ("click", this.handleClick);
     }

     init() {
        if (this.mobileMenu) {
            this.addClickevent();
        }

        return this;
     }
        
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();