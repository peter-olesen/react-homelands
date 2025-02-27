import { useParams } from "react-router";
import { useEffect } from "react";
import { useGet } from "../hooks/useGet";
import { Section } from "../components/Section";
import { formatPrice } from "../helpers/priceFormatter";
import s from "./styles/SingleHome.module.scss";

import camera from "../assets/img/svg/camera.svg";
import floorplan from "../assets/img/svg/floorplan.svg";
import location from "../assets/img/svg/location.svg";
import favorite from "../assets/img/svg/favorite.svg";

export const SingleHome = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useGet(
    `https://api.mediehuset.net/homelands/homes/${id}`
  );

  const home = data?.item;

  useEffect(() => {
    document.title = `${home?.address}, ${home?.zipcode} ${home?.city} - HomeLands`;
  }, [data]);

  const date = home?.date_stamp * 1000; // Converts Unix timestamp from API to milliseconds
  const currentDate = Date.now(); // Unix timestamp for current date
  const differenceTime = currentDate - date; // Calculates the difference
  // Converts the time difference from milliseconds to days and round to the nearest whole number
  const layTime = Math.round(differenceTime / (1000 * 3600 * 24));

  return (
    <>
      <div
        className={s.HeaderImg}
        style={{ backgroundImage: `url(${home?.images[0]?.filename?.large})` }}
      ></div>
      <Section>
        <div className={s.EstateInfo}>
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
          <div className={s.HomeIcons}>
            <img src={camera} alt="" />
            <img src={floorplan} alt="" />
            <img src={location} alt="" />
            <img src={favorite} alt="" />
          </div>
          <div>
            <p>Kontantpris {formatPrice(home?.price)}</p>
            <p>Udbetaling {formatPrice(home?.payout)}</p>
            <p>Ejerudgift per måned {formatPrice(home?.cost)}</p>
          </div>
          <div className={s.InfoGrid}>
            <p>Sagsnr.</p>
            <p className="bold">{home?.id}</p>
            <p>Boligareal</p>
            <p className="bold">{home?.floor_space} m&sup2;</p>
            <p>Grundareal</p>
            <p className="bold">{home?.ground_space} m&sup2;</p>
            <p>Antal rum</p>
            <p className="bold">{home?.num_rooms}</p>
            <p>Antal plan</p>
            <p className="bold">{home?.num_floors}</p>
          </div>
          <div className={s.InfoGrid}>
            <p>Kælder</p>
            <p className="bold">{home?.basement_space} m&sup2;</p>
            <p>Byggeår</p>
            <p className="bold">{home?.year_construction}</p>
            <p>Ombygget</p>
            <p className="bold">{home?.year_rebuilt}</p>
            <p>Energimærke</p>
            <p className="bold">{home?.energy_label_name}</p>
            <p>Liggetid</p>
            <p className="bold">{layTime} dage</p>
          </div>
          <div className={s.InfoGrid}>
            <p>Kontantpris</p>
            <p className="bold">{formatPrice(home?.price)}</p>
            <p>Udbetaling</p>
            <p className="bold">{formatPrice(home?.payout)}</p>
            <p>Brutto ex. ejerudgift</p>
            <p className="bold">{formatPrice(home?.gross)}</p>
            <p>Netto ex. ejerudgift</p>
            <p className="bold">{formatPrice(home?.net)}</p>
            <p>Ejerudgift</p>
            <p className="bold">{formatPrice(home?.cost)}</p>
          </div>
        </div>
        <div className={s.GridBox}>
          <p>{home?.description}</p>

          <div className={s.Agent}>
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
    </>
  );
};
