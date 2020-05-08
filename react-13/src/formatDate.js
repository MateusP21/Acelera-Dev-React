const formatDate = date => {
  const dateFormated = new Date(date);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };

  return dateFormated.toLocaleDateString("PT-BR", options);
};

export default formatDate;
