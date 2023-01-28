import "./MyLabel.css";

export interface Props {
  /**
   * This is the text that show the component
   */
  label: string;
  /**
   * This is the label size
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * This is the text color
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * This is args indicate if text is Capitalize
   */
  allCaps?: boolean;

  /**
   * This is custom font color
   */
  fontColor?: string;
}

export const MyLabel = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
