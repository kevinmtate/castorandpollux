import './XButton.scss';

interface XButtonProps {
	mobileMenu: boolean;
	handleMobileMenuToggleClick: (event: React.MouseEvent) => void;
}

const XButton: React.FC<XButtonProps> = ({ mobileMenu, handleMobileMenuToggleClick }) => {
	return (
		<button className="x-button" onClick={handleMobileMenuToggleClick}>
			<div className={`x-button__middle-line ${mobileMenu ? "animate-top" : "reverse-top"}`}></div>
			<div className={`x-button__first-line ${mobileMenu ? "animate-middle" : "reverse-middle"}`}></div>
			<div className={`x-button__last-line ${mobileMenu ? "animate-bottom" : "reverse-bottom"}`}></div>
		</button>
	)
}

export default XButton
