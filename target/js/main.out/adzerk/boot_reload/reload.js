// Compiled by ClojureScript 1.10.238 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (function adzerk$boot_reload$reload$page_uri(){
return (new goog.Uri(window.location.href));
});
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.call(null).resolve(uri).getPath();
});
/**
 * Produce the changed goog.Uri iff the (relative) path is different
 *   compared to the content of changed (a string). Return nil otherwise.
 */
adzerk.boot_reload.reload.changed_uri = (function adzerk$boot_reload$reload$changed_uri(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__1451_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__1451_SHARP_),path);
});})(path))
,changed));
if(cljs.core.truth_(temp__4657__auto__)){
var changed__$1 = temp__4657__auto__;
return goog.Uri.parse(changed__$1);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__1452 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__1453 = null;
var count__1454 = (0);
var i__1455 = (0);
while(true){
if((i__1455 < count__1454)){
var s = cljs.core._nth.call(null,chunk__1453,i__1455);
var temp__4657__auto___1456 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___1456)){
var sheet_1457 = temp__4657__auto___1456;
var temp__4657__auto___1458__$1 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_1457.href,changed);
if(cljs.core.truth_(temp__4657__auto___1458__$1)){
var href_uri_1459 = temp__4657__auto___1458__$1;
sheet_1457.ownerNode.href = href_uri_1459.makeUnique().toString();
} else {
}
} else {
}


var G__1460 = seq__1452;
var G__1461 = chunk__1453;
var G__1462 = count__1454;
var G__1463 = (i__1455 + (1));
seq__1452 = G__1460;
chunk__1453 = G__1461;
count__1454 = G__1462;
i__1455 = G__1463;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__1452);
if(temp__4657__auto__){
var seq__1452__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1452__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__1452__$1);
var G__1464 = cljs.core.chunk_rest.call(null,seq__1452__$1);
var G__1465 = c__4319__auto__;
var G__1466 = cljs.core.count.call(null,c__4319__auto__);
var G__1467 = (0);
seq__1452 = G__1464;
chunk__1453 = G__1465;
count__1454 = G__1466;
i__1455 = G__1467;
continue;
} else {
var s = cljs.core.first.call(null,seq__1452__$1);
var temp__4657__auto___1468__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4657__auto___1468__$1)){
var sheet_1469 = temp__4657__auto___1468__$1;
var temp__4657__auto___1470__$2 = adzerk.boot_reload.reload.changed_uri.call(null,sheet_1469.href,changed);
if(cljs.core.truth_(temp__4657__auto___1470__$2)){
var href_uri_1471 = temp__4657__auto___1470__$2;
sheet_1469.ownerNode.href = href_uri_1471.makeUnique().toString();
} else {
}
} else {
}


var G__1472 = cljs.core.next.call(null,seq__1452__$1);
var G__1473 = null;
var G__1474 = (0);
var G__1475 = (0);
seq__1452 = G__1472;
chunk__1453 = G__1473;
count__1454 = G__1474;
i__1455 = G__1475;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__1476 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__1477 = null;
var count__1478 = (0);
var i__1479 = (0);
while(true){
if((i__1479 < count__1478)){
var s = cljs.core._nth.call(null,chunk__1477,i__1479);
var temp__4657__auto___1480 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___1480)){
var image_1481 = temp__4657__auto___1480;
var temp__4657__auto___1482__$1 = adzerk.boot_reload.reload.changed_uri.call(null,image_1481.src,changed);
if(cljs.core.truth_(temp__4657__auto___1482__$1)){
var href_uri_1483 = temp__4657__auto___1482__$1;
image_1481.src = href_uri_1483.makeUnique().toString();
} else {
}
} else {
}


