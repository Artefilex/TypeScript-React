# Interface & Type

- interface ve type iki farklı yapıdır ancak genellikle benzer amaç için kullanılırlar.
- interfaceleri 'extends' gibi belirli bir özelliğe ihtiyaç duyana kadar varsayılan olarak kullanmalısınız.
- interfaceler mapped type, conditions ve unions tipleri ifade edemez . Type tanımları her türlü tipi ifade edebilir.
- Birbirinden türeyen nesnelerle çalıştığınızda, interfaceleri kullanın. '&' kullanmak, TypeScript'in tip denetleyicisinin biraz daha hızlı çalışmasını sağlar.
- Aynı kapsamda aynı isme sahip interfaceler, deklarasyonlarını birleştirir ve beklenmeyen hatalara yol açabilir.
- interface, TypeScript'in ilk sürümünden beri mevcuttur. Nesne yönelimli programlamadan ilham alır ve inheritence kullanarak tipler oluşturmanıza izin verir.

```typescript
interface WithId {
  id: string;
}

interface User extends WithId {
  name: string;
}

const user: User = {
  id: "123",
  name: "Karl",
  wrongProperty: 123,
  // Object literal may only specify known properties, and 'wrongProperty' does not exist in type 'User'.
};
```

Ancak, bunların yerine yerleşik bir alternatifleri bulunmaktadır - type anahtar kelimesi kullanılarak bildirilen tür takma adları. type anahtar kelimesi, TypeScript'te yalnızca nesne tipleri değil, her türlü türü temsil etmek için kullanılabilir.

Diyelim ki bir dize veya bir sayı olabilen bir türü temsil etmek istiyoruz. Bu, bir arayüzle mümkün değildir, ancak bir türle mümkündür:

```typescript
type StringOrNumber = string | number;

const func = (arg: StringOrNumber) => {};

func("hello");
func(123);

func(true);
// Argument of type 'boolean' is not assignable to parameter of type 'StringOrNumber'.
```

Elbette, TypeScript kullanıcıları arasında çokça tartışmaya neden olan bir konu, nesne türlerini bildirirken bir arayüz mü yoksa bir tür takma adı mı kullanmalısınız?

## Use Interfaces For Object Inheritance

Eğer birbirinden türeyen nesnelerle çalışıyorsanız, arayüzleri kullanın. Yukarıdaki örneğimiz, WithId kullanılarak tip takma adları ve kesişim türleri kullanılarak ifade edilebilir.

```typescript
type WithId = {
  id: string;
};

type User = WithId & {
  name: string;
};

const user: User = {
  id: "123",
  name: "Karl",
  wrongProperty: 123,
  // Object literal may only specify known properties, and 'wrongProperty' does not exist in type 'User'.
};
```

Bu kod tamamen uygun olsa da, biraz daha optimize edilebilir. Bu durum, TypeScript'in tiplerinizi kontrol etme hızıyla ilgili.

Bir arayüz oluşturduğunuzda, extends kullanarak TypeScript, bu arayüzü adıyla bir iç kayıt defterinde önbelleğe alabilir. Bu, gelecekteki kontrol işlemlerini daha hızlı yapabilmesi anlamına gelir. &, kullanılarak yapılan bir kesişim türü ile bu ismi üzerinden önbelleğe alamaz - neredeyse her seferinde hesaplamak zorundadır.

Bu küçük bir iyileştirme olsa da, eğer arayüz çok sayıda kez kullanılıyorsa, bu avantaj zaman içinde birikir. Bu nedenle TypeScript performans kılavuzu, nesne mirası için arayüzleri kullanmayı önerir

Ancak, hala varsayılan olarak arayüzleri kullanmanızı önermiyorum. Neden mi?

## Interfaces Can Declaration Merge

Arayüzlerin başka bir özelliği daha var ki, buna hazırlıklı değilseniz oldukça şaşırtıcı gelebilir. Aynı kapsamda aynı isme sahip iki arayüz deklare edildiğinde, deklarasyonlarını birleştirirler

