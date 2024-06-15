const CategoryData = [
    {
      id: 'floralScents',
      title: 'Çiçeksi Kokular',
      description: 'Tatlı ve çiçeksi kokular.',
      perfumes: [
        { name: 'DIOR Jadore LOr - Essence de Parfum', notes: 'Portakal çiçeği mutlak, Yasemin grandiflorum mutlak, Centifolia gülü mutlak.', image: require('../image1/Jadore_LOr.jpg') },
        { name: 'YVES SAINT LAURENT Libre - Eau De Parfum', notes: 'Üst notalarda Lavanta, Mandalina, Siyah Frenk Üzümü ve Petitgrain; orta notalarda Lavanta, Portakal Çiçeği ve Yasemin; temel notalar Madagaskar Vanilya, Misk, Sedir ve Ambergris', image: require('../image1/YVESSAINTLAURENT.jpg') },
        { name: 'MUGLER Alien - Eau de Parfum', notes: 'Güneşli Yön: Arap Yasemini Gizemli Yön: Kaşmeran Sarıp Sarmalayan Yön: Beyaz Amber', image: require('../image1/MUGLER.jpg') },
        { name: 'LANCÔME Idôle - Eau de Parfum', notes: 'Üst notada bergamot, armut ; Orta notada Isparta gülü, Mayıs gülü, yasemin; Alt notada beyaz misk, vanilya', image: require('../image1/LANCÔME.jpg') },
        { name: 'ARMANI My Way - Eau de Parfum', notes: 'Üst Notalar: Bergamot, Portakal Çiçeği; Kalp notaları: Sümbülteber, Yasemin; Dip Notalar: Sedir Ağacı, Beyaz Misk, Vanilya', image: require('../image1/ARMANI.jpg') },
      ],
    },
    {
      id: 'freshScents',
      title: 'Fresh Kokular',
      description: 'Temiz ve canlı kokular.',
      perfumes: [
        { name: 'CHLOÉ Love Story - Eau De Parfum', notes: 'Üst notalar: Madagaskar Yasemini Orta notalar: Portakal Çiçeği Alt notalar: Sedir Ağacı', image: require('../image1/CHLOÉ_Love_Story.jpg') },
        { name: 'CALVIN KLEIN Euphoria Woman - Eau de Parfum', notes: 'Nar, Hurma, Narenciyeli Yeşil Notalar, Siyah Orkide, Champak Çiçeği, Lotus Çiçeği, Maun Ağacı, Kremalı Notalar, Siyah Menekşe, Sıvı Amber.', image: require('../image1/CALVINKLEIN_Euphoria.jpg') },
        { name: 'TOM FORD Neroli Portofino - Eau de Parfum', notes: 'TUNUSTAN NEROLI SİCİLYA LİMONU İTALYADAN BERGAMOT MANDALİNA NOTALARI PORTAKAL ÇİÇEĞİ LAVANTA BİBERİYE', image: require('../image1/TOMFORD_Neroli.jpg') },
        { name: 'DOLCE & GABBANA Light Blue Eau Intense - Eau de Parfum', notes: 'Limon, Yeşil elma, Şeftali , Kadife Çiçeği, Yasemin, Sedir Ağacı, Kehribar, Misk', image: require('../image1/DOLCE&GABBANA_lightBlue.jpg') },
        { name: 'GUERLAIN Mon Guerlain - Eau de Parfum Intense', notes: 'Lavanda, Vanilya, Paçuli, Sandal Ağacı', image: require('../image1/GUERLAIN_MonGuerlain.jpg') },
      ],
    },
    {
      id: 'orientalScents',
      title: 'Oryantal Kokular',
      description: 'Sıcak ve baharatlı kokular.',
      perfumes: [
        { name: 'YVES SAINT LAURENT Black Opium - Eau de Parfum', notes: 'Üst notalarda: Mandalina Yağı - Tahıl Yağı - Fransız Lavanta Yağı - Kuşüzümü Kalp notalar: Lavanta yağı - Zambak - Yasemin - Portakal Çiçeği Dip notalar: Vanilya özü - Sedir Ağacı Yağı - Amber - Misk', image: require('../image1/YVESSAINTLAURENT_BlackOpium.jpg') },
        { name: 'ARMANI Stronger With You - Eau De Toilette', notes: 'Vanilya, Kestane Şekeri, Kakule, Pembe biber, Ada Çayı', image: require('../image1/ARMANI_StrongerWithYou.jpg') },
        { name: 'DIOR Hypnotic Poison - Eau de Parfum', notes: 'Zambak yasemin, Tonka fasulyesi, Vanilya notası', image: require('../image1/DIOR_Hypnotic.jpg') },
        { name: 'VERSACE Crystal Noir - Eau De Parfum', notes: 'Tepe Nota: Kakule, Biber, Zencefil. Kalp nota: Gardenya, Şakayık, Portakal Çiçeği. Dip Nota: Amber, Sandal Ağacı, Musk.', image: require('../image1/VERSACE_Crystal.jpg') },
        { name: 'BVLGARI Man In Black - Eau De Parfum', notes: 'Tepe Notası: Rom, Baharatlar Kalp Notası: Sümbül Teberi, Deri Akoru Dip Notası: Tonka Fasulyesi, Gayak Ağacı Reçinesi', image: require('../image1/BVLGARI_ManInBlack.jpg') },
      ],
    },
    {
      id: 'woodyScents',
      title: 'Odunsu Kokular',
      description: 'Dünyevi ve odunsu kokular.',
      perfumes: [
        { name: 'CAROLINA HERRERA Good Girl - Eau de Parfum', notes: 'Üst Notalar: Badem Orta Notalar: Sümbülteber ve Arap Yasemini Alt Notalar: Tonka Fasulyesi ve Kakao', image: require('../image1/CAROLINAHERRERA_GoodGirl.jpg') },
        { name: 'RABANNE FRAGRANCES Invictus - Eau De Toilette', notes: 'Defne Yaprağı, Greyfurt, Gri Amber, Guaiac Ağacı, Laden Reçinesi, Meşe Yosunu, Okyanus Notaları, Yasemin', image: require('../image1/RABANNEFRAGRANCES_Invictus.jpg') },
        { name: 'DIOR Sauvage Elixir - Erkek Parfüm', notes: 'Greyfurt notası, Nyonstan AOP lavantanın özü, Sichuan biberi, Paçuli, Amber notası', image: require('../image1/DIOR_SauvageElixir.jpg') },
        { name: 'GUCCI Guilty - Eau de Parfum Intense', notes: 'Üst Notalar: Pembe Biber ve Mandalina Orta Notalar:Leylak, Menekşe ve Kediotu Alt Notalar:Amber ve Paçuli', image: require('../image1/GUCCI_Guilty.jpg') },
        { name: 'GIVENCHY LInterdit - Eau de Parfum Rouge', notes: 'Üst notalar: Sicilya Kan Portakalı Esansı, Kırmızı Baharat Akoru Orta notalar: Tunus Portakal Çiçeği Absolütü, Hint Yasemini Absolütü Alt notalar: Endonezya Paçulisi Esansı, Yeni Kaledonya Sandal Ağacı Esansı', image: require('../image1/GIVENCHY_LInterdit.jpg') },
      ],
    },
  ];
  
  export default CategoryData;
  