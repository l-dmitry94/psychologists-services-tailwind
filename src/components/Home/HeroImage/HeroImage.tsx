import { hero_1x, hero_2x } from 'assets/images/hero';
import HeroIcon, { Icon } from './HeroIcon';
import { icons } from 'assets/icons';

const HeroImage = () => {
    return (
        <section className="relative">
            <img
                src={hero_1x}
                srcSet={`${hero_1x} 1x, ${hero_2x} 2x`}
                alt="Woman in glasses"
                className="rounded-[10px]"
            />

            <HeroIcon icon={Icon.Question} />
            <HeroIcon icon={Icon.Users} />

            <div className="-left-24 bottom-[75px] flex items-center justify-center gap-4 rounded-[20px] bg-primary p-5 max-xl:mt-5 xl:absolute xl:p-8">
                <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[13px] bg-gray-100">
                    <svg className="h-[30px] w-[30px] fill-primary">
                        <use href={`${icons}#icon-check`}></use>
                    </svg>
                </div>
                <div>
                    <p className="mb-2 text-xs text-gray-100/50 xl:text-sm">
                        Experienced psychologists
                    </p>
                    <span className="text-xl font-bold text-gray-100 xl:text-2xl">15,000</span>
                </div>
            </div>
        </section>
    );
};

export default HeroImage;
