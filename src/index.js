import { delegate } from './utils/delegate'
import winterBackground from './assets/winter-bg.jpg'
import summerBackground from './assets/summer-bg.jpg'
import rainBackground from './assets/rainy-bg.jpg'

import './index.scss'

const audio_wrapper = document.querySelector('.audio_wrapper')
const rain_audio = document.querySelector('.rain_audio')
const summer_audio = document.querySelector('.summer_audio')
const winter_audio = document.querySelector('.winter_audio')
const volumeControl = document.querySelector('.volume_control')
const body = document.querySelector('body')

const audioElems = [rain_audio, summer_audio, winter_audio]

function stopOtherAudio(playingAudio) {
  const audiosToPause = audioElems.filter((audio) => audio !== playingAudio)

  audiosToPause.forEach((audio) => audio.pause())
}

function changeBackground(backgroundImage) {
  body.style.backgroundImage = `url(${backgroundImage})`
}

function applyPlayStopLogic(audioElem) {
  if (audioElem.paused) {
    audioElem.play()
    stopOtherAudio(audioElem)
  } else audioElem.pause()
}

delegate(audio_wrapper, '.rain_btn', 'click', function () {
  applyPlayStopLogic(rain_audio)
  changeBackground(rainBackground)
})

delegate(audio_wrapper, '.winter_btn', 'click', function () {
  applyPlayStopLogic(winter_audio)
  changeBackground(winterBackground)
})

delegate(audio_wrapper, '.summer_btn', 'click', function () {
  applyPlayStopLogic(summer_audio)
  changeBackground(summerBackground)
})

volumeControl.addEventListener('input', () => {
  const playingAudio = audioElems.find((audio) => audio.paused === false)
  playingAudio.volume = volumeControl.value
})
