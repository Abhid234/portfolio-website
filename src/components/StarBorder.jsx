import './StarBorder.css'

const StarBorder = ({
    as: Component = 'button',
    className = '',
    color = '#22d3ee',
    speed = '12s',
    delay = '0s',
    thickness = 2,
    children,
    ...rest
}) => {
    return (
        <Component
            className={`star-border-container ${className}`}
            style={{
                padding: `${thickness}px`,
                '--star-color': color,
                '--star-speed': speed,
                '--star-delay': delay,
                ...rest.style,
            }}
            {...rest}
        >
            <div className="rotating-border"></div>
            <div className="inner-content">{children}</div>
        </Component>
    )
}

export default StarBorder
