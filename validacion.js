const nombre = document.getElementById("name");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>
    {
        e.preventDefault()
        let warnings = ""
        let regexEmail =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
        let entrar = false
        parrafo.innerHTML = ""
        if(nombre.value.length <8)
            {
                warnings += 'Por favor introduzca nombre y apellido <br>'
                entrar = true
            }
        if(!regexEmail.test(email.value))
            {
                warnings += 'correo no valido <br>'
                entrar = true
            }
        if(telefono.value.length <10)
            {
                warnings += 'El telefono no es valido <br>'
                entrar = true
            }
        if(entrar)
            {
                parrafo.innerHTML = warnings
            }
        else
            {
                parrafo.innerHTML = "Enviado"
            }
    }
)