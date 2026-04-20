# 📄 Documento de Especificación – StockFlow (Fase 1 / MVP)

## 1. Nombre del Proyecto

**StockFlow**
Sistema web full-stack para control de inventario y ventas con dashboard básico.

---

## 2. Objetivo General del Proyecto

El objetivo de StockFlow es construir una aplicación web funcional que permita a un negocio pequeño o mediano llevar control de:

* productos disponibles en inventario
* entradas y salidas de mercancía mediante movimientos
* registro de ventas con múltiples productos por venta
* visualización rápida de métricas mediante un dashboard

Este proyecto está diseñado para ser un producto realista tipo empresarial, ideal para portafolio y demostración en entrevistas laborales.

---

## 3. Alcance de la Fase 1 (MVP)

La Fase 1 consiste en construir la primera versión funcional y demostrable del sistema.
El MVP debe permitir que el sistema opere con usuarios reales, roles, base de datos real, y operaciones completas de inventario y ventas.

El objetivo final de esta fase es tener una aplicación **desplegada en internet**, lista para usarse como demo.

---

## 4. Público objetivo del sistema

StockFlow está pensado para negocios como:

* tiendas de abarrotes o tiendas de productos
* pequeños almacenes
* papelerías
* negocios de venta al por mayor
* micro empresas con empleados
* comercios que necesitan registrar ventas e inventario

---

## 5. Requerimientos Funcionales (Qué hará el sistema)

---

# 5.1 Módulo de Autenticación y Usuarios

### Objetivo:

Permitir que diferentes personas usen el sistema con cuentas individuales y permisos distintos.

### Funciones incluidas:

* Registro de usuarios
* Inicio de sesión (login)
* Cierre de sesión (logout)
* Manejo de sesiones seguras
* Protección de rutas (no permitir acceso sin autenticación)

### Roles disponibles:

* **ADMIN**
* **SELLER (Vendedor)**

### Permisos:

**ADMIN puede:**

* crear/editar productos
* administrar categorías
* registrar movimientos de inventario
* registrar ventas
* visualizar dashboard
* administrar usuarios (si se incluye en esta fase)

**SELLER puede:**

* ver productos disponibles
* registrar ventas
* visualizar información básica del inventario
* ver dashboard (opcional o limitado)

📌 El sistema debe impedir que un SELLER acceda a funciones exclusivas del ADMIN.

---

# 5.2 Módulo de Categorías

### Objetivo:

Organizar productos por tipo.

### Funciones incluidas:

* Crear categoría
* Editar categoría
* Eliminar categoría (preferentemente con soft delete o validación para evitar borrar si hay productos asociados)
* Listar categorías disponibles

### Campos mínimos:

* nombre
* estado (activa/inactiva)

---

# 5.3 Módulo de Productos

### Objetivo:

Registrar y administrar los productos que el negocio vende.

### Funciones incluidas:

* Crear producto
* Editar producto
* Desactivar producto (soft delete)
* Consultar listado de productos
* Buscar producto por nombre o SKU
* Filtrar productos por categoría

### Campos mínimos de producto:

* nombre
* SKU (único)
* categoría
* costo (precio de compra)
* precio de venta
* stock actual (calculado por movimientos)
* stock mínimo
* estado: activo / inactivo
* fecha de creación
* fecha de actualización

### Reglas del sistema:

* El SKU no puede repetirse.
* Un producto inactivo no debe poder venderse.
* El stock debe actualizarse con movimientos y ventas, no manualmente.

---

# 5.4 Módulo de Inventario (Movimientos)

### Objetivo:

Controlar entradas y salidas de inventario con historial verificable.

El sistema NO debe permitir editar el stock directamente.
El stock se calcula a partir del historial de movimientos.

### Funciones incluidas:

* Registrar entrada de inventario
* Registrar salida de inventario
* Registrar ajuste/corrección
* Mostrar historial de movimientos por producto
* Mostrar historial general (últimos movimientos)

### Tipos de movimiento:

* **IN (Entrada)**: compra o reposición
* **OUT (Salida)**: merma, pérdida, ajuste
* **ADJUST (Corrección)**: ajuste manual por error

### Campos mínimos de movimiento:

* producto_id
* tipo de movimiento
* cantidad
* motivo / nota (texto)
* usuario que realizó el movimiento
* fecha y hora del movimiento

### Reglas importantes:

* No se permite salida si el stock quedaría en negativo.
* Cada movimiento debe quedar registrado con usuario y fecha (auditoría).

---

# 5.5 Módulo de Ventas

### Objetivo:

Registrar ventas completas, con varios productos por venta, y descontar inventario automáticamente.

### Funciones incluidas:

* Crear venta
* Agregar múltiples productos a una venta (carrito)
* Calcular subtotal y total
* Registrar método de pago
* Guardar venta con detalle de productos vendidos
* Listar historial de ventas

### Método de pago permitido:

* Efectivo
* Tarjeta
* Transferencia

### Campos mínimos de una venta:

* id de venta
* usuario que registró la venta
* fecha/hora
* subtotal
* total
* método de pago
* notas opcionales

### Campos mínimos por item de venta (sale_item):

* sale_id
* product_id
* cantidad
* precio unitario
* subtotal del item

### Reglas importantes:

