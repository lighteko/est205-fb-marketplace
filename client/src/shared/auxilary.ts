function toRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  if (diff < 1000) {
    return "just now";
  } else if (diff < 60000) {
    return `${Math.floor(diff / 1000)}s`;
  } else if (diff < 3600000) {
    return `${Math.floor(diff / 60000)}m`;
  } else if (diff < 86400000) {
    return `${Math.floor(diff / 3600000)}hr`;
  } else if (diff < 604800000) {
    return `${Math.floor(diff / 86400000)}d`;
  } else if (diff < 2628000000) {
    return `${Math.floor(diff / 604800000)}wk`;
  } else if (diff < 31540000000) {
    return `${Math.floor(diff / 2628000000)}mo`;
  } else {
    return `${Math.floor(diff / 31540000000)}yr`;
  }
}

function toEasyPrice(price: number): string {
  const stringPrice = price.toString().split(".")[0];
  const length = stringPrice.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    if ((length - i) % 3 === 0 && i !== 0) {
      result += ",";
    }
    result += stringPrice[i];
  }
  if (price.toString().split(".")[1]) return result + "." + price.toString().split(".")[1];
  return result;
}

export { toRelativeTime, toEasyPrice };