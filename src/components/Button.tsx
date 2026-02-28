import styles from "./Button.module.css";

/* Ícones que serão usados para o botão (a fim de evitar o DynamicIcon que aumentaria o tempo de build) */
import { Trash, Home, History, Settings, Moon } from "lucide-react";

const iconesMap = {
  trash: Trash,
  home: Home,
  history: History,
  settings: Settings,
  moon: Moon,
}
type ButtonProps = {
  icone: keyof typeof iconesMap;
};

export function Button({icone}: ButtonProps) {
  const IconeImage = iconesMap[icone];
  return (
    <>
      <button>
        <IconeImage />
      </button>
    </>
  );
}
