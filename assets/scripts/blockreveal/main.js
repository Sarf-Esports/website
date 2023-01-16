var timeoutId;
var revealElems = document.querySelectorAll('.rv-item');

window.addEventListener("scroll", function () {
    if(timeoutId) return;

    timeoutId = this.setTimeout( function() {
        timeoutId = 0;

        for (const revealElem of revealElems)  {
            const heightOfRevealElem = revealElem.clientHeight;
            const revealPoint = (window.scrollY + window.innerHeight) - heightOfRevealElem / 2;
            const halfShown = revealPoint > revealElem.offsetTop;
            if (halfShown) {
                if (!revealElem.classList.contains('rv-arch')) {
                    revealElem.className += ' rv-arch';
                }
            }
        };

    }, 300);
});