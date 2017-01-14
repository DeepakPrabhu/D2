function addRecord() {
          var messageUI = null;
          if(!this.onValidate())
          {
               common.showCustomMessagePopup("Error",null,"Custom Service Type not allowed!","ERROR",null,null,false);
          }

          if( this.model != null)
          {
             var messageUI = null;
             if(this.model.ServiceType == null || this.model.ServiceTypeDescription == null || this.model.CustLoeMapID == null || this.model.HourlyPrice == null)
             {
                  common.showCustomMessagePopup("ERROR",null,"Mandatory fields cannot be left empty!","ERROR",null,null,false);
             }

             else if(this.buttonLabel == "Add" && this.onValidate())
             {
                  var readConsServTypeDoc = new Document("app.docServiceTypePriceCustLoeMap");
                  readConsServTypeDoc.CustLoeMapID= this.model.CustLoeMapID;
                  readConsServTypeDoc.ServiceType = this.model.ServiceType;
                  readConsServTypeDoc.ServiceTypeDescription=this.model.ServiceTypeDescription;
                  readConsServTypeDoc.HourlyPrice=this.model.HourlyPrice;
                  readConsServTypeDoc.IsActive = this.model.IsActive;
                  readConsServTypeDoc.save();

              }

             else if(this.buttonLabel=="Update" && this.onValidate())
             {
                  var docId = this.model.cwDocId;
                  var readConsServTypeDoc = Document.readDoc("app.docServiceTypePriceCustLoeMap", docId);
                  readConsServTypeDoc.CustLoeMapID   =  this.model.CustLoeMapID;
                  readConsServTypeDoc.ServiceType    =  this.model.ServiceType;
                  readConsServTypeDoc.ServiceTypeDescription = this.model.ServiceTypeDescription;
                  readConsServTypeDoc.HourlyPrice    = this.model.HourlyPrice;
                  readConsServTypeDoc.IsActive       = this.model.IsActive;
                  readConsServTypeDoc.save();
                  messageUI = "<html><body><div style=\"color:#000000; font-family:Arial;font-weight:bold; font-size:12px; padding-top:10px\">Selected record has been updated.</div></body></html> ";
                  common.showCustomMessagePopup("Information",null,"Selected record has been updated.","INFO",null,null,false);
              }

              if(this.parent.metadata == app.serviceTypePriceCustLoeUI  && this.parent.servicetypePriceCustLoeMapFinderUI != null)
                      this.parent.servicetypePriceCustLoeMapFinderUI.searchAction();
              else if(this.parent.metadata == app.serviceTypePriceCustLoeMapFinder.UserInterface)
                      this.parent.searchAction(false);
              this.clearRecord();
          }
        
}