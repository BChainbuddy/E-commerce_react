import "./../style/Loader.css";

export default function Loader() {
  return (
    <div id="loaderContainer">
      {/* <div className="loader"></div>
      <div className="progressContainer">
        <div className="progress"></div>
      </div> */}
      <img
        className="spinningDumbbell"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nO2YUQ6DIBBE58s71V7Ai1nba1rpNWjSrImhIbBAFey8hERRhwzM7ocAIYQQQlR0AB4AXgDsZhgAkzyvQTPI3VnMHbdKNIMYEb848/1mF2vQDLLukvbZ3prB3B5lxKbWTii3Rxqxmtrx5baGaPWa2vGJ12BEtRaNQA9PBGeO1gDgGdFmU1tlzEgxYmXM4uFzYRs2YsXD1wetRcuu9zSygSeCgtGaz1Lsg8dMc+3XpbWu5YVGoIcngoxdaq5GjLzYF1g0hFbzKnNLjPhUsFWGSG3pY4x4J2ZMhUYWMZH1K7WGaBXBVzuq3O6gmV07YyWaybWTk9tfaBJCCCH/yxukU+uYZJeLVgAAAABJRU5ErkJggg=="
      />
      <p style={{ marginTop: "16px" }}>Loading...</p>
    </div>
  );
}
