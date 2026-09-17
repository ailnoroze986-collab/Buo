const textInput = document.getElementById("textInput");
const fontsList = document.getElementById("fontsList");
const searchInput = document.getElementById("searchInput");
const counter = document.getElementById("counter");
const resultCount = document.getElementById("resultCount");
const toast = document.getElementById("toast");

let currentCategory = "all";
let currentLanguage = "fa";

let favorites =
    JSON.parse(localStorage.getItem("fontFavorites") || "[]");


/* =========================================
   موتور استایل
========================================= */

const styles = [

    /* LOVE */

    {
        name: "قلب عاشقانه",
        category: "love",
        make: t => `♡ ${t} ♡`
    },

    {
        name: "قلب ویژه",
        category: "love",
        make: t => `❤️⃝${t}❤️`
    },

    {
        name: "قلب پروانه‌ای",
        category: "love",
        make: t => `🦋 ${t} 🦋`
    },

    {
        name: "عاشقانه خاص",
        category: "love",
        make: t => `𓆩♡𓆪 ${t} 𓆩♡𓆪`
    },

    {
        name: "قلب شکسته",
        category: "love",
        make: t => `💔 ${t} 💔`
    },


    /* ROYAL */

    {
        name: "سلطنتی",
        category: "royal",
        make: t => `꧁༺ ${t} ༻꧂`
    },

    {
        name: "تاج",
        category: "royal",
        make: t => `♛ ${t} ♛`
    },

    {
        name: "شاهانه",
        category: "royal",
        make: t => `👑 『${t}』 👑`
    },

    {
        name: "سلطان",
        category: "royal",
        make: t => `༺♛ ${t} ♛༻`
    },


    /* DARK */

    {
        name: "دارک",
        category: "dark",
        make: t => `☠︎ ${t} ☠︎`
    },

    {
        name: "دارک ویژه",
        category: "dark",
        make: t => `༒ ${t} ༒`
    },

    {
        name: "جمجمه",
        category: "dark",
        make: t => `💀 ${t} 💀`
    },

    {
        name: "مرموز",
        category: "dark",
        make: t => `𓆩 ${t} 𓆪`
    },


    /* COOL */

    {
        name: "خفن",
        category: "cool",
        make: t => `★彡 ${t} 彡★`
    },

    {
        name: "آتش",
        category: "cool",
        make: t => `🔥 ${t} 🔥`
    },

    {
        name: "برق",
        category: "cool",
        make: t => `⚡ ${t} ⚡`
    },

    {
        name: "استایل ستاره",
        category: "cool",
        make: t => `✦ ${t} ✦`
    },

    {
        name: "استایل الماس",
        category: "cool",
        make: t => `◆ ${t} ◆`
    },


    /* CUTE */

    {
        name: "کیوت",
        category: "cute",
        make: t => `🌸 ${t} 🌸`
    },

    {
        name: "پروانه",
        category: "cute",
        make: t => `🦋✨ ${t} ✨🦋`
    },

    {
        name: "گل",
        category: "cute",
        make: t => `✿ ${t} ✿`
    },

    {
        name: "ناز",
        category: "cute",
        make: t => `૮ ˶ᵔ ᵕ ᵔ˶ ა ${t}`
    },


    /* SYMBOL */

    {
        name: "نماد ستاره",
        category: "symbol",
        make: t => `✧ ${t} ✧`
    },

    {
        name: "نماد الماس",
        category: "symbol",
        make: t => `◇ ${t} ◇`
    },

    {
        name: "قاب مربعی",
        category: "symbol",
        make: t => `『 ${t} 』`
    },

    {
        name: "قاب خاص",
        category: "symbol",
        make: t => `【 ${t} 】`
    },

    {
        name: "خطی",
        category: "symbol",
        make: t => `━━ ${t} ━━`
    },


    /* ALL */

    {
        name: "مینی‌مال",
        category: "all",
        make: t => `• ${t} •`
    },

    {
        name: "ساده خاص",
        category: "all",
        make: t => `「${t}」`
    },

    {
        name: "دو ستاره",
        category: "all",
        make: t => `★★ ${t} ★★`
    },

    {
        name: "موج",
        category: "all",
        make: t => `〰️ ${t} 〰️`
    }

];


/* =========================================
   فونت‌های انگلیسی
========================================= */

