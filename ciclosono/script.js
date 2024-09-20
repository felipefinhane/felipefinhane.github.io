// script.js

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
    addAgeSleepCycleRecommendation(resultsDiv);

    document.getElementById("recalculate-button").style.display = "block"; // Mostrar botão de recalcular
}

function addSleepCycleExplanation(container) {
    const explanation = document.createElement("div");
    explanation.id = "sleep-cycle-explanation";
    explanation.innerHTML = `
        <h2>O que são ciclos de sono?</h2>
        <p>O sono é composto por vários ciclos de aproximadamente 90 minutos cada, durante os quais passamos por diferentes estágios de sono, incluindo sono leve, sono profundo e REM (movimento rápido dos olhos).</p>
        <p>Completar um ciclo completo de sono ajuda a garantir que você acorde se sentindo mais descansado e revigorado. Acordar no meio de um ciclo pode levar à sensação de cansaço e desorientação.</p>
        <h3>Estágios do sono:</h3>
        <div class="sleep-stage">
            <img src="icons/light-sleep.png" alt="Estágio 1">
            <div>
                <strong>Estágio 1:</strong>
                <p>Transição entre estar acordado e adormecer. É um sono leve que dura alguns minutos.</p>
            </div>
        </div>
        <div class="sleep-stage">
            <img src="icons/light-sleep.png" alt="Estágio 2">
            <div>
                <strong>Estágio 2:</strong>
                <p>Sono leve onde a frequência cardíaca e a temperatura corporal diminuem.</p>
            </div>
        </div>
        <div class="sleep-stage">
            <img src="icons/deep-sleep.png" alt="Estágio 3">
            <div>
                <strong>Estágio 3:</strong>
                <p>Sono profundo necessário para se sentir revigorado pela manhã.</p>
            </div>
        </div>
        <div class="sleep-stage">
            <img src="icons/rem-sleep.png" alt="REM">
            <div>
                <strong>REM:</strong>
                <p>Estágio onde ocorrem a maioria dos sonhos. É importante para a consolidação da memória e aprendizado.</p>
            </div>
        </div>
    `;
    container.appendChild(explanation);
}

function addAgeSleepCycleRecommendation(container) {
    const ageRecommendation = document.createElement("div");
    ageRecommendation.id = "age-sleep-recommendation";
    ageRecommendation.innerHTML = `
        <h2>Recomendações de Ciclos de Sono por Idade</h2>
        <p>Diferentes faixas etárias têm diferentes necessidades de sono. Aqui estão algumas recomendações gerais:</p>
        <ul>
            <li><strong>Crianças (3-5 anos):</strong> 10-13 horas de sono (7-9 ciclos)</li>
            <li><strong>Crianças (6-12 anos):</strong> 9-12 horas de sono (6-8 ciclos)</li>
            <li><strong>Adolescentes (13-17 anos):</strong> 8-10 horas de sono (5-7 ciclos)</li>
            <li><strong>Adultos (18-64 anos):</strong> 7-9 horas de sono (4-6 ciclos)</li>
            <li><strong>Idosos (65+ anos):</strong> 7-8 horas de sono (4-5 ciclos)</li>
        </ul>
        <p>Essas são apenas diretrizes gerais e as necessidades individuais podem variar.</p>
    `;
    container.appendChild(ageRecommendation);
}

function recalculate() {
    document.getElementById("wake-up-time").value = "";
    document.getElementById("results").innerHTML = "";
    document.getElementById("recalculate-button").style.display = "none"; // Esconder botão de recalcular
}
