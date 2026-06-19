// Comprehensive Conversion Datastores
const CONVERSION_DATA = {
    length: {
        title: "Length",
        icon: "fa-ruler-combined",
        baseUnit: "m",
        units: {
            m: { name: "Meter (m)", factor: 1 },
            km: { name: "Kilometer (km)", factor: 1000 },
            cm: { name: "Centimeter (cm)", factor: 0.01 },
            mm: { name: "Millimeter (mm)", factor: 0.001 },
            mi: { name: "Mile (mi)", factor: 1609.344 },
            yd: { name: "Yard (yd)", factor: 0.9144 },
            ft: { name: "Foot (ft)", factor: 0.3048 },
            in: { name: "Inch (in)", factor: 0.0254 }
        }
    },
    mass: {
        title: "Mass",
        icon: "fa-weight-hanging",
        baseUnit: "g",
        units: {
            g: { name: "Gram (g)", factor: 1 },
            kg: { name: "Kilogram (kg)", factor: 1000 },
            mg: { name: "Milligram (mg)", factor: 0.001 },
            lb: { name: "Pound (lb)", factor: 453.59237 },
            oz: { name: "Ounce (oz)", factor: 28.349523125 },
            st: { name: "Stone (st)", factor: 6350.29318 }
        }
    },
    temperature: {
        title: "Temperature",
        icon: "fa-temperature-high",
        baseUnit: "C",
        units: {
            C: { name: "Celsius (°C)", isSpecial: true },
            F: { name: "Fahrenheit (°F)", isSpecial: true },
            K: { name: "Kelvin (K)", isSpecial: true }
        },
        conversions: {
            C_to_F: (v) => (v * 9/5) + 32,
            F_to_C: (v) => (v - 32) * 5/9,
            C_to_K: (v) => v + 273.15,
            K_to_C: (v) => v - 273.15,
            F_to_K: (v) => (v - 32) * 5/9 + 273.15,
            K_to_F: (v) => (v - 273.15) * 9/5 + 32
        },
        proofs: {
            C_to_F: (v) => `F = (${v} · 9/5) + 32`,
            F_to_C: (v) => `C = (${v} - 32) · 5/9`,
            C_to_K: (v) => `K = ${v} + 273.15`,
            K_to_C: (v) => `C = ${v} - 273.15`,
            F_to_K: (v) => `K = (${v} - 32) · 5/9 + 273.15`,
            K_to_F: (v) => `F = (${v} - 273.15) · 9/5 + 32`
        }
    },
    area: {
        title: "Area",
        icon: "fa-chart-area",
        baseUnit: "sq_m",
        units: {
            sq_m: { name: "Square Meter (m²)", factor: 1 },
            sq_km: { name: "Square Kilometer (km²)", factor: 1e6 },
            sq_mi: { name: "Square Mile (mi²)", factor: 2.58998811e6 },
            acre: { name: "Acre (ac)", factor: 4046.8564224 },
            hectare: { name: "Hectare (ha)", factor: 10000 },
            sq_ft: { name: "Square Foot (ft²)", factor: 0.09290304 }
        }
    },
    volume: {
        title: "Volume",
        icon: "fa-glass-water",
        baseUnit: "L",
        units: {
            L: { name: "Liter (L)", factor: 1 },
            mL: { name: "Milliliter (mL)", factor: 0.001 },
            gal: { name: "US Gallon (gal)", factor: 3.78541178 },
            qt: { name: "US Quart (qt)", factor: 0.946352946 },
            cup: { name: "US Cup", factor: 0.236588236 },
            cubic_m: { name: "Cubic Meter (m³)", factor: 1000 }
        }
    },
    speed: {
        title: "Speed",
        icon: "fa-gauge-high",
        baseUnit: "m_s",
        units: {
            m_s: { name: "Meter/Second (m/s)", factor: 1 },
            km_h: { name: "Kilometer/Hour (km/h)", factor: 0.277777778 },
            mph: { name: "Miles/Hour (mph)", factor: 0.44704 },
            knot: { name: "Knots (kn)", factor: 0.514444444 }
        }
    },
    time: {
        title: "Time",
        icon: "fa-hourglass-half",
        baseUnit: "s",
        units: {
            s: { name: "Second (s)", factor: 1 },
            m: { name: "Minute (min)", factor: 60 },
            h: { name: "Hour (hr)", factor: 3600 },
            d: { name: "Day (d)", factor: 86400 },
            w: { name: "Week (wk)", factor: 604800 },
            y: { name: "Year (yr)", factor: 3.1536e7 }
        }
    },
    digital: {
        title: "Digital Space",
        icon: "fa-database",
        baseUnit: "B",
        units: {
            B: { name: "Byte (B)", factor: 1 },
            KB: { name: "Kilobyte (KB)", factor: 1024 },
            MB: { name: "Megabyte (MB)", factor: 1048576 },
            GB: { name: "Gigabyte (GB)", factor: 1.073741824e9 },
            TB: { name: "Terabyte (TB)", factor: 1.099511627776e12 }
        }
    },
    energy: {
        title: "Energy",
        icon: "fa-bolt",
        baseUnit: "J",
        units: {
            J: { name: "Joule (J)", factor: 1 },
            kJ: { name: "Kilojoule (kJ)", factor: 1000 },
            cal: { name: "Calorie (cal)", factor: 4.184 },
            kcal: { name: "Kilocalorie (kcal)", factor: 4184 },
            Wh: { name: "Watt-hour (Wh)", factor: 3600 },
            kWh: { name: "Kilowatt-hour (kWh)", factor: 3.6e6 },
            BTU: { name: "BTU", factor: 1055.05585 }
        }
    },
    pressure: {
        title: "Pressure",
        icon: "fa-compress",
        baseUnit: "Pa",
        units: {
            Pa: { name: "Pascal (Pa)", factor: 1 },
            kPa: { name: "Kilopascal (kPa)", factor: 1000 },
            bar: { name: "Bar", factor: 100000 },
            atm: { name: "Atmosphere (atm)", factor: 101325 },
            psi: { name: "PSI (lbf/in²)", factor: 6894.757293 },
            mmHg: { name: "mmHg (Torr)", factor: 133.322368 }
        }
    }
};

