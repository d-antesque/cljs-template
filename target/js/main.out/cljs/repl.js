// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__2376){
var map__2377 = p__2376;
var map__2377__$1 = ((((!((map__2377 == null)))?(((((map__2377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2377):map__2377);
var m = map__2377__$1;
var n = cljs.core.get.call(null,map__2377__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__2377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__2379_2401 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2380_2402 = null;
var count__2381_2403 = (0);
var i__2382_2404 = (0);
while(true){
if((i__2382_2404 < count__2381_2403)){
var f_2405 = cljs.core._nth.call(null,chunk__2380_2402,i__2382_2404);
cljs.core.println.call(null,"  ",f_2405);


var G__2406 = seq__2379_2401;
var G__2407 = chunk__2380_2402;
var G__2408 = count__2381_2403;
var G__2409 = (i__2382_2404 + (1));
seq__2379_2401 = G__2406;
chunk__2380_2402 = G__2407;
count__2381_2403 = G__2408;
i__2382_2404 = G__2409;
continue;
} else {
var temp__4657__auto___2410 = cljs.core.seq.call(null,seq__2379_2401);
if(temp__4657__auto___2410){
var seq__2379_2411__$1 = temp__4657__auto___2410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2379_2411__$1)){
var c__4319__auto___2412 = cljs.core.chunk_first.call(null,seq__2379_2411__$1);
var G__2413 = cljs.core.chunk_rest.call(null,seq__2379_2411__$1);
var G__2414 = c__4319__auto___2412;
var G__2415 = cljs.core.count.call(null,c__4319__auto___2412);
var G__2416 = (0);
seq__2379_2401 = G__2413;
chunk__2380_2402 = G__2414;
count__2381_2403 = G__2415;
i__2382_2404 = G__2416;
continue;
} else {
var f_2417 = cljs.core.first.call(null,seq__2379_2411__$1);
cljs.core.println.call(null,"  ",f_2417);


var G__2418 = cljs.core.next.call(null,seq__2379_2411__$1);
var G__2419 = null;
var G__2420 = (0);
var G__2421 = (0);
seq__2379_2401 = G__2418;
chunk__2380_2402 = G__2419;
count__2381_2403 = G__2420;
i__2382_2404 = G__2421;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2422 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2422);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2422)))?cljs.core.second.call(null,arglists_2422):arglists_2422));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__2383_2423 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2384_2424 = null;
var count__2385_2425 = (0);
var i__2386_2426 = (0);
while(true){
if((i__2386_2426 < count__2385_2425)){
var vec__2387_2427 = cljs.core._nth.call(null,chunk__2384_2424,i__2386_2426);
var name_2428 = cljs.core.nth.call(null,vec__2387_2427,(0),null);
var map__2390_2429 = cljs.core.nth.call(null,vec__2387_2427,(1),null);
var map__2390_2430__$1 = ((((!((map__2390_2429 == null)))?(((((map__2390_2429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2390_2429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2390_2429):map__2390_2429);
var doc_2431 = cljs.core.get.call(null,map__2390_2430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2432 = cljs.core.get.call(null,map__2390_2430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2428);

cljs.core.println.call(null," ",arglists_2432);

if(cljs.core.truth_(doc_2431)){
cljs.core.println.call(null," ",doc_2431);
} else {
}


var G__2433 = seq__2383_2423;
var G__2434 = chunk__2384_2424;
var G__2435 = count__2385_2425;
var G__2436 = (i__2386_2426 + (1));
seq__2383_2423 = G__2433;
chunk__2384_2424 = G__2434;
count__2385_2425 = G__2435;
i__2386_2426 = G__2436;
continue;
} else {
var temp__4657__auto___2437 = cljs.core.seq.call(null,seq__2383_2423);
if(temp__4657__auto___2437){
var seq__2383_2438__$1 = temp__4657__auto___2437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2383_2438__$1)){
var c__4319__auto___2439 = cljs.core.chunk_first.call(null,seq__2383_2438__$1);
var G__2440 = cljs.core.chunk_rest.call(null,seq__2383_2438__$1);
var G__2441 = c__4319__auto___2439;
var G__2442 = cljs.core.count.call(null,c__4319__auto___2439);
var G__2443 = (0);
seq__2383_2423 = G__2440;
chunk__2384_2424 = G__2441;
count__2385_2425 = G__2442;
i__2386_2426 = G__2443;
continue;
} else {
var vec__2392_2444 = cljs.core.first.call(null,seq__2383_2438__$1);
var name_2445 = cljs.core.nth.call(null,vec__2392_2444,(0),null);
var map__2395_2446 = cljs.core.nth.call(null,vec__2392_2444,(1),null);
var map__2395_2447__$1 = ((((!((map__2395_2446 == null)))?(((((map__2395_2446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2395_2446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2395_2446):map__2395_2446);
var doc_2448 = cljs.core.get.call(null,map__2395_2447__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2449 = cljs.core.get.call(null,map__2395_2447__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2445);

cljs.core.println.call(null," ",arglists_2449);

if(cljs.core.truth_(doc_2448)){
cljs.core.println.call(null," ",doc_2448);
} else {
}


var G__2450 = cljs.core.next.call(null,seq__2383_2438__$1);
var G__2451 = null;
var G__2452 = (0);
var G__2453 = (0);
seq__2383_2423 = G__2450;
chunk__2384_2424 = G__2451;
count__2385_2425 = G__2452;
i__2386_2426 = G__2453;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__2397 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2398 = null;
var count__2399 = (0);
var i__2400 = (0);
while(true){
if((i__2400 < count__2399)){
var role = cljs.core._nth.call(null,chunk__2398,i__2400);
var temp__4657__auto___2454__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2454__$1)){
var spec_2455 = temp__4657__auto___2454__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2455));
} else {
}


var G__2456 = seq__2397;
var G__2457 = chunk__2398;
var G__2458 = count__2399;
var G__2459 = (i__2400 + (1));
seq__2397 = G__2456;
chunk__2398 = G__2457;
count__2399 = G__2458;
i__2400 = G__2459;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__2397);
if(temp__4657__auto____$1){
var seq__2397__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2397__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2397__$1);
var G__2460 = cljs.core.chunk_rest.call(null,seq__2397__$1);
var G__2461 = c__4319__auto__;
var G__2462 = cljs.core.count.call(null,c__4319__auto__);
var G__2463 = (0);
seq__2397 = G__2460;
chunk__2398 = G__2461;
count__2399 = G__2462;
i__2400 = G__2463;
continue;
} else {
var role = cljs.core.first.call(null,seq__2397__$1);
var temp__4657__auto___2464__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2464__$2)){
var spec_2465 = temp__4657__auto___2464__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2465));
} else {
}


var G__2466 = cljs.core.next.call(null,seq__2397__$1);
var G__2467 = null;
var G__2468 = (0);
var G__2469 = (0);
seq__2397 = G__2466;
chunk__2398 = G__2467;
count__2399 = G__2468;
i__2400 = G__2469;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
