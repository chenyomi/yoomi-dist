import{m as p,u as S,V as u}from"./VOverlay-559319d5.js";import{f as h}from"./VInput-77accd7e.js";import{s as x,az as O,z as T,ax as A,aA as k,c as e,a as w,D as z,e as C,X as d}from"./index-db10600d.js";const I=x({id:String,text:String,...O(p({closeOnBack:!1,location:"end",locationStrategy:"connected",eager:!0,minWidth:0,offset:10,openOnClick:!1,openOnHover:!0,origin:"auto",scrim:!1,scrollStrategy:"reposition",transition:!1}),["absolute","persistent"])},"VTooltip"),B=T()({name:"VTooltip",props:I(),emits:{"update:modelValue":t=>!0},setup(t,v){let{slots:o}=v;const n=A(t,"modelValue"),{scopeId:m}=S(),f=k(),r=e(()=>t.id||`v-tooltip-${f}`),l=w(),g=e(()=>t.location.split(" ").length>1?t.location:t.location+" center"),V=e(()=>t.origin==="auto"||t.origin==="overlap"||t.origin.split(" ").length>1||t.location.split(" ").length>1?t.origin:t.origin+" center"),P=e(()=>t.transition?t.transition:n.value?"scale-transition":"fade-transition"),y=e(()=>d({"aria-describedby":r.value},t.activatorProps));return z(()=>{const b=u.filterProps(t);return C(u,d({ref:l,class:["v-tooltip",t.class],style:t.style,id:r.value},b,{modelValue:n.value,"onUpdate:modelValue":a=>n.value=a,transition:P.value,absolute:!0,location:g.value,origin:V.value,persistent:!0,role:"tooltip",activatorProps:y.value,_disableGlobalStack:!0},m),{activator:o.activator,default:function(){var c;for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return((c=o.default)==null?void 0:c.call(o,...s))??t.text}})}),h({},l)}});export{B as V};