import { Link } from 'react-router'
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const socials = [
    { href: 'https://github.com/Abhid234', icon: FaGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/abhiram-darbha', icon: FaLinkedin, label: 'LinkedIn' },
    { href: 'https://instagram.com/abhiram_darbha', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://x.com/Abhiramd12', icon: FaXTwitter, label: 'X' },
]

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t border-white/10 bg-[#0A0A0F]">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
                    <div className="text-center sm:text-left">
                        <Link to="/" className="inline-flex items-center">
                            <h2 className="text-2xl font-semibold text-white">
                                Abhid234<span className="text-cyan-400">.</span>
                            </h2>
                        </Link>
                        <p className="mt-3 max-w-xs text-sm leading-relaxed text-gray-500">
                            CS student building things, one project at a time.
                        </p>
                    </div>

                    <div className="flex gap-4">
                        {socials.map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <Icon className="h-4 w-4" />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500 sm:flex-row">
                    <p>&copy; {year} Abhiram Darbha. All rights reserved.</p>
                    <p>Built with React &amp; Tailwind CSS</p>
                </div>
            </div>
        </footer>
    )
}