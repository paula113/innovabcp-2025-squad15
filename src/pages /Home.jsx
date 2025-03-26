import ProfileForm from "../Features/ProfileForm/default";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const showForm = true

  const getDetailsView = () => {
    if (!showForm) return null;
    return <>
    <ProfileForm />
    </>;
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
