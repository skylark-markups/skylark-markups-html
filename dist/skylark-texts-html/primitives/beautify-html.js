/**
 * skylark-texts-html - The html features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-texts-css/beautify","skylark-texts-javascript/beautify"],function(t,e){function n(t){return t.replace(/\s+$/g,"")}return{html_beautify:function(i,s){return function(t,e,i,s){var h,r,a,_,o,p,u,l,c,g,d;for(void 0!==(e=e||{}).wrap_line_length&&0!==parseInt(e.wrap_line_length,10)||void 0===e.max_char||0===parseInt(e.max_char,10)||(e.wrap_line_length=e.max_char),r=void 0!==e.indent_inner_html&&e.indent_inner_html,a=void 0===e.indent_size?4:parseInt(e.indent_size,10),_=void 0===e.indent_char?" ":e.indent_char,p=void 0===e.brace_style?"collapse":e.brace_style,o=0===parseInt(e.wrap_line_length,10)?32786:parseInt(e.wrap_line_length||250,10),u=e.unformatted||["a","span","img","bdo","em","strong","dfn","code","samp","kbd","var","cite","abbr","acronym","q","sub","sup","tt","i","b","big","small","u","s","strike","font","ins","del","pre","address","dt","h1","h2","h3","h4","h5","h6"],l=void 0===e.preserve_newlines||e.preserve_newlines,c=l?isNaN(parseInt(e.max_preserve_newlines,10))?32786:parseInt(e.max_preserve_newlines,10):0,g=void 0!==e.indent_handlebars&&e.indent_handlebars,d=void 0!==e.end_with_newline&&e.end_with_newline,(h=new function(){return this.pos=0,this.token="",this.current_mode="CONTENT",this.tags={parent:"parent1",parentcount:1,parent1:""},this.tag_type="",this.token_text=this.last_token=this.last_text=this.token_type="",this.newlines=0,this.indent_content=r,this.Utils={whitespace:"\n\r\t ".split(""),single_token:"br,input,link,meta,!doctype,basefont,base,area,hr,wbr,param,img,isindex,?xml,embed,?php,?,?=".split(","),extra_liners:"head,body,/html".split(","),in_array:function(t,e){for(var n=0;n<e.length;n++)if(t===e[n])return!0;return!1}},this.is_whitespace=function(t){for(;0<t.length;t++)if(!this.Utils.in_array(t.charAt(0),this.Utils.whitespace))return!1;return!0},this.traverse_whitespace=function(){var t="";if(t=this.input.charAt(this.pos),this.Utils.in_array(t,this.Utils.whitespace)){for(this.newlines=0;this.Utils.in_array(t,this.Utils.whitespace);)l&&"\n"===t&&this.newlines<=c&&(this.newlines+=1),this.pos++,t=this.input.charAt(this.pos);return!0}return!1},this.space_or_wrap=function(t){this.line_char_count>=this.wrap_line_length?(this.print_newline(!1,t),this.print_indentation(t)):(this.line_char_count++,t.push(" "))},this.get_content=function(){for(var t="",e=[];"<"!==this.input.charAt(this.pos);){if(this.pos>=this.input.length)return e.length?e.join(""):["","TK_EOF"];if(this.traverse_whitespace())this.space_or_wrap(e);else{if(g){var n=this.input.substr(this.pos,3);if("{{#"===n||"{{/"===n)break;if("{{"===this.input.substr(this.pos,2)&&"{{else}}"===this.get_tag(!0))break}t=this.input.charAt(this.pos),this.pos++,this.line_char_count++,e.push(t)}}return e.length?e.join(""):""},this.get_contents_to=function(t){if(this.pos===this.input.length)return["","TK_EOF"];var e="",n=new RegExp("</"+t+"\\s*>","igm");n.lastIndex=this.pos;var i=n.exec(this.input),s=i?i.index:this.input.length;return this.pos<s&&(e=this.input.substring(this.pos,s),this.pos=s),e},this.record_tag=function(t){this.tags[t+"count"]?(this.tags[t+"count"]++,this.tags[t+this.tags[t+"count"]]=this.indent_level):(this.tags[t+"count"]=1,this.tags[t+this.tags[t+"count"]]=this.indent_level),this.tags[t+this.tags[t+"count"]+"parent"]=this.tags.parent,this.tags.parent=t+this.tags[t+"count"]},this.retrieve_tag=function(t){if(this.tags[t+"count"]){for(var e=this.tags.parent;e&&t+this.tags[t+"count"]!==e;)e=this.tags[e+"parent"];e&&(this.indent_level=this.tags[t+this.tags[t+"count"]],this.tags.parent=this.tags[e+"parent"]),delete this.tags[t+this.tags[t+"count"]+"parent"],delete this.tags[t+this.tags[t+"count"]],1===this.tags[t+"count"]?delete this.tags[t+"count"]:this.tags[t+"count"]--}},this.indent_to_tag=function(t){if(this.tags[t+"count"]){for(var e=this.tags.parent;e&&t+this.tags[t+"count"]!==e;)e=this.tags[e+"parent"];e&&(this.indent_level=this.tags[t+this.tags[t+"count"]])}},this.get_tag=function(t){var e,n,i="",s=[],h="",r=!1,a=this.pos,_=this.line_char_count;t=void 0!==t&&t;do{if(this.pos>=this.input.length)return t&&(this.pos=a,this.line_char_count=_),s.length?s.join(""):["","TK_EOF"];if(i=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(i,this.Utils.whitespace))r=!0;else{if("'"!==i&&'"'!==i||(i+=this.get_unformatted(i),r=!0),"="===i&&(r=!1),s.length&&"="!==s[s.length-1]&&">"!==i&&r&&(this.space_or_wrap(s),r=!1),g&&"<"===n&&i+this.input.charAt(this.pos)==="{{"&&(i+=this.get_unformatted("}}"),s.length&&" "!==s[s.length-1]&&"<"!==s[s.length-1]&&(i=" "+i),r=!0),"<"!==i||n||(e=this.pos-1,n="<"),g&&!n&&s.length>=2&&"{"===s[s.length-1]&&"{"==s[s.length-2]&&(e="#"===i||"/"===i?this.pos-3:this.pos-2,n="{"),this.line_char_count++,s.push(i),s[1]&&"!"===s[1]){s=[this.get_comment(e)];break}if(g&&"{"===n&&s.length>2&&"}"===s[s.length-2]&&"}"===s[s.length-1])break}}while(">"!==i);var o,p,l=s.join("");o=-1!==l.indexOf(" ")?l.indexOf(" "):"{"===l[0]?l.indexOf("}"):l.indexOf(">"),p="<"!==l[0]&&g?"#"===l[2]?3:2:1;var c=l.substring(p,o).toLowerCase();return"/"===l.charAt(l.length-2)||this.Utils.in_array(c,this.Utils.single_token)?t||(this.tag_type="SINGLE"):g&&"{"===l[0]&&"else"===c?t||(this.indent_to_tag("if"),this.tag_type="HANDLEBARS_ELSE",this.indent_content=!0,this.traverse_whitespace()):this.is_unformatted(c,u)?(h=this.get_unformatted("</"+c+">",l),s.push(h),this.pos,this.tag_type="SINGLE"):"script"===c&&(-1===l.search("type")||l.search("type")>-1&&l.search(/\b(text|application)\/(x-)?(javascript|ecmascript|jscript|livescript)/)>-1)?t||(this.record_tag(c),this.tag_type="SCRIPT"):"style"===c&&(-1===l.search("type")||l.search("type")>-1&&l.search("text/css")>-1)?t||(this.record_tag(c),this.tag_type="STYLE"):"!"===c.charAt(0)?t||(this.tag_type="SINGLE",this.traverse_whitespace()):t||("/"===c.charAt(0)?(this.retrieve_tag(c.substring(1)),this.tag_type="END"):(this.record_tag(c),"html"!==c.toLowerCase()&&(this.indent_content=!0),this.tag_type="START"),this.traverse_whitespace()&&this.space_or_wrap(s),this.Utils.in_array(c,this.Utils.extra_liners)&&(this.print_newline(!1,this.output),this.output.length&&"\n"!==this.output[this.output.length-2]&&this.print_newline(!0,this.output))),t&&(this.pos=a,this.line_char_count=_),s.join("")},this.get_comment=function(t){var e="",n=">",i=!1;for(this.pos=t,input_char=this.input.charAt(this.pos),this.pos++;this.pos<=this.input.length&&((e+=input_char)[e.length-1]!==n[n.length-1]||-1===e.indexOf(n));)!i&&e.length<10&&(0===e.indexOf("<![if")?(n="<![endif]>",i=!0):0===e.indexOf("<![cdata[")?(n="]]>",i=!0):0===e.indexOf("<![")?(n="]>",i=!0):0===e.indexOf("\x3c!--")&&(n="--\x3e",i=!0)),input_char=this.input.charAt(this.pos),this.pos++;return e},this.get_unformatted=function(t,e){if(e&&-1!==e.toLowerCase().indexOf(t))return"";var n="",i="",s=0,h=!0;do{if(this.pos>=this.input.length)return i;if(n=this.input.charAt(this.pos),this.pos++,this.Utils.in_array(n,this.Utils.whitespace)){if(!h){this.line_char_count--;continue}if("\n"===n||"\r"===n){i+="\n",this.line_char_count=0;continue}}i+=n,this.line_char_count++,h=!0,g&&"{"===n&&i.length&&"{"===i[i.length-2]&&(s=(i+=this.get_unformatted("}}")).length)}while(-1===i.toLowerCase().indexOf(t,s));return i},this.get_token=function(){var t;if("TK_TAG_SCRIPT"===this.last_token||"TK_TAG_STYLE"===this.last_token){var e=this.last_token.substr(7);return"string"!=typeof(t=this.get_contents_to(e))?t:[t,"TK_"+e]}return"CONTENT"===this.current_mode?"string"!=typeof(t=this.get_content())?t:[t,"TK_CONTENT"]:"TAG"===this.current_mode?"string"!=typeof(t=this.get_tag())?t:[t,"TK_TAG_"+this.tag_type]:void 0},this.get_full_indent=function(t){return(t=this.indent_level+t||0)<1?"":Array(t+1).join(this.indent_string)},this.is_unformatted=function(t,e){if(!this.Utils.in_array(t,e))return!1;if("a"!==t.toLowerCase()||!this.Utils.in_array("a",e))return!0;var n=(this.get_tag(!0)||"").match(/^\s*<\s*\/?([a-z]*)\s*[^>]*>\s*$/);return!(n&&!this.Utils.in_array(n,e))},this.printer=function(t,e,i,s,h){this.input=t||"",this.output=[],this.indent_character=e,this.indent_string="",this.indent_size=i,this.brace_style=h,this.indent_level=0,this.wrap_line_length=s,this.line_char_count=0;for(var r=0;r<this.indent_size;r++)this.indent_string+=this.indent_character;this.print_newline=function(t,e){this.line_char_count=0,e&&e.length&&(t||"\n"!==e[e.length-1])&&("\n"!==e[e.length-1]&&(e[e.length-1]=n(e[e.length-1])),e.push("\n"))},this.print_indentation=function(t){for(var e=0;e<this.indent_level;e++)t.push(this.indent_string),this.line_char_count+=this.indent_string.length},this.print_token=function(t){this.is_whitespace(t)&&!this.output.length||((t||""!==t)&&this.output.length&&"\n"===this.output[this.output.length-1]&&(this.print_indentation(this.output),t=t.replace(/^\s+/g,"")),this.print_token_raw(t))},this.print_token_raw=function(t){this.newlines>0&&(t=n(t)),t&&""!==t&&(t.length>1&&"\n"===t[t.length-1]?(this.output.push(t.slice(0,-1)),this.print_newline(!1,this.output)):this.output.push(t));for(var e=0;e<this.newlines;e++)this.print_newline(e>0,this.output);this.newlines=0},this.indent=function(){this.indent_level++},this.unindent=function(){this.indent_level>0&&this.indent_level--}},this}).printer(t,_,a,o,p);;){var f=h.get_token();if(h.token_text=f[0],h.token_type=f[1],"TK_EOF"===h.token_type)break;switch(h.token_type){case"TK_TAG_START":h.print_newline(!1,h.output),h.print_token(h.token_text),h.indent_content&&(h.indent(),h.indent_content=!1),h.current_mode="CONTENT";break;case"TK_TAG_STYLE":case"TK_TAG_SCRIPT":h.print_newline(!1,h.output),h.print_token(h.token_text),h.current_mode="CONTENT";break;case"TK_TAG_END":if("TK_CONTENT"===h.last_token&&""===h.last_text){var w=h.token_text.match(/\w+/)[0],T=null;h.output.length&&(T=h.output[h.output.length-1].match(/(?:<|{{#)\s*(\w+)/)),null!==T&&T[1]===w||h.print_newline(!1,h.output)}h.print_token(h.token_text),h.current_mode="CONTENT";break;case"TK_TAG_SINGLE":var k=h.token_text.match(/^\s*<([a-z-]+)/i);k&&h.Utils.in_array(k[1],u)||h.print_newline(!1,h.output),h.print_token(h.token_text),h.current_mode="CONTENT";break;case"TK_TAG_HANDLEBARS_ELSE":h.print_token(h.token_text),h.indent_content&&(h.indent(),h.indent_content=!1),h.current_mode="CONTENT";break;case"TK_CONTENT":h.print_token(h.token_text),h.current_mode="TAG";break;case"TK_STYLE":case"TK_SCRIPT":if(""!==h.token_text){h.print_newline(!1,h.output);var v,y=h.token_text,m=1;"TK_SCRIPT"===h.token_type?v="function"==typeof i&&i:"TK_STYLE"===h.token_type&&(v="function"==typeof s&&s),"keep"===e.indent_scripts?m=0:"separate"===e.indent_scripts&&(m=-h.indent_level);var x=h.get_full_indent(m);if(v)y=v(y.replace(/^\s*/,x),e);else{var b=y.match(/^\s*/)[0].match(/[^\n\r]*$/)[0].split(h.indent_string).length-1,A=h.get_full_indent(m-b);y=y.replace(/^\s*/,x).replace(/\r\n|\r|\n/g,"\n"+A).replace(/\s+$/,"")}y&&(h.print_token_raw(y),h.print_newline(!0,h.output))}h.current_mode="TAG";break;default:""!==h.token_text&&h.print_token(h.token_text)}h.last_token=h.token_type,h.last_text=h.token_text}var E=h.output.join("").replace(/[\r\n\t ]+$/,"");return d&&(E+="\n"),E}(i,s,e,t)}}});
//# sourceMappingURL=../sourcemaps/primitives/beautify-html.js.map
