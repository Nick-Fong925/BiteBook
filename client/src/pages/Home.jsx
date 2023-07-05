import Header from "../components/header";
import Hero from "../components/hero";
import Listing from "../components/listing";
import heroimg from "../assests/Heroimg.jpeg";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <p className="py-10 px-6 font-bold text-4xl">Featured</p>
      <div className="flex">
        <Listing imageSrc={heroimg} description="Title" />
        <Listing imageSrc={heroimg} description="Title" />
        <Listing imageSrc={heroimg} description="Title" />
        <Listing imageSrc={heroimg} description="Title" />
      </div>

      <p className="py-20 px-6 font-bold text-4xl">
        Whats On Your Friends Book
      </p>
      <div className="flex">
        <Listing imageSrc={heroimg} description="Title" />
        <Listing imageSrc={heroimg} description="Title" />
        <Listing imageSrc={heroimg} description="Title" />
        <Listing imageSrc={heroimg} description="Title" />
      </div>
    </>
  );
};

export default Home;
