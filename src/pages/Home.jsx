import { Employees } from "../components/Employees/Employees";
import { Reviews } from "../components/Reviews/Reviews";
import { Section } from "../components/Section";
import { EstateCard } from "../components/EstateCard/EstateCard";
import { EnergyLabel } from "../components/EnergyLabel/EnergyLabel";
import { useGet } from "../hooks/useGet";
import { Grid } from "../components/Grid";

export const Home = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/homes"
  );

  return (
    <>
      <Section>
        <Grid col={3} fr={1} gap="2rem">
          {data?.items &&
            [...data.items]
              .sort(() => Math.random() - 0.5)
              .slice(0, 3)
              .map((item) => {
                const priceToNumber = parseFloat(item.price);
                const formattedPrice = new Intl.NumberFormat("da-DK", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }).format(priceToNumber);

                return (
                  <EstateCard
                    key={item.id}
                    imgSrc={item.images[0].filename.medium}
                    address={item.address}
                    zipCity={`${item.zipcode} ${item.city}`}
                    type={item.type}
                    rating={
                      <EnergyLabel energyLabel={item.energy_label_name} />
                    }
                    sqm={item.floor_space}
                    rooms={item.num_rooms}
                    price={formattedPrice}
                  />
                );
              })}
        </Grid>
      </Section>
      <Reviews />
      <Section>
        <Employees />
      </Section>
    </>
  );
};
