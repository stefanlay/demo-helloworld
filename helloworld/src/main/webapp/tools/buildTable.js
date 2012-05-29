    var buildTable = function(tableName){
     
      // Only run through the code if a table name has been provided as parameter
      if (tableName) {
     
          // table with a list of all tweets
          if (tableName === "allTweets" || tableName === "tweetsForHashtag") {
              var oTable = new sap.ui.table.DataTable("table" + tableName, {
                title : "Tweets",
                width : "100%",
                visibleRowCount : 5,
                expandedVisibleRowCount : 10,
                selectionMode : sap.ui.table.SelectionMode.Single,
                editable : false
            });
            oTable.setRowHeight("50px");
            oTable.addColumn(buildColumnWithPic("Picture","icon","48px"));
            oTable.addColumn(buildLinkedColumn("Author","author","linkauthor","180px"));
            oTable.addColumn(buildLinkedColumn("Tweet","tweet","linktweet"));
     
            if (tableName === "allTweets") {
                     oTable.bindRows("allTweets");   
            }
            if (tableName === "tweetsForHashtag") {
                    oTable.bindRows("tweetsForHashtag");   
            }
            return oTable;   
         }
     
        if (tableName === "allHashtags") {
            var oTable = new sap.ui.table.DataTable("table" + tableName, {
                title : "All Hashtags",
                width : "150px",
                visibleRowCount : 5,
                expandedVisibleRowCount : 10,
                selectionMode : sap.ui.table.SelectionMode.Single,
                editable : false
            });
     
        oTable.addColumn(buildPlainColumn("Hashtag","hashtag","90px"));
        oTable.bindRows("allHashtags");   
        return oTable;   
       }
       return null;
      }
      else {
        return null;
      }
    };
     
    var buildLinkedColumn = function (title,value,link, width){
        var field;
        if (link){
            field = new sap.ui.commons.Link();
            field.bindProperty("text",value);
            field.bindProperty("href",link);
            field.setTarget("_blank");
        } else {
            var fieldValue = "{" + value + "}";
            field = new sap.ui.commons.TextField({value:fieldValue});
        }
     
        return     new sap.ui.table.Column().
        setLabel(new sap.ui.commons.Label({text: title})).
        setTemplate(field).
        setWidth(width).
        setSortProperty(value).
        setFilterProperty(value);
    }
     
    var buildPlainColumn = function (title,value,width){
     
        var fieldValue = "{" + value + "}";
     
        return new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: title}),
            template: new sap.ui.commons.TextArea({value:fieldValue}),
            sortProperty: value,
            filterProperty: value,
            width: width});
    }

    var buildColumnWithPic = function (title,piclink,width){
     
        oImage = new sap.ui.commons.Image().bindProperty("src", piclink);   
        oImage.setWidth(width);
        oImage.setHeight(width);

        return new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: title}),
            template: oImage,
            width: "60px"});
    }