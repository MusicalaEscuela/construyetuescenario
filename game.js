/* =========================================================
   MUSI · CONSTRUYE TU ESCENARIO
   game.js
   Lógica principal del minijuego
========================================================= */

/* =========================================================
   1. DATA
========================================================= */

const ASSET_LIBRARY = {
  fondos: [
    {
      id: "bg-sky",
      name: "Cielo brillante",
      description: "Un fondo alegre y luminoso.",
      emoji: "☁️",
      type: "background",
      background:
        "radial-gradient(circle at 20% 25%, rgba(255,255,255,0.85) 0 7%, transparent 8%), radial-gradient(circle at 75% 18%, rgba(255,255,255,0.8) 0 6%, transparent 7%), linear-gradient(180deg, #bce7ff 0%, #d7f0ff 48%, #ffe9b8 100%)"
    },
    {
      id: "bg-sunset",
      name: "Atardecer mágico",
      description: "Colores cálidos para una gran función.",
      emoji: "🌇",
      type: "background",
      background:
        "radial-gradient(circle at 50% 30%, rgba(255,244,189,0.95) 0%, rgba(255,244,189,0.2) 20%, transparent 28%), linear-gradient(180deg, #ffc1a8 0%, #ffdbb3 34%, #ffe7c7 64%, #ffd16f 100%)"
    },
    {
      id: "bg-night",
      name: "Noche estrellada",
      description: "Ideal para un show especial.",
      emoji: "🌙",
      type: "background",
      background:
        "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.9) 0 1.8%, transparent 2.2%), radial-gradient(circle at 74% 18%, rgba(255,255,255,0.85) 0 1.4%, transparent 2%), radial-gradient(circle at 60% 44%, rgba(255,255,255,0.75) 0 1.2%, transparent 1.8%), linear-gradient(180deg, #2f3a8c 0%, #4d58c9 46%, #7a75e7 100%)"
    },
    {
      id: "bg-forest",
      name: "Bosque creativo",
      description: "Naturaleza para una escena viva.",
      emoji: "🌳",
      type: "background",
      background:
        "radial-gradient(circle at 50% 24%, rgba(255,255,255,0.38) 0%, transparent 18%), linear-gradient(180deg, #a8f0d1 0%, #bfeeb0 45%, #ffe39f 100%)"
    },
    {
      id: "bg-theater",
      name: "Teatro clásico",
      description: "Un ambiente elegante y artístico.",
      emoji: "🎟️",
      type: "background",
      background:
        "linear-gradient(180deg, #f9d1d8 0%, #f4a8b8 36%, #9a2746 100%)"
    },
    {
      id: "bg-festival",
      name: "Festival de colores",
      description: "Una fiesta llena de energía.",
      emoji: "🎉",
      type: "background",
      background:
        "linear-gradient(135deg, #7ad8ff 0%, #a898ff 30%, #ff9ccc 62%, #ffd86b 100%)"
    }
  ],

  personajes: [
    {
      id: "char-singer",
      name: "Cantante",
      description: "Lista para abrir el show.",
      emoji: "🎤",
      type: "character"
    },
    {
      id: "char-dancer",
      name: "Bailarín",
      description: "Movimiento y ritmo en escena.",
      emoji: "🕺",
      type: "character"
    },
    {
      id: "char-ballerina",
      name: "Bailarina",
      description: "Elegancia y expresión.",
      emoji: "💃",
      type: "character"
    },
    {
      id: "char-actor",
      name: "Actor",
      description: "Perfecto para una obra teatral.",
      emoji: "🎭",
      type: "character"
    },
    {
      id: "char-drummer",
      name: "Baterista",
      description: "Marca el pulso del escenario.",
      emoji: "🥁",
      type: "character"
    },
    {
      id: "char-musician",
      name: "Músico",
      description: "Siempre listo para tocar.",
      emoji: "🎸",
      type: "character"
    }
  ],

  objetos: [
    {
      id: "obj-piano",
      name: "Piano",
      description: "Gran protagonista musical.",
      emoji: "🎹",
      type: "object"
    },
    {
      id: "obj-speaker",
      name: "Parlante",
      description: "Para llenar el lugar de sonido.",
      emoji: "🔊",
      type: "object"
    },
    {
      id: "obj-mic",
      name: "Micrófono",
      description: "La voz al frente.",
      emoji: "🎙️",
      type: "object"
    },
    {
      id: "obj-easel",
      name: "Caballete",
      description: "Arte visual en escena.",
      emoji: "🖼️",
      type: "object"
    },
    {
      id: "obj-stool",
      name: "Banquito",
      description: "Útil para músicos o actores.",
      emoji: "🪑",
      type: "object"
    },
    {
      id: "obj-drum",
      name: "Tambor",
      description: "Ritmo y fuerza.",
      emoji: "🪘",
      type: "object"
    }
  ],

  luces: [
    {
      id: "light-star",
      name: "Luz estrella",
      description: "Brillo en el punto central.",
      emoji: "✨",
      type: "light"
    },
    {
      id: "light-rainbow",
      name: "Luz arcoíris",
      description: "Un toque festivo.",
      emoji: "🌈",
      type: "light"
    },
    {
      id: "light-spark",
      name: "Destello",
      description: "Pequeño acento luminoso.",
      emoji: "💫",
      type: "light"
    },
    {
      id: "light-bulb",
      name: "Foco",
      description: "Ilumina el centro del show.",
      emoji: "💡",
      type: "light"
    },
    {
      id: "light-fire",
      name: "Luz cálida",
      description: "Color y emoción en escena.",
      emoji: "🔥",
      type: "light"
    }
  ],

  decoracion: [
    {
      id: "decor-flower",
      name: "Flores",
      description: "Un detalle alegre y natural.",
      emoji: "🌸",
      type: "decor"
    },
    {
      id: "decor-balloon",
      name: "Globos",
      description: "Ambiente de celebración.",
      emoji: "🎈",
      type: "decor"
    },
    {
      id: "decor-confetti",
      name: "Confeti",
      description: "Para una escena más festiva.",
      emoji: "🎊",
      type: "decor"
    },
    {
      id: "decor-star",
      name: "Estrella",
      description: "Toque mágico y brillante.",
      emoji: "⭐",
      type: "decor"
    },
    {
      id: "decor-heart",
      name: "Corazón",
      description: "Escena con emoción y cariño.",
      emoji: "💖",
      type: "decor"
    },
    {
      id: "decor-ribbon",
      name: "Cinta",
      description: "Un adorno elegante.",
      emoji: "🎀",
      type: "decor"
    }
  ]
};