const englishMaps = {

    bold: {
        A:"𝐀",B:"𝐁",C:"𝐂",D:"𝐃",E:"𝐄",F:"𝐅",G:"𝐆",
        H:"𝐇",I:"𝐈",J:"𝐉",K:"𝐊",L:"𝐋",M:"𝐌",N:"𝐍",
        O:"𝐎",P:"𝐏",Q:"𝐐",R:"𝐑",S:"𝐒",T:"𝐓",U:"𝐔",
        V:"𝐕",W:"𝐖",X:"𝐗",Y:"𝐘",Z:"𝐙",

        a:"𝐚",b:"𝐛",c:"𝐜",d:"𝐝",e:"𝐞",f:"𝐟",g:"𝐠",
        h:"𝐡",i:"𝐢",j:"𝐣",k:"𝐤",l:"𝐥",m:"𝐦",n:"𝐧",
        o:"𝐨",p:"𝐩",q:"𝐪",r:"𝐫",s:"𝐬",t:"𝐭",u:"𝐮",
        v:"𝐯",w:"𝐰",x:"𝐱",y:"𝐲",z:"𝐳"
    },

    italic: {
        A:"𝑨",B:"𝑩",C:"𝑪",D:"𝑫",E:"𝑬",F:"𝑭",G:"𝑮",
        H:"𝑯",I:"𝑰",J:"𝑱",K:"𝑲",L:"𝑳",M:"𝑴",N:"𝑵",
        O:"𝑶",P:"𝑷",Q:"𝑸",R:"𝑹",S:"𝑺",T:"𝑻",U:"𝑼",
        V:"𝑽",W:"𝑾",X:"𝑿",Y:"𝒀",Z:"𝒁",

        a:"𝒂",b:"𝒃",c:"𝒄",d:"𝒅",e:"𝒆",f:"𝒇",g:"𝒈",
        h:"𝒉",i:"𝒊",j:"𝒋",k:"𝒌",l:"𝒍",m:"𝒎",n:"𝒏",
        o:"𝒐",p:"𝒑",q:"𝒒",r:"𝒓",s:"𝒔",t:"𝒕",u:"𝒖",
        v:"𝒗",w:"𝒘",x:"𝒙",y:"𝒚",z:"𝒛"
    },

    double: {
        A:"𝔸",B:"𝔹",C:"ℂ",D:"𝔻",E:"𝔼",F:"𝔽",G:"𝔾",
        H:"ℍ",I:"𝕀",J:"𝕁",K:"𝕂",L:"𝕃",M:"𝕄",N:"ℕ",
        O:"𝕆",P:"ℙ",Q:"ℚ",R:"ℝ",S:"𝕊",T:"𝕋",U:"𝕌",
        V:"𝕍",W:"𝕎",X:"𝕏",Y:"𝕐",Z:"ℤ",

        a:"𝕒",b:"𝕓",c:"𝕔",d:"𝕕",e:"𝕖",f:"𝕗",g:"𝕘",
        h:"𝕙",i:"𝕚",j:"𝕛",k:"𝕜",l:"𝕝",m:"𝕞",n:"𝕟",
        o:"𝕠",p:"𝕡",q:"𝕢",r:"𝕣",s:"𝕤",t:"𝕥",u:"𝕦",
        v:"𝕧",w:"𝕨",x:"𝕩",y:"𝕪",z:"𝕫"
    },

    mono: {
        A:"𝙰",B:"𝙱",C:"𝙲",D:"𝙳",E:"𝙴",F:"𝙵",G:"𝙶",
        H:"𝙷",I:"𝙸",J:"𝙹",K:"𝙺",L:"𝙻",M:"𝙼",N:"𝙽",
        O:"𝙾",P:"𝙿",Q:"𝚀",R:"𝚁",S:"𝚂",T:"𝚃",U:"𝚄",
        V:"𝚅",W:"𝚆",X:"𝚇",Y:"𝚈",Z:"𝚉",

        a:"𝚊",b:"𝚋",c:"𝚌",d:"𝚍",e:"𝚎",f:"𝚏",g:"𝚐",
        h:"𝚑",i:"𝚒",j:"𝚓",k:"𝚔",l:"𝚕",m:"𝚖",n:"𝚗",
        o:"𝚘",p:"𝚙",q:"𝚚",r:"𝚛",s:"𝚜",t:"𝚝",u:"𝚞",
        v:"𝚟",w:"𝚠",x:"𝚡",y:"𝚢",z:"𝚣"
    }

};