var G__1484 = seq__1476;
var G__1485 = chunk__1477;
var G__1486 = count__1478;
var G__1487 = (i__1479 + (1));
seq__1476 = G__1484;
chunk__1477 = G__1485;
count__1478 = G__1486;
i__1479 = G__1487;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__1476);
if(temp__4657__auto__){
var seq__1476__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1476__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__1476__$1);
var G__1488 = cljs.core.chunk_rest.call(null,seq__1476__$1);
var G__1489 = c__4319__auto__;
var G__1490 = cljs.core.count.call(null,c__4319__auto__);
var G__1491 = (0);
seq__1476 = G__1488;
chunk__1477 = G__1489;
count__1478 = G__1490;
i__1479 = G__1491;
continue;
} else {
var s = cljs.core.first.call(null,seq__1476__$1);
var temp__4657__auto___1492__$1 = (images[s]);
if(cljs.core.truth_(temp__4657__auto___1492__$1)){
var image_1493 = temp__4657__auto___1492__$1;
var temp__4657__auto___1494__$2 = adzerk.boot_reload.reload.changed_uri.call(null,image_1493.src,changed);
if(cljs.core.truth_(temp__4657__auto___1494__$2)){
var href_uri_1495 = temp__4657__auto___1494__$2;
image_1493.src = href_uri_1495.makeUnique().toString();
} else {
}
} else {
}


var G__1496 = cljs.core.next.call(null,seq__1476__$1);
var G__1497 = null;
var G__1498 = (0);
var G__1499 = (0);
seq__1476 = G__1496;
chunk__1477 = G__1497;
count__1478 = G__1498;
i__1479 = G__1499;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__1502){
var map__1503 = p__1502;
var map__1503__$1 = ((((!((map__1503 == null)))?(((((map__1503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1503):map__1503);
var on_jsload = cljs.core.get.call(null,map__1503__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__1503,map__1503__$1,on_jsload){
return (function (p1__1500_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__1500_SHARP_,".js");
});})(map__1503,map__1503__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.net.jsloader.loadMany(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__1503,map__1503__$1,on_jsload){
return (function (p1__1501_SHARP_){
return goog.Uri.parse(p1__1501_SHARP_).makeUnique();
});})(js_files,map__1503,map__1503__$1,on_jsload))
,js_files)),({"cleanupWhenDone": true})).addCallbacks(((function (js_files,map__1503,map__1503__$1,on_jsload){
return (function() { 
var G__1505__delegate = function (_){
return on_jsload.call(null);
};
var G__1505 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__1506__i = 0, G__1506__a = new Array(arguments.length -  0);
while (G__1506__i < G__1506__a.length) {G__1506__a[G__1506__i] = arguments[G__1506__i + 0]; ++G__1506__i;}
  _ = new cljs.core.IndexedSeq(G__1506__a,0,null);
} 
return G__1505__delegate.call(this,_);};
G__1505.cljs$lang$maxFixedArity = 0;
G__1505.cljs$lang$applyTo = (function (arglist__1507){
var _ = cljs.core.seq(arglist__1507);
return G__1505__delegate(_);
});
G__1505.cljs$core$IFn$_invoke$arity$variadic = G__1505__delegate;
return G__1505;
})()
;})(js_files,map__1503,map__1503__$1,on_jsload))
,((function (js_files,map__1503,map__1503__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__1503,map__1503__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.call(null).getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(page_path),"index.html"].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_uri.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__1508_1512 = cljs.core.seq.call(null,things_to_log);
var chunk__1509_1513 = null;
var count__1510_1514 = (0);
var i__1511_1515 = (0);
while(true){
if((i__1511_1515 < count__1510_1514)){
var t_1516 = cljs.core._nth.call(null,chunk__1509_1513,i__1511_1515);
console.log(t_1516);


var G__1517 = seq__1508_1512;
var G__1518 = chunk__1509_1513;
var G__1519 = count__1510_1514;
var G__1520 = (i__1511_1515 + (1));
seq__1508_1512 = G__1517;
chunk__1509_1513 = G__1518;
count__1510_1514 = G__1519;
i__1511_1515 = G__1520;
continue;
} else {
var temp__4657__auto___1521 = cljs.core.seq.call(null,seq__1508_1512);
if(temp__4657__auto___1521){
var seq__1508_1522__$1 = temp__4657__auto___1521;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1508_1522__$1)){
var c__4319__auto___1523 = cljs.core.chunk_first.call(null,seq__1508_1522__$1);
var G__1524 = cljs.core.chunk_rest.call(null,seq__1508_1522__$1);
var G__1525 = c__4319__auto___1523;
var G__1526 = cljs.core.count.call(null,c__4319__auto___1523);
var G__1527 = (0);
seq__1508_1512 = G__1524;
chunk__1509_1513 = G__1525;
count__1510_1514 = G__1526;
i__1511_1515 = G__1527;
continue;
} else {
var t_1528 = cljs.core.first.call(null,seq__1508_1522__$1);
console.log(t_1528);


var G__1529 = cljs.core.next.call(null,seq__1508_1522__$1);
var G__1530 = null;
var G__1531 = (0);
var G__1532 = (0);
seq__1508_1512 = G__1529;
chunk__1509_1513 = G__1530;
count__1510_1514 = G__1531;
i__1511_1515 = G__1532;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
/**
 * Perform heuristics to check if a non-shimmed DOM is available
 */
adzerk.boot_reload.reload.has_dom_QMARK_ = (function adzerk$boot_reload$reload$has_dom_QMARK_(){
return ((typeof window !== 'undefined') && (typeof window.document !== 'undefined') && (typeof window.document.documentURI !== 'undefined'));
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
var changed_STAR_ = cljs.core.map.call(null,(function (p1__1533_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"asset-host","asset-host",-899289050).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1533_SHARP_)].join('');
}),cljs.core.map.call(null,(function (p__1534){
var map__1535 = p__1534;
var map__1535__$1 = ((((!((map__1535 == null)))?(((((map__1535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1535):map__1535);
var canonical_path = cljs.core.get.call(null,map__1535__$1,new cljs.core.Keyword(null,"canonical-path","canonical-path",-1891747854));
var web_path = cljs.core.get.call(null,map__1535__$1,new cljs.core.Keyword(null,"web-path","web-path",594590673));
if(cljs.core._EQ_.call(null,"file:",(function (){var G__1537 = window;
var G__1537__$1 = (((G__1537 == null))?null:G__1537.location);
if((G__1537__$1 == null)){
return null;
} else {
return G__1537__$1.protocol;
}
})())){
return canonical_path;
} else {
return web_path;
}
}),changed));
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed_STAR_);

adzerk.boot_reload.reload.reload_js.call(null,changed_STAR_,opts);

if(cljs.core.truth_(adzerk.boot_reload.reload.has_dom_QMARK_.call(null))){
var G__1538 = changed_STAR_;
adzerk.boot_reload.reload.reload_html.call(null,G__1538);

adzerk.boot_reload.reload.reload_css.call(null,G__1538);

adzerk.boot_reload.reload.reload_img.call(null,G__1538);

return G__1538;
} else {
return null;
}
});

//# sourceMappingURL=reload.js.map
