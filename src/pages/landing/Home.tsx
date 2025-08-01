import { useState } from 'react';
import RequestAuthPage from '../../components/contacts/RequestAuthPage';
import TokenSuccess from '../../components/contacts/TokenSuccess';

function App() {
  const [token, setToken] = useState<string | null>(null);

  const handlePhoneSubmit = async (whatsappNumber: string) => {
    console.log('Numéro envoyé:', whatsappNumber);
    const fakeToken = 'ya29.a0AfH6SMBb3F0-fake-token-example';
    setToken(fakeToken);
  };

  return token ? (
    <TokenSuccess token={token} />
  ) : (
    <RequestAuthPage onSubmit={handlePhoneSubmit} />
  );
}

export default App;
