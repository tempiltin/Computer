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
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },
    {
        savol: "  ",
        javob: "  "
    },

]
export default tests;