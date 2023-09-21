const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", handleSubmit)

    function handleSubmit(event) {
        event.preventDefault()
    

        const form = event.currentTarget;
        const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {
        return console.log("Будь ласка, заповніть всі поля форми.")
    }
    else {
        console.log(`Email: ${email.value}, Password: ${password.value}`);
    }
        form.reset
    }

