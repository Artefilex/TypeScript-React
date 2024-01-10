# Class Typescript

Sınıflar, nesne yönelimli programlamada (OOP) temel yapı taşlarından biridir ve nesne yönelimli programlamanın temel prensiplerini uygulamak için kullanılır. Sınıflar, verileri ve bu verilere uygulanan işlemleri gruplamak, organize etmek ve yönetmek amacıyla kullanılır.

```typescript
Class Something {
    param1: type ,
    param2: type,
     constructor(param1: type , param2 : type ){
       this.param1 = param1
       this.param2 = param2
     }

     getMethod () {
        return param1 + param2
     }
}
let something = new Something(param1 , param2)
something.getMethod()
```

yukarıda görüldüğü gibi typescripte Class tanımlarken parametrelerimiz ve değişkenlerimize tip atamaları yaptık.

## TypeScript Access Modifiers

Access Modifiers Typescripte bir proportiye methoda erişimi değiştirirler. 3 tip access modifiers vardır

- private
- protetected
- public

### Private modifier

Private modifier sadece aynı sınıf içerisinde kullanıma izin verir , dışarıya erişim izni vermez. Eğer bir method ya da proportye private keywordünü verirseniz sadece aynı class içinde erişim sağlayabilirsiniz. Eğer dışardan erişim sağlamak isterseniz compile time hatası alırsınız

```typescript
class Something {
  private param1: string;

  constructor(param1: string) {
    this.param1 = param1;
  }
  private getMethod() {
    return param1 + param2;
  }
}
let something = new Something(param1);
something.getMethod(); // compile error
```

### Public modifier

Public modifier, bir method ya proportiye tüm lokasyonlardan erişim izni verir. Eğer özel bir erişim iznine ihtiyacınız yoksa public modifer zaten default olandır.

```typescript
class Person {
  // ...
  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  // ...
}
```

### Protected modifier

Protected modifier sadece subclass ve class içinde erişim izni verir . Bu da demek oluyor ki bir classda inheritence yaparken üst class değişkenlerini alt classa aktarabiliyoruz.

```typescript
class Person {
  constructor(
    protected ssn: string,
    private firstName: string,
    private lastName: string
  ) {
    this.ssn = ssn;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
```

Yukarıda Person Class'ın sadece ssn proportiesini bir alt sınıfa aktarabiliriz firstName ve lastName private olduğu için aktaramayız .

```typescript
class Person2 extends Person {
  constructor(ssn: string, firstName: string, lastName: string) {
    super(ssn);
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return super.getFullName();
  }
}
```

## Typescript Readonly

TypeScript, bir sınıfın özelliklerini değişmez olarak işaretlemenize olanak tanıyan Readonly değiştiriciyi sağlar. Readonly bir özelliğe atama yalnızca iki yerden birinde gerçekleşebilir.

- Property oluştururken.
- Aynı Classın Constructor'ın da

```typescript
class Person {
  readonly birthDate: Date;

  constructor(birthDate: Date) {
    this.birthDate = birthDate;
  }
}
let person = new Person(new Date(1990, 12, 25));
person.birthDate = new Date(1991, 12, 25); // Compile error
```

Yukarıda birdthdate propertysini redonly olarak işaretledik. daha sonra bir değer atamsı yaparak değiştirmeye çalıştık böylece derleme hatasını almış olduk . tıpkı constant değişkenler gibi davranan readonly keyword'ü sadece bir kez atamaya izin verir.

## Getter ve Setter

TypeScript'te getter ve setter'lar, sınıf özelliklerine erişim ve bu özelliklerin değerlerini kontrol etme veya değiştirme işlemlerini yönetmek için kullanılır. Getter ve setter'ların kullanılmasının bazı avantajları şunlardır:

### Getter (Get Metodu) Kullanımı

1. Değer Kontolü:

Getter'lar, bir özelliğe erişildiğinde özel bir işlem gerçekleştirmenize olanak tanır. Örneğin, bir özellik için belirli bir işlemi gerçekleştirebilir veya değeri doğrudan döndürebilirsiniz.

```typescript
class Urun {
  private _fiyat: number;
  get fiyat(): number {
    return this._fiyat;
  }
  set fiyat(yeniFiyat: number) {
    if (yenifiyat > 0) {
      this._fiyat = yenifiyat;
    } else {
      console.error("Geçersiz fiyat!");
    }
  }
}
const urun = new Urun();
urun.fiyat = 50; // Setter çağrılır
console.log(urun.fiyat); // Getter çağrılır
```

2. Lazy Loading:

Getter'lar, değeri ilk defa kullanıldığında veya bir koşula bağlı olarak yüklenmesi gereken özellikleri implemente etmek için kullanılabilir. Bu, kaynakları daha verimli bir şekilde kullanmanıza olanak tanır.

```typescript
class ConnectionDB {
  private _isConnect: boolean = false;

  get isConnect(): boolean {
    if (!this._isConnect) {
      // other code
      console.log("connect success");
      this._isConnect = true;
    }
    return this._isConnect;
  }
}

const connection = new ConnectionDB();
console.log(connection.isConnect);
```

### Setter (Set Metodu) Kullanımı

1. Değer Kontrolü ve Validasyon:

Setter'lar, bir özellik değeri atanırken belirli kuralların kontrol edilmesini sağlar. Bu, geçersiz değerlerin atanmasını engelleyerek güvenlik sağlar.

```typescript
class Kisi {
  private _yas: number;

  get yas(): number {
    return this._yas;
  }

  set yas(yeniYas: number) {
    if (yeniYas >= 0 && yeniYas <= 120) {
      this._yas = yeniYas;
    } else {
      console.error("Geçersiz yaş değeri!");
    }
  }
}

const kisi = new Kisi();
kisi.yas = 25; // Setter çağrılır
console.log(kisi.yas); // Getter çağrılır
kisi.yas = 150; // Geçersiz yaş değeri!
```

2. Özel İşlemler:

Setter'lar, bir değer atandığında özel işlemleri gerçekleştirmenizi sağlar. Örneğin, bir özelliğe değer atandığında aynı zamanda başka bir özelliği de güncelleyebilirsiniz.

```typescript
class Urun {
  private _fiyat: number;
  private _indirimliFiyat: number;

  get fiyat(): number {
    return this._fiyat;
  }

  set fiyat(yeniFiyat: number) {
    this._fiyat = yeniFiyat;
    this._indirimliFiyat = this._fiyat * 0.9; // Fiyatın %10 indirimli hali
  }

  get indirimliFiyat(): number {
    return this._indirimliFiyat;
  }
}

const urun = new Urun();
urun.fiyat = 100; // Setter çağrılır, indirimliFiyat da güncellenir
console.log(urun.indirimliFiyat); // 90
```
