sap.ui.jsview("helloworld.MyView", {

      getControllerName : function() {
         return "helloworld.MyView";
      },

      createContent : function(oController) {

          this.oShell = new sap.ui.ux3.Shell({
              appTitle : "Hello World",
              showLogoutButton : false,
              showInspectorTool : true,
              showSearchTool : true,
              showFeederTool : true
          });
          var oButton1 = new sap.ui.commons.Button({
              text : "Hello",
              tooltip : "This is a test tooltip",
              press : function() {alert('Hello Democamp');}
          });

          this.oShell.addContent(oButton1);
          return this.oShell;
      }

});
