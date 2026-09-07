export function Header({ count }: { count: number }){
  return (
    <header className="sticky top-0 z-30 bg-[var(--paper)]/90 backdrop-blur border-b border-[var(--line)]">
      <div className="mx-auto max-w-5xl px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-[#1A1A1E] text-[#FDFCF8] grid place-items-center font-bold text-[13px] tracking-[0.12em]">FH</div>
          <div>
            <h1 className="text-[18px] font-bold tracking-[-0.02em] leading-none">FONT HUNT</h1>
            <p className="text-[11px] tracking-[0.14em] font-semibold text-[#6B6B74]">STREET SIGN TYPOGRAPHY LOG</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[12px]">
          <span className="hidden sm:inline text-[#6B6B74]">{new Date().toLocaleDateString("en-US",{weekday:"short", month:"short", day:"numeric", year:"numeric"})}</span>
          <span className="rounded-full bg-[#1A1A1E] text-white px-3 py-1.5 font-semibold">{count} {count===1?"find":"finds"} logged</span>
        </div>
      </div>
    </header>
  )
}
