// Buatlah fungsi untuk menangani permintaan AJAX
function kirimPermintaanAJAX() {
    // Tentukan URL yang akan diakses
    var url = 'url_tujuan.php';

    // Konfigurasikan objek AJAX
    $.ajax({
        type: 'GET', // Metode HTTP (GET, POST, PUT, DELETE, dll.)
        url: url, // URL tujuan
        dataType: 'json', // Tipe data yang diharapkan dari server
        success: function(data) {
            // Fungsi yang akan dijalankan jika permintaan berhasil
            console.log('Data berhasil diterima:', data);
        },
        error: function(xhr, status, error) {
            // Fungsi yang akan dijalankan jika permintaan gagal
            console.error('Gagal mengirimkan permintaan AJAX:', status, error);
        }
    });
}

// Panggil fungsi untuk mengeksekusi AJAX
kirimPermintaanAJAX();
