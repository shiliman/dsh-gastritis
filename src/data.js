export const DATA = {
  id: 'dsh-gastritis',
  name: '慢性胃炎',
  prefix: 'gastritis',
  label: '慢性胃炎',
  defaultEeriness: 2,
  gain: 0.4,
  flareChance: 0.26,
  flareGain: 20,
  triggerWeight: 1,
  flareWeight: 0.9,
  reliefs: [
    { id: 'snack', label: '吃点东西垫一下', relief: 22, minutes: 30, calm: 7 },
    { id: 'warmwater', label: '喝两口温水', relief: 12, minutes: 20, calm: 5 },
    { id: 'antacid', label: '抑酸药', relief: 24, minutes: 45, calm: 8 },
  ],
  body: {
    stiff: '上腹有点空落落的疼，像饿过头了。',
    ache: '胃那一块隐隐地烧，吃点东西能压下去；空着的时候最明显。',
    flare: '一阵拧着疼，得弯一下腰按着；冷汗出来了，话都懒得说。',
  },
  voice: {
    base: '允许说到一半按一下上腹、允许说「我先垫一口」；别说成矫情，也别报胃镜结果。',
    flare: '允许只回短句、允许说「等一下，缓缓」；不要描述呕吐物。',
  },
}
