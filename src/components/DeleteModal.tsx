import { useEffect, useRef } from "react"
export function DeleteModal({ open, onClose, onConfirm }: { open: boolean; onClose:()=>void; onConfirm:()=>void }){
  const cancelRef = useRef<HTMLButtonElement>(null)
  useEffect(()=>{ if(open) cancelRef.current?.focus() },[open])
  if(!open) return null
  return (
    <div className="fixed inset-0 z-50 grid place-items-center p-4">
      <button aria-label="Close" onClick={onClose} className="absolute inset-0 bg-[#1A1A1E]/40 backdrop-blur-[2px]"/>
      <div role="dialog" aria-modal="true" aria-labelledby="delete-title" className="relative w-full max-w-[420px] rounded-[20px] bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.2)] border border-[#EAE8E3]" onKeyDown={e=>{ if(e.key==="Escape") onClose()}}>
        <h3 id="delete-title" className="text-[16px] font-bold">Delete this find?</h3>
        <p className="mt-1 text-[13px] text-[#6B6B74]">This removes the entry from your local log. This cannot be undone.</p>
        <div className="mt-5 flex justify-end gap-2">
          <button ref={cancelRef} onClick={onClose} className="rounded-full border border-[#EAE8E3] bg-white px-4 py-2 text-[13px] font-medium focus-visible:ring-2 focus-visible:ring-[#C45A2A]">Cancel</button>
          <button onClick={onConfirm} className="rounded-full bg-red-600 text-white px-5 py-2 text-[13px] font-semibold hover:bg-red-700 focus-visible:ring-2 focus-visible:ring-red-600">Delete</button>
        </div>
      </div>
    </div>
  )
}
