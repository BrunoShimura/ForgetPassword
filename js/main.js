function validar(password,confirmPassword){
  if(password&&confirmPassword){
    if(password==confirmPassword){
      var query = location.search.slice(1);
      var partes = query.split('&');
      var data = {};
      partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        data[chave] = valor;
      });
      enviar(confirmPassword,data.token)
    }
    else{
      alert("senha  de confirmação incorreta!")
    }
  }
  else{
    alert("Preencha todos os campos!")
  }
}

function enviar(password,token){
  console.log(password); 
  console.log(token); 
  fetch("https://api-commit-me.herokuapp.com/reset_password/"+token, {
      method: "POST",
      body: JSON.stringify({
        password: ""+password+"",
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json()) // or res.json()
      .then((json) => sucesso());
}
function sucesso(){
  window.location.href = "pages/sucesso.html";
}
