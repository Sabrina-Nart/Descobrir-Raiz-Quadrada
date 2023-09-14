function raiz_quadrada(form) {

  let x = Number(document.getElementById("quad").value);

  let raiz_apprx = sqrt_approx(x);

  let err = x - (raiz_apprx * raiz_apprx);

  if (err < 0) {

    err = -err;
  }
  
  document.write("<div>A Raíz Quadrada aproximada de " + x + " é " + raiz_apprx + ", com margem de erro de " + err + "</div>");
}

function raiz_quadrada_mais_proximo(x) {

  let i = 0;

  while (i*i < x) {
    i++;
  }

  let dist_ii = i*i - x;

  let dist_ant = x - (i-1)*(i-1);

  return dist_ant < dist_ii? i-1: i;
}

function sqrt_approx(x) {

  let sqrt_a = raiz_quadrada_mais_proximo(x);

  let a = sqrt_a * sqrt_a;

  return sqrt_a + (x-a)/(2*sqrt_a);
}

console.log(contador);
