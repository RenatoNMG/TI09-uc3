const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

button.addEventListener('click', () => {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add('info')

    notif.innerText = 'Nova mensagem';

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 4000);
});
