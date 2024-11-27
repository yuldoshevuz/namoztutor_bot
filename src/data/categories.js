const audios = require('./audios')

const categories = [
    {
        category: "POKLANISH",
        items: [
            {
                sub_category: "TAHORAT_NIMA",
                items: [
                    "<b>Tahorat</b>\n\n"+
                    "Islom dini ham vujud, ham qalb tozaligiga katta ahamiyat bergan bir dindir. Sevikli payg'ambarimiz sallallohu alayhi vasallam bizga shunday nasihat qiladilar: <b>«Kuchingiz yetguncha tozalikka rioya etingiz, chunki Alloh taolo Islom dinini tozalik ustiga bino qildi. Jannatga ham faqat toza bo'lganlar kiradi»</b> («Jomius-sag'ir», 1-jild, 133-bet).\n\n"+
                    "Alloh taolo Qur'oni karimning Moida surasi 6-oyatida shunday marhamat qiladi (mazmuni): «<b>Ey imon keltirganlar! Namoz (</b>o'qish) <b>ga turar ekansiz, albatta, yuzlaringizni, qo'llaringizni tirsaklarigacha yuvingizlar, boshlaringizga mas'h tortingizlar va oyoqlaringizni (</b>yuvingizlar)<b>!».</b>\n\n"+
                    "Binobarin, dinimizning ustuni hisoblangan namozni ado etmoq uchun albatta tahoratli bo'lish shartdir."
                ]
            },
            {
                sub_category: "TAHORAT_OLISH_TARTIBI",
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Tahorat olish uchun, iloji bo'lsa, qiblaga yuzlaniladi. <b>«A'uzu billahi minash-shaytonir rojiym. Bismillahir rohmanir rohiym, tahorat olmoqlikka niyat qildim»</b>, deb niyat qilinadi.\n\n"+
                            "<b>Eslatma:</b> Tirnoqlarga surilgan lak, teridagi har xil bo'yoqlar ketkazilmasdan olingan tahorat sahih (haqiqiy) hisoblanmaydi.\n\n"+
                            "Tahorat olayotganda gapirmaslik, ehtiyojdan ortiq suv ishlatmaslik, ust-boshga suv sachratmaslik kerak.",
                        media: "https://t.me/botcontents/2"
                    },
                    {
                        text: "<b>2. Qo'llarni yuvish</b>\n\n"+
                            "Qo'llar bandigacha uch marta yuviladi. Barmoqda uzuk bo'lsa, qimirlatib, ostiga suv yugurtiriladi. Barmoqlar bir birining orasiga kiritiladi.",
                        media: "https://t.me/botcontents/3"
                    },
                    {
                        text: "<b>3. Og'iz chayish</b>\n\n"+
                            "Tishlar misvok yoki tish yuvish pastasi bilan, yoki qo'l bilan ishqalab yuviladi. O'ng qo'lda suv olinib, og'iz uch marta g'arg'ara qilib chayiladi",
                        media: "https://t.me/botcontents/4"
                    },
                    {
                        text: "<b>4. Burunni chayish</b>\n\n"+
                            "Burunga o'ng qo'l bilan uch marta suv tortilib, chap qo'l bilan qoqib tozalanadi.",
                        media: "https://t.me/botcontents/5"
                    },
                    {
                        text: "<b>5. Yuzni yuvish</b>\n\n"+
                            "Yuz uch marta yuviladi. Yuzning chegarasi <b>uzunasiga</b> soch chiqqan joydan jag'ning ostigacha <b>kengligi</b> esa ikki quloq yumshog'ining orasigacha bo'lgan o'rindir.",
                        media: "https://t.me/botcontents/6"
                    },
                    {
                        text: "<b>6. Qo'llarni tirsakgacha yuvish</b>\n\n"+
                            "Avval o'ng qo'l, keyin esa chap qo'l tirsak bilan qo'shib yuviladi.",
                        media: "https://t.me/botcontents/7"
                    },
                    {
                        text: "<b>7. Boshga mas'h tortish</b>\n\n"+
                            "Hovuchga suv olib, to'kib tashlab, - ho'li bilan boshning hamma qismiga bir marta mas'h tortiladi.",
                        media: "https://t.me/botcontents/8"
                    },
                    {
                        text: "<b>8. Quloq va bo'yinga mas'h tortish</b>\n\n"+
                            "Ko'rsatkich barmoq bilan quloq ichiga mas'h tortib, bosh barmoq bilan esa quloq orqasi mas'h qilinadi.\n\n"+
                            "Ikkala kaftning orqasi bilan bo'yin mas'h qilinadi.",
                        media: "https://t.me/botcontents/9"
                    },
                    {
                        text: "<b>9. Oyoqlarni yuvish</b>\n\n"+
                            "Chap oyoq ham shu tarzda uch marta yuviladi.",
                        media: "https://t.me/botcontents/10",
                        end: true
                    }
                ]
            },
            {
                sub_category: "TAHORATNI_BUZADIGAN_HOLLAR",
                items: [
                    "<b>Tahoratni buzadigan hollar</b>\n\n"+
                    "1. Badanning biror joyidan qon yoxud yiring chiqib oqishi.\n"+
                    "2. Og'iz to'lib qusish.\n"+
                    "3. Kichik yo katta hojat.\n"+
                    "4. Yel chiqishi.\n"+
                    "5. Milk qonab, tupurganda tupuk rangining qizil bo'lishi.\n"+
                    "6. Hushdan ketish.\n"+
                    "7. Namoz o'qiyotib, yonidagi odam eshitadigan darajada kulish."
                ]
            },
            {
                sub_category: "G'USL",
                items: [
                    "<b>G'usl</b>\n\n"+
                    "Uyquda ehtilom bo'lib qolinganida, jinsiy aloqadan keyin hamda ayollar hayz va nifos holatidan chiqishgach, g'usl (butun badanni suv bilan ishqalab yuvish) farzdir.\n\n"+
                    "Bundan tashqari, har juma va hayit namozlari oldidan g'usl qilish sunnat — Payg'ambarimiz sollallohu alayhi va sallam bajargan amallardandir.\n\n"+
                    "<b>G'uslning farzlari:</b>\n\n"+
                    "1. Og'izga suv olib g'arg'ara qilish.\n"+
                    "2. Burunga achishtirguncha suv tortish.\n"+
                    "3. Butun badanni tozalab yuvish.\n\n"+
                    "<b>G'usl quyidagi tartibda qilinadi:</b>\n\n"+
                    "1. «Bismillahir rohmanir rohiym» deyiladi va g'uslga niyat qilinadi:\n\n"+
                    "<b>«Navaytu an ag'tasila g'uslan minal janabati raf'an lil hadasi va istibahatan lis-solati taqorruban minallohi ta'ala».</b>\n\n"+
                    "Ma'nosi: Nopoklikni ketkazish, namoz o'qishni joiz etish hamda Allohga yaqinlik istab g'uslni niyat qildim.\n\n"+
                    "2. Qo'llar yuvilgach, badan maniy yoxud boshqa nopok narsalardan tozalanadi.\n"+
                    "3. Belgilangan tartibda tahorat olinadi. Avval boshga, keyin o'ng va chap yelkaga suv quyilib, butun badan yaxshilab yuviladi. Bu yuvinishda badanda ignaning uchiday quruq joy qolsa ham, g'usl mukammal olinmagan hisoblanadi.\n\n"+
                    "G'uslga ehtiyojmand kishi og'zi va burnini chayib, so'ng cho'milsa ham, g'usl olgan hisobiga o'tadi."
                ]
            },
            {
                sub_category: 'TAYAMMUM',
                items: [
                    "<b>Tayammum</b>\n\n"+
                    "Alloh taolo Niso surasining 43-oyatida shunday marhamat qiladi (mazmuni): «<b>Bordiyu betob yo safarda bo'lsangizlar yoki sizlardan birortangiz hojatxonadan chiqqan bo'lsa yoxud xotinlaringiz bilan yaqinlik qilgan bo'lsangiz-u suv topa olmasangiz, pokiza yer (</b>tuproq, tosh, qum, chang kabilar) <b>bilan tayammum qilib, yuzlaringiz va qo'llaringizga surting. Albatta, Alloh avf etuvchi va kechiruvchidir».</b>"+
                    "Tayammum qilishda tahoratga yoki g'uslga ham niyat qilinadi. Har ikkisini qo'shib niyat qilish ham mumkin.\n\n"+
                    "<b>Tayammum olish tartibi quyidagichadir:</b>\n\n"+
                    "1. Yenglarni tirsaklarigacha shimarib «Tahorat (yoki g'usl) uchun tayammum olishga niyat qildim», deb ko'ngildan o'tkaziladi.\n"+
                    "2. «A'uzu billahi minash-shaytonir rojiym. Bismillahir rohmanir rohiym», deyiladi va qo'llar, barmoqlari ochiq holda, tuproq yoki tuproq jinsidan bo'lgan biror narsaga bir marta uriladi.\n"+
                    "3. Qo'llarning ichi (kaft) bilan yuzga mas'h tortiladi.\n"+
                    "4. Qo'llarni ikkinchi bor tuproq yoki tuproq jinsidan bo'lgan narsaga urib, chap qo'lning kafti bilan o'ng qo'lga tirsagi bilan qo'shib, o'ng qo'l kafti bilan esa chap qo'lga ayni tarzda mas'h etiladi.\n\n"+
                    "<b>Tayammumni buzadigan hollar:</b>\n\n"+
                    "1. Tahoratga yaroqli suv topishi.\n"+
                    "2. Badandagi yara yoki (boshqa) uzr tufayli tayammum olgan kishidan bu holatlarning ketishi.\n"+
                    "3. Tahoratni buzadigan hollar tayammumni ham buzadi."
                ]
            }
        ]
    },
    {
        category: "ERKAKLAR_UCHUN_NAMOZ",
        items: [
            {
                sub_category: "AZON",
                items: [
                    {
                        start: true,
                        text: "<b>Azon va Iqomat</b>\n\n"+
                            "Azon namoz vaqti kirganidan ogohlantiruvchi, namozga chorlovchi chaqiriqdir. Kundalik besh vaqt namoz va juma namozlari uchun azon hamda iqomat aytish ta'kidlangan sunnatdir.\n\n"+
                            "<b>Azon - namoz vaqti kirganidan so'ng aytiladi.</b>\n\n"+
                            "<i>Namozni uyda o'qiydigan kishi yaqin atrofdan azon ovozini eshitmasa yoki yaqin atrofda masjid bo'lmasa, azon aytishi sunnatdir.</i>\n\n"+
                            "<b>Iqomat - bevosita farz namozni boshlashdan oldin aytiladi.</b>\n\n"+
                            "Farz namozidan oldin iqomat aytish sunnat amaldir\n\n"+
                            "Qazo namozlari uchun azon va iqomat aytiladi. Hayit namozlari hamda janoza namoziga azon va iqomat aytilmaydi.\n\n"+
                            "Junub kishining azon va iqomat aytishi, aqldan ozgan, fosiq, mast, tahoratsiz kishilar, aqlsiz bolalar va ayollarning azon aytishlari makruhdir. Shuningdek juma namozidagi ikkinchi azondan boshqa azonlarni masjid ichida turib aytish ham makruhdir.",
                        media: 'https://t.me/botcontents/48'
                    },
                    {
                        text: "<b>Azon va iqomat</b>\n\n"+
                            "<b>SAVOL: Yolg'iz namoz o'qiganda ham azon va takbir aytib namoz o'qish kerakmi?</b>\n\n"+
                            "Javob: <i>Saraxsiyning <b>«Mabsut»</b> kitobida hadis keltirilgan bo'lib, uning mazmuni shunday: «Kim ochiq yerda azon va iqomat aytib namoz o'qisa, mag'rib va mashriq orasidagi farishtalar u bilan qo'shilib namoz o'qiydilar. Azon va iqomat aytmay namoz o'qigan kishi bilan esa, faqat ikki farishta birga namoz o'qiydi».</i>",
                        media: 'https://t.me/botcontents/48'
                    },
                    {
                        text: "<b>Azon aytish tartibi</b>\n\n"+
                            "Azon namoz vaqti kirgach, tahorat bilan, qiblaga yuzlanib, tik turgan holda, ikki qo'l ko'rsatkich barmog'ini quloq ichiga qo'yib baland ovozda, dona-dona qilib aytiladi.\n\n"+
                            "Azon va iqomatda <b>«Alloh»</b> lafzidagi <b>«a»</b> tovushini va <b>«akbar»</b> lafzidagi birinchi va ikkinchi tovushlarni cho'zib aytish <b>qo'pol xatodir.</b> Qasddan bunday aytgan kishining iymoni xatarda qoladi.\n\n"+
                            "Muazzin <b>\"Hayya 'alas-solah\"</b> kalimasida boshini o'ng tarafga, <b>\"Hayya 'alal falah\"</b> kalimasida chap tarafga buradi.\n\n"+
                            "Azonni eshitgan kishi ishdan, masjiddan boshqa tomonga yurishdan, so'zlashdan to'xtaydi. Muazzinning ortidan azon kalimalarini aytib turadi. Muazzin <b>\"Hayya 'alas-solah\"</b>, <b>\"Hayya 'alal falah\"</b> deganida <b>\"Laa havla va laa quvvata illaa billahil 'aliyyil a'ziym\"</b> deydi.\n\n"+
                            "Safarda va jome' masjidlarida azon va iqomatni tark qilish makruh, biroq shahar ichidagi xonadonlarda ularni tark etish makruh emas.",
                        media: 'https://t.me/botcontents/48'
                    },
                    {
                        text: "<b>Iqomat aytish tartibi</b>\n\n"+
                            "Iqomat - bevosita farz namozni boshlashdan oldin, azon singari aytiladi.",
                        media: 'https://t.me/botcontents/48'
                    },
                    {
                        text: "<b>Azon</b>\n\n"+
                            "<i>Allohu akbar!</i>\n"+
                            "<i>Allohu akbar!</i>\n"+
                            "<i>Allohu akbar!</i>\n"+
                            "<i>Allohu akbar!</i>\n\n"+
                            "<i>Ashhadu alla ilaha illalloh!</i>\n"+
                            "<i>Ashhadu alla ilaha illalloh!</i>\n"+
                            "<i>Ashhadu anna Muhammadar rasululloh!</i>\n"+
                            "<i>Ashhadu anna Muhammadar rasululloh!</i>\n\n"+
                            "<i>Hayya 'alas-solah!</i>\n"+
                            "<i>Hayya 'alas-solah!</i>\n\n"+
                            "<i>Hayya 'alal falah!</i>\n"+
                            "<i>Hayya 'alal falah!*</i>\n\n"+
                            "<i>Allohu akbar!</i>\n"+
                            "<i>Allohu akbar!</i>\n\n"+
                            "<i>La ilaha illalloh.</i>\n\n"+
                            "Bomdod azonida bu so'zlardan keyin ikki marta <b>«As-solatu xoyrum minan-navm!» - </b>«Namoz uyqudan afzaldir!» deb qo'shib qo'yiladi.\n\n"+
                            "<b>Azon aytib bo'lingach, uning duosi o'qiladi..</b>",
                        audios: [ audios.azon ],
                        media: 'https://t.me/botcontents/48'
                    },
                    {
                        text: "<b>Azon duosi</b>\n\n"+
                            "<b>Allohumma robba hazihid-da'vatit-tammah. Vas-solatil qoimah, ati Muhammadanil vasiylata val faziylah. Vad-darojatal 'aliyatar rofi'a. Vab'as-hu maqomam mahmudanillaziy va'adtah. Varzuqna shafa-'atahu yavmal qiyamah. Innaka la tuxliful mi'ad!</b>\n\n"+
                            "<b>Ma'nosi:</b> Ushbu komil da'vatning, hozir qoim bo'lgan namozning Parvardigori, ey Alloh! Muhammadga (s.a.v.) vasila, fazilat va baland oliy daraja ato etgin. Uni O'zing va'da qilgan maqtovli maqomda tiriltirgin. Bizga Qiyomat kunida Uning shafoatini nasib et. Albatta, Sen va'daga xilof qilmassan.",
                        audios: [ audios.azonduo ],
                        media: 'https://t.me/botcontents/49'
                    },
                    {
                        end: true,
                        text: "<b>Iqomat takbiri</b>\n\n"+
                            "Iqomatning so'zlari ham azonniki kabidir. Faqat \"Hayya 'alal falah\" dan so'ng ikki marta \"Qod qomatis-solah\" (Namoz boshlanib qoldi) kalimalari qo'shib aytiladi.\n\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n"+
                            "<i>Allohu akbar, Allohu akbar.</i>\n\n"+
                            "<i>Ashhadu alla ilaha illalloh,</i>\n"+
                            "<i>Ashhadu alla ilaha illalloh.</i>\n\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh,</i>\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh.</i>\n"+
                            "<i>Hayya 'alas-solah, hayya' alas-solah,</i>\n"+
                            "<i>Hayya 'alal-falah, hayya 'alal-falah.</i>\n\n"+
                            "<i>Qod qomatis-solah, qod qomatis-solah</i>\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n\n"+
                            "<i>La ilaha illalloh.</i>\n\n"+
                            "Iqomat takbirining lafzlari azonnikiga o'xshaydi, farqi — bunisi tez aytiladi.",
                        audios: [ audios.iqomat ],
                        media: 'https://t.me/botcontents/48'
                    }
                ]
            },
            {
                sub_category: 'BOMDOD_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Bomdod namozi ikki rakat sunnat, ikki rakat farz — jami to'rt rakatdan iborat.\n\n"+
                            "Bomdod namozining ikki rakat sunnati quyidagicha o'qiladi:\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi bomdod namozining ikki rakat sunnatini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>2. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.\n"+
                            "Qo'llar kaftini qiblaga qaratib, bosh barmoqlarining uchi quloqlarining yumshoq joyiga tekkiziladi.",
                        media: "https://t.me/botcontents/12"
                    },
                    {
                        text: "<b>3. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi. O'ng qo'l kafti chap qo'l ustiga qo'yiladi. O'ng qo'lning bosh va kichik barmoqlari bilan chap qo'l bilagi ushlanadi. <b>Qo'llar kindik ostiga qo'yiladi</b>\n\n"+
                            "Bu holat «qiyom» deyiladi. Qiyomda (tik turgan holda) sajda qilinadigan joyga qarab, navbati bilan quyidagilar o'qiladi:\n\n"+
                            "<b>1. Sano duosi</b>\n"+
                            "<b>2. Fotiha surasi</b>\n"+
                            "<b>3. Fotiha surasidan so'ng bir zam (qo'shimcha) sura o'qiladi.</b>\n\n"+
                            "Yangi o'rganuvchilar quyidagi kichik suralardan birini zam qilishsa bo'ladi:\n\n"+
                            "<b>1. Kavsar surasi</b>\n"+
                            "<b>2. Ixlos surasi</b>\n"+
                            "<b>3. Falaq surasi</b>\n"+
                            "<b>4. An-nos surasi</b>",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>4. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi. Tirsaklar va tizzalarni bukmasdan, barmoqlarni ochgan holda, tizzalarini mahkam changallab egilinadi.\n\n"+
                            "Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> (Ey buyuk Robbim, Sen barcha nuqsonlardan poksan), deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>5. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> (Alloh Uni hamd etganlarni eshitguvchidir), deb qad ko'tariladi, bu holat «qavma» deyiladi.\n\n"+
                            "Qavma holida: <b>«Robbana lakal hamd»</b> (Ey Robbimiz, har turli hamd-sanolar yolg'iz Sengadir), deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>6. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb avvalo tizzalar, keyin qo'llar, so'ng peshona va burun yerga tekkizilib, sajda qilinadi. Sajda qilinayotganda oyoq panjalari qiblaga qaratiladi, tirsaklar yerga tegmaydi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> (Ey ulug' Robbim, Sen butun nuqsonlardan poksan), deyiladi.",
                        media: "https://t.me/botcontents/16"                        
                    },
                    {
                        text: "<b>7. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi, bu holat «jalsa» deyiladi. Jalsada qo'llar, barmoqlar o'z holicha tutilib, songa qo'yiladi.\n\n"+
                            "Barmoq uchlari tizza bilan teng bo'lishi lozim. Chap oyoqlar ustiga o'tiriladi, O'ng oyoq panjalari esa qiblaga qaratiladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>8. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. Shu bilan birinchi rakat tugaydi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>9. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turiladi.\n\n"+
                            "Qiyomda «Bismillahir rohmanir rohiym»dan boshlab, Fotiha surasi, orqasidan bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>10. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>11. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>12. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>13. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>14. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>15. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/17",
                        audios: audios.qada
                    },
                    {
                        text: "<b>16. Salom</b>\n\n"+
                            "Avval o'ng, keyin chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/18"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan bomdod namozining ikki rakat sunnati tugaydi.\n\n"+
                            "Bomdod namozining ikki rakat farzi ham xuddi shu tartibda o'qiladi. Farqi — avvalo, erkaklar niyatdan oldin (boshqa farz namozlari oldidan ham) quyidagi iqomat takbirini aytishadi. Iqomat takbirining lafzlari azonnikiga o'xshaydi, farqi — bunisi tez aytiladi.\n\n"+
                            "<b>Iqomat takbiri:</b>\n\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n"+
                            "<i>Allohu akbar, Allohu akbar.</i>\n\n"+
                            "<i>Ashhadu alla ilaha illalloh,</i>\n"+
                            "<i>Ashhadu alla ilaha illalloh.</i>\n\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh,</i>\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh.</i>\n\n"+
                            "<i>Hayya 'alas-solah, hayya' alas-solah,</i>\n"+
                            "<i>Hayya 'alal-falah, hayya 'alal-falah.</i>\n\n"+
                            "<i>Qod qomatis-solah, qod qomatis-solah</i>\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n\n"+
                            "<i>La ilaha illalloh.</i>\n\n"+
                            "Bomdod namozining farziga quyidagicha niyat qilinadi: <b>«Alloh rizoligi uchun bomdod namozining ikki rakat farzini o'z vaqtida o'qishni niyat qildim»</b>. Qolgan qismi sunnat bilan bir xil davom etaveradi.",
                        media: "https://t.me/botcontents/18",
                        audios: [ audios.iqomat ]
                    }
                ]
            },
            {
                sub_category: 'PESHIN_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Peshin namozi to'rt rakat sunnat, to'rt rakat farz va ikki rakat sunnat, jami o'n rakatdan iborat.\n\n"+
                            "Peshin namozining to'rt rakat sunnati quyidagicha o'qiladi:\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi peshin namozining to'rt rakat sunnatini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>2. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/12"
                    },
                    {
                        text: "<b>3. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>4. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>5. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>6. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"                        
                    },
                    {
                        text: "<b>7. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>8. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>9. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>10. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>11. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>12. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>13. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>14. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>15. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/17",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>16. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, yana Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>17. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>18. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>19. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>20. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>21. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Uchinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>22. 4-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, yana Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>23. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>24. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>25. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>26. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>27. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>28. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/17",
                        audios: audios.qada
                    },
                    {
                        text: "<b>29. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/18"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan peshin namozining to'rt rakat sunnati tugaydi.\n\n"+
                            "Peshin namozining to'rt rakat farzi ham ayni shu tartibda o'qiladi.\n\n"+
                            "<b>Faqatgina:</b>\n\n"+
                            "Erkaklar farz namozlari oldidan iqomat takbirini aytishadi. Iqomat takbirining lafzlari azonnikiga o'xshaydi, farqi — bunisi tez aytiladi:\n\n"+
                            "Niyat qilinayotganda <b><i>«Alloh rizoligi uchun peshin namozining to'rt rakat farzini o'z vaqtida o'qishni niyat qildim»</i></b> deyiladi va 3-4-rakatlarda <b>«Fotiha»</b> surasidan keyin zam sura qo'shilmaydi.\n\n"+
                            "<i>Peshin namozining ikki rakat sunnati bomdod namozining sunnati kabi o'qiladi. Niyatda <b>«Alloh rizoligi uchun peshin namozining ikki rakat sunnatini o'z vaqtida o'qishni niyat qildim»</b> deb niyat qilinadi.</i>",
                        media: "https://t.me/botcontents/18"
                    }
                ]
            },
            {
                sub_category: 'ASR_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Iqomat takbiri</b>\n\n"+
                            "Asr namozi to'rt rakat farzdan iborat.\n\n"+
                            "Asr namozi (Peshin namozining to'rt rakat farzi kabi) quyidagicha o'qiladi:\n\n"+
                            "Iqomat takbiri aytiladi. Iqomat takbirining lafzlari azonnikiga o'xshaydi, farqi — bunisi tez aytiladi.\n\n"+
                            "<b>Iqomat takbiri:</b>\n\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n"+
                            "<i>Allohu akbar, Allohu akbar.</i>\n\n"+
                            "<i>Ashhadu alla ilaha illalloh,</i>\n"+
                            "<i>Ashhadu alla ilaha illalloh.</i>\n\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh,</i>\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh.</i>\n"+
                            "<i>Hayya 'alas-solah, hayya' alas-solah,</i>\n"+
                            "<i>Hayya 'alal-falah, hayya 'alal-falah.</i>\n\n"+
                            "<i>Qod qomatis-solah, qod qomatis-solah</i>\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n\n"+
                            "<i>La ilaha illalloh.</i>\n\n",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        
                        text: "<b>2. Niyat</b>\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi asr namozining to'rt rakat farzini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>3. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/12"
                    },
                    {
                        text: "<b>4. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>5. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>6. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>7. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"                        
                    },
                    {
                        text: "<b>8. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>9. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>10. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>11. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>12. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>13. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>14. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>15. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>16. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/17",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>17. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>18. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>19. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>20. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>21. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>22. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Uchinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>23. 4-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>24. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>25. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>26. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>27. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>28. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>29. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/17",
                        audios: audios.qada
                    },
                    {
                        text: "<b>30. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/18"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan 4 rakat farzlik asr namozi tugaydi.\n\n",
                        media: "https://t.me/botcontents/18"
                    }
                ]
            },
            {
                sub_category: 'SHOM_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Iqomat takbiri</b>\n\n"+
                            "Shom namozi uch rakat farz va ikki rakat sunnat bo'lib, jami besh rakatdan iborat.\n\n"+
                            "Shom namozining uch rakat farzi quyidagicha o'qiladi:\n\n"+
                            "Iqomat takbiri aytiladi. Iqomat takbirining lafzlari azonnikiga o'xshaydi, farqi — bunisi tez aytiladi.\n\n"+
                            "<b>Iqomat takbiri:</b>\n\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n"+
                            "<i>Allohu akbar, Allohu akbar.</i>\n\n"+
                            "<i>Ashhadu alla ilaha illalloh,</i>\n"+
                            "<i>Ashhadu alla ilaha illalloh.</i>\n\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh,</i>\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh.</i>\n"+
                            "<i>Hayya 'alas-solah, hayya' alas-solah,</i>\n"+
                            "<i>Hayya 'alal-falah, hayya 'alal-falah.</i>\n\n"+
                            "<i>Qod qomatis-solah, qod qomatis-solah</i>\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n\n"+
                            "<i>La ilaha illalloh.</i>\n\n",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        
                        text: "<b>2. Niyat</b>\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi shom namozining uch rakat farzini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>3. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/12"
                    },
                    {
                        text: "<b>4. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>5. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>6. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>7. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"                        
                    },
                    {
                        text: "<b>8. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>9. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>10. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>11. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>12. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>13. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>14. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>15. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>16. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/17",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>17. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>18. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>19. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>20. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>21. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>22. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>23. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/17",
                        audios: audios.qada
                    },
                    {
                        text: "<b>24. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/18"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan shom namozining 3 rakat farzi yakunlanadi.\n\n"+
                            "Shom namozining ikki rakat sunnati esa bomdod namozining ikki rakat sunnati kabi o'qiladi <i>(faqat niyatda farq bo'ladi)</i>.",
                        media: "https://t.me/botcontents/18"
                    }
                ]
            },
            {
                sub_category: 'XUFTON_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Iqomat takbiri</b>\n\n"+
                            "Xufton namozi to'rt rakat farz va ikki rakat sunnat bo'lib, jami olti rakatdan iborat.\n\n"+
                            "Xufton namozining to'rt rakat farzi (Peshin namozining to'rt rakat farzi kabi) quyidagicha o'qiladi:\n\n"+
                            "Iqomat takbiri aytiladi. Iqomat takbirining lafzlari azonnikiga o'xshaydi, farqi — bunisi tez aytiladi.\n\n"+
                            "<b>Iqomat takbiri:</b>\n\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n"+
                            "<i>Allohu akbar, Allohu akbar.</i>\n\n"+
                            "<i>Ashhadu alla ilaha illalloh,</i>\n"+
                            "<i>Ashhadu alla ilaha illalloh.</i>\n\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh,</i>\n"+
                            "<i>Ashhadu anna Muhammadar rosululloh.</i>\n"+
                            "<i>Hayya 'alas-solah, hayya' alas-solah,</i>\n"+
                            "<i>Hayya 'alal-falah, hayya 'alal-falah.</i>\n\n"+
                            "<i>Qod qomatis-solah, qod qomatis-solah</i>\n"+
                            "<i>Allohu akbar, Allohu akbar,</i>\n\n"+
                            "<i>La ilaha illalloh.</i>\n\n",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        
                        text: "<b>2. Niyat</b>\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi xufton namozining to'rt rakat farzini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>3. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/12"
                    },
                    {
                        text: "<b>4. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>5. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>6. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>7. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"                        
                    },
                    {
                        text: "<b>8. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>9. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>10. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>11. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>12. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>13. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>14. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>15. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>16. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/17",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>17. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>18. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>19. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>20. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>21. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>22. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Uchinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>23. 4-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>24. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>25. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>26. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>27. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>28. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>29. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/17",
                        audios: audios.qada
                    },
                    {
                        text: "<b>30. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/18"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan xufton namozining to'rt rakat farzi tugaydi.\n\n"+
                            "Xufton namozining ikki rakat sunnati bomdod namozining ikki rakat sunnati kabi o'qiladi, faqat niyatda: <b>«Alloh rizoligi uchun, bugungi xufton namozining ikki rakat sunnatini o'z vaqtida o'qishni niyat qildim»</b>, deb niyat qilinadi.",
                        media: "https://t.me/botcontents/18"
                    }
                ]
            },
            {
                sub_category: 'VITR_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Vitr namozi uch rakatli bo'lib, vojib ibodat sanaladi. Farzdan quyiroq, sunnatdan ulug' turadi. O'qilishi shart. Biror sabab ila vaqtida o'qilmay qolsa, qazosi o'qiladi. Vitr namozi xufton namozidan keyin quyidagi tartibda ado etiladi:\n\n"+
                            "<b>«Alloh rizoligi uchun, uch rakatli Vitr vojib namozini o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>2. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/12"
                    },
                    {
                        text: "<b>3. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>4. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>5. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>6. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"                        
                    },
                    {
                        text: "<b>7. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>8. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>9. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>10. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>11. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>12. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>13. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>14. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>15. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/17",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>16. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/13",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>17. Takbir</b>\n\n"+
                            "Zam suradan so'ng, <b>«Allohu akbar»</b>, deb quloq qoqiladi.",
                        media: "https://t.me/botcontents/12"
                    },
                    {
                        text: "<b>18. Qiyom</b>\n\n"+
                            "Qo'l qovushtirilib qunut duosi o'qiladi",
                        media: "https://t.me/botcontents/13",
                        audios: [ audios.qunut ]
                    },
                    {
                        text: "<b>19. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/15"
                    },
                    {
                        text: "<b>20. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/11"
                    },
                    {
                        text: "<b>21. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>22. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/17"
                    },
                    {
                        text: "<b>23. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Uchinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/16"
                    },
                    {
                        text: "<b>24. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/17",
                        audios: audios.qada
                    },
                    {
                        text: "<b>25. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/18"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan xufton namozidan keyingi Vitr vojib namozi tugaydi",
                        media: "https://t.me/botcontents/18"
                    }
                ]
            },
            {
                sub_category: "QAZO_NAMOZLARI",
                items: [
                    "<b>Qazo namozlari</b>\n\n"+
                    "Mo'min-musulmonlar namozlarini doimo vaqtida o'qishga harakat qilishlari lozim. Lekin biror sabab bilan o'qilmay qolsa, u namozning qazosi o'qilishi kerak. Farz namozlar va vitr namozi qoldirilsa, qazo qilib o'qiladi.\n\n"+
                    "Qazo namozi va umuman har qanday namoz o'qish makruh hisoblangan uch vaqt borki, bular kun chiqish, kun botish va kun tikkaga kelgan (qiyom) paytlaridir.\n\n"+
                    "Namozni o'tkazib yuborish katta gunohdir. Binobarin, qazo namozi o'qilgach, Alloh taolodan mag'firat tilash va har namozni o'z vaqtida, qazo qilmay o'qishni nasib etishini so'rab duo qilish kerak."
                ]
            }
        ]
    },
    {
        category: "AYOLLAR_UCHUN_NAMOZ",
        items: [
            {
                sub_category: "AYOLLARGA_XOS_HOLATLAR",
                items: [
                    {
                        start: true,
                        text: "<b>Ayollarga xos holatlar</b>\n\n"+
                            "Balog'at yoshiga yetgan qizlar va ayollarga xos uch holat mavjud:\n\n"+
                            "<b>I. Hayz holati.</b> Hayz eng kami uch kun, ko'pi bilan o'n kun bachadondan keladigan qondir. Bu kunlar ichida qon davomli kelmasdan, ora-sira to'xtashi ham mumkin. Biroq oraliqdagi bu kunlar ham hayz kunlari hisoblanadi. Hayz kunlari ayollarga quyidagi amallar taqiqlanadi:\n\n"+
                            "1. namoz o'qish;\n"+
                            "2. ro'za tutish;\n"+
                            "3. Qur'on o'qish. Biroq hayz holidagi Qur'on muallimasi Qur'on o'qish niyati bilan emas, tolibaga o'rgatish maqsadida harfma-harf, so'zma-so'z Qur'on o'rgatishi mumkin;\n"+
                            "4. Qur'oni karimga qo'l tekkizish;\n"+
                            "5. Ka'bani tavof etish;\n"+
                            "6. masjidga kirish;\n"+
                            "7. eri bilan jinsiy aloqada bo'lish.\n\n"+
                            "Ayollar hayz ko'rgan kunlari o'qiyolmagan namozlarining qazosini o'qimaydilar, biroq tutolmagan ro'zalarini keyin tutadilar. Homilador ayollar hayz ko'rmaydilar.\n\n"+
                            "<b>II. Nifos holati.</b> Ayollarda tuqqandan so'ng bachadondan qirq kungacha keladigan qon nifos qonidir. Bu qon qirq kundan oldin ham to'xtashi mumkin. Qon to'xtagan kuni g'usl olib ibodatlarda davom etiladi. Qirq kun ichida qon kelishi yana boshlanib qolsa, qon to'xtagan oldingi kunlar ham nifos holatidagi kunlar hisoblanadi.\n\n"+
                            "Hayz kunlarida taqiqlangan (harom sanalgan) amallar nifos holatida ham taqiqlanadi. Bu kunlarda o'qilmagan namozlar qazo qilib o'qilmaydi, tutilmagan ro'zalarning qazosi tutiladi.\n\n"+
                            "<b>III. Istihoza.</b> Xastalik tufayli ayollarda tanosil uzvi yo'li bilan bachadondan emas, tomirdan keladigan qon iztihoza qonidir. Hayz qonining o'n kundan oshig'i va uch kundan oz davom etgani, ko'zi yorigach nifosning qirq kundan ortiq davom etgani va homiladorlik paytida keladigan suyuqliklar istihozadir. Bunday holatlar ayollar uchun uzrli sanaladi."
                    },
                    {
                        end: true,
                        text: "<b>Ayollar sochini yig'ishi haqida</b>\n\n"+
                            "Assalomu alaykum! Ayollar namoz vaqtida sochlarini tepadan yig'ib, aylana shaklida o'rab olishlari mumkin emas ekan. Namozdan boshqa vaqtlarda, masalan, ko'chaga chiqqanda ro'molini ichidan shunday yig'ishlari joizmi? Bu tuyaning o'rkachidek bo'lib qolmaydimi?\n\n"+
                            "<b>Javob:</b>\n"+
                            "— Va alaykum assalom! Hadisda aytilgan holat aynan mana shu, degan dalil-hujjat yo'q. Ba'zi ulamolar ro'molsiz sochini shunday holatga keltiradigan yoki yasama soch qo'yadiganlar nazarda tutilgan, ham deyishgan. Nima bo'lganda ham, bu ishni qilmagan ma'qul.\n"+
                            "Vallohu a'lam.\n\n"+
                            "<b>Sochni turmaklash holati</b>\n"+
                            "Assalomu alaykum! Namozdan tashqarida uyda sochni bosh tepasiga turmaklab yurishning hech qanday zarari yo'qmi? Kunlar isishni boshlaganda, men sochimni shunday qilib olaman. Bu ham shayton turmagiga kirib qolmaydimi?\n\n"+
                            "<b>Javob:</b>\n"+
                            "— Va alaykum assalom! Namozdan tashqari vaqtda bunday turmaklab yurish joiz.\n\n"+
                            "<b>Namozda sochni yig'ish</b>\n"+
                            "Ustoz, sochni namozda boshdan baland bo'lmagan tepalikda bog'lab, o'ramasdan pastga tashlagan holda namoz o'qish joizmi yoki faqat pastdan, bo'yin orqasidan yig'ish kerakmi? Rahmat!\n\n"+
                            "<b>Javob:</b>\n"+
                            "— Qanday bo'lsa ham uzunligi bilan, uchi qayrilmagan holda tursa bo'ldi. Vallohu a'lam.\n\n"+
                            "<i>Odinaxon Muhammad Sodiq</i>"
                    }
                ]
            },
            {
                sub_category: 'BOMDOD_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Bomdod namozi ikki rakat sunnat, ikki rakat farz — jami to'rt rakatdan iborat.\n\n"+
                            "Bomdod namozining ikki rakat sunnati quyidagicha o'qiladi:\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi bomdod namozining ikki rakat sunnatini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>2. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.\n"+
                            "Qo'llar yelka barobarida ko'tariladi.",
                        media: "https://t.me/botcontents/20"
                    },
                    {
                        text: "<b>3. Qiyom</b>\n\n"+
                            "<b>Qo'llar bog'lanadi. O'ng qo'l kafti chap qo'l ustiga tutilib, qo'llar ko'krakka qo'yiladi</b>\n\n"+
                            "Bu holat «qiyom» deyiladi. Qiyomda (tik turgan holda) sajda qilinadigan joyga qarab, navbati bilan quyidagilar o'qiladi:\n\n"+
                            "<b>1. Sano duosi</b>\n"+
                            "<b>2. Fotiha surasi</b>\n"+
                            "<b>3. Fotiha surasidan so'ng bir zam (qo'shimcha) sura o'qiladi.</b>\n\n"+
                            "Yangi o'rganuvchilar quyidagi kichik suralardan birini zam qilishsa bo'ladi:\n\n"+
                            "<b>1. Kavsar surasi</b>\n"+
                            "<b>2. Ixlos surasi</b>\n"+
                            "<b>3. Falaq surasi</b>\n"+
                            "<b>4. An-nos surasi</b>",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>4. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi. Biroz egilinadi. Tizzalar bir oz bukiladi. Barmoqlar jamlanib tizzalarni tutadi\n\n"+
                            "Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> (Ey buyuk Robbim, Sen barcha nuqsonlardan poksan), deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>5. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> (Alloh Uni hamd etganlarni eshitguvchidir), deb qad ko'tariladi, bu holat «qavma» deyiladi.\n\n"+
                            "Qavma holida: <b>«Robbana lakal hamd»</b> (Ey Robbimiz, har turli hamd-sanolar yolg'iz Sengadir), deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>6. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb avvalo tizzalar, keyin qo'llar va tirsak, so'ng peshona va burun yerga tekkizilib, sajda qilinadi. Sajda qilinayotganda oyoq panjalari qiblaga qaratiladi, tirsaklar yerga tegadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> (Ey ulug' Robbim, Sen butun nuqsonlardan poksan), deyiladi.",
                        media: "https://t.me/botcontents/23"                        
                    },
                    {
                        text: "<b>7. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi, bu holat «jalsa» deyiladi. Jalsada qo'llar, barmoqlar o'z holicha tutilib, songa qo'yiladi.\n\n"+
                            "Barmoq uchlari tizza bilan teng bo'lishi lozim. Oyoqlar o'ng tomonga chiqarilib o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>8. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>9. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turiladi.\n\n"+
                            "Qiyomda «Bismillahir rohmanir rohiym»dan boshlab, Fotiha surasi, orqasidan bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>10. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>11. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>12. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>13. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>14. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>15. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/24",
                        audios: audios.qada
                    },
                    {
                        text: "<b>16. Salom</b>\n\n"+
                            "Avval o'ng, keyin chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/25"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan bomdod namozining ikki rakat sunnati tugaydi.\n\n"+
                            "Bomdod namozining ikki rakat farzi ham xuddi shu tartibda o'qiladi.\n\n"+
                            "Bomdod namozining farziga quyidagicha niyat qilinadi: <b>«Alloh rizoligi uchun bomdod namozining ikki rakat farzini o'z vaqtida o'qishni niyat qildim»</b>. Qolgan qismi sunnat bilan bir xil davom etaveradi.",
                        media: "https://t.me/botcontents/25"
                    }
                ]
            },
            {
                sub_category: 'PESHIN_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Peshin namozi to'rt rakat sunnat, to'rt rakat farz va ikki rakat sunnat, jami o'n rakatdan iborat.\n\n"+
                            "Peshin namozining to'rt rakat sunnati quyidagicha o'qiladi:\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi peshin namozining to'rt rakat sunnatini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>2. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/20"
                    },
                    {
                        text: "<b>3. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>4. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>5. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>6. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"                     
                    },
                    {
                        text: "<b>7. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>8. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>9. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>10. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>11. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>12. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>13. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>14. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>15. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/24",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>16. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, yana Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>17. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>18. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>19. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>20. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>21. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Uchinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>22. 4-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, yana Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>23. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>24. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>25. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>26. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>27. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>28. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/24",
                        audios: audios.qada
                    },
                    {
                        text: "<b>29. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/25"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan peshin namozining to'rt rakat sunnati tugaydi.\n\n"+
                            "Peshin namozining to'rt rakat farzi ham ayni shu tartibda o'qiladi.\n\n"+
                            "<b>Faqatgina:</b>\n\n"+
                            "Niyat qilinayotganda <b><i>«Alloh rizoligi uchun peshin namozining to'rt rakat farzini o'z vaqtida o'qishni niyat qildim»</i></b> deyiladi va 3-4-rakatlarda <b>«Fotiha»</b> surasidan keyin zam sura qo'shilmaydi.\n\n"+
                            "<i>Peshin namozining ikki rakat sunnati bomdod namozining sunnati kabi o'qiladi. Niyatda <b>«Alloh rizoligi uchun peshin namozining ikki rakat sunnatini o'z vaqtida o'qishni niyat qildim»</b> deb niyat qilinadi.</i>",
                        media: "https://t.me/botcontents/25"
                    }
                ]
            },
            {
                sub_category: 'ASR_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Asr namozi to'rt rakat farzdan iborat.\n\n"+
                            "Asr namozi (Peshin namozining to'rt rakat farzi kabi) quyidagicha o'qiladi:\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi asr namozining to'rt rakat farzini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>2. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/20"
                    },
                    {
                        text: "<b>3. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>4. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>5. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>6. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"                        
                    },
                    {
                        text: "<b>7. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>8. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>9. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>10. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>11. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>12. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>13. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>14. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>15. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/24",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>16. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>17. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>18. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>19. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>20. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>21. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Uchinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>22. 4-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>23. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>24. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>25. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>26. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>27. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>28. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/24",
                        audios: audios.qada
                    },
                    {
                        text: "<b>29. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/25"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan 4 rakat farzlik asr namozi tugaydi.\n\n",
                        media: "https://t.me/botcontents/25"
                    }
                ]
            },
            {
                sub_category: 'SHOM_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Shom namozi uch rakat farz va ikki rakat sunnat bo'lib, jami besh rakatdan iborat.\n\n"+
                            "Shom namozining uch rakat farzi quyidagicha o'qiladi:\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi shom namozining uch rakat farzini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>2. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/20"
                    },
                    {
                        text: "<b>3. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>4. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>5. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>6. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"                        
                    },
                    {
                        text: "<b>7. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>8. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>9. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>10. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>11. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>12. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>13. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>14. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>15. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/24",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>16. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>17. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>18. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>19. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>20. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>21. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>22. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/24",
                        audios: audios.qada
                    },
                    {
                        text: "<b>23. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/25"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan shom namozining 3 rakat farzi yakunlanadi.\n\n"+
                            "Shom namozining ikki rakat sunnati esa bomdod namozining ikki rakat sunnati kabi o'qiladi <i>(faqat niyatda farq bo'ladi)</i>.",
                        media: "https://t.me/botcontents/25"
                    }
                ]
            },
            {
                sub_category: 'XUFTON_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Xufton namozi to'rt rakat farz va ikki rakat sunnat bo'lib, jami olti rakatdan iborat.\n\n"+
                            "Xufton namozi (Peshin namozining to'rt rakat farzi kabi) quyidagicha o'qiladi:\n\n"+
                            "<b>«Alloh rizoligi uchun qibla tomonga yuzlanib, bugungi xufton namozining to'rt rakat farzini o'z vaqtida o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>2. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/20"
                    },
                    {
                        text: "<b>3. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>4. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>5. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>6. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"                        
                    },
                    {
                        text: "<b>7. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>8. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>9. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>10. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>11. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>12. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>13. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>14. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>15. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/24",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>16. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>17. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>18. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>19. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>20. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>21. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Uchinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>22. 4-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, faqat Fotiha surasi o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: [ audios.qiyom[1] ]
                    },
                    {
                        text: "<b>23. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>24. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>25. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>26. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>27. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>28. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/24",
                        audios: audios.qada
                    },
                    {
                        text: "<b>29. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/25"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan xufton namozining to'rt rakat farzi tugaydi.\n\n"+
                            "Xufton namozining ikki rakat sunnati bomdod namozining ikki rakat sunnati kabi o'qiladi, faqat niyatda: <b>«Alloh rizoligi uchun, bugungi xufton namozining ikki rakat sunnatini o'z vaqtida o'qishni niyat qildim»</b>, deb niyat qilinadi.",
                        media: "https://t.me/botcontents/25"
                    }
                ]
            },
            {
                sub_category: 'VITR_NAMOZI',
                items: [
                    {
                        start: true,
                        text: "<b>1. Niyat</b>\n\n"+
                            "Vitr namozi uch rakatli bo'lib, vojib ibodat sanaladi. Farzdan quyiroq, sunnatdan ulug' turadi. O'qilishi shart. Biror sabab ila vaqtida o'qilmay qolsa, qazosi o'qiladi. Vitr namozi xufton namozidan keyin quyidagi tartibda ado etiladi:\n\n"+
                            "<b>«Alloh rizoligi uchun, uch rakatli Vitr vojib namozini o'qishni niyat qildim»</b>, deb ko'ngildan o'tkaziladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>2. Takbir</b>\n\n"+
                            "Iftitoh takbiri: - <b>«Allohu akbar»</b> deb aytilib namozga kiriladi.",
                        media: "https://t.me/botcontents/20"
                    },
                    {
                        text: "<b>3. Qiyom</b>\n\n"+
                            "Qo'llar bog'lanadi va Sano duosi, Fotiha surasi va biror zam sura o'qiladi",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>4. Ruku</b>\n\n"+
                            "Zam sura tugagach, <b>«Allohu akbar»</b>, deb ruku qilinadi va uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>5. Qavma</b>\n\n"+
                            "Rukudan <b>«Sami'allohu liman hamidah»</b> deb turiladi, so'ng <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>6. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"                        
                    },
                    {
                        text: "<b>7. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va tiz cho'kkan holda bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>8. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Shu bilan birinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>9. 2-chi rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turib. <b>«Bismillahir rohmanir rohiym»</b>dan boshlab, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>10. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> , deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>11. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b>, deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b>, deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>12. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdaga boriladi. Sajdada uch marta <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>13. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tariladi va bir oz o'tiriladi.",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>14. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> , deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>15. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va <b>«Attahiyyat duosi»</b> o'qiladi:",
                        media: "https://t.me/botcontents/24",
                        audios: [ audios.qada[0] ]
                    },
                    {
                        text: "<b>16. 3-rakat. Qiyom</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb qiyomga (tikka) turilib, Fotiha surasi va bir zam sura o'qiladi.",
                        media: "https://t.me/botcontents/21",
                        audios: audios.qiyom
                    },
                    {
                        text: "<b>17. Takbir</b>\n\n"+
                            "Zam suradan so'ng, <b>«Allohu akbar»</b>, deb quloq qoqiladi.",
                        media: "https://t.me/botcontents/20"
                    },
                    {
                        text: "<b>18. Qiyom</b>\n\n"+
                            "Qo'l qovushtirilib qunut duosi o'qiladi",
                        media: "https://t.me/botcontents/21",
                        audios: [ audios.qunut ]
                    },
                    {
                        text: "<b>19. Ruku</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ruku qilinadi. Rukuda uch marta <b>«Subhana robbiyal 'aziym»</b> deyiladi.",
                        media: "https://t.me/botcontents/22"
                    },
                    {
                        text: "<b>20. Qavma</b>\n\n"+
                            "<b>«Sami'allohu liman hamidah»</b> deb tik turiladi, ketidan <b>«Robbana lakal hamd»</b> deyiladi.",
                        media: "https://t.me/botcontents/19"
                    },
                    {
                        text: "<b>21. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdaga boriladi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b> deyiladi.",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>22. Jalsa</b>\n\n"+
                            "<b>«Allohu akbar»</b> deb sajdadan bosh ko'tariladi va bir oz o'tiriladi",
                        media: "https://t.me/botcontents/24"
                    },
                    {
                        text: "<b>23. Sajda</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb ikkinchi marta sajda qilinadi. Sajdada uch marta: <b>«Subhana robbiyal a'la»</b>, deyiladi. <i>Uchinchi rakat tugaydi.</i>",
                        media: "https://t.me/botcontents/23"
                    },
                    {
                        text: "<b>24. Qa'da</b>\n\n"+
                            "<b>«Allohu akbar»</b>, deb sajdadan bosh ko'tarilib qa'dada o'tiriladi va quyidagilar o'qiladi:\n\n"+
                            "<b>1. Attahiyyat duosi</b>\n"+
                            "<b>2. Salovot</b>\n"+
                            "<b>3. Robbana duosi</b>",
                        media: "https://t.me/botcontents/24",
                        audios: audios.qada
                    },
                    {
                        text: "<b>25. Salom</b>\n\n"+
                            "O'ng va chap yelkaga qarab: <b>«Assalamu alaykum va rohmatulloh»</b> deb salom berilib namozdan chiqiladi",
                        media: "https://t.me/botcontents/25"
                    },
                    {
                        end: true,
                        text: "<b>Yakun</b>\n\n"+
                            "Shu bilan xufton namozidan keyingi Vitr vojib namozi tugaydi",
                        media: "https://t.me/botcontents/25"
                    }
                ]
            }
        ]
    }
]

module.exports = categories