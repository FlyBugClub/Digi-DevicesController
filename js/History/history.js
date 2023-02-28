const URL = "https://digi27.azurewebsites.net/api/healthies";

function pageLoad() {
    //alert(localStorage.getItem("key")); 
    getDetails();
}

alert(localStorage.getItem("key"));

async function getDetails() {
    alert("hehe");
    await axios.get(URL + "/SearchByPIDParameterHistory/" + localStorage.getItem("key")).then((response) => {
        var Human = response.data;
        alert(Human);
        for(var human1 of Human ){
            document.getElementById("txtID").innerHTML = human1.PID;
            document.getElementById("txtName").value = human1.Name;
            document.getElementById("txtHeight").value = human1.Height;
            document.getElementById("txtWeight").value = human1.Weight;
            document.getElementById("txtBMI").value = human1.BMI;
        }
    
    });
}

// function renderHumanDetails(Human) {
//     document.getElementById("txtID").innerHTML = Human.PID;
//     document.getElementById("txtName").value = Human.Name;
//     document.getElementById("txtHeight").value = Human.Height;
//     document.getElementById("txtWeight").value = Human.Weight;
//     document.getElementById("txtBMI").value = Human.BMI;
// }