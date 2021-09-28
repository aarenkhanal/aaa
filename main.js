var names_of_people = [];
function submit()
{

var Guestname = document.getElementById("name1").value;
names=names_of_people.push(Guestname);
 
console.log(Guestname);
console.log (names_of_people);
document.getElementById("displayname").innerHTML=names.tostring();


}
function sorting()
{
    names_of_people.sort();
    var i = names_of_people.join ("<br>");
    document.getElementById ("sorted").innerHTML=i.toString()

}
function show() { var i= names_of_people.join("");
 console.log(names_of_people);
 document.getElementById("p1").innerHTML=i.toString();
 document.getElementById("sort_button").style.display="block";
 } function searching() { var s= document.getElementById("s1").value;
 var found=0; var j;
 for(j=0; j<names_of_people.length; j++) { if(s==names_of_people[j]){ found=found+1;
 } } document.getElementById("p2").innerHTML="name found "+found+" time/s";
 console.log("found name "+found+" time/s");
 } 