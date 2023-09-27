// Boton Cambiar Foto:
function ToolFotos(){
    let Obj = document.createElement("input");
    Obj.type = "file"
    Obj.id = "fileinput"
    Obj.hidden = true;
    Obj.accept = "image/*"
    document.body.appendChild(Obj)
}

ToolFotos();

//inputFil = '<input type="file" id="fileInput" hidden>';

// Abre contenedor:
document.getElementById("WE6a53aa33f3").addEventListener("click", ()=>{
    document.getElementById("WE857c832b82").style.display = "initial"
})
// Cierra contenedor:
document.getElementById("WE5c6760ca26").addEventListener("click", ()=>{
    document.getElementById("WE857c832b82").style.display = "none"
})

// lista fotos:
function ListarFotos(){
    let Contenedor = document.getElementById("WE9ce177e1c7").children[0].children[0].children[0]
    Contenedor.innerHTML = ""
    Fotos.forEach(f =>{
        Contenedor.appendChild(ItemFotos(f));
    })
    OE.CssEvents.loadAll()
}

// aplica imágen
function AplicarImagen(url){
    document.getElementById("WE857c832b82").style.display = "none"
    document.getElementById("WE492e9af9c5").children[0].children[0].src = folder+url
    TmpCompras.img = url;
}
// contenedor : WE9ce177e1c7

document.getElementById("WE01f81db69a").addEventListener("click", ()=>{
    SeleccionarArchivo();
})

function SeleccionarArchivo(){
    document.getElementById("fileinput").click()
    
}

// al seleccionar una foto:
document.getElementById("fileinput").addEventListener("change", ()=>{
    
    Spinner(true)
    let a = document.getElementById("fileinput")
    if (a.files.length > 0){
        alert("Se seleccionó una foto")
        let Dat = new FormData();
        Dat.append("file", a.files[0])
        fetch(api+"uploadFoto", {method: "POST", body: Dat})
        .then(j => j.json())
        .then(d => {
            console.log(d)
            if (d.status == "OK"){
                let Contenedor = document.getElementById("WE9ce177e1c7").children[0].children[0].children[0]
                Contenedor.appendChild(ItemFotos(a.files[0].name))
                Spinner(false)
            }
            
        })

    } else {
        alert("debe seleccionar una foto para subir")
    }
})