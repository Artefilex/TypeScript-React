# TypeScript'de Enum ve Tuple Kullanımı

## Enum Nedir?

**Enum (Numaralandırma)**, belirli bir değeri temsil eden adlandırılmış sabit değerler koleksiyonudur. Bu, kodunuzu daha okunabilir ve anlaşılır hale getirmenin bir yoludur. TypeScript, JavaScript'te bulunmayan bir şekilde enum tipini destekler.

### Örnek - 1 Haftanın Günleri

```typescript
enum Days {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let today: Days = Days.Wednesday;
console.log(today); // Çıktı: 2 (Enum değeri)
```

### Örnek - 2 HTTP hata kodlarını temsil eden bir enum

```typescript
enum HttpStatusCode {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
  InternalServerError = 500,
}

function handleHttpResponse(status: HttpStatusCode): void {
  switch (status) {
    case HttpStatusCode.OK:
      console.log("başarılı : 200");
      break;
    case HttpStatusCode.Created:
      console.log("Oluşturuldu: 201 Created");
      break;
    case HttpStatusCode.BadRequest:
      console.error("Hatalı İstek: 400 Bad Request");
      break;
    case HttpStatusCode.Unauthorized:
      console.error("Yetkisiz Erişim: 401 Unauthorized");
      break;
    case HttpStatusCode.NotFound:
      console.error("Bulunamadı: 404 Not Found");
      break;
    case HttpStatusCode.InternalServerError:
      console.error("Sunucu Hatası: 500 Internal Server Error");
      break;
    default:
      console.warn("Bilinmeyen Durum Kodu");
  }
} 
```

## Tuple Nedir?

Tuple (Demet), farklı türdeki elemanları içeren, sabit boyutlu bir diziye benzer bir veri yapısıdır. Her eleman, sırasıyla belirli bir türle ilişkilidir.

### Örnek - 1


```typescript
let person: [string, number, boolean];
person = ["John Doe", 25, true];

console.log(person[0]); // Çıktı: "John Doe"
console.log(person[1]); // Çıktı: 25
console.log(person[2]); // Çıktı: true
```

### Örnek - 2 Toplam tutar hesaplama 


```typescript
type ShoppingCart: [string, number, boolean];

let shoppingCart : ShoppingCart = [
    ["ürün 1" , 12.50 , true],
     ["ürün 2" , 15.50 , false],
      ["ürün 3" , 17.89 , true],
]

function calculateTotalPrice(cart:ShoppingCart) : number {
    return cart.reduce((total, item) => total + item[1], 0 );
}

console.log("Toplam Tutar: $" + calculateTotalPrice(shoppingCart).toFixed(2));

```