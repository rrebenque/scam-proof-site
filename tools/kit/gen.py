import base64, os
R='/home/claude/scam-proof-site'
def b64(p): return base64.b64encode(open(p,'rb').read()).decode()
F=R+'/node_modules/@fontsource'
fonts=f"""
@font-face{{font-family:S;font-weight:700;src:url(data:font/woff2;base64,{b64(F+'/source-serif-4/files/source-serif-4-latin-700-normal.woff2')})}}
@font-face{{font-family:A;font-weight:400;src:url(data:font/woff2;base64,{b64(F+'/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-400-normal.woff2')})}}
@font-face{{font-family:A;font-weight:700;src:url(data:font/woff2;base64,{b64(F+'/atkinson-hyperlegible/files/atkinson-hyperlegible-latin-700-normal.woff2')})}}
"""
june='data:image/png;base64,'+b64(R+'/public/img/june.png')
slick='data:image/png;base64,'+b64(R+'/public/img/slick.png')
css=fonts+"""
*{box-sizing:border-box}
html,body{margin:0}
body{font-family:A,sans-serif;font-size:13.5pt;line-height:1.35;color:#17212B}
.pg{padding:0.2in 0.1in}
.top{display:flex;align-items:center;justify-content:space-between;gap:16pt;border-bottom:4pt solid #12283F;padding-bottom:10pt;margin-bottom:14pt}
h1{font-family:S,serif;font-weight:700;font-size:26pt;line-height:1.08;margin:0;color:#12283F}
.sub{font-size:14pt;margin:6pt 0 0;color:#38434D}
h2{font-family:S,serif;font-weight:700;font-size:17pt;margin:14pt 0 4pt;color:#12283F}
ol,ul{margin:0;padding-left:20pt}
li{margin-bottom:6pt}
.step{display:flex;gap:12pt;align-items:flex-start;margin-bottom:7pt}
.n{flex:none;width:30pt;height:30pt;border-radius:50%;background:#12283F;color:#fff;font-family:S,serif;font-weight:700;font-size:16pt;text-align:center;line-height:30pt}
.n.red{background:#B81D27}.n.green{background:#12663D}
.big{font-family:S,serif;font-weight:700;font-size:19pt;line-height:1.15;display:block;color:#12283F}
.box{border:3pt solid #12663D;border-radius:8pt;padding:8pt 14pt;margin:9pt 0}
.box.red{border-color:#B81D27}
.line{border-bottom:1.5pt solid #17212B;height:22pt;margin-bottom:4pt}
.lbl{font-weight:700;font-size:12pt;margin-top:8pt}
.foot{position:fixed;bottom:0.15in;left:0.1in;right:0.1in;border-top:1pt solid #9aa7b3;padding-top:6pt;font-size:10.5pt;color:#38434D}
img.c{height:78pt;width:auto}
.two{display:grid;grid-template-columns:1fr 1fr;gap:10pt 18pt}
.card{border:2pt solid #12283F;border-radius:8pt;padding:8pt 12pt}
.card b{display:block;font-family:S,serif;font-size:14.5pt;color:#12283F}
.card .mv{color:#12663D;font-weight:700;font-size:12.5pt}
.small{font-size:12pt}
"""
FOOT="Scam-Proof Money. Free to print and share. General information only, not legal or financial advice. youtube.com/@scamproofmoney"
def head(title,sub,img):
    return f'<div class="top"><div><h1>{title}</h1><p class="sub">{sub}</p></div><img class="c" src="{img}" alt=""></div>'
def step(n,t,d='',cls=''):
    return f'<div class="step"><div class="n {cls}">{n}</div><div><span class="big">{t}</span>{d}</div></div>'
