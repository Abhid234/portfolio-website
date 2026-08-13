import { Header } from '../components/Header'
import RotatingText from '../components/RotatingText'
import {
    Cpu,
    Dumbbell,
    Flag,
    Gamepad2,
    Lightbulb,
    Trophy,
    Clock,
    Sun,
    GraduationCap as School,
    Users,
    Utensils,
    MoonStar,
    Moon,
    BookOpen,
    BellDot,
} from 'lucide-react'
import f1RaceNight from '../assets/f1-race-night.png'

const routine = [
    { time: '8:00 - 9:00 AM', label: 'Wake up', icon: Sun },
    { time: '9:00 AM - 1:00 PM', label: 'Morning classes', icon: School },
    { time: '1:00 PM', label: 'Lunch break', icon: Utensils },
    { time: '2:00 - 5:00 PM', label: 'Afternoon classes', icon: School },
    { time: '5:00 - 8:00 PM', label: 'Club activities or a nap', icon: Users },
    { time: '8:30 PM', label: 'Dinner + a short walk', icon: MoonStar },
    { time: '10:00 - 11:00 PM', label: 'Academic work', icon: BookOpen },
    {
        time: '11:00 PM - 1:00 AM',
        label: 'Learning something new — ML, DSA, or this site',
        icon: Clock,
    },
    { time: '1:00 - 2:00 AM', label: 'Sleep', icon: Moon },
]

const futurePlans = [
    'Build a gaming PC from scratch',
    'Hit a 100kg bench press PR',
    'Land a great job',
    "Go for a master's degree in a peaceful country outside India",
    'Watch a Test match at Lord\u2019s',
    'Visit Japan',
    'Visit Switzerland',
    'Build a crazy techie house',
    'Make my family and friends happy',
]

