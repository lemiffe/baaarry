export interface FaqEntry {
  question: string;
  answer: string;
}

export const faq: FaqEntry[] = [
  {
    question: "What audio formats are supported?",
    answer:
      "MP3, WAV, OGG, and FLAC. Corrupt or missing files are handled gracefully so one bad file won't take down your session.",
  },
  {
    question: "How many reference tracks can I load?",
    answer:
      "Up to five reference tracks alongside your own tracks. You choose a single “Compare against” target: the loudest track, an average of your own bounces, or a specific track.",
  },
  {
    question: "When does the comparison update?",
    answer:
      "Whenever you load new tracks. Baaarry re-runs its analysis and recalculates the colour-coded buckets and deviation overview against your chosen target automatically.",
  },
  {
    question: "How does loudness matching work?",
    answer:
      "Playback is loudness-matched through a brick-wall limiter so you A/B at a level playing field instead of being fooled by “louder sounds better”. Matching toggles appear once there's something to match against (your own tracks and/or reference tracks), so you can choose what playback is normalised to.",
  },
  {
    question: "Where are the waveforms and analyses stored?",
    answer:
      "Analyses and waveforms are cached locally on your machine so reopening a session is fast and doesn't re-scan every file. Nothing is uploaded; Baaarry runs entirely offline.",
  },
  {
    question: "What if I move or rename my audio files?",
    answer:
      "If a file has moved, Baaarry flags it rather than failing silently, and lets you relink it so your session and cached analysis stay intact.",
  },
  {
    question: "What's the tech stack? Is it Electron?",
    answer:
      "No Electron. Baaarry is built with Tauri; a Rust core does the heavy audio analysis while a lightweight React/TypeScript interface handles playback and visualisation. That keeps it fast and far lighter than an Electron app.",
  },
  {
    question: "Does it cost anything?",
    answer:
      "It's pay-what-you-can: name your price, or download it free. No locked features and no account required.",
  },
  {
    question: "Why is my super-wide track showing as less than 50% width?",
    answer:
      "The width figure is a mid/side side-energy ratio: 100 · side / (mid + side), where side = (L − R) / 2. By that definition a signal panned hard to one side reads ~50%, and only full anti-phase (L = −R) reaches 100%. Real commercial masters are mostly correlated (kick, bass, and vocal sit centred) with decorrelated sides, so a 30–40% side ratio is roughly what this formula is expected to produce. A “narrow” reading there is normal, not a fault in your master.",
  },
];