const I18N={
ko:{home:"홈",sword:"성검쟁탈",three:"3대연맹전",siege:"공성전",bear:"곰사냥",seating:"자리배치",rules:"규칙",edit:"수정",save:"저장",close:"수정 종료",reset:"초기화",refresh:"새로고침",notice:"공지",schedule:"이벤트 일정",welcome:"환영합니다",member:"연맹원",row:"행",no:"번호",rally:"집결",attack:"공격",defense:"수성",heroes:"영웅",time:"시간",language:"언어",footer:"KOR 1816 연맹 사이트",loading:"불러오는 중...",shared:"공용 저장",local:"내 브라우저 저장"},
en:{home:"Home",sword:"Sacred Sword",three:"Three Alliances",siege:"Siege",bear:"Bear Hunt",seating:"Seating",rules:"Rules",edit:"Edit",save:"Save",close:"Close",reset:"Reset",refresh:"Refresh",notice:"Notice",schedule:"Schedule",welcome:"Welcome",member:"Member",row:"Row",no:"No.",rally:"Rally",attack:"Attack",defense:"Defense",heroes:"Heroes",time:"Time",language:"Language",footer:"KOR 1816 Alliance Site",loading:"Loading...",shared:"Shared storage",local:"Browser storage"},
ja:{home:"ホーム",sword:"聖剣争奪",three:"3大連盟戦",siege:"攻城戦",bear:"熊狩り",seating:"配置",rules:"ルール",edit:"編集",save:"保存",close:"終了",reset:"初期化",refresh:"更新",notice:"お知らせ",schedule:"イベント日程",welcome:"ようこそ",member:"メンバー",row:"行",no:"番号",rally:"集結",attack:"攻撃",defense:"守城",heroes:"英雄",time:"時間",language:"言語",footer:"KOR 1816 連盟サイト",loading:"読み込み中...",shared:"共有保存",local:"ブラウザ保存"},
zh:{home:"首页",sword:"圣剑争夺",three:"三大联盟战",siege:"攻城战",bear:"猎熊",seating:"位置安排",rules:"规则",edit:"编辑",save:"保存",close:"结束",reset:"重置",refresh:"刷新",notice:"公告",schedule:"活动日程",welcome:"欢迎",member:"成员",row:"行",no:"编号",rally:"集结",attack:"攻击",defense:"防守",heroes:"英雄",time:"时间",language:"语言",footer:"KOR 1816 联盟网站",loading:"加载中...",shared:"共享保存",local:"浏览器保存"},
de:{home:"Startseite",sword:"Heiliges Schwert",three:"Drei Allianzen",siege:"Belagerung",bear:"Bärenjagd",seating:"Platzierung",rules:"Regeln",edit:"Bearbeiten",save:"Speichern",close:"Beenden",reset:"Zurücksetzen",refresh:"Aktualisieren",notice:"Ankündigung",schedule:"Terminplan",welcome:"Willkommen",member:"Mitglied",row:"Reihe",no:"Nr.",rally:"Rallye",attack:"Angriff",defense:"Verteidigung",heroes:"Helden",time:"Zeit",language:"Sprache",footer:"KOR 1816 Allianzseite",loading:"Wird geladen...",shared:"Gemeinsamer Speicher",local:"Browserspeicher"}
};

// 공유 저장소 주소가 들어오면 모든 방문자가 같은 데이터를 봅니다.
// Firebase Realtime Database REST 주소를 여기에 넣으면 됩니다.
// 예: https://YOUR-PROJECT-default-rtdb.firebaseio.com
const SHARED_DB_URL="";

