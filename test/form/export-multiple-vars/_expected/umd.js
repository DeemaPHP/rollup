(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

	var a = 1;

	var e = 5;

	var i = 9;

	assert.equal( a, 1 );
	assert.equal( e, 5 );
	assert.equal( i, 9 );

})));