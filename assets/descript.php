<?php
    $base_url = '../'; 
    $hide_koleksi = true;
    $hide_lokasi = true;
    include 'navbar.php';

    include '../conn/conn.php';
    // Ambil ID dari URL
    $id = isset($_GET['id']) ? intval($_GET['id']) : 0;

    // Query untuk mengambil data berdasarkan ID
    $sql = "SELECT * FROM galeri_museum WHERE id = $id";
    $result = $conn->query($sql);

    // Periksa apakah data ditemukan
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
    } else {
        die("Data tidak ditemukan.");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $row['judul']; ?></title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"/>
</head>
<body>
    <section class="py-16 px-6 content blur-md opacity-0 transition-all duration-500">
        <div class="max-w-7xl mx-auto text-start mt-3 px-30">
            <div class="flex items-start space-x-6 pt-4">
                <!-- Gambar di sebelah kiri -->
                <img src="../assets/images/<?php echo $row['gambar']; ?>" alt="<?php echo $row['judul']; ?>" class="w-1/3 rounded-lg shadow-lg object-cover" style="aspect-ratio: 2 / 3;">

                <!-- Paragraf di sebelah kanan -->
                <div class="flex flex-col space-y-5 text-black text-justify">
                    <h2 class="text-7xl font-extrabold mb-4"><?php echo $row['judul']; ?></h2>
                    <?php echo $row['deskripsi']; ?>
                </div>

            </div>
            <?php if ($id == 1): ?>
                <img src="../assets/images/ulin2.jpg" alt="Ulin" class="w-full mt-10 rounded-lg shadow-lg">
            <?php endif; ?>
        </div>
    </section>
    
    <?php include 'footer.html'?>
    <script src="../js/script.js"></script>
</body>
</html>