import{a as f,b,q as k,w as i,f as l,e as a,h as c,N as u,t as d,J as _,i as v,o as g,n as y,A as x,d as w}from"./index-db10600d.js";import{V as p}from"./VCard-1b3936c5.js";import{V as B}from"./VContainer-069e6266.js";import"./VAvatar-039e85c6.js";import"./VImg-663304c0.js";/* empty css              */const C={class:"d-flex justify-center py-10 gap-8 align-center h-100 text-center"},$={class:"mt-2"},V={class:"mt-2"},z={__name:"task-type-retrieval",setup(h,{expose:t}){const s=f(-1);return t({submit:()=>new Promise(r=>{r(s.value)})}),(r,e)=>(b(),k(B,null,{default:i(()=>[l("div",C,[a(p,{class:"py-15",width:"160",border:"",color:c(s)===0?"#7986CB":"",onClick:e[0]||(e[0]=()=>{s.value=0})},{default:i(()=>[a(u,{icon:"bx-package",size:"45",rounded:"",variant:"tonal"}),l("div",$,d(r.$t("料箱")),1)]),_:1},8,["color"]),a(p,{class:"py-15",width:"160",border:"",color:c(s)===1?"#7986CB":"",onClick:e[1]||(e[1]=()=>{s.value=1})},{default:i(()=>[a(u,{icon:"bx-layer",size:"45",rounded:""}),l("div",V,d(r.$t("料盘")),1)]),_:1},8,["color"])])]),_:1}))}},L={class:"d-flex justify-center gap-8 align-center h-100 text-center"},N={class:"mt-2"},O={class:"mt-2"},D={class:"mt-2"},M={__name:"task-type",setup(h){const t=f(null),s=_(),m=v("btnList"),r=v("message");return g(()=>{y(()=>{m.value=[{name:"创建",color:"#7986CB",size:"large",width:220,formWidth:600,mark:"是否创建任务？",hideDiaName:!0,before:({dialog:e,openLoading:o,close:n,dialogLoading:j,closeLoading:q,dialogLoadingText:A})=>{switch(t.value){case 0:e.value=!0;break;case 1:e.value=!0;break;case 2:s.push({path:"/process/drawer"});break;default:r.value.open({text:"请选择类型"});break}},slot:x(z),fn:({close:e,diaFormRef:o})=>{switch(t.value){case 0:o.submit().then(n=>{if(n==-1){r.value.open({text:"请选择一项"});return}e(),s.push({path:"/warehousing",query:{type:n?"BOARD":"BOX",process:"IN"}})});break;case 1:o.submit().then(n=>{if(n==-1){r.value.open({text:"请选择一项"});return}e(),s.push({path:"/retrieval",query:{type:n?"BOARD":"BOX",process:"OUT"}})});break}}}]})}),(e,o)=>(b(),w("div",L,[a(p,{class:"py-15",width:"160",border:"",color:c(t)===0?"#7986CB":"",onClick:o[0]||(o[0]=()=>{t.value=0})},{default:i(()=>[a(u,{icon:"bx-package",size:"45",rounded:"",variant:"tonal"}),l("div",N,d(e.$t("入库")),1)]),_:1},8,["color"]),a(p,{class:"py-15",width:"160",border:"",color:c(t)===1?"#7986CB":"",onClick:o[1]||(o[1]=()=>{t.value=1})},{default:i(()=>[a(u,{icon:"bx-link-external",size:"45",rounded:"",variant:"tonal"}),l("div",O,d(e.$t("出库")),1)]),_:1},8,["color"]),a(p,{class:"py-15",width:"160",border:"",color:c(t)===2?"#7986CB":"",onClick:o[2]||(o[2]=()=>{t.value=2})},{default:i(()=>[a(u,{icon:"bx-outline",size:"45",rounded:"",variant:"tonal"}),l("div",D,d(e.$t("加工")),1)]),_:1},8,["color"])]))}};export{M as default};
