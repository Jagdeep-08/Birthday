document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    const showSlide = (index) => {
        slides[currentSlide].classList.add("hidden");
        slides[index].classList.remove("hidden");
        currentSlide = index;
    };

    // Background video unmute logic
    const backgroundVideo = document.getElementById("backgroundVideo");
    const unmuteButton = document.getElementById("unmuteButton");

    unmuteButton.addEventListener("click", () => {
        backgroundVideo.muted = false;
        backgroundVideo.play();
        unmuteButton.classList.add("hidden");
    });

    // Countdown for Slide 1
    const countdown = document.getElementById("countdown");
    const message1 = document.getElementById("message1");
    const buttonsContainer1 = document.querySelector("#slide1 .buttons");

    let count = 3;
    const interval = setInterval(() => {
        countdown.textContent = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
            countdown.classList.add("hidden");
            message1.classList.remove("hidden");
            buttonsContainer1.classList.remove("hidden");
        }
    }, 1000);

    // Navigation
    document.getElementById("next1").addEventListener("click", () => showSlide(1));
    document.getElementById("prev2").addEventListener("click", () => {
        showSlide(0);
        backgroundVideo.currentTime = 0;
        backgroundVideo.play();
    });
    document.getElementById("next2").addEventListener("click", () => showSlide(2));
    document.getElementById("prev3").addEventListener("click", () => showSlide(1));
    document.getElementById("next3").addEventListener("click", () => showSlide(3));
    document.getElementById("prev4").addEventListener("click", () => showSlide(2));
    document.getElementById("next4").addEventListener("click", () => showSlide(4));
    document.getElementById("prev5").addEventListener("click", () => showSlide(3));

    // Fruit video buttons
    const fruits = document.querySelectorAll(".fruit");
    const videoPlayer = document.getElementById("videoPlayer");

    fruits.forEach((fruit) => {
        fruit.addEventListener("click", () => {
            const videoSrc = fruit.getAttribute("data-video");

            // If a video is already playing, pause and reset it before loading new one
            if (!videoPlayer.paused) {
                videoPlayer.pause();  // Pause the current video
                videoPlayer.currentTime = 0;  // Reset the video to the beginning
            }

            videoPlayer.src = videoSrc;  // Set new video source
            videoPlayer.classList.remove("hidden");  // Show the video player
            videoPlayer.play();  // Start playing the new video
        });
    });

    // Hide the video player when the video ends
    videoPlayer.addEventListener("ended", () => {
        videoPlayer.classList.add("hidden");
        videoPlayer.src = ""; // Clear video source
    });

    // Photo modal for images
    const photoTitles = document.querySelectorAll(".photo-title");
    const photoModal = document.getElementById("photoModal");
    const modalImage = document.getElementById("modalImage");
    const resumeButton = document.getElementById("resumeButton");

    photoTitles.forEach((title) => {
        title.addEventListener("click", () => {
            const photoSrc = title.getAttribute("data-src");
            modalImage.src = photoSrc;
            photoModal.style.display = "flex";
        });
    });

    resumeButton.addEventListener("click", () => {
        photoModal.style.display = "none";
    });
});
