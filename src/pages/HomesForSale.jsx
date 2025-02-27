import { Section } from "../components/Section";
import { EstateCard } from "../components/EstateCard/EstateCard";
import { EnergyLabel } from "../components/EnergyLabel/EnergyLabel";
import { useGet } from "../hooks/useGet";
import { formatPriceDecimal } from "../helpers/priceFormatter";
import s from "./styles/HomesForSale.module.scss";

export const HomesForSale = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/homes"
  );

  return (
    <Section>
      <div className={s.CardGrid}>
        {data?.items.map((item) => {
          return (
            <EstateCard
              key={item.id}
              path={item.id}
              imgSrc={item.images[0].filename.medium}
              address={item.address}
              zipCity={`${item.zipcode} ${item.city}`}
              type={item.type}
              rating={<EnergyLabel energyLabel={item.energy_label_name} />}
              sqm={item.floor_space}
              rooms={item.num_rooms}
              price={formatPriceDecimal(item.price)}
            />
          );
        })}
      </div>
    </Section>
  );
};
