import { useState, useEffect } from "react";
import RequestAuthPage from "../../components/contacts/RequestAuthPage";
import TokenSuccess from "../../components/contacts/TokenSuccess";
import { useLocation } from "react-router-dom";
import axios from "axios";

function App() {
  const [token, setToken] = useState<string | null>(null);
  const location = useLocation();

  const API_URL = import.meta.env.VITE_API_URL;
  const handlePhoneSubmit = async (whatsappNumber: string) => {
    if (!API_URL) {
      alert("API_URL is not defined in your .env file");
      return;
    }

      const { data } = await axios.get(
        `${API_URL}/google/auth-url?phone=${whatsappNumber}`
      );
      window.location.href = data?.url;
   
  };

  useEffect(() => {
    const sessionToken = new URLSearchParams(location.search).get("session");
    if (sessionToken) setToken(sessionToken);
  }, [location.search]);

  return token ? (
    <TokenSuccess token={token} />
  ) : (
    <RequestAuthPage onSubmit={handlePhoneSubmit} />
  );
}

export default App;
