import { useParams } from "react-router";
import { useGet } from "../hooks/useGet";
import { Grid } from "../components/Grid";
import s from "./styles/SingleHome.module.scss";
import { Section } from "../components/Section";
import { formatPrice } from "../helpers/priceFormatter";

export const SingleHome = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/homelands/homes/${id}`
  );

  const home = data?.item;

  return (
    <Section>
      <Grid col={3} fr={1} gap="2rem">
        <div>
          <p>{home?.address}</p>
          <p>
            {home?.zipcode} {home?.city}
          </p>
          <p>
            {home?.type} | {home?.floor_space} m&sup2; | {home?.num_rooms} vær
          </p>
          <p>Set {home?.num_clicks} gange</p>
        </div>
        <div>
          <p>Galleri</p>
          <p>Floorplan</p>
          <p>Location</p>
          <p>Favorite</p>
        </div>
        <div>
          <p>Kontantpris {formatPrice(home?.price)}</p>
          <p>Udbetaling {formatPrice(home?.payout)}</p>
          <p>Ejerudgift per måned {formatPrice(home?.cost)}</p>
        </div>
        <div>
          <p>Sagsnr. {home?.id}</p>
          <p>Boligareal {home?.floor_space} m&sup2;</p>
          <p>Grundareal {home?.ground_space} m&sup2;</p>
          <p>Antal rum {home?.num_rooms}</p>
          <p>Antal plan {home?.num_floors}</p>
        </div>
        <div>
          <p>Kælder {home?.basement_space}</p>
          <p>Byggeår {home?.year_construction}</p>
          <p>Ombygget {home?.year_rebuilt}</p>
          <p>Energimærke {home?.energy_label_name}</p>
          <p>Liggetid {home?.date_friendly}</p>
        </div>
        <div>
          <p>Kontantpris {formatPrice(home?.price)}</p>
          <p>Udbetaling {formatPrice(home?.payout)}</p>
          <p>Brutto ex. ejerudgift {formatPrice(home?.gross)}</p>
          <p>Netto ex. ejerudgift {formatPrice(home?.net)}</p>
          <p>Ejerudgift {formatPrice(home?.cost)}</p>
        </div>
      </Grid>
      <div className={s.GridBox}>
        <p>{home?.description}</p>

        <div>
          <h2>Kontakt</h2>
          <img
            src={home?.staff.image}
            alt={`${home?.staff.firstname} ${home?.staff.lastname}`}
          />
          <p>
            {home?.staff.firstname} {home?.staff.lastname}
          </p>
          <p>{home?.staff.position}</p>
          <p>Mobil: {home?.staff.phone}</p>
          <p>Email: {home?.staff.email}</p>
        </div>
      </div>
    </Section>
  );
};
