import Navbar from "@/components/components_reutilizaveis/navbar";
import Footer from "@/components/components_reutilizaveis/footer";
import RegisterComponent from "@/components/components_pages/auth/register";

export default function Register() {
    return (
        <main>
            <Navbar />
            <RegisterComponent />
            <Footer />
        </main>
    );
}