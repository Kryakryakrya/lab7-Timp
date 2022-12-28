var HidenBtns = document.getElementsByClassName("hide_btn");

for (var i = 0, len = HidenBtns.length - 1; i <= len; i++) {
    HidenBtns[i].addEventListener("click", function (event) {
        id = event.target.id - 1;
        if (HidenBtns[id].name == "Shown") {
            document.forms.Archive.getElementsByClassName("article-content")[id].style.display = "none";
            HidenBtns[id].name = "Hiden";
            HidenBtns[id].value = "Показать";
        }
        else {
            document.forms.Archive.getElementsByClassName("article-content")[id].style.display = "block";
            HidenBtns[id].name = "Shown";
            HidenBtns[id].value = "Скрыть";
        }
    });
}
