const formatDate = (date: Date): string => {
  console.log(date);
  const stringDate = String(date);
  const parsedDate = new Date(stringDate);
  console.log(parsedDate);
  return new Intl.DateTimeFormat('pt-BR').format(parsedDate);
};
export default formatDate;
