import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Esculturas",
    },
    {
      id: 2,
      title: "Lámparas",
    },
    {
      id: 3,
      title: "Escaleras",
    },
    {
      id: 4,
      title: "Puertas",
    },
    {
      id: 5,
      title: "Ventanas",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Explora ahora</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
