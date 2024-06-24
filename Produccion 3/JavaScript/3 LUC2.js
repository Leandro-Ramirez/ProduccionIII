document.addEventListener("DOMContentLoaded", ()=>{
    const btnDos = document.querySelector("#Dos");

    btnDos.addEventListener("click", function() {
        const tamaño = parseInt(document.getElementById('LargoMatriz1').value);
    const datos = [];

    for (let i = 1; i <= tamaño; i++) {
        const inputValue = document.getElementById(`input-${i}`).value;
        datos.push(inputValue);
    }

    // Guardar los datos en localStorage
    localStorage.setItem('datosTabla', JSON.stringify(datos));
    alert('Datos guardados con éxito!');

    //separacion
    const numeroDeFilas = parseInt(document.getElementById('LargoMatriz1').value); // Obtener el número de filas del input
    const contenedor = document.getElementById('contenedorTabla');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de crear una nueva tabla
    const s = parseFloat(document.getElementById('SLUC').value);
    const K = parseFloat(document.getElementById('KLUC').value);
    // Crear tabla y encabezado
    const tabla = document.createElement('table');
    const encabezado = document.createElement('tr');
    const nombres = ['Periodo', 'Unidades', 'Periodos mantenidos', 'Costo de mantenimiento', 'Costo de mantenimiento acumulado'];

    nombres.forEach(nombre => {
        const th = document.createElement('th');
        th.textContent = nombre;
        encabezado.appendChild(th);
    });
    tabla.appendChild(encabezado);

    let periodo = 1;
    let datosGuardados = localStorage.getItem('datosTabla');
    let lista = JSON.parse(datosGuardados);
    let costoMante = 0;
    let periodosMantenidos = 0;
    let unidadesMarcadasEnRojo = []; 
    for (let i = 0; i < numeroDeFilas; i++) {
        let valorK = lista[i] * (periodosMantenidos ) * K; // Ajuste para periodos mantenidos correctos

        if (costoMante == 0) {
            costoMante = valorK;
        } else {
            costoMante += valorK;
        }
        // Crear la fila y celdas
        const fila = document.createElement('tr');

        var celda = document.createElement('td');
        celda.textContent = periodo;
        var celda1 = document.createElement('td');
        celda1.textContent = lista[i];
        var celda2 = document.createElement('td');
        celda2.textContent = periodosMantenidos ;
        var celda3 = document.createElement('td');
        celda3.textContent = valorK;
        var celda4 = document.createElement('td');
        celda4.textContent = costoMante;

        fila.appendChild(celda);
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(celda3);
        fila.appendChild(celda4);

        if (costoMante > s) {
            fila.style.backgroundColor = 'red';
            unidadesMarcadasEnRojo.push({unidad:lista[i],col:i}); //Guardar unidades marcadas en rojo
            periodo = 1; // Reiniciar el periodo
            costoMante = 0; // Reiniciar el costo de mantenimiento acumulado
            periodosMantenidos = 0; // Reiniciar los periodos mantenidos
        } else {
            periodo++;
            periodosMantenidos++;
        }
        tabla.appendChild(fila);
    }
    contenedor.appendChild(tabla);
      // Mostrar las unidades marcadas en rojo en la fila de Recepción Planeada
      unidadesMarcadasEnRojo.forEach((obj) => {
        const celda = document.getElementById(`recepcion-${obj.col +1}`);
        if (celda) {
            celda.textContent = obj.unidad;
        }
    });
    })
});