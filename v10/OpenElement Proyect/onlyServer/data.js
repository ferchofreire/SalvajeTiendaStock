api = "../api.php?f="
folder = "../fotos/"

Hoy = new Date();
TipoCambio = 180;
Articulos = [];
Ventas = [];
Turnos = [];

function RefrechData(){

    fetch(api+"get_all_items")
    .then(json => json.json())
    .then(data => {

        console.log(data);
        Articulos = data[0];
        Ventas = data[1];
        Turnos = data[2];
        TipoCambio = data[3].dolar;document.getElementsByName("WE79c2f82c1f")[0].value = TipoCambio;
        Fotos = data[4];

        Articulos.forEach(d => {
            //d.usd = (d.usd == "0") ? false : true;
            d.stock = 0;
        })
        
        MapearTipos()
        ContablizarStock()
        Spinner(false)
        ListarItems(CampoBusqueda.value)
        CrearTurnos()
        CargarTurnos(Hoy.toISOString().split('T')[0]);
        ListarFotos();

    })
}
RefrechData();



/*
Articulos = [{
	id:"0", cod:"",
	img:"default", titulo:"Cadena Entera", 
	tipo:"Cadenas", usd:false, costo:"120", precio:"480", 
	proveedor:"Proveedor Demo", detalle:"Cajon 8, entrada", stock:0
}, {
	id:"1", cod:"",
	img:"default", titulo:"Cadena Entera Cubo", 
	tipo:"Arito", usd:false, costo:"120", precio:"480", 
	proveedor:"Proveedor Demo", detalle:"Cajon 8, entrada", stock:0
}, 
{
	id:"2", cod:"",
	img:"default", titulo:"box 1cm", 
	tipo:"Arito", usd:false, costo:"120", precio:"480", 
	proveedor:"Mandinga", detalle:"Cajon 8, entrada", stock:0
},
{
	id:"3", cod:"",
	img:"default", titulo:"box 1cm", 
	tipo:"Arito", usd:false, costo:"120", precio:"480", 
	proveedor:"Mandinga", detalle:"Cajon 8, entrada", stock:0
},
{
	id:"4", cod:"",
	img:"default", titulo:"Tula 3cm", 
	tipo:"Arito", usd:true, costo:"120", precio:"480", 
	proveedor:"Mandinga", detalle:"Cajon 8, entrada", stock:0
},
{
	id:"5", cod:"",
	img:"default", titulo:"Pumba 3cm", 
	tipo:"Arito", usd:false, costo:"120", precio:"480", 
	proveedor:"Mandinga", detalle:"Cajon 8, entrada", stock:0
}

]


Stock = [
    {titulo:"Carga", tipo:1, id:5, fecha:"", fact:"", cnt:10}
    ]

Turnos = [

    {fecha:"2023-01-12", horario:"00:00", Nombre:"Mauricio DoclcheMascolo", tipo:"Tipo trabajo"}
]

Ventas = [{
    id:"0", Titulo:"Una Venta", Total:"300", Factura:"0001568", Hora:"16:36", Fecha:"2021-11-10", Detalle:"Articulos Varios", Articulos:[
        //ventas:
        {fecha:"", titulo:"", id:5, cnt:1, precio:"520"}
    ]
}]
*/


function Spinner(i){

     document.getElementById("WEBlackFrame").style.display = (i) ? "initial" : "none";
     document.getElementById("WEa017906e49").style.display = (i) ? "initial" : "none";
    
}