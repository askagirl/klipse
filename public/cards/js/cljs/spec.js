// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'coll'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (100);
/**
 * if false, instrumented fns call straight through
 */
cljs.spec._STAR_instrument_enabled_STAR_ = true;

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,spec,x);
} else {
var m__6885__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,spec,path,via,in$,x);
} else {
var m__6885__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__6885__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,spec,gfn);
} else {
var m__6885__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__6884__auto__ = (((spec == null))?null:spec);
var m__6885__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__6884__auto__)]);
if(!((m__6885__auto__ == null))){
return m__6885__auto__.call(null,spec);
} else {
var m__6885__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__6885__auto____$1 == null))){
return m__6885__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__66416 = cljs.core.get.call(null,reg,spec);
spec = G__66416;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__6209__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__6209__auto__){
return x;
} else {
return and__6209__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__6209__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__6209__auto__)){
return x;
} else {
return and__6209__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__6221__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
var or__6221__auto____$2 = (function (){var and__6209__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__6209__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$2)){
return or__6221__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__6221__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__6221__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__6209__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__6209__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__6209__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__6209__auto__ = (form instanceof cljs.core.Symbol);
if(and__6209__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__6209__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec),gen_fn);
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a path->problem-map, where problem-map has at least :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_66467_66513 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_66468_66514 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_66467_66513,_STAR_print_fn_STAR_66468_66514,sb__7207__auto__){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_66467_66513,_STAR_print_fn_STAR_66468_66514,sb__7207__auto__))
;

