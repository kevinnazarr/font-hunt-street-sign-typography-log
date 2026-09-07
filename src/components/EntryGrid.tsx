import type { Entry } from "../types/entry"
import type { Tag } from "../constants/tags"
import { EntryCard } from "./EntryCard"
type Props = { entries: Entry[]; filtered: Entry[]; filter: Tag|"All"; total: number; onDelete:(id:string)=>void; onEdit:(e:Entry)=>void; onClear:()=>void; focusFirst:()=>void }
export function EntryGrid({ entries, filtered, filter, total, onDelete, onEdit, onClear, focusFirst }: Props){
  if(entries.length===0){
    return (
      <div className="rounded-2xl border-2 border-dashed border-[#EAE8E3] bg-white p-8 sm:p-10 text-center">
        <div className="mx-auto h-12 w-12 rounded-2xl bg-[#F2F0EB] grid place-items-center text-xl">\u25CE</div>
        <h3 className="mt-3 text-[18px] font-bold tracking-[-0.02em]">Your field log is empty</h3>
        <p className="mt-1 text-[14px] text-[#6B6B74] max-w-[520px] mx-auto">Log your first street find above \u2014 a deli awning, a hand-painted truck, a neon ghost. Each card becomes a type specimen in its tagged font.</p>
        <button onClick={focusFirst} className="mt-4 rounded-full bg-[#1A1A1E] text-white px-5 py-2 text-[13px] font-semibold hover:bg-black transition">Add your first find</button>
      </div>
    )
  }
  if(filtered.length===0){
    return (
      <div className="rounded-2xl border border-[#EAE8E3] bg-white p-8 text-center">
        <p className="text-[14px] font-semibold">No {filter} finds yet</p>
        <p className="text-[13px] text-[#6B6B74]">Try another tag or clear the filter to see all {total} entries.</p>
        <button onClick={onClear} className="mt-3 rounded-full border border-[#1A1A1E] px-4 py-1.5 text-[13px] font-medium hover:bg-[#1A1A1E] hover:text-white transition">Clear filter</button>
      </div>
    )
  }
  return <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">{filtered.map(e=> <EntryCard key={e.id} entry={e} onDelete={onDelete} onEdit={onEdit} />)}</ul>
}
