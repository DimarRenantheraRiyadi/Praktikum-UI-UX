function cekLogin() {
    // Ambil nilai input
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // Username dan password yang ditentukan
    let userBenar = "ahmad2017";
    let passBenar = "integrity";

    // Cek login
    if (user === userBenar && pass === passBenar) {
        document.getElementById("hasil").innerHTML = "Login Sukses";
    } else {
        alert("Username atau password salah!");
    }
}
