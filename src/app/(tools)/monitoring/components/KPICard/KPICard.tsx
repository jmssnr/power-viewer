import Card from "@/components/primitives/Card";
import React from "react";

type KPICardProps = {
  title: string;
  value: string | React.ReactNode;
};

const KPICard = ({ title, value }: KPICardProps) => {
  return (
    <Card style={{ backgroundColor: "var(--gray-base)" }}>
      <h4 style={{ color: "var(--gray-text)", fontWeight: 500 }}>{title}</h4>
      <h2 style={{ color: "var(--accent-text)" }}>{value}</h2>
    </Card>
  );
};

export default KPICard;
