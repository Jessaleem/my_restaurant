import Layout from "../components/Layout";
import { useFetchUser } from "../services/authContext";
import IntroPage from "../components/intro";

export default function Home() {
  const { user, loading } = useFetchUser();
  return (
    <Layout user={user}>
      {/* <div className="bg-cover bg-menu-bg-image"> */}
      <IntroPage />
      {/* </div> */}
    </Layout>
  )
}
