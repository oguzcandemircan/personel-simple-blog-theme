---
layout: post
title: "Yeni Nesil Geliştirme Ortamı Bölüm 2: Docker Compose"
description: "Bu makale de Docker nedir ? Docker biz geliştiriciler için ne ifade ediyor ? Neden Docker kullanalım ? Dockerı nasıl kullanırız vb. gibi sorulara cevap arıyoruz."
keywords: docker, laradock, laravel, php, geliştirme ortamı
image: /assets/posts/2/docker-compose.jpg
tags: [software, php, geliştirme ortamı, yazılım]
categories: [docker]
---

#### Docker Compose Nedir ?
Docker Composer, Docker Konteynerların (Container) tek bir yml uzantılı dosya ile yönetmemize olanak sağlayan orkestrasyon aracıdır.

---

#### Basit Bir Örnek Yapalım

docker-compose.yml

```yml
version: '3'
services:
    web:
        image: nginx
        volumes:
            - "./www:/var/www/html"
        ports:
            - "8000:80"
            - "3000:443"
        restart: always
        depends_on:
            - php
            - mysqldb
    
    mysqldb:
        image: mysql
        restart: always
        environment:
            - MYSQL_DATABASE=${MYSQL_DATABASE}
            - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
            - MYSQL_USER=${MYSQL_USER}
            - MYSQL_PASSWORD=${MYSQL_PASSWORD}
        ports:
            - "8989:3306"
        volumes:
            - "./data/db/mysql:/var/lib/mysql"
```