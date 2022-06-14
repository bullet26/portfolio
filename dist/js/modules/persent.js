function persent() {

    let persent = document.querySelectorAll('.skills__ratings-counter');

    document.querySelectorAll('.skills__ratings-line').forEach((item, i) => {

        item.querySelector('span').style.width = `${persent[i].textContent.replace(/\D+$/, '')}%`;
    });
}


export default persent;