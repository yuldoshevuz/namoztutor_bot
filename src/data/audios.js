const azon = {
    text: "🎶 Azon",
    data: 'azon',
    audio: 'https://t.me/botcontents/164',
    caption: "<b>Azon</b>\n\n"+
        "Allohu akbar!\n"+
        "Allohu akbar!\n"+
        "Allohu akbar!\n"+
        "Allohu akbar!\n\n"+
        "Ashhadu alla ilaha illalloh!\n"+
        "Ashhadu alla ilaha illalloh!\n"+
        "Ashhadu anna Muhammadar rasululloh!\n"+
        "Ashhadu anna Muhammadar rasululloh!\n\n"+
        "Hayya 'alas-solah!\n"+
        "Hayya 'alas-solah!\n\n"+
        "Hayya 'alal falah!\n"+
        "Hayya 'alal falah!*\n\n"+
        "Allohu akbar!\n"+
        "Allohu akbar!\n\n"+
        "La ilaha illalloh."
}

const azonduo = {
    text: "🎶 Azon duosi",
    data: 'azon_duosi',
    audio: 'https://t.me/botcontents/35',
    caption: "<b>Azon duosi</b>\n\n"+
        "<b>Allohumma robba hazihid-da'vatit-tammah. Vas-solatil qoimah, ati Muhammadanil vasiylata val faziylah. Vad-darojatal 'aliyatar rofi'a. Vab'as-hu maqomam mahmudanillaziy va'adtah. Varzuqna shafa-'atahu yavmal qiyamah. Innaka la tuxliful mi'ad!</b>\n\n"+
        "<b>Ma'nosi:</b> Ushbu komil da'vatning, hozir qoim bo'lgan namozning Parvardigori, ey Alloh! Muhammadga (s.a.v.) vasila, fazilat va baland oliy daraja ato etgin. Uni O'zing va'da qilgan maqtovli maqomda tiriltirgin. Bizga Qiyomat kunida Uning shafoatini nasib et. Albatta, Sen va'daga xilof qilmassan."
}

const iqomat = {
    text: "🎶 Iqomat takbiri",
    data: 'iqomat_takbiri',
    audio: 'https://t.me/botcontents/36',
    caption: '<b>Iqomat takbiri</b>\n\n'+
        "Allohu akbar, Allohu akbar,\n"+
        "Allohu akbar, Allohu akbar.\n\n"+
        "Ashhadu alla ilaha illalloh,\n"+
        "Ashhadu alla ilaha illalloh.\n\n"+
        "Ashhadu anna Muhammadar rosululloh,\n"+
        "Ashhadu anna Muhammadar rosululloh.\n"+
        "Hayya 'alas-solah, hayya' alas-solah,\n"+
        "Hayya 'alal-falah, hayya 'alal-falah.\n\n"+
        "Qod qomatis-solah, qod qomatis-solah\n"+
        "Allohu akbar, Allohu akbar,\n\n"+
        "La ilaha illalloh."
}

