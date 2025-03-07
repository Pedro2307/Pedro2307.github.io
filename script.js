document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-card");
    let currentIndex = 0;

    document.getElementById("prevBtn").addEventListener("click", function () {
        projects[currentIndex].classList.remove("active");
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        projects[currentIndex].classList.add("active");
    });

    document.getElementById("nextBtn").addEventListener("click", function () {
        projects[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % projects.length;
        projects[currentIndex].classList.add("active");
    });
});
