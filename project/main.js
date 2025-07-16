    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = scrollY / maxScroll;

        // Move from 10% to 50% left as you scroll down
        const minLeft = 10;
        const maxLeft = 50;
        const newLeft = minLeft + (maxLeft - minLeft) * scrollPercent;

        document.getElementById('earth').style.left = newLeft + '%';
    });