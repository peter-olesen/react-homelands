import { data } from "react-router";
import { useGet } from "../hooks/useGet";
import { Section } from "../components/Section";
import s from "./styles/Dashboard.module.scss";

export const Dashboard = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/reviews"
  );

  const deleteReview = () => {};

  return (
    <Section>
      <h2>Administration</h2>
      <p>Du er logget ind som admin</p>

      <div className={s.Grid}>
        <p className="bold">Dine anmeldelser</p>
        <p className="bold">Dato</p>
        <p className="bold">Handling</p>
      </div>
      {data?.items.map((item) => (
        <div key={item.id} className={s.Grid}>
          <p>{item.title}</p>
          <p>{item.created_friendly}</p>
          <p className={s.Delete}>Slet</p>
        </div>
      ))}
    </Section>
  );
};
