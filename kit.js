/* Mentor Me Email Kit — клиентский код. Лежит в репозитории mentorme-assets. */
const RAW='https://raw.githubusercontent.com/Alamanss/mentorme-assets/main/';
const FILES={logo:'mentorme-logo.png',badgeRu:'badge-8-let.png',badgeEn:'badge-8-years.png',
 cert:'icef-certificate.png',cardbg:'card-bg.png',ig:'ic-instagram.png',wa:'ic-whatsapp.png',
 yt:'ic-youtube.png',tg:'ic-telegram.png',web:'ic-website.png',geo:'ic-location.png'};
const L={site:'https://www.mentorme.kz',ig:'https://instagram.com/mentorme.kz',
 wa:'https://wa.me/77000000000',yt:'https://youtube.com/@mentorme',tg:'https://t.me/mentorme',
 geo:'https://go.2gis.com/mentorme'};
const im=(k,m)=>RAW+FILES[k];
const esc=s=>String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const lines=s=>String(s||'').split('\n').map(x=>x.trim()).filter(Boolean);
const SANS="Arial,Helvetica,sans-serif";
const SERIF="Georgia,'Times New Roman',serif";
const MONO="'Courier New',Courier,monospace";

const STYLES={
 red:{id:'red',name:'Редакция',desc:'Бумага, засечки, тонкие линейки',
   ground:'#f5f4f1',card:'#ffffff',radius:'2px',pad:44,
   f:SERIF,ui:SANS,accent:'#b0492f',head:'#1f2a33',body:'#3b4650',mut:'#a09a90',rule:'#ded9d1',
   soft:'#faf9f7',h1:30,h1lh:38,t:16,tlh:27,header:'editorial',info:'rules',btn:'outline',dark:false},
 dos:{id:'dos',name:'Досье',desc:'Тёмная шапка, нумерация, чекбоксы',
   ground:'#e9eef3',card:'#ffffff',radius:'8px',pad:34,
   f:SANS,ui:SANS,accent:'#0a2e52',head:'#0a2e52',body:'#42566a',mut:'#8a9bab',rule:'#e4eaf0',
   soft:'#f4f8fb',h1:22,h1lh:30,t:14.5,tlh:23,header:'bar',info:'numbered',btn:'solid',dark:false},
 pla:{id:'pla',name:'Плакат',desc:'Градиентная шапка, крупный заголовок',
   ground:'#0a2233',card:'#ffffff',radius:'14px',pad:40,
   f:SANS,ui:SANS,accent:'#e8232a',head:'#0a2e52',body:'#33475b',mut:'#7b8b9a',rule:'#e4eaf0',
   soft:'#f4f8fb',h1:34,h1lh:41,t:15.5,tlh:26,header:'hero',info:'box',btn:'pill',dark:true}
};

function footerRows(lang,m,S,o){
  if(o.footer==='none')return '';
  const badge=lang==='ru'?'badgeRu':'badgeEn';
  const SL=S.dark?'#cfe2f2':'#0d3c6e', LG=S.dark?'#8fa8bd':'#8a97a6';
  const t=lang==='ru'?{d1:'EdTech-компания, основанная в 2018 году.',d2:'Помогаем поступать в магистратуру и PhD',
    d3:'за рубежом со стипендиями и грантами',more:'Больше о нас:',ba:'8 лет на рынке',
    s1a:'С нами ',s1b:'мечты',s1c:' сбываются!',s2a:'Арманға',s2b:' апарар жол!',
    lg:'ТОО «Mentor Me», Алматы, Казахстан',why:'Вы получили это письмо, потому что обращались в Mentor Me.'}
   :{d1:'An EdTech company founded in 2018.',d2:'We assist students in securing admissions',
    d3:"to master's and PhD programs abroad",more:'Learn More About Us:',ba:'8 Years',
    s1a:'The Way to Your ',s1b:'Dreams',s1c:'',s2a:'',s2b:'',
    lg:'Mentor Me LLP, Almaty, Kazakhstan',why:'You received this email because you contacted Mentor Me.'};
  const ic=(k,h,a,last)=>`<td${last?'':' style="padding-right:12px;"'}><a href="${h}" target="_blank" style="text-decoration:none;"><img src="${im(k,m)}" alt="${a}" width="28" height="28" style="display:block;border:0;outline:none;"></a></td>`;
  const card=o.footer==='full'?`<tr><td bgcolor="#05537f" background="${im('cardbg',m)}" style="background-color:#05537f;background-image:url('${im('cardbg',m)}');background-image:linear-gradient(90deg,#033c5d 0%,#067ec3 100%);background-repeat:no-repeat;background-size:cover;border-radius:16px;padding:20px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td width="106" valign="middle" align="center" style="padding-right:14px;"><img src="${im(badge,m)}" alt="${t.ba}" width="92" height="116" style="display:block;border:0;outline:none;width:92px;height:auto;"></td>
<td valign="middle" style="color:#ffffff;">
<div style="font-family:${SANS};font-size:17px;font-weight:bold;line-height:22px;color:#ffffff;padding-bottom:6px;">Mentor Me</div>
<div style="font-family:${SANS};font-size:12px;line-height:17px;font-style:italic;color:#e8f1fb;padding-bottom:14px;">${t.d1}<br>${t.d2}<br>${t.d3}</div>
<div style="font-family:${SANS};font-size:13px;line-height:18px;color:#ffffff;padding-bottom:10px;">${t.more}</div>
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>${ic('ig',L.ig,'Instagram')}${ic('wa',L.wa,'WhatsApp')}${ic('yt',L.yt,'YouTube')}${ic('tg',L.tg,'Telegram')}${ic('web',L.site,'Website')}${ic('geo',L.geo,'Office',1)}</tr></table></td>
<td width="164" valign="middle" align="right" style="padding-left:14px;"><img src="${im('cert',m)}" alt="Accredited ICEF Agency" width="150" height="100" style="display:block;border:0;outline:none;width:150px;height:auto;"><div style="font-family:${SANS};font-size:11px;font-style:italic;color:#dbe9f7;padding-top:6px;text-align:right;">Accredited ICEF Agency</div></td>
</tr></table></td></tr>`:'';
  const slogan=`<tr><td align="center" style="padding:${o.footer==='full'?24:6}px 0 0 0;"><div style="font-family:${SANS};font-size:15px;font-weight:bold;font-style:italic;line-height:23px;color:${SL};">${t.s1a}<span style="color:#e8232a;">${t.s1b}</span>${t.s1c}</div>${t.s2a?`<div style="font-family:${SANS};font-size:15px;font-weight:bold;font-style:italic;line-height:23px;color:${SL};"><span style="color:#e8232a;">${t.s2a}</span>${t.s2b}</div>`:''}</td></tr>`;
  const legal=`<tr><td align="center" style="padding:18px 0 0 0;"><div style="font-family:${SANS};font-size:11px;line-height:17px;color:${LG};">${t.lg} &nbsp;·&nbsp; <a href="${L.site}" target="_blank" style="color:${LG};text-decoration:underline;">mentorme.kz</a><br>${t.why}</div></td></tr>`;
  return card+slogan+legal;
}

