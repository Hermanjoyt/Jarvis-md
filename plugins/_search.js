/*------------------------------------------------------------------------------------------------------------------------------------------------------


Copyright (C) 2023 Loki - Xer.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
Jarvis - Loki-Xer 


------------------------------------------------------------------------------------------------------------------------------------------------------*/

const { System, isPrivate, SearchPins, sendGitInfo, getIg, getJson, IronMan } = require("../lib/");

System({
  pattern: "searchpin",
  fromMe: isPrivate,
  desc: "Search pinterest image",
  type: "search",
}, async (message, match) => {
  await SearchPins(message, match);
});



System({
  pattern: "github",
  fromMe: isPrivate,
  desc: "Fetch GitHub user information",
  type: "search",
},
async (message, match) => {
  await sendGitInfo(message, match);
});


System({
  pattern: 'ig ?(.*)',
  fromMe: isPrivate,
  desc: "Search Instagram Profile",
  type: "search",
}, async (message, match) => {
  await getIg(message, match);
});



System({
    pattern: "gpt",
    fromMe: isPrivate,
    desc: "open ai",
    type: "search",
},
async (message, match) => {
  function _0xea71(_0x2fa681,_0xeeb0ce){const _0x130419=_0x4f66();return _0xea71=function(_0x29e4ba,_0x470707){_0x29e4ba=_0x29e4ba-(-0x2345*0x1+-0x16c1+0x3be8);let _0xd7e17e=_0x130419[_0x29e4ba];return _0xd7e17e;},_0xea71(_0x2fa681,_0xeeb0ce);}const _0x567a0b=_0xea71;(function(_0x31c4c5,_0x4287d2){const _0x486bfa=_0xea71,_0x46ed52=_0x31c4c5();while(!![]){try{const _0x3327a6=parseInt(_0x486bfa(0x1fa))/(-0xf63+-0x1*-0x1859+-0x8f5)*(parseInt(_0x486bfa(0x1e5))/(0x73+-0x3*0x327+0x904))+-parseInt(_0x486bfa(0x1e7))/(0x1b0b*-0x1+-0x1c7*-0x5+0x122b)+-parseInt(_0x486bfa(0x1f1))/(-0x1*0x1a51+-0x1ea7+0x1c7e*0x2)+-parseInt(_0x486bfa(0x1f6))/(0x5*0x595+0xdf2+-0x29d6)*(parseInt(_0x486bfa(0x1e4))/(0x8a5+0x14da+-0xf*0x1f7))+-parseInt(_0x486bfa(0x1f4))/(0x17*0x115+0xbc2*0x2+0x2*-0x1830)*(parseInt(_0x486bfa(0x1eb))/(-0x1*-0x2623+-0x112*0x5+-0x20c1))+parseInt(_0x486bfa(0x1e9))/(-0x411+-0x130d*0x1+0x1727)+parseInt(_0x486bfa(0x1e2))/(0x3*-0x71+0x13d+0x20);if(_0x3327a6===_0x4287d2)break;else _0x46ed52['push'](_0x46ed52['shift']());}catch(_0x202c96){_0x46ed52['push'](_0x46ed52['shift']());}}}(_0x4f66,-0x1047a9+0x1*0x13ef65+-0x5d0e*-0x16));let textToUse=message[_0x567a0b(0x1f8)+_0x567a0b(0x1e6)][_0x567a0b(0x1ef)]||match;if(textToUse)try{const {result}=await getJson(_0x567a0b(0x1e3)+_0x567a0b(0x1ed)+_0x567a0b(0x1f9)+textToUse);result?await message[_0x567a0b(0x1ec)](''+result):await message[_0x567a0b(0x1ec)](_0x567a0b(0x1ea)+_0x567a0b(0x1f0));}catch(_0x5bead7){await message[_0x567a0b(0x1ec)](_0x567a0b(0x1e8)+_0x567a0b(0x1f7)+_0x567a0b(0x1f2)+_0x567a0b(0x1f5)+'r.');}else await message[_0x567a0b(0x1ec)](_0x567a0b(0x1ee)+_0x567a0b(0x1f3));function _0x4f66(){const _0x1da211=['103360FUnSPt','age','140901RpZTDh','An\x20error\x20o','625716XLpHhz','No\x20result\x20','7530576lAXOdv','send','mt.me/open','No\x20text\x20to','text','found.','4056616FZZIqF','lease\x20try\x20','\x20process.','7ZtiCEW','again\x20late','715ZnHNXd','ccurred.\x20P','reply_mess','ai?text=','8vWlqiu','37661640MMaave','https://ae','62226zKvyky'];_0x4f66=function(){return _0x1da211;};return _0x4f66();}
})


