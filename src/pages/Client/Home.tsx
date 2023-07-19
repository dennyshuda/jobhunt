import Hero from "../../components/Hero/Hero";

export default function Home() {
  console.log(import.meta.env.BASE_URL);
  return (
    <>
      <Hero />
    </>
  );
}
