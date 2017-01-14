function calculateDeliverableStartDateFromReqCompDate_PDP(completionDate,deliverableItem) {
    /**
    * File Creation Date : 18-03-2016
    * Author : Krishnareddy
    * Comments : This method returns the deliverable start date for a given deliverable item, and user provided input date.
    */
    //Check for Selected Deliverable
    if(deliverableItem.code == null ){
        Global.logDebug("Deliverables Not Available ");
        return null;
    }

    if( completionDate == null) {
        Global.logDebug("Completion Date Not Availble !!");
        return null;
    }

    if(deliverableItem!=null){
        var wvInterval = 0;
        var wvLeadTime = 0;
        wvInterval = deliverableItem.SP_WV_Interval;
        wvLeadTime = deliverableItem.SP_WV_LeadTime;

        if(wvInterval == null ){
            Global.logDebug("Working View Interval not available!!");
            wvInterval = 0;
        }
        if(wvLeadTime == null ){
            Global.logDebug("Working view leadTime not available!!");
            wvLeadTime = 0;
        }
        var duration = parseInt(wvLeadTime) +  parseInt(wvInterval);

        var startDate = null;
        if(duration == 1){
            startDate = completionDate;
        }else{
            for(duration ; 1<duration ; duration--){
                if(completionDate !=null){
                    startDate = completionDate;
                    var limit=9;  // infinite loop protection
                    do {
                        startDate.setDate(startDate.getDate()-1);//method input parameter date(completionDate) also is getting modify when this statement executes-Issue with CW Date API
                    } while (!app.isBusinessDayCustom(startDate) && (--limit > 0));

                }
            }
        }
    }
    return startDate;
  
}