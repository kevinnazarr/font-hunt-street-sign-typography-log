import { useEffect, useState } from "react"
import type { Entry } from "../types/entry"
import { loadEntries, saveEntries } from "../lib/storage"
export function useEntries(){
  const [entries,setEntries] = useState<Entry[]>(()=>loadEntries())
  useEffect(()=>{ saveEntries(entries) },[entries])
  const add = (e: Entry) => setEntries(v=>[e,...v])
  const remove = (id: string) => setEntries(v=>v.filter(e=>e.id!==id))
  const update = (id: string, patch: Partial<Entry>) => setEntries(v=>v.map(e=>e.id===id?{...e,...patch}:e))
  return { entries, add, remove, update }
}
