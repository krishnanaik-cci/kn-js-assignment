/*------------------------------------
Task-12: Format Date
-------------------------------------
Created By: Krishna Naik 
Created Date: 31-03-2023
-------------------------------------*/
const getOrdinal = (dayValue) => {
  if (dayValue > 3 && dayValue < 21) return "th";
  switch (dayValue % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}; 

const formatDate = (dateValue) => {
  let date = new Date(dateValue);
  let month = date.toLocaleString("default", { month: "short" });
  let year = date.getFullYear();

  return `${date.getDate()}${getOrdinal(date.getDate())} ${month} ${year}`;
};