const MISSIONS = [
  "Diseña un escenario para una presentación musical con mínimo un personaje y dos objetos.",
  "Crea una escena de teatro con luces y un personaje principal.",
  "Haz un escenario festivo con decoración colorida y fondo alegre.",
  "Construye una presentación artística que combine música, actuación y brillo.",
  "Diseña una escena tranquila inspirada en la naturaleza y el arte.",
  "Arma un show especial que parezca el cierre de un gran festival."
];

const CATEGORY_LABELS = {
  fondos: "fondos",
  personajes: "personajes",
  objetos: "objetos",
  luces: "luces",
  decoracion: "decoración"
};

const LAYER_BY_TYPE = {
  character: "stageCharactersLayer",
  object: "stageObjectsLayer",
  decor: "stageDecorLayer",
  light: "stageLightsLayer"
};

/* =========================================================
   2. DOM
========================================================= */

const assetGrid = document.getElementById("assetGrid");
const categoryTabs = [...document.querySelectorAll(".category-tab")];

const stageCanvas = document.getElementById("stageCanvas");
const stageBackground = document.getElementById("stageBackground");
const stageLightsLayer = document.getElementById("stageLightsLayer");
const stageObjectsLayer = document.getElementById("stageObjectsLayer");
const stageCharactersLayer = document.getElementById("stageCharactersLayer");
const stageDecorLayer = document.getElementById("stageDecorLayer");
const emptyStageMessage = document.getElementById("emptyStageMessage");

const stageHint = document.getElementById("stageHint");
const elementsCount = document.getElementById("elementsCount");
const currentBackgroundName = document.getElementById("currentBackgroundName");
const creativeGoal = document.getElementById("creativeGoal");
const missionText = document.getElementById("missionText");

