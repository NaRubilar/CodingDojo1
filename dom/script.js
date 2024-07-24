

document.addEventListener("DOMContentLoaded", function() {
    var like1 = document.getElementById("like1");
    var label1 = document.getElementById("label1");
    var contador1 = 0;

    like1.addEventListener("click", function() {
        contador1++;
        label1.textContent = contador1 + " like(s)";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var like2 = document.getElementById("like2");
    var label2 = document.getElementById("label2");
    var contador2 = 0;

    like2.addEventListener("click", function() {
        contador2++;
        label2.textContent = contador2 + " like(s)";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var like3 = document.getElementById("like3");
    var label3 = document.getElementById("label3");
    var contador3 = 0;

    like3.addEventListener("click", function() {
        contador3++;
        label3.textContent = contador3 + " like(s)";
    });
});