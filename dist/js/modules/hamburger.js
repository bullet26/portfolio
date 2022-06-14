function hamburger() {
    
        document.querySelector('.hamburger').addEventListener('click', () => {
            document.querySelector('.menu').classList.add('active');
        });
    
        document.querySelector('.menu__close').addEventListener('click', () => {
            document.querySelector('.menu').classList.remove('active');
        });
        

  
        function hamburgerNavigation(menu,label) {
            document.querySelector(menu).addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(label).scrollIntoView({block: "start", behavior: "smooth"});
                document.querySelector('.menu').classList.remove('active');
            });
        }
        hamburgerNavigation('[data-menu="about"]','#about');
        hamburgerNavigation('[data-menu="resume"]','#resume');
        hamburgerNavigation('[data-menu="skills"]','#skills');
        hamburgerNavigation('[data-menu="portfolio"]','#portfolio');
        hamburgerNavigation('[data-menu="price"]','#price');
        hamburgerNavigation('[data-menu="contacts"]','#contacts');

        // document.querySelector('.pageup').addEventListener('click', () => {
        //     document.querySelector('#up').scrollIntoView({block: "center", behavior: "smooth"});
        // });
}

export default hamburger;