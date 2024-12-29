export const PRIME_TECH_BACKEND = {
  name: "Prime Tech Backend",
  description:
    "Proyecto backend que  permite agregar productos y sus detalles para su venta. Desarrollado utilizando Java con Spring Boot, integra seguridad mediante Spring Security y JWT (JSON Web Tokens) para autenticación y autorización. La aplicación facilita la gestión de producto, accesibles solo para usuarios autorizados.",
  diagram: [
    {
      titleImage: "Diagrma Entidad-Relación",
      urlImge: "/projects/primeTech/backend/base-de-datos.webp",
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
          request: "http://localhost:8080/prime-tech/api/v1/auth/signUp",
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
          request: "http://localhost:8080/prime-tech/api/v1/auth/login",
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
          request: "http://localhost:8080/prime-tech/api/v1/auth/logout",
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
          request: "http://localhost:8080/prime-tech/api/v1/user",
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
          request: "http://localhost:8080/prime-tech/api/v1/user",
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
          request: "http://localhost:8080/prime-tech/api/v1/role/assign/seller",
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
          title: "Eliminar rol",
          description:
            'Eliminar el rol de vendedor al usuario autenticado, pasar "seller" para asignar el rol.',
          method: "DELETE",
          request: "http://localhost:8080/prime-tech/api/v1/role/assign/seller",
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
          request: "http://localhost:8080/prime-tech/api/v1/user-image",
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
          request: "http://localhost:8080/prime-tech/api/v1/user-image",
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
          request:
            "http://localhost:8080/prime-tech/api/v1/user-image/189e23b1-54d0-4510-959b-ef19369b659b",
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
    product: {
      title: "Product APIs",
      description:
        "APIs relacionadas con la gestión de productos, incluyendo creación, actualización, eliminación y obtención de información.",
      apis: [
        {
          title: "Agregar producto",
          description:
            "API para agregar un nuevo producto. El usuario debe estar autenticado y tener el rol de vendedor.",
          method: "POST",
          request: "http://localhost:8080/prime-tech/api/v1/products",
          body: `
            {
              "name": "iPhone 15 Pro 256GB",
              "description": "El último modelo de iPhone con 256GB de almacenamiento, cámara avanzada y pantalla OLED.",
              "brand": "Apple",
              "stock": 50,
              "price": 1299.99,
              "category": "cellular"
            }
          `,
          response: {
            description: "Respuesta cuando se agrega el producto exitosamente.",
            example: `
              {
                "message": "Product successfully added",
                "product": {
                  "productId": "6b933f6a-e3de-423d-a8ea-db8f44a8b440",
                  "name": "iPhone 15 Pro 256GB",
                  "description": "El último modelo de iPhone con 256GB de almacenamiento, cámara avanzada y pantalla OLED.",
                  "brand": "Apple",
                  "stock": 50,
                  "price": 1299.99,
                  "category": "cellular",
                  "deviceType": "mobile",
                  "createdAt": "2024-11-16T18:59:54.1781887"
                }
              }
            `,
          },
        },
        {
          title: "Obtener un roducto",
          description:
            'API pública para recuperar la información de un producto. Recibe el parámetro "productId" en la ruta /products/{productId}',
          method: "GET",
          request:
            "http://localhost:8080/prime-tech/api/v1/products/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: "",
          response: {
            description: "Detalles del producto solicitado.",
            example: `
              {
                "product": {
                  "productId": "6b933f6a-e3de-423d-a8ea-db8f44a8b440",
                  "name": "iPhone 15 Pro 256GB",
                  "description": "El último modelo de iPhone con 256GB de almacenamiento, cámara avanzada y pantalla OLED.",
                  "brand": "Apple",
                  "stock": 100,
                  "price": 949.95,
                  "category": "cellular",
                  "deviceType": "mobile",
                  "createdAt": "2024-11-16T18:59:54.178189",
                  "updatedAt": "2024-11-16T19:28:18.052042"
                }
              }
            `,
          },
        },
        // lista de productos con filtro
        {
          title: "Actualizar producto",
          description:
            "Actualizar la información de un producto. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro productId en la ruta /products/{productId}. Si se cambia la categoría del producto, se elimina la información del tipo anterior. Por ejemplo, al cambiar de laptop a celular, los datos de laptop se borran al convertirse en móvil.",
          method: "PUT",
          request:
            "http://localhost:8080/prime-tech/api/v1/products/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: `
            {
              "name": "iPhone 15 Pro 256GB",
              "description": "El último modelo de iPhone con 256GB de almacenamiento, cámara avanzada y pantalla OLED.",
              "brand": "Apple",
              "stock": 100,
              "price": 949.95,
              "category": "cellular"
            }
          `,
          response: {
            description: "Confirmación de actualización",
            example: `
              {
                "message": "Product successfully updated"
              }
            `,
          },
        },
        {
          title: "Eliminar producto",
          description:
            'El usuario debe estar autenticado y tener el rol de vendedor. Recive el parámetro "productId" en la ruta /products/{productId}',
          method: "DELETE",
          request:
            "http://localhost:8080/prime-tech/api/v1/products/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: "",
          response: {
            description: "Confirmación de eliminación.",
            example: `
              {
                "message": "Product deleted correctly"
              }
            `,
          },
        },
        {
          title: "Subir imagen",
          description:
            "Subir imagen de un producto. En el formulario de datos (form-data), utilizar la llave 'image' de tipo file y 'isMain' de tipo boolean para indicar si es la imagen principal. Un producto puede tener hasta 5 imágenes y solo una de tipo 'main'.",
          method: "POST",
          request:
            "http://localhost:8080/prime-tech/api/v1/product-image/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: `
            {
              "image": "<File>",
              "isMain": true
            }
          `,
          response: {
            description:
              "Mensaje indicando que la imagen se ha subido exitosamente.",
            example: `
              {
                "message": "Image successfully uploaded"
              }
            `,
          },
        },
        {
          title: "Obtener imágenes",
          description:
            "Recuperar la lista de URLs de las imágenes de un producto. API pública que no requiere autenticación. Recibe el parámetro productId en la ruta /product-image/{productId}.",
          method: "GET",
          request:
            "http://localhost:8080/prime-tech/api/v1/product-image/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: "",
          response: {
            description: "Lista de imágenes del producto solicitado.",
            example: `
              {
                "productImages": [
                  {
                    "productImageId": "b82fb8e1-2e3a-4139-8b3c-e1cfc2de9b4a",
                    "imageUrl": "/productImage/b82fb8e1-2e3a-4139-8b3c-e1cfc2de9b4a.jpg",
                    "isMain": true
                  },
                  {
                    "productImageId": "c38fb8e1-3d3a-4529-9d3b-f3cfc3de9d4b",
                    "imageUrl": "/productImage/c38fb8e1-3d3a-4529-9d3b-f3cfc3de9d4b.jpg",
                    "isMain": false
                  }
                ]
              }
            `,
          },
        },
        {
          title: "Eliminar imagen",
          description:
            "Eliminar una imagen de producto. Proporciona el parámetro productImageId en la ruta /product-image/{productImageId} para identificar de manera única la imagen que se desea eliminar.",
          method: "DELETE",
          request:
            "http://localhost:8080/prime-tech/api/v1/product-image/c38fb8e1-3d3a-4529-9d3b-f3cfc3de9d4b",
          body: "",
          response: {
            description:
              "Mensaje indicando que la imagen se ha eliminado correctamente.",
            example: `
              {
                "message": "Image deleted correctly"
              }
            `,
          },
        },
      ],
    },
    camera: {
      title: "Camera APIs",
      description:
        "APIs relacionadas con la gestión de la información de la cámara de un producto, incluyendo creación, actualización, eliminación y obtención.",
      apis: [
        {
          title: "Agregar camara a producto",
          description:
            "Agregar información de la cámara de un producto. El usuario debe estar autenticado y tener el rol de vendedor. Los productos de tipo móvil (celular o tablet) pueden tener más de una cámara. Recibe el parámetro productId en la ruta /camera/{productId}",
          method: "POST",
          request:
            "http://localhost:8080/prime-tech/api/v1/camera/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: `
            {
              "type": "rear",
              "resolution": "48 MP",
              "aperture": "f/1.6",
              "opticalZoom": "2x",
              "digitalZoom": "5x",
              "feature": "Sensor-shift optical image stabilization"
            }`,
          response: {
            description:
              "Respuesta cuando se agrega la información de la cámara del producto exitosamente.",
            example: `
              {
                "message": "Camera successfully added",
                "cameraDTO": {
                    "cameraId": "43471b30-42dc-451b-bc58-69ac4d451600",
                    "type": "rear",
                    "resolution": "48 MP",
                    "aperture": "f/1.6",
                    "opticalZoom": "2x",
                    "digitalZoom": "5x",
                    "feature": "Sensor-shift optical image stabilization"
                }
              }
              `,
          },
        },
        {
          title: "Obtener cámaras de producto",
          description:
            'Recupera las cámaras que tiene un producto. API pública que no requiere autenticación. Recibe el parámetro "productId" en la ruta /camera/{productId}',
          method: "GET",
          request:
            "http://localhost:8080/prime-tech/api/v1/camera/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: "",
          response: {
            description: "Detalles de las cámaras del producto solicitado.",
            example: `
              {
                "camera": [
                  {
                    "cameraId": "43471b30-42dc-451b-bc58-69ac4d451600",
                    "type": "rear",
                    "resolution": "48 MP",
                    "aperture": "f/1.6",
                    "opticalZoom": "2x",
                    "digitalZoom": "5x",
                    "feature": "Sensor-shift optical image stabilization"
                  }, 
                  { 
                    "cameraId": "c3b0567c-ec23-4353-ad2a-208c7c4525bc", 
                    "type": "rear", 
                    "resolution": "12 MP",
                    "aperture": "f/2.4", 
                    "opticalZoom": "0.5x",
                    "digitalZoom": "2x",
                    "feature": "120° field of view"
                  }, 
                  { 
                    "cameraId": "f9264f98-a658-4b5c-85ea-c9b9d806ea88",
                    "type": "rear", 
                    "resolution": "12 MP", 
                    "aperture": "f/2.2",
                    "opticalZoom": "3x",
                    "digitalZoom": "10x",
                    "feature": "Optical image stabilization" 
                  },
                  {
                    "cameraId": "885884af-8279-4a34-9de3-a31bbde43fdf", 
                    "type": "front", 
                    "resolution": "12 MP", 
                    "aperture": "f/2.2", 
                    "opticalZoom": "N/A", 
                    "digitalZoom": "N/A", 
                    "feature": "TrueDepth camera with Face ID" 
                  } 
                ]
              }`,
          },
        },
        {
          title: "Actualizar cámara de producto",
          description:
            'Actualizar información de una cámara. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro "cameraId" en la ruta /camera/{cameraId}',
          method: "PUT",
          request:
            "http://localhost:8080/prime-tech/api/v1/camera/885884af-8279-4a34-9de3-a31bbde43fdf",
          body: `
            {
              "type": "front",
              "resolution": "14 MP",
              "aperture": "f/2.1",
              "opticalZoom": "N/A",
              "digitalZoom": "N/A",
              "feature": "TrueDepth camera with Face ID"
            }
          `,
          response: {
            description:
              "Respuesta cuando se actualiza la cámara exitosamente.",
            example: `
              {
                "message": "Camera successfully updated",
                "camera": {
                  "cameraId": "885884af-8279-4a34-9de3-a31bbde43fdf",
                  "type": "front",
                  "resolution": "14 MP",
                  "aperture": "f/2.1",
                  "opticalZoom": "N/A",
                  "digitalZoom": "N/A",
                  "feature": "TrueDepth camera with Face ID"
                }
              }
            `,
          },
        },
        {
          title: "Eliminar cámara de producto",
          description:
            'Eliminar una cámara. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro "cameraId" en la ruta /camera/{cameraId}',
          method: "DELETE",
          request:
            "http://localhost:8080/prime-tech/api/v1/camera/885884af-8279-4a34-9de3-a31bbde43fdf",
          body: "",
          response: {
            description: "Respuesta cuando se elimina la cámara exitosamente.",
            example: `
              {
                "message": "Camera deleted correctly"
              }
            `,
          },
        },
      ],
    },
    battery: {
      title: "Battery APIs",
      description:
        "APIs relacionadas con la gestión de la información de la bateria de un producto, incluyendo creación, actualización, eliminación y obtención.",
      apis: [
        {
          title: "Agregar batería a producto",
          description:
            "Agregar información de la batería de un producto. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro productId en la ruta /battery/{productId}",
          method: "POST",
          request:
            "http://localhost:8080/prime-tech/api/v1/battery/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: `
              {
                "capacity": "4000 mAh",
                "type": "Li-Ion",
                "wirelessCharging": true,
                "fastCharging": true,
                "maxBatteryDuration": 20.5
              }
            `,
          response: {
            description: "Respuesta cuando se agrega la batería exitosamente.",
            example: `
                {
                  "message": "Battery successfully added",
                  "battery": {
                    "batteryId": "cef33745-8320-4376-9d5c-df40af278d50",
                    "capacity": "4000 mAh",
                    "type": "Li-Ion",
                    "wirelessCharging": true,
                    "fastCharging": true,
                    "maxBatteryDuration": 20.5
                  }
                }
              `,
          },
        },
        {
          title: "Obtener batería de producto",
          description:
            'Recupera la información de la batería de un producto. API pública que no requiere autenticación. Recibe el parámetro "productId" en la ruta /battery/{productId}',
          method: "GET",
          request:
            "http://localhost:8080/prime-tech/api/v1/battery/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: "",
          response: {
            description: "Detalles de la batería del producto solicitado.",
            example: `
                {
                  "battery": [
                    {
                      "batteryId": "cef33745-8320-4376-9d5c-df40af278d50",
                      "capacity": "4000 mAh",
                      "type": "Li-Ion",
                      "wirelessCharging": true,
                      "fastCharging": true,
                      "maxBatteryDuration": 20.50
                    }
                  ]
                }
              `,
          },
        },
        {
          title: "Actualizar batería de producto",
          description:
            'Actualizar información de una batería. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro "batteryId" en la ruta /battery/{batteryId}',
          method: "PUT",
          request:
            "http://localhost:8080/prime-tech/api/v1/battery/cef33745-8320-4376-9d5c-df40af278d50",
          body: `
              {
                "capacity": "4000 mAh",
                "type": "Li-Ion",
                "wirelessCharging": true,
                "fastCharging": true,
                "maxBatteryDuration": 21
              }
            `,
          response: {
            description:
              "Respuesta cuando se actualiza la batería exitosamente.",
            example: `
                {
                  "message": "Battery successfully updated",
                  "battery": {
                    "batteryId": "cef33745-8320-4376-9d5c-df40af278d50",
                    "capacity": "4000 mAh",
                    "type": "Li-Ion",
                    "wirelessCharging": true,
                    "fastCharging": true,
                    "maxBatteryDuration": 21
                  }
                }
              `,
          },
        },
        {
          title: "Eliminar batería de producto",
          description:
            "Eliminar una batería. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro batteryId en la ruta /battery/{batteryId}",
          method: "DELETE",
          request:
            "http://localhost:8080/prime-tech/api/v1/battery/cef33745-8320-4376-9d5c-df40af278d50",
          body: "",
          response: {
            description: "Respuesta cuando se elimina la batería exitosamente.",
            example: `
                {
                  "message": "Battery deleted correctly"
                }
              `,
          },
        },
      ],
    },
    screen: {
      title: "Screen APIs",
      description:
        "APIs relacionadas con la gestión de la información de la pantalla de un producto, incluyendo creación, actualización, eliminación y obtención.",
      apis: [
        {
          title: "Agregar pantalla a producto",
          description:
            "Agregar información de la pantalla de un producto. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro productId en la ruta /screen/{productId}",
          method: "POST",
          request:
            "http://localhost:8080/prime-tech/api/v1/screen/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: `
              {
                "resolution": "2778x1284",
                "pixelDensity": "458 ppi",
                "refreshRate": "120Hz",
                "screenType": "OLED",
                "screenSize": 6.1
              }
            `,
          response: {
            description: "Respuesta cuando se agrega la pantalla exitosamente.",
            example: `
                {
                  "message": "Screen successfully added",
                  "screen": {
                    "screenId": "2efb4891-0065-4905-9fff-82a737795c5c",
                    "resolution": "2778x1284",
                    "pixelDensity": "458 ppi",
                    "refreshRate": "120Hz",
                    "screenType": "OLED",
                    "screenSize": 6.1
                  }
                }
              `,
          },
        },
        {
          title: "Obtener pantalla de producto",
          description:
            "Recupera la información de la pantalla de un producto. API pública que no requiere autenticación. Recibe el parámetro productId en la ruta /screen/{productId}",
          method: "GET",
          request:
            "http://localhost:8080/prime-tech/api/v1/screen/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: "",
          response: {
            description: "Detalles de la pantalla del producto solicitado.",
            example: `
                {
                  "screen": [
                    {
                      "screenId": "2efb4891-0065-4905-9fff-82a737795c5c",
                      "resolution": "2778x1284",
                      "pixelDensity": "458 ppi",
                      "refreshRate": "120Hz",
                      "screenType": "OLED",
                      "screenSize": 6.10
                    }
                  ]
                }
              `,
          },
        },
        {
          title: "Actualizar pantalla de producto",
          description:
            "Actualizar información de una pantalla. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro screenId en la ruta /screen/{screenId}",
          method: "PUT",
          request:
            "http://localhost:8080/prime-tech/api/v1/screen/2efb4891-0065-4905-9fff-82a737795c5c",
          body: `
              {
                "resolution": "2778x1284",
                "pixelDensity": "460 ppi",
                "refreshRate": "120Hz",
                "screenType": "OLED",
                "screenSize": 6.1
              }
            `,
          response: {
            description:
              "Respuesta cuando se actualiza la pantalla exitosamente.",
            example: `
                {
                  "message": "Screen successfully updated",
                  "screen": {
                    "screenId": "2efb4891-0065-4905-9fff-82a737795c5c",
                    "resolution": "2778x1284",
                    "pixelDensity": "460 ppi",
                    "refreshRate": "120Hz",
                    "screenType": "OLED",
                    "screenSize": 6.1
                  }
                }
              `,
          },
        },
        {
          title: "Eliminar pantalla de producto",
          description:
            "Eliminar una pantalla. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro screenId en la ruta /screen/{screenId}",
          method: "DELETE",
          request:
            "http://localhost:8080/prime-tech/api/v1/screen/2efb4891-0065-4905-9fff-82a737795c5c",
          body: "",
          response: {
            description:
              "Respuesta cuando se elimina la pantalla exitosamente.",
            example: `
                {
                  "message": "Screen deleted correctly"
                }
              `,
          },
        },
      ],
    },
    mobileDevice: {
      title: "Mobile device APIs",
      description:
        "APIs relacionadas con la gestión de la información de productos de tipo móvil, incluyendo creación, actualización, eliminación y obtención.",
      apis: [
        {
          title: "Agregar dispositivo móvil a producto",
          description:
            "Agregar información de un dispositivo móvil asociado a un producto de tipo mobile. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro productId en la ruta /mobile-device/{productId}",
          method: "POST",
          request:
            "http://localhost:8080/prime-tech/api/v1/mobile-device/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: `
            {
              "internalMemory": 256,
              "internalMemoryType": "NVMe",
              "ram": 8,
              "color": "Titanium Blue",
              "processor": "A17 Bionic",
              "operatingSystem": "iOS 17",
              "ipRating": "IP68",
              "splashResistant": true,
              "dustResistant": true,
              "waterResistant": true
            }
          `,
          response: {
            description:
              "Respuesta cuando se agrega el dispositivo móvil exitosamente.",
            example: `
              {
                "message": "Mobile device successfully added",
                "mobileDevice": {
                  "mobileDeviceid": "fc9f1c9d-c480-4c27-b956-561fb5ff465f",
                  "internalMemory": 256,
                  "internalMemoryType": "NVMe",
                  "ram": 8,
                  "color": "Titanium Blue",
                  "processor": "A17 Bionic",
                  "operatingSystem": "iOS 17",
                  "ipRating": "IP68",
                  "splashResistant": true,
                  "dustResistant": true,
                  "waterResistant": true
                }
              }
            `,
          },
        },
        {
          title: "Obtener dispositivo móvil de producto",
          description:
            "Recupera la información de un dispositivo móvil de un producto de tipo mobile. API pública que no requiere autenticación. Recibe el parámetro productId en la ruta /mobile-device/{productId}",
          method: "GET",
          request:
            "http://localhost:8080/prime-tech/api/v1/mobile-device/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: "",
          response: {
            description:
              "Detalles del dispositivo móvil del producto solicitado.",
            example: `
              {
                "mobileDevice": [
                  {
                    "mobileDeviceid": "fc9f1c9d-c480-4c27-b956-561fb5ff465f",
                    "internalMemory": 256,
                    "internalMemoryType": "NVMe",
                    "ram": 16,
                    "color": "Titanium natural",
                    "processor": "A17 Bionic",
                    "operatingSystem": "iOS 18",
                    "ipRating": "IP68",
                    "splashResistant": true,
                    "dustResistant": true,
                    "waterResistant": true
                  }
                ]
              }
            `,
          },
        },
        {
          title: "Actualizar dispositivo móvil de producto",
          description:
            "Actualizar información de un dispositivo móvil. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro mobileDeviceId en la ruta /mobile-device/{mobileDeviceId}",
          method: "PUT",
          request:
            "http://localhost:8080/prime-tech/api/v1/mobile-device/fc9f1c9d-c480-4c27-b956-561fb5ff465f",
          body: `
            {
              "internalMemory": 256,
              "internalMemoryType": "NVMe",
              "ram": 16,
              "color": "Titanium natural",
              "processor": "A17 Bionic",
              "operatingSystem": "iOS 18",
              "ipRating": "IP68",
              "splashResistant": true,
              "dustResistant": true,
              "waterResistant": true
            }
          `,
          response: {
            description:
              "Respuesta cuando se actualiza el dispositivo móvil exitosamente.",
            example: `
              {
                "message": "Mobile device successfully updated",
                "mobileDevice": {
                  "mobileDeviceid": "fc9f1c9d-c480-4c27-b956-561fb5ff465f",
                  "internalMemory": 256,
                  "internalMemoryType": "NVMe",
                  "ram": 16,
                  "color": "Titanium natural",
                  "processor": "A17 Bionic",
                  "operatingSystem": "iOS 18",
                  "ipRating": "IP68",
                  "splashResistant": true,
                  "dustResistant": true,
                  "waterResistant": true
                }
              }
            `,
          },
        },
      ],
    },
    simCard: {
      title: "Sim card APIs",
      description:
        "APIs relacionadas con la gestión de la información de la tarjeta SIM de un producto de tipo móvil, incluyendo creación, actualización, eliminación y obtención.",
      apis: [
        {
          title: "Agregar tarjeta SIM a dispositivo móvil",
          description:
            "Agregar información de una tarjeta SIM asociado a un dispositivo móvil. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro mobileDeviceId en la ruta /sim-card/{mobileDeviceId}",
          method: "POST",
          request:
            "http://localhost:8080/prime-tech/api/v1/sim-card/fc9f1c9d-c480-4c27-b956-561fb5ff465f",
          body: `
            {
              "isDualSim": true,
              "simSlots": 2,
              "esim": false,
              "simType": "Nano-SIM"
            }
          `,
          response: {
            description:
              "Respuesta cuando se agrega la tarjeta SIM exitosamente.",
            example: `
              {
                "message": "Sim card successfully added",
                "simCard": {
                  "simCardId": "aa056f92-5b5c-4205-924a-eaa6b1fec346",
                  "isDualSim": false,
                  "simSlots": 2,
                  "esim": false,
                  "simType": "Nano-SIM"
                }
              }
            `,
          },
        },
        {
          title: "Obtener tarjeta SIM de producto",
          description:
            "Recupera la información de una tarjeta SIM de un producto de tipo mobile. API pública que no requiere autenticación. Recibe el parámetro productId en la ruta /sim-card/{productId}",
          method: "GET",
          request:
            "http://localhost:8080/prime-tech/api/v1/sim-card/6b933f6a-e3de-423d-a8ea-db8f44a8b440",
          body: "",
          response: {
            description: "Detalles de la tarjeta SIM del producto solicitado.",
            example: `
              {
                "simCard": [
                  {
                    "simCardId": "aa056f92-5b5c-4205-924a-eaa6b1fec346",
                    "isDualSim": false,
                    "simSlots": 2,
                    "esim": false,
                    "simType": "Nano-SIM"
                  }
                ]
              }
            `,
          },
        },
        {
          title: "Actualizar tarjeta SIM de producto",
          description:
            "Actualizar información de una tarjeta SIM. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro simCardId en la ruta /sim-card/{simCardId}",
          method: "PUT",
          request:
            "http://localhost:8080/prime-tech/api/v1/sim-card/aa056f92-5b5c-4205-924a-eaa6b1fec346",
          body: `
            {
              "isDualSim": true,
              "simSlots": 2,
              "esim": true,
              "simType": "Nano-SIM and eSIM"
            }
          `,
          response: {
            description:
              "Respuesta cuando se actualiza la tarjeta SIM exitosamente.",
            example: `
              {
                "message": "Sim card successfully updated",
                "simCard": {
                  "simCardId": "aa056f92-5b5c-4205-924a-eaa6b1fec346",
                  "isDualSim": false,
                  "simSlots": 2,
                  "esim": true,
                  "simType": "Nano-SIM and eSIM"
                }
              }
            `,
          },
        },
        {
          title: "Eliminar tarjeta SIM de producto",
          description:
            "Eliminar una tarjeta SIM. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro simCardId en la ruta /sim-card/{simCardId}",
          method: "DELETE",
          request:
            "http://localhost:8080/prime-tech/api/v1/sim-card/aa056f92-5b5c-4205-924a-eaa6b1fec346",
          body: "",
          response: {
            description:
              "Respuesta cuando se elimina la tarjeta SIM exitosamente.",
            example: `
              {
                "message": "Sim Card deleted correctly"
              }
            `,
          },
        },
      ],
    },
    laptop: {
      title: "Laptop APIs",
      description:
        "APIs relacionadas con la gestión de la información de productos de tipo laptop, incluyendo creación, actualización, eliminación y obtención.",
      apis: [
        {
          title: "Agregar laptop a producto",
          description:
            "Agregar información de una laptop asociada a un producto de tipo laptop. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro productId en la ruta /laptop/{productId}",
          method: "POST",
          request:
            "http://localhost:8080/prime-tech/api/v1/laptop/f9aeb399-6f2f-45de-85b8-938d7f1edab9",
          body: `
          {
            "ram": 16,
            "color": "Shadow Black",
            "processor": "Intel Core Ultra 7",
            "touchscreen": false,
            "operatingSystem": "Windows 11",
            "keyboardLanguage": "English",
            "backlitKeyboard": true,
            "graphicCard": "NVIDIA GeForce RTX 3060",
            "usbPorts": 3,
            "usbCPorts": 2,
            "hdmiPorts": 1,
            "withWifi": true,
            "withBluetooth": true,
            "withEthernetPort": true,
            "ssdStorage": 1024,
            "hddStorage": 0,
            "quantitySpeakers": 2,
            "microphone": 1
          }
        `,
          response: {
            description: "Respuesta cuando se agrega la laptop exitosamente.",
            example: `
            {
              "message": "Laptop successfully added",
              "laptop": {
                "laptopId": "c802ea6d-5f76-45c0-8983-1c3b1d015d29",
                "ram": 16,
                "color": "Shadow Black",
                "processor": "Intel Core Ultra 7",
                "touchscreen": false,
                "operatingSystem": "Windows 11",
                "keyboardLanguage": "English",
                "backlitKeyboard": true,
                "graphicCard": "NVIDIA GeForce RTX 3060",
                "usbPorts": 3,
                "usbCPorts": 2,
                "hdmiPorts": 1,
                "withWifi": true,
                "withBluetooth": true,
                "withEthernetPort": true,
                "ssdStorage": 1024,
                "hddStorage": 0,
                "quantitySpeakers": 2,
                "microphone": 1
              }
            }
          `,
          },
        },
        {
          title: "Obtener laptop de producto",
          description:
            "Recupera la información de una laptop de un producto de tipo laptop. API pública que no requiere autenticación. Recibe el parámetro productId en la ruta /laptop/{productId}",
          method: "GET",
          request:
            "http://localhost:8080/prime-tech/api/v1/laptop/f9aeb399-6f2f-45de-85b8-938d7f1edab9",
          body: "",
          response: {
            description: "Detalles de la laptop del producto solicitado.",
            example: `
            {
              "laptop": [
                {
                  "laptopId": "c802ea6d-5f76-45c0-8983-1c3b1d015d29",
                  "ram": 16,
                  "color": "Shadow Black",
                  "processor": "Intel Core Ultra 7",
                  "touchscreen": false,
                  "operatingSystem": "Windows 11",
                  "keyboardLanguage": "English",
                  "backlitKeyboard": true,
                  "graphicCard": "NVIDIA GeForce RTX 3060",
                  "usbPorts": 3,
                  "usbCPorts": 2,
                  "hdmiPorts": 1,
                  "withWifi": true,
                  "withBluetooth": true,
                  "withEthernetPort": true,
                  "ssdStorage": 1024,
                  "hddStorage": 0,
                  "quantitySpeakers": 2,
                  "microphone": 1
                }
              ]
            }
          `,
          },
        },
        {
          title: "Actualizar laptop de producto",
          description:
            "Actualizar información de una laptop. El usuario debe estar autenticado y tener el rol de vendedor. Recibe el parámetro laptopId en la ruta /laptop/{laptopId}",
          method: "PUT",
          request:
            "http://localhost:8080/prime-tech/api/v1/laptop/c802ea6d-5f76-45c0-8983-1c3b1d015d29",
          body: `
          {
            "ram": 32,
            "color": "Midnight Black",
            "processor": "Intel Core Ultra 7",
            "touchscreen": false,
            "operatingSystem": "Windows 11",
            "keyboardLanguage": "English",
            "backlitKeyboard": true,
            "graphicCard": "NVIDIA GeForce RTX 3060",
            "usbPorts": 3,
            "usbCPorts": 2,
            "hdmiPorts": 1,
            "withWifi": true,
            "withBluetooth": true,
            "withEthernetPort": true,
            "ssdStorage": 2048,
            "hddStorage": 0,
            "quantitySpeakers": 2,
            "microphone": 1
          }
        `,
          response: {
            description:
              "Respuesta cuando se actualiza la laptop exitosamente.",
            example: `
            {
              "message": "Laptop successfully updated",
              "laptop": {
                "laptopId": "c802ea6d-5f76-45c0-8983-1c3b1d015d29",
                "ram": 32,
                "color": "Midnight Black",
                "processor": "Intel Core Ultra 7",
                "touchscreen": false,
                "operatingSystem": "Windows 11",
                "keyboardLanguage": "English",
                "backlitKeyboard": true,
                "graphicCard": "NVIDIA GeForce RTX 3060",
                "usbPorts": 3,
                "usbCPorts": 2,
                "hdmiPorts": 1,
                "withWifi": true,
                "withBluetooth": true,
                "withEthernetPort": true,
                "ssdStorage": 2048,
                "hddStorage": 0,
                "quantitySpeakers": 2,
                "microphone": 1
              }
            }
          `,
          },
        },
      ],
    },
    favoriteProduct: {
      title: "Favorite Products APIs",
      description:
        "APIs relacionadas con la gestión de productos favoritos, incluyendo creación, actualización, eliminación y obtención de información.",
      apis: [
        {
          title: "Agregar producto favorito",
          description:
            "El usuario debe estar autenticado. Se valida que el producto tenga un stock mayor a 0 y que exista. Recibe el parámetro productId en la ruta /favorite-products/{productId}.",
          method: "POST",
          request:
            "http://localhost:8080/prime-tech/api/v1/favorite-products/f9aeb399-6f2f-45de-85b8-938d7f1edab9",
          body: "",
          response: {
            description: "Respuesta cuando se agrega un producto favorito.",
            example: `
            {
                "message": "Favorite product added",
                "favoriteProduct": {
                    "productId": "6b933f6a-e3de-423d-a8ea-db8f44a8b440",
                    "favoriteProductId": "fc285dc4-fa66-4268-94ce-c7934c9849e9",
                    "imgUrl": null,
                    "name": "iPhone 15 Pro 256GB",
                    "description": "El último modelo de iPhone con 256GB de almacenamiento, cámara avanzada y pantalla OLED.",
                    "brand": "Apple",
                    "stock": 80,
                    "price": 949.950
                }
            }
          `,
          },
        },
        {
          title: "Obtener productos favoritos",
          description:
            "El usuario debe estar autenticado. Si el producto no tiene stock, se eliminará de la lista.",
          method: "GET",
          request: "http://localhost:8080/prime-tech/api/v1/favorite-products",
          body: "",
          response: {
            description: "Respuesta de productos favoritos encontrados.",
            example: `
            {
              "message": "Favorite products found",
              "favoriteProducts": [
                  {
                      "productId": "d296874e-c6a2-47ea-a57c-a2344927ba49",
                      "favoriteProductId": "27fbfda0-105a-4778-97f1-6be701c86281",
                      "imgUrl": null,
                      "name": "iphone 15 pro",
                      "description": "el mejor celular",
                      "brand": "iphone",
                      "stock": 10,
                      "price": 1100000.000
                  },
                  {
                      "productId": "f370790f-8fc6-4f69-827f-2d425f490c5a",
                      "favoriteProductId": "5d51d04f-2543-4496-9c4a-507c0bd18802",
                      "imgUrl": "/productImage/6afb0f8a-a6cb-4d54-912a-79618892b115.png",
                      "name": "Laptop omen15 negro",
                      "description": "la mejor laptop de HP",
                      "brand": "HP",
                      "stock": 4,
                      "price": 1150000.000
                  }
              ]
          }
          `,
          },
        },
        {
          title: "Eliminar producto favorito",
          description:
            "El usuario debe estar autenticado. Recibe el parámetro favoriteProductId en la ruta /favorite-products/{favoriteProductId}",
          method: "DELETE",
          request:
            "http://localhost:8080/prime-tech/api/v1/favorite-products/d296874e-c6a2-47ea-a57c-a2344927ba49",
          body: "",
          response: {
            description:
              "Respuesta al eliminar un producto favorito de la lista.",
            example: `
            {
                "message": "Favorite product successfully deleted"
            }
          `,
          },
        },
      ],
    },
    shoppingCart: {
      title: "Shopping cart APIs",
      description: "APIs relacionadas con la gestión del carrito de compra.",
      apis: [
        {
          title: "Agregar producto",
          description:
            "El usuario debe estar autenticado. Si el producto ya esta en el carrito de compras se aumenta la cantidad . Recibe el parámetro productId en la ruta /shopping-cart/{productId}.",
          method: "POST",
          request:
            "http://localhost:8080/prime-tech/api/v1/shopping-cart/f370790f-8fc6-4f69-827f-2d425f490c5a",
          body: "",
          response: {
            description:
              "Respuesta cuando se agrega un producto al carrito de compras.",
            example: `
            {
                "message": "Product added to the shopping cart",
                "shoppingCart": {
                    "shoppingCartId": "ad2c0ed5-efa1-4357-9430-b796c803d36b",
                    "createdAt": "2024-11-29T14:44:22.153468",
                    "product": {
                        "productId": "f370790f-8fc6-4f69-827f-2d425f490c5a",
                        "imgUrl": "/productImage/6afb0f8a-a6cb-4d54-912a-79618892b115.png",
                        "name": "Laptop omen15 negro",
                        "brand": "HP",
                        "stock": 4,
                        "quantity": 2,
                        "price": 1150000.00
                    },
                    "completed": false
                }
            }
          `,
          },
        },
        {
          title: "Obtener productos",
          description:
            "El usuario debe estar autenticado. Si el producto no tiene stock, se eliminará de la lista.",
          method: "GET",
          request: "http://localhost:8080/prime-tech/api/v1/shopping-cart",
          body: "",
          response: {
            description: "Respuesta de productos en el carrito de compra.",
            example: `
            {
                "message": "Shopping cart found",
                "shoppingCart": {
                    "shoppingCartId": "ad2c0ed5-efa1-4357-9430-b796c803d36b",
                    "createdAt": "2024-11-29T14:44:22.153468",
                    "completed": false,
                    "products": [
                        {
                            "productId": "f370790f-8fc6-4f69-827f-2d425f490c5a",
                            "imgUrl": "/productImage/6afb0f8a-a6cb-4d54-912a-79618892b115.png",
                            "name": "Laptop omen15 negro",
                            "brand": "HP",
                            "stock": 4,
                            "quantity": 2,
                            "price": 1150000.00
                        }
                    ]
                }
            }
          `,
          },
        },
        {
          title: "Actualizar producto",
          description:
            "El usuario debe estar autenticado. Recibe el parámetro productId en la ruta /shopping-cart/{productId}",
          method: "PUT",
          request:
            "http://localhost:8080/prime-tech/api/v1/shopping-cart/f370790f-8fc6-4f69-827f-2d425f490c5a",
          body: `
          {
            "shoppingCartId": "ad2c0ed5-efa1-4357-9430-b796c803d36",
            "quantity": 1
          }
          `,
          response: {
            description:
              "Respuesta al actualizar la cantidad del producto en el carrito de compras.",
            example: `
            {
                "message": "Product quantity updated",
                "updatedItem": {
                    "shoppingCartId": "ad2c0ed5-efa1-4357-9430-b796c803d36b",
                    "productId": "f370790f-8fc6-4f69-827f-2d425f490c5a",
                    "quantity": 1
                }
            }
          `,
          },
        },
        {
          title: "Eliminar producto",
          description:
            "El usuario debe estar autenticado. Recibe el parámetro productId en la ruta /shopping-cart/{productId}",
          method: "DELETE",
          request:
            "http://localhost:8080/prime-tech/api/v1/shopping-cart/f370790f-8fc6-4f69-827f-2d425f490c5a",
          body: "",
          response: {
            description:
              "Respuesta al eliminar un producto del carrito de compra.",
            example: `
            {
                "message": "Product successfully deleted from the shopping cart"
            }
          `,
          },
        },
      ],
    },
    purchasedProduct: {
      title: "Add Purchased Product, API",
      description:
        "Esta API permite agregar productos como comprados. Recibe una lista de productos y crea una orden asociada al usuario. Valida que la cantidad solicitada no exceda el stock disponible, actualiza el inventario, agrega cada producto como vendido al vendedor correspondiente al producto y devuelve los detalles de los productos comprados.",
      apis: [
        {
          title: "Agregar producto",
          description: "",
          method: "POST",
          request: "http://localhost:8080/prime-tech/api/v1/purchases",
          body: `
          [
              {
                  "productId": "c0f11aa4-a0cb-47e0-9f00-6eb58c6e5cd1",
                  "purchaseQuantity": 1
              }
          ]
          `,
          response: {
            description: "Respuesta cuando se agrega un producto como comprado",
            example: `
            {
                "message": "Purchased product successfully added",
                "purchasedProducts": [
                    {
                        "purchaseId": "b8087528-6301-4943-a4a1-8e0fea3316a3",
                        "productId": "c0f11aa4-a0cb-47e0-9f00-6eb58c6e5cd1",
                        "productName": "test",
                        "productDescription": "test",
                        "productPrice": 1249.94,
                        "productImg": null,
                        "sellerId": "c36e4379-52e8-495d-9e74-20db2644dbff",
                        "sellerName": "Alfonso Delgado Sanz",
                        "sellerEmail": "miguel54@gmail.com",
                        "purchaseQuantity": 1
                    }
                ]
            }
          `,
          },
        },
      ],
    },
    history: {
      title: "Historial de Pedidos y Ventas",
      description:
        "Recupera los registros históricos de productos comprados y vendidos.",
      apis: [
        {
          title: "Productos comprados",
          description: "",
          method: "GET",
          request: "http://localhost:8080/prime-tech/api/v1/orders",
          body: "",
          response: {
            description: "",
            example: `
            {
                "orders": [
                    {
                        "orderId": "e52c6c2b-006e-4972-9c9d-acaf7b71c395",
                        "orderDate": "2024-12-09T15:01:21.326905",
                        "status": "PENDING",
                        "products": [
                            {
                                "purchaseId": "c710e087-63d1-4fe3-bc38-471153cbf811",
                                "productId": "f370790f-8fc6-4f69-827f-2d425f490c5a",
                                "productName": "Laptop omen15 negro",
                                "productDescription": "la mejor laptop de HP",
                                "productPrice": 1150000.00,
                                "productImg": "/productImage/6afb0f8a-a6cb-4d54-912a-79618892b115.png",
                                "sellerId": "b6c99381-6538-479e-9b9f-a539cc79764d",
                                "sellerName": "testUno nombre test apellido test apellido",
                                "sellerEmail": "test1@gmail.com",
                                "purchaseQuantity": 3
                            },
                            {
                                "purchaseId": "0c3d2695-7894-4999-9677-53d029a95253",
                                "productId": "d296874e-c6a2-47ea-a57c-a2344927ba49",
                                "productName": "iphone 15 pro",
                                "productDescription": "el mejor celular",
                                "productPrice": 1100000.00,
                                "productImg": null,
                                "sellerId": "b6c99381-6538-479e-9b9f-a539cc79764d",
                                "sellerName": "testUno nombre test apellido test apellido",
                                "sellerEmail": "test1@gmail.com",
                                "purchaseQuantity": 1
                            }
                        ]
                    },
                    {
                        "orderId": "0f1ed54c-ce13-46c6-8be9-cc4c6851fe47",
                        "orderDate": "2024-12-09T15:02:25.470593",
                        "status": "PENDING",
                        "products": [
                            {
                                "purchaseId": "4c1dd787-b539-4472-8940-35377198b76f",
                                "productId": "c0f11aa4-a0cb-47e0-9f00-6eb58c6e5cd1",
                                "productName": "test",
                                "productDescription": "test",
                                "productPrice": 1249.94,
                                "productImg": null,
                                "sellerId": "c36e4379-52e8-495d-9e74-20db2644dbff",
                                "sellerName": "Alfonso Delgado Sanz",
                                "sellerEmail": "miguel54@gmail.com",
                                "purchaseQuantity": 1
                            }
                        ]
                    }
                ]
            }
          `,
          },
        },
        {
          title: "Productos vendidos",
          description:
            "Obtiene una lista de productos que han sido vendidos, incluyendo detalles de la venta, descripciones de los productos e información del comprador.",
          method: "GET",
          request: "http://localhost:8080/prime-tech/api/v1/sales",
          body: "",
          response: {
            description: "",
            example: `
            {
                "message": "Products found",
                "soldProduct": [
                    {
                        "soldId": "e5158d4d-9f6b-4736-b3f1-1afad8ce55f8",
                        "productId": "5b7bbf5f-0bab-4437-99f8-1a9c18a4da74",
                        "productName": "HP Omen 4536436434 Core Ultra 234236 16GB",
                        "productDescription": "Laptop de alto rendimiento con procesador Core Ultra 7, 16GB de RAM y almacenamiento SSD de 1TB. Ideal para gaming y tareas intensivas.",
                        "productPrice": 534.99,
                        "productImg": null,
                        "purchaseQuantity": 3,
                        "saleDate": "2024-12-07T18:46:27.059703"
                    },
                    {
                        "soldId": "d67aa1bc-6412-4552-8d66-0bd792654065",
                        "productId": "5b7bbf5f-0bab-4437-99f8-1a9c18a4da74",
                        "productName": "HP Omen 4536436434 Core Ultra 234236 16GB",
                        "productDescription": "Laptop de alto rendimiento con procesador Core Ultra 7, 16GB de RAM y almacenamiento SSD de 1TB. Ideal para gaming y tareas intensivas.",
                        "productPrice": 534.99,
                        "productImg": null,
                        "purchaseQuantity": 1,
                        "saleDate": "2024-12-09T14:16:09.867038"
                    },
                    {
                        "soldId": "a870f64f-83f5-4a13-9511-3069e2e983ed",
                        "productId": "c0f11aa4-a0cb-47e0-9f00-6eb58c6e5cd1",
                        "productName": "test",
                        "productDescription": "test",
                        "productPrice": 1249.94,
                        "productImg": null,
                        "purchaseQuantity": 1,
                        "saleDate": "2024-12-09T15:02:25.485735"
                    },
                    {
                        "soldId": "faf1a90c-14d1-46fc-9c60-357de1c91e05",
                        "productId": "c0f11aa4-a0cb-47e0-9f00-6eb58c6e5cd1",
                        "productName": "test",
                        "productDescription": "test",
                        "productPrice": 1249.94,
                        "productImg": null,
                        "purchaseQuantity": 1,
                        "saleDate": "2024-12-28T22:33:57.854643"
                    }
                ]
            }
          `,
          },
        },
      ],
    },
  },
};