* Una venta debe descontar inventario automáticamente.
* No se permite vender si no hay stock suficiente.
* Una venta debe quedar registrada con usuario y fecha.

---

# 5.6 Módulo de Dashboard (MVP)

### Objetivo:

Mostrar métricas rápidas para entender el rendimiento del negocio.

### Dashboard incluirá:

#### KPIs mínimos:

* Total de ventas del día
* Total de ventas del mes
* Número de ventas realizadas
* Productos con stock bajo (stock <= stock mínimo)

#### Métricas adicionales recomendadas:

* Top 5 productos más vendidos (por cantidad)
* Ventas por método de pago

📌 Este dashboard debe tener gráficas simples o tablas visuales.

---

# 5.7 Auditoría básica (historial de acciones)

### Objetivo:

Mantener trazabilidad del sistema.

Todo registro importante debe guardar:

* usuario que lo hizo
* fecha y hora

Aplicará en:

* movimientos de inventario
* ventas
* creación/modificación de productos

---

## 6. Requerimientos No Funcionales (Cómo debe funcionar)

---

# 6.1 Diseño UI/UX mínimo

* Interfaz limpia y entendible
* Responsive (usable en laptop y celular)
* Navegación clara (sidebar o navbar)

---

# 6.2 Seguridad mínima

* Protección de rutas por login
* Validación de permisos por rol
* Validación de inputs (para evitar errores o datos inválidos)

---

# 6.3 Validaciones mínimas del sistema

* SKU único
* cantidades no negativas
* no vender sin stock
* no registrar salida sin stock suficiente

---

# 6.4 Performance mínima

* Listados con paginación si es necesario
* consultas optimizadas (Prisma/PostgreSQL)

---

# 6.5 Documentación del proyecto

El repositorio debe incluir un README con:

* descripción del sistema
* features
* stack tecnológico
* instrucciones para correrlo local
* instrucciones de despliegue
* credenciales demo

---

# 6.6 Deploy obligatorio

El MVP debe estar accesible en internet mediante un link real.

---

## 7. Stack Tecnológico (herramientas gratuitas)

---

# 7.1 Frontend

* **Next.js**
* **TypeScript**
* **TailwindCSS**

---

# 7.2 Backend

* API dentro de Next.js (API routes) o backend separado
* Prisma como ORM

---

# 7.3 Base de datos

* **PostgreSQL**
* Hosted en **Supabase Free Tier**

---

# 7.4 Autenticación

* **Supabase Auth (gratis)**

---

# 7.5 Deploy

* Frontend + backend: **Vercel Free**
* Base de datos: **Supabase Free**

---

# 7.6 DevOps básico incluido en Fase 1

* GitHub repository
* GitHub Actions (CI básico)

---

## 8. Requerimientos DevOps incluidos en Fase 1

---

# 8.1 Docker

El proyecto debe incluir soporte local mediante:

* docker-compose
* contenedor de PostgreSQL local para desarrollo

---

# 8.2 CI (Integración continua) con GitHub Actions

Pipeline mínimo:

* instalar dependencias
* correr lint
* correr build
* correr tests básicos (si existen)

📌 El objetivo es demostrar flujo profesional de trabajo.

---

# 8.3 Deploy manual o automático

En Fase 1 puede ser:

* deploy manual a Vercel (mínimo)
* o deploy automático con GitHub Actions (ideal)

---

## 9. Entregables Finales de la Fase 1

Al terminar la fase 1, debe existir:

### Entregables técnicos:

✅ Aplicación funcional online (demo pública)
✅ Base de datos en Supabase con tablas completas
✅ Auth funcionando con roles
✅ CRUD de productos y categorías
✅ Movimientos de inventario funcionando
✅ Registro de ventas con carrito funcionando
✅ Dashboard con KPIs mínimos
✅ Auditoría (user + timestamp)
✅ Dockerfile / docker-compose para desarrollo local
✅ Repositorio GitHub público
✅ README profesional con instrucciones

### Entregables de presentación:

✅ Screenshots de la aplicación
✅ Video corto (30-60 segundos) mostrando el flujo del sistema (opcional pero recomendado)

---

## 10. Fuera de Alcance (No se hará en Fase 1)

Los siguientes elementos quedan excluidos para no retrasar el MVP:

❌ Integración con Stripe
❌ Suscripciones (planes Free/Pro)
❌ Multi-tenant (múltiples empresas en un mismo sistema)
❌ Exportar PDF/Excel
❌ Facturación SAT / CFDI
❌ Aplicación móvil
❌ Reportes avanzados o BI
❌ Microservicios
❌ Notificaciones por WhatsApp o SMS

---

## 11. Resultado esperado de la Fase 1

Al finalizar esta fase, StockFlow debe funcionar como un sistema real donde:

* un administrador registra productos y controla inventario
* un vendedor registra ventas
* el stock se actualiza automáticamente
* el dashboard permite visualizar métricas básicas
* todo queda registrado con usuario y fecha
* el sistema está desplegado y disponible en línea

Este MVP servirá como base para una futura Fase 2 (versión profesional) y Fase 3 (SaaS comercial con Stripe).

---

Si quieres, ahora puedo hacerte también la **Fase 2 y Fase 3** igual de detalladas, para que tengas el roadmap completo del proyecto.
