/** AI work that is in production — keep this list strictly to shipped things. */
export const AI_SHIPPED = [
  {
    title: 'On-device speech AI',
    body: 'sherpa-onnx with a memory-optimised local model, running fully offline on iOS, Android and the web — fast enough for word-by-word feedback.',
    where: 'Readable English',
    href: '/work/readable-english/',
  },
  {
    title: 'Turning model output into decisions',
    body: 'A text-matching algorithm that aligns noisy speech recognition with the expected passage to work out exactly which words a learner has read.',
    where: 'Readable English',
    href: '/work/readable-english/',
  },
  {
    title: 'Generative content pipeline',
    body: 'An AI pipeline that generates passages and practice material levelled to each learner’s Lexile and reading grade — the content a family of learning games runs on.',
    where: 'Readable English',
    href: '/work/readable-english/',
  },
  {
    title: 'ML for operations',
    body: 'TensorFlow models and Gen AI tooling that took repetitive manual work out of an agri-trade company’s internal processes.',
    where: 'Bijak',
    href: '/work/bijak/',
  },
] as const;

/** Areas being actively explored — framed honestly as "now", not as shipped. */
export const AI_EXPLORING = [
  'AI agents',
  'RAG',
  'Local LLMs (Ollama)',
  'Embeddings',
  'Fine-tuning',
  'LangChain',
] as const;
