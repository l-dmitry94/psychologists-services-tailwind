import { Link } from 'react-router-dom';

import { icons } from 'assets/icons';

const HeroInfo = () => {
    return (
        <section className="max-w-[595px] max-md:text-center md:max-w-[622px] xl:max-w-[595px]">
            <h1 className="mb-5 text-4xl font-semibold leading-none tracking-tight md:text-[56px] xl:text-[80px]">
                The road to the <span className="italic text-primary">depths</span> of the human
                soul
            </h1>
            <p className="my-0 mb-10 text-sm leading-snug tracking-tight max-md:mx-auto md:text-base xl:max-w-[510px] xl:text-lg">
                We help you to reveal your potential, overcome challenges and find a guide in your
                own life with the help of our experienced psychologists.
            </p>
            <Link
                to="/psychologists"
                className="group inline-flex items-center gap-[14px] rounded-[30px] bg-primary px-8 py-4 transition-all duration-300 ease-linear hover:bg-primary-dark md:px-12 md:py-5 xl:gap-[18px]"
            >
                <span className="text-xl font-medium leading-tight -tracking-wide text-gray-100 max-md:text-sm">
                    Get started
                </span>
                <svg className="h-[14px] w-[14px] fill-gray-100 transition-transform ease-linear group-hover:rotate-[53deg] md:h-[18px] md:w-[18px]">
                    <use href={`${icons}#icon-arrow`}></use>
                </svg>
            </Link>
        </section>
    );
};

export default HeroInfo;
