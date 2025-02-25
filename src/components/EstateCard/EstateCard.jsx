import { NavLink } from "react-router";
import s from "./EstateCard.module.scss";

export const EstateCard = ({
  path,
  imgSrc,
  imgAlt,
  address,
  zipCity,
  type,
  rating,
  rooms,
  sqm,
  price,
}) => {
  return (
    <NavLink to={`/home/${path}`}>
      <div className={s.EstateCard}>
        <div className={s.InnerContainer}>
          <img src={imgSrc} alt={imgAlt} />
          <p>{address}</p>
          <p>{zipCity}</p>
          <p>{type}</p>
          <div className={s.InfoGrid}>
            <span className={s.EnergyLabel}>{rating}</span>
            <p>
              {rooms} værelser, {sqm} m&sup2;
            </p>
            <p className="bold">{price} DKK</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};
