const root = document.getElementById("root");
root.innerHTML = `
  <div class="container">
    <h2>Breakeven ROAS Calculator</h2>
    <p>
      Enter your product's selling price and cost of goods (including shipping) to find out your required ROAS to break even.
    </p>
    <label>Selling Price ($)</label>
    <input type="number" id="price" />
    <label>Cost of Goods (COG) incl. Shipping ($)</label>
    <input type="number" id="cost" />
    <button onclick="calculate()">Calculate</button>
    <div class="result" id="result" style="display:none;">
      <p><strong>Breakeven ROAS<span class='tooltip' title='This is the minimum return on ad spend you need to cover your product cost and break even.'>🛈</span>:</strong> <span id="roas"></span></p>
      <p id="feedback"></p>
    </div>
    <button onclick="reset()" style="margin-top:10px;background:#ccc;color:#000;">Reset</button>
  </div>
`;

function calculate() {
  const price = parseFloat(document.getElementById('price').value);
  const cost = parseFloat(document.getElementById('cost').value);
  const result = document.getElementById('result');
  const roasText = document.getElementById('roas');
  const feedbackText = document.getElementById('feedback');

  if (isNaN(price) || isNaN(cost)) {
    feedbackText.textContent = "❓ Please enter valid numbers.";
    result.style.display = 'block';
    roasText.textContent = "";
    return;
  }

  if (cost > price) {
    feedbackText.textContent = "🤑 You're selling it for less than it costs? That's bold!";
    result.style.display = 'block';
    roasText.textContent = "";
    return;
  }

  const breakeven = (price / (price - cost)).toFixed(2);
  roasText.textContent = breakeven;
  result.style.display = 'block';

  const roasNum = parseFloat(breakeven);
  let feedback = "";

  if (roasNum <= 1.35) {
    feedback = "✅ Excellent margin — very healthy product to scale.";
  } else if (roasNum <= 1.49) {
    feedback = "🟡 Good margin — still solid, but watch ad costs.";
  } else if (roasNum <= 1.65) {
    feedback = "⚠️ Thin margin — scale carefully and watch ROAS.";
  } else {
    feedback = "❌ Poor margin — likely hard to scale profitably.";
  }

  feedbackText.textContent = feedback;
}

function reset() {
  document.getElementById('price').value = '';
  document.getElementById('cost').value = '';
  document.getElementById('roas').textContent = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('result').style.display = 'none';
}