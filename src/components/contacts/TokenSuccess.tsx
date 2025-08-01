import { useState } from 'react';

type Props = {
  token: string;
};

function TokenSuccess({ token }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(token);
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
        <button
          onClick={handleCopy}
          disabled={copied}
          className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition duration-200 flex items-center justify-center gap-2 ${
            copied ? 'opacity-60 cursor-not-allowed' : ''
          }`}
        >
          {copied ? (
            <>
              <svg
                className="w-5 h-5 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
              <span>Copié !</span>
            </>
          ) : (
            'Copier le token'
          )}
        </button>
      </div>
    </div>
  );
}

export default TokenSuccess;
