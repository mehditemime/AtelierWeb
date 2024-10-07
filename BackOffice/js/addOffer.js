const title = document.getElementById("title");
const dest = document.getElementById("destination");
const depdate = document.getElementById("depdate");
const retdate = document.getElementById("retdate");
const price = document.getElementById("price");
const category = document.getElementById("category");

function validerFormulaire(event) {
  event.preventDefault();
  let depy = depdate.value.slice(0, 4);
  let depm = depdate.value.slice(5, 7);
  let depd = depdate.value.slice(8, 10);
  let rety = retdate.value.slice(0, 4);
  let retm = retdate.value.slice(5, 7);
  let retd = retdate.value.slice(8, 10);
  let ret = rety + retm + retd;
  let dep = depy + depm + depd;

  if (title.value.length < 5) {
    alert("The title must contain at least 5 characters.");
  } else if (dest.value.length < 5) {
    alert("The destination must contain at least 5 characters.");
  } else if (dep >= ret) {
    alert("The return date must be later than the departure date.");
  } else if (isNaN(price.value) || price.value <= 0) {
    alert("The price must be a positive number.");
  } else alert("Travel added successfully");
}

var submit = document.getElementById("submit");
submit.addEventListener("click", validerFormulaire);
