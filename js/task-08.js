const loginForm = document.querySelector(".login-form")

loginForm.addEventListener("submit", handleSubmit)

    function handleSubmit(event) {
        event.preventDefault()
    

        const form = event.currentTarget;
        const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {
        alert ("Будь ласка, заповніть всі поля форми.")
    }
    else {
         const formData = {
            email: email,
            password: password
         };
        console.log(formData);
        form.reset();
    }
        
    }

