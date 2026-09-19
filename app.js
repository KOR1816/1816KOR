const translations = {
  ko:{language:"언어",navHome:"홈",navSword:"성검쟁탈",navThree:"3대연맹전",navSiege:"공성전",navBear:"곰사냥",navSeating:"자리배치",navRules:"규칙",footer:"KOR 1816 연맹 사이트",homeTitle:"KOR 1816",homeText:"KOR 1816 연맹 사이트에 오신 것을 환영합니다.",swordTitle:"성검쟁탈",threeTitle:"3대연맹전",siegeTitle:"공성전",bearTitle:"곰사냥",seatingTitle:"자리배치",seatingText:"연맹원의 자리배치 정보를 확인하세요.",rulesTitle:"규칙",rulesText:"연맹 규칙과 안내사항을 확인하세요."},
  en:{language:"Language",navHome:"Home",navSword:"Sacred Sword",navThree:"Three Alliances",navSiege:"Siege",navBear:"Bear Hunt",navSeating:"Seating",navRules:"Rules",bearTitle:"Bear Hunt",bearText:"Check Bear Hunt information.",bearHeroes:"Check rally heroes and participation information.",footer:"KOR 1816 Alliance Site",bearTitle:"Bear Hunt",bearText:"Check Bear Hunt information.",bearHeroes:"Check rally heroes and participation information.",homeTitle:"KOR 1816",homeText:"Welcome to the KOR 1816 alliance site.",swordTitle:"Sacred Sword",threeTitle:"Three Alliances",siegeTitle:"Siege",bearTitle:"Bear Hunt",seatingTitle:"Seating",seatingText:"Check alliance seating information.",rulesTitle:"Rules",rulesText:"Check alliance rules and notices.",seatRow:"Row",seatNo:"No.",seatMember:"Member",mapLabel:"Bear Hunt Seating Map"},
  ja:{language:"言語",navHome:"ホーム",navSword:"聖剣争奪",navThree:"3大連盟戦",navSiege:"攻城戦",navBear:"熊狩り",navSeating:"配置",navRules:"ルール",bearTitle:"熊狩り",bearText:"熊狩りの情報を確認してください。",bearHeroes:"集結英雄と参加情報を確認してください。",footer:"KOR 1816 連盟サイト",bearTitle:"熊狩り",bearText:"熊狩りの情報を確認してください。",bearHeroes:"集結英雄と参加情報を確認してください。",homeTitle:"KOR 1816",homeText:"KOR 1816 連盟サイトへようこそ。",swordTitle:"聖剣争奪",threeTitle:"3大連盟戦",siegeTitle:"攻城戦",bearTitle:"熊狩り",seatingTitle:"配置",seatingText:"連盟の配置情報を確認してください。",rulesTitle:"ルール",rulesText:"連盟のルールと案内を確認してください。",seatRow:"行",seatNo:"番号",seatMember:"メンバー",mapLabel:"熊狩り配置図"},
  zh:{language:"语言",navHome:"首页",navSword:"圣剑争夺",navThree:"三大联盟战",navSiege:"攻城战",navBear:"猎熊",navSeating:"位置安排",navRules:"规则",bearTitle:"猎熊",bearText:"请查看猎熊信息。",bearHeroes:"请查看集结英雄和参与信息。",footer:"KOR 1816 联盟网站",bearTitle:"猎熊",bearText:"请查看猎熊信息。",bearHeroes:"请查看集结英雄和参与信息。",homeTitle:"KOR 1816",homeText:"欢迎来到 KOR 1816 联盟网站。",swordTitle:"圣剑争夺",threeTitle:"三大联盟战",siegeTitle:"攻城战",bearTitle:"猎熊",seatingTitle:"位置安排",seatingText:"请查看联盟位置安排。",rulesTitle:"规则",rulesText:"请查看联盟规则和通知。",seatRow:"行",seatNo:"编号",seatMember:"成员",mapLabel:"猎熊位置图"},
  de:{language:"Sprache",navHome:"Startseite",navSword:"Heiliges Schwert",navThree:"Drei Allianzen",navSiege:"Belagerung",navBear:"Bärenjagd",navSeating:"Platzierung",navRules:"Regeln",bearTitle:"Bärenjagd",bearText:"Informationen zur Bärenjagd.",bearHeroes:"Informationen zu Rallye-Helden und Teilnahme.",footer:"KOR 1816 Allianz-Website",bearTitle:"Bärenjagd",bearText:"Informationen zur Bärenjagd.",bearHeroes:"Informationen zu Rallye-Helden und Teilnahme.",homeTitle:"KOR 1816",homeText:"Willkommen auf der KOR 1816 Allianz-Website.",swordTitle:"Heiliges Schwert",threeTitle:"Drei Allianzen",siegeTitle:"Belagerung",bearTitle:"Bärenjagd",seatingTitle:"Platzierung",seatingText:"Informationen zur Allianz-Platzierung.",rulesTitle:"Regeln",rulesText:"Prüfe die Allianzregeln und Hinweise.",seatRow:"Reihe",seatNo:"Nr.",seatMember:"Mitglied",mapLabel:"Bärenjagd-Platzierung"}
};
const seatingData=[
 {row:"Row 1",names:["체리찡!!","샌디에이고","살라딘!!","Nemesis","SsungBi","jinno","용이군","moon","jiwon","momo","MONSTER","GGGz"]},
 {row:"Row 2",names:["Chan Dam Bom","DAWN","띵띵v","Pham","Veggie","pika","hhHa","JackeyLove","lan","ROKA","MomSaidNoWar","EGOIST","miiiiia","Sant Jordi","bossi","LSJ","Commander_쥬","El Elegido","Lager"]},
 {row:"Row 3",names:["","Architect","Agares","hair loss beam","coculim","HiGH FiVE","Dajjal","aimee","OMEGA","Dingdong","AVA","Aril","Nyctifer_v","T","Libby","DDoRo","Hani","jennie","Zidf","SUMMER","Gideon","ADOPATI","HERA","GieZues","imNotKorean","스타리아"]}
];
const pages={home:["homeTitle","homeText"],sword:["swordTitle"],three:["threeTitle"],siege:["siegeTitle"],bear:["bearTitle"],seating:["seatingTitle","seatingText"],rules:["rulesTitle","rulesText"]};
let currentPage=localStorage.getItem("kor1816_page")||"home";
let currentLanguage=localStorage.getItem("kor1816_language")||"ko";
const app=document.getElementById("app"), languageSelect=document.getElementById("languageSelect");
function t(key){return translations[currentLanguage][key]||translations.ko[key]||key;}
function renderPage(){
  const keys=pages[currentPage]||pages.home, title=t(keys[0]), text=keys[1]?t(keys[1]):"";
  const images={home:"https://raw.githubusercontent.com/KOR1816/KOR1816/main/1816.jpg?v=2",sword:"https://raw.githubusercontent.com/KOR1816/KOR1816/main/holy_sword1.png",three:"https://raw.githubusercontent.com/KOR1816/KOR1816/main/333.jpg"};
  const image=images[currentPage];
  let extra="";
  if(currentPage==="bear") extra='<p>'+t("bearHeroes")+'</p>';
  if(currentPage==="seating"){
    const rows=seatingData.map(function(group){
      return '<tr class="seat-group"><th colspan="3">'+group.row.replace("Row",t("seatRow"))+'</th></tr>'+
        group.names.map(function(name,i){return '<tr><td>'+group.row.replace("Row",t("seatRow"))+'</td><td>'+ (name ? (i+1) : "") +'</td><td>'+name+'</td></tr>';}).join("");
    }).join("");
    extra='<div class="seating-map"><div class="map-title">'+t("mapLabel")+'</div><svg class="seat-map-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 760" role="img" aria-label="'+t("mapLabel")+'">'+
      '<rect width="760" height="760" rx="24" fill="#fff"/>'+
      '<g transform="translate(380 380)">'+
      Array.from({length:17},(_,yy)=>Array.from({length:17},(_,xx)=>{const x=xx-8,y=yy-8,d=Math.abs(x)+Math.abs(y);if(d>8||d<2||(Math.abs(x)<=1&&Math.abs(y)<=1)||(x-y)%2)return "";const s=42,px=x*s*.72,py=y*s*.72,fill=d>=6?"#ffbf16":(d>=4?"#65a74e":"#4678bd"),n=((Math.abs(x*3+y*5)%9)+1);return '<polygon points="'+px+','+(py-s)+' '+(px+s)+','+py+' '+px+','+(py+s)+' '+(px-s)+','+py+'" fill="'+fill+'" stroke="#19364f" stroke-width="2"/><text x="'+px+'" y="'+(py+7)+'" text-anchor="middle" font-family="Arial,sans-serif" font-size="18" font-weight="800" fill="#fff">'+n+'</text>';}).join("")).join("")+
      '<polygon points="0,-70 70,0 0,70 -70,0" fill="#f47d2d" stroke="#19364f" stroke-width="2"/><text x="0" y="9" text-anchor="middle" font-family="Arial,sans-serif" font-size="26" font-weight="800" fill="#fff">bear</text>'+
      '<g font-family="Arial,sans-serif" font-size="12" font-weight="800" fill="#fff" text-anchor="middle">'+
      '<polygon points="0,-240 28,-212 0,-184 -28,-212" fill="#f47d2d" stroke="#19364f" stroke-width="2"/><text x="0" y="-208">깃발</text>'+
      '<polygon points="240,0 212,28 184,0 212,-28" fill="#f47d2d" stroke="#19364f" stroke-width="2"/><text x="212" y="5">깃발</text>'+
      '<polygon points="0,240 28,212 0,184 -28,212" fill="#f47d2d" stroke="#19364f" stroke-width="2"/><text x="0" y="217">깃발</text>'+
      '<polygon points="-240,0 -212,28 -184,0 -212,-28" fill="#f47d2d" stroke="#19364f" stroke-width="2"/><text x="-212" y="5">깃발</text></g></g></svg></div>'+
      '<div class="table-wrap"><table class="seat-table"><thead><tr><th>'+t("seatRow")+'</th><th>'+t("seatNo")+'</th><th>'+t("seatMember")+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
  }
  app.innerHTML='<section class="card">'+(image?'<div class="hero-image"><img src="'+image+'" alt="'+title+'"></div>':"")+'<h1>'+title+'</h1>'+(text?'<p>'+text+'</p>':"")+extra+'</section>';
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