try{var seq__66469_66515 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__66470_66516 = null;
var count__66471_66517 = (0);
var i__66472_66518 = (0);
while(true){
if((i__66472_66518 < count__66471_66517)){
var vec__66473_66519 = cljs.core._nth.call(null,chunk__66470_66516,i__66472_66518);
var path_66520 = cljs.core.nth.call(null,vec__66473_66519,(0),null);
var map__66476_66521 = cljs.core.nth.call(null,vec__66473_66519,(1),null);
var map__66476_66522__$1 = ((((!((map__66476_66521 == null)))?((((map__66476_66521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66476_66521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66476_66521):map__66476_66521);
var prob_66523 = map__66476_66522__$1;
var pred_66524 = cljs.core.get.call(null,map__66476_66522__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_66525 = cljs.core.get.call(null,map__66476_66522__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_66526 = cljs.core.get.call(null,map__66476_66522__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_66527 = cljs.core.get.call(null,map__66476_66522__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_66528 = cljs.core.get.call(null,map__66476_66522__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_66528)){
} else {
cljs.core.print.call(null,"In:",in_66528,"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_66525);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_66527)){
} else {
cljs.core.print.call(null," spec:",cljs.core.last.call(null,via_66527));
}

if(cljs.core.empty_QMARK_.call(null,path_66520)){
} else {
cljs.core.print.call(null," at:",path_66520);
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_66524);

if(cljs.core.truth_(reason_66526)){
cljs.core.print.call(null,", ",reason_66526);
} else {
}

var seq__66478_66529 = cljs.core.seq.call(null,prob_66523);
var chunk__66479_66530 = null;
var count__66480_66531 = (0);
var i__66481_66532 = (0);
while(true){
if((i__66481_66532 < count__66480_66531)){
var vec__66482_66533 = cljs.core._nth.call(null,chunk__66479_66530,i__66481_66532);
var k_66534 = cljs.core.nth.call(null,vec__66482_66533,(0),null);
var v_66535 = cljs.core.nth.call(null,vec__66482_66533,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_66534))){
} else {
cljs.core.print.call(null,"\n\t",k_66534," ");

cljs.core.pr.call(null,v_66535);
}

var G__66536 = seq__66478_66529;
var G__66537 = chunk__66479_66530;
var G__66538 = count__66480_66531;
var G__66539 = (i__66481_66532 + (1));
seq__66478_66529 = G__66536;
chunk__66479_66530 = G__66537;
count__66480_66531 = G__66538;
i__66481_66532 = G__66539;
continue;
} else {
var temp__4657__auto___66540 = cljs.core.seq.call(null,seq__66478_66529);
if(temp__4657__auto___66540){
var seq__66478_66541__$1 = temp__4657__auto___66540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66478_66541__$1)){
var c__7032__auto___66542 = cljs.core.chunk_first.call(null,seq__66478_66541__$1);
var G__66543 = cljs.core.chunk_rest.call(null,seq__66478_66541__$1);
var G__66544 = c__7032__auto___66542;
var G__66545 = cljs.core.count.call(null,c__7032__auto___66542);
var G__66546 = (0);
seq__66478_66529 = G__66543;
chunk__66479_66530 = G__66544;
count__66480_66531 = G__66545;
i__66481_66532 = G__66546;
continue;
} else {
var vec__66485_66547 = cljs.core.first.call(null,seq__66478_66541__$1);
var k_66548 = cljs.core.nth.call(null,vec__66485_66547,(0),null);
var v_66549 = cljs.core.nth.call(null,vec__66485_66547,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_66548))){
} else {
cljs.core.print.call(null,"\n\t",k_66548," ");

cljs.core.pr.call(null,v_66549);
}

var G__66550 = cljs.core.next.call(null,seq__66478_66541__$1);
var G__66551 = null;
var G__66552 = (0);
var G__66553 = (0);
seq__66478_66529 = G__66550;
chunk__66479_66530 = G__66551;
count__66480_66531 = G__66552;
i__66481_66532 = G__66553;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__66554 = seq__66469_66515;
var G__66555 = chunk__66470_66516;
var G__66556 = count__66471_66517;
var G__66557 = (i__66472_66518 + (1));
seq__66469_66515 = G__66554;
chunk__66470_66516 = G__66555;
count__66471_66517 = G__66556;
i__66472_66518 = G__66557;
continue;
} else {
var temp__4657__auto___66558 = cljs.core.seq.call(null,seq__66469_66515);
if(temp__4657__auto___66558){
var seq__66469_66559__$1 = temp__4657__auto___66558;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66469_66559__$1)){
var c__7032__auto___66560 = cljs.core.chunk_first.call(null,seq__66469_66559__$1);
var G__66561 = cljs.core.chunk_rest.call(null,seq__66469_66559__$1);
var G__66562 = c__7032__auto___66560;
var G__66563 = cljs.core.count.call(null,c__7032__auto___66560);
var G__66564 = (0);
seq__66469_66515 = G__66561;
chunk__66470_66516 = G__66562;
count__66471_66517 = G__66563;
i__66472_66518 = G__66564;
continue;
} else {
var vec__66488_66565 = cljs.core.first.call(null,seq__66469_66559__$1);
var path_66566 = cljs.core.nth.call(null,vec__66488_66565,(0),null);
var map__66491_66567 = cljs.core.nth.call(null,vec__66488_66565,(1),null);
var map__66491_66568__$1 = ((((!((map__66491_66567 == null)))?((((map__66491_66567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66491_66567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66491_66567):map__66491_66567);
var prob_66569 = map__66491_66568__$1;
var pred_66570 = cljs.core.get.call(null,map__66491_66568__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_66571 = cljs.core.get.call(null,map__66491_66568__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_66572 = cljs.core.get.call(null,map__66491_66568__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_66573 = cljs.core.get.call(null,map__66491_66568__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_66574 = cljs.core.get.call(null,map__66491_66568__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_66574)){
} else {
cljs.core.print.call(null,"In:",in_66574,"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_66571);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_66573)){
} else {
cljs.core.print.call(null," spec:",cljs.core.last.call(null,via_66573));
}

if(cljs.core.empty_QMARK_.call(null,path_66566)){
} else {
cljs.core.print.call(null," at:",path_66566);
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,pred_66570);

if(cljs.core.truth_(reason_66572)){
cljs.core.print.call(null,", ",reason_66572);
} else {
}

var seq__66493_66575 = cljs.core.seq.call(null,prob_66569);
var chunk__66494_66576 = null;
var count__66495_66577 = (0);
var i__66496_66578 = (0);
while(true){
if((i__66496_66578 < count__66495_66577)){
var vec__66497_66579 = cljs.core._nth.call(null,chunk__66494_66576,i__66496_66578);
var k_66580 = cljs.core.nth.call(null,vec__66497_66579,(0),null);
var v_66581 = cljs.core.nth.call(null,vec__66497_66579,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_66580))){
} else {
cljs.core.print.call(null,"\n\t",k_66580," ");

cljs.core.pr.call(null,v_66581);
}

var G__66582 = seq__66493_66575;
var G__66583 = chunk__66494_66576;
var G__66584 = count__66495_66577;
var G__66585 = (i__66496_66578 + (1));
seq__66493_66575 = G__66582;
chunk__66494_66576 = G__66583;
count__66495_66577 = G__66584;
i__66496_66578 = G__66585;
continue;
} else {
var temp__4657__auto___66586__$1 = cljs.core.seq.call(null,seq__66493_66575);
if(temp__4657__auto___66586__$1){
var seq__66493_66587__$1 = temp__4657__auto___66586__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66493_66587__$1)){
var c__7032__auto___66588 = cljs.core.chunk_first.call(null,seq__66493_66587__$1);
var G__66589 = cljs.core.chunk_rest.call(null,seq__66493_66587__$1);
var G__66590 = c__7032__auto___66588;
var G__66591 = cljs.core.count.call(null,c__7032__auto___66588);
var G__66592 = (0);
seq__66493_66575 = G__66589;
chunk__66494_66576 = G__66590;
count__66495_66577 = G__66591;
i__66496_66578 = G__66592;
continue;
} else {
var vec__66500_66593 = cljs.core.first.call(null,seq__66493_66587__$1);
var k_66594 = cljs.core.nth.call(null,vec__66500_66593,(0),null);
var v_66595 = cljs.core.nth.call(null,vec__66500_66593,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_66594))){
} else {
cljs.core.print.call(null,"\n\t",k_66594," ");

cljs.core.pr.call(null,v_66595);
}

var G__66596 = cljs.core.next.call(null,seq__66493_66587__$1);
var G__66597 = null;
var G__66598 = (0);
var G__66599 = (0);
seq__66493_66575 = G__66596;
chunk__66494_66576 = G__66597;
count__66495_66577 = G__66598;
i__66496_66578 = G__66599;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__66600 = cljs.core.next.call(null,seq__66469_66559__$1);
var G__66601 = null;
var G__66602 = (0);
var G__66603 = (0);
seq__66469_66515 = G__66600;
chunk__66470_66516 = G__66601;
count__66471_66517 = G__66602;
i__66472_66518 = G__66603;
continue;
}
} else {
}
}
break;
}

var seq__66503_66604 = cljs.core.seq.call(null,ed);
var chunk__66504_66605 = null;
var count__66505_66606 = (0);
var i__66506_66607 = (0);
while(true){
if((i__66506_66607 < count__66505_66606)){
var vec__66507_66608 = cljs.core._nth.call(null,chunk__66504_66605,i__66506_66607);
var k_66609 = cljs.core.nth.call(null,vec__66507_66608,(0),null);
var v_66610 = cljs.core.nth.call(null,vec__66507_66608,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_66609))){
} else {
cljs.core.print.call(null,k_66609," ");

cljs.core.pr.call(null,v_66610);

cljs.core.newline.call(null);
}

var G__66611 = seq__66503_66604;
var G__66612 = chunk__66504_66605;
var G__66613 = count__66505_66606;
var G__66614 = (i__66506_66607 + (1));
seq__66503_66604 = G__66611;
chunk__66504_66605 = G__66612;
count__66505_66606 = G__66613;
i__66506_66607 = G__66614;
continue;
} else {
var temp__4657__auto___66615 = cljs.core.seq.call(null,seq__66503_66604);
if(temp__4657__auto___66615){
var seq__66503_66616__$1 = temp__4657__auto___66615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66503_66616__$1)){
var c__7032__auto___66617 = cljs.core.chunk_first.call(null,seq__66503_66616__$1);
var G__66618 = cljs.core.chunk_rest.call(null,seq__66503_66616__$1);
var G__66619 = c__7032__auto___66617;
var G__66620 = cljs.core.count.call(null,c__7032__auto___66617);
var G__66621 = (0);
seq__66503_66604 = G__66618;
chunk__66504_66605 = G__66619;
count__66505_66606 = G__66620;
i__66506_66607 = G__66621;
continue;
} else {
var vec__66510_66622 = cljs.core.first.call(null,seq__66503_66616__$1);
var k_66623 = cljs.core.nth.call(null,vec__66510_66622,(0),null);
var v_66624 = cljs.core.nth.call(null,vec__66510_66622,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_66623))){
} else {
cljs.core.print.call(null,k_66623," ");

cljs.core.pr.call(null,v_66624);

cljs.core.newline.call(null);
}

var G__66625 = cljs.core.next.call(null,seq__66503_66616__$1);
var G__66626 = null;
var G__66627 = (0);
var G__66628 = (0);
seq__66503_66604 = G__66625;
chunk__66504_66605 = G__66626;
count__66505_66606 = G__66627;
i__66506_66607 = G__66628;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_66468_66514;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_66467_66513;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_66631_66633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_66632_66634 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_66631_66633,_STAR_print_fn_STAR_66632_66634,sb__7207__auto__){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_66631_66633,_STAR_print_fn_STAR_66632_66634,sb__7207__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_66632_66634;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_66631_66633;
}
return [cljs.core.str(sb__7207__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__4655__auto__ = (function (){var or__6221__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4655__auto__,spec__$1){
return (function (p1__66635_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__66635_SHARP_);
});})(g,temp__4655__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map paths (vectors of keywords) to generators. These will be
 *   used instead of the generators at those paths. Note that parent
 *   generator (in the spec or overrides map) will supersede those of any
 *   subtrees. A generator for a regex op must always return a
 *   sequential collection (i.e. a generator for s/? should return either
 *   an empty sequence/vector or a sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args66636 = [];
var len__7296__auto___66639 = arguments.length;
var i__7297__auto___66640 = (0);
while(true){
if((i__7297__auto___66640 < len__7296__auto___66639)){
args66636.push((arguments[i__7297__auto___66640]));

var G__66641 = (i__7297__auto___66640 + (1));
i__7297__auto___66640 = G__66641;
continue;
} else {
}
break;
}

var G__66638 = args66636.length;
switch (G__66638) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66636.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__6209__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__6209__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword/symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__6221__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
cljs.spec.fn_spec_roles = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null);
/**
 * Returns nil if v conforms to spec, else throws ex-info with explain-data.
 */
cljs.spec.expect = (function cljs$spec$expect(spec,v){
return null;
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Fn-specs must include at least :args or :ret specs.
 */
cljs.spec.fn_specs_QMARK_ = (function cljs$spec$fn_specs_QMARK_(m){
var or__6221__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(m);
}
});
cljs.spec.fn_spec_sym = (function cljs$spec$fn_spec_sym(sym,role){
return cljs.core.symbol.call(null,[cljs.core.str(sym),cljs.core.str("$"),cljs.core.str(cljs.core.name.call(null,role))].join(''));
});
/**
 * Returns :args/:ret/:fn map of specs for var or symbol v.
 */
cljs.spec.fn_specs = (function cljs$spec$fn_specs(v){
var s = cljs.spec.__GT_sym.call(null,v);
var reg = cljs.spec.registry.call(null);
return cljs.core.reduce.call(null,((function (s,reg){
return (function (m,role){
return cljs.core.assoc.call(null,m,role,cljs.core.get.call(null,reg,cljs.spec.fn_spec_sym.call(null,s,role)));
});})(s,reg))
,cljs.core.PersistentArrayMap.EMPTY,cljs.spec.fn_spec_roles);
});
cljs.spec.spec_checking_fn = (function cljs$spec$spec_checking_fn(v,f){
var conform_BANG_ = (function (v__$1,role,spec,data,args){
var conformed = cljs.spec.conform.call(null,spec,data);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),conformed)){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [role], null),cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,data),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw cljs.core.ex_info.call(null,[cljs.core.str("Call to "),cljs.core.str(v__$1),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_66648_66653 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_66649_66654 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_66648_66653,_STAR_print_fn_STAR_66649_66654,sb__7207__auto__,ed,conformed){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_66648_66653,_STAR_print_fn_STAR_66649_66654,sb__7207__auto__,ed,conformed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_66649_66654;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_66648_66653;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})())].join(''),ed);
} else {
return conformed;
}
});
var G__66650 = ((function (conform_BANG_){
return (function() { 
var G__66655__delegate = function (args){
if(cljs.core.truth_(cljs.spec._STAR_instrument_enabled_STAR_)){
var _STAR_instrument_enabled_STAR_66651 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = null;

try{var specs = cljs.spec.fn_specs.call(null,v);
var cargs = (cljs.core.truth_(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs))?conform_BANG_.call(null,v,new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args,args):null);
var ret = (function (){var _STAR_instrument_enabled_STAR_66652 = cljs.spec._STAR_instrument_enabled_STAR_;
cljs.spec._STAR_instrument_enabled_STAR_ = true;

try{return cljs.core.apply.call(null,f,args);
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_66652;
}})();
var cret = (cljs.core.truth_(new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs))?conform_BANG_.call(null,v,new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret,args):null);
if(cljs.core.truth_((function (){var and__6209__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(and__6209__auto____$1)){
return new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs);
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
conform_BANG_.call(null,v,new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null),args);
} else {
}

return ret;
}finally {cljs.spec._STAR_instrument_enabled_STAR_ = _STAR_instrument_enabled_STAR_66651;
}} else {
return cljs.core.apply.call(null,f,args);
}
};
var G__66655 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66656__i = 0, G__66656__a = new Array(arguments.length -  0);
while (G__66656__i < G__66656__a.length) {G__66656__a[G__66656__i] = arguments[G__66656__i + 0]; ++G__66656__i;}
  args = new cljs.core.IndexedSeq(G__66656__a,0);
} 
return G__66655__delegate.call(this,args);};
G__66655.cljs$lang$maxFixedArity = 0;
G__66655.cljs$lang$applyTo = (function (arglist__66657){
var args = cljs.core.seq(arglist__66657);
return G__66655__delegate(args);
});
G__66655.cljs$core$IFn$_invoke$arity$variadic = G__66655__delegate;
return G__66655;
})()
;})(conform_BANG_))
;
goog.object.extend(G__66650,f);

return G__66650;
});
cljs.spec.no_fn_specs = (function cljs$spec$no_fn_specs(v,specs){
return cljs.core.ex_info.call(null,[cljs.core.str("Fn at "),cljs.core.str(v),cljs.core.str(" is not spec'ed.")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"var","var",-769682797),v,new cljs.core.Keyword(null,"specs","specs",1426570741),specs], null));
});
/**
 * Map for instrumented vars to :raw/:wrapped fns
 */