const selectedCard = document.getElementById("selectedCard");
const scaleRange = document.getElementById("scaleRange");
const rotateRange = document.getElementById("rotateRange");
const opacityRange = document.getElementById("opacityRange");

const btnBringFront = document.getElementById("btnBringFront");
const btnSendBack = document.getElementById("btnSendBack");
const btnDuplicate = document.getElementById("btnDuplicate");
const btnDelete = document.getElementById("btnDelete");

const btnUndo = document.getElementById("btnUndo");
const btnClearStage = document.getElementById("btnClearStage");
const btnReset = document.getElementById("btnReset");
const btnSaveScene = document.getElementById("btnSaveScene");
const btnRandomScene = document.getElementById("btnRandomScene");

const btnHowToPlay = document.getElementById("btnHowToPlay");
const btnCloseModal = document.getElementById("btnCloseModal");
const howToPlayModal = document.getElementById("howToPlayModal");
const modalBackdrop = howToPlayModal?.querySelector("[data-close-modal]");

const toast = document.getElementById("toast");

/* =========================================================
   3. STATE
========================================================= */

const state = {
  currentCategory: "fondos",
  selectedId: null,
  backgroundId: null,
  items: [],
  undoStack: [],
  zCounter: 1,
  drag: {
    active: false,
    itemId: null,
    offsetX: 0,
    offsetY: 0
  }
};

const STORAGE_KEY = "musi_stage_builder_save_v1";

/* =========================================================
   4. HELPERS
========================================================= */

