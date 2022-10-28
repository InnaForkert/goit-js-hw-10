const n=document.querySelector("#search-box");n.addEventListener("input",(function(){(o=n.value,fetch(`https://restcountries.com/v3.1/name/${o}`).then((n=>{if(!n.ok)throw new Error(n.status);return n.json()})).catch((n=>{console.log(n)}))).then((n=>function(n){const o=n.map((n=>n.name.common));console.log(o)}(n)));var o}));
//# sourceMappingURL=index.232cede2.js.map