const qiyom = [
    {
        text: "🎶 Sano duosi",
        data: 'sano_duosi',
        audio: 'https://t.me/botcontents/37',
        caption: "<b>Sano duosi</b>\n\n"+
            "<b>Subhanakallouhumma va bihamdika va tabarokasmuka va taa'la jadduka va la ilaha g'oyruk.</b>\n\n"+
            "Mazmuni: «Allohim! Sening noming muborakdir. Shon-sharafing ulug'dir. Sendan o'zga iloh yo'qdir»."
    },
    {
        text: "🎶 Fotiha surasi",
        data: 'fotiha_surasi',
        audio: 'https://t.me/botcontents/50',
        caption: "<b>Fotiha surasi</b>\n\n"+
            "<b>A'uzu billahi minash shaytonir rojiym. Bismillahir rohmanir rohiym. Alhamdu lillahi robbil 'alamiyn. Ar-rohmanir rohiym. Maliki yavmiddiyn. Iyyaka na'budu va iyyaka nasta'iyn. Ihdinas sirotol mustaqiym. Sirotollaziyna an'amta 'alayhim g'oyril mag'zubi 'alayhim valazzolliyn. (omin)</b>\n\n"+
            "Mazmuni: Allohning dargohidan quvilgan shayton yomonligidan Allohning panohiga qochaman. Mehribon va rahmli Alloh nomi bilan (boshlayman). Hamd olamlar rabbi Allohgakim, (U) mehribon, rahmli va hisob-kitob kuni (Qiyomat)ning egasidir. Sengagina ibodat qilamiz va Sendangina yordam so'raymiz! Bizni shunday to'g'ri yo'lga boshlaginki, (U) Sen in'om (hidoyat) etganlarning (payg'ambarlar, siddiq va shahidlarning) yo'lidir, g'azabga uchragan (Muso qavmidan itoatsizlarining) va adashgan (Iso qavmining «Allohning farzandi bor» deydigan) larning emas!"
    },
    {
        text: "🎶 Kavsar surasi",
        data: 'kavsar_surasi',
        audio: 'https://t.me/botcontents/157',
        caption: "<b>Kavsar surasi</b>\n\n"+
            "<b>Inna a'toynakal-kavsar. Fa solli lirobbika vanhar. Inna shania'ka huval abtar.</b>\n\n"+
            "Mazmuni: «(Ey Muhammad,) darhaqiqat, Biz Sizga Kavsarni* berdik. Bas, Rabbingiz uchun namoz o'qing va (tuya) so'yib qurbonlik qiling! Albatta, g'animingizning o'zi (barcha yaxshiliklardan) mahrumdir».\n\n"+
            "<b>(Kavsar</b> — jannatdagi bir ajib daryo yoki hovuzning nomi. Uning suvi asaldan totli, qor va suvdan oq. Undan ichgan kishi abadiy chanqoqlik ko'rmaydi.)"
    },
    {
        text: "🎶 Ixlos surasi",
        data: 'ixlos_surasi',
        audio: 'https://t.me/botcontents/161',
        caption: "<b>Ixlos surasi</b>\n\n"+
            "<b>Qul huvallohu ahad. Allohus-somad. Lam yalid. Va lam yulad va lam yakullahu kufuvan ahad.</b>\n\n"+
            "Mazmuni: (Ey Muhammad,) ayting: «U — Alloh yagonadir. Alloh behojat, (lekin) hojatbarordir. U tug'magan va tug'ilmagan ham. Shuningdek, Unga teng biror Zot yo'qdir»."
    },
    {
        text: "🎶 Falaq surasi",
        data: 'falaq_surasi',
        audio: 'https://t.me/botcontents/162',
        caption: "<b>Falaq surasi</b>\n\n"+
            "<b>Qul a'uzu birobbil falaq. Min sharri ma xolaq. Va min sharri g'osiqin iza vaqob. Va min sharrin-naffasati fil 'uqod. Va min sharri hasidin iza hasad.</b>\n\n"+
            "Mazmuni: «(Ey Muhammad,) ayting: “Panoh tilab iltijo qilurman tong Parvardigoriga yaratgan narsasi yovuzligidan, tugunchaga dam uruvchi ayollar yovuzligidan hamda hasadchining hasadi yovuzligidan”»."
    },
    {
        text: "🎶 An-nos surasi",
        data: 'an-nos_surasi',
        audio: 'https://t.me/botcontents/163',
        caption: "<b>An-nos surasi</b>\n\n"+
            "<b>Qul a'uzu birrobin-nas. Malikin-nas. Ilahin-nas. Min sharril vasvasil xonnas. Allaziy yuvasvisu fiy sudurin-nas. Minal jinnati van-nas.</b>\n\n"+
            "Mazmuni: «(Ey Muhammad,) ayting: “Panoh tilab iltijo qilurman odamlar Parvardigoriga, odamlar Podshohiga, odamlar Ilohiga yashirin vasvasachi (shayton) yovuzligidanki, (u) odamlarning dillariga vasvasa solur. (O'zi) jinlar va odamlardandir”»."
    }
]

