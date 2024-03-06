function updateAge() {
    let age = document.getElementById("age");

    let anoNacimiento = 2023; // Año de nacimiento
    let mesNacimiento = 6;    // Mes de nacimiento (1-12)
    let diaNacimiento = 7;    // Día de nacimiento

    let date = new Date(); // Fecha actual
    let currentYear = date.getFullYear(); // Año actual
    let currentMonth = date.getMonth() + 1; // Mes actual
    let currentDay = date.getDate(); // Día actual

    let ageInYears = currentYear - anoNacimiento; // Diferencia en años

    // Ajustar la diferencia de años si el mes actual es anterior al mes de nacimiento,
    // o si es el mismo mes pero el día actual es anterior al día de nacimiento
    if ((currentMonth < mesNacimiento) || (currentMonth === mesNacimiento && currentDay < diaNacimiento)) {
        ageInYears--;
    }

    let monthsRemaining = currentMonth - mesNacimiento;
    if (monthsRemaining < 0) {
        monthsRemaining += 12; // Ajustar si es negativo
    }

    if (currentDay < diaNacimiento) monthsRemaining--;

    // Si la diferencia en años es 0, mostrar la edad en meses
    if (ageInYears === 0) age.innerHTML = monthsRemaining + "<span class='text-icons'>Meses</span>";
    // Si la diferencia en años es 1 o más, mostrar la edad en años
    else age.innerHTML = ageInYears + "<span class='text-icons'>Años</span>";
}

updateAge();
