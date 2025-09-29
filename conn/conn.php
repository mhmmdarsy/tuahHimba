<?php
    // Koneksi ke database
    $conn = new mysqli("153.92.15.45", "u353862197_arsy", "Arsy1234@", "u353862197_galeri_museum");

    // Periksa koneksi
    if ($conn->connect_error) {
        die("Koneksi gagal: " . $conn->connect_error);
    }

    // Query untuk mengambil data slide
    $sql = "SELECT * FROM galeri_museum";
    $result = $conn->query($sql);
?>