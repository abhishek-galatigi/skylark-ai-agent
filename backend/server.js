require("dotenv").config();

const express = require("express");
const cors = require("cors");

const askAI = require("./ai");
const cleanBoardData = require("./cleanData");
const { getBoardItems } = require("./monday");

const app = express();

app.use(cors());
app.use(express.json());

function simplifyDeals(deals) {
  return deals.map((d) => ({
    customer: d.name,
    sector: d["Sector/service"],
    status: d["Deal Status"],
    stage: d["Deal Stage"],
    probability: d["Closure Probability"],
    value: d["Masked Deal value"],
    closeDate: d["Tentative Close Date"],
  }));
}

function simplifyWorkOrders(workOrders) {
  return workOrders.map((w) => ({
    customer: w.name,
    sector: w["Sector"],
    executionStatus: w["Execution Status"],
    invoiceStatus: w["Invoice Status"],
    workStatus: w["WO Status (billed)"],
    amount: w["Amount in Rupees (Excl of GST) (Masked)"],
  }));
}

app.post("/chat", async (req, res) => {
  try {

    const { question } = req.body;

    const deals = await getBoardItems(5030146824);
    const workOrders = await getBoardItems(5030146810);

   const cleanDeals = cleanBoardData(deals.items_page.items);
const cleanWorkOrders = cleanBoardData(workOrders.items_page.items);

const allDeals = simplifyDeals(cleanDeals);
const allWorkOrders = simplifyWorkOrders(cleanWorkOrders);

const keyword = question.toLowerCase();

const filteredDeals = allDeals.filter(deal =>
    JSON.stringify(deal).toLowerCase().includes(keyword)
);

const filteredWorkOrders = allWorkOrders.filter(work =>
    JSON.stringify(work).toLowerCase().includes(keyword)
);

const finalDeals =
    filteredDeals.length > 0 ? filteredDeals : allDeals.slice(0, 5);

const finalWorkOrders =
    filteredWorkOrders.length > 0 ? filteredWorkOrders : allWorkOrders.slice(0, 5);

const answer = await askAI(
    question,
    finalDeals,
    finalWorkOrders
);

    res.json({
      answer,
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message,
    });

  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});