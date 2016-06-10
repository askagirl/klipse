// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.ui.editors.common');
goog.require('cljs.core');
goog.require('gadjett.core');
goog.require('klipse.ui.editors.editor');
goog.require('klipse.utils');
klipse.ui.editors.common.display_url_with_input = (function klipse$ui$editors$common$display_url_with_input(base_url,value){
var G__41931 = klipse.utils.create_url_with_input.call(null,base_url,value);
cljs.core.print.call(null,G__41931);

alert(G__41931);

return G__41931;
});
klipse.ui.editors.common.refresh_with_code = (function klipse$ui$editors$common$refresh_with_code(base_url,value){
return location.replace(klipse.utils.create_url_with_input.call(null,base_url,value));
});
klipse.ui.editors.common.handle_events = (function klipse$ui$editors$common$handle_events(editor,p__41932){
var map__41935 = p__41932;
var map__41935__$1 = ((((!((map__41935 == null)))?((((map__41935.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41935.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41935):map__41935);
var on_should_eval = cljs.core.get.call(null,map__41935__$1,new cljs.core.Keyword(null,"on-should-eval","on-should-eval",978880168));
var idle_msec = cljs.core.get.call(null,map__41935__$1,new cljs.core.Keyword(null,"idle-msec","idle-msec",1257447972));
var base_url = cljs.core.get.call(null,map__41935__$1,new cljs.core.Keyword(null,"base-url","base-url",9540398),null);
klipse.ui.editors.editor.on_change.call(null,editor,klipse.utils.debounce.call(null,on_should_eval,idle_msec));

return klipse.ui.editors.editor.set_option.call(null,editor,"extraKeys",{"Ctrl-S": ((function (map__41935,map__41935__$1,on_should_eval,idle_msec,base_url){
return (function (){
return klipse.ui.editors.common.display_url_with_input.call(null,base_url,klipse.ui.editors.editor.get_value.call(null,editor));
});})(map__41935,map__41935__$1,on_should_eval,idle_msec,base_url))
, "Ctrl-R": ((function (map__41935,map__41935__$1,on_should_eval,idle_msec,base_url){
return (function (){
return klipse.ui.editors.common.refresh_with_code.call(null,base_url,klipse.ui.editors.editor.get_value.call(null,editor));
});})(map__41935,map__41935__$1,on_should_eval,idle_msec,base_url))
, "Ctrl-Enter": on_should_eval});
});

//# sourceMappingURL=common.js.map?rel=1465451169603