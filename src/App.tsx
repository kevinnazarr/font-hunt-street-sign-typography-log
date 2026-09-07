import { useEffect, useMemo, useRef, useState } from "react"
import { TAGS, type Tag } from "./constants/tags"
import { useEntries } from "./hooks/useEntries"
import type { Entry } from "./types/entry"
import { Header } from "./components/Header"
import { Hero } from "./components/Hero"
import { HuntForm } from "./components/HuntForm"
import { FilterBar } from "./components/FilterBar"
import { EntryGrid } from "./components/EntryGrid"
import { DeleteModal } from "./components/DeleteModal"
import { Toast } from "./components/Toast"
import { Footer } from "./components/Footer"

export default function App(){
  const { entries, add, remove, update } = useEntries()
  const [filter,setFilter] = useState<Tag|"All">("All")
  const [toast,setToast] = useState<string|null>(null)
  const [pendingDelete,setPendingDelete] = useState<string|null>(null)
  const [editing,setEditing] = useState<Entry|null>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const counts = useMemo(()=>{ const m: Record<string,number> = { All: entries.length }; for(const t of TAGS) m[t]=entries.filter(e=>e.tag===t).length; return m },[entries])
  const filtered = useMemo(()=> filter==="All" ? entries : entries.filter(e=>e.tag===filter),[entries,filter])
  useEffect(()=>{ if(toast){ const t=setTimeout(()=>setToast(null),2200); return ()=>clearTimeout(t)}},[toast])
  function handleAdd(e: Entry){ add(e); setToast("Added to field log \u00b7 "+e.nickname) }
  function handleUpdate(id:string,p:Partial<Entry>){ update(id,p); setEditing(null); setToast("Updated \u00b7 "+(p.nickname||"find")) }
  function handleDelete(){ if(!pendingDelete) return; remove(pendingDelete); setPendingDelete(null); setToast("Entry removed") }
  return (
    <div className="min-h-screen bg-[var(--paper)] text-[#1A1A1E] selection:bg-[#C45A2A]/20">
      <Header count={entries.length} />
      <Hero />
      <main className="mx-auto max-w-5xl px-6 pb-12">
        <div ref={formRef}><HuntForm count={entries.length} editing={editing} onAdd={handleAdd} onUpdate={handleUpdate} onCancel={()=>setEditing(null)} /></div>
        <FilterBar filter={filter} counts={counts} filteredCount={filtered.length} onChange={setFilter} />
        <section aria-live="polite" className="mt-5">
          <EntryGrid entries={entries} filtered={filtered} filter={filter} total={entries.length} onDelete={setPendingDelete} onEdit={setEditing} onClear={()=>setFilter("All")} focusFirst={()=>formRef.current?.querySelector<HTMLInputElement>('input')?.focus()} />
        </section>
      </main>
      <Footer count={entries.length} />
      <DeleteModal open={!!pendingDelete} onClose={()=>setPendingDelete(null)} onConfirm={handleDelete} />
      <Toast msg={toast} />
    </div>
  )
}
