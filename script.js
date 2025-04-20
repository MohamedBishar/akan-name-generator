document.getElementById("akanForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;

    if (!birthdate || !gender) {
        alert("Please enter your birthdate and select your gender.");
        return;
    }

    const dateParts = birthdate.split("-");
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    if (day < 1 || day > 31) {
        alert("Day must be between 1 and 31.");
        return;
    }
    if (month < 1 || month > 12) {
        alert("Month must be between 1 and 12.");
        return;
    }

    const CC = Math.floor(year / 100);         
    const YY = year % 100;                     
    const MM = month;
    const DD = day;

    
    const d = Math.floor(
        ( ( (4 * CC) - (2 * CC) - 1 ) + (5 * YY / 4) + (26 * (MM + 1) / 10) + DD ) % 7
    );

    const dayIndex = Math.round((d + 7) % 7); // ensure positive and valid index

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    const akanName = gender === "male" ? maleNames[dayIndex] : femaleNames[dayIndex];
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    document.getElementById("result").textContent =
        `You were born on a ${weekDays[dayIndex]}, and your Akan name is ${akanName}.`;
});