const IMG={home:"https://raw.githubusercontent.com/KOR1816/KOR1816/main/1816.jpg?v=2",sword:"https://raw.githubusercontent.com/KOR1816/KOR1816/main/holy_sword1.png",three:"https://raw.githubusercontent.com/KOR1816/KOR1816/main/333.jpg"};
const defaults={
home:{title:"📢 공지",body:"KOR 1816에 오신 것을 환영합니다.",schedule:"이벤트 일정을 입력해주세요.",welcome:"Kingdom 1816 · 건들면 문다! · 곰친자들의 모임!!"},
sword:{teams:{A:Array(7).fill(""),B:Array(7).fill(""),C:Array(7).fill(""),D:Array(7).fill(""),extra:["",""],subs:Array(10).fill("")}},
three:{groups:{1:["","","","",""],2:["","","","",""],3:["","","","",""],4:["","","","",""]}},
siege:{cards:[
{title:"⚔️ 집결장 공격",text:"아마데 / 페라 / 로사\n비율: 505 / 55.5.40 / 514 / 415 / 406"},
{title:"🛡️ 수성",text:"알카 / 마르고 / 살로\n상대가 강하면 예거 고려\n연습: 집결장 631 · 집결원 640"},
{title:"👥 집결원 공격",text:"1열: 2첸코 / 2아마\n2열: 2첸코 / 아마네 / 파드\n3열: 2살로 / 첸코 / 아마네\n4열: 2힐데 / 살로 / 첸코"},
{title:"👥 집결원 수성",text:"1열: 2힐데 / 살로 / 첸코\n2열: 4힐데\n3열: 2힐데 / 살로 / 고든"}]},
bear:{text:"곰 1트랩: 23:00\n곰 2트랩: 09:10",heroes:"아마데우스\n첸코\n연우\n마르고(4성🙏)\n아마네\n영웅없이"},
seating:[{"row":"Row 1","names":["체리찡!!","샌디에이고","살라딘!!","Nemesis","SsungBi","jinno","용이군","moon","jiwon","momo","MONSTER","GGGz"]},{"row":"Row 2","names":["Chan Dam Bom","DAWN","띵띵v","Pham","Veggie","pika","hhHa","JackeyLove","lan","ROKA","MomSaidNoWar","EGOIST","miiiiia","Sant Jordi","bossi","LSJ","Commander_쥬","El Elegido","Lager"]},{"row":"Row 3","names":["","Architect","Agares","hair loss beam","coculim","HiGH FiVE","Dajjal","aimee","OMEGA","Dingdong","AVA","Aril","Nyctifer_v","T","Libby","DDoRo","Hani","jennie","Zidf","SUMMER","Gideon","ADOPATI","HERA","GieZues","imNotKorean","스타리아"]}],rules:{text:"### 📋 KOR1816 운영진 및 안내\n\n[KOR]༺༒༽Pham༼༒༻ - 총대장 / 정신적지주\n\n[KOR]Nemesis - 집결장 / 외교, 이민 / 유적쟁탈\n\n[KOR]Agaresᴷᴼᴿ - 전체적인 벨런스(에이스)\n\n[KOR]༺༒༽LJ༼༒༻ - 거점총사령관\n\n[KOR]샌디에이고 - 집결장 / 댕댕이전문가\n\n[KOR]momo - 캐슬전 통솔자 / 모모찡엄마\n\n[KOR]Rarara - SIN연맹장 / 천사의마음씨\n\n[KOR]Aimée - 분위기메이커 / 태그담당자\n\n[KOR]GGGz需要起床 - 히어로 / 영어·중국어가능\n\n[KOR]DAWN - 침묵의왕자 / 그저조용하다\n\n[KOR]KOREAN MONSTER - 동물의숲\n\n[KOR]Hair loss beam - 탈모를원하는가?"}
};
const seating=[
{row:"Row 1",names:["체리찡!!","샌디에이고","살라딘!!","Nemesis","SsungBi","jinno","용이군","moon","jiwon","momo","MONSTER","GGGz"]},
{row:"Row 2",names:["Chan Dam Bom","DAWN","띵띵v","Pham","Veggie","pika","hhHa","JackeyLove","lan","ROKA","MomSaidNoWar","EGOIST","miiiiia","Sant Jordi","bossi","LSJ","Commander_쥬","El Elegido","Lager"]},
{row:"Row 3",names:["","Architect","Agares","hair loss beam","coculim","HiGH FiVE","Dajjal","aimee","OMEGA","Dingdong","AVA","Aril","Nyctifer_v","T","Libby","DDoRo","Hani","jennie","Zidf","SUMMER","Gideon","ADOPATI","HERA","GieZues","imNotKorean","스타리아"]}];

