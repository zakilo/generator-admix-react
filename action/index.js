'use strict';
var path = require('path');
var util = require('util');
var ScriptBase = require('../script-base.js');
var angularUtils = require('../util.js');

var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createModFiles = function createModFiles() {
  this.appTemplate(
    'component/action.js',
    path.join('actions', this.name + '.js')
  );
};