/* ---------- блоки, зависящие от стиля ---------- */
function bParas(C,S){const P=`padding-left:${S.pad}px;padding-right:${S.pad}px;`;
  const p=lines(C.body).map(x=>`<p style="margin:0 0 13px 0;font-family:${S.f};font-size:${S.t}px;line-height:${S.tlh}px;color:${S.body};">${esc(x)}</p>`).join('');
  return p?`<tr><td style="${P}padding-top:${S.header==='hero'?32:16}px;">${p}</td></tr>`:'';}

function bInfo(C,S,o){
  const rows=(C.info||[]).filter(r=>r[1]);
  if(!rows.length||!o.info)return '';
  const P=`padding-left:${S.pad}px;padding-right:${S.pad}px;`;
  const val=r=>r[2]?r[1]:esc(r[1]);
  if(S.info==='rules'){
    const tr=rows.map(r=>`<tr><td width="92" valign="top" style="padding:5px 16px 5px 0;font-family:${S.ui};font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:${S.mut};line-height:22px;">${esc(r[0])}</td><td valign="top" style="padding:5px 0;font-family:${S.f};font-size:${S.t}px;line-height:22px;color:${S.head};">${val(r)}</td></tr>`).join('');
    return `<tr><td style="${P}padding-top:24px;"><div style="height:1px;line-height:1px;font-size:0;background-color:${S.rule};">&nbsp;</div></td></tr>
<tr><td style="${P}padding-top:14px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${tr}</table></td></tr>
<tr><td style="${P}padding-top:16px;"><div style="height:1px;line-height:1px;font-size:0;background-color:${S.rule};">&nbsp;</div></td></tr>`;
  }
  if(S.info==='numbered'){
    const tr=rows.map((r,i)=>{const last=i===rows.length-1;const bb=last?'':`border-bottom:1px solid ${S.rule};`;
      return `<tr><td width="34" valign="top" style="padding:13px 0;${bb}font-family:${MONO};font-size:11px;line-height:18px;color:#b6c3ce;">${String(i+1).padStart(2,'0')}</td>`
      +`<td width="120" valign="top" style="padding:13px 14px 13px 0;${bb}font-family:${S.ui};font-size:10px;line-height:18px;letter-spacing:1.4px;text-transform:uppercase;color:${S.mut};">${esc(r[0])}</td>`
      +`<td valign="top" style="padding:13px 0;${bb}font-family:${S.f};font-size:14px;line-height:18px;color:${S.head};font-weight:bold;">${val(r)}</td></tr>`;}).join('');
    return `<tr><td style="${P}padding-top:24px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${S.head};">${tr}</table></td></tr>`;
  }
  const tr=rows.map(r=>`<tr><td valign="top" width="104" style="padding:4px 12px 4px 0;font-family:${S.ui};font-size:11px;line-height:19px;letter-spacing:.8px;text-transform:uppercase;color:${S.mut};">${esc(r[0])}</td><td valign="top" style="padding:4px 0;font-family:${S.f};font-size:14px;line-height:19px;color:${S.head};font-weight:bold;">${val(r)}</td></tr>`).join('');
  return `<tr><td style="${P}padding-top:22px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${S.soft};border-radius:8px;"><tr><td style="padding:14px 18px;border-left:3px solid ${o.accent};"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${tr}</table></td></tr></table></td></tr>`;
}

function bList(l,S,o){
  if(!l||!l.items.length)return '';
  const P=`padding-left:${S.pad}px;padding-right:${S.pad}px;`;
  const mk=S.info==='numbered'&&l.box?'&#9633;':l.mark;
  const col=l.color==='accent'?o.accent:l.color;
  const li=l.items.map(t=>`<tr><td valign="top" width="20" style="padding:4px 0;font-family:${S.ui};font-size:14px;line-height:${S.tlh}px;color:${col};font-weight:bold;">${mk}</td><td valign="top" style="padding:4px 0;font-family:${S.f};font-size:${S.t}px;line-height:${S.tlh}px;color:${S.body};">${esc(t)}</td></tr>`).join('');
  const h=l.t?`<div style="font-family:${S.ui};font-size:10px;line-height:16px;letter-spacing:1.6px;text-transform:uppercase;color:${S.mut};font-weight:bold;padding-bottom:9px;">${esc(l.t)}</div>`:'';
  return `<tr><td style="${P}padding-top:22px;">${h}<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${li}</table></td></tr>`;
}