function convertEnglish(text, map) {

    return [...text]
        .map(c => map[c] || c)
        .join("");

}


/* =========================================
   تولید خروجی
========================================= */

function getOutputs() {

    const text = textInput.value.trim();

    if (!text) {

        return [];

    }

    let output = [];

    styles.forEach(style => {

        output.push({
            name: style.name,
            category: style.category,
            text: style.make(text)
        });

    });


    if (currentLanguage === "en") {

        output.push({
            name: "English Bold",
            category: "cool",
            text: convertEnglish(
                text,
                englishMaps.bold
            )
        });

        output.push({
            name: "English Italic",
            category: "love",
            text: convertEnglish(
                text,
                englishMaps.italic
            )
        });

        output.push({
            name: "English Double",
            category: "symbol",
            text: convertEnglish(
                text,
                englishMaps.double
            )
        });

        output.push({
            name: "English Mono",
            category: "cool",
            text: convertEnglish(
                text,
                englishMaps.mono
            )
        });

    }

    return output;
}


/* =========================================
   نمایش
========================================= */

function render() {

    const outputs = getOutputs();

    const search =
        searchInput.value.trim().toLowerCase();

    counter.textContent =
        `${textInput.value.length} کاراکتر`;

    fontsList.innerHTML = "";

    const filtered = outputs.filter(item => {

        const categoryOK =
            currentCategory === "all" ||
            item.category === currentCategory;

        const searchOK =
            item.name.toLowerCase().includes(search);

        return categoryOK && searchOK;

    });

    resultCount.textContent = filtered.length;

    filtered.forEach((item, index) => {

        const card =
            document.createElement("div");

        card.className = "font-card";

        const favorite =
            favorites.includes(item.text);

        card.innerHTML = `

            <div class="font-top">

                <span class="font-name">
                    ${item.name}
                </span>

                <div class="font-buttons">

                    <button class="favorite-btn
                    ${favorite ? "active" : ""}">
                        ${favorite ? "❤️" : "♡"}
                    </button>

                    <button class="copy-btn">
                        📋 کپی
                    </button>

                </div>

            </div>

            <div class="font-output"></div>

        `;

        card.querySelector(".font-output")
            .textContent = item.text;


        /* COPY */

        card.querySelector(".copy-btn")
            .addEventListener("click", async () => {

                try {

                    await navigator.clipboard
                        .writeText(item.text);

                    showToast("✅ متن کپی شد");

                } catch {

                    showToast(
                        "❌ کپی انجام نشد"
                    );

                }

            });


        /* FAVORITE */

        card.querySelector(".favorite-btn")
            .addEventListener("click", e => {

                const button = e.currentTarget;

                if (favorites.includes(item.text)) {

                    favorites =
                        favorites.filter(
                            x => x !== item.text
                        );

                    button.textContent = "♡";
                    button.classList.remove("active");

                    showToast(
                        "از علاقه‌مندی حذف شد"
                    );

                } else {

                    favorites.push(item.text);

                    localStorage.setItem(
                        "fontFavorites",
                        JSON.stringify(favorites)
                    );

                    button.textContent = "❤️";
                    button.classList.add("active");

                    showToast(
                        "❤️ به علاقه‌مندی اضافه شد"
                    );

                }

            });

        fontsList.appendChild(card);

    });

}


/* =========================================
   Toast
========================================= */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 1700);

}


/* =========================================
   دسته بندی
========================================= */

document
.querySelectorAll(".category")
.forEach(button => {

    button.addEventListener("click", () => {

        document
        .querySelectorAll(".category")
        .forEach(x =>
            x.classList.remove("active")
        );

        button.classList.add("active");

        currentCategory =
            button.dataset.category;

        render();

    });

});


/* =========================================
   زبان
========================================= */

document
.querySelectorAll(".lang")
.forEach(button => {

    button.addEventListener("click", () => {

        document
        .querySelectorAll(".lang")
        .forEach(x =>
            x.classList.remove("active")
        );

        button.classList.add("active");

        currentLanguage =
            button.dataset.lang;

        render();

    });

});


/* =========================================
   ابزارهای سریع
========================================= */

