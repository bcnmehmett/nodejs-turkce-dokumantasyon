# GitHub ile güncelleme ve otomatik yayımlama

## İlk kurulum (bir kere)

1. GitHub'da `nodejs-turkce-dokumantasyon` adında bir **yeni depo** aç. Ad farklı olabilir; GitHub Actions otomatik algılar.
2. **Önemli:** GitHub Pages'in erişim görünürlüğü plan ve kuruluş ayarlarına bağlıdır. Özel (private) bir depodan yayımlanan siteyi **otomatik olarak özel sayma**: GitHub Pages sitesi herkese açık olabilir. İçeriği herkese göstermek istemiyorsan Pages'i açma veya erişim kısıtlı başka bir barındırma seç.
3. Bu paketteki *dosyaların tamamını*, gizli `.github` klasörü dahil, depoya yükle ve `main` dalına gönder. GitHub web arayüzünde gizli klasörü korumak zor gelirse aşağıdaki Git komutlarını kullan.
4. GitHub → depon → **Settings → Pages → Build and deployment → Source → GitHub Actions** seç.
5. **Actions** sekmesinde `Docusaurus - GitHub Pages` iş akışı başarıyla bitince site bağlantısı **Settings → Pages** bölümünde görünür.

### Git komutları (Windows PowerShell)

```powershell
cd "C:\DOSYALARIN\nodejs-turkce-dokumantasyon"
git init
git branch -M main
git add .
git commit -m "docs: ilk turkce Node.js arsivi"
git remote add origin https://github.com/KULLANICI_ADIN/nodejs-turkce-dokumantasyon.git
git push -u origin main
```

`KULLANICI_ADIN` yerini GitHub kullanıcı adınla değiştir. Git kimliği istenirse `git config --global user.name` ve `git config --global user.email` ayarlarını tamamla. GitHub kimlik doğrulaması için Git Credential Manager veya GitHub CLI kullan; şifrelerini ya da token'larını dokümantasyona koyma.

## Her yeni çeviride

1. `docs/` altındaki uygun klasöre yeni `.md` dosyasını ekle veya var olanı düzenle.
2. Sayfanın YAML üstbilgisinde `id`, `title`, `sidebar_position` alanlarını benzersiz ve uygun biçimde ayarla.
3. Her sayfanın kaynak URL'sini, çeviri/uyarlama durumunu, gözden geçirme tarihini ve önemli sürüm notlarını yaz.
4. Yerelde `npm run build` ile bağlantıları ve derlemeyi kontrol et.
5. `git add .` → `git commit -m "docs: yeni Node.js bolumu"` → `git push`.
6. `main` dalına gelen yeni commit ile site otomatik yeniden yayımlanır. Pull request açarsan önce `validate.yml` derleme denetimi yapılır.

## PDF politikası

- `pdf/01-nodejs-giris.pdf` önceki paketimizin **mevcut** PDF çıktısıdır.
- Bu sürümde PDF'yi otomatik yeniden oluşturan bir araç kurulmamıştır. GitHub Actions, depodaki PDF'leri indirilebilir iş akışı çıktısı olarak **arşivler**, fakat **güncellemez**.
- Yeni makale eklendiğinde PDF'nin de değişmesi gerekiyorsa ayrıca PDF hazırlanıp `pdf/` klasörüne kaydedilmelidir. PDF ve Markdown arasındaki sürüm farklılığını kontrol et.

## Güncelleme ilkeleri

- `docs/` gerçek kaynak içeriktir. Site derleme çıktısı olan `build/` git'e kaydedilmez.
- Node.js kaynağındaki değişiklikleri **otomatik çeviri olarak kabul etme**; teknik doğrulama yap.
- Telif ve atıf kurallarını koru; açık URL'den alınmış üçüncü taraf metni izinsiz tümüyle çoğaltma.
- Gerekirse GitHub'da eski sürümleri `git tag` veya Release olarak etiketle.

## Faydalı komutlar

```powershell
npm install
npm run start
npm run build
npm run serve
```

Kaynaklar: https://docusaurus.io/docs/deployment ve https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
