import { Project, TechStack, Experiences, Certificate } from "@/types";

export const dummyProjects = [
  {
    id: 1,
    title: "Google Drive Clone",
    description:
      "Aplikasi manajemen file yang berfungsi mirip Google Drive dengan upload, folder, dan preview file.",
    image: "/google-drive-clone/1.png",
  },
  {
    id: 2,
    title: "Portfolio v1",
    description:
      "Versi pertama website portofolio pribadi untuk menampilkan proyek dan kontak.",
    image: "/portofolio-v1/1.png",
  },
  {
    id: 3,
    title: "Setiajaya Komputer",
    description:
      "Website e-commerce untuk katalog toko dengan pembayaran online, dashboard admin, dan fitur pelacakan pesanan serta chat admin.",
    image: "/setiajaya-komputer/1.png",
  },
  {
    id: 4,
    title: "Tahrib (Pondok / Classroom System)",
    description:
      "Platform seperti Google Classroom dengan beberapa layout: promosi pesantren, admin, ustad (pengajar), dan santri (siswa) lengkap dengan monitoring aktivitas harian, mingguan, dan bulanan.",
    image: "/tahrib/1.png",
  },
  {
    id: 5,
    title: "Toko Saya",
    description:
      "Website penjualan sederhana yang fokus pada area layanan lokal, proses checkout tanpa login (mengisi data diri & alamat).",
    image: "/toko-saya/1.png",
  },
  {
    id: 6,
    title: "Web CMS",
    description:
      "Sistem CMS untuk mengelola konten website secara dinamis melalui panel admin.",
    image: "/web-cms/1.png",
  },
  {
    id: 7,
    title: "Web UMKM",
    description:
      "Platform untuk memantau UMKM terdaftar, melacak penjualan, dan melihat laporan keuntungan serta statistik bulanan.",
    image: "/web-umkm/1.png",
  },
];

