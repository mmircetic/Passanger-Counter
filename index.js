//document.getElementById("counter").innerText = 5;

var counter= 0;

function increment(){
    document.getElementById("counter").innerText = counter + 1;
    counter+=1;
}


function save(){
    document.getElementById("welcome").textContent += counter + " - "; 
    document.getElementById("counter").innerText = 0;
    window.counter= 0;

}




