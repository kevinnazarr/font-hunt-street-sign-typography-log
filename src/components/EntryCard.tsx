import { FONT } from "../lib/fonts"
import { fmtDate } from "../lib/date"
import type { Entry } from "../types/entry"
export function EntryCard({ entry, onDelete, onEdit }: { entry: Entry; onDelete:(id:string)=>void; onEdit:(e:Entry)=>void }){
  return (
    <li className="group relative flex flex-col rounded-2xl border border-[#EAE8E3] bg-white p-5 shadow-[0_6px_16px_rgba(26,26,30,0.06)] hover:shadow-[0_10px_24px_rgba(26,26,30,0.10)] transition min-h-[186px]">
      <div className="flex items-start justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F2F0EB] border border-[#EAE8E3] px-2.5 py-1 text-[11px] font-bold tracking-[0.08em]">
          <span className="h-2 w-2 rounded-full bg-[#C45A2A]"/>{entry.tag}
        </span>
        <span className="text-[11px] text-[#6B6B74]">{fmtDate(entry.date)}</span>
      </div>
      <h3 style={{fontFamily: FONT[entry.tag]}} className="mt-3 text-[22px] leading-[1.05] tracking-[-0.02em] break-words">{entry.nickname}</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-[#2B2B30] line-clamp-2">{entry.location}</p>
      {entry.mood && <p className="mt-2 text-[13px] italic text-[#6B6B74] line-clamp-3">\u201c{entry.mood}\u201d</p>}
      <div className="mt-auto pt-4 flex items-center justify-between">
        <span className="text-[11px] tracking-[0.08em] text-[#6B6B74]">SPECIMEN \u00b7 {entry.tag.toUpperCase()}</span>
        <span className="flex items-center gap-1">
          <button onClick={()=>onEdit(entry)} aria-label={`Edit ${entry.nickname}`} className="rounded-full border border-transparent hover:border-[#EAE8E3] hover:bg-[#FDFCF8] p-1.5 text-[#6B6B74] hover:text-[#1A1A1E] focus-visible:ring-2 focus-visible:ring-[#C45A2A] transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M11 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button onClick={()=>onDelete(entry.id)} aria-label={`Delete ${entry.nickname}`} className="rounded-full border border-transparent hover:border-[#EAE8E3] hover:bg-[#FDFCF8] p-1.5 text-[#6B6B74] hover:text-red-600 focus-visible:ring-2 focus-visible:ring-[#C45A2A] transition">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>
          </button>
        </span>
      </div>
    </li>
  )
}
