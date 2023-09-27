<!DOCTYPE HTML>
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="es">
 <head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
  <meta name="generator" content="openElement (1.57.9)" />
  <link id="openElement" rel="stylesheet" type="text/css" href="WEFiles/Css/v02/openElement.css?v=50491112400" />
  <link id="OEBase" rel="stylesheet" type="text/css" href="website.css?v=50491112400" />
  <!--[if lte IE 7]>
  <link rel="stylesheet" type="text/css" href="WEFiles/Css/ie7.css?v=50491112400" />
  <![endif]-->
  <script type="text/javascript">
   var WEInfoPage = {"PHPVersion":"phpOK","OEVersion":"1-57-9","PagePath":"website","Culture":"DEFAULT","LanguageCode":"ES","RelativePath":"","RenderMode":"Export","PageAssociatePath":"website","EditorTexts":null};
  </script>
  <script type="text/javascript" src="WEFiles/Client/jQuery/1.10.2.js?v=50491112400"></script>
  <script type="text/javascript" src="WEFiles/Client/jQuery/migrate.js?v=50491112400"></script>
  <script type="text/javascript" src="WEFiles/Client/Common/oe.min.js?v=50491112400"></script>
  <style id="OEScriptManager" type="text/css">
   textarea:focus, input:focus{
       outline: none;
   }
   
   *:focus {
       outline: none;
   }
   
   
   ::-webkit-scrollbar {
     width: 10px;
     height: 10px;
   }
   ::-webkit-scrollbar-button {
     width: 0px;
     height: 0px;
   }
   ::-webkit-scrollbar-thumb {
     background: #423e00;
     border: 0px none #ffffff;
     border-radius: 15px;
   }
   ::-webkit-scrollbar-thumb:hover {
     background: #8f7c00;
   }
   ::-webkit-scrollbar-thumb:active {
     background: #807b00;
   }
   ::-webkit-scrollbar-track {
     background: #666666;
     border: 0px none #ffffff;
     border-radius: 0px;
   }
   ::-webkit-scrollbar-track:hover {
     background: #666666;
   }
   ::-webkit-scrollbar-track:active {
     background: #333333;
   }
   ::-webkit-scrollbar-corner {
     background: transparent;
   }
  </style><?php
  $Find = $_GET[q];
$Cat = $_GET[c];
$view = $_GET[t];

if($Find == ""){
	$Find = "NaN";
} else {
	$Find = str_replace("+", " ", $Find);
}

if($Cat == ""){
	$Cat = "NaN";
} else {
	$Cat = str_replace("+", " ", $Cat);
}

if($view != "0"){
	$view = "true";
} else {
	$view = "false";
}


$Res = "<script type=\"text/javascript\">";

$Res .= " UrlInput='".$Find."';"; 
$Res .= " UrlCat='".$Cat."';"; 
$Res .= " TipoVista = ".$view.";";

$Res .= " </script>";

