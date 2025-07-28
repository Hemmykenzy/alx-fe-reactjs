import Footer from "../../alx-react-app/src/components/Footer";
import Header from "../../alx-react-app/src/components/Header";
import MainContent from "../../alx-react-app/src/components/MainContent";
import WelcomeMessage from "../../alx-react-app/src/components/WelcomeMessage";
import ProfilePage from "./components/ProfilePage";
import UserContext from "./components/UserContext";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <Header />
      <MainContent />
      <WelcomeMessage />
      <UserContext.Provider value={userData}>
        <ProfilePage />
      </UserContext.Provider>
      <Footer />
    </>
  );
}

export default App;