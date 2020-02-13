sap.ui.define([
	"./BaseController",
	"sap/m/MessageBox"
], function (BaseController, MessageBox) {
	"use strict";

	return BaseController.extend("com.ey.caasa.PedidoFactibilidad.controller.Home", {

		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("RouteHome").attachPatternMatched(this._handleRouteMatched, this);
		},

		_handleRouteMatched: function () {

		},

		onDetail: function () {
			this.getRouter().navTo("RouteDetail");
		},

		onPedido: function() {
			sap.ui.core.BusyIndicator.show(1);
			jQuery.sap.delayedCall(2000, this, function() {
				sap.ui.core.BusyIndicator.hide();
				MessageBox.success("Pedido Firme PER001-1244 creado");
			});
		}

	});
});