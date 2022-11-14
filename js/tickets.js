function inicio(){
        window.location='../index.html';
}

function conferencia(){
      window.location='../index.html';
}
function oradorTicket(){
        window.location='../index.html#conoca';
}
function lugar(){
        window.location='../index.html#playa';
}
function conversion(){
        window.location='../index.html#conviertete';
}
function pagar(){
      window.location='valor-de-tickets.html#venta';
}
function calculo(){
  let cantidad=document.getElementById("cantidad").value;
  let categoria=document.getElementById("select-categoria").value;
  cantidad=parseInt(cantidad);
  categoria=parseInt(categoria);
  aPagar=parseInt(cantidad*200*(1-categoria/100));
  if(aPagar>0){
    aPagar=aPagar;
  }
  else{
    aPagar=0;
  }
  document.getElementById('aPagar').innerHTML=aPagar;
}
function borrado(){
  let nada= " ";
    document.getElementById("aPagar").innerHTML=nada;
  form.reset();
}
