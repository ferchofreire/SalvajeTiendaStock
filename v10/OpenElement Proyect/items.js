function ItemArticulos(id, cod,titulo, img, tipo, proveedor, costo, precio, usd, detalle, stock){

    let Imagen = (img != "defualt.jpg" && img != "default" && img!=undefined) ? folder+img : "WEFiles/Image/WEImage/empty_image-WE70f5c040dd.jpg"

    // Formato de precios:
    let usds = (usd) ? "(U$D "+precio+")" : "";
    if (usd) {
        let pst = numeral(precio)
        let p = pst.multiply(TipoCambio)
        var precio = p.format('$ 0,0.00')
    } else {
        let pst = numeral(precio)
        var precio = pst.format('$ 0,0.00')
        //var precio = 
    }

    let el = document.createElement("div")
    let html = '<div id="WE94d7fa7396" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OEGo" style="z-index:1">'+
    '<div class="OESZ OESZ_DivContent OESZG_WE94d7fa7396">'+
     '<div class="OECT OECT_Content OECTAbs OEDynTag0">'+
      '<div id="WE70f5c040dd" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:1">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE70f5c040dd">'+
        '<img src="'+Imagen+'" class="OESZ OESZ_Img OESZG_WE70f5c040dd" alt="" />'+
       '</div>'+
      '</div>'+
      '<div id="WEb67f91f697" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:2">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEb67f91f697">'+
        '<span class="OESZ OESZ_Text OESZG_WEb67f91f697 ContentBox">'+titulo+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WEb1d96f1162" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:4">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEb1d96f1162">'+
        '<span class="OESZ OESZ_Text OESZG_WEb1d96f1162 ContentBox">Stock:<br /></span>'+
       '</div>'+
      '</div>'+
      '<div id="WEe3e136c9e8" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:7">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEe3e136c9e8">'+
        '<span class="OESZ OESZ_Text OESZG_WEe3e136c9e8 ContentBox">Precio '+usds+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WEc2284b9db8" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:5">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEc2284b9db8">'+
        '<span class="OESZ OESZ_Text OESZG_WEc2284b9db8 ContentBox">Tipo: '+tipo+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WE6df21fcad0" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default" style="z-index:3">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE6df21fcad0">'+
        '<span class="OESZ OESZ_Text OESZG_WE6df21fcad0 ContentBox">'+stock+'<br /></span>'+
       '</div>'+
      '</div>'+
      '<div id="WE4a6613b1a0" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:9">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE4a6613b1a0">'+
        '<span class="OESZ OESZ_Text OESZG_WE4a6613b1a0 ContentBox">'+precio+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WE4860b8099a" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OEGo" style="z-index:11">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE4860b8099a">'+
        '<div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:hidden">'+
         '<div id="WE47f291cc24" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:1">'+
          '<div class="OESZ OESZ_DivContent OESZG_WE47f291cc24">'+
           '<img src="WEFiles/Image/WEImage/carrito-WE47f291cc24.png" class="OESZ OESZ_Img OESZG_WE47f291cc24" alt="" />'+
          '</div>'+
         '</div>'+
        '</div>'+
       '</div>'+
      '</div>'+
      '<div id="WE37cb483e90" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:8">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE37cb483e90">'+
        '<span class="OESZ OESZ_Text OESZG_WE37cb483e90 ContentBox">Precio Costo: '+costo+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WE8f4f6f5337" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:10">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE8f4f6f5337">'+
        '<span class="OESZ OESZ_Text OESZG_WE8f4f6f5337 ContentBox">Proveedor:&nbsp;'+proveedor+'<br /></span>'+
       '</div>'+
      '</div>'+
      '<div id="WE476e8ffab7" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:6">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE476e8ffab7">'+
        '<span class="OESZ OESZ_Text OESZG_WE476e8ffab7 ContentBox">Código Interno: '+cod+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WE74729b3215" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:12">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE74729b3215">'+
        '<span class="OESZ OESZ_Text OESZG_WE74729b3215 ContentBox">Detalle: '+detalle+'<br /></span>'+
       '</div>'+
      '</div>'+
     '</div>'+
    '</div>'+
   '</div>';
     el.innerHTML = html;

     el.firstChild.children[0].children[0].children[0].addEventListener("click", ()=>{
        EditarItem(id)
        
    })

    el.firstChild.children[0].children[0].children[7].addEventListener("click", ()=>{
        AgregaraCarrito(id)
    })



    return el.firstChild;
}




