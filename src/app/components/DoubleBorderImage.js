/**
 * Image component with double border.
 *
 * @param {string} src Image source URL.
 * @param {string} alt Alternative image description.
 * @returns {JSX.Element} Image component with double border.
 */
export default function DoubleBorderImage({ src, alt }) {
    return (
        <div className="double-border-image">
            <img src={src} alt={alt} />
            <div className="border one">
                <div className="border__child"></div>
            </div>
            <div className="border two">
                <div className="border__child"></div>
            </div>
        </div>
    );
}
