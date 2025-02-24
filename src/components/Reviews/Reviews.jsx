import { useGet } from "../../hooks/useGet";
import s from "./Reviews.module.scss";

export const Reviews = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/staff"
  );
  return (
    <>
      <h3>Det siger kunderne:</h3>
      <div className={s.Review}>
        {data?.items.map((item) => {
          {
            item[625]?.title;
          }
        })}
      </div>
      <p>Skriv en anmeldelse</p>
    </>
  );
};
