export default function PorfolioSliderButton({ onClickSlider }) {
  return (
    <button
      className="justify-center items-center bottom-0 p-4 h-[48px] w-[48px] bg-dark/50 rounded-full shadow-lg shadow-dark/50 absolute top-1/2 right-0 text-4xl text-dark z-10 cursor-pointer select-none transition-colors duration-100 hover:bg-dark md:h-[72px] md:w-[72px]"
      onClick={() => onClickSlider()}
      type="button"
    >
      <span className="block -ml-1 w-5 h-5 rotate-45 border-t-2 border-r-2 md:h-7 md:w-7 md:-ml-0" />
    </button>
  );
}
