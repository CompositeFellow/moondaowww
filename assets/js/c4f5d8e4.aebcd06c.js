"use strict";(self.webpackChunkmoondao_web=self.webpackChunkmoondao_web||[]).push([[195],{5131:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n,r=a(5861),l=a(7757),o=a.n(l),s=a(7294),i=a(7019),c=a(2263),m=a(1262),d=a(3990),u=a(859),p=["title","titleId"];function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(this,arguments)}function g(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var E=function(e){var t=e.title,a=e.titleId,r=g(e,p);return s.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 245 240","aria-labelledby":a},r),t?s.createElement("title",{id:a},t):null,n||(n=s.createElement("path",{d:"M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"})))};var b="0xd569d3cce55b71a8a3f3c418c329a66e5f714431",f="0xce4a1E86a5c47CD677338f53DA22A91d85cab2c9",v="https://api.etherscan.io/api",y="TJ95PY19ASCIBJQWX4T77V9MTHG7P57CKS",w=7e6;function N(e){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(o().mark((function e(t){var a,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0x9cc7f70800000000000000000000000000000000000000000000000000000000000000c7",a=v+"?module=proxy&action=eth_call&to="+b+"&data=0x9cc7f70800000000000000000000000000000000000000000000000000000000000000c7&tag=latest&apikey="+y,console.log("getJuiceboxBalance - Request: ",a),e.next=5,t.get(a);case 5:if(n=e.sent,console.log("getJuiceboxBalance - Response: ",n),!(n&&n.data&&n.data.result)){e.next=10;break}return r=C(n.data.result),e.abrupt("return",T(r));case 10:return e.abrupt("return",0);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e){return B.apply(this,arguments)}function B(){return(B=(0,r.Z)(o().mark((function e(t){var a,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=v+"?module=account&action=balance&address="+f+"&tag=latest&apikey="+y,console.log("getMultisigBalance - Request: ",a),e.next=4,t.get(a);case 4:if(n=e.sent,console.log("getMultisigBalance - Response: ",n),!(n&&n.data&&n.data.result)){e.next=8;break}return e.abrupt("return",T(n.data.result));case 8:return console.error("getMultisigBalance - Failed"),e.abrupt("return",0);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(o().mark((function e(t){var a,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD",console.log("getEthToUsd - Request: ",a),e.next=4,t.get(a);case 4:if(n=e.sent,console.log("getEthToUsd - Response: ",n),!(n&&n.data&&n.data.USD)){e.next=8;break}return e.abrupt("return",n.data.USD);case 8:return e.abrupt("return",0);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e){return parseInt(e,16)}function T(e){return e/1e18}function O(){return(O=(0,r.Z)(o().mark((function e(){var t,n,r,l,s,i,c,m,d,u,p;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a(9669),e.next=3,N(t);case 3:return n=e.sent,e.next=6,M(t);case 6:return r=e.sent,e.next=9,_(t);case 9:l=e.sent,s=n+r,console.log("ETH: "+s),i=(s*l).toFixed(0),c=i/w*100,m=s.toFixed(2),d=i.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),u=w.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),p=(w/l).toFixed(2),document.getElementById("progress-bar").style.width=c+"%",document.getElementById("moneyAmounts").textContent="$"+d+"  ("+m+" ETH)",document.getElementById("goalAmounts").textContent="$"+u+"   ("+p+" ETH)",document.getElementById("goalAmountsMobile").textContent="$"+u+"   ("+p+" ETH)";case 22:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var A=function(){return s.createElement(m.Z,{fallback:s.createElement("div",null," Loading... ")},(function(){!function(){O.apply(this,arguments)}(),function(){screen.width<1e3&&(document.getElementById("timerContainer").style.display="none",document.getElementById("timerContainerMobile").style.display="block",document.getElementById("fundsRaisedMobile").style.display="block",document.getElementById("goal").style.display="none");var e=new Date,t=e.getTimezoneOffset();e.setMinutes(e.getMinutes()+t);var a=new Date("2022-01-16T20:18:00Z");a.setMinutes(a.getMinutes()+t);var n=new Date("2021-12-17T22:00:00Z");n.setMinutes(n.getMinutes()+t),console.log(e),console.log(a),console.log(n);var r=Math.abs(a.getTime()-n.getTime())/1e3;setInterval((function(){e.setSeconds(e.getSeconds()+1);var t=Math.abs(a.getTime()-e.getTime())/1e3,n=t/(1*r),l=Math.floor(n*(1*r/86400)),o=(t-=24*l*3600)/86400,s=Math.floor(t/3600),i=(t-=3600*s)/3600,c=Math.floor(t/60);if(t=Math.floor(t-60*c),screen.width<1e3)document.getElementById("base-timer-label-days-m").innerHTML=String(l)+" D",document.getElementById("base-timer-label-hours-m").innerHTML=String(s)+" H",document.getElementById("base-timer-label-minutes-m").innerHTML=String(c)+" M",document.getElementById("base-timer-label-seconds-m").innerHTML=String(t)+" S";else{document.getElementById("base-timer-label-days").innerHTML=String(l)+" D",document.getElementById("base-timer-label-hours").innerHTML=String(s)+" H",document.getElementById("base-timer-label-minutes").innerHTML=String(c)+" M",document.getElementById("base-timer-label-seconds").innerHTML=String(t)+" S";var m=(283*n).toFixed(0)+" 283";document.getElementById("base-timer-path-remaining-days").setAttribute("stroke-dasharray",m);var d=(283*o).toFixed(0)+" 283";document.getElementById("base-timer-path-remaining-hours").setAttribute("stroke-dasharray",d);var u=(283*i).toFixed(0)+" 283";document.getElementById("base-timer-path-remaining-minutes").setAttribute("stroke-dasharray",u);var p=(t/60*283).toFixed(0)+" 283";document.getElementById("base-timer-path-remaining-seconds").setAttribute("stroke-dasharray",p)}}),1e3)}()}))};function S(){var e=(0,c.Z)().siteConfig,t=void 0===e?{}:e;return s.createElement(i.Z,{title:t.title,description:t.tagline},s.createElement(A,null),s.createElement("div",{className:"Home"},s.createElement("div",{className:"HomeHero"},s.createElement("div",{className:"BigHero"},s.createElement("div",{className:"Block__Contents",id:"homeTitle"},s.createElement("h1",{className:"daoColor",id:"homeTitle"},"Send a MoonDAO member to space"),s.createElement("p",{className:"BigP"},"Buy $MOONEY to join MoonDAO and send a fren to space in 2022!"),s.createElement("h2",{className:"daoColor",id:"countdownLabel"},"Time until end of fundraise"),s.createElement("div",{id:"timerContainerMobile"},s.createElement("span",{id:"base-timer-label-days-m",class:"mobile-countdown-digit"}),s.createElement("span",{id:"base-timer-label-hours-m",class:"mobile-countdown-digit"}),s.createElement("span",{id:"base-timer-label-minutes-m",class:"mobile-countdown-digit"}),s.createElement("span",{id:"base-timer-label-seconds-m",class:"mobile-countdown-digit"})),s.createElement("div",{id:"timerContainer"},s.createElement("div",{id:"daysTimer",class:"base-timer"},s.createElement("svg",{class:"base-timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},s.createElement("g",{class:"base-timer__circle"},s.createElement("circle",{class:"base-timer__path-elapsed",cx:"50",cy:"50",r:"45"}),s.createElement("path",{id:"base-timer-path-remaining-days","stroke-dasharray":"283",class:"base-timer__path-remaining-days",d:" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "}))),s.createElement("span",{id:"base-timer-label-days",class:"base-timer__label"})),s.createElement("div",{id:"hoursTimer",class:"base-timer"},s.createElement("svg",{class:"base-timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},s.createElement("g",{class:"base-timer__circle"},s.createElement("circle",{class:"base-timer__path-elapsed",cx:"50",cy:"50",r:"45"}),s.createElement("path",{id:"base-timer-path-remaining-hours","stroke-dasharray":"283",class:"base-timer__path-remaining-hours",d:" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "}))),s.createElement("span",{id:"base-timer-label-hours",class:"base-timer__label"})),s.createElement("div",{id:"minutesTimer",class:"base-timer"},s.createElement("svg",{class:"base-timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},s.createElement("g",{class:"base-timer__circle"},s.createElement("circle",{class:"base-timer__path-elapsed",cx:"50",cy:"50",r:"45"}),s.createElement("path",{id:"base-timer-path-remaining-minutes","stroke-dasharray":"283",class:"base-timer__path-remaining-minutes",d:" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "}))),s.createElement("span",{id:"base-timer-label-minutes",class:"base-timer__label"})),s.createElement("div",{id:"secondsTimer",class:"base-timer"},s.createElement("svg",{class:"base-timer__svg",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"},s.createElement("g",{class:"base-timer__circle"},s.createElement("circle",{class:"base-timer__path-elapsed",cx:"50",cy:"50",r:"45"}),s.createElement("path",{id:"base-timer-path-remaining-seconds","stroke-dasharray":"283",class:"base-timer__path-remaining-seconds",d:" M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0 "}))),s.createElement("span",{id:"base-timer-label-seconds",class:"base-timer__label"}))),s.createElement("h2",{className:"daoColor",id:"fundsRaised"},"Funds Raised:",s.createElement("span",{id:"moneyAmounts"}," "),s.createElement("span",{class:!0,Name:"daoColor",id:"goal"},"Current Goal:",s.createElement("span",{id:"goalAmounts"}," "))),s.createElement("h2",{className:"daoColor",id:"fundsRaisedMobile"},"Current Goal:",s.createElement("span",{id:"goalAmountsMobile"}," ")),s.createElement("div",{className:"progress"},s.createElement("span",{className:"progress-bar",id:"progress-bar"})),s.createElement("div",{className:"HeroButtonGroup"},s.createElement("a",{href:"https://mirror.xyz/pmoncada.eth/uuufJem6v9X-fW3Bu4v1p_3qA5gPf96lZelHUM97BC8",target:"_blank",className:"Button Big Primary Outlined",id:"heroButton"},"Learn more"),s.createElement("a",{href:"https://juicebox.money/#/p/moondao",className:"Button Big Primary Outlined",id:"heroButton"},"Buy token"))))),s.createElement("div",{className:"Goal Block"},s.createElement("div",{className:"Block__Contents"},s.createElement("div",{className:"Row"},s.createElement("div",{className:"Column--100"},s.createElement("h3",null,"Our plan to send a MoonDAO member to space in 2022:"),s.createElement("ol",null,s.createElement("li",null,"Offer ",s.createElement("a",{href:"/docs/token"},"$MOONEY governance tokens")," to begin decentralized community governance of MoonDAO. ",s.createElement("strong",null," This will be our only supply of tokens.")),s.createElement("li",null,"Release the ",s.createElement("strong",null,"Ticket to Space")," NFT collection. These NFTs will give you a chance to fly to space in 2022."),s.createElement("li",null,"Buy a ticket(s) to space on a SpaceX/Blue Origin/Virgin Galactic etc. rocket ship."),s.createElement("li",null,"Send MoonDAO member(s) to space in 2022.")))))),s.createElement("div",{className:"Block PrimaryBg"},s.createElement("div",{className:"Block__Contents"},s.createElement("div",{className:"Row"},s.createElement("div",{className:"Column--100"},s.createElement("h5",{className:"daoColor"},"Mission"),s.createElement("h2",null,"MoonDAO is going to the moon."),s.createElement("p",null,"MoonDAO is an international collective of people united by the mission of decentralizing access to space research and exploration. We are currently living at the inflection point of a privatized space race, and the implications of this moment will define our future. Making life multi-planetary is one of the most inspiring and important missions in our lifetime. The big question is: how? We believe that an international, decentralized, inclusive, and transparent organization would be much better aligned with the needs of the everyday person."),s.createElement("blockquote",null,s.createElement("p",null,'"All civilizations become either spacefaring or extinct."'),s.createElement("p",{className:"attribution"},"\u2014 Carl Sagan")))))),s.createElement("div",{className:"Values Block"},s.createElement("div",{className:"Block__Contents"},s.createElement("div",{className:"Row"},s.createElement("div",{className:"Column--100"},s.createElement("h5",null,"Values"),s.createElement("h3",null,"Space should be in the hands of the people."),s.createElement("p",null,"We uphold values of inclusion, peace, transparency, freedom of organization and speech. Space should be in the hands of the people, not any one nation or private entity."),s.createElement("p",null,"As such, MoonDAO will support funding for individuals to go to space and fund future space research and exploration as it fits into the mission of becoming a governing body for the moon and other celestial bodies."),s.createElement("p",null,"It is very important to note that the core team has not pre-mined any tokens for ourselves. We have not given \u201cspecial terms\u201d to any Venture Capitalists, Influencers, Angel Investors, Rich Friends or Family, or any other person. We are all being treated equally."))))),s.createElement("div",{className:"Roadmap Block PrimaryBg",id:"MoonPhase"},s.createElement("div",{className:"Block__Contents"},s.createElement("h5",null,"Moon Phases"),s.createElement("h3",null,"Our roadmap to the stars."),s.createElement("div",{className:"Row AlignCenter"},s.createElement("div",{className:"Column--66"},s.createElement("h4",null,"Moon phase 1"),s.createElement("p",null,s.createElement("strong",null,"Deploy a token for decentralized governance of MoonDAO.")),s.createElement("p",{className:"small"},"In order to be a DAO, we need a governance token for decision making. Launching the ",s.createElement("a",{href:"/docs/token"},"$MOONEY governance token")," is our first step. There is no expectation of profit with this token, this token\u2019s purpose is to coordinate our governance."),s.createElement("p",{className:"small"},"Every investor, builder, or fren, big or small, has gotten the same terms. No special treatment for anyone. This is unusual for an Ethereum project, but we thought it would be more fair for everyone involved that we did not airdrop or pre-mine any number of tokens for people ahead of time. We are not VC funded, we are community organized and led, this is very important to us!")),s.createElement("div",{className:"Column--33"},s.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf12 ",s.createElement("br",null)))),s.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},s.createElement("div",{className:"Column--66"},s.createElement("h4",null,"Moon phase 2"),s.createElement("p",null,s.createElement("strong",null,"Send a MoonDAO member to space.")),s.createElement("p",{className:"small"},"Virgin Galactic advertises its tickets will be sold for \u201cas low as\u201d $450K and it has been reported that Blue Origin\u2019s tickets are have gone up for auction for over $28M. The range is large. MoonDAO wants to help create a world where anyone can fly to space regardless of their financial situation. We hope that this can be a meaningful and inspirational first step in decentralizing space exploration."),s.createElement("p",{className:"small"},"So far in history, space exploration has been gated to the rest of the world \u2014 accessible to only the privileged. MoonDAO changes this for the first time in history.")),s.createElement("div",{className:"Column--33"},s.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf13 ",s.createElement("br",null)))),s.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},s.createElement("div",{className:"Column--66"},s.createElement("h4",null,"Moon phase 3"),s.createElement("p",null,s.createElement("strong",null,"Provide funding to space research and exploration.")),s.createElement("p",{className:"small"},"We don\u2019t want to just take a ride on someone else\u2019s rockets, we\u2019d like to fund and coordinate our own plans. We think an international collective could move much faster than any red-taped organization, and we can contract out certain aspects of rocket development to private companies -- just like NASA."),s.createElement("p",{className:"small"},"The exploration of space should unify the world, not pit us against each other like the last space race. After all, aren't we all just curious earthlings that want to explore the unknown? Now, Web 3.0 represents a technology that can unify earthlings and decentralize space exploration.")),s.createElement("div",{className:"Column--33"},s.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf14 ",s.createElement("br",null)))),s.createElement("div",{className:"Row AlignCenter",id:"MoonPhase"},s.createElement("div",{className:"Column--66"},s.createElement("h4",null,"Moon phase 4"),s.createElement("p",null,s.createElement("strong",null,"Put a MoonDAO colony on the moon.")),s.createElement("p",{className:"small"},"That's\xa0one small step for man, one giant leap for mankind."),s.createElement("p",{className:"small"},"The 1967 Space Treaty forms the basis for all law concerning space. In this treaty it states that no national appropriation of the Moon can take place. However, a DAO is not a nation \u2014 it is an international collective of frens."),s.createElement("p",{className:"small"},"We have the opportunity to use these new governance and coordination tools in order to form a more perfect union as we extend the rights and liberties of every human on earth into the solar system.")),s.createElement("div",{className:"Column--33"},s.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf15 ",s.createElement("br",null)))),s.createElement("div",{className:"Row AlignCenter",id:"MoonPhase5"},s.createElement("div",{className:"Column--66"},s.createElement("h4",null,"Moon phase 5"),s.createElement("p",null,s.createElement("strong",null,"Have sweet moon parties (everyone's invited).")),s.createElement("p",{className:"small"},"They're gonna be sweet. BYOB but we'll provide transportation.")),s.createElement("div",{className:"Column--33"},s.createElement("p",{className:"center roadmap-moon-icon"},"\ud83c\udf1d ",s.createElement("br",null)))))),s.createElement("div",{className:"Block",id:"community"},s.createElement("div",{className:"Block__Contents"},s.createElement("div",{className:"Row"},s.createElement("div",{className:"Column--50"},s.createElement("h3",null,"Join our mission."),s.createElement("p",null,"Contribute to our efforts by buying our governance token to fund our treasury, or lend us your brain power and help us build the world's first decentralized public space program."),s.createElement("div",{id:"community_actions",className:"Row AlignCenter"},s.createElement("div",null,s.createElement("a",{href:"https://juicebox.money/#/p/moondao",className:"Button Primary Outlined"},"Buy token")),s.createElement("div",{className:"Social"},s.createElement("a",{href:"https://discord.gg/5nAu7K9aES",target:"_blank",rel:"noopener noreferrer"},s.createElement(E,null)),s.createElement("a",{href:"https://github.com/Official-MoonDao",target:"_blank",rel:"noopener noreferrer"},s.createElement(u.gik,null)),s.createElement("a",{href:"https://twitter.com/OfficialMoonDAO",target:"_blank",rel:"noopener noreferrer"},s.createElement(d.Fwv,null))))),s.createElement("div",{className:"Column--50"},s.createElement("p",{className:"center"},s.createElement("img",{width:"75%",src:"img/undraw_launch_day_4e04.svg",alt:"moondao logo"}))))))))}}}]);