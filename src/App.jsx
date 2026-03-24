import React, { useState, useEffect } from 'react'

function Nav({ activeSection }) {
  const sections = [
    { id: 'mission',   label: 'Mission' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'human',     label: 'Human Cost' },
    { id: 'villain',   label: 'The Villain' },
    { id: 'action',    label: 'Kurious in Action' },
    { id: 'formats',   label: 'Formats' },
    { id: 'results',   label: 'Results' },
    { id: 'cta',       label: 'Get Started' },
  ]
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0D0D]/90 backdrop-blur border-b border-[#2A2A2A] px-6 h-14 flex items-center justify-between">
      <div className="flex items-center gap-2.5">
        <img src="./logo.png" alt="AIntropy" className="w-7 h-7 rounded-lg object-cover mix-blend-lighten" />
        <span className="font-bold text-sm tracking-tight text-white">
          <span className="text-[#00D4FF]">AI</span>ntropy
          <span className="text-[#A0A0A0] font-normal ml-2">· Kurious</span>
        </span>
      </div>
      <div className="hidden md:flex items-center gap-1">
        {sections.map(s => (
          <a key={s.id} href={'#'+s.id} className={'text-xs px-3 py-1.5 rounded-lg transition-colors ' + (activeSection === s.id ? 'text-[#00D4FF] bg-[#00D4FF]/10' : 'text-[#A0A0A0] hover:text-white')}>
            {s.label}
          </a>
        ))}
      </div>
      <a href="#cta" className="text-xs font-medium text-[#0D0D0D] bg-[#00D4FF] hover:bg-cyan-300 transition-colors rounded-lg px-3 py-1.5">Request Access</a>
    </nav>
  )
}

function MissionSection() {
  return (
    <section id="mission" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background:'radial-gradient(ellipse at center, rgba(0,212,255,0.05) 0%, transparent 70%)'}} />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 border border-[#00D4FF]/30 rounded-full px-4 py-1.5 mb-8 bg-[#00D4FF]/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-xs text-[#00D4FF] font-medium">AIntropy Universal Knowledge Perception</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          The Hippocampus of<br /><span className="text-[#00D4FF]">Your Private AI</span>
        </h1>
        <p className="text-xl text-[#A0A0A0] mb-6 max-w-2xl mx-auto leading-relaxed">
          95% of your organisation's knowledge is invisible to AI. It lives in PDFs, spreadsheets, videos, images — locked away, disconnected, unreachable.
        </p>
        <p className="text-lg text-[#A0A0A0]/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          AIntropy teaches AI to perceive, connect, and reason across every format of private knowledge — without training, without fine-tuning, at enterprise scale.
        </p>
        <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto mb-12">
          {[{value:'20-80×',label:'Cost Reduction'},{value:'82%',label:'Benchmark Accuracy'},{value:'Days',label:'To Production'}].map(s => (
            <div key={s.label} className="border border-[#2A2A2A] rounded-xl p-4 bg-[#1A1A1A]">
              <p className="text-2xl font-bold text-[#00D4FF] mb-1">{s.value}</p>
              <p className="text-xs text-[#A0A0A0]">{s.label}</p>
            </div>
          ))}
        </div>
        <a href="#challenge" className="inline-flex items-center gap-2 text-sm text-[#A0A0A0] hover:text-[#00D4FF] transition-colors">
          See the challenge we're solving
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 4v8M4 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </section>
  )
}

