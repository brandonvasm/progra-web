# Secret Link App

Aplicación para ocultar y revelar secretos usando Docker, FastAPI, Redis y React.

## Prerequisitos

- Docker  
- Docker Compose  
- Internet


## Pasos para ejecutar la aplicación

1. **Clonar el repositorio y cambiar a la rama `assessment-3`**  

git clone <URL_DEL_REPOSITORIO>
git checkout assessment-3
cd secret-link


2. **Levantar la aplicacion**

ejecutar: docker-compose up --build

3. **Navegador**

Ingresar al navegador y dirigerse a: http://localhost:3000


4. **Usar la aplicacion**

En la pestaña "Hide", ingresa tu secreto y haz clic en "Hide" → obtendrás una key única.
En la pestaña "Reveal", ingresa la key → se mostrará el secreto y la key se eliminará automáticamente.

observaciones: Cada secreto solo se puede revelar una vez.



