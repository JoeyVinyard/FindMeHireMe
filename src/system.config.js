(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
      'mapbox-gl': 'npm:mapbox-gl/dist/mapbox-gl.js',
      'angular2-mapbox/core': 'npm:angular2-mapbox/core/core.umd.js'
    }
})(this);