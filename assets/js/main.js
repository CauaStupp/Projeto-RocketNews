const form = document.querySelector('.form form');
const btnSubmit = document.querySelector('.input button');

form.addEventListener('submit', (e) => {
    e.preventDefault()
})


btnSubmit.addEventListener('click', () => {
    const input = document.querySelector('#email');
    const modal = document.querySelector('.modal');
    const modalConteiner = document.querySelector('.modal-container');
    const modalBody = document.querySelector('.modal-body');
    
    if (modal.classList.contains('active')) {
        modal.classList.remove('active');
        modalConteiner.classList.remove('active');
    } else {
        if (input.value.indexOf('@') !== -1) {
            modal.classList.add('active');
            modalConteiner.classList.add('active');
        } else {
            modal.classList.add('active');
            modalConteiner.classList.add('active');
            modalBody.innerHTML = 'Email tem que conter @ e .com - exemplo [foquete@rocketseat.com]'
        }
        if (input.value !== '' || input.value === null) {
            mostrarTexto(input, modalBody);
        } else {
            modalBody.innerHTML = 'Insira um email válido';
        }
        fecharModal(modal, modalConteiner);
    } 
})


function mostrarTexto(input, el) {
    if (input.value !== '') {
        el.innerHTML = `O email [ ${input.value} ] foi adicionado com sucesso no nosso sistema!`;
    }
}

function fecharModal(modal, modalConteiner) {
    const btnFechar = document.querySelector('.modal-btn a');

    btnFechar.addEventListener('click', (e) => {
        e.preventDefault();

        modal.classList.remove('active');
        modalConteiner.classList.remove('active');
    })
}