cljs.spec.instrumented_vars = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
cljs.spec.instrument_STAR_ = (function cljs$spec$instrument_STAR_(v){
var specs = cljs.spec.fn_specs.call(null,v);
if(cljs.core.truth_(cljs.spec.fn_specs_QMARK_.call(null,specs))){
var map__66660 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
var map__66660__$1 = ((((!((map__66660 == null)))?((((map__66660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66660):map__66660);
var raw = cljs.core.get.call(null,map__66660__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped = cljs.core.get.call(null,map__66660__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped,current)){
return null;
} else {
var checked = cljs.spec.spec_checking_fn.call(null,v,current);
cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.assoc,v,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"raw","raw",1604651272),current,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701),checked], null));

return checked;
}
} else {
throw cljs.spec.no_fn_specs.call(null,v,specs);
}
});
cljs.spec.unstrument_STAR_ = (function cljs$spec$unstrument_STAR_(v){
var temp__4657__auto___66666 = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.instrumented_vars),v);
if(cljs.core.truth_(temp__4657__auto___66666)){
var map__66664_66667 = temp__4657__auto___66666;
var map__66664_66668__$1 = ((((!((map__66664_66667 == null)))?((((map__66664_66667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66664_66667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66664_66667):map__66664_66667);
var raw_66669 = cljs.core.get.call(null,map__66664_66668__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var wrapped_66670 = cljs.core.get.call(null,map__66664_66668__$1,new cljs.core.Keyword(null,"wrapped","wrapped",1775172701));
var current_66671 = cljs.core.deref.call(null,v);
if(cljs.core._EQ_.call(null,wrapped_66670,current_66671)){
} else {
}

cljs.core.swap_BANG_.call(null,cljs.spec.instrumented_vars,cljs.core.dissoc,v);
} else {
}

return v;
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__6221__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args66672 = [];
var len__7296__auto___66675 = arguments.length;
var i__7297__auto___66676 = (0);
while(true){
if((i__7297__auto___66676 < len__7296__auto___66675)){
args66672.push((arguments[i__7297__auto___66676]));

var G__66677 = (i__7297__auto___66676 + (1));
i__7297__auto___66676 = G__66677;
continue;
} else {
}
break;
}

var G__66674 = args66672.length;
switch (G__66674) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66672.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args66679 = [];
var len__7296__auto___66682 = arguments.length;
var i__7297__auto___66683 = (0);
while(true){
if((i__7297__auto___66683 < len__7296__auto___66682)){
args66679.push((arguments[i__7297__auto___66683]));

var G__66684 = (i__7297__auto___66683 + (1));
i__7297__auto___66683 = G__66684;
continue;
} else {
}
break;
}

var G__66681 = args66679.length;
switch (G__66681) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66679.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__66688){
var map__66710 = p__66688;
var map__66710__$1 = ((((!((map__66710 == null)))?((((map__66710.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66710.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66710):map__66710);
var argm = map__66710__$1;
var opt = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__66710__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__66686_SHARP_){
var or__6221__auto__ = k__GT_s.call(null,p1__66686_SHARP_);
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return p1__66686_SHARP_;
}
});})(keys_pred,k__GT_s,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec66712 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec66712 = (function (map__66710,opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,req_keys,p__66688,opt_specs,k__GT_s,pred_forms,meta66713){
this.map__66710 = map__66710;
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.p__66688 = p__66688;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta66713 = meta66713;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec66712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_66714,meta66713__$1){
var self__ = this;
var _66714__$1 = this;
return (new cljs.spec.t_cljs$spec66712(self__.map__66710,self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.opt_keys,self__.req_specs,self__.keys__GT_specs,self__.req,self__.id,self__.req_keys,self__.p__66688,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta66713__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_66714){
var self__ = this;
var _66714__$1 = this;
return self__.meta66713;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.prototype.call = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.prototype.apply = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (self__,args66715){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args66715)));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec66712.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__66719 = cljs.core.keys.call(null,m);
var vec__66720 = G__66719;
var seq__66721 = cljs.core.seq.call(null,vec__66720);
var first__66722 = cljs.core.first.call(null,seq__66721);
var seq__66721__$1 = cljs.core.next.call(null,seq__66721);
var k = first__66722;
var ks = seq__66721__$1;
var keys = vec__66720;
var ret__$1 = ret;
var G__66719__$1 = G__66719;
while(true){
var ret__$2 = ret__$1;
var vec__66723 = G__66719__$1;
var seq__66724 = cljs.core.seq.call(null,vec__66723);
var first__66725 = cljs.core.first.call(null,seq__66724);
var seq__66724__$1 = cljs.core.next.call(null,seq__66724);
var k__$1 = first__66725;
var ks__$1 = seq__66724__$1;
var keys__$1 = vec__66723;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__66731 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__66732 = ks__$1;
ret__$1 = G__66731;
G__66719__$1 = G__66732;
continue;
}
} else {
var G__66733 = ret__$2;
var G__66734 = ks__$1;
ret__$1 = G__66733;
G__66719__$1 = G__66734;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.merge,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.vec.call(null,probs),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__66726){
var vec__66727 = p__66726;
var k = cljs.core.nth.call(null,vec__66727,(0),null);
var v = cljs.core.nth.call(null,vec__66727,(1),null);
if(cljs.core.truth_((function (){var or__6221__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__66687_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__66687_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__66730 = cljs.core.PersistentVector.EMPTY;
var G__66730__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__66730,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__66730);
var G__66730__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__66730__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__66730__$1);
var G__66730__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__66730__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__66730__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__66730__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__66730__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__66710","map__66710",2128595234,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"p__66688","p__66688",-911555299,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta66713","meta66713",-1904424267,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec66712.cljs$lang$type = true;

cljs.spec.t_cljs$spec66712.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec66712";

cljs.spec.t_cljs$spec66712.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.spec/t_cljs$spec66712");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec66712 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec66712(map__66710__$2,opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,p__66688__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta66713){
return (new cljs.spec.t_cljs$spec66712(map__66710__$2,opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,req__$1,id__$1,req_keys__$1,p__66688__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta66713));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__66710,map__66710__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec66712(map__66710__$1,opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,opt_keys,req_specs,keys__GT_specs,req,id,req_keys,p__66688,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(form,pred,gfn,cpred_QMARK_){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__66741 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__66741,gfn);
} else {
return G__66741;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__66742 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__66742,gfn);
} else {
return G__66742;
}
} else {
if(typeof cljs.spec.t_cljs$spec66743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec66743 = (function (spec_impl,form,pred,gfn,cpred_QMARK_,meta66744){
this.spec_impl = spec_impl;
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.meta66744 = meta66744;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec66743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66745,meta66744__$1){
var self__ = this;
var _66745__$1 = this;
return (new cljs.spec.t_cljs$spec66743(self__.spec_impl,self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,meta66744__$1));
});

cljs.spec.t_cljs$spec66743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66745){
var self__ = this;
var _66745__$1 = this;
return self__.meta66744;
});

cljs.spec.t_cljs$spec66743.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec66743.prototype.apply = (function (self__,args66746){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args66746)));
});

cljs.spec.t_cljs$spec66743.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec66743.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec66743.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec66743.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return null;
}
});

cljs.spec.t_cljs$spec66743.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec66743.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec66743.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec66743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"spec-impl","spec-impl",1706091993,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec'"], null)),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"meta66744","meta66744",-2000083067,null)], null);
});

cljs.spec.t_cljs$spec66743.cljs$lang$type = true;

cljs.spec.t_cljs$spec66743.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec66743";

cljs.spec.t_cljs$spec66743.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.spec/t_cljs$spec66743");
});

