---
id: javascript-on-bilgisi
title: Node.js İçin Ne Kadar JavaScript Bilmelisiniz?
sidebar_label: JavaScript Ön Bilgisi
sidebar_position: 2
description: Node.js öğrenmeden önce gerekli JavaScript konuları ve asenkron programlama kavramları.
---

# Node.js İçin Ne Kadar JavaScript Bilmelisiniz?

> **Kaynak:** [Node.js Learn — How much JavaScript do you need to know to use Node.js?](https://nodejs.org/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs)  
> **Kaynak kontrol tarihi:** 16 Ekim 2026  
> **Metin türü:** Resmî makaledeki tüm konu başlıklarını ve önerilen öğrenme alanlarını kapsayan, açıklamalar ve örneklerle genişletilmiş **özgün Türkçe teknik anlatım**; birebir çeviri değildir.

## 1. JavaScript nerede biter, Node.js nerede başlar?

Programlamaya yeni başlayanlar, JavaScript bilgisinin ne zaman yeterli hâle geldiğini değerlendirmekte zorlanabilir. JavaScript ile Node.js'i birbirine karıştırmak da yaygındır:

- **JavaScript**, değişkenleri, fonksiyonları, nesneleri ve asenkron davranışları tanımlayan programlama dilidir.
- **Node.js**, JavaScript'i tarayıcı dışında çalıştıran ve dosya sistemi, ağ bağlantıları, süreç yönetimi gibi ek API'ler sunan çalışma zamanı ortamıdır.

Node.js'in API'lerini öğrenmek için önce JavaScript dilinin temel yapılarını bilmek gerekir. Ancak aşağıdaki konuları kusursuz biçimde öğrenmeyi beklemeden küçük Node.js projelerine başlayabilirsiniz.

## 2. Önce öğrenilmesi önerilen JavaScript konuları

Resmî makalenin önerdiği temel konular aşağıdaki tabloda **tam liste** olarak yer alır. Bağlantılar JavaScript için MDN başvuru belgelerine veya resmî Node.js Learn bölümüne yönlendirir.

| Konu | Teknik anlamı ve Node.js'te kullanım örneği | Kaynak |
| --- | --- | --- |
| **Lexical Structure (Sözcüksel yapı)** | Tanımlayıcılar, anahtar sözcükler, noktalama, yorumlar ve kodun yazım kuralları. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar) |
| **Expressions (İfadeler)** | Bir değer üreten işlemler; örneğin `price * quantity` veya `user?.name`. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators) |
| **Data Types (Veri tipleri)** | `string`, `number`, `boolean`, `null`, `undefined`, `bigint`, `symbol` ve nesneler. JSON/HTTP verileri için temeldir. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) |
| **Classes (Sınıflar)** | Kurucular, örnekler, metotlar ve kalıtım. Veri modellerini düzenlemek için kullanılabilir. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) |
| **Variables (Değişkenler)** | `const`, `let` ve eski `var` tanımları; değer ve kapsam yönetimi. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types) |
| **Functions (Fonksiyonlar)** | Parametre alan, dönüş değeri üreten ve yeniden kullanılabilen kod blokları; Node.js API'lerinde yaygındır. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) |
| **`this` operator (this değeri)** | Bir fonksiyonun çağrılma biçimine göre belirlenen bağlam; sınıf metotlarında önemlidir. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) |
| **Arrow Functions (Ok fonksiyonları)** | `() => {}` sözdizimi; çevreleyen kapsamdan `this` alır. Callback'lerde sık kullanılır. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) |
| **Loops (Döngüler)** | `for`, `for...of`, `while`; veri dizilerini ve sonuçları işlemek için kullanılır. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) |
| **Scopes (Kapsamlar)** | Değişkenlerin hangi kod bölgelerinden erişilebilir olduğunu belirler. | [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Scope) |
| **Arrays (Diziler)** | Sıralı veri koleksiyonları; `map`, `filter`, `find` gibi metotlarla işlenir. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| **Template Literals (Şablon dizgeleri)** | Ters tırnakla (` \`...` `) çok satırlı metin ve `${expression}` ara değerleri oluşturma. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) |
| **Strict Mode (Katı kip)** | Bazı hatalı veya belirsiz JavaScript davranışlarını engelleyen kip; ES modülleri otomatik olarak katı kipte çalışır. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) |
| **ECMAScript 2015 (ES6) ve sonrası** | Modern sözdizimi, modüller, destructuring, `class`, `let`, `const` ve diğer dil yenilikleri. | [Node.js Learn](https://nodejs.org/learn/getting-started/ecmascript-2015-es6-and-beyond) |
| **Asynchronous JavaScript (Asenkron JavaScript)** | İşlem tamamlanmasını beklerken diğer işlerin devam edebilmesine imkân tanıyan programlama yaklaşımı. | [MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS) |

### 2.1. Backend için örnek: Diziler, fonksiyonlar ve arrow functions

```javascript
const products = [
  { id: 1, name: 'Kalem', price: 25, stock: 12 },
  { id: 2, name: 'Defter', price: 80, stock: 0 },
  { id: 3, name: 'Silgi', price: 15, stock: 8 },
];

const availableProducts = products.filter((product) => product.stock > 0);
const names = availableProducts.map((product) => product.name);

console.log(names); // ['Kalem', 'Silgi']
```

Burada `const` değişken bildirimi, `[]` dizi, `{}` nesne, `filter` ve `map` dizi metodu, `(product) => ...` ise ok fonksiyonudur. Bir API'den gelen ürün kayıtlarını filtrelerken aynı teknikleri kullanırsınız.

### 2.2. `this` ve arrow function arasındaki fark

```javascript
const service = {
  name: 'Stok Servisi',
  printName() {
    console.log(this.name);
  },
};

service.printName(); // Stok Servisi
```

Normal metot çağrısında `this` genellikle çağrıyı yapan nesneyi ifade eder. Ok fonksiyonları ise kendi `this` bağlamını oluşturmaz; çevreleyen kapsamın `this` değerini kullanır. İki sözdizimi her durumda birbirinin yerine geçmez.

## 3. Asenkron programlama için öğrenilmesi gereken konular

Resmî makale, asenkron programlamayı Node.js'in temel özelliklerinden biri olarak vurgular ve aşağıdaki **altı** kavramı ayrıca önerir.

| Konu | Ne öğrenilmeli? | Kaynak |
| --- | --- | --- |
| **Asynchronous Programming and Callbacks** | Bir işlem sonuçlandığında çağrılan fonksiyonlar; geleneksel Node.js callback yaklaşımı. | [MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Introducing) |
| **Timers (Zamanlayıcılar)** | `setTimeout()`, `setInterval()`, zamanlama ve iptal işlemleri. | [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout) |
| **Promises (Promise nesneleri)** | Gelecekte tamamlanan veya reddedilen sonuçları `then`, `catch` ve `finally` ile işlemek. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) |
| **Async and Await** | Promise tabanlı işlemleri daha okunabilir sözdizimiyle yürütmek, `try/catch` ile hata yakalamak. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function) |
| **Closures (Kapanışlar)** | Fonksiyonun oluşturulduğu yerdeki değişkenlere erişimini koruması; callback'lerde önemlidir. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures) |
| **The Event Loop (Olay döngüsü)** | JavaScript görevlerinin ne zaman çalıştırıldığını ve asenkron callback'lerin nasıl zamanlandığını anlamak. | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_model) |

> **Teknik not:** MDN'nin tarayıcıya özgü zamanlayıcı açıklamaları ile Node.js zamanlayıcı API'lerinin tüm ayrıntıları aynı değildir. Node.js için ayrıca [resmî Timers API referansı](https://nodejs.org/api/timers.html) kullanılmalıdır.

### 3.1. Callback örneği

```javascript
setTimeout(() => {
  console.log('Zamanlayıcı tamamlandı');
}, 1000);

console.log('Program devam ediyor');
```

İlk olarak `Program devam ediyor` yazdırılır. Zamanlayıcı callback'i en az belirtilen gecikmeden sonra çalıştırılmaya uygun hâle gelir; tam olarak 1.000 milisaniyede çalışacağı garanti değildir.

### 3.2. Promise ve `async/await` örneği

```javascript
const wait = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

async function loadData() {
  try {
    await wait(300);
    return { success: true, count: 3 };
  } catch (error) {
    console.error('İşlem başarısız:', error);
    throw error;
  }
}

loadData().then((result) => console.log(result));
```

- `new Promise(...)`, gelecekte tamamlanacak bir sonucu temsil eder.
- `resolve`, Promise'i başarılı durumda tamamlar.
- `async`, fonksiyonun dönüşünü Promise olarak sunar.
- `await`, içinde bulunduğu asenkron fonksiyonun devamını Promise sonucuna kadar bekletir; tüm Node.js sürecini durdurmaz.
- `try/catch`, ilgili `await` işleminde ortaya çıkan hataları ele alabilir.

### 3.3. Event Loop neden önemli?

Node.js'te bir HTTP isteği dosya veya ağ yanıtı beklerken uygulama başka bağlantılara hizmet verebilir. Bununla birlikte uzun süreli, yoğun senkron hesaplamalar JavaScript iş parçacığını meşgul ederek diğer callback'leri geciktirebilir.

Event Loop'u öğrenirken şu ayrımı koruyun: **Asenkron çalışma, bütün işlemlerin aynı anda paralel işlemcilerde yürütülmesi demek değildir.**

## 4. Önerilen öğrenme sırası

Bu kısım resmî makalenin sırasıyla birebir aynı olmayan **ek eğitim önerimizdir**:

1. **Dil temeli:** Sözcüksel yapı, değişkenler, veri tipleri, ifadeler, koşullar, döngüler ve fonksiyonlar.
2. **Veri işleme:** Nesneler, diziler, `map`, `filter`, arrow functions, template literals ve modern ES6 özellikleri.
3. **Dil davranışı:** Scope, closure, `this`, strict mode ve class.
4. **Asenkron temel:** Callback, timer, Promise, `async/await` ve Event Loop.
5. **Node.js uygulaması:** Modüller, dosya işlemleri, HTTP sunucusu, API endpoint'leri ve veritabanı bağlantıları.

İlk üç aşamada eksik olduğunuz noktaları küçük alıştırmalarla tamamlayabilirsiniz. Özellikle backend geliştirme sırasında Promise, `async/await`, hata yönetimi ve Event Loop konuları sürekli karşınıza çıkar.

## 5. Kendinizi kontrol edin

- `const` ve `let` arasında ne fark vardır?
- `Array.filter()` ve `Array.map()` hangi durumlarda kullanılır?
- Normal fonksiyonla arrow function'ın `this` davranışı neden farklıdır?
- Bir callback hangi durumda çalıştırılır?
- Promise'in `fulfilled` ve `rejected` durumları ne anlama gelir?
- `await` bütün Node.js sürecini durdurur mu?
- Event Loop neden uzun süren senkron işlemlerden etkilenir?

Bu soruları temel düzeyde yanıtlayabiliyorsanız Node.js'in sonraki eğitim bölümlerinden verim alma olasılığınız artar.

---

**Sonraki resmî konu:** [Node.js ile tarayıcı arasındaki farklar](https://nodejs.org/learn/getting-started/differences-between-nodejs-and-the-browser)

**Kaynak ve kapsam notu:** Bu bölüm, resmî Node.js makalesinde önerilen 15 JavaScript temel konusunun ve 6 asenkron programlama konusunun tümünü kapsar. Açıklayıcı tablolar, kod örnekleri, kontrol soruları ve öğrenme sırası tarafımızdan eklenmiştir.