document
.querySelectorAll(".tool")
.forEach(button => {

    button.addEventListener("click", () => {

        const symbol =
            button.dataset.add;

        const text =
            textInput.value;

        textInput.value =
            symbol + " " + text + " " + symbol;

        render();

    });

});


/* =========================================
   پاک کردن
========================================= */

document
.getElementById("clearBtn")
.addEventListener("click", () => {

    textInput.value = "";

    render();

    textInput.focus();

});


/* =========================================
   استایل تصادفی
========================================= */

document
.getElementById("randomBtn")
.addEventListener("click", () => {

    const random =
        styles[
            Math.floor(
                Math.random() * styles.length
            )
        ];

    if (!textInput.value.trim()) {

        textInput.value = "متن من";

    }

    showToast(
        "🎲 استایل تصادفی انتخاب شد"
    );

    render();

});


/* =========================================
   استایل ساز خودکار
========================================= */

document
.getElementById("generateBtn")
.addEventListener("click", () => {

    if (!textInput.value.trim()) {

        textInput.value = "متن خاص من";

    }

    currentCategory = "all";

    document
    .querySelectorAll(".category")
    .forEach(x =>
        x.classList.remove("active")
    );

    document
    .querySelector('[data-category="all"]')
    .classList.add("active");

    render();

    showToast(
        "⚡ استایل‌ها ساخته شدند"
    );

});


/* =========================================
   جستجو
========================================= */

searchInput
.addEventListener("input", render);


/* =========================================
   Theme
========================================= */

document
.getElementById("themeBtn")
.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const active =
        document.body.classList.contains("light");

    document.getElementById("themeBtn")
        .textContent =
        active ? "☀️" : "🌙";

});


/* =========================================
   Menu
========================================= */

const menu =
    document.getElementById("menu");

document
.getElementById("menuBtn")
.addEventListener("click", () => {

    menu.classList.add("show");

});

document
.getElementById("closeMenu")
.addEventListener("click", () => {

    menu.classList.remove("show");

});

menu.addEventListener("click", e => {

    if (e.target === menu) {

        menu.classList.remove("show");

    }

});


/* =========================================
   شروع
========================================= */

textInput.value = "Ail Noroze";

render();/* =========================================
   🚀 FONT MAKER PRO - VERSION 3
   هزاران استایل ترکیبی
========================================= */


/* ---------- قاب‌ها ---------- */

const advancedFrames = [

    ["♡ ", " ♡"],
    ["♥ ", " ♥"],
    ["❤ ", " ❤"],
    ["❥ ", " ❥"],
    ["ღ ", " ღ"],
    ["୨♡୧ ", " ୨♡୧"],
    ["𓆩 ", " 𓆪"],
    ["༺ ", " ༻"],
    ["༻ ", " ༺"],
    ["꧁ ", " ꧂"],
    ["『 ", " 』"],
    ["「 ", " 」"],
    ["【 ", " 】"],
    ["〖 ", " 〗"],
    ["〘 ", " 〙"],
    ["《 ", " 》"],
    ["〈 ", " 〉"],
    ["〔 ", " 〕"],
    ["〚 ", " 〛"],
    ["⟦ ", " ⟧"],
    ["⟪ ", " ⟫"],
    ["❮ ", " ❯"],
    ["❰ ", " ❱"],
    ["⸢ ", " ⸥"],
    ["⟬ ", " ⟭"],
    ["╰ ", " ╯"],
    ["╭ ", " ╮"],
    ["┆ ", " ┆"],
    ["┊ ", " ┊"],
    ["│ ", " │"],
    ["║ ", " ║"],
    ["┃ ", " ┃"],
    ["★彡 ", " 彡★"],
    ["✦ ", " ✦"],
    ["✧ ", " ✧"],
    ["✩ ", " ✩"],
    ["✪ ", " ✪"],
    ["✫ ", " ✫"],
    ["✬ ", " ✬"],
    ["✭ ", " ✭"],
    ["✮ ", " ✮"],
    ["✯ ", " ✯"],
    ["✰ ", " ✰"],
    ["☆ ", " ☆"],
    ["★ ", " ★"],
    ["☾ ", " ☽"],
    ["☽ ", " ☾"],
    ["⚡ ", " ⚡"],
    ["🔥 ", " 🔥"],
    ["💎 ", " 💎"],
    ["👑 ", " 👑"],
    ["🦋 ", " 🦋"],
    ["🌸 ", " 🌸"],
    ["🌙 ", " 🌙"],
    ["☠︎ ", " ☠︎"],
    ["༒ ", " ༒"]

];


