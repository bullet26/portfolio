function animationIcon() {
    
    let img = ["icons/socialMedia/GithubMenuWhite.svg", "icons/socialMedia/InstagramMenuWhite.svg", "icons/socialMedia/FacebookMenuWhite.svg"];
    let imgOld = ["icons/socialMedia/GithubMenu.svg", "icons/socialMedia/InstagramMenu.svg", "icons/socialMedia/FacebookMenu.svg"];

    function mouseover() {
        document.querySelector('.menu__social').querySelectorAll('a').forEach((item, i) => {
            item.addEventListener('mouseover', () => {
                item.firstElementChild.src = img[i];
            });
        });
    }

    function mouseout() {
        document.querySelector('.menu__social').querySelectorAll('a').forEach((item, i) => {
            item.addEventListener('mouseout' || 'touchleave' || 'touchend', () => {
                item.firstElementChild.src = imgOld[i];
            });
        });
    }

    mouseover();
    mouseout();
}

export default animationIcon;