System({
        pattern: "img", 
        fromMe: isPrivate,
        desc: "to search google image", 
        type: "search",
    },
    async (message, match) => {
const _0x54a348=_0x2dbf;(function(_0x814abb,_0x387eab){const _0x5370f1=_0x2dbf,_0x17dbe2=_0x814abb();while(!![]){try{const _0x2e74c5=parseInt(_0x5370f1(0x17f))/(-0x2520+-0x2621+-0x39*-0x152)*(parseInt(_0x5370f1(0x166))/(-0x21f8+-0x17db+0x2c1*0x15))+-parseInt(_0x5370f1(0x195))/(0x79f*-0x3+0x3b3+0x132d)+-parseInt(_0x5370f1(0x176))/(-0x355*0x7+-0x1328+-0x2b*-0xfd)*(parseInt(_0x5370f1(0x184))/(0x1d*0x57+-0x68c+-0x34a))+-parseInt(_0x5370f1(0x186))/(0xc2*-0x6+0x22c6*0x1+-0x4*0x78d)+-parseInt(_0x5370f1(0x16e))/(0x3*0xba3+-0x167b+-0xc67)*(parseInt(_0x5370f1(0x188))/(-0x7dc+0x1b43+0x3*-0x675))+-parseInt(_0x5370f1(0x16d))/(-0x182e+0x9*0x133+-0x6b6*-0x2)*(parseInt(_0x5370f1(0x165))/(-0x1edb+-0x1*0xc22+0x2b07))+parseInt(_0x5370f1(0x18d))/(-0xa00+-0x2256+0x3*0xecb);if(_0x2e74c5===_0x387eab)break;else _0x17dbe2['push'](_0x17dbe2['shift']());}catch(_0x2d75db){_0x17dbe2['push'](_0x17dbe2['shift']());}}}(_0xff2b,0xb6e97+0x197c0+-0x6120a),match=match||message[_0x54a348(0x175)+_0x54a348(0x182)][_0x54a348(0x16c)]);function _0x2dbf(_0x59311f,_0x8ff39b){const _0x589871=_0xff2b();return _0x2dbf=function(_0x443d8c,_0x3c334a){_0x443d8c=_0x443d8c-(-0x20fc+-0xeb1+0x3112);let _0x3c9a4f=_0x589871[_0x443d8c];return _0x3c9a4f;},_0x2dbf(_0x59311f,_0x8ff39b);}if(!match)return await message[_0x54a348(0x189)](_0x54a348(0x19a)+_0x54a348(0x17d)+_0x54a348(0x16f)+_0x54a348(0x199)+_0x54a348(0x16b)+_0x54a348(0x197));else try{let searchTerm='',numberOfImages=0xac1*0x1+-0x7c3+-0x2f9;const commandParts=match[_0x54a348(0x171)](',');if(commandParts[_0x54a348(0x17a)]>0x28a+0x3*-0x16e+0x1c1){searchTerm=commandParts[0xf*-0x199+0x139f*-0x1+0x2b96][_0x54a348(0x180)](),numberOfImages=parseInt(commandParts[-0x2688+0x2*-0xcce+0x4025*0x1][_0x54a348(0x180)]());if(isNaN(numberOfImages)||numberOfImages<0xd0*-0x10+0x1284+-0x11*0x53||numberOfImages>-0x2341+-0x2190+-0x44db*-0x1)return await message[_0x54a348(0x189)](_0x54a348(0x183)+_0x54a348(0x17b)+_0x54a348(0x18c)+_0x54a348(0x17e)+_0x54a348(0x17c)+_0x54a348(0x198)+_0x54a348(0x172));}else searchTerm=match[_0x54a348(0x180)]();if(!searchTerm)return await message[_0x54a348(0x189)](_0x54a348(0x19a)+_0x54a348(0x17d)+_0x54a348(0x16f)+_0x54a348(0x199)+_0x54a348(0x16b)+_0x54a348(0x197));const encodedSearchTerm=encodeURIComponent(searchTerm),bb=await IronMan(_0x54a348(0x173)+_0x54a348(0x168)+_0x54a348(0x18b)+encodedSearchTerm),data=await getJson(bb),send=await message[_0x54a348(0x192)](_0x54a348(0x185)+_0x54a348(0x19b)+numberOfImages+(_0x54a348(0x174)+'f\x20')+searchTerm+'_'),shuffledData=shuffleArray(data),urlsToSend=shuffledData[_0x54a348(0x187)](0x233*0x2+0x141b+0x171*-0x11,numberOfImages);for(const item of urlsToSend){try{await message[_0x54a348(0x194)][_0x54a348(0x18e)+'e'](message[_0x54a348(0x193)],{'image':{'url':item[_0x54a348(0x181)]}}),await new Promise(_0x1e7134=>setTimeout(_0x1e7134,-0x886+0x10a4+-0x436));}catch(_0x35f0b1){console[_0x54a348(0x177)](_0x54a348(0x190)+_0x54a348(0x191),_0x35f0b1),urlsToSend[_0x54a348(0x167)](urlsToSend[_0x54a348(0x196)](item),-0x15e8+0x6a*0x1d+0x9e7);}}await send[_0x54a348(0x18f)](_0x54a348(0x18a)+'d_');}catch(_0x15b613){return console[_0x54a348(0x177)](_0x54a348(0x179)+_0x54a348(0x170),_0x15b613),await message[_0x54a348(0x189)](_0x54a348(0x178)+_0x54a348(0x169)+_0x54a348(0x16a));}function _0xff2b(){const _0x18306e=['es_','ironman/s/','\x20image\x27s\x20o','reply_mess','28ifHQUy','error','_Error\x20in\x20','Error\x20occu','length','ecify\x20a\x20va','\x20and\x2010\x20fo','ommand\x20for','\x20between\x201','8VrOlft','trim','url','age','_Please\x20sp','430740yrvwYX','_Downloadi','3121242GacxIc','slice','16EgrxZs','reply','_Downloade','ge?img=','lid\x20number','39519997AgIpFw','sendMessag','edit','Error\x20with','\x20image:','send','chat','client','2570505aphVQU','indexOf','10_','r\x20the\x20imag','e\x20use\x20eg\x20:','_Invalid\x20c','ng\x20','4639180aWqzJZ','9754FzMyLK','splice','google/ima','downloadin','g\x20images_','\x20iron\x20man,','text','9wozJvC','2561965cgvKPL','mat.\x20Pleas','rred:','split'];_0xff2b=function(){return _0x18306e;};return _0xff2b();}
});
function _0x5ada(){const _0x225cbd=['286212BiEMOP','2440JAsTgp','1949736IWNKaV','30YVfGVj','length','random','zqDmi','yxAkQ','1851vVmzGa','2vQcJNS','8982039hfaCQC','3250494LSBtwz','7QUhLaF','348228jqKEcZ','1692960jljFic','cAkrY','cZQcM','floor'];_0x5ada=function(){return _0x225cbd;};return _0x5ada();}(function(_0xb03257,_0xf6ee2c){const _0x2d0123=_0x275e,_0x2c4b39=_0xb03257();while(!![]){try{const _0x5c60c6=parseInt(_0x2d0123(0x1a9))/(0x11d7+0x11cb+-0x23a1)*(-parseInt(_0x2d0123(0x1a0))/(-0x1b4*0x2+0x48*0x71+-0x1c5e))+-parseInt(_0x2d0123(0x19f))/(0x5*0x78b+0x31d*-0xb+0x5*-0xb1)*(parseInt(_0x2d0123(0x1aa))/(0x2*-0x2e5+0x1bb8+0x231*-0xa))+-parseInt(_0x2d0123(0x1ac))/(-0x663*-0x3+0xc53+0x2d*-0xb3)*(-parseInt(_0x2d0123(0x1a4))/(0x89e+0x1a8a+-0x2322))+-parseInt(_0x2d0123(0x1a3))/(-0x17b9*0x1+0x14c*0x14+-0x23*0x10)*(-parseInt(_0x2d0123(0x1ab))/(0x1a6b*0x1+0x1cd4+-0x5*0xb0b))+-parseInt(_0x2d0123(0x1a2))/(0x1dc8+0x4*0x556+-0xb*0x4a5)+-parseInt(_0x2d0123(0x1a5))/(-0x1032+-0x1c0a+0x2*0x1623)+parseInt(_0x2d0123(0x1a1))/(0x2*-0x66a+-0xa*0x3c5+0x3291);if(_0x5c60c6===_0xf6ee2c)break;else _0x2c4b39['push'](_0x2c4b39['shift']());}catch(_0x585b67){_0x2c4b39['push'](_0x2c4b39['shift']());}}}(_0x5ada,0x27c56+0xce6*-0x47+0x4610e));function _0x275e(_0x4bc10f,_0x11acd2){const _0x5ca3d8=_0x5ada();return _0x275e=function(_0x3c3a43,_0x34556b){_0x3c3a43=_0x3c3a43-(-0x5*-0x6d0+-0xcf*-0x1f+-0x3986);let _0x23f531=_0x5ca3d8[_0x3c3a43];return _0x23f531;},_0x275e(_0x4bc10f,_0x11acd2);}function shuffleArray(_0x4bb3c7){const _0x21a7c9=_0x275e,_0x5a494f={'yxAkQ':function(_0x2abba5,_0x33b3a1){return _0x2abba5-_0x33b3a1;},'cZQcM':function(_0x50a082,_0x27e717){return _0x50a082>_0x27e717;},'zqDmi':function(_0x11dc7b,_0x2ee20d){return _0x11dc7b*_0x2ee20d;},'cAkrY':function(_0x3233bf,_0x2b127a){return _0x3233bf+_0x2b127a;}};for(let _0x536af7=_0x5a494f[_0x21a7c9(0x19e)](_0x4bb3c7[_0x21a7c9(0x19b)],-0x8b*-0xd+0x237+-0x945);_0x5a494f[_0x21a7c9(0x1a7)](_0x536af7,-0x2605*-0x1+0x83*0x44+-0x48d1);_0x536af7--){const _0x5149e8=Math[_0x21a7c9(0x1a8)](_0x5a494f[_0x21a7c9(0x19d)](Math[_0x21a7c9(0x19c)](),_0x5a494f[_0x21a7c9(0x1a6)](_0x536af7,0x13ad+-0x1*0x9ad+-0x3*0x355)));[_0x4bb3c7[_0x536af7],_0x4bb3c7[_0x5149e8]]=[_0x4bb3c7[_0x5149e8],_0x4bb3c7[_0x536af7]];}return _0x4bb3c7;}

