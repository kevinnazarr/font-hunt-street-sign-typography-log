export function Toast({ msg }: { msg: string|null }){
  if(!msg) return null
  return <div role="status" className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-[#1A1A1E] text-white px-4 py-2 text-[13px] shadow-lg">{msg}</div>
}
