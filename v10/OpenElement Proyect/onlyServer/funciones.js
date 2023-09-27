api = "../api.php?f="

// Cargas Inciales


// Listados:

// Contenedor Principal
   ContenedorPrincipal = document.getElementById("WEbea048bbbd").children[0].children[0].children[0]
// Contenedor Turnos:
   ContenedorTurnos = document.getElementById("WEbfbd8c0bd5").children[0].children[0].children[0]

function fechaFix(t){
    let fix = t.split('-')
    return fix[2]+"/"+fix[1]+"/"+fix[0]
}

// Ajustamos turnos y selector de ventas a fecha de hoy:

InputFechaTurnos = document.getElementsByName("WEc0c4ed4f85")
InputFechaTurnos[0].value = Hoy.toISOString().split('T')[0]
document.getElementsByName("WEb7bdf0ec4a")[0].value = Hoy.toISOString().split('T')[0]
document.getElementsByName("WEea28926cc0")[0].value = Hoy.toISOString().split('T')[0]


// Actualizar Tipo de Cambio:

document.getElementById("WE78362d3683").addEventListener("click", ()=>{

    Spinner(true);
    let p = document.getElementsByName("WE79c2f82c1f")[0];

    //alert("Actualizar Dolar");
    fetch(api+"setDollar&p="+p.value)
    .then(json => json.json())
    .then(data => {
        if (data.status == "OK"){
            Spinner(false);
            RefrechData();
        } else {
            Spinner(false);
        }
    })

})
