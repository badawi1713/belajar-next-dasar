# Tutorial Next.js dengan Typescript

## Sumber Belajar

Terima kasih untuk playlist tutorial NextJS Indonesia yang dibuat oleh Prawito Hudoro:
[https://www.youtube.com/watch?v=HNXYveOJPio&list=PLU4DS8KR-LJ3-zouYHHknPq1G5VTB8PRf&ab_channel=prawitohudoro](https://www.youtube.com/watch?v=HNXYveOJPio&list=PLU4DS8KR-LJ3-zouYHHknPq1G5VTB8PRf&ab_channel=prawitohudoro)

## Rangkuman Materi

Next.js merupakan framework dari React yang siap untuk production

### Mengapa Next.js?

- Mudah untuk setup project
- Routing yang mudah
- Performa yang baik dengan code splitting (Next.js hanya akan me-render file JS saat page yang diakses saja), client-side navigation (Fitur Link (komponen Next.js) membuka link di Apps tersebut tanpa reload), dan pre-fetching (Semua page yang dimuat akan disiapkan sebelum page tersebut tampil)
- Mudah untuk di-deploy
- SEO yang baik
- Pre-Rendering Page (Static Generation dan Server Side Render): "File HTML dimuat terlebih dahulu sebelum halaman selesai dimuat."

### Membuat Projek Baru dengan Next.js

```bash
npx create-next-app [nama_projek]
# atau
yarn create-next-app [nama_projek]
```

```bash
npx create-next-app [nama_projek] --typescript
# atau
yarn create-next-app [nama_projek] --typescript
```

### Struktur Projek Next.js

- Folder Pages sebagai routing pada apps Nextjs, karena apapun filesnya akan otomatis terdaftar sebagai Link
- Folder Public sebagai penyimpanan statik files
- Folder Styles sebagai penyimpanan file untuk styling; css, css.module

### Routing Dasar di Next.js

- Buatlah file/komponen halaman di folder pages, misalkan blog.tsx
- Buka pada browser url/blog (maka akan otomatis menampilkan hasil render dari file komponen halaman blog.tsx)
- Untuk membuat detail, kita dapat membuat folder kemudian di dalamnya ditambahkan file komponen halaman

### Setup Eslint di Next.js

- Install Eslint di projek dengan perintah: eslint --init
- Pilih opsi: esm, react, menggunakan typescript, berjalan di browser, style guide dari airbnb, dan disimpan dalam format json, serta pilih yes untuk dapat menginstall library dengan npm
- Tambahkan rule berikut pada key rules di file eslintrc.json: "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx", ".ts", ".tsx"]}]

### Berpindah Halaman dengan Komponen "Link" Next.js

Menggunakan Link supaya tidak reload halaman ketika berpindah halaman

- import Link from 'next/link'
- Penggunaanya, `<Link href="/blog"><a>Blog</a></Link>`

### Konsep Code Spliting dan PreFetching Next.js

- Ketika memuat halaman Blog, browser hanya mengakses file Blog.js yang memuat untuk menampilkan halaman yang diakses tersebut. Sehingga dapat meningkatkan performa, kelebihan yang lain dari code spliting yakni, apabila user sudah pernah mengunjungi halaman yang, browser tidak memuat file JS yang ada di halaman tersebut.
- PreFetching konsep di mana apabila kita mengimplementasikan komponen Link di file komponen halaman yang telah dibuat, maka halaman yang terdefinisikan sudah disiapkan terlebih dahulu sebelum dimuat di browser.

### Membuat Komponen Non-Page di Next.js

- File komponen biasa, wajib dibuat di luar folder pages
- Dapat dibuat dan disimpan di folder bernama components di luar folder pages

### Styling di Next.js

- Bisa menggunakan konsep Global css (style yang dapat diterapkan di seluruh projek) dan module css (style yang dapat diterapkan pada module yang dirujuk)
- Global css, dapat di-import di file root (_app), sehingga dapat diterapkan di semua elemen projek, import '../styles/globals.css'
- Module css, dapat di-import di file yang terkait dengan style module tersebut, contoh: import styles from '../styles/Home.module.css', `<h1 className={styles['title-homepage']}>`
- *Catatan untuk module css pada komponen dapat dibuat di folder komponen terkait

### Kustomisasi Halaman 404

- Buatlah komponen halaman di folder pages dengan nama 404.tsx
- Kemudian definisikan script halaman di file tersebut

### Auto Redirect di Next.js

- Bisa menggunakan useEffect dan untuk Redirectnya setelah beberapa detik, dapat menggunakan fungsi setTimeout
- Supaya bisa me-redirect ke halaman yang diinginkan, dapat menggunakan useRouter milik next
- `import {useRouter} from 'next/router'` const router = useRouter(), lalu router.push('/') di dalam fungsi timeout

### Metadata di Next.js

- Untuk mendukung SEO, pada komponen halaman dapat ditambahkan `<title>` sehingga halaman tersebut memiliki judul, beberapa metadata lain yang dapat digunakan ada `<meta name="description" content="..." />`
- Penggunaan metadata yaitu dengan membungkusnya dengan komponen Head dari Next
- import Head from 'next/head', `<Head><title>Home Page</title></Head>`

### Optimasi Image

- Pada Next.js, tag `<img/>` dapat diganti dengan komponen `<Image />` bawaan dari Next.js untuk optimasi asset seperti gambar
- import Image from 'next/image'
- Image di Next.js juga mendukung lazy load untuk menghemat bandwith

### Route Dinamis

- Untuk file pages yang nantinya akan memiliki sub yang berbeda-beda, misalkan user/1 atau list/2, file pages yang mewakili sub tersebut dapat kita buat dinamis dengan memberikan nama filenya menjadi [id].tsx
- Untuk mendapatkan path parameter /1 atau /:id, dapat menggunakan const router = useRouter() dari Next.js, const {id} = router.query;

## Memulai Aplikasi

Menjalankan aplikasi:

```bash
npm run dev
# atau
yarn dev
```

Buka dengan browser ke url berikut [http://localhost:3000](http://localhost:3000)

## Pelajari lebih lanjut

Untuk belajar mengenai Next.js, bisa klik link berikut:

- [Next.js Documentation](https://nextjs.org/docs) - Fitur Next.js & API.
- [Learn Next.js](https://nextjs.org/learn) - interaktif tutorial Next.js.

## Deploy Aplikasi di Vercel

Untuk caranya dapat dilihat di link berikut [Next.js deployment documentation](https://nextjs.org/docs/deployment)
