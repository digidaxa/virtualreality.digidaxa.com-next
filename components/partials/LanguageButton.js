export default function LanguageButton({ language, onClickLanguage }) {
  return (
    <>
      <input type="checkbox" id="toggleLanguage" className="hidden" onClick={() => onClickLanguage()} defaultChecked={language} />
      <label htmlFor="toggleLanguage">
        <div className="cursor-pointer ml-1 px-[2px] uppercase text-xs border border-primary rounded text-primary hover:bg-primary hover:text-light">
          {language}
        </div>
      </label>
    </>
  );
}
