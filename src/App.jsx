import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

import React, { useState } from 'react';
import { Monitor, Cpu, Wifi, HardDrive, Wrench, CheckCircle2, XCircle, AlertTriangle, Copy, Check, MessageCircle, Menu, X } from 'lucide-react';

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
      "Conexión Segura vía RustDesk (Tú tienes el control)",
      "Limpieza de archivos basura y temporales",
      "Optimización de inicio",
      "Escaneo y eliminación de virus básicos",
      "Actualización de Drivers (Audio, Video, Wi-Fi)"
    ],
    excludes: [
      "Reparación de fallas físicas (hardware)",
      "Recuperación de archivos por ransomware",
      "Licencias de pago (Office/Windows)"
    ],
    conditions: "Necesitas internet estable. Si se detecta daño físico en disco duro, se cobra diagnóstico ($150)."
  },
  {
    id: 2,
    category: "MANTENIMIENTO (Limpieza)",
    title: "Mantenimiento Físico Preventivo",
    subtitle: "Laptop / PC",
    price: 500,
    description: "Ideal si tu equipo se calienta mucho, hace ruido o está muy sucio. Evita daños mayores.",
    icon: <Wrench className="w-8 h-8 text-green-500" />,
    includes: [
      "Limpieza interna profunda (ventiladores, placa)",
      "Cambio de Pasta Térmica de alta calidad",
      "Limpieza externa y de pantalla",
      "Lubricación de ventiladores"
    ],
    excludes: [
      "Reparación electrónica (soldaduras)",
      "Refacciones (ventiladores rotos)",
      "Formateo (servicio de software)"
    ],
    conditions: "Respalda tu información antes. Se revisará el estado físico al recibir el equipo."
  },
  {
    id: 3,
    category: "UPGRADE DISCO DURO",
    title: "El Renacimiento: Cambio a SSD",
    subtitle: "Velocidad Extrema (10x más rápido)",
    price: 600,
    priceNote: "+ costo de la pieza",
    description: "Hacemos que tu computadora vuele. El precio es por mano de obra.",
    icon: <HardDrive className="w-8 h-8 text-purple-500" />,
    includes: [
      "Instalación física del nuevo disco",
      "Instalación limpia de Windows 10/11",
      "Paquetería Básica (Office, PDF, Antivirus)",
      "Respaldo de archivos hasta 20GB"
    ],
    excludes: [
      "Costo del Disco SSD",
      "Reinstalación de programas pesados (Juegos, AutoCAD)",
      "Respaldo masivo (+20GB costo extra)"
    ],
    conditions: "Se entrega el disco viejo en tu mano. Mejora velocidad de carga, no gráficos para juegos."
  },
  {
    id: 4,
    category: "UPGRADE RAM",
    title: "Aumento de Velocidad: RAM",
    subtitle: "Multitarea fluida",
    price: 300,
    priceNote: "+ costo de la pieza",
    description: "¿Se traba al abrir muchas ventanas? Le falta memoria RAM. Precio por mano de obra.",
    icon: <Cpu className="w-8 h-8 text-orange-500" />,
    includes: [
      "Asesoría para comprar la RAM correcta",
      "Instalación física de la memoria",
      "Verificación en BIOS y Sistema",
      "Prueba de estabilidad"
    ],
    excludes: [
      "Costo de la Memoria RAM",
      "Reparación de slots dañados"
    ],
    conditions: "Necesito modelo exacto del equipo para verificar compatibilidad antes de comprar."
  },
  {
    id: 5,
    category: "REDES",
    title: "Configuración y Seguridad Wi-Fi",
    subtitle: "Anti-Intrusos",
    price: 250,
    description: "¿Internet lento o sospechas que te roban la señal? Asegura tu red doméstica.",
    icon: <Wifi className="w-8 h-8 text-cyan-500" />,
    includes: [
      "Cambio de Nombre (SSID) y Contraseña segura",
      "Expulsión de dispositivos intrusos",
      "Ocultar la red (opcional)",
      "Configuración básica de repetidores"
    ],
    excludes: [
      "Instalación de cableado",
      "Reparación de fallas del proveedor (Telmex/Izzi)"
    ],
    conditions: "Servicio exclusivo a domicilio. Debes tener acceso físico al módem."
  }
];