export const techStacks: TechStack[] = [
  // 🌐 WEBSITE DEVELOPMENT
  {
    id: 1,
    name: "Laravel",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAaVBMVEX/////3Nv/cGr/dG7/5uX/+Pf/hYD/paL/nJj/jon//Pz/Y1z/hoD/eXP/6ej/ubf/8vL/sq//iYX/lZH/mZX/y8n/4N//g33/oJz/X1f/MiT/w8H/09H/fnj/kY3/q6j/TkX/WVH/amMDRFxnAAAAr0lEQVR4Ac3JxWHEMAAAwbUtNjNj/z0GPofKOzdiLZ8qCCOBn1QajHX4xAlAmgJkaZg/xaSI8jKVFbi6gTbquOtB55DAMGbAMD3HefmNGGnsHBbWHwuEgsQbG0kxwPoeK+otXJxm3d/jEWWQp2cveYlBd7UA7TXAaxx3ABHO7j1Ktf9uBgrDkwggCM0qgaLhSXAtACtAmRa8KKMMFCzXgofdsDIq8cvWqXb8SfL/vgFFhAm7+9RQWQAAAABJRU5ErkJggg==",
    description:
      "Framework PHP yang kuat dan elegan untuk pengembangan aplikasi web modern. Laravel memudahkan pengelolaan routing, autentikasi, dan database melalui arsitektur MVC yang terstruktur.",
    level: 9.0,
    favorite: true,
  },
  {
    id: 2,
    name: "Next.js",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVR4AbyUgWdCURTGs62QQAIJoKgI5C0BkwKgCCBKqGyEABREJABK/QsLQQHw9h8U0rASopCkoPS+na5bRq13e20dfnB993yf9849OsF6IpzEG9EkPoklseMs+VmTa5z8zs31SDwTNWJIbAmosOXaGr/7qNXcSpSJGQGNzHgP67XmEvFBKARuROG9JFHzF2JA4I8ZsN4qJWk2Fw8hXfrnMoF/Rj43Ew98WHAnytzzWD5iescAU+55fOvVSxfcbjfS6TQymQwkSbrY3OfzMa3f71cLUT3sCBcxvCBkDQ/V6/Xgcrl+1RYKBSwWCxSLRbUAX8ybr86tUABerVYLZrP5rDabzaLb7SKXy4lszFeC7W+IBBiPx5hMJlAUBaVSCXq9/kQbj8fRbreRTCZFZuGd0A0EA7DGqVQK6/Uaq9UKsVjsRBuJRFCv1xGNRkX3gm55TQCTyYRKpYJ9jUYjNnQ/tYFAAPl8HsFgUCAA89btRAN0Oh322S0WCwuzL1mWYbPZjlqv14tEIqH6Wji7qwMYDAZ25vF40O/32Xmj0YDRaGTndrsdoVAIDodDOMBSQwBGOBzGfD7HZrP5rr5qQTOEoihPi0UNouJABItG05pgE7EjJu26YDYKhvXeBMtX7GlgsRmX7PYoO+OuM98nwtiDWx+H+3N+0DQNGGMwDOPnTE3T5B7B51UAgiCgbVscx4F935EkCWhEiqJAkiTuJXxcBUAlyzKGYQC9dV3h+/4zlPw4J6ITAFSu62JZFtAjMKqqgtO6vXFQ8TkAqiiKQEu5bRvquoYoitxUzCVGVVUhTdNfP87zHPM8Y5omhGHILUa3yTF1h7o1jiO6roNt21xyfKshoflTt/q+R5ZlxA9chuRWS2ZZFoqiQFmWCIKAzvXUkt1uSh3HQRzHZEygaRqXKb3VlhMrkkZ4ngdd12l5uWz5rcGEWi/L8pckSR+CILz+STRjjL0zxl7+ZTi9Gs/rZ+L5N8AJA23K4ax1AAAAAElFTkSuQmCC",
    description:
      "Framework React modern untuk membangun aplikasi web cepat dengan fitur Server-Side Rendering, Static Site Generation, dan dukungan penuh untuk SEO dan performa tinggi.",
    level: 9.5,
    favorite: true,
  },
  {
    id: 3,
    name: "React",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEX///+k3Op3zeGN1OXM6/Pc8feX2Oec2ej0+/xix958z+LH6fKz4e1YxNzk9Phvy+BJwNrA5vCF0eTR7fS34+4/vtno9vkzvNfx+vwXKPc3AAABEklEQVR4AbXRRaLdMAxA0Rsy21JASfa/0j6n7efpPwMzSvyyYZzmXi9u9IHPYsql1hZEhzwpn6zxKVWHXm8DH02ll7vW46kjH40ZWOwMugJN+SjNtKziXLJ14ax8tEWrupUXZ/WKkXerVWGtPNLAVK28bavLqdgCd4Nw3bKfUXiUCFTZYDBLr1IMSBOdLkCxk2C16g460Q+gswYcFrj75AzV83KFXvoRiNGDMxU4qv4b7URCsPs6Ydmfk+LOpIEH/pKRIjzchBObeBNGtdGGed/nYqNqPPkg5TsPGkXE/Hq2ykfjDGQNxOF74Lejl6WK+yFlx9jLRW3utXd8or7tyeZFJbdy3XxybxoLL4fo2PhVfwB6eg3nGSu+JgAAAABJRU5ErkJggg==",
    description:
      "Library JavaScript populer untuk membangun antarmuka pengguna interaktif dengan konsep komponen yang reusable dan efisien.",
    level: 9.2,
    favorite: false,
  },
  {
    id: 4,
    name: "Tailwind CSS",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEX////G6fxsyvk/v/g4vfhhyPmz4vuK1PoAtfckufgvu/hTxPn6/f+h2/tGwPjS7v255fxMwviT1/qn3vsZjXhWAAAAbElEQVR4AeWOCQqAMAwEq11r06b3//9qAwiI0QfowHINC2N+yLJabE53uycgUGTtF11CmDqLLVdZ57iJhSt9V+4cCQB5a1RGJgr9FrrW866GbmpoGylISlNC3RxnsbY+hLbX0GSJIKE6zOajHN4ZA8/fNs9XAAAAAElFTkSuQmCC",
    description:
      "Framework utility-first CSS yang memungkinkan pengembangan UI cepat dan konsisten melalui class-class yang mudah disesuaikan.",
    level: 9.4,
    favorite: true,
  },
  {
    id: 5,
    name: "DaisyUI",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEVHcEz/zC3/3iT/ziv/tVj/wUL/tVj/2SP/tVj/wUL/xzz/1iT/wkP/zC//u07/s1v/1iD/tFn/wUH/wUn/2Cr/wEP/tlb/2Cr/tlb/vEv/2Bn/yDX/uFL/xT3/vEv/zS7/1hz/wET/0iX/tFn/sGPsoTtyVSL/vGL/rYJOPSaIbAmFgYHSpR8cDxDPwqOEcE5eXFvj5+3bpDz8//8AAAAtH7yyAAAAG3RSTlMA/Lu6tK+9sq+4OqkiZGzp5MfsR5jNn4eP5cv5A7d/AAABfElEQVQokW3T2ZaCMAwGYA7QBZBdRKVlrSyus73/s03agjLHye13/qTBaBivcnPPy1Pj39paFiGWtX0D1/eJ5RFEPM+yfN9d0cYzybGuI5mMCp45Dto8zSSERHXdtlVVFbxIEHKcRT0wUksELQrOHVA0z4OgF9VLEhCiyNFzfVM1XYKAjWwcaDxK0qaCTdOUh0yjHFfPXVWQN2XJGFa7m0qGYQl2QuNOPSeCju3Al2ApSsCQ4tTITWKCne+Pq7bTve8hGFN7r5Zsq/b8ebmppnz6niTa1KYKYdj59nGppPHp5/IoWacwJ8SUL+n7a3GCar6m/sRYp9qm8CA5axwhBdZ04wjWqQfBKoUsMTC1fVkK0UEJuYphWHyuRiOTQSGw/nxZsqLZwlh/vsBBTvKHuhDeqtGFnw8lihajlOL5VJDUmaQJm8ol5zOBm0EHNhPMA8OvI4KbyRgLY9uOQyFiG9OnyblBgDFVhXEQrE9T1w7bUHr390r3lO7Xf4df7V41ufaPZswAAAAASUVORK5CYII=",
    description:
      "Plugin komponen siap pakai untuk Tailwind CSS yang mempercepat pembuatan antarmuka modern dengan gaya minimalis dan tema yang mudah diubah.",
    level: 8.8,
    favorite: false,
  },
  {
    id: 6,
    name: "Bootstrap",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAn1BMVEWRC/6ICvuHCvuCCvp9Cvh5CfeFAPt7APh2APd1Cfaqa/fo2vzr3fzh0fqgZ/SfU/f////SvPPDo/K9nvHMtfOQTvHPsfhnB/LGq/XfzflzCfXcyfiROfiWR/ZqB/PWwvf48P27j/V5DOeDLOuHOeure/SuiPLw5fuQOfF4A+2VWe+IJu/68/2da+tqAO92JOr++f5YAOicZ++IRezCo/ftjRgzAAABbUlEQVR4AX3S1XaEMBRA0UFiWLGSwQLj7vP/39ab4LXzulc8sz5N03TIkJkQQmhk0NTQ1AZEA2IZUdEmaawxy3Yce5Tr0Q7xhx+Eo6Io9j8pYg0mNsOwFDFhWjmCcXdOWYcp1jUdy5rdZPmAcU50HRclZFKJokoEY5nCPMaaTmxfljA4Bk0qwTKJmlkvsK6TtF6u1oG/oYDbHW8QF/6+wYyQgx9KXPsrKhGbro10hZzSjX8ERNxNOc1muKzrEww0aH5OU+d8uYIxetvt1gJwdy6wbgDWURTad08en65qB1DDh9wmCndXll3d3VXdQvUQgBo+wYYkyg2J5H6FgWv/JhRqaLcgzUiEvNoGFFuHN6iTIFF4lzlrCjiPFcpDzANA8vmEXjCOZSIOm5GAYUXhvpuHRhJ5EPUj36lQoBIQzzs0cHmP35OS+0u0aJBjMC0+cjl+BgbKsiy7tnFISOOzyUdVu8kykAb/sQbHNsYvjA0vKuhfMkMAAAAASUVORK5CYII=",
    description:
      "Framework CSS populer dengan sistem grid responsif dan komponen UI siap pakai, cocok untuk membuat tampilan web dengan cepat.",
    level: 8.5,
    favorite: false,
  },
  {
    id: 7,
    name: "Node.js",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADkElEQVR4Ab3V1XLcSBQGYC3z3iwzM5NZ3S0mD4aZGV5gGYeZzRxm5jyCX8DXy8y7yZyoPSWXJ5FZyak69vD/6dcAM52Zs3POzd5OYfu8fvmiu5X/XclwC5lrNb4eYev8HdJfi3YrsGCHDPP6JdALPGg5bkgukFevWrC/U3hvwXZpaNkBFZbsVWAEMCCBt10Ew0Q0l4SynufOa2ntbseCXSVy77zt0tEVh7XyisMq2AHm9EoVQJEHd4tgLv+fluc+nXH43H7x85WHtf/XHNdg1VENxgT0SeBpF4YRrpIAnjYBvB0iuFqFH7Uidk09eEBasPyQ8su6UzqsPaHDZACzusWqFijI1ymC37zd3cYPejrkxyYM9nbxzyzZpwxuOGvA+tM6TBVAj9xqwd1aacHfJcKsHnN7xXJzK7+XfoJsw+fvlPPrTuvljecMmC6ABjaPbqGt0gK9b3avBHP7JZjdLfyhl7jaqnDyCbl1Tp94gYbPFOAq8WDk7VugjzNzQEpzO6sBUXIvF8Gw9qQ+YwA9cj1XacFl04JhAnGYPXAFAAcReDtFRwBGodJCs9VCuzDcgq9LABJjxwJgoEuDnADoWRNRGNWCeZ+aIzR8XICp5h0BaCbAOhW0BXo7DqNxAAEMdCli6X7VEYCa5kZakJKYAqy1B1irpnlHAHKSAy1XaYKEJgKEED36EcTCnbIjACnBAR/DQF/fWntAvAlwdPj8mBAEYpyjH8sZA4QYMUMtgLWXA0rv3IvSDYCSDYDjjYAjLG2BvrAjAG5SgHwtoGwdoEw9rWgYwIcJDXYGEJwI0PoeoFIN4HQDDbeWvqgzgEAFYa4NYMAEdL4DqP1ds35UBSBBAssPqs4CAjYAtvctQIXaqnBrXUXBIQAeB9D/pnXubXfxHmWGgKqtBmhHn70FFWr+twu2VslwjgG40GU/x3TYQk0chdnyOAgzTJ4xAAXQr2yYfZuxG9Ra8xTO1A3ioD1AjBNYtn96ABIgF3AIlxhgrmcmGtJWr6JE4/d2CPq7PhUA/RrmIniQTbAPMVMdVKz9HEfZ/0YD+DAxw+VJAcQU+YZLs5iZybySe+VOlKvbi0OobCHo7/t4AK3I/SsX0QeMk1Pf9u5bKNUwZH05zd8uXwHwdPBltb1pL+kktzJXa1CpZpn5g/WbnudHALP7RHD1oSHXAHmRuSbzCXMjztd2+3vEi95e7ldjV6OfmeZcAuAsEWG+c8BcAAAAAElFTkSuQmCC",
    description:
      "Lingkungan runtime JavaScript di sisi server yang cepat dan ringan, ideal untuk aplikasi real-time dan API berbasis event-driven.",
    level: 9.0,
    favorite: true,
  },
  {
    id: 8,
    name: "Express.js",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAbFBMVEX////8/Pz09PT19fX4+Pjd3d2ampoAAAAzNDWoqKno6Oh0dHRcXFzIycm5ubktLi4hIiN7e3yLi4tmZ2fi4uI9Pj7S0tIHCQuzs7NJSkru7u6goKB+f3/W1taNjo69vb1PT1BsbW0VFRc3ODhehn9TAAAA30lEQVR4Ad3QhXHEMBBA0W8QmAVmTq7/HjOeDdSQewNiLfBukjRNM4A0TeCR/0wSpY0xtiihMgWPsraNnLWd8yFEE3vyOIwAeprhMQ5Lm8O6uT3hWPwKjQspj+zsLvlBuwNmV1DaukS+t3sqs8MWkAU7ejMiGnMhkjoCqnZmQ3CZPwM8Hy/8Hd7xF7BWzjQIxulCsJaQbG6r7xXR2zNHrn1s0AwhUdNPjunejTLxTlHedS89EOMwFAkobzR4ewFptRyI9tPY18uZkFIYzUO5akWU22BflYKx2xGX1Rn/yxf+uwzyBt/vSwAAAABJRU5ErkJggg==",
    description:
      "Framework minimalis untuk Node.js yang digunakan dalam pembuatan RESTful API, server-side rendering, dan integrasi dengan berbagai middleware.",
    level: 8.9,
    favorite: true,
  },
  {
    id: 9,
    name: "MySQL",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAABnRSTlMAAAAAAABupgeRAAABwklEQVR4AVySA3AkQRSG+2wb5TqjeLZt24xt27Zt27Zt20nZm3/SWz2bnRo9fI9NXtmHLf9kQt4akMea5KE6eWdI7yUfjMTurX+sv7jGk+2/rT3TKms7h7Jru15YhUPcL+G86rMpB7/QYTD9AUOOyLtnVrVDuGMWmlvbWdLcV1jf3TU4EVPSdFrHl2NeLMpGoLKOK1IJyCC3FLmob/RRG4r8aheNtLElTbv+2kDDiiT4A4OqJD2TyT3VO4YBav7p0NCSJD3jRsZnnlmGQRQCtD4ERg8Ihp9DUg6c8v3C/UDtqILL2OTcX8dY4Ugoh2DvbcPsE0uQBFoewP1UC2MA88Q8lGPYBMAE59TeNwmmw4Erw+B3RsMPzLqvZkKAe78yhFzS2HNQzklsDxDBOCSVJpa3EjGtb3rlUUVXVpWoFctt6x/nAdzo2C+zGnmQDf/wYPlpn8cVXQhT0TYosOG7+XPzIIgsFo+JCigJSzyp5PrEJlIgEOz9ZyPK8AC7cQouavuC+eIQU9c+GJpXh5XTGfKd4DwxFS3UICwHE5T3Sb1qGGgelU8+mDMr54wLH5YEjaJdbAOdYIno8pqmO/LMD64aAI9KJeRHIoWtAAAAAElFTkSuQmCC",
    description:
      "Sistem manajemen basis data relasional yang stabil dan andal, banyak digunakan untuk mengelola data aplikasi web skala kecil hingga besar.",
    level: 8.7,
    favorite: true,
  },

  // ☁️ HOSTING & GITHUB
  {
    id: 10,
    name: "Vercel",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAAAAABXZoBIAAAAZ0lEQVR4AWMYwkBICI/krCm45eQ/ftfCKbnp//9FuOTsfv3//98Fh+TB/0BwELtc8H8wiMMqeRUieRWbXPF/KCjGIvkYJvkYU27KfzjoxAi4jwjJ7/KY/keA1ahy3E2dSKCJm2FEAQAD1l2xzdeQ1AAAAABJRU5ErkJggg==",
    description:
      "Platform hosting modern untuk aplikasi berbasis Next.js dan frontend lainnya, mendukung deployment cepat dengan integrasi otomatis dari Git.",
    level: 9.3,
    favorite: false,
  },
  {
    id: 11,
    name: "GitHub",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC5UlEQVR4AaxXA4xdQRSd2u7MfNe24qS2bRtR7b5ujFpR46SI2Ua1bdu2ufckn7Mz7739fya57e7gnPuul/ldTZo0KRkUontAiC0BzveT3JRCfIbgZ+zhDHdwl9laNTkPEPA2yflHkv8+5SPe4G3WxHXr1i1FIHkkXwCajeAtMICVzVefAIgNAZZva0SEaE7+fIyHNgWYwPb+cpXcshLgcPP5CeXBNZKdtP8mC8L39HY3yVnVHdqYQLCoIEEpp+GsQ4cOxaWUk6QQz7EfT79LBH6Q5AD9fJH2P8QJ3tLenEQqUloOUnHBVdD0mmgPBALtMmoB5+Vpr7HjOEWZsv7//18kHA7Xj8ViVdL3SfFauuzIcAVyVmfGYDDYhuW4QqFQTIcNzmSFMxUZMt/YXBUgi/U0FStwM5ROUxEhC9TIVQFySzXCeq3jADfMv8WgwEJmaVFQTjRwbMHhft1hJBKpZ62f1KxZWccBbihwU2d+RDWzuAjzoUaBmww5rVHgHrO8iOyUygNuaPZVY55PthXAR6k84NaYJi5SCosxUJp4fmgUeAAFThpSZIwlfrdUP8GCnG8wROgpW4FIRHt0HOBWm4Wq4XwLwTfBhA9u1qBBgwoIOsOlf+hcbdq0KVFYYjQsfABh/DFgf0JzS5hoc1pqrA1JOQotNs0dj+iOExKiKxWoqibS2rVrV5JSdgpKuYze33YdTqTclHwY4bwuEfyMk70DEbQjkPOa3D2CrzOYe7/PGfFHVIg6aqCsTu9U1EQitOqpjYSs08+l83XwqYCjHckUs29PG1bm0d56TEhuIzbc40UODmCYhocoXXoWv/wHvZwVctG73y4KPAOHe/8WokWGEkLsRTRTykyn/1cOHTq0mIcCf0zkwPY7RESkEBd0QJhiPBT4qzH7JYxm2fxp5qg1HHXdQ4F/acH2kyRP88b/QrpQzm5EZqB9YkT3KLtvcQ/Tjr2hJj6SY+T24z6yXv74iDUXAHnsU9JuBm1tAAAAAElFTkSuQmCC",
    description:
      "Platform kolaborasi dan version control berbasis Git yang digunakan untuk mengelola kode sumber, pull request, dan workflow pengembangan.",
    level: 9.5,
    favorite: true,
  },

  // 📱 MOBILE DEVELOPMENT
  {
    id: 12,
    name: "React Native",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEUgIyoeHCIbCQ4eGiAfHiQxWGZdz+5ZxOJWvtoqRFAaAAdbyukcDhMZAAAmOUNVu9gXAAA3a3xPrMZGk6pm5/8kMDlh2/xAg5hg1/crR1NEjaI6c4UiKDA9eo0uUF1Mo7w0Y3MdExjgSW3+AAAAyElEQVR4AdVQ1QGDMBRE0liJuxXYf8jKF7pA43l6d92fjn4YBwC+R3/je0CECcEIPq5e+pwYh5Cz6UmvqUIypbViUlxcgGJlrBDWKEzB0Tc67UMkfU9i8NqNh7wEic5ZliJz1gSmfe6A3aS8LNYW6dXg8LB3ovpzNmvb1zlVtHf2L8i1yTIEmY3m8AUOgLjwJTrGXCxekPFEheE2/6jMDbH+RgTZ5rnInwhX+RjrIOwYvZFvXKBAKSEBl7G7etdK+57W9ev7y/EBznsMZsB3LTgAAAAASUVORK5CYII=",
    description:
      "Framework berbasis React untuk membangun aplikasi mobile lintas platform (iOS dan Android) dengan performa hampir native menggunakan JavaScript.",
    level: 8.9,
    favorite: true,
  },

  // 🤖 ANDROID DEVELOPMENT
  {
    id: 13,
    name: "Android Studio",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEVHcExatmAyikU9lEpJpFdTr1tVsl1PrlRIolRQrFowiUFYtFxWs1tGnVNPr1NZtl9Vs1pRsVZduWRivWhMp1ZUr14GBAZHoVNBlEsvOzBBmksvZjE9jkY+fUJA+EjFAAAADnRSTlMAv9i+Zp1xMBW0NFHkj7ECPhsAAADQSURBVCiRzdDdEoIgEAVgTNToh11wF9Tq/V+zpRiCmu49V8inu2dUapc5fV9Mn2O/XVu7xkM5HzY61naMywdPC3U1mnivFvWEZ1mkx1HLtglj38xxF+PwHXNxsdkyIOR47wGHxuSu6Dx7qLSTC8hDMensS0GTXkaXg/hS87ZRHviONsc5WEAmja+mydZwc0VvYYXZc2o8CD5CjWsID8E0mKXoElayBbcQyHsmpTQDoLPlu6TWSmcmrQwx1pIdgMkoHemHBJEpamk7/Unzf/eRJymOFA4d4haTAAAAAElFTkSuQmCC",
    description:
      "Lingkungan pengembangan resmi untuk aplikasi Android, dilengkapi dengan emulator, debugging tools, dan integrasi penuh dengan Gradle.",
    level: 8.6,
    favorite: false,
  },
  {
    id: 14,
    name: "Java",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAh1BMVEXe5uzAztqxwtHc4OT09PT19fXw8PCqu8rn5+f8/Pzs0Lf6+vrnrXrleiugscLk5OT39/fs7OzkcR7lx6zh4eHhr4LhZRLhpW+Vp7fd3d3gYA6Knq3W1tbbbhzXoW1cepV6jZ6EmKdIZoJWc4vQ0NB8kJ6otb3Ly8twhZV1jqW5vcK9yM9ofY52NCXaAAAAr0lEQVR4AU3KhUIDMQwA0BwrWWftZWQSLrDq/P+/jxPsVaIAzcs/TV/PzOsI+2dmDcztYoTLVf/bed9YDXC9MX3oG863PVpv6c20rXfg2BiDuz0ftmgMOzgKItKe9nsiRDn2DSKyG3m3Vpj6RqfWq+rHp8opiHYQ1XNKub8dp1Ai1MIi554rJYVLhXAR0Zz6DU1BLwGCsmqZMGuAq7K7nSbe6hXqnf/4e4VHfP4TH1/dVRTdLcfq+gAAAABJRU5ErkJggg==",
    description:
      "Bahasa pemrograman berorientasi objek yang andal dan digunakan secara luas dalam pengembangan aplikasi Android maupun sistem enterprise.",
    level: 8.8,
    favorite: false,
  },

  // 🧪 SOFTWARE TESTING / SUPPORT
  {
    id: 15,
    name: "Postman",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACyUlEQVR4Aa3XA4xcURSA4bNGbdu2bds2l2njNKhtO65tt0Ft23bXnNM/yZvkFcO3L/nOjWauccTVp+H1BP4ojzDsxCPEwGaIwzPsxyRURQBExzcQrz6jYj/UxSo8RyrUhTS8wWY0RSBEw+q6W3Fd1BMUwBx8gnrpK7pCdKIbDdCwevbK6+AcbFALDiEfBP7wgZMhB5rjIdSi26gEQTCmoIdG1RNKh5XXyaDKP6EDRCcgvN54JOIVmkPwTwMK4hzUokSEM50+lII2+AA1XEZxmCoPq+dLOQdqkQ3LEQxBedyAmmEZ/CFCENTDR6hFR5AXglzY52R3NIEI+9PX2Odq0V1UgSAIC5EOdWAD/IVQAc+gFnxGJ4iOqSOU4xAPdeIVqgghDKlQLyUhWsPq2xdda7yHmtjw1mA+MaOEsANqwSqEuFh0D1ETtXAXatgthEdQLx1DftOi2wv9jwvIAUE0bFA8FsIvqBceoBoEgViAdCfT1BeCKvgERYwQ0i1dMiNrC+VYNxbdMgjymKYhzZsGJGOycXiJedG5sBSCvLgHRao3U7AWoRCUw3U3j+deEFTBZyh+eroI76OYcXwHUG6EuuEW8kAwyfx/nm7DOygCHhj1fChb44abB1V/tDPfttjq6UFkw16UhRjKYjfSoE7EIxZqSME4+1H8HOqBG2htunJzYg7ioG56grJC8PYy+oDxNCLIdBaMwBuoG5bxW1+r13ECFiM37G/KprgMdeI9akOEAEsPknQcREWIoSS2OVhbNswwLq8MfZLdQQf4QpAN0xADNTmF/HD4HH9o8TEaiRAIAjAYL03nSC2IRtRzkBNYf5YnYiXygQdKA6FshG1oAYGTxCTCemICG46hmkY1sncuGD5wlR1laGp2DkXgZXIaRnLKaGClB8lpKl5iLRoiwP0GuE7PJ2I7HuIX0pCOGDzCLkSgIvzdqfg3D6KTNRlCvVEAAAAASUVORK5CYII=",
    description:
      "Alat pengujian API yang membantu pengembang mengirim permintaan HTTP, memverifikasi respons, dan mengotomatisasi proses pengujian backend.",
    level: 8.5,
    favorite: false,
  },
  {
    id: 16,
    name: "Socket.IO",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACHr/7WAAAAFHRSTlMAJDx65P/XCpyITzFaqhfva8ZHum3csOAAAADrSURBVHgBbZEHEsMgDARFOXrP/9+a4gIi453KLDrOMnGElIIeURoHRtl/5QDjQ5TJG8ARRwJ5BpYMyOUCqiCGqGhrzhBHEHUkOrCo+/OCfvbMyijcaUU/oI8QeB4Jc/dIxyBzCTNG/0aRl/NYNRUsCYTpOljviEEJYj4HgK0Ojdo8y7HvHZ4S/5AYo7RTuk2+ACg+GSHXioE4XUE6LlwAmvU5Ik2doS9iGH3cCFeo5y6e66g4/80gTq3nnSMuF+Lku2dDpmKJ49cbCmZ3GY7XRlunUfduxQBuCGvF8BU60s7ouOiDHoippcGHPjjuB+a9coujAAAAAElFTkSuQmCC",
    description:
      "Library JavaScript untuk komunikasi real-time antara client dan server menggunakan WebSockets, ideal untuk fitur chat, notifikasi, dan dashboard live.",
    level: 8.7,
    favorite: false,
  },

  // 🧱 2D & 3D MODELING
  {
    id: 17,
    name: "AutoCAD",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABUElEQVR4Ae3UJVBFQRgFYCIkpM9Axb1hHXfLaIKEu1Y8EZGGR9wTGnF3d/vZA7Mziz3f+7Azc56/e78r/5oQkVH7vQA7saV+rCubFiEksdOsFiIAO7ZgbWclVCaAIzgAO09jPWElBQEkAkioxoB/wI5TIt2OzL/pRUOXxoBMU7sBVGfASVYjfZZt63hNAYTqDLjumaTPchhfoQxAzN3cMvFcNvfJB+AoxRynVhPP4+mlfABuNh7cfLghxex5p8sFPKztEc9ZZev7zwCUB3h/tAcBufj85drzACMNgPHTIIDKAWD8NAigcgCIeKqFlRATII6mwQEYv/fX//10vF8VDQp4vwNN1geDArBBjB365cbxHS9AugMk9x/wDygwc/gIWI8qvG93jeY6+RUBi6E5I+VWnvhQccAKqx97gyoPIHote2PDemIsAEe4AKEwwLh9BtIi0JR6AG7ZAAAAAElFTkSuQmCC",
    description:
      "Software desain 2D profesional yang digunakan untuk membuat gambar teknik, denah, dan rancangan arsitektur dengan presisi tinggi.",
    level: 8.4,
    favorite: false,
  },
  {
    id: 18,
    name: "Autodesk Inventor",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAAnElEQVR4AWP4TwAMUgUrxRkQQAtDwWM3BlSAJt/Jw4BPwUktoAhuBZ+yGLAAJMdJM+BT8NibATtAOA6fgksmDDgBFsdJ28MBWMEWNMeVfEM4PJSBAd1xJpeQggVkM6rjeKYipN+kYDoo9BlCfqoghrT0FvyBXvINr+lmSI5bCXYYhuMQ+nE4DmE/dschwFFMx6EpwAg5fAqGRNYDALpzWU8T8jGAAAAAAElFTkSuQmCC",
    description:
      "Software CAD 3D canggih untuk perancangan mekanik, simulasi, dan pembuatan prototipe digital secara realistis dan akurat.",
    level: 8.3,
    favorite: false,
  },

  // 🎨 UI/UX & PRODUCTIVITY TOOLS
  {
    id: 19,
    name: "Canva",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAXVBMVEUBw8wEvc0Its8OrNEao9QiltYvi9gcw8+d3ef+/v/j7/p2zeA4fdwDmdRHbtxYsdzD1PRUWuElhN5hSeU2b+VtOeg6WumAi+x7KuijrPJKSfFUNvR2KO1uJvRiKfvM3XR5AAABDElEQVR4AW3QBXLEMBAFUZmZafn+x0x/axxQpZf31YxVdkERxXGSJGma5S5MiGL/IxagkcMM8zywoiguC7AoK6qbC1ttsqlGUPDeeAO9EWOlToMKMZAcjwaDYmHHINY7kWKnP2hZ1R3m0cfSRpQkVTWYgbEsrqsKonQcOrPJxT62SujaaehPMZ6UicwmlyTaBpackeZ8bs0Wp2VJp8lONIvMFpcqj4hoFck2Z9fhQBCyrnt9eNucdrGNOw5Qvx/V7u3mZt+d0Z2pHTtE2ImrqrkqNI3V/YFBoF/G32il1/0pe50oocfjcYzofXmKZKAJPX0iOvEC601mQpOPHh8RaOrOvxWCkZnQQJn96Bc6xyS0ZhpJcAAAAABJRU5ErkJggg==",
    description:
      "Platform desain grafis berbasis web yang memudahkan pembuatan desain UI/UX, presentasi, poster, dan materi visual lainnya secara cepat dan intuitif.",
    level: 9.1,
    favorite: true,
  },
  {
    id: 20,
    name: "Microsoft Office",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADN0lEQVR4Ac3WY3AmQRCA4bNt27Zt27Zt27YV27Zt27aNvupKzVZ/Gzs/3rtwnnTPBvWWnltVo9UdcPjH6MVTTfMUJxvnKrEm6Oco0kYppSu2XGythDWbbrqtwuBg+bQXA+XSoLS6HnCHltPMAOuw0Aq6LbO+U26w/deoi93+xEOX3wV1/hknUKcfsfg/tLkexEFY7zV20G+bU86cLQFtygW2/RyV3OZjJJQWmw4hhuHb8CrKDOJ0rT8EQVlik1EM63nS6m+ZwY4fPT06f3YFfj2/WvHD6SiGK+bCtZYKrpZ5OxQPGvhbr8hGCClx9bmsC53nWwd33evmwJp9P9J/yaMowPDll8+SVrsctxqOFQmO+qfwlB46QVSs2HBtdAo81OSsn6/Wudj8otLb6yHCPp4Dp0v8sJot/RGKapHcsywaf01mGw2z9ddbgOo6Fwwk1ocUSnxz2AsOxHXiQauUbkJxbVU7g//DPvVjwhTD6Ww2aAIf5cOyq31cOXCL+rkdeCDtsMahIjuhuX87BQO2Ch112yQHFGUwTW2tUxAH4ld9RWs7FNUD7fV5NNwGBR03qZj5bxHOZyiFafhxHPhKd6XZO71lwPqmt0CgP/pzMRDWn2XGX2f0tk/pEVu/AkMpTMMHhwNF9WcGSxtMBX4qhuMF0jAce5+/zpSdLyB+2ztgKIVp+LEcqGM02tXQeBjwszYZKFCcZctRFEw9/FAq7dBDoCiFabgNDnQ26f3c27RbDi3ArBPQ8G0Ui705s3X6mdv5CDKUwRTHEva/dGSfx31ypHlbmXjzlhmpFo2BX6ZlPV+cjmLeK5coZFy9CohSmOIY4mnnb1+nIBceiuV/XjAXlNcpgOI6yBfbAvB4cUTe8fm2LL95M4IC9qyGrLsX8xDlw/wStuwfR8Fig9/rDeH1SoD7SwEuLoS8A3MgYf1s8J4zC7Ien+aiMMUxss7SQZy0ODDv5wHIeXsME4D5OK6zzCDeFa6TYVjI4lkQdmolggQlMA8v919teGcI0emS3xXcLYYoxWk4XblBvHCK4cOCDxPGUA6m+KfDj8r9dylF8dsAyxffqohPMA3fRsO7r/t/CFdX/wEe5fTxSsBTmQAAAABJRU5ErkJggg==",
    description:
      "Paket aplikasi produktivitas seperti Word, Excel, dan PowerPoint yang membantu dalam pembuatan dokumen, analisis data, dan presentasi profesional.",
    level: 8.9,
    favorite: false,
  },
];