docs={}
docs['family-safe-word']=head('Our family safe word','Set it up once. It can stop a scam call.',june)+"""
<h2>How to set it up (5 minutes)</h2>
"""+step(1,'Make it random','<br>Two unrelated words work well, like “purple tractor”. No pet names, no birthdays, nothing anyone could guess.')+step(2,'Share it face to face','<br>Tell everyone in person, at a family dinner. Never by text, email or social media.')+step(3,'No safe word, no money','<br>Every time. If the caller can’t say it, hang up and call them back on the number you already have.')+"""
<div class="box"><span class="big">When someone calls asking for help</span>Say: “What’s our safe word?” A real family member knows it. A scammer with a copied voice does not.</div>
<h2>Good to know</h2>
<ul><li>Memorize it. Please don’t write the word on this sheet or save it in your phone.</li><li>Change it if someone outside the family may have heard it.</li><li>Include the grandchildren, and the grandparents.</li></ul>
<h2>Our family</h2>
<div class="two"><div><div class="lbl">Date we set our safe word</div><div class="line"></div></div><div><div class="lbl">Who knows it</div><div class="line"></div></div></div>
"""
docs['if-someone-calls-asking-for-money']=head('Someone is calling asking for money?','Keep this by the phone.',slick)+"""
"""+step(1,'Hang up','<br>It’s fine to be rude. A real family member or bank will understand.','red')+step(2,'Call back on a number you already have','<br>Use the number saved in your phone, or the one on the back of your card. Never the number the caller gave you.')+step(3,'Ask for the family safe word','<br>No safe word means no money.')+step(4,'Never pay this way','<br>Gift cards, cryptocurrency, cash, or moving your money to a “safe account”. Real banks and agencies never ask.','red')+step(5,'Tell someone you trust','<br>Scammers want you to keep it secret. Don’t.','green')+"""
<div class="box"><span class="big">The right move is always the same</span>Hang up. Call back on a number you already have.</div>
<p class="small">If you already paid or shared a code, call your bank straight away using the number on your card, then see the “I’ve been scammed” guide at Scam-Proof Money.</p>
"""
docs['important-numbers']=head('Our important numbers','Fill this in once. Keep it somewhere you can find it fast.',june)+"""
<div class="two">
<div><div class="lbl">My bank (number from the back of my card)</div><div class="line"></div></div>
<div><div class="lbl">My credit or debit card company</div><div class="line"></div></div>
<div><div class="lbl">My phone company</div><div class="line"></div></div>
<div><div class="lbl">Family member I call first</div><div class="line"></div></div>
<div><div class="lbl">Another person I trust</div><div class="line"></div></div>
<div><div class="lbl">Local police (non-emergency)</div><div class="line"></div></div>
</div>
<h2>Where to report a scam</h2>
<div class="two small">
<div class="card"><b>United States</b>reportfraud.ftc.gov<br>FBI: ic3.gov<br>Identity stolen: identitytheft.gov</div>
<div class="card"><b>United Kingdom</b>Report Fraud: reportfraud.police.uk<br>Call 159 to reach your bank<br>Scotland: Police Scotland, 101</div>
<div class="card"><b>Canada</b>Canadian Anti-Fraud Centre<br>1-888-495-8501<br>antifraudcentre-centreantifraude.ca</div>
<div class="card"><b>Australia</b>Scamwatch: scamwatch.gov.au<br>ReportCyber: cyber.gov.au<br>IDCARE: 1800 595 160</div>
</div>
<p class="small" style="margin-top:10pt"><b>Scam texts (US, UK, Canada):</b> forward the message to 7726, then delete it.</p>
<p class="small">Only use numbers you wrote down yourself or found on your card. Never a number from a message or caller.</p>
"""
cards=[('They rush you','Pause. Hang up or close the chat, then contact the real organization yourself.'),
('They want secrecy','Tell someone you trust, and call your bank using the number on your card.'),
('They ask for money in a strange way','Never pay a stranger with gift cards, cryptocurrency or cash. A real business takes a card.'),
('They ask you to move money or share a code','Hang up. Call the number on the back of your card.'),
('They contacted you first','Don’t tap links or reply. Open the real app or website yourself.'),
('It sounds too good','Buy from the official site, and never invest with someone you only know by text.')]
docs['scam-warning-signs']=head('Scam warning signs','The signs repeat. Learn the six, and the right move for each.',slick)+'<div class="two" style="gap:12pt 16pt">'+''.join(f'<div class="card"><b>{a}</b><span class="mv">Right move: </span>{b}</div>' for a,b in cards)+'</div><p class="small" style="margin-top:12pt">More at Scam-Proof Money: every guide lists its sources and the date we last reviewed it.</p>'
docs['talking-with-a-parent-or-grandparent']=head('Talking with a parent or grandparent about scams','Five ways to start the conversation without shame.',june)+"""
"""+step(1,'Start with a story, not a warning','<br>“I saw a scam where the caller copied someone’s voice. It’s scary how real it sounds.”')+step(2,'Say it can happen to anyone','<br>Smart, careful people get caught, because scammers are professionals.')+step(3,'Agree on one rule','<br>“If anyone asks you for money, call me first, even if they say not to.”')+step(4,'Set up the family safe word together','<br>Do it in person. It takes five minutes.')+step(5,'Make it safe to tell you','<br>If something goes wrong, say “Thank you for telling me.” Shame keeps people quiet, and silence helps scammers.','green')+"""
<div class="box"><span class="big">If they have already been scammed</span>Stay calm and kind. Help them call their bank using the number on the back of their card, then report it. The “I’ve been scammed” guide at Scam-Proof Money has the steps for each country.</div>
"""
for k,v in docs.items():
    html=f'<!doctype html><html><head><meta charset="utf-8"><title>{k}</title><style>{css}</style></head><body><div class="pg">{v}</div><div class="foot">{FOOT}</div></body></html>'
    open(f'/tmp/kit/{k}.html','w').write(html)
print(list(docs))
