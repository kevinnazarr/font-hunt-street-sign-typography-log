import { TAGS, type Tag } from "../constants/tags"
type Props = { filter: Tag|"All"; counts: Record<string,number>; filteredCount: number; onChange:(f:Tag|"All")=>void }
export function FilterBar({ filter, counts, filteredCount, onChange }: Props){
  return (
    <div className="sticky top-[57px] z-20 -mx-4 sm:mx-0 mt-6 bg-[var(--paper)]/90 backdrop-blur border-y sm:border sm:rounded-xl border-[var(--line)] px-3 sm:px-4 py-3 flex flex-wrap items-center gap-3">
      <label htmlFor="fh-filter" className="text-[11px] tracking-[0.12em] font-bold shrink-0">FILTER</label>
      <select id="fh-filter" aria-label="Filter by style" value={filter} onChange={e=>onChange(e.target.value as Tag|"All")} className="rounded-full border border-[var(--line)] bg-white px-3.5 py-1.5 text-[13px] font-medium focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]">
        {(["All", ...TAGS] as const).map(f=> <option key={f} value={f}>{f} ({counts[f] ?? 0})</option>)}
      </select>
      <span className="text-[11px] text-[#6B6B74]">{filteredCount} shown</span>
      {filter!=="All" && <button onClick={()=>onChange("All")} className="text-[11px] underline underline-offset-4 hover:text-[#1A1A1E]">Clear</button>}
    </div>
  )
}
