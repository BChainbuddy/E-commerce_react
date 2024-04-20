import "./../style/ErrorPage.css";

import { useNavigate } from "react-router-dom";
export default function ErrorPage() {
  // const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div id="errorPageContainer">
      {/* <img
        style={{ marginBottom: "20px" }}
        className="jumpingDumbbell"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABA0lEQVR4nO2YUQ6DIBBE58s71V7Ai1nba1rpNWjSrImhIbBAFey8hERRhwzM7ocAIYQQQlR0AB4AXgDsZhgAkzyvQTPI3VnMHbdKNIMYEb848/1mF2vQDLLukvbZ3prB3B5lxKbWTii3Rxqxmtrx5baGaPWa2vGJ12BEtRaNQA9PBGeO1gDgGdFmU1tlzEgxYmXM4uFzYRs2YsXD1wetRcuu9zSygSeCgtGaz1Lsg8dMc+3XpbWu5YVGoIcngoxdaq5GjLzYF1g0hFbzKnNLjPhUsFWGSG3pY4x4J2ZMhUYWMZH1K7WGaBXBVzuq3O6gmV07YyWaybWTk9tfaBJCCCH/yxukU+uYZJeLVgAAAABJRU5ErkJggg=="
      /> */}
      <div style={{ fontSize: "30px" }}>Opps...This page doesnt exists!</div>
      <div
        className="getBackToHome"
        onClick={() => {
          navigate("/");
        }}
      >
        Back to homepage
      </div>
      {/* <div>{error.statusText || error.message}</div> */}
    </div>
  );
}