const copyText = `¡Hola! Reactivo mis servicios de Soporte Técnico para empezar el 2026 con todo 🚀
Si tu compu te está dando lata, aquí te dejo mi lista de servicios oficiales:

💻 Soporte Remoto ($350): Limpieza de virus y optimización sin que salgas de casa.
🧹 Mantenimiento Físico ($500): Limpieza profunda y pasta térmica.
🚀 Cambio a SSD ($600 + pieza): Hago que tu laptop vieja vuele (10x más rápida).
⚡ Aumento de RAM ($300 + pieza): Para que abras mil ventanas sin que se trabe.
📡 Seguridad Wi-Fi ($250): Cambio de contraseña y expulsión de vecinos colgados.

🔧 Horarios: Lunes a Jueves (Noches) y Fines de Semana.
📩 Cotiza sin compromiso.`;

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // IMPORTANTE: Cambia este número por tu número real
  const phoneNumber = "525512345678"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsAppClick = (serviceTitle) => {
    const message = `Hola, me interesa el servicio de: ${serviceTitle}`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      
      {/* Navigation */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 font-bold text-xl tracking-tight">
              <Cpu className="text-blue-400" />
              <span>Tech<span className="text-blue-400">Fix</span> Solutions</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="hover:text-blue-400 transition">Servicios</a>
              <a href="#compartir" className="hover:text-blue-400 transition">Promoción</a>
              <a 
                href={`https://wa.me/${phoneNumber}`} 
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
              >
                <MessageCircle size={18} />
                Contactar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2 border-t border-slate-700">
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Servicios</a>
            <a href="#compartir" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Promoción</a>
            <a 
               href={`https://wa.me/${phoneNumber}`}
               className="block w-full text-center bg-blue-600 py-2 rounded-md text-white font-medium"
            >
              Contactar por WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            ¿Tu computadora está lenta o te da problemas?
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Servicio técnico profesional, honesto y directo. Optimización, limpieza y upgrades para que tu equipo vuele.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#servicios" 
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition transform hover:-translate-y-1"
            >
              Ver Servicios
            </a>
            <a 
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Cotizar Ahora
            </a>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <main id="servicios" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Mis Servicios</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
              {/* Card Header */}
              <div className="p-6 border-b border-slate-100 bg-slate-50">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm border border-slate-100">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-2xl font-bold text-slate-800">${service.price}</span>
                    {service.priceNote && <span className="text-xs text-slate-500 font-medium">{service.priceNote}</span>}
                  </div>
                </div>
                <h3 className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">{service.category}</h3>
                <h4 className="text-xl font-bold text-slate-900 leading-tight mb-1">{service.title}</h4>
                {service.subtitle && <p className="text-sm text-slate-500">{service.subtitle}</p>}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow">
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Includes */}
                <div className="mb-4">
                  <h5 className="flex items-center text-sm font-bold text-slate-800 mb-2">
                    <CheckCircle2 size={16} className="text-green-500 mr-2" /> LO QUE INCLUYE:
                  </h5>
                  <ul className="space-y-1">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-600 pl-6 relative">
                        <span className="absolute left-1 top-1.5 w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excludes */}
                <div className="mb-4">
                  <h5 className="flex items-center text-sm font-bold text-slate-800 mb-2">
                    <XCircle size={16} className="text-red-500 mr-2" /> LO QUE NO INCLUYE:
                  </h5>
                  <ul className="space-y-1">
                    {service.excludes.map((item, idx) => (
                      <li key={idx} className="text-sm text-slate-500 pl-6 opacity-80">
                         - {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Conditions */}
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-md mt-4">
                    <div className="flex items-start">
                        <AlertTriangle size={16} className="text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-xs text-amber-900 font-medium">{service.conditions}</p>
                    </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-100">
                <button 
                  onClick={() => handleWhatsAppClick(service.title)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2 rounded-lg transition flex justify-center items-center gap-2"
                >
                  <MessageCircle size={18} />
                  Agendar este servicio
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Share Section (Bonus) */}
      <section id="compartir" className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Te gustó mi trabajo? ¡Recomiéndame!</h2>
          <p className="text-blue-100 mb-8 text-lg">
            He preparado un resumen de mis servicios para que puedas compartirlo fácilmente con tus amigos o grupos de WhatsApp.
          </p>

          <div className="bg-white text-slate-800 rounded-xl p-6 shadow-xl text-left relative mx-auto max-w-lg">
            <pre className="whitespace-pre-wrap font-sans text-sm md:text-base text-slate-700 bg-slate-50 p-4 rounded-lg border border-slate-200 mb-4 h-64 overflow-y-auto">
              {copyText}
            </pre>
            
            <button 
              onClick={handleCopy}
              className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition duration-200 ${copied ? 'bg-green-500 text-white' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              {copied ? (
                <>
                  <Check size={20} />
                  ¡Mensaje Copiado!
                </>
              ) : (
                <>
                  <Copy size={20} />
                  Copiar Mensaje al Portapapeles
                </>
              )}
            </button>
            <p className="text-xs text-center text-slate-400 mt-2">Listo para pegar en WhatsApp</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 font-bold text-xl text-white mb-6">
            <Cpu className="text-blue-500" />
            <span>TechFix Solutions</span>
          </div>
          <p className="mb-2">Horarios: Lunes a Jueves (Noches) y Fines de Semana.</p>
          <p className="mb-6">Servicio a domicilio y soporte remoto.</p>
          <p className="text-sm">© 2026 TechFix Solutions. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}