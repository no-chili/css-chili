window.onload = () => {
    let audio = document.getElementById('audio')
    let controls = document.querySelector('.controls')
    let play = false;
    controls.addEventListener('click', function() {
        play = !play
        if (play) {
            audio.play()

            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            let audioCtx = new AudioContext();
            let Oscillator = audioCtx.createOscillator()
            let Gain = audioCtx.createGain();

            Oscillator.connect(Gain)
            Gain.connect(audioCtx.destination)
            Oscillator.type = 'sine'
            Oscillator.frequency.value = 196.00;
            Gain.gain.setValueAtTime(0, audioCtx.currentTime);
            Gain.gain.linearRampToValueAtTime(1, audioCtx.currentTime + 0.01);
            Oscillator.start(audioCtx.currentTime);
            Gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
            Oscillator.stop(audioCtx.currentTime + 1);

            console.log(Oscillator);

        } else {
            audio.pause()
        }
    })

}
