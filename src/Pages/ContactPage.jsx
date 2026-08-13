import { useState } from 'react'
import { Header } from '../components/Header'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6'

export function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: import.meta.env.VITE_WEB3FORMS_KEY,
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                }),
            })

            const result = await response.json()

            if (result.success) {
                setIsSubmitted(true)
                setTimeout(() => setIsSubmitted(false), 5000)
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                })
            } else {
                console.error('Form submission error:', result)
            }
        } catch (error) {
            console.error('Network error:', error)
        }
    }

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <>
            <title>Abhiram-Contact</title>

            <div className="relative min-h-screen bg-[#0A0A0F]">
                <Header />

                <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:py-20">
                    <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
                        <div className="flex flex-col justify-between lg:col-span-5">
                            <div>
                                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                                    Get in Touch
                                </p>
                                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                                    Wanna contact me?
                                </h1>
                                <p className="mt-6 leading-relaxed text-gray-400">
                                    Have a question, an idea, or just want to
                                    say hi? Feel free to reach out. I'm always
                                    open to discussing new opportunities or
                                    collaborating.
                                </p>

                                <div className="mt-10 space-y-6">
                                    <a
                                        href="mailto:darbhaabhiram@gmail.com"
                                        className="group flex items-center gap-4 text-gray-300 transition hover:text-cyan-400"
                                    >
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#12121a] text-cyan-400 transition group-hover:border-cyan-400/50">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Email Me
                                            </p>
                                            <p className="text-base font-medium">
                                                darbhaabhiram@gmail.com
                                            </p>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-4 text-gray-300">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#12121a] text-cyan-400">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                                Location
                                            </p>
                                            <p className="text-base font-medium">
                                                Hyderabad, Telangana
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="mt-10 lg:mt-0">
                                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
                                    Connect on Socials
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://github.com/Abhid234"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#12121a] text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                                    >
                                        <FaGithub className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/abhiram-darbha"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#12121a] text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                                    >
                                        <FaLinkedin className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="https://instagram.com/abhiram_darbha"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#12121a] text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                                    >
                                        <FaInstagram className="h-4 w-4" />
                                    </a>
                                    <a
                                        href="https://x.com/Abhiramd12"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#12121a] text-gray-400 transition hover:border-cyan-400 hover:text-cyan-400"
                                    >
                                        <FaXTwitter className="h-4 w-4" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="relative rounded-3xl border border-white/10 bg-[#12121a] p-6 sm:p-8 md:p-10 shadow-2xl">
                                {isSubmitted ? (
                                    <div className="flex min-h-75 flex-col items-center justify-center text-center">
                                        <CheckCircle2 className="h-12 sm:h-16 w-12 sm:w-16 text-cyan-400 mb-4 animate-bounce" />
                                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                                            Message Sent!
                                        </h3>
                                        <p className="mt-2 text-gray-400 max-w-sm">
                                            Thanks for reaching out! I will get
                                            back to you as soon as possible.
                                        </p>
                                    </div>
                                ) : (
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-6"
                                    >
                                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                                    Your Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="John Doe"
                                                    className="w-full rounded-xl border border-white/10 bg-[#0A0A0F] px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                                    Your Email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="john@example.com"
                                                    className="w-full rounded-xl border border-white/10 bg-[#0A0A0F] px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                name="subject"
                                                required
                                                value={formData.subject}
                                                onChange={handleChange}
                                                placeholder="Inquiry / Doubt"
                                                className="w-full rounded-xl border border-white/10 bg-[#0A0A0F] px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                name="message"
                                                rows="5"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Tell me more about your doubt or inquiry..."
                                                className="w-full rounded-xl border border-white/10 bg-[#0A0A0F] px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition resize-none"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="group flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-4 font-semibold text-[#0A0A0F] transition duration-200 hover:bg-cyan-300 active:scale-[0.98] cursor-pointer"
                                        >
                                            <span>Send Message</span>
                                            <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
