/**
 * @author arodic / http://akirodic.com/
 */

(function() {

  'use strict';

  REE.ConfigState = function(config) {

    Carbon.call(this, config);

    this.registerProperties({
      clearColor: {
        value: '#222222',
        type: String,
        notify: true,
        persist: true
      },
      showHelpers: {
        value: true,
        type: Boolean,
        notify: true,
        persist: true
      },
      showAxis: {
        value: true,
        type: Boolean,
        notify: true,
        persist: true
      },
      axisSize: {
        value: 10,
        type: Number,
        notify: true,
        persist: true
      },
      showGrid: {
        value: true,
        type: Boolean,
        notify: true,
        persist: true
      },
      gridSize: {
        value: 10,
        type: Number,
        notify: true,
        persist: true
      },
      gridWidth: {
        value: 10,
        type: Number,
        notify: true,
        persist: true
      },
      gridColor1: {
        value: 'white',
        type: String,
        notify: true,
        persist: true
      },
      gridColor2: {
        value: '#222',
        type: String,
        notify: true,
        persist: true
      },
      snapAngle: {
        value: 45,
        type: Number,
        notify: true,
        persist: true
      },
      showCompass: {
        value: true,
        type: Boolean,
        notify: true,
        persist: true
      },
      compassSize: {
        value: 0.125,
        type: Number,
        notify: true,
        persist: true
      }
    });

  };

  Carbon.create(REE.ConfigState);

}());
