import { House, History, Settings, Sun, Moon } from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvailableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";

    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <Sun />,
    light: <Moon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    return 0;
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <House />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para o Histórico"
        title="Ir para a Histórico"
      >
        <History />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Ir para as Configurações"
        title="Ir para as Configurações"
      >
        <Settings />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Mudar o tema"
        title="Mudar o tema"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
