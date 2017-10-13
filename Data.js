//Q1
function is_date(a){
    var date = new Date(a);
    if(a == date.toString()){
        return true;
    }else{
        return false;
    }
}
console.log("Q1");
console.log(is_date("Octover 13,2014 11:13:00"));
console.log(is_date(new Date(86400000)));
console.log(is_date(new Date(99,5,24,11,33,30,0)));
console.log(is_date([1,2,4,0]));

//Q2
function curday(a){
    var time = [11,13,2014].join(a);
    return time;
}
console.log("Q2");
console.log(curday('/'));
console.log(curday('-'));

//Q3
function getDaysInMonth(mth,yar){
    var month = new Date(mth+1,yar).getMonth();
    return month;
}
console.log("Q3");
console.log(getDaysInMonth(1,2012));
console.log(getDaysInMonth(2,2012));
console.log(getDaysInMonth(9,2012));
console.log(getDaysInMonth(12,2012));

/*//Q4
function mounth_name(date){
    var time = new Date(date).toDateString();
    new String().charAt( date.getMonth());
    return month;
}
console.log("Q4");
console.log(mounth_name(new Date("10/11/2009")));
console.log(mounth_name(new Date("11/13/2014")));
*/
//Q5
function compare_dates(a,b){
    var date_1 = new Date(a);
    var date_2 = new Date(b);
    if(date_1 == date_2){
        return "Date1 = Date2";
    }else if(date_2 > date_1){
        return "Date2 > Date1";
    }else{
        return "Date1 > Date2";
    }
}
console.log("Q5");
console.log(compare_dates(new Date('11/14/2013 00:00'),new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:01'),new Date('11/14/2013 00:00')));
console.log(compare_dates(new Date('11/14/2013 00:00'),new Date('11/14/2013 00:01')));

//Q6
/*function add_minutes(date){
    time = new Date(date),30;
    return time;
}
console.log("Q6");
console.log(add_minutes(new Date(2014,10,2),30).toString());
//Q7
function date_diff_indays(a,b){
    var date1 = new Date(a).getDay();
    var date2 = new Date(b).getDay();
    return date2 - date1;
}
console.log("Q7");
console.log(date_diff_indays("04/02/2014","11/01/2014"));
console.log(date_diff_indays("12/02/2014","11/04/2014"));
*/
//Q8
function lastday(yar,mth){
    var time = new Date(yar,mth+1,0).getDate();
    return time;
}
console.log("Q8");
console.log(lastday(2014,0));
console.log(lastday(2014,1));
console.log(lastday(2014,11));

//Q9
console.log("Q9");

//Q10
console.log("Q10");