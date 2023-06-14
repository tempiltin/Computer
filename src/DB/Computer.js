const tests = [
    {
        savol: "Olti sathli kompyuterlarning nolinchi sathi qanday nomlanadi?",
        javob: "#raqamli mantiqiy sath"
    },
    {
        savol: "Olti sathli kompyuterlarning birinchi sathi qanday nomlanadi?",
        javob: "#mikroarxitektura sathi"
    },
    {
        savol: "Olti sathli kompyuterlarning ikkinchi sathi qanday nomlanadi?",
        javob: "#buyruqlar to‘plami arxitekturasi sathi"
    },
    {
        savol: "Olti sathli kompyuterlarning uchinchi sathi qanday nomlanadi?",
        javob: "#operatsion tizim sathi"
    },
    {
        savol: "Olti sathli kompyuterlarning to‘rtinchi sathi qanday nomlanadi?",
        javob: "#assembler sathi"
    },
    {
        savol: "Olti sathli kompyuterlarning beshinchi sathi qanday nomlanadi?",
        javob: "#amaliy tillar dasturchilari sathi"
    },
    {
        savol: "Raqamli mantiqiy sathning obyektlari qanday nomlanadi?",
        javob: "#ventillar"
    },
    {
        savol: "Bir bitli xotira elementi deganda nima tushuniladi?",
        javob: "#trigger"
    },
    {
        savol: "Guruhga birlashtirilgan triggerlar yordamida nima hosil qilinadi?",
        javob: "#registr"
    },
    {
        savol: "Inkorlash elementining kirishi nechta bo‘lishi mumkin?",
        javob: "#1"
    },
    {
        savol: "NOT, NOT-AND, NOT-OR kabi elementlarning kirish signallari, ulardagi tranzistorlarning qaysi oyoqchasiga ulangan?",
        javob: "#baza"
    },
    {
        savol: "NOT, NOT-AND, NOT-OR kabi elementlarning chiqish signallari, ulardagi tranzistorlarning qaysi oyoqchasidan olinadi?",
        javob: "#kollektor"
    },
    {
        savol: "Mantiqiy funktsiya o‘zgaruvchilarining soni n-ga teng bo‘lsa, ushbu funktsiyaning xaqiqat jadvali necha qatordan iborat bo‘lishi kerak?",
        javob: "#2^n"
    },
    {
        savol: "Uchta o‘zgaruvchili mantiqiy funksiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?",
        javob: "#8"
    },
    {
        savol: "To‘rtta o‘zgaruvchili mantiqiy funksiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?",
        javob: "#16"
    },
    {
        savol: "Beshta o‘zgaruvchili mantiqiy funtsiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?",
        javob: "#32"
    },
    {
        savol: "64 Kbaytli asosiy xotira adresining maksimal qiymati nechaga teng?",
        javob: "#FFFF"
    },
    {
        savol: " 1 Mbaytli asosiy xotira adresining maksimal qiymati nechaga teng? ",
        javob: " #FFFFF "
    },
    {
        savol: " 4 Gbaytli asosiy xotira adresining maksimal qiymati nechaga teng? ",
        javob: " #FFFF FFFF "
    },
    {
        savol: " Pentium oilasiga mansub protsessorlar asosida qurilgan kompyuterlarning asosiy xotirasida baytlar qanday tartibda joylashtiriladi? ",
        javob: "#teskari tartibda  "
    },
    {
        savol: "SPARC oilasiga mansub protsessorlar asosida qurilgan kompyuterlarning asosiy xotirasida baytlar qanday tartibda joylashtiriladi?  ",
        javob: " #to‘g‘ri tartibda "
    },
    {
        savol: " Asosiy xotirasida, baytlar to‘g‘ri tartibda joylashtirilgan kompyuter protsessori ko‘rsating. ",
        javob: " #UltraSPARC III "
    },
    {
        savol: " Asosiy xotirasida, baytlar teskari tartibda joylashtirilgan kompyuter protsessori ko‘rsating. ",
        javob: " #Pentium 4 "
    },
    {
        savol: " Xozirgi shaxsiy  kompyuterlarda xotiraga murojaat qilishning necha xil rejimi mavjud? ",
        javob: " #2 "
    },
    {
        savol: " Asosiy xotiraga murojaat qilishning real rejimida bitta segmentning xajmi nechaga teng? ",
        javob: " #64 Kbayt "
    },
    {
        savol: " Asosiy otiraga murojaat qilishning himoyalangan rejimida bitta sahifaning xajmi nechaga teng? ",
        javob: " #4 Kbayt "
    },
    {
        savol: " Intel protsessorlari oilasining, Core duo protsessoridan avvalgi protsessorlari ishlatilgan  kompyuterlarda birinchi sath kesh xotirasining maksimal xajmi nechaga teng bo‘lishi mumkin? ",
        javob: " #64 Kbayt "
    },
    {
        savol: " Intel protsessorlari oilasining, Core duo protsessoridan avvalgi protsessorlari ishlatilgan  kompyuterlarda ikkinchi sath kesh xotirasining maksimal xajmi nechaga teng bo‘lishi mumkin? ",
        javob: " #1 Mbayt "
    },
    {
        savol: " Intel protsessorlari oilasining, Core duo protsessoridan avvalgi protsessorlari ishlatilgan  kompyuterlarda uchinchi sath kesh xotirasining maksimal xajmi nechaga teng bo‘lishi mumkin? ",
        javob: " #bir necha megabaytga "
    },
    {
        savol: " Ulanish nuqtalari bir tomonda joylashgan xotira modullari qanday nomlanadi? ",
        javob: " #SIMM "
    },
    {
        savol: "Ulanish nuqtalari ikki tomonda joylashgan xotira modullari qanday nomlanadi?  ",
        javob: "#DIMM  "
    },
    {
        savol: "D-triggerlar asosida qurilgan tezkor xotira qurilmasini ko‘rsating.  ",
        javob: "#statik tezkor xotira qurilmasi (SRAM)  "
    },
    {
        savol: "Axborotni o‘chirish va qayta yozish mumkin bo‘lgan programmalanadigan doimiy xotira qurilmasini ko‘rsating.  ",
        javob: "#EPROM  "
    },
    {
        savol: " Ko‘chirib yozish buyruqlarini ko‘rsating. ",
        javob: "#MOV, PUSH  "
    },
    {
        savol: "Arifmetik buyruqlarni ko‘rsating.  ",
        javob: " #ADD, SUB "
    },
    {
        savol: "Ikkita operandalar ustida amallar bajarish buyruqlarini ko‘rsating.  ",
        javob: " #ADD, SUB "
    },
    {
        savol: " Bitta operanda ustida amallar bajarish buyruqlarini ko‘rsating. ",
        javob: " #INC, DEC "
    },
    {
        savol: "Boshqarishni uzatish buyruqlarini ko‘rsating.  ",
        javob: " #JMP, CALL "
    },
    {
        savol: " Ma’lumotlarni kiritish-chiqarish buyruqlarini ko‘rsating. ",
        javob: " #IN, OUT "
    },
    {
        savol: "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning eng yuqori qismida joylashgan xotirani ko‘rsating.  ",
        javob: " #ichki registrlar "
    },
    {
        savol: "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning ikkinchi qatorida joylashgan xotirani ko‘rsating.  ",
        javob: " #kesh xotira "
    },
    {
        savol: " Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning uchinchi qatorida joylashgan xotirani ko‘rsating. ",
        javob: " #asosiy xotira "
    },
    {
        savol: "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning to‘rtinchi qatorida joylashgan xotirani ko‘rsating.  ",
        javob: " #magnitli disk "
    },
    {
        savol: "Kompyuter xotirasini iyerarxik ko‘rinishda tashkil yetishda, iyerarxiyaning beshinchi qatorida joylashgan xotirani ko‘rsating.  ",
        javob: "#optik disk  "
    },
    {
        savol: " Magnitli disk yo‘lkasini tashkil yetuvchi sektorlari qanday uzunlikka ega? ",
        javob: " #512 bayt "
    },
    {
        savol: "Kichik hisoblash tizimlarining interfeyslariga ega disklar deganda qanday disklar tushuniladi?  ",
        javob: "#SCSI disklar  "
    },
    {
        savol: " Magnitli disklar asosida qurilgan, ma’lumotlarni tezkor kiritish-chiqarish qurilmasi qanday nomlanadi? ",
        javob: "#RAID disklar  "
    },
    {
        savol: "4 Gbaytli asosiy xotiraga ega bo‘lgan kompyuterlarda, adres shinasi necha razryadga teng bo‘ladi?  ",
        javob: "#32  "
    },
    {
        savol: " 8 Gbaytli asosiy xotiraga ega bo‘lgan kompyuterlarda, adres shinasi necha razryadga teng bo‘ladi? ",
        javob: "#33  "
    },
    {
        savol: " Sanoatdagi standart arxitekturali shinani ko‘rsating. ",
        javob: " #ISA "
    },
    {
        savol: " Sanoatdagi kengaytirilgan standart arxitekturali shinani ko‘rsating. ",
        javob: "#EISA  "
    },
    {
        savol: " Kompyuterning tashqi tashkil etuvchi qurilmalarni o‘zaro birgalikda ishlashini ta’minlovchi shinani ko‘rsating. ",
        javob: " #PCI "
    },
    {
        savol: " Tez ishlaydigan grafik port shinasini ko‘rsating. ",
        javob: " #AGP "
    },
    {
        savol: "Ma’lumotlarni ketma-ket uzatuvchi universal shinani ko‘rsating.  ",
        javob: "#USB  "
    },
    {
        savol: "Tarmoq interfeysi qurilmasini ko‘rsating.  ",
        javob: " #NID "
    },
    {
        savol: "ASCII kodi qanday uzunliklarga ega bo‘lishi mumkin?  ",
        javob: "#7 yoki 8 bit  "
    },
    {
        savol: "IS 10646 xalqaro standarti deb e’lon qilingan UNICODE-kodining uzunligi nechaga teng?  ",
        javob: "#16 bit  "
    },
    {
        savol: "IS 10646 xalqaro standarti deb e’lon qilingan kodni ko‘rsating.  ",
        javob: "#UNICODE  "
    },
    {
        savol: "Protsessor asosiy xotiradan ma’lumotlarni o‘qish uchun, shina orqali qaysi boshqarish signallari bilan xotiraga murojaat qiladi?  ",
        javob: "#MREQ, RD  "
    },
    {
        savol: "Protsessor asosiy xotiradan ma’lumotlarni o‘qish uchun, shina orqali xotiraga murojaat qilish signalini ko‘rsating.  ",
        javob: "#MREQ  "
    },
    {
        savol: "Monitorda rang hosil qilishda qanday ranglardan foydalaniladi?  ",
        javob: " #qizil, ko‘k, yashil "
    },
    {
        savol: " PCI Express shinasi, kompyuter tarkibiga kirgan qurilmalarni bog‘lashda, qanday rolni bajaradi? ",
        javob: "#universal kommutator  "
    },
    {
        savol: "Protsessor tarkibidagi muhim registrlardan biri bo‘lgan buyruqlar sanagichi registrini ko‘rsating.  ",
        javob: "#PC  "
    },
    {
        savol: "Protsessorning IP yoki EIP registri deganda qanday registr tushuniladi?  ",
        javob: "#buyruqlarni ko‘rsatuvchi registr  "
    },
    {
        savol: "Asosiy xotiraning dasturning buyruqlari  yoziladigan qismi nima deb ataladi?  ",
        javob: "#kodlar yoziladigan segment  "
    },
    {
        savol: "AX yoki EAX registri deganda nima tushuniladi?  ",
        javob: "#akkumulyator  "
    },
    {
        savol: "SF yoki EFLAGS registri deganda qaysi registr tushuniladi?  ",
        javob: "#bayroqlar registri  "
    },
    {
        savol: "CS registri deganda qaysi registr tushuniladi?  ",
        javob: "#kodlar yoziladigan segment registri  "
    },
    {
        savol: "Umumiy maqsadlar uchun mo‘ljallangan registrlarni ko‘rsating.  ",
        javob: "#AX, EAX  "
    },
    {
        savol: "Pentium 4 protsessori tarkibida nechta tranzistor bor?  ",
        javob: "#42 000 000  "
    },
   
   
    {
        savol:"Uchta o‘zgaruvchili mantiqiy funksiyaning xaqiqat jadvali necha qatordan iborat bo‘ladi?",
        javob:"#8"
    },
    {
        savol:"Tezkor tizimni dasturi qayerda joylashgan?",
        javob:"#Doimiy hotirada"
    },
    {
        savol:"Bir sekunddagi taktlar soni nima debataladi?",
        javob:"#Takt chastotasi"
    },
    {
        savol:"Mikroprotsessor tomonidan qabul qilinadigan bitlarning yaxlit soni nima deyiladi?",
        javob:"#Protsessor razryadligi"
    },
    {
        savol:"Dastur va ma’lumotlar qayta ishlash vaqtida qayerga joylashtiriladi?",
        javob:"#Tezkor hotiraga"
    },
    {
        savol:"Berilgan dastur bo‘yicha ma’lumotlarni qayta ishlash qurilmasi bu?",
        javob:"#Protsessor"
    },
    {
        savol:"Dastur – bu ... ?",
        javob:"#Kompyuterning  ma’lumotni qayta ishlash jarayonida bajaradigan buyruqlar ketma-ketligidir"
    },
    {
        savol:"Ma’lumotlar –bu ...?",
        javob:"#Kompyuter kodiga o‘tkazilgan axborotdir"
    },
    {
        savol:"Kompyuterda ma’lumot  qanday ko‘rinishda qayta ishlanadi?",
        javob:"#Ikkilik ko‘rinishida"
    },
    {
        savol:"Qaysi qurilma o‘chirilganida kompyuter ishlamaydi?",
        javob:"#Operativ hotira"
    },
    {
        savol:"Tashqi qurilmalarni boshqarish dasturi nima deb nomlanadi?",
        javob:"#drayver"
    },
    {
        savol:"«Sichqoncha» manipulyatori – bu ...",
        javob:"#ma’lumotni kiritish qurilmasidir"
    },
    {
        savol:"Multimedia- kompyuterning tarkibida qanday qurilma bo‘lishi shart?",
        javob:"#CD-ROM diskovod va tovush kartasi"
    },
    {
        savol:"Kompyuter o‘chirilganida kompyuterning kayerida ma’lumot ham o‘chib ketadi?",
        javob:"#operativ hotirada"
    },
    {
        savol:"XX asrning 40 yillarida hisoblash mashinalarining ishlash printsiplari kim tomonidan tavsiflangan?",
        javob:"#Jon Fon Neyman tomonidan"
    },
    {
        savol:"SHaxsiy kompyuterda ma’lumotni qayta ishlash qaysi qurilmada amalaga oshiriladi?",
        javob:"#Protsessorda"
    },
    {
        savol:"Magnit diskni sektorlarga bo‘lish nimani amalga oshiradi?",
        javob:"#Ma’lumotlarga murojat qilish vaqtini kamaytiradi"
    },
    {
        savol:"SHisha tolali kabelda signal qanday yo‘nalishda uzatiladi?",
        javob:"#Bir yo‘nalishda"
    },
    {
        savol:"Doimiy saqlovchi qurilma qanday hotira turiga kiradi?",
        javob:"#Manbaga bog‘liq bo‘lmagan qurilma"
    },
    {
        savol:"Kompyuter yoqilishini testlash dasturi qaerda yozilgan?",
        javob:"#BIOS mikrosxemasida"
    },
    {
        savol:"Diskovod – bu ...?",
        javob:"#Tashqi qurilmadagi ma’lumotni o‘qish/ yozish qurilmasi"
    },
    {
        savol:"Tarmoq kabellarining qaysi biri eng kata uzatish tezligiga va sifatga ega?",
        javob:"#Optik tolali"
    },
    {
        savol:"CD-disklarning hajmi qanchagacha bo‘lishi mumkin?",
        javob:"#700 Mbayt"
    },
    {
        savol:"Asosiy plataga nima o‘rnatiladi?",
        javob:"#Protsessor"
    },
    {
        savol:"Ma’lumotni protssessor qanday qayta ishlaydi?",
        javob:"#ikkilik sanoq tizimida"
    },
    {
        savol:"Takt chastotasining o‘lchov birligi nima?",
        javob:"#MGts"
    },
    {
        savol:"Personal kompyuterning shinalari nimani ta’minlab beradi?",
        javob:"#Element va qurilmalarning o‘zaro   bog‘lanishini"
    },
    {
        savol:"Monitorning harakteristikasini tanlang",
        javob:"#Ruxsat etish imkoniyati"
    },
    {
        savol:"Kompyuterning ish samaradorligi nimaga bog‘liq?",
        javob:"#Protsessor chastotasiga"
    },
    {
        savol:"Modem qanday vazifani bajaradi?",
        javob:"#Analogli signalni raqamli signalga va raqamli signalni analogli signalga  aylantirish uchunuzgartiradi."
    },
    {
        savol:"Vinchester nima uchun mo‘ljallangan?",
        javob:"#Ma’lumotlarni doimiy saqlash uchun"
    },
    {
        savol:"Strimmer nima uchun mo‘ljallangan?",
        javob:"#katta xajmdagi axborotni magnit tasmasiga yozish uchun"
    },
    {
        savol:"Qaysi qurilma yordamida tashqi qurilma bilan shina o‘rtasidagi aloqa amalga oshiriladi?",
        javob:"#kontroller"
    },
    {
        savol:"Quyidagilardan qaysi biri dasturiy vositalarga tegishli emas?",
        javob:"#protsessor"
    },
    {
        savol:"Skaner nima uchun mo‘ljallangan?",
        javob:"#qog‘oz bo‘lagidagi grafik tasvirlarni kompyuterga kiritish uchun"
    },
    {
        savol:"Qaysi qurilma odatdagi telefon aloqa chiziqlari orqali ma’lumotlar almashinishni ta’minlab bera oladi?",
        javob:"#modem"
    },
    {
        savol:"Telefon tarmog‘i orqali kompyuterlarni o‘zaro bog‘laydigan qurilma qanday nomlanadi?",
        javob:"#modem"
    },
    {
        savol:"Modem nima uchun mo‘ljallangan?",
        javob:"#telefon tarmog‘i orqali bir kompyuterdan, boshqa bir kompyuterga ma’lumotni uzatish uchun"
    },
    {
        savol:"Videoadapterning ko‘rsata olish imkoniyati deganda nima tushiniladi?",
        javob:"#gorizantal va vertikal bo‘ylab chiqarib bera olishi mumkin bo‘lgan nuqtalarining soni"
    },
    {
        savol:"Kontroller nima uchun mo‘ljallangan?",
        javob:"#protsessordan kelayotgan axborotlarni, qurilmalar ishini boshqaruvchi mos signallariga o‘zgartirish uchun"
    },
    {
        savol:"Modemlarning qanday xillarini bilasiz?",
        javob:"#ichki va tashqi"
    },
    {
        savol:"Djoystikdan nima uchun foydalaniladi?",
        javob:"#kompyuter o‘yinlari o‘ynash uchun"
    },
    {
        savol:"Ma’lumotlar shinasi nima uchun mo‘ljallangan?",
        javob:"#ishlanayotgan axborotni uzatish uchun"
    },
    {
        savol:"SHaxsiy kompyuterlar uchun mo‘ljallangan qoplamalarning qanday xillarini bilasiz?",
        javob:"#gorizontal (desktop) va vertikal (tower) xillari"
    },
    {
        savol:"Plotter nima uchun mo‘ljallangan?",
        javob:"#grafik axborotni qog‘ozga chiqarish uchun"
    },
    {
        savol:"Boshqarish shinasi nima uchun mo‘ljallangan?",
        javob:"#boshqarish signallarini uzatish uchun"
    },
    {
        savol:"Printirlarning qanday xillarini bilasiz?",
        javob:"#matritsali, sepuvchi va lazerli"
    },
    {
        savol:"Kompyuterning ma’lumotlar shinasining razryadlar soni nimaga bog‘liq?",
        javob:"#foydalanilgan protsessorning adreslashi mumkin bo‘lgan xotirasiga"
    },
    {
        savol:"Kompyuterning minimal tarkibiga nimalar kiradi?",
        javob:"#monitor, tizimli blok, klaviatura"
    },
    {
        savol:"Software deganda nima tushiniladi?",
        javob:"#kompyuterning dasturiy ta’minoti"
    },
    {
        savol:"«Kompyuter» so‘zini inglizchadan qilingan  dastlabki tarjimasi nimani anglatgan?",
        javob:"#buyruqlarni bajarish uchun mo‘ljallangan elektron qurilma"
    },
    {
        savol:"Hardware deganda nima tushiniladi?",
        javob:"#kompyuterning apparat qismi"
    },
    {
        savol:"Qaysi xotiraga murojaat qilish tezligi eng katta?",
        javob:"#registrli xotiraga"
    },
    {
        savol:"Registrga yangi ma’lumotni yozish jarayoni qanday nomlanishi mumkin?",
        javob:"#Yuklash"
    },
    {
        savol:"SHina orqali ma’lumotlarni uzatishga ruxsat beradigan qurilma nima deb ataladi?",
        javob:"#SHina ustasi"
    },
    {
        savol:"Fizik adreslar to‘plamini qanday nomlash mumkin?",
        javob:"#Adreslar fazosi"
    },
    {
        savol:"Dasturni to‘liq taxlil qilib, keyin bajarish uchun kompyuter xotirasiga yozadigan tizimli dastur nima deb ataladi?",
        javob:"#Translyator"
    },
    {
        savol:"Dasturning xar bir qatorini taxlil qilib, o‘sha zahoti bajaradigan tizimli dastur nima deb ataladi?",
        javob:"#Interpretator"
    },
    {
        savol:"Dasturchilarga, dasturlardagi xatolarni topish uchun yordam beradigan tizimli dastur nima ataladi?",
        javob:"#Otladchik"
    },
    {
        savol:"CISC qisqartmasi nimani anglatadi?",
        javob:"#To‘lik buyruqlar to‘plamiga ega kompyuter"
    },
    {
        savol:"RISC qisqartmasi nimani anglatadi?",
        javob:"#Qisqartirilgan buyruqlar to‘plamiga ega kompyuter"
    },
    {
        savol:"ISA qisqartmasi nimani anglatadi?",
        javob:"#Sanoatdagi standart arxitekturali shina"
    },
    {
        savol:"EISA qisqartmasi nimani anglatadi?",
        javob:"#Sanoatdagi kengaytirilgan standart arxitekturali shina"
    },
    {
        savol:"RAID qisqartmasi nimani anglatadi?",
        javob:"#Magnitli disklar asosida qurilgan, ma’lumotlarni tezkor kiritish-chiqarish qurilmasi"
    },
    {
        savol:"USB qisqartmasi nimani anglatadi?",
        javob:"#Ma’lumotlarni ketma-ket uzatuvchi universal shina"
    },
    {
        savol:"AGP qisqartmasi nimani anglatadi?",
        javob:"#Tez ishlaydigan grafik port shinasini"
    },
    {
        savol:"PCI qisqartmasi nimani anglatadi?",
        javob:"#Kompyuterning tashqi tashkil etuvchi qurilmalarni o‘zaro birgalikda ishlashini ta’minlovchi shina"
    },
    {
        savol:"DIMM qisqartmasi nimani anglatadi?",
        javob:"#Ulanish nuqtalari ikki tomonda joylashgan xotira moduli"
    },
    {
        savol:"SIMM qisqartmasi nimani anglatadi?",
        javob:"#Ulanish nuqtalari bir tomonda joylashgan xotira moduli"
    },
    {
        savol:"Qaysi protsessor «qatorining kengligi» 0,13 mkm ga teng?",
        javob:"#UltraSPARC III"
    },
    {
        savol:"Qaysi protsessor «qatorining kengligi» 0,18 mkm ga teng?",
        javob:"#Pentium 4"
    },
    {
        savol:"Qaysi protsessor Version 9 SPARC mikroarxitekturasiga ega?",
        javob:"#UltraSPARC III"
    },
    {
        savol:"Qaysi protsessor NetBurst mikroarxitekturasiga ega?",
        javob:"#Pentium 4"
    },
    {
        savol:"Qaysi protsessor tarkibida 29 000 000 tranzistor mavjud?",
        javob:"#UltraSPARC III"
    },
    {
        savol:"Qaysi protsessor tarkibida 42 000 000 tranzistor mavjud?",
        javob:"#Pentium 4"
    },
    {
        savol:"33 razryadli adres shinasi yordamida qanday xajmdagi xotirani adreslash mumkin?",
        javob:"#8 Gbayt"
    },
    {
        savol:"32 razryadli adres shinasi yordamida qanday xajmdagi xotirani adreslash mumkin?",
        javob:"#4 Gbayt"
    },
    {
        savol:"20 razryadli adres shinasi yordamida qanday xajmdagi xotirani adreslash mumkin?",
        javob:"#1 Mbayt"
    },
    {
        savol:"16 razryadli adres shinasi yordamida qanday xajmdagi xotirani adreslash mumkin?",
        javob:"#64 Kbayt"
    },
    {
        savol:"Amaliy tillar dasturchilari sath, olti sathli kompyuterlarning qaysi sathiga tegishli?",
        javob:"#5 sathiga"
    },
    {
        savol:"Assembler sathi, olti sathli kompyuterlarning qaysi sathiga tegishli?",
        javob:"#4 sathiga"
    },
    {
        savol:"Operatsion tizim sathi, olti sathli kompyuterlarning qaysi sathiga tegishli?",
        javob:"#3 sathiga"
    },
    {
        savol:"Buyruqlar to‘plami arxitekturasi sathi, olti sathli kompyuterlarning qaysi sathiga tegishli?",
        javob:"#2 sathiga"
    },
    {
        savol:"Mikroarxitektura sathi, olti sathli kompyuterlarning qaysi sathiga tegishli?",
        javob:"#1 sathiga"
    },
    {
        savol:"Raqamli mantiqiy sath, olti sathli kompyuterlarning qaysi sathiga tegishli?",
        javob:"#0 sathiga"
    },
    {
        savol:"Protsessorning qaysi registrida, keyingi bajariladigan buyruqning adresi yozib turiladi?",
        javob:"#PC"
    },
    {
        savol:"Keltirilganlarning qaysi biri Mur qonunini ifodalaydi?",
        javob:"#bir mikrosxemadagi tranzistorlar soni har yili 60% ga ortib boradi"
    },
    {
        savol:"Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
        javob:"#dasturni bajarishda shartli o‘tish imkoniyati"
    },
    {
        savol:"Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
        javob:"#hotira yacheykalari ketma-ket keluvchi adreslarga ega”"
    },
    {
        savol:"Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
        javob:"#hotirani ham ma’lumotlarni, ham dasturlarni saqlashda qo‘llash"
    },
    {
        savol:"Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
        javob:"#dastur yordamida boshqarish"
    },
    {
        savol:"Keltirilganlarning qaysi biri Fon Neyman printsiplariga to‘g‘ri keladi?",
        javob:"#ikkilik sanoq sistemasini qo‘llash"
    },
    {
        savol:"ATmega168  protsessoridagi yadrolar sonini ko‘rsating.",
        javob:"#1"
    },
    {
        savol:"ADM  protsessorlaridagi yadrolar sonini ko‘rsating.",
        javob:"#2"
    },
    {
        savol:"Core i7 protsessorlaridagi yadrolar sonini ko‘rsating",
        javob:"#ko‘p"
    },
    {
        savol:"Core i7 protsessorida necha sathli kesh qo‘llaniladi?",
        javob:"#3 sathli kesh"
    },
    {
        savol:"Tezkor tizim dasturlarning qaysi turiga kiradi?",
        javob:"#Tizimli dasturlar turiga"
    },
    {
        savol:"Drayverlar dasturlarning qaysi turiga kiradi?",
        javob:"#Tizimli dasturlar"
    },
    {
        savol:"Antiviruslar dasturlarning qaysi turiga kiradi?",
        javob:"#Tizimli dasturlar"
    },
    {
        savol:"Core i7 protsessori tarkibida nechtagacha tranzistor bor?",
        javob:"#1,16  mld. gacha"
    },
    {
        savol:"Protsessor siklining qaysi bosqichida natijalarini xotiraga yoki registrlarga yozish amalga oshiriladi?",
        javob:"#6"
    },
    {
        savol:"Protsessor siklining qaysi bosqichida buyruqni dekodlash amalga oshiriladi?",
        javob:"#3"
    },
    {
        savol:"Protsessor siklining qaysi bosqichida buyruqni tanlab olish amalga oshiriladi?",
        javob:"#1"
    },
    {
        savol:"Protsessor siklining qaysi bosqichida buyruqni bajarish amalga oshiriladi?",
        javob:"#5"
    },
    {
        savol:"Protsessor sikli nechta bosqichidan iborat?",
        javob:"#7"
    },
    {
        savol:"Protsessor siklining yettinchi bosqichida nima amalga oshiriladi?",
        javob:"#keyingi buyruqni bajarish tsikliga o‘tish"
    },
    {
        savol:"Protsessor siklining oltinchi bosqichida nima amalga oshiriladi?",
        javob:"#natijalarni xotiraga yoki registrlarga yozish"
    },
    {
        savol:"Protsessor siklining beshinchi bosqichida nima amalga oshiriladi?",
        javob:"#buyruq bajariladi"
    },
    {
        savol:"Protsessor siklining to‘rtinchi bosqichida nima amalga oshiriladi?",
        javob:"#buyruqni bajarish uchun kerak bo‘ladigan ma’lumotlar xotiradan yoki registrlardan tanlab olinadi"
    },
    {
        savol:"Protsessor siklining uchinchi bosqichida nima amalga oshiriladi?",
        javob:"#buyruq dekodlanadi"
    },
    {
        savol:"Protsessor siklining ikkinchi bosqichida nima amalga oshiriladi?",
        javob:"#RS-ning qiymati orttiriladi"
    },
    {
        savol:"Protsessor siklining birinchi bosqichida nima amalga oshiriladi?",
        javob:"#RS yordamida bajarilishi kerak bo‘lgan buyruq tanlab olinadi"
    },
    {
        savol:"Qisqartirilgan buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?",
        javob:"#RISC"
    },
    {
        savol:"To‘liq buyruqlar to‘plamiga ega kompyuter qanday nomlanadi?#",
        javob:"#CISC"
    },
    {
        savol:"Natijani xotiraga yoki registrlarga yozish besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
        javob:"#S5"
    },
    {
        savol:"Buyruqni bajarish besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
        javob:"#S4"
    },
    {
        savol:"Operandalarni tanlash besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
        javob:"#S3"
    },
    {
        savol:"Bajariladigan buyruqni dekodlash besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
        javob:"#S2"
    },
    {
        savol:"Bajariladigan buyruqni tanlash besh sathli konveyerning qaysi bosqichida amalga oshiriladi?",
        javob:"#S1"
    },
    {
        savol:"Besh sathli konveyerning beshinchi bosqichida (C5) nima amalga oshiriladi?",
        javob:"#natijalarni xotiraga yoki registrlarga yozish"
    },
    {
        savol:"Besh sathli konveyerning to‘rtinchi bosqichida (C4) nima amalga oshiriladi?",
        javob:"#buyruqni bajarish"
    },
    {
        savol:"Besh sathli konveyerning uchinchi bosqichida (C3) nima amalga oshiriladi?",
        javob:"#operandalarni tanlash"
    },
    {
        savol:"Besh sathli konveyerning ikkinchi bosqichida (C2) nima amalga oshiriladi?",
        javob:"#buyruqni dekodlash"
    },
    {
        savol:"Besh sathli konveyerning birinchi bosqichida (C1) nima amalga oshiriladi?",
        javob:"#bajarilishi kerak bo‘lgan buyruqni tanlash"
    },
    {
        savol:"Pentium 4 protsessori mikrosxemasida axborot signallari uchun nechta ulanish nuqtalari ajratilgan?",
        javob:"#198"
    },
    {
        savol:"UltraSPARC III protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?",
        javob:"#1368"
    },
    {
        savol:"Pentium 4 protsessori mikrosxemasi nechta chiqish oyoqchalariga ega?",
        javob:"#478"
    },
    {
        savol:"Pentium 4 protsessori mikroarxitekturasi qanday nomlanadi?",
        javob:"#NetBurst"
    },
    {
        savol:"UltraSPARC III protsessori tarkibida nechta tranzistor bor?",
        javob:"#29 000 000"
    },
    {
        savol:"Pentium 4 protsessorida «qatorining kengligi» qanday qiymatga ega?",
        javob:"#0,18 mkm"
    },
    

]
export default tests;