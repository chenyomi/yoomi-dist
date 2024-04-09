import{s as p,Y as J,z as O,c as u,D as U,e as l,am as K,an as le,aa as G,aW as H,aV as re,ac as ue,aj as de,aL as ce,aC as fe,af as ve,aq as me,aA as ye,a as B,ad as ge,T as be,a9 as xe,F as Ce,H as Ve,aD as he,R as M,X as N,aG as ke,bx as _e,ax as Ie,aB as Pe,av as Fe,by as Se,n as Z,bz as Be}from"./index-db10600d.js";import{r as Te,c as Re,m as we,u as te,t as Le,n as $e,i as Ae,g as De,s as Ee,a as Me,b as ee,f as Ne}from"./VInput-77accd7e.js";import{m as pe,M as Oe,I as Ue}from"./VImg-663304c0.js";const je=p({active:Boolean,max:[Number,String],value:{type:[Number,String],default:0},...J(),...pe({transition:{component:Te}})},"VCounter"),ze=O()({name:"VCounter",functional:!0,props:je(),setup(e,g){let{slots:a}=g;const h=u(()=>e.max?`${e.value} / ${e.max}`:String(e.value));return U(()=>l(Oe,{transition:e.transition},{default:()=>[K(l("div",{class:["v-counter",e.class],style:e.style},[a.default?a.default({counter:h.value,max:e.max,value:e.value}):h.value]),[[le,e.active]])]})),{}}});const We=p({floating:Boolean,...J()},"VFieldLabel"),E=O()({name:"VFieldLabel",props:We(),setup(e,g){let{slots:a}=g;return U(()=>l(Re,{class:["v-field-label",{"v-field-label--floating":e.floating},e.class],style:e.style,"aria-hidden":e.floating||void 0},a)),{}}}),qe=["underlined","outlined","filled","solo","solo-inverted","solo-filled","plain"],ne=p({appendInnerIcon:G,bgColor:String,clearable:Boolean,clearIcon:{type:G,default:"$clear"},active:Boolean,centerAffix:{type:Boolean,default:void 0},color:String,baseColor:String,dirty:Boolean,disabled:{type:Boolean,default:null},error:Boolean,flat:Boolean,label:String,persistentClear:Boolean,prependInnerIcon:G,reverse:Boolean,singleLine:Boolean,variant:{type:String,default:"filled",validator:e=>qe.includes(e)},"onClick:clear":H(),"onClick:appendInner":H(),"onClick:prependInner":H(),...J(),...re(),...ue(),...de()},"VField"),ae=O()({name:"VField",inheritAttrs:!1,props:{id:String,...we(),...ne()},emits:{"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,g){let{attrs:a,emit:h,slots:t}=g;const{themeClasses:b}=ce(e),{loaderClasses:C}=fe(e),{focusClasses:j,isFocused:T,focus:R,blur:w}=te(e),{InputIcon:k}=Le(e),{roundedClasses:z}=ve(e),{rtlClasses:L}=me(),V=u(()=>e.dirty||e.active),f=u(()=>!e.singleLine&&!!(e.label||t.label)),W=ye(),o=u(()=>e.id||`input-${W}`),q=u(()=>`${o.value}-messages`),$=B(),_=B(),A=B(),n=u(()=>["plain","underlined"].includes(e.variant)),{backgroundColorClasses:d,backgroundColorStyles:c}=ge(be(e,"bgColor")),{textColorClasses:v,textColorStyles:X}=xe(u(()=>e.error||e.disabled?void 0:V.value&&T.value?e.color:e.baseColor));Ce(V,s=>{if(f.value){const i=$.value.$el,m=_.value.$el;requestAnimationFrame(()=>{const y=$e(i),r=m.getBoundingClientRect(),P=r.x-y.x,F=r.y-y.y-(y.height/2-r.height/2),x=r.width/.75,S=Math.abs(x-y.width)>1?{maxWidth:Ve(x)}:void 0,D=getComputedStyle(i),Q=getComputedStyle(m),ie=parseFloat(D.transitionDuration)*1e3||150,oe=parseFloat(Q.getPropertyValue("--v-field-label-scale")),se=Q.getPropertyValue("color");i.style.visibility="visible",m.style.visibility="hidden",Ae(i,{transform:`translate(${P}px, ${F}px) scale(${oe})`,color:se,...S},{duration:ie,easing:Ee,direction:s?"normal":"reverse"}).finished.then(()=>{i.style.removeProperty("visibility"),m.style.removeProperty("visibility")})})}},{flush:"post"});const I=u(()=>({isActive:V,isFocused:T,controlRef:A,blur:w,focus:R}));function Y(s){s.target!==document.activeElement&&s.preventDefault()}return U(()=>{var P,F,x;const s=e.variant==="outlined",i=t["prepend-inner"]||e.prependInnerIcon,m=!!(e.clearable||t.clear),y=!!(t["append-inner"]||e.appendInnerIcon||m),r=()=>t.label?t.label({...I.value,label:e.label,props:{for:o.value}}):e.label;return l("div",N({class:["v-field",{"v-field--active":V.value,"v-field--appended":y,"v-field--center-affix":e.centerAffix??!n.value,"v-field--disabled":e.disabled,"v-field--dirty":e.dirty,"v-field--error":e.error,"v-field--flat":e.flat,"v-field--has-background":!!e.bgColor,"v-field--persistent-clear":e.persistentClear,"v-field--prepended":i,"v-field--reverse":e.reverse,"v-field--single-line":e.singleLine,"v-field--no-label":!r(),[`v-field--variant-${e.variant}`]:!0},b.value,d.value,j.value,C.value,z.value,L.value,e.class],style:[c.value,e.style],onClick:Y},a),[l("div",{class:"v-field__overlay"},null),l(he,{name:"v-field",active:!!e.loading,color:e.error?"error":typeof e.loading=="string"?e.loading:e.color},{default:t.loader}),i&&l("div",{key:"prepend",class:"v-field__prepend-inner"},[e.prependInnerIcon&&l(k,{key:"prepend-icon",name:"prependInner"},null),(P=t["prepend-inner"])==null?void 0:P.call(t,I.value)]),l("div",{class:"v-field__field","data-no-activator":""},[["filled","solo","solo-inverted","solo-filled"].includes(e.variant)&&f.value&&l(E,{key:"floating-label",ref:_,class:[v.value],floating:!0,for:o.value,style:X.value},{default:()=>[r()]}),l(E,{ref:$,for:o.value},{default:()=>[r()]}),(F=t.default)==null?void 0:F.call(t,{...I.value,props:{id:o.value,class:"v-field__input","aria-describedby":q.value},focus:R,blur:w})]),m&&l(De,{key:"clear"},{default:()=>[K(l("div",{class:"v-field__clearable",onMousedown:S=>{S.preventDefault(),S.stopPropagation()}},[t.clear?t.clear():l(k,{name:"clear"},null)]),[[le,e.dirty]])]}),y&&l("div",{key:"append",class:"v-field__append-inner"},[(x=t["append-inner"])==null?void 0:x.call(t,I.value),e.appendInnerIcon&&l(k,{key:"append-icon",name:"appendInner"},null)]),l("div",{class:["v-field__outline",v.value],style:X.value},[s&&l(M,null,[l("div",{class:"v-field__outline__start"},null),f.value&&l("div",{class:"v-field__outline__notch"},[l(E,{ref:_,floating:!0,for:o.value},{default:()=>[r()]})]),l("div",{class:"v-field__outline__end"},null)]),n.value&&f.value&&l(E,{ref:_,floating:!0,for:o.value},{default:()=>[r()]})])])}),{controlRef:A}}});function Xe(e){const g=Object.keys(ae.props).filter(a=>!ke(a)&&a!=="class"&&a!=="style");return _e(e,g)}const Ye=["color","file","time","date","datetime-local","week","month"],Ge=p({autofocus:Boolean,counter:[Boolean,Number,String],counterValue:[Number,Function],prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,suffix:String,role:String,type:{type:String,default:"text"},modelModifiers:Object,...Me(),...ne()},"VTextField"),Qe=O()({name:"VTextField",directives:{Intersect:Ue},inheritAttrs:!1,props:Ge(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,g){let{attrs:a,emit:h,slots:t}=g;const b=Ie(e,"modelValue"),{isFocused:C,focus:j,blur:T}=te(e),R=u(()=>typeof e.counterValue=="function"?e.counterValue(b.value):typeof e.counterValue=="number"?e.counterValue:(b.value??"").toString().length),w=u(()=>{if(a.maxlength)return a.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter}),k=u(()=>["plain","underlined"].includes(e.variant));function z(n,d){var c,v;!e.autofocus||!n||(v=(c=d[0].target)==null?void 0:c.focus)==null||v.call(c)}const L=B(),V=B(),f=B(),W=u(()=>Ye.includes(e.type)||e.persistentPlaceholder||C.value||e.active);function o(){var n;f.value!==document.activeElement&&((n=f.value)==null||n.focus()),C.value||j()}function q(n){h("mousedown:control",n),n.target!==f.value&&(o(),n.preventDefault())}function $(n){o(),h("click:control",n)}function _(n){n.stopPropagation(),o(),Z(()=>{b.value=null,Be(e["onClick:clear"],n)})}function A(n){var c;const d=n.target;if(b.value=d.value,(c=e.modelModifiers)!=null&&c.trim&&["text","search","password","tel","url"].includes(e.type)){const v=[d.selectionStart,d.selectionEnd];Z(()=>{d.selectionStart=v[0],d.selectionEnd=v[1]})}}return U(()=>{const n=!!(t.counter||e.counter!==!1&&e.counter!=null),d=!!(n||t.details),[c,v]=Pe(a),{modelValue:X,...I}=ee.filterProps(e),Y=Xe(e);return l(ee,N({ref:L,modelValue:b.value,"onUpdate:modelValue":s=>b.value=s,class:["v-text-field",{"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-input--plain-underlined":k.value},e.class],style:e.style},c,I,{centerAffix:!k.value,focused:C.value}),{...t,default:s=>{let{id:i,isDisabled:m,isDirty:y,isReadonly:r,isValid:P}=s;return l(ae,N({ref:V,onMousedown:q,onClick:$,"onClick:clear":_,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"],role:e.role},Y,{id:i.value,active:W.value||y.value,dirty:y.value||e.dirty,disabled:m.value,focused:C.value,error:P.value===!1}),{...t,default:F=>{let{props:{class:x,...S}}=F;const D=K(l("input",N({ref:f,value:b.value,onInput:A,autofocus:e.autofocus,readonly:r.value,disabled:m.value,name:e.name,placeholder:e.placeholder,size:1,type:e.type,onFocus:o,onBlur:T},S,v),null),[[Fe("intersect"),{handler:z},null,{once:!0}]]);return l(M,null,[e.prefix&&l("span",{class:"v-text-field__prefix"},[l("span",{class:"v-text-field__prefix__text"},[e.prefix])]),t.default?l("div",{class:x,"data-no-activator":""},[t.default(),D]):Se(D,{class:x}),e.suffix&&l("span",{class:"v-text-field__suffix"},[l("span",{class:"v-text-field__suffix__text"},[e.suffix])])])}})},details:d?s=>{var i;return l(M,null,[(i=t.details)==null?void 0:i.call(t,s),n&&l(M,null,[l("span",null,null),l(ze,{active:e.persistentCounter||C.value,value:R.value,max:w.value},t.counter)])])}:void 0})}),Ne({},L,V,f)}});export{Qe as V,Ge as m};
