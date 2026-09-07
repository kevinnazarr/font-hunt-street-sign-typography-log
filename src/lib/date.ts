export const todayISO = () => new Date().toISOString().slice(0,10)
export const fmtDate = (iso: string) => new Date(iso+"T12:00:00").toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})
