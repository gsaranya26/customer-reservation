function addTrain() {
    const trainNumber = document.getElementById("customername").value;
    const arrivalTime = document.getElementById("numberofguests").value;
    const departureTime = document.getElementById("reservationtime").value;

    if (trainNumber !== "") {
        const table = document.getElementById("customerreservation");
        const row = table.insertRow();

        row.insertCell(0).innerText = customername;
        row.insertCell(1).innerText = numberofguests;
        row.insertCell(2).innerText = reservationtime;
        row.insertCell(3).innerHTML = '<button onclick="deleteRow(this)">Delete</button>';
        row.insertCell(4).innerHTML = '<button onclick="updateRow(this)">Update</button>';
    } else {
        alert("Please enter the details");
    }
}

function deleteRow(button) {
    // Get the row to delete
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function updateRow(button) {
    const row = button.parentNode.parentNode;
    const trainNumber = prompt("Update Train Number:", row.cells[0].innerText);
    const arrivalTime = prompt("Update Arrival Time:", row.cells[1].innerText);
    const departureTime = prompt("Update Departure Time:", row.cells[2].innerText);
    
    if (trainNumber && arrivalTime && departureTime) {
        row.cells[0].innerText = customername;
        row.cells[1].innerText = numberofguests;
        row.cells[2].innerText = reservationtime;
    } else {
        alert("All fields must be filled.");
    }
}