function ItemVentas(id, Fecha, Hora, Titulo, Detalle, Itms, total){

    let Obj = document.createElement("div");
    let itmsVtas = '<div id="WE2904697d73" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OEGo" style="z-index:3">'+
          '<div class="OESZ OESZ_DivContent OESZG_WE2904697d73">'+
           '<div class="OECT OECT_Content OECTAbs OEDynTag0">'+
           '<div id="WEdfa492249a" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:8">'+
             '<div class="OESZ OESZ_DivContent OESZG_WEdfa492249a">'+
              '<img src="WEFiles/Image/WEImage/delete-button-png-28565-WEc607cf3929.png" class="OESZ OESZ_Img OESZG_WEdfa492249a" alt="" />'+
             '</div>'+
            '</div>'+
            '<div id="WE30dfea8eeb" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:7">'+
             '<div class="OESZ OESZ_DivContent OESZG_WE30dfea8eeb">'+
              '<img src="WEFiles/Image/WEImage/left-arrow-2561-WE30dfea8eeb.png" class="OESZ OESZ_Img OESZG_WE30dfea8eeb" alt="" />'+
             '</div>'+
            '</div>'+
            '<div id="WE78c456f463" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:1">'+
             '<div class="OESZ OESZ_DivContent OESZG_WE78c456f463">'+
              '<span class="OESZ OESZ_Text OESZG_WE78c456f463 ContentBox">('+Fecha+'-'+Hora+') '+Titulo+'</span>'+
             '</div>'+
            '</div>'+
            '<div id="WEbd912cfe2a" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:3">'+
             '<div class="OESZ OESZ_DivContent OESZG_WEbd912cfe2a">'+
              '<span class="OESZ OESZ_Text OESZG_WEbd912cfe2a ContentBox">Total Vendido:</span>'+
             '</div>'+
            '</div>'+
            '<div id="WEccf2273a4d" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OEGo" style="z-index:5">'+
             '<div class="OESZ OESZ_DivContent OESZG_WEccf2273a4d">'+
              '<div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:hidden">'+
               '<div id="WEd259a36d18" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:1">'+
                '<div class="OESZ OESZ_DivContent OESZG_WEd259a36d18">'+
                 '<img src="WEFiles/Image/WEImage/list-WEd259a36d18.png" class="OESZ OESZ_Img OESZG_WEd259a36d18" alt="" />'+
                '</div>'+
               '</div>'+
              '</div>'+
             '</div>'+
            '</div>'+
            '<div id="WE89d7d17858" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:4">'+
             '<div class="OESZ OESZ_DivContent OESZG_WE89d7d17858">'+
              '<span class="OESZ OESZ_Text OESZG_WE89d7d17858 ContentBox">$'+total+'</span>'+
             '</div>'+
            '</div>'+
            '<div id="WE8818eeda42" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:6">'+
             '<div class="OESZ OESZ_DivContent OESZG_WE8818eeda42">'+
              '<span class="OESZ OESZ_Text OESZG_WE8818eeda42 ContentBox">'+Detalle+'</span>'+
             '</div>'+
            '</div>'+
            '<div id="WE558795ede0" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:2">'+
             '<div class="OESZ OESZ_DivContent OESZG_WE558795ede0">'+
              '<span class="OESZ OESZ_Text OESZG_WE558795ede0 ContentBox">Items Vendidos: '+Itms+'</span>'+
             '</div>'+
            '</div>'+
           '</div>'+
          '</div>'+
         '</div>';

         Obj.innerHTML = itmsVtas;
         Obj.firstChild.children[0].children[0].children[0].addEventListener("click", ()=>{
            EliminarVenta(id)
         })

         Obj.firstChild.children[0].children[0].children[4].addEventListener("click", ()=>{
            listarDetalleVenta(id)
         })
         return Obj.firstChild;
}

