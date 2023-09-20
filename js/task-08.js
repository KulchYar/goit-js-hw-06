const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", handleSubmit)

    function handleSubmit(event) {
        event.preventDefault()
    

    const form = event.currentTarget
        const login = form.elements.login.value;
    const password = form.elements.password.value;
    if (login === "" || password === "") {
        return console.log("Будь ласка, заповніть всі поля форми.")
    }
    else {
        console.log(`Login: ${login}, Password: ${password}`);
    }
        this.reset
    }

