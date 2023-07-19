import Container from "../Container";

export default function Hero() {
  return (
    <section className="bg-secondary py-10">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <div className="md:w-1/2 text-center md:text-left space-y-5">
            <h1 className="text-3xl  md:text-6xl font-bold">
              Find A <span className="text-primary">Job</span> That{" "}
              <span className="text-primary">Matches</span> Your Passion
            </h1>
            <p className="md:text-lg">
              Hand-picked opportunities to work from home, remotely, freelance,
              full-time, part-time, contract and internships.
            </p>
            <button className="bg-primary w-full md:max-w-max md:text-xl font-medium py-3 px-7 rounded-md text-white">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 hidden md:block">
            <img className="w-full py-10" src="./people.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
}
