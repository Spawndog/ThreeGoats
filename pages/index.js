export default function Home() {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0
      }}
    >
      <img
        src="/landing.jpg"
        alt="Three Goats"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    </main>
  );
}