---
id: baslangic-5
title: npm Paket Yöneticisine Giriş
sidebar_label: npm Paket Yöneticisine Giriş
sidebar_position: 5
description: npm Paket Yöneticisine Giriş hakkında kaynak başlıklarını kapsayan özgün Türkçe teknik anlatım.
---

# npm Paket Yöneticisine Giriş

> **Resmî kaynak:** https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager  
> **Kontrol tarihi:** 16 Ekim 2026  
> **Metin türü:** Kaynak makalenin konu kapsamını ele alan özgün Türkçe teknik anlatım; birebir çeviri değildir.

## npm nedir?
npm, Node.js için yaygın kullanılan paket yöneticisi ve npm kayıt deposuyla çalışan komut satırı aracıdır. Projelerin bağımlılıklarını indirir, sürümlerini izler, günceller ve `package.json` üzerinden geliştirme görevlerini çalıştırır. Alternatifleri arasında [Yarn](https://yarnpkg.com/) ve [pnpm](https://pnpm.io/) vardır.

## Paketler ve bağımlılıkların kurulması
Bir proje içinde `package.json` varsa `npm install` paketleri `node_modules` klasörüne kurar; bağımlılık çözümlemesini ve kilit dosyasını da yönetebilir.

```bash
npm install
npm install express
npm install --save-dev typescript
npm install --no-save cowsay
npm install --save-optional optional-package
```

`npm install express` paketini varsayılan olarak `dependencies` listesine ekler. `--save-dev` / `-D` geliştirme araçlarını `devDependencies` bölümüne kaydeder. `--save-optional` / `-O` yüklemesi başarısız olabilen isteğe bağlı bağımlılıkları kaydeder; uygulama yokluklarını karşılamalıdır. `--no-save` bağımlılık listesine kaydetmeden kurar. Eski kaynaklarda `--no-optional` görülebilir; güncel npm için `--omit=optional` yaklaşımını da kontrol edin.

**Önemli ayrım:** `devDependencies`, paketlerin yalnızca üretime “paketlenip paketlenmemesi” değil, geliştirme ve derleme sırasında mı yoksa çalışma zamanında mı gerektiğini belirtir. Üretim kurulumu yapılandırmasına göre geliştirme bağımlılıkları dışlanabilir.

## Paketleri güncelleme
```bash
npm update
npm update express
npm outdated
```
`npm update` sürüm aralıklarının izin verdiği güncellemeleri uygular. `npm outdated` kullanılabilir ve kurulu sürümlerin durumunu incelemeye yardımcı olur. Majör sürüm geçişleri ayrıca uyumluluk incelemesi gerektirir.

## Sürümleme (Semantic Versioning)
Paket sürümleri çoğunlukla `MAJOR.MINOR.PATCH` biçimindedir. Majör değişiklik geriye dönük uyumluluğu bozabilir; minör sürüm uyumlu özellik, yama sürümü uyumlu düzeltme sunmayı amaçlar. Bu kurallar üreticinin semver sözleşmesine bağlıdır.

```bash
npm install express@5
npm install express@5.1.0
```

`package.json` içindeki `^1.2.3` ile `~1.2.3` gibi sürüm aralıkları farklı güncelleme kapsamları tanımlar. Ekipler arasında aynı çözülmüş bağımlılık ağacını tekrar kurmak için `package-lock.json` ve `npm ci` kullanımı önemlidir.

## npm scripts ile görev çalıştırma
```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "node --watch server.js",
    "test": "node --test"
  }
}
```

```bash
npm run dev
npm test
npm start
```

`npm run <görev>` yazımı, `package.json` içindeki komutu çalıştırır. Script'ler uygulamaya özel görevleri ekip içinde standartlaştırır. Bash'e özgü `NODE_ENV=production ...` örnekleri Windows PowerShell üzerinde aynı biçimde çalışmayabilir; platformlar arası projelerde ortam değişkeni yönetimini ayrıca ele alın.

## İlgili kaynaklar
- [npm CLI belgeleri](https://docs.npmjs.com/cli/)
- [package.json referansı](https://docs.npmjs.com/cli/configuring-npm/package-json)
- [npm ci](https://docs.npmjs.com/cli/commands/npm-ci)
- [Semantic Versioning](https://semver.org/)

**Sonraki konu:** [Node.js sürüm yöneticileri](https://nodejs.org/learn/getting-started/node-version-managers)
