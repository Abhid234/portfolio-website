import './PinCard.css'

export default function PinCard({ title, description, href, linkLabel = 'View Project' }) {
    return (
        <div
            className="pin-card-wrapper"
        >
            <div className="pin-card-content">
                <h3 className="pin-card-title">{title}</h3>
                <p className="pin-card-description">{description}</p>

                <div className="pin-card-footer">
                    <div className="pin-card-dots">
                        <span />
                        <span />
                        <span />
                    </div>
                    {href && (
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="pin-card-link"
                        >
                            {linkLabel}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="14"
                                height="14"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M7 17 17 7" />
                                <path d="M7 7h10v10" />
                            </svg>
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}