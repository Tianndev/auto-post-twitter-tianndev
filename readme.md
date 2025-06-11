# Auto-Twitter Bot by TiannDev

Bikin timeline Twitter-mu auto-keren dengan postingan film-film trending terbaru dari The Movie Database (TMDB), lengkap dengan poster, detail, dan link!

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with-Node.js](https://img.shields.io/badge/Made%20with-Node.js-1f425f.svg)](https://nodejs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Capek nge-tweet manual? Pengen timeline Twitter-mu selalu update dengan film paling hits? Santai, bot ini solusinya! Set, jalankan, dan biarkan keajaiban terjadi.

---

## Kenapa Bot Ini Keren?

* Auto-Fetch Film Trending: Gak perlu pusing cari film apa yang lagi naik daun. Bot ini otomatis narik data film trending harian dari TMDB.
* Poster High-Res: Tweet tanpa visual itu hambar. Bot ini otomatis download dan nempelin poster film biar tweet makin ciamik!
* Tweet Informatif & Kece: Nge-tweet otomatis dengan format: Judul, Tahun, Sinopsis singkat, plus hashtag genre yang relevan.
* Monetize? Bisa!: Ada slot buat nambahin link afiliasi kamu di setiap tweet.
* Set & Forget: Tinggal atur pakai cronjob, bot bakal jalan sesuai jadwal tanpa perlu disentuh lagi.
* Logging Jelas: Semua aktivitas bot tercatat rapi di terminal, jadi gampang buat nge-track.

## Contoh Hasil Tweet-nya Gimana?

```
The Batman (2022)

Dalam tahun keduanya melawan kejahatan, Batman mengungkap korupsi di Gotham City yang terhubung dengan keluarganya sendiri.

Link: https://link-afiliasi-kamu.com
#Action #Crime #Drama
```

## Gas, Langsung Install!

Pastikan kamu udah punya Node.js dan npm di sistem kamu.

```bash
# 1. Clone repository ini
git clone https://github.com/tiann-dev/auto-twitter-bot-tianndev.git

# 2. Masuk ke direktori proyek
cd auto-twitter-bot-tianndev

# 3. Install semua dependencies yang dibutuhkan
npm install
```

## Setting Dulu, Cuy! (Konfigurasi .env)

Ini bagian paling krusial. Kopi `env.example` jadi file baru dengan nama `.env`, lalu isi semua "rahasia" kamu di sana.

```env
# Kredensial Twitter API v2
# Wajib punya akses Elevated atau di atasnya!
TWITTER_APP_KEY=isi_disini_dengan_api_key_kamu
TWITTER_APP_SECRET=isi_disini_dengan_api_secret_kamu
TWITTER_ACCESS_TOKEN=isi_disini_dengan_access_token_kamu
TWITTER_ACCESS_SECRET=isi_disini_dengan_access_secret_kamu

# API Key dari The Movie Database (TMDB)
TMDB_API_KEY=isi_disini_dengan_tmdb_api_key_kamu
```

## Jalanin Bot-nya!

Udah siap semua? Langsung eksekusi dari terminal.

```bash
node tweet.js
```

Kalau semua aman, cek akun Twitter-mu. Tweet pertama dari bot-mu udah tayang.

## Bikin Jalan Otomatis Pake Cronjob

Bot ini dirancang untuk berjalan otomatis **3 kali sehari** secara default:

* **08:00 WIB** → `0 1 * * *` (UTC)
* **13:00 WIB** → `0 6 * * *` (UTC)
* **20:00 WIB** → `0 13 * * *` (UTC)

Berikut cara menjadwalkan via cron:

```bash
# Buka editor crontab
crontab -e

# Tambahkan baris-baris berikut (atur path sesuai lokasimu)
0 1 * * * /usr/bin/node /path/ke/folder/auto-twitter-bot-tianndev/tweet.js >> /path/ke/folder/log/cron_08.log 2>&1
0 6 * * * /usr/bin/node /path/ke/folder/auto-twitter-bot-tianndev/tweet.js >> /path/ke/folder/log/cron_13.log 2>&1
0 13 * * * /usr/bin/node /path/ke/folder/auto-twitter-bot-tianndev/tweet.js >> /path/ke/folder/log/cron_20.log 2>&1
```

## Rencana Ke Depan (Roadmap)

Proyek ini bakal terus dikembangin. Ini beberapa ide ke depannya:

* [ ] Dukungan untuk Threads / Carousel Tweet
* [ ] Kustomisasi template tweet (biar makin unik)
* [ ] Penjadwalan cerdas dengan deteksi zona waktu
* [ ] Upload trailer film pendek
* [ ] Dukungan proxy & penanganan rate limit yang lebih canggih

Punya ide lain? Buka issue atau langsung pull request aja!

## Suka Sama Proyek Ini? Traktir Kopi Boleh Dong!

Kalau bot ini ngebantu kamu, dukungan dalam bentuk apapun bakal berarti banget. Kamu bisa traktir kopi buat nambah semangat ngoding via Saweria:

[![Donasi via Saweria](https://img.shields.io/badge/Donasi-Saweria-orange.svg)](https://saweria.co/tianndev)

Terima kasih atas dukungannya.

## Lisensi

MIT © 2025 - [Tiann Dev](https://topgame.id)
