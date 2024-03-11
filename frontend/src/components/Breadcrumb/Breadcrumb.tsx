import { Link, useLocation } from "react-router-dom";
import screenUrls from "../../constants/screenUrls";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-light p-3">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to={screenUrls.HOME} className="text-warning">
              Trang chủ
            </Link>
          </li>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index == pathnames.length - 1;

            return isLast ? (
              <li className="breadcrumb-item">{name}</li>
            ) : (
              <li className="breadcrumb-item">
                <Link to={routeTo}>{name}</Link>
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
