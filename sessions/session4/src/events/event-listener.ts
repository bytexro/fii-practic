const element = document.getElementById('idButton');

element.addEventListener('click', buttonFunction());
element.removeEventListener('click', buttonFunction());

function buttonFunction() {
    alert('here');
}