cljs.spec.__GT_t_cljs$spec66743 = (function cljs$spec$spec_impl_$___GT_t_cljs$spec66743(spec_impl__$1,form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,meta66744){
return (new cljs.spec.t_cljs$spec66743(spec_impl__$1,form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,meta66744));
});

}

return (new cljs.spec.t_cljs$spec66743(cljs$spec$spec_impl,form,pred,gfn,cpred_QMARK_,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});
/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args66752 = [];
var len__7296__auto___66767 = arguments.length;
var i__7297__auto___66768 = (0);
while(true){
if((i__7297__auto___66768 < len__7296__auto___66767)){
args66752.push((arguments[i__7297__auto___66768]));

var G__66769 = (i__7297__auto___66768 + (1));
i__7297__auto___66768 = G__66769;
continue;
} else {
}
break;
}

var G__66754 = args66752.length;
switch (G__66754) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66752.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__66747_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__6209__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__66747_SHARP_));
if(and__6209__auto__){
return mm.call(null,p1__66747_SHARP_);
} else {
return and__6209__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__66748_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__66748_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__66749_SHARP_,p2__66750_SHARP_){
return cljs.core.assoc.call(null,p1__66749_SHARP_,retag,p2__66750_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec66755 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec66755 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta66756){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta66756 = meta66756;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec66755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_66757,meta66756__$1){
var self__ = this;
var _66757__$1 = this;
return (new cljs.spec.t_cljs$spec66755(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta66756__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_66757){
var self__ = this;
var _66757__$1 = this;
return self__.meta66756;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.prototype.call = ((function (id,predx,dval,tag){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.prototype.apply = ((function (id,predx,dval,tag){
return (function (self__,args66758){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args66758)));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (id,predx,dval,tag){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec66755.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),self__.form,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__66759){
var vec__66760 = p__66759;
var k = cljs.core.nth.call(null,vec__66760,(0),null);
var f = cljs.core.nth.call(null,vec__66760,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__66760,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__66760,k,f,___$1,id,predx,dval,tag){
return (function (p1__66751_SHARP_){
return self__.tag.call(null,p1__66751_SHARP_,k);
});})(rmap__$1,p,vec__66760,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__7055__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__7055__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__66760,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__66763){
var vec__66764 = p__66763;
var k = cljs.core.nth.call(null,vec__66764,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__7055__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta66756","meta66756",-2106540745,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec66755.cljs$lang$type = true;

cljs.spec.t_cljs$spec66755.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec66755";

cljs.spec.t_cljs$spec66755.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.spec/t_cljs$spec66755");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec66755 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec66755(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta66756){
return (new cljs.spec.t_cljs$spec66755(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta66756));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec66755(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args66771 = [];
var len__7296__auto___66778 = arguments.length;
var i__7297__auto___66779 = (0);
while(true){
if((i__7297__auto___66779 < len__7296__auto___66778)){
args66771.push((arguments[i__7297__auto___66779]));

var G__66780 = (i__7297__auto___66779 + (1));
i__7297__auto___66779 = G__66780;
continue;
} else {
}
break;
}

var G__66773 = args66771.length;
switch (G__66773) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66771.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec66774 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec66774 = (function (forms,preds,gfn,meta66775){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta66775 = meta66775;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec66774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66776,meta66775__$1){
var self__ = this;
var _66776__$1 = this;
return (new cljs.spec.t_cljs$spec66774(self__.forms,self__.preds,self__.gfn,meta66775__$1));
});

cljs.spec.t_cljs$spec66774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66776){
var self__ = this;
var _66776__$1 = this;
return self__.meta66775;
});

cljs.spec.t_cljs$spec66774.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec66774.prototype.apply = (function (self__,args66777){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args66777)));
});

cljs.spec.t_cljs$spec66774.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec66774.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec66774.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__66782 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__66783 = (i + (1));
ret = G__66782;
i = G__66783;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec66774.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__7055__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec66774.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec66774.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec66774.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec66774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta66775","meta66775",1245681122,null)], null);
});

cljs.spec.t_cljs$spec66774.cljs$lang$type = true;

cljs.spec.t_cljs$spec66774.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec66774";

cljs.spec.t_cljs$spec66774.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.spec/t_cljs$spec66774");
});

cljs.spec.__GT_t_cljs$spec66774 = (function cljs$spec$__GT_t_cljs$spec66774(forms__$1,preds__$1,gfn__$1,meta66775){
return (new cljs.spec.t_cljs$spec66774(forms__$1,preds__$1,gfn__$1,meta66775));
});

}

return (new cljs.spec.t_cljs$spec66774(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var cform = ((function (id){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__66792 = (i + (1));
i = G__66792;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id))
;
if(typeof cljs.spec.t_cljs$spec66788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec66788 = (function (or_spec_impl,keys,forms,preds,gfn,id,cform,meta66789){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.cform = cform;
this.meta66789 = meta66789;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec66788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,cform){
return (function (_66790,meta66789__$1){
var self__ = this;
var _66790__$1 = this;
return (new cljs.spec.t_cljs$spec66788(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.cform,meta66789__$1));
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,cform){
return (function (_66790){
var self__ = this;
var _66790__$1 = this;
return self__.meta66789;
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.prototype.call = ((function (id,cform){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.prototype.apply = ((function (id,cform){
return (function (self__,args66791){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args66791)));
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (id,cform){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec66788.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (this$__$1,id,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,cform))
,null)));
}
});})(___$1,id,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.getBasis = ((function (id,cform){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta66789","meta66789",-2047063312,null)], null);
});})(id,cform))
;

cljs.spec.t_cljs$spec66788.cljs$lang$type = true;

cljs.spec.t_cljs$spec66788.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec66788";

cljs.spec.t_cljs$spec66788.cljs$lang$ctorPrWriter = ((function (id,cform){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.spec/t_cljs$spec66788");
});})(id,cform))
;

cljs.spec.__GT_t_cljs$spec66788 = ((function (id,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec66788(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,cform__$1,meta66789){
return (new cljs.spec.t_cljs$spec66788(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,cform__$1,meta66789));
});})(id,cform))
;

}

return (new cljs.spec.t_cljs$spec66788(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__66819 = preds;
var vec__66821 = G__66819;
var seq__66822 = cljs.core.seq.call(null,vec__66821);
var first__66823 = cljs.core.first.call(null,seq__66822);
var seq__66822__$1 = cljs.core.next.call(null,seq__66822);
var pred = first__66823;
var preds__$1 = seq__66822__$1;
var G__66820 = forms;
var vec__66824 = G__66820;
var seq__66825 = cljs.core.seq.call(null,vec__66824);
var first__66826 = cljs.core.first.call(null,seq__66825);
var seq__66825__$1 = cljs.core.next.call(null,seq__66825);
var form = first__66826;
var forms__$1 = seq__66825__$1;
var ret__$1 = ret;
var G__66819__$1 = G__66819;
var G__66820__$1 = G__66820;
while(true){
var ret__$2 = ret__$1;
var vec__66827 = G__66819__$1;
var seq__66828 = cljs.core.seq.call(null,vec__66827);
var first__66829 = cljs.core.first.call(null,seq__66828);
var seq__66828__$1 = cljs.core.next.call(null,seq__66828);
var pred__$1 = first__66829;
var preds__$2 = seq__66828__$1;
var vec__66830 = G__66820__$1;
var seq__66831 = cljs.core.seq.call(null,vec__66830);
var first__66832 = cljs.core.first.call(null,seq__66831);
var seq__66831__$1 = cljs.core.next.call(null,seq__66831);
var form__$1 = first__66832;
var forms__$2 = seq__66831__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__66833 = nret;
var G__66834 = preds__$2;
var G__66835 = forms__$2;
ret__$1 = G__66833;
G__66819__$1 = G__66834;
G__66820__$1 = G__66835;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__66862 = forms;
var vec__66864 = G__66862;
var seq__66865 = cljs.core.seq.call(null,vec__66864);
var first__66866 = cljs.core.first.call(null,seq__66865);
var seq__66865__$1 = cljs.core.next.call(null,seq__66865);
var form = first__66866;
var forms__$1 = seq__66865__$1;
var G__66863 = preds;
var vec__66867 = G__66863;
var seq__66868 = cljs.core.seq.call(null,vec__66867);
var first__66869 = cljs.core.first.call(null,seq__66868);
var seq__66868__$1 = cljs.core.next.call(null,seq__66868);
var pred = first__66869;
var preds__$1 = seq__66868__$1;
var ret__$1 = ret;
var G__66862__$1 = G__66862;
var G__66863__$1 = G__66863;
while(true){
var ret__$2 = ret__$1;
var vec__66870 = G__66862__$1;
var seq__66871 = cljs.core.seq.call(null,vec__66870);
var first__66872 = cljs.core.first.call(null,seq__66871);
var seq__66871__$1 = cljs.core.next.call(null,seq__66871);
var form__$1 = first__66872;
var forms__$2 = seq__66871__$1;
var vec__66873 = G__66863__$1;
var seq__66874 = cljs.core.seq.call(null,vec__66873);
var first__66875 = cljs.core.first.call(null,seq__66874);
var seq__66874__$1 = cljs.core.next.call(null,seq__66874);
var pred__$1 = first__66875;
var preds__$2 = seq__66874__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__66876 = nret;
var G__66877 = forms__$2;
var G__66878 = preds__$2;
ret__$1 = G__66876;
G__66862__$1 = G__66877;
G__66863__$1 = G__66878;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec66883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec66883 = (function (and_spec_impl,forms,preds,gfn,meta66884){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta66884 = meta66884;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec66883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66885,meta66884__$1){
var self__ = this;
var _66885__$1 = this;
return (new cljs.spec.t_cljs$spec66883(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta66884__$1));
});

cljs.spec.t_cljs$spec66883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66885){
var self__ = this;
var _66885__$1 = this;
return self__.meta66884;
});

cljs.spec.t_cljs$spec66883.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec66883.prototype.apply = (function (self__,args66886){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args66886)));
});

cljs.spec.t_cljs$spec66883.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec66883.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec66883.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec66883.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec66883.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec66883.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec66883.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("s","and","s/and",668634387,null)),self__.forms)));
});

