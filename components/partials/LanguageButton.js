export default function LanguageButton({ language, onClickLanguage }) {
  let lang;

  if (language === 'id') {
    lang = 'en';
  } else {
    lang = 'id';
  }

  return (
    <>
      <input type="button" id="toggleLanguage" onClick={() => onClickLanguage(lang)} />
      <label htmlFor="toggleLanguage">
        <div className="cursor-pointer ml-1 px-[2px] uppercase text-xs border border-primary rounded text-primary hover:bg-primary hover:text-light">
          {lang}
        </div>
      </label>
    </>
  );
}
