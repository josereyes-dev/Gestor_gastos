const total = document.querySelector("#total");
const miformulario = document.querySelector("#form_gasto");
const descripcion = document.querySelector("#descripcion");
const monto = document.querySelector("#monto");
const categoria = document.querySelector("#categoria");
const fecha = document.querySelector("#fecha");


// console.log(total.textContent);
//total.textContent = "$500.000";

// total.addEventListener("click",()=>{
//     console.log("Hicimos clic")
// });

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

    let sumaGastos = 0;

    for (const gasto of gastos) {
        sumaGastos = sumaGastos + gasto.monto;
    }

    // console.log(sumaGastos);

    total.textContent = "$"+ sumaGastos.toLocaleString("es-CO");

    console.log(gastos);
    console.log(gastos.length);

});



// const gasto = {
//     descripcion: descripcion,
//     monto: monto,
//     categoria: categoria,
//     fecha: fecha
// };

// console.log(gasto);
// console.log(gasto.monto);
