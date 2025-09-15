// formatter.js
export const useFormatter = () => {
  const formatDateJa = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("/").map(Number);
    return `${year}年${month}月${day}日`;
  };

  return {
    formatDateJa,
  };
};
