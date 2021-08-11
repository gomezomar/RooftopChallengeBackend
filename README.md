# RooftopChallengeBackend
El proyecto actual, fue diseñado como challenge final de backend para el onboarding de Rooftot Academy. Es un microservicio que se encarga de gestionar la información de promociones, cupones y tiendas. Se creo un API REST a través de HTTP que utiliza la ORM typeorm para administrar las peticiones y los datos de la base de datos con la que conecta la misma.

Inicializar el proyecto:

1.- modificar archivo ormconfig.json : y colocar las variables con las cuales conectaras tu base de dato.

{   
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "pasword",
    "database": "test",
    "schema": "public",
    "entities": entity/*.js,modules/**/entity/*.js
    "synchronize": true
}


2.- para ponerlo a funcionar se deben ejecutar los siguientes comandos en consola:

-npm run build
-npm start 

De esta manera ya se encuentra funcionando el programa.


En la carpeta examples se encuentra un archivo el cual se puede importar en postman y de esta manera se puede probar el funcionamiento de la aplicación.


Para desarrollar el proyecto utilice como apoyo el material de los siguientes links:

-https://www.youtube.com/watch?v=j9rqfmzm3II
	
-https://typeorm.io/#/

-https://www.youtube.com/watch?v=KMLaibEaf7Y&t=67s

-https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos

-https://www.tutorialkart.com/typescript/

-https://www.youtube.com/watch?v=zRo2tvQpus8

-https://www.youtube.com/watch?v=Reb7ISQZCvA

-https://www.youtube.com/watch?v=pCxL1sdjeCc
