-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 30, 2020 at 05:38 AM
-- Server version: 10.1.34-MariaDB
-- PHP Version: 7.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `library1`
--

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `title` varchar(64) NOT NULL,
  `description` text NOT NULL,
  `author` varchar(128) NOT NULL,
  `image` varchar(255) NOT NULL,
  `status` int(1) NOT NULL,
  `id_category` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`id`, `title`, `description`, `author`, `image`, `status`, `id_category`, `created_at`, `update_at`) VALUES
(1, 'Dilan 1990', 'Milea (Vanesha Prescilla) bertemu dengan Dilan (Iqbaal Ramadhan) di sebuah SMA di Bandung. Itu adalah tahun 1990, saat Milea pindah dari Jakarta ke Bandung. Perkenalan yang tidak biasa kemudian membawa Milea mulai mengenal keunikan Dilan lebih jauh. Dilan yang pintar, baik hati dan romantis... semua dengan caranya sendiri.', 'Pidi Baiq', 'https://mojokstore.com/wp-content/uploads/2016/11/Dilan-Dia-Adalah-Dilanku-tahun-1990-Pidi-Baiq-front.jpg', 1, 3, '2020-03-24 09:13:51', '2020-03-25 11:45:00'),
(2, 'Ubur-ubur Lembur', 'Ubur-Ubur Lembur adalah buku kumpulan cerita karya Raditya Dika atau Radit yang diluncurkan secara serentak pada tanggal 7 Februari 2018. Buku ini menceritakan pengalaman Raditya Dika hidup dari apa yang dicintainya.', 'Raditya Dika', 'https://mojokstore.com/wp-content/uploads/2016/11/Dilan-Dia-Adalah-Dilanku-tahun-1990-Pidi-Baiq-front.jpg', 1, 5, '2020-03-25 11:43:24', '2020-03-25 11:43:24'),
(3, 'Laskar Pelangi', 'Novel Laskar Pelangi menceritakan 10 anak dari keluarga miskin yang bersekolah di sekolah sederhana namun mempunyai semangat belajar tinggi.', 'Andrea Hirata', 'https://upload.wikimedia.org/wikipedia/id/thumb/8/8e/Laskar_pelangi_sampul.jpg/220px-Laskar_pelangi_sampul.jpg', 1, 6, '2020-03-25 12:04:24', '2020-03-27 08:44:05'),
(4, 'Negeri 5 Menara', 'Novel 5 Menara ini menceritakan seorang pemuda bernama Alif yang diminta Ibunya untuk belajar di Pondok Pesantren.Di pondok Ia mendapatkan beberapa teman yang sama-sama bermimpi besar.', 'Ahmad Fuadi', 'https://bulelengkab.go.id/assets/instansikab/72/artikel/resensi-buku-inilah-hebatnya-novel-negeri-5-menara-41.jpg', 1, 2, '2020-03-25 12:18:22', '2020-03-27 09:21:15'),
(5, 'Ronggeng Dukuh Paruk', 'Novel Ronggeng Dukuh Paruk menceritakan seorang anak berumur 11 tahun bernama Serintil yang mempunyai kelebihan bisa menyanyi dan menari ronggeng.', 'Ahmad Tohari\r\n', 'https://images.gr-assets.com/books/1320115753l/12989027.jpg', 1, 2, '2020-03-25 12:18:22', '2020-03-27 08:48:58'),
(6, 'Promise', 'Rahman merupakan cowok yang berasal dari Jogja. Ia berwajah tampan namun berkepribadian sederhana dan lugu. Hal ini berkebalikan dengan sahabatnya yang bernama Aji. Aji, seorang cowok yang playboy namun setia kawan. Suatu hari, Aji ingin mengubah Rahman menjadi cowok yang dapat merasakan cinta dan berwawasan luas namun caranya salah.', 'Dwitasari', 'https://inc.mizanstore.com/aassets/img/com_cart/produk/covCDS-057.jpg', 1, 3, '2020-03-27 08:27:15', '2020-03-27 08:39:21'),
(7, 'Bicara Itu Ada Seninya\r\n', 'Buku bicara itu ada seninya berisi tentang pengalaman pengembangan diri, teknik komunikasi, persuasi dan negosiasi.  Buku  bersampul hitam ini akan menjawab pertanyaan: Bagaimana cara berbicara/berucap yang baik?', 'Oh Su Hyang', 'https://ssvr.bukukita.com/babacms/displaybuku/109861_f.jpg', 1, 4, '2020-03-27 08:28:02', '2020-03-27 08:42:20'),
(8, 'Sang Pangeran Dan Janissary Terakhir (kisah, kasih dan selisih d', 'Kyai Gentayu berjingkrak, menaikkan kaki depannya sambil meringkik riang dan sesekali melonjak. Surainya berkibar terentak selaras dengan tapak-tapaknya yang berkecipak. Dengan kepala mendongak, sang penunggang tetap dapat duduk tegak. Lelaki berperawakan tinggi lagi kacak itu tampak seperti sedang menan tandak. Gerak tubuhnya melenggak sesuai lenggok tunggangannya yang rancak. Di sekeliling kuda yang menjejak-jejak para pengawalnya seirama berlari hingga tombak-tombak mereka turut meliuk', 'Salim A. Fillah', 'https://ssvr.bukukita.com/babacms/displaybuku/115098_f.jpg', 1, 7, '2020-03-27 09:10:18', '2020-03-27 09:10:18'),
(9, 'Bumi Manusia', 'Roman Tetralogi Buru mengambil latar belakang dan cikal bakal nation Indonesia di awal abad ke-20. Dengan membacanya waktu kita dibalikkan sedemikian rupa dan hidup di era membibitnya pergerakan nasional mula-mula, juga pertautan rasa, kegamangan jiwa, percintaan, dan pertarungan kekuatan anonim para srikandi yang mengawal penyemaian bangunan nasional yang kemudian kelak melahirkan Indonesia modern.', 'Pramoedya Ananta Toer', 'https://cdn.gramedia.com/uploads/items/bumi-manusia-edit__w414_hauto.jpg', 1, 2, '2020-03-27 09:18:44', '2020-03-27 09:18:44'),
(10, 'Si Anak Badai', 'Badai kembali membungkus kampung kami. Kali ini aku mendongak, menatap jutaan tetes air hujan dengan riang. Inilah kami, Si Anak Badai. Tekad kami sebesar badai. Tidak pernah kenal kata menyerah.', 'Tere Liye', 'https://cdn.gramedia.com/uploads/items/9786025734939_Si-Anak-Badai__w414_hauto.jpg', 1, 2, '2020-03-27 09:20:01', '2020-03-27 09:20:01'),
(11, 'Ayat-Ayat Cinta', 'Mengisahkan seorang pemuda asal Indonesia yang menuntut ilmu di tanah Arab, Fahri, mengalami berbagai kejadian yang menguji keimanannya. Bertolak ke Mesir, Fahri menghabiskan waktunya untuk kuliah dan talaqqi atau belajar secara langsung pada Syaikh di sana.', 'Habiburrahman El Shirazy', 'https://ds393qgzrxwzn.cloudfront.net/resize/m320x450/cat1/img/images/0/bGYa8xikTO.jpg', 1, 1, '2020-03-27 09:23:35', '2020-03-27 09:23:35'),
(12, 'Galaksi Kinanthi', 'Novel yang bercerita tentang seorang gadis kecil yang datang dari sebuah dusun di daerah Gunung Kidul, Yogyakarta ini akan membawamu hanyut dalam tiap alurnya. \"Galaksi Kinanthi\", novel dengan ending plot twist ini wajib kamu baca.', 'Tasaro GK', 'https://ds393qgzrxwzn.cloudfront.net/resize/m720x480/cat1/img/images/0/umQyGqKj9Z.jpg', 1, 1, '2020-03-27 09:24:25', '2020-03-27 09:24:25'),
(13, 'A Cup Of Tarapuccino', 'Perasaan ragu seorang Tara menjelang pernikahannya dengan Raffi akan kamu temukan dalam konflik novel berjudul \"A Cup Of Tarapuccino\". Kenangan akan masa lalu Tara saat menjadi bagian dari Bread Time Bakery mengingatkannya pada Hazel. Kisah masa lalu pun dimulai dalam ingatannya saat melihat Hazel mengerjakan hal yang sama di bakery setiap pagi. Konflik berlanjut dengan sangat pelik ketika Hazel diterima bekerja di Bakery. Raffi terlihat tak terlalu menyenangi Hazel.', 'Riawani Elyta & Rika Y. Sari', 'https://ds393qgzrxwzn.cloudfront.net/resize/m320x450/cat1/img/images/0/C21spSvisy.jpg', 1, 1, '2020-03-27 09:25:02', '2020-03-27 09:25:02'),
(14, 'Yang Kedua', 'Bergenre romantis, \"Yang Kedua\", novel karya Riawani Elyta menjadi rekomendasi selanjutnya. Diawali dengan cerita tokoh yang sangat rumit, yaitu pernikahan Vienna dan Harris selama lima tahun yang tak kunjung dikaruniai anak, mendapatkan takdir barunya. Vienna mendapatkan kesempatan emas untuk berduet dengan Dave, seorang penyanyi terkenal karena dia berhasil menjuarai festival menyanyi tingkat Asia.', 'Riawani Elyta', 'https://ds393qgzrxwzn.cloudfront.net/resize/m320x450/cat1/img/images/0/wihpPDaAlt.jpg', 1, 1, '2020-03-27 09:25:52', '2020-03-27 09:25:52'),
(15, 'Bagus Solay', 'Bagus Nur Solayman', 'Bagus Nur Solayman', 'bagus.jpg', 1, 1, '2020-03-28 09:00:00', '2020-03-28 09:22:59');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id_category` int(11) NOT NULL,
  `category` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id_category`, `category`) VALUES
