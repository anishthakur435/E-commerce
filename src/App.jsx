import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/react";

import React from "react";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      {/* <header>
        <Show when="signed-out">
          <SignInButton />
          <SignUpButton />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header> */}
      <AppRoutes />
    </>
  );
}

export default App;
