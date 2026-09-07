import { useEffect, useRef, useState } from "react"
import { TAGS, type Tag } from "../constants/tags"
import { FONT } from "../lib/fonts"
import { todayISO } from "../lib/date"
import type { Entry } from "../types/entry"

export function HuntForm({ count, editing, onAdd, onUpdate, onCancel }: { count:number; editing: Entry|null; onAdd:(e:Entry)=>void; onUpdate:(id:string,p:Partial<Entry>)=>void; onCancel:()=>void }){
  const [nickname,setNickname]=useState("")
  const [location,setLocation]=useState("")
  const [tag,setTag]=useState<Tag|"">("")
  const [mood,setMood]=useState("")
  const [date,setDate]=useState(todayISO())
  const [touched,setTouched]=useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  useEffect(()=>{
    if(editing){ setNickname(editing.nickname); setLocation(editing.location); setTag(editing.tag); setMood(editing.mood); setDate(editing.date); setTouched(false); formRef.current?.scrollIntoView({behavior:"smooth",block:"center"})
    } else { setNickname(""); setLocation(""); setTag(""); setMood(""); setDate(todayISO()); setTouched(false) }
  },[editing])
  const errs={ nickname:!nickname.trim()?"Nickname is required":"", location:!location.trim()?"Location or context is required":"", tag:!tag?"Pick a style tag":"", date:!date?"Date is required":"" }
  const valid=!errs.nickname && !errs.location && !errs.tag && !errs.date
  function handleSubmit(e: React.FormEvent){ e.preventDefault(); setTouched(true); if(!valid) return; if(editing){ onUpdate(editing.id,{nickname:nickname.trim(),location:location.trim(),tag:tag as Tag,mood:mood.trim(),date}); } else { const ent:Entry={id:Math.random().toString(36).slice(2,9),nickname:nickname.trim(),location:location.trim(),tag:tag as Tag,mood:mood.trim(),date,createdAt:Date.now()}; onAdd(ent); setNickname(""); setLocation(""); setTag(""); setMood(""); setDate(todayISO()); } setTouched(false) }
  return (
    <section aria-labelledby="log-form-heading" className="mt-6 rounded-2xl border border-[var(--line)] bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h2 id="log-form-heading" className="text-[13px] tracking-[0.14em] font-bold">{editing?"EDIT FIND":"LOG A FIND"}</h2>
        <span className="text-[11px] text-[#6B6B74]">{editing?"Update and save changes":"All fields marked * are required \u00b7 No images \u00b7 No backend"}</span>
      </div>
      <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5">
          <span className="text-[11px] tracking-[0.12em] font-semibold">NICKNAME *</span>
           <input value={nickname} onChange={e=>setNickname(e.target.value)} placeholder="e.g. Neon Bodega Script" aria-invalid={touched && !!errs.nickname} aria-describedby={touched && errs.nickname ? "err-nickname":""} className="rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2.5 text-[14px] outline-none focus:ring-2 focus:ring-[#C45A2A] focus:border-[#C45A2A]"/>
           {touched && errs.nickname && <span id="err-nickname" className="text-[12px] text-red-600">{errs.nickname}</span>}
         </label>
         <label className="grid gap-1.5">
           <span className="text-[11px] tracking-[0.12em] font-semibold">LOCATION / CONTEXT *</span>
           <input value={location} onChange={e=>setLocation(e.target.value)} placeholder="e.g. Corner of 5th & Main \u2014 deli awning" aria-invalid={touched && !!errs.location} aria-describedby={touched && errs.location ? "err-location":""} className="rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2.5 text-[14px] outline-none focus:ring-2 focus:ring-[#C45A2A]"/>
          {touched && errs.location && <span id="err-location" className="text-[12px] text-red-600">{errs.location}</span>}
        </label>
        <fieldset className="sm:col-span-2 grid gap-2">
          <legend className="text-[11px] tracking-[0.12em] font-semibold">STYLE TAG *</legend>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Style tag">
            {TAGS.map(t=>{ const active=tag===t; return (<label key={t} className={`cursor-pointer rounded-full border px-3.5 py-2 text-[13px] font-medium transition ${active?"bg-[#C45A2A] text-white border-[#C45A2A]":"bg-[var(--paper)] border-[var(--line)] hover:border-[#C45A2A]/40"}`}><input type="radio" name="tag" value={t} checked={active} onChange={()=>setTag(t)} className="sr-only"/><span style={!active?{fontFamily:FONT[t]}:undefined}>{t}</span></label>)})}
          </div>
          {touched && errs.tag && <span className="text-[12px] text-red-600">{errs.tag}</span>}
        </fieldset>
        <label className="grid gap-1.5">
          <span className="text-[11px] tracking-[0.12em] font-semibold">MOOD NOTE <span className="font-normal normal-case tracking-normal text-[#6B6B74]">(optional \u00b7 90\u2013180 chars is sweet spot)</span></span>
           <textarea value={mood} onChange={e=>setMood(e.target.value)} rows={2} placeholder="e.g. Warm, condensed, 1970s grocery nostalgia" className="rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2.5 text-[14px] outline-none focus:ring-2 focus:ring-[#C45A2A] resize-none"/>
           <span className="text-[11px] text-[#6B6B74]">{mood.length} chars {mood.length>0 && mood.length<90?"\u00b7 a bit more helps":mood.length>180?"\u00b7 nice and evocative":""}</span>
         </label>
         <label className="grid gap-1.5">
           <span className="text-[11px] tracking-[0.12em] font-semibold">DATE SPOTTED *</span>
           <input type="date" value={date} onChange={e=>setDate(e.target.value)} max={todayISO()} aria-invalid={touched && !!errs.date} className="rounded-xl border border-[var(--line)] bg-[var(--paper)] px-3 py-2.5 text-[14px] outline-none focus:ring-2 focus:ring-[#C45A2A]"/>
          {touched && errs.date && <span className="text-[12px] text-red-600">{errs.date}</span>}
        </label>
        <div className="sm:col-span-2 flex flex-wrap items-center gap-3 pt-1">
          <button type="submit" onClick={()=>setTouched(true)} className={`rounded-full px-6 py-2.5 text-[14px] font-semibold text-white transition ${valid?"bg-[#C45A2A] hover:bg-[#A94D24] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#C45A2A]":"bg-[#C45A2A]/50 cursor-not-allowed"}`}>{editing?"Save changes":"Add to log"}</button>
           {editing ? <button type="button" onClick={onCancel} className="rounded-full border border-[var(--line)] px-5 py-2.5 text-[13px] font-medium hover:bg-[#F2F0EB] transition">Cancel</button> : <span className="text-[12px] text-[#6B6B74]">{count===0?"Your first find starts the collection.":"Newest appears first."}</span>}
        </div>
      </form>
    </section>
  )
}
