---
id: baslangic-6
title: Node.js Sürüm Yöneticileri
sidebar_label: Node.js Sürüm Yöneticileri
sidebar_position: 6
description: Node.js Sürüm Yöneticileri hakkında kaynak başlıklarını kapsayan özgün Türkçe teknik anlatım.
---

# Node.js Sürüm Yöneticileri

> **Resmî kaynak:** https://nodejs.org/learn/getting-started/node-version-managers  
> **Kontrol tarihi:** 16 Ekim 2026  
> **Metin türü:** Kaynak makalenin konu kapsamını ele alan özgün Türkçe teknik anlatım; birebir çeviri değildir.

## Sürüm yöneticisi neden kullanılır?
Farklı uygulamalar farklı Node.js sürümlerine ihtiyaç duyabilir. Sürüm yöneticileri aynı bilgisayarda birden fazla Node.js sürümünü kurmayı, aralarında geçiş yapmayı ve uygun sürüm güncellemelerini yönetmeyi kolaylaştırır. Bazıları proje dizinine göre sürümü otomatik seçebilir, bazıları manuel komut gerektirir.

## Resmî sayfada listelenen araçlar
| Araç | Bağlantı ve not |
| --- | --- |
| asdf | [asdf](https://github.com/asdf-vm/asdf): Çok dilli sürüm yönetimi |
| fnm | [fnm](https://github.com/Schniz/fnm): Node.js sürüm yöneticisi |
| mise | [mise](https://github.com/jdx/mise): Geliştirme araçları ve sürümleri |
| n | [n](https://github.com/tj/n): Node.js sürüm yönetimi |
| nave | [nave](https://github.com/isaacs/nave): Node sanal ortamları |
| nvm | [nvm](https://github.com/nvm-sh/nvm): Unix/macOS kabukları için yaygın araç, OpenJS projesi |
| nvm for Windows | [nvm-windows](https://github.com/coreybutler/nvm-windows): Ayrı proje; nvm ile bağlantılı değildir |
| nvs | [nvs](https://github.com/jasongin/nvs): Çapraz platform Node sürüm değiştirme |
| volta | [volta](https://github.com/volta-cli/volta): Resmî sayfa çalıştığını, ancak bakımının sürdürülmediğini not eder |

## Windows 11 üzerinde örnek çalışma
Windows için uygun bir yönetici seçtikten sonra **kendi aracının güncel kurulum kılavuzunu** izleyin. Örneğin fnm kurulmuşsa:

```powershell
fnm install --lts
fnm use --lts
node --version
npm --version
```

Bu örnek, fnm'in yüklenmiş ve kabuk entegrasyonunun yapılandırılmış olduğunu varsayar. Sürüm seçimi terminale ve proje ayarlarına göre kalıcı olmayabilir.

## Proje sürümünü belgelemek
Projeler arası uyumluluk için kullanılan Node.js majör sürümünü kaydetmek yararlıdır.

```json
{
  "engines": {
    "node": ">=22"
  }
}
```

Buradaki `engines` alanı varsayılan npm kurulumunda tek başına her zaman katı bir engel değildir. Ayrıca proje kökünde kullanılan araca uygun bir sürüm dosyası tutulabilir.

## Dikkat edilmesi gerekenler
- Üretim ortamı ile yerel ortamın Node.js sürümlerini uyumlu tutun.
- Eski veya destek dışı sürümleri güvenlik riski nedeniyle değerlendirin.
- `nvm` ile `nvm-windows` komut ve altyapılarını aynı ürün sanmayın.
- Paket yöneticisi sürümü ve kilit dosyasının tekrar üretilebilirliği de önemlidir.

**Sonraki konu:** [ECMAScript 2015 ve sonrası](https://nodejs.org/learn/getting-started/ecmascript-2015-es6-and-beyond)
