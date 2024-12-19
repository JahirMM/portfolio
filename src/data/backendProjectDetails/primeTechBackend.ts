export const PRIME_TECH_BACKEND = {
  name: "Prime Tech Backend",
  description:
    "Proyecto backend que  permite agregar productos y sus detalles para su venta. Desarrollado utilizando Java con Spring Boot, integra seguridad mediante Spring Security y JWT (JSON Web Tokens) para autenticación y autorización. La aplicación facilita la gestión de producto, accesibles solo para usuarios autorizados.",
  modules: {
    auth: {
      title: "Authentication APIs",
      description: "",
      apis: [
        {
          title: "Sign Up",
          description: "",
          method: "POST",
          url: "http://localhost:8080/prime-tech/api/v1/auth/signUp",
          body: `
            {
              "email": "miguel54@gmail.com",
              "password": "santosMi123",
              "firstName": "Miguel",
              "middleName": "Roberto",
              "paternalSurname": "Santos",
              "maternalSurname": "Delgado"
            }`,
          response: {
            description: "",
            example: `
              {
                "message": "user successfully created",
                "user": {
                  "email": "miguel54@gmail.com",
                  "firstName": "Miguel",
                  "middleName": "Roberto",
                  "paternalSurname": "Santos",
                  "maternalSurname": "Delgado",
                  "createdAt": "2024-11-16T17:33:40.855661"
                }
              }`,
          },
        },
        {
          title: "Login",
          description:
            "Cuando el usuario inicia sesión, se guarda una cookie con su correo electrónico. Esta cookie permitirá validar la autenticación para otras solicitudes de la API.",
          method: "POST",
          url: "http://localhost:8080/prime-tech/api/v1/auth/login",
          body: `
            {
              "email": "miguel54@gmail.com",
              "password": "santosMi123"
            }`,
          response: {
            description: "",
            example: `
              {
                "message": "session successfully logged in"
              }`,
          },
        },
        {
          title: "Logout",
          description: "",
          method: "POST",
          url: "http://localhost:8080/prime-tech/api/v1/auth/logout",
          body: "",
          response: {
            description: "",
            example: "",
          },
        },
      ],
    },
    user: {
      title: "User APIs",
      description: "",
      apis: [
        {
          title: "Obtener información",
          description: "Mostrar información del usuario autenticado.",
          method: "GET",
          url: "http://localhost:8080/prime-tech/api/v1/user",
          body: "",
          response: {
            description: "",
            example: `
              {
                "user": {
                  "email": "miguel54@gmail.com",
                  "firstName": "Miguel",
                  "middleName": "Roberto",
                  "paternalSurname": "Santos",
                  "maternalSurname": "Delgado",
                  "createdAt": "2024-11-16T17:33:40.855661",
                  "roleNames": ["normal", "seller"]
                },
                "message": "User found"
              }`,
          },
        },
        {
          title: "Actualizar información",
          description: "Actualizar información del usuario autenticado.",
          method: "PUT",
          url: "http://localhost:8080/prime-tech/api/v1/user",
          body: `
            {
              "firstName": "Alfonso",
              "middleName": "Rafael",
              "paternalSurname": "Sanz",
              "maternalSurname": "Delgado"
            }`,
          response: {
            description: "",
            example: `
              {
                "user": {
                  "email": "miguel54@gmail.com",
                  "firstName": "Alfonso",
                  "middleName": "Rafael",
                  "paternalSurname": "Sanz",
                  "maternalSurname": "Delgado",
                  "createdAt": "2024-11-16T17:33:40.855661",
                  "roleNames": ["normal", "seller"]
                },
                "message": "Data has been correctly updated"
              }`,
          },
        },
        {
          title: "Asignar rol de vendedor",
          description:
            'Asignar rol de vendedor al usuario autenticado. Proporciona el parámetro roleName en la ruta como /role/assign/{roleName}, usando "seller" para asignar el rol de vendedor.',
          method: "POST",
          url: "http://localhost:8080/prime-tech/api/v1/role/assign/seller",
          body: "",
          response: {
            description: "",
            example: `
              {
                "user": {
                  "email": "miguel54@gmail.com",
                  "firstName": "Alfonso",
                  "middleName": "Rafael",
                  "paternalSurname": "Sanz",
                  "maternalSurname": "Delgado",
                  "createdAt": "2024-11-16T17:33:40.855661",
                  "roleNames": ["normal", "seller"]
                },
                "message": "correctly assigned role"
              }`,
          },
        },
        {
          title: "Eliminar imagen",
          description:
            'Eliminar el rol de vendedor al usuario autenticado, pasar "seller" para asignar el rol.',
          method: "DELETE",
          url: "http://localhost:8080/prime-tech/api/v1/role/assign/seller",
          body: "",
          response: {
            description: "",
            example: `
              {
                "message": "The assigned role has been successfully deleted"
              }`,
          },
        },
        {
          title: "Subir imagen",
          description:
            'Subir una foto de perfil del usuario autenticado. En el formulario de datos (form-data), utilizar la llave "image" de tipo file y proporciona la imagen.',
          method: "POST",
          url: "http://localhost:8080/prime-tech/api/v1/user-image",
          body: `
            {
              "image": "<File>"
            }`,
          response: {
            description:
              'Se guardará una URL similar a "/userImage/a9489358-a326-4a21-81df-9904098a8c1a.jpg". Además, si el mismo usuario sube una nueva imagen, la imagen anterior será eliminada y se almacenará la nueva imagen.',
            example: `
              {
                "message": "Image successfully uploaded"
              }`,
          },
        },
        {
          title: "Obtener imagen",
          description:
            "Recuperar la URL de la foto de perfil del usuario autenticado.",
          method: "GET",
          url: "http://localhost:8080/prime-tech/api/v1/user-image",
          body: "",
          response: {
            description: "",
            example: `
              {
                "imageUrl": "/userImage/a9489358-a326-4a21-81df-9904098a8c1a.jpg"
              }`,
          },
        },
        {
          title: "Eliminar imagen",
          description:
            "Eliminar la foto de perfil del usuario autenticado. Proporciona el parámetro userImageId en la ruta como /user-image/{userImageId} para identificar de manera única la imagen que se desea eliminar.",
          method: "DELETE",
          url: "http://localhost:8080/prime-tech/api/v1/user-image/189e23b1-54d0-4510-959b-ef19369b659b",
          body: "",
          response: {
            description: "",
            example: `
              {
                "message": "Image deleted correctly"
              }`,
          },
        },
      ],
    },
  },
};
