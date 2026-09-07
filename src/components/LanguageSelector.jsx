import { useState } from 'react'
import { Check, ChevronUp, Languages } from 'lucide-react'
import { languages, useLanguage } from '../i18n'

export default function LanguageSelector() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const selected = languages.find((item) => item.code === language)

  const selectLanguage = (code) => {
    setLanguage(code)
    setOpen(false)
  }

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-7 z-[60]">
      {open && (
        <div className="absolute bottom-full right-0 mb-3 w-52 overflow-hidden rounded-xl border border-white/10 bg-[#10101f]/95 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">{t.language.select}</p>
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => selectLanguage(item.code)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                item.code === language ? 'bg-purple-500/15 text-white' : 'text-slate-300 hover:bg-white/[0.06] hover:text-white'
              }`}
            >
              <span className="text-base leading-none" aria-hidden="true">{item.flag}</span>
              <span className="flex-1 font-medium">{item.label}</span>
              {item.code === language && <Check size={15} className="text-cyan-400" />}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={t.language.label}
        className="flex h-11 items-center gap-2 rounded-lg border border-white/10 bg-[#10101f]/95 px-3 text-sm text-slate-200 shadow-xl shadow-black/40 backdrop-blur-xl transition-colors hover:border-purple-500/40 hover:text-white"
      >
        <Languages size={16} className="text-cyan-400" />
        <span aria-hidden="true">{selected.flag}</span>
        <span className="font-medium">{selected.label}</span>
        <ChevronUp size={15} className={`text-slate-400 transition-transform ${open ? '' : 'rotate-180'}`} />
      </button>
    </div>
  )
}