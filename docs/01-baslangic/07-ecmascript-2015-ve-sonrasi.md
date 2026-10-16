---
id: baslangic-7
title: ECMAScript 2015 (ES6) ve Sonrası
sidebar_label: ECMAScript 2015 (ES6) ve Sonrası
sidebar_position: 7
description: ECMAScript 2015 (ES6) ve Sonrası hakkında kaynak başlıklarını kapsayan özgün Türkçe teknik anlatım.
---

# ECMAScript 2015 (ES6) ve Sonrası

> **Resmî kaynak:** https://nodejs.org/learn/getting-started/ecmascript-2015-es6-and-beyond  
> **Kontrol tarihi:** 16 Ekim 2026  
> **Metin türü:** Kaynak makalenin konu kapsamını ele alan özgün Türkçe teknik anlatım; birebir çeviri değildir.

## ECMAScript ve Node.js
ECMAScript, JavaScript dilinin standardıdır. ES2015 (ES6) adı verilen büyük sürüm ve sonraki yıllık standartlar, dile birçok yeni sözdizimi ve yerleşik özellik kazandırdı. Node.js sürümleri belirli V8 motorlarıyla geldiğinden desteklenen özellikler hedef Node.js sürümüne göre değişir.

## Desteklenen özellikleri nasıl anlarsınız?
- Hedef Node.js sürümünün resmî sürüm notlarını ve [Node.js sürüm takvimini](https://nodejs.org/en/about/previous-releases) kontrol edin.
- [Node.js JavaScript özellikleri rehberi](https://nodejs.org/learn/getting-started/ecmascript-2015-es6-and-beyond) ve [ECMAScript uyumluluk tablosu](https://compat-table.github.io/compat-table/es6/) üzerinden destek durumunu inceleyin.
- Deneysel özelliklerin desteklenmesi için bazı sürümlerde özel bayrak gerekebilir. Kararlı dil özellikleriyle deneysel ortam API'lerini karıştırmayın.

## Modern JavaScript örnekleri
```javascript
const person = { name: 'Ayşe', role: 'developer' };
const { name, role } = person;
const greeting = `Merhaba, ${name}! Görevin: ${role}`;

const double = (number) => number * 2;
const values = [1, 2, 3];
const results = values.map(double);

console.log(greeting, results);
```

Bu örnekte `const`, nesne destructuring, template literal, arrow function ve `Array.prototype.map()` birlikte kullanılır.

## Modüller ve asenkron programlama
```javascript
// Kullanım: app.mjs
import { readFile } from 'node:fs/promises';

async function loadConfig() {
  const json = await readFile('./config.json', 'utf8');
  return JSON.parse(json);
}

loadConfig()
  .then(console.log)
  .catch(console.error);
```

`async/await`, Promise tabanlı işlemleri ifade etmeyi kolaylaştırır. ESM sözdizimi Node.js'te `.mjs` veya uygun paket yapılandırmasıyla kullanılır. Dosya erişiminde hata yönetimi önemlidir.

## ES2015 ile gelen yaygın başlıklar
- `let` ve `const` ile blok kapsamı
- Arrow functions, template literals ve destructuring
- Varsayılan parametreler, rest/spread sözdizimi
- `class` ve modül sistemi
- `Map`, `Set`, `Promise`, iteratörler ve generator fonksiyonları

Bunların bir kısmı sonraki ECMAScript sürümlerindeki özelliklerle birlikte günlük Node.js geliştirmede kullanılır. Standartların yayın yılı ile Node.js'te kararlı biçimde kullanılabildikleri sürüm aynı şey değildir.

## Node.js'te ECMAScript özellik sınıfları
Resmî kaynak özellikle **shipping**, **staged** ve **in progress** özellikleri ayırt eder. *Shipping* özellikler varsayılan kullanılabilir; *staged* özellikler belirli bayraklar gerektirebilir; *in progress* özellikler henüz genel kullanıma hazır değildir. V8 ve Node.js sürümleriyle bu sınıflandırma zaman içinde değişebilir.

## Yararlı bağlantılar
- [TC39 ECMAScript standardı](https://tc39.es/ecma262/)
- [MDN JavaScript referansı](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Node.js ESM belgeleri](https://nodejs.org/api/esm.html)

**Sonraki konu:** [Node.js uygulamalarında hata ayıklama](https://nodejs.org/learn/getting-started/debugging-nodejs)
