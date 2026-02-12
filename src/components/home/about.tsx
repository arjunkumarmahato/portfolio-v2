import styles from "./about.module.scss";
import TextReveal from "@/components/text-reveal";

export default function About() {
    return (
        <TextReveal
            text="Have fun exploring my PORTFOLIO WEBSITE."
            keywords={["motion", "structure", "creativity", "intuitive", "responsive", "animations", "storytelling"]}
            className={styles.about}
        />
    );
}
