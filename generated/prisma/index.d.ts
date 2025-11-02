
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
 * Model CLINTE
 * 
 */
export type CLINTE = $Result.DefaultSelection<Prisma.$CLINTEPayload>
/**
 * Model ServiceProvider
 * 
 */
export type ServiceProvider = $Result.DefaultSelection<Prisma.$ServiceProviderPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CLINTES
 * const cLINTES = await prisma.cLINTE.findMany()
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
   * // Fetch zero or more CLINTES
   * const cLINTES = await prisma.cLINTE.findMany()
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
   * `prisma.cLINTE`: Exposes CRUD operations for the **CLINTE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CLINTES
    * const cLINTES = await prisma.cLINTE.findMany()
    * ```
    */
  get cLINTE(): Prisma.CLINTEDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceProvider`: Exposes CRUD operations for the **ServiceProvider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceProviders
    * const serviceProviders = await prisma.serviceProvider.findMany()
    * ```
    */
  get serviceProvider(): Prisma.ServiceProviderDelegate<ExtArgs, ClientOptions>;
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
    CLINTE: 'CLINTE',
    ServiceProvider: 'ServiceProvider'
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
      modelProps: "cLINTE" | "serviceProvider"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CLINTE: {
        payload: Prisma.$CLINTEPayload<ExtArgs>
        fields: Prisma.CLINTEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CLINTEFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CLINTEFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload>
          }
          findFirst: {
            args: Prisma.CLINTEFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CLINTEFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload>
          }
          findMany: {
            args: Prisma.CLINTEFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload>[]
          }
          create: {
            args: Prisma.CLINTECreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload>
          }
          createMany: {
            args: Prisma.CLINTECreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CLINTECreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload>[]
          }
          delete: {
            args: Prisma.CLINTEDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload>
          }
          update: {
            args: Prisma.CLINTEUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload>
          }
          deleteMany: {
            args: Prisma.CLINTEDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CLINTEUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CLINTEUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload>[]
          }
          upsert: {
            args: Prisma.CLINTEUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CLINTEPayload>
          }
          aggregate: {
            args: Prisma.CLINTEAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCLINTE>
          }
          groupBy: {
            args: Prisma.CLINTEGroupByArgs<ExtArgs>
            result: $Utils.Optional<CLINTEGroupByOutputType>[]
          }
          count: {
            args: Prisma.CLINTECountArgs<ExtArgs>
            result: $Utils.Optional<CLINTECountAggregateOutputType> | number
          }
        }
      }
      ServiceProvider: {
        payload: Prisma.$ServiceProviderPayload<ExtArgs>
        fields: Prisma.ServiceProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          findFirst: {
            args: Prisma.ServiceProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          findMany: {
            args: Prisma.ServiceProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>[]
          }
          create: {
            args: Prisma.ServiceProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          createMany: {
            args: Prisma.ServiceProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>[]
          }
          delete: {
            args: Prisma.ServiceProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          update: {
            args: Prisma.ServiceProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          deleteMany: {
            args: Prisma.ServiceProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>[]
          }
          upsert: {
            args: Prisma.ServiceProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceProviderPayload>
          }
          aggregate: {
            args: Prisma.ServiceProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceProvider>
          }
          groupBy: {
            args: Prisma.ServiceProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceProviderCountAggregateOutputType> | number
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
    cLINTE?: CLINTEOmit
    serviceProvider?: ServiceProviderOmit
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
   * Models
   */

  /**
   * Model CLINTE
   */

  export type AggregateCLINTE = {
    _count: CLINTECountAggregateOutputType | null
    _avg: CLINTEAvgAggregateOutputType | null
    _sum: CLINTESumAggregateOutputType | null
    _min: CLINTEMinAggregateOutputType | null
    _max: CLINTEMaxAggregateOutputType | null
  }

  export type CLINTEAvgAggregateOutputType = {
    id: number | null
  }

  export type CLINTESumAggregateOutputType = {
    id: number | null
  }

  export type CLINTEMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    phone: string | null
    password: string | null
    otp: string | null
    isVerified: boolean | null
    createdAt: Date | null
  }

  export type CLINTEMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    phone: string | null
    password: string | null
    otp: string | null
    isVerified: boolean | null
    createdAt: Date | null
  }

  export type CLINTECountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    password: number
    otp: number
    isVerified: number
    createdAt: number
    _all: number
  }


  export type CLINTEAvgAggregateInputType = {
    id?: true
  }

  export type CLINTESumAggregateInputType = {
    id?: true
  }

  export type CLINTEMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    otp?: true
    isVerified?: true
    createdAt?: true
  }

  export type CLINTEMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    otp?: true
    isVerified?: true
    createdAt?: true
  }

  export type CLINTECountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    otp?: true
    isVerified?: true
    createdAt?: true
    _all?: true
  }

  export type CLINTEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CLINTE to aggregate.
     */
    where?: CLINTEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CLINTES to fetch.
     */
    orderBy?: CLINTEOrderByWithRelationInput | CLINTEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CLINTEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CLINTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CLINTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CLINTES
    **/
    _count?: true | CLINTECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CLINTEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CLINTESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CLINTEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CLINTEMaxAggregateInputType
  }

  export type GetCLINTEAggregateType<T extends CLINTEAggregateArgs> = {
        [P in keyof T & keyof AggregateCLINTE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCLINTE[P]>
      : GetScalarType<T[P], AggregateCLINTE[P]>
  }




  export type CLINTEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CLINTEWhereInput
    orderBy?: CLINTEOrderByWithAggregationInput | CLINTEOrderByWithAggregationInput[]
    by: CLINTEScalarFieldEnum[] | CLINTEScalarFieldEnum
    having?: CLINTEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CLINTECountAggregateInputType | true
    _avg?: CLINTEAvgAggregateInputType
    _sum?: CLINTESumAggregateInputType
    _min?: CLINTEMinAggregateInputType
    _max?: CLINTEMaxAggregateInputType
  }

  export type CLINTEGroupByOutputType = {
    id: number
    fullName: string
    phone: string
    password: string
    otp: string | null
    isVerified: boolean
    createdAt: Date
    _count: CLINTECountAggregateOutputType | null
    _avg: CLINTEAvgAggregateOutputType | null
    _sum: CLINTESumAggregateOutputType | null
    _min: CLINTEMinAggregateOutputType | null
    _max: CLINTEMaxAggregateOutputType | null
  }

  type GetCLINTEGroupByPayload<T extends CLINTEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CLINTEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CLINTEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CLINTEGroupByOutputType[P]>
            : GetScalarType<T[P], CLINTEGroupByOutputType[P]>
        }
      >
    >


  export type CLINTESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    otp?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cLINTE"]>

  export type CLINTESelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    otp?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cLINTE"]>

  export type CLINTESelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    otp?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["cLINTE"]>

  export type CLINTESelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    otp?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }

  export type CLINTEOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phone" | "password" | "otp" | "isVerified" | "createdAt", ExtArgs["result"]["cLINTE"]>

  export type $CLINTEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CLINTE"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      phone: string
      password: string
      otp: string | null
      isVerified: boolean
      createdAt: Date
    }, ExtArgs["result"]["cLINTE"]>
    composites: {}
  }

  type CLINTEGetPayload<S extends boolean | null | undefined | CLINTEDefaultArgs> = $Result.GetResult<Prisma.$CLINTEPayload, S>

  type CLINTECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CLINTEFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CLINTECountAggregateInputType | true
    }

  export interface CLINTEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CLINTE'], meta: { name: 'CLINTE' } }
    /**
     * Find zero or one CLINTE that matches the filter.
     * @param {CLINTEFindUniqueArgs} args - Arguments to find a CLINTE
     * @example
     * // Get one CLINTE
     * const cLINTE = await prisma.cLINTE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CLINTEFindUniqueArgs>(args: SelectSubset<T, CLINTEFindUniqueArgs<ExtArgs>>): Prisma__CLINTEClient<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CLINTE that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CLINTEFindUniqueOrThrowArgs} args - Arguments to find a CLINTE
     * @example
     * // Get one CLINTE
     * const cLINTE = await prisma.cLINTE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CLINTEFindUniqueOrThrowArgs>(args: SelectSubset<T, CLINTEFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CLINTEClient<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CLINTE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLINTEFindFirstArgs} args - Arguments to find a CLINTE
     * @example
     * // Get one CLINTE
     * const cLINTE = await prisma.cLINTE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CLINTEFindFirstArgs>(args?: SelectSubset<T, CLINTEFindFirstArgs<ExtArgs>>): Prisma__CLINTEClient<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CLINTE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLINTEFindFirstOrThrowArgs} args - Arguments to find a CLINTE
     * @example
     * // Get one CLINTE
     * const cLINTE = await prisma.cLINTE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CLINTEFindFirstOrThrowArgs>(args?: SelectSubset<T, CLINTEFindFirstOrThrowArgs<ExtArgs>>): Prisma__CLINTEClient<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CLINTES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLINTEFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CLINTES
     * const cLINTES = await prisma.cLINTE.findMany()
     * 
     * // Get first 10 CLINTES
     * const cLINTES = await prisma.cLINTE.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cLINTEWithIdOnly = await prisma.cLINTE.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CLINTEFindManyArgs>(args?: SelectSubset<T, CLINTEFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CLINTE.
     * @param {CLINTECreateArgs} args - Arguments to create a CLINTE.
     * @example
     * // Create one CLINTE
     * const CLINTE = await prisma.cLINTE.create({
     *   data: {
     *     // ... data to create a CLINTE
     *   }
     * })
     * 
     */
    create<T extends CLINTECreateArgs>(args: SelectSubset<T, CLINTECreateArgs<ExtArgs>>): Prisma__CLINTEClient<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CLINTES.
     * @param {CLINTECreateManyArgs} args - Arguments to create many CLINTES.
     * @example
     * // Create many CLINTES
     * const cLINTE = await prisma.cLINTE.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CLINTECreateManyArgs>(args?: SelectSubset<T, CLINTECreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CLINTES and returns the data saved in the database.
     * @param {CLINTECreateManyAndReturnArgs} args - Arguments to create many CLINTES.
     * @example
     * // Create many CLINTES
     * const cLINTE = await prisma.cLINTE.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CLINTES and only return the `id`
     * const cLINTEWithIdOnly = await prisma.cLINTE.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CLINTECreateManyAndReturnArgs>(args?: SelectSubset<T, CLINTECreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CLINTE.
     * @param {CLINTEDeleteArgs} args - Arguments to delete one CLINTE.
     * @example
     * // Delete one CLINTE
     * const CLINTE = await prisma.cLINTE.delete({
     *   where: {
     *     // ... filter to delete one CLINTE
     *   }
     * })
     * 
     */
    delete<T extends CLINTEDeleteArgs>(args: SelectSubset<T, CLINTEDeleteArgs<ExtArgs>>): Prisma__CLINTEClient<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CLINTE.
     * @param {CLINTEUpdateArgs} args - Arguments to update one CLINTE.
     * @example
     * // Update one CLINTE
     * const cLINTE = await prisma.cLINTE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CLINTEUpdateArgs>(args: SelectSubset<T, CLINTEUpdateArgs<ExtArgs>>): Prisma__CLINTEClient<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CLINTES.
     * @param {CLINTEDeleteManyArgs} args - Arguments to filter CLINTES to delete.
     * @example
     * // Delete a few CLINTES
     * const { count } = await prisma.cLINTE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CLINTEDeleteManyArgs>(args?: SelectSubset<T, CLINTEDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CLINTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLINTEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CLINTES
     * const cLINTE = await prisma.cLINTE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CLINTEUpdateManyArgs>(args: SelectSubset<T, CLINTEUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CLINTES and returns the data updated in the database.
     * @param {CLINTEUpdateManyAndReturnArgs} args - Arguments to update many CLINTES.
     * @example
     * // Update many CLINTES
     * const cLINTE = await prisma.cLINTE.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CLINTES and only return the `id`
     * const cLINTEWithIdOnly = await prisma.cLINTE.updateManyAndReturn({
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
    updateManyAndReturn<T extends CLINTEUpdateManyAndReturnArgs>(args: SelectSubset<T, CLINTEUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CLINTE.
     * @param {CLINTEUpsertArgs} args - Arguments to update or create a CLINTE.
     * @example
     * // Update or create a CLINTE
     * const cLINTE = await prisma.cLINTE.upsert({
     *   create: {
     *     // ... data to create a CLINTE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CLINTE we want to update
     *   }
     * })
     */
    upsert<T extends CLINTEUpsertArgs>(args: SelectSubset<T, CLINTEUpsertArgs<ExtArgs>>): Prisma__CLINTEClient<$Result.GetResult<Prisma.$CLINTEPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CLINTES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLINTECountArgs} args - Arguments to filter CLINTES to count.
     * @example
     * // Count the number of CLINTES
     * const count = await prisma.cLINTE.count({
     *   where: {
     *     // ... the filter for the CLINTES we want to count
     *   }
     * })
    **/
    count<T extends CLINTECountArgs>(
      args?: Subset<T, CLINTECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CLINTECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CLINTE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLINTEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CLINTEAggregateArgs>(args: Subset<T, CLINTEAggregateArgs>): Prisma.PrismaPromise<GetCLINTEAggregateType<T>>

    /**
     * Group by CLINTE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CLINTEGroupByArgs} args - Group by arguments.
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
      T extends CLINTEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CLINTEGroupByArgs['orderBy'] }
        : { orderBy?: CLINTEGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CLINTEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCLINTEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CLINTE model
   */
  readonly fields: CLINTEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CLINTE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CLINTEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the CLINTE model
   */
  interface CLINTEFieldRefs {
    readonly id: FieldRef<"CLINTE", 'Int'>
    readonly fullName: FieldRef<"CLINTE", 'String'>
    readonly phone: FieldRef<"CLINTE", 'String'>
    readonly password: FieldRef<"CLINTE", 'String'>
    readonly otp: FieldRef<"CLINTE", 'String'>
    readonly isVerified: FieldRef<"CLINTE", 'Boolean'>
    readonly createdAt: FieldRef<"CLINTE", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CLINTE findUnique
   */
  export type CLINTEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * Filter, which CLINTE to fetch.
     */
    where: CLINTEWhereUniqueInput
  }

  /**
   * CLINTE findUniqueOrThrow
   */
  export type CLINTEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * Filter, which CLINTE to fetch.
     */
    where: CLINTEWhereUniqueInput
  }

  /**
   * CLINTE findFirst
   */
  export type CLINTEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * Filter, which CLINTE to fetch.
     */
    where?: CLINTEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CLINTES to fetch.
     */
    orderBy?: CLINTEOrderByWithRelationInput | CLINTEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CLINTES.
     */
    cursor?: CLINTEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CLINTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CLINTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CLINTES.
     */
    distinct?: CLINTEScalarFieldEnum | CLINTEScalarFieldEnum[]
  }

  /**
   * CLINTE findFirstOrThrow
   */
  export type CLINTEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * Filter, which CLINTE to fetch.
     */
    where?: CLINTEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CLINTES to fetch.
     */
    orderBy?: CLINTEOrderByWithRelationInput | CLINTEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CLINTES.
     */
    cursor?: CLINTEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CLINTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CLINTES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CLINTES.
     */
    distinct?: CLINTEScalarFieldEnum | CLINTEScalarFieldEnum[]
  }

  /**
   * CLINTE findMany
   */
  export type CLINTEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * Filter, which CLINTES to fetch.
     */
    where?: CLINTEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CLINTES to fetch.
     */
    orderBy?: CLINTEOrderByWithRelationInput | CLINTEOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CLINTES.
     */
    cursor?: CLINTEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CLINTES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CLINTES.
     */
    skip?: number
    distinct?: CLINTEScalarFieldEnum | CLINTEScalarFieldEnum[]
  }

  /**
   * CLINTE create
   */
  export type CLINTECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * The data needed to create a CLINTE.
     */
    data: XOR<CLINTECreateInput, CLINTEUncheckedCreateInput>
  }

  /**
   * CLINTE createMany
   */
  export type CLINTECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CLINTES.
     */
    data: CLINTECreateManyInput | CLINTECreateManyInput[]
  }

  /**
   * CLINTE createManyAndReturn
   */
  export type CLINTECreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * The data used to create many CLINTES.
     */
    data: CLINTECreateManyInput | CLINTECreateManyInput[]
  }

  /**
   * CLINTE update
   */
  export type CLINTEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * The data needed to update a CLINTE.
     */
    data: XOR<CLINTEUpdateInput, CLINTEUncheckedUpdateInput>
    /**
     * Choose, which CLINTE to update.
     */
    where: CLINTEWhereUniqueInput
  }

  /**
   * CLINTE updateMany
   */
  export type CLINTEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CLINTES.
     */
    data: XOR<CLINTEUpdateManyMutationInput, CLINTEUncheckedUpdateManyInput>
    /**
     * Filter which CLINTES to update
     */
    where?: CLINTEWhereInput
    /**
     * Limit how many CLINTES to update.
     */
    limit?: number
  }

  /**
   * CLINTE updateManyAndReturn
   */
  export type CLINTEUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * The data used to update CLINTES.
     */
    data: XOR<CLINTEUpdateManyMutationInput, CLINTEUncheckedUpdateManyInput>
    /**
     * Filter which CLINTES to update
     */
    where?: CLINTEWhereInput
    /**
     * Limit how many CLINTES to update.
     */
    limit?: number
  }

  /**
   * CLINTE upsert
   */
  export type CLINTEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * The filter to search for the CLINTE to update in case it exists.
     */
    where: CLINTEWhereUniqueInput
    /**
     * In case the CLINTE found by the `where` argument doesn't exist, create a new CLINTE with this data.
     */
    create: XOR<CLINTECreateInput, CLINTEUncheckedCreateInput>
    /**
     * In case the CLINTE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CLINTEUpdateInput, CLINTEUncheckedUpdateInput>
  }

  /**
   * CLINTE delete
   */
  export type CLINTEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
    /**
     * Filter which CLINTE to delete.
     */
    where: CLINTEWhereUniqueInput
  }

  /**
   * CLINTE deleteMany
   */
  export type CLINTEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CLINTES to delete
     */
    where?: CLINTEWhereInput
    /**
     * Limit how many CLINTES to delete.
     */
    limit?: number
  }

  /**
   * CLINTE without action
   */
  export type CLINTEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CLINTE
     */
    select?: CLINTESelect<ExtArgs> | null
    /**
     * Omit specific fields from the CLINTE
     */
    omit?: CLINTEOmit<ExtArgs> | null
  }


  /**
   * Model ServiceProvider
   */

  export type AggregateServiceProvider = {
    _count: ServiceProviderCountAggregateOutputType | null
    _avg: ServiceProviderAvgAggregateOutputType | null
    _sum: ServiceProviderSumAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  export type ServiceProviderAvgAggregateOutputType = {
    id: number | null
    avgPrice: number | null
  }

  export type ServiceProviderSumAggregateOutputType = {
    id: number | null
    avgPrice: number | null
  }

  export type ServiceProviderMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    phone: string | null
    password: string | null
    address: string | null
    providerType: string | null
    exhibitionType: string | null
    specialization: string | null
    jobTitle: string | null
    avgPrice: number | null
    isVerified: boolean | null
    createdAt: Date | null
  }

  export type ServiceProviderMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    phone: string | null
    password: string | null
    address: string | null
    providerType: string | null
    exhibitionType: string | null
    specialization: string | null
    jobTitle: string | null
    avgPrice: number | null
    isVerified: boolean | null
    createdAt: Date | null
  }

  export type ServiceProviderCountAggregateOutputType = {
    id: number
    fullName: number
    phone: number
    password: number
    address: number
    providerType: number
    exhibitionType: number
    specialization: number
    jobTitle: number
    avgPrice: number
    isVerified: number
    createdAt: number
    _all: number
  }


  export type ServiceProviderAvgAggregateInputType = {
    id?: true
    avgPrice?: true
  }

  export type ServiceProviderSumAggregateInputType = {
    id?: true
    avgPrice?: true
  }

  export type ServiceProviderMinAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    address?: true
    providerType?: true
    exhibitionType?: true
    specialization?: true
    jobTitle?: true
    avgPrice?: true
    isVerified?: true
    createdAt?: true
  }

  export type ServiceProviderMaxAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    address?: true
    providerType?: true
    exhibitionType?: true
    specialization?: true
    jobTitle?: true
    avgPrice?: true
    isVerified?: true
    createdAt?: true
  }

  export type ServiceProviderCountAggregateInputType = {
    id?: true
    fullName?: true
    phone?: true
    password?: true
    address?: true
    providerType?: true
    exhibitionType?: true
    specialization?: true
    jobTitle?: true
    avgPrice?: true
    isVerified?: true
    createdAt?: true
    _all?: true
  }

  export type ServiceProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProvider to aggregate.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceProviders
    **/
    _count?: true | ServiceProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceProviderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceProviderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceProviderMaxAggregateInputType
  }

  export type GetServiceProviderAggregateType<T extends ServiceProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceProvider[P]>
      : GetScalarType<T[P], AggregateServiceProvider[P]>
  }




  export type ServiceProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceProviderWhereInput
    orderBy?: ServiceProviderOrderByWithAggregationInput | ServiceProviderOrderByWithAggregationInput[]
    by: ServiceProviderScalarFieldEnum[] | ServiceProviderScalarFieldEnum
    having?: ServiceProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceProviderCountAggregateInputType | true
    _avg?: ServiceProviderAvgAggregateInputType
    _sum?: ServiceProviderSumAggregateInputType
    _min?: ServiceProviderMinAggregateInputType
    _max?: ServiceProviderMaxAggregateInputType
  }

  export type ServiceProviderGroupByOutputType = {
    id: number
    fullName: string
    phone: string
    password: string
    address: string
    providerType: string
    exhibitionType: string | null
    specialization: string | null
    jobTitle: string | null
    avgPrice: number | null
    isVerified: boolean
    createdAt: Date
    _count: ServiceProviderCountAggregateOutputType | null
    _avg: ServiceProviderAvgAggregateOutputType | null
    _sum: ServiceProviderSumAggregateOutputType | null
    _min: ServiceProviderMinAggregateOutputType | null
    _max: ServiceProviderMaxAggregateOutputType | null
  }

  type GetServiceProviderGroupByPayload<T extends ServiceProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceProviderGroupByOutputType[P]>
        }
      >
    >


  export type ServiceProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    providerType?: boolean
    exhibitionType?: boolean
    specialization?: boolean
    jobTitle?: boolean
    avgPrice?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceProvider"]>

  export type ServiceProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    providerType?: boolean
    exhibitionType?: boolean
    specialization?: boolean
    jobTitle?: boolean
    avgPrice?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceProvider"]>

  export type ServiceProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    providerType?: boolean
    exhibitionType?: boolean
    specialization?: boolean
    jobTitle?: boolean
    avgPrice?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["serviceProvider"]>

  export type ServiceProviderSelectScalar = {
    id?: boolean
    fullName?: boolean
    phone?: boolean
    password?: boolean
    address?: boolean
    providerType?: boolean
    exhibitionType?: boolean
    specialization?: boolean
    jobTitle?: boolean
    avgPrice?: boolean
    isVerified?: boolean
    createdAt?: boolean
  }

  export type ServiceProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "phone" | "password" | "address" | "providerType" | "exhibitionType" | "specialization" | "jobTitle" | "avgPrice" | "isVerified" | "createdAt", ExtArgs["result"]["serviceProvider"]>

  export type $ServiceProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceProvider"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      phone: string
      password: string
      address: string
      providerType: string
      exhibitionType: string | null
      specialization: string | null
      jobTitle: string | null
      avgPrice: number | null
      isVerified: boolean
      createdAt: Date
    }, ExtArgs["result"]["serviceProvider"]>
    composites: {}
  }

  type ServiceProviderGetPayload<S extends boolean | null | undefined | ServiceProviderDefaultArgs> = $Result.GetResult<Prisma.$ServiceProviderPayload, S>

  type ServiceProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceProviderCountAggregateInputType | true
    }

  export interface ServiceProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceProvider'], meta: { name: 'ServiceProvider' } }
    /**
     * Find zero or one ServiceProvider that matches the filter.
     * @param {ServiceProviderFindUniqueArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceProviderFindUniqueArgs>(args: SelectSubset<T, ServiceProviderFindUniqueArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceProvider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceProviderFindUniqueOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceProvider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderFindFirstArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceProviderFindFirstArgs>(args?: SelectSubset<T, ServiceProviderFindFirstArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceProvider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderFindFirstOrThrowArgs} args - Arguments to find a ServiceProvider
     * @example
     * // Get one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceProviders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany()
     * 
     * // Get first 10 ServiceProviders
     * const serviceProviders = await prisma.serviceProvider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceProviderWithIdOnly = await prisma.serviceProvider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceProviderFindManyArgs>(args?: SelectSubset<T, ServiceProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceProvider.
     * @param {ServiceProviderCreateArgs} args - Arguments to create a ServiceProvider.
     * @example
     * // Create one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.create({
     *   data: {
     *     // ... data to create a ServiceProvider
     *   }
     * })
     * 
     */
    create<T extends ServiceProviderCreateArgs>(args: SelectSubset<T, ServiceProviderCreateArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceProviders.
     * @param {ServiceProviderCreateManyArgs} args - Arguments to create many ServiceProviders.
     * @example
     * // Create many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceProviderCreateManyArgs>(args?: SelectSubset<T, ServiceProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceProviders and returns the data saved in the database.
     * @param {ServiceProviderCreateManyAndReturnArgs} args - Arguments to create many ServiceProviders.
     * @example
     * // Create many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceProviders and only return the `id`
     * const serviceProviderWithIdOnly = await prisma.serviceProvider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceProvider.
     * @param {ServiceProviderDeleteArgs} args - Arguments to delete one ServiceProvider.
     * @example
     * // Delete one ServiceProvider
     * const ServiceProvider = await prisma.serviceProvider.delete({
     *   where: {
     *     // ... filter to delete one ServiceProvider
     *   }
     * })
     * 
     */
    delete<T extends ServiceProviderDeleteArgs>(args: SelectSubset<T, ServiceProviderDeleteArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceProvider.
     * @param {ServiceProviderUpdateArgs} args - Arguments to update one ServiceProvider.
     * @example
     * // Update one ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceProviderUpdateArgs>(args: SelectSubset<T, ServiceProviderUpdateArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceProviders.
     * @param {ServiceProviderDeleteManyArgs} args - Arguments to filter ServiceProviders to delete.
     * @example
     * // Delete a few ServiceProviders
     * const { count } = await prisma.serviceProvider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceProviderDeleteManyArgs>(args?: SelectSubset<T, ServiceProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceProviderUpdateManyArgs>(args: SelectSubset<T, ServiceProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceProviders and returns the data updated in the database.
     * @param {ServiceProviderUpdateManyAndReturnArgs} args - Arguments to update many ServiceProviders.
     * @example
     * // Update many ServiceProviders
     * const serviceProvider = await prisma.serviceProvider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceProviders and only return the `id`
     * const serviceProviderWithIdOnly = await prisma.serviceProvider.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServiceProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceProvider.
     * @param {ServiceProviderUpsertArgs} args - Arguments to update or create a ServiceProvider.
     * @example
     * // Update or create a ServiceProvider
     * const serviceProvider = await prisma.serviceProvider.upsert({
     *   create: {
     *     // ... data to create a ServiceProvider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceProvider we want to update
     *   }
     * })
     */
    upsert<T extends ServiceProviderUpsertArgs>(args: SelectSubset<T, ServiceProviderUpsertArgs<ExtArgs>>): Prisma__ServiceProviderClient<$Result.GetResult<Prisma.$ServiceProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceProviders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderCountArgs} args - Arguments to filter ServiceProviders to count.
     * @example
     * // Count the number of ServiceProviders
     * const count = await prisma.serviceProvider.count({
     *   where: {
     *     // ... the filter for the ServiceProviders we want to count
     *   }
     * })
    **/
    count<T extends ServiceProviderCountArgs>(
      args?: Subset<T, ServiceProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceProviderAggregateArgs>(args: Subset<T, ServiceProviderAggregateArgs>): Prisma.PrismaPromise<GetServiceProviderAggregateType<T>>

    /**
     * Group by ServiceProvider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceProviderGroupByArgs} args - Group by arguments.
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
      T extends ServiceProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceProviderGroupByArgs['orderBy'] }
        : { orderBy?: ServiceProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceProvider model
   */
  readonly fields: ServiceProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceProvider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ServiceProvider model
   */
  interface ServiceProviderFieldRefs {
    readonly id: FieldRef<"ServiceProvider", 'Int'>
    readonly fullName: FieldRef<"ServiceProvider", 'String'>
    readonly phone: FieldRef<"ServiceProvider", 'String'>
    readonly password: FieldRef<"ServiceProvider", 'String'>
    readonly address: FieldRef<"ServiceProvider", 'String'>
    readonly providerType: FieldRef<"ServiceProvider", 'String'>
    readonly exhibitionType: FieldRef<"ServiceProvider", 'String'>
    readonly specialization: FieldRef<"ServiceProvider", 'String'>
    readonly jobTitle: FieldRef<"ServiceProvider", 'String'>
    readonly avgPrice: FieldRef<"ServiceProvider", 'Float'>
    readonly isVerified: FieldRef<"ServiceProvider", 'Boolean'>
    readonly createdAt: FieldRef<"ServiceProvider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServiceProvider findUnique
   */
  export type ServiceProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider findUniqueOrThrow
   */
  export type ServiceProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider findFirst
   */
  export type ServiceProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProviders.
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProviders.
     */
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * ServiceProvider findFirstOrThrow
   */
  export type ServiceProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProvider to fetch.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceProviders.
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceProviders.
     */
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * ServiceProvider findMany
   */
  export type ServiceProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Filter, which ServiceProviders to fetch.
     */
    where?: ServiceProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceProviders to fetch.
     */
    orderBy?: ServiceProviderOrderByWithRelationInput | ServiceProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceProviders.
     */
    cursor?: ServiceProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceProviders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceProviders.
     */
    skip?: number
    distinct?: ServiceProviderScalarFieldEnum | ServiceProviderScalarFieldEnum[]
  }

  /**
   * ServiceProvider create
   */
  export type ServiceProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * The data needed to create a ServiceProvider.
     */
    data: XOR<ServiceProviderCreateInput, ServiceProviderUncheckedCreateInput>
  }

  /**
   * ServiceProvider createMany
   */
  export type ServiceProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceProviders.
     */
    data: ServiceProviderCreateManyInput | ServiceProviderCreateManyInput[]
  }

  /**
   * ServiceProvider createManyAndReturn
   */
  export type ServiceProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceProviders.
     */
    data: ServiceProviderCreateManyInput | ServiceProviderCreateManyInput[]
  }

  /**
   * ServiceProvider update
   */
  export type ServiceProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * The data needed to update a ServiceProvider.
     */
    data: XOR<ServiceProviderUpdateInput, ServiceProviderUncheckedUpdateInput>
    /**
     * Choose, which ServiceProvider to update.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider updateMany
   */
  export type ServiceProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceProviders.
     */
    data: XOR<ServiceProviderUpdateManyMutationInput, ServiceProviderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceProviders to update
     */
    where?: ServiceProviderWhereInput
    /**
     * Limit how many ServiceProviders to update.
     */
    limit?: number
  }

  /**
   * ServiceProvider updateManyAndReturn
   */
  export type ServiceProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * The data used to update ServiceProviders.
     */
    data: XOR<ServiceProviderUpdateManyMutationInput, ServiceProviderUncheckedUpdateManyInput>
    /**
     * Filter which ServiceProviders to update
     */
    where?: ServiceProviderWhereInput
    /**
     * Limit how many ServiceProviders to update.
     */
    limit?: number
  }

  /**
   * ServiceProvider upsert
   */
  export type ServiceProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * The filter to search for the ServiceProvider to update in case it exists.
     */
    where: ServiceProviderWhereUniqueInput
    /**
     * In case the ServiceProvider found by the `where` argument doesn't exist, create a new ServiceProvider with this data.
     */
    create: XOR<ServiceProviderCreateInput, ServiceProviderUncheckedCreateInput>
    /**
     * In case the ServiceProvider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceProviderUpdateInput, ServiceProviderUncheckedUpdateInput>
  }

  /**
   * ServiceProvider delete
   */
  export type ServiceProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
    /**
     * Filter which ServiceProvider to delete.
     */
    where: ServiceProviderWhereUniqueInput
  }

  /**
   * ServiceProvider deleteMany
   */
  export type ServiceProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceProviders to delete
     */
    where?: ServiceProviderWhereInput
    /**
     * Limit how many ServiceProviders to delete.
     */
    limit?: number
  }

  /**
   * ServiceProvider without action
   */
  export type ServiceProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceProvider
     */
    select?: ServiceProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceProvider
     */
    omit?: ServiceProviderOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CLINTEScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    password: 'password',
    otp: 'otp',
    isVerified: 'isVerified',
    createdAt: 'createdAt'
  };

  export type CLINTEScalarFieldEnum = (typeof CLINTEScalarFieldEnum)[keyof typeof CLINTEScalarFieldEnum]


  export const ServiceProviderScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    phone: 'phone',
    password: 'password',
    address: 'address',
    providerType: 'providerType',
    exhibitionType: 'exhibitionType',
    specialization: 'specialization',
    jobTitle: 'jobTitle',
    avgPrice: 'avgPrice',
    isVerified: 'isVerified',
    createdAt: 'createdAt'
  };

  export type ServiceProviderScalarFieldEnum = (typeof ServiceProviderScalarFieldEnum)[keyof typeof ServiceProviderScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CLINTEWhereInput = {
    AND?: CLINTEWhereInput | CLINTEWhereInput[]
    OR?: CLINTEWhereInput[]
    NOT?: CLINTEWhereInput | CLINTEWhereInput[]
    id?: IntFilter<"CLINTE"> | number
    fullName?: StringFilter<"CLINTE"> | string
    phone?: StringFilter<"CLINTE"> | string
    password?: StringFilter<"CLINTE"> | string
    otp?: StringNullableFilter<"CLINTE"> | string | null
    isVerified?: BoolFilter<"CLINTE"> | boolean
    createdAt?: DateTimeFilter<"CLINTE"> | Date | string
  }

  export type CLINTEOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    otp?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type CLINTEWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: CLINTEWhereInput | CLINTEWhereInput[]
    OR?: CLINTEWhereInput[]
    NOT?: CLINTEWhereInput | CLINTEWhereInput[]
    fullName?: StringFilter<"CLINTE"> | string
    password?: StringFilter<"CLINTE"> | string
    otp?: StringNullableFilter<"CLINTE"> | string | null
    isVerified?: BoolFilter<"CLINTE"> | boolean
    createdAt?: DateTimeFilter<"CLINTE"> | Date | string
  }, "id" | "phone">

  export type CLINTEOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    otp?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    _count?: CLINTECountOrderByAggregateInput
    _avg?: CLINTEAvgOrderByAggregateInput
    _max?: CLINTEMaxOrderByAggregateInput
    _min?: CLINTEMinOrderByAggregateInput
    _sum?: CLINTESumOrderByAggregateInput
  }

  export type CLINTEScalarWhereWithAggregatesInput = {
    AND?: CLINTEScalarWhereWithAggregatesInput | CLINTEScalarWhereWithAggregatesInput[]
    OR?: CLINTEScalarWhereWithAggregatesInput[]
    NOT?: CLINTEScalarWhereWithAggregatesInput | CLINTEScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CLINTE"> | number
    fullName?: StringWithAggregatesFilter<"CLINTE"> | string
    phone?: StringWithAggregatesFilter<"CLINTE"> | string
    password?: StringWithAggregatesFilter<"CLINTE"> | string
    otp?: StringNullableWithAggregatesFilter<"CLINTE"> | string | null
    isVerified?: BoolWithAggregatesFilter<"CLINTE"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"CLINTE"> | Date | string
  }

  export type ServiceProviderWhereInput = {
    AND?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    OR?: ServiceProviderWhereInput[]
    NOT?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    id?: IntFilter<"ServiceProvider"> | number
    fullName?: StringFilter<"ServiceProvider"> | string
    phone?: StringFilter<"ServiceProvider"> | string
    password?: StringFilter<"ServiceProvider"> | string
    address?: StringFilter<"ServiceProvider"> | string
    providerType?: StringFilter<"ServiceProvider"> | string
    exhibitionType?: StringNullableFilter<"ServiceProvider"> | string | null
    specialization?: StringNullableFilter<"ServiceProvider"> | string | null
    jobTitle?: StringNullableFilter<"ServiceProvider"> | string | null
    avgPrice?: FloatNullableFilter<"ServiceProvider"> | number | null
    isVerified?: BoolFilter<"ServiceProvider"> | boolean
    createdAt?: DateTimeFilter<"ServiceProvider"> | Date | string
  }

  export type ServiceProviderOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    providerType?: SortOrder
    exhibitionType?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    avgPrice?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    OR?: ServiceProviderWhereInput[]
    NOT?: ServiceProviderWhereInput | ServiceProviderWhereInput[]
    fullName?: StringFilter<"ServiceProvider"> | string
    password?: StringFilter<"ServiceProvider"> | string
    address?: StringFilter<"ServiceProvider"> | string
    providerType?: StringFilter<"ServiceProvider"> | string
    exhibitionType?: StringNullableFilter<"ServiceProvider"> | string | null
    specialization?: StringNullableFilter<"ServiceProvider"> | string | null
    jobTitle?: StringNullableFilter<"ServiceProvider"> | string | null
    avgPrice?: FloatNullableFilter<"ServiceProvider"> | number | null
    isVerified?: BoolFilter<"ServiceProvider"> | boolean
    createdAt?: DateTimeFilter<"ServiceProvider"> | Date | string
  }, "id" | "phone">

  export type ServiceProviderOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    providerType?: SortOrder
    exhibitionType?: SortOrderInput | SortOrder
    specialization?: SortOrderInput | SortOrder
    jobTitle?: SortOrderInput | SortOrder
    avgPrice?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    _count?: ServiceProviderCountOrderByAggregateInput
    _avg?: ServiceProviderAvgOrderByAggregateInput
    _max?: ServiceProviderMaxOrderByAggregateInput
    _min?: ServiceProviderMinOrderByAggregateInput
    _sum?: ServiceProviderSumOrderByAggregateInput
  }

  export type ServiceProviderScalarWhereWithAggregatesInput = {
    AND?: ServiceProviderScalarWhereWithAggregatesInput | ServiceProviderScalarWhereWithAggregatesInput[]
    OR?: ServiceProviderScalarWhereWithAggregatesInput[]
    NOT?: ServiceProviderScalarWhereWithAggregatesInput | ServiceProviderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServiceProvider"> | number
    fullName?: StringWithAggregatesFilter<"ServiceProvider"> | string
    phone?: StringWithAggregatesFilter<"ServiceProvider"> | string
    password?: StringWithAggregatesFilter<"ServiceProvider"> | string
    address?: StringWithAggregatesFilter<"ServiceProvider"> | string
    providerType?: StringWithAggregatesFilter<"ServiceProvider"> | string
    exhibitionType?: StringNullableWithAggregatesFilter<"ServiceProvider"> | string | null
    specialization?: StringNullableWithAggregatesFilter<"ServiceProvider"> | string | null
    jobTitle?: StringNullableWithAggregatesFilter<"ServiceProvider"> | string | null
    avgPrice?: FloatNullableWithAggregatesFilter<"ServiceProvider"> | number | null
    isVerified?: BoolWithAggregatesFilter<"ServiceProvider"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ServiceProvider"> | Date | string
  }

  export type CLINTECreateInput = {
    fullName: string
    phone: string
    password: string
    otp?: string | null
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type CLINTEUncheckedCreateInput = {
    id?: number
    fullName: string
    phone: string
    password: string
    otp?: string | null
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type CLINTEUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CLINTEUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CLINTECreateManyInput = {
    id?: number
    fullName: string
    phone: string
    password: string
    otp?: string | null
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type CLINTEUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CLINTEUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProviderCreateInput = {
    fullName: string
    phone: string
    password: string
    address: string
    providerType: string
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    avgPrice?: number | null
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type ServiceProviderUncheckedCreateInput = {
    id?: number
    fullName: string
    phone: string
    password: string
    address: string
    providerType: string
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    avgPrice?: number | null
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type ServiceProviderUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProviderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProviderCreateManyInput = {
    id?: number
    fullName: string
    phone: string
    password: string
    address: string
    providerType: string
    exhibitionType?: string | null
    specialization?: string | null
    jobTitle?: string | null
    avgPrice?: number | null
    isVerified?: boolean
    createdAt?: Date | string
  }

  export type ServiceProviderUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceProviderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    exhibitionType?: NullableStringFieldUpdateOperationsInput | string | null
    specialization?: NullableStringFieldUpdateOperationsInput | string | null
    jobTitle?: NullableStringFieldUpdateOperationsInput | string | null
    avgPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CLINTECountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type CLINTEAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CLINTEMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type CLINTEMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    otp?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type CLINTESumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ServiceProviderCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    providerType?: SortOrder
    exhibitionType?: SortOrder
    specialization?: SortOrder
    jobTitle?: SortOrder
    avgPrice?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceProviderAvgOrderByAggregateInput = {
    id?: SortOrder
    avgPrice?: SortOrder
  }

  export type ServiceProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    providerType?: SortOrder
    exhibitionType?: SortOrder
    specialization?: SortOrder
    jobTitle?: SortOrder
    avgPrice?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceProviderMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    address?: SortOrder
    providerType?: SortOrder
    exhibitionType?: SortOrder
    specialization?: SortOrder
    jobTitle?: SortOrder
    avgPrice?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
  }

  export type ServiceProviderSumOrderByAggregateInput = {
    id?: SortOrder
    avgPrice?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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