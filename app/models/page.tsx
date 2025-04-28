"use client";

import { useState } from "react";
import { fetchModels } from "../api";

const Page = () => {
  const models = fetchModels();
  let [click, onClick] = useState(false);

  return (
    <div>
      <button onClick={() => onClick(true)}>Onclick</button>
      {click && (
        <>
          <h2>Список моделей:</h2>
          <pre>{JSON.stringify(models, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default Page;