cljs.spec.t_cljs$spec66883.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta66884","meta66884",-650598103,null)], null);
});

cljs.spec.t_cljs$spec66883.cljs$lang$type = true;

cljs.spec.t_cljs$spec66883.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec66883";

cljs.spec.t_cljs$spec66883.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.spec/t_cljs$spec66883");
});

cljs.spec.__GT_t_cljs$spec66883 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec66883(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta66884){
return (new cljs.spec.t_cljs$spec66883(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta66884));
});

}

return (new cljs.spec.t_cljs$spec66883(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__66887){
var map__66890 = p__66887;
var map__66890__$1 = ((((!((map__66890 == null)))?((((map__66890.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66890.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66890):map__66890);
var op = cljs.core.get.call(null,map__66890__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__66892){
var map__66904 = p__66892;
var map__66904__$1 = ((((!((map__66904 == null)))?((((map__66904.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66904.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66904):map__66904);
var vec__66905 = cljs.core.get.call(null,map__66904__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__66906 = cljs.core.seq.call(null,vec__66905);
var first__66907 = cljs.core.first.call(null,seq__66906);
var seq__66906__$1 = cljs.core.next.call(null,seq__66906);
var p1 = first__66907;
var pr = seq__66906__$1;
var ps = vec__66905;
var vec__66908 = cljs.core.get.call(null,map__66904__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__66909 = cljs.core.seq.call(null,vec__66908);
var first__66910 = cljs.core.first.call(null,seq__66909);
var seq__66909__$1 = cljs.core.next.call(null,seq__66909);
var k1 = first__66910;
var kr = seq__66909__$1;
var ks = vec__66908;
var vec__66911 = cljs.core.get.call(null,map__66904__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__66912 = cljs.core.seq.call(null,vec__66911);
var first__66913 = cljs.core.first.call(null,seq__66912);
var seq__66912__$1 = cljs.core.next.call(null,seq__66912);
var f1 = first__66913;
var fr = seq__66912__$1;
var forms = vec__66911;
var ret = cljs.core.get.call(null,map__66904__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__66904__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__7303__auto__ = [];
var len__7296__auto___66916 = arguments.length;
var i__7297__auto___66917 = (0);
while(true){
if((i__7297__auto___66917 < len__7296__auto___66916)){
args__7303__auto__.push((arguments[i__7297__auto___66917]));

var G__66918 = (i__7297__auto___66917 + (1));
i__7297__auto___66917 = G__66918;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq66915){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66915));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__7055__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__7055__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__6221__auto__ = ks;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__66919_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__66919_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__6221__auto__ = cljs.core.seq.call(null,ks);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__6221__auto__ = cljs.core.seq.call(null,forms);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__66920_SHARP_){
return cljs.core.nth.call(null,p1__66920_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__66930 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__66933 = cljs.core.nth.call(null,vec__66930,(0),null);
var seq__66934 = cljs.core.seq.call(null,vec__66933);
var first__66935 = cljs.core.first.call(null,seq__66934);
var seq__66934__$1 = cljs.core.next.call(null,seq__66934);
var p1 = first__66935;
var pr = seq__66934__$1;
var ps__$1 = vec__66933;
var vec__66936 = cljs.core.nth.call(null,vec__66930,(1),null);
var k1 = cljs.core.nth.call(null,vec__66936,(0),null);
var ks__$1 = vec__66936;
var forms__$1 = cljs.core.nth.call(null,vec__66930,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__7303__auto__ = [];
var len__7296__auto___66940 = arguments.length;
var i__7297__auto___66941 = (0);
while(true){
if((i__7297__auto___66941 < len__7296__auto___66940)){
args__7303__auto__.push((arguments[i__7297__auto___66941]));

var G__66942 = (i__7297__auto___66941 + (1));
i__7297__auto___66941 = G__66942;
continue;
} else {
}
break;
}

var argseq__7304__auto__ = ((((0) < args__7303__auto__.length))?(new cljs.core.IndexedSeq(args__7303__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__7304__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq66939){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq66939));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__6209__auto__ = p1;
if(cljs.core.truth_(and__6209__auto__)){
return p2;
} else {
return and__6209__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__6221__auto__ = p1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null));
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__6221__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__6221__auto__){
return or__6221__auto__;
} else {
var or__6221__auto____$1 = (function (){var and__6209__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve.call(null,p1)));
if(cljs.core.truth_(and__6209__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__6209__auto__;
}
})();
if(cljs.core.truth_(or__6221__auto____$1)){
return or__6221__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__66946 = cljs.spec.reg_resolve.call(null,p);
var map__66946__$1 = ((((!((map__66946 == null)))?((((map__66946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66946):map__66946);
var p__$1 = map__66946__$1;
var op = cljs.core.get.call(null,map__66946__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__66946__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__66946__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__66946__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__66946__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__66948 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__66948)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__66948)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__66948)){
var and__6209__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__6209__auto__)){
var or__6221__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return ret;
}
}
} else {
return and__6209__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__66948)){
var or__6221__auto__ = (p1 === p2);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__66948)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__66948)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__66967 = cljs.spec.reg_resolve.call(null,p);
var map__66967__$1 = ((((!((map__66967 == null)))?((((map__66967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66967):map__66967);
var p__$1 = map__66967__$1;
var vec__66968 = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__66969 = cljs.core.seq.call(null,vec__66968);
var first__66970 = cljs.core.first.call(null,seq__66969);
var seq__66969__$1 = cljs.core.next.call(null,seq__66969);
var p0 = first__66970;
var pr = seq__66969__$1;
var ps = vec__66968;
var vec__66971 = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__66971,(0),null);
var ks = vec__66971;
var op = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__66967__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__66975 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__66975)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__66975)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__66975)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__66975)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__66975)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__66975)){
var vec__66976 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__66979 = cljs.core.nth.call(null,vec__66976,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__66979,(0),null);
var vec__66982 = cljs.core.nth.call(null,vec__66976,(1),null);
var k0 = cljs.core.nth.call(null,vec__66982,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null);
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__66988 = cljs.spec.reg_resolve.call(null,p);
var map__66988__$1 = ((((!((map__66988 == null)))?((((map__66988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66988):map__66988);
var p__$1 = map__66988__$1;
var op = cljs.core.get.call(null,map__66988__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__66988__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__66988__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__66988,map__66988__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__66988,map__66988__$1,p__$1,op,ps,splice))
;
var G__66990 = op;
if(cljs.core._EQ_.call(null,null,G__66990)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__66990)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__66990)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__66990)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__66990)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__66990)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__67001 = cljs.spec.reg_resolve.call(null,p);
var map__67001__$1 = ((((!((map__67001 == null)))?((((map__67001.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67001.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67001):map__67001);
var p__$1 = map__67001__$1;
var vec__67002 = cljs.core.get.call(null,map__67001__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__67003 = cljs.core.seq.call(null,vec__67002);
var first__67004 = cljs.core.first.call(null,seq__67003);
var seq__67003__$1 = cljs.core.next.call(null,seq__67003);
var p0 = first__67004;
var pr = seq__67003__$1;
var ps = vec__67002;
var vec__67005 = cljs.core.get.call(null,map__67001__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__67006 = cljs.core.seq.call(null,vec__67005);
var first__67007 = cljs.core.first.call(null,seq__67006);
var seq__67006__$1 = cljs.core.next.call(null,seq__67006);
var k0 = first__67007;
var kr = seq__67006__$1;
var ks = vec__67005;
var op = cljs.core.get.call(null,map__67001__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__67001__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__67001__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__67001__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__67001__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__67001__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__67009 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__67009)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__67009)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__67009)){
var temp__4657__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__67009)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__67009)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__67009,map__67001,map__67001__$1,p__$1,vec__67002,seq__67003,first__67004,seq__67003__$1,p0,pr,ps,vec__67005,seq__67006,first__67007,seq__67006__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__66991_SHARP_){
return cljs$spec$deriv.call(null,p1__66991_SHARP_,x);
});})(G__67009,map__67001,map__67001__$1,p__$1,vec__67002,seq__67003,first__67004,seq__67003__$1,p0,pr,ps,vec__67005,seq__67006,first__67007,seq__67006__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__67009)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__67013 = cljs.spec.reg_resolve.call(null,p);
var map__67013__$1 = ((((!((map__67013 == null)))?((((map__67013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67013):map__67013);
var p__$1 = map__67013__$1;
var op = cljs.core.get.call(null,map__67013__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__67013__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__67013__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__67013__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__67013__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__67013__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__67013__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.truth_(p__$1)){
var G__67015 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__67015)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__67015)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__67015)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__67015)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__7055__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__6221__auto__ = cljs.core.seq.call(null,ks);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),(function (){var or__6221__auto__ = cljs.core.seq.call(null,forms);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__67015)){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__67015)){
var x__7055__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__7055__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto____$1);
})(),x__7055__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__67029 = input;
var x = cljs.core.nth.call(null,vec__67029,(0),null);
var input__$1 = vec__67029;
var map__67032 = cljs.spec.reg_resolve.call(null,p);
var map__67032__$1 = ((((!((map__67032 == null)))?((((map__67032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67032):map__67032);
var p__$1 = map__67032__$1;
var op = cljs.core.get.call(null,map__67032__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__67032__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__67032__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__67032__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__67032__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__67032__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__67032__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__67029,x,input__$1,map__67032,map__67032__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return cljs.core.PersistentArrayMap.fromArray([path__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
});})(vec__67029,x,input__$1,map__67032,map__67032__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__67034 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__67034)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__67034)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__67034)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__67034)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__6221__auto__ = cljs.core.seq.call(null,ks);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__6221__auto__ = cljs.core.seq.call(null,forms);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__67035 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__67034,vec__67029,x,input__$1,map__67032,map__67032__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__67038){
var vec__67039 = p__67038;
var p__$2 = cljs.core.nth.call(null,vec__67039,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__67034,vec__67029,x,input__$1,map__67032,map__67032__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__67035,(0),null);
var k = cljs.core.nth.call(null,vec__67035,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__67035,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__6221__auto__ = form__$1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__67034)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (G__67034,vec__67029,x,input__$1,map__67032,map__67032__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__6221__auto__ = form__$1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__67034,vec__67029,x,input__$1,map__67032,map__67032__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__6221__auto__ = cljs.core.seq.call(null,ks);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__6221__auto__ = cljs.core.seq.call(null,forms);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__67034)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__67048 = cljs.spec.reg_resolve.call(null,p);
var map__67048__$1 = ((((!((map__67048 == null)))?((((map__67048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__67048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__67048):map__67048);
var p__$1 = map__67048__$1;
var op = cljs.core.get.call(null,map__67048__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__67048__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__67048__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__67048__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__67048__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__67048__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__67048__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ret = cljs.core.get.call(null,map__67048__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var id = cljs.core.get.call(null,map__67048__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__67048,map__67048__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__67048,map__67048__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__6209__auto__ = rmap__$1;
if(cljs.core.truth_(and__6209__auto__)){
var and__6209__auto____$1 = id;
if(cljs.core.truth_(and__6209__auto____$1)){
var and__6209__auto____$2 = k;
if(cljs.core.truth_(and__6209__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__6209__auto____$2;
}
} else {
return and__6209__auto____$1;
}
} else {
return and__6209__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__67048,map__67048__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__6221__auto__ = f__$1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return p__$2;
}
})());
});})(map__67048,map__67048__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__6221__auto__ = f__$1;
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__67048,map__67048__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__6221__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__6221__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__6221__auto__){
return or__6221__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__67048,map__67048__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1))
;
var or__6221__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__67051 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__67051)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__67051)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
if(cljs.core.truth_(p__$1)){
var G__67052 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__67052)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__67052)){
var temp__4657__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__67052)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__67052)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__67052)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__67052)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4657__auto__,G__67052,or__6221__auto__,map__67048,map__67048__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens){
return (function (p1__67042_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__67042_SHARP_);
});})(g,temp__4657__auto__,G__67052,or__6221__auto__,map__67048,map__67048__$1,p__$1,op,ps,ks,p1,p2,forms,splice,ret,id,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__67053){
while(true){
var vec__67057 = p__67053;
var seq__67058 = cljs.core.seq.call(null,vec__67057);
var first__67059 = cljs.core.first.call(null,seq__67058);
var seq__67058__$1 = cljs.core.next.call(null,seq__67058);
var x = first__67059;
var xs = seq__67058__$1;
var data = vec__67057;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__67060 = dp;
var G__67061 = xs;
p = G__67060;
p__67053 = G__67061;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__67075 = input;
var vec__67076 = G__67075;
var seq__67077 = cljs.core.seq.call(null,vec__67076);
var first__67078 = cljs.core.first.call(null,seq__67077);
var seq__67077__$1 = cljs.core.next.call(null,seq__67077);
var x = first__67078;
var xs = seq__67077__$1;
var data = vec__67076;
var i = (0);
var p__$1 = p;
var G__67075__$1 = G__67075;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__67079 = G__67075__$1;
var seq__67080 = cljs.core.seq.call(null,vec__67079);
var first__67081 = cljs.core.first.call(null,seq__67080);
var seq__67080__$1 = cljs.core.next.call(null,seq__67080);
var x__$1 = first__67081;
var xs__$1 = seq__67080__$1;
var data__$1 = vec__67079;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__67082 = dp;
var G__67083 = xs__$1;
var G__67084 = (i__$2 + (1));
p__$1 = G__67082;
G__67075__$1 = G__67083;
i__$1 = G__67084;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
} else {
var or__6221__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__6221__auto__)){
return or__6221__auto__;
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], true, false);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec67089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec67089 = (function (regex_spec_impl,re,gfn,meta67090){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta67090 = meta67090;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec67089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_67091,meta67090__$1){
var self__ = this;
var _67091__$1 = this;
return (new cljs.spec.t_cljs$spec67089(self__.regex_spec_impl,self__.re,self__.gfn,meta67090__$1));
});

cljs.spec.t_cljs$spec67089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_67091){
var self__ = this;
var _67091__$1 = this;
return self__.meta67090;
});

