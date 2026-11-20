import puppeteer from 'puppeteer-core';
import fs from 'fs';
const b=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox']});
const p=await b.newPage();
for(const f of fs.readdirSync('/tmp/kit').filter(x=>x.endsWith('.html'))){
 const n=f.replace('.html','');
 await p.goto('file:///tmp/kit/'+f);await p.evaluate(()=>document.fonts.ready);
 for(const [fmt,tag] of [['Letter','letter'],['A4','a4']]){
  await p.pdf({path:`/home/claude/scam-proof-site/public/downloads/${n}-${tag}.pdf`,format:fmt,printBackground:true,margin:{top:'0.45in',bottom:'0.6in',left:'0.55in',right:'0.55in'}});
 }
}
await b.close();
