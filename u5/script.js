function switchF() {
    if (document.getElementById('loginInfo')) {

        if (document.getElementById('loginInfo').style.display == 'none') {
            document.getElementById('loginInfo').style.display = 'block';
            document.getElementById('registerInfo').style.display = 'none';
        }
        else {
            document.getElementById('loginInfo').style.display = 'none';
            document.getElementById('registerInfo').style.display = 'block';
        }
    }
}
