interface ApiResponse {
  description: string;
  example: string;
}

interface ApiParameter {
  title: string;
  parameterName: string;
  type: string;
  description: string;
  required: string;
  request: string;
}

interface PaginationParameter {
  page?: ApiParameter;
}

interface FilterParameter {
  filters?: ApiParameter[];
}

interface Api {
  title: string;
  description: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  request: string;
  body: string;
  response: ApiResponse;
  pagination?: PaginationParameter;
  filters?: FilterParameter;
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
type CameraModule = Module;
type BatteryModule = Module;
type ScreenModule = Module;
type MobileDeviceModule = Module;
type SimCardModule = Module;
type LaptopModule = Module;
type FavoriteProductModule = Module;
type ShoppingCartModule = Module;
type PurchasedProductModule = Module;
type HistoryModule = Module;
type ReviewModule = Module;

type NoteModule = Module;

interface PRIME_TECH_BACKEND_INTERFACE
  extends Backend<{
    auth: AuthModule;
    user: UserModule;
    product: ProductModule;
    camera: CameraModule;
    battery: BatteryModule;
    screen: ScreenModule;
    mobileDevice: MobileDeviceModule;
    simCard: SimCardModule;
    laptop: LaptopModule;
    favoriteProduct: FavoriteProductModule;
    shoppingCart: ShoppingCartModule;
    purchasedProduct: PurchasedProductModule;
    history: HistoryModule;
    review: ReviewModule;
  }> {}

interface WRITE_NOTE_INTERFACE
  extends Backend<{
    auth: AuthModule;
    user: UserModule;
    note: NoteModule;
  }> {}

export type {
  PRIME_TECH_BACKEND_INTERFACE,
  WRITE_NOTE_INTERFACE,
  ApiResponse,
  Api,
  Module,
  Diagram,
  Backend,
  AuthModule,
  UserModule,
  ProductModule,
  CameraModule,
  FilterParameter,
  PaginationParameter
};
