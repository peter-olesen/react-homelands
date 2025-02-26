import { useParams } from "react-router";
import { useGet } from "../hooks/useGet";
import { Section } from "../components/Section";
import { EstateCard } from "../components/EstateCard/EstateCard";
import { EnergyLabel } from "../components/EnergyLabel/EnergyLabel";
import { Grid } from "../components/Grid";
import { formatPriceDecimal } from "../helpers/priceFormatter";
import { useEffect } from "react";

export const Search = () => {
  const { keyword } = useParams();

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/homelands/search/${keyword}`
  );

  useEffect(() => {
    document.title = `Search results for "${keyword}" - HomeLands`;
  }, [data]);

  return (
    <Section>
      <Grid col={3} fr={1} gap="2rem">
        {data?.items?.length > 0 ? (
          data.items.map((item) => (
            <EstateCard
              key={item.id}
              path={item.id}
              imgSrc={item.images[0]?.filename?.medium}
              address={item.address}
              zipCity={`${item.zipcode} ${item.city}`}
              type={item.type}
              rating={<EnergyLabel energyLabel={item.energy_label_name} />}
              sqm={item.floor_space}
              rooms={item.num_rooms}
              price={formatPriceDecimal(item.price)}
            />
          ))
        ) : (
          <p>
            No search results found for: <span className="bold">{keyword}</span>
          </p>
        )}
      </Grid>
    </Section>
  );
};
