export const checkStatus = (status: number | undefined) => {
  if (status === 1) {
    return "Hiring";
  } else {
    return "Closed";
  }
};