/* ---------- نمادها ---------- */

const advancedSymbols = [

    "♡",
    "♥",
    "❤",
    "❥",
    "ღ",
    "୨୧",
    "✦",
    "✧",
    "★",
    "☆",
    "✩",
    "✪",
    "✫",
    "✬",
    "✭",
    "✮",
    "✯",
    "✰",
    "❀",
    "✿",
    "❁",
    "❃",
    "❋",
    "⚘",
    "☘",
    "☾",
    "☽",
    "☀",
    "☁",
    "⚡",
    "☠",
    "༒",
    "♛",
    "♕",
    "♚",
    "♔",
    "♤",
    "♧",
    "♢",
    "♠",
    "♥",
    "♦",
    "♣",
    "♪",
    "♫",
    "♩",
    "♬",
    "∞",
    "≈",
    "≛",
    "⊹",
    "⊱",
    "⊰",
    "❮",
    "❯",
    "❰",
    "❱",
    "◈",
    "◇",
    "◆",
    "○",
    "●",
    "◎",
    "◉",
    "◌",
    "◍",
    "◐",
    "◑",
    "◒",
    "◓",
    "╰",
    "╯",
    "╭",
    "╮",
    "│",
    "┃",
    "║",
    "━",
    "─",
    "═",
    "╬"

];


/* ---------- ایموجی ---------- */

const advancedEmojis = [

    "❤️",
    "🖤",
    "💜",
    "💙",
    "💚",
    "💛",
    "🩷",
    "🩵",
    "🤍",
    "🤎",
    "🩶",
    "💔",
    "❤️‍🔥",
    "❤️‍🩹",
    "🦋",
    "🌸",
    "🌹",
    "🌺",
    "🌷",
    "✨",
    "⭐",
    "🌟",
    "💫",
    "🔥",
    "⚡",
    "💎",
    "👑",
    "😎",
    "🥀",
    "🌙",
    "☀️",
    "🌈",
    "🎀",
    "🎵",
    "🎧",
    "🎮",
    "💀",
    "👻",
    "🪽"

];


/* =========================================
   موتور تولید
========================================= */

let generatedStyles = [];

let activeAdvancedType = "mixed";


function createThousandsStyles(text) {

    if (!text || !text.trim()) {

        return [];

    }

    const results = [];

    const used = new Set();


    function addStyle(value, name) {

        if (!value) return;

        if (used.has(value)) return;

        used.add(value);

        results.push({

            name: name,

            category: "all",

            text: value

        });

    }


    /* قاب‌ها */

    advancedFrames.forEach((frame, i) => {

        addStyle(
            frame[0] + text + frame[1],
            "قاب ویژه #" + (i + 1)
        );

    });


    /* نماد ابتدا و انتها */

    advancedSymbols.forEach((symbol, i) => {

        addStyle(
            symbol + " " +
            text +
            " " + symbol,

            "نماد #" + (i + 1)
        );

    });


    /* دو نماد متفاوت */

    advancedSymbols.forEach((a, i) => {

        advancedSymbols.forEach((b, j) => {

            if (results.length >= 2500) return;

            addStyle(
                a + " " +
                text +
                " " +
                b,

                `ترکیبی ${i + 1}-${j + 1}`
            );

        });

    });


    /* ایموجی */

    advancedEmojis.forEach((emoji, i) => {

        addStyle(
            emoji + " " +
            text +
            " " +
            emoji,

            "ایموجی #" + (i + 1)
        );

    });


    /* ترکیب ایموجی + نماد */

    advancedEmojis.forEach((emoji, i) => {

        advancedSymbols.forEach((symbol, j) => {

            if (results.length >= 5000) return;

            addStyle(

                emoji +
                " " +
                symbol +
                " " +
                text +
                " " +
                symbol +
                " " +
                emoji,

                `ترکیب ویژه ${i + 1}-${j + 1}`

            );

        });

    });


    /* ترکیب قاب + نماد */

    advancedFrames.forEach((frame, i) => {

        advancedSymbols.forEach((symbol, j) => {

            if (results.length >= 8000) return;

            addStyle(

                frame[0] +
                symbol +
                " " +
                text +
                " " +
                symbol +
                frame[1],

                `قاب ترکیبی ${i + 1}-${j + 1}`

            );

        });

    });


    /* سه لایه */

    advancedSymbols.forEach((a, i) => {

        advancedSymbols.forEach((b, j) => {

            if (results.length >= 10000) return;

            addStyle(

                a +
                " " +
                b +
                " " +
                text +
                " " +
                b +
                " " +
                a,

                `سه‌لایه ${i + 1}-${j + 1}`

            );

        });

    });


    return results;

}


