import { useGet } from "../../hooks/useGet";
import { EmployeeCard } from "../EmployeeCard/EmployeeCard";
import s from "./Employees.module.scss";

export const Employees = () => {
  const { data, isLoading, error } = useGet(
    "https://api.mediehuset.net/homelands/staff"
  );

  return (
    <>
      <h3>Mød vores ansatte</h3>
      <div className={s.Employees}>
        {data?.items?.map((item) => (
          <EmployeeCard
            key={item.id}
            imgSrc={item.image}
            employeeName={`${item.firstname} ${item.lastname}`}
            employeeTitle={item.position}
            employeeEmail={item.email}
            employeePhone={item.phone}
          />
        ))}
      </div>
    </>
  );
};