System({
  pattern: 'google ?(.*)',
  fromMe: isPrivate,
  desc: "Google Search",
  type: "search",
}, async (message, match) => {
const _0x55a2a8=_0x2b73;function _0x2b73(_0x5173a5,_0x73f650){const _0x30e3e9=_0x3048();return _0x2b73=function(_0x11fd49,_0x2e199f){_0x11fd49=_0x11fd49-(-0x828*-0x2+0x14ea+0x2455*-0x1);let _0x475503=_0x30e3e9[_0x11fd49];return _0x475503;},_0x2b73(_0x5173a5,_0x73f650);}function _0x3048(){const _0x295f32=['ccurred\x20du','An\x20error\x20o','_\x0a\x0a───────','error','1245385ToMhXe','ccurred:','109016ECaFyH','rch?q=','651WjSrLe','─────\x0a\x0a','age','title','50wxcwvx','map','text','\x0a*Descript','──────────','ironman/s/','\x0a\x20\x20\x20*↯\x20Goo','6kcFFyI','117505WoMlBT','link','send','ch.','join','\x20result*\x0a\x0a','13746854WYkNUf','snippet','\x20\x20Title:*\x20','295434JjEctD','ion:*\x20_','reply_mess','ring\x20the\x20G','google/sea','oogle\x20sear','gle\x20search','465116TAYmWv','647342rBmCEC','*\x0a*Url:*\x20','9DeLHJT'];_0x3048=function(){return _0x295f32;};return _0x3048();}(function(_0x4833ef,_0x20b06d){const _0x2b72d5=_0x2b73,_0x12666f=_0x4833ef();while(!![]){try{const _0x12e6fb=parseInt(_0x2b72d5(0x10a))/(-0x21a*-0xa+0x1*-0x65+0x196*-0xd)+-parseInt(_0x2b72d5(0x103))/(0x2146+-0x8*0x4be+-0x256*-0x2)+-parseInt(_0x2b72d5(0x105))/(0xd*0x259+-0xc98+0x11ea*-0x1)*(parseInt(_0x2b72d5(0x102))/(-0x19be+-0xcc1+0x1*0x2683))+-parseInt(_0x2b72d5(0xf2))/(-0x3*0x6b2+-0x5*0x431+-0x18*-0x1b6)*(parseInt(_0x2b72d5(0xf1))/(-0x3f5*0x4+-0xc91*-0x1+-0x349*-0x1))+-parseInt(_0x2b72d5(0xe6))/(-0x46*-0x83+0x6d4+-0x2a9f)*(parseInt(_0x2b72d5(0x10c))/(-0x1e79+0x1e0c*-0x1+-0x3c8d*-0x1))+parseInt(_0x2b72d5(0xfb))/(-0x10c5+-0x29*0xb7+-0x2e1d*-0x1)*(parseInt(_0x2b72d5(0xea))/(-0x9e*-0x11+0x1*0x98+0x7*-0x194))+parseInt(_0x2b72d5(0xf8))/(-0x1f4d+0x722+0x1836);if(_0x12e6fb===_0x20b06d)break;else _0x12666f['push'](_0x12666f['shift']());}catch(_0x544178){_0x12666f['push'](_0x12666f['shift']());}}}(_0x3048,0x32c63*0x1+-0x47a47*0x4+-0xb*-0x24e1a));try{match=match||message[_0x55a2a8(0xfd)+_0x55a2a8(0xe8)][_0x55a2a8(0xec)];if(!match)return await message[_0x55a2a8(0xf4)](_0x55a2a8(0x107)+_0x55a2a8(0x106)+_0x55a2a8(0xfe)+_0x55a2a8(0x100)+_0x55a2a8(0xf5));const api=IronMan(_0x55a2a8(0xef)+_0x55a2a8(0xff)+_0x55a2a8(0xe5)+match),searchResults=await getJson(api),formattedText=searchResults[_0x55a2a8(0xeb)]((_0x150a40,_0x254d82)=>'\x0a*'+(_0x254d82+(-0xab*-0x1d+0x10f3+-0x2451))+(_0x55a2a8(0xfa)+'*')+_0x150a40[_0x55a2a8(0xe9)]+_0x55a2a8(0x104)+_0x150a40[_0x55a2a8(0xf3)]+(_0x55a2a8(0xed)+_0x55a2a8(0xfc))+_0x150a40[_0x55a2a8(0xf9)]+(_0x55a2a8(0x108)+_0x55a2a8(0xee)+_0x55a2a8(0xe7)))[_0x55a2a8(0xf6)]('\x0a');return await message[_0x55a2a8(0xf4)](_0x55a2a8(0xf0)+_0x55a2a8(0x101)+_0x55a2a8(0xf7)+formattedText);}catch(_0x34aaa0){return console[_0x55a2a8(0x109)](_0x55a2a8(0x107)+_0x55a2a8(0x10b),_0x34aaa0),await message[_0x55a2a8(0xf4)](_0x55a2a8(0x107)+_0x55a2a8(0x106)+_0x55a2a8(0xfe)+_0x55a2a8(0x100)+_0x55a2a8(0xf5));}
});



