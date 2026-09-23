export default function StatusMessage({ type, text }) {
  if (!text) return null

  const styles =
    type === 'error'
      ? 'border-red-400/35 bg-red-500/10 text-red-200'
      : type === 'success'
        ? 'border-[#FFD84D]/35 bg-[#FFD84D]/10 text-[#FFE477]'
        : 'border-[#249BFF]/30 bg-[#06133D]/80 text-[#DDEBFF]'

  return (
    <div className={`rounded-2xl border px-4 py-3 text-sm backdrop-blur-md ${styles}`}>
      {text}
    </div>
  )
}