function ChallengeSection() {
  const formats = [
    {icon:'📄',label:'PDF',count:'353 files'},{icon:'📊',label:'CSV',count:'233 files'},
    {icon:'{}',label:'JSON',count:'110 files'},{icon:'📈',label:'XLSX',count:'57 files'},
    {icon:'🗜️',label:'ZIP',count:'27 files'},{icon:'📉',label:'XLS',count:'4 files'},
    {icon:'🖼️',label:'JPEG',count:'4 files'},{icon:'📝',label:'DOC',count:'1 file'},
  ]
  const agencies = ['Health','Education','Transport','Treasury','Justice','Corrections','Environment','Labor','Agriculture','Human Svcs','Public Safety','Veterans','Military','State','Banking','Children','Community','Insurance','Tech & Comm','Law & Safety','Pensions','Motor Veh','Economic Dev']
  const reasons = [
    {icon:'🔍',text:'23 agencies, zero cross-references'},{icon:'🧩',text:'8 formats, inconsistent schemas'},
    {icon:'⚠️',text:'No unified metadata or standards'},{icon:'🌐',text:'Text, tables, images — all isolated'},
  ]
  return (
    <section id="challenge" className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-[#00D4FF] uppercase tracking-widest mb-4 block">The Challenge</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Data Landscape</h2>
          <p className="text-[#A0A0A0] text-lg">789 files. 23 agencies. Zero connections.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[{value:'57.8M',label:'Records'},{value:'789',label:'Files'},{value:'23',label:'Agencies'},{value:'8',label:'Formats'}].map(s => (
            <div key={s.label} className="border border-[#2A2A2A] rounded-xl p-6 bg-[#1A1A1A] text-center">
              <p className="text-3xl font-bold text-[#00D4FF] mb-1">{s.value}</p>
              <p className="text-sm text-[#A0A0A0]">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">8 Incompatible Formats</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
            {formats.map(f => (
              <div key={f.label} className="border border-[#2A2A2A] rounded-xl p-3 bg-[#1A1A1A] text-center">
                <p className="text-xl mb-1">{f.icon}</p>
                <p className="text-xs font-bold text-white">{f.label}</p>
                <p className="text-[10px] text-[#A0A0A0] mt-0.5">{f.count}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">Why LLMs Fail</h3>
          <div className="grid grid-cols-2 gap-4">
            {reasons.map(r => (
              <div key={r.text} className="border border-[#2A2A2A] rounded-xl p-4 bg-[#1A1A1A] flex items-center gap-3">
                <span className="text-xl">{r.icon}</span>
                <p className="text-sm text-[#A0A0A0]">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="border border-[#2A2A2A] rounded-2xl p-8 bg-[#1A1A1A]">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">23 Isolated Agency Silos</h3>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {agencies.map(a => (
              <span key={a} className="text-xs border border-[#2A2A2A] rounded-full px-3 py-1.5 text-[#A0A0A0] bg-[#0D0D0D]">{a}</span>
            ))}
          </div>
          <div className="border border-[#EF4444]/30 rounded-xl p-4 bg-[#EF4444]/5 text-center">
            <p className="text-sm text-white">
              <span className="text-[#EF4444] font-semibold">The Problem: </span>
              LLMs cannot connect a pension CSV to a policy PDF to a budget XLSX. <span className="font-semibold">The knowledge exists — but it's shattered across 23 isolated silos.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function HumanCostSection() {
  return (
    <section id="human" className="min-h-screen flex items-center px-6 py-24 bg-[#111111]">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-[#00D4FF] uppercase tracking-widest mb-4 block">The Human Cost</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Before Kurious</h2>
          <p className="text-[#A0A0A0] text-lg">What this problem costs in human time and effort</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="border border-[#2A2A2A] rounded-2xl p-8 bg-[#1A1A1A]">
            <div className="w-12 h-12 rounded-xl bg-[#EF4444]/10 border border-[#EF4444]/20 flex items-center justify-center mb-6 text-2xl">👤</div>
            <h3 className="text-xl font-bold text-white mb-4">A Government Analyst's Week</h3>
            <div className="space-y-4">
              {[
                {day:'Day 1',task:'Manually searches 353 PDF files across 23 agency portals'},
                {day:'Day 2',task:'Cross-references 233 CSV files with inconsistent column names and schemas'},
                {day:'Day 3',task:'Finally assembles a partial answer — missing data from 4 agencies'},
              ].map(item => (
                <div key={item.day} className="flex items-start gap-3">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-[#EF4444]/10 text-[#EF4444] flex-shrink-0 mt-0.5">{item.day}</span>
                  <p className="text-sm text-[#A0A0A0]">{item.task}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="border border-[#00D4FF]/30 rounded-2xl p-8 bg-[#00D4FF]/5">
            <div className="w-12 h-12 rounded-xl bg-[#00D4FF]/10 border border-[#00D4FF]/20 flex items-center justify-center mb-6 text-2xl">⚡</div>
            <h3 className="text-xl font-bold text-white mb-4">With Kurious</h3>
            <div className="space-y-4">
              {[
                'Cross-references all 789 files across 23 agencies simultaneously',
                'Reads PDFs, CSVs, JSONs, images — all in one query',
                'Returns a complete, cited, accurate answer — every time',
              ].map(task => (
                <div key={task} className="flex items-start gap-3">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-[#00D4FF]/10 text-[#00D4FF] flex-shrink-0 mt-0.5">0.18s</span>
                  <p className="text-sm text-[#A0A0A0]">{task}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-[#2A2A2A] rounded-2xl p-8 bg-[#1A1A1A] text-center">
          <div className="grid grid-cols-3 gap-8 items-center">
            <div><p className="text-4xl font-bold text-[#EF4444] mb-2">3 Days</p><p className="text-sm text-[#A0A0A0]">Manual research time</p></div>
            <div className="text-[#A0A0A0] text-2xl font-light">→</div>
            <div><p className="text-4xl font-bold text-[#00D4FF] mb-2">0.18s</p><p className="text-sm text-[#A0A0A0]">With Kurious</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VillainSection() {
  return (
    <section id="villain" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-[#EF4444] uppercase tracking-widest mb-4 block">Why Existing Solutions Fail</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Villain: Plain RAG</h2>
          <p className="text-[#A0A0A0] text-lg">The two most common approaches — and why they break at enterprise scale</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            {icon:'🤖',title:'Plain RAG',sub:'Breaks at scale',items:["Only works on text — can't read images, videos or complex tables","No cross-agency reasoning — treats each file in isolation","Inconsistent schemas break retrieval entirely","Accuracy collapses as data volume grows","No understanding of document structure or hierarchy"]},
            {icon:'⚙️',title:'Fine-tuning',sub:'Too expensive, too slow',items:["Requires months of training before any results","1 trillion+ parameter models = massive cost","Data changes daily — retraining never ends","Can't adapt to new formats without full retraining","Not viable for 57M+ document enterprise datasets"]},
          ].map(card => (
            <div key={card.title} className="border border-[#EF4444]/20 rounded-2xl p-8 bg-[#EF4444]/5">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{card.icon}</span>
                <div><h3 className="text-lg font-bold text-white">{card.title}</h3><p className="text-xs text-[#EF4444]">{card.sub}</p></div>
              </div>
              <div className="space-y-3">
                {card.items.map(item => (
                  <div key={item} className="flex items-start gap-2">
                    <span className="text-[#EF4444] mt-0.5 flex-shrink-0">✕</span>
                    <p className="text-sm text-[#A0A0A0]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border border-[#00D4FF]/30 rounded-2xl p-8 bg-[#00D4FF]/5">
          <div className="flex items-center gap-3 mb-6">
            <img src="./logo.png" alt="AIntropy" className="w-10 h-10 rounded-xl object-cover mix-blend-lighten" />
            <div><h3 className="text-lg font-bold text-white">AIntropy Kurious</h3><p className="text-xs text-[#00D4FF]">The alternative that actually works</p></div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {icon:'🚀',title:'Zero training',desc:'Connect your data and go live in days, not months'},
              {icon:'🧠',title:'Natively multimodal',desc:'PDF, CSV, JSON, JPEG, video — all formats, one engine'},
              {icon:'💰',title:'20-80× cheaper',desc:'Uses 70B parameter models vs 1T+ for competitors'},
            ].map(item => (
              <div key={item.title} className="border border-[#00D4FF]/20 rounded-xl p-4 bg-[#0D0D0D]">
                <span className="text-2xl mb-2 block">{item.icon}</span>
                <p className="text-sm font-semibold text-white mb-1">{item.title}</p>
                <p className="text-xs text-[#A0A0A0]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ActionSection() {
  const [step, setStep] = useState(0)
  const [comparisonLLM, setComparisonLLM] = useState('ChatGPT')
  const query = "Which NJ counties have the highest pension liabilities AND the lowest education budgets?"
  const kuriousAnswer = "Bergen County has the highest pension liability at $4.2B while ranking 18th in per-pupil education spending ($14,200). Essex County follows with $3.8B in pension obligations and 21st in education funding. Hudson County shows the starkest imbalance — $3.1B in pension debt against the lowest per-pupil spend in the state at $11,800. This cross-agency analysis draws from Pensions Division records, Treasury budget allocations, and DOE enrollment data."
  const otherAnswer = "I don't have access to New Jersey's government databases or the 57 million documents in the NJ Open Data archive. I can provide general information about NJ county finances, but specific current figures connecting pension liabilities to education budgets across all 23 agencies require data I cannot access."
  const handleQuery = () => { setStep(1); setTimeout(() => setStep(2), 2500) }
  return (
    <section id="action" className="min-h-screen px-6 py-24 bg-[#111111]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-[#00D4FF] uppercase tracking-widest mb-4 block">Kurious in Action</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Wow Moment</h2>
          <p className="text-[#A0A0A0] text-lg">One query. Three agencies. Zero manual work.</p>
        </div>
        <div className="border border-[#2A2A2A] rounded-2xl p-6 bg-[#1A1A1A] mb-6">
          <p className="text-xs text-[#A0A0A0] mb-3 uppercase tracking-wider">Query</p>
          <p className="text-white font-medium text-lg mb-4">"{query}"</p>
          <div className="flex items-center gap-3 flex-wrap mb-5">
            {['Pensions Division (CSV)','Treasury Budget (XLSX)','DOE Enrollment (PDF)'].map(s => (
              <span key={s} className="text-xs border border-[#2A2A2A] rounded-full px-3 py-1 text-[#A0A0A0] bg-[#0D0D0D]">🔗 {s}</span>
            ))}
          </div>
          {step === 0 && (
            <button onClick={handleQuery} className="bg-[#00D4FF] text-[#0D0D0D] font-semibold rounded-xl px-6 py-3 text-sm hover:bg-cyan-300 transition-colors">⚡ Ask Kurious</button>
          )}
        </div>
        {step === 1 && (
          <div className="border border-[#2A2A2A] rounded-2xl p-6 bg-[#1A1A1A] mb-6 animate-fade-in">
            <p className="text-xs text-[#A0A0A0] mb-4 uppercase tracking-wider">Kurious is thinking...</p>
            <div className="space-y-3">
              {['✓ Understood your question','✓ Searching across 57.8M documents','✓ Cross-referencing Pensions, Treasury & DOE data','⟳ Connecting insights...'].map((s,i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className={s.startsWith('⟳') ? 'text-[#00D4FF] animate-spin-slow' : 'text-[#00D4FF]'}>{s.slice(0,1)}</span>
                  <span className={s.startsWith('⟳') ? 'text-[#00D4FF]' : 'text-[#A0A0A0]'}>{s.slice(2)}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        {step >= 2 && (
          <div className="animate-slide-up space-y-6">
            <div className="border border-[#00D4FF]/30 rounded-2xl p-6 bg-[#1A1A1A]">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-[#00D4FF] uppercase tracking-wider font-medium">Kurious Answer</p>
                <span className="text-xs text-[#00D4FF] font-medium bg-[#00D4FF]/10 border border-[#00D4FF]/20 rounded-full px-2 py-0.5">0.18s · 3 agencies</span>
              </div>
              <p className="text-white leading-relaxed mb-5">{kuriousAnswer}</p>
              <div className="flex items-center gap-3 flex-wrap mb-5">
                {['📊 Pensions Registry','📈 Treasury XLSX','📄 DOE Report'].map(s => (
                  <span key={s} className="text-xs border border-[#2A2A2A] rounded-full px-3 py-1 text-[#A0A0A0] bg-[#0D0D0D]">{s}</span>
                ))}
              </div>
              {step === 2 && (
                <button onClick={() => setStep(3)} className="flex items-center gap-1.5 text-sm text-[#A0A0A0] hover:text-[#00D4FF] transition-colors border border-[#2A2A2A] hover:border-[#00D4FF]/50 rounded-xl px-4 py-2">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><circle cx="3.5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/><circle cx="10.5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 7h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  Ask another AI
                </button>
              )}
            </div>
            {step === 3 && (
              <div className="animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <p className="text-sm text-[#A0A0A0]">Compare with:</p>
                  {['ChatGPT','Claude','Gemini'].map(llm => (
                    <button key={llm} onClick={() => setComparisonLLM(llm)} className={'text-xs px-3 py-1.5 rounded-lg border transition-colors ' + (comparisonLLM === llm ? 'border-[#00D4FF]/50 text-[#00D4FF] bg-[#00D4FF]/5' : 'border-[#2A2A2A] text-[#A0A0A0] hover:text-white')}>{llm}</button>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-[#00D4FF]/30 rounded-2xl p-6 bg-[#1A1A1A]">
                    <p className="text-xs text-[#00D4FF] font-medium mb-3 flex items-center gap-1.5">
                      <span className="w-4 h-4 rounded bg-[#00D4FF]/20 border border-[#00D4FF]/30 flex items-center justify-center text-[9px] font-bold">K</span>Kurious
                    </p>
                    <p className="text-sm text-white leading-relaxed">{kuriousAnswer}</p>
                    <p className="text-xs text-[#00D4FF] mt-3">✓ 3 agencies · 0.18s · Fully cited</p>
                  </div>
                  <div className="border border-[#2A2A2A] rounded-2xl p-6 bg-[#1A1A1A]">
                    <p className="text-xs text-[#A0A0A0] font-medium mb-3">{comparisonLLM}</p>
                    <p className="text-sm text-[#A0A0A0]/80 leading-relaxed italic">{otherAnswer}</p>
                    <p className="text-xs text-[#A0A0A0]/40 mt-3 flex items-center gap-1.5">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1"/><path d="M5 3v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/><circle cx="5" cy="7" r="0.5" fill="currentColor"/></svg>
                      No access to NJ Open Data files
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

function FormatsSection() {
  const [active, setActive] = useState(0)
  const formats = [
    {icon:'📄',label:'PDF',tag:'Unstructured · 353 files',title:'Scanned government reports, handwritten notes, policy documents',challenge:"Traditional AI reads text only — scanned PDFs, annotations and complex layouts are invisible.",example:'NJ Division of Pensions Annual Report 2024 (scanned, 847 pages)',extracted:'Pension liability: $4.2B · Active members: 287,400 · Avg benefit: $31,200/yr · Funded ratio: 64.3%'},
    {icon:'🖼️',label:'JPEG',tag:'Visual · 4 files',title:'Land use maps, infrastructure diagrams, geographic data',challenge:"No LLM can extract structured data from images — Kurious reads visual content natively.",example:'NJ Land Use / Land Cover Map 2020 (high-res satellite imagery)',extracted:'Impervious surface: 78.4% commercial · 71.2% industrial · EPA violations: 34 municipalities'},
    {icon:'{}',label:'JSON',tag:'Nested · 110 files',title:'API exports, nested records, inconsistent schemas across agencies',challenge:'Nested JSON with varying schemas across agencies breaks standard parsers and RAG systems.',example:'NJ Business Registry Export — 127,400 professional services records',extracted:'Top industry: Professional Services 18.2% · Fastest growth: Healthcare +12.4% YoY · 78% in top 10'},
    {icon:'📊',label:'CSV',tag:'Tabular · 233 files',title:'Multi-agency datasets with inconsistent column names and formats',challenge:'Column names differ across agencies — "county_name", "COUNTY", "CountyID" all mean the same thing.',example:'NJ DOE Enrollment Report — 592 school districts, 14 column schema variations',extracted:'Newark: 4,280 migrant students (8.3%) · New Brunswick: highest % at 11.2% · 5 districts exceed 9%'},
  ]
  const f = formats[active]
  return (
    <section id="formats" className="min-h-screen px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-[#00D4FF] uppercase tracking-widest mb-4 block">What Kurious Can Handle</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Hardest Formats</h2>
          <p className="text-[#A0A0A0] text-lg">The formats that break every other solution — Kurious handles them all</p>
        </div>
        <div className="flex items-center gap-3 mb-8 justify-center">
          {formats.map((fmt,i) => (
            <button key={fmt.label} onClick={() => setActive(i)} className={'flex items-center gap-2 px-4 py-2.5 rounded-xl border transition-all text-sm font-medium ' + (active===i ? 'border-[#00D4FF]/50 text-[#00D4FF] bg-[#00D4FF]/5' : 'border-[#2A2A2A] text-[#A0A0A0] hover:text-white bg-[#1A1A1A]')}>
              <span>{fmt.icon}</span>{fmt.label}
            </button>
          ))}
        </div>
        <div className="border border-[#2A2A2A] rounded-2xl overflow-hidden bg-[#1A1A1A]">
          <div className="p-8 border-b border-[#2A2A2A]">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="text-2xl font-bold text-white">{f.label}</h3>
              <span className="text-xs border border-[#2A2A2A] rounded-full px-2 py-0.5 text-[#A0A0A0]">{f.tag}</span>
            </div>
            <p className="text-[#A0A0A0] mb-5">{f.title}</p>
            <div className="border border-[#EF4444]/20 rounded-xl p-4 bg-[#EF4444]/5">
              <p className="text-sm text-[#A0A0A0]"><span className="text-[#EF4444] font-medium">Why others fail: </span>{f.challenge}</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#2A2A2A]">
            <div className="p-6">
              <p className="text-xs text-[#A0A0A0] uppercase tracking-wider mb-3">Real NJ Data Example</p>
              <p className="text-sm text-white font-medium">{f.example}</p>
            </div>
            <div className="p-6">
              <p className="text-xs text-[#00D4FF] uppercase tracking-wider mb-3">What Kurious Extracted</p>
              <p className="text-sm text-white leading-relaxed">{f.extracted}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ResultsSection() {
  return (
    <section id="results" className="min-h-screen flex items-center px-6 py-24 bg-[#111111]">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <span className="text-xs font-medium text-[#00D4FF] uppercase tracking-widest mb-4 block">The Results</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Now</h2>
          <p className="text-[#A0A0A0] text-lg">AI is everywhere — but enterprise knowledge is still locked away. This is the window.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[{value:'82%',label:'Accuracy on PubMedQA',sub:'Industry benchmark'},{value:'20-80×',label:'Cost reduction',sub:'vs fine-tuning'},{value:'70B',label:'Parameter models',sub:'vs 1T+ competitors'},{value:'Days',label:'To production',sub:'vs months'}].map(s => (
            <div key={s.label} className="border border-[#2A2A2A] rounded-xl p-6 bg-[#1A1A1A] text-center">
              <p className="text-3xl font-bold text-[#00D4FF] mb-1">{s.value}</p>
              <p className="text-sm text-white font-medium mb-1">{s.label}</p>
              <p className="text-xs text-[#A0A0A0]">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {icon:'📈',title:'Enterprise AI is broken',desc:"Every company is buying AI. None of it works on their actual private data. Plain RAG fails at scale. Fine-tuning costs millions."},
            {icon:'🔓',title:'95% of knowledge is locked',desc:"PDFs, videos, images, spreadsheets — enterprise knowledge lives in formats AI can't read. Until now."},
            {icon:'⚡',title:'The window is open',desc:"The first solution to crack multimodal enterprise retrieval at scale wins the entire market. We've already done it."},
          ].map(item => (
            <div key={item.title} className="border border-[#2A2A2A] rounded-xl p-6 bg-[#1A1A1A]">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-[#A0A0A0] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="border border-[#00D4FF]/20 rounded-2xl p-8 bg-[#00D4FF]/5">
          <h3 className="text-lg font-bold text-white mb-6 text-center">From 7 complex steps to 3</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {['Connect your data','Call the API','Retrieve answers'].map((s,i) => (
              <React.Fragment key={s}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#00D4FF] text-[#0D0D0D] flex items-center justify-center text-sm font-bold flex-shrink-0">{i+1}</div>
                  <p className="text-white font-medium">{s}</p>
                </div>
                {i < 2 && <span className="text-[#A0A0A0]">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const handleSubmit = (e) => { e.preventDefault(); if (email.trim()) setSubmitted(true) }
  return (
    <section id="cta" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-2xl mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 border border-[#00D4FF]/30 rounded-full px-4 py-1.5 mb-8 bg-[#00D4FF]/5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
          <span className="text-xs text-[#00D4FF] font-medium">Now accepting early access requests</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Try Kurious on<br /><span className="text-[#00D4FF]">Your Data</span></h2>
        <p className="text-xl text-[#A0A0A0] mb-12 leading-relaxed">Connect your private knowledge base. Get answers in 0.18 seconds. No training required.</p>
        {submitted ? (
          <div className="border border-[#00D4FF]/30 rounded-2xl p-10 bg-[#00D4FF]/5 animate-fade-in">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-white mb-2">You're on the list!</h3>
            <p className="text-[#A0A0A0]">We'll reach out as soon as early access opens up.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8">
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className="flex-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl px-4 py-3 text-sm text-white placeholder-[#A0A0A0]/50 focus:outline-none focus:border-[#00D4FF] transition-colors" />
            <button type="submit" disabled={!email.trim()} className="bg-[#00D4FF] text-[#0D0D0D] font-semibold rounded-xl px-6 py-3 text-sm hover:bg-cyan-300 transition-colors disabled:opacity-50 whitespace-nowrap">Request Early Access</button>
          </form>
        )}
        <div className="flex items-center justify-center gap-6 text-xs text-[#A0A0A0]">
          <span>✓ No training required</span><span>✓ Live in days</span><span>✓ Any data format</span>
        </div>
        <div className="mt-16 pt-8 border-t border-[#2A2A2A]">
          <div className="flex items-center justify-center gap-2.5 mb-2">
            <img src="./logo.png" alt="AIntropy" className="w-6 h-6 rounded-lg object-cover mix-blend-lighten" />
            <span className="font-bold text-sm text-white"><span className="text-[#00D4FF]">AI</span>ntropy</span>
          </div>
          <p className="text-xs text-[#A0A0A0]/50">© 2026 AIntropy. The Hippocampus of Your Private AI.</p>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('mission')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id) }) },
      { threshold: 0.3 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white font-sans">
      <Nav activeSection={activeSection} />
      <div className="pt-14">
        <MissionSection />
        <ChallengeSection />
        <HumanCostSection />
        <VillainSection />
        <ActionSection />
        <FormatsSection />
        <ResultsSection />
        <CTASection />
      </div>
    </div>
  )
}
