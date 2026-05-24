export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      background: "#f8f6f1",
      color: "#1f1f1f",
      textAlign: "center",
      padding: "24px"
    }}>
      <div>
        <h1 style={{ fontSize: "48px", marginBottom: "16px" }}>
          Three Goats
        </h1>
        <p style={{ fontSize: "20px", marginBottom: "24px" }}>
          Something is coming.
        </p>
      </div>
    </main>
  );
}