export const isPalindrome = (str: string): boolean => {
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false; // Retorna falso se os caracteres não forem iguais
    }
  }
  return true; // Retorna verdadeiro se for um palíndromo
};