// --- Data Dummy ---
export const educations: Experiences[] = [
  {
    id: "edu1",
    year: "2018",
    title: "SMK Teknik Permesinan",
    description:
      "Menempuh pendidikan di bidang teknik permesinan, memahami dasar manufaktur dan mekanika industri.",
    points: [
      "Belajar menggambar teknik dan membaca blueprint mesin.",
      "Memahami proses manufaktur menggunakan mesin bubut & CNC.",
      "Mengikuti beberapa lomba kejuruan teknik maupun non teknik.",
    ],
  },
  {
    id: "edu2",
    year: "2020",
    title: "S1 - Sistem Informasi",
    description:
      "Lulusan Sistem Informasi dengan IPK 3.36. Fokus pada pengembangan aplikasi, integrasi data, dan analisis sistem informasi.",
    points: [
      "Mempelajari pengembangan web dan teknologi digital.",
      "Fokus pada pembuatan aplikasi berbasis web.",
      "Tertarik pada data, desain antarmuka, dan pengalaman pengguna.",
    ],
  },
];

export const experiences: Experiences[] = [
  {
    id: "exp1",
    year: "2021 - 2023",
    title: "Operator CNC Laser – Industri Manufaktur",
    description:
      "Menangani pengoperasian mesin CNC Laser untuk pemotongan bahan sesuai spesifikasi desain dan menjaga kualitas hasil produksi.",
    points: [
      "Membaca dan memahami gambar teknis serta merancang program CNC.",
      "Mengkalibrasi dan mengatur mesin dengan presisi untuk hasil optimal.",
      "Melakukan pemeliharaan rutin mesin agar kinerja tetap stabil.",
      "Memastikan hasil produksi sesuai dengan toleransi dan standar kualitas.",
    ],
  },
  {
    id: "exp2",
    year: "2020",
    title: "Kejuruan Operator Komputer – UPTD BLK Pati",
    description:
      "Pelatihan intensif dalam penggunaan Microsoft Office untuk menunjang pekerjaan administratif dan analisis data.",
    points: [
      "Menguasai Word, Excel, dan PowerPoint untuk dokumen dan laporan profesional.",
      "Meningkatkan kemampuan pengolahan data dan presentasi dinamis.",
      "Mengembangkan efisiensi kerja melalui penggunaan fitur lanjutan Office.",
    ],
  },
  {
    id: "exp3",
    year: "2023",
    title: "Pelatihan Kerja Lapangan – Setiajaya Computer",
    description:
      "Membangun website katalog produk responsif untuk mendukung promosi dan manajemen produk toko komputer.",
    points: [
      "Mengembangkan website dengan fitur pencarian dan filter produk.",
      "Melakukan pendataan lengkap produk termasuk spesifikasi dan stok.",
      "Menyusun sistem manajemen produk agar admin dapat memperbarui stok secara real-time.",
    ],
  },
  {
    id: "exp4",
    year: "2024 - Sekarang",
    title: "Staff Gudang – Distribusi Barang",
    description:
      "Bertanggung jawab atas pemantauan, pengecekan, dan pengelolaan barang di gudang untuk memastikan proses distribusi berjalan lancar.",
    points: [
      "Memantau dan mengecek barang yang masuk ke kontainer sebelum dikirim ke distributor.",
      "Melakukan pengecekan stok dan kondisi barang secara berkala.",
      "Menerapkan sistem FIFO untuk memastikan rotasi stok berjalan sesuai prosedur.",
    ],
  },
];

