var name_of_the_guests_array = [];

function submit(){
    var guest_name = document.getElementById("Input").value;
    name_of_the_guests_array.push(guest_name);
    name_of_the_guests_array.join(",")
    console.log(name_of_the_guests_array);
    document.getElementById("h41").innerHTML = name_of_the_guests_array;
}

function dispay(){
    var guest_name_display = name_of_the_guests_array.join(" ");
    for(d = 0;d <= guest_name_display.length; d++){
        console.log(guest_name_display);
        document.getElementById("h42").innerHTML = "<br>"+"<div>"+guest_name_display+"</div>";
    }
    document.getElementById("sorted-list").style.display = "inline-block";
}

function sort(){
    name_of_the_guests_array.sort();
    var guest_name_display = name_of_the_guests_array.join(" ");
    for(d = 0;d <= guest_name_display.length; d++){
        console.log(guest_name_display);
        document.getElementById("h43").innerHTML = "<br>"+"<div>"+guest_name_display+"</div>";
    }
}

function search(){

    var s = document.getElementById("h41").value;
    var found = 0;
    var j;
    for(j = 0; j < name_of_the_guests_array.length; j++){
        if(s == name_of_the_guests_array[j]){
            found = found + 1;
        }
    }

    document.getElementById("h44").innerHTML = "name found " + found + " time/s";
    console.log ("name found " + found + " time/s");
}