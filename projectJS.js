function generateMealPlan() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let goal = document.getElementById('goal').value;

    // Meal Inputs
    let breakfast = document.getElementById('breakfast').value;
    let snack1 = document.getElementById('snack1').value;
    let lunch = document.getElementById('lunch').value;
    let snack2 = document.getElementById('snack2').value;
    let dinner = document.getElementById('dinner').value;

    // Email validation check
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Generate a new web page with the meal plan
    let mealPlanWindow = window.open('', '', 'width=800,height=600');
    mealPlanWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Meal Plan</title>
            <style>
                
                body {
                    font-family: Courier, monospace;
                    background-color: #121212;
                    color: #e0e0e0;
                    margin: 0;
                    padding: 20px;
                }
                h1, h2, h3 {
                    text-align: center;
                    color: #ffffff;
                }
                .meal-container {
                    margin: 20px auto;
                    width: 80%;
                    background-color: #1e1e1e;
                    border: 1px solid #444;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
                }
                .meal-section {
                    margin-bottom: 15px;
                }
                .meal-section h3 {
                    color: #4CAF50;
                }
                .meal-section p {
                    margin: 5px 0;
                }
                button {
                    padding: 10px;
                    background-color: #b0272b;
                    color: white;
                    border: none;
                    cursor: pointer;
                    border-radius: 4px;
                }
                button:hover {
                    background-color: #b0272b;
                }
            </style>
        </head>
        <body>
            <h1>Your Weekly Meal Plan</h1>
            <h2>${name}</h2>
            <h3>Goal: ${goal}</h3>
            <div class="meal-container">
                <div class="meal-section">
                    <h3>Breakfast</h3>
                    <p>${breakfast}</p>
                </div>
                <div class="meal-section">
                    <h3>Snack 1</h3>
                    <p>${snack1}</p>
                </div>
                <div class="meal-section">
                    <h3>Lunch</h3>
                    <p>${lunch}</p>
                </div>
                <div class="meal-section">
                    <h3>Snack 2</h3>
                    <p>${snack2}</p>
                </div>
                <div class="meal-section">
                    <h3>Dinner</h3>
                    <p>${dinner}</p>
                </div>
            </div>
            <button onclick="window.print()">Print Meal Plan</button>
        </body>
        </html>
    `);
    mealPlanWindow.document.close();
}

function clearForm() {
    document.getElementById('mealPlanForm').reset();
}
