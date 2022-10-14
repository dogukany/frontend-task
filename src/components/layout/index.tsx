import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col bg-gray-50 h-screen">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