```typescript
interface User {
  name: string;
}

interface User {
  id: string;
}

const user: User = {
  /// Property 'name' is missing in type '{ id: string; }' but required in type 'User'.
  id: "123",
};
```

aynı şekilde type ile denediğinizde bu merge işlemi çalışmayacaktır

```typescript
type User = {
  // Duplicate identifier 'User'.
  name: string;
};

type User = {
  // Duplicate identifier 'User'.
  id: string;
};
```

Bu, amaçlanan bir davranış ve gerekli bir dil özelliğidir. Bu, global nesneleri değiştiren JavaScript kütüphanelerini modellemek için kullanılır, örneğin dize prototiplerine yöntem eklemek gibi.

Ancak, buna hazırlıklı değilseniz, gerçekten kafa karıştırıcı hatalara yol açabilir.

Bunu önlemek istiyorsanız, projenize ESLint eklemenizi ve no-redeclare kuralını etkinleştirmenizi öneririm.

## Index Signatures in Types vs Interfaces

Tür takma adları ile arayasındaki başka bir fark daha ince bir ayrıntıdır. Tür takma adları, örtük bir dizin imzasına sahiptir, ancak arayüzlerde bulunmaz. Bu, tür takma adlarının dizin imzasına sahip tiplere atanabilir olduğu anlamına gelir, ancak arayüzlerin atanamaz olduğu anlamına gelir. Bu, şu gibi hatalara neden olabilir

`Index signature for type 'string' is missing in type 'x'.`

```typescript
interface KnownAttributes {
  x: number;
  y: number;
}

const knownAttributes: KnownAttributes = {
  x: 1,
  y: 2,
};

type RecordType = Record<string, number>;

const oi: RecordType = knownAttributes;
// Type 'KnownAttributes' is not assignable to type 'RecordType'.
// Index signature for type 'string' is missing in type 'KnownAttributes'.
```

Bunun hata verme nedeni, bir arayüzün daha sonra genişletilebileceğidir. Daha sonra eklenen bir özelliğin, dize tipindeki anahtarı veya sayı tipindeki değeri eşleştirmemesi olabilir.

Bu hatayı düzeltebilirsiniz, arayüzünüze açık bir dizin imzası ekleyerek

```typescript
interface KnownAttributes {
  x: number;
  y: number;
  [index: string]: unknown; // new!
}
```

ya da basit şekilde type kulanabilirsiniz

```typescript
type KnownAttributes = {
  x: number;
  y: number;
};

const knownAttributes: KnownAttributes = {
  x: 1,
  y: 2,
};

type RecordType = Record<string, number>;

const oi: RecordType = knownAttributes;
```

## Default to type, not interface

Interfaces are still my recommendation for object inheritance, but I'd recommend you use type by default. It's a little more flexible and a little less surprising.

"TypeScript belgeleri bu konuda harika bir rehber sunuyor. Her özelliği ele alıyorlar (ancak örtük dizin imzasını ele almıyorlar), ancak benimle farklı bir sonuca ulaşıyorlar.

Onlar, kişisel tercihe dayalı bir seçim yapmanızı önerirler, ki bu konuda onlarla aynı fikirdeyim. Type ve interface arasındaki fark o kadar küçük ki, her ikisini de pek çok sorun yaşamadan kullanabilirsiniz.

Ancak TS ekibi, varsayılan olarak interface kullanmanızı ve sadece ihtiyaç duyduğunuzda type kullanmanızı önerir.

Ben bunun tersini önermek isterim. Deklarasyon birleştirme ve örtük dizin imzası özellikleri oldukça şaşırtıcıdır ve bu nedenle sizi varsayılan olarak interface kullanmaktan vazgeçirmelidir.

Arayüzler hala nesne mirası için önerimdir, ancak varsayılan olarak type kullanmanızı öneririm. Biraz daha esnek ve biraz daha şaşırtıcı değil.

### Interface

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

### Type

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

#### Farkları

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
