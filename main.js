window.onload = function() {
    const btnAdd = document.querySelector('.agregar');
    const btnDel = document.querySelector('.sacar');
    let cantidad = 0;

    function agregarSilla() {
        const divArriba = document.querySelector('.superior')
        const divAbajo = document.querySelector('.inferior')
        const divIzq = document.querySelector('.izq')
        const divDer = document.querySelector('.der')
        const silla = new Image(100, 100)
        silla.src = 'silla.png'
        silla.className = 'silla'
        silla.alt = 'silla'
        if (cantidad < 8) {
            cantidad += 1
            if (cantidad <= 3) {
                divArriba.append(silla)
            }
            if ((3 < cantidad) && (cantidad <= 7)) {
                //rotar imagen 180°
                silla.style.transform = "rotate(180deg)"
                divAbajo.append(silla)
            }
            if (cantidad === 7) {
                //rotar imagen 90°
                silla.style.transform = "rotate(270deg)"
                divIzq.append(silla)
            }
            if (cantidad === 8) {
                //rotar imagen 270°
                silla.style.transform = "rotate(90deg)"
                divDer.append(silla)
            }
            console.log(cantidad)
        } else {
            alert('Ha alcanzado la capacidad máxima de sillas en la sala')
        }
    }

    function borrarSilla() {
        const divArriba = document.querySelector('.superior');
        const divAbajo = document.querySelector('.inferior');
        const divIzq = document.querySelector('.izq');
        const divDer = document.querySelector('.der');
        let elementoAEliminar;
        if (cantidad > 0) {
            if (cantidad <= 3) {
                elementoAEliminar = divArriba.querySelector('.silla');
                divArriba.removeChild(elementoAEliminar);
            } else {
                if ((3 < cantidad) && (cantidad < 7)) {
                    elementoAEliminar = divAbajo.querySelector('.silla');
                    divAbajo.removeChild(elementoAEliminar);
                } else {
                    if (cantidad === 7) {
                        elementoAEliminar = divIzq.querySelector('.silla');
                        divIzq.removeChild(elementoAEliminar);
                    } else {
                        elementoAEliminar = divDer.querySelector('.silla');
                        divDer.removeChild(elementoAEliminar);
                    }
                }
            }
            cantidad -= 1;
            console.log(cantidad)
        } else {
            alert('Ya ha eliminado todas las sillas disponibles')
        }

    }

    btnAdd.addEventListener('click', agregarSilla);
    btnDel.addEventListener('click', borrarSilla);
};
