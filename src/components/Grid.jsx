export const Grid = ({ children, col, fr, gap, padding, style }) => {
  const inline = {
    gridTemplateColumns: `repeat(${col}, ${fr}fr)`,
    gap: `${gap}`,
    padding: `${padding}`,
  };
  return (
    <div className="Grid" style={{ ...inline, ...style }}>
      {children}
    </div>
  );
};
