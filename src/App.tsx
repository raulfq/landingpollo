

export default function LandingSistemaAvicola() {
  return (

    
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold">SA</div>
            <div>
              <h1 className="text-4xl font-bold text-red-600">Sistema Avícola</h1>

              <p className="text-sm text-gray-500">Administración simple para avícolas</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm">
            <a href="#features" className="hover:underline">Características</a>
            <a href="#precios" className="hover:underline">Precios</a>
            <a href="#demo" className="hover:underline">Demo</a>
            <a href="#contacto" className="px-4 py-2 bg-orange-500 text-white rounded-md shadow-sm hover:opacity-95">Contactar</a>
          </nav>
          <button className="md:hidden p-2">☰</button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Vende más, controla todo con <span className="text-orange-600">Sistema Avícola</span></h2>
            <p className="mt-4 text-gray-600">Gestión de boletas, pagos, clientes y reportes en una sola plataforma. Ideal para granjas pequeñas y medianas que quieren ahorrar tiempo y aumentar el control financiero.</p>

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
                <div className="text-2xl font-bold">S/ 60 / mes</div>
                <div className="text-sm text-gray-500">(Plan base — personalizable según módulos)</div>

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
              <div className="mt-4 text-3xl font-bold">S/ 30 <span className="text-base font-medium text-gray-500">/mes</span></div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• 1 usuario</li>
                <li>• Boletas y clientes</li>
                <li>• Exportar Excel</li>
              </ul>
              <a className="mt-6 inline-block px-4 py-2 bg-orange-500 text-white rounded-md" href="#contacto">Contactar</a>
            </div>

            <div className="p-6 bg-white rounded-xl shadow border-2 border-orange-200">
              <div className="text-sm font-semibold text-gray-500">Pro</div>
              <div className="mt-4 text-3xl font-bold">S/ 60 <span className="text-base font-medium text-gray-500">/mes</span></div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• Hasta 3 usuarios</li>
                <li>• Backup diario</li>
                <li>• Soporte por email</li>
              </ul>
              <a className="mt-6 inline-block px-4 py-2 bg-orange-600 text-white rounded-md" href="#contacto">Contratar</a>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <div className="text-sm font-semibold text-gray-500">Enterprise</div>
              <div className="mt-4 text-3xl font-bold">A convenir</div>
              <ul className="mt-4 text-sm text-gray-700 space-y-2">
                <li>• Integración personalizada</li>
                <li>• Hosting privado</li>
                <li>• Capacitación</li>
              </ul>
              <a className="mt-6 inline-block px-4 py-2 border border-orange-500 text-orange-600 rounded-md" href="#contacto">Pedir cotización</a>
            </div>
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
            <p className="text-sm text-gray-600 mt-2">O escríbenos a: <strong>bubafq1745@gmail.com</strong></p>

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
