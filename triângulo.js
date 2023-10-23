const form = document.querySelector("form")
const resp = document.querySelector("h3")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const LadoA = number(form.inLadoA.value);
    const LadoB = number(form.inLadoB.value);
    const LadoC = number(form.inLadoC.value);

    if((LadoA > LadoB + LadoC) || (LadoB > LadoA + LadoC) || (LadoC > LadoA + LadoB)){
      alert("Essas medidas não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois")
      form.inLadoA.focus()
      form.inLadoB.focus()
      form.inLadoC.focus()
      return
    }

    resp.innerText = 'Lados podem formar um triângulo'

    if(LadoA == LadoB && LadoA == LadoC){
        resp.innerText = 'Tipo: Equilátero'
    } else if((LadoA == LadoB) || (LadoA == LadoC) || (LadoB == LadoC)){
        resp.innerText = 'Tipo: Isóceles'
    } else{
        rep1.innerText = 'Tipo: Escaleno'
    }

})