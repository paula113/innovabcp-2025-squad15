const MainLayout = ({ children }) => {
  return (
    <div className="">
      <header className="">
        <div>Where in the world?</div>
      </header>
      <main className="">
        {children}
      </main>
      <footer className="">Footer</footer>
    </div>
  );
};

export default MainLayout;
