
                                window.onload = () => {

    const setVh = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);



    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);

    const poemText = "Hoy es 21 de septiembre y quiero decirte lo siguiente mi amor:\n"+
        "Con estas flores amarillas son solo un reflejo de la alegría que me das cada día.\n" +
        "Eres el sol que guía mi existencia.\n" +
        "Con estas flores quiero que sepas que eres lo más brillante en mi vida, quiero que nuestra relación siempre esté llena de vida y amor.\n" +
        "Gracias por hacerme sentir amado siempre. \n" +
        "Eres la flor que siempre quiero tener en mi vida y el amor que siempre quise encontrar. \n"+
        "Que estas flores sean un símbolo de los momentos felices que hemos compartido y los que vendrán.\n"+
        "Gracias por hacer que mi corazón lata más fuerte, por llenar mis días de magia y amor\n" +
        "Quiero agradecerte porque tu me haz hecho sentir muy feliz cada día que estoy contigo, eres mi todo, mi amor eterno.\n" +
        "     TE AMO MUCHO MI VIDA!!!\n";

    const poemElement = document.getElementById("poem-text");
    const root = document.documentElement;
    let charIndex = 0;
    const typingSpeed = 80;

    const stemHeights = {
        'flower--1': 70,
        'flower--2': 60,
        'flower--3': 55
    };

    function typeWriter() {
        if (charIndex < poemText.length) {

            poemElement.innerHTML += poemText.charAt(charIndex);
            charIndex++;

            const totalProgress = charIndex / poemText.length;
            const stemProgress = totalProgress;
            const leafProgress = Math.max(0, (totalProgress - 0.2) / 0.8);
            const flowerProgress = Math.max(0, (totalProgress - 0.5) / 0.5);

            document.querySelectorAll('.flower').forEach(flower => {
                const baseHeight = stemHeights[flower.classList[1]];
                const currentHeight = baseHeight * stemProgress;
                flower.querySelector('.flower__line').style.height = `${currentHeight}vmin`;
            });

            root.style.setProperty('--leaf-growth', leafProgress.toFixed(2));
            root.style.setProperty('--flower-growth', flowerProgress.toFixed(2));

            setTimeout(typeWriter, typingSpeed);
        } else {
            poemElement.classList.add("typing-done");

            root.style.setProperty('--leaf-growth', 1);
            root.style.setProperty('--flower-growth', 1);
            document.querySelectorAll('.flower').forEach(flower => {
                const baseHeight = stemHeights[flower.classList[1]];
                flower.querySelector('.flower__line').style.height = `${baseHeight}vmin`;
            });
        }
    }

    typeWriter();
    function createStars() {
        const night = document.querySelector('.night');
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.top = `${Math.random() * 100}%`;
            star.style.left = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            night.appendChild(star);
        }
    }
    createStars();
};
                            