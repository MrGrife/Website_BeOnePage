import {postData} from '../services/services';

function forms(formSelector) {
    const form = document.querySelector(formSelector),
    parentPrevModal = document.querySelector(".send-data");

    bindPostData(form);

    const messages = {
        success: "✓ Thanks you. The Mailman is on his way!",
        loading: "img/spinner.svg",
        failure: "✘ Verification error. Try again!"
    };

    function bindPostData (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const error = formValidate();
            if (error === 0) {
                
                const statusMessage = document.createElement("img");
                    statusMessage.src = messages.loading;
                    statusMessage.style.cssText = `
                        position: absolute;
                        top: 40%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        opacity: 1;
                    `;
                parentPrevModal.append(statusMessage);

                const formData = new FormData(form);
                const json = JSON.stringify(Object.fromEntries(formData));
                postData("http://localhost:3000/requests", json)
                .then(() => {
                    showThanksModal(messages.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(messages.failure);
                    statusMessage.remove();
                })
                .finally(() => {
                    form.reset();
                });
            }
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.createElement("div");

        prevModalDialog.classList.add("thanks__message");
        prevModalDialog.innerText = message;
        parentPrevModal.append(prevModalDialog);

        setTimeout(() => {
            prevModalDialog.classList.add("hide");
        }, 4500);
    }

    function formValidate() {
        let error = 0;
        let formReq = document.querySelectorAll("._req");

        formReq.forEach(input => {
            input.addEventListener("input", () => {
                formRemoveError(input);
                if (input.classList.contains('email')) {
                    if (emailTest(input)) {
                        formAddError(input);
                    }
                } else if (input.classList.contains('math')) {
                    if (input.value != firstNumber + secondNumber) {
                        formAddError(input);
                    }
                } else {
                    if (input.value === "") {
                        formAddError(input);
                    }
                }
            });
            formRemoveError(input);
            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else if (input.classList.contains('math')) {
                if (input.value != firstNumber + secondNumber) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === "") {
                    formAddError(input);
                    error++;
                }
            }
        });
        return error;
    }

    function formAddError(input) {
        input.classList.add("error");
    }
    function formRemoveError(input) {
        input.classList.remove("error");
    }
    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }


    /* Random numbers */

    const checkedInput = document.querySelector(".check-on-real-human input"),
        firstNumber = Math.floor(Math.random() * 21) + 1,
        secondNumber = Math.floor(Math.random() * 21) + 1;

    function randomNumbers () {
        return `${firstNumber} + ${secondNumber} = ?`;
    }

    checkedInput.setAttribute("placeholder", randomNumbers());
}

export default forms;