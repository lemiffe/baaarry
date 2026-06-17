export interface Capability {
  title: string;
  body: string;
}

export const capabilities: Capability[] = [
  {
    title: "A/B against up to 5 references",
    body: "Unified “Compare against” target: loudest, an average, or a specific track.",
  },
  {
    title: "Per-track analysis",
    body: "Integrated/max LUFS, average dB, 3-band (Low/Mid/High) EQ energy, and stereo width, bucketed and colour-coded against the target.",
  },
  {
    title: "Suggestions engine",
    body: "Severity-ordered, plain-language mix/master suggestions per track.",
  },
  {
    title: "Loudness-matched playback",
    body: "A/B at matched loudness through a brick-wall limiter.",
  },
  {
    title: "EQ band solo",
    body: "Audition a single band (Full / Low / Mid / High) across tracks.",
  },
  {
    title: "Waveform + live spectrum",
    body: "Peak markers, click-to-seek playhead, and a real-time frequency spectrum with gridlines and hover readout.",
  },
  {
    title: "Notes, markers, overview & export",
    body: "Per-track notes, start markers, deviation overview, and report / suggestions export.",
  },
  {
    title: "Sessions",
    body: "Save and reopen your comparison as a .brry file.",
  },
  {
    title: "Themes, settings & broad codec support",
    body: "Light/dark themes, configurable settings, and MP3 / WAV / OGG / FLAC support with graceful handling of corrupt or missing files.",
  },
];