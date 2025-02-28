import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/userContext";
import { useGet } from "../hooks/useGet";
import { Section } from "../components/Section";
import s from "./styles/Dashboard.module.scss";

export const Dashboard = () => {
  const { userData } = useContext(UserContext);
  const [reviews, setReviews] = useState();
  const [deleteMessage, setDeleteMessage] = useState("");

  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/reviews"
  );

  useEffect(() => {
    if (data) {
      setReviews(data?.items);
    }
  }, [data]);

  const deleteReview = (id) => {
    const options = {
      method: "DELETE",
      redirect: "follow",

      headers: {
        Authorization: `Bearer ${userData.access_token}`,
      },
    };

    fetch(`https://api.mediehuset.net/homelands/reviews/${id}`, options)
      .then((res) => res.json())
      .then((result) => {
        if (result?.message == "Record deleted") {
          let allReviews = [...reviews];
          let filteredReviews = allReviews.filter((item) => item?.id !== id);
          setReviews(filteredReviews);
          setDeleteMessage(`Anmeldelsen med id ${id} er blevet slettet.`);
        }
      })
      .catch((err) => {
        console.error("Error while trying to delete review:", err);
      });
  };

  return (
    <Section>
      <h2>Administration</h2>
      <p>Du er logget ind som admin</p>

      <div className={s.Grid}>
        <p className={s.Delete}>{deleteMessage}</p>
        <p className="bold">Dine anmeldelser</p>
        <p className="bold">Dato</p>
        <p className="bold">Handling</p>
      </div>
      {reviews?.map((item) => (
        <div key={item.id} className={s.Grid}>
          <p>{item.title}</p>
          <p>{item.created_friendly}</p>
          <p className={s.Delete} onClick={() => deleteReview(item.id)}>
            Slet
          </p>
        </div>
      ))}
    </Section>
  );
};
