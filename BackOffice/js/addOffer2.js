const title = document.getElementById("title");
const dest = document.getElementById("destination");
const depdate = document.getElementById("depdate");
const retdate = document.getElementById("retdate");
const price = document.getElementById("price");
const category = document.getElementById("category");
var b = document.getElementById("submit");

b.addEventListener("click", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const titleValue = title.value.trim();
  const destValue = dest.value.trim();
  const priceValue = price.value.trim();
  let depy = depdate.value.slice(0, 4);
  let depm = depdate.value.slice(5, 7);
  let depd = depdate.value.slice(8, 10);
  let rety = retdate.value.slice(0, 4);
  let retm = retdate.value.slice(5, 7);
  let retd = retdate.value.slice(8, 10);
  let ret = rety + retm + retd;
  let dep = depy + depm + depd;

  if (titleValue.length < 5) {
    setError(title, "Minimum title length is 5 letters");
  } else setSuccess(title);
  if (destValue.length < 3) {
    setError(dest, "Minimum destination length is 3 Letter");
  } else setSuccess(dest);
  if (dep >= ret) {
    setError(depdate, "Departure day must be before the Return day");
    setError(retdate, "Return day must be later than the Departure day");
  } else {
    setSuccess(depdate);
    setSuccess(retdate);
  }
  if (priceValue < 0) {
    setError(price, "Price must be greater than 0");
  } else if (priceValue === "") {
    setError(price, "Price must be greater than 0");
  } else setSuccess(price);
};
