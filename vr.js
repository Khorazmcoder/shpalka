const form = document.querySelector("form");

form.addEventListener("submit", (esn) => {
    esn.preventDefault();

    var msg = document.querySelector("input").value;
    var token = "7860723674:AAFJmqZlbM7GlRLYle7sfYqk0vPEq4hs2MQ";
    var chat_id = "252770882";
    var mymsg = `Yangi xabar %0A ${msg}`;
    var photo_url = "path/to/your/photo.jpg"; // Rasmning URL manzili

    if (msg == "") {
        alert("Siz xabar yozmadingiz!");
    } else {
        // Xabar yuborish
        let x = new XMLHttpRequest();
        var url_msg = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${mymsg}`;
        x.open("GET", url_msg, true);
        x.send();
        console.log("Xabar yuborildi");

        // Rasm yuborish
        let y = new XMLHttpRequest();
        var url_photo = `https://api.telegram.org/bot${token}/sendPhoto?chat_id=${chat_id}&photo=${photo_url}`;
        y.open("GET", url_photo, true);
        y.send();
        console.log("Rasm yuborildi");
    }
});