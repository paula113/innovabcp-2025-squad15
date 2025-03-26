import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const cardDetails = true

  const getDetailsView = () => {
    if (!cardDetails) return null;
    return <h1>HOLA Mundo</h1>;
  };

  return (
    <MainLayout>
      {/* <FlagsList setCardDetails={setCardDetails} /> */}
      {getDetailsView()}
      {/* <Dialog cardDetails={cardDetails} /> */}
    </MainLayout>
  );
};

export default Home;