function bNote(C,S,o){
  if(!C.note||!C.note.text)return '';
  const P=`padding-left:${S.pad}px;padding-right:${S.pad}px;`;
  const c=C.note.color==='accent'?o.accent:C.note.color;
  return `<tr><td style="${P}padding-top:20px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${S.soft};border-radius:8px;"><tr><td style="padding:13px 16px;border-left:3px solid ${c};font-family:${S.f};font-size:14px;line-height:21px;color:${S.head};">${esc(C.note.text)}</td></tr></table></td></tr>`;
}

function btnHtml(C,S,o,onDark){
  const a=o.accent;
  if(S.btn==='outline')return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td style="border:1px solid ${a};border-radius:2px;"><a href="${esc(C.cta.h)}" target="_blank" style="display:inline-block;padding:12px 26px;font-family:${S.ui};font-size:12px;letter-spacing:1.6px;text-transform:uppercase;font-weight:bold;color:${a};text-decoration:none;">${esc(C.cta.l)}</a></td></tr></table>`;
  const r=S.btn==='pill'?'40px':'4px', pad=S.btn==='pill'?'15px 34px':'13px 26px', fs=S.btn==='pill'?15:14;
  const bg=onDark?'#e8232a':a;
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr><td bgcolor="${bg}" style="background-color:${bg};border-radius:${r};"><a href="${esc(C.cta.h)}" target="_blank" style="display:inline-block;padding:${pad};font-family:${S.ui};font-size:${fs}px;font-weight:bold;color:#ffffff;text-decoration:none;border-radius:${r};">${esc(C.cta.l)}</a></td></tr></table>`;
}
function bCta(C,S,o){
  if(!o.cta||!C.cta||!C.cta.l||!C.cta.h)return '';
  return `<tr><td style="padding-left:${S.pad}px;padding-right:${S.pad}px;padding-top:26px;">${btnHtml(C,S,o)}</td></tr>`;
}
function bSmall(C,S){return C.small?`<tr><td style="padding-left:${S.pad}px;padding-right:${S.pad}px;padding-top:18px;"><div style="font-family:${S.f};font-size:13px;line-height:21px;color:${S.mut};${S.id==='red'?'font-style:italic;':''}">${esc(C.small)}</div></td></tr>`:'';}
function bStats(C,S,o){
  if(!o.stats||!C.stats||!C.stats.length)return '';
  const P=`padding-left:${S.pad}px;padding-right:${S.pad}px;`;
  const w=Math.floor(100/C.stats.length);
  const td=C.stats.map((s,i)=>`<td width="${w}%" valign="top"${i<C.stats.length-1?' style="padding-right:12px;"':''}><div style="font-family:${S.ui};font-size:26px;line-height:30px;font-weight:bold;color:${o.accent};">${esc(s[0])}</div><div style="font-family:${S.ui};font-size:12px;line-height:18px;color:${S.mut};padding-top:5px;">${esc(s[1])}</div></td>`).join('');
  return `<tr><td style="${P}padding-top:26px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>${td}</tr></table></td></tr>`;
}
function bSign(C,S){
  const P=`padding-left:${S.pad}px;padding-right:${S.pad}px;`;
  if(S.id==='red')return `<tr><td style="${P}padding-top:28px;"><div style="height:1px;line-height:1px;font-size:0;background-color:${S.rule};">&nbsp;</div></td></tr>
<tr><td style="${P}padding-top:16px;"><div style="font-family:${S.f};font-size:16px;line-height:24px;color:${S.head};">${esc(C.sign.man)}</div><div style="font-family:${S.ui};font-size:10px;letter-spacing:1.4px;text-transform:uppercase;color:${S.mut};padding-top:5px;">${esc(C.sign.role)}</div></td></tr>`;
  return `<tr><td style="${P}padding-top:24px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-top:1px solid ${S.rule};"><tr><td style="padding-top:16px;">
<div style="font-family:${S.f};font-size:${S.t}px;line-height:22px;color:${S.body};">${esc(C.sign.t)}</div>
<div style="font-family:${S.f};font-size:14.5px;line-height:22px;color:${S.head};font-weight:bold;">${esc(C.sign.man)}</div>
${C.sign.role?`<div style="font-family:${S.f};font-size:12.5px;line-height:19px;color:${S.mut};">${esc(C.sign.role)}</div>`:''}</td></tr></table></td></tr>`;
}

