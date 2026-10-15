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
    <div className="fixed bottom-5 right-4 z-[60] sm:bottom-7 sm:right-7">
      {open && (
        <div className="glass-float absolute bottom-full right-0 mb-3 w-52 overflow-hidden rounded-2xl p-1.5">
          <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-widest text-slate-400">{t.language.select}</p>
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => selectLanguage(item.code)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                item.code === language ? 'bg-white text-[#0b1220]' : 'text-slate-600 hover:bg-white/70'
              }`}
            >
              <span className="text-base leading-none" aria-hidden="true">{item.flag}</span>
              <span className="flex-1 font-semibold">{item.label}</span>
              {item.code === language && <Check size={15} className="text-blue-600" />}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-label={t.language.label}
        className="glass-float flex h-11 items-center gap-2 rounded-full px-4 text-sm text-slate-700 transition-colors hover:text-blue-700"
      >
        <Languages size={16} className="text-blue-600" />
        <span aria-hidden="true">{selected.flag}</span>
        <span className="font-semibold">{selected.label}</span>
        <ChevronUp size={15} className={`text-slate-400 transition-transform ${open ? '' : 'rotate-180'}`} />
      </button>
    </div>
  )
}