function CalcularAlturayLargo(horario, hasta){
    let pos = horario.split(":")
    let posh = hasta.split(":")
    let x = (parseInt(pos[0])<6) ? 0 : (parseInt(pos[0])-5)*42
    let mins = (parseInt(pos[1])>30) ? 20 : 0 ;
    let minsh = (parseInt(posh[1])>30) ? 20 : 0 ;
    let y = (parseInt(posh[0])<6) ? 0 : (parseInt(posh[0])-5)*42
    return {al:(x+mins), l:(((y-mins)+minsh)-x)};
}

function ItemTurnos(id, fecha, horario, hasta, nombre, tipo){

    

    let top = CalcularAlturayLargo(horario, hasta);
    let Obj = document.createElement("div");
    
    let item = '<div id="WE61a9fde995" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OEGo" style="position:absolute; top:'+top.al+'px; height:'+top.l+'px;left:72px; z-index:35">'+
          '<div class="OESZ OESZ_DivContent OESZG_WE61a9fde995">'+
           '<div class="OECT OECT_Content OECTAbs OEDynTag0">'+
            '<div id="WEc607cf3929" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:5">'+
             '<div class="OESZ OESZ_DivContent OESZG_WEc607cf3929">'+
              '<img src="WEFiles/Image/WEImage/delete-button-png-28565-WEc607cf3929.png" class="OESZ OESZ_Img OESZG_WEc607cf3929" alt="" />'+
             '</div>'+
            '</div>'+
            '<div id="WEece923f057" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:1">'+
             '<div class="OESZ OESZ_DivContent OESZG_WEece923f057">'+
              '<img src="WEFiles/Image/WEImage/group-png-3237-WEece923f057.png" class="OESZ OESZ_Img OESZG_WEece923f057" alt="" />'+
             '</div>'+
            '</div>'+
            '<div id="WEf6b450dc30" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default" style="z-index:2">'+
             '<div class="OESZ OESZ_DivContent OESZG_WEf6b450dc30">'+
              '<span class="OESZ OESZ_Text OESZG_WEf6b450dc30 ContentBox">'+horario+' - '+hasta+'</span>'+
             '</div>'+
            '</div>'+
            '<div id="WE4a89d875ef" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:3">'+
             '<div class="OESZ OESZ_DivContent OESZG_WE4a89d875ef">'+
              '<span class="OESZ OESZ_Text OESZG_WE4a89d875ef ContentBox">'+nombre+'</span>'+
             '</div>'+
            '</div>'+
            '<div id="WEb1b5e22bff" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:4">'+
             '<div class="OESZ OESZ_DivContent OESZG_WEb1b5e22bff">'+
              '<span class="OESZ OESZ_Text OESZG_WEb1b5e22bff ContentBox">'+tipo+'</span>'+
             '</div>'+
            '</div>'+
           '</div>'+
          '</div>'+
         '</div>';
         Obj.innerHTML = item;
         Obj.firstChild.children[0].children[0].children[0].addEventListener("click", ()=>{
            EliminarTurno(id)
         })
         
         
    return Obj.firstChild;
}

