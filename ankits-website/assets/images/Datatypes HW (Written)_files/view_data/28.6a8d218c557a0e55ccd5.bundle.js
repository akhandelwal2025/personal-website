(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{848:function(e,t,a){"use strict";var n=a(2);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function({annotationsByPage:e}){const t=Object.keys(e).map(t=>{const a=e[t].filter(c).filter(u).map(a=>{const n=function(e){return d.FRIENDLY_COLORS[e]?(0,l.default)(d.FRIENDLY_COLORS[e]):void 0}(a.color),u=e[t].filter(c).filter(i).filter(e=>a.id===e.inreplyto).map(e=>r.default.createElement("li",{key:e.id},e.deleted&&r.default.createElement("div",{className:"ScreenreaderAnnotation-deleted"},f(e)),r.default.createElement("div",{className:"ScreenreaderAnnotation-author"},(0,l.default)("Author")," :",e.user_name),r.default.createElement("div",{className:"ScreenreaderAnnotation-createdat"},(0,l.default)("Created at { createdAt, time, short }",{createdAt:new Date(e.created_at)})),e.contents&&r.default.createElement("div",{className:"ScreenreaderAnnotation-root-comment"},(0,l.default)("Comment Reply")," :",e.contents)));return r.default.createElement("li",{key:a.id,className:"ScreenreaderAnnotation"},r.default.createElement("h4",null,(0,l.default)("Annotation of type { type }",{type:o[a.type]||a.type})),a.deleted&&r.default.createElement("div",{className:"ScreenreaderAnnotation-deleted"},f(a)),r.default.createElement("div",{className:"ScreenreaderAnnotation-author"},(0,l.default)("Author")," :",a.user_name),n&&r.default.createElement("div",{className:"ScreenreaderAnnotation-color"},(0,l.default)("Color")," :",n),r.default.createElement("div",{className:"ScreenreaderAnnotation-createdat"},(0,l.default)("Created at { createdAt, time, short }",{createdAt:new Date(a.created_at)})),a.contents&&r.default.createElement("div",{className:"ScreenreaderAnnotation-root-comment"},(0,l.default)("Comment")," :",a.contents),Boolean(u.length)&&r.default.createElement("div",{className:"ScreenreaderAnnotation-replies"},r.default.createElement("h5",null,(0,l.default)("Replies")),r.default.createElement("ol",null,u)))});return r.default.createElement("div",{key:t,className:"ScreenreaderAnnotations-page"},r.default.createElement("h3",null,(0,l.default)("Page { pageNumber, number }",{pageNumber:parseInt(t,10)+1})),r.default.createElement("ol",null,a))});return r.default.createElement("div",{className:"ScreenreaderAnnotations screenreader-only"},r.default.createElement("h2",null,(0,l.default)("Annotations")),t)};var r=n(a(0)),l=n(a(5)),d=a(11);const o={freetext:(0,l.default)("free text"),highlight:(0,l.default)("highlight"),ink:(0,l.default)("drawing"),square:(0,l.default)("area"),strikeout:(0,l.default)("strikeout"),text:(0,l.default)("point")};function c(e){return e.created_at}function u(e){return!e.inreplyto}function i(e){return e.inreplyto}function f(e){return e.deleted_at&&e.deleted_by?(0,l.default)("Removed {d,date} by {name}",{d:new Date(e.deleted_at),name:e.deleted_by}):e.deleted_by?(0,l.default)("Removed by {name}",{name:e.deleted_by}):e.deleted_at?(0,l.default)("Removed {d,date}",{d:new Date(e.deleted_at)}):(0,l.default)("Removed")}}}]);
//# sourceMappingURL=28.6a8d218c557a0e55ccd5.bundle.js.map