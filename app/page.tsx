import Banner from "./_components/Banner";
import Explore from "./_components/Explore";
import Header from "./_components/header/Header";
import Live from "./_components/Live";
import TheGreatestOutdoors from "./_components/TheGreatestOutdoors";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Explore />
        <Live />
        <TheGreatestOutdoors
          img="https://shorttermrentalz.com/wp-content/uploads/2021/06/Airbnb-Live-Anywhere.jpg"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          linkText="Get inspired"
        />
      </main>
    </>
  );
}
