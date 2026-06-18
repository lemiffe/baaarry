export interface Feature {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
    /** Path under public/ for the media placeholder. */
    media: string;
    /** Which side the media sits on at desktop widths. */
    side: "left" | "right";
    /** Background token class to alternate section tones. */
    bg: "bg" | "bg-alt";
}

export const features: Feature[] = [
    {
        eyebrow: "A/B without the fumbling",
        title: "Switch tracks and positions, instantly",
        body: "Comparing mixes only works if switching is effortless. Baaarry keeps every track on one screen and lets you jump between them in a click. Set a start marker on each track to drop the playhead exactly where it matters: the chorus, the drop, the quiet bridge, then auto-advance through your queue to audition a whole EP back to back.",
        bullets: [
            "One-click switching between any loaded track.",
            "Per-track start markers; jump straight to the part that matters.",
            "Click-to-seek playhead and auto-advance through the list.",
        ],
        media: "/screen-switch.jpg",
        side: "left",
        bg: "bg-alt",
    },
    {
        eyebrow: "Reference like a pro",
        title: "Compare against the loudest, the average, or any track",
        body: "Load up to five reference tracks and choose what everything else is measured against: the loudest track, an average of your own bounces or reference tracks, or a specific track. Each track's LUFS, average dB, EQ energy, and width are bucketed into colour-coded pills.",
        bullets: [
            "Up to 5 reference tracks with a unified “Compare against” target.",
            "Colour-coded pills for LUFS, avg dB, 3-band EQ, and stereo width.",
            "Deviation overview that recalculates as you load tracks.",
        ],
        media: "/screen-compare.jpg",
        side: "right",
        bg: "bg",
    },
    {
        eyebrow: "Know what to fix next",
        title: "Plain-language suggestions, notes, and shareable reports",
        body: "Baaarry turns the numbers into severity-ordered, plain-language suggestions: “low end is 3 dB hot versus your reference”, not a wall of figures. Write notes as you listen, then copy suggestions and notes, or export a full report (.md or .txt)",
        bullets: [
            "Severity-ordered, plain-language mix/master suggestions.",
            "Per-track notes captured while you listen.",
            "Copy suggestions or export a full report for the whole session.",
        ],
        media: "/screen-suggestions.jpg",
        side: "left",
        bg: "bg-alt",
    },
    {
        eyebrow: "See and hear the spectrum",
        title: "Solo a band, watch the spectrum, catch the clipping",
        body: "Audition a single frequency band (Low, Mid, High) across every track to pinpoint where a mix differs. The waveform + live spectrum drawer shows peak markers and a click-to-seek playhead alongside a real-time frequency display with gridlines and a hover readout, while a clipping indicator flags anything pushing past the ceiling.",
        bullets: [
            "EQ band solo (Full / Low / Mid / High) across all tracks.",
            "Waveform with peak markers + real-time spectrum with hover readout.",
            "Clipping indicator so nothing slips past the ceiling.",
        ],
        media: "/screen-solo.jpg",
        side: "right",
        bg: "bg",
    },
];
