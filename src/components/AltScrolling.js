
function scrollBox() {
    const scrollContainer = document.getElementById("infoSectionReview");
    let currentIndex = 0;
   
    function scrollToNextElement() {
        const scrollWidth = scrollContainer.scrollWidth;
        const itemWidth = scrollContainer.offsetWidth;
        currentIndex = (currentIndex + 1) % (scrollWidth / itemWidth);
        const scrollToPosition = currentIndex * itemWidth;
        // Scroll to the next element
        scrollContainer.scrollTo({
            left: scrollToPosition,
            behavior: "smooth"
        });
    }
    // Set up a timer to scroll every ten seconds
    setInterval(scrollToNextElement, 4000);
}