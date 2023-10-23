const form = document.querySelector("form")
const form = document.querySelector("#outResp")
const form = document.querySelector("#outResp1")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ladoA = Number(form.inladoA.value);
    const ladoB = Number(form.inladoB.value);
    const ladoC = Number(form.inladoC.value);

    if((ladoA > ladoB + ladoC) || (ladoB > ladoA + ladoC) || (ladoC > ladoA + ladoB)){
      alert("Essas medidas não podem formar um triângulo. Um dos lados não pode ser maior que a soma dos outros dois")
      form.inladoA.focus()
      form.inladoB.focus()
      form.inladoC.focus()
      return
    }

    resp.innerText = 'Lados podem formar um triângulo'

    if(ladoA == ladoB && ladoA == ladoC){
        resp.innerText = 'Tipo: Equilátero'
    }else if((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)){
        resp.innerText = 'Tipo: Isóceles'
    }else{
        rep1.innerText = 'Tipo: Escaleno'
    }
})