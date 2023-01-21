
const calculateInvestment = async (req, res) => {
  console.log("req:", req.body);
  let { yearlyInsvet: P, interest: i, year: n } = req.body;

  i = i / 100;

  const totalMaturity = Math.round(P * ((Math.pow(1 + i, n) - 1) / i));

  const totalInvestment = P * n;
  const interestGained = totalMaturity - totalInvestment;
  return res.json({ totalMaturity: totalMaturity, totalInvestment: totalInvestment, interestGained: interestGained });
};
module.exports = { calculateInvestment };
