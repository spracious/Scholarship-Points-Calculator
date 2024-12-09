function calculatePoints(event) {
    event.preventDefault();

    // Get form values
    const age = parseInt(document.getElementById('age').value);
    const country = document.getElementById('country').value;
    const mathsGrade = parseInt(document.getElementById('mathsGrade').value);
    const englishGrade = parseInt(document.getElementById('englishGrade').value);
    const subject3 = document.getElementById('subject3').value;
    const subject4 = document.getElementById('subject4').value;
    const subject5 = document.getElementById('subject5').value;
    const subject6 = document.getElementById('subject6').value;
    const subject7 = document.getElementById('subject7').value;
    const subject8 = document.getElementById('subject8').value;

    // Convert subject grades to numbers
    const subject3Score = parseFloat(document.getElementById('score3').value) || 0;
    const subject4Score = parseFloat(document.getElementById('score4').value) || 0;
    const subject5Score = parseFloat(document.getElementById('score5').value) || 0;
    const subject6Score = parseFloat(document.getElementById('score6').value) || 0;
    const subject7Score = parseFloat(document.getElementById('score7').value) || 0;
    const subject8Score = parseFloat(document.getElementById('score8').value) || 0;

    // Calculate average grade
    const totalSubjects = 8;
    const averageGrade = (mathsGrade + englishGrade + subject3Score + subject4Score + subject5Score + subject6Score + subject7Score + subject8Score) / totalSubjects;

    // Calculate points based on age
    let agePoints;
    if (age >= 18 && age <= 24) {
        agePoints = 100;
    } else if (age >= 25 && age <= 30) {
        agePoints = 80;
    } else if (age >= 31 && age <= 35) {
        agePoints = 50;
    } else if (age >= 36 && age <= 40) {
        agePoints = 30;
    } else {
        agePoints = 10;
    }

    // Calculate points based on country
    let countryPoints;
    switch (country) {
        case 'africa':
            countryPoints = 50;
            break;
        case 'asia':
            countryPoints = 40;
            break;
        case 'southAmerica':
            countryPoints = 30;
            break;
        case 'northAmerica':
            countryPoints = 20;
            break;
        default:
            countryPoints = 10;
    }

    // Calculate points based on average grade
    let gradePoints;
    if (averageGrade >= 90) {
        gradePoints = 150;
    } else if (averageGrade >= 85) {
        gradePoints = 140;
    } else if (averageGrade >= 75) {
        gradePoints = 120;
    } else if (averageGrade >= 65) {
        gradePoints = 100;
    } else if (averageGrade >= 60) {
        gradePoints = 80;
    } else if (averageGrade >= 50) {
        gradePoints = 50;
    } else if (averageGrade >= 40) {
        gradePoints = 20;
    } else {
        gradePoints = 0;
    }

    // Total points
    const totalPoints = agePoints + countryPoints + gradePoints;

    // Display results
    const resultsContainer = document.getElementById('results');
    resultsContainer.classList.remove('hidden');

    // Display total points
    document.getElementById('totalPoints').textContent = totalPoints;
totalPoints.style.color ='navy'
    // Display chart
    displayChart(agePoints, countryPoints, gradePoints);

    // Determine scholarship award
    const resultMessage = document.getElementById('resultMessage');
    if (totalPoints >= 180) {
        resultMessage.textContent = 'Congratulations! You have been awarded the scholarship.🎉';
    } else {
        resultMessage.textContent = 'Sorry, you did not meet the criteria for the scholarship.😔';
    }
    resultMessage.style.color = 'navy';
}

function displayChart(agePoints, countryPoints, gradePoints) {
    const ctx = document.getElementById('pointsChart').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Age', 'Country', 'Grade'],
            datasets: [{
                label: 'Points Breakdown',
                data: [agePoints, countryPoints, gradePoints],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                ],
                borderWidth: 1,
            }],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}
