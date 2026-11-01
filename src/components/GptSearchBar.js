const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="type"
          className="p-3 m-4 col-span-9"
          placeholder="What would you like to watch?"
        ></input>
        <button className="col-span-3 py-2 px-3 m-4 text-lg bg-red-700 text-white rounded-md">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
