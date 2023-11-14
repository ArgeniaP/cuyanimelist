"use client"
import { XCircle } from "@phosphor-icons/react"
import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const option = {
    width: "320",
    height: "250"
  }

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button
          className="p-1 rounded-full text-color-secondary bg-color-primary float-right"
          onClick={handleVideoPlayer}
        >
          <XCircle size={32} />
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    )
  }

  const Trailer = () => {
    return (
      <button
        className="fixed bottom-2 right-2 w-32 rounded bg-color-primary text-color-dark"
        onClick={handleVideoPlayer}
      >
        TRAILER
      </button>
    )
  }

  return isOpen ? <Player /> : <Trailer />
}

export default VideoPlayer
