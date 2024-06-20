import Container from 'components/Container';
import HeroInfo from './HeroInfo';
import HeroImage from './HeroImage';

const Home = () => {
    return (
        <section className="relative overflow-hidden pb-24 pt-20">
            <Container>
                <div className="flex flex-col items-center justify-between max-xl:gap-14 md:flex-row">
                    <HeroInfo />
                    <HeroImage />
                </div>

                <div className="absolute -bottom-[237px] -right-[136px] -z-10 h-[469px] w-[469px] rounded-full bg-primary blur-[1000px]"></div>
            </Container>
        </section>
    );
};

export default Home;
