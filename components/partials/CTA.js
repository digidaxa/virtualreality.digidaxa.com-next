import React from 'react';

export default function CTA({ cta }) {
  return (
    <section id="cta" className="pt-32 pb-16 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="mx-auto text-center py-14 px-10 bg-secondary/30 lg:p-16">
            <h2 className="font-semibold text-dark text-2xl sm:text-3xl xl:text-4xl dark:text-light">{cta[0].title}</h2>
            <p className="mt-6 mb-8 text-lg lg:text-2xl lg:leading-relaxed xl:mb-16 dark:text-light">{cta[0].text}</p>
            <a href="https://wa.me/+6285172243818" className="text-base font-semibold bg-primary text-light rounded-full px-5 py-4 hover:shadow-xl hover:bg-primary/80 transition duration-75 ease-out lg:text-lg lg:px-11 lg:py-5">{cta[0].button}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
