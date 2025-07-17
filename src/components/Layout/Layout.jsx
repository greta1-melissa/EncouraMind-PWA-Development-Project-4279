// Update all instances of from-blue-600 to-purple-600 to from-primary to-accent
const Layout = () => {
  return (
    <>
      <Helmet>
        <title>EncouraMind — Encouraging Minds, Enriching Lives</title>
        <meta name="description" content="Private mental wellness platform for daily encouragement and support" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;