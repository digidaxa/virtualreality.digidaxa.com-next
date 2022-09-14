import { useContext } from 'react';
import { AppContext } from '../../context/app-context';

export default function LanguageButton() {
  const context = useContext(AppContext);

  let lang;

  if (context.language === 'id') {
    lang = 'en';
  } else {
    lang = 'id';
  }

  return (
    <>
      <input type="button" id="toggleLanguage" onClick={() => context.onClickLanguageHandler(lang)} />
      <label htmlFor="toggleLanguage">
        <div className="cursor-pointer ml-1 px-[2px] uppercase text-xs border border-primary rounded text-primary hover:bg-primary hover:text-light">
          {context.language}
        </div>
      </label>
    </>
  );
}
