# Interface & Type

interface ve type iki farklı yapıdır ancak genellikle benzer amaç için kullanılırlar.

## Interface

```typescript
interface Person {
  name: string;
  age: number;
}

// Interface kullanımı
const person: Person = {
  name: "John",
  age: 25,
};
```

**Kullanım Alanı**: Genellikle nesne şekillerini (object shapes) tanımlamak için kullanılır.
**Extend Edilebilirlik**: Bir interface başka bir interface'i extend edebilir.

```typescript
interface Employee extends Person {
  employeeId: number;
}
```

## Type

```typescript
// Type tanımlama
type Car = {
  brand: string;
  model: string;
  year: number;
};

// Type kullanımı
const car: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
};
```

**Kullanım Alanı:** Genel olarak nesne şekilleri, union, intersection, tuple ve diğer veri türleri için daha geniş bir kullanım alanına sahiptir.

**Extend Edilebilirlik:** type'lar extend edilebilir. Ancak, iki type arasında doğrudan extend kullanmak yerine union veya intersection kullanmanız gerekebilir.

```typescript
type Employee = Person & { employeeId: number };
```

## Farkları

1. **Extend Edilebilirlik:**

interface'ler birbirini doğrudan extend edebilirken, type'lar genellikle union ve intersection operatörleri ile genişletilebilir.

2. **Declaration Merging:**

interface'ler otomatik olarak birleştirilebilir (declaration merging) ve aynı isme sahip birden fazla interface tanımlanabilir. type'lar bu özelliği desteklemez.

```typescript
interface User {
  name: string;
}

interface User {
  age: number;
}

// Bu, aynı zamanda şu şekilde tanımlanmış gibi olur:
// interface User {
//   name: string;
//   age: number;
// }
```

3. **Implements ve Extends:**
   interface'ler implements kullanarak sınıflar tarafından uygulanabilir. Ayrıca, başka bir interface'i extends edebilir.

```typescript
// Interface tanımlama
interface Animal {
  makeSound(): void;
}

// Sınıfın bir interface'i uygulaması (implements)
class Dog implements Animal {
  makeSound() {
    console.log("Woof!");
  }
}
```

type'lar ise sınıflara doğrudan implements edilemez ve extends kullanılamaz.

```typescript
// Type tanımlama
type Vehicle = {
  startEngine(): void;
};

// Class'ın bir type'ı extend etmesi
class Car implements Vehicle {
  startEngine() {
    console.log("Engine started");
  }
}
```

Her iki yapı da genellikle benzer senaryolarda kullanılabilir. Hangi yapının kullanılacağı, projenin ihtiyaçlarına ve tercihlere bağlıdır. Proje genellikle ikisini bir arada kullanabilir, çünkü ikisi de benzer durumları ele alır ancak farklı özelliklere sahiptir.
