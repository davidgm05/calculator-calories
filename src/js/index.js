import '../scss/style.scss';

document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores ingresados por el usuario
    var weight = parseInt(document.getElementById('weight').value);
    var height = parseInt(document.getElementById('height').value);
    var age = parseInt(document.getElementById('age').value);
    var gender = document.getElementById('gender').value;
    var activityLevel = parseFloat(document.getElementById('activityLevel').value);
    
    // Calcular las calorías utilizando la función calculateCalories
    var calories = calculateCalories(weight, height, age, gender, activityLevel);
    
    // Mostrar el resultado en el div con id "result"
    document.getElementById('result').innerHTML = "Calorías diarias recomendadas: " + calories.toFixed(2);
});

// Función para calcular las calorías
function calculateCalories(weight, height, age, gender, activityLevel) {
    var bmr;
    // Calcular la tasa metabólica basal (BMR) según el género
    if (gender === 'male') {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    
    // Calcular las calorías totales diarias recomendadas
    var calories = bmr * activityLevel;
    return calories;
}

function calculateCalories(){
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = document.getElementById('activity-level').value;

    let bmr;
    if (gender === 'male'){
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else{
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let calories;
    switch(activityLevel){
        case 'sedentary':
            calories = bmr * 1.2;
            break;
        case 'lightly-active':
            calories = bmr * 1.375;
            break;
        case 'moderately-active':
            calories = bmr * 1.55;
            break;
        case 'active':
            calories = bmr * 1.725;
            break;
        default:
            calories = bmr;                
    }

    document.getElementById('result').innerHTML = `calorias diarias necesarias: ${calories.toFixed(2)}`
}
