
// Busquedas por el campo BUSCAR inicial:

CampoBusqueda = document.getElementsByName("WEe9ffa6fe13")[0]
botonBusqueda = document.getElementById("WEf279e633b3");
campoProv = document.getElementsByName("WE448d863181")[0]
campoTipo = document.getElementsByName("WE5eaef61fb8")[0]


// Listamos los proveedores y tipos de items:

CampoProveedor = document.getElementsByName("WE448d863181")[0]
CampoTipoArticulo = document.getElementsByName("WE5eaef61fb8")[0]
Proveedores = [];
TiposArticulos = [];

CampoProveedor.innerHTML = "<option value=''>-- Todos --</option>";
CampoTipoArticulo.innerHTML = "<option value=''>-- Todos --</option>";

function MapearTipos(){
    Articulos.forEach(i => {
        
        if (!Proveedores.includes(i.proveedor)){
            CampoProveedor.innerHTML += "<option value='"+i.proveedor+"'>"+i.proveedor+"</option>";
            Proveedores.push(i.proveedor)}

        if (!TiposArticulos.includes(i.tipo)){
            CampoTipoArticulo.innerHTML += "<option value='"+i.tipo+"'>"+i.tipo+"</option>";
            TiposArticulos.push(i.tipo)}
    })
}


// botones o al cambiar texto (o precionar enter)
CampoBusqueda.addEventListener("change", ()=>{
    ListarItems(CampoBusqueda.value)
});

botonBusqueda.addEventListener("click", ()=>{
    ListarItems(CampoBusqueda.value)
})


function ListarItems(t){

    if (document.getElementsByName("WE81fd3cc8d3")[0].checked){

        FiltroBusqueda = Articulos.filter((s)=> 
            s.cod.toLowerCase().includes(CampoBusqueda.value.toLowerCase())
        )
        
    } else {

        FiltroBusqueda = Articulos.filter((s)=> 

        s.titulo.toLowerCase().includes(CampoBusqueda.value.toLowerCase()) && 
        s.proveedor.includes(campoProv.value) &&
        s.tipo.includes(campoTipo.value)
        )

    }
    
    

    ContenedorPrincipal.innerHTML  = "";

    if (FiltroBusqueda.length > 0){
        ContenedorPrincipal.innerHTML  = "";
        //console.log (FiltroBusqueda)
        FiltroBusqueda.forEach( el => {
            ContenedorPrincipal.appendChild(
                ItemArticulos(el.id, el.cod, el.titulo, el.img, el.tipo, el.proveedor, el.costo, el.precio, el.usd, el.detalle, el.stock)
                );
        })

} else {
    ContenedorPrincipal.innerHTML  = "";
     
}

OE.CssEvents.loadAll()

}



// Funciones:

var TmpCompras = null;
var TmpNvo = {id:"nuevo",compras:[], img:"default.jpg", stock:0};

function EditarItem(id){

    
    var CasillaDollar = document.getElementById("WE29e6ae329b").children[0].children[0]
    document.getElementById("WEc83f1946f2").style.display = "initial"
    var ContendorReducciones = document.getElementById("WE8fed740dc2").children[0].children[0].children[0]
    if (id != null){

        
        let Art = Articulos.find(a => a.id == id)

        let img = (Art.img != "default" && Art.img != "default.jpg") ? folder+Art.img : "WEFiles/Image/WEImage/empty_image-WE492e9af9c5.jpg"
        document.getElementById("WE492e9af9c5").children[0].children[0].src = img

        document.getElementsByName("WE54a1ce9afb")[0].value = Art.titulo;
        document.getElementsByName("WEb77e779b58")[0].value = Art.costo
        document.getElementsByName("WE68d9061f07")[0].value = Art.precio;
        document.getElementsByName("WEdc958dd025")[0].value = Art.detalle
        document.getElementsByName("WE2d4710ff97")[0].value = Art.proveedor
        if (Art.usd){
            CasillaDollar.checked = true;
            let n = numeral(Art.precio);
            n.multiply(parseInt(TipoCambio));
            document.getElementById("WEeb224223b0").innerHTML = "Precio de cambio: "+n.format('$ 0,0.00')
        } else {
            CasillaDollar.checked = false;
            document.getElementById("WEeb224223b0").innerHTML = ""
        }
        document.getElementById("WE3a81de808b").innerText = Art.stock
        document.getElementsByName("WE2001866771")[0].value = Art.tipo
        document.getElementsByName("WEd91a2da812")[0].value = Art.cod
        // WE492e9af9c5 Art.img
        // Listamos reducciones
        document.getElementById("WEfc1d3b5ed3").style.display = "block";
        ListarReduccionesArticulos(Art)


    } else {
        document.getElementById("WE492e9af9c5").children[0].children[0].src = "WEFiles/Image/WEImage/empty_image-WE492e9af9c5.jpg"
        ContendorReducciones.innerHTML = "";
        document.getElementById("WEeb224223b0").innerHTML = "" // si no es dolar
        document.getElementsByName("WE54a1ce9afb")[0].value = "";
        document.getElementsByName("WEb77e779b58")[0].value = "0";
        document.getElementsByName("WE68d9061f07")[0].value = "0";
        document.getElementsByName("WEdc958dd025")[0].value = "";
        document.getElementsByName("WE2d4710ff97")[0].value = "";
        document.getElementById("WE3a81de808b").innerText = "0";
        document.getElementsByName("WE2001866771")[0].value = "";
        document.getElementsByName("WEd91a2da812")[0].value = "";
        
        document.getElementsByName("WEd91a2da812")[0].value = GetCodItem();
        document.getElementById("WEfc1d3b5ed3").style.display = "none";
        ListarReduccionesArticulos(TmpNvo)
    }
}

