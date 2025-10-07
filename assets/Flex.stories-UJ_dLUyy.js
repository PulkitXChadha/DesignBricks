import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as Pe}from"./index-Dz3UJJSw.js";import{c as Oe}from"./clsx-B-dksMZM.js";import{C as s}from"./Colors-RkvH6IRP.js";import{c as a}from"./colors-DQqI5H06.js";import"./_commonjsHelpers-CqkleIqs.js";function t(r,o){return r===void 0?o:typeof r=="object"&&r!==null?r.base??Object.values(r)[0]??o:r}function i(r){return r===void 0?void 0:typeof r=="string"&&(r==="auto"||r.includes("px")||r.includes("%")||r.includes("fr")||r.includes("rem")||r.includes("em"))?r:{0:"0",px:"1px","0.5":"2px",1:"4px","1.5":"6px",2:"8px","2.5":"10px",3:"12px","3.5":"14px",4:"16px",5:"20px",6:"24px",7:"28px",8:"32px",9:"36px",10:"40px",11:"44px",12:"48px",14:"56px",16:"64px",20:"80px",24:"96px",28:"112px",32:"128px"}[String(r)]||String(r)}const l=Pe.forwardRef(({direction:r="row",wrap:o="nowrap",justifyContent:Fe="flex-start",alignItems:Ce="stretch",alignContent:Ie="stretch",gap:Ve,rowGap:He,columnGap:Re,width:j,height:D,minWidth:S,maxWidth:B,minHeight:F,maxHeight:C,grow:u,shrink:m,basis:I,inline:We=!1,isHidden:Ae,as:Ge="div",children:Ne,className:Le,style:ze,...Ee},Me)=>{const V=t(r,"row"),H=t(o,"nowrap"),R=t(Fe,"flex-start"),W=t(Ce,"stretch"),A=t(Ie,"stretch"),G=t(Ve),N=t(He),L=t(Re),z=t(Ae,!1),$e={...ze,...u!==void 0&&{flexGrow:typeof u=="boolean"?u?1:0:u},...m!==void 0&&{flexShrink:typeof m=="boolean"?m?1:0:m},...I&&{flexBasis:I},...j&&{width:i(t(j))},...D&&{height:i(t(D))},...S&&{minWidth:i(t(S))},...B&&{maxWidth:i(t(B))},...F&&{minHeight:i(t(F))},...C&&{maxHeight:i(t(C))},...z&&{display:"none"}};return z?null:e.jsx(Ge,{ref:Me,className:Oe(We?"db-flex-inline":"db-flex",V&&`db-flex--direction-${V}`,H&&`db-flex--wrap-${H}`,R&&`db-flex--justify-${R.replace("flex-","")}`,W&&`db-flex--align-items-${W.replace("flex-","")}`,A&&`db-flex--align-content-${A.replace("flex-","")}`,{[`db-flex--gap-${G}`]:G,[`db-flex--row-gap-${N}`]:N,[`db-flex--column-gap-${L}`]:L},Le),style:$e,...Ee,children:Ne})});l.displayName="Flex";l.__docgenInfo={description:"",methods:[],displayName:"Flex",props:{direction:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}],required:!1}},{key:"md",value:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'row' | 'column' | 'row-reverse' | 'column-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'column-reverse'"}],required:!1}}]}}]},description:"Flex direction",defaultValue:{value:"'row'",computed:!1}},wrap:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}],required:!1}},{key:"md",value:{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}],required:!1}}]}}]},description:"Flex wrap",defaultValue:{value:"'nowrap'",computed:!1}},justifyContent:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"md",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}}]}}]},description:"Justify content (main axis alignment)",defaultValue:{value:"'flex-start'",computed:!1}},alignItems:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"md",value:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'start' | 'end' | 'center' | 'baseline' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'baseline'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}}]}}]},description:"Align items (cross axis alignment)",defaultValue:{value:"'stretch'",computed:!1}},alignContent:{required:!1,tsType:{name:"union",raw:`T | {
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,elements:[{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1},{name:"signature",type:"object",raw:`{
  base?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  '2xl'?: T;
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"sm",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"md",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"lg",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"xl",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}},{key:"2xl",value:{name:"union",raw:"'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'stretch' | 'flex-start' | 'flex-end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'center'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'flex-start'"},{name:"literal",value:"'flex-end'"}],required:!1}}]}}]},description:"Align content (cross axis alignment for wrapped lines)",defaultValue:{value:"'stretch'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:`T | {
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
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Width of the flex container"},height:{required:!1,tsType:{name:"union",raw:`T | {
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
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Height of the flex container"},minWidth:{required:!1,tsType:{name:"union",raw:`T | {
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
}`,signature:{properties:[{key:"base",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"sm",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"md",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"lg",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}},{key:"2xl",value:{name:"union",raw:"SpacingValue | 'auto' | (string & {})",elements:[{name:"unknown"},{name:"literal",value:"'auto'"},{name:"unknown"}],required:!1}}]}}]},description:"Maximum height"},grow:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"Flex grow"},shrink:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"Flex shrink"},basis:{required:!1,tsType:{name:"string"},description:"Flex basis"},inline:{required:!1,tsType:{name:"boolean"},description:"Inline flex",defaultValue:{value:"false",computed:!1}},isHidden:{required:!1,tsType:{name:"union",raw:`T | {
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
}`,signature:{properties:[{key:"base",value:{name:"boolean",required:!1}},{key:"sm",value:{name:"boolean",required:!1}},{key:"md",value:{name:"boolean",required:!1}},{key:"lg",value:{name:"boolean",required:!1}},{key:"xl",value:{name:"boolean",required:!1}},{key:"2xl",value:{name:"boolean",required:!1}}]}}]},description:"Whether the element is hidden"},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Element type to render",defaultValue:{value:"'div'",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children"},className:{required:!1,tsType:{name:"string"},description:"CSS class name"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},role:{required:!1,tsType:{name:"string"},description:"ARIA role"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA describedby for accessibility"}}};const Ye={title:"Layout/Flex",component:l,parameters:{layout:"centered",docs:{description:{component:"A flexible layout container that uses CSS flexbox. Use it to build vertical or horizontal stacks, simple wrapping grids, and more complex layouts."}}},tags:["autodocs"],argTypes:{direction:{control:"select",options:["row","column","row-reverse","column-reverse"],description:"The flex direction"},wrap:{control:"select",options:["nowrap","wrap","wrap-reverse"],description:"Whether flex items should wrap"},justifyContent:{control:"select",options:["flex-start","flex-end","center","space-between","space-around","space-evenly"],description:"How to align items along the main axis"},alignItems:{control:"select",options:["flex-start","flex-end","center","baseline","stretch"],description:"How to align items along the cross axis"},gap:{control:"select",options:["0","1","2","3","4","5","6","8","10","12","16","20","24"],description:"The gap between items"}}},n=({children:r,...o})=>e.jsx("div",{style:{padding:"16px",backgroundColor:o.color||a.info[100],borderRadius:"4px",minHeight:"60px",height:o.height,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"14px",fontWeight:"500"},children:r}),c={args:{gap:"4",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"})]})}},d={args:{direction:"column",gap:"3",style:{width:"200px"},children:e.jsxs(e.Fragment,{children:[e.jsx(n,{color:a.success[100],children:"Item 1"}),e.jsx(n,{color:a.info[100],children:"Item 2"}),e.jsx(n,{color:a.pink[100],children:"Item 3"})]})}},p={args:{justifyContent:"center",alignItems:"center",style:{height:"200px",width:"300px",border:`2px dashed ${a.neutral[300]}`},children:e.jsx(n,{children:"Centered Item"})}},x={args:{justifyContent:"space-between",alignItems:"center",style:{width:"300px",padding:"16px",border:`2px dashed ${a.neutral[300]}`},children:e.jsxs(e.Fragment,{children:[e.jsx(n,{color:a.success[100],children:"Start"}),e.jsx(n,{color:a.info[100],children:"Middle"}),e.jsx(n,{color:a.pink[100],children:"End"})]})}},g={args:{wrap:"wrap",gap:"2",style:{width:"200px"},children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Item 1"}),e.jsx(n,{children:"Item 2"}),e.jsx(n,{children:"Item 3"}),e.jsx(n,{children:"Item 4"}),e.jsx(n,{children:"Item 5"})]})}},w={args:{gap:"2",style:{width:"400px"},children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"Fixed"}),e.jsx(l,{grow:1,children:e.jsx(n,{color:a.success[100],children:"Grows to fill space"})}),e.jsx(n,{children:"Fixed"})]})}},v={args:{direction:"column",gap:"4",style:{width:"100%",maxWidth:"600px"},children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{justifyContent:"space-between",alignItems:"center",gap:"3",children:[e.jsx(n,{color:a.success[100],children:"Header Left"}),e.jsx(n,{color:a.pink[100],children:"Header Right"})]}),e.jsxs(l,{gap:"4",children:[e.jsxs(l,{direction:"column",gap:"2",style:{flex:1},children:[e.jsx(n,{color:a.info[100],children:"Content 1"}),e.jsx(n,{color:a.info[100],children:"Content 2"})]}),e.jsxs(l,{direction:"column",gap:"2",style:{width:"200px"},children:[e.jsx(n,{color:a.lemon[100],children:"Sidebar 1"}),e.jsx(n,{color:a.lemon[100],children:"Sidebar 2"})]})]})]})}},f={args:{direction:"column",width:"20",gap:"3",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{color:a.success[400],height:"80px",children:"Item 1 (Green)"}),e.jsx(n,{color:a.primary[400],height:"80px",children:"Item 2 (Blue)"}),e.jsx(n,{color:a.warning[400],height:"80px",children:"Item 3 (Orange)"})]})},parameters:{docs:{description:{story:"A vertical stack example using design tokens for consistent spacing and sizing."}}}},h={args:{direction:{base:"column",md:"row"},gap:"4",style:{width:"100%",maxWidth:"800px"},children:e.jsxs(e.Fragment,{children:[e.jsx(n,{color:a.success[100],children:"Item 1"}),e.jsx(n,{color:a.info[100],children:"Item 2"}),e.jsx(n,{color:a.pink[100],children:"Item 3"})]})},parameters:{docs:{description:{story:"Responsive direction that changes from column on mobile to row on medium screens and up."}}}},y={args:{direction:"column",gap:"4",style:{width:"100%",maxWidth:"800px"},children:e.jsxs(e.Fragment,{children:[e.jsxs(l,{justifyContent:"space-between",alignItems:"center",style:{padding:"16px",backgroundColor:a.neutral[100],borderRadius:"8px"},children:[e.jsx(n,{color:a.success[500],style:{width:"120px",height:"40px"},children:"Logo"}),e.jsxs(l,{gap:"3",children:[e.jsx(n,{color:a.indigo[400],style:{width:"80px",height:"40px"},children:"Nav 1"}),e.jsx(n,{color:a.purple[400],style:{width:"80px",height:"40px"},children:"Nav 2"}),e.jsx(n,{color:a.warning[400],style:{width:"80px",height:"40px"},children:"Nav 3"})]})]}),e.jsxs(l,{gap:"4",children:[e.jsxs(l,{direction:"column",gap:"3",grow:1,children:[e.jsx(n,{color:a.error[400],height:"120px",children:"Main Content"}),e.jsxs(l,{gap:"2",children:[e.jsx(n,{color:a.coral[400],height:"80px",style:{flex:1},children:"Sub Item 1"}),e.jsx(n,{color:a.lemon[400],height:"80px",style:{flex:1},children:"Sub Item 2"})]})]}),e.jsxs(l,{direction:"column",gap:"2",style:{width:"200px"},children:[e.jsx(n,{color:a.turquoise[400],height:"60px",children:"Sidebar 1"}),e.jsx(n,{color:a.turquoise[500],height:"60px",children:"Sidebar 2"}),e.jsx(n,{color:a.turquoise[600],height:"60px",children:"Sidebar 3"})]})]})]})},parameters:{docs:{description:{story:"Complex nested layout demonstrating how Flex components can be combined to create sophisticated application layouts."}}}},k={args:{direction:"column",gap:{base:"2",md:"4",lg:"6"},style:{width:"100%",maxWidth:"600px"},children:e.jsxs(e.Fragment,{children:[e.jsx(n,{color:a.error[400],children:"Gap scales with screen size"}),e.jsx(n,{color:a.lemon[400],children:"Small gap on mobile"}),e.jsx(n,{color:a.success[400],children:"Medium gap on tablet"}),e.jsx(n,{color:a.primary[400],children:"Large gap on desktop"})]})},parameters:{docs:{description:{story:"Responsive gaps that adapt to different screen sizes - resize the browser to see the effect."}}}},T={args:{direction:"column",gap:"6",style:{width:"100%",maxWidth:"800px"},children:e.jsxs(e.Fragment,{children:[e.jsx(s,{category:"primary",showHex:!0}),e.jsx(s,{category:"success",showHex:!0}),e.jsx(s,{category:"warning",showHex:!0})]})},parameters:{layout:"padded",docs:{description:{story:"Demonstrates using the Colors component within Flex layouts to display multiple color palettes vertically."}}}},b={render:()=>e.jsxs(l,{direction:"column",gap:"4",style:{width:"100%",maxWidth:"1200px"},children:[e.jsxs(l,{gap:"4",wrap:"wrap",children:[e.jsx(l,{direction:"column",style:{flex:"1 1 300px"},children:e.jsx(s,{category:"primary",showHex:!1})}),e.jsx(l,{direction:"column",style:{flex:"1 1 300px"},children:e.jsx(s,{category:"secondary",showHex:!1})})]}),e.jsxs(l,{gap:"4",wrap:"wrap",children:[e.jsx(l,{direction:"column",style:{flex:"1 1 300px"},children:e.jsx(s,{category:"success",showHex:!1})}),e.jsx(l,{direction:"column",style:{flex:"1 1 300px"},children:e.jsx(s,{category:"error",showHex:!1})})]})]}),parameters:{layout:"padded",docs:{description:{story:"A responsive grid layout using Flex to display color palettes in a 2-column layout that wraps on smaller screens."}}}},q={render:()=>e.jsxs(l,{direction:"column",gap:"8",style:{width:"100%"},children:[e.jsxs(l,{direction:"column",gap:"4",style:{padding:"24px",backgroundColor:a.neutral[50],borderRadius:"8px"},children:[e.jsx("h2",{style:{margin:0,color:a.neutral[700]},children:"Primary Colors"}),e.jsx(s,{category:"primary",showHex:!0})]}),e.jsxs(l,{gap:"4",wrap:"wrap",children:[e.jsxs(l,{direction:"column",gap:"3",style:{flex:"1 1 350px",padding:"20px",backgroundColor:a.success[100],borderRadius:"8px"},children:[e.jsx("h3",{style:{margin:0,color:a.success[700]},children:"Success"}),e.jsx(s,{category:"success",showHex:!0})]}),e.jsxs(l,{direction:"column",gap:"3",style:{flex:"1 1 350px",padding:"20px",backgroundColor:a.warning[100],borderRadius:"8px"},children:[e.jsx("h3",{style:{margin:0,color:a.warning[700]},children:"Warning"}),e.jsx(s,{category:"warning",showHex:!0})]}),e.jsxs(l,{direction:"column",gap:"3",style:{flex:"1 1 350px",padding:"20px",backgroundColor:a.error[100],borderRadius:"8px"},children:[e.jsx("h3",{style:{margin:0,color:a.error[700]},children:"Error"}),e.jsx(s,{category:"error",showHex:!0})]})]}),e.jsxs(l,{direction:"column",gap:"4",style:{padding:"24px",backgroundColor:a.neutral[700],borderRadius:"8px"},children:[e.jsx("h2",{style:{margin:0,color:a.neutral[0]},children:"Secondary Accent Colors"}),e.jsxs(l,{gap:"4",wrap:"wrap",children:[e.jsx(s,{category:"purple",showHex:!1}),e.jsx(s,{category:"pink",showHex:!1}),e.jsx(s,{category:"teal",showHex:!1}),e.jsx(s,{category:"turquoise",showHex:!1})]})]})]}),parameters:{layout:"padded",docs:{description:{story:"A comprehensive showcase of the design system using Flex for complex layouts with multiple color palettes organized in different sections."}}}};var E,M,$;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    gap: '4',
    children: <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
      </>
  }
}`,...($=(M=c.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var P,O,_;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: '3',
    style: {
      width: '200px'
    },
    children: <>
        <DemoBox color={colors.success[100]}>Item 1</DemoBox>
        <DemoBox color={colors.info[100]}>Item 2</DemoBox>
        <DemoBox color={colors.pink[100]}>Item 3</DemoBox>
      </>
  }
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var J,U,K;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    justifyContent: 'center',
    alignItems: 'center',
    style: {
      height: '200px',
      width: '300px',
      border: \`2px dashed \${colors.neutral[300]}\`
    },
    children: <DemoBox>Centered Item</DemoBox>
  }
}`,...(K=(U=p.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var Q,X,Y;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    justifyContent: 'space-between',
    alignItems: 'center',
    style: {
      width: '300px',
      padding: '16px',
      border: \`2px dashed \${colors.neutral[300]}\`
    },
    children: <>
        <DemoBox color={colors.success[100]}>Start</DemoBox>
        <DemoBox color={colors.info[100]}>Middle</DemoBox>
        <DemoBox color={colors.pink[100]}>End</DemoBox>
      </>
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    wrap: 'wrap',
    gap: '2',
    style: {
      width: '200px'
    },
    children: <>
        <DemoBox>Item 1</DemoBox>
        <DemoBox>Item 2</DemoBox>
        <DemoBox>Item 3</DemoBox>
        <DemoBox>Item 4</DemoBox>
        <DemoBox>Item 5</DemoBox>
      </>
  }
}`,...(ae=(ee=g.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,le,re;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    gap: '2',
    style: {
      width: '400px'
    },
    children: <>
        <DemoBox>Fixed</DemoBox>
        <Flex grow={1}>
          <DemoBox color={colors.success[100]}>Grows to fill space</DemoBox>
        </Flex>
        <DemoBox>Fixed</DemoBox>
      </>
  }
}`,...(re=(le=w.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var te,se,oe;v.parameters={...v.parameters,docs:{...(te=v.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: '4',
    style: {
      width: '100%',
      maxWidth: '600px'
    },
    children: <>
        <Flex justifyContent="space-between" alignItems="center" gap="3">
          <DemoBox color={colors.success[100]}>Header Left</DemoBox>
          <DemoBox color={colors.pink[100]}>Header Right</DemoBox>
        </Flex>
        <Flex gap="4">
          <Flex direction="column" gap="2" style={{
          flex: 1
        }}>
            <DemoBox color={colors.info[100]}>Content 1</DemoBox>
            <DemoBox color={colors.info[100]}>Content 2</DemoBox>
          </Flex>
          <Flex direction="column" gap="2" style={{
          width: '200px'
        }}>
            <DemoBox color={colors.lemon[100]}>Sidebar 1</DemoBox>
            <DemoBox color={colors.lemon[100]}>Sidebar 2</DemoBox>
          </Flex>
        </Flex>
      </>
  }
}`,...(oe=(se=v.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,ue,me;f.parameters={...f.parameters,docs:{...(ie=f.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    width: '20',
    gap: '3',
    children: <>
        <DemoBox color={colors.success[400]} height="80px">Item 1 (Green)</DemoBox>
        <DemoBox color={colors.primary[400]} height="80px">Item 2 (Blue)</DemoBox>
        <DemoBox color={colors.warning[400]} height="80px">Item 3 (Orange)</DemoBox>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'A vertical stack example using design tokens for consistent spacing and sizing.'
      }
    }
  }
}`,...(me=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var ce,de,pe;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    direction: {
      base: 'column',
      md: 'row'
    },
    gap: '4',
    style: {
      width: '100%',
      maxWidth: '800px'
    },
    children: <>
        <DemoBox color={colors.success[100]}>Item 1</DemoBox>
        <DemoBox color={colors.info[100]}>Item 2</DemoBox>
        <DemoBox color={colors.pink[100]}>Item 3</DemoBox>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive direction that changes from column on mobile to row on medium screens and up.'
      }
    }
  }
}`,...(pe=(de=h.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var xe,ge,we;y.parameters={...y.parameters,docs:{...(xe=y.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: '4',
    style: {
      width: '100%',
      maxWidth: '800px'
    },
    children: <>
        <Flex justifyContent="space-between" alignItems="center" style={{
        padding: '16px',
        backgroundColor: colors.neutral[100],
        borderRadius: '8px'
      }}>
          <DemoBox color={colors.success[500]} style={{
          width: '120px',
          height: '40px'
        }}>Logo</DemoBox>
          <Flex gap="3">
            <DemoBox color={colors.indigo[400]} style={{
            width: '80px',
            height: '40px'
          }}>Nav 1</DemoBox>
            <DemoBox color={colors.purple[400]} style={{
            width: '80px',
            height: '40px'
          }}>Nav 2</DemoBox>
            <DemoBox color={colors.warning[400]} style={{
            width: '80px',
            height: '40px'
          }}>Nav 3</DemoBox>
          </Flex>
        </Flex>
        <Flex gap="4">
          <Flex direction="column" gap="3" grow={1}>
            <DemoBox color={colors.error[400]} height="120px">Main Content</DemoBox>
            <Flex gap="2">
              <DemoBox color={colors.coral[400]} height="80px" style={{
              flex: 1
            }}>Sub Item 1</DemoBox>
              <DemoBox color={colors.lemon[400]} height="80px" style={{
              flex: 1
            }}>Sub Item 2</DemoBox>
            </Flex>
          </Flex>
          <Flex direction="column" gap="2" style={{
          width: '200px'
        }}>
            <DemoBox color={colors.turquoise[400]} height="60px">Sidebar 1</DemoBox>
            <DemoBox color={colors.turquoise[500]} height="60px">Sidebar 2</DemoBox>
            <DemoBox color={colors.turquoise[600]} height="60px">Sidebar 3</DemoBox>
          </Flex>
        </Flex>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Complex nested layout demonstrating how Flex components can be combined to create sophisticated application layouts.'
      }
    }
  }
}`,...(we=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:we.source}}};var ve,fe,he;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: {
      base: '2',
      md: '4',
      lg: '6'
    },
    style: {
      width: '100%',
      maxWidth: '600px'
    },
    children: <>
        <DemoBox color={colors.error[400]}>Gap scales with screen size</DemoBox>
        <DemoBox color={colors.lemon[400]}>Small gap on mobile</DemoBox>
        <DemoBox color={colors.success[400]}>Medium gap on tablet</DemoBox>
        <DemoBox color={colors.primary[400]}>Large gap on desktop</DemoBox>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive gaps that adapt to different screen sizes - resize the browser to see the effect.'
      }
    }
  }
}`,...(he=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ye,ke,Te;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: '6',
    style: {
      width: '100%',
      maxWidth: '800px'
    },
    children: <>
        <Colors category="primary" showHex={true} />
        <Colors category="success" showHex={true} />
        <Colors category="warning" showHex={true} />
      </>
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Demonstrates using the Colors component within Flex layouts to display multiple color palettes vertically.'
      }
    }
  }
}`,...(Te=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};var be,qe,je;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="4" style={{
    width: '100%',
    maxWidth: '1200px'
  }}>
      <Flex gap="4" wrap="wrap">
        <Flex direction="column" style={{
        flex: '1 1 300px'
      }}>
          <Colors category="primary" showHex={false} />
        </Flex>
        <Flex direction="column" style={{
        flex: '1 1 300px'
      }}>
          <Colors category="secondary" showHex={false} />
        </Flex>
      </Flex>
      <Flex gap="4" wrap="wrap">
        <Flex direction="column" style={{
        flex: '1 1 300px'
      }}>
          <Colors category="success" showHex={false} />
        </Flex>
        <Flex direction="column" style={{
        flex: '1 1 300px'
      }}>
          <Colors category="error" showHex={false} />
        </Flex>
      </Flex>
    </Flex>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A responsive grid layout using Flex to display color palettes in a 2-column layout that wraps on smaller screens.'
      }
    }
  }
}`,...(je=(qe=b.parameters)==null?void 0:qe.docs)==null?void 0:je.source}}};var De,Se,Be;q.parameters={...q.parameters,docs:{...(De=q.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => <Flex direction="column" gap="8" style={{
    width: '100%'
  }}>
      <Flex direction="column" gap="4" style={{
      padding: '24px',
      backgroundColor: colors.neutral[50],
      borderRadius: '8px'
    }}>
        <h2 style={{
        margin: 0,
        color: colors.neutral[700]
      }}>Primary Colors</h2>
        <Colors category="primary" showHex={true} />
      </Flex>
      
      <Flex gap="4" wrap="wrap">
        <Flex direction="column" gap="3" style={{
        flex: '1 1 350px',
        padding: '20px',
        backgroundColor: colors.success[100],
        borderRadius: '8px'
      }}>
          <h3 style={{
          margin: 0,
          color: colors.success[700]
        }}>Success</h3>
          <Colors category="success" showHex={true} />
        </Flex>
        
        <Flex direction="column" gap="3" style={{
        flex: '1 1 350px',
        padding: '20px',
        backgroundColor: colors.warning[100],
        borderRadius: '8px'
      }}>
          <h3 style={{
          margin: 0,
          color: colors.warning[700]
        }}>Warning</h3>
          <Colors category="warning" showHex={true} />
        </Flex>
        
        <Flex direction="column" gap="3" style={{
        flex: '1 1 350px',
        padding: '20px',
        backgroundColor: colors.error[100],
        borderRadius: '8px'
      }}>
          <h3 style={{
          margin: 0,
          color: colors.error[700]
        }}>Error</h3>
          <Colors category="error" showHex={true} />
        </Flex>
      </Flex>
      
      <Flex direction="column" gap="4" style={{
      padding: '24px',
      backgroundColor: colors.neutral[700],
      borderRadius: '8px'
    }}>
        <h2 style={{
        margin: 0,
        color: colors.neutral[0]
      }}>Secondary Accent Colors</h2>
        <Flex gap="4" wrap="wrap">
          <Colors category="purple" showHex={false} />
          <Colors category="pink" showHex={false} />
          <Colors category="teal" showHex={false} />
          <Colors category="turquoise" showHex={false} />
        </Flex>
      </Flex>
    </Flex>,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A comprehensive showcase of the design system using Flex for complex layouts with multiple color palettes organized in different sections.'
      }
    }
  }
}`,...(Be=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:Be.source}}};const Ze=["Default","ColumnLayout","CenteredContent","SpaceBetween","WrappingItems","FlexGrowExample","ResponsiveLayout","VerticalStack","ResponsiveDirection","NestedFlexLayouts","ResponsiveGaps","WithColorPalette","ColorPaletteGrid","DesignSystemShowcase"];export{p as CenteredContent,b as ColorPaletteGrid,d as ColumnLayout,c as Default,q as DesignSystemShowcase,w as FlexGrowExample,y as NestedFlexLayouts,h as ResponsiveDirection,k as ResponsiveGaps,v as ResponsiveLayout,x as SpaceBetween,f as VerticalStack,T as WithColorPalette,g as WrappingItems,Ze as __namedExportsOrder,Ye as default};
