function calculateSleepTimes() {
    const wakeUpTime = document.getElementById("wake-up-time").value;
    if (!wakeUpTime) {
        alert("Por favor, insira um horário para acordar.");
        return;
    }

    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = ""; // Limpa resultados anteriores

    const [wakeHour, wakeMinute] = wakeUpTime.split(":").map(Number);
    const sleepCycles = 6; // Número de ciclos de sono padrão
    const cycleDuration = 90; // Duração de um ciclo de sono em minutos

    for (let i = 1; i <= sleepCycles; i++) {
        let totalMinutes = (wakeHour * 60 + wakeMinute) - (i * cycleDuration);
        
        // Ajustar totalMinutes para o caso de totalMinutes ser negativo
        if (totalMinutes < 0) {
            totalMinutes += 24 * 60; // Adicionar 24 horas em minutos
        }
        
        const sleepHour = Math.floor(totalMinutes / 60) % 24;
        const sleepMinute = totalMinutes % 60;

        const formattedTime = `${String(sleepHour).padStart(2, '0')}:${String(sleepMinute).padStart(2, '0')}`;
        const paragraph = document.createElement("p");
        paragraph.textContent = `Para completar ${i} ciclo(s) de sono, durma às ${formattedTime}.`;
        resultsDiv.appendChild(paragraph);
    }

    addSleepCycleExplanation(resultsDiv);
    addAgeBasedCyclesExplanation(resultsDiv);

    // Esconder o botão de calcular e mostrar o botão de recalcular
    document.getElementById("calculate-button").style.display = "none";
    document.getElementById("recalculate-button").style.display = "block"; 

    // Garantir que a página não force a rolagem para um local específico
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function recalculate() {
    document.getElementById("wake-up-time").value = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("recalculate-button").style.display = "none"; // Esconder botão de recalcular
    document.getElementById("calculate-button").style.display = "block"; // Mostrar botão de calcular novamente
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Rolagem suave para o topo ao recalcular
}


function addSleepCycleExplanation(container) {
    const explanation = document.createElement("div");
    explanation.id = "sleep-cycle-explanation";
    explanation.innerHTML = `
        <h2>O que são ciclos de sono?</h2>
        <p>O sono é composto por vários ciclos de aproximadamente 90 minutos cada, incluindo fases como sono leve, sono profundo e sono REM. Para acordar mais revigorado, é melhor completar ciclos de sono completos, acordando no final de um ciclo.</p>
    `;
    container.appendChild(explanation);
}

function addAgeBasedCyclesExplanation(container) {
    const ageExplanation = document.createElement("div");
    ageExplanation.id = "age-based-cycles-explanation";
    ageExplanation.innerHTML = `
        <h2>Quantidade de Ciclos de Sono Recomendada por Idade</h2>
        <p>O número de ciclos de sono recomendados pode variar dependendo da idade. Aqui está uma orientação geral:</p>
        <ul>
            <li>Crianças (3-5 anos): 4 a 5 ciclos</li>
            <li>Crianças (6-13 anos): 4 a 5 ciclos</li>
            <li>Adolescentes (14-17 anos): 4 a 5 ciclos</li>
            <li>Adultos (18-64 anos): 4 a 6 ciclos</li>
            <li>Idosos (65+ anos): 3 a 5 ciclos</li>
        </ul>
    `;
    container.appendChild(ageExplanation);
}
