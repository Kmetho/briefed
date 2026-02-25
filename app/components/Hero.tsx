import Card from "./Card";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative bg-white text-black font-inter py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Welcome to Briefed
        </h1>
        <p className="mt-4 text-xl text-gray-900 max-w-3xl">
          A creative brief generator for designers and clients.
        </p>
        <div className="mt-8">
          <Button />
        </div>
      </div>
      <Card content="This is a sample card component to showcase the design." />
    </section>
  );
}
