import { CirclePause, CirclePlay } from "lucide-react";
import styles from "./styles.module.css";

type DefaultButtonProps = {
  action?: "play" | "stop";
  color?: "green" | "red";
} & React.ComponentProps<"button">;

export function DefaultButton({
  action = "play",
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <button className={`${styles.button} ${styles[color]}`} {...props}>
      {action == "stop" ? <CirclePause /> : <CirclePlay />}
    </button>
  );
}
