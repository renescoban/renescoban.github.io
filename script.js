document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    var rootElement = document.documentElement

    // Show or hide the button based on scroll position
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    }

    // Scroll to the top when the button is clicked
    scrollToTopBtn.addEventListener("click", function () {
        document.body.scrollTop = 0; // For Safari
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
          })// For Chrome, Firefox, IE and Opera
    });
});





// var NS4 = (document.layers); // hangi browser?
// var IE4 = (document.all);

// var win = window;
// var n = 0;

// function findInPage(str) {

//     var txt, i, found;

//     if (str == "e")
//         return false;

//     if (NS4) {

//         if (!win.find(str))
//             while (win.find(str, false, true))
//                 n++;
//         else
//             n++;

//         if (n == 0)
//             alert("Aradığınız kelime sayfada bulunamadı.");
//     }

//     if (IE4) {
//         txt = win.document.body.createTextRange();

//         for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
//             txt.moveStart("character", 1);
//             txt.moveEnd("textedit");
//         }

//         if (found) {
//             txt.moveStart("character", -1);
//             txt.findText(str);
//             txt.select();
//             txt.scrollIntoView();
//             n++;
//         }

//         else {
//             if (n > 0) {
//                 n = 0;
//                 findInPage(str);
//             }

//             else
//                 alert("Aradığınız kelime sayfada bulunamadı.");
//         }
//     }

//     return false;
// }

// // SAYFA YÜKLEME
// function loadPage(page) {
//     // You can add more logic here to load content dynamically or navigate to a new page
//     let content = document.getElementById('content');
    
//     switch (page) {
//         case 'Eserler':
//             content.innerHTML = '<div class="m-3 mb-5 p-3 bg-slate-100 rounded-md"> <h2 class="eser-baslik text-center">Eserleri</h2> <h3 class="eser-altbaslik">Hikaye</h3> <ul class="two-column-list"> <li>1970: Ortadaki Adam</li> <li>1974: Gönül İşi</li> <li>1979: Yokuşa Akan Sular</li> <li>1981: Yoksulluk İçimizde</li> <li>1983: Ya Tahammül Ya Sefer</li> <li>1987: Bu Böyledir</li> <li>1990: Sır</li> <li>1995: Arkakapak Yazıları</li> <li>1999: Hüzün ve Tesadüf</li> <li>2000: Uzun Hikâye</li> <li>2001: Beyhude Ömrüm</li> <li>2002: Mavi Kuş</li> <li>2003: Tufandan Önce</li> <li>2004: Rüzgarlı Pazar</li> <li>2005: Chef</li> <li>2006: Menekşeli Mektup</li> <li>2007: Kapıları Açmak</li> <li>2008: Huzursuz Bacak</li> <li>2009: Tahir Sami Bey\'in Özel Hayatı</li> <li>2010: Zafer yahut Hiç</li> <li>2011: Hayat Güzeldir</li> <li>2012: Anadolu Yakası</li> <li>2013: Sıradışı Bir Ödül Töreni</li> <li>2014: Nur</li> <li>2015: Trende Bir Keman</li> <li>2015: Hesap Günü</li> <li>2016: İyiler Ölmez</li> <li>2017: Tarla Kuşunun Sesi</li> <li>2018: Sevincini Bulmak</li> </ul> <h3 class="eser-altbaslik">Deneme-İnceleme</h3> <ul class="two-column-list"> <li>1968: Sait Faik’in Hikâye Dünyası</li> <li>1972: Sabahattin Ali</li> <li>1976: Siyasi Tarih Üzerine Konuşmalar 1 - İsmail Usta</li> <li>1995: Şehir Mektupları</li> <li>1999: Akasya İle Mandolin</li> <li>2004: Yoksulluk Kitabı</li> <li>2014: Vatan Yahut İnternet</li> <li>2014: Dem Bu Demdir</li> <li>2015: Vitrinde Olmak</li> <li>2016: Bir Demet İstanbul</li> <li>2017: İlmihal Yahut Arzuhal</li> <li>2019: Fırtınayı Kucaklamak</li> <li>2019: Kalbin Sesi & Bir Hicret Risalesi</li> <li>2020: Kalbin Sesi ile Toprağa Dönüş</li> <li>2021: Akıntıya Karşı</li> <li>2021: Selâm Olsun</li> <li>2022: Mahşerin 7 Atlısı</li> </ul> <h3 class="eser-altbaslik">Çocuk Kitabı</h3> <ul class="two-column-list"> <li>2004: Yıldız Tozu</li> </ul> </div> ';
//             break;
//         case 'Galeri':
//             content.innerHTML = '<div class=" m-3 p-5 bg-slate-200 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> <!-- Image 1 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/beyhude-ömrüm.png" alt="beyhude-ömrüm" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik ">Beyhude Ömrüm</h4> <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nemo.</p> </div> <!-- Image 2 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/hüzün-ve-tesadüf.png" alt="hüzün-ve-tesadüf" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik ">hüzün-ve-tesadüf</h4> </div> <!-- Image 3 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/iyiler-ölmez.png" alt="iyiler-ölmez" class="w-56 h-96 object-cover mx-auto"> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 4 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/mavi-kus.png" alt="mavi-kus" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 5 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/ruzgarlı-pazar.png" alt="ruzgarlı-pazar" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 6 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/sır.png" alt="sır" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 7 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/tufandan-once.png" alt="tufandan-önce" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 8 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/uzun-hikaye.png" alt="uzun-hikaye" class="w-56 h-96 object-cover mx-auto"> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 9 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/ya-tahammül-yasefer.png" alt="ya-tahammül-yasefer" class="w-56 h-96 object-cover mx-auto"> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 10 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/yoksulluk-icimizde.png" alt="yoksulluk-icimizde" class="w-56 h-96 object-cover mx-auto"> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> </div>';
//             break;
//         case 'Koku':
//             content.innerHTML = '<div class="m-3"> </div> ';
//             break;
//         case 'Yazar':
//         
//             break;
//         default:
//             content.innerHTML = '<img src="./fotolar/mkutlu-removebg-preview.png" alt="" class="foto ">';
//     }
// }


