export default function Form() {
  return (
    <section className="relative bg-white text-black font-inter py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white border-2 border-black rounded-xl p-6">
        <form className="flex flex-col">
          <input
            required
            className="border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-accent focus:outline-none transition-colors"
          />
          <textarea
            required
            className="border-2 border-gray-200 rounded-lg px-4 py-3 mt-4 focus:border-accent focus:outline-none transition-colors"
          />
        </form>
      </div>
    </section>
  );
}
