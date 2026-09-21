const flowerTemplate = document.querySelector("#flower-template");

const flowers = document.querySelectorAll(".flower");

if (flowerTemplate) {

    flowers.forEach((flower) => {

        const motion = document.createElement("div");
        motion.classList.add("flower-motion");

        motion.appendChild(
            flowerTemplate.content.cloneNode(true)
        );

        flower.appendChild(motion);

    });

}