// Application State
let currentCategory = 'length';
let precision = 6;
let isDarkMode = true;
let history = JSON.parse(localStorage.getItem('math_converter_history')) || [];

// UI Selections
const categoriesBar = document.getElementById('categoriesBar');
const fromUnitSelect = document.getElementById('fromUnitSelect');
const toUnitSelect = document.getElementById('toUnitSelect');
const fromInput = document.getElementById('fromInput');
const toOutput = document.getElementById('toOutput');
const precisionRange = document.getElementById('precisionRange');
const decimalPrecisionText = document.getElementById('decimalPrecisionText');
const activeCategoryName = document.getElementById('activeCategoryName');

// Visual comparison elements
const scaleLabelFrom = document.getElementById('scaleLabelFrom');
const scalePercentageFrom = document.getElementById('scalePercentageFrom');
const scaleBarFrom = document.getElementById('scaleBarFrom');
const scaleLabelTo = document.getElementById('scaleLabelTo');
const scalePercentageTo = document.getElementById('scalePercentageTo');
const scaleBarTo = document.getElementById('scaleBarTo');

// Algebraic proofs elements
const formulaGeneral = document.getElementById('formulaGeneral');
const proofBaseConst = document.getElementById('proofBaseConst');
const proofOperation = document.getElementById('proofOperation');
const proofCalculated = document.getElementById('proofCalculated');

// History Log element
const historyLogList = document.getElementById('historyLogList');
const historyEmptyState = document.getElementById('historyEmptyState');

// Interactive Pointer Coords Elements
const coordsDisplay = document.getElementById('coordsDisplay');
const nodesCounter = document.getElementById('nodesCounter');

// Canvas Setup
const canvas = document.getElementById('mathCanvas');
const ctx = canvas.getContext('2d');
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
const numNodes = 36;
const nodes = [];

