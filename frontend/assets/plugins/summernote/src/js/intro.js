/**
 * Super simple wysiwyg editor on Bootstrap v@VERSION
 * http://hackerwins.github.io/summernote/
 *
 * summernote.js
 * Copyright 2013 Alan Hong. and outher contributors
 * summernote may be freely distributed under the MIT license./
 *
 * Date: @DATE
 */
(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery', 'codemirror'], factory);
  } else {
    // Browser globals: jQuery, CodeMirror
    factory(window.jQuery, window.CodeMirror);
  }
}(function ($, CodeMirror) {
  'use strict';
