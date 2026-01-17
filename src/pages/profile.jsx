import Navbar from "@/components/components_reutilizaveis/navbar";
import Footer from "@/components/components_reutilizaveis/footer";
import ProfileComponent from "@/components/components_pages/profile/profile";

export default function Profile() {
  return (
    <main >
      <Navbar />
      <ProfileComponent />
      <Footer />
    </main>
  );
}
