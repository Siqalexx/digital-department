function Button({ onClickl, text, ...props }) {
	return (
		<button
			onClick={onClickl}
			className={`button ${props.className ? props.className : ''} `}
		>
			{text}
		</button>
	);
}

export default Button;
