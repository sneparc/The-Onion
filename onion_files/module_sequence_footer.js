define("translations/jquery.module_sequence_footer",["i18nObj","jquery"],function(e,t){t.extend(!0,e,{translations:{ar:{jquery:{module_sequence_footer:{next:"التالي",previous:"السابق"}}},de:{jquery:{module_sequence_footer:{next:"Weiter",previous:"Zurück"}}},"el-gr":{},"en-AU":{},"en-GB":{},es:{jquery:{module_sequence_footer:{next:"Siguiente",previous:"Anterior"}}},fr:{jquery:{module_sequence_footer:{next:"Suivant",previous:"Précédent"}}},hi:{},hu:{},"it-it":{},ja:{jquery:{module_sequence_footer:{next:"次へ",previous:"前へ"}}},ko:{},"ko-kr":{},nl:{jquery:{module_sequence_footer:{next:"Volgende",previous:"Vorige"}}},pl:{jquery:{module_sequence_footer:{next:"Dalej",previous:"Wstecz"}}},pt:{jquery:{module_sequence_footer:{next:"Seguinte",previous:"Anterior"}}},"pt-BR":{jquery:{module_sequence_footer:{next:"Avançar",previous:"Voltar"}}},"pt-pt":{},"ro-ro":{},ru:{jquery:{module_sequence_footer:{next:"Далее",previous:"Назад"}}},tr:{jquery:{module_sequence_footer:{next:"Sonraki",previous:"Önceki"}}},"tr-tr":{},zh:{jquery:{module_sequence_footer:{next:"下一页",previous:"上一页"}}},"zh-hans":{}}})}),define("jst/jquery/ModuleSequenceFooter",["compiled/handlebars_helpers","i18n!jquery.module_sequence_footer"],function(e){var t=e.template,o=e.templates=e.templates||{};return o["jquery/ModuleSequenceFooter"]=t(function(e,t,o,n,u){function i(e,t){var n,u,i,s="";return s+='\n      <a href="'+m((n=e&&e.previous,n=null==n||n===!1?n:n.url,typeof n===d?n.apply(e):n))+'" role="button" class="pull-left" data-tooltip data-tooltip-title="'+m((n=e&&e.previous,n=null==n||n===!1?n:n.tooltip,typeof n===d?n.apply(e):n))+'" aria-describedby="msf',(u=o.instanceNumber)?n=u.call(e,{hash:{},data:t}):(u=e&&e.instanceNumber,n=typeof u===d?u.call(e,{hash:{},data:t}):u),s+=m(n)+'-previous-desc">\n        <i class="icon-mini-arrow-left"></i>',u=o.t||e&&e.t,i={hash:{scope:"jquery.module_sequence_footer"},data:t},n=u?u.call(e,"previous","Previous",i):c.call(e,"t","previous","Previous",i),(n||0===n)&&(s+=n),s+='\n        <span id="msf',(u=o.instanceNumber)?n=u.call(e,{hash:{},data:t}):(u=e&&e.instanceNumber,n=typeof u===d?u.call(e,{hash:{},data:t}):u),s+=m(n)+'-previous-desc" class="hidden" hidden>'+m((n=e&&e.previous,n=null==n||n===!1?n:n.tooltipText,typeof n===d?n.apply(e):n))+"</span>\n      </a>\n    "}function s(e,t){var n,u,i,s="";return s+='\n      <a href="'+m((n=e&&e.next,n=null==n||n===!1?n:n.url,typeof n===d?n.apply(e):n))+'" role="button" class="pull-right bordered" data-tooltip data-tooltip-title="'+m((n=e&&e.next,n=null==n||n===!1?n:n.tooltip,typeof n===d?n.apply(e):n))+'" aria-describedby="msf',(u=o.instanceNumber)?n=u.call(e,{hash:{},data:t}):(u=e&&e.instanceNumber,n=typeof u===d?u.call(e,{hash:{},data:t}):u),s+=m(n)+'-next-desc">\n        ',u=o.t||e&&e.t,i={hash:{scope:"jquery.module_sequence_footer"},data:t},n=u?u.call(e,"next","Next",i):c.call(e,"t","next","Next",i),(n||0===n)&&(s+=n),s+='<i class="icon-mini-arrow-right"></i>\n        <span id="msf',(u=o.instanceNumber)?n=u.call(e,{hash:{},data:t}):(u=e&&e.instanceNumber,n=typeof u===d?u.call(e,{hash:{},data:t}):u),s+=m(n)+'-next-desc" class="hidden" hidden>'+m((n=e&&e.next,n=null==n||n===!1?n:n.tooltipText,typeof n===d?n.apply(e):n))+"</span>\n      </a>\n    "}this.compilerInfo=[4,">= 1.0.0"],o=this.merge(o,e.helpers),u=u||{};var l,r="",d="function",m=this.escapeExpression,c=o.helperMissing,a=this;return r+="<div class='module-sequence-padding'></div>\n<div class='module-sequence-footer clearfix'>\n  <div class=\"module-sequence-footer-content\">\n    ",l=o["if"].call(t,(l=t&&t.previous,null==l||l===!1?l:l.show),{hash:{},inverse:a.noop,fn:a.program(1,i,u),data:u}),(l||0===l)&&(r+=l),r+="\n\n    ",l=o["if"].call(t,(l=t&&t.next,null==l||l===!1?l:l.show),{hash:{},inverse:a.noop,fn:a.program(3,s,u),data:u}),(l||0===l)&&(r+=l),r+="\n  </div>\n</div>\n"}),o["jquery/ModuleSequenceFooter"]}),define("translations/sequence_footer",["i18nObj","jquery"],function(e,t){t.extend(!0,e,{translations:{ar:{sequence_footer:{next_module:"الوحدة التالية:",next_module_desc:"الوحدة التالية: *module*",next_module_item_desc:"التالي: *item*",prev_module:"الوحدة السابقة:",prev_module_desc:"الوحدة السابقة: *module*",prev_module_item_desc:"السابق: *item*"}},de:{sequence_footer:{next_module:"Nächstes Modul:",next_module_desc:"Nächstes Modul: *module*",next_module_item_desc:"Nächstes: *item*",prev_module:"Vorheriges Modul:",prev_module_desc:"Vorheriges Modul: *module*",prev_module_item_desc:"Vorheriges: *item*"}},"el-gr":{},"en-AU":{},"en-GB":{},es:{sequence_footer:{next_module:"Módulo siguiente:",next_module_desc:"Módulo siguiente: *módulo*",next_module_item_desc:"Siguiente: *elemento*",prev_module:"Módulo anterior:",prev_module_desc:"Módulo anterior: *módulo*",prev_module_item_desc:"Anterior: *elemento*"}},fr:{sequence_footer:{next_module:"Module suivant :",next_module_desc:"Module suivant : *module*",next_module_item_desc:"Suivant : *élément*",prev_module:"Module précédent :",prev_module_desc:"Module précédent : *module*",prev_module_item_desc:"Précédent : *élément*"}},hi:{},hu:{},"it-it":{},ja:{sequence_footer:{next_module:"次のモジュール:",next_module_desc:"次のモジュール: *module*",next_module_item_desc:"次: *item*",prev_module:"前のモジュール:",prev_module_desc:"前のモジュール: *module*",prev_module_item_desc:"前: *item*"}},ko:{},"ko-kr":{},nl:{sequence_footer:{next_module:"Volgende module:",next_module_desc:"Volgende module: *module*",next_module_item_desc:"Volgende: *item*",prev_module:"Vorige module",prev_module_desc:"Vorige module: *module*",prev_module_item_desc:"Vorige: *item*"}},pl:{sequence_footer:{next_module:"Następny moduł:",next_module_desc:"Następny moduł: *module*",next_module_item_desc:"Następny: *element*",prev_module:"Poprzedni moduł:",prev_module_desc:"Poprzedni moduł: *moduł*",prev_module_item_desc:"Poprzedni: *element*"}},pt:{sequence_footer:{next_module:"Módulo seguinte:",next_module_desc:"Módulo seguinte: *module*",next_module_item_desc:"Seguinte: *item*",prev_module:"Módulo anterior:",prev_module_desc:"Módulo anterior: *module*",prev_module_item_desc:"Anterior: *item*"}},"pt-BR":{sequence_footer:{next_module:"Próximo módulo:",next_module_desc:"Próximo módulo: *módulo*",next_module_item_desc:"Próximo: *item*",prev_module:"Módulo anterior:",prev_module_desc:"Módulo anterior: *módulo*",prev_module_item_desc:"Anterior: *item*"}},"pt-pt":{},"ro-ro":{},ru:{sequence_footer:{next_module:"Следующий модуль:",next_module_desc:"Следующий модуль: *модуль*",next_module_item_desc:"Следующий: *элемент*",prev_module:"Предыдущий модуль:",prev_module_desc:"Предыдущий модуль: *модуль*",prev_module_item_desc:"Предыдущий: *элемент*"}},tr:{sequence_footer:{next_module:"Sonraki Modül:",next_module_desc:"Sonraki Modül: *module*",next_module_item_desc:"Sonraki: *item*",prev_module:"Önceki Modül:",prev_module_desc:"Önceki Modül: *module*",prev_module_item_desc:"Önceki: *item*"}},"tr-tr":{},zh:{sequence_footer:{next_module:"下个单元:",next_module_desc:"下个单元: *单元*",next_module_item_desc:"下一个: *项目*",prev_module:"上个单元:",prev_module_desc:"上个单元: *单元*",prev_module_item_desc:"上一个: *项目*"}},"zh-hans":{}}})}),function(){var e=function(e,t){return function(){return e.apply(t,arguments)}};define("compiled/jquery/ModuleSequenceFooter",["jquery","jst/jquery/ModuleSequenceFooter","underscore","i18n!sequence_footer","jquery.ajaxJSON"],function(t,o,n,u){return function(t,o,i,s){var l,r;return r=0,t.fn.moduleSequenceFooter=function(e){var o=this;if(null==e&&(e={}),!e.assetType||!e.assetID)throw"Option must be set with assetType and assetID";return this.msfAnimation=function(e){return o.find(".module-sequence-padding, .module-sequence-footer").toggleClass("no-animation",!e)},this.msfInstance=new t.fn.moduleSequenceFooter.MSFClass(e),this.msfInstance.fetch().done(function(){return o.msfInstance.hide?void o.hide():(o.html(s({instanceNumber:o.msfInstance.instanceNumber,previous:o.msfInstance.previous,next:o.msfInstance.next})),void 0!==(null!=e?e.animation:void 0)&&o.msfAnimation(e.animation),o.show())}),this},t.fn.moduleSequenceFooter.MSFClass=l=function(){function o(t){this.success=e(this.success,this),this.instanceNumber=r++,this.courseID=(null!=t?t.courseID:void 0)||("undefined"!=typeof ENV&&null!==ENV?ENV.course_id:void 0),this.assetID=null!=t?t.assetID:void 0,this.assetType=null!=t?t.assetType:void 0,this.location=(null!=t?t.location:void 0)||i.location,this.previous={},this.next={},this.url="/api/v1/courses/"+this.courseID+"/module_item_sequence"}return o.prototype.iconClasses={ModuleItem:"icon-module",File:"icon-download",Page:"icon-document",Discussion:"icon-discussion",Assignment:"icon-assignment",Quiz:"icon-quiz",ExternalTool:"icon-link"},o.prototype.getQueryParams=function(e){var t,o,n;for(e=e.split("+").join(" "),t={},o=/[?&]?([^=]+)=([^&]*)/g;n=o.exec(e);)t[decodeURIComponent(n[1])]=decodeURIComponent(n[2]);return t},o.prototype.fetch=function(){var e;return e=this.getQueryParams(this.location.search),e.module_item_id?t.ajaxJSON(this.url,"GET",{asset_type:"ModuleItem",asset_id:e.module_item_id,frame_external_urls:!0},this.success,null,{}):t.ajaxJSON(this.url,"GET",{asset_type:this.assetType,asset_id:this.assetID,frame_external_urls:!0},this.success,null,{})},o.prototype.success=function(e){var t;return this.modules=e.modules,1!==(null!=e&&null!=(t=e.items)?t.length:void 0)?void(this.hide=!0):(this.item=e.items[0],(this.next.show=this.item.next)&&this.buildNextData(),(this.previous.show=this.item.prev)?this.buildPreviousData():void 0)},o.prototype.buildPreviousData=function(){var e,t=this;return this.previous.url=this.item.prev.html_url,this.item.current.module_id===this.item.prev.module_id?(this.previous.tooltip="<i class='"+this.iconClasses[this.item.prev.type]+"'></i> "+this.item.prev.title,this.previous.tooltipText=u.t("prev_module_item_desc","Previous: *item*",{wrapper:this.item.prev.title})):(e=n.find(this.modules,function(e){return e.id===t.item.prev.module_id}),this.previous.tooltip="<strong style='float:left'>"+u.t("prev_module","Previous Module:")+"</strong> <br> "+e.name,this.previous.tooltipText=u.t("prev_module_desc","Previous Module: *module*",{wrapper:e.name}))},o.prototype.buildNextData=function(){var e,t=this;return this.next.url=this.item.next.html_url,this.item.current.module_id===this.item.next.module_id?(this.next.tooltip="<i class='"+this.iconClasses[this.item.next.type]+"'></i> "+this.item.next.title,this.next.tooltipText=u.t("next_module_item_desc","Next: *item*",{wrapper:this.item.next.title})):(e=n.find(this.modules,function(e){return e.id===t.item.next.module_id}),this.next.tooltip="<strong style='float:left'>"+u.t("next_module","Next Module:")+"</strong> <br> "+e.name,this.next.tooltipText=u.t("next_module_desc","Next Module: *module*",{wrapper:e.name}))},o}()}(t,window,document,o)})}.call(this),function(){require(["compiled/jquery/ModuleSequenceFooter"])}.call(this),define("compiled/bundles/module_sequence_footer",function(){});