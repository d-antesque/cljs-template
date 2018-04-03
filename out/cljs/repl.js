// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__3838){
var map__3839 = p__3838;
var map__3839__$1 = ((((!((map__3839 == null)))?(((((map__3839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3839):map__3839);
var m = map__3839__$1;
var n = cljs.core.get.call(null,map__3839__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__3839__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__3841_3863 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3842_3864 = null;
var count__3843_3865 = (0);
var i__3844_3866 = (0);
while(true){
if((i__3844_3866 < count__3843_3865)){
var f_3867 = cljs.core._nth.call(null,chunk__3842_3864,i__3844_3866);
cljs.core.println.call(null,"  ",f_3867);


var G__3868 = seq__3841_3863;
var G__3869 = chunk__3842_3864;
var G__3870 = count__3843_3865;
var G__3871 = (i__3844_3866 + (1));
seq__3841_3863 = G__3868;
chunk__3842_3864 = G__3869;
count__3843_3865 = G__3870;
i__3844_3866 = G__3871;
continue;
} else {
var temp__4657__auto___3872 = cljs.core.seq.call(null,seq__3841_3863);
if(temp__4657__auto___3872){
var seq__3841_3873__$1 = temp__4657__auto___3872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3841_3873__$1)){
var c__4319__auto___3874 = cljs.core.chunk_first.call(null,seq__3841_3873__$1);
var G__3875 = cljs.core.chunk_rest.call(null,seq__3841_3873__$1);
var G__3876 = c__4319__auto___3874;
var G__3877 = cljs.core.count.call(null,c__4319__auto___3874);
var G__3878 = (0);
seq__3841_3863 = G__3875;
chunk__3842_3864 = G__3876;
count__3843_3865 = G__3877;
i__3844_3866 = G__3878;
continue;
} else {
var f_3879 = cljs.core.first.call(null,seq__3841_3873__$1);
cljs.core.println.call(null,"  ",f_3879);


var G__3880 = cljs.core.next.call(null,seq__3841_3873__$1);
var G__3881 = null;
var G__3882 = (0);
var G__3883 = (0);
seq__3841_3863 = G__3880;
chunk__3842_3864 = G__3881;
count__3843_3865 = G__3882;
i__3844_3866 = G__3883;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_3884 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_3884);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_3884)))?cljs.core.second.call(null,arglists_3884):arglists_3884));
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
var seq__3845_3885 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__3846_3886 = null;
var count__3847_3887 = (0);
var i__3848_3888 = (0);
while(true){
if((i__3848_3888 < count__3847_3887)){
var vec__3849_3889 = cljs.core._nth.call(null,chunk__3846_3886,i__3848_3888);
var name_3890 = cljs.core.nth.call(null,vec__3849_3889,(0),null);
var map__3852_3891 = cljs.core.nth.call(null,vec__3849_3889,(1),null);
var map__3852_3892__$1 = ((((!((map__3852_3891 == null)))?(((((map__3852_3891.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3852_3891.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3852_3891):map__3852_3891);
var doc_3893 = cljs.core.get.call(null,map__3852_3892__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3894 = cljs.core.get.call(null,map__3852_3892__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3890);

cljs.core.println.call(null," ",arglists_3894);

if(cljs.core.truth_(doc_3893)){
cljs.core.println.call(null," ",doc_3893);
} else {
}


var G__3895 = seq__3845_3885;
var G__3896 = chunk__3846_3886;
var G__3897 = count__3847_3887;
var G__3898 = (i__3848_3888 + (1));
seq__3845_3885 = G__3895;
chunk__3846_3886 = G__3896;
count__3847_3887 = G__3897;
i__3848_3888 = G__3898;
continue;
} else {
var temp__4657__auto___3899 = cljs.core.seq.call(null,seq__3845_3885);
if(temp__4657__auto___3899){
var seq__3845_3900__$1 = temp__4657__auto___3899;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3845_3900__$1)){
var c__4319__auto___3901 = cljs.core.chunk_first.call(null,seq__3845_3900__$1);
var G__3902 = cljs.core.chunk_rest.call(null,seq__3845_3900__$1);
var G__3903 = c__4319__auto___3901;
var G__3904 = cljs.core.count.call(null,c__4319__auto___3901);
var G__3905 = (0);
seq__3845_3885 = G__3902;
chunk__3846_3886 = G__3903;
count__3847_3887 = G__3904;
i__3848_3888 = G__3905;
continue;
} else {
var vec__3854_3906 = cljs.core.first.call(null,seq__3845_3900__$1);
var name_3907 = cljs.core.nth.call(null,vec__3854_3906,(0),null);
var map__3857_3908 = cljs.core.nth.call(null,vec__3854_3906,(1),null);
var map__3857_3909__$1 = ((((!((map__3857_3908 == null)))?(((((map__3857_3908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__3857_3908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__3857_3908):map__3857_3908);
var doc_3910 = cljs.core.get.call(null,map__3857_3909__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_3911 = cljs.core.get.call(null,map__3857_3909__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_3907);

cljs.core.println.call(null," ",arglists_3911);

if(cljs.core.truth_(doc_3910)){
cljs.core.println.call(null," ",doc_3910);
} else {
}


var G__3912 = cljs.core.next.call(null,seq__3845_3900__$1);
var G__3913 = null;
var G__3914 = (0);
var G__3915 = (0);
seq__3845_3885 = G__3912;
chunk__3846_3886 = G__3913;
count__3847_3887 = G__3914;
i__3848_3888 = G__3915;
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

var seq__3859 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__3860 = null;
var count__3861 = (0);
var i__3862 = (0);
while(true){
if((i__3862 < count__3861)){
var role = cljs.core._nth.call(null,chunk__3860,i__3862);
var temp__4657__auto___3916__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3916__$1)){
var spec_3917 = temp__4657__auto___3916__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3917));
} else {
}


var G__3918 = seq__3859;
var G__3919 = chunk__3860;
var G__3920 = count__3861;
var G__3921 = (i__3862 + (1));
seq__3859 = G__3918;
chunk__3860 = G__3919;
count__3861 = G__3920;
i__3862 = G__3921;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__3859);
if(temp__4657__auto____$1){
var seq__3859__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__3859__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__3859__$1);
var G__3922 = cljs.core.chunk_rest.call(null,seq__3859__$1);
var G__3923 = c__4319__auto__;
var G__3924 = cljs.core.count.call(null,c__4319__auto__);
var G__3925 = (0);
seq__3859 = G__3922;
chunk__3860 = G__3923;
count__3861 = G__3924;
i__3862 = G__3925;
continue;
} else {
var role = cljs.core.first.call(null,seq__3859__$1);
var temp__4657__auto___3926__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___3926__$2)){
var spec_3927 = temp__4657__auto___3926__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_3927));
} else {
}


var G__3928 = cljs.core.next.call(null,seq__3859__$1);
var G__3929 = null;
var G__3930 = (0);
var G__3931 = (0);
seq__3859 = G__3928;
chunk__3860 = G__3929;
count__3861 = G__3930;
i__3862 = G__3931;
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
