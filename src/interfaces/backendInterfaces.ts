interface ApiResponse {
  description: string;
  example: string;
}

interface Api {
  title: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  url: string;
  body: string;
  response: ApiResponse;
}

interface Module {
  title: string;
  description: string;
  apis: Api[];
}

interface Backend<T = {}> {
  name: string;
  description: string;
  modules: T;
}

// Tipos para módulos específicos (puedes agregar más módulos si es necesario)
type AuthModule = Module;
type UserModule = Module;

// Define y exporta el tipo principal como una interfaz
interface PRIME_TECH_BACKEND_INTERFACE
  extends Backend<{
    auth?: AuthModule;
    user?: UserModule;
  }> {}

// Exporta las interfaces y tipos adicionales si es necesario
export type {
  PRIME_TECH_BACKEND_INTERFACE,
  ApiResponse,
  Api,
  Module,
  Backend,
  AuthModule,
  UserModule,
};