function header(C,S,o,m,lang){
  const P=`padding-left:${S.pad}px;padding-right:${S.pad}px;`;
  if(S.header==='editorial'){
    const logo=o.logo?`<td valign="middle"><img src="${im('logo',m)}" alt="Mentor Me" width="124" height="40" style="display:block;border:0;outline:none;width:124px;height:auto;"></td>`:'<td></td>';
    const date=o.date?`<td valign="middle" align="right"><div style="font-family:${S.ui};font-size:10px;letter-spacing:1.8px;text-transform:uppercase;color:${S.mut};">${esc(o.dateText)}</div></td>`:'';
    return `<tr><td style="${P}padding-top:38px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>${logo}${date}</tr></table></td></tr>
<tr><td style="${P}padding-top:26px;"><div style="height:1px;line-height:1px;font-size:0;background-color:${S.rule};">&nbsp;</div></td></tr>
<tr><td style="${P}padding-top:26px;"><div style="font-family:${S.ui};font-size:10px;letter-spacing:2.2px;text-transform:uppercase;color:${o.accent};font-weight:bold;">${esc(C.eb)}</div></td></tr>
<tr><td style="${P}padding-top:14px;"><div style="font-family:${S.f};font-size:${S.h1}px;line-height:${S.h1lh}px;color:${S.head};">${C.ti}</div></td></tr>`;
  }
  if(S.header==='bar'){
    const ref=o.date?`<td valign="middle" align="right"><div style="font-family:${MONO};font-size:11px;letter-spacing:.6px;color:#7fa5c8;">${esc(o.refText)}</div></td>`:'';
    const brand=o.logo?`<div style="font-family:${S.ui};font-size:15px;font-weight:bold;letter-spacing:3px;color:#ffffff;">MENTORME</div>`:'&nbsp;';
    return `<tr><td bgcolor="#0a2e52" style="background-color:#0a2e52;padding:22px ${S.pad}px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td valign="middle">${brand}</td>${ref}</tr></table></td></tr>
<tr><td bgcolor="${o.accent}" height="3" style="height:3px;line-height:3px;font-size:0;background-color:${o.accent};">&nbsp;</td></tr>
<tr><td style="${P}padding-top:30px;"><div style="font-family:${S.ui};font-size:10px;letter-spacing:2px;text-transform:uppercase;color:${S.mut};font-weight:bold;">${esc(C.eb)}</div>
<div style="font-family:${S.f};font-size:${S.h1}px;line-height:${S.h1lh}px;font-weight:bold;color:${S.head};padding-top:10px;">${C.ti}</div></td></tr>`;
  }
  const sub=C.sub?`<tr><td style="padding-top:16px;"><div style="font-family:${S.ui};font-size:15px;line-height:24px;color:#bcd8ef;">${esc(C.sub)}</div></td></tr>`:'';
  const cta=(o.cta&&C.cta&&C.cta.l&&C.cta.h)?`<tr><td style="padding-top:26px;">${btnHtml(C,S,o,true)}</td></tr>`:'';
  const brand=o.logo?`<tr><td><div style="font-family:${S.ui};font-size:15px;font-weight:bold;letter-spacing:3.4px;color:#ffffff;">MENTORME</div></td></tr>`:'';
  return `<tr><td bgcolor="#05537f" background="${im('cardbg',m)}" style="background-color:#05537f;background-image:url('${im('cardbg',m)}');background-image:linear-gradient(135deg,#022c46 0%,#0a4d7d 55%,#067ec3 100%);background-repeat:no-repeat;background-size:cover;border-radius:${S.radius} ${S.radius} 0 0;padding:36px ${S.pad}px 40px ${S.pad}px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${brand}
<tr><td style="padding-top:${o.logo?34:0}px;"><div style="font-family:${S.ui};font-size:10px;letter-spacing:2.4px;text-transform:uppercase;color:#ff6b62;font-weight:bold;">${esc(C.eb)}</div></td></tr>
<tr><td style="padding-top:14px;"><div style="font-family:${S.ui};font-size:${S.h1}px;line-height:${S.h1lh}px;font-weight:bold;color:#ffffff;">${C.ti}</div></td></tr>
${sub}${cta}</table></td></tr>`;
}

