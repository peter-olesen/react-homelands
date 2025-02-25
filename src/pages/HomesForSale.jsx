import { Section } from "../components/Section";
import { EstateCard } from "../components/EstateCard/EstateCard";
import { EnergyLabel } from "../components/EnergyLabel/EnergyLabel";
import { useGet } from "../hooks/useGet";
import { Grid } from "../components/Grid";
import { formatPriceDecimal } from "../helpers/priceFormatter";

export const HomesForSale = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/homes"
  );
  return (
    <Section>
      <Grid col={3} fr={1} gap="2rem">
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
      </Grid>
    </Section>
  );
};
