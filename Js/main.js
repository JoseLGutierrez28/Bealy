function updateAge() {
    let ageIcon = document.getElementById("age");
    let lettersAge = document.getElementById("lettersAge");
    let birthDate = new Date("2023-06-07"); // Cambia esta fecha por la de la mascota años-mes-día
    let currentDate = new Date();

    let ageInYears = currentDate.getFullYear() - birthDate.getFullYear();
    let monthDiff = currentDate.getMonth() - birthDate.getMonth() + 12 * (currentDate.getFullYear() - birthDate.getFullYear());

    // Si el mes actual es menor que el mes de nacimiento o si es el mismo mes pero el día actual es menor, resta un año
    if (currentDate.getMonth() < birthDate.getMonth() ||
        (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
        ageInYears--; // Resta un año si aún no ha pasado el cumpleaños este año
    }

    if (ageInYears < 1) {
        ageIcon.classList.add("fa-solid", "fa-" + monthDiff);
        lettersAge.innerHTML = "Meses";
    } else {
        ageIcon.classList.add("fa-solid", "fa-" + ageInYears);
        lettersAge.innerHTML = " Años";
    }
}

updateAge();