function build(C,S,o,lang,m){
  const heroCta=S.header==='hero';
  const rows=header(C,S,o,m,lang)+bParas(C,S)+bInfo(C,S,o)
    +(C.lists||[]).map(l=>bList(l,S,o)).join('')
    +bNote(C,S,o)+(heroCta?'':bCta(C,S,o))+bStats(C,S,o)+bSmall(C,S)+bSign(C,S)
    +`<tr><td style="padding:0 ${S.pad}px ${S.id==='red'?40:34}px ${S.pad}px;font-size:0;line-height:0;">&nbsp;</td></tr>`;
  const W=o.width;
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${S.ground};margin:0;padding:0;"><tr><td align="center" style="padding:28px 12px;">
<table role="presentation" width="${W}" cellpadding="0" cellspacing="0" border="0" style="width:${W}px;max-width:${W}px;font-family:${S.f};">
<tr><td bgcolor="${S.card}" style="background-color:${S.card};border-radius:${S.radius};"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">${rows}</table></td></tr>
<tr><td height="20" style="height:20px;line-height:20px;font-size:0;">&nbsp;</td></tr>
${footerRows(lang,m,S,o)}
</table></td></tr></table>`;
}
const F=(k,l,o={})=>Object.assign({k,l,t:'text'},o);
const TPL=[
{key:'consult',n:'Ответ на заявку',d:'Приглашение на консультацию',
 f:[F('name','Имя получателя'),F('date','Дата'),F('time','Время'),F('format','Формат'),
    F('link','Ссылка на встречу'),F('intro','Вступление',{t:'area'}),F('prep','Подготовить к встрече — по строке',{t:'area'}),
    F('outro','Приписка снизу',{t:'area',rows:2}),F('man','Ваше имя'),F('role','Должность')],
 dflt:{ru:{name:'Айгерим',date:'12 сентября, четверг',time:'16:00 по Алматы',format:'Zoom, 40 минут',
   link:'https://meet.google.com/xxx-xxxx-xxx',
   intro:'Мы получили вашу заявку и подобрали удобное время для разговора.\nНа встрече разберём ваш профиль, цели и подходящие программы — приходите с вопросами, отвечу на все.',
   prep:'Список университетов, которые вы уже рассматриваете\nСредний балл диплома и результат IELTS, если он есть\nБюджет и понимание, нужна ли стипендия',
   outro:'Если время не подходит — просто ответьте на это письмо, подберём другое.',
   man:'Аламан Сейтқұпаров',role:'Менеджер по поступлению, Mentor Me'},
  en:{name:'Aigerim',date:'Thursday, September 12',time:'16:00 Almaty time',format:'Zoom, 40 minutes',
   link:'https://meet.google.com/xxx-xxxx-xxx',
   intro:'We received your request and reserved a time to talk.\nDuring the call we will go through your profile, your goals and the programs that fit — bring your questions.',
   prep:'A list of universities you are already considering\nYour GPA and IELTS score, if you have one\nYour budget and whether you need a scholarship',
   outro:'If this time does not work, simply reply to this email and we will find another one.',
   man:'Alaman Seitkuparov',role:'Admissions Manager, Mentor Me'}},
 subj:(v,l)=>l==='ru'?`Mentor Me · консультация ${v.date}, ${v.time}`:`Mentor Me · consultation on ${v.date}, ${v.time}`,
 make:(v,l)=>({eb:l==='ru'?'Заявка принята':'Request received',
   ti:l==='ru'?`${esc(v.name)}, спасибо<br>за&nbsp;заявку`:`${esc(v.name)}, thank you<br>for your request`,
   sub:`${v.date}, ${v.time} · ${v.format}`,
   body:v.intro,
   info:[[l==='ru'?'Дата':'Date',v.date],[l==='ru'?'Время':'Time',v.time],[l==='ru'?'Формат':'Format',v.format],
     [l==='ru'?'Ссылка':'Link',v.link?`<a href="${esc(v.link)}" target="_blank" style="color:#067ec3;text-decoration:underline;">${esc(v.link)}</a>`:'',true]],
   lists:[{t:l==='ru'?'Подготовить к встрече':'Prepare for the call',items:lines(v.prep),mark:'&bull;',color:'accent',box:true}],
   cta:{l:l==='ru'?'Подтвердить встречу':'Confirm the meeting',h:v.link},
   small:v.outro,sign:{t:l==='ru'?'С уважением,':'Best regards,',man:v.man,role:v.role},
   stats:[['8',l==='ru'?'лет на рынке':'years of practice'],['40',l==='ru'?'минут разговора':'minutes of talk'],['ICEF',l==='ru'?'аккредитация':'accredited']]})},

{key:'status',n:'Статус по поступлению',d:'Что готово, что осталось, дедлайны',
 f:[F('name','Имя получателя'),F('uni','Университет / программа'),F('intro','Вступление',{t:'area',rows:2}),
    F('done','Готово — по строке',{t:'area'}),F('todo','Осталось — по строке',{t:'area'}),
    F('dl','Ближайший дедлайн'),F('link','Ссылка на личный кабинет'),F('man','Ваше имя'),F('role','Должность')],
 dflt:{ru:{name:'Айгерим',uni:'University of Amsterdam — MSc Data Science',
   intro:'Коротко о том, где мы сейчас по вашей заявке.',
   done:'Мотивационное письмо согласовано\nДиплом переведён и заверен\nIELTS 7.0 — балл выше требуемого',
   todo:'Второе рекомендательное письмо от научного руководителя\nВыписка с оценками за последний семестр\nСправка о финансовой состоятельности',
   dl:'15 октября — приём документов на первую волну',link:'https://lk.mentorme.kz',
   man:'Аламан Сейтқұпаров',role:'Менеджер по поступлению, Mentor Me'},
  en:{name:'Aigerim',uni:'University of Amsterdam — MSc Data Science',
   intro:'A short update on where your application stands.',
   done:'Motivation letter finalised\nDiploma translated and certified\nIELTS 7.0 — above the requirement',
   todo:'Second recommendation letter from your supervisor\nTranscript for the last semester\nProof of financial means',
   dl:'October 15 — first round document deadline',link:'https://lk.mentorme.kz',
   man:'Alaman Seitkuparov',role:'Admissions Manager, Mentor Me'}},
 subj:(v,l)=>l==='ru'?`Mentor Me · статус заявки — ${v.uni}`:`Mentor Me · application status — ${v.uni}`,
 make:(v,l)=>({eb:l==='ru'?'Статус заявки':'Application status',
   ti:l==='ru'?`${esc(v.name)}, обновление<br>по поступлению`:`${esc(v.name)}, an update<br>on your application`,
   sub:v.uni,body:v.intro,
   info:[[l==='ru'?'Программа':'Program',v.uni],[l==='ru'?'Дедлайн':'Deadline',v.dl]],
   lists:[{t:l==='ru'?'Уже готово':'Completed',items:lines(v.done),mark:'&#10003;',color:'#0f7a52'},
          {t:l==='ru'?'Осталось собрать':'Still needed',items:lines(v.todo),mark:'&bull;',color:'accent',box:true}],
   cta:{l:l==='ru'?'Открыть личный кабинет':'Open your dashboard',h:v.link},
   sign:{t:l==='ru'?'С уважением,':'Best regards,',man:v.man,role:v.role},
   stats:[['3',l==='ru'?'шага осталось':'steps left'],['15.10',l==='ru'?'ближайший дедлайн':'next deadline'],['8',l==='ru'?'лет опыта':'years of practice']]})},

{key:'congrats',n:'Поздравление',d:'Поступление, стипендия, грант',
 f:[F('name','Имя получателя'),F('uni','Университет'),F('prog','Программа'),F('money','Стипендия / грант'),
    F('intro','Текст поздравления',{t:'area'}),F('next','Что дальше — по строке',{t:'area'}),
    F('man','Ваше имя'),F('role','Должность')],
 dflt:{ru:{name:'Айгерим',uni:'University of Amsterdam',prog:'MSc Data Science, старт в сентябре 2027',
   money:'Holland Scholarship — €5 000',
   intro:'Пришёл ответ из университета — вас приняли.\nЭто результат вашей работы: восьми месяцев подготовки, четырёх версий мотивационного письма и сданного с первого раза IELTS. Мы очень рады за вас.',
   next:'Подтвердить место до 1 ноября\nПодать документы на студенческую визу\nНачать поиск жилья — в Амстердаме это делают заранее',
   man:'Аламан Сейтқұпаров',role:'Менеджер по поступлению, Mentor Me'},
  en:{name:'Aigerim',uni:'University of Amsterdam',prog:'MSc Data Science, starting September 2027',
   money:'Holland Scholarship — €5,000',
   intro:'The university has replied — you are in.\nThis is the result of your own work: eight months of preparation, four drafts of the motivation letter and an IELTS passed on the first attempt. We are delighted for you.',
   next:'Confirm your place before November 1\nApply for the student visa\nStart looking for housing — in Amsterdam this is done early',
   man:'Alaman Seitkuparov',role:'Admissions Manager, Mentor Me'}},
 subj:(v,l)=>l==='ru'?`Поздравляем с поступлением в ${v.uni}!`:`Congratulations on your admission to ${v.uni}!`,
 make:(v,l)=>({eb:l==='ru'?'Поздравляем':'Congratulations',
   ti:l==='ru'?`${esc(v.name)}, вас приняли<br>в ${esc(v.uni)}`:`${esc(v.name)}, you are in<br>at ${esc(v.uni)}`,
   sub:v.money,body:v.intro,
   info:[[l==='ru'?'Программа':'Program',v.prog],[l==='ru'?'Финансирование':'Funding',v.money]],
   lists:[{t:l==='ru'?'Что дальше':'Next steps',items:lines(v.next),mark:'&bull;',color:'accent',box:true}],
   cta:{l:'',h:''},sign:{t:l==='ru'?'Искренне ваш,':'Sincerely,',man:v.man,role:v.role},
   stats:[['1',l==='ru'?'место ваше':'place secured'],['€5 000',l==='ru'?'стипендия':'scholarship'],['2027',l==='ru'?'год старта':'start year']]})},

{key:'webinar',n:'Анонс вебинара',d:'Событие или набор на курс',
 f:[F('title','Название события'),F('about','Описание',{t:'area'}),F('date','Дата'),F('time','Время'),
    F('place','Формат / платформа'),F('speaker','Спикер'),F('price','Участие'),
    F('link','Ссылка на регистрацию'),F('man','Подпись'),F('role','Должность')],
 dflt:{ru:{title:'Как поступить в европейскую магистратуру со стипендией',
   about:'Разберём, из чего складывается сильная заявка и почему большинство отказов происходит не из-за оценок.\nПокажем на реальных кейсах наших студентов, поступивших в 2026 году, и ответим на вопросы в прямом эфире.',
   date:'24 сентября, среда',time:'19:00 по Алматы',place:'Zoom, запись будет',
   speaker:'Аламан Сейтқұпаров, менеджер по поступлению',price:'Бесплатно, по регистрации',
   link:'https://mentorme.kz/webinar',man:'Команда Mentor Me',role:''},
  en:{title:'How to get into a European Master’s with a scholarship',
   about:'We will break down what makes an application strong and why most rejections have nothing to do with grades.\nReal cases from our students admitted in 2026, plus a live Q&A.',
   date:'Wednesday, September 24',time:'19:00 Almaty time',place:'Zoom, recording available',
   speaker:'Alaman Seitkuparov, Admissions Manager',price:'Free, registration required',
   link:'https://mentorme.kz/webinar',man:'The Mentor Me team',role:''}},
 subj:(v,l)=>`${v.title} — ${v.date}`,
 make:(v,l)=>({eb:l==='ru'?'Открыта регистрация':'Registration open',ti:esc(v.title),
   sub:`${v.date}, ${v.time} · ${v.place}`,body:v.about,
   info:[[l==='ru'?'Дата':'Date',v.date],[l==='ru'?'Время':'Time',v.time],[l==='ru'?'Формат':'Format',v.place],
     [l==='ru'?'Спикер':'Speaker',v.speaker],[l==='ru'?'Участие':'Attendance',v.price]],
   lists:[],cta:{l:l==='ru'?'Зарегистрироваться':'Register now',h:v.link},
   sign:{t:l==='ru'?'До встречи в эфире,':'See you there,',man:v.man,role:v.role},
   stats:[['90',l==='ru'?'минут эфира':'minutes live'],['0 ₸',l==='ru'?'участие':'to attend'],['8',l==='ru'?'лет опыта':'years of practice']]})},

{key:'access',n:'Доступ к платформе',d:'Создание доступа или сброс пароля',
 f:[F('mode','Повод',{t:'select',opt:[['new','Доступ создан'],['reset','Сброс пароля']]}),
    F('name','Имя получателя'),F('login','Логин (email)'),F('link','Ссылка-кнопка'),
    F('hours','Ссылка действует'),F('man','Подпись'),F('role','Должность')],
 dflt:{ru:{mode:'new',name:'Айгерим',login:'aigerim@example.com',link:'https://lk.mentorme.kz/set-password?t=xxxxx',hours:'24 часа',man:'Команда Mentor Me',role:''},
  en:{mode:'new',name:'Aigerim',login:'aigerim@example.com',link:'https://lk.mentorme.kz/set-password?t=xxxxx',hours:'24 hours',man:'The Mentor Me team',role:''}},
 subj:(v,l)=>v.mode==='reset'?(l==='ru'?'Mentor Me · восстановление доступа':'Mentor Me · password reset')
   :(l==='ru'?'Mentor Me · доступ к платформе открыт':'Mentor Me · your platform access is ready'),
 make:(v,l)=>{const nw=v.mode!=='reset';
  const T=l==='ru'?{eb:nw?'Доступ к платформе':'Восстановление доступа',
    ti:nw?`${esc(v.name)}, ваш доступ готов`:`${esc(v.name)}, восстанавливаем доступ`,
    b:nw?'Мы создали для вас личный кабинет Mentor Me. Там лежат ваши документы, план поступления и дедлайны — всё в одном месте.\nОсталось придумать пароль: нажмите кнопку ниже.'
        :'Мы получили запрос на смену пароля от вашего аккаунта. Задать новый можно по кнопке ниже.',
    lg:'Логин',ex:'Ссылка действует',cta:nw?'Создать пароль':'Задать новый пароль',
    note:nw?'Ссылка одноразовая. Никому её не пересылайте.':'Если вы не запрашивали смену пароля — просто удалите это письмо, пароль останется прежним.',
    sec:'Сотрудники Mentor Me никогда не просят прислать пароль в ответном письме.',sg:'С уважением,'}
   :{eb:nw?'Platform access':'Password reset',
    ti:nw?`${esc(v.name)}, your access is ready`:`${esc(v.name)}, let’s restore your access`,
    b:nw?'We have created your Mentor Me account. Your documents, admission plan and deadlines all live there.\nOne step left — set your password using the button below.'
        :'We received a password reset request for your account. You can set a new one using the button below.',
    lg:'Login',ex:'Link valid for',cta:nw?'Set your password':'Set a new password',
    note:nw?'This link works once. Please do not forward it to anyone.':'If you did not request a reset, simply delete this email — your password stays unchanged.',
    sec:'Mentor Me staff will never ask you to send your password by email.',sg:'Best regards,'};
  return {eb:T.eb,ti:T.ti,sub:v.login,body:T.b,info:[[T.lg,v.login],[T.ex,v.hours]],lists:[],
    note:{text:T.note,color:'#067ec3'},cta:{l:T.cta,h:v.link},small:T.sec,
    sign:{t:T.sg,man:v.man,role:v.role},stats:[]};}}
];
/* ---------- состояние ---------- */
const st={lang:'ru',t:0,s:'red',v:{},touched:{},
  o:{accent:STYLES.red.accent,width:600,logo:true,date:true,info:true,cta:true,stats:false,
     footer:'full',dateText:'Алматы · 09.09.2026',refText:'REF 2026-0912-AG'}};
const $=s=>document.querySelector(s);
const S=()=>STYLES[st.s];

function seed(reset){const t=TPL[st.t],d=t.dflt[st.lang];
  t.f.forEach(f=>{if(reset||!st.touched[t.key+':'+f.k])st.v[f.k]=d[f.k]!==undefined?d[f.k]:'';});}

function renderTypes(){
  $('#types').innerHTML=TPL.map((t,i)=>`<button class="type" data-i="${i}" aria-pressed="${i===st.t}">
    <span class="type-k">${String(i+1).padStart(2,'0')}</span>
    <span><span class="type-n">${t.n}</span><span class="type-d">${t.d}</span></span></button>`).join('');
  $('#types').querySelectorAll('.type').forEach(b=>b.onclick=()=>{
    st.t=+b.dataset.i;seed(true);renderTypes();renderFields();paint();});
}
function renderStyles(){
  $('#styles').innerHTML=Object.values(STYLES).map(s=>`<button class="sty" data-s="${s.id}" aria-pressed="${s.id===st.s}">
    <span class="sw sw-${s.id}"></span><span><span class="sty-n">${s.name}</span><span class="sty-d">${s.desc}</span></span></button>`).join('');
  $('#styles').querySelectorAll('.sty').forEach(b=>b.onclick=()=>{
    st.s=b.dataset.s;
    st.o.accent=STYLES[st.s].accent;
    st.o.stats=(st.s==='pla');
    renderStyles();renderOpts();paint();});
}
const OPTS=[
 {k:'accent',l:'Акцентный цвет',t:'color'},
 {k:'width',l:'Ширина письма',t:'seg',opt:[[600,'600 px'],[640,'640 px']]},
 {k:'footer',l:'Футер',t:'seg',opt:[['full','Полный'],['slim','Только слоган'],['none','Без футера']]},
 {k:'logo',l:'Логотип в шапке',t:'sw'},
 {k:'date',l:'Дата / номер письма',t:'sw'},
 {k:'info',l:'Блок фактов',t:'sw'},
 {k:'cta',l:'Кнопка действия',t:'sw'},
 {k:'stats',l:'Три цифры-факта',t:'sw'},
];
function renderOpts(){
  $('#opts').innerHTML=OPTS.map(o=>{
    const v=st.o[o.k];
    if(o.t==='color')return `<div class="o"><label for="o_${o.k}">${o.l}</label><div class="ocolor"><input type="color" id="o_${o.k}" value="${v}"><code>${v}</code></div></div>`;
    if(o.t==='seg')return `<div class="o"><label>${o.l}</label><div class="seg" data-k="${o.k}">${o.opt.map(x=>`<button data-v="${x[0]}" aria-pressed="${String(v)===String(x[0])}">${x[1]}</button>`).join('')}</div></div>`;
    return `<div class="o o-sw"><label for="o_${o.k}">${o.l}</label><button class="tg" id="o_${o.k}" data-k="${o.k}" role="switch" aria-checked="${!!v}"><span></span></button></div>`;
  }).join('');
  const ac=$('#o_accent');
  ac.addEventListener('input',()=>{st.o.accent=ac.value;ac.nextElementSibling.textContent=ac.value;paint();});
  $('#opts').querySelectorAll('.seg').forEach(g=>g.querySelectorAll('button').forEach(b=>b.onclick=()=>{
    const k=g.dataset.k,val=b.dataset.v;st.o[k]=(k==='width')?+val:val;renderOpts();paint();}));
  $('#opts').querySelectorAll('.tg').forEach(b=>b.onclick=()=>{
    st.o[b.dataset.k]=!st.o[b.dataset.k];b.setAttribute('aria-checked',String(st.o[b.dataset.k]));paint();});
}
function renderFields(){
  const t=TPL[st.t];
  $('#fields').innerHTML=t.f.map(f=>{
    const id='f_'+f.k,val=st.v[f.k]||'';
    let c;
    if(f.t==='area')c=`<textarea id="${id}" rows="${f.rows||3}">${esc(val)}</textarea>`;
    else if(f.t==='select')c=`<select id="${id}">${f.opt.map(o=>`<option value="${o[0]}"${val===o[0]?' selected':''}>${o[1]}</option>`).join('')}</select>`;
    else c=`<input id="${id}" value="${esc(val)}">`;
    return `<div class="f"><label for="${id}">${f.l}</label>${c}</div>`;
  }).join('');
  t.f.forEach(f=>{const el=document.getElementById('f_'+f.k);
    const h=()=>{st.v[f.k]=el.value;st.touched[t.key+':'+f.k]=1;paint();};
    el.addEventListener('input',h);if(f.t==='select')el.addEventListener('change',h);});
}
let EXPORT_HTML='';
function paint(){
  const t=TPL[st.t],C=t.make(st.v,st.lang);
  $('#frame').innerHTML=build(C,S(),st.o,st.lang,'preview');
  $('#frame').style.width=(st.o.width+48)+'px';
  EXPORT_HTML=build(C,S(),st.o,st.lang,'export');
  $('#srcbox').value=EXPORT_HTML;
  $('#subject').value=t.subj(st.v,st.lang);
  $('#stagew').textContent=st.o.width+' px · '+S().name;
}
function say(m){const e=$('#said');e.innerHTML=m;clearTimeout(say._t);say._t=setTimeout(()=>e.textContent='',3400);}
function busy(on){const b=$('#draft'),s=$('#sendnow');
  b.disabled=on;s.disabled=on;b.textContent=on?'Создаём черновик…':'Создать черновик в Gmail';}
function draftIt(){
  busy(true);$('#draftlink').hidden=true;
  google.script.run
    .withSuccessHandler(function(r){busy(false);
      if(!r.ok){say('Не получилось: '+esc(r.error));return;}
      const a=$('#draftlink');a.href=r.url;a.hidden=false;
      say('<b>Черновик создан.</b> Он уже лежит в ваших черновиках');
      try{window.open(r.url,'_blank');}catch(e){}})
    .withFailureHandler(function(e){busy(false);say('Ошибка: '+esc(e.message||e));})
    .createDraft(($('#to').value||'').trim(),$('#subject').value,EXPORT_HTML);
}
function sendIt(){
  const to=($('#to').value||'').trim();
  if(!to){say('Впишите адрес получателя');$('#to').focus();return;}
  if(!confirm('Отправить письмо на '+to+' прямо сейчас?\n\nОтменить отправку будет нельзя.'))return;
  busy(true);
  google.script.run
    .withSuccessHandler(function(r){busy(false);
      say(r.ok?'<b>Отправлено</b> на '+esc(r.to):'Не получилось: '+esc(r.error));})
    .withFailureHandler(function(e){busy(false);say('Ошибка: '+esc(e.message||e));})
    .sendNow(to,$('#subject').value,EXPORT_HTML);
}
async function copyText(t,m){try{await navigator.clipboard.writeText(t);say(m);}catch(e){$('#srcbox').select();document.execCommand('copy');say(m);}}
function setLang(l){st.lang=l;$('#lru').setAttribute('aria-pressed',l==='ru');$('#len').setAttribute('aria-pressed',l==='en');
  seed(false);renderFields();paint();}
$('#lru').onclick=()=>setLang('ru');
$('#len').onclick=()=>setLang('en');
$('#draft').onclick=draftIt;
$('#sendnow').onclick=sendIt;
$('#copysrc').onclick=()=>copyText(EXPORT_HTML,'<b>HTML скопирован.</b> Годится для Unisender или Mailchimp');
$('#csubj').onclick=()=>copyText($('#subject').value,'<b>Тема скопирована.</b>');
$('#save').onclick=()=>{const p=$('#lockmsg');p.hidden=!p.hidden;};
seed(true);renderTypes();renderStyles();renderOpts();renderFields();paint();

try{
  google.script.run.withSuccessHandler(function(u){
    if(!u||!u.email)return;
    var nm=u.email.split('@')[0].replace(/[._-]+/g,' ').replace(/\b\w/g,function(c){return c.toUpperCase();});
    var t=TPL[st.t];
    if(!st.touched[t.key+':man']&&st.v.man!==undefined){st.v.man=nm;renderFields();paint();}
  }).whoAmI();
}catch(e){}
