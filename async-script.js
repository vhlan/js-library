// Kode membuat elemen <script> baru, menetapkan sumber skrip ke 'script.js', 
// dan memuatnya secara asinkron atau deferred ke dalam bagian <head> dokumen.
// bisa digunakan untuk memanggil script external pada kondisi tertentu

var script = document.createElement('script');
script.src = 'script.js';
script.async = true; // atau script.defer = true;
document.head.appendChild(script);
