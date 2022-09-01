
const lista = document.getElementById("lista")
const cuerpo = document.querySelector("#cuerpo")
const nombreIngresar = document.querySelector("#nombreingresado")
const acordeIngresar = document.querySelector("#acordesingresados")

function agregarCancionRhcp() {
    let input2 = document.querySelector("#nombreingresado").value
    let input3 = document.querySelector("#acordesingresados").value
    cancionesRHCP.push(new Cancion(input2, input3))
    localStorage.setItem("nuevascanciones", cancionesRHCP)

}
//Elegi SweetAlert para agregar en mi proyecto, ya que al buscar una cancion dentro de la pagina, sin el alert de html estaba utilizando un mensaje en pantalla de que no se encontraba el tema buscado, con SA logro mostrar de mejor manera que no se logro lo buscado.
const sa = (mensaje, icono) => {
    Swal.fire({
        icon: icono,
        title: 'Acorde desafinado',
        text: mensaje,
      })
 }

//Operador Avanzado Ternario
function buscarCancionRhcp() {
    let input1 = document.querySelector("#nombrecancion").value
    const resultado = cancionesRHCP.find(Cancion => Cancion.nombre === input1)
    resultado ? li.innerText = resultado.acordes : sa("No se encuentra en la lista", 'error') 
}

function mostrarNombresRHCP() {
    const cuerpo = document.querySelector("#cuerpo")
    cuerpo.innerHTML = ""
    cancionesRHCP.forEach(Cancion => {
        cuerpo.innerHTML += ` <tr>    
                        <td>${Cancion.nombre}</td>
                      </tr>`
    })

}

