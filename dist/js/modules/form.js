function form() {
    function openModal(modalSelector) {
        document.querySelector(modalSelector).style.display = 'grid';
    }
    
    function closeModal(modalSelector) {
        document.querySelector(modalSelector).style.display = 'none';
    }

    function sendDataToMail(form) {
        fetch("mailer/smart.php", {
                method: "POST",
                body: new FormData(form)
            })
            .then(res => {
                if (res.status >= 200 && res.status < 300) {
                    return res;
                } else {
                    throw new Error("Форма не была отправлена");
                }
            })
            .then(data => {
                console.log('Form send');
                console.log(data);
                setTimeout(() => {
                    openModal('#thanks');
                }, 1000);
                setTimeout(() => {
                    closeModal('#thanks');
                }, 3000);
            })
            .catch(() => {
                openModal('#error');
                setTimeout(() => {
                    closeModal('#error');
                }, 2000);
            })
            .finally(() => {
                form.reset();
            });
    }

        let form = document.querySelector('form');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            let arr = [];
            form.querySelectorAll('input').forEach(input => arr.push(input.value));

            if (arr.some(i => i == '')) {
                console.log('Form didn`t send');
                return;
            } else {
                sendDataToMail(form);
            }

        });
}

export default form;