interface ApiResponse {
  description: string;
  example: string;
}

interface Api {
  title: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  request: string;
  body: string;
  response: ApiResponse;
}

interface Module {
  title: string;
  description: string;
  apis: Api[];
}

interface Diagram {
  titleImage: string;
  urlImge: string;
}

interface Backend<T = {}> {
  name: string;
  description: string;
  diagram: Diagram[];
  modules: T;
}

type AuthModule = Module;
type UserModule = Module;
type ProductModule = Module;

interface PRIME_TECH_BACKEND_INTERFACE
  extends Backend<{
    auth?: AuthModule;
    user?: UserModule;
    product?: ProductModule;
  }> {}

export type {
  PRIME_TECH_BACKEND_INTERFACE,
  ApiResponse,
  Api,
  Module,
  Diagram,
  Backend,
  AuthModule,
  UserModule,
  ProductModule,
};
