import React, { useEffect } from 'react';
import leftSpeaker from '../../images/medium17.png';
import rightSpeaker from '../../images/medium27.png';
import AppButton from '../../buttons/AppButton';
import '../componentText.css';
import './soundContent.css';
import buttonStyles from '../../data/buttonStyles';
import InteractiveCursor from '../../interactive-cursor/InteractiveCursor';
import audioTrack from '../../data/audio/joystock-ectoplasmic.mp3';

const SoundContent = () => {

    useEffect(() => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContext = new AudioContext();
        const audioElement = document.querySelector(".audioTrack");
        const track = audioContext.createMediaElementSource(audioElement);
        track.connect(audioContext.destination);

        const playButton = document.querySelector(".speakerDisplay");

        playButton.addEventListener('click', function () {

            if (audioContext.state === "suspended") {
                audioContext.resume();
            }
            if (this.dataset.playing === "false") {
                audioElement.play();
                this.dataset.playing = "true";
            }
            else if (this.dataset.playing === "true") {
                audioElement.pause();
                this.dataset.playing = "false"
            }
        }, false);

        audioElement.addEventListener("ended", () => {
            playButton.dataset.playing = "false";
        }, false)
    })

    //Note: some css rules temporarily disable the interactive cursor

    return (
        <div>
            <div className="soundText">
                <h4 className="whiteText s74">SUPERIOR SOUND</h4>
                <h6 className="blackText s51-61">Experience live versions of your favourite songs.</h6>
                <AppButton
                    buttonId={"soundSeeDemoBtn"}
                    button={buttonStyles.fuchsiaOnWhite}
                    buttonText="SEE DEMO"
                />
            </div>
            <div className="speakerDisplay" data-playing="false" role="switch" aria-checked="false">
                <InteractiveCursor
                    sectionClass="speakerDisplay"
                    cursorText="CLICK"
                    cursorClass="cursorSound"
                    paddingOffset="0.5em 1em"
                    xOffset="150px"
                    yOffset="150px"
                    color="white"
                    margin="0"
                />
                <img className="lSpeaker" src={leftSpeaker} alt="left speaker" />
                <img className="rSpeaker" src={rightSpeaker} alt="right speaker" />
            </div>
            <audio className="audioTrack" src={audioTrack}></audio>
        </div>
    );
}

export default SoundContent;