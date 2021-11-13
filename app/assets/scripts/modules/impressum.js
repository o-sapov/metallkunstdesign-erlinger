// function displayImpressum() {
//     var impressum = document.querySelector('.impressum');
//     if (impressum.style.display === "none") {
//         impressum.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

var impressum = document.querySelectorAll(".impressum");

impressum[1].addEventListener("click", function (){

    document.querySelector(".main").innerHTML = String.raw`<div class="wrapper">
    <h1><b>Impressum</b></h1>
    <p>Alfred Johann Erlinger<br/>5133 Gilgenberg am Weilhart<br/>Mairhof, 16
    <p>

    <p>
        Erzeugung von kunstgewerblichen Zier- und Schmuckgegenständen aus unendlen Metallen, Draht, Gips, Beton, Holz,
        Kunststoff, Leder, textillen Materialien, Stroh, Papier und Glaselementen, Gemüse und Obst sowie durch Fädeln
        von Edelsteinen, Silber-, Glas-, Kunstsfoff- und Filzelementen und das Bemalen und das Verzieren von Holz,
        Keramik, Porzellan, Seide, Textilien, Billets und Wachswaren.

    </p>

    <p>Tel.: +43 7728 79116<br/>Mob. +43 664 369 1802<br/>E-mail:
        <a href="mailto:fred.erlinger@gmail.com"
           class="email">fred.erlinger@gmail.com</a></p>
    <p>Mitglied der WKÖ.</p>
    <p>Gewerbeordnung: www.ris.bka.gv.at<br/>
        Gewerbebehörde: Bezirkshauptmannschaft Braunau am Inn</p>
    <p>Meisterprüfung für Maschinenbau-Betriebstechnik abgelegt in
        Österreich</p>
    <p>


        Verbraucher haben die Möglichkeit,
        Beschwerden an die Online-
        Streitbeilegungsplattform der EU zu richten:
        <a href="http://ec.europa.eu/odr" target="_blank">http://ec.europa.eu/odr</a>.
        Sie können allfällige Beschwerde auch an die
        oben angegebene E-Mail-Adresse richten.</p>
</div>`
}
);
