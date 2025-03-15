import { bangMap } from './bang';

function findBangAtEnd(inputString: string) {
  const bangPattern = /!\w+$/;
  const match = inputString.match(bangPattern);
  return {
    bang: match?.[0].replace('!', '') || 'g',
    text: inputString.replace(match?.[0] || '', '').replace('/', ''),
  };
}

export const startSearch = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('q');
  if (myParam) {
    const { bang, text } = findBangAtEnd(myParam);
    const selectedBang = bangMap.get(bang);
    const urlString = selectedBang?.u.replace('{{{s}}}', text);
    if (urlString) window.location.replace(urlString);
  }
};

startSearch();