echo $Res;

  ?>

  <meta property="og:url"           content="https://www.your-domain.com/your-page.html" />
  <meta property="og:type"          content="website" />
  <meta property="og:title"         content="Your Website Title" />
  <meta property="og:description"   content="Your description" />
  <meta property="og:image"         content="https://www.your-domain.com/path/image.jpg" /><?php
  	if (isset($oeHeaderInlineCode)) echo $oeHeaderInlineCode;
  ?>
 </head>
 <body class="RWAuto" data-gl="{&quot;KeywordsHomeNotInherits&quot;:false}"><?php
  	if (isset($oeStartBodyInlineCode)) echo $oeStartBodyInlineCode;
  ?>
  <form id="XForm" method="post" action="#"></form>
  <div id="XBody" class="BaseDiv RWidth OEPageXbody OESK_XBody_Default" style="z-index:0">
   <div class="OESZ OESZ_DivContent OESZG_XBody">
    <div class="OESZ OESZ_XBodyContent OESZG_XBody OECT OECT_Content OECTAbs">
     <div id="WEGoogleMap" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OECenterAB" style="z-index:8">
      <div class="OESZ OESZ_DivContent OESZG_WEGoogleMap">
       <div class="OECT OECT_Content OECTAbs OEDynTag0">
        <div id="WE8617694794" class="BaseDiv RNone OEWECodeBlock OESK_WECodeBlock_Default" style="z-index:1">
         <div class="OESZ OESZ_DivContent OESZG_WE8617694794">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d839.0656122191209!2d-60.73325331610677!3d-32.73222111923195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b65b171e06e8a3%3A0x269f92c369d76597!2sEstudio%20Salvaje!5e0!3m2!1ses-419!2sar!4v1695262173772!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div id="WELock" class="BaseDiv RNone OEWECadre OESK_WECadre_Default" style="z-index:6">
      <div class="OESZ OESZ_DivContent OESZG_WELock">
       <div class="OESZ OESZ_Top OESZG_WELock"></div>
       <div class="OESZ OESZ_Content OESZG_WELock"></div>
       <div class="OESZ OESZ_Bottom OESZG_WELock"></div>
      </div>
     </div>
     <div id="WE1cb75b72e9" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OECenterAH" style="z-index:4">
      <div class="OESZ OESZ_DivContent OESZG_WE1cb75b72e9">
       <div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:visible">
        <div id="WEec8e69fe4f" class="BaseDiv RBoth OEWECadre OESK_WECadre_Default" style="z-index:2">
         <div class="OESZ OESZ_DivContent OESZG_WEec8e69fe4f">
          <div class="OESZ OESZ_Top OESZG_WEec8e69fe4f"></div>
          <div class="OESZ OESZ_Content OESZG_WEec8e69fe4f"></div>
          <div class="OESZ OESZ_Bottom OESZG_WEec8e69fe4f"></div>
         </div>
        </div>
        <div id="WEWsp" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:9">
         <div class="OESZ OESZ_DivContent OESZG_WEWsp">
          <img src="WEFiles/Image/WEImage/WSPIcon-WE3fa9ff1c14.png" class="OESZ OESZ_Img OESZG_WEWsp" alt="" />
         </div>
        </div>
        <div id="WEBotonFacebook" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:5">
         <div class="OESZ OESZ_DivContent OESZG_WEBotonFacebook">
          <img src="WEFiles/Image/WEImage/FBIcon-WEbf3a01f3bb.png" class="OESZ OESZ_Img OESZG_WEBotonFacebook" alt="" />
         </div>
        </div>
        <div id="WEBotonInstagram" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:6">
         <div class="OESZ OESZ_DivContent OESZG_WEBotonInstagram">
          <img src="WEFiles/Image/WEImage/INSIco-WE3c669698b6.png" class="OESZ OESZ_Img OESZG_WEBotonInstagram" alt="" />
         </div>
        </div>
        <div id="WE144e410c82" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:1">
         <div class="OESZ OESZ_DivContent OESZG_WE144e410c82">
          <span class="OESZ OESZ_Text OESZG_WE144e410c82 ContentBox">Catálogo</span>
         </div>
        </div>
        <div id="WEBotonMap" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:7">
         <div class="OESZ OESZ_DivContent OESZG_WEBotonMap">
          <img src="WEFiles/Image/WEImage/GGLMP-WEb89bece665.png" class="OESZ OESZ_Img OESZG_WEBotonMap" alt="" />
         </div>
        </div>
        <div id="WEa20f817475" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:4">
         <div class="OESZ OESZ_DivContent OESZG_WEa20f817475">
          <img src="WEFiles/Image/WEImage/Salvaje-WEa20f817475.png" class="OESZ OESZ_Img OESZG_WEa20f817475" alt="" />
         </div>
        </div>
        <div id="WE0bd4b4abda" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:3">
         <div class="OESZ OESZ_DivContent OESZG_WE0bd4b4abda">
          <img src="WEFiles/Image/WEImage/Tigre-WE0bd4b4abda.png" class="OESZ OESZ_Img OESZG_WE0bd4b4abda" alt="" />
         </div>
        </div>
        <div id="WEa70d82ba81" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:10">
         <div class="OESZ OESZ_DivContent OESZG_WEa70d82ba81">
          <img src="WEFiles/Image/WEImage/carrito-WEa70d82ba81.png" class="OESZ OESZ_Img OESZG_WEa70d82ba81" alt="" />
         </div>
        </div>
        <div id="WE122d590278" class="BaseDiv RBoth OEWECadre OESK_WECadre_Default" style="z-index:8">
         <div class="OESZ OESZ_DivContent OESZG_WE122d590278">
          <div class="OESZ OESZ_Top OESZG_WE122d590278"></div>
          <div class="OESZ OESZ_Content OESZG_WE122d590278"></div>
          <div class="OESZ OESZ_Bottom OESZG_WE122d590278"></div>
         </div>
        </div>
        <div id="WEcb9d768f16" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default" style="z-index:11">
         <div class="OESZ OESZ_DivContent OESZG_WEcb9d768f16">
          <span class="OESZ OESZ_Text OESZG_WEcb9d768f16 ContentBox">0<br /></span>
         </div>
        </div>
        <div id="WEviewBlocks" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:12" title="Vista a cuadros">
         <div class="OESZ OESZ_DivContent OESZG_WEviewBlocks">
          <img src="WEFiles/Image/WEImage/padView-WEdd56ec5828.png" class="OESZ OESZ_Img OESZG_WEviewBlocks" alt="" />
         </div>
        </div>
        <div id="WEviewList" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:13" title="Vista en Lista">
         <div class="OESZ OESZ_DivContent OESZG_WEviewList">
          <img src="WEFiles/Image/WEImage/listView-WE87514be04c.png" class="OESZ OESZ_Img OESZG_WEviewList" alt="" />
         </div>
        </div>
        <div id="WEcdce4456c6" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default" style="z-index:14">
         <div class="OESZ OESZ_DivContent OESZG_WEcdce4456c6">
          <span class="OESZ OESZ_Text OESZG_WEcdce4456c6 ContentBox">Resultado Búsqueda:&nbsp;<br /></span>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div id="WEPopUpClose" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:7">
      <div class="OESZ OESZ_DivContent OESZG_WEPopUpClose">
       <img src="WEFiles/Image/WEImage/closeX-WE914bea5681.png" class="OESZ OESZ_Img OESZG_WEPopUpClose" alt="" />
      </div>
     </div>
     <div id="WE19a333ae83" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OECenterAH" style="z-index:1">
      <div class="OESZ OESZ_DivContent OESZG_WE19a333ae83">
       <div class="OECT OECT_Content OECTAbs OEDynTag0">
        <div id="WE36ce3c55d1" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default" style="z-index:2">
         <div class="OESZ OESZ_DivContent OESZG_WE36ce3c55d1">
          <span class="OESZ OESZ_Text OESZG_WE36ce3c55d1 ContentBox">Turnos Tattoo: (03476)&nbsp;</span>
         </div>
        </div>
        <div id="WE72f095e42c" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default" style="z-index:1">
         <div class="OESZ OESZ_DivContent OESZG_WE72f095e42c">
          <span class="OESZ OESZ_Text OESZG_WE72f095e42c ContentBox">Av. San Martín 2957, S2200 San Lorenzo, Santa Fe<br /></span>
         </div>
        </div>
        <div id="WEc101e642bd" class="BaseDiv RNone OEWELabel OESK_WELabel_Default OEGo" style="z-index:3">
         <div class="OESZ OESZ_DivContent OESZG_WEc101e642bd">
          <span class="OESZ OESZ_Text OESZG_WEc101e642bd ContentBox">Lista Categorías</span>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div id="WEListBoxCat" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default" style="z-index:5">
      <div class="OESZ OESZ_DivContent OESZG_WEListBoxCat">
       <div class="OECT OECT_Content OECTRel OEDynTag0">
        <div class="OERelLine OEHAlignC OEVAlignB">
         <div id="WEItemCat" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default OEGo" style="z-index:1">
          <div class="OESZ OESZ_DivContent OESZG_WEItemCat">
           <span class="OESZ OESZ_Text OESZG_WEItemCat ContentBox">ItemTitulo</span>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
     <div id="WEfa37aa4838" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default OECenterAH" style="z-index:2">
      <div class="OESZ OESZ_DivContent OESZG_WEfa37aa4838">
       <div class="OECT OECT_Content OECTAbs OEDynTag0">
        <div id="WE9a2caa10a4" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:2">
         <div class="OESZ OESZ_DivContent OESZG_WE9a2caa10a4">
          <img src="WEFiles/Image/WEImage/buscar-WE9a2caa10a4.png" class="OESZ OESZ_Img OESZG_WE9a2caa10a4" alt="" />
         </div>
        </div>
        <div id="WE94627c7583" class="BaseDiv RBoth OEWELabel OESK_WELabel_Default" style="z-index:1">
         <div class="OESZ OESZ_DivContent OESZG_WE94627c7583">
          <span class="OESZ OESZ_Text OESZG_WE94627c7583 ContentBox">BUSCAR:</span>
         </div>
        </div>
        <div id="WESearcher" class="BaseDiv RNone OEWETextBoxV2 OESK_WETextBox2_Default" style="z-index:3">
         <div class="OESZ OESZ_DivContent OESZG_WESearcher">
          <input name="WESearcher" type="text" class="OESZ OESZ_TextBox OESZG_WESearcher OEo OEDynTag0" />
         </div>
        </div>
       </div>
      </div>
     </div>
     <div id="WE68103bff2c" class="BaseDiv RWidth OEWEPanel OESK_WEPanel_Default OECenterAH" style="z-index:3">
      <div class="OESZ OESZ_DivContent OESZG_WE68103bff2c">
       <div class="OECT OECT_Content OECTRel OEDynTag0">
        <div class="OERelLine OEHAlignC OEVAlignB">
         <div id="WE37ba75665f" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default" style="z-index:1">
          <div class="OESZ OESZ_DivContent OESZG_WE37ba75665f">
           <div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:hidden">
            <div id="WE9e91cd1862" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:3">
             <div class="OESZ OESZ_DivContent OESZG_WE9e91cd1862">
              <span class="OESZ OESZ_Text OESZG_WE9e91cd1862 ContentBox">$ 100000,00</span>
             </div>
            </div>
            <div id="WE0882b9c344" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OECenterAH" style="z-index:1">
             <div class="OESZ OESZ_DivContent OESZG_WE0882b9c344">
              <img src="WEFiles/Image/WEImage/empty_image-WE0882b9c344.jpg" class="OESZ OESZ_Img OESZG_WE0882b9c344" alt="" />
             </div>
            </div>
            <div id="WE8443aff604" class="BaseDiv RBoth OEWEText OESK_WEText_Default OECenterAH" style="z-index:4">
             <div class="OESZ OESZ_DivContent OESZG_WE8443aff604">
              <span class="ContentBox">My multi-line text<br />asdee<br /></span>
             </div>
            </div>
            <div id="WE2915334d0c" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:2" title="Agregar al Carrito">
             <div class="OESZ OESZ_DivContent OESZG_WE2915334d0c">
              <img src="WEFiles/Image/WEImage/carrito2-WE2915334d0c.png" class="OESZ OESZ_Img OESZG_WE2915334d0c" alt="" />
             </div>
            </div>
            <div id="WEbe984cb520" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default OEGo" style="z-index:5">
             <div class="OESZ OESZ_DivContent OESZG_WEbe984cb520">
              <span class="OESZ OESZ_Text OESZG_WEbe984cb520 ContentBox">Agregar al Carrito</span>
             </div>
            </div>
           </div>
          </div>
         </div><div id="WE28d41fac16" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default" style="z-index:2">
          <div class="OESZ OESZ_DivContent OESZG_WE28d41fac16">
           <div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:hidden">
            <div id="WEec16324cd4" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:1">
             <div class="OESZ OESZ_DivContent OESZG_WEec16324cd4">
              <img src="WEFiles/Image/WEImage/empty_image-WEec16324cd4.jpg" class="OESZ OESZ_Img OESZG_WEec16324cd4" alt="" />
             </div>
            </div>
            <div id="WE2c8f6b9bfa" class="BaseDiv RBoth OEWEText OESK_WEText_Default" style="z-index:4">
             <div class="OESZ OESZ_DivContent OESZG_WE2c8f6b9bfa">
              <span class="ContentBox">My multi-line text<br />asdee<br /></span>
             </div>
            </div>
            <div id="WE187ae980a6" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:2" title="Agregar al Carrito">
             <div class="OESZ OESZ_DivContent OESZG_WE187ae980a6">
              <img src="WEFiles/Image/WEImage/carrito2-WE2915334d0c.png" class="OESZ OESZ_Img OESZG_WE187ae980a6" alt="" />
             </div>
            </div>
            <div id="WE5d6b83b85d" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:3">
             <div class="OESZ OESZ_DivContent OESZG_WE5d6b83b85d">
              <span class="OESZ OESZ_Text OESZG_WE5d6b83b85d ContentBox">$ 100000,00</span>
             </div>
            </div>
            <div id="WEd977ec932a" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default OEGo" style="z-index:5">
             <div class="OESZ OESZ_DivContent OESZG_WEd977ec932a">
              <span class="OESZ OESZ_Text OESZG_WEd977ec932a ContentBox">Agregar al Carrito</span>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
  <script type="text/javascript">
   // Botones Sociales:
   // 
   
   CloseCall = NaN;
   document.getElementById("WEBotonMap").addEventListener("click", ()=>{
   	AbrirPopPup("WEGoogleMap");
   	CloseCall = ()=>{
   		CerrarPopPup("WEGoogleMap")
   	}
   })
   
   
   document.getElementById("WEPopUpClose").addEventListener("click", ()=>{
   	CloseCall()
   })
   
   function AbrirPopPup(t){
   	document.getElementById("WELock").style.display = "initial";
   	document.getElementById("WEPopUpClose").style.display = "initial";
   	document.getElementById(t).style.display = "initial";
   	
   	
   }
   
   function CerrarPopPup(t){
   	document.getElementById("WELock").style.display = "none";
   	document.getElementById("WEPopUpClose").style.display = "none";
   	document.getElementById(t).style.display = "none";
   }
   
   // BotonListaCategoría:
   // 
   
   
   BoxStat = false;
   document.getElementById("WEc101e642bd").addEventListener("click", (e)=>{
   	BoxStat = !BoxStat
   	let Box = document.getElementById("WEListBoxCat")
   	Box.offsetTop = e.target.parentElement.parentElement.offsetTop
   	Box.offsetLeft = e.target.parentElement.parentElement.offsetLeft
   	Box.style.display = (BoxStat) ? "initial" : "none";
   	
   })
   
   function MenuCatOpen(){
   	
   }
   window.addEventListener("resize", ()=>{
   	document.getElementById("WEListBoxCat").style.display = "none";
   });
   
   
   // Get Handler:
   // 
   if (UrlInput != 'NaN'){
   	document.getElementById("WESearcher").children[0].children[0].value = UrlInput.toLowerCase()
   	
   }
   
   // Get Articulos;
   
   fetch("Articulos.txt").then(
   	j=>j.json()).then(d=>{
   	
   		Articulos = d;
   		Procesar(Articulos)
   		console.log(d)
   
   	})
   
   // SearchInputControl
   
   document.getElementById("WESearcher").children[0].children[0].addEventListener("keyup", EnterKey)
   function EnterKey(ele){
   	if(event.key === 'Enter') {
   		 Buscar(
   			 document.getElementById("WESearcher").children[0].children[0].value
   		 )
   		 UrlCat = "NaN"
   		
           
       }
   }
   
   function Buscar(t){
   	let v = (!TipoVista) ? "&t=0" : ""
   	let y = t.replaceAll(" ", "+")
   	window.history.pushState('data', 'busqueda', "?q="+y.toLowerCase()+v);
   	document.getElementById("WEcdce4456c6").children[0].children[0].innerText = "Resultado Búsqueda: '"+y.toLowerCase()+"'"
   	ListarBusqueda()
   	
   }
   
   function ListarCat(t){
   	let v = (!TipoVista) ? "&t=0" : ""
   	let y = t.replaceAll(" ", "+")
   	window.history.pushState('data', 'busqueda', "?c="+y.toLowerCase()+v);
   	document.getElementById("WEcdce4456c6").children[0].children[0].innerText = "Lista de Categor: '"+y.toLowerCase()+"'"
   	
   }
   
   
   
   
   
   ;
   // Memoria
   CampoBusqueda = document.getElementById("WESearcher").children[0].children[0]
   ListaCategorias = document.getElementById("WEListBoxCat").children[0].children[0].children[0]
   CategoriasArt = [];
   CatSelect = ""
    
   
   // Carga
   // 
   
   
   
   
   ContenedorArticulos = document.getElementById("WE68103bff2c").children[0].children[0].children[0];
   ContenedorArticulos.innerHTML = "";
   
   function Procesar(d){
   	
   	
   	
   	d.forEach( (a, v)=>{
   		//console.log(a)
   		a.Item = ItemCuadrado(a.titulo, v, a.precio, a.usd)
   		a.ItemL = ItemLista(a.titulo, v, a.precio, a.usd)
   		
   			if (UrlInput == 'NaN' && UrlCat == 'NaN') {
   					ContenedorArticulos.appendChild((TipoVista) ? a.Item : a.ItemL);	
   			}
   		
   		}
   		
   	)
   	
   	if (UrlInput != 'NaN') {  
   			ListarBusqueda()}
   	if (UrlCat != 'NaN') {  
   			ListarBusquedaCat(UrlCat)
   	}
   	
   	// Filtra Categorias
   	Articulos.forEach(i => {
           if (!CategoriasArt.includes(i.tipo) && i.tipo!=""){
               CategoriasArt.push(i.tipo)}
       })
   	
   	// Lista en Menu
   	CategoriasArt.forEach(r =>{
   		let obj = document.createElement("div")
   		let html = '<div id="WEItemCat" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default OEGo" style="z-index:1">'+
             '<div class="OESZ OESZ_DivContent OESZG_WEItemCat">'+
              '<span class="OESZ OESZ_Text OESZG_WEItemCat ContentBox">'+r.toUpperCase()+'</span>'+
             '</div>'+
            '</div>';
   		obj.innerHTML = html
   		obj.firstChild.addEventListener("click", ()=>{
   			 ListarBusquedaCat(r)
   			 UrlCat = r
   			 ListarCat(r)
   			 BoxStat = !BoxStat ; document.getElementById("WEListBoxCat").style.display = "none"
   			 CampoBusqueda.value = "";
   		})
   		ListaCategorias.appendChild(obj.firstChild)
   	})
   	
   	
   	OE.CssEvents.loadAll()
   };
   
   function ListarBusquedaCat(c){
   	ContenedorArticulos.innerHTML = "";
   	let Busq = Articulos.filter((s)=> 
               s.tipo.toLowerCase().includes(c.toLowerCase())
           )
   	Busq.forEach( a=>{
   		ContenedorArticulos.appendChild((TipoVista) ? a.Item : a.ItemL);	
   	})
   	OE.CssEvents.loadAll()
   }
   
   function ListarBusqueda(){
   	ContenedorArticulos.innerHTML = "";
   	
   	let Busq = Articulos.filter((s)=> 
               s.titulo.toLowerCase().includes(CampoBusqueda.value.toLowerCase())
           )
   	Busq.forEach( a=>{
   		ContenedorArticulos.appendChild((TipoVista) ? a.Item : a.ItemL);	
   	})
   	OE.CssEvents.loadAll()
   	
   }
   
   function ItemLista(titulo, order, precio, usd){
   	
   	let Pre = (!usd) ? "$ "+precio : "u$s "+precio
   	
   	let html = '<div id="WE28d41fac16" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default" style="z-index:2">'+
             '<div class="OESZ OESZ_DivContent OESZG_WE28d41fac16">'+
              '<div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:hidden">'+
               '<div id="WE5d6b83b85d" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:3">'+
                '<div class="OESZ OESZ_DivContent OESZG_WE5d6b83b85d">'+
                 '<span class="OESZ OESZ_Text OESZG_WE5d6b83b85d ContentBox">'+Pre+'</span>'+
                '</div>'+
               '</div>'+
               '<div id="WE2c8f6b9bfa" class="BaseDiv RBoth OEWEText OESK_WEText_Default" style="z-index:4">'+
                '<div class="OESZ OESZ_DivContent OESZG_WE2c8f6b9bfa">'+
                 '<span class="ContentBox">'+titulo+'</span>'+
                '</div>'+
               '</div>'+
               '<div id="WEec16324cd4" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default" style="z-index:1">'+
                '<div class="OESZ OESZ_DivContent OESZG_WEec16324cd4">'+
                 '<img src="WEFiles/Image/WEImage/empty_image-WEec16324cd4.jpg" class="OESZ OESZ_Img OESZG_WEec16324cd4" alt="" />'+
                '</div>'+
               '</div>'+
               '<div id="WE187ae980a6" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:2" title="Agregar al Carrito">'+
                '<div class="OESZ OESZ_DivContent OESZG_WE187ae980a6">'+
                 '<img src="WEFiles/Image/WEImage/carrito2-WE2915334d0c.png" class="OESZ OESZ_Img OESZG_WE187ae980a6" alt="" />'+
                '</div>'+
               '</div>'+
               '<div id="WEd977ec932a" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default OEGo" style="z-index:5">'+
                '<div class="OESZ OESZ_DivContent OESZG_WEd977ec932a">'+
                 '<span class="OESZ OESZ_Text OESZG_WEd977ec932a ContentBox">Agregar al Carrito</span>'+
                '</div>'+
               '</div>'+
              '</div>'+
             '</div>'+
            '</div>';
   	
   	let obj = document.createElement("div")
   	obj.innerHTML = html;
   	
   	return obj.firstChild;
   }
   
   function ItemCuadrado(titulo, order, precio, usd){
   	
   	let Pre = (!usd) ? "$ "+precio : "u$s "+precio
   	
   	let html = '<div id="WE37ba75665f" class="BaseDiv RBoth OEWEPanel OESK_WEPanel_Default" style="z-index:1">'+
             '<div class="OESZ OESZ_DivContent OESZG_WE37ba75665f">'+
              '<div class="OECT OECT_Content OECTAbs OEDynTag0" style="overflow:hidden">'+
               '<div id="WE9e91cd1862" class="BaseDiv RNone OEWELabel OESK_WELabel_Default" style="z-index:3">'+
                '<div class="OESZ OESZ_DivContent OESZG_WE9e91cd1862">'+
                 '<span class="OESZ OESZ_Text OESZG_WE9e91cd1862 ContentBox">'+Pre+'</span>'+
                '</div>'+
               '</div>'+
               '<div id="WE0882b9c344" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OECenterAH" style="z-index:1">'+
                '<div class="OESZ OESZ_DivContent OESZG_WE0882b9c344">'+
                 '<img src="WEFiles/Image/WEImage/empty_image-WE0882b9c344.jpg" class="OESZ OESZ_Img OESZG_WE0882b9c344" alt="" />'+
                '</div>'+
               '</div>'+
               '<div id="WE8443aff604" class="BaseDiv RWidth OEWEText OESK_WEText_Default OECenterAH" style="z-index:4">'+
                '<div class="OESZ OESZ_DivContent OESZG_WE8443aff604">'+
                 '<span class="ContentBox">'+titulo+'</span>'+
                '</div>'+
               '</div>'+
               '<div id="WE2915334d0c" class="BaseDiv RKeepRatio OEWEImage OESK_WEImage_Default OEGo" style="z-index:2" title="Agregar al Carrito">'+
                '<div class="OESZ OESZ_DivContent OESZG_WE2915334d0c">'+
                 '<img src="WEFiles/Image/WEImage/carrito2-WE2915334d0c.png" class="OESZ OESZ_Img OESZG_WE2915334d0c" alt="" />'+
                '</div>'+
               '</div>'+
               '<div id="WEbe984cb520" class="BaseDiv RWidth OEWELabel OESK_WELabel_Default OEGo" style="z-index:5">'+
                '<div class="OESZ OESZ_DivContent OESZG_WEbe984cb520">'+
                 '<span class="OESZ OESZ_Text OESZG_WEbe984cb520 ContentBox">Agregar al Carrito</span>'+
                '</div>'+
               '</div>'+
              '</div>'+
             '</div>'+
            '</div>';
   	
   	let obj = document.createElement("div")
   	obj.innerHTML = html;
   	
   	return obj.firstChild;
   }
   
   function fechaFix(t){
       let fix = t.split('-')
       return fix[2]+"/"+fix[1]+"/"+fix[0]
   }
   
   
   // Tipo de Vistas:
   // 
   document.getElementById("WEviewBlocks").addEventListener("click", ()=>{
   	TipoVista = true;
   	if (UrlCat == "NaN") { ListarBusqueda() } else { ListarBusquedaCat(UrlCat) }
   })
   document.getElementById("WEviewList").addEventListener("click", ()=>{
   	TipoVista = false;
   	if (UrlCat == "NaN") { ListarBusqueda() } else { ListarBusquedaCat(UrlCat) }
   })
  </script>
 </body>
</html>