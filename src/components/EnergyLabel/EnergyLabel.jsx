import s from "./EnergyLabel.module.scss";

export const EnergyLabel = ({ energyLabel }) => {
  function getBackgroundColor(label) {
    switch (label) {
      case "A":
        return "#2d9d40";
      case "B":
        return "#74a634";
      case "C":
        return "#d2a20c";
      case "D":
        return "#d27e17";
      case "E":
        return "#cb4c23";
      case "F":
        return "#810814";
      case "G":
        return "#5a2a57";
      default:
        return "transparent";
    }
  }

  return (
    <div
      className={s.EnergyLabel}
      style={{
        backgroundColor: getBackgroundColor(energyLabel),
      }}
    >
      {energyLabel}
    </div>
  );
};
