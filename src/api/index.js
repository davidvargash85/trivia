const responseShape = {
  errors: [],
  questions: []
};

const getUrl = (diff, qty) => {
  return `https://opentdb.com/api.php?amount=${qty}&difficulty=${diff}&type=boolean`;
};

const fetchQuestions = async (difficulty = 'easy', qty = 10) => {
  try {
    const response = await fetch(getUrl(difficulty, qty));
    const json = await response.json();
    const { results } = json;
    return results;
  } catch (error) {
    return {
      ...responseShape,
      errors: [error]
    };
  }
};

export default fetchQuestions;
