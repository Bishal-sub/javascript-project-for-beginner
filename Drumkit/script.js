document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            const dataKey = this.getAttribute('data-key');
            playSound(dataKey);
        });
    });


    window.addEventListener('keydown', function(e) {
        const key = e.key.toUpperCase(); 
        const dataKey = getKeyDataKey(key); 
        
        if (dataKey !== null) {
            playSound(dataKey);
        }
    });


    function playSound(dataKey) {
        const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
        if (audio) {
            audio.currentTime = 0;
            audio.play();
        }
    }

   
    function getKeyDataKey(key) {
        switch (key) {
            case 'A':
                return '1';
            case 'B':
                return '10';
            case 'C':
                return '11';
            case 'D':
                return '12';
            case 'E':
                return '13';
            case 'F':
                return '14';
            case 'G':
                return '15';
            case 'H':
                return '16';
            case'I':
                 return '17';    
            default:
                return null;
        }
    }
});
