function ActualizarContCarrito (){
    document.getElementById("WE405a0fe7ab").innerText = "Carrito ("+Carrito.Articulos.length+")"
}


ModCarrito = {
    Titulo:"Una Venta", Total:"300", Factura:"00000000", Hora:"16:36", Fecha:"2021-11-10", Detalle:"Articulos Varios", Articulos:[
        //ventas:
        //{id:5, titulo:"", cnt:1, tipo:"", precio:"520"},
        //{id:1, titulo:"", cnt:2, tipo:"", precio:"520"}
    ]
}
Carrito = JSON.parse(JSON.stringify(ModCarrito))

ActualizarContCarrito();

PanelCarrito = document.getElementById("WEa4795036cb");
BotonCerrarCarrito = document.getElementById("WEf5660fb65d");

BotonCarrito = document.getElementById("WE5271979c78");

// Mostrar Carrito:
BotonCarrito.addEventListener("click", ()=>{
    
 VerCarrito()

})

function VerCarrito(){
    PanelCarrito.style.display = "initial";

    document.getElementsByName("WEc86423ee22")[0].value = Carrito.Titulo;
    document.getElementsByName("WEc86423ee22")[0].value = Carrito.Titulo;
    document.getElementsByName("WEf95a9a5e31")[0].value = Carrito.Detalle;
    
    let Ahora = new Date();
    document.getElementsByName("WEad3fa738c6")[0].value = Ahora.toISOString().substr(11, 5);
    let fecha = Ahora.toJSON().split("T")
    document.getElementsByName("WE9335e38e75")[0].value = fecha[0]
    

    ListarCarrito()
}

BotonCerrarCarrito.addEventListener("click", ()=>{

    Carrito.Titulo = document.getElementsByName("WEc86423ee22")[0].value
    Carrito.Fecha = document.getElementsByName("WE9335e38e75")[0].value
    Carrito.Hora = document.getElementsByName("WEad3fa738c6")[0].value
    Carrito.Detalle = document.getElementsByName("WEf95a9a5e31")[0].value
    Carrito.Factura = document.getElementsByName("WE953bc69c81")[0].value
    Carrito.Total = document.getElementsByName("WE0dd98e6a64")[0].value

    PanelCarrito.style.display = "none";
})

// Boton Limpiar Carrito
document.getElementById("WE8787734d48").addEventListener("click", ()=>{
    Carrito.Articulos = [];
    ListarCarrito();
})


function ListarCarrito(){
    let contenedor = document.getElementById("WE81f16fa51f").children[0].children[0].children[0]
    contenedor.innerHTML = "";
    let total = numeral();
    Carrito.Articulos.forEach((itm, v) => {
        let PrecioTotal = numeral(0);
        let Art = Articulos.find(a => a.id == itm.id)
        PrecioTotal.add(Art.precio);
        PrecioTotal.multiply(itm.cnt)
        if (Art.usd){
            PrecioTotal.multiply(parseInt(TipoCambio))
        }
        
        contenedor.appendChild(ItemEntradasCarrito(Art.id, v, Art.titulo, Art.tipo, itm.cnt, PrecioTotal.format("0,0.00")))
        itm.precio = PrecioTotal.format('0.0,00');

        total.add(PrecioTotal._value)
        
    })
    OE.CssEvents.loadAll()
    document.getElementsByName("WE0dd98e6a64")[0].value = total.format("0,0.00")
}

function AgregaraCarrito(id){

    let check = Carrito.Articulos.find(s => s.id == id)
    if (check!=undefined){
        check.cnt+=1;
        VerCarrito();
    } else {
        let Art = Articulos.find(a => a.id == id)
        let Item = {id:id, titulo:Art.titulo, cnt:1, tipo:Art.tipo, precio:0};
        Carrito.Articulos.push(Item);
        ActualizarContCarrito()
        VerCarrito();
    }

    
}

// hacer Venta:

document.getElementById("WE25e9f0ef76").addEventListener("click", ()=>{

    Spinner(true)
    
    Carrito.Titulo = document.getElementsByName("WEc86423ee22")[0].value
    Carrito.Fecha = document.getElementsByName("WE9335e38e75")[0].value
    Carrito.Hora = document.getElementsByName("WEad3fa738c6")[0].value
    Carrito.Detalle = document.getElementsByName("WEf95a9a5e31")[0].value
    Carrito.Factura = document.getElementsByName("WE953bc69c81")[0].value
    Carrito.Total = document.getElementsByName("WE0dd98e6a64")[0].value
    Carrito.id = (Ventas.length+1)

    var data = new FormData();
        data.append("data", JSON.stringify(Carrito))
        fetch(api+"push_venta", {method: "POST", body: data})
            .then(json => json.json())
            .then(data => {
                if (data.status == "OK"){

                    Ventas.push(Carrito)
                    Carrito = JSON.parse(JSON.stringify(ModCarrito))
                    PanelCarrito.style.display = "none";

                    
                    ContablizarStock()
                    ListarItems(CampoBusqueda.value)

                    Spinner(false)

                    
                }
                
            })
        })


// Solicitudes de Compras:

