# Node.js Türkçe Teknik Dokümantasyon

Bu arşiv **Docusaurus 3.10.2**, Markdown kaynakları, çalıştırılabilir JavaScript örnekleri ve PDF çıktısı içerir. Başlangıç makalesi resmî kaynağa dayalı özgün Türkçe teknik uyarlamadır (birebir çeviri değildir).

## Windows 11 üzerinde çalıştırma

1. [Node.js](https://nodejs.org/) kur. Docusaurus 3.10.2 belgeleri Node.js **20.0 veya üzerini** gerektirir; güncel LTS sürümünü tercih et.
2. Arşivi ZIP'ten çıkar ve klasörü VS Code ile aç.
3. VS Code terminalinde çalıştır:

```powershell
npm install
npm run start
```

4. Tarayıcıda `http://localhost:3000/` adresini aç. Çıkmak için `Ctrl+C`.
5. Yayına uygun statik site oluşturmak için `npm run build`, yerel önizleme için `npm run serve`.

**Not:** Paket bağımlılıkları bu ZIP'e dahil değildir; `npm install` için internet gerekir. Site yapılandırması oluşturuldu, ancak burada ağ erişimi olmadığından gerçek Docusaurus derlemesi doğrulanamadı.

## İçerik güncelleme

- İlk bölüm: `docs/01-baslangic/01-nodejs-giris.md`
- Gelecekteki bölümler: `docs/` altında uygun kategori klasörüne yeni `.md` dosyası ekle.
- Otomatik yan menü: `sidebars.js`
- Tema: `src/css/custom.css`
- PDF: `pdf/01-nodejs-giris.pdf`
- Kod örnekleri: `examples/`

## Yayına alma

Yayımlamadan önce `docusaurus.config.js` içindeki `url` ve `baseUrl` değerlerini kendi alan adına göre güncelle. Bu site **Node.js'in resmî sitesi değildir**.

## Sürüm ve kaynak yönetimi

Her Markdown sayfasında resmî URL, hazırlanma tarihi ve içerik türü bilgisi tutulur. Yayımlamadan önce tüm içerik ve kodlar gözden geçirilmelidir.

## GitHub ile otomatik yayım

Başlangıç kurulumu ve güncelleme için [`GUNCELLEME-VE-GITHUB-KURULUM.md`](./GUNCELLEME-VE-GITHUB-KURULUM.md) dosyasını oku. `main` dalına gönderilen Markdown değişiklikleri GitHub Actions ile siteyi yeniden derler ve Pages açık olduğunda yayımlar. **PDF otomatik güncellenmez.**
