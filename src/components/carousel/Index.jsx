import EmblaCarousel from "./EmblaCarousel";

const OPTIONS = { containScroll: "trimSnaps" };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Index = () => {
  return (
    <div>
      <section className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </div>
  );
};

export default Index;
