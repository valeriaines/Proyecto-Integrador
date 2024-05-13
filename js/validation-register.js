
// let btnSend = document.querySelector("#btn-send");

// btnSend.addEventListener("click", function (event) {
//   event.preventDefault(); // esto para evitar que el formulario se envie

//     let inputFirstname = document.getElementById("firstname");
//     let inputLastname = document.getElementById("lastname");
//     let inputEmail = document.getElementById("email");
//     let inputPassword = document.getElementById("password");
//     let inputBirthday = document.getElementById("birthday");
//     let inputCountry = document.getElementById("country");

//   //declarar las variables de error fuera del if
//     let errorFirstname = document.getElementById("error-firstname");
//     let errorLastname = document.getElementById("error-lastname");
//     let errorEmail = document.getElementById("error-email");
//     let errorPassword = document.getElementById("error-password");
//     let errorBirthday = document.getElementById("error-birthday");
//     let errorCountry = document.getElementById("error-country");

//   // que el mensaje de error sea vacio inicialmente , y si no ocurre la condicion que este vacio
//     errorFirstname.textContent = "";
//     errorLastname.textContent = "";
//     errorEmail.textContent = "";
//     errorPassword.textContent = "";
//     errorBirthday.textContent = "";
//     errorCountry.textContent = "";


//   // las condiciones de error
//     if (inputFirstname.value.trim() === "") {
//     errorFirstname.textContent = "Debes completar el campo Nombre";
//     }

//     if (inputLastname.value.trim() === "") {
//     errorLastname.textContent = "Debes completar el campo Apellido";
//     }

//     if (inputEmail.value.trim() === "") {
//     errorEmail.textContent = "Debes ingresar un email";
//     }

//     if (inputPassword.value.trim() === "") {
//     errorPassword.textContent = "Debes ingresar una contraseña";
//     }

//     if (inputBirthday.value.trim() === "") {
//     errorBirthday.textContent = "Debes ingresar fecha de cumpleaños";
//     }

//     if (inputCountry.value.trim() === "") {
//     errorCountry.textContent = "Debes ingresar país";
//     }

//   // solo mostrar alerta cuando esten todo completos 
//     if (
//     inputFirstname.value.trim() !== "" &&
//     inputLastname.value.trim() !== "" &&
//     inputEmail.value.trim() !== "" &&
//     inputPassword.value.trim() !== "" &&
//     inputBirthday.value.trim() !== "" &&
//     inputCountry.value.trim() !== ""
//     ) {
//     alert("Gracias por enviar el formulario");
//     }
// });





let btnSend= document.querySelector('#btn-send');



btnSend.addEventListener('click',function(){
    let inputFirstname = document.querySelector('#firstname');    
    let lastname = document.querySelector('#lastname');    
    let email = document.querySelector('#email'); 
    let password = document.querySelector('#password');
    let birthday = document.querySelector('#birthday');
    let terms = document.querySelector('#terms');
    let country = document.querySelector('#country');

    // Validación para el campo Nombre (no admite números ni signos especiales)
    if (!/^[a-zA-Z\s]+$/.test(inputFirstname.value.trim())) {
        inputFirstname.classList.add('error');
        let errorFirstname = document.querySelector('#error-firstname');
        errorFirstname.innerHTML = 'Ingresa un nombre válido (sin números ni signos especiales)';
        event.preventDefault(); // Evita el envío del formulario
    } else {
        inputFirstname.classList.remove('error');
        let errorFirstname = document.querySelector('#error-firstname');
        errorFirstname.innerHTML = ''; // Limpia el mensaje de error
    }
    
    // Validación para el campo Apellido (no admite números ni signos especiales)
    if (!/^[a-zA-Z\s]+$/.test(lastname.value.trim())) {
        lastname.classList.add('error');
        let errorLastname = document.querySelector('#error-lastname');
        errorLastname.innerHTML = 'Ingresa un apellido válido (sin números ni signos especiales)';
        event.preventDefault(); // Evita el envío del formulario
    } else {
        lastname.classList.remove('error');
        let errorLastname = document.querySelector('#error-lastname');
        errorLastname.innerHTML = ''; // Limpia el mensaje de error
    }

    // Validación para el campo Contraseña (8 dígitos con al menos una mayúscula, una minúscula y un número)
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password.value.trim())) {
        password.classList.add('error');
        let errorPassword = document.querySelector('#error-password');
        errorPassword.innerHTML = 'La contraseña debe tener al menos 8 caracteres con una mayúscula, una minúscula y un número';
        event.preventDefault(); // Evita el envío del formulario
    } else {
        password.classList.remove('error');
        let errorPassword = document.querySelector('#error-password');
        errorPassword.innerHTML = ''; // Limpia el mensaje de error
    }



    // Verifica si el campo de términos está marcado
    if (!terms.checked) {
        terms.classList.add('error');
        let errorTerms = document.querySelector('#error-terms');
        errorTerms.innerHTML = 'Debes aceptar los términos y condiciones';
        event.preventDefault(); // Evita el envío del formulario
    } else {
        terms.classList.remove('error');
        let errorTerms = document.querySelector('#error-terms');
        errorTerms.innerHTML = ''; // Limpia el mensaje de error
    }

    // Validación para campos vacíos (después de las validaciones específicas)
    if (inputFirstname.value.trim() === '') {
        inputFirstname.classList.add('error');
        let errorFirstname = document.querySelector('#error-firstname');
        errorFirstname.innerHTML = 'Debes completar el campo Nombre';
        event.preventDefault(); // Evita el envío del formulario
    }

    if (lastname.value.trim() === '') {
        lastname.classList.add('error');
        let errorLastname = document.querySelector('#error-lastname');
        errorLastname.innerHTML = 'Debes completar el campo Apellido';
        event.preventDefault(); // Evita el envío del formulario
    }
    if (country.value === '') {
        country.classList.add('error');
        let errorCountry = document.querySelector('#error-country');
        errorCountry.innerHTML = 'Debes seleccionar un país';
        event.preventDefault(); // Evita el envío del formulario
    }
});


// if(inputFirstname.value.trim()==''){
//     inputFirstname.classList.add('error');
//     let  errorFirstname = document.querySelector('#error-firstname');
//     errorFirstname.innerHTML = 'Debes completar el campo Nombre';
// }

// if(lastname.value.trim()==''){
//     lastname.classList.add('error');
//     let  errorLastname = document.querySelector('#error-lastname');
//     errorLastname.innerHTML = 'Debes completar el campo Apellido';        
// }
// if(email.value.trim()==''){
// email.classList.add('error');
// let errorEmail = document.querySelector('#error-email');
// errorEmail.innerHTML = 'Debes ingresar un email';
// }
// if(password.value.trim()==''){
//     password.classList.add('error');
//     let errorPassword = document.querySelector('#error-password');
//     errorPassword.innerHTML = 'Debes ingresar una contraseña';
//     }
// if(birthday.value.trim()==''){
//     birthday.classList.add('error');
//     let errorBirthday = document.querySelector('#error-birthday');
//     errorBirthday.innerHTML = 'Debes ingresar una fecha de nacimiento';
//     }
    
// if (!terms.checked) {
//     terms.classList.add('error');
//     let errorTerms = document.querySelector('#error-terms');
//     errorTerms.innerHTML = 'Debes aceptar los términos y condiciones';
//     }
   
// })

