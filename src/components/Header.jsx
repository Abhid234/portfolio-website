import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router'
import { Menu, X } from 'lucide-react'

const navigation = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
]

const floatingNavigation = navigation.filter(({ to }) => to !== '/contact')

export function Header() {
    const headerRef = useRef(null)
    const [showFloatingNav, setShowFloatingNav] = useState(false)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    useEffect(() => {
        const updateFloatingNav = () => {
            const headerBottom = headerRef.current?.getBoundingClientRect().bottom ?? 0
            setShowFloatingNav(headerBottom < 0)
        }

        updateFloatingNav()
        window.addEventListener('scroll', updateFloatingNav, { passive: true })

        return () => window.removeEventListener('scroll', updateFloatingNav)
    }, [])

    const navLinkClasses = ({ isActive }) =>
        `font-medium transition-colors duration-300 ease-in-out ${
            isActive
                ? 'border-b-2 border-cyan-400 text-cyan-400'
                : 'text-white hover:text-cyan-400'
        }`

    const floatingNavLinkClasses = ({ isActive }) =>
        `rounded-lg px-3 py-2 text-xs font-semibold transition duration-200 sm:px-4 sm:text-sm ${
            isActive
                ? 'bg-cyan-400 text-[#0A0A0F] shadow-[0_0_18px_rgba(34,211,238,0.25)]'
                : 'text-gray-300 hover:bg-white/10 hover:text-white'
        }`

    return (
        <>
            <header ref={headerRef} className="py-6">
                <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
                    <Link to="/" className="flex items-center">
                        <h1 className="text-3xl font-semibold text-white">
                            Abhid234<span className="text-cyan-400">.</span>
                        </h1>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-8" aria-label="Primary navigation">
                        {navigation.map(({ to, label, end }) => (
                            <NavLink key={to} to={to} end={end} className={navLinkClasses}>
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    <button
                        className="lg:hidden p-2 text-white hover:text-cyan-400 transition-colors"
                        aria-label={showMobileMenu ? 'Close menu' : 'Open menu'}
                        aria-expanded={showMobileMenu}
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {showMobileMenu && (
                    <div className="lg:hidden py-4 border-t border-white/10 animate-slide-down">
                        <nav className="flex flex-col gap-2 px-6" aria-label="Mobile navigation">
                            {navigation.map(({ to, label, end }) => (
                                <NavLink
                                    key={to}
                                    to={to}
                                    end={end}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-lg text-base font-medium transition-colors ${navLinkClasses({ isActive })}`
                                    }
                                    onClick={() => setShowMobileMenu(false)}
                                >
                                    {label}
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                )}
            </header>

            <nav
                aria-label="Floating navigation"
                className={`fixed bottom-5 left-1/2 z-50 flex w-max max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center gap-1 rounded-2xl border border-white/25 bg-white/9 p-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.45),inset_0_1px_1px_rgba(255,255,255,0.2)] backdrop-blur-2xl backdrop-saturate-200 transition-all duration-500 ease-out ${
                    showFloatingNav
                        ? 'translate-y-0 opacity-100'
                        : 'pointer-events-none translate-y-24 opacity-0'
                }`}
            >
                {floatingNavigation.map(({ to, label, end }) => (
                    <NavLink key={to} to={to} end={end} className={floatingNavLinkClasses}>
                        {label}
                    </NavLink>
                ))}
            </nav>
        </>
    )
}
