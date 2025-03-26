const MainLayout = ({ children }) => {
  return (
    <div className="">
      <header className="">
        <div>TOP BAR </div>
      </header>
      <main className="">
        {children}
      </main>
      <footer className="">Footer</footer>
    </div>
  );
};

export default MainLayout;