// Track Pointer movement with ease-filter
window.addEventListener('pointermove', (e) => {
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
    
    const padX = String(Math.floor(e.clientX)).padStart(3, '0');
    const padY = String(Math.floor(e.clientY)).padStart(3, '0');
    coordsDisplay.textContent = `X:${padX}, Y:${padY}`;
});

// Window Resize Observer
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
});

// Initialize Nodes for 3D Rotating Constellation
for (let i = 0; i < numNodes; i++) {
    nodes.push({
        x: (Math.random() - 0.5) * 450,
        y: (Math.random() - 0.5) * 450,
        z: (Math.random() - 0.5) * 450,
        projX: 0,
        projY: 0
    });
}

// 3D Matrix Rotation variables
let angleX = 0.001;
let angleY = 0.0015;

function animateMathCanvas() {
    ctx.clearRect(0, 0, width, height);
    
    // Ease mouse coordinate transitions
    mouse.x += (mouse.targetX - mouse.x) * 0.08;
    mouse.y += (mouse.targetY - mouse.y) * 0.08;

    const radSec = (Date.now() / 1000) % (Math.PI * 2);
    nodesCounter.textContent = `${(radSec).toFixed(2)} RAD // OSD`;

    // Rotation configurations
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);

    // Transform, Project, and Render Nodes
    nodes.forEach(node => {
        // Rotate X
        let y1 = node.y * cosX - node.z * sinX;
        let z1 = node.z * cosX + node.y * sinX;
        
        // Rotate Y
        let x2 = node.x * cosY - z1 * sinY;
        let z2 = z1 * cosY + node.x * sinY;

        node.x = x2;
        node.y = y1;
        node.z = z2;

        // Perspective Projection
        const fov = 350;
        const perspectiveScale = fov / (fov + z2);
        
        // Center projection near relative interactive workspace
        node.projX = (x2 * perspectiveScale) + mouse.x;
        node.projY = (y1 * perspectiveScale) + mouse.y;

        // Draw individual nodes
        ctx.beginPath();
        ctx.arc(node.projX, node.projY, 1.5 * perspectiveScale, 0, Math.PI * 2);
        ctx.fillStyle = isDarkMode ? `rgba(99, 102, 241, ${0.15 + (perspectiveScale * 0.25)})` : `rgba(43, 92, 143, ${0.1 + (perspectiveScale * 0.15)})`;
        ctx.fill();
    });

    // Draw Vector Connections
    ctx.lineWidth = 0.5;
    for (let i = 0; i < numNodes; i++) {
        for (let j = i + 1; j < numNodes; j++) {
            const dx = nodes[i].projX - nodes[j].projX;
            const dy = nodes[i].projY - nodes[j].projY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            // Connect lines if node distance is minimal
            if (dist < 130) {
                ctx.beginPath();
                ctx.moveTo(nodes[i].projX, nodes[i].projY);
                ctx.lineTo(nodes[j].projX, nodes[j].projY);
                const alpha = (1 - (dist / 130)) * 0.12;
                ctx.strokeStyle = isDarkMode ? `rgba(99, 102, 241, ${alpha})` : `rgba(43, 92, 143, ${alpha})`;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animateMathCanvas);
}

// Populate Categories Navigation Bar
function initCategories() {
    categoriesBar.innerHTML = '';
    Object.keys(CONVERSION_DATA).forEach(key => {
        const cat = CONVERSION_DATA[key];
        const btn = document.createElement('button');
        btn.className = `category-pill flex items-center gap-2 px-4 py-2.5 rounded-xl border font-mono text-xs font-semibold whitespace-nowrap shadow-sm cursor-pointer transition-all ${
            key === currentCategory 
                ? 'bg-math-lightAccent text-white border-math-lightAccent dark:bg-math-darkAccent dark:border-math-darkAccent' 
                : 'bg-math-lightCard hover:bg-gray-50 border-math-lightBorder dark:bg-math-darkCard dark:hover:bg-gray-800/40 dark:border-math-darkBorder text-math-lightMuted dark:text-math-darkMuted'
        }`;
        
        btn.innerHTML = `<i class="fa-solid ${cat.icon}"></i> <span>${cat.title.toUpperCase()}</span>`;
        btn.addEventListener('click', () => {
            currentCategory = key;
            activeCategoryName.textContent = cat.title.toUpperCase();
            initCategories();
            populateUnits();
            calculate();
        });
        categoriesBar.appendChild(btn);
    });
}

// Populate Unit Options Dropdowns
function populateUnits() {
    const data = CONVERSION_DATA[currentCategory];
    fromUnitSelect.innerHTML = '';
    toUnitSelect.innerHTML = '';

    Object.keys(data.units).forEach(unitKey => {
        const unit = data.units[unitKey];
        const optFrom = new Option(unit.name, unitKey);
        const optTo = new Option(unit.name, unitKey);
        fromUnitSelect.add(optFrom);
        toUnitSelect.add(optTo);
    });

    // Pick second option as default destination to prevent identical conversion setup on init
    if (toUnitSelect.options.length > 1) {
        toUnitSelect.selectedIndex = 1;
    }
}

// Compute Algebraic Output Value
function calculate() {
    const val = parseFloat(fromInput.value);
    if (isNaN(val)) {
        toOutput.value = "---";
        return;
    }

    const catData = CONVERSION_DATA[currentCategory];
    const fromUnitKey = fromUnitSelect.value;
    const toUnitKey = toUnitSelect.value;
    
    if (!fromUnitKey || !toUnitKey) return;

    let result = 0;
    
    // Check Temperature conversions which are non-linear (offset algebraic shifts)
    if (currentCategory === 'temperature') {
        if (fromUnitKey === toUnitKey) {
            result = val;
        } else {
            const conversionKey = `${fromUnitKey}_to_${toUnitKey}`;
            result = catData.conversions[conversionKey](val);
        }
    } else {
        // Standard Metric system constant ratio scaling
        const fromFactor = catData.units[fromUnitKey].factor;
        const toFactor = catData.units[toUnitKey].factor;
        result = val * (fromFactor / toFactor);
    }

    // Display formatted outputs
    toOutput.value = result.toFixed(precision);

    // Update Interactive Mathematical Proof Panels
    updateMathProofs(val, result, fromUnitKey, toUnitKey);
    
    // Update Comparison Amplitudes
    updateComparisonVisuals(val, result, fromUnitKey, toUnitKey);
}

// Compile Proof Details
function updateMathProofs(val, result, fromKey, toKey) {
    const catData = CONVERSION_DATA[currentCategory];

    if (currentCategory === 'temperature') {
        const convKey = `${fromKey}_to_${toKey}`;
        if (fromKey === toKey) {
            formulaGeneral.textContent = `f(x) = x`;
            proofBaseConst.textContent = `Linear`;
            proofOperation.textContent = `Identity transform`;
            proofCalculated.textContent = `${val}°${fromKey} = ${result.toFixed(precision)}°${toKey}`;
        } else {
            const formulaString = catData.proofs[convKey]('x');
            formulaGeneral.textContent = `f(x) = ${formulaString}`;
            proofBaseConst.textContent = `Scale offsets`;
            proofOperation.textContent = `Apply function f(${val})`;
            proofCalculated.textContent = `${val}°${fromKey} = ${result.toFixed(precision)}°${toKey}`;
        }
    } else {
        const fromUnit = catData.units[fromKey];
        const toUnit = catData.units[toKey];
        const ratio = fromUnit.factor / toUnit.factor;

        formulaGeneral.textContent = `f(x) = x · [K_from / K_to]`;
        proofBaseConst.textContent = `Ratio K = ${(ratio).toFixed(8).replace(/\.?0+$/, '')}`;
        proofOperation.textContent = `Multiply x by calculated factor`;
        proofCalculated.textContent = `${val} [${fromKey}] = ${result.toFixed(precision)} [${toKey}]`;
    }
}

// Draw Comparative Scale Visualizations
function updateComparisonVisuals(val, result, fromKey, toKey) {
    const catData = CONVERSION_DATA[currentCategory];
    
    scaleLabelFrom.textContent = `${val} [${fromKey}]`;
    scaleLabelTo.textContent = `${result.toFixed(Math.min(precision, 4))} [${toKey}]`;

    if (currentCategory === 'temperature') {
        // Standardize temperatures normalized relative ranges to display relative bar widths (Celsius base reference)
        let normalizedFrom = val;
        if (fromKey === 'F') normalizedFrom = (val - 32) * 5/9;
        if (fromKey === 'K') normalizedFrom = val - 273.15;

        let normalizedTo = result;
        if (toKey === 'F') normalizedTo = (result - 32) * 5/9;
        if (toKey === 'K') normalizedTo = result - 273.15;

        // Arbitrary scale mapping for temperature preview bounds [-50C to 200C]
        const fromPct = Math.max(0, Math.min(100, ((normalizedFrom + 50) / 250) * 100));
        const toPct = Math.max(0, Math.min(100, ((normalizedTo + 50) / 250) * 100));

        scalePercentageFrom.textContent = `${Math.round(fromPct)}% Scale`;
        scalePercentageTo.textContent = `${Math.round(toPct)}% Scale`;
        scaleBarFrom.style.width = `${fromPct}%`;
        scaleBarTo.style.width = `${toPct}%`;
    } else {
        const fromFactor = catData.units[fromKey].factor;
        const toFactor = catData.units[toKey].factor;
        const inputMagnitude = val * fromFactor;
        const outputMagnitude = result * toFactor;

        // Compare log ranges to avoid extreme visual discrepancy differences
        if (inputMagnitude >= outputMagnitude) {
            scalePercentageFrom.textContent = "100%";
            scaleBarFrom.style.width = "100%";
            
            const ratioPct = Math.max(1, (outputMagnitude / inputMagnitude) * 100);
            scalePercentageTo.textContent = `${ratioPct < 0.1 ? '< 0.1' : ratioPct.toFixed(1)}%`;
            scaleBarTo.style.width = `${ratioPct}%`;
        } else {
            const ratioPct = Math.max(1, (inputMagnitude / outputMagnitude) * 100);
            scalePercentageFrom.textContent = `${ratioPct < 0.1 ? '< 0.1' : ratioPct.toFixed(1)}%`;
            scaleBarFrom.style.width = `${ratioPct}%`;

            scalePercentageTo.textContent = "100%";
            scaleBarTo.style.width = "100%";
        }
    }
}

// Log Completed Conversions to local/state lists
function pushToChronology() {
    const fromVal = parseFloat(fromInput.value);
    if (isNaN(fromVal)) return;

    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const toVal = parseFloat(toOutput.value);

    const logEntry = {
        id: Date.now(),
        category: currentCategory,
        fromText: `${fromVal} ${fromUnit}`,
        toText: `${toVal.toFixed(Math.min(precision, 6))} ${toUnit}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    };

    history.unshift(logEntry);
    if (history.length > 25) history.pop(); // Caps queue list size limit

    localStorage.setItem('math_converter_history', JSON.stringify(history));
    renderHistoryLog();
}

// Display Saved Logs UI List
function renderHistoryLog() {
    if (history.length === 0) {
        historyEmptyState.style.display = 'block';
        // Select old entries to wipe container clean
        const elements = historyLogList.querySelectorAll('.log-item');
        elements.forEach(el => el.remove());
        return;
    }

    historyEmptyState.style.display = 'none';
    const oldItems = historyLogList.querySelectorAll('.log-item');
    oldItems.forEach(el => el.remove());

    history.forEach(item => {
        const logRow = document.createElement('div');
        logRow.className = "log-item flex justify-between items-center bg-gray-50/50 dark:bg-gray-900/30 border border-math-lightBorder/50 dark:border-math-darkBorder/40 p-2.5 rounded-lg text-xs font-mono transition-all hover:border-math-lightAccent hover:dark:border-math-darkAccent";
        logRow.innerHTML = `
            <div class="flex flex-col gap-0.5">
                <div class="flex items-center gap-1.5 font-bold text-math-lightText dark:text-math-darkText">
                    <span>${item.fromText}</span>
                    <i class="fa-solid fa-arrow-right text-[10px] text-math-lightMuted dark:text-math-darkMuted"></i>
                    <span class="text-math-lightAccent dark:text-indigo-400">${item.toText}</span>
                </div>
                <span class="text-[9px] text-math-lightMuted dark:text-math-darkMuted uppercase tracking-wider">${item.category} // TIME: ${item.timestamp}</span>
            </div>
            <button class="text-math-lightMuted dark:text-math-darkMuted hover:text-red-500 p-1 delete-log-btn" data-id="${item.id}" title="Remove entry">
                <i class="fa-solid fa-trash-can text-[10px]"></i>
            </button>
        `;
        historyLogList.appendChild(logRow);
    });

    // Hook delete item buttons
    document.querySelectorAll('.delete-log-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const logId = parseInt(btn.getAttribute('data-id'));
            history = history.filter(h => h.id !== logId);
            localStorage.setItem('math_converter_history', JSON.stringify(history));
            renderHistoryLog();
        });
    });
}

// Swap inputs callback
document.getElementById('swapUnitsBtn').addEventListener('click', () => {
    const swapIcon = document.getElementById('swapIcon');
    swapIcon.classList.toggle('rotate-180');

    const fromVal = fromUnitSelect.value;
    const toVal = toUnitSelect.value;

    fromUnitSelect.value = toVal;
    toUnitSelect.value = fromVal;

    calculate();
});

// Event Listeners for Dynamic Conversions
fromInput.addEventListener('input', calculate);
fromInput.addEventListener('blur', pushToChronology); // Auto commits log when focus is released
fromUnitSelect.addEventListener('change', calculate);
toUnitSelect.addEventListener('change', calculate);

// Precision Slider Action
precisionRange.addEventListener('input', (e) => {
    precision = parseInt(e.target.value);
    decimalPrecisionText.textContent = `${precision} Decimals`;
    calculate();
});

// Clipboard Utility function
function copyToClipboard(textToCopy) {
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = textToCopy;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    try {
        document.execCommand('copy');
    } catch (err) {
        console.warn('Fallback clipboard copy failed', err);
    }
    document.body.removeChild(tempTextArea);
}

// Copy calculated outputs
document.getElementById('copyResultBtn').addEventListener('click', () => {
    copyToClipboard(toOutput.value);
    const icon = document.querySelector('#copyResultBtn i');
    icon.className = "fa-solid fa-check text-emerald-500";
    setTimeout(() => { icon.className = "fa-regular fa-copy"; }, 1500);
});

// Copy equation proofs
document.getElementById('copyProofBtn').addEventListener('click', () => {
    const textFormula = `${formulaGeneral.textContent} // Proof: ${proofCalculated.textContent}`;
    copyToClipboard(textFormula);
    const copyLabel = document.getElementById('copyProofBtn');
    copyLabel.textContent = "COPIED!";
    setTimeout(() => { copyLabel.textContent = "COPY FORMULA"; }, 1500);
});

// Clear Entire Chronology Log
document.getElementById('clearHistoryBtn').addEventListener('click', () => {
    history = [];
    localStorage.removeItem('math_converter_history');
    renderHistoryLog();
});

// Theme Selector Actions
const themeToggleBtn = document.getElementById('themeToggleBtn');
themeToggleBtn.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Interactive Card 3D Tilt Hover Effects
const converterCard = document.getElementById('converterCard');
converterCard.addEventListener('mousemove', (e) => {
    const rect = converterCard.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Convert offsets into rotation bounds [-7.5deg to 7.5deg]
    const rX = -((y - rect.height / 2) / rect.height) * 15;
    const rY = ((x - rect.width / 2) / rect.width) * 15;
    
    converterCard.style.transform = `rotateX(${rX}deg) rotateY(${rY}deg) translateZ(10px)`;
});

converterCard.addEventListener('mouseleave', () => {
    converterCard.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
});

// App Bootstrap Process
window.onload = function() {
    initCategories();
    populateUnits();
    calculate();
    renderHistoryLog();
    animateMathCanvas();
};