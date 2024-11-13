const tasasDeCambio = {
  usd: 1.1, // 1 local currency= 1.10 USD
  eur: 0.92, // 1local currency = 0.92 EUR
  gbp: 0.8, // 1 local currency= 0.80 GBP
};



function convertir() {
   // Get the values ​​entered by the user
    const cantidad = parseFloat(document.getElementById("cantidad").value);
    const moneda = document.getElementById("moneda").value;