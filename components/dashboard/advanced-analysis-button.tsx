"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
export function AdvancedAnalysisButton({ enableToast }) {
  let toast = null;
  if (enableToast) {
    const ret = useToast();
    toast = ret.toast;
  }

  const handleViewAdvancedAnalysis = () => {
    console.log("查看高级分析");
    toast?.({
      title: "查看高级分析",
      description: "查看高级分析",
      duration: 3000,
    });
  };

  return <Button onClick={handleViewAdvancedAnalysis}>查看高级分析</Button>;
}
