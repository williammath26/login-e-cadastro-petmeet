const show = () => {
    const form = document.querySelector("#signup")
    form.classList.toggle("show")
    document.querySelector(".layer").style.display="block"
   
}

const hide = () => {
    const hide = document.querySelector(".show")
    hide.classList.remove("show")
    document.querySelector(".layer").style.display="none"
}
function logar(){
    var login=document.getElementById("login").value;
    var senha=document.getElementById("senha").value;

    if(login == "admin" && senha == "admin"){
        alert("Sucesso");
    }else{
        alert("Usuário ou senha inválido")
    }
}
