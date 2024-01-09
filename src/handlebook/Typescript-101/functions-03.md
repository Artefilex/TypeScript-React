# TypeScript Funtions

```typescript
function doSomething (parameter: type , parameter2 : type, ...) : returnType {
    // do something

}
```

1. Parametre Türleri :

- Fonksiyon parametrelerine tür belirtmek, hataları önlemek ve kodunuzu daha güvenli hale getirmek için önemlidir.

```typescript
function doSomething (parameter: type , parameter2 : type, ...) : returnType {
    // do something

}
```

2. Dönüş Türleri :

- Fonksiyonun dönüş türünü belirtmek, dönüş değeri üzerinde statik tür denetimi sağlar.

```typescript
function add(x: number, y: number): number {
  return x + y;
}
```

3. Opsiyonel Parametreler :

- Parametreleri opsiyonel yapmak için ? kullanabilirsiniz.

```typescript
function buildName(firstName: string, lastName?: string): string {
  if (lastName) {
    return `${firstName} ${lastName}`;
  } else {
    return firstName;
  }
}
```

4. Varsayılan Değerler:

- Parametrelere varsayılan değerler atayabilirsiniz

```typescript
function ( name :string = "baris" ): string {
   return `Hello ${name}`
}

```

5. Rest Parametreleri:

- Rest parametreleri kullanarak değişken sayıda argümanı işleyebilirsiniz

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, item) => total + item, 0);
}
```

6. Fonksiyon Türleri:

- Bir fonksiyonun türünü tanımlayabilir ve bu türü kullanabilirsiniz.

```typescript
type MathOperation = (x: number, y: number) => number;
const add: MathOperation = (x, y) => x + y;
```

7. Overloading:

- Aynı fonksiyon adını kullanarak farklı parametre türleri için birden fazla tanım yapabilirsiniz.

```typescript
function display(value: string): void;
function display(value: number): void;
function display(value: string | number): void {
  console.log(value);
}
```

8. Generic Fonksiyonlar:

- Generik türleri kullanarak fonksiyonları çok amaçlı hale getirebilirsiniz.

```typescript
function identity<T>(arg: T): T {
  return arg;
}
```