let lang=localStorage.getItem("kor1816_language")||"ko",page=localStorage.getItem("kor1816_page")||"home";
if(!["home","sword","three","siege","bear","seating","rules"].includes(page))page="home";
const app=document.getElementById("app"),sel=document.getElementById("languageSelect");
const clone=x=>JSON.parse(JSON.stringify(x));
function tr(k){return (I18N[lang]&&I18N[lang][k])||I18N.ko[k]||k}
function localGet(k){try{return JSON.parse(localStorage.getItem("kor1816_"+k))||clone(defaults[k])}catch(e){return clone(defaults[k])}}
function localPut(k,v){localStorage.setItem("kor1816_"+k,JSON.stringify(v))}
function cleanDbUrl(){return SHARED_DB_URL.replace(/\/$/,"")}
async function cloudGet(k){
if(!SHARED_DB_URL)return null;
try{const r=await fetch(cleanDbUrl()+"/kor1816/"+k+".json",{cache:"no-store"});if(!r.ok)return null;return await r.json()}catch(e){return null}
}
async function cloudPut(k,v){
if(!SHARED_DB_URL)return false;
try{const r=await fetch(cleanDbUrl()+"/kor1816/"+k+".json",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)});return r.ok}catch(e){return false}
}
async function get(k){
const cloud=await cloudGet(k);
if(cloud!==null){localPut(k,cloud);return cloud}
return localGet(k)
}
function put(k,v){localPut(k,v);return cloudPut(k,v)}

