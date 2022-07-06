function Login() {
        var done = 0;
        var username = document.login.username.value;
        username = username.toLowerCase();
        var password = document.login.password.value;
        password = password.toLowerCase();
        if (username == "user" && password == "pw-user") {
          alert("Anda berhasil login");
// Kalo punya page rahasia, bisa gunain window.open
        } else if (done == 0) {
          Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Sepertinya username atau password yang kamu masukan salah, coba lagi!'
});
       }
     }
