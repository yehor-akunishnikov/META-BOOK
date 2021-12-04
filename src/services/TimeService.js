export const getTimeCodeFromNum = (num) => {
    let seconds = parseInt(num);
    let minutes = parseInt(seconds / 60);
    seconds -= minutes * 60;
    const hours = parseInt(minutes / 60);
    minutes -= hours * 60;
  
    return `${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}:${String(
      seconds % 60
    ).padStart(2, 0)}`;
};