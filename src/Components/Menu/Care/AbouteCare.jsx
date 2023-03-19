import { Typography, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

const AbouteCare = () => {
  let data = [
    {
      title: "1. O'simliklarni yorug'ligingizga qarab tanlang",
      para: [
        {
          text: "Siz sevgan o'simliklar siz ega bo'lishingiz mumkinmi? Bizning №1 qoidamiz (yashil) sizning makoningiz oladigan tabiiy yorug'lik miqdorini aniqlash va shunga mos ravishda o'simlikni tanlashdir. Agar siz shunchaki qarash orqali ishonchingiz komil bo'lmasa, derazalaringiz qaysi tomonga qarab turishini aniqlashdan boshlang.",
        },
        {
          text: " Umuman olganda, janubga qaragan derazalar yorqin nur beradi, sharq va g'arbga qaragan derazalar o'rtacha yorug'lik beradi va shimolga qaragan derazalar kam yorug'lik beradi. Agar derazangiz tashqarisida quyosh nuriga to'sqinlik qiladigan biror narsa bo'lsa, masalan, katta daraxt yoki bino, buni ham hisobga oling. Ko'pgina uy o'simliklari yorqin, bilvosita quyosh nurini afzal ko'radi, lekin ko'pchilik yorug'likning past darajalariga (masalan, kam nurga chidamli ilon o'simliklari va ZZ o'simliklari) toqat qiladilar.",
        },
        {
          text: " Agar derazangiz orqali quyosh kuchli bo'lsa, yorug'likni tarqatish uchun shaffof parda qo'shishingiz mumkin. Kaktuslar va aloe kabi ba'zi sukkulentlar yorqinroq, to'g'ridan-to'g'ri quyosh nuriga bardosh bera oladi. Siz biron bir o'simlikni haddan tashqari ko'paytirishni xohlamaysiz, shuning uchun ular juda yorqin yoki juda kam yorug'likda bo'lsa, ularni kuzatib boring.",
        },
      ],
    },
    {
      title: "2. Bo'sh vaqtingiz qanchaligiga qarab  o'simliklarni tanlang",
      para: [
        {
          text: "O'zingizga o'xshagan reaktiv o'rnatuvchi kam parvarish talab qilinadigan va qurg'oqchilikka chidamli sukkulentlar, ZZ o'simliklari yoki ilon o'simliklarining chidamliligidan bahramand bo'ladi, ularning barchasi juda past kalit, agar ular etarli yorug'lik (mos ravishda yorqin va past yorug'lik) bo'lsa. Keyingi safaringizdan qaytganingizda ular eng yaxshi ko'rinishda bo'lishi kerak.",
        },
        {
          text: " Agar ko'proq vaqtingiz bo'lsa, siz bir nechta e'tiborni yaxshi ko'radigan havo o'simliklarini, orkide yoki fernsni sinab ko'rishingiz mumkin. Yuz uchun tuman kabi, sug'orishlar orasida har kuni filtrlangan suvning qo'shimcha chayqalishi bu nozik o'simliklar uchun namlik darajasini yaxshi va muvozanatli ushlab turadi.",
        },
      ],
    },
    {
      title: "3. Sug'orishda ehtiyot bo'ling",
      para: [
        {
          text: "Haddan tashqari sug'orishdan ko'ra, o'simliklarni sug'orish yaxshiroqdir. Ko'p suv ildizlarning chirishiga olib kelishi mumkin. Sug'orish jadvalini buzing va o'simlikni faqat kerak bo'lganda sug'oring. Sirtdan kamida 2 dyuym chuqurlikda quruqligiga ishonch hosil qilish uchun avval idish aralashmasi yoki tuproqni tekshiring. Agar sizning tuprog'ingiz quyuq rangga o'xshasa, nam bo'lsa va barmog'ingizga yopishib qolsa, sizning o'simlikingiz hozircha buni qilish uchun etarli suvga ega.",
        },
        {
          text: "Yil davomida suv qanchalik tez-tez o'zgarib turadi. Qish oylarida o'simliklar kamroq suvga muhtoj, ular sekin o'sganda, kunlar qisqaroq va quyosh nuri kamroq bo'ladi. Agar issiqlik yoqilgan bo'lsa va ularning tuproqlari tezroq quriydigan bo'lsa, ularga bir oz ko'proq suv kerak bo'lishi mumkin. O'simlikning yon tomonlaridan tortib olingan barglar yoki tuproq chanqagan o'simlikning belgisidir.",
        },
        {
          text: "Har doim iliq suvdan foydalaning, chunki u eng yaxshi so'riladi. To'g'ridan-to'g'ri o'simlikning poydevori atrofidagi tuproqqa suv quying, chunki o'simliklar suvni ildizlaridan o'zlashtiradi. Bu erda yagona istisno - havo o'simliklari kabi, barglari orqali suvni o'zlashtiradigan Epifitlar.",
        },
        {
          text: "Agar drenaj teshigi bo'lsa, siz o'simlik tagiga likopchani qo'yishingiz mumkin. Sug'organingizdan so'ng, o'simlikni bo'shatishdan oldin bir necha soat davomida idishni to'ldiradigan kirish suviga soling.",
        },
      ],
    },
    {
      title: "4. Zarur bo'lganda namlik darajasini oshiring",
      para: [
        {
          text: "Sizning o'simlikingizning tabiiy muhitiga sodiq qolish sizning o'simlikingizning yopiq joylarda rivojlanishiga yordam beradi. Ko'pgina tropik o'simliklar yuqori namlikni va yorqin va o'rtacha, bilvosita yorug'likni afzal ko'radi. Qishning qurg'oqchil oylarida o'xshash o'simliklarni guruhlash yanada nam mikroiqlimni yaratishga yordam beradi. Namlagich ham yordam berishi mumkin va bu odamlar uchun juda yaxshi (bu erda namlik darajasini oshirishning ko'proq usullarini toping). Boshqa tomondan, kaktuslar va sukkulentlar kabi cho'lda yashovchilarning aksariyati quruq havo va yorqin, to'g'ridan-to'g'ri yorug'likni afzal ko'radilar. Ular namlikka unchalik ahamiyat bermaydilar.",
        },
      ],
    },
    {
      title: "5. Har doim haroratni barqaror ushlab turing",
      para: [
        {
          text: "Zavodingizning uy muhitini iloji boricha barqaror saqlang. Ekstremal o'zgarishlar o'simliklarni stressga olib kelishi mumkin. Haroratni 65 va 85 daraja F orasida saqlang va o'simliklaringizni issiq yoki sovuq shashka hosil qilishi mumkin bo'lgan radiatorlar, konditsionerlar va majburiy havo teshiklari yaqiniga qo'ymang.",
        },
      ],
    },
    {
      title: "6. O'g'it o'solish davrini biling",
      para: [
        {
          text: `Uy o'simliklarida o'g'itdan foydalanganda ehtiyot bo'ling. Ko'p miqdorda o'g'it yaxshilikdan ko'ra ko'proq zarar keltirishi mumkin. Uy o'simliklari tashqi o'simliklar kabi tez-tez o'g'itga muhtoj emas. Agar siz o'simlikni urug'lantirishni tanlasangiz, buni vegetatsiya davrida (erta bahordan kuzning boshiga) qilish yaxshidir va umumiy qoidaga amal qiling: "kamroq - ko'p". Ko'pgina do'konlarda sotib olingan o'g'itlarni ishlatishdan oldin suv bilan suyultirish kerak.`,
        },
        {
          text: "Agar sizda o'simlik kamida bir yil bo'lsa, uni birinchi marta urug'lantirishingiz mumkin. Barcha maqsadli o'g'itlardan foydalanishni tavsiya etamiz. Har doim ko'rsatmalarga amal qiling. Agar siz faqat tuproqni o'zgartirgan bo'lsangiz, o'g'itni o'tkazib yuboring! Yangi tuproq etarli miqdorda yangi ozuqa moddalariga ega.",
        },
      ],
    },
    {
      title: "7. Ishonchli do'kondan xarid qiling",
      para: [
        {
          text: "O'simliklaringizni GULBAZAR, sevimli mahalliy bog' markazi, ixtisoslashgan do'konlar yoki floristlar kabi nufuzli manbalardan xarid qiling. O'simlik mutaxassislari bilan manbadan xarid qilish, ular sizning barcha savollaringizga javob berishlari mumkinligini anglatadi. O'simliklarni sotadigan yoki ular bilan ishlaydigan ko'pchilik odamlar ular haqida gapirishni yaxshi ko'radilar. Biz albatta qilamiz.",
        },
        {
          text: "Agar siz birinchi marta o'simlik ota-onasi bo'lsangiz, o'simliklar odatda podvallarda yoki qorong'i omborlarda saqlanadigan yirik do'konlar va supermarketlardan qoching. O'simlikingizda sariq barglar, chang chiriyotgan, g'alati dog'lar, jigarrang uchlari va zaif poyalarini tekshiring, chunki bu nosog'lom o'simlikning belgilaridir.",
        },
      ],
    },
    {
      title: "8. Dastlab bir oz ehtiyotkorlik ko'rsating",
      para: [
        {
          text: "Zavodingiz eshigingizga yetkazilgach yoki mahalliy do'koningizdan uyingizga olib kelgach, yangi muhitga moslashishi uchun bir necha hafta kerak bo'ladi. Dastlab o'simlikka biroz qo'shimcha e'tibor bering. O'simlikni kuzatish sizga qachon sug'orish kerakligini va qachon suv bermaslik kerakligini, harorat juda yuqori yoki juda past bo'lsa va u etarli darajada quyoshga ega bo'lsa, aytib beradi. Bundan tashqari, ularga qarash juda yoqimli.",
        },
      ],
    },
    {
      title: "9. O'simlikni ko'chirishdan qo'rqmang",
      para: [
        {
          text: `Keng tarqalgan noto'g'ri tushuncha, "ko'chirish" o'simlikingizni yangi ekish moslamasiga qo'yishni anglatmaydi, balki yangi ozuqaviy moddalar bilan ta'minlash uchun o'simlikning tuprog'ini yangi idish aralashmasi bilan almashtirishni anglatadi. O'simliklar qanchalik faol o'sayotganiga qarab, odatda har 12-18 oyda bir marta ko'chirilishi kerak. Agar sizning o'simlikingiz hozirgi o'simlikdan o'sib ketgan bo'lsa, siz uni kattalashtirish vaqti sifatida ham ishlatishingiz mumkin. Hozirgi idishidan atigi 1-3 dyuym kattaroq ekish moslamasini tanlang. Sizning o'simlikingiz tuproqda suzmaydi, bu sizni suvga olib kelishi mumkin, lekin o'sish uchun biroz qo'shimcha joy bor.`,
        },
      ],
    },
    {
      title: "10. Drenajni yodda tuting",
      para: [
        {
          text: "Agar o'simliklarni sug'orishda qo'lingiz og'ir bo'lsa, drenajni yodda tuting. Drenaj teshigi va likopchali ekish moslamasini tanlashingiz mumkin, o'simlikni o'simlik ichiga joylashtirilgan o'stiriladigan idishda saqlashingiz yoki tuynuksiz ekish uchun lava toshlarini qo'shishingiz mumkin (ortiqcha suv oqishi uchun yoriqlar yaratish uchun). Siz uchun eng yaxshisini qiling! Turli xil o'simliklar uchun turli usullarni sinab ko'rishdan qo'rqmang.",
        },
      ],
    },
  ];

  const theme = createTheme({
    typography: {
      fontFamily: [
        "Montserrat",
        "Lora",
        '"Helvetica Neue"',
        "Playfair Display",
        "Poppins",
        "Arial",
        "serif",
      ].join(","),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#e8f8fa",
          padding: {
            xs: "8rem 2rem",
            sm: "8rem 2ren",
            md: "8rem 0 0 2.5rem",
            lg: "8rem 0 0 2.5rem",
          },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: "2rem", sm: "2.2rem", md: "2.8rem", lg: "3rem" },
              lineHeight: { xs: "35px", sm: "45px", md: "55px", lg: "65px" },
              width: { sm: "100%", md: "80%" },
            }}
          >
            O'simliklarni parvarish qilish bo'yicha 10 ta maslahatimiz
          </Typography>
          <Typography
            sx={{
              paddingTop: "1rem",
              width: { sm: "100%", md: "80%" },
              fontSize: { xs: "1rem", sm: "1rem", md: "1rem", lg: "1.1rem" },
            }}
          >
            O'simlikka g'amxo'rlik qilishning ko'plab usullari mavjud.
            O'simliklar bo'yicha mutaxassislarimiz yordamida biz sog'lom va
            baxtli o'simliklar uchun eng yaxshi 10 ta maslahatni ajratib
            ko'rsatdik.
          </Typography>
        </Box>
        <Box
          sx={{
            alignItems: "bottom",
            display: { xs: "none", sm: "none", md: "flex", lg: "flex" },
          }}
        >
          <img
            style={{ width: "150px" }}
            src="https://cdn.sanity.io/images/y346iw48/production/41a5bd08b7e6724c329d188001bf13278660d31d-252x448.png?auto=format"
          />
        </Box>
      </Box>
      <Box
        sx={{
          padding: {
            xs: "8rem 1rem",
            sm: "8rem 1rem",
            md: "8rem 2rem",
            lg: "8rem 2.5rem",
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: { sm: "100%", md: "75%" }, padding: ".8rem" }}>
          <img
            style={{ width: "100%" }}
            src="https://cdn.sanity.io/images/y346iw48/production/ac2247a5302b8c618b045f0acd068353c562818b-3000x1969.jpg?w=884&auto=format"
          />
        </Box>
        <Box sx={{ width: { sm: "100%", md: "60%" }, padding: "4rem .8rem" }}>
          {data &&
            data.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingTop: "3rem",
                }}
              >
                <Typography
                  sx={{
                    fontSize: {
                      xs: "1.8rem",
                      sm: "1.9rem",
                      md: "2.4rem",
                      lg: "2.6rem",
                    },
                    lineHeight: {
                      xs: "35px",
                      sm: "45px",
                      md: "55px",
                      lg: "65px",
                    },
                  }}
                >
                  {item.title}
                </Typography>
                {item.para &&
                  item.para.map((paraItem) => (
                    <Typography
                      sx={{
                        paddingTop: "1rem",
                        fontSize: {
                          xs: ".9rem",
                          sm: ".9rem",
                          md: ".9rem",
                          lg: "1rem",
                        },
                      }}
                    >
                      {paraItem.text}
                    </Typography>
                  ))}
              </Box>
            ))}
          <Typography
            sx={{
              fontSize: {
                xs: ".9rem",
                sm: ".9rem",
                md: ".9rem",
                lg: "1rem",
              },
              marginTop: "4rem",
              fontStyle: "italic",
              textAlign: "end",
            }}
          >
            {" "}
            O'simliklar bo'yicha mutaxassis:{" "}
            <span style={{ fontWeight: "bold" }}>Lobar Rustamova</span>{" "}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AbouteCare;
