function loadRecord(serviceTypePriceCustLoeMapDoc) {
          if(serviceTypePriceCustLoeMapDoc != null){
              this.model.ServiceType = serviceTypePriceCustLoeMapDoc.ServiceType;
              this.model.ServiceTypeDescription = serviceTypePriceCustLoeMapDoc.ServiceTypeDescription;
              this.model.HourlyPrice = serviceTypePriceCustLoeMapDoc.HourlyPrice;
              this.model.CustLoeMapID = serviceTypePriceCustLoeMapDoc.CustLoeMapID;
              this.model.IsActive = serviceTypePriceCustLoeMapDoc.IsActive;
              this.model.cwDocId = serviceTypePriceCustLoeMapDoc.cwDocId;
              this.getLabelButton();
          }
        
}