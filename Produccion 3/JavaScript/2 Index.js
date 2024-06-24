document.addEventListener("DOMContentLoaded", ()=>{
    
    var elemento = document.getElementById('MTBF');
    var Valor = document.getElementById('Decision');

    Valor.addEventListener('change', () => {
        if (Valor.value === 'Decimal'){
            elemento.setAttribute('step', '0.01');
            elemento.setAttribute('placeholder' , "Numero Decimal");
            elemento.setAttribute('oninput' , "this.value = this.value.replace(^\d+(.\d+)?$, '')");
        }
        else {
            elemento.setAttribute('step', '');
            elemento.setAttribute('oninput' , "this.value = this.value.replace(/[^a-zA-Z0-9]/g, ''),validarLongitud(this)");
            elemento.setAttribute('placeholder' , "Numero Entero");
        }
    });
    
    var elemento1 = document.getElementById('Q');
    var elemento2 = document.getElementById('TT');
    var elemento3 = document.getElementById('Sem');
    var Valor1 = document.getElementById('Decision1');

    Valor1.addEventListener('change', () => {
        if (Valor1.value === 'Periodo'){
            elemento1.setAttribute("style" , "display:hidden");
            elemento2.setAttribute("style" , "display:visible");
            elemento3.setAttribute("style" , "display:visible");
        }
        else {
            elemento1.setAttribute("style" , "display:visible");
            elemento2.setAttribute("style" , "display:hidden");
            elemento3.setAttribute("style" , "display:hidden");
        }
    });

    const btnAbrir1 = document.querySelector("#btn-abrir-1");
    const btnCerrar1 = document.querySelector("#btn-cerrar-1");
    const btnCalcular1 = document.querySelector("#btn-calcular-1");
    const btnLimpiar1 = document.querySelector("#btn-limpiar-1");
    
    const btnAbrir2 = document.querySelector("#btn-abrir-2");
    const btnCerrar2 = document.querySelector("#btn-cerrar-2");
    const btnCalcular2 = document.querySelector("#btn-calcular-2");
    const btnLimpiar2 = document.querySelector("#btn-limpiar-2");
    
    const btnAbrir3 = document.querySelector("#btn-abrir-3");
    const btnCerrar3 = document.querySelector("#btn-cerrar-3");
    const btnCalcular3 = document.querySelector("#btn-calcular-3");
    const btnLimpiar3 = document.querySelector("#btn-limpiar-3");

    const btnAbrir7 = document.querySelector("#btn-abrir-7");
    const btnCerrar7 = document.querySelector("#btn-cerrar-7");
    const btnCalcular7 = document.querySelector("#btn-calcular-7");
    const btnLimpiar7 = document.querySelector("#btn-limpiar-7");

    btnCalcular1.addEventListener("click", function() {
        let num1 = parseInt(document.getElementById('HK').value);
        let num2 = parseFloat(document.getElementById('MTBF').value);
        let num4 = parseInt(document.getElementById('DT').value);
        let num5 = parseInt(document.getElementById('CHT').value);
        let num6 = parseInt(document.getElementById('Rep').value);
        let num7 = parseInt(document.getElementById('CTO').value);
        let num8 = parseInt(document.getElementById('RL').value);
        let num9 = parseInt(document.getElementById('CUP').value);
        let num10 = parseInt(document.getElementById('CFU').value);
        if (Valor.value === 'Entero') {
            let num3 = Math.round(num1/num2);
            document.getElementById("NFallas").value = num3;
            let resultado = num3*((num4*num5+num6+num7+num8)+(num4*num9+num10));
            document.getElementById('resultado').textContent = resultado;
        } else {
            let num3 = Math.round(num1/(num1*num2));
            document.getElementById("NFallas").value = num3;
            let resultado = num3*((num4*num5+num6+num7+num8)+(num4*num9+num10));
            document.getElementById('resultado').textContent = resultado;
        }
    });

    btnLimpiar1.addEventListener("click", function() {
        document.getElementById("HK").value = "";
        document.getElementById("MTBF").value = "";
        document.getElementById("NFallas").value = "";
        document.getElementById("DT").value = "";
        document.getElementById("CHT").value = "";
        document.getElementById("Rep").value = "";
        document.getElementById("CTO").value = "";
        document.getElementById("RL").value = "";
        document.getElementById("CUP").value = "";
        document.getElementById("CFU").value = "";
        document.getElementById("resultado").textContent = "";
    });
    
    btnCalcular2.addEventListener("click", function() {
        let num1 = parseInt(document.getElementById('D').value);
        let num2 = parseInt(document.getElementById('T').value);
        let num3 = parseInt(document.getElementById('S').value);
        let num4 = parseInt(document.getElementById('H').value);
        let resultado = console.log(Math.sqrt((2*num1*num2*num3)/num4));
        document.getElementById('resultado1').textContent = resultado;
    });

    btnLimpiar2.addEventListener("click", function() {
        document.getElementById("D").value = "";
        document.getElementById("S").value = "";
        document.getElementById("H").value = "";
        document.getElementById("resultado1").textContent = "";
    });

    btnCalcular3.addEventListener("click", function() {
        let num1 = parseInt(document.getElementById('DD').value);
        let num2 = parseInt(document.getElementById('Sem').value);
        let num3 = parseInt(document.getElementById('Q').value);
        let num4 = parseInt(document.getElementById('TT').value);
        let num5 = parseInt(document.getElementById('SS').value);
        if (Valor1.value === 'Cantidad') {
            let num6 = (num3/2)+num5;
            document.getElementById("resultado3").textContent = num6;
            let num7 = (num1/num6);
            document.getElementById('resultado4').textContent = num7;
        } else {
            let num6 = (num3*num4/2)+num5;
            document.getElementById('resultado3').textContent = num6;
            let num7 = (num1*num2/num6);
            document.getElementById('resultado4').textContent = num7;
        }
    });

    btnLimpiar3.addEventListener("click", function() {
        document.getElementById("DD").value = "";
        document.getElementById("Sem").value = "";
        document.getElementById("Q").value = "";
        document.getElementById("TT").value = "";
        document.getElementById("SS").value = "";
        document.getElementById("resultado3").textContent = "";
        document.getElementById("resultado4").textContent = "";
    });

    btnCalcular7.addEventListener("click", function() {
        let num1 = parseInt(document.getElementById('CC').value);
        let num2 = parseInt(document.getElementById('Dem').value);
        let num3 = parseInt(document.getElementById('Tie').value);
        let num4 = Math.round((num2*num3)/(60*num1));
        document.getElementById("resultado5").textContent = num4;
        let num5 = num4*num1;
        document.getElementById('resultado6').textContent = num5;
    });

    btnLimpiar7.addEventListener("click", function() {
        document.getElementById("CC").value = "";
        document.getElementById("Dem").value = "";
        document.getElementById("Tie").value = "";
        document.getElementById("resultado5").textContent = "";
        document.getElementById("resultado6").textContent = "";
    });

    const modal1 = document.querySelector("#modal-1");
    const modal2 = document.querySelector("#modal-2");
    const modal3 = document.querySelector("#modal-3");
    const modal7 = document.querySelector("#modal-7");
    
    btnAbrir1.addEventListener("click",()=>{modal1.showModal();})
    btnCerrar1.addEventListener("click",()=>{modal1.close();document.getElementById('resultado').textContent = "";})
    
    btnAbrir2.addEventListener("click",()=>{modal2.showModal();})
    btnCerrar2.addEventListener("click",()=>{modal2.close();document.getElementById('resultado2').textContent = "";})
    
    btnAbrir3.addEventListener("click",()=>{modal3.showModal();})
    btnCerrar3.addEventListener("click",()=>{modal3.close();document.getElementById('resultado3').textContent = "";document.getElementById('resultado4').textContent = "";})

    btnAbrir7.addEventListener("click",()=>{modal7.showModal();})
    btnCerrar7.addEventListener("click",()=>{modal7.close();document.getElementById('resultado5').textContent = "";document.getElementById('resultado6').textContent = "";})
});

