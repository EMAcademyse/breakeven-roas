document.getElementById('root').innerHTML = `
  <div style="max-width:600px;margin:auto;padding:20px;background:#fff;border-radius:12px;box-shadow:0 0 10px rgba(0,0,0,0.05)">
    <h2>Breakeven ROAS Calculator</h2>
    <p>Enter your product's price and cost (incl. shipping) to find your breakeven ROAS.</p>
    <label>Price: <input id="price" type="number" /></label><br><br>
    <label>Cost: <input id="cost" type="number" /></label><br><br>
    <button onclick="calculate()">Calculate</button>
    <p id="result" style="margin-top:20px;"></p>
  </div>
`;

function calculate() {
  const price = parseFloat(document.getElementById('price').value);
  const cost = parseFloat(document.getElementById('cost').value);
  const resultEl = document.getElementById('result');
  if (isNaN(price) || isNaN(cost)) {
    resultEl.textContent = "Please enter valid numbers.";
    return;
  }
  if (cost > price) {
    resultEl.textContent = "🤑 Selling it for less than it costs? That's bold!";
    return;
  }
  const breakeven = (price / (price - cost)).toFixed(2);
  resultEl.innerHTML = `Breakeven ROAS: <strong>${breakeven}</strong>`;
}