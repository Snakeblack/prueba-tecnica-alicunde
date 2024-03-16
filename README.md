# Prueba Tecnica Alicunde

Este proyecto esta construido con [Angular 17](https://angular.dev/) haciendo uso del ReactiveForms.

## Prueba

El objetivo de esta prueba es finalizar con una aplicación de dos pantallas. Una primera pantalla con un formulario en el que se solicite un email y una contraseña: Se debe considerar que el formulario carece de conectividad con el backend. Es decir, esta prueba sólo requiere de un frontend en Angular.

La ejecución del formulario debe de redireccionar a una segunda pantalla llamada ”Succes”, donde se renderice un GIF divertido.

## Requerimientos:

- [x] Se debe de hacer uso de un sistema de navegación.
- [x] Los componentes deben estar estilizados, siguiendo buenas prácticas de CSS.
- [x] El email debe ser previamente validado de forma reactiva.
- [x] La contraseña debe ser validada por su longitud de forma reactiva.
- [x] El GIF debe estar almacenado en el propio proyecto.

## Consideraciones:

1. Documentación embebida en el código, y la documentación para el testeo de proyecto.
2. Nomenclatura empleada en el código.
3. Arquitectura de la solución.
4. Implementación de los estándares de Angular.
5. Calidad de código
6. Simplicidad de la solución.

## Instalación

Para instalar el proyecto, es necesario tener instalado [Node.js](https://nodejs.org/) y [Angular CLI](https://angular.io/guide/setup-local).

```sh
npm install
```

### Iniciar el proyecto

```sh
ng serve
```

```sh
npm start
```

### Test

```sh
ng test
```

## Estructura del proyecto

El proyecto consta de dos paginas principales, `login` y `success`. En la pagina de `login` se encuentra el formulario con las validaciones requeridas, y en la pagina `success` se encuentra el gif.

### Estructura de carpetas

```sh
src
├── app
│   ├── components
│   │   └── form-login
│   │       ├── form-login.component.html
│   │       ├── form-login.component.css
│   │       ├── form-login.component.spec.ts
│   │       └── form-login.component.ts
│   ├── pages
│   │   ├── login
│   │   │   ├── login.component.html
│   │   │   ├── login.component.css
│   │   │   └── login.component.ts
│   │   └── success
│   │       ├── success.component.html
│   │       ├── success.component.css
│   │       └── success.component.ts
│   ├── guards
│   │   └── auth.guard.ts
│   ├── services
│   │   └── auth.service.ts
│   ├── helpers
│   │   └── password-strength.validators.ts
│   ├── shared
│   │   └── components
│   │       └── logo
│   │           ├── logo.component.html
│   │           ├── logo.component.css
│   │           └── logo.component.ts
│   ├── app-component.css
│   ├── app-component.html
│   ├── app-component.ts
│   ├── app.config.ts
│   └── app.routes.ts
├── assets
│   ├── gif
│   │   └── funy-cats.gif
│   └── img
│       └── alicunde-logo.webp
...
```

## Validación del formulario

La validación del formulario se realiza en el componente `form-login`, en el cual se encuentran las validaciones requeridas para el email y la contraseña.

La primera vez que introduces un email o contraseña, no se muestra el mensaje de error, ya que es la primera vez.  
Si pulsas en el botón de iniciar sesión, se mostrarán los mensajes de error si el email o la contraseña no son válidos.  
A partir de este momento los mensajes de error se mostraran reactivamente.

## Navegación

La navegación entre las paginas `login` y `success` se realiza mediante el uso de un `guard` que comprueba si el usuario ha iniciado sesión.

Este hace uso de un servicio `auth.service` que simula la autenticación del usuario por medio de un token guardado en `Session Storage`.

## Performance

El proyecto ha sido optimizado para mejorar la carga de la pagina, haciendo uso de `Lazy Loading` para cargar los módulos de forma asíncrona.