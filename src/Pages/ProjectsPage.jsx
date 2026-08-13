import { Header } from '../components/Header'
import PinCard from '../components/PinCard'

const projects = [
    {
        title: 'Portfolio Website',
        description:
            'This site — a fully custom React + Tailwind portfolio with animated hero sections, a music player, and interactive project cards, built and iterated on from scratch.',
        href: 'https://github.com/Abhid234',
        linkLabel: 'View GitHub',
    },
    {
        title: 'Fitness Score Predictor',
        description:
            'An ML web app that predicts a 0-100 fitness score from health metrics, built on XGBoost with SHAP explanations breaking down each prediction.',
        href: 'https://github.com/Abhid234/fitness-score-predictor',
        linkLabel: 'View GitHub',
    },
]

export function ProjectsPage() {
    return (
        <>
            <Header />
            <title>Projects | Abhid</title>
            <div className="bg-[#0A0A0F] min-h-screen px-6 py-12 sm:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                            What I've built
                        </p>
                        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white md:text-5xl">
                            Projects
                        </h1>
                        <p className="mt-4 leading-relaxed text-gray-400">
                            A small but growing collection — more on the way as
                            I keep building.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {projects.map((project) => (
                            <PinCard key={project.title} {...project} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}