cljs.spec.t_cljs$spec67089.prototype.call = (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec67089.prototype.apply = (function (self__,args67092){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args67092)));
});

cljs.spec.t_cljs$spec67089.prototype.cljs$core$IFn$_invoke$arity$1 = (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});

cljs.spec.t_cljs$spec67089.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec67089.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec67089.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});

cljs.spec.t_cljs$spec67089.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec67089.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec67089.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec67089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta67090","meta67090",1646100119,null)], null);
});

cljs.spec.t_cljs$spec67089.cljs$lang$type = true;

cljs.spec.t_cljs$spec67089.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec67089";

cljs.spec.t_cljs$spec67089.cljs$lang$ctorPrWriter = (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.spec/t_cljs$spec67089");
});

cljs.spec.__GT_t_cljs$spec67089 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec67089(regex_spec_impl__$1,re__$1,gfn__$1,meta67090){
return (new cljs.spec.t_cljs$spec67089(regex_spec_impl__$1,re__$1,gfn__$1,meta67090));
});

}

return (new cljs.spec.t_cljs$spec67089(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__6209__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__6209__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__6209__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__67093_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__67093_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__67097 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__67097,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
if(cljs.core.truth_((function (){var and__6209__auto__ = argspec;
if(cljs.core.truth_(and__6209__auto__)){
return retspec;
} else {
return and__6209__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (c/and argspec retspec)"));
}

var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec67107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec67107 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta67108){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta67108 = meta67108;
this.cljs$lang$protocol_mask$partition0$ = 393217;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec67107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_67109,meta67108__$1){
var self__ = this;
var _67109__$1 = this;
return (new cljs.spec.t_cljs$spec67107(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta67108__$1));
});})(specs))
;

cljs.spec.t_cljs$spec67107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_67109){
var self__ = this;
var _67109__$1 = this;
return self__.meta67108;
});})(specs))
;

