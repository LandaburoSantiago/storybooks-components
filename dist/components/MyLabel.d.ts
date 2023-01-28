/// <reference types="react" />
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
    /**
     * This is custom font color
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor, backgroundColor, }: Props) => JSX.Element;
