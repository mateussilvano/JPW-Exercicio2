function gerarpartida(){
   let partida = lerTimes()

   partida.golscasa = parseInt (Math.random() * 100 % 5)
   partida.golvisitante = parseInt (Math.random() * 100 % 5)

   setTimeout (function(){
      let div = document.createElement("div")
      let section = document.querySelector("#ListaPartida")
      section.appendChild(div)

      div.textContent = partida.timecasa + "" + partida.golscasa + "x" + partida.timevisitante + "" + partida.golvisitante

   },1000)
}

function lerTimes(){
   let timecasa = document.querySelector("#time1").value
   let timevisitante = document.querySelector("#time2").value

   let partida = {
      casa: timecasa,
      visitante: timevisitante
   }

   return partida
}

document.querySelector("#botaoClicavel").addEventListener("click", gerarpartida)