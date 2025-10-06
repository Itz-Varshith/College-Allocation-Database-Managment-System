
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model College
 * 
 */
export type College = $Result.DefaultSelection<Prisma.$CollegePayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Program
 * 
 */
export type Program = $Result.DefaultSelection<Prisma.$ProgramPayload>
/**
 * Model Seat_Matrix
 * 
 */
export type Seat_Matrix = $Result.DefaultSelection<Prisma.$Seat_MatrixPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Preferences
 * 
 */
export type Preferences = $Result.DefaultSelection<Prisma.$PreferencesPayload>
/**
 * Model Round
 * 
 */
export type Round = $Result.DefaultSelection<Prisma.$RoundPayload>
/**
 * Model Allocation_Status
 * 
 */
export type Allocation_Status = $Result.DefaultSelection<Prisma.$Allocation_StatusPayload>
/**
 * Model CutOff_ranks
 * 
 */
export type CutOff_ranks = $Result.DefaultSelection<Prisma.$CutOff_ranksPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const gender: {
  male: 'male',
  female: 'female'
};

export type gender = (typeof gender)[keyof typeof gender]


export const status: {
  float: 'float',
  freeze: 'freeze',
  withdrawn: 'withdrawn'
};

export type status = (typeof status)[keyof typeof status]


export const rankType: {
  general: 'general',
  category: 'category'
};

export type rankType = (typeof rankType)[keyof typeof rankType]

}

export type gender = $Enums.gender

export const gender: typeof $Enums.gender

export type status = $Enums.status

export const status: typeof $Enums.status

export type rankType = $Enums.rankType