cljs.spec.t_cljs$spec67107.prototype.call = ((function (specs){
return (function (self__,x){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(specs))
;

cljs.spec.t_cljs$spec67107.prototype.apply = ((function (specs){
return (function (self__,args67110){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args67110)));
});})(specs))
;

cljs.spec.t_cljs$spec67107.prototype.cljs$core$IFn$_invoke$arity$1 = ((function (specs){
return (function (x){
var self__ = this;
var this$ = this;
return cljs.spec.valid_QMARK_.call(null,this$,x);
});})(specs))
;

cljs.spec.t_cljs$spec67107.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec67107.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.fn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec67107.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.fn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e67111){if((e67111 instanceof Error)){
var t = e67111;
return t;
} else {
throw e67111;

}
}})();
if((ret instanceof Error)){
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return cljs.core.PersistentArrayMap.fromArray([path,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], true, false);
}
});})(specs))
;

cljs.spec.t_cljs$spec67107.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
if(cljs.core.truth_(self__.fnspec)){
return null;
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$4,specs){
return (function() { 
var G__67114__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__7207__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_67112_67115 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_67113_67116 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_67112_67115,_STAR_print_fn_STAR_67113_67116,sb__7207__auto__,___$4,specs){
return (function (x__7208__auto__){
return sb__7207__auto__.append(x__7208__auto__);
});})(_STAR_print_newline_STAR_67112_67115,_STAR_print_fn_STAR_67113_67116,sb__7207__auto__,___$4,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_67113_67116;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_67112_67115;
}
return [cljs.core.str(sb__7207__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec));
};
var G__67114 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__67117__i = 0, G__67117__a = new Array(arguments.length -  0);
while (G__67117__i < G__67117__a.length) {G__67117__a[G__67117__i] = arguments[G__67117__i + 0]; ++G__67117__i;}
  args = new cljs.core.IndexedSeq(G__67117__a,0);
} 
return G__67114__delegate.call(this,args);};
G__67114.cljs$lang$maxFixedArity = 0;
G__67114.cljs$lang$applyTo = (function (arglist__67118){
var args = cljs.core.seq(arglist__67118);
return G__67114__delegate(args);
});
G__67114.cljs$core$IFn$_invoke$arity$variadic = G__67114__delegate;
return G__67114;
})()
;})(___$4,specs))
);
}
}
});})(specs))
;

