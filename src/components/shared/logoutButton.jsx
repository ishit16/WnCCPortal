function LogoutButton() {
  return (
    <>
      <button
        type="button"
        size="large"
        className=" right-3 absolute flex justify-center opacity-100 border-none focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-1.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
      >
        <span className="text-white font-sans font-bold text-lg">Logout</span>
      </button>
    </>
  );
}

export default LogoutButton;
