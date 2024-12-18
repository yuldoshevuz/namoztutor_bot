const formatApiData = (data) => {
  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentyabr",
    "oktyabr",
    "noyabr",
    "dekabr",
  ];

  const [year, month, day] = data.date.split("-");
  const { weekday } = data;
  return {
    date: {
      day: +day,
      month: months[+month - 1],
      year: +year,
      weekday,
    },
    times: data.times,
  };
};

module.exports = formatApiData;