function ShowHide1(){
    var Met1 = document.getElementsByClassName("Metodo1")[0];
    var Met2 = document.getElementsByClassName("Metodo2")[0];
    var Met3 = document.getElementsByClassName("Metodo3")[0];
    var Met4 = document.getElementsByClassName("Metodo4")[0];
    var Met7 = document.getElementsByClassName("Metodo7")[0];
    var Met8 = document.getElementsByClassName("Metodo8")[0];
    Met1.style.visibility = "visible";
    Met2.style.visibility = "hidden";
    Met3.style.visibility = "hidden";
    Met4.style.visibility = "hidden";
    Met7.style.visibility = "hidden";
    Met8.style.visibility = "hidden";
}

function ShowHide2(){
    var Met1 = document.getElementsByClassName("Metodo1")[0];
    var Met2 = document.getElementsByClassName("Metodo2")[0];
    var Met3 = document.getElementsByClassName("Metodo3")[0];
    var Met4 = document.getElementsByClassName("Metodo4")[0];
    var Met7 = document.getElementsByClassName("Metodo7")[0];
    var Met8 = document.getElementsByClassName("Metodo8")[0];
    Met1.style.visibility = "hidden";
    Met2.style.visibility = "visible";
    Met3.style.visibility = "hidden";
    Met4.style.visibility = "hidden";
    Met7.style.visibility = "hidden";
    Met8.style.visibility = "hidden";
}

