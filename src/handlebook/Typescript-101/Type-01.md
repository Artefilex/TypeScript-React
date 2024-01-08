# Typescript'te Type Nedir ?

TypeScript'te bir tür, bir değerin sahip olduğu farklı özellikler ve fonksiyonlara referans vermenin kullanışlı bir yoludur.

Bir değer, bir değişkene atayabileceğiniz her şeyi ifade eder, örneğin bir sayı, bir metin, bir dizi, bir nesne ve bir fonksiyon.

- Bir Type, bir değerin sahip olduğu farklı özellikleri ve metodları tanımlayan bir etikettir.
- Her değerin bir türü vardır.

TypeScript, JavaScript'ten yerleşik tipleri devralır. TypeScript tipleri şu kategorilere ayrılır:

1. Primitive types

| Name      | Description                                                                                                                                                  |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| string    | metinsel verileri temsil eder                                                                                                                                |
| number    | sayısal değerleri temsil eder                                                                                                                                |
| boolean   | yalnızca iki değere sahip bir türdür: true (doğru) veya false (yanlış).                                                                                      |
| null      | Bir değerin bilinçli bir şekilde atanmamış veya var olmayan bir değeri temsil eder.                                                                          |
| undefined | Bir değere sahiptir: tanımsız (undefined). Bu, başlatılmamış bir değişkenin varsayılan değeridir.                                                            |
| symbol    | JavaScript ve TypeScript'te benzersiz ve değişmez bir veri türüdür. Her sembol kendine özgüdür ve genellikle nesne özelliklerini tanımlamak için kullanılır. |

2. Object types

Objeler, fonksiyonlar, arrayler, sınıflar vb. gibi değerlerin tipini belirtir.

## TypeScript'teki tiplerin iki ana amacı vardır:

- İlk olarak, tipler, TypeScript derleyicisi tarafından kodunuzu hatalar için analiz etmek için kullanılır.

- İkinci olarak, tipler, değişkenlere hangi değerlerin atandığını anlamanıza olanak tanır.

## Özet

1. Her değer TypeScript'te bir tipe sahiptir.
2. Bir tip, bir değerin sahip olduğu özellikleri ve metotları tanımlayan bir etikettir.
3. TypeScript derleyicisi, kodunuzu analiz ederken tipleri kullanarak hataları ve sorunları tespit eder. Yani, derleyici, her bir değerin tipini anlamak ve uygun olmayan kullanımları belirlemek için tip bilgilerini kullanır.

---

## Typescript Type Annotations

TypeScript'te tip açıklamaları, bir değişkenin, parametrenin veya fonksiyonun dönüş değerinin tipini açıkça belirtmek için kullanılır. Bu, kodunuzda beklenen tipleri tanımlamanıza ve TypeScript derleyicisinin geliştirme aşamasında potansiyel hataları yakalamasına olanak tanır.

1. Değişken Tanımlamaları:

```typescript
let age: number = 24
let name : string = "baris"
let active: boolean : true
```

2. Fonksiyon Parametreleri ve Dönüş Tipleri:

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

2. Obje Özellikleri:

```typescript
 type Person {
    name : string;
    age: number ;
 }

let person : Person = {
   name :  "baris",
   age : 24
}
```

4. Array Tipleri :

```typescript
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["baris", "sedef"];
```

5. Uninon (Birleşik) Tipler :

```typescript
let result: number | string;
result = 34;
result = "32";
```

6. Fonksiyon Tipleri:

```typescript
type mathFunc = (x: number, y: number) => number;

let add: mathFunc = (a, b) => a + b;

function greating(name: string): string {
  return `Hi ${name}`;
}
```

## özet :

Tip açıklamaları, geliştiricilere ve araçlara değişkenlerin ve fonksiyonların amaçlanan kullanımını anlama konusunda yardımcı olur ve TypeScript'in statik tip denetimi içinde önemli bir rol oynar. Tip açıklamaları sağlandığında, TypeScript derleyicisi geliştirme sürecinin erken aşamalarında tip ile ilgili hataları tespit edebilir, bu da daha güçlü ve bakımı kolay kodlara yol açar.
