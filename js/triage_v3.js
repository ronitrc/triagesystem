document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('triage-form');
    const severityInput = document.getElementById('severity');
    const severityDisplay = document.getElementById('severity-display');
    const reportSection = document.getElementById('report-section');
    const resetBtn = document.getElementById('reset-btn');
    const pregnancyContainer = document.getElementById('pregnancy-container');
    const sexSelect = document.getElementById('sex');
    const stateSelect = document.getElementById('state');

    // Populate States
    if (stateSelect && typeof STATE_LANGUAGE_MAP !== 'undefined') {
        Object.keys(STATE_LANGUAGE_MAP).sort().forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }

    // Severity display
    severityInput.addEventListener('input', e => {
        severityDisplay.textContent = Math.round(e.target.value);
    });

    // Pregnancy toggle
    sexSelect.addEventListener('change', e => {
        if (e.target.value === 'female') {
            pregnancyContainer.classList.remove('hidden');
        } else {
            pregnancyContainer.classList.add('hidden');
            document.getElementById('pregnancy-checkbox').checked = false;
            document.getElementById('pregnancy-month-container').classList.add('hidden');
        }
    });

    document.getElementById('pregnancy-checkbox').addEventListener('change', function () {
        const monthContainer = document.getElementById('pregnancy-month-container');
        if (this.checked) {
            monthContainer.classList.remove('hidden');
            document.getElementById('pregnancy_month').required = true;
        } else {
            monthContainer.classList.add('hidden');
            document.getElementById('pregnancy_month').required = false;
        }
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await generateReport();
    });

    resetBtn.addEventListener('click', () => {
        form.reset();
        severityDisplay.textContent = '5';
        pregnancyContainer.classList.add('hidden');
        reportSection.classList.add('hidden');
    });

    // ==============================
    // 🧠 ADVANCED AI RISK MODEL V4
    // ==============================
    async function predictRisk(data) {

        await new Promise(resolve => setTimeout(resolve, 200));

        const intercept = -4.5;

        const weights = {
            red_flag_present: 3.0,

            chest_pain_mild: 1.8,
            difficulty_breathing: 3.2,
            unconsciousness: 4.5,
            confusion: 2.2,
            severe_trauma: 3.8,
            uncontrolled_bleeding: 3.5,
            abdominal_pain: 1.2,
            vomiting: 0.9,
            fever: 0.6,
            cough: 0.3,
            headache: 0.4,
            dizziness: 0.6,
            rash: 0.3,
            injury: 1.0,

            cardiac: 1.7,
            diabetes: 0.7,
            immunocompromised: 1.0,
            asthma: 0.8,
            hypertension: 0.6,

            age_elderly: 1.4,
            age_child: 1.2,

            pregnancy_base: 1.0,
            pregnancy_mid: 1.5,
            pregnancy_late: 2.5
        };

        let logOdds = intercept;

        const severity = parseFloat(data.severity) || 1;
        const age = parseInt(data.age) || 0;

        // Severity Multiplier (core improvement)
        const severityMultiplier = 0.5 + (severity / 10) * 1.3;

        // Red Flags
        if (data.red_flags.length > 0) {
            logOdds += weights.red_flag_present * severityMultiplier;
        }

        // Symptoms
        data.symptoms.forEach(symptom => {
            if (weights[symptom]) {
                logOdds += weights[symptom] * severityMultiplier;
            }
        });

        // History
        data.history.forEach(condition => {
            if (weights[condition]) {
                logOdds += weights[condition];
            }
        });

        // Age
        if (age > 65) logOdds += weights.age_elderly;
        if (age < 5) logOdds += weights.age_child;

        // Pregnancy Intelligence
        if (data.pregnancy) {

            logOdds += weights.pregnancy_base;

            const month = parseInt(data.pregnancy_month);

            if (month >= 4 && month <= 6) {
                logOdds += weights.pregnancy_mid;
            }

            if (month >= 7) {
                logOdds += weights.pregnancy_late;

                if (data.symptoms.length > 0) {
                    logOdds += 1.2;
                }
            }

            if (data.symptoms.includes('abdominal_pain')) {
                logOdds += 3.0;
            }

            if (data.symptoms.includes('cough') || data.symptoms.includes('fever')) {
                logOdds += 1.5;
            }

            if (data.symptoms.includes('uncontrolled_bleeding')) {
                logOdds += 4.0;
            }
        }

        // Duration Intelligence
        if (data.duration === "acute") {
            logOdds += 0.8;
        }
        if (data.duration === "chronic") {
            logOdds -= 0.5;
        }

        let probability = 1 / (1 + Math.exp(-logOdds));

        if (probability > 0.97 && severity < 8) {
            probability = 0.92;
        }

        return Math.round(probability * 100);
    }

    // ==============================
    // REPORT GENERATION
    // ==============================
    async function generateReport() {

        const formData = new FormData(form);
        const state = formData.get('state'); // Ensure state is captured

        const dataForML = {
            red_flags: formData.getAll('red_flags'),
            symptoms: formData.getAll('symptoms'),
            history: formData.getAll('history'),
            age: formData.get('age'),
            pregnancy: formData.get('pregnancy'),
            pregnancy_month: formData.get('pregnancy_month'),
            severity: formData.get('severity'),
            duration: formData.get('duration')
        };

        const riskScore = await predictRisk(dataForML);

        let urgency = "Non-Urgent & Routine";
        let specialist = "General Practitioner / Community Nurse";
        let color = "#10b981"; // success green
        let reasoning = [];

        if (riskScore >= 85) {
            urgency = "IMMEDIATE EMERGENCY";
            specialist = "Emergency Room (ER) / Trauma Team";
            color = "#ef4444"; // danger red
            reasoning.push({ text: "Critical risk level detected based on severity, red flags and clinical factors." });
        } 
        else if (riskScore >= 60) {
            urgency = "URGENT";
            specialist = "Urgent Care / Specialist Consult";
            color = "#f59e0b"; // warning orange
            reasoning.push({ text: "High risk due to combination of symptoms and medical history." });
        } 
        else if (riskScore >= 35) {
            urgency = "PRIORITY";
            color = "#3b82f6"; // info blue
            reasoning.push({ text: "Moderate risk. Early consultation recommended." });
        } 
        else {
            reasoning.push({ text: "Routine Checkup Recommended." });
        }

        // Add detailed reasoning
        if (dataForML.symptoms.length > 0) {
            reasoning.push({
                key: "symptoms_reported",
                values: dataForML.symptoms.map(s => s.replace(/_/g, ' '))
            });
        }

        if (dataForML.history.length > 0) {
            reasoning.push({
                key: "patient_history",
                values: dataForML.history
            });
        }

        if (dataForML.pregnancy) {
            reasoning.push({
                text: `Patient is pregnant (Month ${dataForML.pregnancy_month}).`
            });
        }

        const assessment = {
            urgency,
            specialist,
            color,
            reasoning,
            riskScore
        };

        const languages = ["English", "Hindi"];

        // Use global STATE_LANGUAGE_MAP if available
        if (state && typeof STATE_LANGUAGE_MAP !== 'undefined' && STATE_LANGUAGE_MAP[state]) {
            const regional = STATE_LANGUAGE_MAP[state];
            if (!languages.includes(regional)) {
                languages.push(regional);
            }
        }

        // Prepare Report Section
        reportSection.innerHTML = '';
        reportSection.className = 'card';
        reportSection.style.borderLeft = `8px solid ${color}`;
        reportSection.style.display = 'block';

        // Header
        const headerDiv = document.createElement('div');
        headerDiv.innerHTML = `
            <div id="report-header" style="margin-bottom: var(--spacing-md);">
                <h2 class="font-bold" style="font-size: 1.5rem;">Clinical Assessment</h2>
                <div class="text-muted font-bold">AI Risk Score: ${riskScore}%</div>
            </div>
            <button id="reset-btn-dynamic" style="margin-bottom: var(--spacing-lg); padding: 0.5rem 1rem; border: 1px solid #ccc; border-radius: 0.5rem; cursor: pointer;">Start Over</button>
            <div id="report-grid-container" class="report-grid"></div>
        `;
        reportSection.appendChild(headerDiv);

        // Re-attach reset listener
        document.getElementById('reset-btn-dynamic').addEventListener('click', () => {
            form.reset();
            severityDisplay.textContent = '5';
            pregnancyContainer.classList.add('hidden');
            reportSection.classList.add('hidden');
            reportSection.style.display = 'none';
        });

        const grid = document.getElementById('report-grid-container');
        
        // Generate HTML for all languages
        grid.innerHTML = languages.map(lang =>
            generateReportHTML(assessment, lang)
        ).join("");

        reportSection.classList.remove('hidden');
        reportSection.scrollIntoView({ behavior: 'smooth' });
    }

    function generateReportHTML(assessment, lang) {
        const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : TRANSLATIONS['English'];
        
        // Translate Urgency and Specialist
        const localUrgency = (t.levels && t.levels[assessment.urgency]) ? t.levels[assessment.urgency] : assessment.urgency;
        const localSpecialist = (t.specialists && t.specialists[assessment.specialist]) ? t.specialists[assessment.specialist] : assessment.specialist;

        // Process Reasoning
        // assessment.reasoning is array of objects {text} or {key, values}
        let reasoningHTML = assessment.reasoning.map(item => {
            if (item.text) {
                return `<div class="mb-xs">${item.text}</div>`;
            }
            if (item.key && item.values) {
                const label = t[item.key] || item.key.replace(/_/g, ' ');
                const valStr = item.values.join(', ');
                return `<div class="mb-xs"><span class="font-bold">${label}:</span> ${valStr}</div>`;
            }
            return '';
        }).join('');

        return `
            <div class="lang-card" style="border-top: 4px solid ${assessment.color}">
                <div class="lang-title">${lang.toUpperCase()}</div>
                
                <div class="mb-sm">
                    <label class="text-xs text-muted font-bold uppercase" style="font-size: 0.75rem;">${t.urgency_label || 'Urgency'}</label>
                    <div class="font-bold" style="color: ${assessment.color}; font-size: 1.1rem;">${localUrgency}</div>
                </div>

                <div class="mb-sm">
                    <label class="text-xs text-muted font-bold uppercase" style="font-size: 0.75rem;">${t.specialist_label || 'Specialist'}</label>
                    <div>${localSpecialist}</div>
                </div>

                <div class="mb-sm">
                    <label class="text-xs text-muted font-bold uppercase" style="font-size: 0.75rem;">${t.reasoning_label || 'Reasoning'}</label>
                    <div class="text-sm">${reasoningHTML}</div> 
                </div>
            </div>
        `;
    }

});