function ListarReduccionesArticulos(a){
    var ContendorReducciones = document.getElementById("WE8fed740dc2").children[0].children[0].children[0]
    ContendorReducciones.innerHTML = "";
    TmpCompras = JSON.parse(JSON.stringify(a))
    TmpCompras.compras.forEach((c,v )=> {
        ContendorReducciones.appendChild(
            ItemEntradasStock(a.id, v, c.titulo, c.fecha, c.fact, c.cnt, c.tipo)
        )
    })

}
// Botones dentro del formulario:
    // Multiplicar X 4
document.getElementById("WE4f4df55a00").addEventListener("click", ()=>{

    var CasillaDollar = document.getElementById("WE29e6ae329b").children[0].children[0]

    if (!CasillaDollar.checked){
        var Mult = document.getElementsByName("WEb77e779b58")[0].value * 4;
        document.getElementsByName("WE68d9061f07")[0].value = Mult;
        document.getElementById("WEeb224223b0").innerHTML = ""
    } else {
        var Mult = (document.getElementsByName("WEb77e779b58")[0].value * 4);
        let n = numeral(Mult)
        n.multiply(parseInt(TipoCambio))
        document.getElementById("WEeb224223b0").innerHTML = "Precio de cambio: "+n.format('$ 0,0.00')
        
        //parseInt(TipoCambio)
        document.getElementsByName("WE68d9061f07")[0].value = Mult;
    }
    
})


// GuardarItem
document.getElementById("WE1efa46789c").addEventListener("click", ()=>{
        GuardarNuevoItem(TmpCompras)
})

