import React, { useState, useEffect } from "react";

export default function LandingSistemaAvicola() {

  // --- Estados ---
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [animateIn, setAnimateIn] = useState(false);

  // --- Imágenes ---
  const imagenes = [
    "/carrusel1.png",
    "/carrusel2.png",
    "/carrusel3.png"
  ];

  // --- Animación lightbox ---
  useEffect(() => {
    if (lightbox.open) {
      setAnimateIn(false);
      const t = setTimeout(() => setAnimateIn(true), 10);
      return () => clearTimeout(t);
    } else {
      setAnimateIn(false);
    }
  }, [lightbox.open, lightbox.index]);

  // --- Manejo de teclado ---
  useEffect(() => {
    function onKey(e) {
      if (!lightbox.open) return;
      if (e.key === "Escape") setLightbox({ ...lightbox, open: false });
      if (e.key === "ArrowLeft") setLightbox({ ...lightbox, index: (lightbox.index - 1 + imagenes.length) % imagenes.length });
      if (e.key === "ArrowRight") setLightbox({ ...lightbox, index: (lightbox.index + 1) % imagenes.length });
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, imagenes.length]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 relative">

      {/* ================= HEADER ================= */}
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
            <div className="hidden md:flex gap-6">
              <a href="#features" className="hover:underline text-black">Características</a>
              <a href="#precios" className="hover:underline text-black">Precios</a>
              <a href="#demo" className="hover:underline text-black">Demo</a>
            </div>
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

      {/* ================= MAIN ================= */}
      <main className="max-w-7xl mx-auto px-6 py-12">

        {/* ================= HERO ================= */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Vende más, controla todo con <span className="text-orange-600">Sistema Avícola</span>
            </h2>
            <p className="mt-4 text-gray-600">
              Gestión de boletas, pagos, clientes y reportes en una sola plataforma.
              Ideal para avícolas que quieren ahorrar tiempo y aumentar el control financiero.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#contacto" className="px-5 py-3 bg-orange-500 text-white rounded-md font-medium shadow">Solicitar demo</a>
              <a href="#precios" className="px-5 py-3 border border-orange-500 text-orange-600 rounded-md">Ver precios</a>
            </div>
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700">
              <li>✅ Registro rápido de boletas</li>
              <li>✅ Gestión de pagos y saldos</li>
              <li>✅ Métricas diarias</li>
              <li>✅ Reportes exportables</li>
              <li>✅ Multiusuario y backups</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="border border-dashed border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold">Demo rápido</h3>
              <p className="text-sm text-gray-600 mt-2">
                Sube capturas o describe tu proceso y armamos una demo personalizada.
              </p>
              <div className="mt-4 grid gap-3">
                <div className="text-xs text-gray-500">Precio orientativo</div>
                <div className="text-2xl font-bold">S/ 69 / mes</div>
                <div className="text-sm text-gray-500">(Plan Básico)</div>
                <a href="#contacto" className="mt-3 inline-block px-4 py-2 bg-orange-500 text-white rounded-md">
                  Solicitar demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section id="features" className="mt-14">
          <h3 className="text-2xl font-semibold">Qué incluye</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Clientes y Boletas</h4>
              <p className="text-sm text-gray-600 mt-2">Registro de clientes, boletas con devoluciones y exportación a Excel.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Pagos y Saldos</h4>
              <p className="text-sm text-gray-600 mt-2">Historial de pagos, gestión de saldos y reportes diarios.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-semibold">Reportes y Backups</h4>
              <p className="text-sm text-gray-600 mt-2">Exportación, backup automático y limpieza de datos antiguos.</p>
            </div>
          </div>
        </section>

        {/* ================= PRECIOS ================= */}
        <section id="precios" className="mt-14">
          <h3 className="text-2xl font-semibold">Planes</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* Básico */}
            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-sm font-semibold text-gray-500">Básico</div>
              <div className="mt-4 text-3xl font-bold">S/ 69 <span className="text-base font-medium text-gray-500">/mes</span></div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• 1 usuario</li>
                <li>• Boletas, clientes y pagos</li>
                <li>• Exportar PDF y Excel</li>
                <li>• Lecturas limitadas</li>
              </ul>
              <a className="mt-6 inline-block px-4 py-2 bg-orange-500 text-white rounded-md" href="#contacto">Contactar</a>
            </div>
            {/* Pro */}
            <div className="p-6 bg-white rounded-xl shadow border-2 border-orange-200">
              <div className="text-sm font-semibold text-gray-500">Pro</div>
              <div className="mt-4 text-3xl font-bold">S/ 95 <span className="text-base font-medium text-gray-500">/mes</span></div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• 2 usuarios</li>
                <li>• Boletas, reportes y pagos</li>
                <li>• Exportar PDF y Excel</li>
                <li>• Soporte diario</li>
                <li>• Registros ilimitados</li>
                <li>• Backups diarios</li>
              </ul>
              <a className="mt-6 inline-block px-4 py-2 bg-orange-600 text-white rounded-md" href="#contacto">Contratar</a>
            </div>
            {/* Enterprise */}
            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-sm font-semibold text-gray-500">Enterprise</div>
              <div className="mt-4 text-3xl font-bold">A convenir</div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• Módulos personalizados</li>
                <li>• Hosting privado</li>
                <li>• Capacitación</li>
              </ul>
              <a className="mt-6 inline-block px-4 py-2 border border-orange-500 text-orange-600 rounded-md" href="#contacto">Pedir cotización</a>
            </div>
          </div>
        </section>

        {/* ================= CARRUSEL ================= */}
        <section className="mt-16">
          <h3 className="text-2xl font-semibold">Galería del sistema</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 rounded-xl overflow-hidden shadow-lg">
            {imagenes.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`captura-${index}`}
                className="w-full h-64 object-cover bg-gray-200 cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setLightbox({ open: true, index })}
              />
            ))}
          </div>
        </section>
{/* ================= VIDEO ================= */}
<section className="mt-16" id="demo">
  <h3 className="text-2xl font-semibold text-gray-900">Video demostrativo</h3>
  <p className="text-gray-700 mt-2">Mira cómo funciona el sistema.</p>

  <div className="mt-6 flex justify-center">
    {/* Contenedor rectangular con ancho máximo y altura limitada */}
    <div
      className="relative w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg"
      style={{
        paddingTop: "56.25%", // 16:9
        maxHeight: "480px" // altura máxima en píxeles
      }}
    >
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src="https://www.youtube.com/embed/msci2FRJDd4?si=_9LPgXrmR4lolD3M&vq=hd720"
        title="Demo Sistema Avícola"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</section>





      </main>
{/* ================= FOOTER ================= */}
<footer className="bg-white text-gray-900 mt-16 border-t border-orange-300">
  <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
    {/* Formulario */}
    <div>
      <h4 className="text-xl font-semibold mb-4 text-orange-600">Contacto</h4>
      <p className="text-gray-700 mb-4">Déjanos tu mensaje y nos pondremos en contacto contigo.</p>
      <form className="flex flex-col gap-3" id="contacto">
        <input type="text" placeholder="Nombre" className="p-2 rounded-md border border-gray-300"/>
        <input type="celular" placeholder="Celular" className="p-2 rounded-md border border-gray-300"/>
        <textarea placeholder="Mensaje" className="p-2 rounded-md border border-gray-300"></textarea>
        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md mt-2">Enviar</button>
      </form>
    </div>
    {/* Integraciones */}
    <div>
      <h4 className="text-xl font-semibold mb-4 text-orange-600">Integraciones</h4>
      <p className="text-gray-700 mb-4">
        Compatible con  Excel, PDF y backups automáticos. Ideal para avícolas que desean centralizar toda su gestión.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Exportación a Excel y PDF</li>
        <li>Backups diarios automáticos</li>
        <li>Multiusuario</li>
      </ul>
    </div>
  </div>
  <div className="border-t border-orange-300 mt-6 py-4 text-center text-gray-600 text-sm">
    © 2025 Sistema Avícola. Todos los derechos reservados.
  </div>
</footer>

      {/* ================= LIGHTBOX ================= */}
      {lightbox.open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setLightbox({ ...lightbox, open: false })}
        >
          <div
            className={`transition-all duration-300 ${animateIn ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imagenes[lightbox.index]}
              alt="full"
              className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-xl"
            />
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox({
                  ...lightbox,
                  index: (lightbox.index - 1 + imagenes.length) % imagenes.length,
                });
              }}
            >
              ❮
            </button>
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox({
                  ...lightbox,
                  index: (lightbox.index + 1) % imagenes.length,
                });
              }}
            >
              ❯
            </button>
          </div>
        </div>
      )}

      {/* ================= BOTÓN WHATSAPP FLOTANTE ================= */}
     {/* ================= WHATSAPP FLOTANTE ================= */}
{/* ================= WHATSAPP FLOTANTE ================= */}
<a
  href="https://wa.me/51970338838?text=Hola%20quiero%20más%20info%20del%20Sistema%20Avícola"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
    className="h-6 w-6"
  />
</a>


    </div>
  );
}
