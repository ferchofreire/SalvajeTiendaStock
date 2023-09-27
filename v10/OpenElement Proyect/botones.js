
// Boton Cerrar POPUP Nuevo Item:
document.getElementById("WE3340c3b683").addEventListener("click",()=> {
	document.getElementById("WEc83f1946f2").style.display = "none"	
	ListarItems(CampoBusqueda.value)
	TmpCompras = null;
	//alert("cierro ventana")
	//console.log("cierro")
})
// Boton Abrir POPUP Nuevo Item:
document.getElementById("WE5c557736c5").addEventListener("click",()=> {
	//document.getElementById("WEc83f1946f2").style.display = "initial"
	EditarItem(null)	
	//alert("cierro ventana")
	//console.log("cierro")
})

document.getElementById("WE81f7fecbaa").addEventListener("click", ()=>{
	location.reload();
})

document.getElementById("WE7f0254e064").addEventListener("click", ()=>{
	alert("cerrar ventana")
})