const imprimir = () => {


  var folio = document.querySelector("#folio").value;
  var aciertos = document.querySelector("#aciertos").value;
  var carrera = document.querySelector("#carrera").value;
  var fecha = document.querySelector("#fecha").value;
  var nombre = document.querySelector("#nombre").value;
  var ap = document.querySelector("#ap").value;
  var am = document.querySelector("#am").value;
  var dia = document.querySelector("#dia").value;


  var mes = document.querySelector("#mes").value;
  var año = document.querySelector("#año").value;
  var lugar = document.querySelector("#lugar").value
  var curp = document.querySelector("#curp").value;
  var sexo = document.querySelector("#sexo").value;
  var alergia = document.querySelector("#alergia").value;
  var tel = document.querySelector("#tel").value;
  var tel2 = document.querySelector("#tel2").value;
  var email = document.querySelector("#email").value;
  var email1 = document.querySelector("#email1").value;



  document.querySelector("#c1").innerHTML = `${folio} `;
  document.querySelector("#c2").innerHTML = `${aciertos} `;
  document.querySelector("#c3").innerHTML = `${carrera} `;
  document.querySelector("#c4").innerHTML = `${fecha} `;
  document.querySelector("#c5").innerHTML = `${nombre} `;
  document.querySelector("#c6").innerHTML = `${ap} `;
  document.querySelector("#c7").innerHTML = `${am} `;
  document.querySelector("#c8").innerHTML = `${dia} `;
  document.querySelector("#c9").innerHTML = `${mes} `;
  document.querySelector("#c10").innerHTML = `${año} `;
  document.querySelector("#c11").innerHTML = `${lugar} `;
  document.querySelector("#c12").innerHTML = `${curp} `;
  document.querySelector("#c13").innerHTML = `${sexo} `;
  document.querySelector("#c14").innerHTML = `${alergia} `;
  document.querySelector("#c15").innerHTML = `${tel} `;
  document.querySelector("#c16").innerHTML = `${tel2} `;
  document.querySelector("#c17").innerHTML = `${email} `;
  document.querySelector("#c18").innerHTML = `${email1} `;

}
const borrar = () => {
  document.querySelector("#c1").innerHTML = ``;
  document.querySelector("#c2").innerHTML = ``;
  document.querySelector("#c3").innerHTML = ``;
  document.querySelector("#c4").innerHTML = ``;
  document.querySelector("#c5").innerHTML = ``;
  document.querySelector("#c6").innerHTML = ``;
  document.querySelector("#c7").innerHTML = ``;
  document.querySelector("#c8").innerHTML = ``;
  document.querySelector("#c9").innerHTML = ``;
  document.querySelector("#c10").innerHTML = ``;
  document.querySelector("#c11").innerHTML = ``;
  document.querySelector("#c12").innerHTML = ``;
  document.querySelector("#c13").innerHTML = ``;
  document.querySelector("#c14").innerHTML = ``;
  document.querySelector("#c15").innerHTML = ``;
  document.querySelector("#c16").innerHTML = ``;
  document.querySelector("#c17").innerHTML = ``;
  document.querySelector("#c18").innerHTML = ``;
}
