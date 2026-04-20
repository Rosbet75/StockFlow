import { db } from "@/lib/db";

export default async function HomePage() {
  // 1. Intentamos jalar los datos (aunque estén vacíos)
  // Esto disparará la conexión real al Docker
  const productos = await db.product.findMany();
  const usuarios = await db.user.findMany();

  return (
    <main className="min-h-screen bg-gray-900 text-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold border-b border-gray-700 pb-4 mb-8">
          StockFlow Dashboard 🚀
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Sección de Productos */}
          <section className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">Productos</h2>
            {productos.length === 0 ? (
              <p className="text-gray-400 italic">No hay productos en la base de datos.</p>
            ) : (
              <ul className="space-y-2">
                {productos.map((p) => (
                  <li key={p.id} className="bg-gray-700 p-2 rounded">
                    {p.name} - ${p.price}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Sección de Usuarios */}
          <section className="bg-gray-800 p-6 rounded-lg border border-gray-700 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4 text-green-400">Usuarios</h2>
            {usuarios.length === 0 ? (
              <p className="text-gray-400 italic">No hay usuarios registrados.</p>
            ) : (
              <ul className="space-y-2">
                {usuarios.map((u) => (
                  <li key={u.id} className="bg-gray-700 p-2 rounded">
                    {u.email}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          Conexión activa al contenedor de PostgreSQL
        </footer>
      </div>
    </main>
  );
}