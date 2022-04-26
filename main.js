let n1;
let n2;

function addition() {
  n1 = Number(document.operation.nume1.value);
  n2 = Number(document.operation.nume2.value);

  document.operation.resu.value = n1 + n2;
}

function soustraction() {
  n1 = Number(document.operation.nume1.value);
  n2 = Number(document.operation.nume2.value);

  document.operation.resu.value = n1 - n2;
}

function multiplication() {
  n1 = Number(document.operation.nume1.value);
  n2 = Number(document.operation.nume2.value);

  document.operation.resu.value = n1 * n2;
}

function division() {
  n1 = Number(document.operation.nume1.value);
  n2 = Number(document.operation.nume2.value);

  document.operation.resu.value = n1 / n2;
}
