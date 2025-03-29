# Etapa de construcción
FROM node:20-alpine as builder

# Instalar pnpm
RUN npm install -g pnpm

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar archivos de configuración
COPY package.json pnpm-lock.yaml ./

# Instalar dependencias
RUN pnpm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación
RUN pnpm build

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos construidos a nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar nginx
CMD ["nginx", "-g", "daemon off;"] 