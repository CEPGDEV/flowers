const backGrass = document.querySelector(".vegetation-back");
const frontGrass = document.querySelector(".vegetation-front");

const backSecondary = document.querySelector(".secondary-back");
const frontSecondary = document.querySelector(".secondary-front");

const grassBack = [
    { x: 5,  height: 20, scale: 0.75, rotation: -5 },
    { x: 11, height: 15, scale: 0.65, rotation: 4 },
    { x: 18, height: 24, scale: 0.85, rotation: -6 },
    { x: 26, height: 17, scale: 0.7, rotation: 5 },

    { x: 33, height: 18, scale: 0.8, rotation: -4 },
    { x: 37, height: 24, scale: 0.9, rotation: 5 },

    { x: 45, height: 15, scale: 0.7, rotation: -6 },
    { x: 55, height: 20, scale: 0.8, rotation: 4 },

    { x: 63, height: 17, scale: 0.7, rotation: 6 },
    { x: 67, height: 23, scale: 0.9, rotation: -5 },

    { x: 74, height: 16, scale: 0.7, rotation: 5 },
    { x: 82, height: 23, scale: 0.85, rotation: -5 },
    { x: 89, height: 18, scale: 0.75, rotation: 6 },
    { x: 96, height: 25, scale: 0.9, rotation: -4 }
];

const grassFront = [
    { x: 8,  height: 23, scale: 0.9, rotation: -5 },
    { x: 15, height: 17, scale: 0.7, rotation: 5 },
    { x: 23, height: 25, scale: 0.9, rotation: -4 },

    { x: 35, height: 22, scale: 0.9, rotation: -5 },

    { x: 42, height: 16, scale: 0.7, rotation: 5 },
    { x: 48, height: 25, scale: 0.9, rotation: -4 },

    { x: 57, height: 18, scale: 0.8, rotation: 6 },
    { x: 64, height: 24, scale: 0.9, rotation: -6 },

    { x: 76, height: 21, scale: 0.8, rotation: 5 },
    { x: 84, height: 17, scale: 0.7, rotation: -5 },
    { x: 92, height: 25, scale: 0.9, rotation: 4 }
];

const smallPlantsBack = [
    { x: 10, height: 48, scale: 0.75, rotation: -4 },
    { x: 24, height: 42, scale: 0.8, rotation: 5 },

    { x: 34, height: 46, scale: 0.7, rotation: -5 },

    { x: 46, height: 50, scale: 0.75, rotation: 4 },

    { x: 61, height: 43, scale: 0.7, rotation: -4 },

    { x: 74, height: 49, scale: 0.8, rotation: 5 },
    { x: 90, height: 44, scale: 0.75, rotation: -5 }
];

const smallPlantsFront = [
    { x: 17, height: 43, scale: 0.75, rotation: 4 },

    { x: 31, height: 50, scale: 0.8, rotation: -5 },

    { x: 47, height: 44, scale: 0.75, rotation: 5 },

    { x: 64, height: 51, scale: 0.8, rotation: -4 },

    { x: 79, height: 45, scale: 0.75, rotation: 5 },

    { x: 94, height: 52, scale: 0.8, rotation: -5 }
];

const secondaryPlantsBack = [
    {
        x: 8,
        height: 100,
        scale: 0.85,
        rotation: -5
    },
    {
        x: 27,
        height: 88,
        scale: 0.75,
        rotation: 6
    },
    {
        x: 73,
        height: 94,
        scale: 0.80,
        rotation: -5
    },
    {
        x: 92,
        height: 105,
        scale: 0.85,
        rotation: 5
    }
];

const secondaryPlantsFront = [
    {
        x: 36,
        height: 82,
        scale: 0.70,
        rotation: 4
    },
    {
        x: 64,
        height: 88,
        scale: 0.72,
        rotation: -4
    }
];

function createGrass(container, data) {

    data.forEach((grassData) => {

        const group = document.createElement("div");

        group.classList.add("grass");

        group.style.left = `${grassData.x}%`;
        group.style.setProperty("--grass-height", `${grassData.height}px`);
        group.style.setProperty("--grass-scale", grassData.scale);
        group.style.setProperty("--grass-rotation", `${grassData.rotation}deg`);

        group.innerHTML = `
            <span class="grass-blade blade-left"></span>
            <span class="grass-blade blade-center"></span>
            <span class="grass-blade blade-right"></span>
        `;

        container.appendChild(group);
    });
}

function createSmallPlants(container, data) {

    data.forEach((plantData) => {

        const plant = document.createElement("div");

        plant.classList.add("small-plant");

        plant.style.left = `${plantData.x}%`;
        plant.style.setProperty(
            "--plant-height",
            `${plantData.height}px`
        );
        plant.style.setProperty(
            "--plant-scale",
            plantData.scale
        );
        plant.style.setProperty(
            "--plant-rotation",
            `${plantData.rotation}deg`
        );

        plant.innerHTML = `
            <span class="plant-stem"></span>

            <span class="plant-leaf leaf-left-top"></span>
            <span class="plant-leaf leaf-right-top"></span>

            <span class="plant-leaf leaf-left-bottom"></span>
        `;

        container.appendChild(plant);
    });
}

function createSecondaryPlants(container, data) {

    data.forEach((plantData) => {

        const plant = document.createElement("div");

        plant.classList.add("secondary-plant");

        plant.style.left = `${plantData.x}%`;

        plant.style.setProperty(
            "--secondary-height",
            `${plantData.height}px`
        );

        plant.style.setProperty(
            "--secondary-scale",
            plantData.scale
        );

        plant.style.setProperty(
            "--secondary-rotation",
            `${plantData.rotation}deg`
        );

        plant.innerHTML = `
            <span class="secondary-stem"></span>

            <span class="secondary-leaf leaf-1"></span>
            <span class="secondary-leaf leaf-2"></span>
            <span class="secondary-leaf leaf-3"></span>
            <span class="secondary-leaf leaf-4"></span>
            <span class="secondary-leaf leaf-5"></span>
        `;

        container.appendChild(plant);
    });
}

if (backGrass) {
    createGrass(backGrass, grassBack);
}

if (frontGrass) {
    createGrass(frontGrass, grassFront);
}

if (backGrass) {
    createSmallPlants(backGrass, smallPlantsBack);
}

if (frontGrass) {
    createSmallPlants(frontGrass, smallPlantsFront);
}

if (backSecondary) {
    createSecondaryPlants(
        backSecondary,
        secondaryPlantsBack
    );
}

if (frontSecondary) {
    createSecondaryPlants(
        frontSecondary,
        secondaryPlantsFront
    );
}