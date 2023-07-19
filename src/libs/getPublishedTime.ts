export const getPublishedTime = (publishedTime: string) => {
  const now = new Date();
  const convertTime = new Date(publishedTime);

  const diff = now.getTime() - convertTime.getTime();
  const diffSeconds = Math.floor(diff / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  switch (true) {
    case diffSeconds < 60:
      return `${diffSeconds} ${diffSeconds > 1 ? "seconds" : "second"} ago`;
    case diffMinutes < 60:
      return `${diffMinutes} ${diffMinutes > 1 ? "minutes" : "minute"} ago`;
    case diffHours < 24:
      return `${diffHours} ${diffHours > 1 ? "hours" : "hour"} ago`;
    case diffDays < 30:
      return `${diffDays} ${diffDays > 1 ? "days" : "day"} ago`;
    case diffMonths < 12:
      return `${diffMonths} ${diffMonths > 1 ? "months" : "month"} ago`;
    default:
      return `${diffYears} ${diffYears > 1 ? "years" : "year"} ago`;
  }
};
