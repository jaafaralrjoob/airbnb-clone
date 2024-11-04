import { getLive } from "../utils/api";
import MainHeading from "./MainHeading";
import { type LiveData, type LiveItem } from "../types/app";
import LiveCard from "./LiveCard";

async function Live() {
  const liveData: LiveData = await getLive();
  return (
    <section className="pt-6">
      <div className="container">
        <MainHeading title="Live anywhere" />
        <div className="flex space-x-3 overflow-scroll no-scrollbar p-3 -ml-3">
          {liveData?.map((item: LiveItem) => (
            <LiveCard key={item.img} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Live;
