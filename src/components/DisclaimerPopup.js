
const DisclaimerPopup = ({ onContinue }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl bg-gray-900 p-6 sm:p-8 text-white shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Welcome to StreamGPT
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          StreamGPT is an independent student project developed for
          educational and learning purposes. It is not affiliated
          with, endorsed by, or associated with Netflix or any other
          streaming service.
        </p>

        <p className="mt-4 text-gray-200 text-sm sm:text-base leading-relaxed">
          Please use only your StreamGPT test account credentials.
          Never enter your Netflix password or other third-party
          account credentials.
        </p>

        <button
          onClick={onContinue}
          className="mt-6 w-full rounded-lg bg-blue-700 hover:bg-blue-600 p-3 font-semibold transition-colors"
        >
          I Understand — Continue
        </button>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