function uid(prefix = "item") {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function deepClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function getAssetById(assetId) {
  const all = Object.values(ASSET_LIBRARY).flat();
  return all.find((asset) => asset.id === assetId) || null;
}

function getItemById(itemId) {
  return state.items.find((item) => item.id === itemId) || null;
}

function getSelectedItem() {
  return state.selectedId ? getItemById(state.selectedId) : null;
}

function getLayerElementByItemType(type) {
  const layerId = LAYER_BY_TYPE[type];
  if (!layerId) return null;
  return document.getElementById(layerId);
}

function getCanvasRect() {
  return stageCanvas.getBoundingClientRect();
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFrom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

/* =========================================================
   5. TOAST
========================================================= */

let toastTimeout = null;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

/* =========================================================
   6. HISTORY / UNDO
========================================================= */

function saveUndoState() {
  state.undoStack.push({
    items: deepClone(state.items),
    backgroundId: state.backgroundId,
    selectedId: state.selectedId,
    zCounter: state.zCounter
  });

  if (state.undoStack.length > 50) {
    state.undoStack.shift();
  }
}

function undoLastAction() {
  const previous = state.undoStack.pop();
  if (!previous) {
    showToast("No hay más acciones para deshacer.");
    return;
  }

  state.items = deepClone(previous.items);
  state.backgroundId = previous.backgroundId;
  state.selectedId = previous.selectedId;
  state.zCounter = previous.zCounter;

  renderBackground();
  renderStageItems();
  syncSelectedControls();
  updateStageInfo();
  showToast("Se deshizo la última acción.");
}

/* =========================================================
   7. UI RENDER · LIBRARY
========================================================= */

function renderCategoryTabs() {
  categoryTabs.forEach((tab) => {
    const active = tab.dataset.category === state.currentCategory;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-selected", active ? "true" : "false");
  });
}

function renderAssetLibrary() {
  const assets = ASSET_LIBRARY[state.currentCategory] || [];

  assetGrid.innerHTML = assets
    .map(
      (asset) => `
        <button
          class="asset-card"
          type="button"
          data-asset-id="${asset.id}"
          title="${asset.name}"
        >
          <div class="asset-emoji">${asset.emoji}</div>
          <h4>${asset.name}</h4>
          <p>${asset.description}</p>
        </button>
      `
    )
    .join("");
}

/* =========================================================
   8. UI RENDER · BACKGROUND
========================================================= */

function renderBackground() {
  const bgAsset = state.backgroundId ? getAssetById(state.backgroundId) : null;

  if (!bgAsset) {
    stageBackground.className = "stage-background default-bg";
    stageBackground.style.background = "";
    currentBackgroundName.textContent = "Ninguno";
    return;
  }

  stageBackground.className = "stage-background";
  stageBackground.style.background = bgAsset.background;
  currentBackgroundName.textContent = bgAsset.name;
}

/* =========================================================
   9. UI RENDER · STAGE ITEMS
========================================================= */

function renderStageItems() {
  stageLightsLayer.innerHTML = "";
  stageObjectsLayer.innerHTML = "";
  stageCharactersLayer.innerHTML = "";
  stageDecorLayer.innerHTML = "";

  state.items.forEach((item) => {
    const asset = getAssetById(item.assetId);
    if (!asset) return;

    const layer = getLayerElementByItemType(item.type);
    if (!layer) return;

    const el = document.createElement("button");
    el.type = "button";
    el.className = `stage-item ${item.type}${item.id === state.selectedId ? " is-selected" : ""}`;
    el.dataset.itemId = item.id;
    el.style.left = `${item.x}px`;
    el.style.top = `${item.y}px`;
    el.style.zIndex = String(item.zIndex);
    el.style.opacity = String(item.opacity);

    const baseScale = item.scale / 100;
    el.style.transform = `translate(-50%, -50%) rotate(${item.rotation}deg) scale(${baseScale})`;

    el.innerHTML = `
      <span class="item-visual" aria-hidden="true">${asset.emoji}</span>
    `;

    layer.appendChild(el);
  });

  emptyStageMessage.classList.toggle("is-hidden", state.items.length > 0);
}

/* =========================================================
   10. UI RENDER · SELECTED PANEL
========================================================= */

function renderSelectedCard() {
  const item = getSelectedItem();

  if (!item) {
    selectedCard.className = "selected-card is-empty";
    selectedCard.innerHTML = `
      <div class="selected-preview">🎨</div>
      <div class="selected-copy">
        <h4>Nada seleccionado</h4>
        <p>Haz clic sobre un elemento del escenario para moverlo o editarlo.</p>
      </div>
    `;
    setControlsDisabled(true);
    return;
  }

  const asset = getAssetById(item.assetId);

  selectedCard.className = "selected-card";
  selectedCard.innerHTML = `
    <div class="selected-preview">${asset?.emoji || "✨"}</div>
    <div class="selected-copy">
      <h4>${asset?.name || "Elemento"}</h4>
      <p>
        Tipo: ${formatTypeLabel(item.type)} ·
        Posición: ${Math.round(item.x)}, ${Math.round(item.y)}
      </p>
    </div>
  `;

  setControlsDisabled(false);
}

function formatTypeLabel(type) {
  switch (type) {
    case "character":
      return "personaje";
    case "object":
      return "objeto";
    case "light":
      return "luz";
    case "decor":
      return "decoración";
    default:
      return "elemento";
  }
}

function syncSelectedControls() {
  const item = getSelectedItem();

  renderSelectedCard();

  if (!item) {
    scaleRange.value = "100";
    rotateRange.value = "0";
    opacityRange.value = "100";
    return;
  }

  scaleRange.value = String(item.scale);
  rotateRange.value = String(item.rotation);
  opacityRange.value = String(Math.round(item.opacity * 100));
}

function setControlsDisabled(disabled) {
  [
    scaleRange,
    rotateRange,
    opacityRange,
    btnBringFront,
    btnSendBack,
    btnDuplicate,
    btnDelete
  ].forEach((el) => {
    el.disabled = disabled;
    el.classList.toggle("is-disabled", disabled);
  });
}

/* =========================================================
   11. UI RENDER · INFO
========================================================= */

function updateStageInfo() {
  elementsCount.textContent = String(state.items.length);

  if (state.currentCategory === "fondos") {
    stageHint.textContent = "Elige un fondo para darle ambiente a tu escenario.";
  } else {
    stageHint.textContent = `Agrega ${CATEGORY_LABELS[state.currentCategory]} al escenario y acomódalos a tu gusto.`;
  }

  if (!state.backgroundId && state.items.length === 0) {
    creativeGoal.textContent = "Crea un escenario que cuente una historia";
  } else if (state.items.length < 3) {
    creativeGoal.textContent = "Agrega más elementos para enriquecer la escena";
  } else if (state.items.length < 6) {
    creativeGoal.textContent = "Tu escenario ya tiene forma, ahora dale equilibrio";
  } else {
    creativeGoal.textContent = "Tu escenario se ve completo y expresivo";
  }
}

/* =========================================================
   12. SELECT / DESELECT
========================================================= */

function selectItem(itemId) {
  state.selectedId = itemId;
  renderStageItems();
  syncSelectedControls();
}

function deselectItem() {
  state.selectedId = null;
  renderStageItems();
  syncSelectedControls();
}

/* =========================================================
   13. CREATE ITEMS
========================================================= */

function createStageItemFromAsset(asset) {
  const rect = getCanvasRect();

  return {
    id: uid("stage"),
    assetId: asset.id,
    type: asset.type,
    x: clamp(rect.width * 0.5 + randomBetween(-80, 80), 60, rect.width - 60),
    y: clamp(rect.height * 0.58 + randomBetween(-50, 50), 80, rect.height - 70),
    scale: asset.type === "character" ? 115 : asset.type === "light" ? 95 : 100,
    rotation: randomBetween(-8, 8),
    opacity: 1,
    zIndex: ++state.zCounter
  };
}

function addAssetToStage(assetId) {
  const asset = getAssetById(assetId);
  if (!asset) return;

  saveUndoState();

  if (asset.type === "background") {
    state.backgroundId = asset.id;
    renderBackground();
    updateStageInfo();
    persistScene();
    showToast(`Fondo cambiado a "${asset.name}".`);
    return;
  }

  const item = createStageItemFromAsset(asset);
  state.items.push(item);
  state.selectedId = item.id;

  renderStageItems();
  syncSelectedControls();
  updateStageInfo();
  persistScene();

  showToast(`Agregaste "${asset.name}" al escenario.`);
}

/* =========================================================
   14. UPDATE ITEMS
========================================================= */

function updateSelectedItem(partial) {
  const item = getSelectedItem();
  if (!item) return;

  Object.assign(item, partial);

  renderStageItems();
  syncSelectedControls();
  updateStageInfo();
  persistScene();
}

function deleteSelectedItem() {
  const item = getSelectedItem();
  if (!item) return;

  saveUndoState();

  const asset = getAssetById(item.assetId);
  state.items = state.items.filter((entry) => entry.id !== item.id);
  state.selectedId = null;

  renderStageItems();
  syncSelectedControls();
  updateStageInfo();
  persistScene();

  showToast(`Eliminaste "${asset?.name || "elemento"}".`);
}

function duplicateSelectedItem() {
  const item = getSelectedItem();
  if (!item) return;

  saveUndoState();

  const clone = {
    ...deepClone(item),
    id: uid("stage"),
    x: item.x + 36,
    y: item.y + 28,
    zIndex: ++state.zCounter
  };

  state.items.push(clone);
  state.selectedId = clone.id;

  renderStageItems();
  syncSelectedControls();
  updateStageInfo();
  persistScene();

  showToast("Elemento duplicado.");
}

function bringSelectedToFront() {
  const item = getSelectedItem();
  if (!item) return;

  saveUndoState();
  item.zIndex = ++state.zCounter;

  renderStageItems();
  persistScene();
  showToast("Elemento al frente.");
}

function sendSelectedToBack() {
  const item = getSelectedItem();
  if (!item) return;

  saveUndoState();

  const minZ = Math.min(...state.items.map((entry) => entry.zIndex), 1);
  item.zIndex = minZ - 1;

  renderStageItems();
  persistScene();
  showToast("Elemento enviado atrás.");
}

/* =========================================================
   15. DRAG & DROP
========================================================= */

function onPointerDownStageItem(event, itemEl) {
  const itemId = itemEl.dataset.itemId;
  const item = getItemById(itemId);
  if (!item) return;

  const canvasRect = getCanvasRect();
  const itemRect = itemEl.getBoundingClientRect();

  selectItem(itemId);

  state.drag.active = true;
  state.drag.itemId = itemId;
  state.drag.offsetX = event.clientX - (itemRect.left + itemRect.width / 2);
  state.drag.offsetY = event.clientY - (itemRect.top + itemRect.height / 2);

  itemEl.setPointerCapture?.(event.pointerId);

  saveUndoState();

  const x = clamp(event.clientX - canvasRect.left - state.drag.offsetX, 50, canvasRect.width - 50);
  const y = clamp(event.clientY - canvasRect.top - state.drag.offsetY, 50, canvasRect.height - 40);

  item.x = x;
  item.y = y;

  renderStageItems();
  syncSelectedControls();
}

function onPointerMoveWindow(event) {
  if (!state.drag.active || !state.drag.itemId) return;

  const item = getItemById(state.drag.itemId);
  if (!item) return;

  const canvasRect = getCanvasRect();

  item.x = clamp(event.clientX - canvasRect.left - state.drag.offsetX, 50, canvasRect.width - 50);
  item.y = clamp(event.clientY - canvasRect.top - state.drag.offsetY, 50, canvasRect.height - 40);

  renderStageItems();
  syncSelectedControls();
}

function onPointerUpWindow() {
  if (!state.drag.active) return;

  state.drag.active = false;
  state.drag.itemId = null;
  persistScene();
}

/* =========================================================
   16. RANDOM SCENE
========================================================= */

function buildRandomScene() {
  saveUndoState();

  const rect = getCanvasRect();
  const randomBg = getRandomFrom(ASSET_LIBRARY.fondos);

  state.backgroundId = randomBg.id;
  state.items = [];
  state.selectedId = null;

  const pool = [
    getRandomFrom(ASSET_LIBRARY.personajes),
    getRandomFrom(ASSET_LIBRARY.personajes),
    getRandomFrom(ASSET_LIBRARY.objetos),
    getRandomFrom(ASSET_LIBRARY.objetos),
    getRandomFrom(ASSET_LIBRARY.luces),
    getRandomFrom(ASSET_LIBRARY.decoracion),
    getRandomFrom(ASSET_LIBRARY.decoracion)
  ];

  pool.forEach((asset, index) => {
    const item = {
      id: uid("stage"),
      assetId: asset.id,
      type: asset.type,
      x: clamp(
        rect.width * (0.18 + (index % 4) * 0.2) + randomBetween(-22, 22),
        55,
        rect.width - 55
      ),
      y: clamp(
        rect.height * (0.38 + Math.floor(index / 4) * 0.2) + randomBetween(-18, 18),
        70,
        rect.height - 45
      ),
      scale:
        asset.type === "character"
          ? randomBetween(105, 125)
          : asset.type === "light"
          ? randomBetween(85, 110)
          : randomBetween(90, 115),
      rotation: randomBetween(-12, 12),
      opacity: Number((randomBetween(75, 100) / 100).toFixed(2)),
      zIndex: ++state.zCounter
    };

    state.items.push(item);
  });

  renderBackground();
  renderStageItems();
  syncSelectedControls();
  updateStageInfo();
  persistScene();

  showToast("Escena sorpresa creada.");
}

/* =========================================================
   17. CLEAR / RESET / SAVE
========================================================= */

function clearStage() {
  if (!state.items.length && !state.backgroundId) {
    showToast("El escenario ya está vacío.");
    return;
  }

  saveUndoState();

  state.items = [];
  state.selectedId = null;

  renderStageItems();
  syncSelectedControls();
  updateStageInfo();
  persistScene();

  showToast("Se limpiaron los elementos del escenario.");
}

function resetFullScene() {
  saveUndoState();

  state.items = [];
  state.selectedId = null;
  state.backgroundId = null;
  state.zCounter = 1;

  renderBackground();
  renderStageItems();
  syncSelectedControls();
  updateStageInfo();
  persistScene();

  showToast("Escenario reiniciado.");
}

function persistScene() {
  const payload = {
    backgroundId: state.backgroundId,
    items: state.items,
    zCounter: state.zCounter,
    mission: missionText.textContent
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadScene() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return false;

    const parsed = JSON.parse(raw);

    state.backgroundId = parsed.backgroundId || null;
    state.items = Array.isArray(parsed.items) ? parsed.items : [];
    state.zCounter = Number(parsed.zCounter || 1);
    state.selectedId = null;

    if (typeof parsed.mission === "string" && parsed.mission.trim()) {
      missionText.textContent = parsed.mission;
    }

    return true;
  } catch (error) {
    console.error("No se pudo cargar la escena guardada:", error);
    return false;
  }
}

function saveCurrentScene() {
  persistScene();
  showToast("Tu creación fue guardada.");
}

/* =========================================================
   18. MODAL
========================================================= */

function openModal() {
  howToPlayModal?.classList.add("is-open");
  howToPlayModal?.setAttribute("aria-hidden", "false");
}

function closeModal() {
  howToPlayModal?.classList.remove("is-open");
  howToPlayModal?.setAttribute("aria-hidden", "true");
}

/* =========================================================
   19. MISSION
========================================================= */

function setRandomMission() {
  missionText.textContent = getRandomFrom(MISSIONS);
}

/* =========================================================
   20. EVENTS
========================================================= */

function bindCategoryEvents() {
  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.currentCategory = tab.dataset.category;
      renderCategoryTabs();
      renderAssetLibrary();
      updateStageInfo();
    });
  });
}

