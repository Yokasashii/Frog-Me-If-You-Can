const canvasRank = document.getElementById("canvasRank")
const cRank = canvasRank.getContext("2d")

universalDrawInterface(canvasRank, cRank)

const rankStorageKey = "frog.top5Scores"
const maxScore = 5

function buildDefaultTop5() {
  return Array(maxScore).fill(0)
}

function normalizeTop5(scores) {
  if (!Array.isArray(scores)) return buildDefaultTop5()
  const cleaned = scores
    .map((value) => Number(value) || 0)
    .sort((a, b) => b - a)
    .slice(0, maxScore)
  while (cleaned.length < maxScore) {
    cleaned.push(0)
  }
  return cleaned
}

function loadTop5Scores() {
  const raw = localStorage.getItem(rankStorageKey);
  if (!raw) {
    const defaults = buildDefaultTop5();
    localStorage.setItem(rankStorageKey, JSON.stringify(defaults));
    return defaults;
  }

  try {
    const parsed = JSON.parse(raw)
    const normalized = normalizeTop5(parsed)
    localStorage.setItem(rankStorageKey, JSON.stringify(normalized))
    return normalized
  } catch {
    const defaults = buildDefaultTop5()
    localStorage.setItem(rankStorageKey, JSON.stringify(defaults))
    return defaults
  }
}

function saveTop5Scores(scores) {
  const normalized = normalizeTop5(scores)
  localStorage.setItem(rankStorageKey, JSON.stringify(normalized))
  return normalized;
}

function addScoreToTop5(newScore) {
  const current = loadTop5Scores()
  current.push(Number(newScore) || 0)
  return saveTop5Scores(current)
}

function resetTop5Scores() {
  return saveTop5Scores(buildDefaultTop5())
}

function getBestScore() {
  const top5 = loadTop5Scores()
  return top5[0] || 0
}

function drawTop5Scores() {
  const top5 = loadTop5Scores()

  cRank.fillStyle = "white"
  cRank.font = "36px Arial"
  cRank.fillText(
    "Top 5 Scores",
    canvasRank.width * 0.08,
    canvasRank.height * 0.25,
  );

  cRank.font = "28px Arial";
  for (let index = 0; index < maxScore; index++) {
    const y = canvasRank.height * 0.25 + 45 + index * 38;
    cRank.fillText(`${index + 1}. ${top5[index]}`, canvasRank.width * 0.08, y)
  }
}

function drawTheTitle() {
  cRank.fillRect(0, 0, canvasRank.width, canvasRank.height)

  cRank.font = "100px Arial"
  cRank.fillStyle = "white"
  cRank.fillText(
    "Frog me if you can !",
    canvasRank.width * 0.3,
    (canvasRank.height * 0.5) / 3,
  );

  cRank.font = "32px Arial";
  cRank.fillText(
    `Best score: ${getBestScore()}`,
    canvasRank.width * 0.34,
    canvasRank.height * 0.25,
  );
}

loadTop5Scores()
drawTheTitle()
drawTop5Scores()

window.addScoreToTop5 = addScoreToTop5
window.resetTop5Scores = resetTop5Scores
window.loadTop5Scores = loadTop5Scores