function ItemEntradasStock(id, v, tit, fecha, nf, cant, tipo){

    let color = (tipo == 1) ? "#d7e3bc" : "#E5B9B7"
    let Obj = document.createElement("div");
    var html = '<div id="WE8c28f3cd37" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default" style="z-index:1;background-color:'+color+';">'+
    '<div class="OESZ OESZ_DivContent OESZG_WE8c28f3cd37">'+
     '<div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:hidden">'+
      '<div id="WEafb70d19f5" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:8">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEafb70d19f5">'+
        '<img src="WEFiles/Image/WEImage/delete-button-png-28565-WEafb70d19f5.png" class="OESZ OESZ_Img OESZG_WEafb70d19f5" alt="">'+
       '</div>'+
      '</div>'+
      '<div id="WE1b3332fd1f" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:3">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE1b3332fd1f">'+
        '<span class="OESZ OESZ_Text OESZG_WE1b3332fd1f ContentBox">Cantidad:<br></span>'+
       '</div>'+
      '</div>'+
      '<div id="WE397323142e" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:4">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE397323142e">'+
        '<span class="OESZ OESZ_Text OESZG_WE397323142e ContentBox">'+tit+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WEa7525a00b0" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:1">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEa7525a00b0">'+
        '<span class="OESZ OESZ_Text OESZG_WEa7525a00b0 ContentBox">Fecha:</span>'+
       '</div>'+
      '</div>'+
      '<div id="WEfd872345a2" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:5">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEfd872345a2">'+
        '<span class="OESZ OESZ_Text OESZG_WEfd872345a2 ContentBox">'+fecha+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WEe6966d2e24" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:2">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEe6966d2e24">'+
        '<span class="OESZ OESZ_Text OESZG_WEe6966d2e24 ContentBox">Nº Factura:<br></span>'+
       '</div>'+
      '</div>'+
      '<div id="WEbb2e091642" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:6">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEbb2e091642">'+
        '<span class="OESZ OESZ_Text OESZG_WEbb2e091642 ContentBox">'+nf+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WE431672d75c" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:7">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE431672d75c">'+
        '<span class="OESZ OESZ_Text OESZG_WE431672d75c ContentBox">'+cant+'</span>'+
       '</div>'+
      '</div>'+
     '</div>'+
    '</div>'+
   '</div>';

   Obj.innerHTML = html;
   Obj.firstChild.children[0].children[0].children[0].addEventListener("click", ()=>{
        
        let Art = TmpCompras
        if (Art.compras[v].tipo == 1){
            Art.stock -= Art.compras[v].cnt
        } else {
            Art.stock += Art.compras[v].cnt
        }
        
        document.getElementById("WE3a81de808b").innerText = Art.stock;
        Art.compras = Art.compras.filter(a => a !== Art.compras[v])
        ListarReduccionesArticulos(Art)
   })



   return Obj.firstChild;
}

