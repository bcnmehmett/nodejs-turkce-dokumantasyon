---
id: nodejs-tarayici-farklari
title: Node.js ile Tarayıcı Arasındaki Farklar
sidebar_label: Node.js ve Tarayıcı
sidebar_position: 3
description: Node.js ve tarayıcı JavaScript ortamları, API'ler, modüller, sürüm kontrolü ve güvenlik farklılıkları.
---

# Node.js ile Tarayıcı Arasındaki Farklar

> **Resmî kaynak:** [Differences between Node.js and the Browser](https://nodejs.org/learn/getting-started/differences-between-nodejs-and-the-browser)  
> **Kontrol tarihi:** 16 Ekim 2026  
> **Kapsam:** Resmî makaledeki ana teknik noktaların tümünü ele alan özgün Türkçe anlatım; birebir çeviri değildir.

## 1. Ortak dil, farklı çalışma ortamları

Hem tarayıcı hem Node.js JavaScript çalıştırır. Ancak **JavaScript dili** ile o dili çalıştıran **ortamın sunduğu API'ler** aynı şey değildir. Tarayıcı kullanıcı etkileşimi ve web sayfalarına, Node.js ise sunucu ve sistem görevlerine yönelik olanaklar sağlar.

Tek dili hem istemci hem sunucu tarafında kullanmak öğrenme ve geliştirme maliyetini azaltabilir. Ancak aynı dil kullanılsa da ortamların güvenlik, dağıtım ve API davranışları farklıdır.

## 2. Tarayıcı API'leri ve Node.js API'leri

| Konu | Tarayıcı | Node.js |
| --- | --- | --- |
| DOM | `document` ile HTML öğelerini yönetir | Varsayılan DOM veya `document` yoktur |
| Pencere | `window` ve ilgili arayüzler | Varsayılan `window` yoktur |
| Çerezler | `document.cookie` ve web API'leri | HTTP başlıkları ya da ilgili kütüphanelerle işlenir |
| Dosya sistemi | Kullanıcı ve güvenlik kısıtlamalarına tabi web API'leri | `node:fs` ile işletim sisteminin izin verdiği dosyalara erişebilir |
| Sistem süreçleri | Genel amaçlı süreç yönetimi sağlanmaz | `node:child_process`, `process` gibi özellikler bulunur |
| Ağ | Fetch ve tarayıcı güvenlik politikaları | HTTP, TCP ve diğer ağ API'leriyle sunucu görevleri yapılabilir |

**Önemli:** Bazı API'ler iki ortamda da bulunabilir. Örneğin modern Node.js, `fetch()` ve belirli Web API'lerini de sağlar. Dolayısıyla “tarayıcıya ait her API Node.js'te yoktur” demek doğru değildir; API'lerin hangi sürümde ve hangi davranışla desteklendiğini kontrol etmek gerekir.

### Örnek: DOM

```javascript
// Tarayıcıda:
document.querySelector('#status').textContent = 'Hazır';
```

Bu kodu standart Node.js ortamında çalıştırmak `ReferenceError` ile sonuçlanır; çünkü `document` tanımlı değildir.

### Örnek: Node.js dosya sistemi

```javascript
// Node.js ESM; dosya adı: example.mjs
import { readFile } from 'node:fs/promises';

const content = await readFile('./data.txt', 'utf8');
console.log(content);
```

`node:fs/promises`, Node.js'in yerleşik ve Promise tabanlı dosya sistemi API'sidir. Kodun çalışması için `data.txt` dosyasının mevcut olması ve okuma izninin bulunması gerekir.

## 3. Çalışma zamanı sürümünü kontrol etme

Node.js uygulamalarında hangi Node.js sürümüne dağıtım yapacağınızı çoğu durumda siz veya sunucu yöneticisi belirlersiniz. Bu sayede kullandığınız sürümün desteklediği modern ECMAScript özelliklerini hedefleyebilirsiniz.

Tarayıcıya dağıtılan JavaScript'te ise kullanıcıların Chrome, Safari, Firefox gibi farklı tarayıcı ve sürümlerine sahip olabileceğini hesaba katmalısınız. Gerektiğinde **transpilation** (örneğin Babel) veya uyumluluk araçları kullanılır.

> **Sınır:** Node.js sürümünü seçebilmek her paketin veya JavaScript özelliğinin her Node.js sürümünde çalışacağını garanti etmez. Paketlerin `engines` kısıtları ve hedef sürümün API desteği kontrol edilmelidir.

## 4. CommonJS ve ECMAScript modülleri

Node.js iki önemli modül sistemiyle çalışabilir:

**CommonJS (CJS)**

```javascript
const { readFile } = require('node:fs');
```

**ECMAScript Modules (ESM)**

```javascript
import { readFile } from 'node:fs';
```

Tarayıcıdaki yerel JavaScript modül yapısı ESM'dir; Node.js hem CommonJS hem ESM desteği sunar.

Node.js'te dosya uzantıları ve `package.json` içindeki `type` alanı modül türünü etkiler:

- `.mjs`: ESM
- `.cjs`: CommonJS
- `.js`: Paket yapılandırması ve Node.js sürümüne göre yorumlanır

Modern Node.js'te iki sistem arasında birlikte çalışabilirlik mümkündür ancak ayrıntıları ve sınırlamaları vardır. Bkz. [Node.js Packages](https://nodejs.org/api/packages.html) ve [ECMAScript Modules](https://nodejs.org/api/esm.html).

## 5. Güvenlik ve dağıtım açısından farklar

Tarayıcı JavaScript'i genellikle web platformunun sandbox ve kaynaklar arası erişim politikalarına tabi olarak çalışır. Node.js uygulaması ise süreç sahibi hesabın izinlerine bağlı olarak dosyalara ve sistem kaynaklarına erişebilir.

Bu nedenle sunucu tarafında dosya yolu doğrulama, sır yönetimi, kullanıcı girdilerinin kontrolü ve en az ayrıcalık ilkesi çok önemlidir.

## 6. Backend geliştirici için karar tablosu

| İhtiyaç | Yaygın ortam |
| --- | --- |
| Butona tıklayınca sayfayı güncellemek | Tarayıcı |
| HTTP REST API hazırlamak | Node.js |
| Sunucuda PostgreSQL ile konuşmak | Node.js |
| Kullanıcı arayüzünde DOM güncellemek | Tarayıcı |
| Sunucudaki günlük dosyasını yazmak | Node.js |
| Ortak veri doğrulama işlevleri | Uygun şekilde her ikisi |

## 7. Öğrenme kontrol listesi

- JavaScript dili ve JavaScript çalışma zamanı arasındaki farkı açıklayabiliyor muyum?
- `document` neden Node.js'te varsayılan olarak yok?
- `node:fs` hangi ortamda kullanılır?
- Node.js sürümüyle tarayıcı sürümü uyumluluğu neden farklı ele alınır?
- `require()` ve `import` sözdizimleri hangi modül sistemlerine aittir?

---

**Sıradaki konu:** [V8 JavaScript Motoru](https://nodejs.org/learn/getting-started/the-v8-javascript-engine)

**Editör notu:** Yukarıdaki kod ve açıklamalar öğretici uyarlamadır; resmî sayfanın birebir çevrilmiş metni değildir.
