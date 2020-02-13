sap.ui.define([
	"./BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("com.ey.caasa.PedidoFactibilidad.controller.Detail", {
		
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("RouteDetail").attachPatternMatched(this._handleRouteMatched, this);
		},
		
		_handleRouteMatched: function() {
			
		},
		
		onHome: function() {
			this.getRouter().navTo("RouteHome");
		}
	});
});