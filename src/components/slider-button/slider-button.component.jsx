import "./slider-button.scss";

export default function SliderButton({ open, text, name }) {
  return (
    <button type='button' aria-label={text} onClick={open} className={name}>
      {text}
    </button>
  );
}
