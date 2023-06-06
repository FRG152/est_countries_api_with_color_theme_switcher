import { useRouteError } from "react-router-dom";

const ErrrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Oops!</h1>
      <p>{error.statusText}</p>
    </div>
  );
};

export default ErrrorPage;