function ItemEntradasCarrito(id, v, Nombre, Tipo, Cantidad, Precio, img){

    
    let Obj = document.createElement("div")
    let HTML = '<div id="WE0cdb52f8b1" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default" style="z-index:1">'+
    '<div class="OESZ OESZ_DivContent OESZG_WE0cdb52f8b1">'+
     '<div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:hidden">'+
      '<div id="WE365194a648" class="BaseDiv RNone OEWELabel OESK_WELabel_Default OEGo" style="z-index:2">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE365194a648">'+
        '<span class="OESZ OESZ_Text OESZG_WE365194a648 ContentBox">X<br></span>'+
       '</div>'+
      '</div>'+
      '<div id="WE82a5e194a2" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:5">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE82a5e194a2">'+
        '<img src="WEFiles/Image/WEImage/empty_image-WE82a5e194a2.jpg" class="OESZ OESZ_Img OESZG_WE82a5e194a2" alt="">'+
       '</div>'+
      '</div>'+
      '<div id="WE2dc997b3c7" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:1">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE2dc997b3c7">'+
        '<span class="OESZ OESZ_Text OESZG_WE2dc997b3c7 ContentBox">Cantidad:<br></span>'+
       '</div>'+
      '</div>'+
      '<div id="WEf340786990" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:6">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEf340786990">'+
        '<span class="OESZ OESZ_Text OESZG_WEf340786990 ContentBox">Precio:<br></span>'+
       '</div>'+
      '</div>'+
      '<div id="WE8f8340d116" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:3">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE8f8340d116">'+
        '<span class="OESZ OESZ_Text OESZG_WE8f8340d116 ContentBox">'+Nombre+'</span>'+
       '</div>'+
      '</div>'+
      '<div id="WEd178a64177" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:10">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEd178a64177">'+
        '<img src="WEFiles/Image/WEImage/delete-button-png-28565-WEd178a64177.png" class="OESZ OESZ_Img OESZG_WEd178a64177" alt="">'+
       '</div>'+
      '</div>'+
      '<div id="WE9da86a33ea" class="BaseDiv RWidth OEWETextBoxV2 OESK_WETextBox2_Default" style="z-index:7">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE9da86a33ea">'+
        '<input name="WE9da86a33ea" type="number" value="'+Cantidad+'"class="OESZ OESZ_TextBox OESZG_WE9da86a33ea OEDynTag0">'+
       '</div>'+
      '</div>'+
      '<div id="WEd587098313" class="BaseDiv RWidth OEWETextBoxV2 OESK_WETextBox2_Default" style="z-index:9">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEd587098313">'+
        '<input name="WEd587098313" type="text" value="'+Precio+'" class="OESZ OESZ_TextBox OESZG_WEd587098313 OEDynTag0">'+
       '</div>'+
      '</div>'+
      '<div id="WEfb65d30926" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:8">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEfb65d30926">'+
        '<span class="OESZ OESZ_Text OESZG_WEfb65d30926 ContentBox">Tipo: '+Tipo+'<br></span>'+
       '</div>'+
      '</div>'+
      '<div id="WE84580f46e4" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:4">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE84580f46e4">'+
        '<span class="OESZ OESZ_Text OESZG_WE84580f46e4 ContentBox">$</span>'+
       '</div>'+
      '</div>'+
     '</div>'+
    '</div>'+
   '</div>';
   Obj.innerHTML = HTML;
   Obj.firstChild.children[0].children[0].children[5].addEventListener("click", ()=>{
       Carrito.Articulos = Carrito.Articulos.filter(s => s !== Carrito.Articulos[v])
       ListarCarrito();
       ActualizarContCarrito();
   })

   // Modifica Cantidad:
   Obj.firstChild.children[0].children[0].children[6].addEventListener("change", (e)=>{
       //console.log(e.srcElement.value)
       Carrito.Articulos[v].cnt = e.srcElement.value
       ListarCarrito();

   })

   // modifica precio

   return Obj.firstChild;
}

