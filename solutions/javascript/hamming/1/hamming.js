//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (dna1, dna2) => {
  if (dna1.length === dna2.length) {
    let distance = 0;
  const arrDna1 = dna1.split('');
  const arrDna2 = dna2.split('');
  for (let index = 0; index < arrDna1.length; index++) {
    if (arrDna1[index] !== arrDna2[index]) {
      distance++;
    }
  }
  return distance;
  }
  throw Error('strands must be of equal length')
};