function bindLibraryEvents() {
  assetGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".asset-card");
    if (!card) return;

    const assetId = card.dataset.assetId;
    addAssetToStage(assetId);
  });
}

function bindStageEvents() {
  stageCanvas.addEventListener("click", (event) => {
    const itemEl = event.target.closest(".stage-item");
    if (!itemEl) {
      deselectItem();
      return;
    }

    selectItem(itemEl.dataset.itemId);
  });

  stageCanvas.addEventListener("pointerdown", (event) => {
    const itemEl = event.target.closest(".stage-item");
    if (!itemEl) return;

    onPointerDownStageItem(event, itemEl);
  });

  window.addEventListener("pointermove", onPointerMoveWindow);
  window.addEventListener("pointerup", onPointerUpWindow);
  window.addEventListener("pointercancel", onPointerUpWindow);
}

function bindControlEvents() {
  scaleRange.addEventListener("input", () => {
    updateSelectedItem({ scale: Number(scaleRange.value) });
  });

  rotateRange.addEventListener("input", () => {
    updateSelectedItem({ rotation: Number(rotateRange.value) });
  });

  opacityRange.addEventListener("input", () => {
    updateSelectedItem({ opacity: Number(opacityRange.value) / 100 });
  });

  btnBringFront.addEventListener("click", bringSelectedToFront);
  btnSendBack.addEventListener("click", sendSelectedToBack);
  btnDuplicate.addEventListener("click", duplicateSelectedItem);
  btnDelete.addEventListener("click", deleteSelectedItem);
}