const qada = [
    {
        text: "🎶 Attahiyyat duosi",
        data: "attahiyyat_duosi",
        audio: 'https://t.me/botcontents/44',
        caption: "<b>Attahiyyat duosi</b>\n\n"+
            "<b>Attahiyyatu lillahi vas-solavatu vattoyyibat. Assalamu 'alayka ayyuhan-nabiyyu va rohmatullohi va barokatuh. Assalamu 'alayna va 'ala ibadillahis-solihiyn. Ashhadu alla ilaha illallohu va ashhadu anna Muhammadan 'abduhu va rosuluh.</b>\n\n"+
            "Mazmuni: Mol, badan, til bilan ado etiladigan butun ibodatlar Alloh uchundir. Ey Nabiy! Allohning rahmati va barakoti Sizga bo'lsin. Sizga va solih qullarga Allohning salomi bo'lsin. Iqrormanki, Allohdan o'zga iloh yo'q. Va yana iqrormanki, Muhammad, alayhissalom, Allohning quli va elchisidirlar."
    },
    {
        text: "🎶 Salovot",
        data: "salovot",
        audio: 'https://t.me/botcontents/45',
        caption: "<b>Salovot</b>\n\n"+
            "<b>Allohumma solli 'ala Muhammadiv-va 'ala ali Muhammad. Kama sollayta 'ala Ibrohima va 'ala ali Ibrohim. Innaka hamidum-majid.</b>\n\n"+
            "<b>Allohumma barik 'ala Muhammadiv-va 'ala ali Muhammad. Kama barokta 'ala Ibrohima va 'ala ali Ibrohim. Innaka hamidum-majid.</b>\n\n"+
            "Mazmuni: Allohim, Ibrohim va uning oilasiga rahmat etganing kabi, Muhammad va ul Zotning oilasiga rahmat ayla, Sen hamdu maqtovga loyiq va buyuk Zotsan.\n\n"+
            "Allohim, Ibrohim va uning oilasiga barakotingni ehson etganing kabi Muhammad va ul Zotning oilasi ustiga ham barakotingni ehson ayla. Sen hamdu maqtovga loyiq va buyuk Zotsan."
    },
    {
        text: "🎶 Robbana duosi",
        data: "duo_robbana",
        audio: 'https://t.me/botcontents/46',
        caption: "<b>Robbana duosi</b>\n\n"+
            "<b>Robbana atina fid-dunya hasanatav-va fil axiroti hasanatav-va qina azaban-nar.</b>\n\n"+
            "Mazmuni: «Ey Robbimiz, bizga bu dunyoda ham, oxiratda ham yaxshilikni bergin va bizni do'zax olovi azobidan saqlagin»."
    }
]

const qunut = {
    text: "🎶 Qunut duosi",
    data: "qunut_duosi",
    audio: 'https://t.me/botcontents/47',
    caption: "<b>Qunut duosi</b>\n\n"+
        "<b>Allohumma inna nasta'inuka va nastag'firuk. Vanu'minu bika va natavakalu 'alayka va nusniy 'alaykal xoyr. Va nashkuruka va la nakfuruk. Va naxla'u va natruku may yafjuruk.</b>\n\n"+
        "<b>Allohumma iyyaka na'budu va laka nusolliy va nasjudu va ilayka nas'a va nahfidu narju rohmatak(a). Va naxsha 'azabaka. Inna 'azabaka bil kuffari mulhiq.</b>\n\n"+
        "Mazmuni: Allohim! Biz Sendan yordam istaymiz, gunohlarimizni afu etishingni so'raymiz. Allohim! Senga imon keltiramiz, ishlarimizda Senga suyanamiz va Senga tavakkal qilamiz. Va Senga hamd aytamiz. Butun yaxshiliklar Sendandir. Bizlarga berganing shuncha ne'matlar tufayli Senga shukrona aytamiz va nonko'rlik qilmaymiz. Senga qarshi nonko'rlik qilgan gunohkorlardan ayrilamiz, ular bilan aloqani uzamiz.\n\n"+
        "Allohim! Biz yolg'iz Sengagina qullik qilamiz, namozni Sen uchungina o'qiymiz. Sengagina sajda qilamiz. Sengagina intilamiz. Ibodatni xushu'-kamtarlik bilan ado etamiz. Rahmating ko'p bo'lishini so'raymiz, azobingdan qo'rqamiz. Hech shubha yo'qki, Sening azobing kofirlargadir."
}

const all = [ azon, azonduo, iqomat, ...qiyom, ...qada, qunut ]

module.exports = { all, azon, azonduo, iqomat, qiyom, qada, qunut }