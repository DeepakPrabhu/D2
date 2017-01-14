function isBusinessDayCustom(incomingDate) {
    /*
    * created by setu on 05-03-15
    * This function checks whether the incoming date is working day or not.
    *
    * Note : This function exists as a workaround for the isBusinessDay() api of CW not working after preceeding year. So hardcoded values exists.
    * Has be removed once the product team comes up with some solution for the above problem.
    */


    // stores the list of holidays till 2020, include in case of any additional holidays
    if(incomingDate != null ){
        var holidays =
    {'2015.1.1':1,'2015.5.25':1,'2015.7.4':1,'2015.9.7':1,'2015.11.26':1,'2015.11.27':1,'2015.12.25':1,'2015.7.3':1,
        '2016.1.1':1,'2016.5.30':1,'2016.7.4':1,'2016.9.5':1,'2016.11.24':1,'2016.11.25':1,'2016.12.25':1,'2016.12.26':1,
        '2017.1.1':1,'2017.5.29':1,'2017.7.4':1,'2017.9.4':1,'2017.11.23':1,'2017.11.24':1,'2017.12.25':1,'2017.1.2':1,
        '2018.1.1':1,'2018.5.28':1,'2018.7.4':1,'2018.9.3':1,'2018.11.22':1,'2018.11.23':1,'2018.12.25':1,
        '2019.1.1':1,'2019.5.27':1,'2019.7.4':1,'2019.9.2':1,'2019.11.28':1,'2019.11.29':1,'2019.12.25':1,
        '2020.1.1':1,'2020.5.25':1,'2020.7.4':1,'2020.9.7':1,'2020.11.26':1,'2020.11.27':1,'2020.12.25':1,'2020.7.3':1};

        return ((incomingDate.getDay()!=0) && (incomingDate.getDay()!=6) && !holidays.hasOwnProperty(incomingDate.getFullYear().toString()+'.'+(incomingDate.getMonth()+1)+'.'+incomingDate.getDate()));
    }else{
        return null;
    }
  
}