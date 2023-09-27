// Ventana Nuevo turno:

NuevoTurno = document.getElementById("WE43923170b8")

BotonNuevoTurno = document.getElementById("WEbe10cc7797")


// Nuevo Turno:
BotonNuevoTurno.addEventListener("click", ()=>{
    NuevoTurno.style.display = "initial"

    document.getElementsByName("WEede691b6f3")[0].value = "";
    let Ahora = new Date();
    document.getElementsByName("WE1e92c3060a")[0].value = Ahora.toISOString().substr(11, 5);
    document.getElementsByName("WEf23496345f")[0].value = "12:00";
    document.getElementsByName("WEce599db883")[0].value = "13:00";
    t_Detalle = document.getElementsByName("WE9753fb29fa")[0].value = "";
})

//Boton cerrar ventana:
document.getElementById("WE72c52f2d79").addEventListener("click", ()=>{
    NuevoTurno.style.display = "none"
})


// Guardar nuevo turno:
document.getElementById("WE30de77b923").addEventListener("click", ()=>{



    let t_Titulo = document.getElementsByName("WEede691b6f3")[0].value;
    let t_Fecha = document.getElementsByName("WE1e92c3060a")[0].value;
    let t_Hora_d = document.getElementsByName("WEf23496345f")[0].value;
    let t_Hora_h = document.getElementsByName("WEce599db883")[0].value;
    let t_Detalle = document.getElementsByName("WE9753fb29fa")[0].value;

    let sep1 = t_Hora_d.split(":")
    let sep2 = t_Hora_h.split(":")

    if (parseInt(sep1[0]) <= parseInt(sep2[0]))
    {
        Spinner(true)

        Turnos.push(

            {
                fecha:t_Fecha, 
                horario:t_Hora_d, 
                hasta:t_Hora_h, 
                Nombre:t_Titulo, 
                tipo:t_Detalle,
                Item: ItemTurnos(
                    Turnos.length, 
                    t_Fecha, 
                    t_Hora_d, 
                    t_Hora_h,
                    t_Titulo,
                    t_Detalle
                    )
            })

        let Send = new FormData();
        Send.append("turnos", JSON.stringify(Turnos))
        fetch(api+"push_turnos", {method:"POST", body: Send})
        .then(j=> j.json())
        .then(d => {
            if (d.status == "OK"){

                NuevoTurno.style.display = "none"
                CargarTurnos(Hoy.toISOString().split('T')[0]);
                Spinner(false)

            }
        })

        
    }
    else {
        alert("debe ser mayor el 'hasta', que el 'desde'")
    }

})

function CrearTurnos(){
    
    Turnos.forEach((el, v) => {

        let A = new Date(Hoy.toISOString().split("T")[0])
        let B = new Date(el.fecha)
        
        if (A.getTime() <= B.getTime()){
            el.Item = ItemTurnos(v, el.fecha, el.horario, el.hasta,el.Nombre,el.tipo)
            console.log(el.fecha + "->" + Hoy.toISOString().split("T")[0] + " se queda")
        } else {
            console.log(el.fecha + "->" + Hoy.toISOString().split("T")[0] + " se va")
            Turnos = Turnos.filter(fd => fd != el)
        }
        
    })
}

function CargarTurnos(t){

    
    let ContenedorTurnosFlotantes = document.getElementById("WEbfbd8c0bd5");
    ContenedorTurnos.innerHTML = "";
    ContenedorTurnos.innerHTML += BarraFechaTurnos()
    
    Turnos.forEach(ts => {
        if (ContenedorTurnosFlotantes.contains(ts.Item)){
            ContenedorTurnosFlotantes.removeChild(ts.Item)
        }
    })
    
    
    
    let filt = Turnos.filter(s => s.fecha == t)
    filt.forEach((el, n) =>{
        
        ContenedorTurnosFlotantes.appendChild(el.Item);
    })

    OE.CssEvents.loadAll()
}

// Busqueda por Selector:
document.getElementById("WEb1d95c68ca").addEventListener("click", ()=>{
    CargarTurnos(InputFechaTurnos[0].value);    
})

function EliminarTurno(v){
    
    Spinner(true)

    let ContenedorTurnosFlotantes = document.getElementById("WEbfbd8c0bd5");
    let t = Turnos[v];
    ContenedorTurnosFlotantes.removeChild(t.Item)
    Turnos = Turnos.filter(d => d !== t);
    
    let Send = new FormData();
        Send.append("turnos", JSON.stringify(Turnos))
        fetch(api+"push_turnos", {method:"POST", body: Send})
        .then(j=> j.json())
        .then(d => {
            if (d.status == "OK"){

                NuevoTurno.style.display = "none"
                CargarTurnos(Hoy.toISOString().split('T')[0]);
                Spinner(false)

            }
        })




}

