import { TAGS } from "../constants/tags"
import { FONT } from "../lib/fonts"
export function Hero(){
  return (
    <div className="mx-auto max-w-5xl px-6 pt-8">
      <div className="rounded-2xl border border-[var(--line)] bg-white p-6 sm:p-8 flex flex-col lg:flex-row gap-6 items-start justify-between overflow-hidden">
        <div className="max-w-[640px]">
          <p className="text-[11px] tracking-[0.16em] font-bold text-[#C45A2A]">FIELD NOTEBOOK · SPECIMEN LOG</p>
          <h2 className="mt-2 text-[32px] sm:text-[40px] font-bold tracking-[-0.04em] leading-[0.95]">Log the lettering<br/>you spot in the wild.</h2>
          <p className="mt-3 text-[14px] leading-relaxed text-[#2B2B30] max-w-[520px]">A pocket log for sign painters, stencil lovers and type hunters. Capture the name, place, vibe — each card renders in its mapped Google Font specimen.</p>
          <div className="mt-4 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full bg-white border border-[var(--line)] px-3 py-1">Offline-first · localStorage</span>
            <span className="rounded-full bg-white border border-[var(--line)] px-3 py-1">7 style tags → 6 display fonts + neutral</span>
          </div>
        </div>
        <div className="hidden lg:block text-right shrink-0">
          <div className="inline-grid grid-cols-2 gap-2">
            {TAGS.slice(0,6).map(t=> <span key={t} style={{fontFamily: FONT[t]}} className="rounded-xl bg-white border border-[var(--line)] px-3 py-2 text-[13px] leading-none">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  )
}
