// Breakeven ROAS Calculator
import { useState } from "react";

function BreakevenROASCalculator() {
  const [price, setPrice] = useState(0);
  const [cog, setCog] = useState(0);

  const breakevenRoas = price - cog > 0 ? (price / (price - cog)).toFixed(2) : 0;

  let feedback = "❓ Enter your numbers above";
  if (price > 0 && cog > price) {
    feedback = "🤑 Wait a minute... you're selling it for less than it costs you?! Great way to lose money fast — or win hearts, maybe.";
  }
  const roasNum = parseFloat(breakevenRoas);
  if (roasNum > 0) {
    if (roasNum <= 1.35) {
      feedback = "✅ Excellent margin — very healthy product to scale.";
    } else if (roasNum > 1.35 && roasNum <= 1.49) {
      feedback = "🟡 Good margin — still solid, but watch ad costs.";
    } else if (roasNum >= 1.5 && roasNum <= 1.65) {
      feedback = "⚠️ Thin margin — scale carefully and watch ROAS.";
    } else if (roasNum > 1.65) {
      feedback = "❌ Poor margin — likely hard to scale profitably.";
    }
  }

  const handleReset = () => {
    setPrice(0);
    setCog(0);
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 24, fontFamily: 'Arial, sans-serif', backgroundColor: '#ffffff', borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center', fontSize: '1.8em', marginBottom: 10 }}>Breakeven ROAS Calculator</h2>

      <p style={{ textAlign: 'center', marginBottom: 30, color: '#555' }}>
        Enter your product's selling price and cost of goods (including shipping) to find out your required ROAS to break even.<br />
        Use this tool to quickly see if a product has enough margin to run paid ads profitably.
      </p>

      <div style={{ marginBottom: 20 }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>Selling Price ($)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          style={{ width: '100%', padding: 10, fontSize: '1em', borderRadius: 8, border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ marginBottom: 30 }}>
        <label style={{ fontWeight: 'bold', display: 'block', marginBottom: 6 }}>Cost of Goods (COG) incl. Shipping ($)</label>
        <input
          type="number"
          value={cog}
          onChange={(e) => setCog(parseFloat(e.target.value))}
          style={{ width: '100%', padding: 10, fontSize: '1em', borderRadius: 8, border: '1px solid #ccc' }}
        />
      </div>

      <div style={{ padding: 16, backgroundColor: '#f9f9f9', borderRadius: 12, marginBottom: 30 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1.1em', marginBottom: 10 }}>
          <strong>
            Breakeven ROAS
            <span
              title="This is the minimum return on ad spend you need to cover your product cost and break even."
              style={{ cursor: 'help', fontSize: '0.75em', verticalAlign: 'super', marginLeft: '4px', fontWeight: 'normal' }}
            >
              🛈
            </span>
            :
          </strong>
          {price > 0 && cog > price ? null : <span style={{ fontWeight: 'bold' }}>{breakevenRoas}</span>}
        </div>
        <p><strong>Feedback:</strong> {feedback}</p>
      </div>

      <button
        onClick={handleReset}
        style={{ width: '100%', padding: 12, fontSize: '1em', borderRadius: 8, backgroundColor: '#0070f3', color: '#fff', border: 'none', cursor: 'pointer' }}
      >
        Reset
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BreakevenROASCalculator />);