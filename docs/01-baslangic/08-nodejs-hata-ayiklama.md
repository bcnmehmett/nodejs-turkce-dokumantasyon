---
id: baslangic-8
title: Node.js Hata Ayıklama
sidebar_label: Node.js Hata Ayıklama
sidebar_position: 8
description: Node.js Hata Ayıklama konusunda kaynak başlıkları, kod örnekleri ve güvenlik notları.
---

# Node.js Hata Ayıklama

> **Resmî kaynak:** https://nodejs.org/learn/getting-started/debugging  
> **Kontrol tarihi:** 16 Ekim 2026  
> **Metin türü:** Kaynaktaki temel teknik konuları kapsayan özgün Türkçe anlatım; birebir çeviri değildir.

## Inspector'ı etkinleştirme
Node.js süreçlerini hata ayıklama istemcisine açmak için `--inspect` kullanılır. Varsayılan dinleme adresi **127.0.0.1:9229**'dur. İstemci, süreç için oluşturulan benzersiz oturum UUID'sini de kullanan bir WebSocket uç noktasına bağlanır.

```powershell
node --inspect app.js
node --inspect-brk app.js
node --inspect-wait app.js
node inspect app.js
```

- `--inspect`: Inspector sunucusunu açar ve uygulamayı normal başlatır.
- `--inspect-brk`: Kullanıcı koduna girmeden önce duraklar; başlangıç sorunları için uygundur.
- `--inspect-wait`: Hata ayıklayıcı bağlanmasını bekler.
- `node inspect app.js`: Terminal tabanlı hata ayıklayıcıyı çalıştırır.
- `--inspect=127.0.0.1:9230`: Farklı dinleme portu seçer.

Unix benzeri sistemlerde çalışan bir Node.js sürecine `SIGUSR1` gönderilmesi Inspector'ı başlatabilir. **Windows'ta SIGUSR1 desteği yoktur.** Eski Node.js sürümlerinin debugger davranışı farklıdır.

## Inspector'ın güvenlik sonuçları
Inspector yalnızca günlük okuyan pasif bir arayüz değildir: bağlantı kurabilen bir istemci süreç ayrıcalıklarıyla **kod çalıştırabilir** ve sürecin verilerine erişebilir. Bu nedenle üretim ortamında debug portunu kontrolsüz açmayın.

- `--inspect=0.0.0.0:9229` veya herkese açık IP adresi kullanmak saldırı yüzeyini ciddi biçimde artırır.
- Yalnızca `127.0.0.1` adresine bağlansa bile **aynı makinedeki uygulamalar** Inspector'a erişebilir.
- Tarayıcı güvenlik politikaları ve Node.js'in `Host` başlığı denetimleri bazı kötü niyetli bağlantıları zorlaştırır; bunlar yetkilendirme mekanizmasının yerine geçmez.
- Uzaktan hata ayıklarken doğrudan açılan port yerine güvenli **SSH tüneli** ve uygun erişim kontrolü tercih edilir.

## Kullanılabilen Inspector istemcileri

| Araç | Kullanımı |
| --- | --- |
| Chrome DevTools | `chrome://inspect` sayfasından Node.js hedefini seçin |
| Microsoft Edge | `edge://inspect` üzerinden hedefe bağlanın |
| Visual Studio Code | Run and Debug alanından Node.js çalıştırma veya bağlanma yapılandırması oluşturun |
| Visual Studio | Desteklenen Node.js debugging bileşenleriyle F5 / Debug menüsü |
| JetBrains WebStorm | Node.js Run/Debug configuration |
| chrome-remote-interface | Inspector protokolüne programatik bağlantı için kütüphane |
| Eclipse + Wild Web Developer | Node.js hata ayıklama yapılandırması |
| Terminal | `node inspect script.js` |

### VS Code ile adım adım
```javascript
// app.js
function total(price, quantity) {
  const result = price * quantity;
  return result;
}

console.log(total(50, 3));
```
1. Dosyayı VS Code'da açın, `const result` satırının yanına tıklayıp **breakpoint** ekleyin.
2. **Run and Debug** menüsünden Node.js uygulaması olarak çalıştırın; gerekiyorsa Node.js launch configuration oluşturun.
3. Debugger durduğunda **Variables**, **Watch**, **Call Stack** ve **Debug Console** pencerelerini kullanın.
4. Step Over, Step Into ve Continue komutlarının kod yürütme üzerindeki etkilerini karşılaştırın.

## Desteklenen komut satırı seçenekleri
| Seçenek | İşlev |
| --- | --- |
| `--inspect` | Inspector açar, varsayılan localhost:9229 |
| `--inspect=[host:port]` | Adres ve portu özelleştirir |
| `--inspect-brk` | Kullanıcı kodundan önce bekler |
| `--inspect-brk=[host:port]` | Başlangıç duraklaması ve özel adres |
| `--inspect-wait` | İstemci bağlantısını bekler |
| `--inspect-wait=[host:port]` | Bekleme ve özel adres |
| `--disable-sigusr1` | SIGUSR1 ile Inspector açılmasını engeller |
| `node inspect script.js` | Komut satırı debugger |
| `node inspect --port=9230 script.js` | CLI debugger için farklı hedef portu |

## Güvenli uzaktan erişim örneği
Uzak sunucuda Inspector'ı yalnızca localhost üzerinde başlatın:

```bash
node --inspect server.js
```

Yerel bilgisayarınızda SSH tüneli açın (uzak makinede SSH erişimi ve gerekli izinler varsayılır):

```bash
ssh -L 9221:localhost:9229 kullanici@sunucu.example
```

Ardından yerel debugger istemcisini `127.0.0.1:9221` hedefine bağlayın. Sunucu debug portunu internete doğrudan açmayın.

## Eski hata ayıklayıcılar
Node.js 7.7.0 itibarıyla eski debugger mekanizması kullanımdan kaldırılmıştır. Eski `--debug`, `--debug-brk`, `node debug` ve tarihsel `node-inspector` açıklamaları **güncel kurulum tavsiyesi değildir**. Yeni projelerde Inspector protokolü ve modern istemciler tercih edilmelidir.

## Kaynaklar
- [Node.js Inspector API](https://nodejs.org/api/inspector.html)
- [Node.js CLI debugging seçenekleri](https://nodejs.org/api/cli.html)
- [Visual Studio Code Node.js debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging)
- [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/)

**Sonraki konu:** [Node.js ile veri çekme](https://nodejs.org/learn/getting-started/fetch)