export function AboutPage() {
    return (
        <>
            <title>Abhiram-About</title>

            <div className="relative min-h-screen overflow-hidden bg-[#0A0A0F]">
                <div
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                    aria-hidden="true"
                >
                    <div className="stage-beam-left beam-left absolute top-0 left-0" />
                    <div className="stage-beam-left-soft beam-left-soft absolute top-0 left-0" />
                    <div className="stage-beam-right beam-right absolute top-0 right-0" />
                    <div className="stage-beam-right-soft beam-right-soft absolute top-0 right-0" />
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-1 h-80 bg-linear-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent" />

                <div className="relative z-10">
                    <Header />

                    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
                        <div>
                            <h1 className="bg-linear-to-b from-zinc-100 via-white to-zinc-500 bg-clip-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.16)]">
                                Hello again? <br />
                                My name is{' '}
                                <span className="bg-linear-to-b from-cyan-100 via-cyan-300 to-cyan-600 bg-clip-text text-transparent">
                                    Abhiram
                                </span>
                            </h1>

                            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-400">
                                <span>Abhiram is</span>
                                <RotatingText
                                    texts={[
                                        'Curious',
                                        'Enthusiastic',
                                        'Clever',
                                        'Creative',
                                        'Lazy',
                                        'Pessimistic',
                                    ]}
                                    mainClassName="overflow-hidden rounded-lg bg-cyan-400 px-3 py-1 font-semibold text-[#0A0A0F]"
                                    staggerFrom="last"
                                    initial={{ y: '100%' }}
                                    animate={{ y: 0 }}
                                    exit={{ y: '-120%' }}
                                    staggerDuration={0.025}
                                    splitLevelClassName="overflow-hidden pb-0.5"
                                    transition={{
                                        type: 'spring',
                                        damping: 30,
                                        stiffness: 400,
                                    }}
                                    rotationInterval={3500}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            <div className="bg-[#0A0A0F] px-6 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl">
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                            Beyond the keyboard
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white md:text-5xl">
                            Abhiram's Hobbies
                        </h2>
                        <p className="mt-4 leading-relaxed text-gray-400">
                            The interests that keep me curious, competitive, and
                            away from the editor once in a while.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
                        <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#12121a] p-6 sm:p-8 lg:col-span-4 lg:row-span-2 min-h-75 lg:min-h-[calc(100vh-400px)] lg:max-h-150 transition duration-300 hover:bg-white/3">
                            <img
                                src={f1RaceNight}
                                alt="Formula 1 car racing under track lights"
                                className="absolute inset-0 h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-[#090a10] via-[#090a10]/80 to-[#090a10]/10" />
                            <div className="relative z-10 flex flex-col h-full justify-end">
                                <Flag className="mb-6 h-8 w-8 sm:mb-8 sm:h-9 sm:w-9 text-red-400" />
                                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                    Formula 1 fan
                                </h3>
                                <p className="mt-2 max-w-lg leading-relaxed text-gray-300 text-sm sm:text-base">
                                    A big Max Verstappen and Red Bull Racing
                                    fan. I love the speed, strategy, and tiny
                                    decisions that can change an entire race
                                    weekend.
                                </p>
                                <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                                    <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1.5 text-red-200">
                                        Max Verstappen
                                    </span>
                                    <span className="rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1.5 text-blue-200">
                                        Red Bull Racing
                                    </span>
                                </div>
                            </div>
                            <p className="absolute bottom-4 sm:bottom-7 right-4 sm:right-8 z-10 text-4xl sm:text-6xl font-black italic text-white transition duration-300 group-hover:text-red-300/25">
                                F1
                            </p>
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#12121a] p-6 sm:p-8 lg:col-span-2 lg:row-span-2 min-h-75 lg:min-h-[calc(100vh-400px)] lg:max-h-150 transition duration-300 hover:bg-white/3">
                            <Trophy className="mb-6 h-8 w-8 sm:mb-8 sm:h-9 sm:w-9 text-amber-300" />
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                Sports & gym
                            </h3>
                            <p className="mt-2 leading-relaxed text-gray-400 text-sm sm:text-base">
                                Following cricket and football, getting outside
                                to play, and spending plenty of time in the gym.
                            </p>
                            <span className="mt-4 inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-3 py-1.5 text-xs font-semibold text-amber-100">
                                Gym freak
                            </span>
                            <Dumbbell className="absolute -bottom-4 -right-4 h-24 w-24 sm:-bottom-6 sm:-right-6 sm:h-32 sm:w-32 text-amber-300/[0.07] transition duration-300 group-hover:scale-110" />
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#12121a] p-6 sm:p-8 lg:col-span-3 lg:row-span-2 min-h-70 lg:min-h-[calc(100vh-400px)] lg:max-h-150 transition duration-300 hover:bg-white/3">
                            <div className="mb-6 flex gap-3">
                                <Lightbulb className="h-8 w-8 sm:h-9 sm:w-9 text-yellow-300" />
                                <Cpu className="h-8 w-8 sm:h-9 sm:w-9 text-cyan-400" />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                Always learning
                            </h3>
                            <p className="mt-2 max-w-md leading-relaxed text-gray-400 text-sm sm:text-base">
                                I'm drawn to new ideas, skills, and the
                                satisfaction of understanding how something
                                works — especially when it involves technology.
                            </p>
                            <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-28 bg-linear-to-t from-cyan-400/10 to-transparent" />
                        </div>

                        <div className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-[#12121a] p-6 sm:p-8 lg:col-span-3 lg:row-span-2 min-h-70 lg:min-h-[calc(100vh-400px)] lg:max-h-150 transition duration-300 hover:bg-white/3">
                            <Gamepad2 className="mb-6 h-8 w-8 sm:mb-8 sm:h-9 sm:w-9 text-violet-400" />
                            <h3 className="text-xl sm:text-2xl font-semibold text-white">
                                Gaming & Anime
                            </h3>
                            <p className="mt-2 max-w-md leading-relaxed text-gray-400 text-sm sm:text-base">
                                Elden Ring for its challenge, Valorant for the
                                competition, Minecraft for its creativity, and
                                anime for a great story after a long day.
                            </p>
                            <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 text-xs sm:text-sm font-semibold text-violet-200">
                                <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-1 sm:px-3 sm:py-1.5">
                                    Elden Ring
                                </span>
                                <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-1 sm:px-3 sm:py-1.5">
                                    Valorant
                                </span>
                                <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-1 sm:px-3 sm:py-1.5">
                                    Minecraft
                                </span>
                                <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-1 sm:px-3 sm:py-1.5">
                                    Hollow Knight
                                </span>
                                <span className="rounded-full border border-violet-400/25 bg-violet-400/10 px-2.5 py-1 sm:px-3 sm:py-1.5">
                                    Anime
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#0A0A0F] px-6 pb-16">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
                    <div>
                        <div className="mb-10 text-center lg:text-left">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                                A regular day
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white md:text-5xl">
                                My Daily Routine
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-400">
                                Roughly how a busy weekday looks — this shifts
                                depending on classes and clubs, but the shape
                                stays the same.
                            </p>
                        </div>

                        <div className="relative rounded-2xl border border-white/10 bg-[#12121a] p-6 sm:p-8">
                            <div className="relative space-y-6 before:absolute before:left-3.75 before:top-2 before:bottom-2 before:w-px before:bg-white/10">
                                {routine.map(
                                    ({ time, label, icon: Icon }, i) => (
                                        <div
                                            key={i}
                                            className="relative flex items-start gap-4"
                                        >
                                            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-[#0A0A0F] text-cyan-400">
                                                <Icon className="h-4 w-4" />
                                            </div>
                                            <div className="pt-1">
                                                <p className="text-sm font-semibold text-cyan-300">
                                                    {time}
                                                </p>
                                                <p className="text-gray-300">
                                                    {label}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="mb-10 text-center lg:text-left">
                            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                                Looking ahead
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white md:text-5xl">
                                Future Plans
                            </h2>
                            <p className="mt-4 leading-relaxed text-gray-400">
                                The list I keep coming back to — some near-term,
                                some further out.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-white/10 bg-[#12121a] p-6 sm:p-8">
                            <div className="mb-5 flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2 text-cyan-300">
                                    <BellDot className="h-5 w-5" />
                                    <p className="text-lg font-semibold">
                                        Future plan
                                    </p>
                                </div>
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-cyan-300">
                                    {futurePlans.length}
                                </div>
                            </div>

                            <div className="divide-y divide-white/10">
                                {futurePlans.map((plan) => (
                                    <div
                                        key={plan}
                                        className="flex items-center gap-3 py-3"
                                    >
                                        <span className="h-3 w-3 shrink-0 rounded-full border-2 border-cyan-400/60" />
                                        <p className="text-sm text-gray-300">
                                            {plan}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