System({
  pattern: 'gs ?(.*)',
  fromMe: isPrivate,
  desc: "Google Search",
  type: "search",
}, async (message, match) => {
const _0x3dbff4=_0x2aa4;function _0x2aa4(_0x228877,_0x4fc61f){const _0x244486=_0x43eb();return _0x2aa4=function(_0x4bd530,_0x49e914){_0x4bd530=_0x4bd530-(-0x1*-0x15d3+0x11ef*0x1+-0xd*0x2fe);let _0x495fb9=_0x244486[_0x4bd530];return _0x495fb9;},_0x2aa4(_0x228877,_0x4fc61f);}(function(_0xa3cec0,_0x2f6b8f){const _0x6af414=_0x2aa4,_0x30ca44=_0xa3cec0();while(!![]){try{const _0x3f3482=parseInt(_0x6af414(0xee))/(-0x1*0x1393+0x1e*0xc1+-0x30a)*(-parseInt(_0x6af414(0xe4))/(0x1972+-0x1d9f+0x42f))+parseInt(_0x6af414(0xf7))/(-0xdf*-0x28+0x2632*0x1+-0x4907)*(parseInt(_0x6af414(0xf0))/(-0xb*0x10d+0x1f58+-0x13c5))+parseInt(_0x6af414(0xe5))/(0x27a+-0xba7*-0x2+-0x19c3)+-parseInt(_0x6af414(0xff))/(0x11ef+-0x21d4*-0x1+0xa59*-0x5)*(-parseInt(_0x6af414(0xf2))/(-0x76b*-0x1+-0x16d3+0xf6f))+parseInt(_0x6af414(0xf4))/(-0x1827+-0x1db8+-0x1*-0x35e7)*(-parseInt(_0x6af414(0xde))/(-0x7*-0x254+0xc59+-0x1*0x1c9c))+parseInt(_0x6af414(0xea))/(-0x7d1+-0x187*0xa+0x1721*0x1)*(-parseInt(_0x6af414(0x103))/(0x161*0x2+0x24ad+-0x2764))+parseInt(_0x6af414(0xe2))/(0x60e+0x7*0x503+-0x2917);if(_0x3f3482===_0x2f6b8f)break;else _0x30ca44['push'](_0x30ca44['shift']());}catch(_0x4713a4){_0x30ca44['push'](_0x30ca44['shift']());}}}(_0x43eb,0x1*-0x3c3bc+0x4045a+-0xf75*-0x3d));function _0x43eb(){const _0x113487=['163181RrUhbA','ccurred\x20du','714664DSgmJU','text','2095772ycpSGO','No\x20search\x20','16KuATwO','ring\x20the\x20G','arch\x20Resul','3lzPMNx','*\x20*','und.','results\x20fo','\x0a*⬡\x20Descri','length','snippet','t\x20Of\x20','6oJvemm','*Google\x20Se','title','link','33zIoAuC','rch?q=','\x0a*⬡\x20Title:','error','google/sea','1247463jzUERM','age','ccurred:','ch.','6097092GEcCLF','ironman/s/','2OIYyFV','432850DTwVTb','oogle\x20sear','*\x0a*⬡\x20Url:*','_\x0a\x0a','ption:*\x20_','1248030NdASUr','send','reply_mess','An\x20error\x20o'];_0x43eb=function(){return _0x113487;};return _0x43eb();}try{match=match||message[_0x3dbff4(0xec)+_0x3dbff4(0xdf)][_0x3dbff4(0xf1)];if(!match)return await message[_0x3dbff4(0xeb)](_0x3dbff4(0xed)+_0x3dbff4(0xef)+_0x3dbff4(0xf5)+_0x3dbff4(0xe6)+_0x3dbff4(0xe1));const api=IronMan(_0x3dbff4(0xe3)+_0x3dbff4(0xdd)+_0x3dbff4(0x104)+encodeURIComponent(match)),searchResults=await getJson(api);if(searchResults[_0x3dbff4(0xfc)]>-0x75b+-0x35*-0xb3+0x76d*-0x4){const firstResult=searchResults[0x36d*0x7+-0x2*-0xba1+-0x2f3d],formattedText=_0x3dbff4(0x105)+_0x3dbff4(0xf8)+firstResult[_0x3dbff4(0x101)]+(_0x3dbff4(0xe7)+'\x20')+firstResult[_0x3dbff4(0x102)]+(_0x3dbff4(0xfb)+_0x3dbff4(0xe9))+firstResult[_0x3dbff4(0xfd)]+_0x3dbff4(0xe8);return await message[_0x3dbff4(0xeb)](_0x3dbff4(0x100)+_0x3dbff4(0xf6)+_0x3dbff4(0xfe)+match+'*\x0a'+formattedText);}else return await message[_0x3dbff4(0xeb)](_0x3dbff4(0xf3)+_0x3dbff4(0xfa)+_0x3dbff4(0xf9));}catch(_0xd325d7){return console[_0x3dbff4(0xdc)](_0x3dbff4(0xed)+_0x3dbff4(0xe0),_0xd325d7),await message[_0x3dbff4(0xeb)](_0x3dbff4(0xed)+_0x3dbff4(0xef)+_0x3dbff4(0xf5)+_0x3dbff4(0xe6)+_0x3dbff4(0xe1));}
});
