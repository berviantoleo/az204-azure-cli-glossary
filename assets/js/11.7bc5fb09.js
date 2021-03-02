(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{373:function(a,e,t){"use strict";t.r(e);var s=t(25),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"azure-event-hub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#azure-event-hub"}},[a._v("#")]),a._v(" Azure Event Hub")]),a._v(" "),t("h2",{attrs:{id:"create-event-hub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-event-hub"}},[a._v("#")]),a._v(" Create Event Hub")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az eventhubs eventhub create --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("event hub name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --namespace-name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("event hub namespace name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h2",{attrs:{id:"create-event-hub-namespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-event-hub-namespace"}},[a._v("#")]),a._v(" Create Event Hub Namespace")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az eventhubs namespace create "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("eventhub namespace name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  --resource-group "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("resource group name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  --l "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("location"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n  --sku "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("basic/standard"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),t("h2",{attrs:{id:"get-connection-string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-connection-string"}},[a._v("#")]),a._v(" Get Connection String")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("az eventhubs namespace authorization-rule keys list "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --name RootManageSharedAccessKey "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --resource-group "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("resource group name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --namespace-name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("eventhub namespace name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);