const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const Lado, A = number(form.inLadoA.value);
    const Lado, B = number(form.inLadoB.value);
    const Lado, C = number(form.inLadoC.value);
    let leve = permitida + (permitida * 0.2);

    if (condutor <= permitida) {
        resp.innerText = 'Situação: Sem Multa';

    } else if (condutor <= leve) {
        resp.innerText = 'Situação: Multa leve';

    } else {
        resp.innerText = 'Situação: Multo grave';

    }
});