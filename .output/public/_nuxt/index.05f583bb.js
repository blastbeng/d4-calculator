import{r as W,o as v,a as D,b as p,t as S,F,e as B,c as M,u as _,f as A,h as b,i as w,j as f,w as j,k,l as T,m as L}from"./entry.8e473d3d.js";var o=(e=>(e.WeaponDamage="WeaponDamage",e.MainStat="MainStat",e.Overpower="Overpower",e.Vulnerabillity="Vulnerabillity",e.Crit="Crit",e.While="While",e.With="With",e.From="From",e.Vs="Vs",e.AllDamage="AllDamage",e))(o||{}),d=(e=>(e.WeaponDamage="WeaponDamage",e.MainStat="MainStat",e.CriticalStrikeChance="CriticalStrikeChance",e.CriticalStrikeDamage="CriticalStrikeDamage",e.CriticalStrikeDamageWithCore="CriticalStrikeDamageWithCore",e.CriticalStrikeDamageWithBone="CriticalStrikeDamageWithBone",e.OverpowerChance="OverpowerChance",e.OverpowerDamage="OverpowerDamage",e.VulnerabillityDamage="VulnerabillityDamage",e.AllDamage="AllDamage",e.DamageVsHealthy="DamageVsHealthy",e.DamageVsElites="DamageVsElites",e.DamageVsSlowed="DamageVsSlowed",e.DamageWhileHealthy="DamageWhileHealthy",e.DamageWithPhysical="DamageWithPhysical",e.DamageWithBone="DamageWithBone",e.DamageWithCore="DamageWithCore",e.DamageFromBloodOrb="DamageFromBloodOrb",e))(d||{});const h={WeaponDamage:{stats:["WeaponDamage"]},MainStat:{stats:["MainStat"]},Crit:{stats:["CriticalStrikeChance","CriticalStrikeDamage","CriticalStrikeDamageWithCore","CriticalStrikeDamageWithBone"]},Overpower:{stats:["OverpowerChance","OverpowerDamage"]},Vulnerabillity:{stats:["VulnerabillityDamage"]},While:{stats:["DamageWhileHealthy"]},With:{stats:["DamageWithPhysical","DamageWithBone","DamageWithCore"]},From:{stats:["DamageFromBloodOrb"]},Vs:{stats:["DamageVsElites","DamageVsHealthy","DamageVsSlowed"]},AllDamage:{stats:["AllDamage"]}};const J={class:"container"},U={class:"stats"},V={__name:"bucket",props:{bucketName:o,stats:Object,setStatsByKey:Function},setup(e,{expose:r}){return r({BucketsDict:h}),(t,i)=>{const s=W("v-text-field");return v(),D("div",J,[p("div",null,S(e.bucketName),1),p("div",U,[(v(!0),D(F,null,B(_(h)[e.bucketName].stats,(a,m)=>(v(),M(s,{key:m,label:`${a}${[_(o).WeaponDamage,_(o).MainStat].includes(a)?"":", %"}`,"model-value":e.stats[a],"onUpdate:modelValue":c=>e.setStatsByKey(a,c),variant:"outlined"},null,8,["label","model-value","onUpdate:modelValue"]))),128))])])}}},Y={class:"form"},q={class:"list"},z={class:"result"},x=A({__name:"stat-panel",props:{calculator:{type:null,required:!0}},setup(e,{expose:r}){const t=e,{stats:i,setStatsByKey:s,result:a}=t.calculator;return r({BucketName:o,DmgCalcBucket:V,stats:i,setStatsByKey:s,result:a}),(m,c)=>(v(),D("div",Y,[p("div",q,[(v(!0),D(F,null,B(_(o),(u,y)=>(v(),M(V,{key:y,"bucket-name":u,stats:_(i),"set-stats-by-key":_(s)},null,8,["bucket-name","stats","set-stats-by-key"]))),128))]),p("div",z,"= "+S(_(a)),1)]))}});const O="d4-calculator",R=e=>Object.keys(e),G=e=>/^\d+$/.test(e),Q=(e,r=!1)=>{try{if(typeof e=="number"||G(e))throw null;return JSON.parse(e)}catch{return null}},X=e=>{const r=window.localStorage.getItem(e);if(r!==null){const t=Q(r);if(t)return t}return R(d).reduce((t,i)=>({...t,[i]:"0"}),{})},$=e=>{const r=X(e),t=b(r),i=c=>{t.value=c,m(),window.localStorage.setItem(e,JSON.stringify(t.value))},s=(c,u)=>{isNaN(+u)||i({...t.value,[c]:u})},a=b("0"),m=()=>{const c=+(t.value[d.WeaponDamage]||0),u=+(t.value[d.MainStat]||0)/10+100,y=h[o.Crit].stats.reduce((n,l)=>l!==d.CriticalStrikeChance?n+ +(t.value[l]||0):n,0)/100*+(t.value[d.CriticalStrikeChance]||0)+100,g=+(t.value[d.OverpowerDamage]||0)/100*+(t.value[d.OverpowerChance]||0)+100,C=+(t.value[d.VulnerabillityDamage]||0)+100,E=h[o.While].stats.reduce((n,l)=>n+ +(t.value[l]||0),0)+100,H=h[o.With].stats.reduce((n,l)=>n+ +(t.value[l]||0),0)+100,I=h[o.From].stats.reduce((n,l)=>n+ +(t.value[l]||0),0)+100,K=h[o.Vs].stats.reduce((n,l)=>n+ +(t.value[l]||0),0)+100,P=h[o.AllDamage].stats.reduce((n,l)=>n+ +(t.value[l]||0),0)+100;a.value=(c*(u/100)*(y/100)*(g/100)*(C/100)*(E/100)*(H/100)*(I/100)*(K/100)*(P/100)).toFixed(2)};return m(),{stats:t,setStats:i,setStatsByKey:s,calculate:m,result:a}},Z={class:"panels-container"},N={class:"diff-container"},ee=A({__name:"index",setup(e,{expose:r}){const t=`${O}::stats`,i=`${O}::stats-compare`,s=[$(t),$(i)],a=w(()=>{const u=+s[0].result.value,g=((+s[1].result.value-u)/(u/100)).toFixed(2);return g.startsWith("-")||g==="0.00"?g:`+${g}`}),m=w(()=>a.value.startsWith("+")?"green":a.value.startsWith("-")?"red":"inherit"),c=()=>{s[1].setStats(s[0].stats.value)};return r({calculators:s,diff:a,diffColor:m}),(u,y)=>{const g=W("v-icon"),C=W("v-btn");return v(),D("div",Z,[f(x,{calculator:s[0]},null,8,["calculator"]),f(C,{variant:"outlined",class:"move-button",onclick:c},{default:j(()=>[f(g,{title:"Move stats from left side",icon:"mdi-arrow-right"})]),_:1}),f(x,{calculator:s[1]},null,8,["calculator"]),p("div",N,[k("Diff: "),p("span",{style:T(`color: ${_(m)};`)},S(_(a)),5),k(" % ")])])}}});const te={class:"root"},ae={__name:"index",setup(e){return(r,t)=>(v(),D("div",te,[f(_(ee))]))}},re=L(ae,[["__scopeId","data-v-3f8cf15d"]]);export{re as default};
