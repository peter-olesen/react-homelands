import { useGet } from "../../hooks/useGet";
import s from "./Reviews.module.scss";

export const Reviews = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/reviews"
  );

  const items = data?.items;
  let randomReview = null;
  if (items && items.length > 0) {
    const randomIndex = Math.floor(Math.random() * items.length);
    randomReview = items[randomIndex];
  }

  const reviewer =
    randomReview?.user.firstname + " " + randomReview?.user.lastname;

  const reviewDate = randomReview?.created_friendly;
  const dateObject = new Date(reviewDate);
  const formattedDate = dateObject.toLocaleDateString("da-DK", {
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <h3>Det siger kunderne:</h3>
      <div className={s.Review}>
        <p>{randomReview?.title}</p>
        <p className={s.Content}>"{randomReview?.content}"</p>
        <p>
          {reviewer}, <span>{formattedDate}</span>
        </p>
      </div>
      <p>Skriv en anmeldelse</p>
    </>
  );
};
