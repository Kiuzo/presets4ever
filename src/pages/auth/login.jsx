import Navbar from "@/components/components_reutilizaveis/navbar";
import Footer from "@/components/components_reutilizaveis/footer";
import LoginComponent from "@/components/components_pages/auth/login";

export default function Login() {
    return (
        <main>
            <Navbar />
            <LoginComponent />
            <Footer />
        </main>
    );
}