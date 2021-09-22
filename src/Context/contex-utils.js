export const decodeHtml = (html) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export const evalResult = (question, answer) => {
  const { correct_answer: correctAnswer } = question;
  if (answer === -1) return false;
  return correctAnswer.toLowerCase() === Boolean(answer).toString();
};
