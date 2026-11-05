const total = document.querySelector("#total");
const miformulario = document.querySelector("#form_gasto");
const descripcion = document.querySelector("#descripcion");
const monto = document.querySelector("#monto");
const categoria = document.querySelector("#categoria");
const fecha = document.querySelector("#fecha");
const lista_gastos = document.querySelector("#lista_gastos");

const gastos = [];

miformulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const gasto = {
        descripcion: descripcion.value,
        monto: Number(monto.value),
        categoria: categoria.value,
        fecha: fecha.value,
    };
    gastos.push(gasto);

    miformulario.reset();

    const nuevoItem = document.createElement ("li");
    nuevoItem.textContent = gasto.descripcion;
    lista_gastos.appendChild(nuevoItem);
    
    let sumaGastos = 0;

    for (const item of gastos) {
        sumaGastos = sumaGastos + item.monto;
    }

    total.textContent = "$ "+ sumaGastos.toLocaleString("es-CO");

    console.log(gastos);
    console.log(gastos.length);

});
