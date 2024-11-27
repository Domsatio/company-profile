import {
  Info,
  HeadphonesIcon,
  Clock,
  Settings,
  CreditCard,
  WrenchIcon,
  ShieldCheck,
  Cable,
  Laptop,
  BoxIcon,
  Cloud,
  Webhook,
  PaintBucket,
  Smartphone,
  PenTool,
  MousePointer2,
  HelpCircle,
  Server,
  Download,
  Clock4,
  GraduationCap
} from 'lucide-react'

export type AccordionItemProps = {
  id: string
  icon: React.ElementType
  title: string
  content: string
}

export type AccordionProps = {
  Umum: AccordionItemProps[]
  Pengembangan: AccordionItemProps[]
  Desain: AccordionItemProps[]
  Bantuan: AccordionItemProps[]
}

export const accordionItems: Record<string, AccordionItemProps[]> = {
  Umum: [
    {
      id: '1',
      icon: Info,
      title: 'Layanan apa yang Anda tawarkan?',
      content:
        'Kami menawarkan berbagai layanan digital termasuk pengembangan web, pengembangan aplikasi mobile, desain UI/UX, dan konsultasi IT. Tim kami mengkhususkan diri dalam menciptakan solusi perangkat lunak khusus yang disesuaikan dengan kebutuhan bisnis Anda.'
    },
    {
      id: '2',
      icon: Clock,
      title: 'Berapa lama biasanya untuk menyelesaikan sebuah proyek?',
      content:
        'Waktu penyelesaian proyek bervariasi tergantung pada ruang lingkup dan kompleksitasnya. Sebuah situs web sederhana mungkin memakan waktu 4-8 minggu, sementara aplikasi perusahaan yang kompleks bisa memakan waktu 6 bulan atau lebih. Kami akan memberikan estimasi waktu yang rinci selama konsultasi awal berdasarkan kebutuhan spesifik Anda.'
    },
    {
      id: '3',
      icon: Settings,
      title: 'Apa proses pengembangan Anda?',
      content:
        'Kami mengikuti metodologi pengembangan agile dengan siklus iteratif. Ini termasuk pengumpulan kebutuhan, perencanaan, desain, pengembangan, pengujian, dan fase penyebaran. Kami menjaga komunikasi yang teratur dan memberikan pembaruan kemajuan sepanjang siklus proyek.'
    },
    {
      id: '4',
      icon: CreditCard,
      title: 'Bagaimana Anda menangani harga proyek?',
      content:
        'Harga kami berbasis proyek dan tergantung pada faktor-faktor seperti kompleksitas, fitur, waktu, dan sumber daya yang dibutuhkan. Kami memberikan kutipan rinci setelah memahami kebutuhan Anda secara menyeluruh. Kami juga menawarkan model keterlibatan yang fleksibel termasuk harga tetap, waktu dan bahan, serta pengaturan retainer.'
    },
    {
      id: '5',
      icon: WrenchIcon,
      title: 'Apakah Anda menyediakan pemeliharaan dan dukungan setelah proyek selesai?',
      content:
        'Ya, kami menawarkan layanan pemeliharaan dan dukungan berkelanjutan untuk memastikan solusi digital Anda tetap up-to-date dan berkinerja optimal. Kami menyediakan berbagai paket dukungan yang mencakup pembaruan reguler, patch keamanan, pemantauan kinerja, dan dukungan teknis.'
    },
    {
      id: '6',
      icon: ShieldCheck,
      title: 'Bagaimana Anda memastikan kualitas dan keamanan hasil kerja Anda?',
      content:
        'Kami menerapkan proses jaminan kualitas yang ketat termasuk pengujian otomatis, tinjauan kode, dan audit keamanan. Praktik pengembangan kami mengikuti standar industri dan praktik terbaik untuk pengkodean yang aman. Kami juga melakukan pengujian menyeluruh sebelum penyebaran.'
    },
    {
      id: '7',
      icon: Cable,
      title: 'Bisakah Anda bekerja dengan sistem dan teknologi yang sudah ada?',
      content:
        'Ya, kami memiliki pengalaman dalam mengintegrasikan berbagai teknologi dan sistem lama. Tim kami terampil dalam berbagai bahasa pemrograman dan kerangka kerja, memungkinkan kami untuk bekerja dengan infrastruktur Anda yang ada sambil menerapkan solusi modern.'
    }
  ],
  Pengembangan: [
    {
      id: '1',
      icon: Laptop,
      title: 'Teknologi apa yang Anda gunakan?',
      content:
        'Kami bekerja dengan berbagai teknologi termasuk JavaScript, TypeScript, React, Node.js, dan lainnya. Tim kami selalu mengikuti tren dan alat terbaru untuk memberikan solusi mutakhir.'
    },
    {
      id: '2',
      icon: Smartphone,
      title: 'Apakah Anda menyediakan layanan pengembangan aplikasi mobile?',
      content:
        'Ya, kami mengkhususkan diri dalam pengembangan aplikasi mobile untuk platform iOS dan Android. Tim kami memiliki pengalaman membangun aplikasi native, hybrid, dan cross-platform menggunakan teknologi seperti React Native dan Flutter.'
    },
    {
      id: '3',
      icon: BoxIcon,
      title: 'Bisakah Anda membantu dengan pengembangan perangkat lunak khusus?',
      content:
        'Tentu saja! Kami unggul dalam pengembangan perangkat lunak khusus yang disesuaikan dengan kebutuhan bisnis unik Anda. Tim kami dapat membangun solusi khusus dari awal atau meningkatkan sistem yang ada untuk meningkatkan efisiensi dan produktivitas.'
    },
    {
      id: '4',
      icon: Cloud,
      title: 'Apa pengalaman Anda dengan teknologi cloud?',
      content:
        'Kami memiliki pengalaman luas bekerja dengan platform cloud seperti AWS, Azure, dan Google Cloud. Tim kami dapat membantu Anda bermigrasi ke cloud, membangun aplikasi cloud-native, dan memanfaatkan layanan cloud untuk skalabilitas dan efisiensi biaya.'
    },
    {
      id: '5',
      icon: Webhook,
      title: 'Apakah Anda menyediakan layanan pengembangan API?',
      content:
        'Ya, kami menawarkan layanan pengembangan API untuk membantu Anda membangun API yang kuat dan skalabel untuk aplikasi Anda. Tim kami mengikuti praktik terbaik untuk desain API, dokumentasi, dan pengujian untuk memastikan integrasi yang mulus dengan sistem lain.'
    }
  ],
  Desain: [
    {
      id: '1',
      icon: PaintBucket,
      title: 'Layanan desain apa yang Anda tawarkan?',
      content:
        'Kami menawarkan berbagai layanan desain termasuk desain UI/UX, branding, desain grafis, dan ilustrasi. Tim desain kami mengkhususkan diri dalam menciptakan antarmuka yang menarik secara visual dan ramah pengguna yang meningkatkan pengalaman pengguna secara keseluruhan.'
    },
    {
      id: '2',
      icon: Smartphone,
      title: 'Apakah Anda menyediakan desain web responsif?',
      content:
        'Ya, kami mendesain situs web dan aplikasi yang responsif dan dioptimalkan untuk semua perangkat dan ukuran layar. Proses desain kami mencakup wireframing, prototyping, dan pengujian pengguna untuk memastikan pengalaman pengguna yang mulus di seluruh platform.'
    },
    {
      id: '3',
      icon: PenTool,
      title: 'Bisakah Anda membantu dengan desain logo dan branding?',
      content:
        'Tentu saja! Kami menawarkan layanan desain logo, branding, dan identitas untuk membantu Anda membangun kehadiran merek yang kuat. Tim desain kami dapat membuat logo khusus, panduan merek, dan materi pemasaran yang mencerminkan nilai-nilai merek Anda dan beresonansi dengan audiens target Anda.'
    },
    {
      id: '4',
      icon: MousePointer2,
      title: 'Apa pendekatan Anda terhadap desain pengalaman pengguna?',
      content:
        'Kami mengikuti pendekatan desain yang berpusat pada pengguna yang berfokus pada pemahaman kebutuhan, perilaku, dan motivasi pengguna. Proses desain kami mencakup penelitian pengguna, wireframing, prototyping, dan pengujian kegunaan untuk menciptakan pengalaman pengguna yang intuitif dan menarik.'
    },
    {
      id: '5',
      icon: HelpCircle,
      title: 'Apakah Anda menyediakan layanan konsultasi desain?',
      content:
        'Ya, kami menawarkan layanan konsultasi desain untuk membantu Anda mengoptimalkan produk dan layanan digital Anda. Pakar desain kami dapat meninjau desain Anda yang ada, memberikan rekomendasi untuk perbaikan, dan membantu Anda menyelaraskan strategi desain Anda dengan tujuan bisnis Anda.'
    }
  ],
  Bantuan: [
    {
      id: '1',
      icon: HeadphonesIcon,
      title: 'Layanan dukungan apa yang Anda tawarkan?',
      content:
        'Kami menawarkan berbagai layanan dukungan termasuk pemeliharaan, pemantauan, pemecahan masalah, dan dukungan teknis. Tim dukungan kami tersedia untuk membantu Anda dengan masalah, pembaruan, atau peningkatan apa pun untuk memastikan solusi digital Anda berjalan lancar.'
    },
    {
      id: '2',
      icon: Server,
      title: 'Apakah Anda menyediakan layanan hosting dan manajemen server?',
      content:
        'Ya, kami menawarkan layanan hosting dan manajemen server untuk membantu Anda menyebarkan dan memelihara aplikasi Anda. Tim kami dapat mengatur lingkungan hosting, mengkonfigurasi server, dan memantau kinerja untuk memastikan uptime dan keamanan yang optimal.'
    },
    {
      id: '3',
      icon: Download,
      title: 'Bisakah Anda membantu dengan pembaruan perangkat lunak dan patch?',
      content:
        'Tentu saja! Kami menyediakan layanan manajemen pembaruan perangkat lunak dan patch untuk menjaga aplikasi Anda tetap up-to-date dan aman. Tim kami dapat menjadwalkan pembaruan reguler, menguji rilis baru, dan menerapkan patch untuk mengatasi kerentanan dan bug.'
    },
    {
      id: '4',
      icon: Clock4,
      title: 'Berapa waktu respons Anda untuk permintaan dukungan?',
      content:
        'Tim dukungan kami bertujuan untuk merespons permintaan dukungan dalam waktu 24 jam. Kami memprioritaskan masalah mendesak dan memberikan pembaruan tepat waktu tentang status permintaan Anda. Tujuan kami adalah menyelesaikan masalah dengan cepat dan efisien untuk meminimalkan downtime dan gangguan.'
    },
    {
      id: '5',
      icon: GraduationCap,
      title: 'Apakah Anda menawarkan pelatihan dan dokumentasi untuk solusi Anda?',
      content:
        'Ya, kami menyediakan layanan pelatihan dan dokumentasi untuk membantu Anda mengonboarding tim dan pengguna Anda. Program pelatihan kami mencakup penggunaan sistem, praktik terbaik, dan teknik pemecahan masalah. Kami juga membuat manual pengguna, panduan, dan FAQ untuk mendukung pengguna Anda.'
    }
  ]
}