(1, 'Religi'),
(2, 'Fiksi'),
(3, 'Romance'),
(4, 'Pengembangan Diri'),
(5, 'Komedi'),
(6, 'Petualangan'),
(7, 'Sejarah'),
(9, 'fantasy');

-- --------------------------------------------------------

--
-- Table structure for table `loan`
--

CREATE TABLE `loan` (
  `id_loan` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_book` int(11) NOT NULL,
  `borrowed_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `loan`
--

INSERT INTO `loan` (`id_loan`, `id_user`, `id_book`, `borrowed_date`, `status`) VALUES
(1, 7, 11, '2020-03-29 18:35:28', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(40) NOT NULL,
  `fullname` varchar(40) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `fullname`, `password`, `phone`, `status`) VALUES
(7, 'solayman1a@gmail.com', 'bagus nur solay', '$2b$10$gwr8SgtG7hm8B0AVXZfPwuV.U9/bbyoVjhBgI5sz5yayf/agp4NPq', '08138989823', 1),
(8, 'lolkoklklk@gmail.com', 'bagus', '$2b$10$cs27LtTu4ZeNDaiSlmCUW.LQpAVW0hHoHHGrjOjz8MjvtRXlZ5xdy', '0818876237468', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`);

--
-- Indexes for table `loan`
--
ALTER TABLE `loan`
  ADD PRIMARY KEY (`id_loan`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `loan`
--
ALTER TABLE `loan`
  MODIFY `id_loan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
