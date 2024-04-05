import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <div>Root doesnt exist!!</div>
      <div>{error.statusText || error.message}</div>
    </div>
  );
}
