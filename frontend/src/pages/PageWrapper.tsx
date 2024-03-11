import { ComponentType, ReactNode, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

interface PageWrapperProps {
  title: string;
  component: ComponentType;
  isHeader: boolean;
  isFooter: boolean;
}

const ComponentWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div>{children}</div>;
};

const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  component: Component,
  isHeader,
  isFooter,
}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      {isFooter && <Header />}
      <ComponentWrapper>
        <Component />
      </ComponentWrapper>
      {isHeader && <Footer />}
    </div>
  );
};

export default PageWrapper;
