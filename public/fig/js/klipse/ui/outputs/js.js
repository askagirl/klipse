// Compiled by ClojureScript 1.9.36 {}
goog.provide('klipse.ui.outputs.js');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
klipse.ui.outputs.js.placeholder_textarea = ";; Press Ctrl-Enter or wait for 3 sec to eval in javascript...";
/**
 * @constructor
 */
klipse.ui.outputs.js.Js_textarea = (function klipse$ui$outputs$js$Js_textarea(){
var this__40383__auto__ = this;
React.Component.apply(this__40383__auto__,arguments);

if(!((this__40383__auto__.initLocalState == null))){
this__40383__auto__.state = this__40383__auto__.initLocalState();
} else {
this__40383__auto__.state = {};
}

return this__40383__auto__;
});

klipse.ui.outputs.js.Js_textarea.prototype = goog.object.clone(React.Component.prototype);

var x42775_42788 = klipse.ui.outputs.js.Js_textarea.prototype;
x42775_42788.componentWillUpdate = ((function (x42775_42788){
return (function (next_props__40319__auto__,next_state__40320__auto__){
var this__40318__auto__ = this;
if(((!((this__40318__auto__ == null)))?(((false) || (this__40318__auto__.om$next$Ident$))?true:false):false)){
var ident__40322__auto___42789 = om.next.ident.call(null,this__40318__auto__,om.next.props.call(null,this__40318__auto__));
var next_ident__40323__auto___42790 = om.next.ident.call(null,this__40318__auto__,om.next._next_props.call(null,next_props__40319__auto__,this__40318__auto__));
if(cljs.core.not_EQ_.call(null,ident__40322__auto___42789,next_ident__40323__auto___42790)){
var idxr__40324__auto___42791 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__40324__auto___42791 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__40324__auto___42791),((function (idxr__40324__auto___42791,ident__40322__auto___42789,next_ident__40323__auto___42790,this__40318__auto__,x42775_42788){
return (function (indexes__40325__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__40325__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__40322__auto___42789], null),cljs.core.disj,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__40323__auto___42790], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__40318__auto__);
});})(idxr__40324__auto___42791,ident__40322__auto___42789,next_ident__40323__auto___42790,this__40318__auto__,x42775_42788))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__40318__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__40318__auto__);
});})(x42775_42788))
;

x42775_42788.shouldComponentUpdate = ((function (x42775_42788){
return (function (next_props__40319__auto__,next_state__40320__auto__){
var this__40318__auto__ = this;
var next_children__40321__auto__ = next_props__40319__auto__.children;
var next_props__40319__auto____$1 = goog.object.get(next_props__40319__auto__,"omcljs$value");
var next_props__40319__auto____$2 = (function (){var G__42777 = next_props__40319__auto____$1;
if((next_props__40319__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__42777);
} else {
return G__42777;
}
})();
var or__22615__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__40318__auto__),next_props__40319__auto____$2);
if(or__22615__auto__){
return or__22615__auto__;
} else {
var or__22615__auto____$1 = (function (){var and__22603__auto__ = this__40318__auto__.state;
if(cljs.core.truth_(and__22603__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__40318__auto__.state,"omcljs$state"),goog.object.get(next_state__40320__auto__,"omcljs$state"));
} else {
return and__22603__auto__;
}
})();
if(cljs.core.truth_(or__22615__auto____$1)){
return or__22615__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__40318__auto__.props.children,next_children__40321__auto__);
}
}
});})(x42775_42788))
;

x42775_42788.componentWillUnmount = ((function (x42775_42788){
return (function (){
var this__40318__auto__ = this;
var r__40329__auto__ = om.next.get_reconciler.call(null,this__40318__auto__);
var cfg__40330__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__40329__auto__);
var st__40331__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__40330__auto__);
var indexer__40328__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__40330__auto__);
if(cljs.core.truth_((function (){var and__22603__auto__ = !((st__40331__auto__ == null));
if(and__22603__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__40331__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__40318__auto__], null));
} else {
return and__22603__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__40331__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__40318__auto__);
} else {
}

if((indexer__40328__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__40328__auto__,this__40318__auto__);
}
});})(x42775_42788))
;

x42775_42788.componentDidUpdate = ((function (x42775_42788){
return (function (prev_props__40326__auto__,prev_state__40327__auto__){
var this__40318__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__40318__auto__);
});})(x42775_42788))
;

x42775_42788.isMounted = ((function (x42775_42788){
return (function (){
var this__40318__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__40318__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x42775_42788))
;

x42775_42788.componentWillMount = ((function (x42775_42788){
return (function (){
var this__40318__auto__ = this;
var indexer__40328__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__40318__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__40328__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__40328__auto__,this__40318__auto__);
}
});})(x42775_42788))
;

x42775_42788.render = ((function (x42775_42788){
return (function (){
var this__40317__auto__ = this;
var this$ = this__40317__auto__;
var _STAR_reconciler_STAR_42778 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_42779 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_42780 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_42781 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_42782 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__40317__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__40317__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__40317__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__40317__auto__);

om.next._STAR_parent_STAR_ = this__40317__auto__;

try{var vec__42783 = new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$));
var status = cljs.core.nth.call(null,vec__42783,(0),null);
var result = cljs.core.nth.call(null,vec__42783,(1),null);
var status_class = (cljs.core.truth_(status)?cljs.core.name.call(null,status):null);
return React.DOM.section({"className": "js-textarea"},om.util.force_children.call(null,om.dom.textarea.call(null,{"value": (function (){var or__22615__auto__ = result;
if(cljs.core.truth_(or__22615__auto__)){
return or__22615__auto__;
} else {
return "";
}
})(), "className": status_class, "placeholder": klipse.ui.outputs.js.placeholder_textarea, "readOnly": true})));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_42782;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_42781;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_42780;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_42779;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_42778;
}});})(x42775_42788))
;


klipse.ui.outputs.js.Js_textarea.prototype.constructor = klipse.ui.outputs.js.Js_textarea;

klipse.ui.outputs.js.Js_textarea.prototype.constructor.displayName = "klipse.ui.outputs.js/Js-textarea";

klipse.ui.outputs.js.Js_textarea.prototype.om$isComponent = true;

var x42786_42792 = klipse.ui.outputs.js.Js_textarea;
x42786_42792.om$next$IQuery$ = true;

x42786_42792.om$next$IQuery$query$arity$1 = ((function (x42786_42792){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)], null);
});})(x42786_42792))
;


var x42787_42793 = klipse.ui.outputs.js.Js_textarea.prototype;
x42787_42793.om$next$IQuery$ = true;

x42787_42793.om$next$IQuery$query$arity$1 = ((function (x42787_42793){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"evaluation-js","evaluation-js",1837122413)], null);
});})(x42787_42793))
;


klipse.ui.outputs.js.Js_textarea.cljs$lang$type = true;

klipse.ui.outputs.js.Js_textarea.cljs$lang$ctorStr = "klipse.ui.outputs.js/Js-textarea";

klipse.ui.outputs.js.Js_textarea.cljs$lang$ctorPrWriter = (function (this__40385__auto__,writer__40386__auto__,opt__40387__auto__){
return cljs.core._write.call(null,writer__40386__auto__,"klipse.ui.outputs.js/Js-textarea");
});
klipse.ui.outputs.js.js_textarea = om.next.factory.call(null,klipse.ui.outputs.js.Js_textarea);

//# sourceMappingURL=js.js.map?rel=1465451170687