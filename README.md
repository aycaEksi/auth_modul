Bu proje, React ile geliştirilmiş frontend ve .NET 8 ile geliştirilmiş backend katmanlarından oluşan bir kullanıcı kimlik doğrulama modülüdür.

---

## Kullanılan Teknolojiler
- *Frontend*: React, Axios, Bootstrap  
- *Backend*: .NET 8, ASP.NET Core Web API, Entity Framework Core, SQLite  
- *Diğer:* JWT, Şifreleri hashlemek için SHA256 

## Projenin İçeriği
- '/client' — React tabanlı frontend uygulaması  
- '/server' — .NET 8 Web API backend uygulaması  

## Projenin Çalıştırılması
### Backend
1. 'server' klasörüne terminal ile gidin.
2. 'dotnet restore' komutu ile gerekli paketlerin yüklü olup olmadığını kontrol edin. 
3. Migrationları veritabanına uygulayın: 'dotnet ef database update'
4. 'dotnet run' komutu ile API'yi çalıştırın.

### Frontend
1. 'client' klasörüne terminal ile gidin.
2. 'npm install' ile gerekli paketleri yükleyin.
3. 'npm start' ile Frontend uygulamasını başlatın.

## Config Ayarları
- Backend appsettings.json dosyasında bağlantı dizesi (ConnectionStrings) ve JWT için kullanılan gizli anahtar (Jwt:Key) gibi ayarlar bulunur.
- Frontend için özel config dosyası yoktur, API adresi kod içinde sabittir (http://localhost:5203).

Projenin işlevi
-Bu projede kullanıcılar frontend üzerinden kayıt olabilir ve giriş yapabilir. Backend tarafında şifreler güvenli bir şekilde hashlenerek SQLite veritabanında saklanır. 
Giriş işlemi sonrası JWT token üretilir ve frontend’de localStorage’a kaydedilir. Kullanıcı giriş yaptıktan sonra hoş geldin sayfası gösterilir.