function bindTopActionEvents() {
  btnUndo.addEventListener("click", undoLastAction);
  btnClearStage.addEventListener("click", clearStage);
  btnReset.addEventListener("click", resetFullScene);
  btnSaveScene.addEventListener("click", saveCurrentScene);
  btnRandomScene.addEventListener("click", buildRandomScene);
}

function bindModalEvents() {
  btnHowToPlay?.addEventListener("click", openModal);
  btnCloseModal?.addEventListener("click", closeModal);
  modalBackdrop?.addEventListener("click", closeModal);

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }

    if (
      (event.key === "Delete" || event.key === "Backspace") &&
      getSelectedItem() &&
      !["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)
    ) {
      deleteSelectedItem();
    }

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
      event.preventDefault();
      undoLastAction();
    }

    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "d") {
      if (getSelectedItem()) {
        event.preventDefault();
        duplicateSelectedItem();
      }
    }
  });
}

function bindResizeEvent() {
  window.addEventListener("resize", () => {
    const rect = getCanvasRect();

    state.items.forEach((item) => {
      item.x = clamp(item.x, 50, rect.width - 50);
      item.y = clamp(item.y, 50, rect.height - 40);
    });

    renderStageItems();
    syncSelectedControls();
    persistScene();
  });
}

/* =========================================================
   21. INIT
========================================================= */

function initialRender() {
  renderCategoryTabs();
  renderAssetLibrary();
  renderBackground();
  renderStageItems();
  syncSelectedControls();
  updateStageInfo();
}

function init() {
  const loaded = loadScene();

  if (!loaded) {
    setRandomMission();
  }

  initialRender();
  bindCategoryEvents();
  bindLibraryEvents();
  bindStageEvents();
  bindControlEvents();
  bindTopActionEvents();
  bindModalEvents();
  bindResizeEvent();

  showToast(loaded ? "Se cargó tu escena guardada." : "Construye tu escenario y diviértete.");
}

document.addEventListener("DOMContentLoaded", init);