import { useState, ChangeEvent, FormEvent } from 'react';
import { Loader } from '../../assets/svg';

type Props = {
  onSubmit?: (whatsappNumber: string) => Promise<void> | void;
};

function RequestAuthPage({ onSubmit }: Props) {
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmed = whatsappNumber.trim();

    if (!/^(\+?\d{7,15})$/.test(trimmed)) {
      setError("Veuillez entrer un numéro valide.");
      return;
    }

    setError('');
    setLoading(true);
    try {
      await onSubmit?.(trimmed);
    } finally {
      setLoading(false);
    }
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
          Enter your WhatsApp number to receive your ID directly by message
        </p>
        <input
          type="tel"
          required
          placeholder="+237 621 09 21 30"
          value={whatsappNumber}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setWhatsappNumber(e.target.value)
          }
          className="w-full bg-neutral-700 text-white text-sm rounded-lg p-3 mb-2 border border-neutral-600 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 flex items-center justify-center gap-2 ${
            loading ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {loading ? (
            <>
              <Loader />
              <span>Envoi en cours...</span>
            </>
          ) : (
            'Allow now'
          )}
        </button>
      </form>
    </div>
  );
}

export default RequestAuthPage;
