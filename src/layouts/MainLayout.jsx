const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-row justify-between fixed z-50 w-full bg-gray-800 text-white px-8 py-4">
        <div>Where in the world?</div>
      </header>
      <main className="min-h-screen relative top-16 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {children}
      </main>
      <footer className="bg-midnight text-white p-4">Footer</footer>
    </div>
  );
};

export default MainLayout;
