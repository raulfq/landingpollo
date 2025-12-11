
import React, { useState, useEffect } from "react";

export default function LandingSistemaAvicola() {
  // --- estados y datos (DEBEN ir aquí, antes del return) ---
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [animateIn, setAnimateIn] = useState(false);

  const imagenes = [
    "/carrusel1.png",
    "/carrusel2.png",
    "/carrusel3.png"
  ];

  // Cuando se abre el lightbox, activamos la animación.
  useEffect(() => {
    if (lightbox.open) {
      // pequeña pausa para garantizar la transición desde el DOM
      setAnimateIn(false);
      const t = setTimeout(() => setAnimateIn(true), 10);
      return () => clearTimeout(t);
    } else {
      setAnimateIn(false);
    }
  }, [lightbox.open, lightbox.index]);

  // Manejo teclado (Esc, flechas)
  useEffect(() => {
    function onKey(e) {
      if (!lightbox.open) return;
      if (e.key === "Escape") setLightbox({ ...lightbox, open: false });
      if (e.key === "ArrowLeft")
        setLightbox({
          ...lightbox,
          index: (lightbox.index - 1 + imagenes.length) % imagenes.length,
        });
      if (e.key === "ArrowRight")
        setLightbox({
          ...lightbox,
          index: (lightbox.index + 1) % imagenes.length,
        });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, imagenes.length]);

  return (

    
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
     <div className="w-20 h-20 rounded-lg flex items-center justify-center">
  <img src="/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
</div>


            <div>
              <h1 className="text-4xl font-bold text-red-600">Sistema Avícola</h1>

              <p className="text-sm text-gray-500">Administración simple para avícolas</p>
            </div>
          </div>
         <nav className="flex gap-4 items-center text-sm">
  {/* Links visibles solo en desktop */}
  <div className="hidden md:flex gap-6 ">
    <a href="#features" className="hover:underline text-black">Características</a>
    <a href="#precios" className="hover:underline text-black">Precios</a>
    <a href="#demo" className="hover:underline text-black">Demo</a>
  </div>

  {/* Botón Contactar (siempre visible) */}
  <a
    href="https://wa.me/51970338838?text=Estoy%20interesado%20en%20el%20sistema"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-orange-500 text-white rounded-md shadow-sm hover:opacity-95"
  >
    Contactar
  </a>
</nav>

         
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Vende más, controla todo con <span className="text-orange-600">Sistema Avícola</span></h2>
            <p className="mt-4 text-gray-600">Gestión de boletas, pagos, clientes y reportes en una sola plataforma. Ideal para avicolas pequeñas y medianas que quieren ahorrar tiempo y aumentar el control financiero.</p>

            <div className="mt-6 flex gap-3">
              <a href="#contacto" className="px-5 py-3 bg-orange-500 text-white rounded-md font-medium shadow">Solicitar demo</a>
              <a href="#precios" className="px-5 py-3 border border-orange-500 text-orange-600 rounded-md">Ver precios</a>
            </div>

            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li>✅ Registro rápido de boletas</li>
              <li>✅ Gestión de pagos y saldos</li>
              <li>✅ Metricas Diarias </li>
              <li>✅ Reportes exportables</li>
              <li>✅ Multiusuario y backups</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="border border-dashed border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold">Demo rápido</h3>
              <p className="text-sm text-gray-600 mt-2">Sube capturas o describe tu proceso para que preparemos una demo personalizada.</p>

              <div className="mt-4 grid gap-3">
                <div className="text-xs text-gray-500">Precio orientativo</div>
                <div className="text-2xl font-bold">S/ 69 / mes</div>
                <div className="text-sm text-gray-500">(Plan Basico )</div>

                <a href="#contacto" className="mt-3 inline-block px-4 py-2 bg-orange-500 text-white rounded-md">Solicitar demo</a>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mt-14">
          <h3 className="text-2xl font-semibold">Qué incluye</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Clientes y Boletas</h4>
              <p className="text-sm text-gray-600 mt-2">Registro de clientes, boletas con devoluciones, cálculo automático de totales y exportación a Excel.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Pagos y Saldos</h4>
              <p className="text-sm text-gray-600 mt-2">Historial de pagos, aplicación a boletas, gestión de saldos y reportes diarios.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Reportes y Backups</h4>
              <p className="text-sm text-gray-600 mt-2">Resumen diario, exportación, backup automático y limpieza de datos históricos.</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="precios" className="mt-14">
          <h3 className="text-2xl font-semibold">Planes</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-sm font-semibold text-gray-500">Básico</div>
              <div className="mt-4 text-3xl font-bold">S/ 69 <span className="text-base font-medium text-gray-500">/mes</span></div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• 1 usuario</li>
                <li>• Boletas , clientes y Pagos </li>
                <li>• Exportar Pdf y Excel</li>
                <li>• Lecturas Limitadas de Datos</li>
              </ul>
              <a className="mt-6 inline-block px-4 py-2 bg-orange-500 text-white rounded-md" href="#contacto">Contactar</a>
            </div>

            <div className="p-6 bg-white rounded-xl shadow border-2 border-orange-200">
              <div className="text-sm font-semibold text-gray-500">Pro</div>
              <div className="mt-4 text-3xl font-bold">S/ 95 <span className="text-base font-medium text-gray-500">/mes</span></div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• 2 usuarios </li>
                <li>• Boletas , Reportes y Pagos </li>
                <li>• Exportar Pdf y Excel</li>
                <li>• Soporte diario </li>
                <li>• Registros Ilimitados</li>
                <li>• Backup diarios </li>
              </ul>
              <a className="mt-6 inline-block px-4 py-2 bg-orange-600 text-white rounded-md" href="#contacto">Contratar</a>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-sm font-semibold text-gray-500">Enterprise</div>
              <div className="mt-4 text-3xl font-bold">A convenir</div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• Modulos personalizados </li>
                <li>• Hosting privado</li>
                <li>• Capacitación</li>
              </ul>
              <a className="mt-6 inline-block px-4 py-2 border border-orange-500 text-orange-600 rounded-md" href="#contacto">Pedir cotización</a>
            </div>
          </div>
        </section>

  

{/* CARRUSEL SIMPLE */
   {/* ====== CARRUSEL + LIGHTBOX ====== */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">Galería del sistema</h3>

          {/* Miniaturas */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 rounded-xl overflow-hidden shadow-lg">
            {imagenes.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`captura-${index}`}
                className="w-full h-64 object-cover bg-gray-200 cursor-pointer hover:scale-105 transition-transform duration-200"
                onClick={() => setLightbox({ open: true, index })}
              />
            ))}
          </div>

          {/* Lightbox overlay */}
          {lightbox.open && (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
              // cerrar si se hace click fuera de la imagen (target === currentTarget)
              onClick={(e) => {
                if (e.target === e.currentTarget) setLightbox({ ...lightbox, open: false });
              }}
            >
              {/* Cerrar */}
              <button
                className="absolute top-5 right-5 text-white text-3xl"
                onClick={() => setLightbox({ ...lightbox, open: false })}
                aria-label="Cerrar"
              >
                ✕
              </button>

              {/* Flecha izquierda */}
              <button
                className="absolute left-5 text-white text-4xl p-2"
                onClick={() =>
                  setLightbox({
                    open: true,
                    index: (lightbox.index - 1 + imagenes.length) % imagenes.length,
                  })
                }
                aria-label="Anterior"
              >
                ❮
              </button>

              {/* Imagen ampliada con animación scale */}
              <img
                src={imagenes[lightbox.index]}
                alt={`ampliada-${lightbox.index}`}
                className={
                  "max-w-[90%] max-h-[80%] rounded-lg shadow-xl transform transition-transform duration-300 " +
                  (animateIn ? "scale-100" : "scale-75")
                }
                // evitar que el click en la imagen cierre el overlay
                onClick={(e) => e.stopPropagation()}
              />

              {/* Flecha derecha */}
              <button
                className="absolute right-5 text-white text-4xl p-2"
                onClick={() =>
                  setLightbox({
                    open: true,
                    index: (lightbox.index + 1) % imagenes.length,
                  })
                }
                aria-label="Siguiente"
              >
                ❯
              </button>
            </div>
          )}
        </section>

        




{/* VIDEO */}
<section className="mt-16">
<h3 className="text-2xl font-semibold">Video demostrativo</h3>
<p className="text-gray-600 mt-2">Mira cómo funciona el sistema.</p>


<div className="mt-6 rounded-xl overflow-hidden shadow-lg bg-black">
<iframe
className="w-full h-72 md:h-96"
src="https://www.youtube.com/embed/N9ZLQJ9l1mE"
title="Demo Sistema Avícola"
allowFullScreen
></iframe>
</div>
</section>
        {/* Demo / Contact */}
        <section id="demo" className="mt-14 grid md:grid-cols-2 gap-6 items-start">
          <div className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Solicita una demo</h4>
            <p className="text-sm text-gray-600 mt-2">Rellena el formulario y coordinamos una demo remota.</p>

            <form className="mt-4 grid gap-3">
              <input placeholder="Nombre" className="border rounded px-3 py-2" />
              <input placeholder="Empresa / Granja" className="border rounded px-3 py-2" />
              <input placeholder="Teléfono o email" className="border rounded px-3 py-2" />
              <textarea placeholder="Mensaje (opcional)" className="border rounded px-3 py-2" ></textarea>
              <button type="submit" className="mt-2 px-4 py-2 bg-orange-500 text-white rounded-md">Enviar</button>
            </form>
          </div>

          <div id="contacto" className="bg-white p-6 rounded-lg shadow">
            <h4 className="font-semibold">Contacto</h4>
            <p className="text-sm text-gray-600 mt-2">O escríbenos a: <strong>raulfq4@gmail.com</strong></p>

            <div className="mt-4">
              <h5 className="font-medium">Integraciones</h5>
              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                <li>• Yape / Plin (pagos online)</li>
                <li>• Google Sheets / Drive</li>
                <li>• Exportar Excel / PDF</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="font-medium">¿Listo para empezar?</h5>
              <a className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white rounded-md" href="mailto:ventas@sistemaavicola.com?subject=Demo%20Sistema%20Av%C3%ADcola">Pedir demo por email</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-14 text-center text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Sistema Avícola — Hecho para Raulfqdev</div>
        </footer>
      </main>
    </div>
  );
}
