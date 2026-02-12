
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Offer
 * 
 */
export type Offer = $Result.DefaultSelection<Prisma.$OfferPayload>
/**
 * Model FinishingRequest
 * 
 */
export type FinishingRequest = $Result.DefaultSelection<Prisma.$FinishingRequestPayload>
/**
 * Model Proposal
 * 
 */
export type Proposal = $Result.DefaultSelection<Prisma.$ProposalPayload>
/**
 * Model MaintenanceRequest
 * 
 */
export type MaintenanceRequest = $Result.DefaultSelection<Prisma.$MaintenanceRequestPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model OnlineService
 * 
 */
export type OnlineService = $Result.DefaultSelection<Prisma.$OnlineServicePayload>
/**
 * Model Donation
 * 
 */
export type Donation = $Result.DefaultSelection<Prisma.$DonationPayload>
/**
 * Model StaticContent
 * 
 */
export type StaticContent = $Result.DefaultSelection<Prisma.$StaticContentPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.offer`: Exposes CRUD operations for the **Offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Offers
    * const offers = await prisma.offer.findMany()
    * ```
    */
  get offer(): Prisma.OfferDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.finishingRequest`: Exposes CRUD operations for the **FinishingRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FinishingRequests
    * const finishingRequests = await prisma.finishingRequest.findMany()
    * ```
    */
  get finishingRequest(): Prisma.FinishingRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.proposal`: Exposes CRUD operations for the **Proposal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposals
    * const proposals = await prisma.proposal.findMany()
    * ```
    */
  get proposal(): Prisma.ProposalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.maintenanceRequest`: Exposes CRUD operations for the **MaintenanceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MaintenanceRequests
    * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
    * ```
    */
  get maintenanceRequest(): Prisma.MaintenanceRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.onlineService`: Exposes CRUD operations for the **OnlineService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OnlineServices
    * const onlineServices = await prisma.onlineService.findMany()
    * ```
    */
  get onlineService(): Prisma.OnlineServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.donation`: Exposes CRUD operations for the **Donation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Donations
    * const donations = await prisma.donation.findMany()
    * ```
    */
  get donation(): Prisma.DonationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staticContent`: Exposes CRUD operations for the **StaticContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StaticContents
    * const staticContents = await prisma.staticContent.findMany()
    * ```
    */
  get staticContent(): Prisma.StaticContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Offer: 'Offer',
    FinishingRequest: 'FinishingRequest',
    Proposal: 'Proposal',
    MaintenanceRequest: 'MaintenanceRequest',
    Rating: 'Rating',
    OnlineService: 'OnlineService',
    Donation: 'Donation',
    StaticContent: 'StaticContent',
    Notification: 'Notification',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "offer" | "finishingRequest" | "proposal" | "maintenanceRequest" | "rating" | "onlineService" | "donation" | "staticContent" | "notification" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Offer: {
        payload: Prisma.$OfferPayload<ExtArgs>
        fields: Prisma.OfferFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OfferFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OfferFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findFirst: {
            args: Prisma.OfferFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OfferFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          findMany: {
            args: Prisma.OfferFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          create: {
            args: Prisma.OfferCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          createMany: {
            args: Prisma.OfferCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OfferCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          delete: {
            args: Prisma.OfferDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          update: {
            args: Prisma.OfferUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          deleteMany: {
            args: Prisma.OfferDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OfferUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OfferUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>[]
          }
          upsert: {
            args: Prisma.OfferUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OfferPayload>
          }
          aggregate: {
            args: Prisma.OfferAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOffer>
          }
          groupBy: {
            args: Prisma.OfferGroupByArgs<ExtArgs>
            result: $Utils.Optional<OfferGroupByOutputType>[]
          }
          count: {
            args: Prisma.OfferCountArgs<ExtArgs>
            result: $Utils.Optional<OfferCountAggregateOutputType> | number
          }
        }
      }
      FinishingRequest: {
        payload: Prisma.$FinishingRequestPayload<ExtArgs>
        fields: Prisma.FinishingRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FinishingRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FinishingRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload>
          }
          findFirst: {
            args: Prisma.FinishingRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FinishingRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload>
          }
          findMany: {
            args: Prisma.FinishingRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload>[]
          }
          create: {
            args: Prisma.FinishingRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload>
          }
          createMany: {
            args: Prisma.FinishingRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FinishingRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload>[]
          }
          delete: {
            args: Prisma.FinishingRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload>
          }
          update: {
            args: Prisma.FinishingRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload>
          }
          deleteMany: {
            args: Prisma.FinishingRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FinishingRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FinishingRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload>[]
          }
          upsert: {
            args: Prisma.FinishingRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FinishingRequestPayload>
          }
          aggregate: {
            args: Prisma.FinishingRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFinishingRequest>
          }
          groupBy: {
            args: Prisma.FinishingRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<FinishingRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.FinishingRequestCountArgs<ExtArgs>
            result: $Utils.Optional<FinishingRequestCountAggregateOutputType> | number
          }
        }
      }
      Proposal: {
        payload: Prisma.$ProposalPayload<ExtArgs>
        fields: Prisma.ProposalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findFirst: {
            args: Prisma.ProposalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          findMany: {
            args: Prisma.ProposalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          create: {
            args: Prisma.ProposalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          createMany: {
            args: Prisma.ProposalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProposalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          delete: {
            args: Prisma.ProposalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          update: {
            args: Prisma.ProposalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          deleteMany: {
            args: Prisma.ProposalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProposalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProposalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>[]
          }
          upsert: {
            args: Prisma.ProposalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProposalPayload>
          }
          aggregate: {
            args: Prisma.ProposalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProposal>
          }
          groupBy: {
            args: Prisma.ProposalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProposalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposalCountArgs<ExtArgs>
            result: $Utils.Optional<ProposalCountAggregateOutputType> | number
          }
        }
      }
      MaintenanceRequest: {
        payload: Prisma.$MaintenanceRequestPayload<ExtArgs>
        fields: Prisma.MaintenanceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaintenanceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findFirst: {
            args: Prisma.MaintenanceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          findMany: {
            args: Prisma.MaintenanceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          create: {
            args: Prisma.MaintenanceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          createMany: {
            args: Prisma.MaintenanceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          delete: {
            args: Prisma.MaintenanceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          update: {
            args: Prisma.MaintenanceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          deleteMany: {
            args: Prisma.MaintenanceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaintenanceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>[]
          }
          upsert: {
            args: Prisma.MaintenanceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaintenanceRequestPayload>
          }
          aggregate: {
            args: Prisma.MaintenanceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaintenanceRequest>
          }
          groupBy: {
            args: Prisma.MaintenanceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaintenanceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<MaintenanceRequestCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      OnlineService: {
        payload: Prisma.$OnlineServicePayload<ExtArgs>
        fields: Prisma.OnlineServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OnlineServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OnlineServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload>
          }
          findFirst: {
            args: Prisma.OnlineServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OnlineServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload>
          }
          findMany: {
            args: Prisma.OnlineServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload>[]
          }
          create: {
            args: Prisma.OnlineServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload>
          }
          createMany: {
            args: Prisma.OnlineServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OnlineServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload>[]
          }
          delete: {
            args: Prisma.OnlineServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload>
          }
          update: {
            args: Prisma.OnlineServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload>
          }
          deleteMany: {
            args: Prisma.OnlineServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OnlineServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OnlineServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload>[]
          }
          upsert: {
            args: Prisma.OnlineServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OnlineServicePayload>
          }
          aggregate: {
            args: Prisma.OnlineServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOnlineService>
          }
          groupBy: {
            args: Prisma.OnlineServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<OnlineServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.OnlineServiceCountArgs<ExtArgs>
            result: $Utils.Optional<OnlineServiceCountAggregateOutputType> | number
          }
        }
      }
      Donation: {
        payload: Prisma.$DonationPayload<ExtArgs>
        fields: Prisma.DonationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DonationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findFirst: {
            args: Prisma.DonationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          findMany: {
            args: Prisma.DonationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          create: {
            args: Prisma.DonationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          createMany: {
            args: Prisma.DonationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          delete: {
            args: Prisma.DonationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          update: {
            args: Prisma.DonationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          deleteMany: {
            args: Prisma.DonationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DonationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>[]
          }
          upsert: {
            args: Prisma.DonationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DonationPayload>
          }
          aggregate: {
            args: Prisma.DonationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDonation>
          }
          groupBy: {
            args: Prisma.DonationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DonationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DonationCountArgs<ExtArgs>
            result: $Utils.Optional<DonationCountAggregateOutputType> | number
          }
        }
      }
      StaticContent: {
        payload: Prisma.$StaticContentPayload<ExtArgs>
        fields: Prisma.StaticContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StaticContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StaticContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          findFirst: {
            args: Prisma.StaticContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StaticContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          findMany: {
            args: Prisma.StaticContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>[]
          }
          create: {
            args: Prisma.StaticContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          createMany: {
            args: Prisma.StaticContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StaticContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>[]
          }
          delete: {
            args: Prisma.StaticContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          update: {
            args: Prisma.StaticContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          deleteMany: {
            args: Prisma.StaticContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StaticContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StaticContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>[]
          }
          upsert: {
            args: Prisma.StaticContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StaticContentPayload>
          }
          aggregate: {
            args: Prisma.StaticContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaticContent>
          }
          groupBy: {
            args: Prisma.StaticContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaticContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StaticContentCountArgs<ExtArgs>
            result: $Utils.Optional<StaticContentCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    offer?: OfferOmit
    finishingRequest?: FinishingRequestOmit
    proposal?: ProposalOmit
    maintenanceRequest?: MaintenanceRequestOmit
    rating?: RatingOmit
    onlineService?: OnlineServiceOmit
    donation?: DonationOmit
    staticContent?: StaticContentOmit
    notification?: NotificationOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    offers: number
    finishingRequests: number
    proposals: number
    maintenanceRequests: number
    ratingsGiven: number
    ratingsReceived: number
    donations: number
    notifications: number
    sentMessages: number
    receivedMessages: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | UserCountOutputTypeCountOffersArgs
    finishingRequests?: boolean | UserCountOutputTypeCountFinishingRequestsArgs
    proposals?: boolean | UserCountOutputTypeCountProposalsArgs
    maintenanceRequests?: boolean | UserCountOutputTypeCountMaintenanceRequestsArgs
    ratingsGiven?: boolean | UserCountOutputTypeCountRatingsGivenArgs
    ratingsReceived?: boolean | UserCountOutputTypeCountRatingsReceivedArgs
    donations?: boolean | UserCountOutputTypeCountDonationsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    sentMessages?: boolean | UserCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinishingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinishingRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDonationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type FinishingRequestCountOutputType
   */

  export type FinishingRequestCountOutputType = {
    proposals: number
  }

  export type FinishingRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proposals?: boolean | FinishingRequestCountOutputTypeCountProposalsArgs
  }

  // Custom InputTypes
  /**
   * FinishingRequestCountOutputType without action
   */
  export type FinishingRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequestCountOutputType
     */
    select?: FinishingRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FinishingRequestCountOutputType without action
   */
  export type FinishingRequestCountOutputTypeCountProposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    yearsExperience: number | null
    avgPrice: number | null
    averageRating: number | null
    totalRatings: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    yearsExperience: number | null
    avgPrice: number | null
    averageRating: number | null
    totalRatings: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    fullName: string | null
    phone: string | null
    email: string | null
    password: string | null
    role: string | null
    otp: string | null
    isVerified: boolean | null
    avatar: string | null
    coverImage: string | null
    bio: string | null
    address: string | null
    city: string | null
    governorate: string | null
    providerType: string | null
    exhibitionType: string | null
    specialization: string | null
    jobTitle: string | null
    companyName: string | null
    yearsExperience: number | null
    avgPrice: number | null
    portfolio: string | null
    averageRating: number | null
    totalRatings: number | null
    isActive: boolean | null
    isBanned: boolean | null
    banReason: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    fullName: string | null
    phone: string | null
    email: string | null
    password: string | null
    role: string | null
    otp: string | null
    isVerified: boolean | null
    avatar: string | null
    coverImage: string | null
    bio: string | null
    address: string | null
    city: string | null
    governorate: string | null
    providerType: string | null
    exhibitionType: string | null
    specialization: string | null
    jobTitle: string | null
    companyName: string | null
    yearsExperience: number | null
    avgPrice: number | null
    portfolio: string | null
    averageRating: number | null
    totalRatings: number | null
    isActive: boolean | null
    isBanned: boolean | null
    banReason: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    fullName: number
    phone: number
    email: number
    password: number
    role: number
    otp: number
    isVerified: number
    avatar: number
    coverImage: number
    bio: number
    address: number
    city: number
    governorate: number
    providerType: number
    exhibitionType: number
    specialization: number
    jobTitle: number
    companyName: number
    yearsExperience: number
    avgPrice: number
    portfolio: number
    averageRating: number
    totalRatings: number
    isActive: number
    isBanned: number
    banReason: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    yearsExperience?: true
    avgPrice?: true
    averageRating?: true
    totalRatings?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    yearsExperience?: true
    avgPrice?: true
    averageRating?: true
    totalRatings?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fullName?: true
    phone?: true
    email?: true
    password?: true
    role?: true
    otp?: true
    isVerified?: true
    avatar?: true
    coverImage?: true
    bio?: true
    address?: true
    city?: true
    governorate?: true
    providerType?: true
    exhibitionType?: true
    specialization?: true
    jobTitle?: true
    companyName?: true
    yearsExperience?: true
    avgPrice?: true
    portfolio?: true
    averageRating?: true
    totalRatings?: true
    isActive?: true
    isBanned?: true
    banReason?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fullName?: true
    phone?: true
    email?: true
    password?: true
    role?: true
    otp?: true
    isVerified?: true
    avatar?: true
    coverImage?: true
    bio?: true
    address?: true
    city?: true
    governorate?: true
    providerType?: true
    exhibitionType?: true
    specialization?: true
    jobTitle?: true
    companyName?: true
    yearsExperience?: true
    avgPrice?: true
    portfolio?: true
    averageRating?: true
    totalRatings?: true
    isActive?: true
    isBanned?: true
    banReason?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fullName?: true
    phone?: true
    email?: true
    password?: true
    role?: true
    otp?: true
    isVerified?: true
    avatar?: true
    coverImage?: true
    bio?: true
    address?: true
    city?: true
    governorate?: true
    providerType?: true
    exhibitionType?: true
    specialization?: true
    jobTitle?: true
    companyName?: true
    yearsExperience?: true
    avgPrice?: true
    portfolio?: true
    averageRating?: true
    totalRatings?: true
    isActive?: true
    isBanned?: true
    banReason?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    fullName: string
    phone: string
    email: string | null
    password: string
    role: string
    otp: string | null
    isVerified: boolean
    avatar: string | null
    coverImage: string | null
    bio: string | null
    address: string | null
    city: string | null
    governorate: string | null
    providerType: string | null
    exhibitionType: string | null
    specialization: string | null
    jobTitle: string | null
    companyName: string | null
    yearsExperience: number | null
    avgPrice: number | null
    portfolio: string
    averageRating: number
    totalRatings: number
    isActive: boolean
    isBanned: boolean
    banReason: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    isVerified?: boolean
    avatar?: boolean
    coverImage?: boolean
    bio?: boolean
    address?: boolean
    city?: boolean
    governorate?: boolean
    providerType?: boolean
    exhibitionType?: boolean
    specialization?: boolean
    jobTitle?: boolean
    companyName?: boolean
    yearsExperience?: boolean
    avgPrice?: boolean
    portfolio?: boolean
    averageRating?: boolean
    totalRatings?: boolean
    isActive?: boolean
    isBanned?: boolean
    banReason?: boolean
    offers?: boolean | User$offersArgs<ExtArgs>
    finishingRequests?: boolean | User$finishingRequestsArgs<ExtArgs>
    proposals?: boolean | User$proposalsArgs<ExtArgs>
    maintenanceRequests?: boolean | User$maintenanceRequestsArgs<ExtArgs>
    ratingsGiven?: boolean | User$ratingsGivenArgs<ExtArgs>
    ratingsReceived?: boolean | User$ratingsReceivedArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    isVerified?: boolean
    avatar?: boolean
    coverImage?: boolean
    bio?: boolean
    address?: boolean
    city?: boolean
    governorate?: boolean
    providerType?: boolean
    exhibitionType?: boolean
    specialization?: boolean
    jobTitle?: boolean
    companyName?: boolean
    yearsExperience?: boolean
    avgPrice?: boolean
    portfolio?: boolean
    averageRating?: boolean
    totalRatings?: boolean
    isActive?: boolean
    isBanned?: boolean
    banReason?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    isVerified?: boolean
    avatar?: boolean
    coverImage?: boolean
    bio?: boolean
    address?: boolean
    city?: boolean
    governorate?: boolean
    providerType?: boolean
    exhibitionType?: boolean
    specialization?: boolean
    jobTitle?: boolean
    companyName?: boolean
    yearsExperience?: boolean
    avgPrice?: boolean
    portfolio?: boolean
    averageRating?: boolean
    totalRatings?: boolean
    isActive?: boolean
    isBanned?: boolean
    banReason?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fullName?: boolean
    phone?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    otp?: boolean
    isVerified?: boolean
    avatar?: boolean
    coverImage?: boolean
    bio?: boolean
    address?: boolean
    city?: boolean
    governorate?: boolean
    providerType?: boolean
    exhibitionType?: boolean
    specialization?: boolean
    jobTitle?: boolean
    companyName?: boolean
    yearsExperience?: boolean
    avgPrice?: boolean
    portfolio?: boolean
    averageRating?: boolean
    totalRatings?: boolean
    isActive?: boolean
    isBanned?: boolean
    banReason?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "fullName" | "phone" | "email" | "password" | "role" | "otp" | "isVerified" | "avatar" | "coverImage" | "bio" | "address" | "city" | "governorate" | "providerType" | "exhibitionType" | "specialization" | "jobTitle" | "companyName" | "yearsExperience" | "avgPrice" | "portfolio" | "averageRating" | "totalRatings" | "isActive" | "isBanned" | "banReason", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    offers?: boolean | User$offersArgs<ExtArgs>
    finishingRequests?: boolean | User$finishingRequestsArgs<ExtArgs>
    proposals?: boolean | User$proposalsArgs<ExtArgs>
    maintenanceRequests?: boolean | User$maintenanceRequestsArgs<ExtArgs>
    ratingsGiven?: boolean | User$ratingsGivenArgs<ExtArgs>
    ratingsReceived?: boolean | User$ratingsReceivedArgs<ExtArgs>
    donations?: boolean | User$donationsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    sentMessages?: boolean | User$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      offers: Prisma.$OfferPayload<ExtArgs>[]
      finishingRequests: Prisma.$FinishingRequestPayload<ExtArgs>[]
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
      maintenanceRequests: Prisma.$MaintenanceRequestPayload<ExtArgs>[]
      ratingsGiven: Prisma.$RatingPayload<ExtArgs>[]
      ratingsReceived: Prisma.$RatingPayload<ExtArgs>[]
      donations: Prisma.$DonationPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      fullName: string
      phone: string
      email: string | null
      password: string
      role: string
      otp: string | null
      isVerified: boolean
      avatar: string | null
      coverImage: string | null
      bio: string | null
      address: string | null
      city: string | null
      governorate: string | null
      providerType: string | null
      exhibitionType: string | null
      specialization: string | null
      jobTitle: string | null
      companyName: string | null
      yearsExperience: number | null
      avgPrice: number | null
      portfolio: string
      averageRating: number
      totalRatings: number
      isActive: boolean
      isBanned: boolean
      banReason: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    offers<T extends User$offersArgs<ExtArgs> = {}>(args?: Subset<T, User$offersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    finishingRequests<T extends User$finishingRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$finishingRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    proposals<T extends User$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, User$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    maintenanceRequests<T extends User$maintenanceRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$maintenanceRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratingsGiven<T extends User$ratingsGivenArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratingsReceived<T extends User$ratingsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    donations<T extends User$donationsArgs<ExtArgs> = {}>(args?: Subset<T, User$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentMessages<T extends User$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly otp: FieldRef<"User", 'String'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly coverImage: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly governorate: FieldRef<"User", 'String'>
    readonly providerType: FieldRef<"User", 'String'>
    readonly exhibitionType: FieldRef<"User", 'String'>
    readonly specialization: FieldRef<"User", 'String'>
    readonly jobTitle: FieldRef<"User", 'String'>
    readonly companyName: FieldRef<"User", 'String'>
    readonly yearsExperience: FieldRef<"User", 'Int'>
    readonly avgPrice: FieldRef<"User", 'Float'>
    readonly portfolio: FieldRef<"User", 'String'>
    readonly averageRating: FieldRef<"User", 'Float'>
    readonly totalRatings: FieldRef<"User", 'Int'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly isBanned: FieldRef<"User", 'Boolean'>
    readonly banReason: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.offers
   */
  export type User$offersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    cursor?: OfferWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * User.finishingRequests
   */
  export type User$finishingRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    where?: FinishingRequestWhereInput
    orderBy?: FinishingRequestOrderByWithRelationInput | FinishingRequestOrderByWithRelationInput[]
    cursor?: FinishingRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FinishingRequestScalarFieldEnum | FinishingRequestScalarFieldEnum[]
  }

  /**
   * User.proposals
   */
  export type User$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * User.maintenanceRequests
   */
  export type User$maintenanceRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    cursor?: MaintenanceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * User.ratingsGiven
   */
  export type User$ratingsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.ratingsReceived
   */
  export type User$ratingsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * User.donations
   */
  export type User$donationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    cursor?: DonationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.sentMessages
   */
  export type User$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Offer
   */

  export type AggregateOffer = {
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  export type OfferAvgAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    providerId: number | null
  }

  export type OfferSumAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    providerId: number | null
  }

  export type OfferMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    image: string | null
    price: number | null
    discount: number | null
    isFeatured: boolean | null
    featuredUntil: Date | null
    featuredPaidAt: Date | null
    status: string | null
    expiresAt: Date | null
    providerId: number | null
  }

  export type OfferMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    image: string | null
    price: number | null
    discount: number | null
    isFeatured: boolean | null
    featuredUntil: Date | null
    featuredPaidAt: Date | null
    status: string | null
    expiresAt: Date | null
    providerId: number | null
  }

  export type OfferCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    image: number
    price: number
    discount: number
    isFeatured: number
    featuredUntil: number
    featuredPaidAt: number
    status: number
    expiresAt: number
    providerId: number
    _all: number
  }


  export type OfferAvgAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    providerId?: true
  }

  export type OfferSumAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    providerId?: true
  }

  export type OfferMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    image?: true
    price?: true
    discount?: true
    isFeatured?: true
    featuredUntil?: true
    featuredPaidAt?: true
    status?: true
    expiresAt?: true
    providerId?: true
  }

  export type OfferMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    image?: true
    price?: true
    discount?: true
    isFeatured?: true
    featuredUntil?: true
    featuredPaidAt?: true
    status?: true
    expiresAt?: true
    providerId?: true
  }

  export type OfferCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    image?: true
    price?: true
    discount?: true
    isFeatured?: true
    featuredUntil?: true
    featuredPaidAt?: true
    status?: true
    expiresAt?: true
    providerId?: true
    _all?: true
  }

  export type OfferAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offer to aggregate.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Offers
    **/
    _count?: true | OfferCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OfferAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OfferSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OfferMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OfferMaxAggregateInputType
  }

  export type GetOfferAggregateType<T extends OfferAggregateArgs> = {
        [P in keyof T & keyof AggregateOffer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOffer[P]>
      : GetScalarType<T[P], AggregateOffer[P]>
  }




  export type OfferGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OfferWhereInput
    orderBy?: OfferOrderByWithAggregationInput | OfferOrderByWithAggregationInput[]
    by: OfferScalarFieldEnum[] | OfferScalarFieldEnum
    having?: OfferScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OfferCountAggregateInputType | true
    _avg?: OfferAvgAggregateInputType
    _sum?: OfferSumAggregateInputType
    _min?: OfferMinAggregateInputType
    _max?: OfferMaxAggregateInputType
  }

  export type OfferGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    image: string
    price: number | null
    discount: number | null
    isFeatured: boolean
    featuredUntil: Date | null
    featuredPaidAt: Date | null
    status: string
    expiresAt: Date | null
    providerId: number
    _count: OfferCountAggregateOutputType | null
    _avg: OfferAvgAggregateOutputType | null
    _sum: OfferSumAggregateOutputType | null
    _min: OfferMinAggregateOutputType | null
    _max: OfferMaxAggregateOutputType | null
  }

  type GetOfferGroupByPayload<T extends OfferGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OfferGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OfferGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OfferGroupByOutputType[P]>
            : GetScalarType<T[P], OfferGroupByOutputType[P]>
        }
      >
    >


  export type OfferSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    discount?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    featuredPaidAt?: boolean
    status?: boolean
    expiresAt?: boolean
    providerId?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    discount?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    featuredPaidAt?: boolean
    status?: boolean
    expiresAt?: boolean
    providerId?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    discount?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    featuredPaidAt?: boolean
    status?: boolean
    expiresAt?: boolean
    providerId?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["offer"]>

  export type OfferSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    price?: boolean
    discount?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    featuredPaidAt?: boolean
    status?: boolean
    expiresAt?: boolean
    providerId?: boolean
  }

  export type OfferOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "image" | "price" | "discount" | "isFeatured" | "featuredUntil" | "featuredPaidAt" | "status" | "expiresAt" | "providerId", ExtArgs["result"]["offer"]>
  export type OfferInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfferIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OfferIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OfferPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Offer"
    objects: {
      provider: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      image: string
      price: number | null
      discount: number | null
      isFeatured: boolean
      featuredUntil: Date | null
      featuredPaidAt: Date | null
      status: string
      expiresAt: Date | null
      providerId: number
    }, ExtArgs["result"]["offer"]>
    composites: {}
  }

  type OfferGetPayload<S extends boolean | null | undefined | OfferDefaultArgs> = $Result.GetResult<Prisma.$OfferPayload, S>

  type OfferCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OfferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OfferCountAggregateInputType | true
    }

  export interface OfferDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Offer'], meta: { name: 'Offer' } }
    /**
     * Find zero or one Offer that matches the filter.
     * @param {OfferFindUniqueArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfferFindUniqueArgs>(args: SelectSubset<T, OfferFindUniqueArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfferFindUniqueOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfferFindUniqueOrThrowArgs>(args: SelectSubset<T, OfferFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfferFindFirstArgs>(args?: SelectSubset<T, OfferFindFirstArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindFirstOrThrowArgs} args - Arguments to find a Offer
     * @example
     * // Get one Offer
     * const offer = await prisma.offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfferFindFirstOrThrowArgs>(args?: SelectSubset<T, OfferFindFirstOrThrowArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Offers
     * const offers = await prisma.offer.findMany()
     * 
     * // Get first 10 Offers
     * const offers = await prisma.offer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const offerWithIdOnly = await prisma.offer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OfferFindManyArgs>(args?: SelectSubset<T, OfferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Offer.
     * @param {OfferCreateArgs} args - Arguments to create a Offer.
     * @example
     * // Create one Offer
     * const Offer = await prisma.offer.create({
     *   data: {
     *     // ... data to create a Offer
     *   }
     * })
     * 
     */
    create<T extends OfferCreateArgs>(args: SelectSubset<T, OfferCreateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Offers.
     * @param {OfferCreateManyArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OfferCreateManyArgs>(args?: SelectSubset<T, OfferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Offers and returns the data saved in the database.
     * @param {OfferCreateManyAndReturnArgs} args - Arguments to create many Offers.
     * @example
     * // Create many Offers
     * const offer = await prisma.offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OfferCreateManyAndReturnArgs>(args?: SelectSubset<T, OfferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Offer.
     * @param {OfferDeleteArgs} args - Arguments to delete one Offer.
     * @example
     * // Delete one Offer
     * const Offer = await prisma.offer.delete({
     *   where: {
     *     // ... filter to delete one Offer
     *   }
     * })
     * 
     */
    delete<T extends OfferDeleteArgs>(args: SelectSubset<T, OfferDeleteArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Offer.
     * @param {OfferUpdateArgs} args - Arguments to update one Offer.
     * @example
     * // Update one Offer
     * const offer = await prisma.offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OfferUpdateArgs>(args: SelectSubset<T, OfferUpdateArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Offers.
     * @param {OfferDeleteManyArgs} args - Arguments to filter Offers to delete.
     * @example
     * // Delete a few Offers
     * const { count } = await prisma.offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OfferDeleteManyArgs>(args?: SelectSubset<T, OfferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OfferUpdateManyArgs>(args: SelectSubset<T, OfferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Offers and returns the data updated in the database.
     * @param {OfferUpdateManyAndReturnArgs} args - Arguments to update many Offers.
     * @example
     * // Update many Offers
     * const offer = await prisma.offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Offers and only return the `id`
     * const offerWithIdOnly = await prisma.offer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OfferUpdateManyAndReturnArgs>(args: SelectSubset<T, OfferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Offer.
     * @param {OfferUpsertArgs} args - Arguments to update or create a Offer.
     * @example
     * // Update or create a Offer
     * const offer = await prisma.offer.upsert({
     *   create: {
     *     // ... data to create a Offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Offer we want to update
     *   }
     * })
     */
    upsert<T extends OfferUpsertArgs>(args: SelectSubset<T, OfferUpsertArgs<ExtArgs>>): Prisma__OfferClient<$Result.GetResult<Prisma.$OfferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferCountArgs} args - Arguments to filter Offers to count.
     * @example
     * // Count the number of Offers
     * const count = await prisma.offer.count({
     *   where: {
     *     // ... the filter for the Offers we want to count
     *   }
     * })
    **/
    count<T extends OfferCountArgs>(
      args?: Subset<T, OfferCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OfferCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfferAggregateArgs>(args: Subset<T, OfferAggregateArgs>): Prisma.PrismaPromise<GetOfferAggregateType<T>>

    /**
     * Group by Offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfferGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OfferGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OfferGroupByArgs['orderBy'] }
        : { orderBy?: OfferGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OfferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Offer model
   */
  readonly fields: OfferFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OfferClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Offer model
   */
  interface OfferFieldRefs {
    readonly id: FieldRef<"Offer", 'Int'>
    readonly createdAt: FieldRef<"Offer", 'DateTime'>
    readonly updatedAt: FieldRef<"Offer", 'DateTime'>
    readonly title: FieldRef<"Offer", 'String'>
    readonly description: FieldRef<"Offer", 'String'>
    readonly image: FieldRef<"Offer", 'String'>
    readonly price: FieldRef<"Offer", 'Float'>
    readonly discount: FieldRef<"Offer", 'Float'>
    readonly isFeatured: FieldRef<"Offer", 'Boolean'>
    readonly featuredUntil: FieldRef<"Offer", 'DateTime'>
    readonly featuredPaidAt: FieldRef<"Offer", 'DateTime'>
    readonly status: FieldRef<"Offer", 'String'>
    readonly expiresAt: FieldRef<"Offer", 'DateTime'>
    readonly providerId: FieldRef<"Offer", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Offer findUnique
   */
  export type OfferFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findUniqueOrThrow
   */
  export type OfferFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer findFirst
   */
  export type OfferFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findFirstOrThrow
   */
  export type OfferFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offer to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Offers.
     */
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer findMany
   */
  export type OfferFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter, which Offers to fetch.
     */
    where?: OfferWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Offers to fetch.
     */
    orderBy?: OfferOrderByWithRelationInput | OfferOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Offers.
     */
    cursor?: OfferWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Offers.
     */
    skip?: number
    distinct?: OfferScalarFieldEnum | OfferScalarFieldEnum[]
  }

  /**
   * Offer create
   */
  export type OfferCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to create a Offer.
     */
    data: XOR<OfferCreateInput, OfferUncheckedCreateInput>
  }

  /**
   * Offer createMany
   */
  export type OfferCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
  }

  /**
   * Offer createManyAndReturn
   */
  export type OfferCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to create many Offers.
     */
    data: OfferCreateManyInput | OfferCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer update
   */
  export type OfferUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The data needed to update a Offer.
     */
    data: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
    /**
     * Choose, which Offer to update.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer updateMany
   */
  export type OfferUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
  }

  /**
   * Offer updateManyAndReturn
   */
  export type OfferUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * The data used to update Offers.
     */
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyInput>
    /**
     * Filter which Offers to update
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Offer upsert
   */
  export type OfferUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * The filter to search for the Offer to update in case it exists.
     */
    where: OfferWhereUniqueInput
    /**
     * In case the Offer found by the `where` argument doesn't exist, create a new Offer with this data.
     */
    create: XOR<OfferCreateInput, OfferUncheckedCreateInput>
    /**
     * In case the Offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OfferUpdateInput, OfferUncheckedUpdateInput>
  }

  /**
   * Offer delete
   */
  export type OfferDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
    /**
     * Filter which Offer to delete.
     */
    where: OfferWhereUniqueInput
  }

  /**
   * Offer deleteMany
   */
  export type OfferDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Offers to delete
     */
    where?: OfferWhereInput
    /**
     * Limit how many Offers to delete.
     */
    limit?: number
  }

  /**
   * Offer without action
   */
  export type OfferDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Offer
     */
    select?: OfferSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Offer
     */
    omit?: OfferOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OfferInclude<ExtArgs> | null
  }


  /**
   * Model FinishingRequest
   */

  export type AggregateFinishingRequest = {
    _count: FinishingRequestCountAggregateOutputType | null
    _avg: FinishingRequestAvgAggregateOutputType | null
    _sum: FinishingRequestSumAggregateOutputType | null
    _min: FinishingRequestMinAggregateOutputType | null
    _max: FinishingRequestMaxAggregateOutputType | null
  }

  export type FinishingRequestAvgAggregateOutputType = {
    id: number | null
    budget: number | null
    selectedProposalId: number | null
    clientId: number | null
  }

  export type FinishingRequestSumAggregateOutputType = {
    id: number | null
    budget: number | null
    selectedProposalId: number | null
    clientId: number | null
  }

  export type FinishingRequestMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    budget: number | null
    location: string | null
    city: string | null
    governorate: string | null
    isCompanyRequest: boolean | null
    specialization: string | null
    images: string | null
    status: string | null
    selectedProposalId: number | null
    clientId: number | null
  }

  export type FinishingRequestMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    budget: number | null
    location: string | null
    city: string | null
    governorate: string | null
    isCompanyRequest: boolean | null
    specialization: string | null
    images: string | null
    status: string | null
    selectedProposalId: number | null
    clientId: number | null
  }

  export type FinishingRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    budget: number
    location: number
    city: number
    governorate: number
    isCompanyRequest: number
    specialization: number
    images: number
    status: number
    selectedProposalId: number
    clientId: number
    _all: number
  }


  export type FinishingRequestAvgAggregateInputType = {
    id?: true
    budget?: true
    selectedProposalId?: true
    clientId?: true
  }

  export type FinishingRequestSumAggregateInputType = {
    id?: true
    budget?: true
    selectedProposalId?: true
    clientId?: true
  }

  export type FinishingRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    budget?: true
    location?: true
    city?: true
    governorate?: true
    isCompanyRequest?: true
    specialization?: true
    images?: true
    status?: true
    selectedProposalId?: true
    clientId?: true
  }

  export type FinishingRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    budget?: true
    location?: true
    city?: true
    governorate?: true
    isCompanyRequest?: true
    specialization?: true
    images?: true
    status?: true
    selectedProposalId?: true
    clientId?: true
  }

  export type FinishingRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    budget?: true
    location?: true
    city?: true
    governorate?: true
    isCompanyRequest?: true
    specialization?: true
    images?: true
    status?: true
    selectedProposalId?: true
    clientId?: true
    _all?: true
  }

  export type FinishingRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinishingRequest to aggregate.
     */
    where?: FinishingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishingRequests to fetch.
     */
    orderBy?: FinishingRequestOrderByWithRelationInput | FinishingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FinishingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FinishingRequests
    **/
    _count?: true | FinishingRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FinishingRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FinishingRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FinishingRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FinishingRequestMaxAggregateInputType
  }

  export type GetFinishingRequestAggregateType<T extends FinishingRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateFinishingRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFinishingRequest[P]>
      : GetScalarType<T[P], AggregateFinishingRequest[P]>
  }




  export type FinishingRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FinishingRequestWhereInput
    orderBy?: FinishingRequestOrderByWithAggregationInput | FinishingRequestOrderByWithAggregationInput[]
    by: FinishingRequestScalarFieldEnum[] | FinishingRequestScalarFieldEnum
    having?: FinishingRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FinishingRequestCountAggregateInputType | true
    _avg?: FinishingRequestAvgAggregateInputType
    _sum?: FinishingRequestSumAggregateInputType
    _min?: FinishingRequestMinAggregateInputType
    _max?: FinishingRequestMaxAggregateInputType
  }

  export type FinishingRequestGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    budget: number | null
    location: string
    city: string
    governorate: string
    isCompanyRequest: boolean
    specialization: string | null
    images: string
    status: string
    selectedProposalId: number | null
    clientId: number
    _count: FinishingRequestCountAggregateOutputType | null
    _avg: FinishingRequestAvgAggregateOutputType | null
    _sum: FinishingRequestSumAggregateOutputType | null
    _min: FinishingRequestMinAggregateOutputType | null
    _max: FinishingRequestMaxAggregateOutputType | null
  }

  type GetFinishingRequestGroupByPayload<T extends FinishingRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FinishingRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FinishingRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FinishingRequestGroupByOutputType[P]>
            : GetScalarType<T[P], FinishingRequestGroupByOutputType[P]>
        }
      >
    >


  export type FinishingRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    location?: boolean
    city?: boolean
    governorate?: boolean
    isCompanyRequest?: boolean
    specialization?: boolean
    images?: boolean
    status?: boolean
    selectedProposalId?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposals?: boolean | FinishingRequest$proposalsArgs<ExtArgs>
    _count?: boolean | FinishingRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finishingRequest"]>

  export type FinishingRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    location?: boolean
    city?: boolean
    governorate?: boolean
    isCompanyRequest?: boolean
    specialization?: boolean
    images?: boolean
    status?: boolean
    selectedProposalId?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finishingRequest"]>

  export type FinishingRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    location?: boolean
    city?: boolean
    governorate?: boolean
    isCompanyRequest?: boolean
    specialization?: boolean
    images?: boolean
    status?: boolean
    selectedProposalId?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["finishingRequest"]>

  export type FinishingRequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    budget?: boolean
    location?: boolean
    city?: boolean
    governorate?: boolean
    isCompanyRequest?: boolean
    specialization?: boolean
    images?: boolean
    status?: boolean
    selectedProposalId?: boolean
    clientId?: boolean
  }

  export type FinishingRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "budget" | "location" | "city" | "governorate" | "isCompanyRequest" | "specialization" | "images" | "status" | "selectedProposalId" | "clientId", ExtArgs["result"]["finishingRequest"]>
  export type FinishingRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    proposals?: boolean | FinishingRequest$proposalsArgs<ExtArgs>
    _count?: boolean | FinishingRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FinishingRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FinishingRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FinishingRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FinishingRequest"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      proposals: Prisma.$ProposalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      budget: number | null
      location: string
      city: string
      governorate: string
      isCompanyRequest: boolean
      specialization: string | null
      images: string
      status: string
      selectedProposalId: number | null
      clientId: number
    }, ExtArgs["result"]["finishingRequest"]>
    composites: {}
  }

  type FinishingRequestGetPayload<S extends boolean | null | undefined | FinishingRequestDefaultArgs> = $Result.GetResult<Prisma.$FinishingRequestPayload, S>

  type FinishingRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FinishingRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FinishingRequestCountAggregateInputType | true
    }

  export interface FinishingRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FinishingRequest'], meta: { name: 'FinishingRequest' } }
    /**
     * Find zero or one FinishingRequest that matches the filter.
     * @param {FinishingRequestFindUniqueArgs} args - Arguments to find a FinishingRequest
     * @example
     * // Get one FinishingRequest
     * const finishingRequest = await prisma.finishingRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FinishingRequestFindUniqueArgs>(args: SelectSubset<T, FinishingRequestFindUniqueArgs<ExtArgs>>): Prisma__FinishingRequestClient<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FinishingRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FinishingRequestFindUniqueOrThrowArgs} args - Arguments to find a FinishingRequest
     * @example
     * // Get one FinishingRequest
     * const finishingRequest = await prisma.finishingRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FinishingRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, FinishingRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FinishingRequestClient<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinishingRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishingRequestFindFirstArgs} args - Arguments to find a FinishingRequest
     * @example
     * // Get one FinishingRequest
     * const finishingRequest = await prisma.finishingRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FinishingRequestFindFirstArgs>(args?: SelectSubset<T, FinishingRequestFindFirstArgs<ExtArgs>>): Prisma__FinishingRequestClient<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FinishingRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishingRequestFindFirstOrThrowArgs} args - Arguments to find a FinishingRequest
     * @example
     * // Get one FinishingRequest
     * const finishingRequest = await prisma.finishingRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FinishingRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, FinishingRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__FinishingRequestClient<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FinishingRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishingRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FinishingRequests
     * const finishingRequests = await prisma.finishingRequest.findMany()
     * 
     * // Get first 10 FinishingRequests
     * const finishingRequests = await prisma.finishingRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const finishingRequestWithIdOnly = await prisma.finishingRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FinishingRequestFindManyArgs>(args?: SelectSubset<T, FinishingRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FinishingRequest.
     * @param {FinishingRequestCreateArgs} args - Arguments to create a FinishingRequest.
     * @example
     * // Create one FinishingRequest
     * const FinishingRequest = await prisma.finishingRequest.create({
     *   data: {
     *     // ... data to create a FinishingRequest
     *   }
     * })
     * 
     */
    create<T extends FinishingRequestCreateArgs>(args: SelectSubset<T, FinishingRequestCreateArgs<ExtArgs>>): Prisma__FinishingRequestClient<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FinishingRequests.
     * @param {FinishingRequestCreateManyArgs} args - Arguments to create many FinishingRequests.
     * @example
     * // Create many FinishingRequests
     * const finishingRequest = await prisma.finishingRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FinishingRequestCreateManyArgs>(args?: SelectSubset<T, FinishingRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FinishingRequests and returns the data saved in the database.
     * @param {FinishingRequestCreateManyAndReturnArgs} args - Arguments to create many FinishingRequests.
     * @example
     * // Create many FinishingRequests
     * const finishingRequest = await prisma.finishingRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FinishingRequests and only return the `id`
     * const finishingRequestWithIdOnly = await prisma.finishingRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FinishingRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, FinishingRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FinishingRequest.
     * @param {FinishingRequestDeleteArgs} args - Arguments to delete one FinishingRequest.
     * @example
     * // Delete one FinishingRequest
     * const FinishingRequest = await prisma.finishingRequest.delete({
     *   where: {
     *     // ... filter to delete one FinishingRequest
     *   }
     * })
     * 
     */
    delete<T extends FinishingRequestDeleteArgs>(args: SelectSubset<T, FinishingRequestDeleteArgs<ExtArgs>>): Prisma__FinishingRequestClient<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FinishingRequest.
     * @param {FinishingRequestUpdateArgs} args - Arguments to update one FinishingRequest.
     * @example
     * // Update one FinishingRequest
     * const finishingRequest = await prisma.finishingRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FinishingRequestUpdateArgs>(args: SelectSubset<T, FinishingRequestUpdateArgs<ExtArgs>>): Prisma__FinishingRequestClient<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FinishingRequests.
     * @param {FinishingRequestDeleteManyArgs} args - Arguments to filter FinishingRequests to delete.
     * @example
     * // Delete a few FinishingRequests
     * const { count } = await prisma.finishingRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FinishingRequestDeleteManyArgs>(args?: SelectSubset<T, FinishingRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinishingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishingRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FinishingRequests
     * const finishingRequest = await prisma.finishingRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FinishingRequestUpdateManyArgs>(args: SelectSubset<T, FinishingRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FinishingRequests and returns the data updated in the database.
     * @param {FinishingRequestUpdateManyAndReturnArgs} args - Arguments to update many FinishingRequests.
     * @example
     * // Update many FinishingRequests
     * const finishingRequest = await prisma.finishingRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FinishingRequests and only return the `id`
     * const finishingRequestWithIdOnly = await prisma.finishingRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FinishingRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, FinishingRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FinishingRequest.
     * @param {FinishingRequestUpsertArgs} args - Arguments to update or create a FinishingRequest.
     * @example
     * // Update or create a FinishingRequest
     * const finishingRequest = await prisma.finishingRequest.upsert({
     *   create: {
     *     // ... data to create a FinishingRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FinishingRequest we want to update
     *   }
     * })
     */
    upsert<T extends FinishingRequestUpsertArgs>(args: SelectSubset<T, FinishingRequestUpsertArgs<ExtArgs>>): Prisma__FinishingRequestClient<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FinishingRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishingRequestCountArgs} args - Arguments to filter FinishingRequests to count.
     * @example
     * // Count the number of FinishingRequests
     * const count = await prisma.finishingRequest.count({
     *   where: {
     *     // ... the filter for the FinishingRequests we want to count
     *   }
     * })
    **/
    count<T extends FinishingRequestCountArgs>(
      args?: Subset<T, FinishingRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FinishingRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FinishingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishingRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FinishingRequestAggregateArgs>(args: Subset<T, FinishingRequestAggregateArgs>): Prisma.PrismaPromise<GetFinishingRequestAggregateType<T>>

    /**
     * Group by FinishingRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FinishingRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FinishingRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FinishingRequestGroupByArgs['orderBy'] }
        : { orderBy?: FinishingRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FinishingRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFinishingRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FinishingRequest model
   */
  readonly fields: FinishingRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FinishingRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FinishingRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    proposals<T extends FinishingRequest$proposalsArgs<ExtArgs> = {}>(args?: Subset<T, FinishingRequest$proposalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FinishingRequest model
   */
  interface FinishingRequestFieldRefs {
    readonly id: FieldRef<"FinishingRequest", 'Int'>
    readonly createdAt: FieldRef<"FinishingRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"FinishingRequest", 'DateTime'>
    readonly title: FieldRef<"FinishingRequest", 'String'>
    readonly description: FieldRef<"FinishingRequest", 'String'>
    readonly budget: FieldRef<"FinishingRequest", 'Float'>
    readonly location: FieldRef<"FinishingRequest", 'String'>
    readonly city: FieldRef<"FinishingRequest", 'String'>
    readonly governorate: FieldRef<"FinishingRequest", 'String'>
    readonly isCompanyRequest: FieldRef<"FinishingRequest", 'Boolean'>
    readonly specialization: FieldRef<"FinishingRequest", 'String'>
    readonly images: FieldRef<"FinishingRequest", 'String'>
    readonly status: FieldRef<"FinishingRequest", 'String'>
    readonly selectedProposalId: FieldRef<"FinishingRequest", 'Int'>
    readonly clientId: FieldRef<"FinishingRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FinishingRequest findUnique
   */
  export type FinishingRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    /**
     * Filter, which FinishingRequest to fetch.
     */
    where: FinishingRequestWhereUniqueInput
  }

  /**
   * FinishingRequest findUniqueOrThrow
   */
  export type FinishingRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    /**
     * Filter, which FinishingRequest to fetch.
     */
    where: FinishingRequestWhereUniqueInput
  }

  /**
   * FinishingRequest findFirst
   */
  export type FinishingRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    /**
     * Filter, which FinishingRequest to fetch.
     */
    where?: FinishingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishingRequests to fetch.
     */
    orderBy?: FinishingRequestOrderByWithRelationInput | FinishingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinishingRequests.
     */
    cursor?: FinishingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinishingRequests.
     */
    distinct?: FinishingRequestScalarFieldEnum | FinishingRequestScalarFieldEnum[]
  }

  /**
   * FinishingRequest findFirstOrThrow
   */
  export type FinishingRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    /**
     * Filter, which FinishingRequest to fetch.
     */
    where?: FinishingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishingRequests to fetch.
     */
    orderBy?: FinishingRequestOrderByWithRelationInput | FinishingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FinishingRequests.
     */
    cursor?: FinishingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishingRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FinishingRequests.
     */
    distinct?: FinishingRequestScalarFieldEnum | FinishingRequestScalarFieldEnum[]
  }

  /**
   * FinishingRequest findMany
   */
  export type FinishingRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    /**
     * Filter, which FinishingRequests to fetch.
     */
    where?: FinishingRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FinishingRequests to fetch.
     */
    orderBy?: FinishingRequestOrderByWithRelationInput | FinishingRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FinishingRequests.
     */
    cursor?: FinishingRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FinishingRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FinishingRequests.
     */
    skip?: number
    distinct?: FinishingRequestScalarFieldEnum | FinishingRequestScalarFieldEnum[]
  }

  /**
   * FinishingRequest create
   */
  export type FinishingRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a FinishingRequest.
     */
    data: XOR<FinishingRequestCreateInput, FinishingRequestUncheckedCreateInput>
  }

  /**
   * FinishingRequest createMany
   */
  export type FinishingRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FinishingRequests.
     */
    data: FinishingRequestCreateManyInput | FinishingRequestCreateManyInput[]
  }

  /**
   * FinishingRequest createManyAndReturn
   */
  export type FinishingRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * The data used to create many FinishingRequests.
     */
    data: FinishingRequestCreateManyInput | FinishingRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinishingRequest update
   */
  export type FinishingRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a FinishingRequest.
     */
    data: XOR<FinishingRequestUpdateInput, FinishingRequestUncheckedUpdateInput>
    /**
     * Choose, which FinishingRequest to update.
     */
    where: FinishingRequestWhereUniqueInput
  }

  /**
   * FinishingRequest updateMany
   */
  export type FinishingRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FinishingRequests.
     */
    data: XOR<FinishingRequestUpdateManyMutationInput, FinishingRequestUncheckedUpdateManyInput>
    /**
     * Filter which FinishingRequests to update
     */
    where?: FinishingRequestWhereInput
    /**
     * Limit how many FinishingRequests to update.
     */
    limit?: number
  }

  /**
   * FinishingRequest updateManyAndReturn
   */
  export type FinishingRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * The data used to update FinishingRequests.
     */
    data: XOR<FinishingRequestUpdateManyMutationInput, FinishingRequestUncheckedUpdateManyInput>
    /**
     * Filter which FinishingRequests to update
     */
    where?: FinishingRequestWhereInput
    /**
     * Limit how many FinishingRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FinishingRequest upsert
   */
  export type FinishingRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the FinishingRequest to update in case it exists.
     */
    where: FinishingRequestWhereUniqueInput
    /**
     * In case the FinishingRequest found by the `where` argument doesn't exist, create a new FinishingRequest with this data.
     */
    create: XOR<FinishingRequestCreateInput, FinishingRequestUncheckedCreateInput>
    /**
     * In case the FinishingRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FinishingRequestUpdateInput, FinishingRequestUncheckedUpdateInput>
  }

  /**
   * FinishingRequest delete
   */
  export type FinishingRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
    /**
     * Filter which FinishingRequest to delete.
     */
    where: FinishingRequestWhereUniqueInput
  }

  /**
   * FinishingRequest deleteMany
   */
  export type FinishingRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FinishingRequests to delete
     */
    where?: FinishingRequestWhereInput
    /**
     * Limit how many FinishingRequests to delete.
     */
    limit?: number
  }

  /**
   * FinishingRequest.proposals
   */
  export type FinishingRequest$proposalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    cursor?: ProposalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * FinishingRequest without action
   */
  export type FinishingRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FinishingRequest
     */
    select?: FinishingRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FinishingRequest
     */
    omit?: FinishingRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FinishingRequestInclude<ExtArgs> | null
  }


  /**
   * Model Proposal
   */

  export type AggregateProposal = {
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  export type ProposalAvgAggregateOutputType = {
    id: number | null
    price: number | null
    requestId: number | null
    providerId: number | null
  }

  export type ProposalSumAggregateOutputType = {
    id: number | null
    price: number | null
    requestId: number | null
    providerId: number | null
  }

  export type ProposalMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    price: number | null
    duration: string | null
    notes: string | null
    attachments: string | null
    status: string | null
    requestId: number | null
    providerId: number | null
  }

  export type ProposalMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    price: number | null
    duration: string | null
    notes: string | null
    attachments: string | null
    status: string | null
    requestId: number | null
    providerId: number | null
  }

  export type ProposalCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    description: number
    price: number
    duration: number
    notes: number
    attachments: number
    status: number
    requestId: number
    providerId: number
    _all: number
  }


  export type ProposalAvgAggregateInputType = {
    id?: true
    price?: true
    requestId?: true
    providerId?: true
  }

  export type ProposalSumAggregateInputType = {
    id?: true
    price?: true
    requestId?: true
    providerId?: true
  }

  export type ProposalMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    price?: true
    duration?: true
    notes?: true
    attachments?: true
    status?: true
    requestId?: true
    providerId?: true
  }

  export type ProposalMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    price?: true
    duration?: true
    notes?: true
    attachments?: true
    status?: true
    requestId?: true
    providerId?: true
  }

  export type ProposalCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    price?: true
    duration?: true
    notes?: true
    attachments?: true
    status?: true
    requestId?: true
    providerId?: true
    _all?: true
  }

  export type ProposalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposal to aggregate.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposals
    **/
    _count?: true | ProposalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposalMaxAggregateInputType
  }

  export type GetProposalAggregateType<T extends ProposalAggregateArgs> = {
        [P in keyof T & keyof AggregateProposal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProposal[P]>
      : GetScalarType<T[P], AggregateProposal[P]>
  }




  export type ProposalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposalWhereInput
    orderBy?: ProposalOrderByWithAggregationInput | ProposalOrderByWithAggregationInput[]
    by: ProposalScalarFieldEnum[] | ProposalScalarFieldEnum
    having?: ProposalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposalCountAggregateInputType | true
    _avg?: ProposalAvgAggregateInputType
    _sum?: ProposalSumAggregateInputType
    _min?: ProposalMinAggregateInputType
    _max?: ProposalMaxAggregateInputType
  }

  export type ProposalGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    description: string
    price: number
    duration: string
    notes: string | null
    attachments: string
    status: string
    requestId: number
    providerId: number
    _count: ProposalCountAggregateOutputType | null
    _avg: ProposalAvgAggregateOutputType | null
    _sum: ProposalSumAggregateOutputType | null
    _min: ProposalMinAggregateOutputType | null
    _max: ProposalMaxAggregateOutputType | null
  }

  type GetProposalGroupByPayload<T extends ProposalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposalGroupByOutputType[P]>
            : GetScalarType<T[P], ProposalGroupByOutputType[P]>
        }
      >
    >


  export type ProposalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    notes?: boolean
    attachments?: boolean
    status?: boolean
    requestId?: boolean
    providerId?: boolean
    request?: boolean | FinishingRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    notes?: boolean
    attachments?: boolean
    status?: boolean
    requestId?: boolean
    providerId?: boolean
    request?: boolean | FinishingRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    notes?: boolean
    attachments?: boolean
    status?: boolean
    requestId?: boolean
    providerId?: boolean
    request?: boolean | FinishingRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proposal"]>

  export type ProposalSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    price?: boolean
    duration?: boolean
    notes?: boolean
    attachments?: boolean
    status?: boolean
    requestId?: boolean
    providerId?: boolean
  }

  export type ProposalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "description" | "price" | "duration" | "notes" | "attachments" | "status" | "requestId" | "providerId", ExtArgs["result"]["proposal"]>
  export type ProposalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | FinishingRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | FinishingRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProposalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    request?: boolean | FinishingRequestDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProposalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proposal"
    objects: {
      request: Prisma.$FinishingRequestPayload<ExtArgs>
      provider: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      description: string
      price: number
      duration: string
      notes: string | null
      attachments: string
      status: string
      requestId: number
      providerId: number
    }, ExtArgs["result"]["proposal"]>
    composites: {}
  }

  type ProposalGetPayload<S extends boolean | null | undefined | ProposalDefaultArgs> = $Result.GetResult<Prisma.$ProposalPayload, S>

  type ProposalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProposalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProposalCountAggregateInputType | true
    }

  export interface ProposalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proposal'], meta: { name: 'Proposal' } }
    /**
     * Find zero or one Proposal that matches the filter.
     * @param {ProposalFindUniqueArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProposalFindUniqueArgs>(args: SelectSubset<T, ProposalFindUniqueArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proposal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProposalFindUniqueOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProposalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProposalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProposalFindFirstArgs>(args?: SelectSubset<T, ProposalFindFirstArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proposal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindFirstOrThrowArgs} args - Arguments to find a Proposal
     * @example
     * // Get one Proposal
     * const proposal = await prisma.proposal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProposalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProposalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proposals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposals
     * const proposals = await prisma.proposal.findMany()
     * 
     * // Get first 10 Proposals
     * const proposals = await prisma.proposal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposalWithIdOnly = await prisma.proposal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProposalFindManyArgs>(args?: SelectSubset<T, ProposalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proposal.
     * @param {ProposalCreateArgs} args - Arguments to create a Proposal.
     * @example
     * // Create one Proposal
     * const Proposal = await prisma.proposal.create({
     *   data: {
     *     // ... data to create a Proposal
     *   }
     * })
     * 
     */
    create<T extends ProposalCreateArgs>(args: SelectSubset<T, ProposalCreateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proposals.
     * @param {ProposalCreateManyArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProposalCreateManyArgs>(args?: SelectSubset<T, ProposalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proposals and returns the data saved in the database.
     * @param {ProposalCreateManyAndReturnArgs} args - Arguments to create many Proposals.
     * @example
     * // Create many Proposals
     * const proposal = await prisma.proposal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProposalCreateManyAndReturnArgs>(args?: SelectSubset<T, ProposalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proposal.
     * @param {ProposalDeleteArgs} args - Arguments to delete one Proposal.
     * @example
     * // Delete one Proposal
     * const Proposal = await prisma.proposal.delete({
     *   where: {
     *     // ... filter to delete one Proposal
     *   }
     * })
     * 
     */
    delete<T extends ProposalDeleteArgs>(args: SelectSubset<T, ProposalDeleteArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proposal.
     * @param {ProposalUpdateArgs} args - Arguments to update one Proposal.
     * @example
     * // Update one Proposal
     * const proposal = await prisma.proposal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProposalUpdateArgs>(args: SelectSubset<T, ProposalUpdateArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proposals.
     * @param {ProposalDeleteManyArgs} args - Arguments to filter Proposals to delete.
     * @example
     * // Delete a few Proposals
     * const { count } = await prisma.proposal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProposalDeleteManyArgs>(args?: SelectSubset<T, ProposalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProposalUpdateManyArgs>(args: SelectSubset<T, ProposalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposals and returns the data updated in the database.
     * @param {ProposalUpdateManyAndReturnArgs} args - Arguments to update many Proposals.
     * @example
     * // Update many Proposals
     * const proposal = await prisma.proposal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proposals and only return the `id`
     * const proposalWithIdOnly = await prisma.proposal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProposalUpdateManyAndReturnArgs>(args: SelectSubset<T, ProposalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proposal.
     * @param {ProposalUpsertArgs} args - Arguments to update or create a Proposal.
     * @example
     * // Update or create a Proposal
     * const proposal = await prisma.proposal.upsert({
     *   create: {
     *     // ... data to create a Proposal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proposal we want to update
     *   }
     * })
     */
    upsert<T extends ProposalUpsertArgs>(args: SelectSubset<T, ProposalUpsertArgs<ExtArgs>>): Prisma__ProposalClient<$Result.GetResult<Prisma.$ProposalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proposals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalCountArgs} args - Arguments to filter Proposals to count.
     * @example
     * // Count the number of Proposals
     * const count = await prisma.proposal.count({
     *   where: {
     *     // ... the filter for the Proposals we want to count
     *   }
     * })
    **/
    count<T extends ProposalCountArgs>(
      args?: Subset<T, ProposalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProposalAggregateArgs>(args: Subset<T, ProposalAggregateArgs>): Prisma.PrismaPromise<GetProposalAggregateType<T>>

    /**
     * Group by Proposal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProposalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposalGroupByArgs['orderBy'] }
        : { orderBy?: ProposalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProposalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proposal model
   */
  readonly fields: ProposalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proposal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    request<T extends FinishingRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FinishingRequestDefaultArgs<ExtArgs>>): Prisma__FinishingRequestClient<$Result.GetResult<Prisma.$FinishingRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Proposal model
   */
  interface ProposalFieldRefs {
    readonly id: FieldRef<"Proposal", 'Int'>
    readonly createdAt: FieldRef<"Proposal", 'DateTime'>
    readonly updatedAt: FieldRef<"Proposal", 'DateTime'>
    readonly description: FieldRef<"Proposal", 'String'>
    readonly price: FieldRef<"Proposal", 'Float'>
    readonly duration: FieldRef<"Proposal", 'String'>
    readonly notes: FieldRef<"Proposal", 'String'>
    readonly attachments: FieldRef<"Proposal", 'String'>
    readonly status: FieldRef<"Proposal", 'String'>
    readonly requestId: FieldRef<"Proposal", 'Int'>
    readonly providerId: FieldRef<"Proposal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Proposal findUnique
   */
  export type ProposalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findUniqueOrThrow
   */
  export type ProposalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal findFirst
   */
  export type ProposalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findFirstOrThrow
   */
  export type ProposalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposal to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposals.
     */
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal findMany
   */
  export type ProposalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter, which Proposals to fetch.
     */
    where?: ProposalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposals to fetch.
     */
    orderBy?: ProposalOrderByWithRelationInput | ProposalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposals.
     */
    cursor?: ProposalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposals.
     */
    skip?: number
    distinct?: ProposalScalarFieldEnum | ProposalScalarFieldEnum[]
  }

  /**
   * Proposal create
   */
  export type ProposalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to create a Proposal.
     */
    data: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
  }

  /**
   * Proposal createMany
   */
  export type ProposalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
  }

  /**
   * Proposal createManyAndReturn
   */
  export type ProposalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to create many Proposals.
     */
    data: ProposalCreateManyInput | ProposalCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal update
   */
  export type ProposalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The data needed to update a Proposal.
     */
    data: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
    /**
     * Choose, which Proposal to update.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal updateMany
   */
  export type ProposalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
  }

  /**
   * Proposal updateManyAndReturn
   */
  export type ProposalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * The data used to update Proposals.
     */
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyInput>
    /**
     * Filter which Proposals to update
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Proposal upsert
   */
  export type ProposalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * The filter to search for the Proposal to update in case it exists.
     */
    where: ProposalWhereUniqueInput
    /**
     * In case the Proposal found by the `where` argument doesn't exist, create a new Proposal with this data.
     */
    create: XOR<ProposalCreateInput, ProposalUncheckedCreateInput>
    /**
     * In case the Proposal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposalUpdateInput, ProposalUncheckedUpdateInput>
  }

  /**
   * Proposal delete
   */
  export type ProposalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
    /**
     * Filter which Proposal to delete.
     */
    where: ProposalWhereUniqueInput
  }

  /**
   * Proposal deleteMany
   */
  export type ProposalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposals to delete
     */
    where?: ProposalWhereInput
    /**
     * Limit how many Proposals to delete.
     */
    limit?: number
  }

  /**
   * Proposal without action
   */
  export type ProposalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proposal
     */
    select?: ProposalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proposal
     */
    omit?: ProposalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProposalInclude<ExtArgs> | null
  }


  /**
   * Model MaintenanceRequest
   */

  export type AggregateMaintenanceRequest = {
    _count: MaintenanceRequestCountAggregateOutputType | null
    _avg: MaintenanceRequestAvgAggregateOutputType | null
    _sum: MaintenanceRequestSumAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  export type MaintenanceRequestAvgAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type MaintenanceRequestSumAggregateOutputType = {
    id: number | null
    clientId: number | null
  }

  export type MaintenanceRequestMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    specialization: string | null
    location: string | null
    city: string | null
    governorate: string | null
    urgency: string | null
    images: string | null
    status: string | null
    clientId: number | null
  }

  export type MaintenanceRequestMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    specialization: string | null
    location: string | null
    city: string | null
    governorate: string | null
    urgency: string | null
    images: string | null
    status: string | null
    clientId: number | null
  }

  export type MaintenanceRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    specialization: number
    location: number
    city: number
    governorate: number
    urgency: number
    images: number
    status: number
    clientId: number
    _all: number
  }


  export type MaintenanceRequestAvgAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type MaintenanceRequestSumAggregateInputType = {
    id?: true
    clientId?: true
  }

  export type MaintenanceRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    specialization?: true
    location?: true
    city?: true
    governorate?: true
    urgency?: true
    images?: true
    status?: true
    clientId?: true
  }

  export type MaintenanceRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    specialization?: true
    location?: true
    city?: true
    governorate?: true
    urgency?: true
    images?: true
    status?: true
    clientId?: true
  }

  export type MaintenanceRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    specialization?: true
    location?: true
    city?: true
    governorate?: true
    urgency?: true
    images?: true
    status?: true
    clientId?: true
    _all?: true
  }

  export type MaintenanceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRequest to aggregate.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MaintenanceRequests
    **/
    _count?: true | MaintenanceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaintenanceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaintenanceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaintenanceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type GetMaintenanceRequestAggregateType<T extends MaintenanceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateMaintenanceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
      : GetScalarType<T[P], AggregateMaintenanceRequest[P]>
  }




  export type MaintenanceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaintenanceRequestWhereInput
    orderBy?: MaintenanceRequestOrderByWithAggregationInput | MaintenanceRequestOrderByWithAggregationInput[]
    by: MaintenanceRequestScalarFieldEnum[] | MaintenanceRequestScalarFieldEnum
    having?: MaintenanceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaintenanceRequestCountAggregateInputType | true
    _avg?: MaintenanceRequestAvgAggregateInputType
    _sum?: MaintenanceRequestSumAggregateInputType
    _min?: MaintenanceRequestMinAggregateInputType
    _max?: MaintenanceRequestMaxAggregateInputType
  }

  export type MaintenanceRequestGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    specialization: string
    location: string
    city: string
    governorate: string
    urgency: string
    images: string
    status: string
    clientId: number
    _count: MaintenanceRequestCountAggregateOutputType | null
    _avg: MaintenanceRequestAvgAggregateOutputType | null
    _sum: MaintenanceRequestSumAggregateOutputType | null
    _min: MaintenanceRequestMinAggregateOutputType | null
    _max: MaintenanceRequestMaxAggregateOutputType | null
  }

  type GetMaintenanceRequestGroupByPayload<T extends MaintenanceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaintenanceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaintenanceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], MaintenanceRequestGroupByOutputType[P]>
        }
      >
    >


  export type MaintenanceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    specialization?: boolean
    location?: boolean
    city?: boolean
    governorate?: boolean
    urgency?: boolean
    images?: boolean
    status?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRequest"]>

  export type MaintenanceRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    specialization?: boolean
    location?: boolean
    city?: boolean
    governorate?: boolean
    urgency?: boolean
    images?: boolean
    status?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRequest"]>

  export type MaintenanceRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    specialization?: boolean
    location?: boolean
    city?: boolean
    governorate?: boolean
    urgency?: boolean
    images?: boolean
    status?: boolean
    clientId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["maintenanceRequest"]>

  export type MaintenanceRequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    specialization?: boolean
    location?: boolean
    city?: boolean
    governorate?: boolean
    urgency?: boolean
    images?: boolean
    status?: boolean
    clientId?: boolean
  }

  export type MaintenanceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "specialization" | "location" | "city" | "governorate" | "urgency" | "images" | "status" | "clientId", ExtArgs["result"]["maintenanceRequest"]>
  export type MaintenanceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MaintenanceRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MaintenanceRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MaintenanceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MaintenanceRequest"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      specialization: string
      location: string
      city: string
      governorate: string
      urgency: string
      images: string
      status: string
      clientId: number
    }, ExtArgs["result"]["maintenanceRequest"]>
    composites: {}
  }

  type MaintenanceRequestGetPayload<S extends boolean | null | undefined | MaintenanceRequestDefaultArgs> = $Result.GetResult<Prisma.$MaintenanceRequestPayload, S>

  type MaintenanceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MaintenanceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MaintenanceRequestCountAggregateInputType | true
    }

  export interface MaintenanceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MaintenanceRequest'], meta: { name: 'MaintenanceRequest' } }
    /**
     * Find zero or one MaintenanceRequest that matches the filter.
     * @param {MaintenanceRequestFindUniqueArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaintenanceRequestFindUniqueArgs>(args: SelectSubset<T, MaintenanceRequestFindUniqueArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MaintenanceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MaintenanceRequestFindUniqueOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaintenanceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaintenanceRequestFindFirstArgs>(args?: SelectSubset<T, MaintenanceRequestFindFirstArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MaintenanceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindFirstOrThrowArgs} args - Arguments to find a MaintenanceRequest
     * @example
     * // Get one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaintenanceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, MaintenanceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MaintenanceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany()
     * 
     * // Get first 10 MaintenanceRequests
     * const maintenanceRequests = await prisma.maintenanceRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaintenanceRequestFindManyArgs>(args?: SelectSubset<T, MaintenanceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MaintenanceRequest.
     * @param {MaintenanceRequestCreateArgs} args - Arguments to create a MaintenanceRequest.
     * @example
     * // Create one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.create({
     *   data: {
     *     // ... data to create a MaintenanceRequest
     *   }
     * })
     * 
     */
    create<T extends MaintenanceRequestCreateArgs>(args: SelectSubset<T, MaintenanceRequestCreateArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MaintenanceRequests.
     * @param {MaintenanceRequestCreateManyArgs} args - Arguments to create many MaintenanceRequests.
     * @example
     * // Create many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaintenanceRequestCreateManyArgs>(args?: SelectSubset<T, MaintenanceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MaintenanceRequests and returns the data saved in the database.
     * @param {MaintenanceRequestCreateManyAndReturnArgs} args - Arguments to create many MaintenanceRequests.
     * @example
     * // Create many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MaintenanceRequests and only return the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaintenanceRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, MaintenanceRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MaintenanceRequest.
     * @param {MaintenanceRequestDeleteArgs} args - Arguments to delete one MaintenanceRequest.
     * @example
     * // Delete one MaintenanceRequest
     * const MaintenanceRequest = await prisma.maintenanceRequest.delete({
     *   where: {
     *     // ... filter to delete one MaintenanceRequest
     *   }
     * })
     * 
     */
    delete<T extends MaintenanceRequestDeleteArgs>(args: SelectSubset<T, MaintenanceRequestDeleteArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MaintenanceRequest.
     * @param {MaintenanceRequestUpdateArgs} args - Arguments to update one MaintenanceRequest.
     * @example
     * // Update one MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaintenanceRequestUpdateArgs>(args: SelectSubset<T, MaintenanceRequestUpdateArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MaintenanceRequests.
     * @param {MaintenanceRequestDeleteManyArgs} args - Arguments to filter MaintenanceRequests to delete.
     * @example
     * // Delete a few MaintenanceRequests
     * const { count } = await prisma.maintenanceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaintenanceRequestDeleteManyArgs>(args?: SelectSubset<T, MaintenanceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaintenanceRequestUpdateManyArgs>(args: SelectSubset<T, MaintenanceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MaintenanceRequests and returns the data updated in the database.
     * @param {MaintenanceRequestUpdateManyAndReturnArgs} args - Arguments to update many MaintenanceRequests.
     * @example
     * // Update many MaintenanceRequests
     * const maintenanceRequest = await prisma.maintenanceRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MaintenanceRequests and only return the `id`
     * const maintenanceRequestWithIdOnly = await prisma.maintenanceRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MaintenanceRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MaintenanceRequest.
     * @param {MaintenanceRequestUpsertArgs} args - Arguments to update or create a MaintenanceRequest.
     * @example
     * // Update or create a MaintenanceRequest
     * const maintenanceRequest = await prisma.maintenanceRequest.upsert({
     *   create: {
     *     // ... data to create a MaintenanceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MaintenanceRequest we want to update
     *   }
     * })
     */
    upsert<T extends MaintenanceRequestUpsertArgs>(args: SelectSubset<T, MaintenanceRequestUpsertArgs<ExtArgs>>): Prisma__MaintenanceRequestClient<$Result.GetResult<Prisma.$MaintenanceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MaintenanceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestCountArgs} args - Arguments to filter MaintenanceRequests to count.
     * @example
     * // Count the number of MaintenanceRequests
     * const count = await prisma.maintenanceRequest.count({
     *   where: {
     *     // ... the filter for the MaintenanceRequests we want to count
     *   }
     * })
    **/
    count<T extends MaintenanceRequestCountArgs>(
      args?: Subset<T, MaintenanceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaintenanceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaintenanceRequestAggregateArgs>(args: Subset<T, MaintenanceRequestAggregateArgs>): Prisma.PrismaPromise<GetMaintenanceRequestAggregateType<T>>

    /**
     * Group by MaintenanceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaintenanceRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaintenanceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaintenanceRequestGroupByArgs['orderBy'] }
        : { orderBy?: MaintenanceRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaintenanceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaintenanceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MaintenanceRequest model
   */
  readonly fields: MaintenanceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MaintenanceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaintenanceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MaintenanceRequest model
   */
  interface MaintenanceRequestFieldRefs {
    readonly id: FieldRef<"MaintenanceRequest", 'Int'>
    readonly createdAt: FieldRef<"MaintenanceRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"MaintenanceRequest", 'DateTime'>
    readonly title: FieldRef<"MaintenanceRequest", 'String'>
    readonly description: FieldRef<"MaintenanceRequest", 'String'>
    readonly specialization: FieldRef<"MaintenanceRequest", 'String'>
    readonly location: FieldRef<"MaintenanceRequest", 'String'>
    readonly city: FieldRef<"MaintenanceRequest", 'String'>
    readonly governorate: FieldRef<"MaintenanceRequest", 'String'>
    readonly urgency: FieldRef<"MaintenanceRequest", 'String'>
    readonly images: FieldRef<"MaintenanceRequest", 'String'>
    readonly status: FieldRef<"MaintenanceRequest", 'String'>
    readonly clientId: FieldRef<"MaintenanceRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MaintenanceRequest findUnique
   */
  export type MaintenanceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findUniqueOrThrow
   */
  export type MaintenanceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest findFirst
   */
  export type MaintenanceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findFirstOrThrow
   */
  export type MaintenanceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequest to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MaintenanceRequests.
     */
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest findMany
   */
  export type MaintenanceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter, which MaintenanceRequests to fetch.
     */
    where?: MaintenanceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MaintenanceRequests to fetch.
     */
    orderBy?: MaintenanceRequestOrderByWithRelationInput | MaintenanceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MaintenanceRequests.
     */
    cursor?: MaintenanceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MaintenanceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MaintenanceRequests.
     */
    skip?: number
    distinct?: MaintenanceRequestScalarFieldEnum | MaintenanceRequestScalarFieldEnum[]
  }

  /**
   * MaintenanceRequest create
   */
  export type MaintenanceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a MaintenanceRequest.
     */
    data: XOR<MaintenanceRequestCreateInput, MaintenanceRequestUncheckedCreateInput>
  }

  /**
   * MaintenanceRequest createMany
   */
  export type MaintenanceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MaintenanceRequests.
     */
    data: MaintenanceRequestCreateManyInput | MaintenanceRequestCreateManyInput[]
  }

  /**
   * MaintenanceRequest createManyAndReturn
   */
  export type MaintenanceRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * The data used to create many MaintenanceRequests.
     */
    data: MaintenanceRequestCreateManyInput | MaintenanceRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceRequest update
   */
  export type MaintenanceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a MaintenanceRequest.
     */
    data: XOR<MaintenanceRequestUpdateInput, MaintenanceRequestUncheckedUpdateInput>
    /**
     * Choose, which MaintenanceRequest to update.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest updateMany
   */
  export type MaintenanceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MaintenanceRequests.
     */
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRequests to update
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to update.
     */
    limit?: number
  }

  /**
   * MaintenanceRequest updateManyAndReturn
   */
  export type MaintenanceRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * The data used to update MaintenanceRequests.
     */
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyInput>
    /**
     * Filter which MaintenanceRequests to update
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MaintenanceRequest upsert
   */
  export type MaintenanceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the MaintenanceRequest to update in case it exists.
     */
    where: MaintenanceRequestWhereUniqueInput
    /**
     * In case the MaintenanceRequest found by the `where` argument doesn't exist, create a new MaintenanceRequest with this data.
     */
    create: XOR<MaintenanceRequestCreateInput, MaintenanceRequestUncheckedCreateInput>
    /**
     * In case the MaintenanceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaintenanceRequestUpdateInput, MaintenanceRequestUncheckedUpdateInput>
  }

  /**
   * MaintenanceRequest delete
   */
  export type MaintenanceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
    /**
     * Filter which MaintenanceRequest to delete.
     */
    where: MaintenanceRequestWhereUniqueInput
  }

  /**
   * MaintenanceRequest deleteMany
   */
  export type MaintenanceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MaintenanceRequests to delete
     */
    where?: MaintenanceRequestWhereInput
    /**
     * Limit how many MaintenanceRequests to delete.
     */
    limit?: number
  }

  /**
   * MaintenanceRequest without action
   */
  export type MaintenanceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MaintenanceRequest
     */
    select?: MaintenanceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MaintenanceRequest
     */
    omit?: MaintenanceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaintenanceRequestInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    clientId: number | null
    providerId: number | null
  }

  export type RatingSumAggregateOutputType = {
    id: number | null
    rating: number | null
    clientId: number | null
    providerId: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    rating: number | null
    comment: string | null
    clientId: number | null
    providerId: number | null
  }

  export type RatingMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    rating: number | null
    comment: string | null
    clientId: number | null
    providerId: number | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    rating: number
    comment: number
    clientId: number
    providerId: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    id?: true
    rating?: true
    clientId?: true
    providerId?: true
  }

  export type RatingSumAggregateInputType = {
    id?: true
    rating?: true
    clientId?: true
    providerId?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    comment?: true
    clientId?: true
    providerId?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    comment?: true
    clientId?: true
    providerId?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    rating?: true
    comment?: true
    clientId?: true
    providerId?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    rating: number
    comment: string | null
    clientId: number
    providerId: number
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    providerId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    providerId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    providerId?: boolean
    client?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    providerId?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "rating" | "comment" | "clientId" | "providerId", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | UserDefaultArgs<ExtArgs>
    provider?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      client: Prisma.$UserPayload<ExtArgs>
      provider: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      rating: number
      comment: string | null
      clientId: number
      providerId: number
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'Int'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly updatedAt: FieldRef<"Rating", 'DateTime'>
    readonly rating: FieldRef<"Rating", 'Int'>
    readonly comment: FieldRef<"Rating", 'String'>
    readonly clientId: FieldRef<"Rating", 'Int'>
    readonly providerId: FieldRef<"Rating", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model OnlineService
   */

  export type AggregateOnlineService = {
    _count: OnlineServiceCountAggregateOutputType | null
    _avg: OnlineServiceAvgAggregateOutputType | null
    _sum: OnlineServiceSumAggregateOutputType | null
    _min: OnlineServiceMinAggregateOutputType | null
    _max: OnlineServiceMaxAggregateOutputType | null
  }

  export type OnlineServiceAvgAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type OnlineServiceSumAggregateOutputType = {
    id: number | null
    order: number | null
  }

  export type OnlineServiceMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    image: string | null
    link: string | null
    isActive: boolean | null
    order: number | null
  }

  export type OnlineServiceMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    image: string | null
    link: string | null
    isActive: boolean | null
    order: number | null
  }

  export type OnlineServiceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    image: number
    link: number
    isActive: number
    order: number
    _all: number
  }


  export type OnlineServiceAvgAggregateInputType = {
    id?: true
    order?: true
  }

  export type OnlineServiceSumAggregateInputType = {
    id?: true
    order?: true
  }

  export type OnlineServiceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    image?: true
    link?: true
    isActive?: true
    order?: true
  }

  export type OnlineServiceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    image?: true
    link?: true
    isActive?: true
    order?: true
  }

  export type OnlineServiceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    image?: true
    link?: true
    isActive?: true
    order?: true
    _all?: true
  }

  export type OnlineServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnlineService to aggregate.
     */
    where?: OnlineServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnlineServices to fetch.
     */
    orderBy?: OnlineServiceOrderByWithRelationInput | OnlineServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OnlineServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnlineServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnlineServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OnlineServices
    **/
    _count?: true | OnlineServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OnlineServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OnlineServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OnlineServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OnlineServiceMaxAggregateInputType
  }

  export type GetOnlineServiceAggregateType<T extends OnlineServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateOnlineService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOnlineService[P]>
      : GetScalarType<T[P], AggregateOnlineService[P]>
  }




  export type OnlineServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OnlineServiceWhereInput
    orderBy?: OnlineServiceOrderByWithAggregationInput | OnlineServiceOrderByWithAggregationInput[]
    by: OnlineServiceScalarFieldEnum[] | OnlineServiceScalarFieldEnum
    having?: OnlineServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OnlineServiceCountAggregateInputType | true
    _avg?: OnlineServiceAvgAggregateInputType
    _sum?: OnlineServiceSumAggregateInputType
    _min?: OnlineServiceMinAggregateInputType
    _max?: OnlineServiceMaxAggregateInputType
  }

  export type OnlineServiceGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string | null
    image: string
    link: string
    isActive: boolean
    order: number
    _count: OnlineServiceCountAggregateOutputType | null
    _avg: OnlineServiceAvgAggregateOutputType | null
    _sum: OnlineServiceSumAggregateOutputType | null
    _min: OnlineServiceMinAggregateOutputType | null
    _max: OnlineServiceMaxAggregateOutputType | null
  }

  type GetOnlineServiceGroupByPayload<T extends OnlineServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OnlineServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OnlineServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OnlineServiceGroupByOutputType[P]>
            : GetScalarType<T[P], OnlineServiceGroupByOutputType[P]>
        }
      >
    >


  export type OnlineServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    isActive?: boolean
    order?: boolean
  }, ExtArgs["result"]["onlineService"]>

  export type OnlineServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    isActive?: boolean
    order?: boolean
  }, ExtArgs["result"]["onlineService"]>

  export type OnlineServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    isActive?: boolean
    order?: boolean
  }, ExtArgs["result"]["onlineService"]>

  export type OnlineServiceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    link?: boolean
    isActive?: boolean
    order?: boolean
  }

  export type OnlineServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "image" | "link" | "isActive" | "order", ExtArgs["result"]["onlineService"]>

  export type $OnlineServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OnlineService"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      description: string | null
      image: string
      link: string
      isActive: boolean
      order: number
    }, ExtArgs["result"]["onlineService"]>
    composites: {}
  }

  type OnlineServiceGetPayload<S extends boolean | null | undefined | OnlineServiceDefaultArgs> = $Result.GetResult<Prisma.$OnlineServicePayload, S>

  type OnlineServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OnlineServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OnlineServiceCountAggregateInputType | true
    }

  export interface OnlineServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OnlineService'], meta: { name: 'OnlineService' } }
    /**
     * Find zero or one OnlineService that matches the filter.
     * @param {OnlineServiceFindUniqueArgs} args - Arguments to find a OnlineService
     * @example
     * // Get one OnlineService
     * const onlineService = await prisma.onlineService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OnlineServiceFindUniqueArgs>(args: SelectSubset<T, OnlineServiceFindUniqueArgs<ExtArgs>>): Prisma__OnlineServiceClient<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OnlineService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OnlineServiceFindUniqueOrThrowArgs} args - Arguments to find a OnlineService
     * @example
     * // Get one OnlineService
     * const onlineService = await prisma.onlineService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OnlineServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, OnlineServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OnlineServiceClient<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnlineService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnlineServiceFindFirstArgs} args - Arguments to find a OnlineService
     * @example
     * // Get one OnlineService
     * const onlineService = await prisma.onlineService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OnlineServiceFindFirstArgs>(args?: SelectSubset<T, OnlineServiceFindFirstArgs<ExtArgs>>): Prisma__OnlineServiceClient<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OnlineService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnlineServiceFindFirstOrThrowArgs} args - Arguments to find a OnlineService
     * @example
     * // Get one OnlineService
     * const onlineService = await prisma.onlineService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OnlineServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, OnlineServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__OnlineServiceClient<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OnlineServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnlineServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OnlineServices
     * const onlineServices = await prisma.onlineService.findMany()
     * 
     * // Get first 10 OnlineServices
     * const onlineServices = await prisma.onlineService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const onlineServiceWithIdOnly = await prisma.onlineService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OnlineServiceFindManyArgs>(args?: SelectSubset<T, OnlineServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OnlineService.
     * @param {OnlineServiceCreateArgs} args - Arguments to create a OnlineService.
     * @example
     * // Create one OnlineService
     * const OnlineService = await prisma.onlineService.create({
     *   data: {
     *     // ... data to create a OnlineService
     *   }
     * })
     * 
     */
    create<T extends OnlineServiceCreateArgs>(args: SelectSubset<T, OnlineServiceCreateArgs<ExtArgs>>): Prisma__OnlineServiceClient<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OnlineServices.
     * @param {OnlineServiceCreateManyArgs} args - Arguments to create many OnlineServices.
     * @example
     * // Create many OnlineServices
     * const onlineService = await prisma.onlineService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OnlineServiceCreateManyArgs>(args?: SelectSubset<T, OnlineServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OnlineServices and returns the data saved in the database.
     * @param {OnlineServiceCreateManyAndReturnArgs} args - Arguments to create many OnlineServices.
     * @example
     * // Create many OnlineServices
     * const onlineService = await prisma.onlineService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OnlineServices and only return the `id`
     * const onlineServiceWithIdOnly = await prisma.onlineService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OnlineServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, OnlineServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OnlineService.
     * @param {OnlineServiceDeleteArgs} args - Arguments to delete one OnlineService.
     * @example
     * // Delete one OnlineService
     * const OnlineService = await prisma.onlineService.delete({
     *   where: {
     *     // ... filter to delete one OnlineService
     *   }
     * })
     * 
     */
    delete<T extends OnlineServiceDeleteArgs>(args: SelectSubset<T, OnlineServiceDeleteArgs<ExtArgs>>): Prisma__OnlineServiceClient<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OnlineService.
     * @param {OnlineServiceUpdateArgs} args - Arguments to update one OnlineService.
     * @example
     * // Update one OnlineService
     * const onlineService = await prisma.onlineService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OnlineServiceUpdateArgs>(args: SelectSubset<T, OnlineServiceUpdateArgs<ExtArgs>>): Prisma__OnlineServiceClient<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OnlineServices.
     * @param {OnlineServiceDeleteManyArgs} args - Arguments to filter OnlineServices to delete.
     * @example
     * // Delete a few OnlineServices
     * const { count } = await prisma.onlineService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OnlineServiceDeleteManyArgs>(args?: SelectSubset<T, OnlineServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnlineServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnlineServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OnlineServices
     * const onlineService = await prisma.onlineService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OnlineServiceUpdateManyArgs>(args: SelectSubset<T, OnlineServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OnlineServices and returns the data updated in the database.
     * @param {OnlineServiceUpdateManyAndReturnArgs} args - Arguments to update many OnlineServices.
     * @example
     * // Update many OnlineServices
     * const onlineService = await prisma.onlineService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OnlineServices and only return the `id`
     * const onlineServiceWithIdOnly = await prisma.onlineService.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OnlineServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, OnlineServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OnlineService.
     * @param {OnlineServiceUpsertArgs} args - Arguments to update or create a OnlineService.
     * @example
     * // Update or create a OnlineService
     * const onlineService = await prisma.onlineService.upsert({
     *   create: {
     *     // ... data to create a OnlineService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OnlineService we want to update
     *   }
     * })
     */
    upsert<T extends OnlineServiceUpsertArgs>(args: SelectSubset<T, OnlineServiceUpsertArgs<ExtArgs>>): Prisma__OnlineServiceClient<$Result.GetResult<Prisma.$OnlineServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OnlineServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnlineServiceCountArgs} args - Arguments to filter OnlineServices to count.
     * @example
     * // Count the number of OnlineServices
     * const count = await prisma.onlineService.count({
     *   where: {
     *     // ... the filter for the OnlineServices we want to count
     *   }
     * })
    **/
    count<T extends OnlineServiceCountArgs>(
      args?: Subset<T, OnlineServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OnlineServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OnlineService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnlineServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OnlineServiceAggregateArgs>(args: Subset<T, OnlineServiceAggregateArgs>): Prisma.PrismaPromise<GetOnlineServiceAggregateType<T>>

    /**
     * Group by OnlineService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OnlineServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OnlineServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OnlineServiceGroupByArgs['orderBy'] }
        : { orderBy?: OnlineServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OnlineServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOnlineServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OnlineService model
   */
  readonly fields: OnlineServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OnlineService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OnlineServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OnlineService model
   */
  interface OnlineServiceFieldRefs {
    readonly id: FieldRef<"OnlineService", 'Int'>
    readonly createdAt: FieldRef<"OnlineService", 'DateTime'>
    readonly updatedAt: FieldRef<"OnlineService", 'DateTime'>
    readonly title: FieldRef<"OnlineService", 'String'>
    readonly description: FieldRef<"OnlineService", 'String'>
    readonly image: FieldRef<"OnlineService", 'String'>
    readonly link: FieldRef<"OnlineService", 'String'>
    readonly isActive: FieldRef<"OnlineService", 'Boolean'>
    readonly order: FieldRef<"OnlineService", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OnlineService findUnique
   */
  export type OnlineServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * Filter, which OnlineService to fetch.
     */
    where: OnlineServiceWhereUniqueInput
  }

  /**
   * OnlineService findUniqueOrThrow
   */
  export type OnlineServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * Filter, which OnlineService to fetch.
     */
    where: OnlineServiceWhereUniqueInput
  }

  /**
   * OnlineService findFirst
   */
  export type OnlineServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * Filter, which OnlineService to fetch.
     */
    where?: OnlineServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnlineServices to fetch.
     */
    orderBy?: OnlineServiceOrderByWithRelationInput | OnlineServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnlineServices.
     */
    cursor?: OnlineServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnlineServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnlineServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnlineServices.
     */
    distinct?: OnlineServiceScalarFieldEnum | OnlineServiceScalarFieldEnum[]
  }

  /**
   * OnlineService findFirstOrThrow
   */
  export type OnlineServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * Filter, which OnlineService to fetch.
     */
    where?: OnlineServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnlineServices to fetch.
     */
    orderBy?: OnlineServiceOrderByWithRelationInput | OnlineServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OnlineServices.
     */
    cursor?: OnlineServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnlineServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnlineServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OnlineServices.
     */
    distinct?: OnlineServiceScalarFieldEnum | OnlineServiceScalarFieldEnum[]
  }

  /**
   * OnlineService findMany
   */
  export type OnlineServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * Filter, which OnlineServices to fetch.
     */
    where?: OnlineServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OnlineServices to fetch.
     */
    orderBy?: OnlineServiceOrderByWithRelationInput | OnlineServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OnlineServices.
     */
    cursor?: OnlineServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OnlineServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OnlineServices.
     */
    skip?: number
    distinct?: OnlineServiceScalarFieldEnum | OnlineServiceScalarFieldEnum[]
  }

  /**
   * OnlineService create
   */
  export type OnlineServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a OnlineService.
     */
    data: XOR<OnlineServiceCreateInput, OnlineServiceUncheckedCreateInput>
  }

  /**
   * OnlineService createMany
   */
  export type OnlineServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OnlineServices.
     */
    data: OnlineServiceCreateManyInput | OnlineServiceCreateManyInput[]
  }

  /**
   * OnlineService createManyAndReturn
   */
  export type OnlineServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * The data used to create many OnlineServices.
     */
    data: OnlineServiceCreateManyInput | OnlineServiceCreateManyInput[]
  }

  /**
   * OnlineService update
   */
  export type OnlineServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a OnlineService.
     */
    data: XOR<OnlineServiceUpdateInput, OnlineServiceUncheckedUpdateInput>
    /**
     * Choose, which OnlineService to update.
     */
    where: OnlineServiceWhereUniqueInput
  }

  /**
   * OnlineService updateMany
   */
  export type OnlineServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OnlineServices.
     */
    data: XOR<OnlineServiceUpdateManyMutationInput, OnlineServiceUncheckedUpdateManyInput>
    /**
     * Filter which OnlineServices to update
     */
    where?: OnlineServiceWhereInput
    /**
     * Limit how many OnlineServices to update.
     */
    limit?: number
  }

  /**
   * OnlineService updateManyAndReturn
   */
  export type OnlineServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * The data used to update OnlineServices.
     */
    data: XOR<OnlineServiceUpdateManyMutationInput, OnlineServiceUncheckedUpdateManyInput>
    /**
     * Filter which OnlineServices to update
     */
    where?: OnlineServiceWhereInput
    /**
     * Limit how many OnlineServices to update.
     */
    limit?: number
  }

  /**
   * OnlineService upsert
   */
  export type OnlineServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the OnlineService to update in case it exists.
     */
    where: OnlineServiceWhereUniqueInput
    /**
     * In case the OnlineService found by the `where` argument doesn't exist, create a new OnlineService with this data.
     */
    create: XOR<OnlineServiceCreateInput, OnlineServiceUncheckedCreateInput>
    /**
     * In case the OnlineService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OnlineServiceUpdateInput, OnlineServiceUncheckedUpdateInput>
  }

  /**
   * OnlineService delete
   */
  export type OnlineServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
    /**
     * Filter which OnlineService to delete.
     */
    where: OnlineServiceWhereUniqueInput
  }

  /**
   * OnlineService deleteMany
   */
  export type OnlineServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OnlineServices to delete
     */
    where?: OnlineServiceWhereInput
    /**
     * Limit how many OnlineServices to delete.
     */
    limit?: number
  }

  /**
   * OnlineService without action
   */
  export type OnlineServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OnlineService
     */
    select?: OnlineServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OnlineService
     */
    omit?: OnlineServiceOmit<ExtArgs> | null
  }


  /**
   * Model Donation
   */

  export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  export type DonationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DonationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DonationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    image: string | null
    contactInfo: string | null
    status: string | null
    rejectionReason: string | null
    userId: number | null
  }

  export type DonationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    image: string | null
    contactInfo: string | null
    status: string | null
    rejectionReason: string | null
    userId: number | null
  }

  export type DonationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    image: number
    contactInfo: number
    status: number
    rejectionReason: number
    userId: number
    _all: number
  }


  export type DonationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DonationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DonationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    image?: true
    contactInfo?: true
    status?: true
    rejectionReason?: true
    userId?: true
  }

  export type DonationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    image?: true
    contactInfo?: true
    status?: true
    rejectionReason?: true
    userId?: true
  }

  export type DonationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    image?: true
    contactInfo?: true
    status?: true
    rejectionReason?: true
    userId?: true
    _all?: true
  }

  export type DonationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donation to aggregate.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Donations
    **/
    _count?: true | DonationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DonationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DonationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DonationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DonationMaxAggregateInputType
  }

  export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
        [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDonation[P]>
      : GetScalarType<T[P], AggregateDonation[P]>
  }




  export type DonationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DonationWhereInput
    orderBy?: DonationOrderByWithAggregationInput | DonationOrderByWithAggregationInput[]
    by: DonationScalarFieldEnum[] | DonationScalarFieldEnum
    having?: DonationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DonationCountAggregateInputType | true
    _avg?: DonationAvgAggregateInputType
    _sum?: DonationSumAggregateInputType
    _min?: DonationMinAggregateInputType
    _max?: DonationMaxAggregateInputType
  }

  export type DonationGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    image: string
    contactInfo: string
    status: string
    rejectionReason: string | null
    userId: number
    _count: DonationCountAggregateOutputType | null
    _avg: DonationAvgAggregateOutputType | null
    _sum: DonationSumAggregateOutputType | null
    _min: DonationMinAggregateOutputType | null
    _max: DonationMaxAggregateOutputType | null
  }

  type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DonationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DonationGroupByOutputType[P]>
            : GetScalarType<T[P], DonationGroupByOutputType[P]>
        }
      >
    >


  export type DonationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    contactInfo?: boolean
    status?: boolean
    rejectionReason?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    contactInfo?: boolean
    status?: boolean
    rejectionReason?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    contactInfo?: boolean
    status?: boolean
    rejectionReason?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["donation"]>

  export type DonationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    image?: boolean
    contactInfo?: boolean
    status?: boolean
    rejectionReason?: boolean
    userId?: boolean
  }

  export type DonationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "image" | "contactInfo" | "status" | "rejectionReason" | "userId", ExtArgs["result"]["donation"]>
  export type DonationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DonationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DonationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Donation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      image: string
      contactInfo: string
      status: string
      rejectionReason: string | null
      userId: number
    }, ExtArgs["result"]["donation"]>
    composites: {}
  }

  type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = $Result.GetResult<Prisma.$DonationPayload, S>

  type DonationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DonationCountAggregateInputType | true
    }

  export interface DonationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Donation'], meta: { name: 'Donation' } }
    /**
     * Find zero or one Donation that matches the filter.
     * @param {DonationFindUniqueArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DonationFindUniqueArgs>(args: SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Donation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DonationFindUniqueOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DonationFindFirstArgs>(args?: SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Donation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindFirstOrThrowArgs} args - Arguments to find a Donation
     * @example
     * // Get one Donation
     * const donation = await prisma.donation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Donations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Donations
     * const donations = await prisma.donation.findMany()
     * 
     * // Get first 10 Donations
     * const donations = await prisma.donation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const donationWithIdOnly = await prisma.donation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DonationFindManyArgs>(args?: SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Donation.
     * @param {DonationCreateArgs} args - Arguments to create a Donation.
     * @example
     * // Create one Donation
     * const Donation = await prisma.donation.create({
     *   data: {
     *     // ... data to create a Donation
     *   }
     * })
     * 
     */
    create<T extends DonationCreateArgs>(args: SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Donations.
     * @param {DonationCreateManyArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DonationCreateManyArgs>(args?: SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Donations and returns the data saved in the database.
     * @param {DonationCreateManyAndReturnArgs} args - Arguments to create many Donations.
     * @example
     * // Create many Donations
     * const donation = await prisma.donation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Donation.
     * @param {DonationDeleteArgs} args - Arguments to delete one Donation.
     * @example
     * // Delete one Donation
     * const Donation = await prisma.donation.delete({
     *   where: {
     *     // ... filter to delete one Donation
     *   }
     * })
     * 
     */
    delete<T extends DonationDeleteArgs>(args: SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Donation.
     * @param {DonationUpdateArgs} args - Arguments to update one Donation.
     * @example
     * // Update one Donation
     * const donation = await prisma.donation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DonationUpdateArgs>(args: SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Donations.
     * @param {DonationDeleteManyArgs} args - Arguments to filter Donations to delete.
     * @example
     * // Delete a few Donations
     * const { count } = await prisma.donation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DonationDeleteManyArgs>(args?: SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DonationUpdateManyArgs>(args: SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Donations and returns the data updated in the database.
     * @param {DonationUpdateManyAndReturnArgs} args - Arguments to update many Donations.
     * @example
     * // Update many Donations
     * const donation = await prisma.donation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Donations and only return the `id`
     * const donationWithIdOnly = await prisma.donation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Donation.
     * @param {DonationUpsertArgs} args - Arguments to update or create a Donation.
     * @example
     * // Update or create a Donation
     * const donation = await prisma.donation.upsert({
     *   create: {
     *     // ... data to create a Donation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Donation we want to update
     *   }
     * })
     */
    upsert<T extends DonationUpsertArgs>(args: SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma__DonationClient<$Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Donations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationCountArgs} args - Arguments to filter Donations to count.
     * @example
     * // Count the number of Donations
     * const count = await prisma.donation.count({
     *   where: {
     *     // ... the filter for the Donations we want to count
     *   }
     * })
    **/
    count<T extends DonationCountArgs>(
      args?: Subset<T, DonationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DonationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DonationAggregateArgs>(args: Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>

    /**
     * Group by Donation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DonationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DonationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DonationGroupByArgs['orderBy'] }
        : { orderBy?: DonationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Donation model
   */
  readonly fields: DonationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Donation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DonationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Donation model
   */
  interface DonationFieldRefs {
    readonly id: FieldRef<"Donation", 'Int'>
    readonly createdAt: FieldRef<"Donation", 'DateTime'>
    readonly updatedAt: FieldRef<"Donation", 'DateTime'>
    readonly title: FieldRef<"Donation", 'String'>
    readonly description: FieldRef<"Donation", 'String'>
    readonly image: FieldRef<"Donation", 'String'>
    readonly contactInfo: FieldRef<"Donation", 'String'>
    readonly status: FieldRef<"Donation", 'String'>
    readonly rejectionReason: FieldRef<"Donation", 'String'>
    readonly userId: FieldRef<"Donation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Donation findUnique
   */
  export type DonationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findUniqueOrThrow
   */
  export type DonationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation findFirst
   */
  export type DonationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findFirstOrThrow
   */
  export type DonationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donation to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Donations.
     */
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation findMany
   */
  export type DonationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter, which Donations to fetch.
     */
    where?: DonationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Donations to fetch.
     */
    orderBy?: DonationOrderByWithRelationInput | DonationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Donations.
     */
    cursor?: DonationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Donations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Donations.
     */
    skip?: number
    distinct?: DonationScalarFieldEnum | DonationScalarFieldEnum[]
  }

  /**
   * Donation create
   */
  export type DonationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to create a Donation.
     */
    data: XOR<DonationCreateInput, DonationUncheckedCreateInput>
  }

  /**
   * Donation createMany
   */
  export type DonationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
  }

  /**
   * Donation createManyAndReturn
   */
  export type DonationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to create many Donations.
     */
    data: DonationCreateManyInput | DonationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation update
   */
  export type DonationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The data needed to update a Donation.
     */
    data: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
    /**
     * Choose, which Donation to update.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation updateMany
   */
  export type DonationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
  }

  /**
   * Donation updateManyAndReturn
   */
  export type DonationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * The data used to update Donations.
     */
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyInput>
    /**
     * Filter which Donations to update
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Donation upsert
   */
  export type DonationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * The filter to search for the Donation to update in case it exists.
     */
    where: DonationWhereUniqueInput
    /**
     * In case the Donation found by the `where` argument doesn't exist, create a new Donation with this data.
     */
    create: XOR<DonationCreateInput, DonationUncheckedCreateInput>
    /**
     * In case the Donation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DonationUpdateInput, DonationUncheckedUpdateInput>
  }

  /**
   * Donation delete
   */
  export type DonationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
    /**
     * Filter which Donation to delete.
     */
    where: DonationWhereUniqueInput
  }

  /**
   * Donation deleteMany
   */
  export type DonationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Donations to delete
     */
    where?: DonationWhereInput
    /**
     * Limit how many Donations to delete.
     */
    limit?: number
  }

  /**
   * Donation without action
   */
  export type DonationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Donation
     */
    select?: DonationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Donation
     */
    omit?: DonationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DonationInclude<ExtArgs> | null
  }


  /**
   * Model StaticContent
   */

  export type AggregateStaticContent = {
    _count: StaticContentCountAggregateOutputType | null
    _avg: StaticContentAvgAggregateOutputType | null
    _sum: StaticContentSumAggregateOutputType | null
    _min: StaticContentMinAggregateOutputType | null
    _max: StaticContentMaxAggregateOutputType | null
  }

  export type StaticContentAvgAggregateOutputType = {
    id: number | null
  }

  export type StaticContentSumAggregateOutputType = {
    id: number | null
  }

  export type StaticContentMinAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    key: string | null
    title: string | null
    content: string | null
    phone: string | null
    email: string | null
    address: string | null
    social: string | null
  }

  export type StaticContentMaxAggregateOutputType = {
    id: number | null
    updatedAt: Date | null
    key: string | null
    title: string | null
    content: string | null
    phone: string | null
    email: string | null
    address: string | null
    social: string | null
  }

  export type StaticContentCountAggregateOutputType = {
    id: number
    updatedAt: number
    key: number
    title: number
    content: number
    phone: number
    email: number
    address: number
    social: number
    _all: number
  }


  export type StaticContentAvgAggregateInputType = {
    id?: true
  }

  export type StaticContentSumAggregateInputType = {
    id?: true
  }

  export type StaticContentMinAggregateInputType = {
    id?: true
    updatedAt?: true
    key?: true
    title?: true
    content?: true
    phone?: true
    email?: true
    address?: true
    social?: true
  }

  export type StaticContentMaxAggregateInputType = {
    id?: true
    updatedAt?: true
    key?: true
    title?: true
    content?: true
    phone?: true
    email?: true
    address?: true
    social?: true
  }

  export type StaticContentCountAggregateInputType = {
    id?: true
    updatedAt?: true
    key?: true
    title?: true
    content?: true
    phone?: true
    email?: true
    address?: true
    social?: true
    _all?: true
  }

  export type StaticContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticContent to aggregate.
     */
    where?: StaticContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticContents to fetch.
     */
    orderBy?: StaticContentOrderByWithRelationInput | StaticContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StaticContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StaticContents
    **/
    _count?: true | StaticContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaticContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaticContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaticContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaticContentMaxAggregateInputType
  }

  export type GetStaticContentAggregateType<T extends StaticContentAggregateArgs> = {
        [P in keyof T & keyof AggregateStaticContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaticContent[P]>
      : GetScalarType<T[P], AggregateStaticContent[P]>
  }




  export type StaticContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StaticContentWhereInput
    orderBy?: StaticContentOrderByWithAggregationInput | StaticContentOrderByWithAggregationInput[]
    by: StaticContentScalarFieldEnum[] | StaticContentScalarFieldEnum
    having?: StaticContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaticContentCountAggregateInputType | true
    _avg?: StaticContentAvgAggregateInputType
    _sum?: StaticContentSumAggregateInputType
    _min?: StaticContentMinAggregateInputType
    _max?: StaticContentMaxAggregateInputType
  }

  export type StaticContentGroupByOutputType = {
    id: number
    updatedAt: Date
    key: string
    title: string
    content: string
    phone: string | null
    email: string | null
    address: string | null
    social: string | null
    _count: StaticContentCountAggregateOutputType | null
    _avg: StaticContentAvgAggregateOutputType | null
    _sum: StaticContentSumAggregateOutputType | null
    _min: StaticContentMinAggregateOutputType | null
    _max: StaticContentMaxAggregateOutputType | null
  }

  type GetStaticContentGroupByPayload<T extends StaticContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaticContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaticContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaticContentGroupByOutputType[P]>
            : GetScalarType<T[P], StaticContentGroupByOutputType[P]>
        }
      >
    >


  export type StaticContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    key?: boolean
    title?: boolean
    content?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    social?: boolean
  }, ExtArgs["result"]["staticContent"]>

  export type StaticContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    key?: boolean
    title?: boolean
    content?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    social?: boolean
  }, ExtArgs["result"]["staticContent"]>

  export type StaticContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    updatedAt?: boolean
    key?: boolean
    title?: boolean
    content?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    social?: boolean
  }, ExtArgs["result"]["staticContent"]>

  export type StaticContentSelectScalar = {
    id?: boolean
    updatedAt?: boolean
    key?: boolean
    title?: boolean
    content?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    social?: boolean
  }

  export type StaticContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "updatedAt" | "key" | "title" | "content" | "phone" | "email" | "address" | "social", ExtArgs["result"]["staticContent"]>

  export type $StaticContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StaticContent"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      updatedAt: Date
      key: string
      title: string
      content: string
      phone: string | null
      email: string | null
      address: string | null
      social: string | null
    }, ExtArgs["result"]["staticContent"]>
    composites: {}
  }

  type StaticContentGetPayload<S extends boolean | null | undefined | StaticContentDefaultArgs> = $Result.GetResult<Prisma.$StaticContentPayload, S>

  type StaticContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StaticContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaticContentCountAggregateInputType | true
    }

  export interface StaticContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StaticContent'], meta: { name: 'StaticContent' } }
    /**
     * Find zero or one StaticContent that matches the filter.
     * @param {StaticContentFindUniqueArgs} args - Arguments to find a StaticContent
     * @example
     * // Get one StaticContent
     * const staticContent = await prisma.staticContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StaticContentFindUniqueArgs>(args: SelectSubset<T, StaticContentFindUniqueArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StaticContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StaticContentFindUniqueOrThrowArgs} args - Arguments to find a StaticContent
     * @example
     * // Get one StaticContent
     * const staticContent = await prisma.staticContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StaticContentFindUniqueOrThrowArgs>(args: SelectSubset<T, StaticContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaticContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentFindFirstArgs} args - Arguments to find a StaticContent
     * @example
     * // Get one StaticContent
     * const staticContent = await prisma.staticContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StaticContentFindFirstArgs>(args?: SelectSubset<T, StaticContentFindFirstArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StaticContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentFindFirstOrThrowArgs} args - Arguments to find a StaticContent
     * @example
     * // Get one StaticContent
     * const staticContent = await prisma.staticContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StaticContentFindFirstOrThrowArgs>(args?: SelectSubset<T, StaticContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StaticContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StaticContents
     * const staticContents = await prisma.staticContent.findMany()
     * 
     * // Get first 10 StaticContents
     * const staticContents = await prisma.staticContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const staticContentWithIdOnly = await prisma.staticContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StaticContentFindManyArgs>(args?: SelectSubset<T, StaticContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StaticContent.
     * @param {StaticContentCreateArgs} args - Arguments to create a StaticContent.
     * @example
     * // Create one StaticContent
     * const StaticContent = await prisma.staticContent.create({
     *   data: {
     *     // ... data to create a StaticContent
     *   }
     * })
     * 
     */
    create<T extends StaticContentCreateArgs>(args: SelectSubset<T, StaticContentCreateArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StaticContents.
     * @param {StaticContentCreateManyArgs} args - Arguments to create many StaticContents.
     * @example
     * // Create many StaticContents
     * const staticContent = await prisma.staticContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StaticContentCreateManyArgs>(args?: SelectSubset<T, StaticContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StaticContents and returns the data saved in the database.
     * @param {StaticContentCreateManyAndReturnArgs} args - Arguments to create many StaticContents.
     * @example
     * // Create many StaticContents
     * const staticContent = await prisma.staticContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StaticContents and only return the `id`
     * const staticContentWithIdOnly = await prisma.staticContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StaticContentCreateManyAndReturnArgs>(args?: SelectSubset<T, StaticContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StaticContent.
     * @param {StaticContentDeleteArgs} args - Arguments to delete one StaticContent.
     * @example
     * // Delete one StaticContent
     * const StaticContent = await prisma.staticContent.delete({
     *   where: {
     *     // ... filter to delete one StaticContent
     *   }
     * })
     * 
     */
    delete<T extends StaticContentDeleteArgs>(args: SelectSubset<T, StaticContentDeleteArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StaticContent.
     * @param {StaticContentUpdateArgs} args - Arguments to update one StaticContent.
     * @example
     * // Update one StaticContent
     * const staticContent = await prisma.staticContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StaticContentUpdateArgs>(args: SelectSubset<T, StaticContentUpdateArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StaticContents.
     * @param {StaticContentDeleteManyArgs} args - Arguments to filter StaticContents to delete.
     * @example
     * // Delete a few StaticContents
     * const { count } = await prisma.staticContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StaticContentDeleteManyArgs>(args?: SelectSubset<T, StaticContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaticContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StaticContents
     * const staticContent = await prisma.staticContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StaticContentUpdateManyArgs>(args: SelectSubset<T, StaticContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StaticContents and returns the data updated in the database.
     * @param {StaticContentUpdateManyAndReturnArgs} args - Arguments to update many StaticContents.
     * @example
     * // Update many StaticContents
     * const staticContent = await prisma.staticContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StaticContents and only return the `id`
     * const staticContentWithIdOnly = await prisma.staticContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StaticContentUpdateManyAndReturnArgs>(args: SelectSubset<T, StaticContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StaticContent.
     * @param {StaticContentUpsertArgs} args - Arguments to update or create a StaticContent.
     * @example
     * // Update or create a StaticContent
     * const staticContent = await prisma.staticContent.upsert({
     *   create: {
     *     // ... data to create a StaticContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StaticContent we want to update
     *   }
     * })
     */
    upsert<T extends StaticContentUpsertArgs>(args: SelectSubset<T, StaticContentUpsertArgs<ExtArgs>>): Prisma__StaticContentClient<$Result.GetResult<Prisma.$StaticContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StaticContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentCountArgs} args - Arguments to filter StaticContents to count.
     * @example
     * // Count the number of StaticContents
     * const count = await prisma.staticContent.count({
     *   where: {
     *     // ... the filter for the StaticContents we want to count
     *   }
     * })
    **/
    count<T extends StaticContentCountArgs>(
      args?: Subset<T, StaticContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaticContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StaticContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StaticContentAggregateArgs>(args: Subset<T, StaticContentAggregateArgs>): Prisma.PrismaPromise<GetStaticContentAggregateType<T>>

    /**
     * Group by StaticContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaticContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StaticContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StaticContentGroupByArgs['orderBy'] }
        : { orderBy?: StaticContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StaticContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaticContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StaticContent model
   */
  readonly fields: StaticContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StaticContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StaticContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StaticContent model
   */
  interface StaticContentFieldRefs {
    readonly id: FieldRef<"StaticContent", 'Int'>
    readonly updatedAt: FieldRef<"StaticContent", 'DateTime'>
    readonly key: FieldRef<"StaticContent", 'String'>
    readonly title: FieldRef<"StaticContent", 'String'>
    readonly content: FieldRef<"StaticContent", 'String'>
    readonly phone: FieldRef<"StaticContent", 'String'>
    readonly email: FieldRef<"StaticContent", 'String'>
    readonly address: FieldRef<"StaticContent", 'String'>
    readonly social: FieldRef<"StaticContent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StaticContent findUnique
   */
  export type StaticContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContent to fetch.
     */
    where: StaticContentWhereUniqueInput
  }

  /**
   * StaticContent findUniqueOrThrow
   */
  export type StaticContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContent to fetch.
     */
    where: StaticContentWhereUniqueInput
  }

  /**
   * StaticContent findFirst
   */
  export type StaticContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContent to fetch.
     */
    where?: StaticContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticContents to fetch.
     */
    orderBy?: StaticContentOrderByWithRelationInput | StaticContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticContents.
     */
    cursor?: StaticContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticContents.
     */
    distinct?: StaticContentScalarFieldEnum | StaticContentScalarFieldEnum[]
  }

  /**
   * StaticContent findFirstOrThrow
   */
  export type StaticContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContent to fetch.
     */
    where?: StaticContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticContents to fetch.
     */
    orderBy?: StaticContentOrderByWithRelationInput | StaticContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StaticContents.
     */
    cursor?: StaticContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StaticContents.
     */
    distinct?: StaticContentScalarFieldEnum | StaticContentScalarFieldEnum[]
  }

  /**
   * StaticContent findMany
   */
  export type StaticContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter, which StaticContents to fetch.
     */
    where?: StaticContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StaticContents to fetch.
     */
    orderBy?: StaticContentOrderByWithRelationInput | StaticContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StaticContents.
     */
    cursor?: StaticContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StaticContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StaticContents.
     */
    skip?: number
    distinct?: StaticContentScalarFieldEnum | StaticContentScalarFieldEnum[]
  }

  /**
   * StaticContent create
   */
  export type StaticContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The data needed to create a StaticContent.
     */
    data: XOR<StaticContentCreateInput, StaticContentUncheckedCreateInput>
  }

  /**
   * StaticContent createMany
   */
  export type StaticContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StaticContents.
     */
    data: StaticContentCreateManyInput | StaticContentCreateManyInput[]
  }

  /**
   * StaticContent createManyAndReturn
   */
  export type StaticContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The data used to create many StaticContents.
     */
    data: StaticContentCreateManyInput | StaticContentCreateManyInput[]
  }

  /**
   * StaticContent update
   */
  export type StaticContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The data needed to update a StaticContent.
     */
    data: XOR<StaticContentUpdateInput, StaticContentUncheckedUpdateInput>
    /**
     * Choose, which StaticContent to update.
     */
    where: StaticContentWhereUniqueInput
  }

  /**
   * StaticContent updateMany
   */
  export type StaticContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StaticContents.
     */
    data: XOR<StaticContentUpdateManyMutationInput, StaticContentUncheckedUpdateManyInput>
    /**
     * Filter which StaticContents to update
     */
    where?: StaticContentWhereInput
    /**
     * Limit how many StaticContents to update.
     */
    limit?: number
  }

  /**
   * StaticContent updateManyAndReturn
   */
  export type StaticContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The data used to update StaticContents.
     */
    data: XOR<StaticContentUpdateManyMutationInput, StaticContentUncheckedUpdateManyInput>
    /**
     * Filter which StaticContents to update
     */
    where?: StaticContentWhereInput
    /**
     * Limit how many StaticContents to update.
     */
    limit?: number
  }

  /**
   * StaticContent upsert
   */
  export type StaticContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * The filter to search for the StaticContent to update in case it exists.
     */
    where: StaticContentWhereUniqueInput
    /**
     * In case the StaticContent found by the `where` argument doesn't exist, create a new StaticContent with this data.
     */
    create: XOR<StaticContentCreateInput, StaticContentUncheckedCreateInput>
    /**
     * In case the StaticContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StaticContentUpdateInput, StaticContentUncheckedUpdateInput>
  }

  /**
   * StaticContent delete
   */
  export type StaticContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
    /**
     * Filter which StaticContent to delete.
     */
    where: StaticContentWhereUniqueInput
  }

  /**
   * StaticContent deleteMany
   */
  export type StaticContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StaticContents to delete
     */
    where?: StaticContentWhereInput
    /**
     * Limit how many StaticContents to delete.
     */
    limit?: number
  }

  /**
   * StaticContent without action
   */
  export type StaticContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaticContent
     */
    select?: StaticContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StaticContent
     */
    omit?: StaticContentOmit<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    type: string | null
    title: string | null
    message: string | null
    link: string | null
    isRead: boolean | null
    userId: number | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    type: string | null
    title: string | null
    message: string | null
    link: string | null
    isRead: boolean | null
    userId: number | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    createdAt: number
    type: number
    title: number
    message: number
    link: number
    isRead: number
    userId: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    createdAt?: true
    type?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    userId?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    type?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    userId?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    createdAt?: true
    type?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    userId?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    createdAt: Date
    type: string
    title: string
    message: string
    link: string | null
    isRead: boolean
    userId: number
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    userId?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "type" | "title" | "message" | "link" | "isRead" | "userId", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      type: string
      title: string
      message: string
      link: string | null
      isRead: boolean
      userId: number
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly userId: FieldRef<"Notification", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    content: string | null
    isRead: boolean | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    content: string | null
    isRead: boolean | null
    senderId: number | null
    receiverId: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    createdAt: number
    content: number
    isRead: number
    senderId: number
    receiverId: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    isRead?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    isRead?: true
    senderId?: true
    receiverId?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    content?: true
    isRead?: true
    senderId?: true
    receiverId?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    createdAt: Date
    content: string
    isRead: boolean
    senderId: number
    receiverId: number
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    isRead?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    isRead?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    content?: boolean
    isRead?: boolean
    senderId?: boolean
    receiverId?: boolean
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    content?: boolean
    isRead?: boolean
    senderId?: boolean
    receiverId?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "content" | "isRead" | "senderId" | "receiverId", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      content: string
      isRead: boolean
      senderId: number
      receiverId: number
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly content: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly senderId: FieldRef<"Message", 'Int'>
    readonly receiverId: FieldRef<"Message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fullName: 'fullName',
    phone: 'phone',
    email: 'email',
    password: 'password',
    role: 'role',
    otp: 'otp',
    isVerified: 'isVerified',
    avatar: 'avatar',
    coverImage: 'coverImage',
    bio: 'bio',
    address: 'address',
    city: 'city',
    governorate: 'governorate',
    providerType: 'providerType',
    exhibitionType: 'exhibitionType',
    specialization: 'specialization',
    jobTitle: 'jobTitle',
    companyName: 'companyName',
    yearsExperience: 'yearsExperience',
    avgPrice: 'avgPrice',
    portfolio: 'portfolio',
    averageRating: 'averageRating',
    totalRatings: 'totalRatings',
    isActive: 'isActive',
    isBanned: 'isBanned',
    banReason: 'banReason'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OfferScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    image: 'image',
    price: 'price',
    discount: 'discount',
    isFeatured: 'isFeatured',
    featuredUntil: 'featuredUntil',
    featuredPaidAt: 'featuredPaidAt',
    status: 'status',
    expiresAt: 'expiresAt',
    providerId: 'providerId'
  };

  export type OfferScalarFieldEnum = (typeof OfferScalarFieldEnum)[keyof typeof OfferScalarFieldEnum]


  export const FinishingRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    budget: 'budget',
    location: 'location',
    city: 'city',
    governorate: 'governorate',
    isCompanyRequest: 'isCompanyRequest',
    specialization: 'specialization',
    images: 'images',
    status: 'status',
    selectedProposalId: 'selectedProposalId',
    clientId: 'clientId'
  };

  export type FinishingRequestScalarFieldEnum = (typeof FinishingRequestScalarFieldEnum)[keyof typeof FinishingRequestScalarFieldEnum]


  export const ProposalScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    description: 'description',
    price: 'price',
    duration: 'duration',
    notes: 'notes',
    attachments: 'attachments',
    status: 'status',
    requestId: 'requestId',
    providerId: 'providerId'
  };

  export type ProposalScalarFieldEnum = (typeof ProposalScalarFieldEnum)[keyof typeof ProposalScalarFieldEnum]


  export const MaintenanceRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    specialization: 'specialization',
    location: 'location',
    city: 'city',
    governorate: 'governorate',
    urgency: 'urgency',
    images: 'images',
    status: 'status',
    clientId: 'clientId'
  };

  export type MaintenanceRequestScalarFieldEnum = (typeof MaintenanceRequestScalarFieldEnum)[keyof typeof MaintenanceRequestScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    rating: 'rating',
    comment: 'comment',
    clientId: 'clientId',
    providerId: 'providerId'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const OnlineServiceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    image: 'image',
    link: 'link',
    isActive: 'isActive',
    order: 'order'
  };

  export type OnlineServiceScalarFieldEnum = (typeof OnlineServiceScalarFieldEnum)[keyof typeof OnlineServiceScalarFieldEnum]


  export const DonationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    image: 'image',
    contactInfo: 'contactInfo',
    status: 'status',
    rejectionReason: 'rejectionReason',
    userId: 'userId'
  };

  export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum]


  export const StaticContentScalarFieldEnum: {
    id: 'id',
    updatedAt: 'updatedAt',
    key: 'key',
    title: 'title',
    content: 'content',
    phone: 'phone',
    email: 'email',
    address: 'address',
    social: 'social'
  };

  export type StaticContentScalarFieldEnum = (typeof StaticContentScalarFieldEnum)[keyof typeof StaticContentScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    type: 'type',
    title: 'title',
    message: 'message',
    link: 'link',
    isRead: 'isRead',
    userId: 'userId'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    content: 'content',
    isRead: 'isRead',
    senderId: 'senderId',
    receiverId: 'receiverId'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    fullName?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    otp?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    avatar?: StringNullableFilter<"User"> | string | null
    coverImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    governorate?: StringNullableFilter<"User"> | string | null
    providerType?: StringNullableFilter<"User"> | string | null
    exhibitionType?: StringNullableFilter<"User"> | string | null
    specialization?: StringNullableFilter<"User"> | string | null
    jobTitle?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    yearsExperience?: IntNullableFilter<"User"> | number | null
    avgPrice?: FloatNullableFilter<"User"> | number | null
    portfolio?: StringFilter<"User"> | string
    averageRating?: FloatFilter<"User"> | number
    totalRatings?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    isBanned?: BoolFilter<"User"> | boolean
    banReason?: StringNullableFilter<"User"> | string | null
    offers?: OfferListRelationFilter
    finishingRequests?: FinishingRequestListRelationFilter
    proposals?: ProposalListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    ratingsGiven?: RatingListRelationFilter
    ratingsReceived?: RatingListRelationFilter
    donations?: DonationListRelationFilter
    notifications?: NotificationListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    avatar?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    governorate?: SortOrderInput | SortOrder
    providerType?: SortOrderInput | SortOrder
    exhibitionType?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    avgPrice?: SortOrderInput | SortOrder
    portfolio?: SortOrder
    averageRating?: SortOrder
    totalRatings?: SortOrder
    isActive?: SortOrder
    isBanned?: SortOrder
    banReason?: SortOrderInput | SortOrder
    offers?: OfferOrderByRelationAggregateInput
    finishingRequests?: FinishingRequestOrderByRelationAggregateInput
    proposals?: ProposalOrderByRelationAggregateInput
    maintenanceRequests?: MaintenanceRequestOrderByRelationAggregateInput
    ratingsGiven?: RatingOrderByRelationAggregateInput
    ratingsReceived?: RatingOrderByRelationAggregateInput
    donations?: DonationOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    otp?: StringNullableFilter<"User"> | string | null
    isVerified?: BoolFilter<"User"> | boolean
    avatar?: StringNullableFilter<"User"> | string | null
    coverImage?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    governorate?: StringNullableFilter<"User"> | string | null
    providerType?: StringNullableFilter<"User"> | string | null
    exhibitionType?: StringNullableFilter<"User"> | string | null
    specialization?: StringNullableFilter<"User"> | string | null
    jobTitle?: StringNullableFilter<"User"> | string | null
    companyName?: StringNullableFilter<"User"> | string | null
    yearsExperience?: IntNullableFilter<"User"> | number | null
    avgPrice?: FloatNullableFilter<"User"> | number | null
    portfolio?: StringFilter<"User"> | string
    averageRating?: FloatFilter<"User"> | number
    totalRatings?: IntFilter<"User"> | number
    isActive?: BoolFilter<"User"> | boolean
    isBanned?: BoolFilter<"User"> | boolean
    banReason?: StringNullableFilter<"User"> | string | null
    offers?: OfferListRelationFilter
    finishingRequests?: FinishingRequestListRelationFilter
    proposals?: ProposalListRelationFilter
    maintenanceRequests?: MaintenanceRequestListRelationFilter
    ratingsGiven?: RatingListRelationFilter
    ratingsReceived?: RatingListRelationFilter
    donations?: DonationListRelationFilter
    notifications?: NotificationListRelationFilter
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }, "id" | "phone" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    avatar?: SortOrderInput | SortOrder
    coverImage?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    governorate?: SortOrderInput | SortOrder
    providerType?: SortOrderInput | SortOrder
    exhibitionType?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    companyName?: SortOrderInput | SortOrder
    yearsExperience?: SortOrderInput | SortOrder
    avgPrice?: SortOrderInput | SortOrder
    portfolio?: SortOrder
    averageRating?: SortOrder
    totalRatings?: SortOrder
    isActive?: SortOrder
    isBanned?: SortOrder
    banReason?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    fullName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    otp?: StringNullableWithAggregatesFilter<"User"> | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    coverImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    governorate?: StringNullableWithAggregatesFilter<"User"> | string | null
    providerType?: StringNullableWithAggregatesFilter<"User"> | string | null
    exhibitionType?: StringNullableWithAggregatesFilter<"User"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"User"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyName?: StringNullableWithAggregatesFilter<"User"> | string | null
    yearsExperience?: IntNullableWithAggregatesFilter<"User"> | number | null
    avgPrice?: FloatNullableWithAggregatesFilter<"User"> | number | null
    portfolio?: StringWithAggregatesFilter<"User"> | string
    averageRating?: FloatWithAggregatesFilter<"User"> | number
    totalRatings?: IntWithAggregatesFilter<"User"> | number
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    isBanned?: BoolWithAggregatesFilter<"User"> | boolean
    banReason?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type OfferWhereInput = {
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    id?: IntFilter<"Offer"> | number
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    title?: StringFilter<"Offer"> | string
    description?: StringFilter<"Offer"> | string
    image?: StringFilter<"Offer"> | string
    price?: FloatNullableFilter<"Offer"> | number | null
    discount?: FloatNullableFilter<"Offer"> | number | null
    isFeatured?: BoolFilter<"Offer"> | boolean
    featuredUntil?: DateTimeNullableFilter<"Offer"> | Date | string | null
    featuredPaidAt?: DateTimeNullableFilter<"Offer"> | Date | string | null
    status?: StringFilter<"Offer"> | string
    expiresAt?: DateTimeNullableFilter<"Offer"> | Date | string | null
    providerId?: IntFilter<"Offer"> | number
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OfferOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrderInput | SortOrder
    featuredPaidAt?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    providerId?: SortOrder
    provider?: UserOrderByWithRelationInput
  }

  export type OfferWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OfferWhereInput | OfferWhereInput[]
    OR?: OfferWhereInput[]
    NOT?: OfferWhereInput | OfferWhereInput[]
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    title?: StringFilter<"Offer"> | string
    description?: StringFilter<"Offer"> | string
    image?: StringFilter<"Offer"> | string
    price?: FloatNullableFilter<"Offer"> | number | null
    discount?: FloatNullableFilter<"Offer"> | number | null
    isFeatured?: BoolFilter<"Offer"> | boolean
    featuredUntil?: DateTimeNullableFilter<"Offer"> | Date | string | null
    featuredPaidAt?: DateTimeNullableFilter<"Offer"> | Date | string | null
    status?: StringFilter<"Offer"> | string
    expiresAt?: DateTimeNullableFilter<"Offer"> | Date | string | null
    providerId?: IntFilter<"Offer"> | number
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OfferOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrderInput | SortOrder
    featuredPaidAt?: SortOrderInput | SortOrder
    status?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    providerId?: SortOrder
    _count?: OfferCountOrderByAggregateInput
    _avg?: OfferAvgOrderByAggregateInput
    _max?: OfferMaxOrderByAggregateInput
    _min?: OfferMinOrderByAggregateInput
    _sum?: OfferSumOrderByAggregateInput
  }

  export type OfferScalarWhereWithAggregatesInput = {
    AND?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    OR?: OfferScalarWhereWithAggregatesInput[]
    NOT?: OfferScalarWhereWithAggregatesInput | OfferScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Offer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Offer"> | Date | string
    title?: StringWithAggregatesFilter<"Offer"> | string
    description?: StringWithAggregatesFilter<"Offer"> | string
    image?: StringWithAggregatesFilter<"Offer"> | string
    price?: FloatNullableWithAggregatesFilter<"Offer"> | number | null
    discount?: FloatNullableWithAggregatesFilter<"Offer"> | number | null
    isFeatured?: BoolWithAggregatesFilter<"Offer"> | boolean
    featuredUntil?: DateTimeNullableWithAggregatesFilter<"Offer"> | Date | string | null
    featuredPaidAt?: DateTimeNullableWithAggregatesFilter<"Offer"> | Date | string | null
    status?: StringWithAggregatesFilter<"Offer"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Offer"> | Date | string | null
    providerId?: IntWithAggregatesFilter<"Offer"> | number
  }

  export type FinishingRequestWhereInput = {
    AND?: FinishingRequestWhereInput | FinishingRequestWhereInput[]
    OR?: FinishingRequestWhereInput[]
    NOT?: FinishingRequestWhereInput | FinishingRequestWhereInput[]
    id?: IntFilter<"FinishingRequest"> | number
    createdAt?: DateTimeFilter<"FinishingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FinishingRequest"> | Date | string
    title?: StringFilter<"FinishingRequest"> | string
    description?: StringFilter<"FinishingRequest"> | string
    budget?: FloatNullableFilter<"FinishingRequest"> | number | null
    location?: StringFilter<"FinishingRequest"> | string
    city?: StringFilter<"FinishingRequest"> | string
    governorate?: StringFilter<"FinishingRequest"> | string
    isCompanyRequest?: BoolFilter<"FinishingRequest"> | boolean
    specialization?: StringNullableFilter<"FinishingRequest"> | string | null
    images?: StringFilter<"FinishingRequest"> | string
    status?: StringFilter<"FinishingRequest"> | string
    selectedProposalId?: IntNullableFilter<"FinishingRequest"> | number | null
    clientId?: IntFilter<"FinishingRequest"> | number
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    proposals?: ProposalListRelationFilter
  }

  export type FinishingRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrderInput | SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    isCompanyRequest?: SortOrder
    specialization?: SortOrderInput | SortOrder
    images?: SortOrder
    status?: SortOrder
    selectedProposalId?: SortOrderInput | SortOrder
    clientId?: SortOrder
    client?: UserOrderByWithRelationInput
    proposals?: ProposalOrderByRelationAggregateInput
  }

  export type FinishingRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    selectedProposalId?: number
    AND?: FinishingRequestWhereInput | FinishingRequestWhereInput[]
    OR?: FinishingRequestWhereInput[]
    NOT?: FinishingRequestWhereInput | FinishingRequestWhereInput[]
    createdAt?: DateTimeFilter<"FinishingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FinishingRequest"> | Date | string
    title?: StringFilter<"FinishingRequest"> | string
    description?: StringFilter<"FinishingRequest"> | string
    budget?: FloatNullableFilter<"FinishingRequest"> | number | null
    location?: StringFilter<"FinishingRequest"> | string
    city?: StringFilter<"FinishingRequest"> | string
    governorate?: StringFilter<"FinishingRequest"> | string
    isCompanyRequest?: BoolFilter<"FinishingRequest"> | boolean
    specialization?: StringNullableFilter<"FinishingRequest"> | string | null
    images?: StringFilter<"FinishingRequest"> | string
    status?: StringFilter<"FinishingRequest"> | string
    clientId?: IntFilter<"FinishingRequest"> | number
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    proposals?: ProposalListRelationFilter
  }, "id" | "selectedProposalId">

  export type FinishingRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrderInput | SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    isCompanyRequest?: SortOrder
    specialization?: SortOrderInput | SortOrder
    images?: SortOrder
    status?: SortOrder
    selectedProposalId?: SortOrderInput | SortOrder
    clientId?: SortOrder
    _count?: FinishingRequestCountOrderByAggregateInput
    _avg?: FinishingRequestAvgOrderByAggregateInput
    _max?: FinishingRequestMaxOrderByAggregateInput
    _min?: FinishingRequestMinOrderByAggregateInput
    _sum?: FinishingRequestSumOrderByAggregateInput
  }

  export type FinishingRequestScalarWhereWithAggregatesInput = {
    AND?: FinishingRequestScalarWhereWithAggregatesInput | FinishingRequestScalarWhereWithAggregatesInput[]
    OR?: FinishingRequestScalarWhereWithAggregatesInput[]
    NOT?: FinishingRequestScalarWhereWithAggregatesInput | FinishingRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FinishingRequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FinishingRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FinishingRequest"> | Date | string
    title?: StringWithAggregatesFilter<"FinishingRequest"> | string
    description?: StringWithAggregatesFilter<"FinishingRequest"> | string
    budget?: FloatNullableWithAggregatesFilter<"FinishingRequest"> | number | null
    location?: StringWithAggregatesFilter<"FinishingRequest"> | string
    city?: StringWithAggregatesFilter<"FinishingRequest"> | string
    governorate?: StringWithAggregatesFilter<"FinishingRequest"> | string
    isCompanyRequest?: BoolWithAggregatesFilter<"FinishingRequest"> | boolean
    specialization?: StringNullableWithAggregatesFilter<"FinishingRequest"> | string | null
    images?: StringWithAggregatesFilter<"FinishingRequest"> | string
    status?: StringWithAggregatesFilter<"FinishingRequest"> | string
    selectedProposalId?: IntNullableWithAggregatesFilter<"FinishingRequest"> | number | null
    clientId?: IntWithAggregatesFilter<"FinishingRequest"> | number
  }

  export type ProposalWhereInput = {
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    id?: IntFilter<"Proposal"> | number
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    description?: StringFilter<"Proposal"> | string
    price?: FloatFilter<"Proposal"> | number
    duration?: StringFilter<"Proposal"> | string
    notes?: StringNullableFilter<"Proposal"> | string | null
    attachments?: StringFilter<"Proposal"> | string
    status?: StringFilter<"Proposal"> | string
    requestId?: IntFilter<"Proposal"> | number
    providerId?: IntFilter<"Proposal"> | number
    request?: XOR<FinishingRequestScalarRelationFilter, FinishingRequestWhereInput>
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProposalOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    attachments?: SortOrder
    status?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
    request?: FinishingRequestOrderByWithRelationInput
    provider?: UserOrderByWithRelationInput
  }

  export type ProposalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProposalWhereInput | ProposalWhereInput[]
    OR?: ProposalWhereInput[]
    NOT?: ProposalWhereInput | ProposalWhereInput[]
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    description?: StringFilter<"Proposal"> | string
    price?: FloatFilter<"Proposal"> | number
    duration?: StringFilter<"Proposal"> | string
    notes?: StringNullableFilter<"Proposal"> | string | null
    attachments?: StringFilter<"Proposal"> | string
    status?: StringFilter<"Proposal"> | string
    requestId?: IntFilter<"Proposal"> | number
    providerId?: IntFilter<"Proposal"> | number
    request?: XOR<FinishingRequestScalarRelationFilter, FinishingRequestWhereInput>
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ProposalOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    notes?: SortOrderInput | SortOrder
    attachments?: SortOrder
    status?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
    _count?: ProposalCountOrderByAggregateInput
    _avg?: ProposalAvgOrderByAggregateInput
    _max?: ProposalMaxOrderByAggregateInput
    _min?: ProposalMinOrderByAggregateInput
    _sum?: ProposalSumOrderByAggregateInput
  }

  export type ProposalScalarWhereWithAggregatesInput = {
    AND?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    OR?: ProposalScalarWhereWithAggregatesInput[]
    NOT?: ProposalScalarWhereWithAggregatesInput | ProposalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Proposal"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Proposal"> | Date | string
    description?: StringWithAggregatesFilter<"Proposal"> | string
    price?: FloatWithAggregatesFilter<"Proposal"> | number
    duration?: StringWithAggregatesFilter<"Proposal"> | string
    notes?: StringNullableWithAggregatesFilter<"Proposal"> | string | null
    attachments?: StringWithAggregatesFilter<"Proposal"> | string
    status?: StringWithAggregatesFilter<"Proposal"> | string
    requestId?: IntWithAggregatesFilter<"Proposal"> | number
    providerId?: IntWithAggregatesFilter<"Proposal"> | number
  }

  export type MaintenanceRequestWhereInput = {
    AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    OR?: MaintenanceRequestWhereInput[]
    NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    id?: IntFilter<"MaintenanceRequest"> | number
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    title?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    specialization?: StringFilter<"MaintenanceRequest"> | string
    location?: StringFilter<"MaintenanceRequest"> | string
    city?: StringFilter<"MaintenanceRequest"> | string
    governorate?: StringFilter<"MaintenanceRequest"> | string
    urgency?: StringFilter<"MaintenanceRequest"> | string
    images?: StringFilter<"MaintenanceRequest"> | string
    status?: StringFilter<"MaintenanceRequest"> | string
    clientId?: IntFilter<"MaintenanceRequest"> | number
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MaintenanceRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    specialization?: SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    urgency?: SortOrder
    images?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    client?: UserOrderByWithRelationInput
  }

  export type MaintenanceRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    OR?: MaintenanceRequestWhereInput[]
    NOT?: MaintenanceRequestWhereInput | MaintenanceRequestWhereInput[]
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    title?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    specialization?: StringFilter<"MaintenanceRequest"> | string
    location?: StringFilter<"MaintenanceRequest"> | string
    city?: StringFilter<"MaintenanceRequest"> | string
    governorate?: StringFilter<"MaintenanceRequest"> | string
    urgency?: StringFilter<"MaintenanceRequest"> | string
    images?: StringFilter<"MaintenanceRequest"> | string
    status?: StringFilter<"MaintenanceRequest"> | string
    clientId?: IntFilter<"MaintenanceRequest"> | number
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MaintenanceRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    specialization?: SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    urgency?: SortOrder
    images?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
    _count?: MaintenanceRequestCountOrderByAggregateInput
    _avg?: MaintenanceRequestAvgOrderByAggregateInput
    _max?: MaintenanceRequestMaxOrderByAggregateInput
    _min?: MaintenanceRequestMinOrderByAggregateInput
    _sum?: MaintenanceRequestSumOrderByAggregateInput
  }

  export type MaintenanceRequestScalarWhereWithAggregatesInput = {
    AND?: MaintenanceRequestScalarWhereWithAggregatesInput | MaintenanceRequestScalarWhereWithAggregatesInput[]
    OR?: MaintenanceRequestScalarWhereWithAggregatesInput[]
    NOT?: MaintenanceRequestScalarWhereWithAggregatesInput | MaintenanceRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MaintenanceRequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MaintenanceRequest"> | Date | string
    title?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    description?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    specialization?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    location?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    city?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    governorate?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    urgency?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    images?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    status?: StringWithAggregatesFilter<"MaintenanceRequest"> | string
    clientId?: IntWithAggregatesFilter<"MaintenanceRequest"> | number
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    rating?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    clientId?: IntFilter<"Rating"> | number
    providerId?: IntFilter<"Rating"> | number
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    clientId?: SortOrder
    providerId?: SortOrder
    client?: UserOrderByWithRelationInput
    provider?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    rating?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    clientId?: IntFilter<"Rating"> | number
    providerId?: IntFilter<"Rating"> | number
    client?: XOR<UserScalarRelationFilter, UserWhereInput>
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    clientId?: SortOrder
    providerId?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rating"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    rating?: IntWithAggregatesFilter<"Rating"> | number
    comment?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    clientId?: IntWithAggregatesFilter<"Rating"> | number
    providerId?: IntWithAggregatesFilter<"Rating"> | number
  }

  export type OnlineServiceWhereInput = {
    AND?: OnlineServiceWhereInput | OnlineServiceWhereInput[]
    OR?: OnlineServiceWhereInput[]
    NOT?: OnlineServiceWhereInput | OnlineServiceWhereInput[]
    id?: IntFilter<"OnlineService"> | number
    createdAt?: DateTimeFilter<"OnlineService"> | Date | string
    updatedAt?: DateTimeFilter<"OnlineService"> | Date | string
    title?: StringFilter<"OnlineService"> | string
    description?: StringNullableFilter<"OnlineService"> | string | null
    image?: StringFilter<"OnlineService"> | string
    link?: StringFilter<"OnlineService"> | string
    isActive?: BoolFilter<"OnlineService"> | boolean
    order?: IntFilter<"OnlineService"> | number
  }

  export type OnlineServiceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrder
    link?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
  }

  export type OnlineServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OnlineServiceWhereInput | OnlineServiceWhereInput[]
    OR?: OnlineServiceWhereInput[]
    NOT?: OnlineServiceWhereInput | OnlineServiceWhereInput[]
    createdAt?: DateTimeFilter<"OnlineService"> | Date | string
    updatedAt?: DateTimeFilter<"OnlineService"> | Date | string
    title?: StringFilter<"OnlineService"> | string
    description?: StringNullableFilter<"OnlineService"> | string | null
    image?: StringFilter<"OnlineService"> | string
    link?: StringFilter<"OnlineService"> | string
    isActive?: BoolFilter<"OnlineService"> | boolean
    order?: IntFilter<"OnlineService"> | number
  }, "id">

  export type OnlineServiceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    image?: SortOrder
    link?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    _count?: OnlineServiceCountOrderByAggregateInput
    _avg?: OnlineServiceAvgOrderByAggregateInput
    _max?: OnlineServiceMaxOrderByAggregateInput
    _min?: OnlineServiceMinOrderByAggregateInput
    _sum?: OnlineServiceSumOrderByAggregateInput
  }

  export type OnlineServiceScalarWhereWithAggregatesInput = {
    AND?: OnlineServiceScalarWhereWithAggregatesInput | OnlineServiceScalarWhereWithAggregatesInput[]
    OR?: OnlineServiceScalarWhereWithAggregatesInput[]
    NOT?: OnlineServiceScalarWhereWithAggregatesInput | OnlineServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OnlineService"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OnlineService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OnlineService"> | Date | string
    title?: StringWithAggregatesFilter<"OnlineService"> | string
    description?: StringNullableWithAggregatesFilter<"OnlineService"> | string | null
    image?: StringWithAggregatesFilter<"OnlineService"> | string
    link?: StringWithAggregatesFilter<"OnlineService"> | string
    isActive?: BoolWithAggregatesFilter<"OnlineService"> | boolean
    order?: IntWithAggregatesFilter<"OnlineService"> | number
  }

  export type DonationWhereInput = {
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    id?: IntFilter<"Donation"> | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    title?: StringFilter<"Donation"> | string
    description?: StringFilter<"Donation"> | string
    image?: StringFilter<"Donation"> | string
    contactInfo?: StringFilter<"Donation"> | string
    status?: StringFilter<"Donation"> | string
    rejectionReason?: StringNullableFilter<"Donation"> | string | null
    userId?: IntFilter<"Donation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DonationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    contactInfo?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DonationWhereInput | DonationWhereInput[]
    OR?: DonationWhereInput[]
    NOT?: DonationWhereInput | DonationWhereInput[]
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    title?: StringFilter<"Donation"> | string
    description?: StringFilter<"Donation"> | string
    image?: StringFilter<"Donation"> | string
    contactInfo?: StringFilter<"Donation"> | string
    status?: StringFilter<"Donation"> | string
    rejectionReason?: StringNullableFilter<"Donation"> | string | null
    userId?: IntFilter<"Donation"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DonationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    contactInfo?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: DonationCountOrderByAggregateInput
    _avg?: DonationAvgOrderByAggregateInput
    _max?: DonationMaxOrderByAggregateInput
    _min?: DonationMinOrderByAggregateInput
    _sum?: DonationSumOrderByAggregateInput
  }

  export type DonationScalarWhereWithAggregatesInput = {
    AND?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    OR?: DonationScalarWhereWithAggregatesInput[]
    NOT?: DonationScalarWhereWithAggregatesInput | DonationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Donation"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Donation"> | Date | string
    title?: StringWithAggregatesFilter<"Donation"> | string
    description?: StringWithAggregatesFilter<"Donation"> | string
    image?: StringWithAggregatesFilter<"Donation"> | string
    contactInfo?: StringWithAggregatesFilter<"Donation"> | string
    status?: StringWithAggregatesFilter<"Donation"> | string
    rejectionReason?: StringNullableWithAggregatesFilter<"Donation"> | string | null
    userId?: IntWithAggregatesFilter<"Donation"> | number
  }

  export type StaticContentWhereInput = {
    AND?: StaticContentWhereInput | StaticContentWhereInput[]
    OR?: StaticContentWhereInput[]
    NOT?: StaticContentWhereInput | StaticContentWhereInput[]
    id?: IntFilter<"StaticContent"> | number
    updatedAt?: DateTimeFilter<"StaticContent"> | Date | string
    key?: StringFilter<"StaticContent"> | string
    title?: StringFilter<"StaticContent"> | string
    content?: StringFilter<"StaticContent"> | string
    phone?: StringNullableFilter<"StaticContent"> | string | null
    email?: StringNullableFilter<"StaticContent"> | string | null
    address?: StringNullableFilter<"StaticContent"> | string | null
    social?: StringNullableFilter<"StaticContent"> | string | null
  }

  export type StaticContentOrderByWithRelationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    content?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    social?: SortOrderInput | SortOrder
  }

  export type StaticContentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    key?: string
    AND?: StaticContentWhereInput | StaticContentWhereInput[]
    OR?: StaticContentWhereInput[]
    NOT?: StaticContentWhereInput | StaticContentWhereInput[]
    updatedAt?: DateTimeFilter<"StaticContent"> | Date | string
    title?: StringFilter<"StaticContent"> | string
    content?: StringFilter<"StaticContent"> | string
    phone?: StringNullableFilter<"StaticContent"> | string | null
    email?: StringNullableFilter<"StaticContent"> | string | null
    address?: StringNullableFilter<"StaticContent"> | string | null
    social?: StringNullableFilter<"StaticContent"> | string | null
  }, "id" | "key">

  export type StaticContentOrderByWithAggregationInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    content?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    social?: SortOrderInput | SortOrder
    _count?: StaticContentCountOrderByAggregateInput
    _avg?: StaticContentAvgOrderByAggregateInput
    _max?: StaticContentMaxOrderByAggregateInput
    _min?: StaticContentMinOrderByAggregateInput
    _sum?: StaticContentSumOrderByAggregateInput
  }

  export type StaticContentScalarWhereWithAggregatesInput = {
    AND?: StaticContentScalarWhereWithAggregatesInput | StaticContentScalarWhereWithAggregatesInput[]
    OR?: StaticContentScalarWhereWithAggregatesInput[]
    NOT?: StaticContentScalarWhereWithAggregatesInput | StaticContentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StaticContent"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"StaticContent"> | Date | string
    key?: StringWithAggregatesFilter<"StaticContent"> | string
    title?: StringWithAggregatesFilter<"StaticContent"> | string
    content?: StringWithAggregatesFilter<"StaticContent"> | string
    phone?: StringNullableWithAggregatesFilter<"StaticContent"> | string | null
    email?: StringNullableWithAggregatesFilter<"StaticContent"> | string | null
    address?: StringNullableWithAggregatesFilter<"StaticContent"> | string | null
    social?: StringNullableWithAggregatesFilter<"StaticContent"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    userId?: IntFilter<"Notification"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    userId?: IntFilter<"Notification"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    userId?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    userId?: IntWithAggregatesFilter<"Notification"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    createdAt?: DateTimeFilter<"Message"> | Date | string
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    content?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    senderId?: IntWithAggregatesFilter<"Message"> | number
    receiverId?: IntWithAggregatesFilter<"Message"> | number
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    donations?: DonationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OfferCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    price?: number | null
    discount?: number | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    featuredPaidAt?: Date | string | null
    status?: string
    expiresAt?: Date | string | null
    provider: UserCreateNestedOneWithoutOffersInput
  }

  export type OfferUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    price?: number | null
    discount?: number | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    featuredPaidAt?: Date | string | null
    status?: string
    expiresAt?: Date | string | null
    providerId: number
  }

  export type OfferUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featuredPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    provider?: UserUpdateOneRequiredWithoutOffersNestedInput
  }

  export type OfferUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featuredPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type OfferCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    price?: number | null
    discount?: number | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    featuredPaidAt?: Date | string | null
    status?: string
    expiresAt?: Date | string | null
    providerId: number
  }

  export type OfferUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featuredPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OfferUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featuredPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type FinishingRequestCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    budget?: number | null
    location: string
    city: string
    governorate: string
    isCompanyRequest?: boolean
    specialization?: string | null
    images: string
    status?: string
    selectedProposalId?: number | null
    client: UserCreateNestedOneWithoutFinishingRequestsInput
    proposals?: ProposalCreateNestedManyWithoutRequestInput
  }

  export type FinishingRequestUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    budget?: number | null
    location: string
    city: string
    governorate: string
    isCompanyRequest?: boolean
    specialization?: string | null
    images: string
    status?: string
    selectedProposalId?: number | null
    clientId: number
    proposals?: ProposalUncheckedCreateNestedManyWithoutRequestInput
  }

  export type FinishingRequestUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    isCompanyRequest?: BoolFieldUpdateOperationsInput | boolean
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    client?: UserUpdateOneRequiredWithoutFinishingRequestsNestedInput
    proposals?: ProposalUpdateManyWithoutRequestNestedInput
  }

  export type FinishingRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    isCompanyRequest?: BoolFieldUpdateOperationsInput | boolean
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: IntFieldUpdateOperationsInput | number
    proposals?: ProposalUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type FinishingRequestCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    budget?: number | null
    location: string
    city: string
    governorate: string
    isCompanyRequest?: boolean
    specialization?: string | null
    images: string
    status?: string
    selectedProposalId?: number | null
    clientId: number
  }

  export type FinishingRequestUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    isCompanyRequest?: BoolFieldUpdateOperationsInput | boolean
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FinishingRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    isCompanyRequest?: BoolFieldUpdateOperationsInput | boolean
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type ProposalCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    price: number
    duration: string
    notes?: string | null
    attachments: string
    status?: string
    request: FinishingRequestCreateNestedOneWithoutProposalsInput
    provider: UserCreateNestedOneWithoutProposalsInput
  }

  export type ProposalUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    price: number
    duration: string
    notes?: string | null
    attachments: string
    status?: string
    requestId: number
    providerId: number
  }

  export type ProposalUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    request?: FinishingRequestUpdateOneRequiredWithoutProposalsNestedInput
    provider?: UserUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type ProposalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type ProposalCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    price: number
    duration: string
    notes?: string | null
    attachments: string
    status?: string
    requestId: number
    providerId: number
  }

  export type ProposalUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProposalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type MaintenanceRequestCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    specialization: string
    location: string
    city: string
    governorate: string
    urgency?: string
    images: string
    status?: string
    client: UserCreateNestedOneWithoutMaintenanceRequestsInput
  }

  export type MaintenanceRequestUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    specialization: string
    location: string
    city: string
    governorate: string
    urgency?: string
    images: string
    status?: string
    clientId: number
  }

  export type MaintenanceRequestUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    client?: UserUpdateOneRequiredWithoutMaintenanceRequestsNestedInput
  }

  export type MaintenanceRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type MaintenanceRequestCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    specialization: string
    location: string
    city: string
    governorate: string
    urgency?: string
    images: string
    status?: string
    clientId: number
  }

  export type MaintenanceRequestUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    comment?: string | null
    client: UserCreateNestedOneWithoutRatingsGivenInput
    provider: UserCreateNestedOneWithoutRatingsReceivedInput
  }

  export type RatingUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    comment?: string | null
    clientId: number
    providerId: number
  }

  export type RatingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: UserUpdateOneRequiredWithoutRatingsGivenNestedInput
    provider?: UserUpdateOneRequiredWithoutRatingsReceivedNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    comment?: string | null
    clientId: number
    providerId: number
  }

  export type RatingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type OnlineServiceCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    image: string
    link: string
    isActive?: boolean
    order?: number
  }

  export type OnlineServiceUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    image: string
    link: string
    isActive?: boolean
    order?: number
  }

  export type OnlineServiceUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type OnlineServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type OnlineServiceCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description?: string | null
    image: string
    link: string
    isActive?: boolean
    order?: number
  }

  export type OnlineServiceUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type OnlineServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    image?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
  }

  export type DonationCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    contactInfo: string
    status?: string
    rejectionReason?: string | null
    user: UserCreateNestedOneWithoutDonationsInput
  }

  export type DonationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    contactInfo: string
    status?: string
    rejectionReason?: string | null
    userId: number
  }

  export type DonationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutDonationsNestedInput
  }

  export type DonationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type DonationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    contactInfo: string
    status?: string
    rejectionReason?: string | null
    userId: number
  }

  export type DonationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type StaticContentCreateInput = {
    updatedAt?: Date | string
    key: string
    title: string
    content: string
    phone?: string | null
    email?: string | null
    address?: string | null
    social?: string | null
  }

  export type StaticContentUncheckedCreateInput = {
    id?: number
    updatedAt?: Date | string
    key: string
    title: string
    content: string
    phone?: string | null
    email?: string | null
    address?: string | null
    social?: string | null
  }

  export type StaticContentUpdateInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaticContentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaticContentCreateManyInput = {
    id?: number
    updatedAt?: Date | string
    key: string
    title: string
    content: string
    phone?: string | null
    email?: string | null
    address?: string | null
    social?: string | null
  }

  export type StaticContentUpdateManyMutationInput = {
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StaticContentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    key?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    social?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    createdAt?: Date | string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    userId: number
  }

  export type NotificationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    userId: number
  }

  export type NotificationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    createdAt?: Date | string
    content: string
    isRead?: boolean
    sender: UserCreateNestedOneWithoutSentMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    content: string
    isRead?: boolean
    senderId: number
    receiverId: number
  }

  export type MessageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    content: string
    isRead?: boolean
    senderId: number
    receiverId: number
  }

  export type MessageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type OfferListRelationFilter = {
    every?: OfferWhereInput
    some?: OfferWhereInput
    none?: OfferWhereInput
  }

  export type FinishingRequestListRelationFilter = {
    every?: FinishingRequestWhereInput
    some?: FinishingRequestWhereInput
    none?: FinishingRequestWhereInput
  }

  export type ProposalListRelationFilter = {
    every?: ProposalWhereInput
    some?: ProposalWhereInput
    none?: ProposalWhereInput
  }

  export type MaintenanceRequestListRelationFilter = {
    every?: MaintenanceRequestWhereInput
    some?: MaintenanceRequestWhereInput
    none?: MaintenanceRequestWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type DonationListRelationFilter = {
    every?: DonationWhereInput
    some?: DonationWhereInput
    none?: DonationWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OfferOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FinishingRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProposalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaintenanceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DonationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    isVerified?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrder
    bio?: SortOrder
    address?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    providerType?: SortOrder
    exhibitionType?: SortOrder
    specialization?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    yearsExperience?: SortOrder
    avgPrice?: SortOrder
    portfolio?: SortOrder
    averageRating?: SortOrder
    totalRatings?: SortOrder
    isActive?: SortOrder
    isBanned?: SortOrder
    banReason?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    yearsExperience?: SortOrder
    avgPrice?: SortOrder
    averageRating?: SortOrder
    totalRatings?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    isVerified?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrder
    bio?: SortOrder
    address?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    providerType?: SortOrder
    exhibitionType?: SortOrder
    specialization?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    yearsExperience?: SortOrder
    avgPrice?: SortOrder
    portfolio?: SortOrder
    averageRating?: SortOrder
    totalRatings?: SortOrder
    isActive?: SortOrder
    isBanned?: SortOrder
    banReason?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    otp?: SortOrder
    isVerified?: SortOrder
    avatar?: SortOrder
    coverImage?: SortOrder
    bio?: SortOrder
    address?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    providerType?: SortOrder
    exhibitionType?: SortOrder
    specialization?: SortOrder
    jobTitle?: SortOrder
    companyName?: SortOrder
    yearsExperience?: SortOrder
    avgPrice?: SortOrder
    portfolio?: SortOrder
    averageRating?: SortOrder
    totalRatings?: SortOrder
    isActive?: SortOrder
    isBanned?: SortOrder
    banReason?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    yearsExperience?: SortOrder
    avgPrice?: SortOrder
    averageRating?: SortOrder
    totalRatings?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OfferCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrder
    featuredPaidAt?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    providerId?: SortOrder
  }

  export type OfferAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    providerId?: SortOrder
  }

  export type OfferMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrder
    featuredPaidAt?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    providerId?: SortOrder
  }

  export type OfferMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrder
    featuredPaidAt?: SortOrder
    status?: SortOrder
    expiresAt?: SortOrder
    providerId?: SortOrder
  }

  export type OfferSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    providerId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FinishingRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    isCompanyRequest?: SortOrder
    specialization?: SortOrder
    images?: SortOrder
    status?: SortOrder
    selectedProposalId?: SortOrder
    clientId?: SortOrder
  }

  export type FinishingRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
    selectedProposalId?: SortOrder
    clientId?: SortOrder
  }

  export type FinishingRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    isCompanyRequest?: SortOrder
    specialization?: SortOrder
    images?: SortOrder
    status?: SortOrder
    selectedProposalId?: SortOrder
    clientId?: SortOrder
  }

  export type FinishingRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    budget?: SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    isCompanyRequest?: SortOrder
    specialization?: SortOrder
    images?: SortOrder
    status?: SortOrder
    selectedProposalId?: SortOrder
    clientId?: SortOrder
  }

  export type FinishingRequestSumOrderByAggregateInput = {
    id?: SortOrder
    budget?: SortOrder
    selectedProposalId?: SortOrder
    clientId?: SortOrder
  }

  export type FinishingRequestScalarRelationFilter = {
    is?: FinishingRequestWhereInput
    isNot?: FinishingRequestWhereInput
  }

  export type ProposalCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    attachments?: SortOrder
    status?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
  }

  export type ProposalAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
  }

  export type ProposalMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    attachments?: SortOrder
    status?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
  }

  export type ProposalMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    price?: SortOrder
    duration?: SortOrder
    notes?: SortOrder
    attachments?: SortOrder
    status?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
  }

  export type ProposalSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    requestId?: SortOrder
    providerId?: SortOrder
  }

  export type MaintenanceRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    specialization?: SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    urgency?: SortOrder
    images?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
  }

  export type MaintenanceRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type MaintenanceRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    specialization?: SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    urgency?: SortOrder
    images?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
  }

  export type MaintenanceRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    specialization?: SortOrder
    location?: SortOrder
    city?: SortOrder
    governorate?: SortOrder
    urgency?: SortOrder
    images?: SortOrder
    status?: SortOrder
    clientId?: SortOrder
  }

  export type MaintenanceRequestSumOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    clientId?: SortOrder
    providerId?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    clientId?: SortOrder
    providerId?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    clientId?: SortOrder
    providerId?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    clientId?: SortOrder
    providerId?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    clientId?: SortOrder
    providerId?: SortOrder
  }

  export type OnlineServiceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
  }

  export type OnlineServiceAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type OnlineServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
  }

  export type OnlineServiceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    link?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
  }

  export type OnlineServiceSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
  }

  export type DonationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    contactInfo?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    userId?: SortOrder
  }

  export type DonationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DonationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    contactInfo?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    userId?: SortOrder
  }

  export type DonationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    image?: SortOrder
    contactInfo?: SortOrder
    status?: SortOrder
    rejectionReason?: SortOrder
    userId?: SortOrder
  }

  export type DonationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StaticContentCountOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    content?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    social?: SortOrder
  }

  export type StaticContentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StaticContentMaxOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    content?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    social?: SortOrder
  }

  export type StaticContentMinOrderByAggregateInput = {
    id?: SortOrder
    updatedAt?: SortOrder
    key?: SortOrder
    title?: SortOrder
    content?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    social?: SortOrder
  }

  export type StaticContentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    userId?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    userId?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
  }

  export type OfferCreateNestedManyWithoutProviderInput = {
    create?: XOR<OfferCreateWithoutProviderInput, OfferUncheckedCreateWithoutProviderInput> | OfferCreateWithoutProviderInput[] | OfferUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutProviderInput | OfferCreateOrConnectWithoutProviderInput[]
    createMany?: OfferCreateManyProviderInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type FinishingRequestCreateNestedManyWithoutClientInput = {
    create?: XOR<FinishingRequestCreateWithoutClientInput, FinishingRequestUncheckedCreateWithoutClientInput> | FinishingRequestCreateWithoutClientInput[] | FinishingRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: FinishingRequestCreateOrConnectWithoutClientInput | FinishingRequestCreateOrConnectWithoutClientInput[]
    createMany?: FinishingRequestCreateManyClientInputEnvelope
    connect?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
  }

  export type ProposalCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProposalCreateWithoutProviderInput, ProposalUncheckedCreateWithoutProviderInput> | ProposalCreateWithoutProviderInput[] | ProposalUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutProviderInput | ProposalCreateOrConnectWithoutProviderInput[]
    createMany?: ProposalCreateManyProviderInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type MaintenanceRequestCreateNestedManyWithoutClientInput = {
    create?: XOR<MaintenanceRequestCreateWithoutClientInput, MaintenanceRequestUncheckedCreateWithoutClientInput> | MaintenanceRequestCreateWithoutClientInput[] | MaintenanceRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutClientInput | MaintenanceRequestCreateOrConnectWithoutClientInput[]
    createMany?: MaintenanceRequestCreateManyClientInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutClientInput = {
    create?: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput> | RatingCreateWithoutClientInput[] | RatingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutClientInput | RatingCreateOrConnectWithoutClientInput[]
    createMany?: RatingCreateManyClientInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutProviderInput = {
    create?: XOR<RatingCreateWithoutProviderInput, RatingUncheckedCreateWithoutProviderInput> | RatingCreateWithoutProviderInput[] | RatingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutProviderInput | RatingCreateOrConnectWithoutProviderInput[]
    createMany?: RatingCreateManyProviderInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type DonationCreateNestedManyWithoutUserInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type OfferUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<OfferCreateWithoutProviderInput, OfferUncheckedCreateWithoutProviderInput> | OfferCreateWithoutProviderInput[] | OfferUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutProviderInput | OfferCreateOrConnectWithoutProviderInput[]
    createMany?: OfferCreateManyProviderInputEnvelope
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
  }

  export type FinishingRequestUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<FinishingRequestCreateWithoutClientInput, FinishingRequestUncheckedCreateWithoutClientInput> | FinishingRequestCreateWithoutClientInput[] | FinishingRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: FinishingRequestCreateOrConnectWithoutClientInput | FinishingRequestCreateOrConnectWithoutClientInput[]
    createMany?: FinishingRequestCreateManyClientInputEnvelope
    connect?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ProposalCreateWithoutProviderInput, ProposalUncheckedCreateWithoutProviderInput> | ProposalCreateWithoutProviderInput[] | ProposalUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutProviderInput | ProposalCreateOrConnectWithoutProviderInput[]
    createMany?: ProposalCreateManyProviderInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<MaintenanceRequestCreateWithoutClientInput, MaintenanceRequestUncheckedCreateWithoutClientInput> | MaintenanceRequestCreateWithoutClientInput[] | MaintenanceRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutClientInput | MaintenanceRequestCreateOrConnectWithoutClientInput[]
    createMany?: MaintenanceRequestCreateManyClientInputEnvelope
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput> | RatingCreateWithoutClientInput[] | RatingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutClientInput | RatingCreateOrConnectWithoutClientInput[]
    createMany?: RatingCreateManyClientInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<RatingCreateWithoutProviderInput, RatingUncheckedCreateWithoutProviderInput> | RatingCreateWithoutProviderInput[] | RatingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutProviderInput | RatingCreateOrConnectWithoutProviderInput[]
    createMany?: RatingCreateManyProviderInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type DonationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OfferUpdateManyWithoutProviderNestedInput = {
    create?: XOR<OfferCreateWithoutProviderInput, OfferUncheckedCreateWithoutProviderInput> | OfferCreateWithoutProviderInput[] | OfferUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutProviderInput | OfferCreateOrConnectWithoutProviderInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutProviderInput | OfferUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: OfferCreateManyProviderInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutProviderInput | OfferUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutProviderInput | OfferUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type FinishingRequestUpdateManyWithoutClientNestedInput = {
    create?: XOR<FinishingRequestCreateWithoutClientInput, FinishingRequestUncheckedCreateWithoutClientInput> | FinishingRequestCreateWithoutClientInput[] | FinishingRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: FinishingRequestCreateOrConnectWithoutClientInput | FinishingRequestCreateOrConnectWithoutClientInput[]
    upsert?: FinishingRequestUpsertWithWhereUniqueWithoutClientInput | FinishingRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: FinishingRequestCreateManyClientInputEnvelope
    set?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
    disconnect?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
    delete?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
    connect?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
    update?: FinishingRequestUpdateWithWhereUniqueWithoutClientInput | FinishingRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: FinishingRequestUpdateManyWithWhereWithoutClientInput | FinishingRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: FinishingRequestScalarWhereInput | FinishingRequestScalarWhereInput[]
  }

  export type ProposalUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProposalCreateWithoutProviderInput, ProposalUncheckedCreateWithoutProviderInput> | ProposalCreateWithoutProviderInput[] | ProposalUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutProviderInput | ProposalCreateOrConnectWithoutProviderInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutProviderInput | ProposalUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProposalCreateManyProviderInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutProviderInput | ProposalUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutProviderInput | ProposalUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type MaintenanceRequestUpdateManyWithoutClientNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutClientInput, MaintenanceRequestUncheckedCreateWithoutClientInput> | MaintenanceRequestCreateWithoutClientInput[] | MaintenanceRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutClientInput | MaintenanceRequestCreateOrConnectWithoutClientInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutClientInput | MaintenanceRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MaintenanceRequestCreateManyClientInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutClientInput | MaintenanceRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutClientInput | MaintenanceRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutClientNestedInput = {
    create?: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput> | RatingCreateWithoutClientInput[] | RatingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutClientInput | RatingCreateOrConnectWithoutClientInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutClientInput | RatingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RatingCreateManyClientInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutClientInput | RatingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutClientInput | RatingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutProviderNestedInput = {
    create?: XOR<RatingCreateWithoutProviderInput, RatingUncheckedCreateWithoutProviderInput> | RatingCreateWithoutProviderInput[] | RatingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutProviderInput | RatingCreateOrConnectWithoutProviderInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutProviderInput | RatingUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: RatingCreateManyProviderInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutProviderInput | RatingUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutProviderInput | RatingUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type DonationUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutUserInput | DonationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutUserInput | DonationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutUserInput | DonationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type OfferUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<OfferCreateWithoutProviderInput, OfferUncheckedCreateWithoutProviderInput> | OfferCreateWithoutProviderInput[] | OfferUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: OfferCreateOrConnectWithoutProviderInput | OfferCreateOrConnectWithoutProviderInput[]
    upsert?: OfferUpsertWithWhereUniqueWithoutProviderInput | OfferUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: OfferCreateManyProviderInputEnvelope
    set?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    disconnect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    delete?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    connect?: OfferWhereUniqueInput | OfferWhereUniqueInput[]
    update?: OfferUpdateWithWhereUniqueWithoutProviderInput | OfferUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: OfferUpdateManyWithWhereWithoutProviderInput | OfferUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: OfferScalarWhereInput | OfferScalarWhereInput[]
  }

  export type FinishingRequestUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<FinishingRequestCreateWithoutClientInput, FinishingRequestUncheckedCreateWithoutClientInput> | FinishingRequestCreateWithoutClientInput[] | FinishingRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: FinishingRequestCreateOrConnectWithoutClientInput | FinishingRequestCreateOrConnectWithoutClientInput[]
    upsert?: FinishingRequestUpsertWithWhereUniqueWithoutClientInput | FinishingRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: FinishingRequestCreateManyClientInputEnvelope
    set?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
    disconnect?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
    delete?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
    connect?: FinishingRequestWhereUniqueInput | FinishingRequestWhereUniqueInput[]
    update?: FinishingRequestUpdateWithWhereUniqueWithoutClientInput | FinishingRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: FinishingRequestUpdateManyWithWhereWithoutClientInput | FinishingRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: FinishingRequestScalarWhereInput | FinishingRequestScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ProposalCreateWithoutProviderInput, ProposalUncheckedCreateWithoutProviderInput> | ProposalCreateWithoutProviderInput[] | ProposalUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutProviderInput | ProposalCreateOrConnectWithoutProviderInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutProviderInput | ProposalUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ProposalCreateManyProviderInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutProviderInput | ProposalUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutProviderInput | ProposalUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<MaintenanceRequestCreateWithoutClientInput, MaintenanceRequestUncheckedCreateWithoutClientInput> | MaintenanceRequestCreateWithoutClientInput[] | MaintenanceRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MaintenanceRequestCreateOrConnectWithoutClientInput | MaintenanceRequestCreateOrConnectWithoutClientInput[]
    upsert?: MaintenanceRequestUpsertWithWhereUniqueWithoutClientInput | MaintenanceRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MaintenanceRequestCreateManyClientInputEnvelope
    set?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    disconnect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    delete?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    connect?: MaintenanceRequestWhereUniqueInput | MaintenanceRequestWhereUniqueInput[]
    update?: MaintenanceRequestUpdateWithWhereUniqueWithoutClientInput | MaintenanceRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MaintenanceRequestUpdateManyWithWhereWithoutClientInput | MaintenanceRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput> | RatingCreateWithoutClientInput[] | RatingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutClientInput | RatingCreateOrConnectWithoutClientInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutClientInput | RatingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: RatingCreateManyClientInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutClientInput | RatingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutClientInput | RatingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<RatingCreateWithoutProviderInput, RatingUncheckedCreateWithoutProviderInput> | RatingCreateWithoutProviderInput[] | RatingUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutProviderInput | RatingCreateOrConnectWithoutProviderInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutProviderInput | RatingUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: RatingCreateManyProviderInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutProviderInput | RatingUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutProviderInput | RatingUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type DonationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput> | DonationCreateWithoutUserInput[] | DonationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DonationCreateOrConnectWithoutUserInput | DonationCreateOrConnectWithoutUserInput[]
    upsert?: DonationUpsertWithWhereUniqueWithoutUserInput | DonationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DonationCreateManyUserInputEnvelope
    set?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    disconnect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    delete?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    connect?: DonationWhereUniqueInput | DonationWhereUniqueInput[]
    update?: DonationUpdateWithWhereUniqueWithoutUserInput | DonationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DonationUpdateManyWithWhereWithoutUserInput | DonationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DonationScalarWhereInput | DonationScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOffersInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutOffersNestedInput = {
    create?: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOffersInput
    upsert?: UserUpsertWithoutOffersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOffersInput, UserUpdateWithoutOffersInput>, UserUncheckedUpdateWithoutOffersInput>
  }

  export type UserCreateNestedOneWithoutFinishingRequestsInput = {
    create?: XOR<UserCreateWithoutFinishingRequestsInput, UserUncheckedCreateWithoutFinishingRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinishingRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type ProposalCreateNestedManyWithoutRequestInput = {
    create?: XOR<ProposalCreateWithoutRequestInput, ProposalUncheckedCreateWithoutRequestInput> | ProposalCreateWithoutRequestInput[] | ProposalUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRequestInput | ProposalCreateOrConnectWithoutRequestInput[]
    createMany?: ProposalCreateManyRequestInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type ProposalUncheckedCreateNestedManyWithoutRequestInput = {
    create?: XOR<ProposalCreateWithoutRequestInput, ProposalUncheckedCreateWithoutRequestInput> | ProposalCreateWithoutRequestInput[] | ProposalUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRequestInput | ProposalCreateOrConnectWithoutRequestInput[]
    createMany?: ProposalCreateManyRequestInputEnvelope
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutFinishingRequestsNestedInput = {
    create?: XOR<UserCreateWithoutFinishingRequestsInput, UserUncheckedCreateWithoutFinishingRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinishingRequestsInput
    upsert?: UserUpsertWithoutFinishingRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinishingRequestsInput, UserUpdateWithoutFinishingRequestsInput>, UserUncheckedUpdateWithoutFinishingRequestsInput>
  }

  export type ProposalUpdateManyWithoutRequestNestedInput = {
    create?: XOR<ProposalCreateWithoutRequestInput, ProposalUncheckedCreateWithoutRequestInput> | ProposalCreateWithoutRequestInput[] | ProposalUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRequestInput | ProposalCreateOrConnectWithoutRequestInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutRequestInput | ProposalUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: ProposalCreateManyRequestInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutRequestInput | ProposalUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutRequestInput | ProposalUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type ProposalUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: XOR<ProposalCreateWithoutRequestInput, ProposalUncheckedCreateWithoutRequestInput> | ProposalCreateWithoutRequestInput[] | ProposalUncheckedCreateWithoutRequestInput[]
    connectOrCreate?: ProposalCreateOrConnectWithoutRequestInput | ProposalCreateOrConnectWithoutRequestInput[]
    upsert?: ProposalUpsertWithWhereUniqueWithoutRequestInput | ProposalUpsertWithWhereUniqueWithoutRequestInput[]
    createMany?: ProposalCreateManyRequestInputEnvelope
    set?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    disconnect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    delete?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    connect?: ProposalWhereUniqueInput | ProposalWhereUniqueInput[]
    update?: ProposalUpdateWithWhereUniqueWithoutRequestInput | ProposalUpdateWithWhereUniqueWithoutRequestInput[]
    updateMany?: ProposalUpdateManyWithWhereWithoutRequestInput | ProposalUpdateManyWithWhereWithoutRequestInput[]
    deleteMany?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
  }

  export type FinishingRequestCreateNestedOneWithoutProposalsInput = {
    create?: XOR<FinishingRequestCreateWithoutProposalsInput, FinishingRequestUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: FinishingRequestCreateOrConnectWithoutProposalsInput
    connect?: FinishingRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProposalsInput = {
    create?: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalsInput
    connect?: UserWhereUniqueInput
  }

  export type FinishingRequestUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<FinishingRequestCreateWithoutProposalsInput, FinishingRequestUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: FinishingRequestCreateOrConnectWithoutProposalsInput
    upsert?: FinishingRequestUpsertWithoutProposalsInput
    connect?: FinishingRequestWhereUniqueInput
    update?: XOR<XOR<FinishingRequestUpdateToOneWithWhereWithoutProposalsInput, FinishingRequestUpdateWithoutProposalsInput>, FinishingRequestUncheckedUpdateWithoutProposalsInput>
  }

  export type UserUpdateOneRequiredWithoutProposalsNestedInput = {
    create?: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProposalsInput
    upsert?: UserUpsertWithoutProposalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProposalsInput, UserUpdateWithoutProposalsInput>, UserUncheckedUpdateWithoutProposalsInput>
  }

  export type UserCreateNestedOneWithoutMaintenanceRequestsInput = {
    create?: XOR<UserCreateWithoutMaintenanceRequestsInput, UserUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenanceRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMaintenanceRequestsNestedInput = {
    create?: XOR<UserCreateWithoutMaintenanceRequestsInput, UserUncheckedCreateWithoutMaintenanceRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaintenanceRequestsInput
    upsert?: UserUpsertWithoutMaintenanceRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaintenanceRequestsInput, UserUpdateWithoutMaintenanceRequestsInput>, UserUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type UserCreateNestedOneWithoutRatingsGivenInput = {
    create?: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsGivenInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingsReceivedInput = {
    create?: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsReceivedInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRatingsGivenNestedInput = {
    create?: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsGivenInput
    upsert?: UserUpsertWithoutRatingsGivenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsGivenInput, UserUpdateWithoutRatingsGivenInput>, UserUncheckedUpdateWithoutRatingsGivenInput>
  }

  export type UserUpdateOneRequiredWithoutRatingsReceivedNestedInput = {
    create?: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsReceivedInput
    upsert?: UserUpsertWithoutRatingsReceivedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsReceivedInput, UserUpdateWithoutRatingsReceivedInput>, UserUncheckedUpdateWithoutRatingsReceivedInput>
  }

  export type UserCreateNestedOneWithoutDonationsInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDonationsInput
    upsert?: UserUpsertWithoutDonationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDonationsInput, UserUpdateWithoutDonationsInput>, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentMessagesInput
    upsert?: UserUpsertWithoutSentMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentMessagesInput, UserUpdateWithoutSentMessagesInput>, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type OfferCreateWithoutProviderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    price?: number | null
    discount?: number | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    featuredPaidAt?: Date | string | null
    status?: string
    expiresAt?: Date | string | null
  }

  export type OfferUncheckedCreateWithoutProviderInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    price?: number | null
    discount?: number | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    featuredPaidAt?: Date | string | null
    status?: string
    expiresAt?: Date | string | null
  }

  export type OfferCreateOrConnectWithoutProviderInput = {
    where: OfferWhereUniqueInput
    create: XOR<OfferCreateWithoutProviderInput, OfferUncheckedCreateWithoutProviderInput>
  }

  export type OfferCreateManyProviderInputEnvelope = {
    data: OfferCreateManyProviderInput | OfferCreateManyProviderInput[]
  }

  export type FinishingRequestCreateWithoutClientInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    budget?: number | null
    location: string
    city: string
    governorate: string
    isCompanyRequest?: boolean
    specialization?: string | null
    images: string
    status?: string
    selectedProposalId?: number | null
    proposals?: ProposalCreateNestedManyWithoutRequestInput
  }

  export type FinishingRequestUncheckedCreateWithoutClientInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    budget?: number | null
    location: string
    city: string
    governorate: string
    isCompanyRequest?: boolean
    specialization?: string | null
    images: string
    status?: string
    selectedProposalId?: number | null
    proposals?: ProposalUncheckedCreateNestedManyWithoutRequestInput
  }

  export type FinishingRequestCreateOrConnectWithoutClientInput = {
    where: FinishingRequestWhereUniqueInput
    create: XOR<FinishingRequestCreateWithoutClientInput, FinishingRequestUncheckedCreateWithoutClientInput>
  }

  export type FinishingRequestCreateManyClientInputEnvelope = {
    data: FinishingRequestCreateManyClientInput | FinishingRequestCreateManyClientInput[]
  }

  export type ProposalCreateWithoutProviderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    price: number
    duration: string
    notes?: string | null
    attachments: string
    status?: string
    request: FinishingRequestCreateNestedOneWithoutProposalsInput
  }

  export type ProposalUncheckedCreateWithoutProviderInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    price: number
    duration: string
    notes?: string | null
    attachments: string
    status?: string
    requestId: number
  }

  export type ProposalCreateOrConnectWithoutProviderInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutProviderInput, ProposalUncheckedCreateWithoutProviderInput>
  }

  export type ProposalCreateManyProviderInputEnvelope = {
    data: ProposalCreateManyProviderInput | ProposalCreateManyProviderInput[]
  }

  export type MaintenanceRequestCreateWithoutClientInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    specialization: string
    location: string
    city: string
    governorate: string
    urgency?: string
    images: string
    status?: string
  }

  export type MaintenanceRequestUncheckedCreateWithoutClientInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    specialization: string
    location: string
    city: string
    governorate: string
    urgency?: string
    images: string
    status?: string
  }

  export type MaintenanceRequestCreateOrConnectWithoutClientInput = {
    where: MaintenanceRequestWhereUniqueInput
    create: XOR<MaintenanceRequestCreateWithoutClientInput, MaintenanceRequestUncheckedCreateWithoutClientInput>
  }

  export type MaintenanceRequestCreateManyClientInputEnvelope = {
    data: MaintenanceRequestCreateManyClientInput | MaintenanceRequestCreateManyClientInput[]
  }

  export type RatingCreateWithoutClientInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    comment?: string | null
    provider: UserCreateNestedOneWithoutRatingsReceivedInput
  }

  export type RatingUncheckedCreateWithoutClientInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    comment?: string | null
    providerId: number
  }

  export type RatingCreateOrConnectWithoutClientInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput>
  }

  export type RatingCreateManyClientInputEnvelope = {
    data: RatingCreateManyClientInput | RatingCreateManyClientInput[]
  }

  export type RatingCreateWithoutProviderInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    comment?: string | null
    client: UserCreateNestedOneWithoutRatingsGivenInput
  }

  export type RatingUncheckedCreateWithoutProviderInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    comment?: string | null
    clientId: number
  }

  export type RatingCreateOrConnectWithoutProviderInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutProviderInput, RatingUncheckedCreateWithoutProviderInput>
  }

  export type RatingCreateManyProviderInputEnvelope = {
    data: RatingCreateManyProviderInput | RatingCreateManyProviderInput[]
  }

  export type DonationCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    contactInfo: string
    status?: string
    rejectionReason?: string | null
  }

  export type DonationUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    contactInfo: string
    status?: string
    rejectionReason?: string | null
  }

  export type DonationCreateOrConnectWithoutUserInput = {
    where: DonationWhereUniqueInput
    create: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput>
  }

  export type DonationCreateManyUserInputEnvelope = {
    data: DonationCreateManyUserInput | DonationCreateManyUserInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    createdAt?: Date | string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type MessageCreateWithoutSenderInput = {
    createdAt?: Date | string
    content: string
    isRead?: boolean
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: number
    createdAt?: Date | string
    content: string
    isRead?: boolean
    receiverId: number
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
  }

  export type MessageCreateWithoutReceiverInput = {
    createdAt?: Date | string
    content: string
    isRead?: boolean
    sender: UserCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: number
    createdAt?: Date | string
    content: string
    isRead?: boolean
    senderId: number
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
  }

  export type OfferUpsertWithWhereUniqueWithoutProviderInput = {
    where: OfferWhereUniqueInput
    update: XOR<OfferUpdateWithoutProviderInput, OfferUncheckedUpdateWithoutProviderInput>
    create: XOR<OfferCreateWithoutProviderInput, OfferUncheckedCreateWithoutProviderInput>
  }

  export type OfferUpdateWithWhereUniqueWithoutProviderInput = {
    where: OfferWhereUniqueInput
    data: XOR<OfferUpdateWithoutProviderInput, OfferUncheckedUpdateWithoutProviderInput>
  }

  export type OfferUpdateManyWithWhereWithoutProviderInput = {
    where: OfferScalarWhereInput
    data: XOR<OfferUpdateManyMutationInput, OfferUncheckedUpdateManyWithoutProviderInput>
  }

  export type OfferScalarWhereInput = {
    AND?: OfferScalarWhereInput | OfferScalarWhereInput[]
    OR?: OfferScalarWhereInput[]
    NOT?: OfferScalarWhereInput | OfferScalarWhereInput[]
    id?: IntFilter<"Offer"> | number
    createdAt?: DateTimeFilter<"Offer"> | Date | string
    updatedAt?: DateTimeFilter<"Offer"> | Date | string
    title?: StringFilter<"Offer"> | string
    description?: StringFilter<"Offer"> | string
    image?: StringFilter<"Offer"> | string
    price?: FloatNullableFilter<"Offer"> | number | null
    discount?: FloatNullableFilter<"Offer"> | number | null
    isFeatured?: BoolFilter<"Offer"> | boolean
    featuredUntil?: DateTimeNullableFilter<"Offer"> | Date | string | null
    featuredPaidAt?: DateTimeNullableFilter<"Offer"> | Date | string | null
    status?: StringFilter<"Offer"> | string
    expiresAt?: DateTimeNullableFilter<"Offer"> | Date | string | null
    providerId?: IntFilter<"Offer"> | number
  }

  export type FinishingRequestUpsertWithWhereUniqueWithoutClientInput = {
    where: FinishingRequestWhereUniqueInput
    update: XOR<FinishingRequestUpdateWithoutClientInput, FinishingRequestUncheckedUpdateWithoutClientInput>
    create: XOR<FinishingRequestCreateWithoutClientInput, FinishingRequestUncheckedCreateWithoutClientInput>
  }

  export type FinishingRequestUpdateWithWhereUniqueWithoutClientInput = {
    where: FinishingRequestWhereUniqueInput
    data: XOR<FinishingRequestUpdateWithoutClientInput, FinishingRequestUncheckedUpdateWithoutClientInput>
  }

  export type FinishingRequestUpdateManyWithWhereWithoutClientInput = {
    where: FinishingRequestScalarWhereInput
    data: XOR<FinishingRequestUpdateManyMutationInput, FinishingRequestUncheckedUpdateManyWithoutClientInput>
  }

  export type FinishingRequestScalarWhereInput = {
    AND?: FinishingRequestScalarWhereInput | FinishingRequestScalarWhereInput[]
    OR?: FinishingRequestScalarWhereInput[]
    NOT?: FinishingRequestScalarWhereInput | FinishingRequestScalarWhereInput[]
    id?: IntFilter<"FinishingRequest"> | number
    createdAt?: DateTimeFilter<"FinishingRequest"> | Date | string
    updatedAt?: DateTimeFilter<"FinishingRequest"> | Date | string
    title?: StringFilter<"FinishingRequest"> | string
    description?: StringFilter<"FinishingRequest"> | string
    budget?: FloatNullableFilter<"FinishingRequest"> | number | null
    location?: StringFilter<"FinishingRequest"> | string
    city?: StringFilter<"FinishingRequest"> | string
    governorate?: StringFilter<"FinishingRequest"> | string
    isCompanyRequest?: BoolFilter<"FinishingRequest"> | boolean
    specialization?: StringNullableFilter<"FinishingRequest"> | string | null
    images?: StringFilter<"FinishingRequest"> | string
    status?: StringFilter<"FinishingRequest"> | string
    selectedProposalId?: IntNullableFilter<"FinishingRequest"> | number | null
    clientId?: IntFilter<"FinishingRequest"> | number
  }

  export type ProposalUpsertWithWhereUniqueWithoutProviderInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutProviderInput, ProposalUncheckedUpdateWithoutProviderInput>
    create: XOR<ProposalCreateWithoutProviderInput, ProposalUncheckedCreateWithoutProviderInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutProviderInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutProviderInput, ProposalUncheckedUpdateWithoutProviderInput>
  }

  export type ProposalUpdateManyWithWhereWithoutProviderInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutProviderInput>
  }

  export type ProposalScalarWhereInput = {
    AND?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    OR?: ProposalScalarWhereInput[]
    NOT?: ProposalScalarWhereInput | ProposalScalarWhereInput[]
    id?: IntFilter<"Proposal"> | number
    createdAt?: DateTimeFilter<"Proposal"> | Date | string
    updatedAt?: DateTimeFilter<"Proposal"> | Date | string
    description?: StringFilter<"Proposal"> | string
    price?: FloatFilter<"Proposal"> | number
    duration?: StringFilter<"Proposal"> | string
    notes?: StringNullableFilter<"Proposal"> | string | null
    attachments?: StringFilter<"Proposal"> | string
    status?: StringFilter<"Proposal"> | string
    requestId?: IntFilter<"Proposal"> | number
    providerId?: IntFilter<"Proposal"> | number
  }

  export type MaintenanceRequestUpsertWithWhereUniqueWithoutClientInput = {
    where: MaintenanceRequestWhereUniqueInput
    update: XOR<MaintenanceRequestUpdateWithoutClientInput, MaintenanceRequestUncheckedUpdateWithoutClientInput>
    create: XOR<MaintenanceRequestCreateWithoutClientInput, MaintenanceRequestUncheckedCreateWithoutClientInput>
  }

  export type MaintenanceRequestUpdateWithWhereUniqueWithoutClientInput = {
    where: MaintenanceRequestWhereUniqueInput
    data: XOR<MaintenanceRequestUpdateWithoutClientInput, MaintenanceRequestUncheckedUpdateWithoutClientInput>
  }

  export type MaintenanceRequestUpdateManyWithWhereWithoutClientInput = {
    where: MaintenanceRequestScalarWhereInput
    data: XOR<MaintenanceRequestUpdateManyMutationInput, MaintenanceRequestUncheckedUpdateManyWithoutClientInput>
  }

  export type MaintenanceRequestScalarWhereInput = {
    AND?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
    OR?: MaintenanceRequestScalarWhereInput[]
    NOT?: MaintenanceRequestScalarWhereInput | MaintenanceRequestScalarWhereInput[]
    id?: IntFilter<"MaintenanceRequest"> | number
    createdAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    updatedAt?: DateTimeFilter<"MaintenanceRequest"> | Date | string
    title?: StringFilter<"MaintenanceRequest"> | string
    description?: StringFilter<"MaintenanceRequest"> | string
    specialization?: StringFilter<"MaintenanceRequest"> | string
    location?: StringFilter<"MaintenanceRequest"> | string
    city?: StringFilter<"MaintenanceRequest"> | string
    governorate?: StringFilter<"MaintenanceRequest"> | string
    urgency?: StringFilter<"MaintenanceRequest"> | string
    images?: StringFilter<"MaintenanceRequest"> | string
    status?: StringFilter<"MaintenanceRequest"> | string
    clientId?: IntFilter<"MaintenanceRequest"> | number
  }

  export type RatingUpsertWithWhereUniqueWithoutClientInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutClientInput, RatingUncheckedUpdateWithoutClientInput>
    create: XOR<RatingCreateWithoutClientInput, RatingUncheckedCreateWithoutClientInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutClientInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutClientInput, RatingUncheckedUpdateWithoutClientInput>
  }

  export type RatingUpdateManyWithWhereWithoutClientInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutClientInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    rating?: IntFilter<"Rating"> | number
    comment?: StringNullableFilter<"Rating"> | string | null
    clientId?: IntFilter<"Rating"> | number
    providerId?: IntFilter<"Rating"> | number
  }

  export type RatingUpsertWithWhereUniqueWithoutProviderInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutProviderInput, RatingUncheckedUpdateWithoutProviderInput>
    create: XOR<RatingCreateWithoutProviderInput, RatingUncheckedCreateWithoutProviderInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutProviderInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutProviderInput, RatingUncheckedUpdateWithoutProviderInput>
  }

  export type RatingUpdateManyWithWhereWithoutProviderInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutProviderInput>
  }

  export type DonationUpsertWithWhereUniqueWithoutUserInput = {
    where: DonationWhereUniqueInput
    update: XOR<DonationUpdateWithoutUserInput, DonationUncheckedUpdateWithoutUserInput>
    create: XOR<DonationCreateWithoutUserInput, DonationUncheckedCreateWithoutUserInput>
  }

  export type DonationUpdateWithWhereUniqueWithoutUserInput = {
    where: DonationWhereUniqueInput
    data: XOR<DonationUpdateWithoutUserInput, DonationUncheckedUpdateWithoutUserInput>
  }

  export type DonationUpdateManyWithWhereWithoutUserInput = {
    where: DonationScalarWhereInput
    data: XOR<DonationUpdateManyMutationInput, DonationUncheckedUpdateManyWithoutUserInput>
  }

  export type DonationScalarWhereInput = {
    AND?: DonationScalarWhereInput | DonationScalarWhereInput[]
    OR?: DonationScalarWhereInput[]
    NOT?: DonationScalarWhereInput | DonationScalarWhereInput[]
    id?: IntFilter<"Donation"> | number
    createdAt?: DateTimeFilter<"Donation"> | Date | string
    updatedAt?: DateTimeFilter<"Donation"> | Date | string
    title?: StringFilter<"Donation"> | string
    description?: StringFilter<"Donation"> | string
    image?: StringFilter<"Donation"> | string
    contactInfo?: StringFilter<"Donation"> | string
    status?: StringFilter<"Donation"> | string
    rejectionReason?: StringNullableFilter<"Donation"> | string | null
    userId?: IntFilter<"Donation"> | number
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    userId?: IntFilter<"Notification"> | number
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    senderId?: IntFilter<"Message"> | number
    receiverId?: IntFilter<"Message"> | number
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type UserCreateWithoutOffersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    donations?: DonationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutOffersInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutOffersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
  }

  export type UserUpsertWithoutOffersInput = {
    update: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
    create: XOR<UserCreateWithoutOffersInput, UserUncheckedCreateWithoutOffersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOffersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOffersInput, UserUncheckedUpdateWithoutOffersInput>
  }

  export type UserUpdateWithoutOffersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutOffersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutFinishingRequestsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    donations?: DonationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutFinishingRequestsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutFinishingRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinishingRequestsInput, UserUncheckedCreateWithoutFinishingRequestsInput>
  }

  export type ProposalCreateWithoutRequestInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    price: number
    duration: string
    notes?: string | null
    attachments: string
    status?: string
    provider: UserCreateNestedOneWithoutProposalsInput
  }

  export type ProposalUncheckedCreateWithoutRequestInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    price: number
    duration: string
    notes?: string | null
    attachments: string
    status?: string
    providerId: number
  }

  export type ProposalCreateOrConnectWithoutRequestInput = {
    where: ProposalWhereUniqueInput
    create: XOR<ProposalCreateWithoutRequestInput, ProposalUncheckedCreateWithoutRequestInput>
  }

  export type ProposalCreateManyRequestInputEnvelope = {
    data: ProposalCreateManyRequestInput | ProposalCreateManyRequestInput[]
  }

  export type UserUpsertWithoutFinishingRequestsInput = {
    update: XOR<UserUpdateWithoutFinishingRequestsInput, UserUncheckedUpdateWithoutFinishingRequestsInput>
    create: XOR<UserCreateWithoutFinishingRequestsInput, UserUncheckedCreateWithoutFinishingRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinishingRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinishingRequestsInput, UserUncheckedUpdateWithoutFinishingRequestsInput>
  }

  export type UserUpdateWithoutFinishingRequestsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutFinishingRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ProposalUpsertWithWhereUniqueWithoutRequestInput = {
    where: ProposalWhereUniqueInput
    update: XOR<ProposalUpdateWithoutRequestInput, ProposalUncheckedUpdateWithoutRequestInput>
    create: XOR<ProposalCreateWithoutRequestInput, ProposalUncheckedCreateWithoutRequestInput>
  }

  export type ProposalUpdateWithWhereUniqueWithoutRequestInput = {
    where: ProposalWhereUniqueInput
    data: XOR<ProposalUpdateWithoutRequestInput, ProposalUncheckedUpdateWithoutRequestInput>
  }

  export type ProposalUpdateManyWithWhereWithoutRequestInput = {
    where: ProposalScalarWhereInput
    data: XOR<ProposalUpdateManyMutationInput, ProposalUncheckedUpdateManyWithoutRequestInput>
  }

  export type FinishingRequestCreateWithoutProposalsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    budget?: number | null
    location: string
    city: string
    governorate: string
    isCompanyRequest?: boolean
    specialization?: string | null
    images: string
    status?: string
    selectedProposalId?: number | null
    client: UserCreateNestedOneWithoutFinishingRequestsInput
  }

  export type FinishingRequestUncheckedCreateWithoutProposalsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    budget?: number | null
    location: string
    city: string
    governorate: string
    isCompanyRequest?: boolean
    specialization?: string | null
    images: string
    status?: string
    selectedProposalId?: number | null
    clientId: number
  }

  export type FinishingRequestCreateOrConnectWithoutProposalsInput = {
    where: FinishingRequestWhereUniqueInput
    create: XOR<FinishingRequestCreateWithoutProposalsInput, FinishingRequestUncheckedCreateWithoutProposalsInput>
  }

  export type UserCreateWithoutProposalsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    donations?: DonationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutProposalsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutProposalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
  }

  export type FinishingRequestUpsertWithoutProposalsInput = {
    update: XOR<FinishingRequestUpdateWithoutProposalsInput, FinishingRequestUncheckedUpdateWithoutProposalsInput>
    create: XOR<FinishingRequestCreateWithoutProposalsInput, FinishingRequestUncheckedCreateWithoutProposalsInput>
    where?: FinishingRequestWhereInput
  }

  export type FinishingRequestUpdateToOneWithWhereWithoutProposalsInput = {
    where?: FinishingRequestWhereInput
    data: XOR<FinishingRequestUpdateWithoutProposalsInput, FinishingRequestUncheckedUpdateWithoutProposalsInput>
  }

  export type FinishingRequestUpdateWithoutProposalsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    isCompanyRequest?: BoolFieldUpdateOperationsInput | boolean
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    client?: UserUpdateOneRequiredWithoutFinishingRequestsNestedInput
  }

  export type FinishingRequestUncheckedUpdateWithoutProposalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    isCompanyRequest?: BoolFieldUpdateOperationsInput | boolean
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type UserUpsertWithoutProposalsInput = {
    update: XOR<UserUpdateWithoutProposalsInput, UserUncheckedUpdateWithoutProposalsInput>
    create: XOR<UserCreateWithoutProposalsInput, UserUncheckedCreateWithoutProposalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProposalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProposalsInput, UserUncheckedUpdateWithoutProposalsInput>
  }

  export type UserUpdateWithoutProposalsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutProposalsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutMaintenanceRequestsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    donations?: DonationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutMaintenanceRequestsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutMaintenanceRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaintenanceRequestsInput, UserUncheckedCreateWithoutMaintenanceRequestsInput>
  }

  export type UserUpsertWithoutMaintenanceRequestsInput = {
    update: XOR<UserUpdateWithoutMaintenanceRequestsInput, UserUncheckedUpdateWithoutMaintenanceRequestsInput>
    create: XOR<UserCreateWithoutMaintenanceRequestsInput, UserUncheckedCreateWithoutMaintenanceRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaintenanceRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaintenanceRequestsInput, UserUncheckedUpdateWithoutMaintenanceRequestsInput>
  }

  export type UserUpdateWithoutMaintenanceRequestsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutMaintenanceRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutRatingsGivenInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    donations?: DonationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutRatingsGivenInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutRatingsGivenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
  }

  export type UserCreateWithoutRatingsReceivedInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    donations?: DonationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutRatingsReceivedInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutRatingsReceivedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
  }

  export type UserUpsertWithoutRatingsGivenInput = {
    update: XOR<UserUpdateWithoutRatingsGivenInput, UserUncheckedUpdateWithoutRatingsGivenInput>
    create: XOR<UserCreateWithoutRatingsGivenInput, UserUncheckedCreateWithoutRatingsGivenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsGivenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsGivenInput, UserUncheckedUpdateWithoutRatingsGivenInput>
  }

  export type UserUpdateWithoutRatingsGivenInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsGivenInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutRatingsReceivedInput = {
    update: XOR<UserUpdateWithoutRatingsReceivedInput, UserUncheckedUpdateWithoutRatingsReceivedInput>
    create: XOR<UserCreateWithoutRatingsReceivedInput, UserUncheckedCreateWithoutRatingsReceivedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsReceivedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsReceivedInput, UserUncheckedUpdateWithoutRatingsReceivedInput>
  }

  export type UserUpdateWithoutRatingsReceivedInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsReceivedInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutDonationsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutDonationsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutDonationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
  }

  export type UserUpsertWithoutDonationsInput = {
    update: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
    create: XOR<UserCreateWithoutDonationsInput, UserUncheckedCreateWithoutDonationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDonationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDonationsInput, UserUncheckedUpdateWithoutDonationsInput>
  }

  export type UserUpdateWithoutDonationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutDonationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    donations?: DonationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserCreateWithoutSentMessagesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    donations?: DonationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type UserUncheckedCreateWithoutSentMessagesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type UserCreateOrConnectWithoutSentMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestCreateNestedManyWithoutClientInput
    proposals?: ProposalCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingCreateNestedManyWithoutProviderInput
    donations?: DonationCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fullName: string
    phone: string
    email?: string | null
    password: string
    role: string
    otp?: string | null
    isVerified?: boolean
    avatar?: string | null
    coverImage?: string | null
    bio?: string | null
    address?: string | null
    city?: string | null
    governorate?: string | null
    providerType?: string | null
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    companyName?: string | null
    yearsExperience?: number | null
    avgPrice?: number | null
    portfolio: string
    averageRating?: number
    totalRatings?: number
    isActive?: boolean
    isBanned?: boolean
    banReason?: string | null
    offers?: OfferUncheckedCreateNestedManyWithoutProviderInput
    finishingRequests?: FinishingRequestUncheckedCreateNestedManyWithoutClientInput
    proposals?: ProposalUncheckedCreateNestedManyWithoutProviderInput
    maintenanceRequests?: MaintenanceRequestUncheckedCreateNestedManyWithoutClientInput
    ratingsGiven?: RatingUncheckedCreateNestedManyWithoutClientInput
    ratingsReceived?: RatingUncheckedCreateNestedManyWithoutProviderInput
    donations?: DonationUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type UserUpsertWithoutSentMessagesInput = {
    update: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<UserCreateWithoutSentMessagesInput, UserUncheckedCreateWithoutSentMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentMessagesInput, UserUncheckedUpdateWithoutSentMessagesInput>
  }

  export type UserUpdateWithoutSentMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type UserUncheckedUpdateWithoutSentMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUpdateManyWithoutClientNestedInput
    proposals?: ProposalUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUpdateManyWithoutProviderNestedInput
    donations?: DonationUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    coverImage?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    governorate?: NullableStringFieldUpdateOperationsInput | string | null
    providerType?: NullableStringFieldUpdateOperationsInput | string | null
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    yearsExperience?: NullableIntFieldUpdateOperationsInput | number | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    portfolio?: StringFieldUpdateOperationsInput | string
    averageRating?: FloatFieldUpdateOperationsInput | number
    totalRatings?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isBanned?: BoolFieldUpdateOperationsInput | boolean
    banReason?: NullableStringFieldUpdateOperationsInput | string | null
    offers?: OfferUncheckedUpdateManyWithoutProviderNestedInput
    finishingRequests?: FinishingRequestUncheckedUpdateManyWithoutClientNestedInput
    proposals?: ProposalUncheckedUpdateManyWithoutProviderNestedInput
    maintenanceRequests?: MaintenanceRequestUncheckedUpdateManyWithoutClientNestedInput
    ratingsGiven?: RatingUncheckedUpdateManyWithoutClientNestedInput
    ratingsReceived?: RatingUncheckedUpdateManyWithoutProviderNestedInput
    donations?: DonationUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type OfferCreateManyProviderInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    price?: number | null
    discount?: number | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    featuredPaidAt?: Date | string | null
    status?: string
    expiresAt?: Date | string | null
  }

  export type FinishingRequestCreateManyClientInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    budget?: number | null
    location: string
    city: string
    governorate: string
    isCompanyRequest?: boolean
    specialization?: string | null
    images: string
    status?: string
    selectedProposalId?: number | null
  }

  export type ProposalCreateManyProviderInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    price: number
    duration: string
    notes?: string | null
    attachments: string
    status?: string
    requestId: number
  }

  export type MaintenanceRequestCreateManyClientInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    specialization: string
    location: string
    city: string
    governorate: string
    urgency?: string
    images: string
    status?: string
  }

  export type RatingCreateManyClientInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    comment?: string | null
    providerId: number
  }

  export type RatingCreateManyProviderInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rating?: number
    comment?: string | null
    clientId: number
  }

  export type DonationCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    image: string
    contactInfo: string
    status?: string
    rejectionReason?: string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
  }

  export type MessageCreateManySenderInput = {
    id?: number
    createdAt?: Date | string
    content: string
    isRead?: boolean
    receiverId: number
  }

  export type MessageCreateManyReceiverInput = {
    id?: number
    createdAt?: Date | string
    content: string
    isRead?: boolean
    senderId: number
  }

  export type OfferUpdateWithoutProviderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featuredPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OfferUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featuredPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OfferUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    featuredPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FinishingRequestUpdateWithoutClientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    isCompanyRequest?: BoolFieldUpdateOperationsInput | boolean
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUpdateManyWithoutRequestNestedInput
  }

  export type FinishingRequestUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    isCompanyRequest?: BoolFieldUpdateOperationsInput | boolean
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
    proposals?: ProposalUncheckedUpdateManyWithoutRequestNestedInput
  }

  export type FinishingRequestUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    budget?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    isCompanyRequest?: BoolFieldUpdateOperationsInput | boolean
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    selectedProposalId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ProposalUpdateWithoutProviderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    request?: FinishingRequestUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type ProposalUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
  }

  export type ProposalUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    requestId?: IntFieldUpdateOperationsInput | number
  }

  export type MaintenanceRequestUpdateWithoutClientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceRequestUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type MaintenanceRequestUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    governorate?: StringFieldUpdateOperationsInput | string
    urgency?: StringFieldUpdateOperationsInput | string
    images?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RatingUpdateWithoutClientInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    provider?: UserUpdateOneRequiredWithoutRatingsReceivedNestedInput
  }

  export type RatingUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUpdateWithoutProviderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    client?: UserUpdateOneRequiredWithoutRatingsGivenNestedInput
  }

  export type RatingUncheckedUpdateWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUncheckedUpdateManyWithoutProviderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: IntFieldUpdateOperationsInput | number
  }

  export type DonationUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DonationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    contactInfo?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageUpdateWithoutSenderInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    receiverId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutReceiverInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    sender?: UserUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    senderId?: IntFieldUpdateOperationsInput | number
  }

  export type ProposalCreateManyRequestInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    description: string
    price: number
    duration: string
    notes?: string | null
    attachments: string
    status?: string
    providerId: number
  }

  export type ProposalUpdateWithoutRequestInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    provider?: UserUpdateOneRequiredWithoutProposalsNestedInput
  }

  export type ProposalUncheckedUpdateWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    providerId?: IntFieldUpdateOperationsInput | number
  }

  export type ProposalUncheckedUpdateManyWithoutRequestInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    attachments?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    providerId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}