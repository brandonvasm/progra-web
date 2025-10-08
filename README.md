# Instrucciones para ejecutar la aplicación


## 1. Construir y levantar los contenedores
docker-compose up --build

Esto hará que:
- Se construya la imagen de Docker de Django.
- Se levanten los contenedores de Django y PostgreSQL.
- Se ejecuten automáticamente las migraciones de la base de datos.

## 2. Crear superusuario (opcional)
docker-compose exec web python manage.py createsuperuser

Siga las instrucciones para usuario, correo y contraseña.

## 3. Acceder a la aplicación
- Django: http://localhost:8000  
- Panel de administración: http://localhost:8000/admin

## 4. Detener los contenedores
docker-compose down