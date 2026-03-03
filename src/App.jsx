import React, { useState } from 'react';
// Iconos
import { Monitor, Cpu, Wifi, HardDrive, Wrench, CheckCircle2, XCircle, AlertTriangle, Copy, Check, MessageCircle, Menu, X, Clock, Key } from 'lucide-react';

/* ========================================
   CONFIGURACIÓN GENERAL
   Cambia el nombre de tu negocio aquí abajo 👇
   ======================================== */
const businessName = "TechFix Solutions"; 
const phoneNumber = "525512345678"; // Tu número de WhatsApp

/* ========================================
  BASE DE DATOS DE SERVICIOS
  ======================================== */
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
    conditions: "Horario exclusivo: Lun a Vie de 8pm a 10pm. Necesitas internet estable."
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
    conditions: "Servicio disponible solo Fines de Semana. Respalda tu información antes."
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
    conditions: "Servicio disponible solo Fines de Semana. Se entrega el disco viejo en tu mano."
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
    conditions: "Servicio disponible solo Fines de Semana. Necesito modelo exacto para cotizar pieza."
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
    conditions: "Servicio a domicilio (Fines de Semana). Debes tener acceso físico al módem."
  },
  {
    id: 6,
    category: "SOFTWARE Y LICENCIAS",
    title: "Instalación de Software y Activación",
    subtitle: "Windows, Office 2021 y Paquetería",
    price: 250,
    priceNote: "+ costo de licencia",
    description: "Instalación profesional de paquetería básica, Office y activación de tu sistema operativo.",
    icon: <Key className="w-8 h-8 text-amber-500" />,
    includes: [
      "Instalación de Microsoft Office (2021/365)",
      "Activación o actualización de Windows 10/11",
      "Instalación de utilidades (Lectores PDF, WinRAR, etc.)",
      "Asesoría para compra de licencias originales a buen precio"
    ],
    excludes: [
      "Costo de la licencia original (se cotiza aparte)",
      "Recuperación de cuentas de correo bloqueadas",
      "Instalación de programas pesados (AutoCAD, Adobe)"
    ],
    conditions: "Servicio compatible con Soporte Remoto (Lun-Vie de 8pm a 10pm). Las licencias son permanentes o de suscripción según lo que elijas."
  }
];

// Texto actualizado con los nuevos horarios
const copyText = `¡Hola! Reactivo mis servicios de Soporte Técnico en ${businessName} 🚀

Si tu compu te está dando lata, aquí te dejo mi lista de servicios:

💻 Soporte Remoto ($350): Limpieza y optimización sin salir de casa.
🧹 Mantenimiento Físico ($500): Limpieza profunda y pasta térmica.
🚀 Cambio a SSD ($600 + pieza): Hago que tu laptop vieja vuele.
⚡ Aumento de RAM ($300 + pieza): Para multitarea fluida.
📡 Seguridad Wi-Fi ($250): Protege tu red de intrusos.
🔑 Software y Licencias ($250 + lic): Instalación de Office 2021 y Windows.

🕒 HORARIOS DE ATENCIÓN:
• Lunes a Viernes (8:00 PM - 10:00 PM): Exclusivo Soporte Remoto 👨‍💻
• Fines de Semana: Mantenimiento Físico y Hardware 🛠️

📩 Cotiza sin compromiso aquí mismo.`;

export default function App() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      
      {/* Navbar */}
      <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2 font-bold text-xl tracking-tight">
              <Cpu className="text-blue-400" />
              {/* Nombre del negocio dinámico */}
              <span>{businessName}</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#servicios" className="hover:text-blue-400 transition">Servicios</a>
              <a href="#compartir" className="hover:text-blue-400 transition">Promoción</a>
              <a href="#horarios" className="hover:text-blue-400 transition">Horarios</a>
              <a 
                href={`https://wa.me/${phoneNumber}`} 
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition"
              >
                <MessageCircle size={18} />
                Contactar
              </a>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white focus:outline-none">
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2 border-t border-slate-700">
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Servicios</a>
            <a href="#horarios" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white">Horarios</a>
            <a 
               href={`https://wa.me/${phoneNumber}`}
               className="block w-full text-center bg-blue-600 py-2 rounded-md text-white font-medium"
            >
              Contactar por WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            ¿Tu computadora está lenta o te da problemas?
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Servicio técnico profesional en <strong>{businessName}</strong>. Optimización remota por las noches y reparaciones físicas los fines de semana.
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

      {/* Servicios */}
      <main id="servicios" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Mis Servicios</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
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

              <div className="p-6 flex-grow">
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>

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
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r-md mt-4">
                    <div className="flex items-start">
                        <AlertTriangle size={16} className="text-amber-500 mt-0.5 mr-2 flex-shrink-0" />
                        <p className="text-xs text-amber-900 font-medium">{service.conditions}</p>
                    </div>
                </div>
              </div>

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

      {/* Nueva Sección de Horarios Visual */}
      <section id="horarios" className="bg-slate-100 py-16 px-4">
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <div className="bg-blue-600 text-white p-8 md:w-1/3 flex flex-col justify-center items-center text-center">
                    <Clock size={48} className="mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Horarios de Atención</h3>
                    <p className="text-blue-100">Organizados para brindarte el mejor servicio.</p>
                </div>
                <div className="p-8 md:w-2/3">
                    <div className="mb-6">
                        <h4 className="font-bold text-lg text-slate-900 mb-1">Lunes a Viernes</h4>
                        <p className="text-blue-600 font-bold text-xl">8:00 PM - 10:00 PM</p>
                        <p className="text-slate-500 text-sm">Exclusivo para Soporte Remoto (Software, Virus, Optimización)</p>
                    </div>
                    <div className="border-t border-slate-100 pt-6">
                        <h4 className="font-bold text-lg text-slate-900 mb-1">Sábados y Domingos</h4>
                        <p className="text-blue-600 font-bold text-xl">Horario Flexible / Previa Cita</p>
                        <p className="text-slate-500 text-sm">Dedicado a Mantenimiento Físico, Hardware y Reparaciones que requieren taller.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Compartir */}
      <section id="compartir" className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Te gustó mi trabajo? ¡Recomiéndame!</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Comparte este resumen con tus contactos. Ya incluye mis nuevos horarios.
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 font-bold text-xl text-white mb-6">
            <Cpu className="text-blue-500" />
            <span>{businessName}</span>
          </div>
          <p className="mb-2">Horarios: Lun-Vie (8pm-10pm Remoto) | Fines de Semana (Hardware).</p>
          <p className="mb-6">Servicio a domicilio y soporte remoto.</p>
          <p className="text-sm">© 2026 {businessName}. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}