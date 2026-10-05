"use client";

import { SmartAttendVisual } from "./SmartAttendVisual";
import { MediCareVisual } from "./MediCareVisual";
import { SignSpeakVisual } from "./SignSpeakVisual";

/* Maps project title to its conceptual visual */
const visualMap: Record<string, React.ComponentType> = {
  SMARTATTEND: SmartAttendVisual,
  MediCare: MediCareVisual,
  "SignSpeak AI": SignSpeakVisual,
};

export function ProjectVisual({ title }: { title: string }) {
  const Visual = visualMap[title];
  if (!Visual) return null;
  return <Visual />;
}
