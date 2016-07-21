function DownloadingPriceUnblock(event){
    var http = new XMLHttpRequest(), f = this;
        if (http.readyState == 4 && http.status == 200) {
            document.getElementById("#downloadPrice"). removeAttribute("active");
}
}
/**
 * Created by Окси on 20.07.2016.
 */
