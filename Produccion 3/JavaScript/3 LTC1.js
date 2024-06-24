document.addEventListener("DOMContentLoaded", ()=>{
    const btnUno = document.querySelector("#Uno");

    btnUno.addEventListener("click", function() {
        const tamaño = parseInt(document.getElementById('LargoMatriz1').value);
    if (tamaño <= 0) {
        alert("Ingrese un número de columnas válido.");
        return;
    }

    const tabla = document.createElement('table');
    const encabezadoColumna = document.createElement('tr');
    const thRequerimientoBruto = document.createElement('th');
    thRequerimientoBruto.textContent = 'Requerimiento Bruto';
    encabezadoColumna.appendChild(thRequerimientoBruto);

    for (let i = 1; i <= tamaño; i++) {
        const th = document.createElement('th');
        th.textContent = `${i}`;
        encabezadoColumna.appendChild(th);
    }
    tabla.appendChild(encabezadoColumna);

    const filaInputs = document.createElement('tr');
    const tdRequerimientoBruto = document.createElement('td');
    tdRequerimientoBruto.textContent = 'Requerimiento Bruto';
    filaInputs.appendChild(tdRequerimientoBruto);

    for (let i = 1; i <= tamaño; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.step = '0.01';
        input.required = true;
        input.id = `input-${i}`;  // Añadir un ID único a cada input para facilitar la recolección de datos
        const celda = document.createElement('td');
        celda.appendChild(input);
        filaInputs.appendChild(celda);
    }
    tabla.appendChild(filaInputs);

    const filaVacia = document.createElement('tr');
    const tdRecepcionPlaneada = document.createElement('td');
    tdRecepcionPlaneada.textContent = 'Recepción Planeada';
    filaVacia.appendChild(tdRecepcionPlaneada);

    for (let i = 1; i <= tamaño; i++) {
        const celdaVacia = document.createElement('td');
        celdaVacia.id = "recepcion-"+i;
        filaVacia.appendChild(celdaVacia);
    }
    tabla.appendChild(filaVacia);

    const tablaContainer = document.getElementById('tablaContainer');
    tablaContainer.innerHTML = '';
    tablaContainer.appendChild(tabla);
    }); 
});