export const rankType: typeof $Enums.rankType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
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
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.college`: Exposes CRUD operations for the **College** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colleges
    * const colleges = await prisma.college.findMany()
    * ```
    */
  get college(): Prisma.CollegeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.program`: Exposes CRUD operations for the **Program** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Programs
    * const programs = await prisma.program.findMany()
    * ```
    */
  get program(): Prisma.ProgramDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat_Matrix`: Exposes CRUD operations for the **Seat_Matrix** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seat_Matrices
    * const seat_Matrices = await prisma.seat_Matrix.findMany()
    * ```
    */
  get seat_Matrix(): Prisma.Seat_MatrixDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preferences`: Exposes CRUD operations for the **Preferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preferences
    * const preferences = await prisma.preferences.findMany()
    * ```
    */
  get preferences(): Prisma.PreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.allocation_Status`: Exposes CRUD operations for the **Allocation_Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Allocation_Statuses
    * const allocation_Statuses = await prisma.allocation_Status.findMany()
    * ```
    */
  get allocation_Status(): Prisma.Allocation_StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cutOff_ranks`: Exposes CRUD operations for the **CutOff_ranks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CutOff_ranks
    * const cutOff_ranks = await prisma.cutOff_ranks.findMany()
    * ```
    */
  get cutOff_ranks(): Prisma.CutOff_ranksDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    Category: 'Category',
    College: 'College',
    Department: 'Department',
    Program: 'Program',
    Seat_Matrix: 'Seat_Matrix',
    Admin: 'Admin',
    Student: 'Student',
    Preferences: 'Preferences',
    Round: 'Round',
    Allocation_Status: 'Allocation_Status',
    CutOff_ranks: 'CutOff_ranks'
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
      modelProps: "category" | "college" | "department" | "program" | "seat_Matrix" | "admin" | "student" | "preferences" | "round" | "allocation_Status" | "cutOff_ranks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      College: {
        payload: Prisma.$CollegePayload<ExtArgs>
        fields: Prisma.CollegeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollegeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollegeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findFirst: {
            args: Prisma.CollegeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollegeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          findMany: {
            args: Prisma.CollegeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          create: {
            args: Prisma.CollegeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          createMany: {
            args: Prisma.CollegeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollegeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          delete: {
            args: Prisma.CollegeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          update: {
            args: Prisma.CollegeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          deleteMany: {
            args: Prisma.CollegeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollegeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollegeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>[]
          }
          upsert: {
            args: Prisma.CollegeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollegePayload>
          }
          aggregate: {
            args: Prisma.CollegeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollege>
          }
          groupBy: {
            args: Prisma.CollegeGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollegeGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollegeCountArgs<ExtArgs>
            result: $Utils.Optional<CollegeCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Program: {
        payload: Prisma.$ProgramPayload<ExtArgs>
        fields: Prisma.ProgramFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProgramFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProgramFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findFirst: {
            args: Prisma.ProgramFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProgramFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          findMany: {
            args: Prisma.ProgramFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          create: {
            args: Prisma.ProgramCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          createMany: {
            args: Prisma.ProgramCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProgramCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          delete: {
            args: Prisma.ProgramDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          update: {
            args: Prisma.ProgramUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          deleteMany: {
            args: Prisma.ProgramDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProgramUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProgramUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>[]
          }
          upsert: {
            args: Prisma.ProgramUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProgramPayload>
          }
          aggregate: {
            args: Prisma.ProgramAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProgram>
          }
          groupBy: {
            args: Prisma.ProgramGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProgramGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProgramCountArgs<ExtArgs>
            result: $Utils.Optional<ProgramCountAggregateOutputType> | number
          }
        }
      }
      Seat_Matrix: {
        payload: Prisma.$Seat_MatrixPayload<ExtArgs>
        fields: Prisma.Seat_MatrixFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Seat_MatrixFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Seat_MatrixFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload>
          }
          findFirst: {
            args: Prisma.Seat_MatrixFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Seat_MatrixFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload>
          }
          findMany: {
            args: Prisma.Seat_MatrixFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload>[]
          }
          create: {
            args: Prisma.Seat_MatrixCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload>
          }
          createMany: {
            args: Prisma.Seat_MatrixCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Seat_MatrixCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload>[]
          }
          delete: {
            args: Prisma.Seat_MatrixDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload>
          }
          update: {
            args: Prisma.Seat_MatrixUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload>
          }
          deleteMany: {
            args: Prisma.Seat_MatrixDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Seat_MatrixUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Seat_MatrixUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload>[]
          }
          upsert: {
            args: Prisma.Seat_MatrixUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Seat_MatrixPayload>
          }
          aggregate: {
            args: Prisma.Seat_MatrixAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat_Matrix>
          }
          groupBy: {
            args: Prisma.Seat_MatrixGroupByArgs<ExtArgs>
            result: $Utils.Optional<Seat_MatrixGroupByOutputType>[]
          }
          count: {
            args: Prisma.Seat_MatrixCountArgs<ExtArgs>
            result: $Utils.Optional<Seat_MatrixCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Preferences: {
        payload: Prisma.$PreferencesPayload<ExtArgs>
        fields: Prisma.PreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findFirst: {
            args: Prisma.PreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          findMany: {
            args: Prisma.PreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          create: {
            args: Prisma.PreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          createMany: {
            args: Prisma.PreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          delete: {
            args: Prisma.PreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          update: {
            args: Prisma.PreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          deleteMany: {
            args: Prisma.PreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>[]
          }
          upsert: {
            args: Prisma.PreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreferencesPayload>
          }
          aggregate: {
            args: Prisma.PreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreferences>
          }
          groupBy: {
            args: Prisma.PreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<PreferencesCountAggregateOutputType> | number
          }
        }
      }
      Round: {
        payload: Prisma.$RoundPayload<ExtArgs>
        fields: Prisma.RoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findFirst: {
            args: Prisma.RoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findMany: {
            args: Prisma.RoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          create: {
            args: Prisma.RoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          createMany: {
            args: Prisma.RoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          delete: {
            args: Prisma.RoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          update: {
            args: Prisma.RoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          deleteMany: {
            args: Prisma.RoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          upsert: {
            args: Prisma.RoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          aggregate: {
            args: Prisma.RoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRound>
          }
          groupBy: {
            args: Prisma.RoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoundCountArgs<ExtArgs>
            result: $Utils.Optional<RoundCountAggregateOutputType> | number
          }
        }
      }
      Allocation_Status: {
        payload: Prisma.$Allocation_StatusPayload<ExtArgs>
        fields: Prisma.Allocation_StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Allocation_StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Allocation_StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload>
          }
          findFirst: {
            args: Prisma.Allocation_StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Allocation_StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload>
          }
          findMany: {
            args: Prisma.Allocation_StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload>[]
          }
          create: {
            args: Prisma.Allocation_StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload>
          }
          createMany: {
            args: Prisma.Allocation_StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Allocation_StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload>[]
          }
          delete: {
            args: Prisma.Allocation_StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload>
          }
          update: {
            args: Prisma.Allocation_StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload>
          }
          deleteMany: {
            args: Prisma.Allocation_StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Allocation_StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Allocation_StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload>[]
          }
          upsert: {
            args: Prisma.Allocation_StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Allocation_StatusPayload>
          }
          aggregate: {
            args: Prisma.Allocation_StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAllocation_Status>
          }
          groupBy: {
            args: Prisma.Allocation_StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<Allocation_StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.Allocation_StatusCountArgs<ExtArgs>
            result: $Utils.Optional<Allocation_StatusCountAggregateOutputType> | number
          }
        }
      }
      CutOff_ranks: {
        payload: Prisma.$CutOff_ranksPayload<ExtArgs>
        fields: Prisma.CutOff_ranksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CutOff_ranksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CutOff_ranksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload>
          }
          findFirst: {
            args: Prisma.CutOff_ranksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CutOff_ranksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload>
          }
          findMany: {
            args: Prisma.CutOff_ranksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload>[]
          }
          create: {
            args: Prisma.CutOff_ranksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload>
          }
          createMany: {
            args: Prisma.CutOff_ranksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CutOff_ranksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload>[]
          }
          delete: {
            args: Prisma.CutOff_ranksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload>
          }
          update: {
            args: Prisma.CutOff_ranksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload>
          }
          deleteMany: {
            args: Prisma.CutOff_ranksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CutOff_ranksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CutOff_ranksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload>[]
          }
          upsert: {
            args: Prisma.CutOff_ranksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CutOff_ranksPayload>
          }
          aggregate: {
            args: Prisma.CutOff_ranksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCutOff_ranks>
          }
          groupBy: {
            args: Prisma.CutOff_ranksGroupByArgs<ExtArgs>
            result: $Utils.Optional<CutOff_ranksGroupByOutputType>[]
          }
          count: {
            args: Prisma.CutOff_ranksCountArgs<ExtArgs>
            result: $Utils.Optional<CutOff_ranksCountAggregateOutputType> | number
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
    category?: CategoryOmit
    college?: CollegeOmit
    department?: DepartmentOmit
    program?: ProgramOmit
    seat_Matrix?: Seat_MatrixOmit
    admin?: AdminOmit
    student?: StudentOmit
    preferences?: PreferencesOmit
    round?: RoundOmit
    allocation_Status?: Allocation_StatusOmit
    cutOff_ranks?: CutOff_ranksOmit
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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    Seat_Matrix: number
    Student: number
    Allocation_Status: number
    CutOff_ranks: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Seat_Matrix?: boolean | CategoryCountOutputTypeCountSeat_MatrixArgs
    Student?: boolean | CategoryCountOutputTypeCountStudentArgs
    Allocation_Status?: boolean | CategoryCountOutputTypeCountAllocation_StatusArgs
    CutOff_ranks?: boolean | CategoryCountOutputTypeCountCutOff_ranksArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountSeat_MatrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Seat_MatrixWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAllocation_StatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Allocation_StatusWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCutOff_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CutOff_ranksWhereInput
  }


  /**
   * Count Type CollegeCountOutputType
   */

  export type CollegeCountOutputType = {
    Program: number
  }

  export type CollegeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Program?: boolean | CollegeCountOutputTypeCountProgramArgs
  }

  // Custom InputTypes
  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CollegeCountOutputType
     */
    select?: CollegeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CollegeCountOutputType without action
   */
  export type CollegeCountOutputTypeCountProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    Program: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Program?: boolean | DepartmentCountOutputTypeCountProgramArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
  }


  /**
   * Count Type ProgramCountOutputType
   */

  export type ProgramCountOutputType = {
    Seat_Matrix: number
    Preferences: number
    Allocation_Status: number
    CutOff_ranks: number
  }

  export type ProgramCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Seat_Matrix?: boolean | ProgramCountOutputTypeCountSeat_MatrixArgs
    Preferences?: boolean | ProgramCountOutputTypeCountPreferencesArgs
    Allocation_Status?: boolean | ProgramCountOutputTypeCountAllocation_StatusArgs
    CutOff_ranks?: boolean | ProgramCountOutputTypeCountCutOff_ranksArgs
  }

  // Custom InputTypes
  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProgramCountOutputType
     */
    select?: ProgramCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountSeat_MatrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Seat_MatrixWhereInput
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferencesWhereInput
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountAllocation_StatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Allocation_StatusWhereInput
  }

  /**
   * ProgramCountOutputType without action
   */
  export type ProgramCountOutputTypeCountCutOff_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CutOff_ranksWhereInput
  }


  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    Preferences: number
    Allocation_Status: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Preferences?: boolean | StudentCountOutputTypeCountPreferencesArgs
    Allocation_Status?: boolean | StudentCountOutputTypeCountAllocation_StatusArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferencesWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountAllocation_StatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Allocation_StatusWhereInput
  }


  /**
   * Count Type RoundCountOutputType
   */

  export type RoundCountOutputType = {
    Allocation_Status: number
    CutOff_ranks: number
  }

  export type RoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Allocation_Status?: boolean | RoundCountOutputTypeCountAllocation_StatusArgs
    CutOff_ranks?: boolean | RoundCountOutputTypeCountCutOff_ranksArgs
  }

  // Custom InputTypes
  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundCountOutputType
     */
    select?: RoundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountAllocation_StatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Allocation_StatusWhereInput
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountCutOff_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CutOff_ranksWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategorySumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    category_id: number | null
    category_name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    category_id: number | null
    category_name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    category_id: number
    category_name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    category_id?: true
  }

  export type CategorySumAggregateInputType = {
    category_id?: true
  }

  export type CategoryMinAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type CategoryMaxAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type CategoryCountAggregateInputType = {
    category_id?: true
    category_name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    category_id: number
    category_name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    Seat_Matrix?: boolean | Category$Seat_MatrixArgs<ExtArgs>
    Student?: boolean | Category$StudentArgs<ExtArgs>
    Allocation_Status?: boolean | Category$Allocation_StatusArgs<ExtArgs>
    CutOff_ranks?: boolean | Category$CutOff_ranksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    category_id?: boolean
    category_name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Seat_Matrix?: boolean | Category$Seat_MatrixArgs<ExtArgs>
    Student?: boolean | Category$StudentArgs<ExtArgs>
    Allocation_Status?: boolean | Category$Allocation_StatusArgs<ExtArgs>
    CutOff_ranks?: boolean | Category$CutOff_ranksArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      Seat_Matrix: Prisma.$Seat_MatrixPayload<ExtArgs>[]
      Student: Prisma.$StudentPayload<ExtArgs>[]
      Allocation_Status: Prisma.$Allocation_StatusPayload<ExtArgs>[]
      CutOff_ranks: Prisma.$CutOff_ranksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      category_name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoryWithCategory_idOnly = await prisma.category.updateManyAndReturn({
     *   select: { category_id: true },
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Seat_Matrix<T extends Category$Seat_MatrixArgs<ExtArgs> = {}>(args?: Subset<T, Category$Seat_MatrixArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Student<T extends Category$StudentArgs<ExtArgs> = {}>(args?: Subset<T, Category$StudentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Allocation_Status<T extends Category$Allocation_StatusArgs<ExtArgs> = {}>(args?: Subset<T, Category$Allocation_StatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CutOff_ranks<T extends Category$CutOff_ranksArgs<ExtArgs> = {}>(args?: Subset<T, Category$CutOff_ranksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly category_id: FieldRef<"Category", 'Int'>
    readonly category_name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.Seat_Matrix
   */
  export type Category$Seat_MatrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    where?: Seat_MatrixWhereInput
    orderBy?: Seat_MatrixOrderByWithRelationInput | Seat_MatrixOrderByWithRelationInput[]
    cursor?: Seat_MatrixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Seat_MatrixScalarFieldEnum | Seat_MatrixScalarFieldEnum[]
  }

  /**
   * Category.Student
   */
  export type Category$StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Category.Allocation_Status
   */
  export type Category$Allocation_StatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    where?: Allocation_StatusWhereInput
    orderBy?: Allocation_StatusOrderByWithRelationInput | Allocation_StatusOrderByWithRelationInput[]
    cursor?: Allocation_StatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Allocation_StatusScalarFieldEnum | Allocation_StatusScalarFieldEnum[]
  }

  /**
   * Category.CutOff_ranks
   */
  export type Category$CutOff_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    where?: CutOff_ranksWhereInput
    orderBy?: CutOff_ranksOrderByWithRelationInput | CutOff_ranksOrderByWithRelationInput[]
    cursor?: CutOff_ranksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CutOff_ranksScalarFieldEnum | CutOff_ranksScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model College
   */

  export type AggregateCollege = {
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  export type CollegeAvgAggregateOutputType = {
    college_id: number | null
  }

  export type CollegeSumAggregateOutputType = {
    college_id: number | null
  }

  export type CollegeMinAggregateOutputType = {
    college_id: number | null
    college_name: string | null
    city: string | null
    state: string | null
    pincode: string | null
  }

  export type CollegeMaxAggregateOutputType = {
    college_id: number | null
    college_name: string | null
    city: string | null
    state: string | null
    pincode: string | null
  }

  export type CollegeCountAggregateOutputType = {
    college_id: number
    college_name: number
    city: number
    state: number
    pincode: number
    _all: number
  }


  export type CollegeAvgAggregateInputType = {
    college_id?: true
  }

  export type CollegeSumAggregateInputType = {
    college_id?: true
  }

  export type CollegeMinAggregateInputType = {
    college_id?: true
    college_name?: true
    city?: true
    state?: true
    pincode?: true
  }

  export type CollegeMaxAggregateInputType = {
    college_id?: true
    college_name?: true
    city?: true
    state?: true
    pincode?: true
  }

  export type CollegeCountAggregateInputType = {
    college_id?: true
    college_name?: true
    city?: true
    state?: true
    pincode?: true
    _all?: true
  }

  export type CollegeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which College to aggregate.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colleges
    **/
    _count?: true | CollegeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CollegeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CollegeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollegeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollegeMaxAggregateInputType
  }

  export type GetCollegeAggregateType<T extends CollegeAggregateArgs> = {
        [P in keyof T & keyof AggregateCollege]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollege[P]>
      : GetScalarType<T[P], AggregateCollege[P]>
  }




  export type CollegeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollegeWhereInput
    orderBy?: CollegeOrderByWithAggregationInput | CollegeOrderByWithAggregationInput[]
    by: CollegeScalarFieldEnum[] | CollegeScalarFieldEnum
    having?: CollegeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollegeCountAggregateInputType | true
    _avg?: CollegeAvgAggregateInputType
    _sum?: CollegeSumAggregateInputType
    _min?: CollegeMinAggregateInputType
    _max?: CollegeMaxAggregateInputType
  }

  export type CollegeGroupByOutputType = {
    college_id: number
    college_name: string
    city: string
    state: string
    pincode: string
    _count: CollegeCountAggregateOutputType | null
    _avg: CollegeAvgAggregateOutputType | null
    _sum: CollegeSumAggregateOutputType | null
    _min: CollegeMinAggregateOutputType | null
    _max: CollegeMaxAggregateOutputType | null
  }

  type GetCollegeGroupByPayload<T extends CollegeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollegeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollegeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollegeGroupByOutputType[P]>
            : GetScalarType<T[P], CollegeGroupByOutputType[P]>
        }
      >
    >


  export type CollegeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    college_id?: boolean
    college_name?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    Program?: boolean | College$ProgramArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    college_id?: boolean
    college_name?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    college_id?: boolean
    college_name?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
  }, ExtArgs["result"]["college"]>

  export type CollegeSelectScalar = {
    college_id?: boolean
    college_name?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
  }

  export type CollegeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"college_id" | "college_name" | "city" | "state" | "pincode", ExtArgs["result"]["college"]>
  export type CollegeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Program?: boolean | College$ProgramArgs<ExtArgs>
    _count?: boolean | CollegeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CollegeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CollegeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CollegePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "College"
    objects: {
      Program: Prisma.$ProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      college_id: number
      college_name: string
      city: string
      state: string
      pincode: string
    }, ExtArgs["result"]["college"]>
    composites: {}
  }

  type CollegeGetPayload<S extends boolean | null | undefined | CollegeDefaultArgs> = $Result.GetResult<Prisma.$CollegePayload, S>

  type CollegeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollegeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollegeCountAggregateInputType | true
    }

  export interface CollegeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['College'], meta: { name: 'College' } }
    /**
     * Find zero or one College that matches the filter.
     * @param {CollegeFindUniqueArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollegeFindUniqueArgs>(args: SelectSubset<T, CollegeFindUniqueArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one College that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollegeFindUniqueOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollegeFindUniqueOrThrowArgs>(args: SelectSubset<T, CollegeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollegeFindFirstArgs>(args?: SelectSubset<T, CollegeFindFirstArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first College that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindFirstOrThrowArgs} args - Arguments to find a College
     * @example
     * // Get one College
     * const college = await prisma.college.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollegeFindFirstOrThrowArgs>(args?: SelectSubset<T, CollegeFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colleges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colleges
     * const colleges = await prisma.college.findMany()
     * 
     * // Get first 10 Colleges
     * const colleges = await prisma.college.findMany({ take: 10 })
     * 
     * // Only select the `college_id`
     * const collegeWithCollege_idOnly = await prisma.college.findMany({ select: { college_id: true } })
     * 
     */
    findMany<T extends CollegeFindManyArgs>(args?: SelectSubset<T, CollegeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a College.
     * @param {CollegeCreateArgs} args - Arguments to create a College.
     * @example
     * // Create one College
     * const College = await prisma.college.create({
     *   data: {
     *     // ... data to create a College
     *   }
     * })
     * 
     */
    create<T extends CollegeCreateArgs>(args: SelectSubset<T, CollegeCreateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colleges.
     * @param {CollegeCreateManyArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollegeCreateManyArgs>(args?: SelectSubset<T, CollegeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colleges and returns the data saved in the database.
     * @param {CollegeCreateManyAndReturnArgs} args - Arguments to create many Colleges.
     * @example
     * // Create many Colleges
     * const college = await prisma.college.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colleges and only return the `college_id`
     * const collegeWithCollege_idOnly = await prisma.college.createManyAndReturn({
     *   select: { college_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollegeCreateManyAndReturnArgs>(args?: SelectSubset<T, CollegeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a College.
     * @param {CollegeDeleteArgs} args - Arguments to delete one College.
     * @example
     * // Delete one College
     * const College = await prisma.college.delete({
     *   where: {
     *     // ... filter to delete one College
     *   }
     * })
     * 
     */
    delete<T extends CollegeDeleteArgs>(args: SelectSubset<T, CollegeDeleteArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one College.
     * @param {CollegeUpdateArgs} args - Arguments to update one College.
     * @example
     * // Update one College
     * const college = await prisma.college.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollegeUpdateArgs>(args: SelectSubset<T, CollegeUpdateArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colleges.
     * @param {CollegeDeleteManyArgs} args - Arguments to filter Colleges to delete.
     * @example
     * // Delete a few Colleges
     * const { count } = await prisma.college.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollegeDeleteManyArgs>(args?: SelectSubset<T, CollegeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollegeUpdateManyArgs>(args: SelectSubset<T, CollegeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colleges and returns the data updated in the database.
     * @param {CollegeUpdateManyAndReturnArgs} args - Arguments to update many Colleges.
     * @example
     * // Update many Colleges
     * const college = await prisma.college.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colleges and only return the `college_id`
     * const collegeWithCollege_idOnly = await prisma.college.updateManyAndReturn({
     *   select: { college_id: true },
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
    updateManyAndReturn<T extends CollegeUpdateManyAndReturnArgs>(args: SelectSubset<T, CollegeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one College.
     * @param {CollegeUpsertArgs} args - Arguments to update or create a College.
     * @example
     * // Update or create a College
     * const college = await prisma.college.upsert({
     *   create: {
     *     // ... data to create a College
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the College we want to update
     *   }
     * })
     */
    upsert<T extends CollegeUpsertArgs>(args: SelectSubset<T, CollegeUpsertArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colleges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeCountArgs} args - Arguments to filter Colleges to count.
     * @example
     * // Count the number of Colleges
     * const count = await prisma.college.count({
     *   where: {
     *     // ... the filter for the Colleges we want to count
     *   }
     * })
    **/
    count<T extends CollegeCountArgs>(
      args?: Subset<T, CollegeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollegeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CollegeAggregateArgs>(args: Subset<T, CollegeAggregateArgs>): Prisma.PrismaPromise<GetCollegeAggregateType<T>>

    /**
     * Group by College.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollegeGroupByArgs} args - Group by arguments.
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
      T extends CollegeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollegeGroupByArgs['orderBy'] }
        : { orderBy?: CollegeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CollegeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollegeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the College model
   */
  readonly fields: CollegeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for College.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollegeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Program<T extends College$ProgramArgs<ExtArgs> = {}>(args?: Subset<T, College$ProgramArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the College model
   */
  interface CollegeFieldRefs {
    readonly college_id: FieldRef<"College", 'Int'>
    readonly college_name: FieldRef<"College", 'String'>
    readonly city: FieldRef<"College", 'String'>
    readonly state: FieldRef<"College", 'String'>
    readonly pincode: FieldRef<"College", 'String'>
  }
    

  // Custom InputTypes
  /**
   * College findUnique
   */
  export type CollegeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findUniqueOrThrow
   */
  export type CollegeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College findFirst
   */
  export type CollegeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findFirstOrThrow
   */
  export type CollegeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which College to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colleges.
     */
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College findMany
   */
  export type CollegeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter, which Colleges to fetch.
     */
    where?: CollegeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colleges to fetch.
     */
    orderBy?: CollegeOrderByWithRelationInput | CollegeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colleges.
     */
    cursor?: CollegeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colleges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colleges.
     */
    skip?: number
    distinct?: CollegeScalarFieldEnum | CollegeScalarFieldEnum[]
  }

  /**
   * College create
   */
  export type CollegeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to create a College.
     */
    data: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
  }

  /**
   * College createMany
   */
  export type CollegeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College createManyAndReturn
   */
  export type CollegeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to create many Colleges.
     */
    data: CollegeCreateManyInput | CollegeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * College update
   */
  export type CollegeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The data needed to update a College.
     */
    data: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
    /**
     * Choose, which College to update.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College updateMany
   */
  export type CollegeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College updateManyAndReturn
   */
  export type CollegeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * The data used to update Colleges.
     */
    data: XOR<CollegeUpdateManyMutationInput, CollegeUncheckedUpdateManyInput>
    /**
     * Filter which Colleges to update
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to update.
     */
    limit?: number
  }

  /**
   * College upsert
   */
  export type CollegeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * The filter to search for the College to update in case it exists.
     */
    where: CollegeWhereUniqueInput
    /**
     * In case the College found by the `where` argument doesn't exist, create a new College with this data.
     */
    create: XOR<CollegeCreateInput, CollegeUncheckedCreateInput>
    /**
     * In case the College was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollegeUpdateInput, CollegeUncheckedUpdateInput>
  }

  /**
   * College delete
   */
  export type CollegeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
    /**
     * Filter which College to delete.
     */
    where: CollegeWhereUniqueInput
  }

  /**
   * College deleteMany
   */
  export type CollegeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colleges to delete
     */
    where?: CollegeWhereInput
    /**
     * Limit how many Colleges to delete.
     */
    limit?: number
  }

  /**
   * College.Program
   */
  export type College$ProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * College without action
   */
  export type CollegeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the College
     */
    select?: CollegeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the College
     */
    omit?: CollegeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollegeInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentAvgAggregateOutputType = {
    department_id: number | null
  }

  export type DepartmentSumAggregateOutputType = {
    department_id: number | null
  }

  export type DepartmentMinAggregateOutputType = {
    department_id: number | null
    department_name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    department_id: number | null
    department_name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    department_id: number
    department_name: number
    _all: number
  }


  export type DepartmentAvgAggregateInputType = {
    department_id?: true
  }

  export type DepartmentSumAggregateInputType = {
    department_id?: true
  }

  export type DepartmentMinAggregateInputType = {
    department_id?: true
    department_name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    department_id?: true
    department_name?: true
  }

  export type DepartmentCountAggregateInputType = {
    department_id?: true
    department_name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _avg?: DepartmentAvgAggregateInputType
    _sum?: DepartmentSumAggregateInputType
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    department_id: number
    department_name: string
    _count: DepartmentCountAggregateOutputType | null
    _avg: DepartmentAvgAggregateOutputType | null
    _sum: DepartmentSumAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    department_id?: boolean
    department_name?: boolean
    Program?: boolean | Department$ProgramArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    department_id?: boolean
    department_name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    department_id?: boolean
    department_name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    department_id?: boolean
    department_name?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"department_id" | "department_name", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Program?: boolean | Department$ProgramArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      Program: Prisma.$ProgramPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      department_id: number
      department_name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `department_id`
     * const departmentWithDepartment_idOnly = await prisma.department.findMany({ select: { department_id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `department_id`
     * const departmentWithDepartment_idOnly = await prisma.department.createManyAndReturn({
     *   select: { department_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `department_id`
     * const departmentWithDepartment_idOnly = await prisma.department.updateManyAndReturn({
     *   select: { department_id: true },
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Program<T extends Department$ProgramArgs<ExtArgs> = {}>(args?: Subset<T, Department$ProgramArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly department_id: FieldRef<"Department", 'Int'>
    readonly department_name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.Program
   */
  export type Department$ProgramArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    cursor?: ProgramWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Program
   */

  export type AggregateProgram = {
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  export type ProgramAvgAggregateOutputType = {
    program_id: number | null
    department_id: number | null
    college_id: number | null
  }

  export type ProgramSumAggregateOutputType = {
    program_id: number | null
    department_id: number | null
    college_id: number | null
  }

  export type ProgramMinAggregateOutputType = {
    program_id: number | null
    department_id: number | null
    college_id: number | null
    duration: string | null
  }

  export type ProgramMaxAggregateOutputType = {
    program_id: number | null
    department_id: number | null
    college_id: number | null
    duration: string | null
  }

  export type ProgramCountAggregateOutputType = {
    program_id: number
    department_id: number
    college_id: number
    duration: number
    _all: number
  }


  export type ProgramAvgAggregateInputType = {
    program_id?: true
    department_id?: true
    college_id?: true
  }

  export type ProgramSumAggregateInputType = {
    program_id?: true
    department_id?: true
    college_id?: true
  }

  export type ProgramMinAggregateInputType = {
    program_id?: true
    department_id?: true
    college_id?: true
    duration?: true
  }

  export type ProgramMaxAggregateInputType = {
    program_id?: true
    department_id?: true
    college_id?: true
    duration?: true
  }

  export type ProgramCountAggregateInputType = {
    program_id?: true
    department_id?: true
    college_id?: true
    duration?: true
    _all?: true
  }

  export type ProgramAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Program to aggregate.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Programs
    **/
    _count?: true | ProgramCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProgramAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProgramSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProgramMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProgramMaxAggregateInputType
  }

  export type GetProgramAggregateType<T extends ProgramAggregateArgs> = {
        [P in keyof T & keyof AggregateProgram]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProgram[P]>
      : GetScalarType<T[P], AggregateProgram[P]>
  }




  export type ProgramGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProgramWhereInput
    orderBy?: ProgramOrderByWithAggregationInput | ProgramOrderByWithAggregationInput[]
    by: ProgramScalarFieldEnum[] | ProgramScalarFieldEnum
    having?: ProgramScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProgramCountAggregateInputType | true
    _avg?: ProgramAvgAggregateInputType
    _sum?: ProgramSumAggregateInputType
    _min?: ProgramMinAggregateInputType
    _max?: ProgramMaxAggregateInputType
  }

  export type ProgramGroupByOutputType = {
    program_id: number
    department_id: number
    college_id: number
    duration: string
    _count: ProgramCountAggregateOutputType | null
    _avg: ProgramAvgAggregateOutputType | null
    _sum: ProgramSumAggregateOutputType | null
    _min: ProgramMinAggregateOutputType | null
    _max: ProgramMaxAggregateOutputType | null
  }

  type GetProgramGroupByPayload<T extends ProgramGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProgramGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProgramGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProgramGroupByOutputType[P]>
            : GetScalarType<T[P], ProgramGroupByOutputType[P]>
        }
      >
    >


  export type ProgramSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    program_id?: boolean
    department_id?: boolean
    college_id?: boolean
    duration?: boolean
    deptID?: boolean | DepartmentDefaultArgs<ExtArgs>
    collegeID?: boolean | CollegeDefaultArgs<ExtArgs>
    Seat_Matrix?: boolean | Program$Seat_MatrixArgs<ExtArgs>
    Preferences?: boolean | Program$PreferencesArgs<ExtArgs>
    Allocation_Status?: boolean | Program$Allocation_StatusArgs<ExtArgs>
    CutOff_ranks?: boolean | Program$CutOff_ranksArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    program_id?: boolean
    department_id?: boolean
    college_id?: boolean
    duration?: boolean
    deptID?: boolean | DepartmentDefaultArgs<ExtArgs>
    collegeID?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    program_id?: boolean
    department_id?: boolean
    college_id?: boolean
    duration?: boolean
    deptID?: boolean | DepartmentDefaultArgs<ExtArgs>
    collegeID?: boolean | CollegeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["program"]>

  export type ProgramSelectScalar = {
    program_id?: boolean
    department_id?: boolean
    college_id?: boolean
    duration?: boolean
  }

  export type ProgramOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"program_id" | "department_id" | "college_id" | "duration", ExtArgs["result"]["program"]>
  export type ProgramInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deptID?: boolean | DepartmentDefaultArgs<ExtArgs>
    collegeID?: boolean | CollegeDefaultArgs<ExtArgs>
    Seat_Matrix?: boolean | Program$Seat_MatrixArgs<ExtArgs>
    Preferences?: boolean | Program$PreferencesArgs<ExtArgs>
    Allocation_Status?: boolean | Program$Allocation_StatusArgs<ExtArgs>
    CutOff_ranks?: boolean | Program$CutOff_ranksArgs<ExtArgs>
    _count?: boolean | ProgramCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deptID?: boolean | DepartmentDefaultArgs<ExtArgs>
    collegeID?: boolean | CollegeDefaultArgs<ExtArgs>
  }
  export type ProgramIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    deptID?: boolean | DepartmentDefaultArgs<ExtArgs>
    collegeID?: boolean | CollegeDefaultArgs<ExtArgs>
  }

  export type $ProgramPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Program"
    objects: {
      deptID: Prisma.$DepartmentPayload<ExtArgs>
      collegeID: Prisma.$CollegePayload<ExtArgs>
      Seat_Matrix: Prisma.$Seat_MatrixPayload<ExtArgs>[]
      Preferences: Prisma.$PreferencesPayload<ExtArgs>[]
      Allocation_Status: Prisma.$Allocation_StatusPayload<ExtArgs>[]
      CutOff_ranks: Prisma.$CutOff_ranksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      program_id: number
      department_id: number
      college_id: number
      duration: string
    }, ExtArgs["result"]["program"]>
    composites: {}
  }

  type ProgramGetPayload<S extends boolean | null | undefined | ProgramDefaultArgs> = $Result.GetResult<Prisma.$ProgramPayload, S>

  type ProgramCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProgramFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProgramCountAggregateInputType | true
    }

  export interface ProgramDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Program'], meta: { name: 'Program' } }
    /**
     * Find zero or one Program that matches the filter.
     * @param {ProgramFindUniqueArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProgramFindUniqueArgs>(args: SelectSubset<T, ProgramFindUniqueArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Program that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProgramFindUniqueOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProgramFindUniqueOrThrowArgs>(args: SelectSubset<T, ProgramFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProgramFindFirstArgs>(args?: SelectSubset<T, ProgramFindFirstArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Program that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindFirstOrThrowArgs} args - Arguments to find a Program
     * @example
     * // Get one Program
     * const program = await prisma.program.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProgramFindFirstOrThrowArgs>(args?: SelectSubset<T, ProgramFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Programs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Programs
     * const programs = await prisma.program.findMany()
     * 
     * // Get first 10 Programs
     * const programs = await prisma.program.findMany({ take: 10 })
     * 
     * // Only select the `program_id`
     * const programWithProgram_idOnly = await prisma.program.findMany({ select: { program_id: true } })
     * 
     */
    findMany<T extends ProgramFindManyArgs>(args?: SelectSubset<T, ProgramFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Program.
     * @param {ProgramCreateArgs} args - Arguments to create a Program.
     * @example
     * // Create one Program
     * const Program = await prisma.program.create({
     *   data: {
     *     // ... data to create a Program
     *   }
     * })
     * 
     */
    create<T extends ProgramCreateArgs>(args: SelectSubset<T, ProgramCreateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Programs.
     * @param {ProgramCreateManyArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProgramCreateManyArgs>(args?: SelectSubset<T, ProgramCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Programs and returns the data saved in the database.
     * @param {ProgramCreateManyAndReturnArgs} args - Arguments to create many Programs.
     * @example
     * // Create many Programs
     * const program = await prisma.program.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Programs and only return the `program_id`
     * const programWithProgram_idOnly = await prisma.program.createManyAndReturn({
     *   select: { program_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProgramCreateManyAndReturnArgs>(args?: SelectSubset<T, ProgramCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Program.
     * @param {ProgramDeleteArgs} args - Arguments to delete one Program.
     * @example
     * // Delete one Program
     * const Program = await prisma.program.delete({
     *   where: {
     *     // ... filter to delete one Program
     *   }
     * })
     * 
     */
    delete<T extends ProgramDeleteArgs>(args: SelectSubset<T, ProgramDeleteArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Program.
     * @param {ProgramUpdateArgs} args - Arguments to update one Program.
     * @example
     * // Update one Program
     * const program = await prisma.program.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProgramUpdateArgs>(args: SelectSubset<T, ProgramUpdateArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Programs.
     * @param {ProgramDeleteManyArgs} args - Arguments to filter Programs to delete.
     * @example
     * // Delete a few Programs
     * const { count } = await prisma.program.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProgramDeleteManyArgs>(args?: SelectSubset<T, ProgramDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProgramUpdateManyArgs>(args: SelectSubset<T, ProgramUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Programs and returns the data updated in the database.
     * @param {ProgramUpdateManyAndReturnArgs} args - Arguments to update many Programs.
     * @example
     * // Update many Programs
     * const program = await prisma.program.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Programs and only return the `program_id`
     * const programWithProgram_idOnly = await prisma.program.updateManyAndReturn({
     *   select: { program_id: true },
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
    updateManyAndReturn<T extends ProgramUpdateManyAndReturnArgs>(args: SelectSubset<T, ProgramUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Program.
     * @param {ProgramUpsertArgs} args - Arguments to update or create a Program.
     * @example
     * // Update or create a Program
     * const program = await prisma.program.upsert({
     *   create: {
     *     // ... data to create a Program
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Program we want to update
     *   }
     * })
     */
    upsert<T extends ProgramUpsertArgs>(args: SelectSubset<T, ProgramUpsertArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Programs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramCountArgs} args - Arguments to filter Programs to count.
     * @example
     * // Count the number of Programs
     * const count = await prisma.program.count({
     *   where: {
     *     // ... the filter for the Programs we want to count
     *   }
     * })
    **/
    count<T extends ProgramCountArgs>(
      args?: Subset<T, ProgramCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProgramCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProgramAggregateArgs>(args: Subset<T, ProgramAggregateArgs>): Prisma.PrismaPromise<GetProgramAggregateType<T>>

    /**
     * Group by Program.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProgramGroupByArgs} args - Group by arguments.
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
      T extends ProgramGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProgramGroupByArgs['orderBy'] }
        : { orderBy?: ProgramGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProgramGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgramGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Program model
   */
  readonly fields: ProgramFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Program.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProgramClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    deptID<T extends DepartmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DepartmentDefaultArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    collegeID<T extends CollegeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CollegeDefaultArgs<ExtArgs>>): Prisma__CollegeClient<$Result.GetResult<Prisma.$CollegePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Seat_Matrix<T extends Program$Seat_MatrixArgs<ExtArgs> = {}>(args?: Subset<T, Program$Seat_MatrixArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Preferences<T extends Program$PreferencesArgs<ExtArgs> = {}>(args?: Subset<T, Program$PreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Allocation_Status<T extends Program$Allocation_StatusArgs<ExtArgs> = {}>(args?: Subset<T, Program$Allocation_StatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CutOff_ranks<T extends Program$CutOff_ranksArgs<ExtArgs> = {}>(args?: Subset<T, Program$CutOff_ranksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Program model
   */
  interface ProgramFieldRefs {
    readonly program_id: FieldRef<"Program", 'Int'>
    readonly department_id: FieldRef<"Program", 'Int'>
    readonly college_id: FieldRef<"Program", 'Int'>
    readonly duration: FieldRef<"Program", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Program findUnique
   */
  export type ProgramFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findUniqueOrThrow
   */
  export type ProgramFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program findFirst
   */
  export type ProgramFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findFirstOrThrow
   */
  export type ProgramFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Program to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Programs.
     */
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program findMany
   */
  export type ProgramFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter, which Programs to fetch.
     */
    where?: ProgramWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Programs to fetch.
     */
    orderBy?: ProgramOrderByWithRelationInput | ProgramOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Programs.
     */
    cursor?: ProgramWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Programs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Programs.
     */
    skip?: number
    distinct?: ProgramScalarFieldEnum | ProgramScalarFieldEnum[]
  }

  /**
   * Program create
   */
  export type ProgramCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to create a Program.
     */
    data: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
  }

  /**
   * Program createMany
   */
  export type ProgramCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Program createManyAndReturn
   */
  export type ProgramCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to create many Programs.
     */
    data: ProgramCreateManyInput | ProgramCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program update
   */
  export type ProgramUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The data needed to update a Program.
     */
    data: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
    /**
     * Choose, which Program to update.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program updateMany
   */
  export type ProgramUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
  }

  /**
   * Program updateManyAndReturn
   */
  export type ProgramUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * The data used to update Programs.
     */
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyInput>
    /**
     * Filter which Programs to update
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Program upsert
   */
  export type ProgramUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * The filter to search for the Program to update in case it exists.
     */
    where: ProgramWhereUniqueInput
    /**
     * In case the Program found by the `where` argument doesn't exist, create a new Program with this data.
     */
    create: XOR<ProgramCreateInput, ProgramUncheckedCreateInput>
    /**
     * In case the Program was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProgramUpdateInput, ProgramUncheckedUpdateInput>
  }

  /**
   * Program delete
   */
  export type ProgramDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
    /**
     * Filter which Program to delete.
     */
    where: ProgramWhereUniqueInput
  }

  /**
   * Program deleteMany
   */
  export type ProgramDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Programs to delete
     */
    where?: ProgramWhereInput
    /**
     * Limit how many Programs to delete.
     */
    limit?: number
  }

  /**
   * Program.Seat_Matrix
   */
  export type Program$Seat_MatrixArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    where?: Seat_MatrixWhereInput
    orderBy?: Seat_MatrixOrderByWithRelationInput | Seat_MatrixOrderByWithRelationInput[]
    cursor?: Seat_MatrixWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Seat_MatrixScalarFieldEnum | Seat_MatrixScalarFieldEnum[]
  }

  /**
   * Program.Preferences
   */
  export type Program$PreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    where?: PreferencesWhereInput
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    cursor?: PreferencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Program.Allocation_Status
   */
  export type Program$Allocation_StatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    where?: Allocation_StatusWhereInput
    orderBy?: Allocation_StatusOrderByWithRelationInput | Allocation_StatusOrderByWithRelationInput[]
    cursor?: Allocation_StatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Allocation_StatusScalarFieldEnum | Allocation_StatusScalarFieldEnum[]
  }

  /**
   * Program.CutOff_ranks
   */
  export type Program$CutOff_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    where?: CutOff_ranksWhereInput
    orderBy?: CutOff_ranksOrderByWithRelationInput | CutOff_ranksOrderByWithRelationInput[]
    cursor?: CutOff_ranksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CutOff_ranksScalarFieldEnum | CutOff_ranksScalarFieldEnum[]
  }

  /**
   * Program without action
   */
  export type ProgramDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Program
     */
    select?: ProgramSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Program
     */
    omit?: ProgramOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProgramInclude<ExtArgs> | null
  }


  /**
   * Model Seat_Matrix
   */

  export type AggregateSeat_Matrix = {
    _count: Seat_MatrixCountAggregateOutputType | null
    _avg: Seat_MatrixAvgAggregateOutputType | null
    _sum: Seat_MatrixSumAggregateOutputType | null
    _min: Seat_MatrixMinAggregateOutputType | null
    _max: Seat_MatrixMaxAggregateOutputType | null
  }

  export type Seat_MatrixAvgAggregateOutputType = {
    program_id: number | null
    category_id: number | null
    total_seats: number | null
  }

  export type Seat_MatrixSumAggregateOutputType = {
    program_id: number | null
    category_id: number | null
    total_seats: number | null
  }

  export type Seat_MatrixMinAggregateOutputType = {
    program_id: number | null
    category_id: number | null
    total_seats: number | null
  }

  export type Seat_MatrixMaxAggregateOutputType = {
    program_id: number | null
    category_id: number | null
    total_seats: number | null
  }

  export type Seat_MatrixCountAggregateOutputType = {
    program_id: number
    category_id: number
    total_seats: number
    _all: number
  }


  export type Seat_MatrixAvgAggregateInputType = {
    program_id?: true
    category_id?: true
    total_seats?: true
  }

  export type Seat_MatrixSumAggregateInputType = {
    program_id?: true
    category_id?: true
    total_seats?: true
  }

  export type Seat_MatrixMinAggregateInputType = {
    program_id?: true
    category_id?: true
    total_seats?: true
  }

  export type Seat_MatrixMaxAggregateInputType = {
    program_id?: true
    category_id?: true
    total_seats?: true
  }

  export type Seat_MatrixCountAggregateInputType = {
    program_id?: true
    category_id?: true
    total_seats?: true
    _all?: true
  }

  export type Seat_MatrixAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat_Matrix to aggregate.
     */
    where?: Seat_MatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seat_Matrices to fetch.
     */
    orderBy?: Seat_MatrixOrderByWithRelationInput | Seat_MatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Seat_MatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seat_Matrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seat_Matrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seat_Matrices
    **/
    _count?: true | Seat_MatrixCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Seat_MatrixAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Seat_MatrixSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Seat_MatrixMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Seat_MatrixMaxAggregateInputType
  }

  export type GetSeat_MatrixAggregateType<T extends Seat_MatrixAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat_Matrix]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat_Matrix[P]>
      : GetScalarType<T[P], AggregateSeat_Matrix[P]>
  }




  export type Seat_MatrixGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Seat_MatrixWhereInput
    orderBy?: Seat_MatrixOrderByWithAggregationInput | Seat_MatrixOrderByWithAggregationInput[]
    by: Seat_MatrixScalarFieldEnum[] | Seat_MatrixScalarFieldEnum
    having?: Seat_MatrixScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Seat_MatrixCountAggregateInputType | true
    _avg?: Seat_MatrixAvgAggregateInputType
    _sum?: Seat_MatrixSumAggregateInputType
    _min?: Seat_MatrixMinAggregateInputType
    _max?: Seat_MatrixMaxAggregateInputType
  }

  export type Seat_MatrixGroupByOutputType = {
    program_id: number
    category_id: number
    total_seats: number
    _count: Seat_MatrixCountAggregateOutputType | null
    _avg: Seat_MatrixAvgAggregateOutputType | null
    _sum: Seat_MatrixSumAggregateOutputType | null
    _min: Seat_MatrixMinAggregateOutputType | null
    _max: Seat_MatrixMaxAggregateOutputType | null
  }

  type GetSeat_MatrixGroupByPayload<T extends Seat_MatrixGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Seat_MatrixGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Seat_MatrixGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Seat_MatrixGroupByOutputType[P]>
            : GetScalarType<T[P], Seat_MatrixGroupByOutputType[P]>
        }
      >
    >


  export type Seat_MatrixSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    program_id?: boolean
    category_id?: boolean
    total_seats?: boolean
    progID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat_Matrix"]>

  export type Seat_MatrixSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    program_id?: boolean
    category_id?: boolean
    total_seats?: boolean
    progID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat_Matrix"]>

  export type Seat_MatrixSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    program_id?: boolean
    category_id?: boolean
    total_seats?: boolean
    progID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat_Matrix"]>

  export type Seat_MatrixSelectScalar = {
    program_id?: boolean
    category_id?: boolean
    total_seats?: boolean
  }

  export type Seat_MatrixOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"program_id" | "category_id" | "total_seats", ExtArgs["result"]["seat_Matrix"]>
  export type Seat_MatrixInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type Seat_MatrixIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type Seat_MatrixIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $Seat_MatrixPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat_Matrix"
    objects: {
      progID: Prisma.$ProgramPayload<ExtArgs>
      categoryID: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      program_id: number
      category_id: number
      total_seats: number
    }, ExtArgs["result"]["seat_Matrix"]>
    composites: {}
  }

  type Seat_MatrixGetPayload<S extends boolean | null | undefined | Seat_MatrixDefaultArgs> = $Result.GetResult<Prisma.$Seat_MatrixPayload, S>

  type Seat_MatrixCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Seat_MatrixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Seat_MatrixCountAggregateInputType | true
    }

  export interface Seat_MatrixDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat_Matrix'], meta: { name: 'Seat_Matrix' } }
    /**
     * Find zero or one Seat_Matrix that matches the filter.
     * @param {Seat_MatrixFindUniqueArgs} args - Arguments to find a Seat_Matrix
     * @example
     * // Get one Seat_Matrix
     * const seat_Matrix = await prisma.seat_Matrix.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Seat_MatrixFindUniqueArgs>(args: SelectSubset<T, Seat_MatrixFindUniqueArgs<ExtArgs>>): Prisma__Seat_MatrixClient<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat_Matrix that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Seat_MatrixFindUniqueOrThrowArgs} args - Arguments to find a Seat_Matrix
     * @example
     * // Get one Seat_Matrix
     * const seat_Matrix = await prisma.seat_Matrix.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Seat_MatrixFindUniqueOrThrowArgs>(args: SelectSubset<T, Seat_MatrixFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Seat_MatrixClient<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat_Matrix that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seat_MatrixFindFirstArgs} args - Arguments to find a Seat_Matrix
     * @example
     * // Get one Seat_Matrix
     * const seat_Matrix = await prisma.seat_Matrix.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Seat_MatrixFindFirstArgs>(args?: SelectSubset<T, Seat_MatrixFindFirstArgs<ExtArgs>>): Prisma__Seat_MatrixClient<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat_Matrix that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seat_MatrixFindFirstOrThrowArgs} args - Arguments to find a Seat_Matrix
     * @example
     * // Get one Seat_Matrix
     * const seat_Matrix = await prisma.seat_Matrix.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Seat_MatrixFindFirstOrThrowArgs>(args?: SelectSubset<T, Seat_MatrixFindFirstOrThrowArgs<ExtArgs>>): Prisma__Seat_MatrixClient<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seat_Matrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seat_MatrixFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seat_Matrices
     * const seat_Matrices = await prisma.seat_Matrix.findMany()
     * 
     * // Get first 10 Seat_Matrices
     * const seat_Matrices = await prisma.seat_Matrix.findMany({ take: 10 })
     * 
     * // Only select the `program_id`
     * const seat_MatrixWithProgram_idOnly = await prisma.seat_Matrix.findMany({ select: { program_id: true } })
     * 
     */
    findMany<T extends Seat_MatrixFindManyArgs>(args?: SelectSubset<T, Seat_MatrixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat_Matrix.
     * @param {Seat_MatrixCreateArgs} args - Arguments to create a Seat_Matrix.
     * @example
     * // Create one Seat_Matrix
     * const Seat_Matrix = await prisma.seat_Matrix.create({
     *   data: {
     *     // ... data to create a Seat_Matrix
     *   }
     * })
     * 
     */
    create<T extends Seat_MatrixCreateArgs>(args: SelectSubset<T, Seat_MatrixCreateArgs<ExtArgs>>): Prisma__Seat_MatrixClient<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seat_Matrices.
     * @param {Seat_MatrixCreateManyArgs} args - Arguments to create many Seat_Matrices.
     * @example
     * // Create many Seat_Matrices
     * const seat_Matrix = await prisma.seat_Matrix.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Seat_MatrixCreateManyArgs>(args?: SelectSubset<T, Seat_MatrixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Seat_Matrices and returns the data saved in the database.
     * @param {Seat_MatrixCreateManyAndReturnArgs} args - Arguments to create many Seat_Matrices.
     * @example
     * // Create many Seat_Matrices
     * const seat_Matrix = await prisma.seat_Matrix.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Seat_Matrices and only return the `program_id`
     * const seat_MatrixWithProgram_idOnly = await prisma.seat_Matrix.createManyAndReturn({
     *   select: { program_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Seat_MatrixCreateManyAndReturnArgs>(args?: SelectSubset<T, Seat_MatrixCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Seat_Matrix.
     * @param {Seat_MatrixDeleteArgs} args - Arguments to delete one Seat_Matrix.
     * @example
     * // Delete one Seat_Matrix
     * const Seat_Matrix = await prisma.seat_Matrix.delete({
     *   where: {
     *     // ... filter to delete one Seat_Matrix
     *   }
     * })
     * 
     */
    delete<T extends Seat_MatrixDeleteArgs>(args: SelectSubset<T, Seat_MatrixDeleteArgs<ExtArgs>>): Prisma__Seat_MatrixClient<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat_Matrix.
     * @param {Seat_MatrixUpdateArgs} args - Arguments to update one Seat_Matrix.
     * @example
     * // Update one Seat_Matrix
     * const seat_Matrix = await prisma.seat_Matrix.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Seat_MatrixUpdateArgs>(args: SelectSubset<T, Seat_MatrixUpdateArgs<ExtArgs>>): Prisma__Seat_MatrixClient<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seat_Matrices.
     * @param {Seat_MatrixDeleteManyArgs} args - Arguments to filter Seat_Matrices to delete.
     * @example
     * // Delete a few Seat_Matrices
     * const { count } = await prisma.seat_Matrix.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Seat_MatrixDeleteManyArgs>(args?: SelectSubset<T, Seat_MatrixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seat_Matrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seat_MatrixUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seat_Matrices
     * const seat_Matrix = await prisma.seat_Matrix.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Seat_MatrixUpdateManyArgs>(args: SelectSubset<T, Seat_MatrixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seat_Matrices and returns the data updated in the database.
     * @param {Seat_MatrixUpdateManyAndReturnArgs} args - Arguments to update many Seat_Matrices.
     * @example
     * // Update many Seat_Matrices
     * const seat_Matrix = await prisma.seat_Matrix.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Seat_Matrices and only return the `program_id`
     * const seat_MatrixWithProgram_idOnly = await prisma.seat_Matrix.updateManyAndReturn({
     *   select: { program_id: true },
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
    updateManyAndReturn<T extends Seat_MatrixUpdateManyAndReturnArgs>(args: SelectSubset<T, Seat_MatrixUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Seat_Matrix.
     * @param {Seat_MatrixUpsertArgs} args - Arguments to update or create a Seat_Matrix.
     * @example
     * // Update or create a Seat_Matrix
     * const seat_Matrix = await prisma.seat_Matrix.upsert({
     *   create: {
     *     // ... data to create a Seat_Matrix
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat_Matrix we want to update
     *   }
     * })
     */
    upsert<T extends Seat_MatrixUpsertArgs>(args: SelectSubset<T, Seat_MatrixUpsertArgs<ExtArgs>>): Prisma__Seat_MatrixClient<$Result.GetResult<Prisma.$Seat_MatrixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seat_Matrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seat_MatrixCountArgs} args - Arguments to filter Seat_Matrices to count.
     * @example
     * // Count the number of Seat_Matrices
     * const count = await prisma.seat_Matrix.count({
     *   where: {
     *     // ... the filter for the Seat_Matrices we want to count
     *   }
     * })
    **/
    count<T extends Seat_MatrixCountArgs>(
      args?: Subset<T, Seat_MatrixCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Seat_MatrixCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat_Matrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seat_MatrixAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Seat_MatrixAggregateArgs>(args: Subset<T, Seat_MatrixAggregateArgs>): Prisma.PrismaPromise<GetSeat_MatrixAggregateType<T>>

    /**
     * Group by Seat_Matrix.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Seat_MatrixGroupByArgs} args - Group by arguments.
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
      T extends Seat_MatrixGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Seat_MatrixGroupByArgs['orderBy'] }
        : { orderBy?: Seat_MatrixGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Seat_MatrixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeat_MatrixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat_Matrix model
   */
  readonly fields: Seat_MatrixFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat_Matrix.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Seat_MatrixClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    progID<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoryID<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Seat_Matrix model
   */
  interface Seat_MatrixFieldRefs {
    readonly program_id: FieldRef<"Seat_Matrix", 'Int'>
    readonly category_id: FieldRef<"Seat_Matrix", 'Int'>
    readonly total_seats: FieldRef<"Seat_Matrix", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Seat_Matrix findUnique
   */
  export type Seat_MatrixFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    /**
     * Filter, which Seat_Matrix to fetch.
     */
    where: Seat_MatrixWhereUniqueInput
  }

  /**
   * Seat_Matrix findUniqueOrThrow
   */
  export type Seat_MatrixFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    /**
     * Filter, which Seat_Matrix to fetch.
     */
    where: Seat_MatrixWhereUniqueInput
  }

  /**
   * Seat_Matrix findFirst
   */
  export type Seat_MatrixFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    /**
     * Filter, which Seat_Matrix to fetch.
     */
    where?: Seat_MatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seat_Matrices to fetch.
     */
    orderBy?: Seat_MatrixOrderByWithRelationInput | Seat_MatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seat_Matrices.
     */
    cursor?: Seat_MatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seat_Matrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seat_Matrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seat_Matrices.
     */
    distinct?: Seat_MatrixScalarFieldEnum | Seat_MatrixScalarFieldEnum[]
  }

  /**
   * Seat_Matrix findFirstOrThrow
   */
  export type Seat_MatrixFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    /**
     * Filter, which Seat_Matrix to fetch.
     */
    where?: Seat_MatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seat_Matrices to fetch.
     */
    orderBy?: Seat_MatrixOrderByWithRelationInput | Seat_MatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seat_Matrices.
     */
    cursor?: Seat_MatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seat_Matrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seat_Matrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seat_Matrices.
     */
    distinct?: Seat_MatrixScalarFieldEnum | Seat_MatrixScalarFieldEnum[]
  }

  /**
   * Seat_Matrix findMany
   */
  export type Seat_MatrixFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    /**
     * Filter, which Seat_Matrices to fetch.
     */
    where?: Seat_MatrixWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seat_Matrices to fetch.
     */
    orderBy?: Seat_MatrixOrderByWithRelationInput | Seat_MatrixOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seat_Matrices.
     */
    cursor?: Seat_MatrixWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seat_Matrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seat_Matrices.
     */
    skip?: number
    distinct?: Seat_MatrixScalarFieldEnum | Seat_MatrixScalarFieldEnum[]
  }

  /**
   * Seat_Matrix create
   */
  export type Seat_MatrixCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat_Matrix.
     */
    data: XOR<Seat_MatrixCreateInput, Seat_MatrixUncheckedCreateInput>
  }

  /**
   * Seat_Matrix createMany
   */
  export type Seat_MatrixCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seat_Matrices.
     */
    data: Seat_MatrixCreateManyInput | Seat_MatrixCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seat_Matrix createManyAndReturn
   */
  export type Seat_MatrixCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * The data used to create many Seat_Matrices.
     */
    data: Seat_MatrixCreateManyInput | Seat_MatrixCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seat_Matrix update
   */
  export type Seat_MatrixUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat_Matrix.
     */
    data: XOR<Seat_MatrixUpdateInput, Seat_MatrixUncheckedUpdateInput>
    /**
     * Choose, which Seat_Matrix to update.
     */
    where: Seat_MatrixWhereUniqueInput
  }

  /**
   * Seat_Matrix updateMany
   */
  export type Seat_MatrixUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seat_Matrices.
     */
    data: XOR<Seat_MatrixUpdateManyMutationInput, Seat_MatrixUncheckedUpdateManyInput>
    /**
     * Filter which Seat_Matrices to update
     */
    where?: Seat_MatrixWhereInput
    /**
     * Limit how many Seat_Matrices to update.
     */
    limit?: number
  }

  /**
   * Seat_Matrix updateManyAndReturn
   */
  export type Seat_MatrixUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * The data used to update Seat_Matrices.
     */
    data: XOR<Seat_MatrixUpdateManyMutationInput, Seat_MatrixUncheckedUpdateManyInput>
    /**
     * Filter which Seat_Matrices to update
     */
    where?: Seat_MatrixWhereInput
    /**
     * Limit how many Seat_Matrices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Seat_Matrix upsert
   */
  export type Seat_MatrixUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat_Matrix to update in case it exists.
     */
    where: Seat_MatrixWhereUniqueInput
    /**
     * In case the Seat_Matrix found by the `where` argument doesn't exist, create a new Seat_Matrix with this data.
     */
    create: XOR<Seat_MatrixCreateInput, Seat_MatrixUncheckedCreateInput>
    /**
     * In case the Seat_Matrix was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Seat_MatrixUpdateInput, Seat_MatrixUncheckedUpdateInput>
  }

  /**
   * Seat_Matrix delete
   */
  export type Seat_MatrixDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
    /**
     * Filter which Seat_Matrix to delete.
     */
    where: Seat_MatrixWhereUniqueInput
  }

  /**
   * Seat_Matrix deleteMany
   */
  export type Seat_MatrixDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat_Matrices to delete
     */
    where?: Seat_MatrixWhereInput
    /**
     * Limit how many Seat_Matrices to delete.
     */
    limit?: number
  }

  /**
   * Seat_Matrix without action
   */
  export type Seat_MatrixDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat_Matrix
     */
    select?: Seat_MatrixSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat_Matrix
     */
    omit?: Seat_MatrixOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Seat_MatrixInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    admin_id: number | null
  }

  export type AdminSumAggregateOutputType = {
    admin_id: number | null
  }

  export type AdminMinAggregateOutputType = {
    admin_id: number | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    admin_id: number | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    admin_id: number
    email: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    admin_id?: true
  }

  export type AdminSumAggregateInputType = {
    admin_id?: true
  }

  export type AdminMinAggregateInputType = {
    admin_id?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    admin_id?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    admin_id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    admin_id: number
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    admin_id?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    admin_id?: boolean
    email?: boolean
    password?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"admin_id" | "email" | "password", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      admin_id: number
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `admin_id`
     * const adminWithAdmin_idOnly = await prisma.admin.findMany({ select: { admin_id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `admin_id`
     * const adminWithAdmin_idOnly = await prisma.admin.createManyAndReturn({
     *   select: { admin_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `admin_id`
     * const adminWithAdmin_idOnly = await prisma.admin.updateManyAndReturn({
     *   select: { admin_id: true },
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly admin_id: FieldRef<"Admin", 'Int'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    student_id: number | null
    general_rank: number | null
    category_rank: number | null
    category_id: number | null
  }

  export type StudentSumAggregateOutputType = {
    student_id: number | null
    general_rank: bigint | null
    category_rank: bigint | null
    category_id: number | null
  }

  export type StudentMinAggregateOutputType = {
    student_id: number | null
    name: string | null
    email: string | null
    password: string | null
    mobile_number: string | null
    gender: $Enums.gender | null
    current_status: $Enums.status | null
    isRegistered: boolean | null
    general_rank: bigint | null
    category_rank: bigint | null
    category_id: number | null
  }

  export type StudentMaxAggregateOutputType = {
    student_id: number | null
    name: string | null
    email: string | null
    password: string | null
    mobile_number: string | null
    gender: $Enums.gender | null
    current_status: $Enums.status | null
    isRegistered: boolean | null
    general_rank: bigint | null
    category_rank: bigint | null
    category_id: number | null
  }

  export type StudentCountAggregateOutputType = {
    student_id: number
    name: number
    email: number
    password: number
    mobile_number: number
    gender: number
    current_status: number
    isRegistered: number
    general_rank: number
    category_rank: number
    category_id: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    student_id?: true
    general_rank?: true
    category_rank?: true
    category_id?: true
  }

  export type StudentSumAggregateInputType = {
    student_id?: true
    general_rank?: true
    category_rank?: true
    category_id?: true
  }

  export type StudentMinAggregateInputType = {
    student_id?: true
    name?: true
    email?: true
    password?: true
    mobile_number?: true
    gender?: true
    current_status?: true
    isRegistered?: true
    general_rank?: true
    category_rank?: true
    category_id?: true
  }

  export type StudentMaxAggregateInputType = {
    student_id?: true
    name?: true
    email?: true
    password?: true
    mobile_number?: true
    gender?: true
    current_status?: true
    isRegistered?: true
    general_rank?: true
    category_rank?: true
    category_id?: true
  }

  export type StudentCountAggregateInputType = {
    student_id?: true
    name?: true
    email?: true
    password?: true
    mobile_number?: true
    gender?: true
    current_status?: true
    isRegistered?: true
    general_rank?: true
    category_rank?: true
    category_id?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    student_id: number
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status: $Enums.status
    isRegistered: boolean
    general_rank: bigint
    category_rank: bigint
    category_id: number
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    mobile_number?: boolean
    gender?: boolean
    current_status?: boolean
    isRegistered?: boolean
    general_rank?: boolean
    category_rank?: boolean
    category_id?: boolean
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    Preferences?: boolean | Student$PreferencesArgs<ExtArgs>
    Allocation_Status?: boolean | Student$Allocation_StatusArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    mobile_number?: boolean
    gender?: boolean
    current_status?: boolean
    isRegistered?: boolean
    general_rank?: boolean
    category_rank?: boolean
    category_id?: boolean
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    mobile_number?: boolean
    gender?: boolean
    current_status?: boolean
    isRegistered?: boolean
    general_rank?: boolean
    category_rank?: boolean
    category_id?: boolean
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    student_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    mobile_number?: boolean
    gender?: boolean
    current_status?: boolean
    isRegistered?: boolean
    general_rank?: boolean
    category_rank?: boolean
    category_id?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "name" | "email" | "password" | "mobile_number" | "gender" | "current_status" | "isRegistered" | "general_rank" | "category_rank" | "category_id", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    Preferences?: boolean | Student$PreferencesArgs<ExtArgs>
    Allocation_Status?: boolean | Student$Allocation_StatusArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      categoryID: Prisma.$CategoryPayload<ExtArgs>
      Preferences: Prisma.$PreferencesPayload<ExtArgs>[]
      Allocation_Status: Prisma.$Allocation_StatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      name: string
      email: string
      password: string
      mobile_number: string
      gender: $Enums.gender
      current_status: $Enums.status
      isRegistered: boolean
      general_rank: bigint
      category_rank: bigint
      category_id: number
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.createManyAndReturn({
     *   select: { student_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `student_id`
     * const studentWithStudent_idOnly = await prisma.student.updateManyAndReturn({
     *   select: { student_id: true },
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categoryID<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Preferences<T extends Student$PreferencesArgs<ExtArgs> = {}>(args?: Subset<T, Student$PreferencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Allocation_Status<T extends Student$Allocation_StatusArgs<ExtArgs> = {}>(args?: Subset<T, Student$Allocation_StatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly student_id: FieldRef<"Student", 'Int'>
    readonly name: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly mobile_number: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'gender'>
    readonly current_status: FieldRef<"Student", 'status'>
    readonly isRegistered: FieldRef<"Student", 'Boolean'>
    readonly general_rank: FieldRef<"Student", 'BigInt'>
    readonly category_rank: FieldRef<"Student", 'BigInt'>
    readonly category_id: FieldRef<"Student", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.Preferences
   */
  export type Student$PreferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    where?: PreferencesWhereInput
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    cursor?: PreferencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Student.Allocation_Status
   */
  export type Student$Allocation_StatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    where?: Allocation_StatusWhereInput
    orderBy?: Allocation_StatusOrderByWithRelationInput | Allocation_StatusOrderByWithRelationInput[]
    cursor?: Allocation_StatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Allocation_StatusScalarFieldEnum | Allocation_StatusScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Preferences
   */

  export type AggregatePreferences = {
    _count: PreferencesCountAggregateOutputType | null
    _avg: PreferencesAvgAggregateOutputType | null
    _sum: PreferencesSumAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  export type PreferencesAvgAggregateOutputType = {
    student_id: number | null
    preference_number: number | null
    program_id: number | null
  }

  export type PreferencesSumAggregateOutputType = {
    student_id: number | null
    preference_number: number | null
    program_id: number | null
  }

  export type PreferencesMinAggregateOutputType = {
    student_id: number | null
    preference_number: number | null
    created_at: Date | null
    program_id: number | null
  }

  export type PreferencesMaxAggregateOutputType = {
    student_id: number | null
    preference_number: number | null
    created_at: Date | null
    program_id: number | null
  }

  export type PreferencesCountAggregateOutputType = {
    student_id: number
    preference_number: number
    created_at: number
    program_id: number
    _all: number
  }


  export type PreferencesAvgAggregateInputType = {
    student_id?: true
    preference_number?: true
    program_id?: true
  }

  export type PreferencesSumAggregateInputType = {
    student_id?: true
    preference_number?: true
    program_id?: true
  }

  export type PreferencesMinAggregateInputType = {
    student_id?: true
    preference_number?: true
    created_at?: true
    program_id?: true
  }

  export type PreferencesMaxAggregateInputType = {
    student_id?: true
    preference_number?: true
    created_at?: true
    program_id?: true
  }

  export type PreferencesCountAggregateInputType = {
    student_id?: true
    preference_number?: true
    created_at?: true
    program_id?: true
    _all?: true
  }

  export type PreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to aggregate.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preferences
    **/
    _count?: true | PreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreferencesMaxAggregateInputType
  }

  export type GetPreferencesAggregateType<T extends PreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregatePreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreferences[P]>
      : GetScalarType<T[P], AggregatePreferences[P]>
  }




  export type PreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreferencesWhereInput
    orderBy?: PreferencesOrderByWithAggregationInput | PreferencesOrderByWithAggregationInput[]
    by: PreferencesScalarFieldEnum[] | PreferencesScalarFieldEnum
    having?: PreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreferencesCountAggregateInputType | true
    _avg?: PreferencesAvgAggregateInputType
    _sum?: PreferencesSumAggregateInputType
    _min?: PreferencesMinAggregateInputType
    _max?: PreferencesMaxAggregateInputType
  }

  export type PreferencesGroupByOutputType = {
    student_id: number
    preference_number: number
    created_at: Date
    program_id: number
    _count: PreferencesCountAggregateOutputType | null
    _avg: PreferencesAvgAggregateOutputType | null
    _sum: PreferencesSumAggregateOutputType | null
    _min: PreferencesMinAggregateOutputType | null
    _max: PreferencesMaxAggregateOutputType | null
  }

  type GetPreferencesGroupByPayload<T extends PreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], PreferencesGroupByOutputType[P]>
        }
      >
    >


  export type PreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    preference_number?: boolean
    created_at?: boolean
    program_id?: boolean
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    preference_number?: boolean
    created_at?: boolean
    program_id?: boolean
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    preference_number?: boolean
    created_at?: boolean
    program_id?: boolean
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preferences"]>

  export type PreferencesSelectScalar = {
    student_id?: boolean
    preference_number?: boolean
    created_at?: boolean
    program_id?: boolean
  }

  export type PreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "preference_number" | "created_at" | "program_id", ExtArgs["result"]["preferences"]>
  export type PreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type PreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
  }
  export type PreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
  }

  export type $PreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preferences"
    objects: {
      studentID: Prisma.$StudentPayload<ExtArgs>
      programID: Prisma.$ProgramPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      preference_number: number
      created_at: Date
      program_id: number
    }, ExtArgs["result"]["preferences"]>
    composites: {}
  }

  type PreferencesGetPayload<S extends boolean | null | undefined | PreferencesDefaultArgs> = $Result.GetResult<Prisma.$PreferencesPayload, S>

  type PreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreferencesCountAggregateInputType | true
    }

  export interface PreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preferences'], meta: { name: 'Preferences' } }
    /**
     * Find zero or one Preferences that matches the filter.
     * @param {PreferencesFindUniqueArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreferencesFindUniqueArgs>(args: SelectSubset<T, PreferencesFindUniqueArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreferencesFindUniqueOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, PreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreferencesFindFirstArgs>(args?: SelectSubset<T, PreferencesFindFirstArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindFirstOrThrowArgs} args - Arguments to find a Preferences
     * @example
     * // Get one Preferences
     * const preferences = await prisma.preferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, PreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preferences
     * const preferences = await prisma.preferences.findMany()
     * 
     * // Get first 10 Preferences
     * const preferences = await prisma.preferences.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const preferencesWithStudent_idOnly = await prisma.preferences.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends PreferencesFindManyArgs>(args?: SelectSubset<T, PreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preferences.
     * @param {PreferencesCreateArgs} args - Arguments to create a Preferences.
     * @example
     * // Create one Preferences
     * const Preferences = await prisma.preferences.create({
     *   data: {
     *     // ... data to create a Preferences
     *   }
     * })
     * 
     */
    create<T extends PreferencesCreateArgs>(args: SelectSubset<T, PreferencesCreateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preferences.
     * @param {PreferencesCreateManyArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreferencesCreateManyArgs>(args?: SelectSubset<T, PreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preferences and returns the data saved in the database.
     * @param {PreferencesCreateManyAndReturnArgs} args - Arguments to create many Preferences.
     * @example
     * // Create many Preferences
     * const preferences = await prisma.preferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preferences and only return the `student_id`
     * const preferencesWithStudent_idOnly = await prisma.preferences.createManyAndReturn({
     *   select: { student_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, PreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preferences.
     * @param {PreferencesDeleteArgs} args - Arguments to delete one Preferences.
     * @example
     * // Delete one Preferences
     * const Preferences = await prisma.preferences.delete({
     *   where: {
     *     // ... filter to delete one Preferences
     *   }
     * })
     * 
     */
    delete<T extends PreferencesDeleteArgs>(args: SelectSubset<T, PreferencesDeleteArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preferences.
     * @param {PreferencesUpdateArgs} args - Arguments to update one Preferences.
     * @example
     * // Update one Preferences
     * const preferences = await prisma.preferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreferencesUpdateArgs>(args: SelectSubset<T, PreferencesUpdateArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preferences.
     * @param {PreferencesDeleteManyArgs} args - Arguments to filter Preferences to delete.
     * @example
     * // Delete a few Preferences
     * const { count } = await prisma.preferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreferencesDeleteManyArgs>(args?: SelectSubset<T, PreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreferencesUpdateManyArgs>(args: SelectSubset<T, PreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preferences and returns the data updated in the database.
     * @param {PreferencesUpdateManyAndReturnArgs} args - Arguments to update many Preferences.
     * @example
     * // Update many Preferences
     * const preferences = await prisma.preferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preferences and only return the `student_id`
     * const preferencesWithStudent_idOnly = await prisma.preferences.updateManyAndReturn({
     *   select: { student_id: true },
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
    updateManyAndReturn<T extends PreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, PreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preferences.
     * @param {PreferencesUpsertArgs} args - Arguments to update or create a Preferences.
     * @example
     * // Update or create a Preferences
     * const preferences = await prisma.preferences.upsert({
     *   create: {
     *     // ... data to create a Preferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preferences we want to update
     *   }
     * })
     */
    upsert<T extends PreferencesUpsertArgs>(args: SelectSubset<T, PreferencesUpsertArgs<ExtArgs>>): Prisma__PreferencesClient<$Result.GetResult<Prisma.$PreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesCountArgs} args - Arguments to filter Preferences to count.
     * @example
     * // Count the number of Preferences
     * const count = await prisma.preferences.count({
     *   where: {
     *     // ... the filter for the Preferences we want to count
     *   }
     * })
    **/
    count<T extends PreferencesCountArgs>(
      args?: Subset<T, PreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreferencesAggregateArgs>(args: Subset<T, PreferencesAggregateArgs>): Prisma.PrismaPromise<GetPreferencesAggregateType<T>>

    /**
     * Group by Preferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreferencesGroupByArgs} args - Group by arguments.
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
      T extends PreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreferencesGroupByArgs['orderBy'] }
        : { orderBy?: PreferencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preferences model
   */
  readonly fields: PreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentID<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    programID<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Preferences model
   */
  interface PreferencesFieldRefs {
    readonly student_id: FieldRef<"Preferences", 'Int'>
    readonly preference_number: FieldRef<"Preferences", 'Int'>
    readonly created_at: FieldRef<"Preferences", 'DateTime'>
    readonly program_id: FieldRef<"Preferences", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Preferences findUnique
   */
  export type PreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findUniqueOrThrow
   */
  export type PreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences findFirst
   */
  export type PreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findFirstOrThrow
   */
  export type PreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preferences.
     */
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences findMany
   */
  export type PreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter, which Preferences to fetch.
     */
    where?: PreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preferences to fetch.
     */
    orderBy?: PreferencesOrderByWithRelationInput | PreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preferences.
     */
    cursor?: PreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preferences.
     */
    skip?: number
    distinct?: PreferencesScalarFieldEnum | PreferencesScalarFieldEnum[]
  }

  /**
   * Preferences create
   */
  export type PreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a Preferences.
     */
    data: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
  }

  /**
   * Preferences createMany
   */
  export type PreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preferences createManyAndReturn
   */
  export type PreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many Preferences.
     */
    data: PreferencesCreateManyInput | PreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preferences update
   */
  export type PreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a Preferences.
     */
    data: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
    /**
     * Choose, which Preferences to update.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences updateMany
   */
  export type PreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
  }

  /**
   * Preferences updateManyAndReturn
   */
  export type PreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * The data used to update Preferences.
     */
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyInput>
    /**
     * Filter which Preferences to update
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preferences upsert
   */
  export type PreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the Preferences to update in case it exists.
     */
    where: PreferencesWhereUniqueInput
    /**
     * In case the Preferences found by the `where` argument doesn't exist, create a new Preferences with this data.
     */
    create: XOR<PreferencesCreateInput, PreferencesUncheckedCreateInput>
    /**
     * In case the Preferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreferencesUpdateInput, PreferencesUncheckedUpdateInput>
  }

  /**
   * Preferences delete
   */
  export type PreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
    /**
     * Filter which Preferences to delete.
     */
    where: PreferencesWhereUniqueInput
  }

  /**
   * Preferences deleteMany
   */
  export type PreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preferences to delete
     */
    where?: PreferencesWhereInput
    /**
     * Limit how many Preferences to delete.
     */
    limit?: number
  }

  /**
   * Preferences without action
   */
  export type PreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preferences
     */
    select?: PreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preferences
     */
    omit?: PreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreferencesInclude<ExtArgs> | null
  }


  /**
   * Model Round
   */

  export type AggregateRound = {
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  export type RoundAvgAggregateOutputType = {
    round_number: number | null
    duration: number | null
  }

  export type RoundSumAggregateOutputType = {
    round_number: number | null
    duration: number | null
  }

  export type RoundMinAggregateOutputType = {
    round_number: number | null
    start_time: Date | null
    end_time: Date | null
    duration: number | null
  }

  export type RoundMaxAggregateOutputType = {
    round_number: number | null
    start_time: Date | null
    end_time: Date | null
    duration: number | null
  }

  export type RoundCountAggregateOutputType = {
    round_number: number
    start_time: number
    end_time: number
    duration: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    round_number?: true
    duration?: true
  }

  export type RoundSumAggregateInputType = {
    round_number?: true
    duration?: true
  }

  export type RoundMinAggregateInputType = {
    round_number?: true
    start_time?: true
    end_time?: true
    duration?: true
  }

  export type RoundMaxAggregateInputType = {
    round_number?: true
    start_time?: true
    end_time?: true
    duration?: true
  }

  export type RoundCountAggregateInputType = {
    round_number?: true
    start_time?: true
    end_time?: true
    duration?: true
    _all?: true
  }

  export type RoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Round to aggregate.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rounds
    **/
    _count?: true | RoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundMaxAggregateInputType
  }

  export type GetRoundAggregateType<T extends RoundAggregateArgs> = {
        [P in keyof T & keyof AggregateRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRound[P]>
      : GetScalarType<T[P], AggregateRound[P]>
  }




  export type RoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithAggregationInput | RoundOrderByWithAggregationInput[]
    by: RoundScalarFieldEnum[] | RoundScalarFieldEnum
    having?: RoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundCountAggregateInputType | true
    _avg?: RoundAvgAggregateInputType
    _sum?: RoundSumAggregateInputType
    _min?: RoundMinAggregateInputType
    _max?: RoundMaxAggregateInputType
  }

  export type RoundGroupByOutputType = {
    round_number: number
    start_time: Date
    end_time: Date
    duration: number
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  type GetRoundGroupByPayload<T extends RoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundGroupByOutputType[P]>
            : GetScalarType<T[P], RoundGroupByOutputType[P]>
        }
      >
    >


  export type RoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    round_number?: boolean
    start_time?: boolean
    end_time?: boolean
    duration?: boolean
    Allocation_Status?: boolean | Round$Allocation_StatusArgs<ExtArgs>
    CutOff_ranks?: boolean | Round$CutOff_ranksArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    round_number?: boolean
    start_time?: boolean
    end_time?: boolean
    duration?: boolean
  }, ExtArgs["result"]["round"]>

  export type RoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    round_number?: boolean
    start_time?: boolean
    end_time?: boolean
    duration?: boolean
  }, ExtArgs["result"]["round"]>

  export type RoundSelectScalar = {
    round_number?: boolean
    start_time?: boolean
    end_time?: boolean
    duration?: boolean
  }

  export type RoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"round_number" | "start_time" | "end_time" | "duration", ExtArgs["result"]["round"]>
  export type RoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Allocation_Status?: boolean | Round$Allocation_StatusArgs<ExtArgs>
    CutOff_ranks?: boolean | Round$CutOff_ranksArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Round"
    objects: {
      Allocation_Status: Prisma.$Allocation_StatusPayload<ExtArgs>[]
      CutOff_ranks: Prisma.$CutOff_ranksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      round_number: number
      start_time: Date
      end_time: Date
      duration: number
    }, ExtArgs["result"]["round"]>
    composites: {}
  }

  type RoundGetPayload<S extends boolean | null | undefined | RoundDefaultArgs> = $Result.GetResult<Prisma.$RoundPayload, S>

  type RoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoundCountAggregateInputType | true
    }

  export interface RoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Round'], meta: { name: 'Round' } }
    /**
     * Find zero or one Round that matches the filter.
     * @param {RoundFindUniqueArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoundFindUniqueArgs>(args: SelectSubset<T, RoundFindUniqueArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Round that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoundFindUniqueOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoundFindUniqueOrThrowArgs>(args: SelectSubset<T, RoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoundFindFirstArgs>(args?: SelectSubset<T, RoundFindFirstArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoundFindFirstOrThrowArgs>(args?: SelectSubset<T, RoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rounds
     * const rounds = await prisma.round.findMany()
     * 
     * // Get first 10 Rounds
     * const rounds = await prisma.round.findMany({ take: 10 })
     * 
     * // Only select the `round_number`
     * const roundWithRound_numberOnly = await prisma.round.findMany({ select: { round_number: true } })
     * 
     */
    findMany<T extends RoundFindManyArgs>(args?: SelectSubset<T, RoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Round.
     * @param {RoundCreateArgs} args - Arguments to create a Round.
     * @example
     * // Create one Round
     * const Round = await prisma.round.create({
     *   data: {
     *     // ... data to create a Round
     *   }
     * })
     * 
     */
    create<T extends RoundCreateArgs>(args: SelectSubset<T, RoundCreateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rounds.
     * @param {RoundCreateManyArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoundCreateManyArgs>(args?: SelectSubset<T, RoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rounds and returns the data saved in the database.
     * @param {RoundCreateManyAndReturnArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rounds and only return the `round_number`
     * const roundWithRound_numberOnly = await prisma.round.createManyAndReturn({
     *   select: { round_number: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoundCreateManyAndReturnArgs>(args?: SelectSubset<T, RoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Round.
     * @param {RoundDeleteArgs} args - Arguments to delete one Round.
     * @example
     * // Delete one Round
     * const Round = await prisma.round.delete({
     *   where: {
     *     // ... filter to delete one Round
     *   }
     * })
     * 
     */
    delete<T extends RoundDeleteArgs>(args: SelectSubset<T, RoundDeleteArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Round.
     * @param {RoundUpdateArgs} args - Arguments to update one Round.
     * @example
     * // Update one Round
     * const round = await prisma.round.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoundUpdateArgs>(args: SelectSubset<T, RoundUpdateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rounds.
     * @param {RoundDeleteManyArgs} args - Arguments to filter Rounds to delete.
     * @example
     * // Delete a few Rounds
     * const { count } = await prisma.round.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoundDeleteManyArgs>(args?: SelectSubset<T, RoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoundUpdateManyArgs>(args: SelectSubset<T, RoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds and returns the data updated in the database.
     * @param {RoundUpdateManyAndReturnArgs} args - Arguments to update many Rounds.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rounds and only return the `round_number`
     * const roundWithRound_numberOnly = await prisma.round.updateManyAndReturn({
     *   select: { round_number: true },
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
    updateManyAndReturn<T extends RoundUpdateManyAndReturnArgs>(args: SelectSubset<T, RoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Round.
     * @param {RoundUpsertArgs} args - Arguments to update or create a Round.
     * @example
     * // Update or create a Round
     * const round = await prisma.round.upsert({
     *   create: {
     *     // ... data to create a Round
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Round we want to update
     *   }
     * })
     */
    upsert<T extends RoundUpsertArgs>(args: SelectSubset<T, RoundUpsertArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundCountArgs} args - Arguments to filter Rounds to count.
     * @example
     * // Count the number of Rounds
     * const count = await prisma.round.count({
     *   where: {
     *     // ... the filter for the Rounds we want to count
     *   }
     * })
    **/
    count<T extends RoundCountArgs>(
      args?: Subset<T, RoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundAggregateArgs>(args: Subset<T, RoundAggregateArgs>): Prisma.PrismaPromise<GetRoundAggregateType<T>>

    /**
     * Group by Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundGroupByArgs} args - Group by arguments.
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
      T extends RoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundGroupByArgs['orderBy'] }
        : { orderBy?: RoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Round model
   */
  readonly fields: RoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Round.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Allocation_Status<T extends Round$Allocation_StatusArgs<ExtArgs> = {}>(args?: Subset<T, Round$Allocation_StatusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CutOff_ranks<T extends Round$CutOff_ranksArgs<ExtArgs> = {}>(args?: Subset<T, Round$CutOff_ranksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Round model
   */
  interface RoundFieldRefs {
    readonly round_number: FieldRef<"Round", 'Int'>
    readonly start_time: FieldRef<"Round", 'DateTime'>
    readonly end_time: FieldRef<"Round", 'DateTime'>
    readonly duration: FieldRef<"Round", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Round findUnique
   */
  export type RoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findUniqueOrThrow
   */
  export type RoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findFirst
   */
  export type RoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findFirstOrThrow
   */
  export type RoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findMany
   */
  export type RoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Rounds to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round create
   */
  export type RoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to create a Round.
     */
    data: XOR<RoundCreateInput, RoundUncheckedCreateInput>
  }

  /**
   * Round createMany
   */
  export type RoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Round createManyAndReturn
   */
  export type RoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Round update
   */
  export type RoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to update a Round.
     */
    data: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
    /**
     * Choose, which Round to update.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round updateMany
   */
  export type RoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round updateManyAndReturn
   */
  export type RoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round upsert
   */
  export type RoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The filter to search for the Round to update in case it exists.
     */
    where: RoundWhereUniqueInput
    /**
     * In case the Round found by the `where` argument doesn't exist, create a new Round with this data.
     */
    create: XOR<RoundCreateInput, RoundUncheckedCreateInput>
    /**
     * In case the Round was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
  }

  /**
   * Round delete
   */
  export type RoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter which Round to delete.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round deleteMany
   */
  export type RoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rounds to delete
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to delete.
     */
    limit?: number
  }

  /**
   * Round.Allocation_Status
   */
  export type Round$Allocation_StatusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    where?: Allocation_StatusWhereInput
    orderBy?: Allocation_StatusOrderByWithRelationInput | Allocation_StatusOrderByWithRelationInput[]
    cursor?: Allocation_StatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Allocation_StatusScalarFieldEnum | Allocation_StatusScalarFieldEnum[]
  }

  /**
   * Round.CutOff_ranks
   */
  export type Round$CutOff_ranksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    where?: CutOff_ranksWhereInput
    orderBy?: CutOff_ranksOrderByWithRelationInput | CutOff_ranksOrderByWithRelationInput[]
    cursor?: CutOff_ranksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CutOff_ranksScalarFieldEnum | CutOff_ranksScalarFieldEnum[]
  }

  /**
   * Round without action
   */
  export type RoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
  }


  /**
   * Model Allocation_Status
   */

  export type AggregateAllocation_Status = {
    _count: Allocation_StatusCountAggregateOutputType | null
    _avg: Allocation_StatusAvgAggregateOutputType | null
    _sum: Allocation_StatusSumAggregateOutputType | null
    _min: Allocation_StatusMinAggregateOutputType | null
    _max: Allocation_StatusMaxAggregateOutputType | null
  }

  export type Allocation_StatusAvgAggregateOutputType = {
    student_id: number | null
    program_id: number | null
    category_id: number | null
    rank_value_used: number | null
    round_id: number | null
  }

  export type Allocation_StatusSumAggregateOutputType = {
    student_id: number | null
    program_id: number | null
    category_id: number | null
    rank_value_used: bigint | null
    round_id: number | null
  }

  export type Allocation_StatusMinAggregateOutputType = {
    student_id: number | null
    program_id: number | null
    category_id: number | null
    rank_value_used: bigint | null
    rank_type_used: $Enums.rankType | null
    round_id: number | null
  }

  export type Allocation_StatusMaxAggregateOutputType = {
    student_id: number | null
    program_id: number | null
    category_id: number | null
    rank_value_used: bigint | null
    rank_type_used: $Enums.rankType | null
    round_id: number | null
  }

  export type Allocation_StatusCountAggregateOutputType = {
    student_id: number
    program_id: number
    category_id: number
    rank_value_used: number
    rank_type_used: number
    round_id: number
    _all: number
  }


  export type Allocation_StatusAvgAggregateInputType = {
    student_id?: true
    program_id?: true
    category_id?: true
    rank_value_used?: true
    round_id?: true
  }

  export type Allocation_StatusSumAggregateInputType = {
    student_id?: true
    program_id?: true
    category_id?: true
    rank_value_used?: true
    round_id?: true
  }

  export type Allocation_StatusMinAggregateInputType = {
    student_id?: true
    program_id?: true
    category_id?: true
    rank_value_used?: true
    rank_type_used?: true
    round_id?: true
  }

  export type Allocation_StatusMaxAggregateInputType = {
    student_id?: true
    program_id?: true
    category_id?: true
    rank_value_used?: true
    rank_type_used?: true
    round_id?: true
  }

  export type Allocation_StatusCountAggregateInputType = {
    student_id?: true
    program_id?: true
    category_id?: true
    rank_value_used?: true
    rank_type_used?: true
    round_id?: true
    _all?: true
  }

  export type Allocation_StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allocation_Status to aggregate.
     */
    where?: Allocation_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allocation_Statuses to fetch.
     */
    orderBy?: Allocation_StatusOrderByWithRelationInput | Allocation_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Allocation_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allocation_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allocation_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Allocation_Statuses
    **/
    _count?: true | Allocation_StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Allocation_StatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Allocation_StatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Allocation_StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Allocation_StatusMaxAggregateInputType
  }

  export type GetAllocation_StatusAggregateType<T extends Allocation_StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateAllocation_Status]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAllocation_Status[P]>
      : GetScalarType<T[P], AggregateAllocation_Status[P]>
  }




  export type Allocation_StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Allocation_StatusWhereInput
    orderBy?: Allocation_StatusOrderByWithAggregationInput | Allocation_StatusOrderByWithAggregationInput[]
    by: Allocation_StatusScalarFieldEnum[] | Allocation_StatusScalarFieldEnum
    having?: Allocation_StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Allocation_StatusCountAggregateInputType | true
    _avg?: Allocation_StatusAvgAggregateInputType
    _sum?: Allocation_StatusSumAggregateInputType
    _min?: Allocation_StatusMinAggregateInputType
    _max?: Allocation_StatusMaxAggregateInputType
  }

  export type Allocation_StatusGroupByOutputType = {
    student_id: number
    program_id: number
    category_id: number
    rank_value_used: bigint
    rank_type_used: $Enums.rankType
    round_id: number
    _count: Allocation_StatusCountAggregateOutputType | null
    _avg: Allocation_StatusAvgAggregateOutputType | null
    _sum: Allocation_StatusSumAggregateOutputType | null
    _min: Allocation_StatusMinAggregateOutputType | null
    _max: Allocation_StatusMaxAggregateOutputType | null
  }

  type GetAllocation_StatusGroupByPayload<T extends Allocation_StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Allocation_StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Allocation_StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Allocation_StatusGroupByOutputType[P]>
            : GetScalarType<T[P], Allocation_StatusGroupByOutputType[P]>
        }
      >
    >


  export type Allocation_StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    program_id?: boolean
    category_id?: boolean
    rank_value_used?: boolean
    rank_type_used?: boolean
    round_id?: boolean
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allocation_Status"]>

  export type Allocation_StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    program_id?: boolean
    category_id?: boolean
    rank_value_used?: boolean
    rank_type_used?: boolean
    round_id?: boolean
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allocation_Status"]>

  export type Allocation_StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    student_id?: boolean
    program_id?: boolean
    category_id?: boolean
    rank_value_used?: boolean
    rank_type_used?: boolean
    round_id?: boolean
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["allocation_Status"]>

  export type Allocation_StatusSelectScalar = {
    student_id?: boolean
    program_id?: boolean
    category_id?: boolean
    rank_value_used?: boolean
    rank_type_used?: boolean
    round_id?: boolean
  }

  export type Allocation_StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"student_id" | "program_id" | "category_id" | "rank_value_used" | "rank_type_used" | "round_id", ExtArgs["result"]["allocation_Status"]>
  export type Allocation_StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }
  export type Allocation_StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }
  export type Allocation_StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    studentID?: boolean | StudentDefaultArgs<ExtArgs>
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }

  export type $Allocation_StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Allocation_Status"
    objects: {
      studentID: Prisma.$StudentPayload<ExtArgs>
      programID: Prisma.$ProgramPayload<ExtArgs>
      categoryID: Prisma.$CategoryPayload<ExtArgs>
      roundID: Prisma.$RoundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      student_id: number
      program_id: number
      category_id: number
      rank_value_used: bigint
      rank_type_used: $Enums.rankType
      round_id: number
    }, ExtArgs["result"]["allocation_Status"]>
    composites: {}
  }

  type Allocation_StatusGetPayload<S extends boolean | null | undefined | Allocation_StatusDefaultArgs> = $Result.GetResult<Prisma.$Allocation_StatusPayload, S>

  type Allocation_StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Allocation_StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Allocation_StatusCountAggregateInputType | true
    }

  export interface Allocation_StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Allocation_Status'], meta: { name: 'Allocation_Status' } }
    /**
     * Find zero or one Allocation_Status that matches the filter.
     * @param {Allocation_StatusFindUniqueArgs} args - Arguments to find a Allocation_Status
     * @example
     * // Get one Allocation_Status
     * const allocation_Status = await prisma.allocation_Status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Allocation_StatusFindUniqueArgs>(args: SelectSubset<T, Allocation_StatusFindUniqueArgs<ExtArgs>>): Prisma__Allocation_StatusClient<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Allocation_Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Allocation_StatusFindUniqueOrThrowArgs} args - Arguments to find a Allocation_Status
     * @example
     * // Get one Allocation_Status
     * const allocation_Status = await prisma.allocation_Status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Allocation_StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, Allocation_StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Allocation_StatusClient<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allocation_Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allocation_StatusFindFirstArgs} args - Arguments to find a Allocation_Status
     * @example
     * // Get one Allocation_Status
     * const allocation_Status = await prisma.allocation_Status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Allocation_StatusFindFirstArgs>(args?: SelectSubset<T, Allocation_StatusFindFirstArgs<ExtArgs>>): Prisma__Allocation_StatusClient<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Allocation_Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allocation_StatusFindFirstOrThrowArgs} args - Arguments to find a Allocation_Status
     * @example
     * // Get one Allocation_Status
     * const allocation_Status = await prisma.allocation_Status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Allocation_StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, Allocation_StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__Allocation_StatusClient<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Allocation_Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allocation_StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Allocation_Statuses
     * const allocation_Statuses = await prisma.allocation_Status.findMany()
     * 
     * // Get first 10 Allocation_Statuses
     * const allocation_Statuses = await prisma.allocation_Status.findMany({ take: 10 })
     * 
     * // Only select the `student_id`
     * const allocation_StatusWithStudent_idOnly = await prisma.allocation_Status.findMany({ select: { student_id: true } })
     * 
     */
    findMany<T extends Allocation_StatusFindManyArgs>(args?: SelectSubset<T, Allocation_StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Allocation_Status.
     * @param {Allocation_StatusCreateArgs} args - Arguments to create a Allocation_Status.
     * @example
     * // Create one Allocation_Status
     * const Allocation_Status = await prisma.allocation_Status.create({
     *   data: {
     *     // ... data to create a Allocation_Status
     *   }
     * })
     * 
     */
    create<T extends Allocation_StatusCreateArgs>(args: SelectSubset<T, Allocation_StatusCreateArgs<ExtArgs>>): Prisma__Allocation_StatusClient<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Allocation_Statuses.
     * @param {Allocation_StatusCreateManyArgs} args - Arguments to create many Allocation_Statuses.
     * @example
     * // Create many Allocation_Statuses
     * const allocation_Status = await prisma.allocation_Status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Allocation_StatusCreateManyArgs>(args?: SelectSubset<T, Allocation_StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Allocation_Statuses and returns the data saved in the database.
     * @param {Allocation_StatusCreateManyAndReturnArgs} args - Arguments to create many Allocation_Statuses.
     * @example
     * // Create many Allocation_Statuses
     * const allocation_Status = await prisma.allocation_Status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Allocation_Statuses and only return the `student_id`
     * const allocation_StatusWithStudent_idOnly = await prisma.allocation_Status.createManyAndReturn({
     *   select: { student_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Allocation_StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, Allocation_StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Allocation_Status.
     * @param {Allocation_StatusDeleteArgs} args - Arguments to delete one Allocation_Status.
     * @example
     * // Delete one Allocation_Status
     * const Allocation_Status = await prisma.allocation_Status.delete({
     *   where: {
     *     // ... filter to delete one Allocation_Status
     *   }
     * })
     * 
     */
    delete<T extends Allocation_StatusDeleteArgs>(args: SelectSubset<T, Allocation_StatusDeleteArgs<ExtArgs>>): Prisma__Allocation_StatusClient<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Allocation_Status.
     * @param {Allocation_StatusUpdateArgs} args - Arguments to update one Allocation_Status.
     * @example
     * // Update one Allocation_Status
     * const allocation_Status = await prisma.allocation_Status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Allocation_StatusUpdateArgs>(args: SelectSubset<T, Allocation_StatusUpdateArgs<ExtArgs>>): Prisma__Allocation_StatusClient<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Allocation_Statuses.
     * @param {Allocation_StatusDeleteManyArgs} args - Arguments to filter Allocation_Statuses to delete.
     * @example
     * // Delete a few Allocation_Statuses
     * const { count } = await prisma.allocation_Status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Allocation_StatusDeleteManyArgs>(args?: SelectSubset<T, Allocation_StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allocation_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allocation_StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Allocation_Statuses
     * const allocation_Status = await prisma.allocation_Status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Allocation_StatusUpdateManyArgs>(args: SelectSubset<T, Allocation_StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Allocation_Statuses and returns the data updated in the database.
     * @param {Allocation_StatusUpdateManyAndReturnArgs} args - Arguments to update many Allocation_Statuses.
     * @example
     * // Update many Allocation_Statuses
     * const allocation_Status = await prisma.allocation_Status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Allocation_Statuses and only return the `student_id`
     * const allocation_StatusWithStudent_idOnly = await prisma.allocation_Status.updateManyAndReturn({
     *   select: { student_id: true },
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
    updateManyAndReturn<T extends Allocation_StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, Allocation_StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Allocation_Status.
     * @param {Allocation_StatusUpsertArgs} args - Arguments to update or create a Allocation_Status.
     * @example
     * // Update or create a Allocation_Status
     * const allocation_Status = await prisma.allocation_Status.upsert({
     *   create: {
     *     // ... data to create a Allocation_Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Allocation_Status we want to update
     *   }
     * })
     */
    upsert<T extends Allocation_StatusUpsertArgs>(args: SelectSubset<T, Allocation_StatusUpsertArgs<ExtArgs>>): Prisma__Allocation_StatusClient<$Result.GetResult<Prisma.$Allocation_StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Allocation_Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allocation_StatusCountArgs} args - Arguments to filter Allocation_Statuses to count.
     * @example
     * // Count the number of Allocation_Statuses
     * const count = await prisma.allocation_Status.count({
     *   where: {
     *     // ... the filter for the Allocation_Statuses we want to count
     *   }
     * })
    **/
    count<T extends Allocation_StatusCountArgs>(
      args?: Subset<T, Allocation_StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Allocation_StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Allocation_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allocation_StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Allocation_StatusAggregateArgs>(args: Subset<T, Allocation_StatusAggregateArgs>): Prisma.PrismaPromise<GetAllocation_StatusAggregateType<T>>

    /**
     * Group by Allocation_Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Allocation_StatusGroupByArgs} args - Group by arguments.
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
      T extends Allocation_StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Allocation_StatusGroupByArgs['orderBy'] }
        : { orderBy?: Allocation_StatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Allocation_StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAllocation_StatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Allocation_Status model
   */
  readonly fields: Allocation_StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Allocation_Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Allocation_StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    studentID<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    programID<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoryID<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roundID<T extends RoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoundDefaultArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Allocation_Status model
   */
  interface Allocation_StatusFieldRefs {
    readonly student_id: FieldRef<"Allocation_Status", 'Int'>
    readonly program_id: FieldRef<"Allocation_Status", 'Int'>
    readonly category_id: FieldRef<"Allocation_Status", 'Int'>
    readonly rank_value_used: FieldRef<"Allocation_Status", 'BigInt'>
    readonly rank_type_used: FieldRef<"Allocation_Status", 'rankType'>
    readonly round_id: FieldRef<"Allocation_Status", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Allocation_Status findUnique
   */
  export type Allocation_StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Allocation_Status to fetch.
     */
    where: Allocation_StatusWhereUniqueInput
  }

  /**
   * Allocation_Status findUniqueOrThrow
   */
  export type Allocation_StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Allocation_Status to fetch.
     */
    where: Allocation_StatusWhereUniqueInput
  }

  /**
   * Allocation_Status findFirst
   */
  export type Allocation_StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Allocation_Status to fetch.
     */
    where?: Allocation_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allocation_Statuses to fetch.
     */
    orderBy?: Allocation_StatusOrderByWithRelationInput | Allocation_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allocation_Statuses.
     */
    cursor?: Allocation_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allocation_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allocation_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allocation_Statuses.
     */
    distinct?: Allocation_StatusScalarFieldEnum | Allocation_StatusScalarFieldEnum[]
  }

  /**
   * Allocation_Status findFirstOrThrow
   */
  export type Allocation_StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Allocation_Status to fetch.
     */
    where?: Allocation_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allocation_Statuses to fetch.
     */
    orderBy?: Allocation_StatusOrderByWithRelationInput | Allocation_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Allocation_Statuses.
     */
    cursor?: Allocation_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allocation_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allocation_Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Allocation_Statuses.
     */
    distinct?: Allocation_StatusScalarFieldEnum | Allocation_StatusScalarFieldEnum[]
  }

  /**
   * Allocation_Status findMany
   */
  export type Allocation_StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    /**
     * Filter, which Allocation_Statuses to fetch.
     */
    where?: Allocation_StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Allocation_Statuses to fetch.
     */
    orderBy?: Allocation_StatusOrderByWithRelationInput | Allocation_StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Allocation_Statuses.
     */
    cursor?: Allocation_StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Allocation_Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Allocation_Statuses.
     */
    skip?: number
    distinct?: Allocation_StatusScalarFieldEnum | Allocation_StatusScalarFieldEnum[]
  }

  /**
   * Allocation_Status create
   */
  export type Allocation_StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Allocation_Status.
     */
    data: XOR<Allocation_StatusCreateInput, Allocation_StatusUncheckedCreateInput>
  }

  /**
   * Allocation_Status createMany
   */
  export type Allocation_StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Allocation_Statuses.
     */
    data: Allocation_StatusCreateManyInput | Allocation_StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Allocation_Status createManyAndReturn
   */
  export type Allocation_StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Allocation_Statuses.
     */
    data: Allocation_StatusCreateManyInput | Allocation_StatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Allocation_Status update
   */
  export type Allocation_StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Allocation_Status.
     */
    data: XOR<Allocation_StatusUpdateInput, Allocation_StatusUncheckedUpdateInput>
    /**
     * Choose, which Allocation_Status to update.
     */
    where: Allocation_StatusWhereUniqueInput
  }

  /**
   * Allocation_Status updateMany
   */
  export type Allocation_StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Allocation_Statuses.
     */
    data: XOR<Allocation_StatusUpdateManyMutationInput, Allocation_StatusUncheckedUpdateManyInput>
    /**
     * Filter which Allocation_Statuses to update
     */
    where?: Allocation_StatusWhereInput
    /**
     * Limit how many Allocation_Statuses to update.
     */
    limit?: number
  }

  /**
   * Allocation_Status updateManyAndReturn
   */
  export type Allocation_StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * The data used to update Allocation_Statuses.
     */
    data: XOR<Allocation_StatusUpdateManyMutationInput, Allocation_StatusUncheckedUpdateManyInput>
    /**
     * Filter which Allocation_Statuses to update
     */
    where?: Allocation_StatusWhereInput
    /**
     * Limit how many Allocation_Statuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Allocation_Status upsert
   */
  export type Allocation_StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Allocation_Status to update in case it exists.
     */
    where: Allocation_StatusWhereUniqueInput
    /**
     * In case the Allocation_Status found by the `where` argument doesn't exist, create a new Allocation_Status with this data.
     */
    create: XOR<Allocation_StatusCreateInput, Allocation_StatusUncheckedCreateInput>
    /**
     * In case the Allocation_Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Allocation_StatusUpdateInput, Allocation_StatusUncheckedUpdateInput>
  }

  /**
   * Allocation_Status delete
   */
  export type Allocation_StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
    /**
     * Filter which Allocation_Status to delete.
     */
    where: Allocation_StatusWhereUniqueInput
  }

  /**
   * Allocation_Status deleteMany
   */
  export type Allocation_StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Allocation_Statuses to delete
     */
    where?: Allocation_StatusWhereInput
    /**
     * Limit how many Allocation_Statuses to delete.
     */
    limit?: number
  }

  /**
   * Allocation_Status without action
   */
  export type Allocation_StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Allocation_Status
     */
    select?: Allocation_StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Allocation_Status
     */
    omit?: Allocation_StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Allocation_StatusInclude<ExtArgs> | null
  }


  /**
   * Model CutOff_ranks
   */

  export type AggregateCutOff_ranks = {
    _count: CutOff_ranksCountAggregateOutputType | null
    _avg: CutOff_ranksAvgAggregateOutputType | null
    _sum: CutOff_ranksSumAggregateOutputType | null
    _min: CutOff_ranksMinAggregateOutputType | null
    _max: CutOff_ranksMaxAggregateOutputType | null
  }

  export type CutOff_ranksAvgAggregateOutputType = {
    cutOff_id: number | null
    program_id: number | null
    category_id: number | null
    closing_rank: number | null
    opening_rank: number | null
    round_id: number | null
  }

  export type CutOff_ranksSumAggregateOutputType = {
    cutOff_id: number | null
    program_id: number | null
    category_id: number | null
    closing_rank: bigint | null
    opening_rank: bigint | null
    round_id: number | null
  }

  export type CutOff_ranksMinAggregateOutputType = {
    cutOff_id: number | null
    program_id: number | null
    category_id: number | null
    closing_rank: bigint | null
    opening_rank: bigint | null
    round_id: number | null
  }

  export type CutOff_ranksMaxAggregateOutputType = {
    cutOff_id: number | null
    program_id: number | null
    category_id: number | null
    closing_rank: bigint | null
    opening_rank: bigint | null
    round_id: number | null
  }

  export type CutOff_ranksCountAggregateOutputType = {
    cutOff_id: number
    program_id: number
    category_id: number
    closing_rank: number
    opening_rank: number
    round_id: number
    _all: number
  }


  export type CutOff_ranksAvgAggregateInputType = {
    cutOff_id?: true
    program_id?: true
    category_id?: true
    closing_rank?: true
    opening_rank?: true
    round_id?: true
  }

  export type CutOff_ranksSumAggregateInputType = {
    cutOff_id?: true
    program_id?: true
    category_id?: true
    closing_rank?: true
    opening_rank?: true
    round_id?: true
  }

  export type CutOff_ranksMinAggregateInputType = {
    cutOff_id?: true
    program_id?: true
    category_id?: true
    closing_rank?: true
    opening_rank?: true
    round_id?: true
  }

  export type CutOff_ranksMaxAggregateInputType = {
    cutOff_id?: true
    program_id?: true
    category_id?: true
    closing_rank?: true
    opening_rank?: true
    round_id?: true
  }

  export type CutOff_ranksCountAggregateInputType = {
    cutOff_id?: true
    program_id?: true
    category_id?: true
    closing_rank?: true
    opening_rank?: true
    round_id?: true
    _all?: true
  }

  export type CutOff_ranksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CutOff_ranks to aggregate.
     */
    where?: CutOff_ranksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CutOff_ranks to fetch.
     */
    orderBy?: CutOff_ranksOrderByWithRelationInput | CutOff_ranksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CutOff_ranksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CutOff_ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CutOff_ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CutOff_ranks
    **/
    _count?: true | CutOff_ranksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CutOff_ranksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CutOff_ranksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CutOff_ranksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CutOff_ranksMaxAggregateInputType
  }

  export type GetCutOff_ranksAggregateType<T extends CutOff_ranksAggregateArgs> = {
        [P in keyof T & keyof AggregateCutOff_ranks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCutOff_ranks[P]>
      : GetScalarType<T[P], AggregateCutOff_ranks[P]>
  }




  export type CutOff_ranksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CutOff_ranksWhereInput
    orderBy?: CutOff_ranksOrderByWithAggregationInput | CutOff_ranksOrderByWithAggregationInput[]
    by: CutOff_ranksScalarFieldEnum[] | CutOff_ranksScalarFieldEnum
    having?: CutOff_ranksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CutOff_ranksCountAggregateInputType | true
    _avg?: CutOff_ranksAvgAggregateInputType
    _sum?: CutOff_ranksSumAggregateInputType
    _min?: CutOff_ranksMinAggregateInputType
    _max?: CutOff_ranksMaxAggregateInputType
  }

  export type CutOff_ranksGroupByOutputType = {
    cutOff_id: number
    program_id: number
    category_id: number
    closing_rank: bigint
    opening_rank: bigint
    round_id: number
    _count: CutOff_ranksCountAggregateOutputType | null
    _avg: CutOff_ranksAvgAggregateOutputType | null
    _sum: CutOff_ranksSumAggregateOutputType | null
    _min: CutOff_ranksMinAggregateOutputType | null
    _max: CutOff_ranksMaxAggregateOutputType | null
  }

  type GetCutOff_ranksGroupByPayload<T extends CutOff_ranksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CutOff_ranksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CutOff_ranksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CutOff_ranksGroupByOutputType[P]>
            : GetScalarType<T[P], CutOff_ranksGroupByOutputType[P]>
        }
      >
    >


  export type CutOff_ranksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cutOff_id?: boolean
    program_id?: boolean
    category_id?: boolean
    closing_rank?: boolean
    opening_rank?: boolean
    round_id?: boolean
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cutOff_ranks"]>

  export type CutOff_ranksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cutOff_id?: boolean
    program_id?: boolean
    category_id?: boolean
    closing_rank?: boolean
    opening_rank?: boolean
    round_id?: boolean
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cutOff_ranks"]>

  export type CutOff_ranksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cutOff_id?: boolean
    program_id?: boolean
    category_id?: boolean
    closing_rank?: boolean
    opening_rank?: boolean
    round_id?: boolean
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cutOff_ranks"]>

  export type CutOff_ranksSelectScalar = {
    cutOff_id?: boolean
    program_id?: boolean
    category_id?: boolean
    closing_rank?: boolean
    opening_rank?: boolean
    round_id?: boolean
  }

  export type CutOff_ranksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cutOff_id" | "program_id" | "category_id" | "closing_rank" | "opening_rank" | "round_id", ExtArgs["result"]["cutOff_ranks"]>
  export type CutOff_ranksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }
  export type CutOff_ranksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }
  export type CutOff_ranksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    programID?: boolean | ProgramDefaultArgs<ExtArgs>
    categoryID?: boolean | CategoryDefaultArgs<ExtArgs>
    roundID?: boolean | RoundDefaultArgs<ExtArgs>
  }

  export type $CutOff_ranksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CutOff_ranks"
    objects: {
      programID: Prisma.$ProgramPayload<ExtArgs>
      categoryID: Prisma.$CategoryPayload<ExtArgs>
      roundID: Prisma.$RoundPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      cutOff_id: number
      program_id: number
      category_id: number
      closing_rank: bigint
      opening_rank: bigint
      round_id: number
    }, ExtArgs["result"]["cutOff_ranks"]>
    composites: {}
  }

  type CutOff_ranksGetPayload<S extends boolean | null | undefined | CutOff_ranksDefaultArgs> = $Result.GetResult<Prisma.$CutOff_ranksPayload, S>

  type CutOff_ranksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CutOff_ranksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CutOff_ranksCountAggregateInputType | true
    }

  export interface CutOff_ranksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CutOff_ranks'], meta: { name: 'CutOff_ranks' } }
    /**
     * Find zero or one CutOff_ranks that matches the filter.
     * @param {CutOff_ranksFindUniqueArgs} args - Arguments to find a CutOff_ranks
     * @example
     * // Get one CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CutOff_ranksFindUniqueArgs>(args: SelectSubset<T, CutOff_ranksFindUniqueArgs<ExtArgs>>): Prisma__CutOff_ranksClient<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CutOff_ranks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CutOff_ranksFindUniqueOrThrowArgs} args - Arguments to find a CutOff_ranks
     * @example
     * // Get one CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CutOff_ranksFindUniqueOrThrowArgs>(args: SelectSubset<T, CutOff_ranksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CutOff_ranksClient<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CutOff_ranks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CutOff_ranksFindFirstArgs} args - Arguments to find a CutOff_ranks
     * @example
     * // Get one CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CutOff_ranksFindFirstArgs>(args?: SelectSubset<T, CutOff_ranksFindFirstArgs<ExtArgs>>): Prisma__CutOff_ranksClient<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CutOff_ranks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CutOff_ranksFindFirstOrThrowArgs} args - Arguments to find a CutOff_ranks
     * @example
     * // Get one CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CutOff_ranksFindFirstOrThrowArgs>(args?: SelectSubset<T, CutOff_ranksFindFirstOrThrowArgs<ExtArgs>>): Prisma__CutOff_ranksClient<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CutOff_ranks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CutOff_ranksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.findMany()
     * 
     * // Get first 10 CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.findMany({ take: 10 })
     * 
     * // Only select the `cutOff_id`
     * const cutOff_ranksWithCutOff_idOnly = await prisma.cutOff_ranks.findMany({ select: { cutOff_id: true } })
     * 
     */
    findMany<T extends CutOff_ranksFindManyArgs>(args?: SelectSubset<T, CutOff_ranksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CutOff_ranks.
     * @param {CutOff_ranksCreateArgs} args - Arguments to create a CutOff_ranks.
     * @example
     * // Create one CutOff_ranks
     * const CutOff_ranks = await prisma.cutOff_ranks.create({
     *   data: {
     *     // ... data to create a CutOff_ranks
     *   }
     * })
     * 
     */
    create<T extends CutOff_ranksCreateArgs>(args: SelectSubset<T, CutOff_ranksCreateArgs<ExtArgs>>): Prisma__CutOff_ranksClient<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CutOff_ranks.
     * @param {CutOff_ranksCreateManyArgs} args - Arguments to create many CutOff_ranks.
     * @example
     * // Create many CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CutOff_ranksCreateManyArgs>(args?: SelectSubset<T, CutOff_ranksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CutOff_ranks and returns the data saved in the database.
     * @param {CutOff_ranksCreateManyAndReturnArgs} args - Arguments to create many CutOff_ranks.
     * @example
     * // Create many CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CutOff_ranks and only return the `cutOff_id`
     * const cutOff_ranksWithCutOff_idOnly = await prisma.cutOff_ranks.createManyAndReturn({
     *   select: { cutOff_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CutOff_ranksCreateManyAndReturnArgs>(args?: SelectSubset<T, CutOff_ranksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CutOff_ranks.
     * @param {CutOff_ranksDeleteArgs} args - Arguments to delete one CutOff_ranks.
     * @example
     * // Delete one CutOff_ranks
     * const CutOff_ranks = await prisma.cutOff_ranks.delete({
     *   where: {
     *     // ... filter to delete one CutOff_ranks
     *   }
     * })
     * 
     */
    delete<T extends CutOff_ranksDeleteArgs>(args: SelectSubset<T, CutOff_ranksDeleteArgs<ExtArgs>>): Prisma__CutOff_ranksClient<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CutOff_ranks.
     * @param {CutOff_ranksUpdateArgs} args - Arguments to update one CutOff_ranks.
     * @example
     * // Update one CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CutOff_ranksUpdateArgs>(args: SelectSubset<T, CutOff_ranksUpdateArgs<ExtArgs>>): Prisma__CutOff_ranksClient<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CutOff_ranks.
     * @param {CutOff_ranksDeleteManyArgs} args - Arguments to filter CutOff_ranks to delete.
     * @example
     * // Delete a few CutOff_ranks
     * const { count } = await prisma.cutOff_ranks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CutOff_ranksDeleteManyArgs>(args?: SelectSubset<T, CutOff_ranksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CutOff_ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CutOff_ranksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CutOff_ranksUpdateManyArgs>(args: SelectSubset<T, CutOff_ranksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CutOff_ranks and returns the data updated in the database.
     * @param {CutOff_ranksUpdateManyAndReturnArgs} args - Arguments to update many CutOff_ranks.
     * @example
     * // Update many CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CutOff_ranks and only return the `cutOff_id`
     * const cutOff_ranksWithCutOff_idOnly = await prisma.cutOff_ranks.updateManyAndReturn({
     *   select: { cutOff_id: true },
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
    updateManyAndReturn<T extends CutOff_ranksUpdateManyAndReturnArgs>(args: SelectSubset<T, CutOff_ranksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CutOff_ranks.
     * @param {CutOff_ranksUpsertArgs} args - Arguments to update or create a CutOff_ranks.
     * @example
     * // Update or create a CutOff_ranks
     * const cutOff_ranks = await prisma.cutOff_ranks.upsert({
     *   create: {
     *     // ... data to create a CutOff_ranks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CutOff_ranks we want to update
     *   }
     * })
     */
    upsert<T extends CutOff_ranksUpsertArgs>(args: SelectSubset<T, CutOff_ranksUpsertArgs<ExtArgs>>): Prisma__CutOff_ranksClient<$Result.GetResult<Prisma.$CutOff_ranksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CutOff_ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CutOff_ranksCountArgs} args - Arguments to filter CutOff_ranks to count.
     * @example
     * // Count the number of CutOff_ranks
     * const count = await prisma.cutOff_ranks.count({
     *   where: {
     *     // ... the filter for the CutOff_ranks we want to count
     *   }
     * })
    **/
    count<T extends CutOff_ranksCountArgs>(
      args?: Subset<T, CutOff_ranksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CutOff_ranksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CutOff_ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CutOff_ranksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CutOff_ranksAggregateArgs>(args: Subset<T, CutOff_ranksAggregateArgs>): Prisma.PrismaPromise<GetCutOff_ranksAggregateType<T>>

    /**
     * Group by CutOff_ranks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CutOff_ranksGroupByArgs} args - Group by arguments.
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
      T extends CutOff_ranksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CutOff_ranksGroupByArgs['orderBy'] }
        : { orderBy?: CutOff_ranksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CutOff_ranksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCutOff_ranksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CutOff_ranks model
   */
  readonly fields: CutOff_ranksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CutOff_ranks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CutOff_ranksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    programID<T extends ProgramDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProgramDefaultArgs<ExtArgs>>): Prisma__ProgramClient<$Result.GetResult<Prisma.$ProgramPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categoryID<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    roundID<T extends RoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoundDefaultArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CutOff_ranks model
   */
  interface CutOff_ranksFieldRefs {
    readonly cutOff_id: FieldRef<"CutOff_ranks", 'Int'>
    readonly program_id: FieldRef<"CutOff_ranks", 'Int'>
    readonly category_id: FieldRef<"CutOff_ranks", 'Int'>
    readonly closing_rank: FieldRef<"CutOff_ranks", 'BigInt'>
    readonly opening_rank: FieldRef<"CutOff_ranks", 'BigInt'>
    readonly round_id: FieldRef<"CutOff_ranks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CutOff_ranks findUnique
   */
  export type CutOff_ranksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    /**
     * Filter, which CutOff_ranks to fetch.
     */
    where: CutOff_ranksWhereUniqueInput
  }

  /**
   * CutOff_ranks findUniqueOrThrow
   */
  export type CutOff_ranksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    /**
     * Filter, which CutOff_ranks to fetch.
     */
    where: CutOff_ranksWhereUniqueInput
  }

  /**
   * CutOff_ranks findFirst
   */
  export type CutOff_ranksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    /**
     * Filter, which CutOff_ranks to fetch.
     */
    where?: CutOff_ranksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CutOff_ranks to fetch.
     */
    orderBy?: CutOff_ranksOrderByWithRelationInput | CutOff_ranksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CutOff_ranks.
     */
    cursor?: CutOff_ranksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CutOff_ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CutOff_ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CutOff_ranks.
     */
    distinct?: CutOff_ranksScalarFieldEnum | CutOff_ranksScalarFieldEnum[]
  }

  /**
   * CutOff_ranks findFirstOrThrow
   */
  export type CutOff_ranksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    /**
     * Filter, which CutOff_ranks to fetch.
     */
    where?: CutOff_ranksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CutOff_ranks to fetch.
     */
    orderBy?: CutOff_ranksOrderByWithRelationInput | CutOff_ranksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CutOff_ranks.
     */
    cursor?: CutOff_ranksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CutOff_ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CutOff_ranks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CutOff_ranks.
     */
    distinct?: CutOff_ranksScalarFieldEnum | CutOff_ranksScalarFieldEnum[]
  }

  /**
   * CutOff_ranks findMany
   */
  export type CutOff_ranksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    /**
     * Filter, which CutOff_ranks to fetch.
     */
    where?: CutOff_ranksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CutOff_ranks to fetch.
     */
    orderBy?: CutOff_ranksOrderByWithRelationInput | CutOff_ranksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CutOff_ranks.
     */
    cursor?: CutOff_ranksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CutOff_ranks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CutOff_ranks.
     */
    skip?: number
    distinct?: CutOff_ranksScalarFieldEnum | CutOff_ranksScalarFieldEnum[]
  }

  /**
   * CutOff_ranks create
   */
  export type CutOff_ranksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    /**
     * The data needed to create a CutOff_ranks.
     */
    data: XOR<CutOff_ranksCreateInput, CutOff_ranksUncheckedCreateInput>
  }

  /**
   * CutOff_ranks createMany
   */
  export type CutOff_ranksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CutOff_ranks.
     */
    data: CutOff_ranksCreateManyInput | CutOff_ranksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CutOff_ranks createManyAndReturn
   */
  export type CutOff_ranksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * The data used to create many CutOff_ranks.
     */
    data: CutOff_ranksCreateManyInput | CutOff_ranksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CutOff_ranks update
   */
  export type CutOff_ranksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    /**
     * The data needed to update a CutOff_ranks.
     */
    data: XOR<CutOff_ranksUpdateInput, CutOff_ranksUncheckedUpdateInput>
    /**
     * Choose, which CutOff_ranks to update.
     */
    where: CutOff_ranksWhereUniqueInput
  }

  /**
   * CutOff_ranks updateMany
   */
  export type CutOff_ranksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CutOff_ranks.
     */
    data: XOR<CutOff_ranksUpdateManyMutationInput, CutOff_ranksUncheckedUpdateManyInput>
    /**
     * Filter which CutOff_ranks to update
     */
    where?: CutOff_ranksWhereInput
    /**
     * Limit how many CutOff_ranks to update.
     */
    limit?: number
  }

  /**
   * CutOff_ranks updateManyAndReturn
   */
  export type CutOff_ranksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * The data used to update CutOff_ranks.
     */
    data: XOR<CutOff_ranksUpdateManyMutationInput, CutOff_ranksUncheckedUpdateManyInput>
    /**
     * Filter which CutOff_ranks to update
     */
    where?: CutOff_ranksWhereInput
    /**
     * Limit how many CutOff_ranks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CutOff_ranks upsert
   */
  export type CutOff_ranksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    /**
     * The filter to search for the CutOff_ranks to update in case it exists.
     */
    where: CutOff_ranksWhereUniqueInput
    /**
     * In case the CutOff_ranks found by the `where` argument doesn't exist, create a new CutOff_ranks with this data.
     */
    create: XOR<CutOff_ranksCreateInput, CutOff_ranksUncheckedCreateInput>
    /**
     * In case the CutOff_ranks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CutOff_ranksUpdateInput, CutOff_ranksUncheckedUpdateInput>
  }

  /**
   * CutOff_ranks delete
   */
  export type CutOff_ranksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
    /**
     * Filter which CutOff_ranks to delete.
     */
    where: CutOff_ranksWhereUniqueInput
  }

  /**
   * CutOff_ranks deleteMany
   */
  export type CutOff_ranksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CutOff_ranks to delete
     */
    where?: CutOff_ranksWhereInput
    /**
     * Limit how many CutOff_ranks to delete.
     */
    limit?: number
  }

  /**
   * CutOff_ranks without action
   */
  export type CutOff_ranksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CutOff_ranks
     */
    select?: CutOff_ranksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CutOff_ranks
     */
    omit?: CutOff_ranksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CutOff_ranksInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CollegeScalarFieldEnum: {
    college_id: 'college_id',
    college_name: 'college_name',
    city: 'city',
    state: 'state',
    pincode: 'pincode'
  };

  export type CollegeScalarFieldEnum = (typeof CollegeScalarFieldEnum)[keyof typeof CollegeScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    department_id: 'department_id',
    department_name: 'department_name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const ProgramScalarFieldEnum: {
    program_id: 'program_id',
    department_id: 'department_id',
    college_id: 'college_id',
    duration: 'duration'
  };

  export type ProgramScalarFieldEnum = (typeof ProgramScalarFieldEnum)[keyof typeof ProgramScalarFieldEnum]


  export const Seat_MatrixScalarFieldEnum: {
    program_id: 'program_id',
    category_id: 'category_id',
    total_seats: 'total_seats'
  };

  export type Seat_MatrixScalarFieldEnum = (typeof Seat_MatrixScalarFieldEnum)[keyof typeof Seat_MatrixScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    admin_id: 'admin_id',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const StudentScalarFieldEnum: {
    student_id: 'student_id',
    name: 'name',
    email: 'email',
    password: 'password',
    mobile_number: 'mobile_number',
    gender: 'gender',
    current_status: 'current_status',
    isRegistered: 'isRegistered',
    general_rank: 'general_rank',
    category_rank: 'category_rank',
    category_id: 'category_id'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const PreferencesScalarFieldEnum: {
    student_id: 'student_id',
    preference_number: 'preference_number',
    created_at: 'created_at',
    program_id: 'program_id'
  };

  export type PreferencesScalarFieldEnum = (typeof PreferencesScalarFieldEnum)[keyof typeof PreferencesScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    round_number: 'round_number',
    start_time: 'start_time',
    end_time: 'end_time',
    duration: 'duration'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


  export const Allocation_StatusScalarFieldEnum: {
    student_id: 'student_id',
    program_id: 'program_id',
    category_id: 'category_id',
    rank_value_used: 'rank_value_used',
    rank_type_used: 'rank_type_used',
    round_id: 'round_id'
  };

  export type Allocation_StatusScalarFieldEnum = (typeof Allocation_StatusScalarFieldEnum)[keyof typeof Allocation_StatusScalarFieldEnum]


  export const CutOff_ranksScalarFieldEnum: {
    cutOff_id: 'cutOff_id',
    program_id: 'program_id',
    category_id: 'category_id',
    closing_rank: 'closing_rank',
    opening_rank: 'opening_rank',
    round_id: 'round_id'
  };

  export type CutOff_ranksScalarFieldEnum = (typeof CutOff_ranksScalarFieldEnum)[keyof typeof CutOff_ranksScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'gender'
   */
  export type EnumgenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender'>
    


  /**
   * Reference to a field of type 'gender[]'
   */
  export type ListEnumgenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'gender[]'>
    


  /**
   * Reference to a field of type 'status'
   */
  export type EnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status'>
    


  /**
   * Reference to a field of type 'status[]'
   */
  export type ListEnumstatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'status[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'rankType'
   */
  export type EnumrankTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rankType'>
    


  /**
   * Reference to a field of type 'rankType[]'
   */
  export type ListEnumrankTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'rankType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category_id?: IntFilter<"Category"> | number
    category_name?: StringFilter<"Category"> | string
    Seat_Matrix?: Seat_MatrixListRelationFilter
    Student?: StudentListRelationFilter
    Allocation_Status?: Allocation_StatusListRelationFilter
    CutOff_ranks?: CutOff_ranksListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    Seat_Matrix?: Seat_MatrixOrderByRelationAggregateInput
    Student?: StudentOrderByRelationAggregateInput
    Allocation_Status?: Allocation_StatusOrderByRelationAggregateInput
    CutOff_ranks?: CutOff_ranksOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category_name?: StringFilter<"Category"> | string
    Seat_Matrix?: Seat_MatrixListRelationFilter
    Student?: StudentListRelationFilter
    Allocation_Status?: Allocation_StatusListRelationFilter
    CutOff_ranks?: CutOff_ranksListRelationFilter
  }, "category_id">

  export type CategoryOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"Category"> | number
    category_name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type CollegeWhereInput = {
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    college_id?: IntFilter<"College"> | number
    college_name?: StringFilter<"College"> | string
    city?: StringFilter<"College"> | string
    state?: StringFilter<"College"> | string
    pincode?: StringFilter<"College"> | string
    Program?: ProgramListRelationFilter
  }

  export type CollegeOrderByWithRelationInput = {
    college_id?: SortOrder
    college_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    Program?: ProgramOrderByRelationAggregateInput
  }

  export type CollegeWhereUniqueInput = Prisma.AtLeast<{
    college_id?: number
    AND?: CollegeWhereInput | CollegeWhereInput[]
    OR?: CollegeWhereInput[]
    NOT?: CollegeWhereInput | CollegeWhereInput[]
    college_name?: StringFilter<"College"> | string
    city?: StringFilter<"College"> | string
    state?: StringFilter<"College"> | string
    pincode?: StringFilter<"College"> | string
    Program?: ProgramListRelationFilter
  }, "college_id">

  export type CollegeOrderByWithAggregationInput = {
    college_id?: SortOrder
    college_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    _count?: CollegeCountOrderByAggregateInput
    _avg?: CollegeAvgOrderByAggregateInput
    _max?: CollegeMaxOrderByAggregateInput
    _min?: CollegeMinOrderByAggregateInput
    _sum?: CollegeSumOrderByAggregateInput
  }

  export type CollegeScalarWhereWithAggregatesInput = {
    AND?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    OR?: CollegeScalarWhereWithAggregatesInput[]
    NOT?: CollegeScalarWhereWithAggregatesInput | CollegeScalarWhereWithAggregatesInput[]
    college_id?: IntWithAggregatesFilter<"College"> | number
    college_name?: StringWithAggregatesFilter<"College"> | string
    city?: StringWithAggregatesFilter<"College"> | string
    state?: StringWithAggregatesFilter<"College"> | string
    pincode?: StringWithAggregatesFilter<"College"> | string
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    department_id?: IntFilter<"Department"> | number
    department_name?: StringFilter<"Department"> | string
    Program?: ProgramListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    department_id?: SortOrder
    department_name?: SortOrder
    Program?: ProgramOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    department_id?: number
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    department_name?: StringFilter<"Department"> | string
    Program?: ProgramListRelationFilter
  }, "department_id">

  export type DepartmentOrderByWithAggregationInput = {
    department_id?: SortOrder
    department_name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _avg?: DepartmentAvgOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
    _sum?: DepartmentSumOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    department_id?: IntWithAggregatesFilter<"Department"> | number
    department_name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type ProgramWhereInput = {
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    program_id?: IntFilter<"Program"> | number
    department_id?: IntFilter<"Program"> | number
    college_id?: IntFilter<"Program"> | number
    duration?: StringFilter<"Program"> | string
    deptID?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    collegeID?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    Seat_Matrix?: Seat_MatrixListRelationFilter
    Preferences?: PreferencesListRelationFilter
    Allocation_Status?: Allocation_StatusListRelationFilter
    CutOff_ranks?: CutOff_ranksListRelationFilter
  }

  export type ProgramOrderByWithRelationInput = {
    program_id?: SortOrder
    department_id?: SortOrder
    college_id?: SortOrder
    duration?: SortOrder
    deptID?: DepartmentOrderByWithRelationInput
    collegeID?: CollegeOrderByWithRelationInput
    Seat_Matrix?: Seat_MatrixOrderByRelationAggregateInput
    Preferences?: PreferencesOrderByRelationAggregateInput
    Allocation_Status?: Allocation_StatusOrderByRelationAggregateInput
    CutOff_ranks?: CutOff_ranksOrderByRelationAggregateInput
  }

  export type ProgramWhereUniqueInput = Prisma.AtLeast<{
    program_id?: number
    AND?: ProgramWhereInput | ProgramWhereInput[]
    OR?: ProgramWhereInput[]
    NOT?: ProgramWhereInput | ProgramWhereInput[]
    department_id?: IntFilter<"Program"> | number
    college_id?: IntFilter<"Program"> | number
    duration?: StringFilter<"Program"> | string
    deptID?: XOR<DepartmentScalarRelationFilter, DepartmentWhereInput>
    collegeID?: XOR<CollegeScalarRelationFilter, CollegeWhereInput>
    Seat_Matrix?: Seat_MatrixListRelationFilter
    Preferences?: PreferencesListRelationFilter
    Allocation_Status?: Allocation_StatusListRelationFilter
    CutOff_ranks?: CutOff_ranksListRelationFilter
  }, "program_id">

  export type ProgramOrderByWithAggregationInput = {
    program_id?: SortOrder
    department_id?: SortOrder
    college_id?: SortOrder
    duration?: SortOrder
    _count?: ProgramCountOrderByAggregateInput
    _avg?: ProgramAvgOrderByAggregateInput
    _max?: ProgramMaxOrderByAggregateInput
    _min?: ProgramMinOrderByAggregateInput
    _sum?: ProgramSumOrderByAggregateInput
  }

  export type ProgramScalarWhereWithAggregatesInput = {
    AND?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    OR?: ProgramScalarWhereWithAggregatesInput[]
    NOT?: ProgramScalarWhereWithAggregatesInput | ProgramScalarWhereWithAggregatesInput[]
    program_id?: IntWithAggregatesFilter<"Program"> | number
    department_id?: IntWithAggregatesFilter<"Program"> | number
    college_id?: IntWithAggregatesFilter<"Program"> | number
    duration?: StringWithAggregatesFilter<"Program"> | string
  }

  export type Seat_MatrixWhereInput = {
    AND?: Seat_MatrixWhereInput | Seat_MatrixWhereInput[]
    OR?: Seat_MatrixWhereInput[]
    NOT?: Seat_MatrixWhereInput | Seat_MatrixWhereInput[]
    program_id?: IntFilter<"Seat_Matrix"> | number
    category_id?: IntFilter<"Seat_Matrix"> | number
    total_seats?: IntFilter<"Seat_Matrix"> | number
    progID?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    categoryID?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type Seat_MatrixOrderByWithRelationInput = {
    program_id?: SortOrder
    category_id?: SortOrder
    total_seats?: SortOrder
    progID?: ProgramOrderByWithRelationInput
    categoryID?: CategoryOrderByWithRelationInput
  }

  export type Seat_MatrixWhereUniqueInput = Prisma.AtLeast<{
    program_id_category_id?: Seat_MatrixProgram_idCategory_idCompoundUniqueInput
    AND?: Seat_MatrixWhereInput | Seat_MatrixWhereInput[]
    OR?: Seat_MatrixWhereInput[]
    NOT?: Seat_MatrixWhereInput | Seat_MatrixWhereInput[]
    program_id?: IntFilter<"Seat_Matrix"> | number
    category_id?: IntFilter<"Seat_Matrix"> | number
    total_seats?: IntFilter<"Seat_Matrix"> | number
    progID?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    categoryID?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "program_id_category_id">

  export type Seat_MatrixOrderByWithAggregationInput = {
    program_id?: SortOrder
    category_id?: SortOrder
    total_seats?: SortOrder
    _count?: Seat_MatrixCountOrderByAggregateInput
    _avg?: Seat_MatrixAvgOrderByAggregateInput
    _max?: Seat_MatrixMaxOrderByAggregateInput
    _min?: Seat_MatrixMinOrderByAggregateInput
    _sum?: Seat_MatrixSumOrderByAggregateInput
  }

  export type Seat_MatrixScalarWhereWithAggregatesInput = {
    AND?: Seat_MatrixScalarWhereWithAggregatesInput | Seat_MatrixScalarWhereWithAggregatesInput[]
    OR?: Seat_MatrixScalarWhereWithAggregatesInput[]
    NOT?: Seat_MatrixScalarWhereWithAggregatesInput | Seat_MatrixScalarWhereWithAggregatesInput[]
    program_id?: IntWithAggregatesFilter<"Seat_Matrix"> | number
    category_id?: IntWithAggregatesFilter<"Seat_Matrix"> | number
    total_seats?: IntWithAggregatesFilter<"Seat_Matrix"> | number
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    admin_id?: IntFilter<"Admin"> | number
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }

  export type AdminOrderByWithRelationInput = {
    admin_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    admin_id?: number
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
  }, "admin_id">

  export type AdminOrderByWithAggregationInput = {
    admin_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    admin_id?: IntWithAggregatesFilter<"Admin"> | number
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    student_id?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    mobile_number?: StringFilter<"Student"> | string
    gender?: EnumgenderFilter<"Student"> | $Enums.gender
    current_status?: EnumstatusFilter<"Student"> | $Enums.status
    isRegistered?: BoolFilter<"Student"> | boolean
    general_rank?: BigIntFilter<"Student"> | bigint | number
    category_rank?: BigIntFilter<"Student"> | bigint | number
    category_id?: IntFilter<"Student"> | number
    categoryID?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Preferences?: PreferencesListRelationFilter
    Allocation_Status?: Allocation_StatusListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile_number?: SortOrder
    gender?: SortOrder
    current_status?: SortOrder
    isRegistered?: SortOrder
    general_rank?: SortOrder
    category_rank?: SortOrder
    category_id?: SortOrder
    categoryID?: CategoryOrderByWithRelationInput
    Preferences?: PreferencesOrderByRelationAggregateInput
    Allocation_Status?: Allocation_StatusOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    student_id?: number
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    mobile_number?: StringFilter<"Student"> | string
    gender?: EnumgenderFilter<"Student"> | $Enums.gender
    current_status?: EnumstatusFilter<"Student"> | $Enums.status
    isRegistered?: BoolFilter<"Student"> | boolean
    general_rank?: BigIntFilter<"Student"> | bigint | number
    category_rank?: BigIntFilter<"Student"> | bigint | number
    category_id?: IntFilter<"Student"> | number
    categoryID?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Preferences?: PreferencesListRelationFilter
    Allocation_Status?: Allocation_StatusListRelationFilter
  }, "student_id">

  export type StudentOrderByWithAggregationInput = {
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile_number?: SortOrder
    gender?: SortOrder
    current_status?: SortOrder
    isRegistered?: SortOrder
    general_rank?: SortOrder
    category_rank?: SortOrder
    category_id?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"Student"> | number
    name?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    mobile_number?: StringWithAggregatesFilter<"Student"> | string
    gender?: EnumgenderWithAggregatesFilter<"Student"> | $Enums.gender
    current_status?: EnumstatusWithAggregatesFilter<"Student"> | $Enums.status
    isRegistered?: BoolWithAggregatesFilter<"Student"> | boolean
    general_rank?: BigIntWithAggregatesFilter<"Student"> | bigint | number
    category_rank?: BigIntWithAggregatesFilter<"Student"> | bigint | number
    category_id?: IntWithAggregatesFilter<"Student"> | number
  }

  export type PreferencesWhereInput = {
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    student_id?: IntFilter<"Preferences"> | number
    preference_number?: IntFilter<"Preferences"> | number
    created_at?: DateTimeFilter<"Preferences"> | Date | string
    program_id?: IntFilter<"Preferences"> | number
    studentID?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    programID?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }

  export type PreferencesOrderByWithRelationInput = {
    student_id?: SortOrder
    preference_number?: SortOrder
    created_at?: SortOrder
    program_id?: SortOrder
    studentID?: StudentOrderByWithRelationInput
    programID?: ProgramOrderByWithRelationInput
  }

  export type PreferencesWhereUniqueInput = Prisma.AtLeast<{
    student_id_program_id?: PreferencesStudent_idProgram_idCompoundUniqueInput
    AND?: PreferencesWhereInput | PreferencesWhereInput[]
    OR?: PreferencesWhereInput[]
    NOT?: PreferencesWhereInput | PreferencesWhereInput[]
    student_id?: IntFilter<"Preferences"> | number
    preference_number?: IntFilter<"Preferences"> | number
    created_at?: DateTimeFilter<"Preferences"> | Date | string
    program_id?: IntFilter<"Preferences"> | number
    studentID?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    programID?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
  }, "student_id_program_id">

  export type PreferencesOrderByWithAggregationInput = {
    student_id?: SortOrder
    preference_number?: SortOrder
    created_at?: SortOrder
    program_id?: SortOrder
    _count?: PreferencesCountOrderByAggregateInput
    _avg?: PreferencesAvgOrderByAggregateInput
    _max?: PreferencesMaxOrderByAggregateInput
    _min?: PreferencesMinOrderByAggregateInput
    _sum?: PreferencesSumOrderByAggregateInput
  }

  export type PreferencesScalarWhereWithAggregatesInput = {
    AND?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    OR?: PreferencesScalarWhereWithAggregatesInput[]
    NOT?: PreferencesScalarWhereWithAggregatesInput | PreferencesScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"Preferences"> | number
    preference_number?: IntWithAggregatesFilter<"Preferences"> | number
    created_at?: DateTimeWithAggregatesFilter<"Preferences"> | Date | string
    program_id?: IntWithAggregatesFilter<"Preferences"> | number
  }

  export type RoundWhereInput = {
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    round_number?: IntFilter<"Round"> | number
    start_time?: DateTimeFilter<"Round"> | Date | string
    end_time?: DateTimeFilter<"Round"> | Date | string
    duration?: IntFilter<"Round"> | number
    Allocation_Status?: Allocation_StatusListRelationFilter
    CutOff_ranks?: CutOff_ranksListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    round_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration?: SortOrder
    Allocation_Status?: Allocation_StatusOrderByRelationAggregateInput
    CutOff_ranks?: CutOff_ranksOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = Prisma.AtLeast<{
    round_number?: number
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    start_time?: DateTimeFilter<"Round"> | Date | string
    end_time?: DateTimeFilter<"Round"> | Date | string
    duration?: IntFilter<"Round"> | number
    Allocation_Status?: Allocation_StatusListRelationFilter
    CutOff_ranks?: CutOff_ranksListRelationFilter
  }, "round_number">

  export type RoundOrderByWithAggregationInput = {
    round_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration?: SortOrder
    _count?: RoundCountOrderByAggregateInput
    _avg?: RoundAvgOrderByAggregateInput
    _max?: RoundMaxOrderByAggregateInput
    _min?: RoundMinOrderByAggregateInput
    _sum?: RoundSumOrderByAggregateInput
  }

  export type RoundScalarWhereWithAggregatesInput = {
    AND?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    OR?: RoundScalarWhereWithAggregatesInput[]
    NOT?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    round_number?: IntWithAggregatesFilter<"Round"> | number
    start_time?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    duration?: IntWithAggregatesFilter<"Round"> | number
  }

  export type Allocation_StatusWhereInput = {
    AND?: Allocation_StatusWhereInput | Allocation_StatusWhereInput[]
    OR?: Allocation_StatusWhereInput[]
    NOT?: Allocation_StatusWhereInput | Allocation_StatusWhereInput[]
    student_id?: IntFilter<"Allocation_Status"> | number
    program_id?: IntFilter<"Allocation_Status"> | number
    category_id?: IntFilter<"Allocation_Status"> | number
    rank_value_used?: BigIntFilter<"Allocation_Status"> | bigint | number
    rank_type_used?: EnumrankTypeFilter<"Allocation_Status"> | $Enums.rankType
    round_id?: IntFilter<"Allocation_Status"> | number
    studentID?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    programID?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    categoryID?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    roundID?: XOR<RoundScalarRelationFilter, RoundWhereInput>
  }

  export type Allocation_StatusOrderByWithRelationInput = {
    student_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    rank_value_used?: SortOrder
    rank_type_used?: SortOrder
    round_id?: SortOrder
    studentID?: StudentOrderByWithRelationInput
    programID?: ProgramOrderByWithRelationInput
    categoryID?: CategoryOrderByWithRelationInput
    roundID?: RoundOrderByWithRelationInput
  }

  export type Allocation_StatusWhereUniqueInput = Prisma.AtLeast<{
    student_id_program_id_category_id_round_id?: Allocation_StatusStudent_idProgram_idCategory_idRound_idCompoundUniqueInput
    AND?: Allocation_StatusWhereInput | Allocation_StatusWhereInput[]
    OR?: Allocation_StatusWhereInput[]
    NOT?: Allocation_StatusWhereInput | Allocation_StatusWhereInput[]
    student_id?: IntFilter<"Allocation_Status"> | number
    program_id?: IntFilter<"Allocation_Status"> | number
    category_id?: IntFilter<"Allocation_Status"> | number
    rank_value_used?: BigIntFilter<"Allocation_Status"> | bigint | number
    rank_type_used?: EnumrankTypeFilter<"Allocation_Status"> | $Enums.rankType
    round_id?: IntFilter<"Allocation_Status"> | number
    studentID?: XOR<StudentScalarRelationFilter, StudentWhereInput>
    programID?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    categoryID?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    roundID?: XOR<RoundScalarRelationFilter, RoundWhereInput>
  }, "student_id_program_id_category_id_round_id">

  export type Allocation_StatusOrderByWithAggregationInput = {
    student_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    rank_value_used?: SortOrder
    rank_type_used?: SortOrder
    round_id?: SortOrder
    _count?: Allocation_StatusCountOrderByAggregateInput
    _avg?: Allocation_StatusAvgOrderByAggregateInput
    _max?: Allocation_StatusMaxOrderByAggregateInput
    _min?: Allocation_StatusMinOrderByAggregateInput
    _sum?: Allocation_StatusSumOrderByAggregateInput
  }

  export type Allocation_StatusScalarWhereWithAggregatesInput = {
    AND?: Allocation_StatusScalarWhereWithAggregatesInput | Allocation_StatusScalarWhereWithAggregatesInput[]
    OR?: Allocation_StatusScalarWhereWithAggregatesInput[]
    NOT?: Allocation_StatusScalarWhereWithAggregatesInput | Allocation_StatusScalarWhereWithAggregatesInput[]
    student_id?: IntWithAggregatesFilter<"Allocation_Status"> | number
    program_id?: IntWithAggregatesFilter<"Allocation_Status"> | number
    category_id?: IntWithAggregatesFilter<"Allocation_Status"> | number
    rank_value_used?: BigIntWithAggregatesFilter<"Allocation_Status"> | bigint | number
    rank_type_used?: EnumrankTypeWithAggregatesFilter<"Allocation_Status"> | $Enums.rankType
    round_id?: IntWithAggregatesFilter<"Allocation_Status"> | number
  }

  export type CutOff_ranksWhereInput = {
    AND?: CutOff_ranksWhereInput | CutOff_ranksWhereInput[]
    OR?: CutOff_ranksWhereInput[]
    NOT?: CutOff_ranksWhereInput | CutOff_ranksWhereInput[]
    cutOff_id?: IntFilter<"CutOff_ranks"> | number
    program_id?: IntFilter<"CutOff_ranks"> | number
    category_id?: IntFilter<"CutOff_ranks"> | number
    closing_rank?: BigIntFilter<"CutOff_ranks"> | bigint | number
    opening_rank?: BigIntFilter<"CutOff_ranks"> | bigint | number
    round_id?: IntFilter<"CutOff_ranks"> | number
    programID?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    categoryID?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    roundID?: XOR<RoundScalarRelationFilter, RoundWhereInput>
  }

  export type CutOff_ranksOrderByWithRelationInput = {
    cutOff_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    closing_rank?: SortOrder
    opening_rank?: SortOrder
    round_id?: SortOrder
    programID?: ProgramOrderByWithRelationInput
    categoryID?: CategoryOrderByWithRelationInput
    roundID?: RoundOrderByWithRelationInput
  }

  export type CutOff_ranksWhereUniqueInput = Prisma.AtLeast<{
    cutOff_id?: number
    AND?: CutOff_ranksWhereInput | CutOff_ranksWhereInput[]
    OR?: CutOff_ranksWhereInput[]
    NOT?: CutOff_ranksWhereInput | CutOff_ranksWhereInput[]
    program_id?: IntFilter<"CutOff_ranks"> | number
    category_id?: IntFilter<"CutOff_ranks"> | number
    closing_rank?: BigIntFilter<"CutOff_ranks"> | bigint | number
    opening_rank?: BigIntFilter<"CutOff_ranks"> | bigint | number
    round_id?: IntFilter<"CutOff_ranks"> | number
    programID?: XOR<ProgramScalarRelationFilter, ProgramWhereInput>
    categoryID?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    roundID?: XOR<RoundScalarRelationFilter, RoundWhereInput>
  }, "cutOff_id">

  export type CutOff_ranksOrderByWithAggregationInput = {
    cutOff_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    closing_rank?: SortOrder
    opening_rank?: SortOrder
    round_id?: SortOrder
    _count?: CutOff_ranksCountOrderByAggregateInput
    _avg?: CutOff_ranksAvgOrderByAggregateInput
    _max?: CutOff_ranksMaxOrderByAggregateInput
    _min?: CutOff_ranksMinOrderByAggregateInput
    _sum?: CutOff_ranksSumOrderByAggregateInput
  }

  export type CutOff_ranksScalarWhereWithAggregatesInput = {
    AND?: CutOff_ranksScalarWhereWithAggregatesInput | CutOff_ranksScalarWhereWithAggregatesInput[]
    OR?: CutOff_ranksScalarWhereWithAggregatesInput[]
    NOT?: CutOff_ranksScalarWhereWithAggregatesInput | CutOff_ranksScalarWhereWithAggregatesInput[]
    cutOff_id?: IntWithAggregatesFilter<"CutOff_ranks"> | number
    program_id?: IntWithAggregatesFilter<"CutOff_ranks"> | number
    category_id?: IntWithAggregatesFilter<"CutOff_ranks"> | number
    closing_rank?: BigIntWithAggregatesFilter<"CutOff_ranks"> | bigint | number
    opening_rank?: BigIntWithAggregatesFilter<"CutOff_ranks"> | bigint | number
    round_id?: IntWithAggregatesFilter<"CutOff_ranks"> | number
  }

  export type CategoryCreateInput = {
    category_name: string
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutCategoryIDInput
    Student?: StudentCreateNestedManyWithoutCategoryIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutCategoryIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryUncheckedCreateInput = {
    category_id?: number
    category_name: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutCategoryIDInput
    Student?: StudentUncheckedCreateNestedManyWithoutCategoryIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutCategoryIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutCategoryIDNestedInput
    Student?: StudentUpdateManyWithoutCategoryIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutCategoryIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutCategoryIDNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutCategoryIDNestedInput
    Student?: StudentUncheckedUpdateManyWithoutCategoryIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutCategoryIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutCategoryIDNestedInput
  }

  export type CategoryCreateManyInput = {
    category_id?: number
    category_name: string
  }

  export type CategoryUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeCreateInput = {
    college_name: string
    city: string
    state: string
    pincode: string
    Program?: ProgramCreateNestedManyWithoutCollegeIDInput
  }

  export type CollegeUncheckedCreateInput = {
    college_id?: number
    college_name: string
    city: string
    state: string
    pincode: string
    Program?: ProgramUncheckedCreateNestedManyWithoutCollegeIDInput
  }

  export type CollegeUpdateInput = {
    college_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    Program?: ProgramUpdateManyWithoutCollegeIDNestedInput
  }

  export type CollegeUncheckedUpdateInput = {
    college_id?: IntFieldUpdateOperationsInput | number
    college_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
    Program?: ProgramUncheckedUpdateManyWithoutCollegeIDNestedInput
  }

  export type CollegeCreateManyInput = {
    college_id?: number
    college_name: string
    city: string
    state: string
    pincode: string
  }

  export type CollegeUpdateManyMutationInput = {
    college_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeUncheckedUpdateManyInput = {
    college_id?: IntFieldUpdateOperationsInput | number
    college_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentCreateInput = {
    department_name: string
    Program?: ProgramCreateNestedManyWithoutDeptIDInput
  }

  export type DepartmentUncheckedCreateInput = {
    department_id?: number
    department_name: string
    Program?: ProgramUncheckedCreateNestedManyWithoutDeptIDInput
  }

  export type DepartmentUpdateInput = {
    department_name?: StringFieldUpdateOperationsInput | string
    Program?: ProgramUpdateManyWithoutDeptIDNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    department_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
    Program?: ProgramUncheckedUpdateManyWithoutDeptIDNestedInput
  }

  export type DepartmentCreateManyInput = {
    department_id?: number
    department_name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    department_name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    department_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
  }

  export type ProgramCreateInput = {
    duration: string
    deptID: DepartmentCreateNestedOneWithoutProgramInput
    collegeID: CollegeCreateNestedOneWithoutProgramInput
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramUncheckedCreateInput = {
    program_id?: number
    department_id: number
    college_id: number
    duration: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesUncheckedCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramUpdateInput = {
    duration?: StringFieldUpdateOperationsInput | string
    deptID?: DepartmentUpdateOneRequiredWithoutProgramNestedInput
    collegeID?: CollegeUpdateOneRequiredWithoutProgramNestedInput
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramUncheckedUpdateInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    college_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUncheckedUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramCreateManyInput = {
    program_id?: number
    department_id: number
    college_id: number
    duration: string
  }

  export type ProgramUpdateManyMutationInput = {
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type ProgramUncheckedUpdateManyInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    college_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type Seat_MatrixCreateInput = {
    total_seats: number
    progID: ProgramCreateNestedOneWithoutSeat_MatrixInput
    categoryID: CategoryCreateNestedOneWithoutSeat_MatrixInput
  }

  export type Seat_MatrixUncheckedCreateInput = {
    program_id: number
    category_id: number
    total_seats: number
  }

  export type Seat_MatrixUpdateInput = {
    total_seats?: IntFieldUpdateOperationsInput | number
    progID?: ProgramUpdateOneRequiredWithoutSeat_MatrixNestedInput
    categoryID?: CategoryUpdateOneRequiredWithoutSeat_MatrixNestedInput
  }

  export type Seat_MatrixUncheckedUpdateInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    total_seats?: IntFieldUpdateOperationsInput | number
  }

  export type Seat_MatrixCreateManyInput = {
    program_id: number
    category_id: number
    total_seats: number
  }

  export type Seat_MatrixUpdateManyMutationInput = {
    total_seats?: IntFieldUpdateOperationsInput | number
  }

  export type Seat_MatrixUncheckedUpdateManyInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    total_seats?: IntFieldUpdateOperationsInput | number
  }

  export type AdminCreateInput = {
    email: string
    password: string
  }

  export type AdminUncheckedCreateInput = {
    admin_id?: number
    email: string
    password: string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminCreateManyInput = {
    admin_id?: number
    email: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    admin_id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type StudentCreateInput = {
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
    categoryID: CategoryCreateNestedOneWithoutStudentInput
    Preferences?: PreferencesCreateNestedManyWithoutStudentIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutStudentIDInput
  }

  export type StudentUncheckedCreateInput = {
    student_id?: number
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
    category_id: number
    Preferences?: PreferencesUncheckedCreateNestedManyWithoutStudentIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutStudentIDInput
  }

  export type StudentUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryID?: CategoryUpdateOneRequiredWithoutStudentNestedInput
    Preferences?: PreferencesUpdateManyWithoutStudentIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutStudentIDNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: IntFieldUpdateOperationsInput | number
    Preferences?: PreferencesUncheckedUpdateManyWithoutStudentIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutStudentIDNestedInput
  }

  export type StudentCreateManyInput = {
    student_id?: number
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
    category_id: number
  }

  export type StudentUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StudentUncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type PreferencesCreateInput = {
    preference_number: number
    created_at?: Date | string
    studentID: StudentCreateNestedOneWithoutPreferencesInput
    programID: ProgramCreateNestedOneWithoutPreferencesInput
  }

  export type PreferencesUncheckedCreateInput = {
    student_id: number
    preference_number: number
    created_at?: Date | string
    program_id: number
  }

  export type PreferencesUpdateInput = {
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentID?: StudentUpdateOneRequiredWithoutPreferencesNestedInput
    programID?: ProgramUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type PreferencesUncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    program_id?: IntFieldUpdateOperationsInput | number
  }

  export type PreferencesCreateManyInput = {
    student_id: number
    preference_number: number
    created_at?: Date | string
    program_id: number
  }

  export type PreferencesUpdateManyMutationInput = {
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferencesUncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    program_id?: IntFieldUpdateOperationsInput | number
  }

  export type RoundCreateInput = {
    start_time?: Date | string
    end_time: Date | string
    duration: number
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutRoundIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutRoundIDInput
  }

  export type RoundUncheckedCreateInput = {
    round_number?: number
    start_time?: Date | string
    end_time: Date | string
    duration: number
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutRoundIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutRoundIDInput
  }

  export type RoundUpdateInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    Allocation_Status?: Allocation_StatusUpdateManyWithoutRoundIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutRoundIDNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    round_number?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutRoundIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutRoundIDNestedInput
  }

  export type RoundCreateManyInput = {
    round_number?: number
    start_time?: Date | string
    end_time: Date | string
    duration: number
  }

  export type RoundUpdateManyMutationInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type RoundUncheckedUpdateManyInput = {
    round_number?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type Allocation_StatusCreateInput = {
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    studentID: StudentCreateNestedOneWithoutAllocation_StatusInput
    programID: ProgramCreateNestedOneWithoutAllocation_StatusInput
    categoryID: CategoryCreateNestedOneWithoutAllocation_StatusInput
    roundID: RoundCreateNestedOneWithoutAllocation_StatusInput
  }

  export type Allocation_StatusUncheckedCreateInput = {
    student_id: number
    program_id: number
    category_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    round_id: number
  }

  export type Allocation_StatusUpdateInput = {
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    studentID?: StudentUpdateOneRequiredWithoutAllocation_StatusNestedInput
    programID?: ProgramUpdateOneRequiredWithoutAllocation_StatusNestedInput
    categoryID?: CategoryUpdateOneRequiredWithoutAllocation_StatusNestedInput
    roundID?: RoundUpdateOneRequiredWithoutAllocation_StatusNestedInput
  }

  export type Allocation_StatusUncheckedUpdateInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type Allocation_StatusCreateManyInput = {
    student_id: number
    program_id: number
    category_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    round_id: number
  }

  export type Allocation_StatusUpdateManyMutationInput = {
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
  }

  export type Allocation_StatusUncheckedUpdateManyInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type CutOff_ranksCreateInput = {
    closing_rank: bigint | number
    opening_rank: bigint | number
    programID: ProgramCreateNestedOneWithoutCutOff_ranksInput
    categoryID: CategoryCreateNestedOneWithoutCutOff_ranksInput
    roundID: RoundCreateNestedOneWithoutCutOff_ranksInput
  }

  export type CutOff_ranksUncheckedCreateInput = {
    cutOff_id?: number
    program_id: number
    category_id: number
    closing_rank: bigint | number
    opening_rank: bigint | number
    round_id: number
  }

  export type CutOff_ranksUpdateInput = {
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    programID?: ProgramUpdateOneRequiredWithoutCutOff_ranksNestedInput
    categoryID?: CategoryUpdateOneRequiredWithoutCutOff_ranksNestedInput
    roundID?: RoundUpdateOneRequiredWithoutCutOff_ranksNestedInput
  }

  export type CutOff_ranksUncheckedUpdateInput = {
    cutOff_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type CutOff_ranksCreateManyInput = {
    cutOff_id?: number
    program_id: number
    category_id: number
    closing_rank: bigint | number
    opening_rank: bigint | number
    round_id: number
  }

  export type CutOff_ranksUpdateManyMutationInput = {
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CutOff_ranksUncheckedUpdateManyInput = {
    cutOff_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Seat_MatrixListRelationFilter = {
    every?: Seat_MatrixWhereInput
    some?: Seat_MatrixWhereInput
    none?: Seat_MatrixWhereInput
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type Allocation_StatusListRelationFilter = {
    every?: Allocation_StatusWhereInput
    some?: Allocation_StatusWhereInput
    none?: Allocation_StatusWhereInput
  }

  export type CutOff_ranksListRelationFilter = {
    every?: CutOff_ranksWhereInput
    some?: CutOff_ranksWhereInput
    none?: CutOff_ranksWhereInput
  }

  export type Seat_MatrixOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Allocation_StatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CutOff_ranksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ProgramListRelationFilter = {
    every?: ProgramWhereInput
    some?: ProgramWhereInput
    none?: ProgramWhereInput
  }

  export type ProgramOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollegeCountOrderByAggregateInput = {
    college_id?: SortOrder
    college_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
  }

  export type CollegeAvgOrderByAggregateInput = {
    college_id?: SortOrder
  }

  export type CollegeMaxOrderByAggregateInput = {
    college_id?: SortOrder
    college_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
  }

  export type CollegeMinOrderByAggregateInput = {
    college_id?: SortOrder
    college_name?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
  }

  export type CollegeSumOrderByAggregateInput = {
    college_id?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    department_id?: SortOrder
    department_name?: SortOrder
  }

  export type DepartmentAvgOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    department_id?: SortOrder
    department_name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    department_id?: SortOrder
    department_name?: SortOrder
  }

  export type DepartmentSumOrderByAggregateInput = {
    department_id?: SortOrder
  }

  export type DepartmentScalarRelationFilter = {
    is?: DepartmentWhereInput
    isNot?: DepartmentWhereInput
  }

  export type CollegeScalarRelationFilter = {
    is?: CollegeWhereInput
    isNot?: CollegeWhereInput
  }

  export type PreferencesListRelationFilter = {
    every?: PreferencesWhereInput
    some?: PreferencesWhereInput
    none?: PreferencesWhereInput
  }

  export type PreferencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProgramCountOrderByAggregateInput = {
    program_id?: SortOrder
    department_id?: SortOrder
    college_id?: SortOrder
    duration?: SortOrder
  }

  export type ProgramAvgOrderByAggregateInput = {
    program_id?: SortOrder
    department_id?: SortOrder
    college_id?: SortOrder
  }

  export type ProgramMaxOrderByAggregateInput = {
    program_id?: SortOrder
    department_id?: SortOrder
    college_id?: SortOrder
    duration?: SortOrder
  }

  export type ProgramMinOrderByAggregateInput = {
    program_id?: SortOrder
    department_id?: SortOrder
    college_id?: SortOrder
    duration?: SortOrder
  }

  export type ProgramSumOrderByAggregateInput = {
    program_id?: SortOrder
    department_id?: SortOrder
    college_id?: SortOrder
  }

  export type ProgramScalarRelationFilter = {
    is?: ProgramWhereInput
    isNot?: ProgramWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type Seat_MatrixProgram_idCategory_idCompoundUniqueInput = {
    program_id: number
    category_id: number
  }

  export type Seat_MatrixCountOrderByAggregateInput = {
    program_id?: SortOrder
    category_id?: SortOrder
    total_seats?: SortOrder
  }

  export type Seat_MatrixAvgOrderByAggregateInput = {
    program_id?: SortOrder
    category_id?: SortOrder
    total_seats?: SortOrder
  }

  export type Seat_MatrixMaxOrderByAggregateInput = {
    program_id?: SortOrder
    category_id?: SortOrder
    total_seats?: SortOrder
  }

  export type Seat_MatrixMinOrderByAggregateInput = {
    program_id?: SortOrder
    category_id?: SortOrder
    total_seats?: SortOrder
  }

  export type Seat_MatrixSumOrderByAggregateInput = {
    program_id?: SortOrder
    category_id?: SortOrder
    total_seats?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    admin_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    admin_id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    admin_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    admin_id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    admin_id?: SortOrder
  }

  export type EnumgenderFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    not?: NestedEnumgenderFilter<$PrismaModel> | $Enums.gender
  }

  export type EnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StudentCountOrderByAggregateInput = {
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile_number?: SortOrder
    gender?: SortOrder
    current_status?: SortOrder
    isRegistered?: SortOrder
    general_rank?: SortOrder
    category_rank?: SortOrder
    category_id?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    student_id?: SortOrder
    general_rank?: SortOrder
    category_rank?: SortOrder
    category_id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile_number?: SortOrder
    gender?: SortOrder
    current_status?: SortOrder
    isRegistered?: SortOrder
    general_rank?: SortOrder
    category_rank?: SortOrder
    category_id?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    student_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    mobile_number?: SortOrder
    gender?: SortOrder
    current_status?: SortOrder
    isRegistered?: SortOrder
    general_rank?: SortOrder
    category_rank?: SortOrder
    category_id?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    student_id?: SortOrder
    general_rank?: SortOrder
    category_rank?: SortOrder
    category_id?: SortOrder
  }

  export type EnumgenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    not?: NestedEnumgenderWithAggregatesFilter<$PrismaModel> | $Enums.gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderFilter<$PrismaModel>
    _max?: NestedEnumgenderFilter<$PrismaModel>
  }

  export type EnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StudentScalarRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type PreferencesStudent_idProgram_idCompoundUniqueInput = {
    student_id: number
    program_id: number
  }

  export type PreferencesCountOrderByAggregateInput = {
    student_id?: SortOrder
    preference_number?: SortOrder
    created_at?: SortOrder
    program_id?: SortOrder
  }

  export type PreferencesAvgOrderByAggregateInput = {
    student_id?: SortOrder
    preference_number?: SortOrder
    program_id?: SortOrder
  }

  export type PreferencesMaxOrderByAggregateInput = {
    student_id?: SortOrder
    preference_number?: SortOrder
    created_at?: SortOrder
    program_id?: SortOrder
  }

  export type PreferencesMinOrderByAggregateInput = {
    student_id?: SortOrder
    preference_number?: SortOrder
    created_at?: SortOrder
    program_id?: SortOrder
  }

  export type PreferencesSumOrderByAggregateInput = {
    student_id?: SortOrder
    preference_number?: SortOrder
    program_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RoundCountOrderByAggregateInput = {
    round_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    round_number?: SortOrder
    duration?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    round_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    round_number?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    duration?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    round_number?: SortOrder
    duration?: SortOrder
  }

  export type EnumrankTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.rankType | EnumrankTypeFieldRefInput<$PrismaModel>
    in?: $Enums.rankType[] | ListEnumrankTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.rankType[] | ListEnumrankTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumrankTypeFilter<$PrismaModel> | $Enums.rankType
  }

  export type RoundScalarRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type Allocation_StatusStudent_idProgram_idCategory_idRound_idCompoundUniqueInput = {
    student_id: number
    program_id: number
    category_id: number
    round_id: number
  }

  export type Allocation_StatusCountOrderByAggregateInput = {
    student_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    rank_value_used?: SortOrder
    rank_type_used?: SortOrder
    round_id?: SortOrder
  }

  export type Allocation_StatusAvgOrderByAggregateInput = {
    student_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    rank_value_used?: SortOrder
    round_id?: SortOrder
  }

  export type Allocation_StatusMaxOrderByAggregateInput = {
    student_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    rank_value_used?: SortOrder
    rank_type_used?: SortOrder
    round_id?: SortOrder
  }

  export type Allocation_StatusMinOrderByAggregateInput = {
    student_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    rank_value_used?: SortOrder
    rank_type_used?: SortOrder
    round_id?: SortOrder
  }

  export type Allocation_StatusSumOrderByAggregateInput = {
    student_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    rank_value_used?: SortOrder
    round_id?: SortOrder
  }

  export type EnumrankTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rankType | EnumrankTypeFieldRefInput<$PrismaModel>
    in?: $Enums.rankType[] | ListEnumrankTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.rankType[] | ListEnumrankTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumrankTypeWithAggregatesFilter<$PrismaModel> | $Enums.rankType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrankTypeFilter<$PrismaModel>
    _max?: NestedEnumrankTypeFilter<$PrismaModel>
  }

  export type CutOff_ranksCountOrderByAggregateInput = {
    cutOff_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    closing_rank?: SortOrder
    opening_rank?: SortOrder
    round_id?: SortOrder
  }

  export type CutOff_ranksAvgOrderByAggregateInput = {
    cutOff_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    closing_rank?: SortOrder
    opening_rank?: SortOrder
    round_id?: SortOrder
  }

  export type CutOff_ranksMaxOrderByAggregateInput = {
    cutOff_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    closing_rank?: SortOrder
    opening_rank?: SortOrder
    round_id?: SortOrder
  }

  export type CutOff_ranksMinOrderByAggregateInput = {
    cutOff_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    closing_rank?: SortOrder
    opening_rank?: SortOrder
    round_id?: SortOrder
  }

  export type CutOff_ranksSumOrderByAggregateInput = {
    cutOff_id?: SortOrder
    program_id?: SortOrder
    category_id?: SortOrder
    closing_rank?: SortOrder
    opening_rank?: SortOrder
    round_id?: SortOrder
  }

  export type Seat_MatrixCreateNestedManyWithoutCategoryIDInput = {
    create?: XOR<Seat_MatrixCreateWithoutCategoryIDInput, Seat_MatrixUncheckedCreateWithoutCategoryIDInput> | Seat_MatrixCreateWithoutCategoryIDInput[] | Seat_MatrixUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: Seat_MatrixCreateOrConnectWithoutCategoryIDInput | Seat_MatrixCreateOrConnectWithoutCategoryIDInput[]
    createMany?: Seat_MatrixCreateManyCategoryIDInputEnvelope
    connect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
  }

  export type StudentCreateNestedManyWithoutCategoryIDInput = {
    create?: XOR<StudentCreateWithoutCategoryIDInput, StudentUncheckedCreateWithoutCategoryIDInput> | StudentCreateWithoutCategoryIDInput[] | StudentUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCategoryIDInput | StudentCreateOrConnectWithoutCategoryIDInput[]
    createMany?: StudentCreateManyCategoryIDInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type Allocation_StatusCreateNestedManyWithoutCategoryIDInput = {
    create?: XOR<Allocation_StatusCreateWithoutCategoryIDInput, Allocation_StatusUncheckedCreateWithoutCategoryIDInput> | Allocation_StatusCreateWithoutCategoryIDInput[] | Allocation_StatusUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutCategoryIDInput | Allocation_StatusCreateOrConnectWithoutCategoryIDInput[]
    createMany?: Allocation_StatusCreateManyCategoryIDInputEnvelope
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
  }

  export type CutOff_ranksCreateNestedManyWithoutCategoryIDInput = {
    create?: XOR<CutOff_ranksCreateWithoutCategoryIDInput, CutOff_ranksUncheckedCreateWithoutCategoryIDInput> | CutOff_ranksCreateWithoutCategoryIDInput[] | CutOff_ranksUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutCategoryIDInput | CutOff_ranksCreateOrConnectWithoutCategoryIDInput[]
    createMany?: CutOff_ranksCreateManyCategoryIDInputEnvelope
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
  }

  export type Seat_MatrixUncheckedCreateNestedManyWithoutCategoryIDInput = {
    create?: XOR<Seat_MatrixCreateWithoutCategoryIDInput, Seat_MatrixUncheckedCreateWithoutCategoryIDInput> | Seat_MatrixCreateWithoutCategoryIDInput[] | Seat_MatrixUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: Seat_MatrixCreateOrConnectWithoutCategoryIDInput | Seat_MatrixCreateOrConnectWithoutCategoryIDInput[]
    createMany?: Seat_MatrixCreateManyCategoryIDInputEnvelope
    connect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutCategoryIDInput = {
    create?: XOR<StudentCreateWithoutCategoryIDInput, StudentUncheckedCreateWithoutCategoryIDInput> | StudentCreateWithoutCategoryIDInput[] | StudentUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCategoryIDInput | StudentCreateOrConnectWithoutCategoryIDInput[]
    createMany?: StudentCreateManyCategoryIDInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type Allocation_StatusUncheckedCreateNestedManyWithoutCategoryIDInput = {
    create?: XOR<Allocation_StatusCreateWithoutCategoryIDInput, Allocation_StatusUncheckedCreateWithoutCategoryIDInput> | Allocation_StatusCreateWithoutCategoryIDInput[] | Allocation_StatusUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutCategoryIDInput | Allocation_StatusCreateOrConnectWithoutCategoryIDInput[]
    createMany?: Allocation_StatusCreateManyCategoryIDInputEnvelope
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
  }

  export type CutOff_ranksUncheckedCreateNestedManyWithoutCategoryIDInput = {
    create?: XOR<CutOff_ranksCreateWithoutCategoryIDInput, CutOff_ranksUncheckedCreateWithoutCategoryIDInput> | CutOff_ranksCreateWithoutCategoryIDInput[] | CutOff_ranksUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutCategoryIDInput | CutOff_ranksCreateOrConnectWithoutCategoryIDInput[]
    createMany?: CutOff_ranksCreateManyCategoryIDInputEnvelope
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type Seat_MatrixUpdateManyWithoutCategoryIDNestedInput = {
    create?: XOR<Seat_MatrixCreateWithoutCategoryIDInput, Seat_MatrixUncheckedCreateWithoutCategoryIDInput> | Seat_MatrixCreateWithoutCategoryIDInput[] | Seat_MatrixUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: Seat_MatrixCreateOrConnectWithoutCategoryIDInput | Seat_MatrixCreateOrConnectWithoutCategoryIDInput[]
    upsert?: Seat_MatrixUpsertWithWhereUniqueWithoutCategoryIDInput | Seat_MatrixUpsertWithWhereUniqueWithoutCategoryIDInput[]
    createMany?: Seat_MatrixCreateManyCategoryIDInputEnvelope
    set?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    disconnect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    delete?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    connect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    update?: Seat_MatrixUpdateWithWhereUniqueWithoutCategoryIDInput | Seat_MatrixUpdateWithWhereUniqueWithoutCategoryIDInput[]
    updateMany?: Seat_MatrixUpdateManyWithWhereWithoutCategoryIDInput | Seat_MatrixUpdateManyWithWhereWithoutCategoryIDInput[]
    deleteMany?: Seat_MatrixScalarWhereInput | Seat_MatrixScalarWhereInput[]
  }

  export type StudentUpdateManyWithoutCategoryIDNestedInput = {
    create?: XOR<StudentCreateWithoutCategoryIDInput, StudentUncheckedCreateWithoutCategoryIDInput> | StudentCreateWithoutCategoryIDInput[] | StudentUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCategoryIDInput | StudentCreateOrConnectWithoutCategoryIDInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCategoryIDInput | StudentUpsertWithWhereUniqueWithoutCategoryIDInput[]
    createMany?: StudentCreateManyCategoryIDInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCategoryIDInput | StudentUpdateWithWhereUniqueWithoutCategoryIDInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCategoryIDInput | StudentUpdateManyWithWhereWithoutCategoryIDInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type Allocation_StatusUpdateManyWithoutCategoryIDNestedInput = {
    create?: XOR<Allocation_StatusCreateWithoutCategoryIDInput, Allocation_StatusUncheckedCreateWithoutCategoryIDInput> | Allocation_StatusCreateWithoutCategoryIDInput[] | Allocation_StatusUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutCategoryIDInput | Allocation_StatusCreateOrConnectWithoutCategoryIDInput[]
    upsert?: Allocation_StatusUpsertWithWhereUniqueWithoutCategoryIDInput | Allocation_StatusUpsertWithWhereUniqueWithoutCategoryIDInput[]
    createMany?: Allocation_StatusCreateManyCategoryIDInputEnvelope
    set?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    disconnect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    delete?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    update?: Allocation_StatusUpdateWithWhereUniqueWithoutCategoryIDInput | Allocation_StatusUpdateWithWhereUniqueWithoutCategoryIDInput[]
    updateMany?: Allocation_StatusUpdateManyWithWhereWithoutCategoryIDInput | Allocation_StatusUpdateManyWithWhereWithoutCategoryIDInput[]
    deleteMany?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
  }

  export type CutOff_ranksUpdateManyWithoutCategoryIDNestedInput = {
    create?: XOR<CutOff_ranksCreateWithoutCategoryIDInput, CutOff_ranksUncheckedCreateWithoutCategoryIDInput> | CutOff_ranksCreateWithoutCategoryIDInput[] | CutOff_ranksUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutCategoryIDInput | CutOff_ranksCreateOrConnectWithoutCategoryIDInput[]
    upsert?: CutOff_ranksUpsertWithWhereUniqueWithoutCategoryIDInput | CutOff_ranksUpsertWithWhereUniqueWithoutCategoryIDInput[]
    createMany?: CutOff_ranksCreateManyCategoryIDInputEnvelope
    set?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    disconnect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    delete?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    update?: CutOff_ranksUpdateWithWhereUniqueWithoutCategoryIDInput | CutOff_ranksUpdateWithWhereUniqueWithoutCategoryIDInput[]
    updateMany?: CutOff_ranksUpdateManyWithWhereWithoutCategoryIDInput | CutOff_ranksUpdateManyWithWhereWithoutCategoryIDInput[]
    deleteMany?: CutOff_ranksScalarWhereInput | CutOff_ranksScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Seat_MatrixUncheckedUpdateManyWithoutCategoryIDNestedInput = {
    create?: XOR<Seat_MatrixCreateWithoutCategoryIDInput, Seat_MatrixUncheckedCreateWithoutCategoryIDInput> | Seat_MatrixCreateWithoutCategoryIDInput[] | Seat_MatrixUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: Seat_MatrixCreateOrConnectWithoutCategoryIDInput | Seat_MatrixCreateOrConnectWithoutCategoryIDInput[]
    upsert?: Seat_MatrixUpsertWithWhereUniqueWithoutCategoryIDInput | Seat_MatrixUpsertWithWhereUniqueWithoutCategoryIDInput[]
    createMany?: Seat_MatrixCreateManyCategoryIDInputEnvelope
    set?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    disconnect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    delete?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    connect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    update?: Seat_MatrixUpdateWithWhereUniqueWithoutCategoryIDInput | Seat_MatrixUpdateWithWhereUniqueWithoutCategoryIDInput[]
    updateMany?: Seat_MatrixUpdateManyWithWhereWithoutCategoryIDInput | Seat_MatrixUpdateManyWithWhereWithoutCategoryIDInput[]
    deleteMany?: Seat_MatrixScalarWhereInput | Seat_MatrixScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutCategoryIDNestedInput = {
    create?: XOR<StudentCreateWithoutCategoryIDInput, StudentUncheckedCreateWithoutCategoryIDInput> | StudentCreateWithoutCategoryIDInput[] | StudentUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutCategoryIDInput | StudentCreateOrConnectWithoutCategoryIDInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutCategoryIDInput | StudentUpsertWithWhereUniqueWithoutCategoryIDInput[]
    createMany?: StudentCreateManyCategoryIDInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutCategoryIDInput | StudentUpdateWithWhereUniqueWithoutCategoryIDInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutCategoryIDInput | StudentUpdateManyWithWhereWithoutCategoryIDInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type Allocation_StatusUncheckedUpdateManyWithoutCategoryIDNestedInput = {
    create?: XOR<Allocation_StatusCreateWithoutCategoryIDInput, Allocation_StatusUncheckedCreateWithoutCategoryIDInput> | Allocation_StatusCreateWithoutCategoryIDInput[] | Allocation_StatusUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutCategoryIDInput | Allocation_StatusCreateOrConnectWithoutCategoryIDInput[]
    upsert?: Allocation_StatusUpsertWithWhereUniqueWithoutCategoryIDInput | Allocation_StatusUpsertWithWhereUniqueWithoutCategoryIDInput[]
    createMany?: Allocation_StatusCreateManyCategoryIDInputEnvelope
    set?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    disconnect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    delete?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    update?: Allocation_StatusUpdateWithWhereUniqueWithoutCategoryIDInput | Allocation_StatusUpdateWithWhereUniqueWithoutCategoryIDInput[]
    updateMany?: Allocation_StatusUpdateManyWithWhereWithoutCategoryIDInput | Allocation_StatusUpdateManyWithWhereWithoutCategoryIDInput[]
    deleteMany?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
  }

  export type CutOff_ranksUncheckedUpdateManyWithoutCategoryIDNestedInput = {
    create?: XOR<CutOff_ranksCreateWithoutCategoryIDInput, CutOff_ranksUncheckedCreateWithoutCategoryIDInput> | CutOff_ranksCreateWithoutCategoryIDInput[] | CutOff_ranksUncheckedCreateWithoutCategoryIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutCategoryIDInput | CutOff_ranksCreateOrConnectWithoutCategoryIDInput[]
    upsert?: CutOff_ranksUpsertWithWhereUniqueWithoutCategoryIDInput | CutOff_ranksUpsertWithWhereUniqueWithoutCategoryIDInput[]
    createMany?: CutOff_ranksCreateManyCategoryIDInputEnvelope
    set?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    disconnect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    delete?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    update?: CutOff_ranksUpdateWithWhereUniqueWithoutCategoryIDInput | CutOff_ranksUpdateWithWhereUniqueWithoutCategoryIDInput[]
    updateMany?: CutOff_ranksUpdateManyWithWhereWithoutCategoryIDInput | CutOff_ranksUpdateManyWithWhereWithoutCategoryIDInput[]
    deleteMany?: CutOff_ranksScalarWhereInput | CutOff_ranksScalarWhereInput[]
  }

  export type ProgramCreateNestedManyWithoutCollegeIDInput = {
    create?: XOR<ProgramCreateWithoutCollegeIDInput, ProgramUncheckedCreateWithoutCollegeIDInput> | ProgramCreateWithoutCollegeIDInput[] | ProgramUncheckedCreateWithoutCollegeIDInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCollegeIDInput | ProgramCreateOrConnectWithoutCollegeIDInput[]
    createMany?: ProgramCreateManyCollegeIDInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutCollegeIDInput = {
    create?: XOR<ProgramCreateWithoutCollegeIDInput, ProgramUncheckedCreateWithoutCollegeIDInput> | ProgramCreateWithoutCollegeIDInput[] | ProgramUncheckedCreateWithoutCollegeIDInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCollegeIDInput | ProgramCreateOrConnectWithoutCollegeIDInput[]
    createMany?: ProgramCreateManyCollegeIDInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramUpdateManyWithoutCollegeIDNestedInput = {
    create?: XOR<ProgramCreateWithoutCollegeIDInput, ProgramUncheckedCreateWithoutCollegeIDInput> | ProgramCreateWithoutCollegeIDInput[] | ProgramUncheckedCreateWithoutCollegeIDInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCollegeIDInput | ProgramCreateOrConnectWithoutCollegeIDInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutCollegeIDInput | ProgramUpsertWithWhereUniqueWithoutCollegeIDInput[]
    createMany?: ProgramCreateManyCollegeIDInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutCollegeIDInput | ProgramUpdateWithWhereUniqueWithoutCollegeIDInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutCollegeIDInput | ProgramUpdateManyWithWhereWithoutCollegeIDInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutCollegeIDNestedInput = {
    create?: XOR<ProgramCreateWithoutCollegeIDInput, ProgramUncheckedCreateWithoutCollegeIDInput> | ProgramCreateWithoutCollegeIDInput[] | ProgramUncheckedCreateWithoutCollegeIDInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutCollegeIDInput | ProgramCreateOrConnectWithoutCollegeIDInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutCollegeIDInput | ProgramUpsertWithWhereUniqueWithoutCollegeIDInput[]
    createMany?: ProgramCreateManyCollegeIDInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutCollegeIDInput | ProgramUpdateWithWhereUniqueWithoutCollegeIDInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutCollegeIDInput | ProgramUpdateManyWithWhereWithoutCollegeIDInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramCreateNestedManyWithoutDeptIDInput = {
    create?: XOR<ProgramCreateWithoutDeptIDInput, ProgramUncheckedCreateWithoutDeptIDInput> | ProgramCreateWithoutDeptIDInput[] | ProgramUncheckedCreateWithoutDeptIDInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutDeptIDInput | ProgramCreateOrConnectWithoutDeptIDInput[]
    createMany?: ProgramCreateManyDeptIDInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramUncheckedCreateNestedManyWithoutDeptIDInput = {
    create?: XOR<ProgramCreateWithoutDeptIDInput, ProgramUncheckedCreateWithoutDeptIDInput> | ProgramCreateWithoutDeptIDInput[] | ProgramUncheckedCreateWithoutDeptIDInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutDeptIDInput | ProgramCreateOrConnectWithoutDeptIDInput[]
    createMany?: ProgramCreateManyDeptIDInputEnvelope
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
  }

  export type ProgramUpdateManyWithoutDeptIDNestedInput = {
    create?: XOR<ProgramCreateWithoutDeptIDInput, ProgramUncheckedCreateWithoutDeptIDInput> | ProgramCreateWithoutDeptIDInput[] | ProgramUncheckedCreateWithoutDeptIDInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutDeptIDInput | ProgramCreateOrConnectWithoutDeptIDInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutDeptIDInput | ProgramUpsertWithWhereUniqueWithoutDeptIDInput[]
    createMany?: ProgramCreateManyDeptIDInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutDeptIDInput | ProgramUpdateWithWhereUniqueWithoutDeptIDInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutDeptIDInput | ProgramUpdateManyWithWhereWithoutDeptIDInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type ProgramUncheckedUpdateManyWithoutDeptIDNestedInput = {
    create?: XOR<ProgramCreateWithoutDeptIDInput, ProgramUncheckedCreateWithoutDeptIDInput> | ProgramCreateWithoutDeptIDInput[] | ProgramUncheckedCreateWithoutDeptIDInput[]
    connectOrCreate?: ProgramCreateOrConnectWithoutDeptIDInput | ProgramCreateOrConnectWithoutDeptIDInput[]
    upsert?: ProgramUpsertWithWhereUniqueWithoutDeptIDInput | ProgramUpsertWithWhereUniqueWithoutDeptIDInput[]
    createMany?: ProgramCreateManyDeptIDInputEnvelope
    set?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    disconnect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    delete?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    connect?: ProgramWhereUniqueInput | ProgramWhereUniqueInput[]
    update?: ProgramUpdateWithWhereUniqueWithoutDeptIDInput | ProgramUpdateWithWhereUniqueWithoutDeptIDInput[]
    updateMany?: ProgramUpdateManyWithWhereWithoutDeptIDInput | ProgramUpdateManyWithWhereWithoutDeptIDInput[]
    deleteMany?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutProgramInput = {
    create?: XOR<DepartmentCreateWithoutProgramInput, DepartmentUncheckedCreateWithoutProgramInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutProgramInput
    connect?: DepartmentWhereUniqueInput
  }

  export type CollegeCreateNestedOneWithoutProgramInput = {
    create?: XOR<CollegeCreateWithoutProgramInput, CollegeUncheckedCreateWithoutProgramInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutProgramInput
    connect?: CollegeWhereUniqueInput
  }

  export type Seat_MatrixCreateNestedManyWithoutProgIDInput = {
    create?: XOR<Seat_MatrixCreateWithoutProgIDInput, Seat_MatrixUncheckedCreateWithoutProgIDInput> | Seat_MatrixCreateWithoutProgIDInput[] | Seat_MatrixUncheckedCreateWithoutProgIDInput[]
    connectOrCreate?: Seat_MatrixCreateOrConnectWithoutProgIDInput | Seat_MatrixCreateOrConnectWithoutProgIDInput[]
    createMany?: Seat_MatrixCreateManyProgIDInputEnvelope
    connect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
  }

  export type PreferencesCreateNestedManyWithoutProgramIDInput = {
    create?: XOR<PreferencesCreateWithoutProgramIDInput, PreferencesUncheckedCreateWithoutProgramIDInput> | PreferencesCreateWithoutProgramIDInput[] | PreferencesUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: PreferencesCreateOrConnectWithoutProgramIDInput | PreferencesCreateOrConnectWithoutProgramIDInput[]
    createMany?: PreferencesCreateManyProgramIDInputEnvelope
    connect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
  }

  export type Allocation_StatusCreateNestedManyWithoutProgramIDInput = {
    create?: XOR<Allocation_StatusCreateWithoutProgramIDInput, Allocation_StatusUncheckedCreateWithoutProgramIDInput> | Allocation_StatusCreateWithoutProgramIDInput[] | Allocation_StatusUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutProgramIDInput | Allocation_StatusCreateOrConnectWithoutProgramIDInput[]
    createMany?: Allocation_StatusCreateManyProgramIDInputEnvelope
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
  }

  export type CutOff_ranksCreateNestedManyWithoutProgramIDInput = {
    create?: XOR<CutOff_ranksCreateWithoutProgramIDInput, CutOff_ranksUncheckedCreateWithoutProgramIDInput> | CutOff_ranksCreateWithoutProgramIDInput[] | CutOff_ranksUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutProgramIDInput | CutOff_ranksCreateOrConnectWithoutProgramIDInput[]
    createMany?: CutOff_ranksCreateManyProgramIDInputEnvelope
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
  }

  export type Seat_MatrixUncheckedCreateNestedManyWithoutProgIDInput = {
    create?: XOR<Seat_MatrixCreateWithoutProgIDInput, Seat_MatrixUncheckedCreateWithoutProgIDInput> | Seat_MatrixCreateWithoutProgIDInput[] | Seat_MatrixUncheckedCreateWithoutProgIDInput[]
    connectOrCreate?: Seat_MatrixCreateOrConnectWithoutProgIDInput | Seat_MatrixCreateOrConnectWithoutProgIDInput[]
    createMany?: Seat_MatrixCreateManyProgIDInputEnvelope
    connect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
  }

  export type PreferencesUncheckedCreateNestedManyWithoutProgramIDInput = {
    create?: XOR<PreferencesCreateWithoutProgramIDInput, PreferencesUncheckedCreateWithoutProgramIDInput> | PreferencesCreateWithoutProgramIDInput[] | PreferencesUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: PreferencesCreateOrConnectWithoutProgramIDInput | PreferencesCreateOrConnectWithoutProgramIDInput[]
    createMany?: PreferencesCreateManyProgramIDInputEnvelope
    connect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
  }

  export type Allocation_StatusUncheckedCreateNestedManyWithoutProgramIDInput = {
    create?: XOR<Allocation_StatusCreateWithoutProgramIDInput, Allocation_StatusUncheckedCreateWithoutProgramIDInput> | Allocation_StatusCreateWithoutProgramIDInput[] | Allocation_StatusUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutProgramIDInput | Allocation_StatusCreateOrConnectWithoutProgramIDInput[]
    createMany?: Allocation_StatusCreateManyProgramIDInputEnvelope
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
  }

  export type CutOff_ranksUncheckedCreateNestedManyWithoutProgramIDInput = {
    create?: XOR<CutOff_ranksCreateWithoutProgramIDInput, CutOff_ranksUncheckedCreateWithoutProgramIDInput> | CutOff_ranksCreateWithoutProgramIDInput[] | CutOff_ranksUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutProgramIDInput | CutOff_ranksCreateOrConnectWithoutProgramIDInput[]
    createMany?: CutOff_ranksCreateManyProgramIDInputEnvelope
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
  }

  export type DepartmentUpdateOneRequiredWithoutProgramNestedInput = {
    create?: XOR<DepartmentCreateWithoutProgramInput, DepartmentUncheckedCreateWithoutProgramInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutProgramInput
    upsert?: DepartmentUpsertWithoutProgramInput
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutProgramInput, DepartmentUpdateWithoutProgramInput>, DepartmentUncheckedUpdateWithoutProgramInput>
  }

  export type CollegeUpdateOneRequiredWithoutProgramNestedInput = {
    create?: XOR<CollegeCreateWithoutProgramInput, CollegeUncheckedCreateWithoutProgramInput>
    connectOrCreate?: CollegeCreateOrConnectWithoutProgramInput
    upsert?: CollegeUpsertWithoutProgramInput
    connect?: CollegeWhereUniqueInput
    update?: XOR<XOR<CollegeUpdateToOneWithWhereWithoutProgramInput, CollegeUpdateWithoutProgramInput>, CollegeUncheckedUpdateWithoutProgramInput>
  }

  export type Seat_MatrixUpdateManyWithoutProgIDNestedInput = {
    create?: XOR<Seat_MatrixCreateWithoutProgIDInput, Seat_MatrixUncheckedCreateWithoutProgIDInput> | Seat_MatrixCreateWithoutProgIDInput[] | Seat_MatrixUncheckedCreateWithoutProgIDInput[]
    connectOrCreate?: Seat_MatrixCreateOrConnectWithoutProgIDInput | Seat_MatrixCreateOrConnectWithoutProgIDInput[]
    upsert?: Seat_MatrixUpsertWithWhereUniqueWithoutProgIDInput | Seat_MatrixUpsertWithWhereUniqueWithoutProgIDInput[]
    createMany?: Seat_MatrixCreateManyProgIDInputEnvelope
    set?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    disconnect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    delete?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    connect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    update?: Seat_MatrixUpdateWithWhereUniqueWithoutProgIDInput | Seat_MatrixUpdateWithWhereUniqueWithoutProgIDInput[]
    updateMany?: Seat_MatrixUpdateManyWithWhereWithoutProgIDInput | Seat_MatrixUpdateManyWithWhereWithoutProgIDInput[]
    deleteMany?: Seat_MatrixScalarWhereInput | Seat_MatrixScalarWhereInput[]
  }

  export type PreferencesUpdateManyWithoutProgramIDNestedInput = {
    create?: XOR<PreferencesCreateWithoutProgramIDInput, PreferencesUncheckedCreateWithoutProgramIDInput> | PreferencesCreateWithoutProgramIDInput[] | PreferencesUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: PreferencesCreateOrConnectWithoutProgramIDInput | PreferencesCreateOrConnectWithoutProgramIDInput[]
    upsert?: PreferencesUpsertWithWhereUniqueWithoutProgramIDInput | PreferencesUpsertWithWhereUniqueWithoutProgramIDInput[]
    createMany?: PreferencesCreateManyProgramIDInputEnvelope
    set?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    disconnect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    delete?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    connect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    update?: PreferencesUpdateWithWhereUniqueWithoutProgramIDInput | PreferencesUpdateWithWhereUniqueWithoutProgramIDInput[]
    updateMany?: PreferencesUpdateManyWithWhereWithoutProgramIDInput | PreferencesUpdateManyWithWhereWithoutProgramIDInput[]
    deleteMany?: PreferencesScalarWhereInput | PreferencesScalarWhereInput[]
  }

  export type Allocation_StatusUpdateManyWithoutProgramIDNestedInput = {
    create?: XOR<Allocation_StatusCreateWithoutProgramIDInput, Allocation_StatusUncheckedCreateWithoutProgramIDInput> | Allocation_StatusCreateWithoutProgramIDInput[] | Allocation_StatusUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutProgramIDInput | Allocation_StatusCreateOrConnectWithoutProgramIDInput[]
    upsert?: Allocation_StatusUpsertWithWhereUniqueWithoutProgramIDInput | Allocation_StatusUpsertWithWhereUniqueWithoutProgramIDInput[]
    createMany?: Allocation_StatusCreateManyProgramIDInputEnvelope
    set?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    disconnect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    delete?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    update?: Allocation_StatusUpdateWithWhereUniqueWithoutProgramIDInput | Allocation_StatusUpdateWithWhereUniqueWithoutProgramIDInput[]
    updateMany?: Allocation_StatusUpdateManyWithWhereWithoutProgramIDInput | Allocation_StatusUpdateManyWithWhereWithoutProgramIDInput[]
    deleteMany?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
  }

  export type CutOff_ranksUpdateManyWithoutProgramIDNestedInput = {
    create?: XOR<CutOff_ranksCreateWithoutProgramIDInput, CutOff_ranksUncheckedCreateWithoutProgramIDInput> | CutOff_ranksCreateWithoutProgramIDInput[] | CutOff_ranksUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutProgramIDInput | CutOff_ranksCreateOrConnectWithoutProgramIDInput[]
    upsert?: CutOff_ranksUpsertWithWhereUniqueWithoutProgramIDInput | CutOff_ranksUpsertWithWhereUniqueWithoutProgramIDInput[]
    createMany?: CutOff_ranksCreateManyProgramIDInputEnvelope
    set?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    disconnect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    delete?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    update?: CutOff_ranksUpdateWithWhereUniqueWithoutProgramIDInput | CutOff_ranksUpdateWithWhereUniqueWithoutProgramIDInput[]
    updateMany?: CutOff_ranksUpdateManyWithWhereWithoutProgramIDInput | CutOff_ranksUpdateManyWithWhereWithoutProgramIDInput[]
    deleteMany?: CutOff_ranksScalarWhereInput | CutOff_ranksScalarWhereInput[]
  }

  export type Seat_MatrixUncheckedUpdateManyWithoutProgIDNestedInput = {
    create?: XOR<Seat_MatrixCreateWithoutProgIDInput, Seat_MatrixUncheckedCreateWithoutProgIDInput> | Seat_MatrixCreateWithoutProgIDInput[] | Seat_MatrixUncheckedCreateWithoutProgIDInput[]
    connectOrCreate?: Seat_MatrixCreateOrConnectWithoutProgIDInput | Seat_MatrixCreateOrConnectWithoutProgIDInput[]
    upsert?: Seat_MatrixUpsertWithWhereUniqueWithoutProgIDInput | Seat_MatrixUpsertWithWhereUniqueWithoutProgIDInput[]
    createMany?: Seat_MatrixCreateManyProgIDInputEnvelope
    set?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    disconnect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    delete?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    connect?: Seat_MatrixWhereUniqueInput | Seat_MatrixWhereUniqueInput[]
    update?: Seat_MatrixUpdateWithWhereUniqueWithoutProgIDInput | Seat_MatrixUpdateWithWhereUniqueWithoutProgIDInput[]
    updateMany?: Seat_MatrixUpdateManyWithWhereWithoutProgIDInput | Seat_MatrixUpdateManyWithWhereWithoutProgIDInput[]
    deleteMany?: Seat_MatrixScalarWhereInput | Seat_MatrixScalarWhereInput[]
  }

  export type PreferencesUncheckedUpdateManyWithoutProgramIDNestedInput = {
    create?: XOR<PreferencesCreateWithoutProgramIDInput, PreferencesUncheckedCreateWithoutProgramIDInput> | PreferencesCreateWithoutProgramIDInput[] | PreferencesUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: PreferencesCreateOrConnectWithoutProgramIDInput | PreferencesCreateOrConnectWithoutProgramIDInput[]
    upsert?: PreferencesUpsertWithWhereUniqueWithoutProgramIDInput | PreferencesUpsertWithWhereUniqueWithoutProgramIDInput[]
    createMany?: PreferencesCreateManyProgramIDInputEnvelope
    set?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    disconnect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    delete?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    connect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    update?: PreferencesUpdateWithWhereUniqueWithoutProgramIDInput | PreferencesUpdateWithWhereUniqueWithoutProgramIDInput[]
    updateMany?: PreferencesUpdateManyWithWhereWithoutProgramIDInput | PreferencesUpdateManyWithWhereWithoutProgramIDInput[]
    deleteMany?: PreferencesScalarWhereInput | PreferencesScalarWhereInput[]
  }

  export type Allocation_StatusUncheckedUpdateManyWithoutProgramIDNestedInput = {
    create?: XOR<Allocation_StatusCreateWithoutProgramIDInput, Allocation_StatusUncheckedCreateWithoutProgramIDInput> | Allocation_StatusCreateWithoutProgramIDInput[] | Allocation_StatusUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutProgramIDInput | Allocation_StatusCreateOrConnectWithoutProgramIDInput[]
    upsert?: Allocation_StatusUpsertWithWhereUniqueWithoutProgramIDInput | Allocation_StatusUpsertWithWhereUniqueWithoutProgramIDInput[]
    createMany?: Allocation_StatusCreateManyProgramIDInputEnvelope
    set?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    disconnect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    delete?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    update?: Allocation_StatusUpdateWithWhereUniqueWithoutProgramIDInput | Allocation_StatusUpdateWithWhereUniqueWithoutProgramIDInput[]
    updateMany?: Allocation_StatusUpdateManyWithWhereWithoutProgramIDInput | Allocation_StatusUpdateManyWithWhereWithoutProgramIDInput[]
    deleteMany?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
  }

  export type CutOff_ranksUncheckedUpdateManyWithoutProgramIDNestedInput = {
    create?: XOR<CutOff_ranksCreateWithoutProgramIDInput, CutOff_ranksUncheckedCreateWithoutProgramIDInput> | CutOff_ranksCreateWithoutProgramIDInput[] | CutOff_ranksUncheckedCreateWithoutProgramIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutProgramIDInput | CutOff_ranksCreateOrConnectWithoutProgramIDInput[]
    upsert?: CutOff_ranksUpsertWithWhereUniqueWithoutProgramIDInput | CutOff_ranksUpsertWithWhereUniqueWithoutProgramIDInput[]
    createMany?: CutOff_ranksCreateManyProgramIDInputEnvelope
    set?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    disconnect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    delete?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    update?: CutOff_ranksUpdateWithWhereUniqueWithoutProgramIDInput | CutOff_ranksUpdateWithWhereUniqueWithoutProgramIDInput[]
    updateMany?: CutOff_ranksUpdateManyWithWhereWithoutProgramIDInput | CutOff_ranksUpdateManyWithWhereWithoutProgramIDInput[]
    deleteMany?: CutOff_ranksScalarWhereInput | CutOff_ranksScalarWhereInput[]
  }

  export type ProgramCreateNestedOneWithoutSeat_MatrixInput = {
    create?: XOR<ProgramCreateWithoutSeat_MatrixInput, ProgramUncheckedCreateWithoutSeat_MatrixInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutSeat_MatrixInput
    connect?: ProgramWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutSeat_MatrixInput = {
    create?: XOR<CategoryCreateWithoutSeat_MatrixInput, CategoryUncheckedCreateWithoutSeat_MatrixInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSeat_MatrixInput
    connect?: CategoryWhereUniqueInput
  }

  export type ProgramUpdateOneRequiredWithoutSeat_MatrixNestedInput = {
    create?: XOR<ProgramCreateWithoutSeat_MatrixInput, ProgramUncheckedCreateWithoutSeat_MatrixInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutSeat_MatrixInput
    upsert?: ProgramUpsertWithoutSeat_MatrixInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutSeat_MatrixInput, ProgramUpdateWithoutSeat_MatrixInput>, ProgramUncheckedUpdateWithoutSeat_MatrixInput>
  }

  export type CategoryUpdateOneRequiredWithoutSeat_MatrixNestedInput = {
    create?: XOR<CategoryCreateWithoutSeat_MatrixInput, CategoryUncheckedCreateWithoutSeat_MatrixInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutSeat_MatrixInput
    upsert?: CategoryUpsertWithoutSeat_MatrixInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutSeat_MatrixInput, CategoryUpdateWithoutSeat_MatrixInput>, CategoryUncheckedUpdateWithoutSeat_MatrixInput>
  }

  export type CategoryCreateNestedOneWithoutStudentInput = {
    create?: XOR<CategoryCreateWithoutStudentInput, CategoryUncheckedCreateWithoutStudentInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutStudentInput
    connect?: CategoryWhereUniqueInput
  }

  export type PreferencesCreateNestedManyWithoutStudentIDInput = {
    create?: XOR<PreferencesCreateWithoutStudentIDInput, PreferencesUncheckedCreateWithoutStudentIDInput> | PreferencesCreateWithoutStudentIDInput[] | PreferencesUncheckedCreateWithoutStudentIDInput[]
    connectOrCreate?: PreferencesCreateOrConnectWithoutStudentIDInput | PreferencesCreateOrConnectWithoutStudentIDInput[]
    createMany?: PreferencesCreateManyStudentIDInputEnvelope
    connect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
  }

  export type Allocation_StatusCreateNestedManyWithoutStudentIDInput = {
    create?: XOR<Allocation_StatusCreateWithoutStudentIDInput, Allocation_StatusUncheckedCreateWithoutStudentIDInput> | Allocation_StatusCreateWithoutStudentIDInput[] | Allocation_StatusUncheckedCreateWithoutStudentIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutStudentIDInput | Allocation_StatusCreateOrConnectWithoutStudentIDInput[]
    createMany?: Allocation_StatusCreateManyStudentIDInputEnvelope
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
  }

  export type PreferencesUncheckedCreateNestedManyWithoutStudentIDInput = {
    create?: XOR<PreferencesCreateWithoutStudentIDInput, PreferencesUncheckedCreateWithoutStudentIDInput> | PreferencesCreateWithoutStudentIDInput[] | PreferencesUncheckedCreateWithoutStudentIDInput[]
    connectOrCreate?: PreferencesCreateOrConnectWithoutStudentIDInput | PreferencesCreateOrConnectWithoutStudentIDInput[]
    createMany?: PreferencesCreateManyStudentIDInputEnvelope
    connect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
  }

  export type Allocation_StatusUncheckedCreateNestedManyWithoutStudentIDInput = {
    create?: XOR<Allocation_StatusCreateWithoutStudentIDInput, Allocation_StatusUncheckedCreateWithoutStudentIDInput> | Allocation_StatusCreateWithoutStudentIDInput[] | Allocation_StatusUncheckedCreateWithoutStudentIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutStudentIDInput | Allocation_StatusCreateOrConnectWithoutStudentIDInput[]
    createMany?: Allocation_StatusCreateManyStudentIDInputEnvelope
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
  }

  export type EnumgenderFieldUpdateOperationsInput = {
    set?: $Enums.gender
  }

  export type EnumstatusFieldUpdateOperationsInput = {
    set?: $Enums.status
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type CategoryUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<CategoryCreateWithoutStudentInput, CategoryUncheckedCreateWithoutStudentInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutStudentInput
    upsert?: CategoryUpsertWithoutStudentInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutStudentInput, CategoryUpdateWithoutStudentInput>, CategoryUncheckedUpdateWithoutStudentInput>
  }

  export type PreferencesUpdateManyWithoutStudentIDNestedInput = {
    create?: XOR<PreferencesCreateWithoutStudentIDInput, PreferencesUncheckedCreateWithoutStudentIDInput> | PreferencesCreateWithoutStudentIDInput[] | PreferencesUncheckedCreateWithoutStudentIDInput[]
    connectOrCreate?: PreferencesCreateOrConnectWithoutStudentIDInput | PreferencesCreateOrConnectWithoutStudentIDInput[]
    upsert?: PreferencesUpsertWithWhereUniqueWithoutStudentIDInput | PreferencesUpsertWithWhereUniqueWithoutStudentIDInput[]
    createMany?: PreferencesCreateManyStudentIDInputEnvelope
    set?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    disconnect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    delete?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    connect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    update?: PreferencesUpdateWithWhereUniqueWithoutStudentIDInput | PreferencesUpdateWithWhereUniqueWithoutStudentIDInput[]
    updateMany?: PreferencesUpdateManyWithWhereWithoutStudentIDInput | PreferencesUpdateManyWithWhereWithoutStudentIDInput[]
    deleteMany?: PreferencesScalarWhereInput | PreferencesScalarWhereInput[]
  }

  export type Allocation_StatusUpdateManyWithoutStudentIDNestedInput = {
    create?: XOR<Allocation_StatusCreateWithoutStudentIDInput, Allocation_StatusUncheckedCreateWithoutStudentIDInput> | Allocation_StatusCreateWithoutStudentIDInput[] | Allocation_StatusUncheckedCreateWithoutStudentIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutStudentIDInput | Allocation_StatusCreateOrConnectWithoutStudentIDInput[]
    upsert?: Allocation_StatusUpsertWithWhereUniqueWithoutStudentIDInput | Allocation_StatusUpsertWithWhereUniqueWithoutStudentIDInput[]
    createMany?: Allocation_StatusCreateManyStudentIDInputEnvelope
    set?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    disconnect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    delete?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    update?: Allocation_StatusUpdateWithWhereUniqueWithoutStudentIDInput | Allocation_StatusUpdateWithWhereUniqueWithoutStudentIDInput[]
    updateMany?: Allocation_StatusUpdateManyWithWhereWithoutStudentIDInput | Allocation_StatusUpdateManyWithWhereWithoutStudentIDInput[]
    deleteMany?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
  }

  export type PreferencesUncheckedUpdateManyWithoutStudentIDNestedInput = {
    create?: XOR<PreferencesCreateWithoutStudentIDInput, PreferencesUncheckedCreateWithoutStudentIDInput> | PreferencesCreateWithoutStudentIDInput[] | PreferencesUncheckedCreateWithoutStudentIDInput[]
    connectOrCreate?: PreferencesCreateOrConnectWithoutStudentIDInput | PreferencesCreateOrConnectWithoutStudentIDInput[]
    upsert?: PreferencesUpsertWithWhereUniqueWithoutStudentIDInput | PreferencesUpsertWithWhereUniqueWithoutStudentIDInput[]
    createMany?: PreferencesCreateManyStudentIDInputEnvelope
    set?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    disconnect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    delete?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    connect?: PreferencesWhereUniqueInput | PreferencesWhereUniqueInput[]
    update?: PreferencesUpdateWithWhereUniqueWithoutStudentIDInput | PreferencesUpdateWithWhereUniqueWithoutStudentIDInput[]
    updateMany?: PreferencesUpdateManyWithWhereWithoutStudentIDInput | PreferencesUpdateManyWithWhereWithoutStudentIDInput[]
    deleteMany?: PreferencesScalarWhereInput | PreferencesScalarWhereInput[]
  }

  export type Allocation_StatusUncheckedUpdateManyWithoutStudentIDNestedInput = {
    create?: XOR<Allocation_StatusCreateWithoutStudentIDInput, Allocation_StatusUncheckedCreateWithoutStudentIDInput> | Allocation_StatusCreateWithoutStudentIDInput[] | Allocation_StatusUncheckedCreateWithoutStudentIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutStudentIDInput | Allocation_StatusCreateOrConnectWithoutStudentIDInput[]
    upsert?: Allocation_StatusUpsertWithWhereUniqueWithoutStudentIDInput | Allocation_StatusUpsertWithWhereUniqueWithoutStudentIDInput[]
    createMany?: Allocation_StatusCreateManyStudentIDInputEnvelope
    set?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    disconnect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    delete?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    update?: Allocation_StatusUpdateWithWhereUniqueWithoutStudentIDInput | Allocation_StatusUpdateWithWhereUniqueWithoutStudentIDInput[]
    updateMany?: Allocation_StatusUpdateManyWithWhereWithoutStudentIDInput | Allocation_StatusUpdateManyWithWhereWithoutStudentIDInput[]
    deleteMany?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<StudentCreateWithoutPreferencesInput, StudentUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPreferencesInput
    connect?: StudentWhereUniqueInput
  }

  export type ProgramCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<ProgramCreateWithoutPreferencesInput, ProgramUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutPreferencesInput
    connect?: ProgramWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StudentUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<StudentCreateWithoutPreferencesInput, StudentUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPreferencesInput
    upsert?: StudentUpsertWithoutPreferencesInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPreferencesInput, StudentUpdateWithoutPreferencesInput>, StudentUncheckedUpdateWithoutPreferencesInput>
  }

  export type ProgramUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<ProgramCreateWithoutPreferencesInput, ProgramUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutPreferencesInput
    upsert?: ProgramUpsertWithoutPreferencesInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutPreferencesInput, ProgramUpdateWithoutPreferencesInput>, ProgramUncheckedUpdateWithoutPreferencesInput>
  }

  export type Allocation_StatusCreateNestedManyWithoutRoundIDInput = {
    create?: XOR<Allocation_StatusCreateWithoutRoundIDInput, Allocation_StatusUncheckedCreateWithoutRoundIDInput> | Allocation_StatusCreateWithoutRoundIDInput[] | Allocation_StatusUncheckedCreateWithoutRoundIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutRoundIDInput | Allocation_StatusCreateOrConnectWithoutRoundIDInput[]
    createMany?: Allocation_StatusCreateManyRoundIDInputEnvelope
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
  }

  export type CutOff_ranksCreateNestedManyWithoutRoundIDInput = {
    create?: XOR<CutOff_ranksCreateWithoutRoundIDInput, CutOff_ranksUncheckedCreateWithoutRoundIDInput> | CutOff_ranksCreateWithoutRoundIDInput[] | CutOff_ranksUncheckedCreateWithoutRoundIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutRoundIDInput | CutOff_ranksCreateOrConnectWithoutRoundIDInput[]
    createMany?: CutOff_ranksCreateManyRoundIDInputEnvelope
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
  }

  export type Allocation_StatusUncheckedCreateNestedManyWithoutRoundIDInput = {
    create?: XOR<Allocation_StatusCreateWithoutRoundIDInput, Allocation_StatusUncheckedCreateWithoutRoundIDInput> | Allocation_StatusCreateWithoutRoundIDInput[] | Allocation_StatusUncheckedCreateWithoutRoundIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutRoundIDInput | Allocation_StatusCreateOrConnectWithoutRoundIDInput[]
    createMany?: Allocation_StatusCreateManyRoundIDInputEnvelope
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
  }

  export type CutOff_ranksUncheckedCreateNestedManyWithoutRoundIDInput = {
    create?: XOR<CutOff_ranksCreateWithoutRoundIDInput, CutOff_ranksUncheckedCreateWithoutRoundIDInput> | CutOff_ranksCreateWithoutRoundIDInput[] | CutOff_ranksUncheckedCreateWithoutRoundIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutRoundIDInput | CutOff_ranksCreateOrConnectWithoutRoundIDInput[]
    createMany?: CutOff_ranksCreateManyRoundIDInputEnvelope
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
  }

  export type Allocation_StatusUpdateManyWithoutRoundIDNestedInput = {
    create?: XOR<Allocation_StatusCreateWithoutRoundIDInput, Allocation_StatusUncheckedCreateWithoutRoundIDInput> | Allocation_StatusCreateWithoutRoundIDInput[] | Allocation_StatusUncheckedCreateWithoutRoundIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutRoundIDInput | Allocation_StatusCreateOrConnectWithoutRoundIDInput[]
    upsert?: Allocation_StatusUpsertWithWhereUniqueWithoutRoundIDInput | Allocation_StatusUpsertWithWhereUniqueWithoutRoundIDInput[]
    createMany?: Allocation_StatusCreateManyRoundIDInputEnvelope
    set?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    disconnect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    delete?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    update?: Allocation_StatusUpdateWithWhereUniqueWithoutRoundIDInput | Allocation_StatusUpdateWithWhereUniqueWithoutRoundIDInput[]
    updateMany?: Allocation_StatusUpdateManyWithWhereWithoutRoundIDInput | Allocation_StatusUpdateManyWithWhereWithoutRoundIDInput[]
    deleteMany?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
  }

  export type CutOff_ranksUpdateManyWithoutRoundIDNestedInput = {
    create?: XOR<CutOff_ranksCreateWithoutRoundIDInput, CutOff_ranksUncheckedCreateWithoutRoundIDInput> | CutOff_ranksCreateWithoutRoundIDInput[] | CutOff_ranksUncheckedCreateWithoutRoundIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutRoundIDInput | CutOff_ranksCreateOrConnectWithoutRoundIDInput[]
    upsert?: CutOff_ranksUpsertWithWhereUniqueWithoutRoundIDInput | CutOff_ranksUpsertWithWhereUniqueWithoutRoundIDInput[]
    createMany?: CutOff_ranksCreateManyRoundIDInputEnvelope
    set?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    disconnect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    delete?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    update?: CutOff_ranksUpdateWithWhereUniqueWithoutRoundIDInput | CutOff_ranksUpdateWithWhereUniqueWithoutRoundIDInput[]
    updateMany?: CutOff_ranksUpdateManyWithWhereWithoutRoundIDInput | CutOff_ranksUpdateManyWithWhereWithoutRoundIDInput[]
    deleteMany?: CutOff_ranksScalarWhereInput | CutOff_ranksScalarWhereInput[]
  }

  export type Allocation_StatusUncheckedUpdateManyWithoutRoundIDNestedInput = {
    create?: XOR<Allocation_StatusCreateWithoutRoundIDInput, Allocation_StatusUncheckedCreateWithoutRoundIDInput> | Allocation_StatusCreateWithoutRoundIDInput[] | Allocation_StatusUncheckedCreateWithoutRoundIDInput[]
    connectOrCreate?: Allocation_StatusCreateOrConnectWithoutRoundIDInput | Allocation_StatusCreateOrConnectWithoutRoundIDInput[]
    upsert?: Allocation_StatusUpsertWithWhereUniqueWithoutRoundIDInput | Allocation_StatusUpsertWithWhereUniqueWithoutRoundIDInput[]
    createMany?: Allocation_StatusCreateManyRoundIDInputEnvelope
    set?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    disconnect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    delete?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    connect?: Allocation_StatusWhereUniqueInput | Allocation_StatusWhereUniqueInput[]
    update?: Allocation_StatusUpdateWithWhereUniqueWithoutRoundIDInput | Allocation_StatusUpdateWithWhereUniqueWithoutRoundIDInput[]
    updateMany?: Allocation_StatusUpdateManyWithWhereWithoutRoundIDInput | Allocation_StatusUpdateManyWithWhereWithoutRoundIDInput[]
    deleteMany?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
  }

  export type CutOff_ranksUncheckedUpdateManyWithoutRoundIDNestedInput = {
    create?: XOR<CutOff_ranksCreateWithoutRoundIDInput, CutOff_ranksUncheckedCreateWithoutRoundIDInput> | CutOff_ranksCreateWithoutRoundIDInput[] | CutOff_ranksUncheckedCreateWithoutRoundIDInput[]
    connectOrCreate?: CutOff_ranksCreateOrConnectWithoutRoundIDInput | CutOff_ranksCreateOrConnectWithoutRoundIDInput[]
    upsert?: CutOff_ranksUpsertWithWhereUniqueWithoutRoundIDInput | CutOff_ranksUpsertWithWhereUniqueWithoutRoundIDInput[]
    createMany?: CutOff_ranksCreateManyRoundIDInputEnvelope
    set?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    disconnect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    delete?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    connect?: CutOff_ranksWhereUniqueInput | CutOff_ranksWhereUniqueInput[]
    update?: CutOff_ranksUpdateWithWhereUniqueWithoutRoundIDInput | CutOff_ranksUpdateWithWhereUniqueWithoutRoundIDInput[]
    updateMany?: CutOff_ranksUpdateManyWithWhereWithoutRoundIDInput | CutOff_ranksUpdateManyWithWhereWithoutRoundIDInput[]
    deleteMany?: CutOff_ranksScalarWhereInput | CutOff_ranksScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutAllocation_StatusInput = {
    create?: XOR<StudentCreateWithoutAllocation_StatusInput, StudentUncheckedCreateWithoutAllocation_StatusInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAllocation_StatusInput
    connect?: StudentWhereUniqueInput
  }

  export type ProgramCreateNestedOneWithoutAllocation_StatusInput = {
    create?: XOR<ProgramCreateWithoutAllocation_StatusInput, ProgramUncheckedCreateWithoutAllocation_StatusInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutAllocation_StatusInput
    connect?: ProgramWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutAllocation_StatusInput = {
    create?: XOR<CategoryCreateWithoutAllocation_StatusInput, CategoryUncheckedCreateWithoutAllocation_StatusInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAllocation_StatusInput
    connect?: CategoryWhereUniqueInput
  }

  export type RoundCreateNestedOneWithoutAllocation_StatusInput = {
    create?: XOR<RoundCreateWithoutAllocation_StatusInput, RoundUncheckedCreateWithoutAllocation_StatusInput>
    connectOrCreate?: RoundCreateOrConnectWithoutAllocation_StatusInput
    connect?: RoundWhereUniqueInput
  }

  export type EnumrankTypeFieldUpdateOperationsInput = {
    set?: $Enums.rankType
  }

  export type StudentUpdateOneRequiredWithoutAllocation_StatusNestedInput = {
    create?: XOR<StudentCreateWithoutAllocation_StatusInput, StudentUncheckedCreateWithoutAllocation_StatusInput>
    connectOrCreate?: StudentCreateOrConnectWithoutAllocation_StatusInput
    upsert?: StudentUpsertWithoutAllocation_StatusInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutAllocation_StatusInput, StudentUpdateWithoutAllocation_StatusInput>, StudentUncheckedUpdateWithoutAllocation_StatusInput>
  }

  export type ProgramUpdateOneRequiredWithoutAllocation_StatusNestedInput = {
    create?: XOR<ProgramCreateWithoutAllocation_StatusInput, ProgramUncheckedCreateWithoutAllocation_StatusInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutAllocation_StatusInput
    upsert?: ProgramUpsertWithoutAllocation_StatusInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutAllocation_StatusInput, ProgramUpdateWithoutAllocation_StatusInput>, ProgramUncheckedUpdateWithoutAllocation_StatusInput>
  }

  export type CategoryUpdateOneRequiredWithoutAllocation_StatusNestedInput = {
    create?: XOR<CategoryCreateWithoutAllocation_StatusInput, CategoryUncheckedCreateWithoutAllocation_StatusInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAllocation_StatusInput
    upsert?: CategoryUpsertWithoutAllocation_StatusInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAllocation_StatusInput, CategoryUpdateWithoutAllocation_StatusInput>, CategoryUncheckedUpdateWithoutAllocation_StatusInput>
  }

  export type RoundUpdateOneRequiredWithoutAllocation_StatusNestedInput = {
    create?: XOR<RoundCreateWithoutAllocation_StatusInput, RoundUncheckedCreateWithoutAllocation_StatusInput>
    connectOrCreate?: RoundCreateOrConnectWithoutAllocation_StatusInput
    upsert?: RoundUpsertWithoutAllocation_StatusInput
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutAllocation_StatusInput, RoundUpdateWithoutAllocation_StatusInput>, RoundUncheckedUpdateWithoutAllocation_StatusInput>
  }

  export type ProgramCreateNestedOneWithoutCutOff_ranksInput = {
    create?: XOR<ProgramCreateWithoutCutOff_ranksInput, ProgramUncheckedCreateWithoutCutOff_ranksInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutCutOff_ranksInput
    connect?: ProgramWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCutOff_ranksInput = {
    create?: XOR<CategoryCreateWithoutCutOff_ranksInput, CategoryUncheckedCreateWithoutCutOff_ranksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCutOff_ranksInput
    connect?: CategoryWhereUniqueInput
  }

  export type RoundCreateNestedOneWithoutCutOff_ranksInput = {
    create?: XOR<RoundCreateWithoutCutOff_ranksInput, RoundUncheckedCreateWithoutCutOff_ranksInput>
    connectOrCreate?: RoundCreateOrConnectWithoutCutOff_ranksInput
    connect?: RoundWhereUniqueInput
  }

  export type ProgramUpdateOneRequiredWithoutCutOff_ranksNestedInput = {
    create?: XOR<ProgramCreateWithoutCutOff_ranksInput, ProgramUncheckedCreateWithoutCutOff_ranksInput>
    connectOrCreate?: ProgramCreateOrConnectWithoutCutOff_ranksInput
    upsert?: ProgramUpsertWithoutCutOff_ranksInput
    connect?: ProgramWhereUniqueInput
    update?: XOR<XOR<ProgramUpdateToOneWithWhereWithoutCutOff_ranksInput, ProgramUpdateWithoutCutOff_ranksInput>, ProgramUncheckedUpdateWithoutCutOff_ranksInput>
  }

  export type CategoryUpdateOneRequiredWithoutCutOff_ranksNestedInput = {
    create?: XOR<CategoryCreateWithoutCutOff_ranksInput, CategoryUncheckedCreateWithoutCutOff_ranksInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCutOff_ranksInput
    upsert?: CategoryUpsertWithoutCutOff_ranksInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCutOff_ranksInput, CategoryUpdateWithoutCutOff_ranksInput>, CategoryUncheckedUpdateWithoutCutOff_ranksInput>
  }

  export type RoundUpdateOneRequiredWithoutCutOff_ranksNestedInput = {
    create?: XOR<RoundCreateWithoutCutOff_ranksInput, RoundUncheckedCreateWithoutCutOff_ranksInput>
    connectOrCreate?: RoundCreateOrConnectWithoutCutOff_ranksInput
    upsert?: RoundUpsertWithoutCutOff_ranksInput
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutCutOff_ranksInput, RoundUpdateWithoutCutOff_ranksInput>, RoundUncheckedUpdateWithoutCutOff_ranksInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedEnumgenderFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    not?: NestedEnumgenderFilter<$PrismaModel> | $Enums.gender
  }

  export type NestedEnumstatusFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusFilter<$PrismaModel> | $Enums.status
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedEnumgenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.gender | EnumgenderFieldRefInput<$PrismaModel>
    in?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.gender[] | ListEnumgenderFieldRefInput<$PrismaModel>
    not?: NestedEnumgenderWithAggregatesFilter<$PrismaModel> | $Enums.gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumgenderFilter<$PrismaModel>
    _max?: NestedEnumgenderFilter<$PrismaModel>
  }

  export type NestedEnumstatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.status | EnumstatusFieldRefInput<$PrismaModel>
    in?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.status[] | ListEnumstatusFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusWithAggregatesFilter<$PrismaModel> | $Enums.status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusFilter<$PrismaModel>
    _max?: NestedEnumstatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumrankTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.rankType | EnumrankTypeFieldRefInput<$PrismaModel>
    in?: $Enums.rankType[] | ListEnumrankTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.rankType[] | ListEnumrankTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumrankTypeFilter<$PrismaModel> | $Enums.rankType
  }

  export type NestedEnumrankTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.rankType | EnumrankTypeFieldRefInput<$PrismaModel>
    in?: $Enums.rankType[] | ListEnumrankTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.rankType[] | ListEnumrankTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumrankTypeWithAggregatesFilter<$PrismaModel> | $Enums.rankType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumrankTypeFilter<$PrismaModel>
    _max?: NestedEnumrankTypeFilter<$PrismaModel>
  }

  export type Seat_MatrixCreateWithoutCategoryIDInput = {
    total_seats: number
    progID: ProgramCreateNestedOneWithoutSeat_MatrixInput
  }

  export type Seat_MatrixUncheckedCreateWithoutCategoryIDInput = {
    program_id: number
    total_seats: number
  }

  export type Seat_MatrixCreateOrConnectWithoutCategoryIDInput = {
    where: Seat_MatrixWhereUniqueInput
    create: XOR<Seat_MatrixCreateWithoutCategoryIDInput, Seat_MatrixUncheckedCreateWithoutCategoryIDInput>
  }

  export type Seat_MatrixCreateManyCategoryIDInputEnvelope = {
    data: Seat_MatrixCreateManyCategoryIDInput | Seat_MatrixCreateManyCategoryIDInput[]
    skipDuplicates?: boolean
  }

  export type StudentCreateWithoutCategoryIDInput = {
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
    Preferences?: PreferencesCreateNestedManyWithoutStudentIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutStudentIDInput
  }

  export type StudentUncheckedCreateWithoutCategoryIDInput = {
    student_id?: number
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
    Preferences?: PreferencesUncheckedCreateNestedManyWithoutStudentIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutStudentIDInput
  }

  export type StudentCreateOrConnectWithoutCategoryIDInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutCategoryIDInput, StudentUncheckedCreateWithoutCategoryIDInput>
  }

  export type StudentCreateManyCategoryIDInputEnvelope = {
    data: StudentCreateManyCategoryIDInput | StudentCreateManyCategoryIDInput[]
    skipDuplicates?: boolean
  }

  export type Allocation_StatusCreateWithoutCategoryIDInput = {
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    studentID: StudentCreateNestedOneWithoutAllocation_StatusInput
    programID: ProgramCreateNestedOneWithoutAllocation_StatusInput
    roundID: RoundCreateNestedOneWithoutAllocation_StatusInput
  }

  export type Allocation_StatusUncheckedCreateWithoutCategoryIDInput = {
    student_id: number
    program_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    round_id: number
  }

  export type Allocation_StatusCreateOrConnectWithoutCategoryIDInput = {
    where: Allocation_StatusWhereUniqueInput
    create: XOR<Allocation_StatusCreateWithoutCategoryIDInput, Allocation_StatusUncheckedCreateWithoutCategoryIDInput>
  }

  export type Allocation_StatusCreateManyCategoryIDInputEnvelope = {
    data: Allocation_StatusCreateManyCategoryIDInput | Allocation_StatusCreateManyCategoryIDInput[]
    skipDuplicates?: boolean
  }

  export type CutOff_ranksCreateWithoutCategoryIDInput = {
    closing_rank: bigint | number
    opening_rank: bigint | number
    programID: ProgramCreateNestedOneWithoutCutOff_ranksInput
    roundID: RoundCreateNestedOneWithoutCutOff_ranksInput
  }

  export type CutOff_ranksUncheckedCreateWithoutCategoryIDInput = {
    cutOff_id?: number
    program_id: number
    closing_rank: bigint | number
    opening_rank: bigint | number
    round_id: number
  }

  export type CutOff_ranksCreateOrConnectWithoutCategoryIDInput = {
    where: CutOff_ranksWhereUniqueInput
    create: XOR<CutOff_ranksCreateWithoutCategoryIDInput, CutOff_ranksUncheckedCreateWithoutCategoryIDInput>
  }

  export type CutOff_ranksCreateManyCategoryIDInputEnvelope = {
    data: CutOff_ranksCreateManyCategoryIDInput | CutOff_ranksCreateManyCategoryIDInput[]
    skipDuplicates?: boolean
  }

  export type Seat_MatrixUpsertWithWhereUniqueWithoutCategoryIDInput = {
    where: Seat_MatrixWhereUniqueInput
    update: XOR<Seat_MatrixUpdateWithoutCategoryIDInput, Seat_MatrixUncheckedUpdateWithoutCategoryIDInput>
    create: XOR<Seat_MatrixCreateWithoutCategoryIDInput, Seat_MatrixUncheckedCreateWithoutCategoryIDInput>
  }

  export type Seat_MatrixUpdateWithWhereUniqueWithoutCategoryIDInput = {
    where: Seat_MatrixWhereUniqueInput
    data: XOR<Seat_MatrixUpdateWithoutCategoryIDInput, Seat_MatrixUncheckedUpdateWithoutCategoryIDInput>
  }

  export type Seat_MatrixUpdateManyWithWhereWithoutCategoryIDInput = {
    where: Seat_MatrixScalarWhereInput
    data: XOR<Seat_MatrixUpdateManyMutationInput, Seat_MatrixUncheckedUpdateManyWithoutCategoryIDInput>
  }

  export type Seat_MatrixScalarWhereInput = {
    AND?: Seat_MatrixScalarWhereInput | Seat_MatrixScalarWhereInput[]
    OR?: Seat_MatrixScalarWhereInput[]
    NOT?: Seat_MatrixScalarWhereInput | Seat_MatrixScalarWhereInput[]
    program_id?: IntFilter<"Seat_Matrix"> | number
    category_id?: IntFilter<"Seat_Matrix"> | number
    total_seats?: IntFilter<"Seat_Matrix"> | number
  }

  export type StudentUpsertWithWhereUniqueWithoutCategoryIDInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutCategoryIDInput, StudentUncheckedUpdateWithoutCategoryIDInput>
    create: XOR<StudentCreateWithoutCategoryIDInput, StudentUncheckedCreateWithoutCategoryIDInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutCategoryIDInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutCategoryIDInput, StudentUncheckedUpdateWithoutCategoryIDInput>
  }

  export type StudentUpdateManyWithWhereWithoutCategoryIDInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutCategoryIDInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    student_id?: IntFilter<"Student"> | number
    name?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    mobile_number?: StringFilter<"Student"> | string
    gender?: EnumgenderFilter<"Student"> | $Enums.gender
    current_status?: EnumstatusFilter<"Student"> | $Enums.status
    isRegistered?: BoolFilter<"Student"> | boolean
    general_rank?: BigIntFilter<"Student"> | bigint | number
    category_rank?: BigIntFilter<"Student"> | bigint | number
    category_id?: IntFilter<"Student"> | number
  }

  export type Allocation_StatusUpsertWithWhereUniqueWithoutCategoryIDInput = {
    where: Allocation_StatusWhereUniqueInput
    update: XOR<Allocation_StatusUpdateWithoutCategoryIDInput, Allocation_StatusUncheckedUpdateWithoutCategoryIDInput>
    create: XOR<Allocation_StatusCreateWithoutCategoryIDInput, Allocation_StatusUncheckedCreateWithoutCategoryIDInput>
  }

  export type Allocation_StatusUpdateWithWhereUniqueWithoutCategoryIDInput = {
    where: Allocation_StatusWhereUniqueInput
    data: XOR<Allocation_StatusUpdateWithoutCategoryIDInput, Allocation_StatusUncheckedUpdateWithoutCategoryIDInput>
  }

  export type Allocation_StatusUpdateManyWithWhereWithoutCategoryIDInput = {
    where: Allocation_StatusScalarWhereInput
    data: XOR<Allocation_StatusUpdateManyMutationInput, Allocation_StatusUncheckedUpdateManyWithoutCategoryIDInput>
  }

  export type Allocation_StatusScalarWhereInput = {
    AND?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
    OR?: Allocation_StatusScalarWhereInput[]
    NOT?: Allocation_StatusScalarWhereInput | Allocation_StatusScalarWhereInput[]
    student_id?: IntFilter<"Allocation_Status"> | number
    program_id?: IntFilter<"Allocation_Status"> | number
    category_id?: IntFilter<"Allocation_Status"> | number
    rank_value_used?: BigIntFilter<"Allocation_Status"> | bigint | number
    rank_type_used?: EnumrankTypeFilter<"Allocation_Status"> | $Enums.rankType
    round_id?: IntFilter<"Allocation_Status"> | number
  }

  export type CutOff_ranksUpsertWithWhereUniqueWithoutCategoryIDInput = {
    where: CutOff_ranksWhereUniqueInput
    update: XOR<CutOff_ranksUpdateWithoutCategoryIDInput, CutOff_ranksUncheckedUpdateWithoutCategoryIDInput>
    create: XOR<CutOff_ranksCreateWithoutCategoryIDInput, CutOff_ranksUncheckedCreateWithoutCategoryIDInput>
  }

  export type CutOff_ranksUpdateWithWhereUniqueWithoutCategoryIDInput = {
    where: CutOff_ranksWhereUniqueInput
    data: XOR<CutOff_ranksUpdateWithoutCategoryIDInput, CutOff_ranksUncheckedUpdateWithoutCategoryIDInput>
  }

  export type CutOff_ranksUpdateManyWithWhereWithoutCategoryIDInput = {
    where: CutOff_ranksScalarWhereInput
    data: XOR<CutOff_ranksUpdateManyMutationInput, CutOff_ranksUncheckedUpdateManyWithoutCategoryIDInput>
  }

  export type CutOff_ranksScalarWhereInput = {
    AND?: CutOff_ranksScalarWhereInput | CutOff_ranksScalarWhereInput[]
    OR?: CutOff_ranksScalarWhereInput[]
    NOT?: CutOff_ranksScalarWhereInput | CutOff_ranksScalarWhereInput[]
    cutOff_id?: IntFilter<"CutOff_ranks"> | number
    program_id?: IntFilter<"CutOff_ranks"> | number
    category_id?: IntFilter<"CutOff_ranks"> | number
    closing_rank?: BigIntFilter<"CutOff_ranks"> | bigint | number
    opening_rank?: BigIntFilter<"CutOff_ranks"> | bigint | number
    round_id?: IntFilter<"CutOff_ranks"> | number
  }

  export type ProgramCreateWithoutCollegeIDInput = {
    duration: string
    deptID: DepartmentCreateNestedOneWithoutProgramInput
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramUncheckedCreateWithoutCollegeIDInput = {
    program_id?: number
    department_id: number
    duration: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesUncheckedCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramCreateOrConnectWithoutCollegeIDInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutCollegeIDInput, ProgramUncheckedCreateWithoutCollegeIDInput>
  }

  export type ProgramCreateManyCollegeIDInputEnvelope = {
    data: ProgramCreateManyCollegeIDInput | ProgramCreateManyCollegeIDInput[]
    skipDuplicates?: boolean
  }

  export type ProgramUpsertWithWhereUniqueWithoutCollegeIDInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutCollegeIDInput, ProgramUncheckedUpdateWithoutCollegeIDInput>
    create: XOR<ProgramCreateWithoutCollegeIDInput, ProgramUncheckedCreateWithoutCollegeIDInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutCollegeIDInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutCollegeIDInput, ProgramUncheckedUpdateWithoutCollegeIDInput>
  }

  export type ProgramUpdateManyWithWhereWithoutCollegeIDInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutCollegeIDInput>
  }

  export type ProgramScalarWhereInput = {
    AND?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    OR?: ProgramScalarWhereInput[]
    NOT?: ProgramScalarWhereInput | ProgramScalarWhereInput[]
    program_id?: IntFilter<"Program"> | number
    department_id?: IntFilter<"Program"> | number
    college_id?: IntFilter<"Program"> | number
    duration?: StringFilter<"Program"> | string
  }

  export type ProgramCreateWithoutDeptIDInput = {
    duration: string
    collegeID: CollegeCreateNestedOneWithoutProgramInput
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramUncheckedCreateWithoutDeptIDInput = {
    program_id?: number
    college_id: number
    duration: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesUncheckedCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramCreateOrConnectWithoutDeptIDInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutDeptIDInput, ProgramUncheckedCreateWithoutDeptIDInput>
  }

  export type ProgramCreateManyDeptIDInputEnvelope = {
    data: ProgramCreateManyDeptIDInput | ProgramCreateManyDeptIDInput[]
    skipDuplicates?: boolean
  }

  export type ProgramUpsertWithWhereUniqueWithoutDeptIDInput = {
    where: ProgramWhereUniqueInput
    update: XOR<ProgramUpdateWithoutDeptIDInput, ProgramUncheckedUpdateWithoutDeptIDInput>
    create: XOR<ProgramCreateWithoutDeptIDInput, ProgramUncheckedCreateWithoutDeptIDInput>
  }

  export type ProgramUpdateWithWhereUniqueWithoutDeptIDInput = {
    where: ProgramWhereUniqueInput
    data: XOR<ProgramUpdateWithoutDeptIDInput, ProgramUncheckedUpdateWithoutDeptIDInput>
  }

  export type ProgramUpdateManyWithWhereWithoutDeptIDInput = {
    where: ProgramScalarWhereInput
    data: XOR<ProgramUpdateManyMutationInput, ProgramUncheckedUpdateManyWithoutDeptIDInput>
  }

  export type DepartmentCreateWithoutProgramInput = {
    department_name: string
  }

  export type DepartmentUncheckedCreateWithoutProgramInput = {
    department_id?: number
    department_name: string
  }

  export type DepartmentCreateOrConnectWithoutProgramInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutProgramInput, DepartmentUncheckedCreateWithoutProgramInput>
  }

  export type CollegeCreateWithoutProgramInput = {
    college_name: string
    city: string
    state: string
    pincode: string
  }

  export type CollegeUncheckedCreateWithoutProgramInput = {
    college_id?: number
    college_name: string
    city: string
    state: string
    pincode: string
  }

  export type CollegeCreateOrConnectWithoutProgramInput = {
    where: CollegeWhereUniqueInput
    create: XOR<CollegeCreateWithoutProgramInput, CollegeUncheckedCreateWithoutProgramInput>
  }

  export type Seat_MatrixCreateWithoutProgIDInput = {
    total_seats: number
    categoryID: CategoryCreateNestedOneWithoutSeat_MatrixInput
  }

  export type Seat_MatrixUncheckedCreateWithoutProgIDInput = {
    category_id: number
    total_seats: number
  }

  export type Seat_MatrixCreateOrConnectWithoutProgIDInput = {
    where: Seat_MatrixWhereUniqueInput
    create: XOR<Seat_MatrixCreateWithoutProgIDInput, Seat_MatrixUncheckedCreateWithoutProgIDInput>
  }

  export type Seat_MatrixCreateManyProgIDInputEnvelope = {
    data: Seat_MatrixCreateManyProgIDInput | Seat_MatrixCreateManyProgIDInput[]
    skipDuplicates?: boolean
  }

  export type PreferencesCreateWithoutProgramIDInput = {
    preference_number: number
    created_at?: Date | string
    studentID: StudentCreateNestedOneWithoutPreferencesInput
  }

  export type PreferencesUncheckedCreateWithoutProgramIDInput = {
    student_id: number
    preference_number: number
    created_at?: Date | string
  }

  export type PreferencesCreateOrConnectWithoutProgramIDInput = {
    where: PreferencesWhereUniqueInput
    create: XOR<PreferencesCreateWithoutProgramIDInput, PreferencesUncheckedCreateWithoutProgramIDInput>
  }

  export type PreferencesCreateManyProgramIDInputEnvelope = {
    data: PreferencesCreateManyProgramIDInput | PreferencesCreateManyProgramIDInput[]
    skipDuplicates?: boolean
  }

  export type Allocation_StatusCreateWithoutProgramIDInput = {
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    studentID: StudentCreateNestedOneWithoutAllocation_StatusInput
    categoryID: CategoryCreateNestedOneWithoutAllocation_StatusInput
    roundID: RoundCreateNestedOneWithoutAllocation_StatusInput
  }

  export type Allocation_StatusUncheckedCreateWithoutProgramIDInput = {
    student_id: number
    category_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    round_id: number
  }

  export type Allocation_StatusCreateOrConnectWithoutProgramIDInput = {
    where: Allocation_StatusWhereUniqueInput
    create: XOR<Allocation_StatusCreateWithoutProgramIDInput, Allocation_StatusUncheckedCreateWithoutProgramIDInput>
  }

  export type Allocation_StatusCreateManyProgramIDInputEnvelope = {
    data: Allocation_StatusCreateManyProgramIDInput | Allocation_StatusCreateManyProgramIDInput[]
    skipDuplicates?: boolean
  }

  export type CutOff_ranksCreateWithoutProgramIDInput = {
    closing_rank: bigint | number
    opening_rank: bigint | number
    categoryID: CategoryCreateNestedOneWithoutCutOff_ranksInput
    roundID: RoundCreateNestedOneWithoutCutOff_ranksInput
  }

  export type CutOff_ranksUncheckedCreateWithoutProgramIDInput = {
    cutOff_id?: number
    category_id: number
    closing_rank: bigint | number
    opening_rank: bigint | number
    round_id: number
  }

  export type CutOff_ranksCreateOrConnectWithoutProgramIDInput = {
    where: CutOff_ranksWhereUniqueInput
    create: XOR<CutOff_ranksCreateWithoutProgramIDInput, CutOff_ranksUncheckedCreateWithoutProgramIDInput>
  }

  export type CutOff_ranksCreateManyProgramIDInputEnvelope = {
    data: CutOff_ranksCreateManyProgramIDInput | CutOff_ranksCreateManyProgramIDInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutProgramInput = {
    update: XOR<DepartmentUpdateWithoutProgramInput, DepartmentUncheckedUpdateWithoutProgramInput>
    create: XOR<DepartmentCreateWithoutProgramInput, DepartmentUncheckedCreateWithoutProgramInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutProgramInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutProgramInput, DepartmentUncheckedUpdateWithoutProgramInput>
  }

  export type DepartmentUpdateWithoutProgramInput = {
    department_name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutProgramInput = {
    department_id?: IntFieldUpdateOperationsInput | number
    department_name?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeUpsertWithoutProgramInput = {
    update: XOR<CollegeUpdateWithoutProgramInput, CollegeUncheckedUpdateWithoutProgramInput>
    create: XOR<CollegeCreateWithoutProgramInput, CollegeUncheckedCreateWithoutProgramInput>
    where?: CollegeWhereInput
  }

  export type CollegeUpdateToOneWithWhereWithoutProgramInput = {
    where?: CollegeWhereInput
    data: XOR<CollegeUpdateWithoutProgramInput, CollegeUncheckedUpdateWithoutProgramInput>
  }

  export type CollegeUpdateWithoutProgramInput = {
    college_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
  }

  export type CollegeUncheckedUpdateWithoutProgramInput = {
    college_id?: IntFieldUpdateOperationsInput | number
    college_name?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    pincode?: StringFieldUpdateOperationsInput | string
  }

  export type Seat_MatrixUpsertWithWhereUniqueWithoutProgIDInput = {
    where: Seat_MatrixWhereUniqueInput
    update: XOR<Seat_MatrixUpdateWithoutProgIDInput, Seat_MatrixUncheckedUpdateWithoutProgIDInput>
    create: XOR<Seat_MatrixCreateWithoutProgIDInput, Seat_MatrixUncheckedCreateWithoutProgIDInput>
  }

  export type Seat_MatrixUpdateWithWhereUniqueWithoutProgIDInput = {
    where: Seat_MatrixWhereUniqueInput
    data: XOR<Seat_MatrixUpdateWithoutProgIDInput, Seat_MatrixUncheckedUpdateWithoutProgIDInput>
  }

  export type Seat_MatrixUpdateManyWithWhereWithoutProgIDInput = {
    where: Seat_MatrixScalarWhereInput
    data: XOR<Seat_MatrixUpdateManyMutationInput, Seat_MatrixUncheckedUpdateManyWithoutProgIDInput>
  }

  export type PreferencesUpsertWithWhereUniqueWithoutProgramIDInput = {
    where: PreferencesWhereUniqueInput
    update: XOR<PreferencesUpdateWithoutProgramIDInput, PreferencesUncheckedUpdateWithoutProgramIDInput>
    create: XOR<PreferencesCreateWithoutProgramIDInput, PreferencesUncheckedCreateWithoutProgramIDInput>
  }

  export type PreferencesUpdateWithWhereUniqueWithoutProgramIDInput = {
    where: PreferencesWhereUniqueInput
    data: XOR<PreferencesUpdateWithoutProgramIDInput, PreferencesUncheckedUpdateWithoutProgramIDInput>
  }

  export type PreferencesUpdateManyWithWhereWithoutProgramIDInput = {
    where: PreferencesScalarWhereInput
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyWithoutProgramIDInput>
  }

  export type PreferencesScalarWhereInput = {
    AND?: PreferencesScalarWhereInput | PreferencesScalarWhereInput[]
    OR?: PreferencesScalarWhereInput[]
    NOT?: PreferencesScalarWhereInput | PreferencesScalarWhereInput[]
    student_id?: IntFilter<"Preferences"> | number
    preference_number?: IntFilter<"Preferences"> | number
    created_at?: DateTimeFilter<"Preferences"> | Date | string
    program_id?: IntFilter<"Preferences"> | number
  }

  export type Allocation_StatusUpsertWithWhereUniqueWithoutProgramIDInput = {
    where: Allocation_StatusWhereUniqueInput
    update: XOR<Allocation_StatusUpdateWithoutProgramIDInput, Allocation_StatusUncheckedUpdateWithoutProgramIDInput>
    create: XOR<Allocation_StatusCreateWithoutProgramIDInput, Allocation_StatusUncheckedCreateWithoutProgramIDInput>
  }

  export type Allocation_StatusUpdateWithWhereUniqueWithoutProgramIDInput = {
    where: Allocation_StatusWhereUniqueInput
    data: XOR<Allocation_StatusUpdateWithoutProgramIDInput, Allocation_StatusUncheckedUpdateWithoutProgramIDInput>
  }

  export type Allocation_StatusUpdateManyWithWhereWithoutProgramIDInput = {
    where: Allocation_StatusScalarWhereInput
    data: XOR<Allocation_StatusUpdateManyMutationInput, Allocation_StatusUncheckedUpdateManyWithoutProgramIDInput>
  }

  export type CutOff_ranksUpsertWithWhereUniqueWithoutProgramIDInput = {
    where: CutOff_ranksWhereUniqueInput
    update: XOR<CutOff_ranksUpdateWithoutProgramIDInput, CutOff_ranksUncheckedUpdateWithoutProgramIDInput>
    create: XOR<CutOff_ranksCreateWithoutProgramIDInput, CutOff_ranksUncheckedCreateWithoutProgramIDInput>
  }

  export type CutOff_ranksUpdateWithWhereUniqueWithoutProgramIDInput = {
    where: CutOff_ranksWhereUniqueInput
    data: XOR<CutOff_ranksUpdateWithoutProgramIDInput, CutOff_ranksUncheckedUpdateWithoutProgramIDInput>
  }

  export type CutOff_ranksUpdateManyWithWhereWithoutProgramIDInput = {
    where: CutOff_ranksScalarWhereInput
    data: XOR<CutOff_ranksUpdateManyMutationInput, CutOff_ranksUncheckedUpdateManyWithoutProgramIDInput>
  }

  export type ProgramCreateWithoutSeat_MatrixInput = {
    duration: string
    deptID: DepartmentCreateNestedOneWithoutProgramInput
    collegeID: CollegeCreateNestedOneWithoutProgramInput
    Preferences?: PreferencesCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramUncheckedCreateWithoutSeat_MatrixInput = {
    program_id?: number
    department_id: number
    college_id: number
    duration: string
    Preferences?: PreferencesUncheckedCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramCreateOrConnectWithoutSeat_MatrixInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutSeat_MatrixInput, ProgramUncheckedCreateWithoutSeat_MatrixInput>
  }

  export type CategoryCreateWithoutSeat_MatrixInput = {
    category_name: string
    Student?: StudentCreateNestedManyWithoutCategoryIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutCategoryIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryUncheckedCreateWithoutSeat_MatrixInput = {
    category_id?: number
    category_name: string
    Student?: StudentUncheckedCreateNestedManyWithoutCategoryIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutCategoryIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryCreateOrConnectWithoutSeat_MatrixInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutSeat_MatrixInput, CategoryUncheckedCreateWithoutSeat_MatrixInput>
  }

  export type ProgramUpsertWithoutSeat_MatrixInput = {
    update: XOR<ProgramUpdateWithoutSeat_MatrixInput, ProgramUncheckedUpdateWithoutSeat_MatrixInput>
    create: XOR<ProgramCreateWithoutSeat_MatrixInput, ProgramUncheckedCreateWithoutSeat_MatrixInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutSeat_MatrixInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutSeat_MatrixInput, ProgramUncheckedUpdateWithoutSeat_MatrixInput>
  }

  export type ProgramUpdateWithoutSeat_MatrixInput = {
    duration?: StringFieldUpdateOperationsInput | string
    deptID?: DepartmentUpdateOneRequiredWithoutProgramNestedInput
    collegeID?: CollegeUpdateOneRequiredWithoutProgramNestedInput
    Preferences?: PreferencesUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramUncheckedUpdateWithoutSeat_MatrixInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    college_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    Preferences?: PreferencesUncheckedUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutProgramIDNestedInput
  }

  export type CategoryUpsertWithoutSeat_MatrixInput = {
    update: XOR<CategoryUpdateWithoutSeat_MatrixInput, CategoryUncheckedUpdateWithoutSeat_MatrixInput>
    create: XOR<CategoryCreateWithoutSeat_MatrixInput, CategoryUncheckedCreateWithoutSeat_MatrixInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutSeat_MatrixInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutSeat_MatrixInput, CategoryUncheckedUpdateWithoutSeat_MatrixInput>
  }

  export type CategoryUpdateWithoutSeat_MatrixInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    Student?: StudentUpdateManyWithoutCategoryIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutCategoryIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutCategoryIDNestedInput
  }

  export type CategoryUncheckedUpdateWithoutSeat_MatrixInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Student?: StudentUncheckedUpdateManyWithoutCategoryIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutCategoryIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutCategoryIDNestedInput
  }

  export type CategoryCreateWithoutStudentInput = {
    category_name: string
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutCategoryIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutCategoryIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryUncheckedCreateWithoutStudentInput = {
    category_id?: number
    category_name: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutCategoryIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutCategoryIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryCreateOrConnectWithoutStudentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutStudentInput, CategoryUncheckedCreateWithoutStudentInput>
  }

  export type PreferencesCreateWithoutStudentIDInput = {
    preference_number: number
    created_at?: Date | string
    programID: ProgramCreateNestedOneWithoutPreferencesInput
  }

  export type PreferencesUncheckedCreateWithoutStudentIDInput = {
    preference_number: number
    created_at?: Date | string
    program_id: number
  }

  export type PreferencesCreateOrConnectWithoutStudentIDInput = {
    where: PreferencesWhereUniqueInput
    create: XOR<PreferencesCreateWithoutStudentIDInput, PreferencesUncheckedCreateWithoutStudentIDInput>
  }

  export type PreferencesCreateManyStudentIDInputEnvelope = {
    data: PreferencesCreateManyStudentIDInput | PreferencesCreateManyStudentIDInput[]
    skipDuplicates?: boolean
  }

  export type Allocation_StatusCreateWithoutStudentIDInput = {
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    programID: ProgramCreateNestedOneWithoutAllocation_StatusInput
    categoryID: CategoryCreateNestedOneWithoutAllocation_StatusInput
    roundID: RoundCreateNestedOneWithoutAllocation_StatusInput
  }

  export type Allocation_StatusUncheckedCreateWithoutStudentIDInput = {
    program_id: number
    category_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    round_id: number
  }

  export type Allocation_StatusCreateOrConnectWithoutStudentIDInput = {
    where: Allocation_StatusWhereUniqueInput
    create: XOR<Allocation_StatusCreateWithoutStudentIDInput, Allocation_StatusUncheckedCreateWithoutStudentIDInput>
  }

  export type Allocation_StatusCreateManyStudentIDInputEnvelope = {
    data: Allocation_StatusCreateManyStudentIDInput | Allocation_StatusCreateManyStudentIDInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutStudentInput = {
    update: XOR<CategoryUpdateWithoutStudentInput, CategoryUncheckedUpdateWithoutStudentInput>
    create: XOR<CategoryCreateWithoutStudentInput, CategoryUncheckedCreateWithoutStudentInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutStudentInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutStudentInput, CategoryUncheckedUpdateWithoutStudentInput>
  }

  export type CategoryUpdateWithoutStudentInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutCategoryIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutCategoryIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutCategoryIDNestedInput
  }

  export type CategoryUncheckedUpdateWithoutStudentInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutCategoryIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutCategoryIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutCategoryIDNestedInput
  }

  export type PreferencesUpsertWithWhereUniqueWithoutStudentIDInput = {
    where: PreferencesWhereUniqueInput
    update: XOR<PreferencesUpdateWithoutStudentIDInput, PreferencesUncheckedUpdateWithoutStudentIDInput>
    create: XOR<PreferencesCreateWithoutStudentIDInput, PreferencesUncheckedCreateWithoutStudentIDInput>
  }

  export type PreferencesUpdateWithWhereUniqueWithoutStudentIDInput = {
    where: PreferencesWhereUniqueInput
    data: XOR<PreferencesUpdateWithoutStudentIDInput, PreferencesUncheckedUpdateWithoutStudentIDInput>
  }

  export type PreferencesUpdateManyWithWhereWithoutStudentIDInput = {
    where: PreferencesScalarWhereInput
    data: XOR<PreferencesUpdateManyMutationInput, PreferencesUncheckedUpdateManyWithoutStudentIDInput>
  }

  export type Allocation_StatusUpsertWithWhereUniqueWithoutStudentIDInput = {
    where: Allocation_StatusWhereUniqueInput
    update: XOR<Allocation_StatusUpdateWithoutStudentIDInput, Allocation_StatusUncheckedUpdateWithoutStudentIDInput>
    create: XOR<Allocation_StatusCreateWithoutStudentIDInput, Allocation_StatusUncheckedCreateWithoutStudentIDInput>
  }

  export type Allocation_StatusUpdateWithWhereUniqueWithoutStudentIDInput = {
    where: Allocation_StatusWhereUniqueInput
    data: XOR<Allocation_StatusUpdateWithoutStudentIDInput, Allocation_StatusUncheckedUpdateWithoutStudentIDInput>
  }

  export type Allocation_StatusUpdateManyWithWhereWithoutStudentIDInput = {
    where: Allocation_StatusScalarWhereInput
    data: XOR<Allocation_StatusUpdateManyMutationInput, Allocation_StatusUncheckedUpdateManyWithoutStudentIDInput>
  }

  export type StudentCreateWithoutPreferencesInput = {
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
    categoryID: CategoryCreateNestedOneWithoutStudentInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutStudentIDInput
  }

  export type StudentUncheckedCreateWithoutPreferencesInput = {
    student_id?: number
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
    category_id: number
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutStudentIDInput
  }

  export type StudentCreateOrConnectWithoutPreferencesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPreferencesInput, StudentUncheckedCreateWithoutPreferencesInput>
  }

  export type ProgramCreateWithoutPreferencesInput = {
    duration: string
    deptID: DepartmentCreateNestedOneWithoutProgramInput
    collegeID: CollegeCreateNestedOneWithoutProgramInput
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutProgIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramUncheckedCreateWithoutPreferencesInput = {
    program_id?: number
    department_id: number
    college_id: number
    duration: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutProgIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramCreateOrConnectWithoutPreferencesInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutPreferencesInput, ProgramUncheckedCreateWithoutPreferencesInput>
  }

  export type StudentUpsertWithoutPreferencesInput = {
    update: XOR<StudentUpdateWithoutPreferencesInput, StudentUncheckedUpdateWithoutPreferencesInput>
    create: XOR<StudentCreateWithoutPreferencesInput, StudentUncheckedCreateWithoutPreferencesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPreferencesInput, StudentUncheckedUpdateWithoutPreferencesInput>
  }

  export type StudentUpdateWithoutPreferencesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryID?: CategoryUpdateOneRequiredWithoutStudentNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutStudentIDNestedInput
  }

  export type StudentUncheckedUpdateWithoutPreferencesInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: IntFieldUpdateOperationsInput | number
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutStudentIDNestedInput
  }

  export type ProgramUpsertWithoutPreferencesInput = {
    update: XOR<ProgramUpdateWithoutPreferencesInput, ProgramUncheckedUpdateWithoutPreferencesInput>
    create: XOR<ProgramCreateWithoutPreferencesInput, ProgramUncheckedCreateWithoutPreferencesInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutPreferencesInput, ProgramUncheckedUpdateWithoutPreferencesInput>
  }

  export type ProgramUpdateWithoutPreferencesInput = {
    duration?: StringFieldUpdateOperationsInput | string
    deptID?: DepartmentUpdateOneRequiredWithoutProgramNestedInput
    collegeID?: CollegeUpdateOneRequiredWithoutProgramNestedInput
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutProgIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramUncheckedUpdateWithoutPreferencesInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    college_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutProgIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutProgramIDNestedInput
  }

  export type Allocation_StatusCreateWithoutRoundIDInput = {
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    studentID: StudentCreateNestedOneWithoutAllocation_StatusInput
    programID: ProgramCreateNestedOneWithoutAllocation_StatusInput
    categoryID: CategoryCreateNestedOneWithoutAllocation_StatusInput
  }

  export type Allocation_StatusUncheckedCreateWithoutRoundIDInput = {
    student_id: number
    program_id: number
    category_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
  }

  export type Allocation_StatusCreateOrConnectWithoutRoundIDInput = {
    where: Allocation_StatusWhereUniqueInput
    create: XOR<Allocation_StatusCreateWithoutRoundIDInput, Allocation_StatusUncheckedCreateWithoutRoundIDInput>
  }

  export type Allocation_StatusCreateManyRoundIDInputEnvelope = {
    data: Allocation_StatusCreateManyRoundIDInput | Allocation_StatusCreateManyRoundIDInput[]
    skipDuplicates?: boolean
  }

  export type CutOff_ranksCreateWithoutRoundIDInput = {
    closing_rank: bigint | number
    opening_rank: bigint | number
    programID: ProgramCreateNestedOneWithoutCutOff_ranksInput
    categoryID: CategoryCreateNestedOneWithoutCutOff_ranksInput
  }

  export type CutOff_ranksUncheckedCreateWithoutRoundIDInput = {
    cutOff_id?: number
    program_id: number
    category_id: number
    closing_rank: bigint | number
    opening_rank: bigint | number
  }

  export type CutOff_ranksCreateOrConnectWithoutRoundIDInput = {
    where: CutOff_ranksWhereUniqueInput
    create: XOR<CutOff_ranksCreateWithoutRoundIDInput, CutOff_ranksUncheckedCreateWithoutRoundIDInput>
  }

  export type CutOff_ranksCreateManyRoundIDInputEnvelope = {
    data: CutOff_ranksCreateManyRoundIDInput | CutOff_ranksCreateManyRoundIDInput[]
    skipDuplicates?: boolean
  }

  export type Allocation_StatusUpsertWithWhereUniqueWithoutRoundIDInput = {
    where: Allocation_StatusWhereUniqueInput
    update: XOR<Allocation_StatusUpdateWithoutRoundIDInput, Allocation_StatusUncheckedUpdateWithoutRoundIDInput>
    create: XOR<Allocation_StatusCreateWithoutRoundIDInput, Allocation_StatusUncheckedCreateWithoutRoundIDInput>
  }

  export type Allocation_StatusUpdateWithWhereUniqueWithoutRoundIDInput = {
    where: Allocation_StatusWhereUniqueInput
    data: XOR<Allocation_StatusUpdateWithoutRoundIDInput, Allocation_StatusUncheckedUpdateWithoutRoundIDInput>
  }

  export type Allocation_StatusUpdateManyWithWhereWithoutRoundIDInput = {
    where: Allocation_StatusScalarWhereInput
    data: XOR<Allocation_StatusUpdateManyMutationInput, Allocation_StatusUncheckedUpdateManyWithoutRoundIDInput>
  }

  export type CutOff_ranksUpsertWithWhereUniqueWithoutRoundIDInput = {
    where: CutOff_ranksWhereUniqueInput
    update: XOR<CutOff_ranksUpdateWithoutRoundIDInput, CutOff_ranksUncheckedUpdateWithoutRoundIDInput>
    create: XOR<CutOff_ranksCreateWithoutRoundIDInput, CutOff_ranksUncheckedCreateWithoutRoundIDInput>
  }

  export type CutOff_ranksUpdateWithWhereUniqueWithoutRoundIDInput = {
    where: CutOff_ranksWhereUniqueInput
    data: XOR<CutOff_ranksUpdateWithoutRoundIDInput, CutOff_ranksUncheckedUpdateWithoutRoundIDInput>
  }

  export type CutOff_ranksUpdateManyWithWhereWithoutRoundIDInput = {
    where: CutOff_ranksScalarWhereInput
    data: XOR<CutOff_ranksUpdateManyMutationInput, CutOff_ranksUncheckedUpdateManyWithoutRoundIDInput>
  }

  export type StudentCreateWithoutAllocation_StatusInput = {
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
    categoryID: CategoryCreateNestedOneWithoutStudentInput
    Preferences?: PreferencesCreateNestedManyWithoutStudentIDInput
  }

  export type StudentUncheckedCreateWithoutAllocation_StatusInput = {
    student_id?: number
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
    category_id: number
    Preferences?: PreferencesUncheckedCreateNestedManyWithoutStudentIDInput
  }

  export type StudentCreateOrConnectWithoutAllocation_StatusInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutAllocation_StatusInput, StudentUncheckedCreateWithoutAllocation_StatusInput>
  }

  export type ProgramCreateWithoutAllocation_StatusInput = {
    duration: string
    deptID: DepartmentCreateNestedOneWithoutProgramInput
    collegeID: CollegeCreateNestedOneWithoutProgramInput
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramUncheckedCreateWithoutAllocation_StatusInput = {
    program_id?: number
    department_id: number
    college_id: number
    duration: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesUncheckedCreateNestedManyWithoutProgramIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramCreateOrConnectWithoutAllocation_StatusInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutAllocation_StatusInput, ProgramUncheckedCreateWithoutAllocation_StatusInput>
  }

  export type CategoryCreateWithoutAllocation_StatusInput = {
    category_name: string
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutCategoryIDInput
    Student?: StudentCreateNestedManyWithoutCategoryIDInput
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryUncheckedCreateWithoutAllocation_StatusInput = {
    category_id?: number
    category_name: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutCategoryIDInput
    Student?: StudentUncheckedCreateNestedManyWithoutCategoryIDInput
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryCreateOrConnectWithoutAllocation_StatusInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAllocation_StatusInput, CategoryUncheckedCreateWithoutAllocation_StatusInput>
  }

  export type RoundCreateWithoutAllocation_StatusInput = {
    start_time?: Date | string
    end_time: Date | string
    duration: number
    CutOff_ranks?: CutOff_ranksCreateNestedManyWithoutRoundIDInput
  }

  export type RoundUncheckedCreateWithoutAllocation_StatusInput = {
    round_number?: number
    start_time?: Date | string
    end_time: Date | string
    duration: number
    CutOff_ranks?: CutOff_ranksUncheckedCreateNestedManyWithoutRoundIDInput
  }

  export type RoundCreateOrConnectWithoutAllocation_StatusInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutAllocation_StatusInput, RoundUncheckedCreateWithoutAllocation_StatusInput>
  }

  export type StudentUpsertWithoutAllocation_StatusInput = {
    update: XOR<StudentUpdateWithoutAllocation_StatusInput, StudentUncheckedUpdateWithoutAllocation_StatusInput>
    create: XOR<StudentCreateWithoutAllocation_StatusInput, StudentUncheckedCreateWithoutAllocation_StatusInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutAllocation_StatusInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutAllocation_StatusInput, StudentUncheckedUpdateWithoutAllocation_StatusInput>
  }

  export type StudentUpdateWithoutAllocation_StatusInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryID?: CategoryUpdateOneRequiredWithoutStudentNestedInput
    Preferences?: PreferencesUpdateManyWithoutStudentIDNestedInput
  }

  export type StudentUncheckedUpdateWithoutAllocation_StatusInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_id?: IntFieldUpdateOperationsInput | number
    Preferences?: PreferencesUncheckedUpdateManyWithoutStudentIDNestedInput
  }

  export type ProgramUpsertWithoutAllocation_StatusInput = {
    update: XOR<ProgramUpdateWithoutAllocation_StatusInput, ProgramUncheckedUpdateWithoutAllocation_StatusInput>
    create: XOR<ProgramCreateWithoutAllocation_StatusInput, ProgramUncheckedCreateWithoutAllocation_StatusInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutAllocation_StatusInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutAllocation_StatusInput, ProgramUncheckedUpdateWithoutAllocation_StatusInput>
  }

  export type ProgramUpdateWithoutAllocation_StatusInput = {
    duration?: StringFieldUpdateOperationsInput | string
    deptID?: DepartmentUpdateOneRequiredWithoutProgramNestedInput
    collegeID?: CollegeUpdateOneRequiredWithoutProgramNestedInput
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramUncheckedUpdateWithoutAllocation_StatusInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    college_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUncheckedUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutProgramIDNestedInput
  }

  export type CategoryUpsertWithoutAllocation_StatusInput = {
    update: XOR<CategoryUpdateWithoutAllocation_StatusInput, CategoryUncheckedUpdateWithoutAllocation_StatusInput>
    create: XOR<CategoryCreateWithoutAllocation_StatusInput, CategoryUncheckedCreateWithoutAllocation_StatusInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAllocation_StatusInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAllocation_StatusInput, CategoryUncheckedUpdateWithoutAllocation_StatusInput>
  }

  export type CategoryUpdateWithoutAllocation_StatusInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutCategoryIDNestedInput
    Student?: StudentUpdateManyWithoutCategoryIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutCategoryIDNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAllocation_StatusInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutCategoryIDNestedInput
    Student?: StudentUncheckedUpdateManyWithoutCategoryIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutCategoryIDNestedInput
  }

  export type RoundUpsertWithoutAllocation_StatusInput = {
    update: XOR<RoundUpdateWithoutAllocation_StatusInput, RoundUncheckedUpdateWithoutAllocation_StatusInput>
    create: XOR<RoundCreateWithoutAllocation_StatusInput, RoundUncheckedCreateWithoutAllocation_StatusInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutAllocation_StatusInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutAllocation_StatusInput, RoundUncheckedUpdateWithoutAllocation_StatusInput>
  }

  export type RoundUpdateWithoutAllocation_StatusInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutRoundIDNestedInput
  }

  export type RoundUncheckedUpdateWithoutAllocation_StatusInput = {
    round_number?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutRoundIDNestedInput
  }

  export type ProgramCreateWithoutCutOff_ranksInput = {
    duration: string
    deptID: DepartmentCreateNestedOneWithoutProgramInput
    collegeID: CollegeCreateNestedOneWithoutProgramInput
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramUncheckedCreateWithoutCutOff_ranksInput = {
    program_id?: number
    department_id: number
    college_id: number
    duration: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutProgIDInput
    Preferences?: PreferencesUncheckedCreateNestedManyWithoutProgramIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutProgramIDInput
  }

  export type ProgramCreateOrConnectWithoutCutOff_ranksInput = {
    where: ProgramWhereUniqueInput
    create: XOR<ProgramCreateWithoutCutOff_ranksInput, ProgramUncheckedCreateWithoutCutOff_ranksInput>
  }

  export type CategoryCreateWithoutCutOff_ranksInput = {
    category_name: string
    Seat_Matrix?: Seat_MatrixCreateNestedManyWithoutCategoryIDInput
    Student?: StudentCreateNestedManyWithoutCategoryIDInput
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryUncheckedCreateWithoutCutOff_ranksInput = {
    category_id?: number
    category_name: string
    Seat_Matrix?: Seat_MatrixUncheckedCreateNestedManyWithoutCategoryIDInput
    Student?: StudentUncheckedCreateNestedManyWithoutCategoryIDInput
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutCategoryIDInput
  }

  export type CategoryCreateOrConnectWithoutCutOff_ranksInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCutOff_ranksInput, CategoryUncheckedCreateWithoutCutOff_ranksInput>
  }

  export type RoundCreateWithoutCutOff_ranksInput = {
    start_time?: Date | string
    end_time: Date | string
    duration: number
    Allocation_Status?: Allocation_StatusCreateNestedManyWithoutRoundIDInput
  }

  export type RoundUncheckedCreateWithoutCutOff_ranksInput = {
    round_number?: number
    start_time?: Date | string
    end_time: Date | string
    duration: number
    Allocation_Status?: Allocation_StatusUncheckedCreateNestedManyWithoutRoundIDInput
  }

  export type RoundCreateOrConnectWithoutCutOff_ranksInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutCutOff_ranksInput, RoundUncheckedCreateWithoutCutOff_ranksInput>
  }

  export type ProgramUpsertWithoutCutOff_ranksInput = {
    update: XOR<ProgramUpdateWithoutCutOff_ranksInput, ProgramUncheckedUpdateWithoutCutOff_ranksInput>
    create: XOR<ProgramCreateWithoutCutOff_ranksInput, ProgramUncheckedCreateWithoutCutOff_ranksInput>
    where?: ProgramWhereInput
  }

  export type ProgramUpdateToOneWithWhereWithoutCutOff_ranksInput = {
    where?: ProgramWhereInput
    data: XOR<ProgramUpdateWithoutCutOff_ranksInput, ProgramUncheckedUpdateWithoutCutOff_ranksInput>
  }

  export type ProgramUpdateWithoutCutOff_ranksInput = {
    duration?: StringFieldUpdateOperationsInput | string
    deptID?: DepartmentUpdateOneRequiredWithoutProgramNestedInput
    collegeID?: CollegeUpdateOneRequiredWithoutProgramNestedInput
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramUncheckedUpdateWithoutCutOff_ranksInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    college_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUncheckedUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutProgramIDNestedInput
  }

  export type CategoryUpsertWithoutCutOff_ranksInput = {
    update: XOR<CategoryUpdateWithoutCutOff_ranksInput, CategoryUncheckedUpdateWithoutCutOff_ranksInput>
    create: XOR<CategoryCreateWithoutCutOff_ranksInput, CategoryUncheckedCreateWithoutCutOff_ranksInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCutOff_ranksInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCutOff_ranksInput, CategoryUncheckedUpdateWithoutCutOff_ranksInput>
  }

  export type CategoryUpdateWithoutCutOff_ranksInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutCategoryIDNestedInput
    Student?: StudentUpdateManyWithoutCategoryIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutCategoryIDNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCutOff_ranksInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutCategoryIDNestedInput
    Student?: StudentUncheckedUpdateManyWithoutCategoryIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutCategoryIDNestedInput
  }

  export type RoundUpsertWithoutCutOff_ranksInput = {
    update: XOR<RoundUpdateWithoutCutOff_ranksInput, RoundUncheckedUpdateWithoutCutOff_ranksInput>
    create: XOR<RoundCreateWithoutCutOff_ranksInput, RoundUncheckedCreateWithoutCutOff_ranksInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutCutOff_ranksInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutCutOff_ranksInput, RoundUncheckedUpdateWithoutCutOff_ranksInput>
  }

  export type RoundUpdateWithoutCutOff_ranksInput = {
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    Allocation_Status?: Allocation_StatusUpdateManyWithoutRoundIDNestedInput
  }

  export type RoundUncheckedUpdateWithoutCutOff_ranksInput = {
    round_number?: IntFieldUpdateOperationsInput | number
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutRoundIDNestedInput
  }

  export type Seat_MatrixCreateManyCategoryIDInput = {
    program_id: number
    total_seats: number
  }

  export type StudentCreateManyCategoryIDInput = {
    student_id?: number
    name: string
    email: string
    password: string
    mobile_number: string
    gender: $Enums.gender
    current_status?: $Enums.status
    isRegistered?: boolean
    general_rank: bigint | number
    category_rank: bigint | number
  }

  export type Allocation_StatusCreateManyCategoryIDInput = {
    student_id: number
    program_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    round_id: number
  }

  export type CutOff_ranksCreateManyCategoryIDInput = {
    cutOff_id?: number
    program_id: number
    closing_rank: bigint | number
    opening_rank: bigint | number
    round_id: number
  }

  export type Seat_MatrixUpdateWithoutCategoryIDInput = {
    total_seats?: IntFieldUpdateOperationsInput | number
    progID?: ProgramUpdateOneRequiredWithoutSeat_MatrixNestedInput
  }

  export type Seat_MatrixUncheckedUpdateWithoutCategoryIDInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    total_seats?: IntFieldUpdateOperationsInput | number
  }

  export type Seat_MatrixUncheckedUpdateManyWithoutCategoryIDInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    total_seats?: IntFieldUpdateOperationsInput | number
  }

  export type StudentUpdateWithoutCategoryIDInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    Preferences?: PreferencesUpdateManyWithoutStudentIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutStudentIDNestedInput
  }

  export type StudentUncheckedUpdateWithoutCategoryIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    Preferences?: PreferencesUncheckedUpdateManyWithoutStudentIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutStudentIDNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutCategoryIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mobile_number?: StringFieldUpdateOperationsInput | string
    gender?: EnumgenderFieldUpdateOperationsInput | $Enums.gender
    current_status?: EnumstatusFieldUpdateOperationsInput | $Enums.status
    isRegistered?: BoolFieldUpdateOperationsInput | boolean
    general_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    category_rank?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type Allocation_StatusUpdateWithoutCategoryIDInput = {
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    studentID?: StudentUpdateOneRequiredWithoutAllocation_StatusNestedInput
    programID?: ProgramUpdateOneRequiredWithoutAllocation_StatusNestedInput
    roundID?: RoundUpdateOneRequiredWithoutAllocation_StatusNestedInput
  }

  export type Allocation_StatusUncheckedUpdateWithoutCategoryIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type Allocation_StatusUncheckedUpdateManyWithoutCategoryIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type CutOff_ranksUpdateWithoutCategoryIDInput = {
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    programID?: ProgramUpdateOneRequiredWithoutCutOff_ranksNestedInput
    roundID?: RoundUpdateOneRequiredWithoutCutOff_ranksNestedInput
  }

  export type CutOff_ranksUncheckedUpdateWithoutCategoryIDInput = {
    cutOff_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type CutOff_ranksUncheckedUpdateManyWithoutCategoryIDInput = {
    cutOff_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type ProgramCreateManyCollegeIDInput = {
    program_id?: number
    department_id: number
    duration: string
  }

  export type ProgramUpdateWithoutCollegeIDInput = {
    duration?: StringFieldUpdateOperationsInput | string
    deptID?: DepartmentUpdateOneRequiredWithoutProgramNestedInput
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramUncheckedUpdateWithoutCollegeIDInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUncheckedUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutCollegeIDInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    department_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type ProgramCreateManyDeptIDInput = {
    program_id?: number
    college_id: number
    duration: string
  }

  export type ProgramUpdateWithoutDeptIDInput = {
    duration?: StringFieldUpdateOperationsInput | string
    collegeID?: CollegeUpdateOneRequiredWithoutProgramNestedInput
    Seat_Matrix?: Seat_MatrixUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramUncheckedUpdateWithoutDeptIDInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    college_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
    Seat_Matrix?: Seat_MatrixUncheckedUpdateManyWithoutProgIDNestedInput
    Preferences?: PreferencesUncheckedUpdateManyWithoutProgramIDNestedInput
    Allocation_Status?: Allocation_StatusUncheckedUpdateManyWithoutProgramIDNestedInput
    CutOff_ranks?: CutOff_ranksUncheckedUpdateManyWithoutProgramIDNestedInput
  }

  export type ProgramUncheckedUpdateManyWithoutDeptIDInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    college_id?: IntFieldUpdateOperationsInput | number
    duration?: StringFieldUpdateOperationsInput | string
  }

  export type Seat_MatrixCreateManyProgIDInput = {
    category_id: number
    total_seats: number
  }

  export type PreferencesCreateManyProgramIDInput = {
    student_id: number
    preference_number: number
    created_at?: Date | string
  }

  export type Allocation_StatusCreateManyProgramIDInput = {
    student_id: number
    category_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    round_id: number
  }

  export type CutOff_ranksCreateManyProgramIDInput = {
    cutOff_id?: number
    category_id: number
    closing_rank: bigint | number
    opening_rank: bigint | number
    round_id: number
  }

  export type Seat_MatrixUpdateWithoutProgIDInput = {
    total_seats?: IntFieldUpdateOperationsInput | number
    categoryID?: CategoryUpdateOneRequiredWithoutSeat_MatrixNestedInput
  }

  export type Seat_MatrixUncheckedUpdateWithoutProgIDInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    total_seats?: IntFieldUpdateOperationsInput | number
  }

  export type Seat_MatrixUncheckedUpdateManyWithoutProgIDInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    total_seats?: IntFieldUpdateOperationsInput | number
  }

  export type PreferencesUpdateWithoutProgramIDInput = {
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    studentID?: StudentUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type PreferencesUncheckedUpdateWithoutProgramIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreferencesUncheckedUpdateManyWithoutProgramIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Allocation_StatusUpdateWithoutProgramIDInput = {
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    studentID?: StudentUpdateOneRequiredWithoutAllocation_StatusNestedInput
    categoryID?: CategoryUpdateOneRequiredWithoutAllocation_StatusNestedInput
    roundID?: RoundUpdateOneRequiredWithoutAllocation_StatusNestedInput
  }

  export type Allocation_StatusUncheckedUpdateWithoutProgramIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type Allocation_StatusUncheckedUpdateManyWithoutProgramIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type CutOff_ranksUpdateWithoutProgramIDInput = {
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    categoryID?: CategoryUpdateOneRequiredWithoutCutOff_ranksNestedInput
    roundID?: RoundUpdateOneRequiredWithoutCutOff_ranksNestedInput
  }

  export type CutOff_ranksUncheckedUpdateWithoutProgramIDInput = {
    cutOff_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type CutOff_ranksUncheckedUpdateManyWithoutProgramIDInput = {
    cutOff_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type PreferencesCreateManyStudentIDInput = {
    preference_number: number
    created_at?: Date | string
    program_id: number
  }

  export type Allocation_StatusCreateManyStudentIDInput = {
    program_id: number
    category_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
    round_id: number
  }

  export type PreferencesUpdateWithoutStudentIDInput = {
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    programID?: ProgramUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type PreferencesUncheckedUpdateWithoutStudentIDInput = {
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    program_id?: IntFieldUpdateOperationsInput | number
  }

  export type PreferencesUncheckedUpdateManyWithoutStudentIDInput = {
    preference_number?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    program_id?: IntFieldUpdateOperationsInput | number
  }

  export type Allocation_StatusUpdateWithoutStudentIDInput = {
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    programID?: ProgramUpdateOneRequiredWithoutAllocation_StatusNestedInput
    categoryID?: CategoryUpdateOneRequiredWithoutAllocation_StatusNestedInput
    roundID?: RoundUpdateOneRequiredWithoutAllocation_StatusNestedInput
  }

  export type Allocation_StatusUncheckedUpdateWithoutStudentIDInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type Allocation_StatusUncheckedUpdateManyWithoutStudentIDInput = {
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    round_id?: IntFieldUpdateOperationsInput | number
  }

  export type Allocation_StatusCreateManyRoundIDInput = {
    student_id: number
    program_id: number
    category_id: number
    rank_value_used: bigint | number
    rank_type_used: $Enums.rankType
  }

  export type CutOff_ranksCreateManyRoundIDInput = {
    cutOff_id?: number
    program_id: number
    category_id: number
    closing_rank: bigint | number
    opening_rank: bigint | number
  }

  export type Allocation_StatusUpdateWithoutRoundIDInput = {
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
    studentID?: StudentUpdateOneRequiredWithoutAllocation_StatusNestedInput
    programID?: ProgramUpdateOneRequiredWithoutAllocation_StatusNestedInput
    categoryID?: CategoryUpdateOneRequiredWithoutAllocation_StatusNestedInput
  }

  export type Allocation_StatusUncheckedUpdateWithoutRoundIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
  }

  export type Allocation_StatusUncheckedUpdateManyWithoutRoundIDInput = {
    student_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    rank_value_used?: BigIntFieldUpdateOperationsInput | bigint | number
    rank_type_used?: EnumrankTypeFieldUpdateOperationsInput | $Enums.rankType
  }

  export type CutOff_ranksUpdateWithoutRoundIDInput = {
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    programID?: ProgramUpdateOneRequiredWithoutCutOff_ranksNestedInput
    categoryID?: CategoryUpdateOneRequiredWithoutCutOff_ranksNestedInput
  }

  export type CutOff_ranksUncheckedUpdateWithoutRoundIDInput = {
    cutOff_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CutOff_ranksUncheckedUpdateManyWithoutRoundIDInput = {
    cutOff_id?: IntFieldUpdateOperationsInput | number
    program_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    closing_rank?: BigIntFieldUpdateOperationsInput | bigint | number
    opening_rank?: BigIntFieldUpdateOperationsInput | bigint | number
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