function ShowHide3(){
    var Met1 = document.getElementsByClassName("Metodo1")[0];
    var Met2 = document.getElementsByClassName("Metodo2")[0];
    var Met3 = document.getElementsByClassName("Metodo3")[0];
    var Met4 = document.getElementsByClassName("Metodo4")[0];
    var Met7 = document.getElementsByClassName("Metodo7")[0];
    var Met8 = document.getElementsByClassName("Metodo8")[0];
    Met1.style.visibility = "hidden";
    Met2.style.visibility = "hidden";
    Met3.style.visibility = "visible";
    Met4.style.visibility = "hidden";
    Met7.style.visibility = "hidden";
    Met8.style.visibility = "hidden";
}

function ShowHide4(){
    var Met1 = document.getElementsByClassName("Metodo1")[0];
    var Met2 = document.getElementsByClassName("Metodo2")[0];
    var Met3 = document.getElementsByClassName("Metodo3")[0];
    var Met4 = document.getElementsByClassName("Metodo4")[0];
    var Met7 = document.getElementsByClassName("Metodo7")[0];
    var Met8 = document.getElementsByClassName("Metodo8")[0];
    Met1.style.visibility = "hidden";
    Met2.style.visibility = "hidden";
    Met3.style.visibility = "hidden";
    Met4.style.visibility = "visible";
    Met7.style.visibility = "hidden";
    Met8.style.visibility = "hidden";
}

function ShowHide5(){
    var Met1 = document.getElementsByClassName("Metodo1")[0];
    var Met2 = document.getElementsByClassName("Metodo2")[0];
    var Met3 = document.getElementsByClassName("Metodo3")[0];
    var Met4 = document.getElementsByClassName("Metodo4")[0];
    var Met7 = document.getElementsByClassName("Metodo7")[0];
    var Met8 = document.getElementsByClassName("Metodo8")[0];
    Met1.style.visibility = "hidden";
    Met2.style.visibility = "hidden";
    Met3.style.visibility = "hidden";
    Met4.style.visibility = "hidden";
    Met7.style.visibility = "hidden";
    Met8.style.visibility = "hidden";
}

function ShowHide6(){
    var Met1 = document.getElementsByClassName("Metodo1")[0];
    var Met2 = document.getElementsByClassName("Metodo2")[0];
    var Met3 = document.getElementsByClassName("Metodo3")[0];
    var Met4 = document.getElementsByClassName("Metodo4")[0];
    var Met7 = document.getElementsByClassName("Metodo7")[0];
    var Met8 = document.getElementsByClassName("Metodo8")[0];
    Met1.style.visibility = "hidden";
    Met2.style.visibility = "hidden";
    Met3.style.visibility = "hidden";
    Met4.style.visibility = "hidden";
    Met7.style.visibility = "hidden";
    Met8.style.visibility = "hidden";
}

function ShowHide7(){
    var Met1 = document.getElementsByClassName("Metodo1")[0];
    var Met2 = document.getElementsByClassName("Metodo2")[0];
    var Met3 = document.getElementsByClassName("Metodo3")[0];
    var Met4 = document.getElementsByClassName("Metodo4")[0];
    var Met7 = document.getElementsByClassName("Metodo7")[0];
    var Met8 = document.getElementsByClassName("Metodo8")[0];
    Met1.style.visibility = "hidden";
    Met2.style.visibility = "hidden";
    Met3.style.visibility = "hidden";
    Met4.style.visibility = "hidden";
    Met7.style.visibility = "visible";
    Met8.style.visibility = "hidden";
}

function ShowHide8(){
    var Met1 = document.getElementsByClassName("Metodo1")[0];
    var Met2 = document.getElementsByClassName("Metodo2")[0];
    var Met3 = document.getElementsByClassName("Metodo3")[0];
    var Met4 = document.getElementsByClassName("Metodo4")[0];
    var Met7 = document.getElementsByClassName("Metodo7")[0];
    var Met8 = document.getElementsByClassName("Metodo8")[0];
    Met1.style.visibility = "hidden";
    Met2.style.visibility = "hidden";
    Met3.style.visibility = "hidden";
    Met4.style.visibility = "hidden";
    Met7.style.visibility = "hidden";
    Met8.style.visibility = "visible";
}