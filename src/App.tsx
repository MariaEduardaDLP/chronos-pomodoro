import { Heading } from "./components/Heading";

import "./styles/theme.css";
import "./styles/global.css";
import { Button } from "./components/Button";

export function App() {
  return (
    <>
      <Heading>
        Olá mundo!
        <Button icone="trash"></Button>
      </Heading>
    </>
  );
}
