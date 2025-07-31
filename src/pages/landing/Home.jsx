import { useState } from 'react';

const RequestAuthPage = ({ onSubmit }) => {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmed = whatsappNumber.trim();

    if (!/^(\+?\d{7,15})$/.test(trimmed)) {
      setError("Veuillez entrer un numéro valide.");
      return;
    }

    setError('');
    onSubmit && onSubmit(trimmed);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
      >
        <h2 className="text-lg font-semibold mb-4 text-neutral-100">
          Authorization Initiation
        </h2>
        <p className="text-sm text-neutral-300 mb-6">
          Entrez votre numéro WhatsApp pour recevoir le lien d’autorisation Google.
        </p>
        <input
          type="tel"
          required
          placeholder="+33 6 12 34 56 78"
          value={whatsappNumber}
          onChange={(e) => setWhatsappNumber(e.target.value)}
          className="w-full bg-neutral-700 text-white text-sm rounded-lg p-3 mb-2 border border-neutral-600 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {error && (
          <p className="text-red-400 text-sm mb-4">{error}</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Obtenir le lien d'autorisation
        </button>
      </form>
    </div>
  );
};


const TokenSuccess = ({ token }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white px-4">
      <div className="bg-neutral-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
        <h2 className="text-lg font-semibold mb-4 text-neutral-100">Token généré</h2>
        <p className="text-sm text-neutral-300 mb-6">
          Votre token de rafraîchissement a été généré avec succès. Copiez-le et utilisez-le dans votre application.
        </p>
        <textarea
          readOnly
          value={token}
          className="w-full h-24 bg-neutral-700 text-white text-sm rounded-lg p-3 resize-none mb-6 border border-neutral-600"
        />
        <button onClick={handleCopy} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
          {copied ? 'Copié !' : 'Copier le token'}
        </button>
      </div>
    </div>
  );
};


function App() {
  return (
    <RequestAuthPage />
  )
}

export default App
