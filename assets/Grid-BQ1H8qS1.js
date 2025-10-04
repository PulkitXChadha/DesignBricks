import{j as E}from"./jsx-runtime-LnmZrwv1.js";import{r as H}from"./index-CWnxZbJP.js";import{c as M}from"./clsx-B-dksMZM.js";function n(e,r){return e===void 0?r:typeof e=="object"&&e!==null&&!Array.isArray(e)?e.base??Object.values(e)[0]??r:e}function l(e){return e===void 0?void 0:typeof e=="string"&&(e==="auto"||e.includes("px")||e.includes("%")||e.includes("fr")||e.includes("rem")||e.includes("em"))?e:{0:"0",px:"1px","0.5":"2px",1:"4px","1.5":"6px",2:"8px","2.5":"10px",3:"12px","3.5":"14px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",11:"44px",12:"48px",14:"56px",16:"64px",20:"80px",24:"96px",28:"112px",32:"128px"}[String(e)]||String(e)}const $=H.forwardRef(({areas:e,columns:r,rows:c,gap:T,rowGap:k,columnGap:y,width:t,height:u,minWidth:s,maxWidth:m,minHeight:o,maxHeight:d,autoFlow:g,autoColumns:p,autoRows:w,justifyItems:f="stretch",alignItems:v="stretch",justifyContent:q,alignContent:x,inline:S=!1,isHidden:V,as:h="div",children:b,className:a,style:P,..._},J)=>{const A=n(e),R=n(r),j=n(c),G=n(T),I=n(k),C=n(y),N=n(V,!1),i={...P,...t&&{width:l(n(t))},...u&&{height:l(n(u))},...s&&{minWidth:l(n(s))},...m&&{maxWidth:l(n(m))},...o&&{minHeight:l(n(o))},...d&&{maxHeight:l(n(d))},...N&&{display:"none"}};return A&&(i.gridTemplateAreas=A.map(z=>`"${z}"`).join(" ")),R&&(i.gridTemplateColumns=R.join(" ")),j&&(i.gridTemplateRows=j.join(" ")),g&&(i.gridAutoFlow=g),p&&(i.gridAutoColumns=p),w&&(i.gridAutoRows=w),N?null:E.jsx(h,{ref:J,className:M(S?"db-grid-inline":"db-grid",{[`db-grid--gap-${G}`]:G,[`db-grid--row-gap-${I}`]:I,[`db-grid--column-gap-${C}`]:C,[`db-grid--justify-items-${f}`]:f!=="stretch",[`db-grid--align-items-${v}`]:v!=="stretch",[`db-grid--justify-content-${q}`]:q,[`db-grid--align-content-${x}`]:x},a),style:i,..._,children:b})});$.displayName="Grid";const W=H.forwardRef(({gridArea:e,colStart:r,colEnd:c,rowStart:T,rowEnd:k,colSpan:y,rowSpan:t,width:u,height:s,minWidth:m,maxWidth:o,minHeight:d,maxHeight:g,justifySelf:p,alignSelf:w,isHidden:f,as:v="div",children:q,className:x,style:S,...V},h)=>{const b=n(f,!1),a={...S,...u&&{width:l(n(u))},...s&&{height:l(n(s))},...m&&{minWidth:l(n(m))},...o&&{maxWidth:l(n(o))},...d&&{minHeight:l(n(d))},...g&&{maxHeight:l(n(g))},...b&&{display:"none"}};return e&&(a.gridArea=e),r&&(a.gridColumnStart=r),c&&(a.gridColumnEnd=c),T&&(a.gridRowStart=T),k&&(a.gridRowEnd=k),y&&(a.gridColumn=`span ${y}`),t&&(a.gridRow=`span ${t}`),p&&(a.justifySelf=p),w&&(a.alignSelf=w),b?null:E.jsx(v,{ref:h,className:M("db-grid-item",x),style:a,...V,children:q})});W.displayName="GridItem";$.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{areas:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sm",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"md",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"lg",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"xl",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"2xl",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}]},description:"Grid template areas definition"},columns:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sm",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"md",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"lg",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"xl",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"2xl",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}]},description:"Grid template columns"},rows:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"sm",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"md",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"lg",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"xl",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}},{key:"2xl",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!1}}]}}]},description:"Grid template rows"},gap:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"import('../../tokens/spacing').spacing"},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"sm",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"md",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"lg",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"xl",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"2xl",value:{name:"import('../../tokens/spacing').spacing",required:!1}}]}}]},description:"Gap between items"},rowGap:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"import('../../tokens/spacing').spacing"},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"sm",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"md",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"lg",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"xl",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"2xl",value:{name:"import('../../tokens/spacing').spacing",required:!1}}]}}]},description:"Row gap between items"},columnGap:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"import('../../tokens/spacing').spacing"},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"sm",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"md",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"lg",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"xl",value:{name:"import('../../tokens/spacing').spacing",required:!1}},{key:"2xl",value:{name:"import('../../tokens/spacing').spacing",required:!1}}]}}]},description:"Column gap between items"},width:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Width of the grid container"},height:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Height of the grid container"},minWidth:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Minimum width"},maxWidth:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Maximum width"},minHeight:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Minimum height"},maxHeight:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Maximum height"},autoFlow:{required:!1,tsType:{name:"union",raw:"'row' | 'column' | 'dense' | 'row dense' | 'column dense'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'dense'"},{name:"literal",value:"'row dense'"},{name:"literal",value:"'column dense'"}]},description:"Auto flow direction"},autoColumns:{required:!1,tsType:{name:"string"},description:"Auto columns sizing"},autoRows:{required:!1,tsType:{name:"string"},description:"Auto rows sizing"},justifyItems:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"}]},description:"Justify items",defaultValue:{value:"'stretch'",computed:!1}},alignItems:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"}]},description:"Align items",defaultValue:{value:"'stretch'",computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-evenly'"}]},description:"Justify content"},alignContent:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'stretch' | 'space-around' | 'space-between' | 'space-evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-evenly'"}]},description:"Align content"},inline:{required:!1,tsType:{name:"boolean"},description:"Inline grid",defaultValue:{value:"false",computed:!1}},isHidden:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"boolean",required:!1}},{key:"sm",value:{name:"boolean",required:!1}},{key:"md",value:{name:"boolean",required:!1}},{key:"lg",value:{name:"boolean",required:!1}},{key:"xl",value:{name:"boolean",required:!1}},{key:"2xl",value:{name:"boolean",required:!1}}]}}]},description:"Whether the element is hidden"},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Element type to render",defaultValue:{value:"'div'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children"},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},role:{required:!1,tsType:{name:"string"},description:"ARIA role"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA describedby for accessibility"}}};W.__docgenInfo={description:"",methods:[],displayName:"GridItem",props:{gridArea:{required:!1,tsType:{name:"string"},description:"Grid area name"},colStart:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Grid column start"},colEnd:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Grid column end"},rowStart:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Grid row start"},rowEnd:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Grid row end"},colSpan:{required:!1,tsType:{name:"number"},description:"Grid column span"},rowSpan:{required:!1,tsType:{name:"number"},description:"Grid row span"},width:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Width of the grid item"},height:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Height of the grid item"},minWidth:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Minimum width"},maxWidth:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Maximum width"},minHeight:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Minimum height"},maxHeight:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Maximum height"},justifySelf:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"}]},description:"Justify self"},alignSelf:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'center' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'stretch'"}]},description:"Align self"},isHidden:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"boolean"},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"boolean",required:!1}},{key:"sm",value:{name:"boolean",required:!1}},{key:"md",value:{name:"boolean",required:!1}},{key:"lg",value:{name:"boolean",required:!1}},{key:"xl",value:{name:"boolean",required:!1}},{key:"2xl",value:{name:"boolean",required:!1}}]}}]},description:"Whether the element is hidden"},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Element type to render",defaultValue:{value:"'div'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children"},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},role:{required:!1,tsType:{name:"string"},description:"ARIA role"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA describedby for accessibility"}}};export{$ as G,W as a};
