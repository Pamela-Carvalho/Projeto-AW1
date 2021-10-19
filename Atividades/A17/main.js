const masks = {
    cpf(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    },
    rg(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{1})\d+?$/, '$1')
    },
    tel(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
        .replace(/(-\d{4})\d+?$/, '$1')
    },
    cep(value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{3})\d+?$/, '$1')
    }
}

document.querySelectorAll('input').forEach(($input) => {
    const field = $input.dataset.js

    $input.addEventListener('input', (e) => {
        e.target.value = masks[field](e.target.value)
    }, false)
})

const button = document.getElementById('button')

button.addEventListener('click', (event) =>{
    event.preventDefault()

    const tel = document.getElementById('tel')
    const cpf = document.getElementById('cpf')
    const rg = document.getElementById('rg')
    const cep = document.getElementById('cep')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if (tel.value == '' || tel.value.length < 14) {
        tel.classList.add("errorInput")
    } else {
        tel.classList.remove("errorInput")
    }

    if (cpf.value == '' || cpf.value.length < 14) {
        cpf.classList.add("errorInput")
    } else {
        cpf.classList.remove("errorInput")
    }

    if (rg.value == '' || rg.value.length < 12) {
        rg.classList.add("errorInput")
    } else {
        rg.classList.remove("errorInput")
    }
    
    if (cep.value == '' || cep.value.length < 9) {
        cep.classList.add("errorInput")
    } else {
        cep.classList.remove("errorInput")
    }

    if (email.value == '' || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || (email.value.indexOf(".") - email.value.indexOf("@") == 1)) {
        email.classList.add("errorInput")
    } else {
        email.classList.remove("errorInput")
    }

    if (password.value == '' || password.value.length < 8) {
        password.classList.add("errorInput")
    } else {
        password.classList.remove("errorInput")
    }
})