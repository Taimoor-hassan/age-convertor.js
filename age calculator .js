
function ageindays() {
    var eday=3;
    var emonth=4;
    var eyear=2020;

    var bday=prompt('Enter your birth day');
    var bmonth=prompt('Enter your birth month');
    var byear=prompt('Enter your birth year');

    var days=day();
    function day() {
        if (eday<bday) {
            eday=eday+10;
            emonth=(emonth+12)-1;
            eyear=eyear-1;
            return (eday-bday);
        } else {
            return (eday-bday);
        }
    }
    var months=month();
    function month() {
        if (emonth<bmonth) {
            emonth=(emonth+12);
            eyear=eyear-1;
            return (emonth-bmonth);
        } else {
            return (emonth-bmonth);
        }
    }
    var years=year();
    function year() {
        if (emonth<bmonth) {
            eyear=eyear-1;
            return (eyear-byear);
        } else{
            return (eyear-byear);
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