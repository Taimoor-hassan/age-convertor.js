
function ageindays() {
    var eday=3;
    var emonth=4;
    var eyear=2020;

    var bday=prompt('Enter your birth day');
    var bmonth=prompt('Enter your birth month');
    var byear=prompt('Enter your birth year');

    var days=day();
    function day() {
        if (bday<eday) {
            bday=bday+10;
            bmonth=(bmonth+12)-1;
            byear=byear-1;
            return (bday-eday);
        } else {
            return (bday-eday);
        }
    }
    var months=month();
    function month() {
        if (bmonth<emonth) {
            bmonth=(bmonth+12);
            byear=byear-1;
            return (bmonth-emonth);
        } else {
            return (bmonth-emonth);
        }
    }
    var years=year();
    function year() {
        if (bmonth<emonth) {
            byear=byear-1;
            return (byear-eyear);
        } else{
            return (byear-eyear);
        }
    }

    var h2=document.createElement('h2');
    var text=document.createTextNode('You are '+years+' years '+months+' months and '+days+' days old');
    h2.setAttribute('id','days');
    h2.appendChild(text);
    document.getElementById('reset').appendChild(h2);
}
 function reset() {
     document.getElementById('days').remove();
     
 }