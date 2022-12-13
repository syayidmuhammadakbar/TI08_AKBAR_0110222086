function login() {
    let input_text =document.getElementById('input_text')
    let input_password = document.getElementById('input_password')

    if (input_text.toLowerCase()=="ahmad2017" && input_password.toLowerCase()=="integrity") {
        alert='selamat datang'
        form.setAttribute("action", "family.html");
        alert("Login Berhasil")
    }
    else{
        alert=('username atau password anda salah')
    }


}