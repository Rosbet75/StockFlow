🚀 StockFlow - Comandos Esenciales
🛠️ Configuración del Entorno
Comandos para preparar la máquina de desarrollo.

Set-ExecutionPolicy RemoteSigned -Scope CurrentUser: Permite la ejecución de scripts de PowerShell en el sistema.

.\setup-entorno.ps1: Ejecuta el script de automatización que instala Docker, Node (fnm) y extensiones de VS Code.

notepad $PROFILE: Abre el perfil de configuración de PowerShell para editar la carga de herramientas.

🐳 Docker (Base de Datos)
Control del contenedor de PostgreSQL.

docker-compose up -d: Inicia la base de datos en segundo plano (modo detached).

docker-compose stop: Detiene los contenedores sin borrar los datos.

docker-compose down: Detiene y elimina los contenedores (los datos persisten si hay volúmenes configurados).

docker-compose ps: Muestra el estado actual de los contenedores y sus puertos.

📦 Node.js & NPM
Gestión de paquetes y ejecución del proyecto.

node -v: Verifica la versión activa de Node.js (recomendado: v22).

fnm use 22: Cambia manualmente a la versión 22 de Node (vía Fast Node Manager).

npm install: Instala todas las dependencias definidas en el package.json.

npm run dev: Inicia el servidor de desarrollo de Next.js.

💎 Prisma (ORM)
Sincronización entre el código y la base de datos.

npx prisma init: Crea la estructura inicial de Prisma en el proyecto.

npx prisma migrate dev --name <descripcion>: Crea el SQL, actualiza la base de datos en Docker y genera el historial de versiones.

npx prisma generate: Actualiza el cliente de Prisma para tener autocompletado en TypeScript.

npx prisma studio: Abre una interfaz web (tipo Excel) en localhost:5555 para gestionar los datos visualmente.

npx prisma db pull: Lee la base de datos actual y actualiza tu archivo schema.prisma (útil si hiciste cambios manuales en la DB).

🐙 Git
Control de versiones y formato de archivos.

git config --global core.autocrlf input: Configura Git para manejar correctamente los finales de línea (LF) en Windows.

git add .: Agrega todos los cambios al área de preparación (staging).

git commit -m "mensaje": Registra los cambios con una descripción.

git rm --cached -r .: Limpia el índice de Git (útil para corregir problemas de LF/CRLF tras cambiar la configuración).