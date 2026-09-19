const translations = {
  ko:{language:"언어",navHome:"홈",navSword:"성검쟁탈",navThree:"3대연맹전",navSiege:"공성전",navBear:"곰사냥",navSeating:"자리배치",navRules:"규칙",footer:"KOR 1816 연맹 사이트",homeTitle:"KOR 1816",homeText:"KOR 1816 연맹 사이트에 오신 것을 환영합니다.",swordTitle:"성검쟁탈",threeTitle:"3대연맹전",siegeTitle:"공성전",bearTitle:"곰사냥",seatingTitle:"자리배치",rulesTitle:"규칙"},
  en:{language:"Language",navHome:"Home",navSword:"Sacred Sword",navThree:"Three Alliances",navSiege:"Siege",navBear:"Bear Hunt",navSeating:"Seating",navRules:"Rules",footer:"KOR 1816 Alliance Site",bearTitle:"Bear Hunt",bearText:"Check Bear Hunt information.",bearHeroes:"Check rally heroes and participation information.",homeTitle:"KOR 1816",homeText:"Welcome to the KOR 1816 alliance site.",swordTitle:"Sacred Sword",threeTitle:"Three Alliances",siegeTitle:"Siege",bearTitle:"Bear Hunt",seatingTitle:"Seating",rulesTitle:"Rules"},
  ja:{language:"言語",navHome:"ホーム",navSword:"聖剣争奪",navThree:"3大連盟戦",navSiege:"攻城戦",navBear:"熊狩り",navSeating:"配置",navRules:"ルール",footer:"KOR 1816 連盟サイト",bearTitle:"熊狩り",bearText:"熊狩りの情報を確認してください。",bearHeroes:"集結英雄と参加情報を確認してください。",homeTitle:"KOR 1816",homeText:"KOR 1816 連盟サイトへようこそ。",swordTitle:"聖剣争奪",threeTitle:"3大連盟戦",siegeTitle:"攻城戦",bearTitle:"熊狩り",seatingTitle:"配置",rulesTitle:"ルール"},
  zh:{language:"语言",navHome:"首页",navSword:"圣剑争夺",navThree:"三大联盟战",navSiege:"攻城战",navBear:"猎熊",navSeating:"位置安排",navRules:"规则",footer:"KOR 1816 联盟网站",bearTitle:"猎熊",bearText:"请查看猎熊信息。",bearHeroes:"请查看集结英雄和参与信息。",homeTitle:"KOR 1816",homeText:"欢迎来到 KOR 1816 联盟网站。",swordTitle:"圣剑争夺",threeTitle:"三大联盟战",siegeTitle:"攻城战",bearTitle:"猎熊",seatingTitle:"位置安排",rulesTitle:"规则"},
  de:{language:"Sprache",navHome:"Startseite",navSword:"Heiliges Schwert",navThree:"Drei Allianzen",navSiege:"Belagerung",navBear:"Bärenjagd",navSeating:"Platzierung",navRules:"Regeln",footer:"KOR 1816 Allianz-Website",bearTitle:"Bärenjagd",bearText:"Informationen zur Bärenjagd.",bearHeroes:"Informationen zu Rallye-Helden und Teilnahme.",homeTitle:"KOR 1816",homeText:"Willkommen auf der KOR 1816 Allianz-Website.",swordTitle:"Heiliges Schwert",threeTitle:"Drei Allianzen",siegeTitle:"Belagerung",bearTitle:"Bärenjagd",seatingTitle:"Platzierung",rulesTitle:"Regeln"}
};
const pages={home:["homeTitle","homeText"],sword:["swordTitle"],three:["threeTitle"],siege:["siegeTitle"],bear:["bearTitle"],seating:["seatingTitle"],rules:["rulesTitle"]};
let currentPage=localStorage.getItem("kor1816_page")||"home";
let currentLanguage=localStorage.getItem("kor1816_language")||"ko";
const app=document.getElementById("app"), languageSelect=document.getElementById("languageSelect");
function t(key){return translations[currentLanguage][key]||translations.ko[key]||key;}
function renderPage(){
  const keys=pages[currentPage]||pages.home, title=t(keys[0]), text=keys[1]?t(keys[1]):"";
  const images={home:"https://raw.githubusercontent.com/KOR1816/KOR1816/main/1816.jpg?v=2",sword:"https://raw.githubusercontent.com/KOR1816/KOR1816/main/holy_sword1.png",three:"https://raw.githubusercontent.com/KOR1816/KOR1816/main/333.jpg"};
  const image=images[currentPage];
  app.innerHTML='<section class="card">'+(image?'<div class="hero-image"><img src="'+image+'" alt="'+title+'"></div>':"")+'<h1>'+title+'</h1>'+(text?'<p>'+text+'</p>':"")+(currentPage==="bear"?'<p>'+t("bearHeroes")+'</p>':"")+'</section>';
  document.querySelectorAll(".nav-button").forEach(function(b){b.classList.toggle("active",b.dataset.page===currentPage);});
}
function applyLanguage(){
  document.documentElement.lang=currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach(function(e){e.textContent=t(e.dataset.i18n);});
  languageSelect.value=currentLanguage;
  localStorage.setItem("kor1816_language",currentLanguage);
  renderPage();
}
document.querySelectorAll(".nav-button").forEach(function(b){b.addEventListener("click",function(){currentPage=b.dataset.page;localStorage.setItem("kor1816_page",currentPage);renderPage();});});
languageSelect.addEventListener("change",function(){currentLanguage=languageSelect.value;applyLanguage();});
applyLanguage();