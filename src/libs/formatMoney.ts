export const formatMoney = (money: number | undefined) => {
  if (money) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(money);
  }
};
