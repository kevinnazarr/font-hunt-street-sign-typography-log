import { TAGS, type Tag } from "../constants/tags"
type Props = { filter: Tag|"All"; counts: Record<string,number>; filteredCount: number; onChange:(f:Tag|"All")=>void }
export function FilterBar({ filter, counts, filteredCount, onChange }: Props){
  return (
    <div className="sticky top-[57px] z-20 -mx-4 sm:mx-0 mt-6 bg-[#FDFCF8]/90 backdrop-blur border-y sm:border sm:rounded-full border-[#EAE8E3] px-2 sm:px-3 py-2 flex items-center gap-2 overflow-x-auto">
      <span className="hidden sm:inline text-[11px] tracking-[0.12em] font-bold pl-2 shrink-0">FILTER</span>
      {(["All", ...TAGS] as const).map(f=>{
        const active = filter===f
        return (
          <button key={f} onClick={()=>onChange(f as Tag|"All")} aria-pressed={active} className={`shrink-0 rounded-full px-3.5 py-1.5 text-[13px] font-medium border transition ${active ? "bg-[#1A1A1E] text-white border-[#1A1A1E]" : "bg-white border-[#EAE8E3] hover:border-[#1A1A1E]/20"}`}>
            {f} <span className={`ml-1 rounded-full px-1.5 py-0.5 text-[11px] ${active ? "bg-white/15" : "bg-[#F2F0EB]"}`}>{counts[f] ?? 0}</span>
          </button>
        )
      })}
      <div className="ml-auto hidden sm:flex items-center gap-2 text-[11px] text-[#6B6B74] pl-2 shrink-0">
        <span>{filteredCount} shown</span>
        {filter!=="All" && <button onClick={()=>onChange("All")} className="underline underline-offset-4 hover:text-[#1A1A1E]">Clear</button>}
      </div>
    </div>
  )
}
