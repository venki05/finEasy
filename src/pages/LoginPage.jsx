function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="flex flex-col items-center justify-center bg-gray-200 w-full max-w-xl py-10 px-10 rounded-xl shadow-lg">
          <p className="mb-6 text-center text-lg font-medium">
            Connect to your bank account by consenting
          </p>
          <button className="bg-blue-200 px-5 py-2 cursor-pointer hover:bg-blue-300 rounded-xl border-2 border-black">
            Connect Through Setu
          </button>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
