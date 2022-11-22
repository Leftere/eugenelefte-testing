import brightcovePlayerLoader from '@brightcove/player-loader'

class VideoPlayer {
  constructor(el) {
    this.$el = el
    this.video = this.$el.querySelector('.video-js')

    this.chapters = [...this.$el.querySelectorAll('.video-player__chapter')]

    this.watchButton = this.$el.querySelector('.video-player__watch-button')

    this.VIDEO_OPTS = {
      accountId: this.video.dataset.account,
      playerId: this.video.dataset.player,
      videoId: this.video.dataset.videoId,
      refNode: this.video,
      preload: 'metadata',
    }

    brightcovePlayerLoader(this.VIDEO_OPTS)
      .then((success) => {
        this.player = success.ref
        this.player.ready(() => {
          if (this.chapters.length > 1) {
            this.chapters.forEach((chapter) => {
              this.chapterListeners(chapter)
            })
          }

          if (this.watchButton) {
            this.watchButton.addEventListener('click', () => {
              this.player.play()
            })
          }
        })
      })
      .catch((error) => {
        console.log(`error: ${error}`)
      })
  }

  chapterListeners = (chapter) => {
    chapter.addEventListener('click', () => {
      this.player.currentTime(chapter.dataset.timestamp)
      this.player.play()
    })
  }
}

export default VideoPlayer
