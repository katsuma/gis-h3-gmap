(function(t){function e(e){for(var i,n,l=e[0],s=e[1],c=e[2],f=0,v=[];f<l.length;f++)n=l[f],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&v.push(a[n][0]),a[n]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],i=!0,l=1;l<r.length;l++){var s=r[l];0!==a[s]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=r[0]))}return t}var i={},a={app:0},o=[];function n(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=i,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/gis-h3-gmap/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var i=r("85ec"),a=r.n(i);a.a},1:function(t,e){},2:function(t,e){},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"map"}},[r("GmapMap",{ref:"gmap",staticStyle:{width:"100%",height:"100%"},attrs:{center:{lat:35.681236,lng:139.767125},zoom:9}},[t.activeMarker?r("GmapInfoWindow",{attrs:{position:t.activeMarker.position},on:{closeclick:function(e){t.activeMarker=null}}},[r("div",{domProps:{innerHTML:t._s(t.activeMarker.info)}})]):t._e(),t._l(t.markers,(function(e,i){return r("GmapMarker",{key:i,attrs:{label:e.label,position:e.position,icon:e.icon,clickable:!0},on:{click:function(r){t.activeMarker=e}}})}))],2)],1),r("div",{attrs:{id:"menu"}},[r("form",[r("div",{staticClass:"form-group"},[r("label",[t._v(" Resolution: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.resolution,expression:"resolution"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.resolution=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"4"}},[t._v("4")]),r("option",{attrs:{value:"5"}},[t._v("5")]),r("option",{attrs:{value:"6"}},[t._v("6")]),r("option",{attrs:{value:"7"}},[t._v("7")]),r("option",{attrs:{value:"8"}},[t._v("8")])])]),r("div",{staticClass:"form-group"},[r("label",[t._v(" Region: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.region,expression:"region"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.region=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"832e29fffffffff"}},[t._v("茨城県北部 (832e29fffffffff)")]),r("option",{attrs:{value:"832e74fffffffff"}},[t._v("群馬県・栃木県南部 (832e74fffffffff)")]),r("option",{attrs:{value:"832e75fffffffff"}},[t._v("長野県東部 (832e75fffffffff)")]),r("option",{attrs:{value:"832f58fffffffff"}},[t._v("房総半島・三浦半島 (832f58fffffffff)")]),r("option",{attrs:{value:"832f59fffffffff"}},[t._v("静岡市・伊豆半島 (832f59fffffffff)")]),r("option",{attrs:{value:"832f5afffffffff"}},[t._v("東京都心・千葉県 (832f5afffffffff)")]),r("option",{attrs:{value:"832f5bfffffffff"}},[t._v("神奈川県・多摩地方 (832f5bfffffffff")])])]),r("div",{staticClass:"form-group"},[r("label",[t._v(" Subregion: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.subregion,expression:"subregion"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.subregion=e.target.multiple?r:r[0]}}},[8==t.resolution?t._l(t.subregions,(function(e,i){return r("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])})):t._e()],2)]),r("div",{staticClass:"form-group"},[r("label",[t._v(" Segment: ")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.stats,expression:"stats"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.stats=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"人口総数"}},[t._v("人口総数")]),r("option",{attrs:{value:"人口総数男"}},[t._v("人口総数男")]),r("option",{attrs:{value:"人口総数女"}},[t._v("人口総数女")]),r("option",{attrs:{value:"０〜１４歳人口総数"}},[t._v("０〜１４歳人口総数")]),r("option",{attrs:{value:"０〜１４歳人口男"}},[t._v("０〜１４歳人口男")]),r("option",{attrs:{value:"０〜１４歳人口女"}},[t._v("０〜１４歳人口女")]),r("option",{attrs:{value:"１５歳以上人口総数"}},[t._v("１５歳以上人口総数")]),r("option",{attrs:{value:"１５歳以上人口男"}},[t._v("１５歳以上人口男")]),r("option",{attrs:{value:"１５歳以上人口女"}},[t._v("１５歳以上人口女")]),r("option",{attrs:{value:"１５〜６４歳人口総数"}},[t._v("１５〜６４歳人口総数")]),r("option",{attrs:{value:"１５〜６４歳人口男"}},[t._v("１５〜６４歳人口男")]),r("option",{attrs:{value:"１５〜６４歳人口女"}},[t._v("１５〜６４歳人口女")]),r("option",{attrs:{value:"２０歳以上人口総数"}},[t._v("２０歳以上人口総数")]),r("option",{attrs:{value:"２０歳以上人口男"}},[t._v("２０歳以上人口男")]),r("option",{attrs:{value:"２０歳以上人口女"}},[t._v("２０歳以上人口女")]),r("option",{attrs:{value:"６５歳以上人口総数"}},[t._v("６５歳以上人口総数")]),r("option",{attrs:{value:"６５歳以上人口男"}},[t._v("６５歳以上人口男")]),r("option",{attrs:{value:"６５歳以上人口女"}},[t._v("６５歳以上人口女")]),r("option",{attrs:{value:"７５歳以上人口総数"}},[t._v("７５歳以上人口総数")]),r("option",{attrs:{value:"７５歳以上人口男"}},[t._v("７５歳以上人口男")]),r("option",{attrs:{value:"７５歳以上人口女"}},[t._v("７５歳以上人口女")]),r("option",{attrs:{value:"外国人人口総数"}},[t._v("外国人人口総数")]),r("option",{attrs:{value:"外国人人口男"}},[t._v("外国人人口男")]),r("option",{attrs:{value:"外国人人口女"}},[t._v("外国人人口女")]),r("option",{attrs:{value:"世帯総数"}},[t._v("世帯総数")]),r("option",{attrs:{value:"一般世帯数"}},[t._v("一般世帯数")]),r("option",{attrs:{value:"１人世帯の一般世帯数"}},[t._v("１人世帯の一般世帯数")]),r("option",{attrs:{value:"２人世帯の一般世帯数"}},[t._v("２人世帯の一般世帯数")]),r("option",{attrs:{value:"３人世帯の一般世帯数"}},[t._v("３人世帯の一般世帯数")]),r("option",{attrs:{value:"４人世帯の一般世帯数"}},[t._v("４人世帯の一般世帯数")]),r("option",{attrs:{value:"５人世帯の一般世帯数"}},[t._v("５人世帯の一般世帯数")]),r("option",{attrs:{value:"６人世帯の一般世帯数"}},[t._v("６人世帯の一般世帯数")]),r("option",{attrs:{value:"７人以上世帯の一般世帯数"}},[t._v("７人以上世帯の一般世帯数")]),r("option",{attrs:{value:"親族のみの一般世帯数"}},[t._v("親族のみの一般世帯数")]),r("option",{attrs:{value:"核家族の一般世帯数"}},[t._v("核家族の一般世帯数")]),r("option",{attrs:{value:"核家族以外の一般世帯数"}},[t._v("核家族以外の一般世帯数")]),r("option",{attrs:{value:"６歳未満世帯員のいる一般世帯数"}},[t._v("６歳未満世帯員のいる一般世帯数")]),r("option",{attrs:{value:"６５歳以上世帯員のいる一般世帯数"}},[t._v("６５歳以上世帯員のいる一般世帯数")]),r("option",{attrs:{value:"世帯主の年齢が２０〜２９歳の１人世帯の一般世帯数"}},[t._v("世帯主の年齢が２０〜２９歳の１人世帯の一般世帯数")]),r("option",{attrs:{value:"高齢単身の一般世帯数"}},[t._v("高齢単身の一般世帯数")]),r("option",{attrs:{value:"高齢夫婦のみの一般世帯数"}},[t._v("高齢夫婦のみの一般世帯数")])])])]),r("button",{staticClass:"btn btn-success mt-2",staticStyle:{width:"100%"},attrs:{disabled:t.disableButton},on:{click:t.onSubmit}},[t._v(" Submit ")]),r("hr"),r("form",[r("div",{staticClass:"form-group"},[r("label",[t._v(" Mart CSV: ")]),r("input",{attrs:{type:"file"},on:{change:t.onMartChange}}),r("br"),r("div",{staticClass:"mt-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.martFilter,expression:"martFilter"}],attrs:{type:"checkbox",value:"Open"},domProps:{checked:Array.isArray(t.martFilter)?t._i(t.martFilter,"Open")>-1:t.martFilter},on:{change:function(e){var r=t.martFilter,i=e.target,a=!!i.checked;if(Array.isArray(r)){var o="Open",n=t._i(r,o);i.checked?n<0&&(t.martFilter=r.concat([o])):n>-1&&(t.martFilter=r.slice(0,n).concat(r.slice(n+1)))}else t.martFilter=a}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Open")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.martFilter,expression:"martFilter"}],attrs:{type:"checkbox",value:"Closed"},domProps:{checked:Array.isArray(t.martFilter)?t._i(t.martFilter,"Closed")>-1:t.martFilter},on:{change:function(e){var r=t.martFilter,i=e.target,a=!!i.checked;if(Array.isArray(r)){var o="Closed",n=t._i(r,o);i.checked?n<0&&(t.martFilter=r.concat([o])):n>-1&&(t.martFilter=r.slice(0,n).concat(r.slice(n+1)))}else t.martFilter=a}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Closed")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.martFilter,expression:"martFilter"}],attrs:{type:"checkbox",value:"Archived"},domProps:{checked:Array.isArray(t.martFilter)?t._i(t.martFilter,"Archived")>-1:t.martFilter},on:{change:function(e){var r=t.martFilter,i=e.target,a=!!i.checked;if(Array.isArray(r)){var o="Archived",n=t._i(r,o);i.checked?n<0&&(t.martFilter=r.concat([o])):n>-1&&(t.martFilter=r.slice(0,n).concat(r.slice(n+1)))}else t.martFilter=a}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Archived")])])]),r("div",{staticClass:"form-group"},[r("label",[t._v(" Collection CSV: ")]),r("input",{attrs:{type:"file"},on:{change:t.onCollectionChange}}),r("br"),r("div",{staticClass:"mt-2"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionFilter,expression:"collectionFilter"}],attrs:{type:"checkbox",value:"Open"},domProps:{checked:Array.isArray(t.collectionFilter)?t._i(t.collectionFilter,"Open")>-1:t.collectionFilter},on:{change:function(e){var r=t.collectionFilter,i=e.target,a=!!i.checked;if(Array.isArray(r)){var o="Open",n=t._i(r,o);i.checked?n<0&&(t.collectionFilter=r.concat([o])):n>-1&&(t.collectionFilter=r.slice(0,n).concat(r.slice(n+1)))}else t.collectionFilter=a}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Open")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionFilter,expression:"collectionFilter"}],attrs:{type:"checkbox",value:"Closed"},domProps:{checked:Array.isArray(t.collectionFilter)?t._i(t.collectionFilter,"Closed")>-1:t.collectionFilter},on:{change:function(e){var r=t.collectionFilter,i=e.target,a=!!i.checked;if(Array.isArray(r)){var o="Closed",n=t._i(r,o);i.checked?n<0&&(t.collectionFilter=r.concat([o])):n>-1&&(t.collectionFilter=r.slice(0,n).concat(r.slice(n+1)))}else t.collectionFilter=a}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Closed")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.collectionFilter,expression:"collectionFilter"}],attrs:{type:"checkbox",value:"Archived"},domProps:{checked:Array.isArray(t.collectionFilter)?t._i(t.collectionFilter,"Archived")>-1:t.collectionFilter},on:{change:function(e){var r=t.collectionFilter,i=e.target,a=!!i.checked;if(Array.isArray(r)){var o="Archived",n=t._i(r,o);i.checked?n<0&&(t.collectionFilter=r.concat([o])):n>-1&&(t.collectionFilter=r.slice(0,n).concat(r.slice(n+1)))}else t.collectionFilter=a}}}),r("label",{staticClass:"ml-1 mr-2"},[t._v("Archived")])])])])])])},o=[],n=(r("99af"),r("4de4"),r("f75e")),l=r("755e"),s=(r("b0c0"),r("acd8"),r("d4ec")),c=r("bee2"),u=function(){function t(e){Object(s["a"])(this,t),this.name=e.name,this.latitude=parseFloat(e.latitude),this.longitude=parseFloat(e.longitude)}return Object(c["a"])(t,[{key:"label",get:function(){return""}},{key:"position",get:function(){return{lat:this.latitude,lng:this.longitude}}},{key:"color",get:function(){throw new Error("Not implemented")}},{key:"icon",get:function(){return{path:"M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0",fillColor:this.color,fillOpacity:1,strokeColor:"#000",strokeWeight:2,scale:1}}},{key:"info",get:function(){return"<p><b>"+this.name+"</b></p>"}}]),t}(),f=(r("caad"),r("e25e"),r("2532"),r("99de")),v=r("7e84"),p=r("262e"),d=function(t){function e(t){var r;return Object(s["a"])(this,e),r=Object(f["a"])(this,Object(v["a"])(e).call(this,t)),r.id=parseInt(t.id),r.address=t.address,r.status=parseInt(t.status),r}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"filter",value:function(t){return 1==this.status?t.includes("Open"):0==this.status?t.includes("Closed"):2==this.status&&t.includes("Archived")}},{key:"color",get:function(){if(1==this.status)return"#C7243A";if(0==this.status)return"#F6D4D8";if(2==this.status)return"#EDAD0B";throw new Error("Unknown status: "+this.status)}},{key:"info",get:function(){return"<p><b>"+this.name+"</b><br />"+this.address+"</p>"}}]),e}(u),m=function(t){function e(t){var r;return Object(s["a"])(this,e),r=Object(f["a"])(this,Object(v["a"])(e).call(this,t)),r.id=parseInt(t.id),r.address=t.address,r.status=parseInt(t.status),r.max_location_box_size=parseInt(t.max_location_box_size),r}return Object(p["a"])(e,t),Object(c["a"])(e,[{key:"filter",value:function(t){return 1==this.status?t.includes("Open"):0==this.status?t.includes("Closed"):2==this.status&&t.includes("Archived")}},{key:"color",get:function(){if(1==this.status)return"#009250";if(0==this.status)return"#C6EDDB";if(2==this.status)return"#0086AB";throw new Error("Unknown status: "+this.status)}},{key:"info",get:function(){return"<p><b>"+this.name+"</b><br />"+this.address+"</p>"}}]),e}(u),h=r("1604"),_={name:"app",data:function(){return{resolution:"6",region:"832f5afffffffff",subregion:null,stats:"人口総数",kml:null,marts:[],collections:[],martFilter:["Open"],collectionFilter:["Open"],activeMarker:null}},mounted:function(){this.onSubmit()},computed:{subregions:function(){return Object(n["a"])(this.region,4)},disableButton:function(){var t=this;return 8==this.resolution&&0==this.subregions.filter((function(e){return e==t.subregion})).length},markers:function(){var t=this;return this.marts.filter((function(e){return e.filter(t.martFilter)})).concat(this.collections.filter((function(e){return e.filter(t.collectionFilter)})))}},methods:{onSubmit:function(){var t=this,e=(8==this.resolution?this.subregion:this.region,location.href+"/data/"+this.region+"/"+this.stats+"_"+this.resolution+".kml");console.log(e),this.$refs.gmap.$mapPromise.then((function(r){null!==t.kml&&t.kml.setMap(null),t.kml=new google.maps.KmlLayer({map:r,url:e}),t.kml.setMap(r)}))},loadFile:function(t,e){var r=t.target.files[0];if(r){var i=h();i.on("data",e);var a=new FileReader;a.onload=function(t){i.write(t.target.result)},a.readAsText(r)}},onMartChange:function(t){var e=this;this.marts=[],this.loadFile(t,(function(t){e.marts.push(new d(t))}))},onCollectionChange:function(t){var e=this;this.collections=[],this.loadFile(t,(function(t){e.collections.push(new m(t))}))}}},g=_,b=(r("034f"),r("2877")),y=Object(b["a"])(g,a,o,!1,null,null,null),F=y.exports;i["a"].config.productionTip=!1,i["a"].use(l,{load:{key:"AIzaSyAT8jfo6wpzXcgHbis_GlC87rNDz5aIzQU",libraries:"places"}}),new i["a"]({render:function(t){return t(F)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.6bc027d6.js.map