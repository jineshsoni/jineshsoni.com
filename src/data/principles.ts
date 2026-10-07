export const PRINCIPLES = [
  {
    title: 'The model is the easy part.',
    body: 'A speech model only became a reading tutor once we wrote the logic that decides which words were really read. The value of AI lives in the system around the model — data, latency, fallbacks and the judgement layer.',
  },
  {
    title: 'Use AI where it removes work.',
    body: 'The best AI I’ve shipped is invisible: a model that saves an ops team hours, or speech recognition that just works offline. Demos are easy; dependable is the job.',
  },
  {
    title: 'Build with AI, not just for it.',
    body: 'Claude Code, Cursor and GitHub Copilot are part of how I work every day — scaffolding, refactors, tests and reviews move at a pace that wasn’t possible a couple of years ago. The judgement stays human: I own the architecture, review every change, and let the tools do the typing.',
  },
  {
    title: 'Offline is a feature, not an edge case.',
    body: 'Traders in mandis and kids in classrooms don’t have perfect networks. I design for the bad connection first — local data, on-device models, graceful sync — and the good connection takes care of itself.',
  },
  {
    title: 'Architecture is for the team that maintains it.',
    body: 'I pick patterns a new hire can follow on day three. A boring, consistent structure across apps beats a clever one that only its author understands.',
  },
  {
    title: 'Measure before you argue.',
    body: 'Analytics, remote config and crash reports settle debates faster than meetings. Ship behind a flag, watch the numbers, then decide.',
  },
  {
    title: 'Make the path to production boring.',
    body: 'Automated builds, tests and store releases mean shipping is a non-event — so the team ships small and often instead of big and scary.',
  },
] as const;
