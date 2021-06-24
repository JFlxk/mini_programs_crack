function e(e) {
    for (var t = {}, l = e.split(","), a = l.length; a--; ) t[l[a]] = !0;
    return t;
}

var t = wx.canIUse("editor");

module.exports = {
    filter: null,
    highlight: null,
    onText: null,
    entities: {
        quot: '"',
        apos: "'",
        semi: ";",
        nbsp: " ",
        ndash: "–",
        mdash: "—",
        middot: "·",
        lsquo: "‘",
        rsquo: "’",
        ldquo: "“",
        rdquo: "”",
        bull: "•",
        hellip: "…"
    },
    blankChar: e(" , ,\t,\r,\n,\f"),
    inlineTags: e("abbr,b,big,code,del,em,i,ins,label,q,small,span,strong"),
    blockTags: e("address,article,aside,body,caption,center,cite,footer,header,html,nav,section" + (t ? "" : ",pre")),
    ignoreTags: e("area,base,basefont,canvas,command,embed,frame,iframe,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr" + (t ? ",rp" : "")),
    richOnlyTags: e("a,colgroup,fieldset,legend,picture,table" + (t ? ",bdi,bdo,rt,ruby" : "")),
    selfClosingTags: e("area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
    trustAttrs: e("align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"),
    boolAttrs: e("autoplay,controls,ignore,loop,muted"),
    trustTags: e("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video" + (t ? ",bdi,bdo,caption,pre,rt,ruby" : "")),
    userAgentStyles: {
        address: "font-style:italic",
        big: "display:inline;font-size:1.2em",
        blockquote: "background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",
        caption: "display:table-caption;text-align:center",
        center: "text-align:center",
        cite: "font-style:italic",
        dd: "margin-left:40px",
        mark: "background-color:yellow",
        pre: "font-family:monospace;white-space:pre;overflow:scroll",
        s: "text-decoration:line-through",
        small: "display:inline;font-size:0.8em",
        u: "text-decoration:underline"
    }
};