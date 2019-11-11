/*global QUnit*/

sap.ui.define([
	"br/com/Eletrobras3/controller/ViewTest.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewTest Controller");

	QUnit.test("I should test the ViewTest controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});