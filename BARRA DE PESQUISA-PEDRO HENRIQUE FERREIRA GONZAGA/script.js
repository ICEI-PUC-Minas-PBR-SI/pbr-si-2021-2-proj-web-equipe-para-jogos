let botao = document.getElementById("btn-Busca");
botao.addEventListener("click",pegaValorDaBarraDePequisa);

function pegaValorDaBarraDePequisa(){
  let valor = document.getElementById("campoBusca").value;
  console.log(valor);
  if(valor == "CS GO"){
  let texto = document.createElement("p");
  let conteudoTexto = document.createTextNode("Se esta mensagem apareceu é porque a busca ta funcionando"); 
  texto.appendChild(conteudoTexto)
  document.body.appendChild(texto)
  }
}
