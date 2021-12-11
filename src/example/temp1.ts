// type Language = 'TypeScript' | 'JavaScript' | 'Python' | 'Rust' | 'Haskell';
// interface Person {
//   favoriteLanguages: Array<Language>;
// }
// function preferTypeScript(person: Person): boolean {
//   return person.favoriteLanguages.includes('TypeScript');
// }

// type IdentityFunction = (a: number) => number; // type IdentityFunction = (a: number, b:number) => number;
// const sum: IdentityFunction = (a: number, b: number) => {
//     return a + b;
// }
// // error TS2322: Type '(a: number, b: number) => number' is not assignable to type 'IdentityFunction'.
// function concatString(a: string, b: string): string {
//     return a - b; 
// }

// // error TS2322: Type 'number' is not assignable to type 'string'.
// // error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.
// // error TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number' or an enum type.


// // 더 명시적인 코드 작성을 강제
// const a: number = 32;
// const b: string = 3; // error

// const areYouCool: boolean = true;
// const answer: number = 42;
// const typescript: string = "great";
// const greetings: string = `
// Hello, Readers!
// Welcome to TypeScript.
// `;
// const hasType: Object = {
//   TypeScript: true,
//   JavaScript: false
// };

// /*********************************************************************************************************** */
// const isTypeScriptAwesome: boolean = true;
// const doesJavaScriptHasTypes: boolean = false;
// const yourScore: number = 100;
// const ieee754IsAwesome: number = 0.1 + 0.2; // 0.30000000000000004
// const authorName: string = '안희종';
// const toReaders: string = `
// 책을 읽어주셔서 감사합니다.
// 도움이 되었으면 좋겠습니다.
// `;

// const nullValue: null = null;
// const undefinedValue: undefined = undefined;
// const numberValue: number = null; // TS2322: Type 'null' is not assignable to type 'number'

// // --strictNullChecks 플래그 
// const a: number = null; // okay


// /*********************************************************************************************************** */
// let bool: any = true;
// bool = 3;
// bool = 'whatever';
// bool = {};

// function nothing(): void { 

// }

// function alwaysThrow(): never {
//     throw new Error(`I'm a wicked function!`);
//   }

// /*********************************************************************************************************** */

// const pibonacci: number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
// const myFavoriteBeers: string[] = ['Imperial Stout', 'India Pale Ale', 'Weizenbock'];

// const nameAndHeight: [string, number] = ['유승리', 176]

// const invalidNameAndHeight: [string, number] = ['유승리', 176, 42];
// // 튜플 타입 변수는 정확히 명시된 개수 만큼의 원소만을 가질 수 있다
// // error TS2322: Type '[string, number, boolean]' is not assignable to type '[string, number]'.
// //   Types of property 'length' are incompatible.
// //     Type '3' is not assignable to type '2'.

// const validNameAndHeight: [string, number] = ['유승리', 176];
// validNameAndHeight.push(42); // no error
// // Array 프로토타입의 메소드를 통해 조작하는 것은 금지되지 않는다

// /*********************************************************************************************************** */

// const user: { name: string; height: number; } = { name: '유승리', height: 176 };

// const userWithUnknownHeight: { name: string; height?: number; } = { 
//     name: '김수한무' 
//   };

//   const user2: { 
//     readonly name: string; 
//     height: numer; 
//   } = { name: '안희종', height: 176 };
//   user.name = '종희안'; // error TS2540: Cannot assign to 'name' because it is a constant or a read-only property.

//   /*********************************************************************************************************** */

//   //타입 별칭 - 이미 존재하는 타입에 다른 이름을 붙여 복잡한 타입을 간단하게 쓸 수 있다. 
//   //type NewType = Type;

// type UUID = string;
// type Height = number;
// type AnotherUUID = UUID;
// type Animals = Animal[];
// type User = {
//   name: string;
//   height: number;
// };

// type UUID2 = string;
// function getUser(uuid: UUID2) {
//   /* 함수 본문 */
// }
// getUser(7); // error TS2345: Argument of type '7' is not assignable to parameter of type 'string'.

//   /*********************************************************************************************************** */

//   function sum2(a: number, b: number): number {
//     return (a + b);
//   }

//   function sum3(a, b) {
//     return (a+b);
//   }

//   function logGreetings(name: string): void {
//     console.log(`Hello, ${name}!`);
//   }

// /*********************************************************************************************************** */
// const yetAnotherSum: (a: number, b: number) => number = sum;
// const onePlusOne: () => number = () => 2;
// const arrowSum: (a: number, b: number) => number = (a, b) => (a + b);

