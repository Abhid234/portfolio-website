import { Header } from '../components/Header'
import StarBorder from '../components/StarBorder'
import {
    ChevronRight,
    GraduationCap,
    Award,
    Code2,
    Braces,
    BrainCircuit,
    GitBranch,
} from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'
import { SiCodeforces, SiCodechef } from 'react-icons/si'
import abhiram from '../assets/Abhiram.jpg'

function EducationCard({ children }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#16161d] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-[0_0_40px_rgba(34,211,238,0.16)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.24),transparent_68%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative z-10">{children}</div>
        </div>
    )
}

export function HomePage() {
    return (
        <>
            <title>Abhid234</title>
            <Header />

            <div className="relative grid-background">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-12 lg:py-20 gap-12">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-124 lg:h-124 flex items-center justify-center shrink-0 order-1 lg:order-1">
                        <svg
                            className="absolute w-full h-full spin-varying"
                            viewBox="0 0 100 100"
                        >
                            <circle
                                cx="50"
                                cy="50"
                                r="48"
                                fill="none"
                                stroke="#22d3ee"
                                strokeWidth="1"
                                strokeDasharray="8 6 2 6 4 10"
                                strokeLinecap="round"
                            />
                        </svg>

                        <img
                            src={abhiram}
                            alt="Abhiram Darbha"
                            className="rounded-full w-[90%] h-[90%] object-cover relative z-10"
                        />
                    </div>

                    <div className="text-center lg:text-left order-2 lg:order-2">
                        <div className="text-gray-400 font-semibold text-lg sm:text-xl mb-4">
                            CS Student & Developer
                        </div>
                        <div>
                            <h1 className="text-white font-semibold text-4xl sm:text-6xl lg:text-7xl mb-3 leading-tight">
                                Hello I'm
                            </h1>
                            <div className="name-sweep">
                                <h1 className="font-semibold text-4xl sm:text-6xl lg:text-7xl mb-3 leading-tight">
                                    Abhiram
                                </h1>
                                <h1 className="font-semibold text-4xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
                                    Darbha
                                </h1>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-400 max-w-125 leading-relaxed text-base sm:text-lg">
                                Curious, consistent learner | Web Dev, DSA &
                                AIML | Hyderabad, India
                            </p>
                        </div>

                        <div className="flex items-center gap-6 flex-wrap justify-center lg:justify-start mt-8">
                            <a href="/Abhiram_Resume.pdf" target="_blank" rel="noopener noreferrer">
                                <button className="group h-12 sm:h-14 px-6 sm:px-8 border border-cyan-400 rounded-full flex items-center justify-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-widest hover:bg-cyan-400 hover:text-[#0A0A0F] transition-all duration-200 cursor-pointer">
                                    <span>View Resume</span>
                                    <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                                </button>
                            </a>

                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/Abhid234"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 border border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 hover:bg-cyan-400 hover:text-[#0A0A0F] transition-all duration-300"
                                >
                                    <FaGithub className="w-4.5 h-4.5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/abhiram-darbha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 border border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 hover:bg-cyan-400 hover:text-[#0A0A0F] transition-all duration-300"
                                >
                                    <FaLinkedin className="w-4 h-4" />
                                </a>
                                <a
                                    href="https://instagram.com/abhiram_darbha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 border border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 hover:bg-cyan-400 hover:text-[#0A0A0F] transition-all duration-300"
                                >
                                    <FaInstagram className="w-4.5 h-4.5" />
                                </a>
                                <a
                                    href="https://x.com/Abhiramd12"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 border border-cyan-400 rounded-full flex justify-center items-center text-cyan-400 hover:bg-cyan-400 hover:text-[#0A0A0F] transition-all duration-300"
                                >
                                    <FaXTwitter className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center lg:justify-between gap-6 py-8 border-t border-white/5">
                    <div className="flex items-center gap-3">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                            19
                        </span>
                        <p className="text-gray-400 text-sm sm:text-base">Age</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                            2nd
                        </span>
                        <p className="text-gray-400 text-sm sm:text-base">Year of study</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
                            1
                        </span>
                        <p className="text-gray-400 text-sm sm:text-base">Projects built</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-12 sm:py-20">
                <h2 className="mb-8 flex items-center justify-center gap-3 text-3xl sm:text-4xl font-bold text-white">
                    <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-cyan-400" />
                    Education
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <EducationCard>
                        <h4 className="text-white font-bold text-lg mb-1">
                            FIITJEE World School
                        </h4>
                        <div className="text-gray-400 text-sm mb-4">
                            Completed 2023
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-6">
                            <Award className="w-4 h-4" />
                            CPI: 9.8
                        </div>
                        <p className="text-gray-500 text-sm">Ameerpet</p>
                    </EducationCard>

                    <EducationCard>
                        <h4 className="text-white font-bold text-lg mb-1">
                            FIITJEE Junior College
                        </h4>
                        <div className="text-gray-400 text-sm mb-4">
                            2023 - 2025
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                            <Award className="w-4 h-4" />
                            974/1000
                        </div>
                        <p className="text-gray-500 text-sm mb-4">Kukatpally</p>
                        <p className="text-gray-500 text-sm">
                            JEE Mains Rank: 138xx
                        </p>
                    </EducationCard>

                    <EducationCard>
                        <h4 className="text-white font-bold text-lg mb-1">
                            B.Tech CSE, IIITDM Jabalpur
                        </h4>
                        <div className="text-gray-400 text-sm mb-4">
                            2025 - Present
                        </div>
                        <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                            <Award className="w-4 h-4" />
                            CPI: 8.2
                        </div>
                    </EducationCard>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="mb-8 text-center lg:text-left">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                        Current focus
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Things I'm learning right now
                    </h2>
                    <p className="text-gray-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                        I'm building a strong foundation across software
                        development, problem-solving, and machine learning — one
                        project at a time.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <StarBorder
                        as="div"
                        color="#16a34a"
                        delay="0s"
                        className="bg-[#16161d] border border-white/10"
                    >
                        <div className="flex h-full flex-col rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
                            <Code2 className="mb-6 h-8 w-8 text-cyan-400" />
                            <h3 className="mb-3 text-xl font-bold text-white">
                                Frontend Developer
                            </h3>
                            <p className="flex-1 text-sm leading-relaxed text-gray-400">
                                Creating responsive interfaces with React,
                                Tailwind CSS, HTML, and CSS while improving my
                                eye for polished UI.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full border border-cyan-400/25 px-2.5 py-1 text-[0.7rem] tracking-wide text-cyan-300">
                                    React
                                </span>
                                <span className="rounded-full border border-cyan-400/25 px-2.5 py-1 text-[0.7rem] tracking-wide text-cyan-300">
                                    Tailwind
                                </span>
                            </div>
                        </div>
                    </StarBorder>

                    <StarBorder
                        as="div"
                        color="#16a34a"
                        delay="-3s"
                        className="bg-[#16161d] border border-white/10"
                    >
                        <div className="flex h-full flex-col rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
                            <Braces className="mb-6 h-8 w-8 text-cyan-400" />
                            <h3 className="mb-3 text-xl font-bold text-white">
                                Problem Solver
                            </h3>
                            <p className="flex-1 text-sm leading-relaxed text-gray-400">
                                Practising data structures and algorithms in C++
                                and Python to become a more confident,
                                consistent problem solver.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full border border-cyan-400/25 px-2.5 py-1 text-[0.7rem] tracking-wide text-cyan-300">
                                    C++
                                </span>
                                <span className="rounded-full border border-cyan-400/25 px-2.5 py-1 text-[0.7rem] tracking-wide text-cyan-300">
                                    DSA
                                </span>
                            </div>
                            <div className="mt-4 flex gap-4 text-xs font-semibold">
                                <a
                                    href="https://codeforces.com/profile/Abhid234"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-cyan-300 transition hover:text-white"
                                >
                                    <SiCodeforces className="h-4 w-4" />{' '}
                                    Codeforces
                                </a>
                                <a
                                    href="https://www.codechef.com/users/abhid234"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-cyan-300 transition hover:text-white"
                                >
                                    <SiCodechef className="h-4 w-4" /> CodeChef
                                </a>
                            </div>
                        </div>
                    </StarBorder>

                    <StarBorder
                        as="div"
                        color="#16a34a"
                        delay="-6s"
                        className="bg-[#16161d] border border-white/10"
                    >
                        <div className="flex h-full flex-col rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
                            <BrainCircuit className="mb-6 h-8 w-8 text-cyan-400" />
                            <h3 className="mb-3 text-xl font-bold text-white">
                                ML Explorer
                            </h3>
                            <p className="flex-1 text-sm leading-relaxed text-gray-400">
                                Learning the fundamentals of machine learning
                                and moving into PyTorch after covering the core
                                concepts.
                            </p>
                        </div>
                    </StarBorder>

                    <StarBorder
                        as="div"
                        color="#16a34a"
                        delay="-9s"
                        className="bg-[#16161d] border border-white/10"
                    >
                        <div className="flex h-full flex-col rounded-2xl p-6 transition duration-200 hover:-translate-y-1">
                            <GitBranch className="mb-6 h-8 w-8 text-cyan-400" />
                            <h3 className="mb-3 text-xl font-bold text-white">
                                Building & Shipping
                            </h3>
                            <p className="flex-1 text-sm leading-relaxed text-gray-400">
                                Using Git to manage my work, learn in public,
                                and turn small ideas into complete projects that
                                people can try.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full border border-cyan-400/25 px-2.5 py-1 text-[0.7rem] tracking-wide text-cyan-300">
                                    Git
                                </span>
                                <span className="rounded-full border border-cyan-400/25 px-2.5 py-1 text-[0.7rem] tracking-wide text-cyan-300">
                                    Projects
                                </span>
                            </div>
                        </div>
                    </StarBorder>
                </div>
            </div>
        </>
    )
}