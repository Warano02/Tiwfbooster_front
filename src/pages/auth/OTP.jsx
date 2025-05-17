import { useRef, useState } from 'react';
import Footer1 from '../../components/Footer1';
import { assets } from '../../assets/assets';

const OTP = () => {
  const inputRefs = useRef([]);
  const [digits, setDigits] = useState(Array(6).fill(''));
  const [trustDevice, setTrustDevice] = useState(false);

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newDigits = [...digits];
      newDigits[index] = value;
      setDigits(newDigits);
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace') {
      if (!digits[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData.getData('Text').trim();
    if (/^\d{6}$/.test(data)) {
      const newDigits = data.split('');
      setDigits(newDigits);
      inputRefs.current[5].focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = digits.join('');
    console.log('Code:', code);
    console.log('Trust this device:', trustDevice);
    // Ajoutez votre logique ici (envoi au backend, etc.)
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-[95vh]">
        <form onSubmit={handleSubmit} className="bg-white text-gray-500 relative flex items-center flex-col max-w-96 mx-4 md:px-8 md:py-10 p-6 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10 transition-all">
          {/* Image */}
          <div className="h-16 w-16 absolute -top-8 flex justify-center items-center">
            <img className="h-16 w-16" src={assets.icon.privacyIcon} alt="privacyIcon" />
          </div>
          <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800 mt-6">
            Two-factor Authentication
          </h2>
          <p className="mb-6 text-center">Please enter the authentication code</p>

          <div className="flex items-center justify-between mb-6 w-full">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                className="otp-input w-10 h-10 border border-gray-300 outline-none rounded text-center text-lg focus:border-indigo-500 transition duration-300"
                type="text"
                maxLength={1}
                required
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={handlePaste}
              />
            ))}
          </div>

          {/* Checkbox "Trust this device" */}
          <div className="flex items-center w-full gap-2 my-2">
            <input
              type="checkbox"
              id="accept"
              className="accent-indigo-500"
              checked={trustDevice}
              onChange={(e) => setTrustDevice(e.target.checked)}
            />
            <label htmlFor="accept">Trust this device</label>
          </div>

          {/* Bouton Vérifier */}
          <button
            type="submit"
            className="w-full mt-2 bg-gray-800 py-2.5 rounded-lg text-white font-semibold hover:bg-gray-900 transition duration-300"
          >
            Verify
          </button>
        </form>
      </div>
      <Footer1 />
    </>
  );
};


export default OTP
