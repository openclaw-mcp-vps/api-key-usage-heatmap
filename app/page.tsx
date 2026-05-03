export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          API Security
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visual Heatmap of{' '}
          <span className="text-[#58a6ff]">API Key Usage</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Ingest API logs via file upload or webhook. Instantly see which keys are active, when, by whom, and across which endpoints — with geographic and temporal heatmaps.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Get Access — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">For DevOps engineers, security teams &amp; API product managers.</p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 text-left">
          {[
            { icon: '🗺️', title: 'Geographic Heatmaps', desc: 'See where in the world your API keys are being used in real time.' },
            { icon: '⏱️', title: 'Temporal Analysis', desc: 'Spot unusual usage spikes by hour, day, or week across all keys.' },
            { icon: '🔑', title: 'Per-Key Breakdown', desc: 'Drill into any API key to see endpoints hit, request volume, and anomalies.' }
          ].map(f => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$19</p>
          <p className="text-[#8b949e] mb-8">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Unlimited API log ingestion',
              'Interactive D3.js heatmaps',
              'Geographic & temporal views',
              'Webhook + file upload support',
              'SQLite storage with real-time updates',
              'Export reports as CSV/PNG'
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start for $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'How do I get my API logs into the dashboard?',
              a: 'You can upload log files (JSON, CSV, or NDJSON) directly, or configure a webhook endpoint to stream logs in real time from your API gateway.'
            },
            {
              q: 'Which API gateways are supported?',
              a: 'Any gateway that can export logs in a standard format — including AWS API Gateway, Kong, Nginx, and custom backends. A simple log format mapper is included.'
            },
            {
              q: 'Is my data stored securely?',
              a: 'All data is processed and stored locally in SQLite on your own server. Nothing is sent to third-party services. You own your data entirely.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-10 text-[#8b949e] text-sm border-t border-[#21262d]">
        © {new Date().getFullYear()} API Key Usage Heatmap. All rights reserved.
      </footer>
    </main>
  )
}
