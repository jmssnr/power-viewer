import DailyAverageHeatmap from "./components/DailyAverageHeatmap";
import classes from "./page.module.css";
import CountrySelect from "../components/CountrySelect";
import SeasonalAnalysis from "./components/SeasonalAnalysis";

export default function Analytics() {
  return (
    <>
      <h1 className={classes.title}>Analyze Renewable Energy Share</h1>
      <div style={{ display: "flex", justifyContent: "end" }}>
        <CountrySelect />
      </div>
      <DailyAverageHeatmap />
      <SeasonalAnalysis />
    </>
  );
}
