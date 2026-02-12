import ResumeHeader from "@/components/resume/resume-header";
import Experience from "@/components/resume/experience";
import Education from "@/components/resume/education";

import styles from "./page.module.scss";
import Projects from "@/components/resume/projects";
import Achievements from "@/components/resume/achievements";
import Certifications from "@/components/resume/certifications";
import Skills from "@/components/resume/skills";

export default function ResumePage() {

    return (
        <div className={styles.resume}>
            <ResumeHeader />
            <Experience />
            <Education />
            <Projects />
            <Achievements />
            <Certifications />
            <Skills />
        </div>
    );
}