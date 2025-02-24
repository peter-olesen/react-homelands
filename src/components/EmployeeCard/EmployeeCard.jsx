import s from "./EmployeeCard.module.scss";

export const EmployeeCard = ({
  imgSrc,
  imgAlt,
  employeeName,
  employeeTitle,
  employeeEmail,
  employeePhone,
}) => {
  return (
    <div
      className={s.EmployeeCard}
      style={{ backgroundImage: `url(${imgSrc})` }}
    >
      <div className={s.InfoBox}>
        <p>{employeeName}</p>
        <p>{employeeTitle}</p>
        <div className={s.ContactInfo}>
          <p>{employeeEmail}</p>
          <p>{employeePhone}</p>
        </div>
      </div>
    </div>
  );
};
