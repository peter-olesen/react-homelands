import { Employees } from "../components/Employees/Employees";
import { Reviews } from "../components/Reviews/Reviews";
import { Section } from "../components/Section";

export const Home = () => {
  return (
    <>
      <div>Home</div>
      <Reviews />
      <Section>
        <Employees />
      </Section>
    </>
  );
};
