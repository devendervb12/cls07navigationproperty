sap.ui.controller("customers_to_orders.Cust_to_Orders", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf customers_to_orders.Cust_to_Orders
*/
	onInit: function() {
        var url = "proxy/https/services.odata.org/Northwind/Northwind.svc/";     
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		
		this.getView().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf customers_to_orders.Cust_to_Orders
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf customers_to_orders.Cust_to_Orders
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf customers_to_orders.Cust_to_Orders
*/
//	onExit: function() {
//
//	}
	onColumnListItemSelection : function(oEvent){
		// https://services.odata.org/Northwind/Northwind.svc/Customers('ALFKI')/Orders
		//oEvent = Press
		//oEvent.getSource()
		debugger;
		// selected CustomerID
		var custID = oEvent.getSource().getCells()[0].getText();
		// binding
	var oTable = this.getView().byId("idprodsss");	
	
	oTable = this.getView().byId("idprodsss").setVisible(true);
	
	oTable.bindAggregation("items", "/Customers('"+custID+"')/Orders" , new sap.m.ColumnListItem({
		cells : [
			new sap.m.Text({ text : "{OrderID}"}),
			new sap.m.Text({ text : "{CustomerID}"})
		]
	})); //  === /Customers('ALFKI')/Orders
	
		
		
	}

});