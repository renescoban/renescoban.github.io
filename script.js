var NS4 = (document.layers); // hangi browser?
var IE4 = (document.all);

var win = window;
var n = 0;

function findInPage(str) {

    var txt, i, found;

    if (str == "e")
        return false;

    if (NS4) {

        if (!win.find(str))
            while (win.find(str, false, true))
                n++;
        else
            n++;

        if (n == 0)
            alert("Aradığınız kelime sayfada bulunamadı.");
    }

    if (IE4) {
        txt = win.document.body.createTextRange();

        for (i = 0; i <= n && (found = txt.findText(str)) != false; i++) {
            txt.moveStart("character", 1);
            txt.moveEnd("textedit");
        }

        if (found) {
            txt.moveStart("character", -1);
            txt.findText(str);
            txt.select();
            txt.scrollIntoView();
            n++;
        }

        else {
            if (n > 0) {
                n = 0;
                findInPage(str);
            }

            else
                alert("Aradığınız kelime sayfada bulunamadı.");
        }
    }

    return false;
}

// SAYFA YÜKLEME
function loadPage(page) {
    // You can add more logic here to load content dynamically or navigate to a new page
    let content = document.getElementById('content');
    
    switch (page) {
        case 'Eserler':
            content.innerHTML = '<div class="m-3 mb-5 p-3 bg-slate-100 rounded-md"> <h2 class="eser-baslik text-center">Eserleri</h2> <h3 class="eser-altbaslik">Hikaye</h3> <ul class="two-column-list"> <li>1970: Ortadaki Adam</li> <li>1974: Gönül İşi</li> <li>1979: Yokuşa Akan Sular</li> <li>1981: Yoksulluk İçimizde</li> <li>1983: Ya Tahammül Ya Sefer</li> <li>1987: Bu Böyledir</li> <li>1990: Sır</li> <li>1995: Arkakapak Yazıları</li> <li>1999: Hüzün ve Tesadüf</li> <li>2000: Uzun Hikâye</li> <li>2001: Beyhude Ömrüm</li> <li>2002: Mavi Kuş</li> <li>2003: Tufandan Önce</li> <li>2004: Rüzgarlı Pazar</li> <li>2005: Chef</li> <li>2006: Menekşeli Mektup</li> <li>2007: Kapıları Açmak</li> <li>2008: Huzursuz Bacak</li> <li>2009: Tahir Sami Bey\'in Özel Hayatı</li> <li>2010: Zafer yahut Hiç</li> <li>2011: Hayat Güzeldir</li> <li>2012: Anadolu Yakası</li> <li>2013: Sıradışı Bir Ödül Töreni</li> <li>2014: Nur</li> <li>2015: Trende Bir Keman</li> <li>2015: Hesap Günü</li> <li>2016: İyiler Ölmez</li> <li>2017: Tarla Kuşunun Sesi</li> <li>2018: Sevincini Bulmak</li> </ul> <h3 class="eser-altbaslik">Deneme-İnceleme</h3> <ul class="two-column-list"> <li>1968: Sait Faik’in Hikâye Dünyası</li> <li>1972: Sabahattin Ali</li> <li>1976: Siyasi Tarih Üzerine Konuşmalar 1 - İsmail Usta</li> <li>1995: Şehir Mektupları</li> <li>1999: Akasya İle Mandolin</li> <li>2004: Yoksulluk Kitabı</li> <li>2014: Vatan Yahut İnternet</li> <li>2014: Dem Bu Demdir</li> <li>2015: Vitrinde Olmak</li> <li>2016: Bir Demet İstanbul</li> <li>2017: İlmihal Yahut Arzuhal</li> <li>2019: Fırtınayı Kucaklamak</li> <li>2019: Kalbin Sesi & Bir Hicret Risalesi</li> <li>2020: Kalbin Sesi ile Toprağa Dönüş</li> <li>2021: Akıntıya Karşı</li> <li>2021: Selâm Olsun</li> <li>2022: Mahşerin 7 Atlısı</li> </ul> <h3 class="eser-altbaslik">Çocuk Kitabı</h3> <ul class="two-column-list"> <li>2004: Yıldız Tozu</li> </ul> </div> ';
            break;
        case 'Galeri':
            content.innerHTML = '<div class=" m-3 p-5 bg-slate-200 rounded-md grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> <!-- Image 1 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/beyhude-ömrüm.png" alt="beyhude-ömrüm" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik ">Beyhude Ömrüm</h4> <p class="p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nemo.</p> </div> <!-- Image 2 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/hüzün-ve-tesadüf.png" alt="hüzün-ve-tesadüf" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik ">hüzün-ve-tesadüf</h4> </div> <!-- Image 3 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/iyiler-ölmez.png" alt="iyiler-ölmez" class="w-56 h-96 object-cover mx-auto"> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 4 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/mavi-kus.png" alt="mavi-kus" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 5 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/ruzgarlı-pazar.png" alt="ruzgarlı-pazar" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 6 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/sır.png" alt="sır" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 7 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/tufandan-once.png" alt="tufandan-önce" class="w-56 h-96 object-cover mx-auto "> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 8 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/uzun-hikaye.png" alt="uzun-hikaye" class="w-56 h-96 object-cover mx-auto"> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 9 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/ya-tahammül-yasefer.png" alt="ya-tahammül-yasefer" class="w-56 h-96 object-cover mx-auto"> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> <!-- Image 10 --> <div class="imagecontainer"> <img src="./fotolar/kapaklar/yoksulluk-icimizde.png" alt="yoksulluk-icimizde" class="w-56 h-96 object-cover mx-auto"> <h4 class="kitap-baslik">hüzün-ve-tesadüf</h4> </div> </div>';
            break;
        case 'Koku':
            content.innerHTML = '<div class="m-3"> </div> ';
            break;
        case 'Yazar':
            content.innerHTML = '<div class=" p-3 items-start flex flex-col sm:flex-row "> <section class="p-3 rounded-md flex-auto w-60 bg-slate-100"> <img src="" alt=""> <h2 class="eser-baslik text-center">Mustafa Kutlu</h2> <p class="text-center eser-altyazı">(d. 6 Mart 1947 / ö. -)</p> <div class="eser-altalan"> <h2 class="eser-altbaslik">Hayatı </h2> <p class="eser-paragraf">Mustafa Kutlu, 1945’te Erzincan’da doğdu. Erzincan Lisesi’ni (1963), Erzurum Atatürk Üniversitesi Edebiyat Fakültesi Türk Dili ve Edebiyatı bölümünü bitirdi (1968). Tunceli ve İstanbul’da edebiyat öğretmenliği yaptı. Öğretmenlikten ayrılarak (1974) Dergâh Yayınları’nda idareci olarak çalışmaya başladı. Hareket ve Dergâh dergileriyle, Türk Dili Edebiyatı Ansiklopedisi’nin yayın faaliyetlerini yürüttü. Senaryolar yazdı. Televizyonda sohbet programları yaptı. Türk hikâyeciliğinde yarım asırdır varlık gösteren Mustafa Kutlu, kendine has üslubuyla özgün bir anlayışa sahiptir. Türk edebiyatında köyden kente göç, kentteki insanın sorunları gibi son derece önemli konuları eserlerine alan yazar, Türk toplumunun temel sosyolojik meselelerini “bir oturuşta yazma” kıvraklığıyla dile getirir. Mustafa Kutlu, Nurettin Topçu’nun hareket felsefesinden etkilenir. Hikâyeye Nurettin Topçu çizgisinde başlayan Mustafa Kutlu, bu yolu geliştiren ve çeşitlendiren bir hikâye dünyası kurarak ilgileri üzerinde tutmayı başarır. 1960’ların sonunda yazmaya başlayan Mustafa Kutlu, bu yıllarda dönemin varoluşçuluk, bunaltı gibi akımlarından uzak durur. Öykücülerin önemli bir bölümü bu akımları benimsemesine karşın o, bu akımları “yerlilik” bağlamında uygun görmez. Mustafa Kutlu, bu dönemdeki bir başka yönelim olan bilinç akışı ile ilgili olumsuz düşüncelerini de şu ifadelerle dile getirir: “Dili zorlayan, çoğu kez bozan, yeniden yapan, zamanı istediği gibi kullanan, şuur akımına rağbet eden, olağan ve olağan dışıyı aynı anda elde tutan, konudan çok işlemeye değer veren bir tutum hikâyemize hâkim olmuştur. Bu hâkim tutumu kötüye kullananlar çoğunluktadır. Sahte mallar, hakiki değerleri gölgelemiştir.” Mustafa Kutlu; modaya, gelir geçer değerlere itibar etmeyeceğini ifade ederek Türk öykücülüğünde kendisine farklı bir yer biçer. Mustafa Kutlu’nun tüm hikâyelerinde coğrafya olarak İstanbul veya Anadolu’nun bulunduğu görülür. Dünyada ve ülkemizde yaşanan birçok gelişme insanın ve toplumun hayata bakış açılarını ve yaşama biçimlerini değiştirmekte ve dönüştürmektedir. Böylece geleneksel yapıdan modern yapıya evrilen toplum ve bireyin gelenekle irtibatını sağlayacak unsurlar da yok olmaktadır. Hikmetli ve sade bir üslupla kimi zaman tasavvufun yoğun olarak işlendiği eserler ortaya koyan Mustafa Kutlu, bu anlamda geçmişle günümüz arasında kültürel bir bağ kurmak istemektedir. Mustafa Kutlu’nun hikâyeciliği dört dönem altında incelenebilir: 1. Dönem (1968 – 1979): Ortadaki Adam ve Gönül adlı eseri bu dönemin ürünleridir. Bu dönemde, yazarın Sait Faik ve Sabahattin Ali’nin etkisinde olduğu gözlemlenir. 2. Dönem (1979 – 1995): Yazarın geleneksel üsluptan hareket ederek kendi tarzını bulduğu dönemdir. Yokuşa Akan Sular, Yoksulluk İçimizde, Ya Tahammül Ya Sefer, Bu Böyledir ve Sır bu dönemin ürünleridir. Bu dönem hikâyeleri özellikle kıssa geleneğinden faydalanılarak kurgulanmıştır. Kitaplardaki hikâyelerin her biri müstakil birer hikâye olduğu gibi hikâyeler kitap hâlinde de bir bütünlük oluşturur. 3. Dönem (1995 – 2000): Yazarın hikâyecilik serüveninde bir çeşit ara dönem olarak nitelendirilebilir. Bu dönem eserleri Hüzün ve Tesadüf ile Arka Kapak Yazıları’dır. Yazarın bu iki eserinde, çoğu hikâye olmakla birlikte denemeye yakın yazılardır. 4. Dönem (2000 – 2007): Bu dönem çocukluk, aşk, çevre, köy-kasaba-varoş hayatı gibi konuların daha çok işlendiği dönemdir. Bu dönemde yazar, hikâyelerini genel olarak uzun hikâye formunda kaleme almıştır. Uzun Hikâye, Beyhude Ömrüm, Tufandan Önce, Mavi Kuş, Rüzgârlı Pazar, Chef, Menekşeli Mektup, Kapıları Açmak bu dönemin ürünleridir. </p> </div> </section> </div>  ';
            break;
        default:
            content.innerHTML = '<img src="./fotolar/mkutlu-removebg-preview.png" alt="" class="foto ">';
    }
}