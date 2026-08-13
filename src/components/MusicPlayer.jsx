import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    Play,
    Pause,
    SkipForward,
    SkipBack,
    ChevronUp,
    ChevronDown,
    Volume2,
    VolumeX,
} from 'lucide-react'
import driversLicenseCover from '../assets/drivers-license.jpg'
import happierThanEverCover from '../assets/happier-than-ever.jpg'
import runawayCover from '../assets/runaway.jpg'
import brooklynBabyCover from '../assets/brooklyn-baby.jpg'
import nuvvadiginadheCover from '../assets/nuvvadiginadhe.png'

const baseUrl = import.meta.env.BASE_URL

const tracks = [
    {
        title: 'drivers license',
        artist: 'Olivia Rodrigo',
        src: `${baseUrl}music/Drivers%20license%20-%20Olivia%20Rodrigo-%5BAudioTrimmer.com%5D.mp3`,
        cover: driversLicenseCover,
    },
    {
        title: 'Happier Than Ever',
        artist: 'Billie Eilish',
        src: `${baseUrl}music/Happier%20Than%20Ever%20-%20Billie%20Eilish-%5BAudioTrimmer.com%5D.m4a`,
        cover: happierThanEverCover,
    },
    {
        title: 'Runaway',
        artist: 'Kanye West',
        src: `${baseUrl}music/Kanye%20West%20-%20Runaway-%5BAudioTrimmer.com%5D.mp3`,
        cover: runawayCover,
    },
    {
        title: 'Brooklyn Baby',
        artist: 'Lana Del Rey',
        src: `${baseUrl}music/Lana%20Del%20Rey%20-%20Brooklyn%20Baby%20(Official%20Audio)(mp3j.cc)-%5BAudioTrimmer.com%5D.m4a`,
        cover: brooklynBabyCover,
    },
    {
        title: 'Nuvvadiginadhe',
        artist: 'Anirudh Ravichander',
        src: `${baseUrl}music/Nuvvadiginadhe.mp3`,
        cover: nuvvadiginadheCover,
    },

]

