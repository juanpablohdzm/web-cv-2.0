import { useState, useEffect } from "react";

const TYPING_SPEED = 80;
const DELETING_SPEED = 40;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export default function useTypewriter(strings) {
    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);
    const [phase, setPhase] = useState("typing"); // "typing" | "pausing" | "deleting" | "pauseAfterDelete"

    useEffect(() => {
        if (!strings || strings.length === 0) return;

        const current = strings[index % strings.length];

        if (phase === "typing") {
            if (displayed.length < current.length) {
                const t = setTimeout(() => {
                    setDisplayed(current.slice(0, displayed.length + 1));
                }, TYPING_SPEED);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => setPhase("deleting"), PAUSE_AFTER_TYPE);
                return () => clearTimeout(t);
            }
        }

        if (phase === "deleting") {
            if (displayed.length > 0) {
                const t = setTimeout(() => {
                    setDisplayed(displayed.slice(0, -1));
                }, DELETING_SPEED);
                return () => clearTimeout(t);
            } else {
                const t = setTimeout(() => {
                    setIndex((i) => (i + 1) % strings.length);
                    setPhase("typing");
                }, PAUSE_AFTER_DELETE);
                return () => clearTimeout(t);
            }
        }
    }, [displayed, phase, index, strings]);

    return displayed;
}
