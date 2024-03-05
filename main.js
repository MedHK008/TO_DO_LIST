function sendtask(){
    event.preventDefault();
    var task = document.getElementById("task");
    var showtask = document.getElementById("show");
    var tache="tache";
    if(task.value != '') {
        showtask.innerHTML += "<div>" + task.value + "</div>";
    }
}

function supp(){
    var showtask = document.getElementById("show");
    showtask.innerHTML = "";
}