// // 별칭도 가능
// type SumFunction = (a: number, b: number) => number;
// const definitelySum: SumFunction = (a, b) => (a + b);

// /*********************************************************************************************************** */

// function greetings(name: string = 'stranger'): void {
//     console.log(`Hello, ${name}`);
// }
//   greetings('Heejong'); // Hello, Heejong!
//   greetings(); // Hello, stranger! 오..

//  /*********************************************************************************************************** */ 
//   function fetchVideo(url: string, subtitleLanguage?: string) {
//     const option = { url };
//     if (subtitleLanguage) {
//       option.subtitleLanguage = true;
//     }
//     /* ... */
//   }
//   fetchVideo('https://example.com', 'ko'); // okay
//   fetchVideo('https://example.com'); // also okay

// // 이 때 매개변수 정의 순서에서 선택 매개변수 이후에 필수 매개변수를 두는 것은 허용되지 않는다.
//   function invalidFetchVideo(subtitleUrl?: string, url: string) { 
//     /* ... */
//   }
//   //error TS1016: A required parameter cannot follow an optional parameter.

//    /*********************************************************************************************************** */ 
// // 1
//    function getFirstElem(arr) {
//     if (!Array.isArray(arr)) {
//       throw new Error('getFirstElemOrNull: Argument is not array!');
//     }
//     if (arr.length === 0) {
//       throw new Error('getFirstElemOrNull: Argument is an empty array!');
//     } 
//     return arr[0] ? arr[0] : null;
//   }

// // 2
// function getFirstElem(arr: string[]): string;
// function getFirstElem(arr: number[]): number;
// function getFirstElem(arr) {
//   if (!Array.isArray(arr)) {
//     throw new Error('getFirstElemOrNull: Argument is not array!');
//   }
//   if (arr.length === 0) {
//     throw new Error('getFirstElemOrNull: Argument is an empty array!');
//   } 
//   return arr[0] ? arr[0] : null;
// }

// // 여러 타입에 대해 동작하는 함수를 정의하되, 해당 함수를 정의할 때는 알 수 없고 사용할 때에만 알 수 있는 타입 정보를 사용하고 싶다

// // 타입 변수
// // 함수를 호출하는 시점이 되어야만 알 수 있는 값을 함수 내부에서 사용하기 위해서는 그 값을 담아둘 매개변수가 필요하다. 마찬가지로, 요소를 사용하는 
// // 시점에서만 알 수 있는 타입을 담아두기 위해서는 타입 변수(type variable)가 필요하다. 타입 변수와 타입의 관계는 매개변수와 인자 값의 관계와 비슷하다

// function getFirstElem<T>(arr: T[]): T {
//     /* 함수 본문 */
//   }

// const languages: string[] = ['TypeScript', 'JavaScript'];
// const language = getFirstElem<string>(languages); // 이 때 language의 타입은 문자열

// type MyArray<T> = T[];
// const drinks: MyArray<string> = ['Coffee', 'Milk', 'Beer'];
//    /*********************************************************************************************************** */ 
// // 유니온

// function square(value: number, returnString: boolean = false): string | number {
//     /* 본문 동일 */
//   }
//   const stringOrNumber: string | number = square(randomNumber, randomBoolean);


//   type Whatever = number | string | boolean;

//   type Fruits
//   = Apple
//   | Banana
//   | Cherry;

//   type Fruits =
//   | Apple
//   | Banana
//   | Cherry;
// /*********************************************************************************************************** */ 
// type Programmer = { favoriteLanguage: string };
// const programmer: Programmer = { favoriteLanguage: 'TypeScript' };

// type BeerLover = { favoriteBeer: string };
// const beerLover: BeerLover = { favoriteBeer: 'Imperial Stout' };

// type BeerLovingProgrammer = { favoriteLanguage: string; favoriteBeer: string; };
// const AhnHeejong: BeerLovingProgrammer = { 
//   favoriteLanguage: 'TypeScript',
//   favoriteBeer: 'Imperial Stout',
// };

// // ^ 하지만 이런 접근은 코드 복사–붙여넣기와 동일하게 변화에 취약하다는 단점

// type BeerLovingProgrammer2 = Programmer & BeerLover;

// /*********************************************************************************************************** */ 
// enum Direction {
//     East,
//     West,
//     South,
//     North
//   }
//   enum ExplicitDirection {
//     East = 0,
//     West = 1,
//     South = 2,
//     North = 3
//   }

//   const south: Direction = Direction.South;
// console.log(south); // 2