export default function DashboardPage() {
  return (
    <div className="p-8">
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-10 shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-4">
          ¡Hola Mundo! 👋
        </h1>
        <p className="text-gray-400 text-lg">
          Bienvenido al panel central de <span className="text-blue-400 font-semibold">StockFlow</span>. 
          Aquí es donde pronto verás tus métricas, stock bajo y ventas del día.
        </p>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <p className="text-gray-400 text-sm">Ventas hoy</p>
            <p className="text-2xl font-bold text-white">$0.00</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <p className="text-gray-400 text-sm">Productos</p>
            <p className="text-2xl font-bold text-white">0</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
            <p className="text-gray-400 text-sm">Alertas de Stock</p>
            <p className="text-2xl font-bold text-yellow-500">Sin alertas</p>
          </div>
        </div>
      </div>
    </div>
  )
}