export const animationVariants = {
  nav: {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  },
  heroContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  },
  heroItem: {
    hidden: { x: -24, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.42, 0, 0.58, 1] },
    },
  },
  quickLinkContainer: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  },
  quickLinkItem: {
    hidden: { y: 8, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.35 } },
  },
  slideVariants: {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  },
};

export const CONTACTS = [
  {
    id: 0,
    key: "wa",
    title: "WhatsApp",
    subtitle: "+62 8954-2446-5906",
    path: "M12.004 2C6.478 2 2 6.477 2 12.004c0 1.772.457 3.503 1.326 5.044L2 22l4.993-1.31A9.962 9.962 0 0 0 12.004 22C17.53 22 22 17.523 22 11.996 22 6.478 17.53 2 12.004 2zm0 18.2a8.187 8.187 0 0 1-4.168-1.142l-.298-.177-2.96.777.79-2.886-.193-.3a8.17 8.17 0 0 1-1.26-4.38c0-4.526 3.683-8.209 8.209-8.209 4.517 0 8.2 3.683 8.2 8.21 0 4.525-3.683 8.207-8.2 8.207zm4.563-6.155c-.25-.125-1.474-.727-1.703-.81-.228-.083-.394-.125-.56.126-.165.25-.64.81-.783.975-.144.166-.289.188-.539.062-.25-.125-1.057-.389-2.013-1.237-.744-.663-1.246-1.48-1.392-1.73-.145-.25-.015-.386.11-.511.112-.113.25-.292.374-.438.125-.145.166-.25.25-.416.083-.166.042-.312-.021-.437-.062-.125-.56-1.35-.767-1.853-.2-.48-.404-.416-.56-.425l-.478-.008a.925.925 0 0 0-.665.312c-.228.25-.874.854-.874 2.082 0 1.229.895 2.42 1.02 2.586.125.166 1.767 2.812 4.273 3.948 2.506 1.137 2.506.757 2.96.708.455-.05 1.466-.595 1.67-1.17.205-.576.205-1.063.15-1.17-.056-.105-.226-.163-.476-.288z",
    color: "#25D366",
  },
  {
    id: 1,
    key: "email",
    title: "Email",
    subtitle: "wanazizakaria28@gmail.com",
    path: "M4.5 7.5c0-.55.45-1 1-1h13c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H5.5c-.55 0-1-.45-1-1v-9zM6.2 9.2 12 13.6l5.8-4.4v-.9L12 12 6.2 8.3v.9z",
    color: "#EA4335",
  },
  {
    id: 2,
    key: "github",
    title: "GitHub",
    subtitle: "github.com/WanAziz",
    path: "M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.28 1.2-3.09-.12-.29-.52-1.44.11-3 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39s1.99.13 2.92.39c2.22-1.49 3.2-1.18 3.2-1.18.63 1.56.23 2.71.11 3 .75.81 1.2 1.83 1.2 3.09 0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.21.68.8.56C20.71 21.38 24 17.08 24 12 24 5.65 18.35.5 12 .5z",
    color: "#181717",
  },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Abbi (Kids English App)",
    category: "Mobile",
    description:
      "Aplikasi interaktif untuk anak-anak belajar bahasa Inggris dengan kuis dan fitur speech-to-text.",
    image: [
      { url: "abbi/1.jpg", alt: "opening" },
      { url: "abbi/2.jpg", alt: "dashboard" },
      { url: "abbi/3.jpg", alt: "learn" },
      { url: "abbi/4.jpg", alt: "learn" },
      { url: "abbi/5.jpg", alt: "quiz" },
      { url: "abbi/6.jpg", alt: "quiz" },
      { url: "abbi/7.jpg", alt: "quiz" },
    ],
    techStack: ["react native", "expo", "nativewind" , "typescript"],
  },

  {
    id: 2,
    name: "Absensi (Attendance System)",
    category: "Website",
    description:
      "Sistem absensi karyawan berbasis QR dengan fitur perhitungan gaji otomatis dan opsi input manual.",
    image: [
      { url: "absensi/3.jpg", alt: "login" },
      { url: "absensi/2.jpg", alt: "user" },
      { url: "absensi/1.jpg", alt: "user" },
      { url: "absensi/4.png", alt: "admin" },
      { url: "absensi/5.png", alt: "admin" },
      { url: "absensi/6.png", alt: "admin" },
      { url: "absensi/7.png", alt: "admin" },
    ],
    techStack: ["java", "android studio", "laravel", "blade" , "bootstrap", "mysql"],
  },

  {
    id: 3,
    name: "AI Psikolog App",
    category: "Mobile",
    description:
      "Aplikasi konsultasi online yang memadukan AI untuk saran otomatis dan chat langsung dengan admin/psikolog.",
    image: [
      { url: "AI-psikolog-app/1.jpg", alt: "user" },
      { url: "AI-psikolog-app/6.jpg", alt: "user" },
      { url: "AI-psikolog-app/3.jpg", alt: "user" },
      { url: "AI-psikolog-app/5.jpg", alt: "user" },
      { url: "AI-psikolog-app/7.jpg", alt: "user" },
      { url: "AI-psikolog-app/2.jpg", alt: "admin" },
      { url: "AI-psikolog-app/4.jpg", alt: "admin" },
    ],
    techStack: ["react native", "expo", "nativewind", "typescript" , "node.js" , "express.js" , "socket.IO" , "mysql"],
  },

  {
    id: 4,
    name: "Box Amplifier (3D)",
    category: "Other",
    description:
      "Desain 3D box amplifier — model yang dihasilkan untuk keperluan produksi dan visualisasi produk.",
    image: [
      { url: "box-amplifier/1.jpg", alt: "final" },
      { url: "box-amplifier/2.png", alt: "3D" },
      { url: "box-amplifier/3.png", alt: "3D" },
    ],
    techStack: ["inventor"],
  },

  {
    id: 5,
    name: "Box Speaker Portable (3D)",
    category: "Other",
    description:
      "Desain 3D untuk box speaker portable, mencakup tampilan luar dan detail konstruksi.",
    image: [
      { url: "box-speaker-portable/1.jpg", alt: "final" },
      { url: "box-speaker-portable/2.png", alt: "3D" },
      { url: "box-speaker-portable/3.png", alt: "3D" },
    ],
    techStack: ["inventor"],
  },

  {
    id: 6,
    name: "E-Book Apps",
    category: "Mobile",
    description:
      "Beberapa aplikasi e-book statis yang menampilkan konten baca dengan UI sederhana dan navigasi halaman.",
    image: [
      { url: "e-book/1.png", alt: "book 1" },
      { url: "e-book/2.png", alt: "book 2" },
      { url: "e-book/3.png", alt: "book 3" },
      { url: "e-book/4.png", alt: "book 4" },
    ],
    techStack: ["react native" , "expo"],
  },

  {
    id: 7,
    name: "Google Drive Clone",
    category: "Website",
    description:
      "Aplikasi manajemen file yang berfungsi mirip Google Drive dengan upload, folder, dan preview file.",
    image: [
      { url: "google-drive-clone/1.png", alt: "user" },
      { url: "google-drive-clone/2.png", alt: "user" },
      { url: "google-drive-clone/3.png", alt: "user" },
      { url: "google-drive-clone/4.png", alt: "user" },
      { url: "google-drive-clone/5.png", alt: "user" },
    ],
    techStack: ["next.js" ,"typescript", "tailwind" , "daisy.UI" , "react-icons"],
  },

  {
    id: 8,
    name: "Portfolio v1",
    category: "Website",
    description:
      "Versi pertama website portofolio pribadi untuk menampilkan proyek dan kontak.",
    image: [
      { url: "portofolio-v1/1.png", alt: "portofolio" },
      { url: "portofolio-v1/2.png", alt: "portofolio" },
      { url: "portofolio-v1/3.png", alt: "portofolio" },
      { url: "portofolio-v1/4.png", alt: "portofolio" },
    ],
    techStack: ["react.js" , "react-router" , "tailwind" , "swiper.js"],
  },

  {
    id: 9,
    name: "Setiajaya Komputer",
    category: "Website",
    description:
      "Website e-commerce untuk katalog toko dengan pembayaran online, dashboard admin, dan fitur pelacakan pesanan serta chat admin.",
    image: [
      { url: "setiajaya-komputer/1.png", alt: "user" },
      { url: "setiajaya-komputer/2.png", alt: "user" },
      { url: "setiajaya-komputer/3.png", alt: "user" },
      { url: "setiajaya-komputer/4.png", alt: "user" },
      { url: "setiajaya-komputer/5.png", alt: "admin" },
      { url: "setiajaya-komputer/6.png", alt: "admin" },
    ],
    techStack: ["laravel" , "blade" , "mysql"],
  },

  {
    id: 10,
    name: "Tahrib (Pondok / Classroom System)",
    category: "Website",
    description:
      "Platform seperti Google Classroom dengan beberapa layout: promosi pesantren, admin, ustad (pengajar), dan santri (siswa) lengkap dengan monitoring aktivitas harian, mingguan, dan bulanan.",
    image: [
      { url: "tahrib/1.png", alt: "guest" },
      { url: "tahrib/2.png", alt: "guest" },
      { url: "tahrib/3.png", alt: "admin" },
      { url: "tahrib/6.png", alt: "udstad" },
      { url: "tahrib/8.png", alt: "santri" },
      { url: "tahrib/9.png", alt: "santri" },
      { url: "tahrib/10.png", alt: "santri" },
    ],
    techStack: ["laravel" , "blade" , "mysql"],
  },

  {
    id: 11,
    name: "Toko Saya",
    category: "Website",
    description:
      "Website penjualan sederhana yang fokus pada area layanan lokal, proses checkout tanpa login (mengisi data diri & alamat).",
    image: [
      { url: "toko-saya/1.png", alt: "user" },
      { url: "toko-saya/2.png", alt: "user" },
      { url: "toko-saya/3.png", alt: "user" },
      { url: "toko-saya/4.png", alt: "user" },
    ],
    techStack: ["next.js" ,"typescript", "tailwind" , "daisy.UI" , "react-icons"],
  },

  {
    id: 12,
    name: "Web CMS",
    category: "Website",
    description:
      "Sistem CMS untuk mengelola konten website secara dinamis melalui panel admin.",
    image: [
      { url: "web-cms/1.png", alt: "user" },
      { url: "web-cms/2.png", alt: "admin" },
    ],
    techStack: ["laravel" , "blade" , "mysql"],
  },

  {
    id: 13,
    name: "Web UMKM",
    category: "Website",
    description:
      "Platform untuk memantau UMKM terdaftar, melacak penjualan, dan melihat laporan keuntungan serta statistik bulanan.",
    image: [
      { url: "web-umkm/1.png", alt: "" },
      { url: "web-umkm/2.png", alt: "" },
      { url: "web-umkm/3.png", alt: "" },
      { url: "web-umkm/4.png", alt: "" },
      { url: "web-umkm/5.png", alt: "" },
    ],
    techStack: ["laravel" , "blade" , "mysql"],
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    image: "/sertifikat/1.jpg", // Path relatif ke folder public
    title: "Surat Keterangan Kerja dari PT Dua Kelinci bagian Teknik Fabrikasi",
    hueA: 340,
    hueB: 10,
  },
  {
    id: 2,
    image: "/sertifikat/2.jpg",
    title: "Juara III pada Mechanical Enginering CAD",
    hueA: 60,
    hueB: 120,
  },
  {
    id: 3,
    image: "/sertifikat/3.jpg",
    title:
      "FINALIS Babak 60 Besar di Mathematics Competition for Senior High School",
    hueA: 200,
    hueB: 260,
  },
  {
    id: 4,
    image: "/sertifikat/4.jpg",
    title:
      "Peserta CAD Competition se-Jawa dalam rangkaian Mechanical Fair 2019",
    hueA: 100,
    hueB: 150,
  },
  // Menambahkan dua entri lagi untuk 5.jpg dan 6.jpg
  {
    id: 5,
    image: "/sertifikat/5.jpg",
    title: "Pelatihan Berbasis Kompetensi Kejuruan Operator Komuter", // Ganti dengan judul yang sesuai
    hueA: 280,
    hueB: 330,
  },
  {
    id: 6,
    image: "/sertifikat/6.jpg",
    title: "Ujian Kompetensi Keahlian oleh PT Dua Kelinci", // Ganti dengan judul yang sesuai
    hueA: 10,
    hueB: 50,
  },
];
