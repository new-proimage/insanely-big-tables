/**
 * @name
 * @fileOverview
 * @author sergey
 */
(function (global) {
  'use strict';
  var utils;

  utils = {
    calculateInterval: function (rate) {
      return Math.floor(1000/rate);
    },
    startMeasuring: function () {
      global.performance.clearMarks();
      global.performance.clearMeasures();
      global.performance.mark('addStart');
    },
    stopMeasuring: function () {
      global.performance.mark('addEnd');
      global.performance.measure('addElapsed', 'addStart', 'addEnd');
    },
    calculateMeasure: function () {
      var measure = global.performance.getEntriesByName('addElapsed');
      return (measure[0].duration / 1000).toFixed(2) + ' sec.';
    },
    markHundred: function (hundred) {
      global.performance.mark(hundred + '-hundred');
    },
    calculateHundreds: function () {
      var startMark, hundredMarks;
      startMark = global.performance.getEntriesByName('addStart')[0];
      hundredMarks = global.performance.getEntriesByType('mark').filter(function (mark) {
        return mark.name.indexOf('hundred') !== -1;
      });
      return hundredMarks.map(function (mark) {
        return (mark.startTime - startMark.startTime) / 1000;
      });
    }
  };

  global.IBT = utils;
})(window);