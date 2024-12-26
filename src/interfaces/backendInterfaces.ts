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

interface Backend<T = {}> {
  name: string;
  description: string;
  diagram: string;
  modules: T;
}

type AuthModule = Module;
type UserModule = Module;

interface PRIME_TECH_BACKEND_INTERFACE
  extends Backend<{
    auth?: AuthModule;
    user?: UserModule;
  }> {}

export type {
  PRIME_TECH_BACKEND_INTERFACE,
  ApiResponse,
  Api,
  Module,
  Backend,
  AuthModule,
  UserModule,
};
