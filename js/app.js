const total = document.querySelector("#total");
const miformulario = document.querySelector("#form_gasto");
const descripcion = document.querySelector("#descripcion");
const monto = document.querySelector("#monto");


console.log(total.textContent);
//total.textContent = "$500.000";

// total.addEventListener("click",()=>{
//     console.log("Hicimos clic")
// });


miformulario.addEventListener("submit", (event) =>{
    event.preventDefault();
    const descvalue = descripcion.value;
    const montovalue = monto.value;
    const montonumber = Number(monto.value);

    console.log(descvalue, montovalue );

});