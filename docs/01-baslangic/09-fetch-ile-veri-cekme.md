---
id: baslangic-9
title: Node.js Fetch API ve Undici
sidebar_label: Node.js Fetch API ve Undici
sidebar_position: 9
description: Node.js Fetch API ve Undici konusunda kaynak başlıkları, kod örnekleri ve güvenlik notları.
---

# Node.js Fetch API ve Undici

> **Resmî kaynak:** https://nodejs.org/learn/getting-started/fetch  
> **Kontrol tarihi:** 16 Ekim 2026  
> **Metin türü:** Kaynaktaki temel teknik konuları kapsayan özgün Türkçe anlatım; birebir çeviri değildir.

## Fetch API ve Undici
Modern Node.js, HTTP isteklerini `fetch()` API'siyle yapabilir. Node.js içindeki Fetch uygulamasının altyapısında **Undici** bulunur. Undici, yüksek performans odaklı bir HTTP istemcisidir; yerleşik `node:http` istemcisinden bağımsız tasarlanmıştır.

`fetch(url, options)`, bir `Promise<Response>` döndürür. `response.ok`, `response.status`, `response.headers`, `response.json()` ve `response.text()` sık kullanılan özellik ve metotlardır.

## Temel GET isteği
```javascript
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  return response.json();
}

getPosts().then(console.log).catch(console.error);
```

`fetch()` varsayılan olarak GET isteği yapar. **Önemli:** HTTP 404 veya 500 yanıtları yalnızca bu nedenle Promise'i reddetmez; `response.ok` veya `status` ayrıca incelenmelidir.

## Temel POST isteği
```javascript
async function createPost() {
  const body = { title: 'Merhaba', body: 'Node.js örneği', userId: 1 };
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}

createPost().then(console.log).catch(console.error);
```

JSON verisini göndermeden önce `JSON.stringify()` kullanın; gelen veri uygunsa `response.json()` ile ayrıştırın. Gönderilen başlıklar, yöntem, istek gövdesi ve kimlik doğrulama ihtiyaca göre özelleştirilebilir.

## İstek sınırları, zaman aşımı ve hata yönetimi
```javascript
async function getWithTimeout(url) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(5000),
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) throw new Error(`İstek başarısız: ${response.status}`);
  return response.json();
}
```

`AbortSignal.timeout()` belirli bir süre sonra isteğin iptal edilmesine yardımcı olur; zaman aşımı ve ağ hataları `catch` içinde ayrı ele alınmalıdır.

## Undici ile Fetch'i özelleştirme
Yerleşik `fetch` temel uygulamalarda yeterlidir. Havuz (pool), bağlantı ayarları ve ileri düzey istek/akış kontrolü için doğrudan Undici paketini kullanabilirsiniz:

```bash
npm install undici
```

```javascript
// Undici paketi kurulmuş ESM projesi
import { Pool } from 'undici';

const pool = new Pool('https://example.com', { connections: 5 });
try {
  const { statusCode, body } = await pool.request({
    path: '/',
    method: 'GET',
  });
  console.log(statusCode);
  console.log(await body.text());
} finally {
  await pool.close();
}
```

`Pool`, aynı kök sunucuya giden bağlantıları tekrar kullanmaya yardımcı olur. Bu örnek, resmî makaledeki yerel **Ollama** LLM servisi üzerinden bağlantı havuzuyla akışlı yanıt işleme fikrinin daha küçük bir uyarlamasıdır. Ollama senaryosunda `http://localhost:11434` ve `/api/generate` endpoint'i üzerinden JSON POST yapılır; model adının kurulu modelle eşleşmesi gerekir. Hatalı durumlarda yanıt gövdesini tüketmek veya `dump()` ile atmak bağlantı havuzunun sağlıklı kullanımı açısından önemlidir.

## Streaming (parçalı veri işleme)
Büyük yanıtların tamamını belleğe almadan parçalar hâlinde işlemek için akış API'leri kullanılır. Node.js Fetch yanıtının `body` alanı bir Web `ReadableStream` nesnesidir.

```javascript
async function streamText(url) {
  const response = await fetch(url);
  if (!response.ok || !response.body) throw new Error('Yanıt akışı alınamadı');

  const decoder = new TextDecoder();
  for await (const chunk of response.body) {
    process.stdout.write(decoder.decode(chunk, { stream: true }));
  }
  process.stdout.write(decoder.decode());
}
```

Akış boyunca metin çözümlemesinde çok baytlı karakterlerin parçalar arasında bölünebileceği dikkate alınmalıdır. Resmî sayfa ayrıca Undici'nin `stream()` yardımcı fonksiyonu ve `node:stream` içindeki `Writable` kullanımıyla GitHub API'sinden veri toplama örneği gösterir. Bu yaklaşım işlenecek veriyi bir hedef akışa yönlendirmek için kullanılır.

## Backend için pratik ilkeler
- Ağ hatalarını `try/catch` ile, HTTP durum hatalarını `response.ok` ile ele alın.
- Zaman aşımı uygulayın; erişilemeyen hizmetin işlemleri sonsuza kadar bekletmesine izin vermeyin.
- İçerik türünü doğrulayın; her yanıtın geçerli JSON olacağını varsaymayın.
- Özel erişim anahtarlarını kod veya GitHub deposuna koymayın.
- Çok büyük yanıtlar için streaming ve uygun boyut sınırları düşünün.

## Kaynaklar
- [Node.js Fetch / Undici rehberi](https://nodejs.org/learn/getting-started/fetch)
- [Undici belgeleri](https://undici.nodejs.org/)
- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Node.js Web Streams](https://nodejs.org/api/webstreams.html)

**Sonraki konu:** [Yerleşik WebSocket istemcisi](https://nodejs.org/learn/getting-started/websocket)