export default function MusicPlayer() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [isExpanded, setIsExpanded] = useState(false)
    const [volume] = useState(0.7)
    const [isMuted, setIsMuted] = useState(false)

    const audioRef = useRef(null)
    const currentTrack = tracks[currentTrackIndex]

    if (!audioRef.current) {
        audioRef.current = new Audio(currentTrack.src)
    }

    useEffect(() => {
        const audio = audioRef.current
        audio.src = currentTrack.src
        audio.load()

        const handleTimeUpdate = () => setCurrentTime(audio.currentTime)
        const handleLoadedMetadata = () => setDuration(audio.duration || 0)
        const handleEnded = () => handleNext()

        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('loadedmetadata', handleLoadedMetadata)
        audio.addEventListener('ended', handleEnded)

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
            audio.removeEventListener('ended', handleEnded)
        }
    }, [currentTrackIndex, currentTrack.src])

    useEffect(() => {
        const audio = audioRef.current
        if (isPlaying) {
            audio.play().catch((err) => {
                console.log('Toggle play error:', err)
                setIsPlaying(false)
            })
        } else {
            audio.pause()
        }
    }, [isPlaying])

    useEffect(() => {
        audioRef.current.volume = isMuted ? 0 : volume
    }, [volume, isMuted])

    const togglePlay = (e) => {
        if (e) e.stopPropagation()
        setIsPlaying((prev) => !prev)
    }

    const handleNext = (e) => {
        if (e) e.stopPropagation()
        setCurrentTrackIndex((prev) => (prev + 1) % tracks.length)
    }

    const handlePrev = (e) => {
        if (e) e.stopPropagation()
        setCurrentTrackIndex(
            (prev) => (prev - 1 + tracks.length) % tracks.length
        )
    }

    const handleSeek = (e) => {
        e.stopPropagation()
        const seekValue = parseFloat(e.target.value)
        audioRef.current.currentTime = seekValue
        setCurrentTime(seekValue)
    }

    const formatTime = (time) => {
        if (isNaN(time)) return '0:00'
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
    }

    return (
        <>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        key="expanded-player"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 15 }}
                        transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 25,
                        }}
                        style={{
                            background:
                                'linear-gradient(135deg, #161622 0%, #0d0d14 100%)',
                            boxShadow:
                                'rgba(0, 0, 0, 0.6) 0px 16px 48px 0px, rgba(255, 255, 255, 0.05) 0px 1px 1px 0px inset',
                            originX: 0,
                            originY: 1,
                        }}
                        className="fixed z-6000 left-4 bottom-36 lg:left-6 lg:bottom-20 w-76 rounded-3xl p-4 text-white shadow-2xl border border-white/10 flex flex-col justify-between"
                    >
                        <div className="flex items-start justify-between">
                            <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full shadow-md border border-white/10">
                                <img
                                    src={currentTrack.cover}
                                    alt={currentTrack.title}
                                    className={`h-full w-full rounded-full object-cover animate-slow-spin ${isPlaying ? '' : 'animation-paused'}`}
                                />
                                <div className="absolute inset-0 m-auto h-4 w-4 rounded-full bg-[#0A0A0F] border border-white/20" />
                            </div>

                            <div className="flex flex-col items-end gap-3">
                                <div className="flex items-end gap-1 h-5 pr-2">
                                    <div
                                        className={`w-0.75 bg-cyan-400 rounded-full transition-all duration-300 ${isPlaying ? 'animate-bar-1' : 'h-1'}`}
                                    />
                                    <div
                                        className={`w-0.75 bg-fuchsia-400 rounded-full transition-all duration-300 ${isPlaying ? 'animate-bar-2' : 'h-2'}`}
                                    />
                                    <div
                                        className={`w-0.75 bg-amber-400 rounded-full transition-all duration-300 ${isPlaying ? 'animate-bar-3' : 'h-1.5'}`}
                                    />
                                </div>

                                <motion.button
                                    type="button"
                                    whileTap={{ scale: 0.85 }}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setIsMuted((prev) => !prev)
                                    }}
                                    className="p-1 text-white/60 hover:text-white transition-colors cursor-pointer"
                                    title={isMuted ? 'Unmute' : 'Mute'}
                                >
                                    {isMuted ? (
                                        <VolumeX className="h-4 w-4 text-red-400" />
                                    ) : (
                                        <Volume2 className="h-4 w-4" />
                                    )}
                                </motion.button>
                            </div>
                        </div>

                        <div className="mt-4 flex min-w-0 flex-1 flex-col justify-center">
                            <p
                                title={currentTrack.title}
                                className="line-clamp-1 text-lg font-bold leading-tight tracking-tight text-white"
                            >
                                {currentTrack.title}
                            </p>
                            <p
                                title={currentTrack.artist}
                                className="mt-1 line-clamp-1 text-xs font-semibold leading-none text-cyan-400"
                            >
                                {currentTrack.artist}
                            </p>
                        </div>

                        <div className="mt-4 flex w-full items-center gap-2">
                            <span className="w-8 shrink-0 text-left text-[10px] font-mono tabular-nums text-white/50">
                                {formatTime(currentTime)}
                            </span>
                            <div className="group relative h-4 flex-1 flex items-center">
                                <div className="absolute left-0 right-0 h-1 rounded-full bg-white/10" />
                                <div
                                    className="absolute left-0 h-1 rounded-full bg-linear-to-r from-cyan-400 via-fuchsia-500 to-amber-300 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                    style={{
                                        width: `${(currentTime / (duration || 1)) * 100}%`,
                                    }}
                                />
                                <input
                                    type="range"
                                    min={0}
                                    max={duration || 100}
                                    step="any"
                                    value={currentTime}
                                    onChange={handleSeek}
                                    className="absolute inset-x-0 w-full h-full cursor-pointer appearance-none bg-transparent opacity-0 z-20"
                                />
                                <div
                                    className="pointer-events-none absolute h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10"
                                    style={{
                                        left: `${(currentTime / (duration || 1)) * 100}%`,
                                    }}
                                />
                            </div>
                            <span className="w-8 shrink-0 text-right text-[10px] font-mono tabular-nums text-white/50">
                                {formatTime(duration)}
                            </span>
                        </div>

                        <div className="mt-4 flex items-center justify-center gap-4">
                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85 }}
                                onClick={handlePrev}
                                className="p-1.5 text-white/70 hover:text-cyan-400 transition-colors cursor-pointer"
                                title="Previous Track"
                            >
                                <SkipBack className="h-5 w-5 fill-current" />
                            </motion.button>

                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.92 }}
                                onClick={togglePlay}
                                className="h-10 w-10 flex items-center justify-center rounded-full bg-white text-slate-950 shadow cursor-pointer"
                                title={isPlaying ? 'Pause' : 'Play'}
                            >
                                {isPlaying ? (
                                    <Pause className="h-5 w-5 fill-current text-slate-950" />
                                ) : (
                                    <Play className="h-5 w-5 fill-current text-slate-950 translate-x-px" />
                                )}
                            </motion.button>

                            <motion.button
                                type="button"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85 }}
                                onClick={handleNext}
                                className="p-1.5 text-white/70 hover:text-cyan-400 transition-colors cursor-pointer"
                                title="Next Track"
                            >
                                <SkipForward className="h-5 w-5 fill-current" />
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group fixed z-6000 cursor-pointer overflow-hidden text-white left-4 bottom-24 rounded-full p-1 lg:left-6 lg:bottom-6 lg:rounded-xl lg:p-1.5 backdrop-blur-2xl backdrop-saturate-200 border border-white/30 dark:border-white/20 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                style={{
                    background:
                        'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 50%, rgba(255, 255, 255, 0.05) 100%)',
                    boxShadow:
                        'rgba(0, 0, 0, 0.4) 0px 8px 32px 0px, rgba(255, 255, 255, 0.15) 0px 1px 1px 0px inset, rgba(255, 255, 255, 0.1) 0px 1px 0px 0px',
                }}
                onClick={() => setIsExpanded((prev) => !prev)}
            >
                <div className="flex items-center gap-2 pr-1 lg:gap-1.5 lg:pr-2">
                    <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-white/20">
                        <img
                            src={currentTrack.cover}
                            alt={currentTrack.title}
                            className={`h-full w-full rounded-full object-cover animate-slow-spin ${isPlaying ? '' : 'animation-paused'}`}
                        />
                        <div className="absolute inset-0 m-auto h-2.5 w-2.5 rounded-full bg-[#0A0A0F] border border-white/20" />
                    </div>

                    <div className="hidden min-w-0 max-w-26 lg:block">
                        <p className="line-clamp-1 text-[11px] font-bold leading-tight text-white">
                            {currentTrack.title}
                        </p>
                        <p className="line-clamp-1 text-[9px] font-medium leading-tight text-white/60">
                            {currentTrack.artist}
                        </p>
                    </div>

                    <motion.button
                        type="button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                        onClick={togglePlay}
                        className="hidden lg:flex ml-1 h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/95 text-slate-950 shadow cursor-pointer"
                    >
                        {isPlaying ? (
                            <Pause className="h-3 w-3 fill-current text-slate-950" />
                        ) : (
                            <Play className="h-3 w-3 fill-current text-slate-950 translate-x-[0.5px]" />
                        )}
                    </motion.button>

                    <div className="text-white/50 group-hover:text-white/80 transition-colors">
                        {isExpanded ? (
                            <ChevronDown className="h-4 w-4" />
                        ) : (
                            <ChevronUp
                                className="h-4 w-4 animate-bounce"
                                style={{ animationDuration: '2.4s' }}
                            />
                        )}
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white/10">
                    <div
                        className="h-full bg-linear-to-r from-cyan-400 via-fuchsia-500 to-amber-300 transition-[width] duration-150"
                        style={{
                            width: `${(currentTime / (duration || 1)) * 100}%`,
                        }}
                    />
                </div>
            </motion.div>
        </>
    )
}
