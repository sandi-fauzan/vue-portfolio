(function(e){function t(t){for(var s,n,c=t[0],r=t[1],d=t[2],m=0,x=[];m<c.length;m++)n=c[m],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&x.push(i[n][0]),i[n]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);o&&o(t);while(x.length)x.shift()();return l.push.apply(l,d||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],s=!0,c=1;c<a.length;c++){var r=a[c];0!==i[r]&&(s=!1)}s&&(l.splice(t--,1),e=n(n.s=a[0]))}return e}var s={},i={app:0},l=[];function n(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=s,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var o=r;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0365":function(e,t,a){e.exports=a.p+"img/github-icon-1.04e280ff.svg"},"0af9":function(e,t,a){e.exports=a.p+"img/jumbo.1536db43.png"},"0b8e":function(e,t,a){e.exports=a.p+"img/sass-1.b446ca5a.svg"},"112c":function(e,t,a){e.exports=a.p+"img/figma-1.810a96e7.svg"},2129:function(e,t,a){e.exports=a.p+"img/tailwindcss.ae552627.svg"},4114:function(e,t,a){e.exports=a.p+"img/bootstrap-5-1.6aae84ab.svg"},"4d26":function(e,t,a){},"51a7":function(e,t,a){e.exports=a.p+"img/logo-javascript.891a71b9.svg"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("7a23");function i(e,t,a,i,l,n){var c=Object(s["w"])("Navbar"),r=Object(s["w"])("router-view"),d=Object(s["w"])("Footer");return Object(s["q"])(),Object(s["d"])(s["a"],null,[Object(s["h"])(c),Object(s["h"])(r),Object(s["h"])(d)],64)}var l=function(e){return Object(s["t"])("data-v-5e7fbc85"),e=e(),Object(s["r"])(),e},n={class:"bg-transparent lg:px-64 md:px-32 absolute top-0 left-0 w-full flex items-center z-10"},c={class:"container"},r={class:"flex items-center justify-between relative"},d={class:"px-4 py-4"},o=Object(s["g"])("SAN"),m={class:"flex items-center px-4"},x=l((function(){return Object(s["e"])("button",{id:"hamburger",name:"hamburger",type:"button",class:"block absolute right-4 lg:hidden md:hidden"},[Object(s["e"])("span",{class:"hamburger-line transition duration-300 ease-in-out origin-top-left"}),Object(s["e"])("span",{class:"hamburger-line transition duration-300 ease-in-out"}),Object(s["e"])("span",{class:"hamburger-line transition duration-300 ease-in-out origin-bottom-left"})],-1)})),g={id:"nav-menu",class:"hidden absolute py-5 lg:py-3 bg-white shadow-lg rounded-lg w-48 lg:w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none md:block md:static md:bg-transparent md:max-w-full md:shadow-none md:rounded-none"},b={class:"block lg:flex md:flex"},p={class:"group"},v=Object(s["g"])("Home"),f={class:"group"},u=Object(s["g"])("Skills"),h={class:"group"},w=Object(s["g"])("Projects"),y={class:"group"},j=Object(s["g"])("Contact");function k(e,t,a,i,l,k){var O=Object(s["w"])("router-link");return Object(s["q"])(),Object(s["d"])("header",n,[Object(s["e"])("div",c,[Object(s["e"])("div",r,[Object(s["e"])("div",d,[Object(s["h"])(O,{to:"/",class:"font-bold text-primary text-lg block"},{default:Object(s["A"])((function(){return[o]})),_:1})]),Object(s["e"])("div",m,[x,Object(s["e"])("nav",g,[Object(s["e"])("ul",b,[Object(s["e"])("li",p,[Object(s["h"])(O,{to:"/",class:"lg:text-sm md:text-sm text-base flex text-gray-600 hover:text-primary uppercase py-3 mx-10"},{default:Object(s["A"])((function(){return[v]})),_:1})]),Object(s["e"])("li",f,[Object(s["h"])(O,{to:"/Skills",class:"lg:text-sm md:text-sm text-base flex text-gray-600 hover:text-primary uppercase py-3 mx-10"},{default:Object(s["A"])((function(){return[u]})),_:1})]),Object(s["e"])("li",h,[Object(s["h"])(O,{to:"/Projects",class:"lg:text-sm md:text-sm text-base flex text-gray-600 hover:text-primary uppercase py-3 mx-10"},{default:Object(s["A"])((function(){return[w]})),_:1})]),Object(s["e"])("li",y,[Object(s["h"])(O,{to:"/Contact",class:"lg:text-sm md:text-sm text-base flex text-gray-600 hover:text-primary uppercase py-3 mx-10"},{default:Object(s["A"])((function(){return[j]})),_:1})])])])])])])])}var O={name:"Navbar",mounted:function(){var e=document.getElementById("hamburger"),t=document.getElementById("nav-menu");e.addEventListener("click",(function(){e.classList.toggle("hamburger-active"),t.classList.toggle("hidden")})),window.onscroll=function(){var e=document.querySelector("header"),t=e.offsetTop;window.pageYOffset>t?e.classList.add("navbar-fixed"):e.classList.remove("navbar-fixed")}}},S=(a("69bd"),a("6b0d")),P=a.n(S);const I=P()(O,[["render",k],["__scopeId","data-v-5e7fbc85"]]);var L=I,M={class:"bg-dark pt-24 lg:px-20 pb-12"},C={class:"container md:px-40 px-10"},_={class:"flex flex-wrap"},A={class:"w-full mb-12"},T={class:"text-white"},N={class:"mb-4 hover:text-primary"},E=Object(s["g"])("Home"),D={class:"mb-4 hover:text-primary"},z=Object(s["g"])("Skills"),B={class:"mb-4 hover:text-primary"},F=Object(s["g"])("Projects"),q={class:"mb-4 hover:text-primary"},H=Object(s["g"])("Contact"),W=Object(s["e"])("p",{class:"text-white text-center text-sm mt-16 tracking-wider"},[Object(s["g"])(" Made With 💙 by "),Object(s["e"])("a",{href:"https://github.com/sandi-fauzan/",class:"font-semibold hover:text-primary"},"Sandi Fauzan")],-1);function J(e,t,a,i,l,n){var c=Object(s["w"])("router-link");return Object(s["q"])(),Object(s["d"])("footer",M,[Object(s["e"])("div",C,[Object(s["e"])("div",_,[Object(s["e"])("div",A,[Object(s["e"])("ul",T,[Object(s["e"])("li",N,[Object(s["h"])(c,{to:"/"},{default:Object(s["A"])((function(){return[E]})),_:1})]),Object(s["e"])("li",D,[Object(s["h"])(c,{to:"/Skills"},{default:Object(s["A"])((function(){return[z]})),_:1})]),Object(s["e"])("li",B,[Object(s["h"])(c,{to:"/Projects"},{default:Object(s["A"])((function(){return[F]})),_:1})]),Object(s["e"])("li",q,[Object(s["h"])(c,{to:"/Contact"},{default:Object(s["A"])((function(){return[H]})),_:1})])]),W])])])])}var R={name:"Footer"};const V=P()(R,[["render",J]]);var G=V,K={components:{Navbar:L,Footer:G}};const U=P()(K,[["render",i]]);var Y=U,Q=a("6c02"),X=a("0af9"),Z=a.n(X),$={class:"home"},ee=Object(s["f"])('<section id="home" class="pt-8"><div class="container"><div class="flex flex-wrap"><div class="w-full self-end px-4 md:w-1/2 lg:w-1/2"><div class="relative lg:mt-9 lg:right-0"><div class="lg:right-0"><img src="'+Z.a+'" class="w-64 mx-auto"></div></div></div><div class="w-full self-center px-4 md:w-1/2 lg:w-1/2"><h3 class="mt-4 lg:mt-36 md:mt-24 font-semibold text-sm lg:text-sm text-primary"> Hi Everyone 👋, My Name Is </h3><h1 class="text-dark text-3xl font-semibold mt-1"> Sandi Fauzan Rabani </h1><h2 class="mt-2 text-sm text-gray-400"> Front-end Web Developer &amp; Web Designer </h2><a href="https://drive.google.com/file/d/1ulgoPu4ti8xfDiN-rNMo3TfVqBx21fE3/view?usp=sharing"><button class="mt-9 rounded-full text-sm py-3 px-16 bg-primary text-white font-semibold hover:text-primary hover:bg-purple-100 transition duration-100 shadow-md"> Download Resume </button></a></div></div></div></section><section id="about" class="py-32"><div class="container lg:px-32"><div class="flex flex-wrap"><div class="w-full text-left px-4 mt-28 mb-10"><h3 class="text-sm text-primary font-semibold mb-2">About</h3><h4 class="font-bold uppercase text-dark text-xl lg:text-2xl mb-3"> My, Myself &amp; I </h4><p class="text-secondary md:text-base text-sm tracking-wider lg:leading-10 leading-8 text-left"> I am a Front-End Developer located in Majalengka, Indonesia. Talks about Vue, Tailwind, CSS and related topics, Also i have interest in User Interface/User Experience Design. <br><br> I am a graduate of SMKN 1 Talaga in 2022 majoring in software engineering. </p></div></div></div></section>',2),te=[ee];function ae(e,t,a,i,l,n){return Object(s["q"])(),Object(s["d"])("div",$,te)}var se={name:"Home",created:function(){document.title="Home"}};const ie=P()(se,[["render",ae]]);var le=ie,ne=a("8c1c"),ce=a.n(ne),re=a("f00f"),de=a.n(re),oe=a("4114"),me=a.n(oe),xe=a("2129"),ge=a.n(xe),be=a("51a7"),pe=a.n(be),ve=a("0b8e"),fe=a.n(ve),ue=a("eef6"),he=a.n(ue),we=a("b602"),ye=a.n(we),je=a("8d04"),ke=a.n(je),Oe=a("be5c"),Se=a.n(Oe),Pe=a("967d"),Ie=a.n(Pe),Le=a("0365"),Me=a.n(Le),Ce=a("112c"),_e=a.n(Ce),Ae=a("f52f"),Te=a.n(Ae),Ne={class:"skills"},Ee=Object(s["f"])('<section id="skills" class="py-32" data-v-657e217b><div class="container lg:px-32" data-v-657e217b><div class="flex flex-wrap" data-v-657e217b><div class="w-full px-4 text-center mt-8 mb-10" data-v-657e217b><h4 class="font-bold uppercase text-dark text-xl lg:text-2xl mb-5" data-v-657e217b> Skills </h4><h3 class="text-sm text-primary font-semibold mb-2" data-v-657e217b> My Skill In Web Development </h3><div class="lg:px-20 md:grid gap-6 items-center relative md:grid-cols-4 py-4 lg:py-10" data-v-657e217b><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+ce.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> HTML </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Expert) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+de.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> CSS </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Expert) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex py-4 mx-16 md:mx-1" data-v-657e217b><div class="block" data-v-657e217b><img src="'+me.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> Bootstrap </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Expert) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+ge.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> TailwindCSS </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Expert) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+pe.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> JavaScript </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Intermediate) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+fe.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> Sass </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Intermediate) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+he.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> Vue JS </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Intermediate) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+ye.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> React JS </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Beginner) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+ke.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> Next JS </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Beginner) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+Se.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> PHP </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Intermediate) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+Ie.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> GSAP </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Intermediate) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+Me.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> Github </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Intermediate) </p></div></div></div><h3 class="text-sm mt-20 text-primary font-semibold mb-2" data-v-657e217b> My Skill In Design Graphic </h3><div class="md:px-72 md:grid gap-6 items-center justify-center relative md:grid-cols-2 py-4 lg:py-10" data-v-657e217b><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+_e.a+'" class="w-8 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> Figma </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Intermediate) </p></div></div><div class="p-1 mt-6 bg-white card h-56 mx-16 md:mx-1 items-center justify-center relative flex md:py-4" data-v-657e217b><div class="block" data-v-657e217b><img src="'+Te.a+'" class="w-16 lg:w-16 mx-auto" data-v-657e217b><h3 class="text-dark text-base lg:text-xs font-semibold mt-5 mx-4" data-v-657e217b> Inkscape </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 tracking-wide lg:leading-6 leading-6" data-v-657e217b> (Beginner) </p></div></div></div></div></div></div></section>',1),De=[Ee];function ze(e,t,a,i,l,n){return Object(s["q"])(),Object(s["d"])("div",Ne,De)}var Be={name:"Skills",created:function(){document.title="My Skills"}};a("c124");const Fe=P()(Be,[["render",ze],["__scopeId","data-v-657e217b"]]);var qe=Fe,He=a("d3da"),We=a.n(He),Je=a("f90b"),Re=a.n(Je),Ve=a("7a1a"),Ge=a.n(Ve),Ke=a("63ba"),Ue=a.n(Ke),Ye=a("9844"),Qe=a.n(Ye),Xe=a("9921"),Ze=a.n(Xe),$e=a("d67a"),et=a.n($e),tt={id:"projects",class:"py-32"},at=Object(s["f"])('<div class="container"><div class="w-full px-4 mt-8"><div class="max-w-xl mx-auto text-center mb-16"><h3 class="text-sm text-primary font-semibold mb-2">Portfolio</h3><h1 class="font-semibold text-dark mb-2 text-3xl"> Projects That I&#39;ve Made </h1><h5 class="text-xs lg:text-sm text-secondary tracking-wider leading-6 lg:leading-8"> List of my personal projects, proven that I&#39;ve created something with my knowledge and experience, I will grow my skill and combine it with experience I have. </h5></div></div><div class="w-full flex flex-wrap justify-center lg:px-20 lg:w-10/12 mx-auto"><div class="mb-12 py-2 px-2 md:px-3 md:w-1/2"><div class="card overflow-hidden bg-white"><img src="'+We.a+'" alt="Landing Page" class="w-full object-cover max-h-56 bg-left-top"><h3 class="text-dark text-lg lg:text-base font-semibold mt-5 mb-2 mx-4"> 12Clouds </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 mb-2 tracking-wide lg:leading-6 leading-6"> is an Agency Landing Page. Slicing design in Figma, Coding with Vue and TailwindCSS. </p><div class="mini-image flex px-4 mb-2"><img src="'+ce.a+'" class="w-4 mr-2"><img src="'+de.a+'" class="w-4 mr-2"><img src="'+_e.a+'" class="w-3"></div><a href="https://12clouds.netlify.app" class="text-primary text-xs mx-4 hover:underline">Live Site</a><div class="bg-transparent h-3"></div></div></div><div class="mb-12 py-2 px-2 md:px-3 md:w-1/2"><div class="card overflow-hidden bg-white"><img src="'+Re.a+'" alt="Landing Page" class="w-full object-cover max-h-56 bg-left-top"><h3 class="text-dark text-lg lg:text-base font-semibold mt-5 mb-2 mx-4"> VRSkul </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 mb-2 tracking-wide lg:leading-6 leading-6"> is an Educational Web That I Made for a Competition in Dinamik-12 held by Universitas Pendidikan Indonesia. </p><div class="mini-image flex px-4 mb-2"><img src="'+ce.a+'" class="w-4 mr-2"><img src="'+de.a+'" class="w-4"></div><a href="https://vrskul.netlify.app" class="text-primary text-xs mx-4 hover:underline">Live Site</a><div class="bg-transparent h-3"></div></div></div><div class="mb-12 py-2 px-2 md:px-3 md:w-1/2"><div class="card overflow-hidden bg-white"><img src="'+Ge.a+'" alt="Landing Page" class="w-full object-cover max-h-56 bg-left-top"><h3 class="text-dark text-lg lg:text-base font-semibold mt-5 mb-2 mx-4"> Maudex </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 mb-2 tracking-wide lg:leading-6 leading-6"> is an Agency Landing Page. Slicing design in Figma, Coding with Vue and TailwindCSS. </p><div class="mini-image flex px-4 mb-2"><img src="'+he.a+'" class="w-4 mr-2"><img src="'+ge.a+'" class="w-4 mr-2"><img src="'+_e.a+'" class="w-3"></div><a href="https://maudex.netlify.app" class="text-primary text-xs mx-4 hover:underline">Live Site</a><div class="bg-transparent h-3"></div></div></div><div class="mb-12 p-1 md:px-3 md:w-1/2"><div class="card overflow-hidden bg-white"><img src="'+Ue.a+'" alt="Landing Page" class="w-full object-cover max-h-56 bg-left-top"><h3 class="text-dark text-lg lg:text-base font-semibold mt-5 mb-2 mx-4"> Codelabs SMKN 1 Talaga </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 mb-2 tracking-wide lg:leading-6 leading-6"> Codelabs SMKN 1 Talaga is a Programming/Design Community Website in SMKN 1 Talaga. </p><div class="mini-image flex px-4 mb-2"><img src="'+he.a+'" class="w-4 mr-2"><img src="'+ge.a+'" class="w-4"></div><a href="https://codelabssmkn1tlg.netlify.app" class="text-primary text-xs mx-4 hover:underline">Live Site</a><div class="bg-transparent h-3"></div></div></div><div class="mb-12 p-1 md:px-3 md:w-1/2"><div class="card overflow-hidden bg-white"><img src="'+Qe.a+'" alt="Landing Page" class="w-full object-cover max-h-56 bg-left-top"><h3 class="text-dark text-lg lg:text-base font-semibold mt-5 mb-2 mx-4"> Ayayat Store </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 mb-2 tracking-wide lg:leading-6 leading-6"> Ayayat Store is a T-Shirt Landing Page Website. </p><div class="mini-image flex px-4 mb-2"><img src="'+ce.a+'" class="w-4 mr-2"><img src="'+de.a+'" class="w-4 mr-2"><img src="'+ge.a+'" class="w-4"></div><a href="https://sandi-fauzan.github.io/ayayat" class="text-primary text-xs mx-4 hover:underline">Live Site</a><div class="bg-transparent h-3"></div></div></div><div class="mb-12 p-1 md:px-3 md:w-1/2"><div class="card overflow-hidden bg-white"><img src="'+Ze.a+'" alt="Landing Page" class="w-full object-cover max-h-56 bg-left-top"><h3 class="text-dark text-lg lg:text-base font-semibold mt-5 mb-2 mx-4"> Sweaterz </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 mb-4 tracking-wide lg:leading-6 leading-6"> Sweaterz is a Sweater Landing Page. </p><div class="mini-image flex px-4 mb-2"><img src="'+ce.a+'" class="w-4 mr-2"><img src="'+de.a+'" class="w-4 mr-2"><img src="'+ge.a+'" class="w-4"></div><a href="https://sweaterz.netlify.app" class="text-primary text-xs mx-4 hover:underline">Live Site</a><div class="bg-transparent h-3"></div></div></div><div class="mb-12 p-1 md:px-3 md:w-1/2"><div class="card overflow-hidden bg-white"><img src="'+et.a+'" alt="Landing Page" class="w-full object-cover max-h-56 bg-left-top"><h3 class="text-dark text-lg lg:text-base font-semibold mt-5 mb-2 mx-4"> Catatan Perjalanan </h3><p class="text-xs lg:text-xs text-secondary font-normal mx-4 mb-4 tracking-wide lg:leading-6 leading-6"> is an application to record the date, time, location, temperature of a person with travel history. </p><div class="mini-image flex px-4 mb-2"><img src="'+Se.a+'" class="w-4 mr-2"><img src="'+me.a+'" class="w-4"></div><div class="bg-transparent h-3"></div></div></div></div></div>',1),st=[at];function it(e,t,a,i,l,n){return Object(s["q"])(),Object(s["d"])("section",tt,st)}var lt={name:"Projects",created:function(){document.title="My Projects"}};a("9fee");const nt=P()(lt,[["render",it]]);var ct=nt,rt=a("bb19"),dt=a.n(rt),ot=a("8ec6"),mt=a.n(ot),xt=a("9fc8"),gt=a.n(xt),bt={id:"contact",class:"bg-violet-50"},pt=Object(s["f"])('<div class="container px-11 md:px-52 py-32"><div class="max-w-xl mx-auto text-center mb-16"><h2 class="font-semibold text-dark mb-2 text-3xl">Contact Me</h2><h3 class="lg:text-sm text-xs text-secondary tracking-wider"> You can find me in: </h3></div><div class="mt-10 justify-center"><ul class="justify-center"><li class="flex bg-white rounded-lg shadow-md py-4 mb-4 px-4 mx-auto lg:w-4/5 hover:text-primary hover:bg-gray-50 cursor-pointer"><img src="'+Me.a+'" class="w-8 flex"><a href="https://github.com/sandi-fauzan/" class="pl-2 items-center"> GITHUB</a></li><li class="flex bg-white rounded-lg shadow-md py-4 mb-4 px-4 lg:w-4/5 mx-auto hover:text-primary hover:bg-gray-50 cursor-pointer"><img src="'+dt.a+'" class="w-8 flex"><a href="https://instagram.com/that_boy_sann/" class="pl-2 items-center">INSTAGRAM</a></li><li class="flex bg-white rounded-lg shadow-md py-4 mb-4 px-4 lg:w-4/5 mx-auto hover:text-primary hover:bg-gray-50 cursor-pointer"><img src="'+mt.a+'" class="w-8 flex"><a href="https://www.linkedin.com/in/sandi-fauzan-rabani-29062122a/" class="pl-2 items-center">LINKEDIN</a></li><li class="flex bg-white rounded-lg shadow-md py-4 mb-4 px-4 lg:w-4/5 mx-auto hover:text-primary hover:bg-gray-50 cursor-pointer"><img src="'+gt.a+'" class="w-8 flex"><a href="https://dribbble.com/Sandi_Fauzan" class="pl-2 items-center">DRIBBBLE</a></li></ul></div></div>',1),vt=[pt];function ft(e,t,a,i,l,n){return Object(s["q"])(),Object(s["d"])("section",bt,vt)}var ut={name:"Contact",created:function(){document.title="Contact Me"}};const ht=P()(ut,[["render",ft]]);var wt=ht,yt=[{path:"/",name:"Home",component:le},{path:"/Skills",name:"Skills",component:qe},{path:"/Projects",name:"Projects",component:ct},{path:"/Contact",name:"Contact",component:wt}],jt=Object(Q["a"])({history:Object(Q["b"])(""),routes:yt}),kt=jt,Ot=(a("a766"),a("58ca"));Object(s["c"])(Y).use(kt,Ot["a"]).mount("#app")},"63ba":function(e,t,a){e.exports=a.p+"img/codelabs.5133ae21.png"},"69bd":function(e,t,a){"use strict";a("4d26")},"7a1a":function(e,t,a){e.exports=a.p+"img/maudex.6f1510c2.png"},"8c1c":function(e,t,a){e.exports=a.p+"img/html-1.a2d427be.svg"},"8d04":function(e,t,a){e.exports=a.p+"img/next-js.33e988f3.svg"},"8ec6":function(e,t,a){e.exports=a.p+"img/linkedin-icon.04779755.svg"},"967d":function(e,t,a){e.exports=a.p+"img/gsap-greensock.6ec18a3f.svg"},9844:function(e,t,a){e.exports=a.p+"img/ayayat.32894d3f.png"},9921:function(e,t,a){e.exports=a.p+"img/sweater.c92167a5.png"},"9cc1":function(e,t,a){},"9fc8":function(e,t,a){e.exports=a.p+"img/dribbble-icon.e2bd4b35.svg"},"9fee":function(e,t,a){"use strict";a("b2c3")},a766:function(e,t,a){},b2c3:function(e,t,a){},b602:function(e,t,a){e.exports=a.p+"img/react-2.c3fbd71b.svg"},bb19:function(e,t,a){e.exports=a.p+"img/instagram-2-1.9f41e00c.svg"},be5c:function(e,t,a){e.exports=a.p+"img/php-1.7634d1a3.svg"},c124:function(e,t,a){"use strict";a("9cc1")},d3da:function(e,t,a){e.exports=a.p+"img/12clouds.bffabe4d.png"},d67a:function(e,t,a){e.exports=a.p+"img/caper.0d2f19ee.png"},eef6:function(e,t,a){e.exports=a.p+"img/vue-js-1.69cedcf3.svg"},f00f:function(e,t,a){e.exports=a.p+"img/css-5.999d668e.svg"},f52f:function(e,t,a){e.exports=a.p+"img/inkscape.83a4ad73.svg"},f90b:function(e,t,a){e.exports=a.p+"img/vrskul.72e11ddf.png"}});
//# sourceMappingURL=app.50e88439.js.map