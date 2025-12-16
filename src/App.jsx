import { useState } from 'react'
import {
  Monitor,
  Cpu,
  Wifi,
  HardDrive,
  Wrench,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Copy,
  Check,
  MessageCircle,
  Menu,
  X
} from 'lucide-react'

import './App.css'

const services = [
  {
    id: 1,
    category: "SOPORTE REMOTO (Software)",
    title: "Diagnóstico y Optimización Remota",
    subtitle: "Vía RustDesk",
    price: 350,
    description: "¿Tu PC está lenta? Me conecto de forma segura para dejarla como nueva sin que salgas de casa.",
    icon: <Monitor className="w-8 h-8 text-blue-500" />,
    includes: [
      "Conexión Segura vía RustDesk",
      "Limpieza de archivos basura",
      "Optimización de inicio",
      "Escaneo de virus básicos",
      "Actualización de drivers"
    ],
    excludes: [
      "Fallas físicas",
      "Ransomware",
      "Licencias de pago"
    ],
    conditions: "Requiere internet estable."
  }
  // 👉 puedes seguir pegando los demás servicios aquí
]

const copyText = `¡Hola! Reactivo mis servicios de Soporte Técnico 🚀`

export default function App() {
  const [copied, setCopied] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const phoneNumber = "525512345678"

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <nav className="bg-slate-900 text-white p-4 flex justify-between">
        <span className="font-bold flex items-center gap-2">
          <Cpu className="text-blue-400" /> TechFix
        </span>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Servicios</h1>

        <button
          onClick={handleCopy}
          className="bg-slate-900 text-white px-4 py-2 rounded"
        >
          {copied ? "Copiado ✅" : "Copiar mensaje"}
        </button>
      </main>
    </div>
  )
}
