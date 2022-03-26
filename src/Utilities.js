export const Utilities = {
  roundOff
};

function roundOff(value) {
  return Number(Math.round(value + "e" + 2) + "e-" + 2).toFixed(2);
}
