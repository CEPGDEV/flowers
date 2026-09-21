window.addEventListener("pageshow", () => {
    const scene = document.querySelector(".scene");
    const audio = document.querySelector("#music");

    if (!scene || !audio) return;

    let started = false;

    // Tiempo en el que comienza la transición nocturna
    const nightStart = 60;

    // Reiniciar experiencia
    audio.pause();
    audio.currentTime = 0;

    scene.classList.remove(
        "is-growing",
        "is-alive",
        "is-night"
    );

    // Forzar reinicio de las animaciones
    scene.offsetHeight;

    // Comenzar crecimiento
    const startGrowth = () => {
        scene.classList.remove("is-growing");

        scene.offsetHeight;

        scene.classList.add("is-growing");
    };

    // La animación comienza automáticamente
    startGrowth();

    // Intentar iniciar la música automáticamente
    const startAudio = () => {
        if (started) return;

        audio.play()
            .then(() => {
                started = true;
            })
            .catch(() => {
                // El navegador bloqueó el autoplay.
            });
    };

    startAudio();

    // Respaldo para navegadores que bloqueen autoplay
    const userInteraction = () => {
        if (started) return;

        audio.currentTime = 0;

        audio.play()
            .then(() => {
                started = true;

                scene.classList.remove(
                    "is-growing",
                    "is-alive",
                    "is-night"
                );

                scene.offsetHeight;

                scene.classList.add("is-growing");
            })
            .catch(() => {});
    };

    document.addEventListener(
        "click",
        userInteraction
    );

    document.addEventListener(
        "touchstart",
        userInteraction
    );

    document.addEventListener(
        "keydown",
        userInteraction
    );

    // Sincronización con el audio
    audio.addEventListener("timeupdate", () => {
        const time = audio.currentTime;

        // Ambiente
        if (
            time >= 6 &&
            !scene.classList.contains("is-alive")
        ) {
            scene.classList.add("is-alive");
        }

        // Transición nocturna
        if (time >= nightStart) {
            scene.classList.add("is-night");
        } else {
            scene.classList.remove("is-night");
        }
    });

    // Sincronizar también al adelantar o retroceder
    audio.addEventListener("seeking", () => {
        const time = audio.currentTime;

        scene.classList.toggle(
            "is-night",
            time >= nightStart
        );

        scene.classList.toggle(
            "is-alive",
            time >= 6
        );
    });
});