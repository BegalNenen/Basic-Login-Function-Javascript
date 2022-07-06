function Login() {
        var done = 0;
        var username = document.login.username.value;
        username = username.toLowerCase();
        var password = document.login.password.value;
        password = password.toLowerCase();
        if (username == "user1" || username == "user2" && password == "pw-usr1" || password == "pw-usr2") {
          alert("Anda berhasil login");
// Kalo punya page rahasia, bisa gunain window.open
        } else if (done == 0) {
          alert("Sepertinya username atau password yang kamu masukan salah, silahkan coba lagi.");
       }
     }
