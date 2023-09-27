// boton busqueda lista ventas:

BotonVentas = document.getElementById("WE4c1f63f38a");

BotonVentas.addEventListener("click", ()=>{
    
    TotalDia = numeral(0)
    ContenedorPrincipal.innerHTML  = "";
    ContenedorPrincipal.appendChild(BarraFechasVentas())

    Ventas.forEach(vnt => {

        
        ContenedorPrincipal.appendChild(ItemVentas(vnt.id, fechaFix(vnt.Fecha), vnt.Hora, vnt.Titulo, vnt.Detalle, vnt.Articulos.lengh, vnt.Total))
        TotalDia.add(vnt.Total)
    })

    document.getElementById("WE6d7ad133b1").innerText = "$ "+TotalDia.format("0,0.00")
    OE.CssEvents.loadAll()
})

function FiltrarVentas (f){

    TotalDia = numeral(0)
    ContenedorPrincipal.innerHTML  = "";
    ContenedorPrincipal.appendChild(BarraFechasVentas())

    var Filtro = Ventas.filter(s=>s.Fecha.includes(f))
    Filtro.forEach(vnt => {

        
        ContenedorPrincipal.appendChild(ItemVentas(vnt.id, fechaFix(vnt.Fecha), vnt.Hora, vnt.Titulo, vnt.Detalle, vnt.Articulos.lengh, vnt.Total))
        TotalDia.add(vnt.Total)
    })

    document.getElementById("WE6d7ad133b1").innerText = "$ "+TotalDia.value()
    OE.CssEvents.loadAll()
}
// Carrito de compras:


function EliminarVenta(id){
    
    Spinner(true)
    fetch(api+"remove_venta&id="+id)
    .then(json => json.json())
    .then(data => {
        if (data.status == "OK"){
            let mesVentas = document.getElementsByName("WEb7bdf0ec4a")[0].value
            Ventas = Ventas.filter(f => f.id !== parseInt(id))
            Spinner(false)
            FiltrarVentas (mesVentas)
        }
    })
}

function listarDetalleVenta(id){
    

    let Vent = Ventas.find(v=> v.id == id)
    
    document.getElementsByName("WEc86423ee22")[0].value = Vent.Titulo;
    document.getElementsByName("WEf95a9a5e31")[0].value = Vent.Detalle;
    document.getElementsByName("WEad3fa738c6")[0].value = Vent.Fecha
    document.getElementsByName("WE9335e38e75")[0].value = Vent.Hora

    PanelCarrito.style.display = "initial";

    let contenedor = document.getElementById("WE81f16fa51f").children[0].children[0].children[0]
    contenedor.innerHTML = "";
   Vent.Articulos.forEach(a =>{
    contenedor.appendChild(ItemEntradasCarrito(Vent.id, v, Vent.titulo, Vent.tipo, Vent.cnt, Vent.Precio, false))
    })

}

function VerVenta(){

}