function BarraFechasVentas(){
    let Obj = document.createElement("div")
    let barrafch = '<div id="WE36dfbb6180" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default" style="z-index:4">'+
    '<div class="OESZ OESZ_DivContent OESZG_WE36dfbb6180">'+
     '<div class="OECT OECT_Content OECTAbs OEDynTag0">'+
      '<div id="WE6d7ad133b1" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default" style="z-index:5">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE6d7ad133b1">'+
        '<span class="OESZ OESZ_Text OESZG_WE6d7ad133b1 ContentBox">$1111<br /></span>'+
       '</div>'+
      '</div>'+
      '<div id="WEb7bdf0ec4a" class="BaseDiv RWidth OEWETextBoxV2 OESK_WETextBox2_Default" style="z-index:2">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEb7bdf0ec4a">'+
        '<input name="WEb7bdf0ec4a" type="date" class="OESZ OESZ_TextBox OESZG_WEb7bdf0ec4a OEDynTag0" />'+
       '</div>'+
      '</div>'+
      '<div id="WEea28926cc0" class="BaseDiv RWidth OEWETextBoxV2 OESK_WETextBox2_Default" style="z-index:4">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEea28926cc0">'+
        '<input name="WEea28926cc0" type="date" class="OESZ OESZ_TextBox OESZG_WEea28926cc0 OEDynTag0" />'+
       '</div>'+
      '</div>'+
      '<div id="WE39b1d8a41b" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:1">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE39b1d8a41b">'+
        '<span class="OESZ OESZ_Text OESZG_WE39b1d8a41b ContentBox">Día:</span>'+
       '</div>'+
      '</div>'+
      '<div id="WEa1a1b2b4c6" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:3">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEa1a1b2b4c6">'+
        '<span class="OESZ OESZ_Text OESZG_WEa1a1b2b4c6 ContentBox">Hasta:</span>'+
       '</div>'+
      '</div>'+
      '<div id="WE3beb36dc96" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:6">'+
       '<div class="OESZ OESZ_DivContent OESZG_WE3beb36dc96">'+
        '<span class="OESZ OESZ_Text OESZG_WE3beb36dc96 ContentBox">Total:</span>'+
       '</div>'+
      '</div>'+
     '</div>'+
    '</div>'+
   '</div>';
   Obj.innerHTML = barrafch;
   Obj.firstChild.children[0].children[0].children[1].addEventListener("change", (e)=>{
    mesVentas = e.srcElement.value
    FiltrarVentas(e.srcElement.value)
   })

   return Obj.firstChild;
}
function BarraFechaTurnos(fecha){
    let barratrn = '<div id="WEda24cc8907" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default" style="z-index:7">'+
    '<div class="OESZ OESZ_DivContent OESZG_WEda24cc8907">'+
     '<div class="OECT OECT_Content OECTAbs OEDynTag0">'+
      '<div id="WEb1d95c68ca" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OEGo" style="z-index:3">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEb1d95c68ca">'+
        '<div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:hidden">'+
         '<div id="WEa05d40917b" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:2">'+
          '<div class="OESZ OESZ_DivContent OESZG_WEa05d40917b">'+
           '<img src="WEFiles/Image/WEImage/calendar-WEf39a43e54d.png" class="OESZ OESZ_Img OESZG_WEa05d40917b" alt="" />'+
          '</div>'+
         '</div>'+
         '<div id="WEa98b596bbe" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:1">'+
          '<div class="OESZ OESZ_DivContent OESZG_WEa98b596bbe">'+
           '<span class="OESZ OESZ_Text OESZG_WEa98b596bbe ContentBox">Ir</span>'+
          '</div>'+
         '</div>'+
        '</div>'+
       '</div>'+
      '</div>'+
      '<div id="WEc0c4ed4f85" class="BaseDiv RWidth OEWETextBoxV2 OESK_WETextBox2_Default" style="z-index:2">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEc0c4ed4f85">'+
        '<input onchange="javascript:CargarTurnos(InputFechaTurnos[0].value)" name="WEc0c4ed4f85" type="date" class="OESZ OESZ_TextBox OESZG_WEc0c4ed4f85 OEDynTag0" />'+
       '</div>'+
      '</div>'+
      '<div id="WEe7c51ab30b" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:1">'+
       '<div class="OESZ OESZ_DivContent OESZG_WEe7c51ab30b">'+
        '<span class="OESZ OESZ_Text OESZG_WEe7c51ab30b ContentBox">Fecha:</span>'+
       '</div>'+
      '</div>'+
     '</div>'+
    '</div>'+
   '</div>';
   return barratrn;
}

function ItemFotos(url){

    let obj = document.createElement("div")
    let html = '<div id="WE0b51c153bd" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:1">'+
    '<div class="OESZ OESZ_DivContent OESZG_WE0b51c153bd">'+
     '<img src="'+folder+url+'" class="OESZ OESZ_Img OESZG_WE0b51c153bd" alt="" />'+
    '</div>'+
   '</div>';
   obj.innerHTML = html;
    obj.firstChild.addEventListener("click", ()=>{
        AplicarImagen(url)
    })
    
    return obj.firstChild
}