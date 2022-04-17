import { ReactElement } from "react";
import { Link } from "react-router-dom";

const WithBackLink = (component: ReactElement) => {

  return (
    <div>
      <Link to={'/'}>
        Главная
      </Link>
      {component}
    </div>
  );
};

export default WithBackLink;