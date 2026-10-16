---
id: baslangic-10
title: Node.js Yerleşik WebSocket İstemcisi
sidebar_label: Node.js Yerleşik WebSocket İstemcisi
sidebar_position: 10
description: Node.js Yerleşik WebSocket İstemcisi konusunda kaynak başlıkları, kod örnekleri ve güvenlik notları.
---

# Node.js Yerleşik WebSocket İstemcisi

> **Resmî kaynak:** https://nodejs.org/learn/getting-started/websocket  
> **Kontrol tarihi:** 16 Ekim 2026  
> **Metin türü:** Kaynaktaki temel teknik konuları kapsayan özgün Türkçe anlatım; birebir çeviri değildir.

## WebSocket nedir?
**WebSocket**, bir bağlantı üzerinde istemci ile sunucunun çift yönlü (full-duplex) mesaj göndermesini sağlayan protokoldür. HTTP polling yönteminden farklı olarak bağlantı açık kalabilir, sunucu yeni mesajları istemci yeni bir HTTP isteği başlatmadan gönderebilir.

- `ws://` şifrelenmemiş, `wss://` TLS korumalı WebSocket bağlantılarını ifade eder.
- WebSocket bağlantısının kurulması geleneksel protokolde HTTP Upgrade süreciyle gerçekleşir.
- WebSocket, anlık bildirimler, sohbet ve canlı veri iletimi gibi uygulamalarda kullanılır.

## Yerleşik istemci desteği
Node.js v21 serisinde Undici tabanlı yerleşik WebSocket istemcisi tanıtıldı; **Node.js v22.4.0** ile kararlı statüye ulaştı. Bu özellik, ek paket kurmadan **WebSocket sunucusuna istemci olarak bağlanmayı** sağlar.

```javascript
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  console.log('Bağlantı kuruldu');
  socket.send('Merhaba sunucu');
});

socket.addEventListener('message', (event) => {
  console.log('Alınan mesaj:', event.data);
});

socket.addEventListener('close', (event) => {
  console.log('Kapatıldı:', event.code, event.reason);
});

socket.addEventListener('error', (error) => {
  console.error('WebSocket hatası:', error);
});
```

Bu örneğin çalışması için `localhost:8080` üzerinde WebSocket sunucusu bulunmalıdır. Bağlantı başarısızsa `open` olayı gerçekleşmeyebilir.

## JSON veri gönderme ve okuma
```javascript
const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
  socket.send(JSON.stringify({ type: 'stock', sku: 'ABC-001', count: 25 }));
});

socket.addEventListener('message', (event) => {
  if (typeof event.data !== 'string') return;
  try {
    const message = JSON.parse(event.data);
    console.log('Mesaj türü:', message.type);
  } catch (error) {
    console.error('Geçersiz JSON:', error);
  }
});
```

`JSON.stringify()`, JavaScript nesnesini metin biçimine çevirir; `JSON.parse()` ise geçerli JSON metnini nesneye dönüştürür. Gelen içerik ikili veri de olabilir; bu yüzden veri biçimini varsaymadan kontrol edin.

## İstemci ile sunucunun farkı
Node.js'in yerleşik `WebSocket` sınıfı **istemci bağlantıları** içindir. Resmî makalenin ele aldığı Node.js v22 bağlamında yerleşik genel amaçlı WebSocket sunucusu bulunmaz. Gelen istemci bağlantılarını kabul edecek sunucu geliştirmek için `ws` gibi paketler veya `socket.io` gibi daha üst düzey çözümler kullanılabilir. Socket.IO, yalın WebSocket protokolüne ek özellikler sunar; birebir aynı protokol değildir.

## Bağlantı güvenliği ve üretim tasarımı
- İnternet üzerinde `wss://` kullanın.
- Kimlik doğrulama ve yetkilendirmeyi uygulama protokolüne göre tasarlayın.
- Yeniden bağlanma, heartbeat ve timeout stratejileri geliştirin.
- Mesajların geçerli türde ve makul boyutta olduğunu doğrulayın.
- Bu istemci API'si tek başına otomatik yeniden bağlanma veya mesajların kalıcı saklanmasını sağlamaz.

## Kullanım alanları
Bir barkod/stok uygulamasında merkezi stok değişikliğini açık terminallere hızlı iletmek; navigasyon uygulamasında canlı konum veya trafik güncellemelerini takip etmek ve operasyon panellerinde gerçek zamanlı bildirim sunmak için WebSocket uygun bir seçenek olabilir.

## Kaynaklar
- [Node.js Learn: WebSocket client](https://nodejs.org/learn/getting-started/websocket)
- [MDN WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [Node.js WebSocket kaynak bilgisi](https://nodejs.org/api/globals.html#class-websocket)
- [ws paketi](https://www.npmjs.com/package/ws)

**Sonraki konu:** [Geliştirme ve üretim ortamları](https://nodejs.org/learn/getting-started/nodejs-the-difference-between-development-and-production)
