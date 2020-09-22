// ==UserScript==
// @name        Index zkurvenosti
// @grant 		none
// @namespace   jira
// @include     https://jira.unicorn.com/browse/*
// @require      http://code.jquery.com/jquery-2.1.4.min.js
// @version     1
// ==/UserScript==

var estimatedTime = jQuery('#tt_single_values_orig').html().trim().match(/[0-9]*/)[0] * 1;
var loggedTime = jQuery('#tt_single_values_spent').html().trim().match(/[0-9]*/)[0] * 1;
var indexZkurvenosti = (loggedTime / estimatedTime).toFixed(2);
var colorClass = indexZkurvenosti < 3 ? 'index-zkurvenosti-low' : indexZkurvenosti > 5 ? 'index-zkurvenosti-hi' : 'index-zkurvenosti-medium';
jQuery('#tt_single_table_info').append('<dl><dt class="tt_text" title="Jak moc je to nahovno">Index zkurvenosti:</dt><dd class="tt_values"><span class="' + colorClass + '">' + indexZkurvenosti + '</span></dd></dl>');
jQuery('#tt_single_text_orig').empty().append('<div title="Architect\'s Time">AT:</div>');
jQuery('#tt_single_text_spent').empty().append('<div title="Real Human Time">RHT:</div>');
jQuery('<style type="text/css">.index-zkurvenosti-hi,.index-zkurvenosti-low,.index-zkurvenosti-medium{border:1px solid rgba(255,255,255,.4);padding:5px;line-height:30px}.index-zkurvenosti-low{background-color:#C8DEB0}.index-zkurvenosti-medium{background-color:#FFD050}.index-zkurvenosti-hi{background-color:#F2B5B9}</style>').appendTo('head');
