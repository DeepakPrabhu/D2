function customServiceTypeValidation() {
        if(Global.stringIn(this.ServiceType,"custom,Custom,CUSTOM") && this.ServiceTypeDescription != null && this.CustLoeMapID != null && this.HourlyPrice != null)
            return true;
        else
            return false;
      
}