function esc(v){return String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}
function text(v){return esc(v).replace(/\n/g,"<br>")}
function btn(id,label,cls=""){return '<button id="'+id+'" class="action-btn '+cls+'">'+label+'</button>'}
function setStaticI18n(){const l=document.querySelector(".language label");if(l)l.textContent=tr("language");const f=document.querySelector(".footer span");if(f)f.textContent=tr("footer");document.title="KOR 1816 · "+tr(page);document.querySelectorAll(".nav-button").forEach(b=>{b.textContent=tr(b.dataset.page);b.classList.toggle("active",b.dataset.page===page)})}
async function render(){
if(!app)return;
app.innerHTML='<section class="card page-card"><div class="loading">'+tr("loading")+'</div></section>';
setStaticI18n();
const d=await get(page),title=tr(page);let html='<section class="card page-card">';
if(IMG[page])html+='<div class="hero-image"><img src="'+IMG[page]+'" alt="'+esc(title)+'"></div>';
html+='<h1>'+esc(title)+'</h1>';
if(page==="home")html+=home(d);
if(page==="sword")html+=sword(d);
if(page==="three")html+=three(d);
if(page==="siege")html+=siege(d);
if(page==="bear")html+=bear(d);
if(page==="seating")html+=seat(d);
if(page==="rules")html+=rules(d);
html+='</section>';app.innerHTML=html;wire();setStaticI18n();
}
function toolbar(prefix){return '<div class="page-actions">'+btn(prefix+"Edit","🔐 "+tr("edit"))+'</div>'}
function home(d){
if(localStorage.getItem("kor1816_"+page+"_edit")==="1")return '<div class="home-editor"><div class="edit-card"><label>'+tr("notice")+'</label><input id="hTitle" class="edit-input" value="'+esc(d.title)+'"><textarea id="hBody" class="edit-input area">'+esc(d.body)+'</textarea></div><div class="edit-card"><label>'+tr("schedule")+'</label><textarea id="hSchedule" class="edit-input area">'+esc(d.schedule)+'</textarea></div><div class="edit-card"><label>'+tr("welcome")+'</label><textarea id="hWelcome" class="edit-input area">'+esc(d.welcome)+'</textarea></div><div class="edit-buttons">'+btn("hSave","💾 "+tr("save"),"primary")+btn("hClose",tr("close"))+btn("hReset",tr("reset"),"danger")+'</div></div>';
return '<div class="home-grid"><div class="home-box"><h2>'+esc(d.title)+'</h2><div class="home-content">'+text(d.body)+'</div></div><div class="home-box"><h2>📅 '+tr("schedule")+'</h2><div class="home-content">'+text(d.schedule)+'</div></div><div class="home-box"><h2>🌍 '+tr("welcome")+'</h2><div class="home-content">'+text(d.welcome)+'</div></div></div>'+toolbar("home");
}
function sword(d){
const edit=localStorage.getItem("kor1816_sword_edit")==="1";let s='<div class="team-grid">';
for(const t of ["A","B","C","D"]){s+='<div class="team-box"><h3>'+t+' TEAM</h3>';for(let i=0;i<7;i++)s+=edit?'<input class="edit-input team-in" data-team="'+t+'" data-i="'+i+'" value="'+esc(d.teams[t][i])+'" placeholder="'+(i+1)+'">':('<div class="slot-row"><b>'+ (i+1)+'</b><span>'+esc(d.teams[t][i])+'</span></div>');s+='</div>'}
s+='</div><div class="sub-box"><h3>EXTRA / SUB</h3>'+d.teams.extra.map((x,i)=>edit?'<input class="edit-input extra-in" data-i="'+i+'" value="'+esc(x)+'">':'<div class="slot-row"><b>EX'+(i+1)+'</b><span>'+esc(x)+'</span></div>').join("")+d.teams.subs.map((x,i)=>edit?'<input class="edit-input sub-in" data-i="'+i+'" value="'+esc(x)+'">':'<div class="slot-row"><b>S'+(i+1)+'</b><span>'+esc(x)+'</span></div>').join("")+'</div>';
return s+(edit?'<div class="page-actions">'+btn("sSave","💾 "+tr("save"),"primary")+btn("sClose",tr("close"))+btn("sReset",tr("reset"),"danger")+'</div>':toolbar("s"));
}
function three(d){
const edit=localStorage.getItem("kor1816_three_edit")==="1";let s='<div class="alliance-grid">';
for(let t=1;t<=4;t++){s+='<div class="alliance-box"><h3>'+t+'팀</h3>';for(let i=0;i<5;i++)s+=edit?'<input class="edit-input three-in" data-t="'+t+'" data-i="'+i+'" value="'+esc(d.groups[t][i])+'" placeholder="닉네임">':'<div class="slot-row"><b>'+(i+1)+'</b><span>'+esc(d.groups[t][i])+'</span></div>';s+='</div>'}return s+'</div>'+(edit?'<div class="page-actions">'+btn("tSave","💾 "+tr("save"),"primary")+btn("tClose",tr("close"))+btn("tReset",tr("reset"),"danger")+'</div>':toolbar("three"));
}
function siege(d){
const edit=localStorage.getItem("kor1816_siege_edit")==="1";let s='<div class="info-grid">';
d.cards.forEach((x,i)=>s+='<div class="info-box">'+(edit?'<input class="edit-input" data-si="'+i+'" data-field="title" value="'+esc(x.title)+'">':'<h2>'+esc(x.title)+'</h2>')+(edit?'<textarea class="edit-input area" data-si="'+i+'" data-field="text">'+esc(x.text)+'</textarea>':'<div class="info-text">'+text(x.text)+'</div>')+'</div>');s+='</div>';return s+(edit?'<div class="page-actions">'+btn("gSave","💾 "+tr("save"),"primary")+btn("gClose",tr("close"))+btn("gReset",tr("reset"),"danger")+'</div>':toolbar("siege"));
}
function bear(d){
const edit=localStorage.getItem("kor1816_bear_edit")==="1";return (edit?'<div class="info-grid"><div class="info-box"><h2>🐻 '+tr("time")+'</h2><textarea id="bText" class="edit-input area">'+esc(d.text)+'</textarea></div><div class="info-box"><h2>⚔️ '+tr("heroes")+'</h2><textarea id="bHeroes" class="edit-input area">'+esc(d.heroes)+'</textarea></div></div><div class="page-actions">'+btn("bSave","💾 "+tr("save"),"primary")+btn("bClose",tr("close"))+btn("bReset",tr("reset"),"danger")+'</div>':'<div class="info-grid"><div class="info-box"><h2>🐻 '+tr("time")+'</h2><div class="info-text">'+text(d.text)+'</div></div><div class="info-box"><h2>⚔️ '+tr("heroes")+'</h2><div class="info-text">'+text(d.heroes)+'</div></div></div>'+toolbar("bear"));
}
function seat(data){
const edit=localStorage.getItem("kor1816_seating_edit")==="1",rows=data.map((g,gi)=>'<tr class="seat-group"><th colspan="3">'+g.row.replace("Row",tr("row"))+'</th></tr>'+g.names.map((n,i)=>'<tr><td>'+g.row.replace("Row",tr("row"))+'</td><td>'+(n?i+1:"")+'</td><td>'+(edit?'<input class="seat-input" data-r="'+gi+'" data-i="'+i+'" value="'+esc(n)+'">':esc(n))+'</td></tr>').join("")).join("");
let map='<div class="seating-map"><div class="map-title">🐻 '+tr("bear")+'</div><img class="seat-map-image" src="./seating-map.png" alt="KOR1816 자리배치 이미지" onerror="this.style.display=\"none\";this.nextElementSibling.style.display=\"block\""><div class="map-missing" style="display:none">자리배치 이미지가 아직 업로드되지 않았습니다.</div></div>';
return map+(edit?'<div class="page-actions">'+btn("pSave","💾 "+tr("save"),"primary")+btn("pClose",tr("close"))+btn("pReset",tr("reset"),"danger")+'</div>':'<div class="page-actions">'+btn("seatingEdit","🔐 "+tr("edit"))+'</div>')+'<div class="table-wrap"><table class="seat-table"><thead><tr><th>'+tr("row")+'</th><th>'+tr("no")+'</th><th>'+tr("member")+'</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function rules(d){
const edit=localStorage.getItem("kor1816_rules_edit")==="1";return edit?'<textarea id="rText" class="edit-input rules-area">'+esc(d.text)+'</textarea><div class="page-actions">'+btn("rSave","💾 "+tr("save"),"primary")+btn("rClose",tr("close"))+btn("rReset",tr("reset"),"danger")+'</div>':'<div class="rules-text">'+text(d.text)+'</div>'+toolbar("rules");
}
async function saveAndRender(k,v,editKey){
localPut(k,v);
const ok=await cloudPut(k,v);
if(SHARED_DB_URL&&!ok)alert("공용 저장에 실패했습니다. 인터넷 연결 또는 Firebase 설정을 확인해주세요.");
localStorage.setItem(editKey,"0");await render();
}
function wire(){
const id=(x)=>document.getElementById(x);
if(page==="home"){if(id("homeEdit"))id("homeEdit").onclick=()=>{localStorage.setItem("kor1816_home_edit","1");render()};if(id("hClose"))id("hClose").onclick=()=>{localStorage.setItem("kor1816_home_edit","0");render()};if(id("hSave"))id("hSave").onclick=()=>saveAndRender("home",{title:id("hTitle").value,body:id("hBody").value,schedule:id("hSchedule").value,welcome:id("hWelcome").value},"kor1816_home_edit");if(id("hReset"))id("hReset").onclick=()=>saveAndRender("home",clone(defaults.home),"kor1816_home_edit")}
if(page==="sword"){if(id("sEdit"))id("sEdit").onclick=()=>{localStorage.setItem("kor1816_sword_edit","1");render()};if(id("sClose"))id("sClose").onclick=()=>{localStorage.setItem("kor1816_sword_edit","0");render()};if(id("sSave"))id("sSave").onclick=async()=>{const d=await get("sword");document.querySelectorAll(".team-in").forEach(e=>d.teams[e.dataset.team][+e.dataset.i]=e.value);document.querySelectorAll(".extra-in").forEach(e=>d.teams.extra[+e.dataset.i]=e.value);document.querySelectorAll(".sub-in").forEach(e=>d.teams.subs[+e.dataset.i]=e.value);saveAndRender("sword",d,"kor1816_sword_edit")};if(id("sReset"))id("sReset").onclick=()=>saveAndRender("sword",clone(defaults.sword),"kor1816_sword_edit")}
if(page==="three"){if(id("threeEdit"))id("threeEdit").onclick=()=>{localStorage.setItem("kor1816_three_edit","1");render()};if(id("tClose"))id("tClose").onclick=()=>{localStorage.setItem("kor1816_three_edit","0");render()};if(id("tSave"))id("tSave").onclick=async()=>{const d=await get("three");document.querySelectorAll(".three-in").forEach(e=>d.groups[e.dataset.t][+e.dataset.i]=e.value);saveAndRender("three",d,"kor1816_three_edit")};if(id("tReset"))id("tReset").onclick=()=>saveAndRender("three",clone(defaults.three),"kor1816_three_edit")}
if(page==="siege"){if(id("siegeEdit"))id("siegeEdit").onclick=()=>{localStorage.setItem("kor1816_siege_edit","1");render()};if(id("gClose"))id("gClose").onclick=()=>{localStorage.setItem("kor1816_siege_edit","0");render()};if(id("gSave"))id("gSave").onclick=async()=>{const d=await get("siege");document.querySelectorAll("[data-si]").forEach(e=>d.cards[+e.dataset.si][e.dataset.field]=e.value);saveAndRender("siege",d,"kor1816_siege_edit")};if(id("gReset"))id("gReset").onclick=()=>saveAndRender("siege",clone(defaults.siege),"kor1816_siege_edit")}
if(page==="bear"){if(id("bearEdit"))id("bearEdit").onclick=()=>{localStorage.setItem("kor1816_bear_edit","1");render()};if(id("bClose"))id("bClose").onclick=()=>{localStorage.setItem("kor1816_bear_edit","0");render()};if(id("bSave"))id("bSave").onclick=()=>saveAndRender("bear",{text:id("bText").value,heroes:id("bHeroes").value},"kor1816_bear_edit");if(id("bReset"))id("bReset").onclick=()=>saveAndRender("bear",clone(defaults.bear),"kor1816_bear_edit")}
if(page==="seating"){if(id("seatingEdit"))id("seatingEdit").onclick=()=>{localStorage.setItem("kor1816_seating_edit","1");render()};if(id("pClose"))id("pClose").onclick=()=>{localStorage.setItem("kor1816_seating_edit","0");render()};if(id("pSave"))id("pSave").onclick=async()=>{const d=await get("seating");document.querySelectorAll(".seat-input").forEach(e=>d[+e.dataset.r].names[+e.dataset.i]=e.value);saveAndRender("seating",d,"kor1816_seating_edit")};if(id("pReset"))id("pReset").onclick=()=>saveAndRender("seating",clone(seating),"kor1816_seating_edit")}
if(page==="rules"){if(id("rulesEdit"))id("rulesEdit").onclick=()=>{localStorage.setItem("kor1816_rules_edit","1");render()};if(id("rClose"))id("rClose").onclick=()=>{localStorage.setItem("kor1816_rules_edit","0");render()};if(id("rSave"))id("rSave").onclick=()=>saveAndRender("rules",{text:id("rText").value},"kor1816_rules_edit");if(id("rReset"))id("rReset").onclick=()=>saveAndRender("rules",clone(defaults.rules),"kor1816_rules_edit")}
}
document.querySelectorAll(".nav-button").forEach(b=>{b.onclick=()=>{page=b.dataset.page;localStorage.setItem("kor1816_page",page);render()}});if(sel)sel.onchange=()=>{lang=sel.value;localStorage.setItem("kor1816_language",lang);render()};if(sel)sel.value=lang;
render();
