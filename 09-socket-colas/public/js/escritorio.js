// Referencias del HTML
const lblEscritorio = document.querySelector('h1');
const lblAtendiendo = document.querySelector('small');
const btnAtender = document.querySelector('button');
const divAlerta = document.querySelector('.alert');
const lblPendientes = document.querySelector('#lblPendientes');


const searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
lblEscritorio.innerText = escritorio;

divAlerta.style.display = 'none';

const socket = io();



socket.on('connect', () => {
    // console.log('Conectado');
    btnAtender.disabled = false;
});

socket.on('disconnect', () => {
    // console.log('Desconectado del servidor');
    btnAtender.disabled = true;
});

socket.on('ultimo-ticket', (ultimo) => {
    // console.log('Desconectado del servidor');
    //lblNuevoTicket.innerText = 'Ticket ' + ultimo;
});

socket.on('tickets-pendientes', (tickets) => {
    // console.log('Desconectado del servidor');
    if (tickets.length === 0) {
        lblPendientes.style.display = 'none';
    } else {
        lblPendientes.style.display = '';
        lblPendientes.innerText = tickets.length;
    }

});


btnAtender.addEventListener('click', () => {
    socket.emit('atender-ticket', { escritorio }, ({ ok, ticket }) => {
        if (!ok) {
            lblAtendiendo.innerText = 'Nadie';
            divAlerta.style.display = '';
        } else {
            lblAtendiendo.innerText = 'Ticket ' + ticket.numero;
            divAlerta.style.display = 'none';
        }
    });

});