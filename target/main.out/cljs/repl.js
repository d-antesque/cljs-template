// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__2396){
var map__2397 = p__2396;
var map__2397__$1 = ((((!((map__2397 == null)))?(((((map__2397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2397):map__2397);
var m = map__2397__$1;
var n = cljs.core.get.call(null,map__2397__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__2397__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__2399_2421 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2400_2422 = null;
var count__2401_2423 = (0);
var i__2402_2424 = (0);
while(true){
if((i__2402_2424 < count__2401_2423)){
var f_2425 = cljs.core._nth.call(null,chunk__2400_2422,i__2402_2424);
cljs.core.println.call(null,"  ",f_2425);


var G__2426 = seq__2399_2421;
var G__2427 = chunk__2400_2422;
var G__2428 = count__2401_2423;
var G__2429 = (i__2402_2424 + (1));
seq__2399_2421 = G__2426;
chunk__2400_2422 = G__2427;
count__2401_2423 = G__2428;
i__2402_2424 = G__2429;
continue;
} else {
var temp__4657__auto___2430 = cljs.core.seq.call(null,seq__2399_2421);
if(temp__4657__auto___2430){
var seq__2399_2431__$1 = temp__4657__auto___2430;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2399_2431__$1)){
var c__4319__auto___2432 = cljs.core.chunk_first.call(null,seq__2399_2431__$1);
var G__2433 = cljs.core.chunk_rest.call(null,seq__2399_2431__$1);
var G__2434 = c__4319__auto___2432;
var G__2435 = cljs.core.count.call(null,c__4319__auto___2432);
var G__2436 = (0);
seq__2399_2421 = G__2433;
chunk__2400_2422 = G__2434;
count__2401_2423 = G__2435;
i__2402_2424 = G__2436;
continue;
} else {
var f_2437 = cljs.core.first.call(null,seq__2399_2431__$1);
cljs.core.println.call(null,"  ",f_2437);


var G__2438 = cljs.core.next.call(null,seq__2399_2431__$1);
var G__2439 = null;
var G__2440 = (0);
var G__2441 = (0);
seq__2399_2421 = G__2438;
chunk__2400_2422 = G__2439;
count__2401_2423 = G__2440;
i__2402_2424 = G__2441;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_2442 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_2442);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_2442)))?cljs.core.second.call(null,arglists_2442):arglists_2442));
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
var seq__2403_2443 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__2404_2444 = null;
var count__2405_2445 = (0);
var i__2406_2446 = (0);
while(true){
if((i__2406_2446 < count__2405_2445)){
var vec__2407_2447 = cljs.core._nth.call(null,chunk__2404_2444,i__2406_2446);
var name_2448 = cljs.core.nth.call(null,vec__2407_2447,(0),null);
var map__2410_2449 = cljs.core.nth.call(null,vec__2407_2447,(1),null);
var map__2410_2450__$1 = ((((!((map__2410_2449 == null)))?(((((map__2410_2449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2410_2449.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2410_2449):map__2410_2449);
var doc_2451 = cljs.core.get.call(null,map__2410_2450__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2452 = cljs.core.get.call(null,map__2410_2450__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2448);

cljs.core.println.call(null," ",arglists_2452);

if(cljs.core.truth_(doc_2451)){
cljs.core.println.call(null," ",doc_2451);
} else {
}


var G__2453 = seq__2403_2443;
var G__2454 = chunk__2404_2444;
var G__2455 = count__2405_2445;
var G__2456 = (i__2406_2446 + (1));
seq__2403_2443 = G__2453;
chunk__2404_2444 = G__2454;
count__2405_2445 = G__2455;
i__2406_2446 = G__2456;
continue;
} else {
var temp__4657__auto___2457 = cljs.core.seq.call(null,seq__2403_2443);
if(temp__4657__auto___2457){
var seq__2403_2458__$1 = temp__4657__auto___2457;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2403_2458__$1)){
var c__4319__auto___2459 = cljs.core.chunk_first.call(null,seq__2403_2458__$1);
var G__2460 = cljs.core.chunk_rest.call(null,seq__2403_2458__$1);
var G__2461 = c__4319__auto___2459;
var G__2462 = cljs.core.count.call(null,c__4319__auto___2459);
var G__2463 = (0);
seq__2403_2443 = G__2460;
chunk__2404_2444 = G__2461;
count__2405_2445 = G__2462;
i__2406_2446 = G__2463;
continue;
} else {
var vec__2412_2464 = cljs.core.first.call(null,seq__2403_2458__$1);
var name_2465 = cljs.core.nth.call(null,vec__2412_2464,(0),null);
var map__2415_2466 = cljs.core.nth.call(null,vec__2412_2464,(1),null);
var map__2415_2467__$1 = ((((!((map__2415_2466 == null)))?(((((map__2415_2466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__2415_2466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__2415_2466):map__2415_2466);
var doc_2468 = cljs.core.get.call(null,map__2415_2467__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_2469 = cljs.core.get.call(null,map__2415_2467__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_2465);

cljs.core.println.call(null," ",arglists_2469);

if(cljs.core.truth_(doc_2468)){
cljs.core.println.call(null," ",doc_2468);
} else {
}


var G__2470 = cljs.core.next.call(null,seq__2403_2458__$1);
var G__2471 = null;
var G__2472 = (0);
var G__2473 = (0);
seq__2403_2443 = G__2470;
chunk__2404_2444 = G__2471;
count__2405_2445 = G__2472;
i__2406_2446 = G__2473;
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

var seq__2417 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__2418 = null;
var count__2419 = (0);
var i__2420 = (0);
while(true){
if((i__2420 < count__2419)){
var role = cljs.core._nth.call(null,chunk__2418,i__2420);
var temp__4657__auto___2474__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2474__$1)){
var spec_2475 = temp__4657__auto___2474__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2475));
} else {
}


var G__2476 = seq__2417;
var G__2477 = chunk__2418;
var G__2478 = count__2419;
var G__2479 = (i__2420 + (1));
seq__2417 = G__2476;
chunk__2418 = G__2477;
count__2419 = G__2478;
i__2420 = G__2479;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__2417);
if(temp__4657__auto____$1){
var seq__2417__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__2417__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__2417__$1);
var G__2480 = cljs.core.chunk_rest.call(null,seq__2417__$1);
var G__2481 = c__4319__auto__;
var G__2482 = cljs.core.count.call(null,c__4319__auto__);
var G__2483 = (0);
seq__2417 = G__2480;
chunk__2418 = G__2481;
count__2419 = G__2482;
i__2420 = G__2483;
continue;
} else {
var role = cljs.core.first.call(null,seq__2417__$1);
var temp__4657__auto___2484__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___2484__$2)){
var spec_2485 = temp__4657__auto___2484__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_2485));
} else {
}


var G__2486 = cljs.core.next.call(null,seq__2417__$1);
var G__2487 = null;
var G__2488 = (0);
var G__2489 = (0);
seq__2417 = G__2486;
chunk__2418 = G__2487;
count__2419 = G__2488;
i__2420 = G__2489;
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