/* =========================================
   نمایش هزاران خروجی
========================================= */

function renderGeneratedStyles() {

    const text = textInput.value.trim();

    if (!text) {

        showToast("✏️ اول یک متن بنویس");

        return;

    }


    generatedStyles =
        createThousandsStyles(text);


    document.getElementById("totalStyles")
        .textContent =
        generatedStyles.length.toLocaleString("fa-IR");


    showToast(
        "🔥 " +
        generatedStyles.length.toLocaleString("fa-IR") +
        " استایل ساخته شد"
    );


    renderGeneratedPage();

}


/* =========================================
   صفحه بندی
========================================= */

let generatedPage = 0;

const generatedPerPage = 50;


function renderGeneratedPage() {

    generatedPage = 0;

    const oldGenerated =
        document.getElementById(
            "generatedResults"
        );

    if (oldGenerated) {

        oldGenerated.remove();

    }


    const box =
        document.createElement("section");

    box.id = "generatedResults";

    box.innerHTML = `

        <div class="result-head">

            <h2>⚡ استایل‌های تولید شده</h2>

            <span>
                ${generatedStyles.length.toLocaleString()}
            </span>

        </div>

        <div id="generatedList"></div>

        <button
            id="loadMoreStyles"
            style="
                width:100%;
                padding:14px;
                border-radius:12px;
                border:1px solid #513667;
                background:#24172f;
                color:white;
                cursor:pointer;
                margin-top:8px;
            "
        >
            ⬇️ نمایش بیشتر
        </button>

    `;


    document.querySelector("main")
        .appendChild(box);


    document
        .getElementById("loadMoreStyles")
        .addEventListener(
            "click",
            loadMoreGenerated
        );


    loadMoreGenerated();

}


function loadMoreGenerated() {

    const list =
        document.getElementById(
            "generatedList"
        );

    if (!list) return;


    const start =
        generatedPage *
        generatedPerPage;

    const end =
        Math.min(
            start + generatedPerPage,
            generatedStyles.length
        );


    for (let i = start; i < end; i++) {

        const item =
            generatedStyles[i];

        const card =
            document.createElement("div");

        card.className =
            "font-card generated-card";


        card.innerHTML = `

            <span class="generated-number">
                #${i + 1}
            </span>

            <div class="font-top">

                <span class="font-name">
                    ${item.name}
                </span>

                <div class="font-buttons">

                    <button class="favorite-btn">
                        ♡
                    </button>

                    <button class="copy-btn">
                        📋 کپی
                    </button>

                </div>

            </div>

            <div class="font-output"></div>

        `;


        card.querySelector(
            ".font-output"
        ).textContent = item.text;


        card.querySelector(
            ".copy-btn"
        ).addEventListener(
            "click",
            async () => {

                try {

                    await navigator
                        .clipboard
                        .writeText(item.text);

                    showToast(
                        "✅ کپی شد"
                    );

                } catch {

                    showToast(
                        "❌ کپی نشد"
                    );

                }

            }
        );


        card.querySelector(
            ".favorite-btn"
        ).addEventListener(
            "click",
            () => {

                if (!favorites.includes(item.text)) {

                    favorites.push(item.text);

                    localStorage.setItem(
                        "fontFavorites",
                        JSON.stringify(
                            favorites
                        )
                    );

                    showToast(
                        "❤️ ذخیره شد"
                    );

                } else {

                    showToast(
                        "قبلاً ذخیره شده"
                    );

                }

            }
        );


        list.appendChild(card);

    }


    generatedPage++;


    const button =
        document.getElementById(
            "loadMoreStyles"
        );


    if (
        generatedPage *
        generatedPerPage >=
        generatedStyles.length
    ) {

        button.textContent =
            "✅ همه استایل‌ها نمایش داده شدند";

        button.disabled = true;

    } else {

        button.textContent =
            `⬇️ نمایش بیشتر (${Math.min(
                generatedPage * generatedPerPage,
                generatedStyles.length
            ).toLocaleString()} / ${generatedStyles.length.toLocaleString()})`;

    }

}


