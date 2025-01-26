// Game variables
let gold = 0;
let food = 0;
let playerHealth = 100;
let enemyHealth = 50;

// DOM elements
const goldDisplay = document.getElementById("gold");
const foodDisplay = document.getElementById("food");
const playerHealthDisplay = document.getElementById("playerHealth");
const enemyHealthDisplay = document.getElementById("enemyHealth");
const gameMap = document.getElementById("gameMap");

// Resource generation
setInterval(() => {
    gold += 10;
    food += 5;
    updateUI();
}, 1000); // Generate every second

// Update UI function
function updateUI() {
    goldDisplay.textContent = gold;
    foodDisplay.textContent = food;
    playerHealthDisplay.textContent = playerHealth;
    enemyHealthDisplay.textContent = enemyHealth;
}

// Build a building
function buildBuilding() {
    if (gold >= 10) {
        gold -= 10;
        const building = document.createElement("div");
        building.className = "building";
        building.style.left = `${Math.random() * 380}px`;
        building.style.top = `${Math.random() * 280}px`;
        gameMap.appendChild(building);
        updateUI();
    } else {
        alert("Not enough gold to build a building!");
    }
}

// Attack the enemy
function attackEnemy() {
    if (gold >= 5) {
        gold -= 5;
        enemyHealth -= 10;
        if (enemyHealth <= 0) {
            enemyHealth = 0;
            alert("Enemy defeated!");
        }
        updateUI();
    } else {
        alert("Not enough gold to attack!");
    }
}

// Map click interaction (place building manually)
gameMap.addEventListener("click", (e) => {
    if (gold >= 10) {
        gold -= 10;
        const building = document.createElement("div");
        building.className = "building";
        building.style.left = `${e.offsetX - 10}px`;
        building.style.top = `${e.offsetY - 10}px`;
        gameMap.appendChild(building);
        updateUI();
    } else {
        alert("Not enough gold to build a building!");
    }
});