function GuardarNuevoItem(itm){

    

    if (itm.id != "nuevo"){

        let CasillaDollar = document.getElementById("WE29e6ae329b").children[0].children[0]
        // envio actualizacion al servidor:

        Spinner(true)

        
        let send = {

            img:itm.img,
            id:itm.id,
            cod:itm.cod,
            titulo:document.getElementsByName("WE54a1ce9afb")[0].value,
            costo:document.getElementsByName("WEb77e779b58")[0].value,
            precio:document.getElementsByName("WE68d9061f07")[0].value, 
            detalle:document.getElementsByName("WEdc958dd025")[0].value,
            proveedor:document.getElementsByName("WE2d4710ff97")[0].value,
            tipo:document.getElementsByName("WE2001866771")[0].value,
            compras:JSON.parse(JSON.stringify(TmpCompras.compras)),
            usd:(CasillaDollar.checked),
            stock:0,

        }

        var data = new FormData();
        data.append("data", JSON.stringify(send))
        fetch(api+"refresh_articulo", {method: "POST", body: data})
            .then(json => json.json())
            .then(data => {
                if (data.status == "OK"){

                    // actualizar local
                    let ref = Articulos.find(i => i.id == itm.id)

                    ref.usd = (CasillaDollar.checked);
                    ref.img = send.img;
                    ref.titulo = document.getElementsByName("WE54a1ce9afb")[0].value;
                    ref.costo = document.getElementsByName("WEb77e779b58")[0].value;
                    ref.precio = document.getElementsByName("WE68d9061f07")[0].value; 
                    ref.detalle = document.getElementsByName("WEdc958dd025")[0].value;
                    ref.proveedor = document.getElementsByName("WE2d4710ff97")[0].value;
                    ref.tipo = document.getElementsByName("WE2001866771")[0].value;
                    ref.compras = JSON.parse(JSON.stringify(TmpCompras.compras));
                    ref.stock = itm.stock;
                    document.getElementById("WEc83f1946f2").style.display = "none"	
                    TmpCompras = null;
                    ContablizarStock()
                    ListarItems(CampoBusqueda.value)
                    Spinner(false)

                }
            })

        
    } else {

        let CasillaDollar = document.getElementById("WE29e6ae329b").children[0].children[0]
        
        Spinner(true);

        let ID = (Articulos.length+1)

        let Nvo = {

            img:TmpCompras.img,
            id:ID,
            cod:document.getElementsByName("WEd91a2da812")[0].value,
            titulo:document.getElementsByName("WE54a1ce9afb")[0].value,
            costo:document.getElementsByName("WEb77e779b58")[0].value,
            precio:document.getElementsByName("WE68d9061f07")[0].value, 
            detalle:document.getElementsByName("WEdc958dd025")[0].value,
            proveedor:document.getElementsByName("WE2d4710ff97")[0].value,
            tipo:document.getElementsByName("WE2001866771")[0].value,
            compras:JSON.parse(JSON.stringify(TmpCompras.compras)),
            usd:(CasillaDollar.checked),
            stock:0,

        }

        var data = new FormData();
        data.append("data", JSON.stringify(Nvo))
        fetch(api+"push_articulo", {method: "POST", body: data})
            .then(json => json.json())
            .then(data => {
                if (data.status == "OK"){
                    Articulos.push(Nvo);
                    document.getElementById("WEc83f1946f2").style.display = "none"	
                    ContablizarStock()
                    ListarItems(CampoBusqueda.value)
                    Spinner(false)
                }
        
        })
    }
    
}

// Genera código de items
function GetCodItem(){

        var Ahora = new Date()
        var datCod = ""+Ahora.getDay()+Ahora.getMonth()+Ahora.getFullYear();
        var cod = btoa(datCod).replaceAll("=", "").substr(2,3)
        var codN = Math.random().toString(36).slice(2,7).toUpperCase();


    return codN+cod.toUpperCase();
}

// Eliminar Articulo
document.getElementById("WEfc1d3b5ed3").addEventListener("click", ()=>{
    
    Spinner(true)
    fetch(api+"remove_articulo&id="+TmpCompras.id)
            .then(json => json.json())
            .then(data => {
                if (data.status == "OK"){
                    
                    Articulos = Articulos.filter(ar => ar.id !== TmpCompras.id);
                    document.getElementById("WEc83f1946f2").style.display = "none"	
                    ListarItems(CampoBusqueda.value)
                    Spinner(false)
                }
            });
})



// Agregar Reduccion
document.getElementById("WEef9ba00f11").addEventListener("click", ()=>{
    AgregarReduccion(true);
})
document.getElementById("WEba4f7df00c").addEventListener("click", ()=>{
    AgregarReduccion(false);
})

function AgregarReduccion(f)
{
    document.getElementById("WE60184f383c").style.display = "initial";
    document.getElementsByName("WE1d5eb697f3")[0].value = (f) ? "1": "0"
    

}

/// Botones Reducciones:
document.getElementById("WE85936f731a").addEventListener("click", ()=>{
    document.getElementById("WE60184f383c").style.display = "none"; 
})
// Agrega Reduccion:
document.getElementById("WE6bb9876860").addEventListener("click", ()=>{
    TmpCompras.compras.push(
        {
        cnt:parseInt(document.getElementsByName("WE20a5171bfc")[0].value),
        fact:document.getElementsByName("WEe1e3db1e2c")[0].value,
        fecha: document.getElementsByName("WEc1ef707108")[0].value,
        tipo: parseInt(document.getElementsByName("WE1d5eb697f3")[0].value),
        titulo: document.getElementsByName("WEe509ee1268")[0].value
        })
        
        if (parseInt(document.getElementsByName("WE1d5eb697f3")[0].value) == 1){
            TmpCompras.stock += parseInt(document.getElementsByName("WE20a5171bfc")[0].value)
        } else {
            TmpCompras.stock -= parseInt(document.getElementsByName("WE20a5171bfc")[0].value)
        }
        
        document.getElementById("WE3a81de808b").innerText = TmpCompras.stock;
        document.getElementById("WE60184f383c").style.display = "none"; 

    ListarReduccionesArticulos(TmpCompras)
})