/* =========================================
   دکمه تولید
========================================= */

document
.getElementById("generateThousands")
.addEventListener(
    "click",
    () => {

        renderGeneratedStyles();

        saveToHistory(
            textInput.value.trim()
        );

    }
);


/* =========================================
   نوع موتور
========================================= */

document
.querySelectorAll(".advanced-btn")
.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            document
            .querySelectorAll(
                ".advanced-btn"
            )
            .forEach(
                x =>
                x.classList.remove(
                    "active"
                )
            );

            button.classList.add(
                "active"
            );

            activeAdvancedType =
                button.dataset.type;

            showToast(
                "✨ نوع استایل انتخاب شد"
            );

        }
    );

});


/* =========================================
   کپی همه
========================================= */

document
.getElementById("copyAll")
.addEventListener(
    "click",
    async () => {

        if (!generatedStyles.length) {

            showToast(
                "⚡ اول استایل تولید کن"
            );

            return;

        }


        const allText =
            generatedStyles
            .map(x => x.text)
            .join("\n");


        try {

            await navigator
                .clipboard
                .writeText(allText);

            showToast(
                "📋 همه استایل‌ها کپی شدند"
            );

        } catch {

            showToast(
                "❌ کپی همه انجام نشد"
            );

        }

    }
);


/* =========================================
   تصادفی
========================================= */

document
.getElementById("randomStyle")
.addEventListener(
    "click",
    () => {

        if (!generatedStyles.length) {

            renderGeneratedStyles();

            return;

        }


        const random =
            generatedStyles[
                Math.floor(
                    Math.random() *
                    generatedStyles.length
                )
            ];


        textInput.value =
            random.text;

        counter.textContent =
            `${textInput.value.length} کاراکتر`;


        showToast(
            "🎲 استایل تصادفی انتخاب شد"
        );

    }
);


/* =========================================
   تاریخچه
========================================= */

let fontHistory =
    JSON.parse(
        localStorage.getItem(
            "fontHistory"
        ) || "[]"
    );


function saveToHistory(text) {

    if (!text) return;


    fontHistory =
        fontHistory.filter(
            x => x !== text
        );


    fontHistory.unshift(text);


    fontHistory =
        fontHistory.slice(0, 15);


    localStorage.setItem(
        "fontHistory",
        JSON.stringify(
            fontHistory
        )
    );


    renderHistory();

}


function renderHistory() {

    const box =
        document.getElementById(
            "historyList"
        );


    if (!box) return;


    box.innerHTML = "";


    if (!fontHistory.length) {

        box.innerHTML =
            `<p style="
                color:#766c7d;
                font-size:12px;
                text-align:center;
                padding:12px;
            ">
                هنوز تاریخی وجود ندارد
            </p>`;

        return;

    }


    fontHistory.forEach(text => {

        const item =
            document.createElement("div");

        item.className =
            "history-item";


        item.innerHTML = `

            <span class="history-text">
                ${escapeHTML(text)}
            </span>

            <button class="history-use">
                استفاده
            </button>

        `;


        item.querySelector(
            ".history-use"
        ).addEventListener(
            "click",
            () => {

                textInput.value = text;

                render();

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );


        box.appendChild(item);

    });

}


function escapeHTML(text) {

    return text
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================
   پاک کردن تاریخچه
========================================= */

document
.getElementById("clearHistory")
.addEventListener(
    "click",
    () => {

        fontHistory = [];

        localStorage.removeItem(
            "fontHistory"
        );

        renderHistory();

        showToast(
            "🗑 تاریخچه پاک شد"
        );

    }
);


/* =========================================
   ذخیره خودکار متن
========================================= */

textInput.addEventListener(
    "input",
    () => {

        const text =
            textInput.value.trim();

        if (
            text &&
            text.length > 2
        ) {

            localStorage.setItem(
                "lastFontText",
                text
            );

        }

    }
);


/* =========================================
   شروع تاریخچه
========================================= */

renderHistory();