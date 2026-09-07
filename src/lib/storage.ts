import type { Entry } from "../types/entry"
export const STORAGE_KEY = "font-hunt-entries"
export function loadEntries(): Entry[] {
  try { const raw = localStorage.getItem(STORAGE_KEY); return raw ? JSON.parse(raw) : [] } catch { return [] }
}
export function saveEntries(v: Entry[]) { localStorage.setItem(STORAGE_KEY, JSON.stringify(v)) }
