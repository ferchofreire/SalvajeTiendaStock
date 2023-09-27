// Control de Stock:

function ContablizarStock(){


    Articulos.forEach(ar => {
        ar.stock = 0;
        ar.compras.forEach(mv => {

            if (mv.tipo == 1){
                ar.stock += mv.cnt;
            }
    
            // recucciones:
            if (mv.tipo == 0){
                ar.stock -= mv.cnt;
            }
            
        })
    })


    Ventas.forEach(vnt => {
        vnt.Articulos.forEach(artvnt => {
            var Artic = Articulos.find(ar => ar.id == artvnt.id);
            Artic.stock -= artvnt.cnt;
        })
    })
    
}