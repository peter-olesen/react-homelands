import { Employees } from "../components/Employees/Employees";
import { Reviews } from "../components/Reviews/Reviews";
import { Section } from "../components/Section";
import { EstateCard } from "../components/EstateCard/EstateCard";
import { EnergyLabel } from "../components/EnergyLabel/EnergyLabel";
import { useGet } from "../hooks/useGet";
import { formatPriceDecimal } from "../helpers/priceFormatter";
import s from "./styles/Home.module.scss";

export const Home = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/homes"
  );

  return (
    <>
      <Section>
        <div className={s.CardGrid}>
          {data?.items &&
            [...data.items] // Makes a copy of the original array to sort random
              .sort(() => Math.random() - 0.5) //
              .slice(0, 3)
              .map((item) => {
                return (
                  <EstateCard
                    key={item.id}
                    path={item.id}
                    imgSrc={item.images[0].filename.medium}
                    address={item.address}
                    zipCity={`${item.zipcode} ${item.city}`}
                    type={item.type}
                    rating={
                      <EnergyLabel energyLabel={item.energy_label_name} />
                    }
                    sqm={item.floor_space}
                    rooms={item.num_rooms}
                    price={formatPriceDecimal(item.price)}
                  />
                );
              })}
        </div>
      </Section>
      <Reviews />
      <Section>
        <Employees />
      </Section>
    </>
  );
};
