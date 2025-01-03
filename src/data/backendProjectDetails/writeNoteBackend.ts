import { WRITE_NOTE_INTERFACE } from "@/interfaces/backendInterfaces";

export const WRITE_NOTE_BACKEND: WRITE_NOTE_INTERFACE = {
  name: "Write Note Backend",
  description: "",
  diagram: [
    {
      titleImage: "",
      urlImge: "",
    },
  ],
  modules: {
    auth: {
      title: "Authentication APIs",
      description: "",
      apis: [
        {
          title: "Sign Up",
          description: "",
          method: "POST",
          request: "http://localhost:4000/writeNote/api/v1/createAccount",
          body: `
              {
                "email": "guillem@gmail.com",
                "password": "guillemM123",
                "firstName": "Guillem",
                "middleName": "",
                "lastName": "Costa",
                "maternalLastName": "Wang"
            }`,
          response: {
            description: "",
            example: `
                {
                    "message": "Account successfully created",
                    "user": {
                        "email": "guillem@gmail.com",
                        "firstName": "Guillem",
                        "middleName": null,
                        "lastName": "Costa",
                        "maternalLastName": "Wang",
                        "profilePicture": null
                    }
                }`,
          },
        },
        {
          title: "Login",
          description:
            "Cuando el usuario inicia sesión, se guarda una cookie con su correo electrónico y el userId.",
          method: "POST",
          request: "http://localhost:4000/writeNote/api/v1/login",
          body: `
              {
                "email": "jahir@gmail.com",
                "password": "jahir123"
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
          request: "http://localhost:4000/writeNote/api/v1/logOut",
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
          request: "http://localhost:4000/writeNote/api/v1/user",
          body: "",
          response: {
            description: "",
            example: `
                {
                  "user": {
                      "email": "guillem@gmail.com",
                      "firstName": "Guillem",
                      "middleName": null,
                      "lastName": "Costa",
                      "maternalLastName": "Wang",
                      "profilePicture": "1727747289610.png"
                  }
              }`,
          },
        },
        {
          title: "Actualizar información",
          description: "Actualizar información del usuario autenticado.",
          method: "PUT",
          request: "http://localhost:4000/writeNote/api/v1/userInformation",
          body: `
              {
                "firstName": "Guillem",
                "middleName": "Pablo",
                "lastName": "Costa",
                "maternalLastName": "Wang"
            }`,
          response: {
            description: "",
            example: `
                {
                  "message": "User information successfully updated.",
                  "user": {
                      "firstName": "Guillem",
                      "middleName": "Pablo",
                      "lastName": "Costa",
                      "maternalLastName": "Wang",
                      "email": "jahir@gmail.com",
                      "profilePicture": "1727747289610.png"
                  }
              }`,
          },
        },
        {
          title: "Subir imagen",
          description:
            'Subir una foto de perfil del usuario autenticado. En el formulario de datos (form-data), utilizar la llave "profilePicture" de tipo file y proporciona la imagen.',
          method: "POST",
          request: "http://localhost:4000/writeNote/api/v1/userPhoto",
          body: `
              {
                "profilePicture": "<File>"
              }`,
          response: {
            description:
              'Se guardará la imgen con un ID unico para utilizarlo en la url similar a "/uploads/1735859999909.png". Además, si el mismo usuario sube una nueva imagen, la imagen anterior será eliminada y se almacenará la nueva imagen.',
            example: `
                {
                    "message": "Profile photo successfully updated.",
                    "profilePicture": "1735859999909.png"
                }`,
          },
        },
      ],
    },
    note: {
      title: "Note APIs",
      description:
        "APIs relacionadas con la gestión de notas, incluyendo creación, actualización, eliminación y obtención de información.",
      apis: [
        {
          title: "Agregar nota",
          description:
            "API para agregar una noeva nota. El usuario debe estar autenticado",
          method: "POST",
          request: "http://localhost:4000/writeNote/api/v1/note",
          body: `
            {
                "title": "Revisar informe",
                "description": "Revisar y corregir el informe del proyecto",
                "favorite": true
            }`,
          response: {
            description: "Respuesta cuando se agrega la nota exitosamente.",
            example: `
                {
                  "message": "Note successfully created",
                  "data": {
                      "title": "Revisar informe",
                      "description": "Revisar y corregir el informe del proyecto",
                      "favorite": true,
                      "noteId": "be506782-00fa-447b-a49b-eba1a517ce76",
                      "date": "2025-01-02T23:42:56.761Z"
                  }
              }`,
          },
        },
        {
          title: "Obtener notas",
          description: "Recuperar las notas agregadas por el usuario.",
          method: "GET",
          request: "http://localhost:4000/writeNote/api/v1/notes",
          body: "",
          response: {
            description: "Listado de todas las notas de un usuario.",
            example: `
                {
                  "notes": [
                      {
                          "title": "Revisar informe",
                          "description": "Revisar y corregir el informe del proyecto",
                          "favorite": true,
                          "noteId": "be506782-00fa-447b-a49b-eba1a517ce76",
                          "date": "2025-01-02T23:42:56.761Z"
                      },
                      {
                          "title": "Comprar material",
                          "description": "Comprar papel y tinta para la impresora",
                          "favorite": false,
                          "noteId": "20916e6d-35e4-46ae-a743-cf4aac9086ac",
                          "date": "2025-01-03T00:23:18.553Z"
                      },
                      {
                          "title": "Llamada con cliente",
                          "description": "Organizar una llamada con el cliente para revisión de requisitos",
                          "favorite": true,
                          "noteId": "0b841513-3e54-4492-9498-5a7a9363f51e",
                          "date": "2025-01-03T00:23:26.001Z"
                      }
                  ],
                  "total": 3
              }`,
          },
          filters: {
            filters: [
              {
                title: "Filtro por fovoritos",
                parameterName: "favorite",
                type: "boolean",
                description:
                  "Permite filtrar las notas según si están marcadas como favoritas o no favoritas",
                required: "false",
                request:
                  "http://localhost:4000/writeNote/api/v1/notes?favorite=true",
              },
            ],
          },
        },
        {
          title: "Obtner una nota",
          description:
            'El usuario debe estar autenticado. Recive el parámetro "noteId" en la ruta /note/{noteId}',
          method: "GET",
          request:
            "http://localhost:4000/writeNote/api/v1/note/0b841513-3e54-4492-9498-5a7a9363f51e",
          body: "",
          response: {
            description: "Recuperar la información de una nota",
            example: `
                {
                    "note": {
                        "_id": "67772dfd31c0d5aafb922083",
                        "userId": "d880c040-7f3e-4803-a4bd-696903000d6c",
                        "title": "Llamada con cliente",
                        "description": "Organizar una llamada con el cliente para revisión de requisitos",
                        "favorite": true,
                        "noteId": "0b841513-3e54-4492-9498-5a7a9363f51e",
                        "date": "2025-01-03T00:23:26.001Z",
                        "__v": 0
                    }
                }
              `,
          },
        },
        {
          title: "Actualizar nota",
          description:
            'El usuario debe estar autenticado. Recive el parámetro "noteId" en la ruta /note/{noteId}',
          method: "PUT",
          request:
            "http://localhost:4000/writeNote/api/v1/note/0b841513-3e54-4492-9498-5a7a9363f51e",
          body: `
          {
              "title": "Llamada con cliente Juan",
              "description": "Organizar una llamada con el cliente para revisión de requisitos y diseño",
              "favorite": false
          }
          `,
          response: {
            description: "Actualización completada exitosamente",
            example: `
                {
                  "message": "The note has been updated correctly",
                  "note": {
                      "title": "Llamada con cliente Juan",
                      "description": "Organizar una llamada con el cliente para revisión de requisitos y diseño",
                      "favorite": false,
                      "noteId": "0b841513-3e54-4492-9498-5a7a9363f51e",
                      "date": "2025-01-03T00:23:26.001Z"
                  }
              }
              `,
          },
        },
        {
          title: "Eliminar nota",
          description:
            'El usuario debe estar autenticado. Recive el parámetro "noteId" en la ruta /note/{noteId}',
          method: "DELETE",
          request:
            "http://localhost:4000/writeNote/api/v1/note/e7e7867f-ffc8-41f2-9625-fca861a34c30",
          body: "",
          response: {
            description: "Confirmación de eliminación.",
            example: `
                {
                    "message": "Note correctly deleted"
                }
              `,
          },
        },
      ],
    },
  },
};
