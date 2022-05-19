

function formula1(){
    var CantidadT=parseInt(document.getElementById('Cant').value)
    var Cantidad1=parseInt(document.getElementById('C1').value)
    if(CantidadT>990){
        alert("No puedes ingresar mas de $990")
    }else if(Cantidad1<10){
        alert("No puedes tener menos de $10")
    }else{
        document.getElementById('C1').value=(Cantidad1+CantidadT) 
    }
}
function formula2(){
    var CantidadT2=parseInt(document.getElementById('Cant2').value)
    var Cantidad1=parseInt(document.getElementById('C1').value)
    if(CantidadT2>980){
        alert("No puedes retirar mas de $980")
    }else if(Cantidad1<10){
        alert("No puedes tener menos de $10")
    }else if(CantidadT2>Cantidad1){
        alert("La cantidad es mayor a la de tu cuenta")
    }else{
        document.getElementById('C1').value=(Cantidad1-CantidadT2) 
    }
}

var cajero1=
{ 
    nombre: "Mali", 
    saldo: 200, 
    contra: "123"  
}

var cajero2 = 
{ 
    nombre: "Gera", 
    saldo: 290, 
    contra: "321" 
}

var cajero3 = 
{ 
    nombre: "Maui", 
    saldo: 67, 
    contra: "213" 
}

function ingreso(form){
    var nombre = form.u.value.toLowerCase()
    var u1 = cajero1.nombre.toLowerCase()
    var u2 = cajero2.nombre.toLowerCase()
    var u3 = cajero3.nombre.toLowerCase()
    var contra = form.c.value
    var c1 = cajero1.contra
    var c2 = cajero2.contra
    var c3 = cajero3.contra
    if(nombre==u1){
        if(contra==c1){
            location="bancoMali.html"
        }else{
            alert('Contrasena Incorrecta')
        }
    }else if(nombre==u2){
        if(contra==c2){
            location="bancoGera.html"
        }else{
            alert("Contrasena incorrecta")
        }
    }else if(nombre==u3){
        if(contra==c3){
            location="bancoMaui.html"
        }else{
            alert("Contrasena incorrecta")
        }
    }else{
        alert("Usuario incorrecto")
    }
}


