---
layout: post
title:  Yeni nesil geliştirme ortamı Docker ! 3 / 1
description: "Bu makale de Docker nedir ? Docker biz geliştiriciler için ne ifade ediyor ? Neden Docker kullanalım ? Dockerı nasıl kullanırız vb. gibi sorulara cevap arıyoruz."
keywords: docker, laradock, laravel, php, geliştirme ortamı
image: /assets/posts/1/docker.png
tags: [laradock, laravel, software, php, geliştirme ortamı, yazılım]
categories: [docker]
---

#### Docker Nedir ?

Docker çeşitli sanallaştırma ortamları Virtual box ve benzerlerine alternatif uygulama
geliştirme ve yayınlama alt yapı aracıdır.

> Not: bu makalede Docker ve Docker teknojisinden ziyade. Docker biz geliştiriciler için ne ifade ediyor ? Neden Docker kullanalım ? Dockerı nasıl kullanırız vb. gibi sorulara cevap arıyoruz. Docker ve Docker teknolojisi hakkında detaylı bilgi için gökhan şengünün [websitesini](https://gokhansengun.com){:target="_blank"} ziyaret edebilirsiniz.

---

#### Dockerfile Nedir ?

Dockerfile geliştirdiğimiz uygulamamızın / yazılımın gerekliklerinin ( örneğin: nginx apache mysql vb.) tanımlandığı dosyadır.

---

#### Docker Image Nedir ?

Docker image, Dockerfile da tanımladığımız gerekliliklerin görüntüsüdür.

---

#### Docker Container Nedir ?

Docker Container, Docker imajlarımızın (görüntülerimizin) çalıştırıldığı alandır.

----

#### Peki Biz Geliştiriciler İçin Ne Anlam İfade Ediyor ?

Geliştirdiğimiz herhangi bir uygulamayı yayına alırken kendi bilgisayarımızda çalışırken
sunucuda çalışmadığına en az 1 kere şahit olmuşuzdur. Docker sayesinde " benim bilgisayarımda çalışıyordu " sendromundan kurtuluyoruz. :)

Çünkü Docker sunucu ve çalışma ortamınızı eşitliyor. Kulağa hoş geliyor değil mi ?

Peki bunu nasıl yapıyor ? Dockerfile, Docker Image( Görüntü ) ve Docker Container( Konteyner )ları ile 

<!-- Peki bunu nasıl yapıyor ? -->
----

### Basit Bir Örnek Yapalım

Linux kullandığım için Linux komut satırı ( terminal ) üzerinden devam edeceğim.

İlk önce bir klasör oluşturalım ve içerisine girelim.

```bash
#docker-example adında klasör oluşturuyoruz.
mkdir docker-example

#docker-example klasörünün içerisine giriyoruz
cd docker-example

#Dockerfile ismiyle dosya oluşturuyoruz.
touch Dockerfile

#www adında klasör oluşturuyoruz.
mkdir www 

#oluşturduğumuz www klasörünün içerisine " index.html" adında bir dosya oluşturuyoruz.
touch www/index.html

# bir üst satırda oluşturduğumuz index.html içerisine ' <h1>Hello World</h1>' satırını ekliyoruz.
echo "<h1>Hello World</h1>" > www/index.html 

```
Dockerfile oluşturalım. Ve içerisine aşağıdaki komutları yazalım.

```dockerfile
FROM nginx

COPY /www /usr/share/nginx/html

EXPOSE 80
```

Dockerfile ile görüntü oluşturalım. Daha rahat kullanım için etiketliyelim. Ve görüntünün oluşup oluşmadığını kontrol edelim.
```bash
#Oluşturduğumuz Dockerfile ile görüntü(image) alıyoruz / oluşturuyoruz.
docker build -t oguzcandemircan/nginx:1.0 . 

#docker ps komutu ile görüntümüzün(image) oluşup oluşmadığını kontrol ediyoruz.
docker ps
```
Aşığıdakine benzer bir çıktı almalısınız.
![docker ps çıktısı](/assets/posts/1/docker-ps.png)

Oluşturduğumuz görüntüyü çalıştırıyoruz.
```bash
#Oluşturduğumuz görüntüyü(image) çalıştırıyoruz.
docker run -p 81:80 oguzcandemircan/nginx:1.0 

#curl istek atıyoruz.
curl http://localhost:81 
```

curl yüklü değilse Herhangi bir tarayıcıdan http://localhost:81 adresine giderek aynı işlemi gerçekleştirebilirsiniz.

Herhangi bir sorun ile karşılaşmadıysanız aşağıda ki çıktıyı almalısınız.
![docker - curl istek çıktısı](/assets/posts/1/curl.png)

---

### Sonuç

Bu makalede **Docker**, **Dockerfile**, **Docker Image**, **Docker Container** nedir ? Nasıl
çalışır ? Öğrenmiş olduk. Basit bir örnekle öğrendiklerimizi uygulamaya dökerek pekiştirdik.
Bir sonraki makele de **Docker Compose** ile oluşturduğumuz konteynerları yönetme konusuna değineceğim. Nedir ? Nasıl çalışır ?