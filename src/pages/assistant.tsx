import React, { useState } from "react";
import Layout from "@theme/Layout";

export default function Assistant() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    window.location.href = `/?q=${encodeURIComponent(query)}`;
  };

  return (
    <Layout title="MyKKP Assistant">
      <div style={{ padding: "40px" }}>
        <h1>Ask MyKKP Assistant</h1>

        <input
          type="text"
          placeholder="Type your question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: "400px",
            padding: "10px",
            marginTop: "20px",
          }}
        />

        <div style={{ marginTop: "20px" }}>
          <button onClick={handleSearch}>
            Search documentation
          </button>
        </div>
      </div>
    </Layout>
  );
}