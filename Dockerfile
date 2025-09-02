# Imagen base oficial de Node.js
FROM node:18

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos necesarios
COPY package*.json ./
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer el puerto que usa tu app (ajústalo si usas otro)
EXPOSE 5000

# Comando para iniciar la app
CMD ["node", "src/server.js"]