cljs.spec.t_cljs$spec67107.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec67107.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),(function (){var x__7055__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})(),(function (){var x__7055__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__7055__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec67107.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta67108","meta67108",1730032867,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec67107.cljs$lang$type = true;

cljs.spec.t_cljs$spec67107.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec67107";

cljs.spec.t_cljs$spec67107.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__6827__auto__,writer__6828__auto__,opt__6829__auto__){
return cljs.core._write.call(null,writer__6828__auto__,"cljs.spec/t_cljs$spec67107");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec67107 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec67107(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta67108){
return (new cljs.spec.t_cljs$spec67107(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta67108));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec67107(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","any","cljs.spec/any",1039429974),cljs.core.list(new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",775251713,null),cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),new cljs.core.Keyword(null,"gen","gen",142575302),new cljs.core.Symbol("cljs.spec.impl.gen","any","cljs.spec.impl.gen/any",-1450752257,null)),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.core","constantly","cljs.core/constantly",119002258,null),true),cljs.core.constantly.call(null,true),cljs.spec.impl.gen.any,null));
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67119#","p1__67119#",537228776,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__67119#","p1__67119#",537228776,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__67119#","p1__67119#",537228776,null))))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__67119#","p1__67119#",537228776,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__67119#","p1__67119#",537228776,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__67119#","p1__67119#",537228776,null)))),(function (p1__67119_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__67119_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__67119_SHARP_));
}),null,true));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args67121 = [];
var len__7296__auto___67124 = arguments.length;
var i__7297__auto___67125 = (0);
while(true){
if((i__7297__auto___67125 < len__7296__auto___67124)){
args67121.push((arguments[i__7297__auto___67125]));

var G__67126 = (i__7297__auto___67125 + (1));
i__7297__auto___67125 = G__67126;
continue;
} else {
}
break;
}

var G__67123 = args67121.length;
switch (G__67123) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args67121.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__67120_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__67120_SHARP_,cljs.spec.conform.call(null,spec,p1__67120_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * returns a predicate function that checks *coll-check-limit* items in a collection with pred
 */
cljs.spec.coll_checker = (function cljs$spec$coll_checker(pred){
var check_QMARK_ = (function (p1__67128_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__67128_SHARP_);
});
return ((function (check_QMARK_){
return (function (coll){
return ((coll == null)) || ((cljs.core.coll_QMARK_.call(null,coll)) && (cljs.core.every_QMARK_.call(null,check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,coll))));
});
;})(check_QMARK_))
});
/**
 * returns a function of no args that returns a generator of
 *   collections of items conforming to pred, with the same shape as
 *   init-coll
 */
cljs.spec.coll_gen = (function cljs$spec$coll_gen(pred,init_coll){
var init = cljs.core.empty.call(null,init_coll);
return ((function (init){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (init){
return (function (p1__67129_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__67129_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__67129_SHARP_);
}
});})(init))
,cljs.spec.impl.gen.vector.call(null,cljs.spec.gen.call(null,pred)));
});
;})(init))
});

//# sourceMappingURL=spec.js.map