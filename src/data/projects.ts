export interface Project {
  projectNumber: string;
  title: string;
  classification: string;
  date: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  tags: string[];
}

export const projects: Project[] = [
  {
    projectNumber: "ASP-001-26",
    title: "GNSS SPOOFING DETECTION SIMULATOR",
    classification: "UNCLASSIFIED",
    date: "2026.02.24",
    subtitle: "GPS position estimation with real-world spoofing attack modeling",
    description:
      "Built a GPS position estimation simulator in C++ modeling a 24-satellite constellation, solving receiver position using iterative weighted least squares — the same core algorithm real GPS receivers use. Applied the system to a real-world drone enforcement scenario over Toronto airspace, where a spoofing attack manipulates pseudorange measurements to bypass Pearson Airport's no-fly zone. A multi-signal anomaly detector analyzes pseudorange consistency and clock bias to identify hijacked signals, with an animated Python split-screen visualizing the 19.5km gap between true and spoofed position.",
    specs: [
      { label: "Platform", value: "C++ / Python" },
      { label: "Constellation", value: "24 satellites" },
      { label: "Accuracy", value: "< 0.001m positional" },
      { label: "Scenario", value: "Toronto Airspace" },
      { label: "Status", value: "OPERATIONAL" },
    ],
    tags: ["GNSS", "GPS Spoofing", "Orbital Mechanics", "Simulation", "C++"],
  },
  {
    projectNumber: "ASP-002-26",
    title: "AERIAL THREAT DETECTION SYSTEM",
    classification: "UNCLASSIFIED",
    date: "2026.03.01",
    subtitle: "Real-time multi-class aerial threat classification via computer vision",
    description:
      "Fine-tuned a YOLOv8 object detection model on 5,000+ labeled aerial images to classify drones, aircraft, helicopters, and birds in real time via webcam. Built a threat prioritization layer that assigns HIGH/MEDIUM/LOW risk levels based on object class and detection confidence. Implemented a degraded conditions simulator applying fog, night, infrared, sensor noise, and rain filters to test model robustness under adverse sensor environments — directly relevant to real-world counter-UAS system requirements.",
    specs: [
      { label: "Platform", value: "Python / PyTorch" },
      { label: "Model", value: "YOLOv8n" },
      { label: "Dataset", value: "5,000+ images" },
      { label: "mAP@50", value: "86.1%" },
      { label: "Status", value: "OPERATIONAL" },
    ],
    tags: ["Computer Vision", "YOLOv8", "Counter-UAS", "PyTorch", "OpenCV"],
  },
  {
    projectNumber: "ASP-003-26",
    title: "MISSILE INTERCEPT SIMULATOR",
    classification: "UNCLASSIFIED",
    date: "2026.03.25",
    subtitle: "Scud-B vs Patriot PAC-2 engagement modeling — Dhahran 1991",
    description:
      "Modeled the Scud-B vs Patriot PAC-2 engagement at Dhahran 1991 using published system parameters in a physics-based C++ simulation. Implements the ISA atmospheric model for altitude-varying drag, a gravity turn launch sequence, and proportional navigation — the actual guidance law used in Patriot missiles — to compute intercept trajectories. Added chaff and flare countermeasures that attempt to decoy the interceptor's radar seeker, and exported trajectory data to a 3D Godot scene for real-time visualization of the full engagement.",
    specs: [
      { label: "Platform", value: "C++ / Python / Godot" },
      { label: "Atmosphere", value: "ISA Model" },
      { label: "Guidance", value: "Proportional Nav" },
      { label: "Scenario", value: "Dhahran 1991" },
      { label: "Status", value: "OPERATIONAL" },
    ],
    tags: ["Missile Dynamics", "Proportional Navigation", "Godot", "C++", "Defense"],
  },
];
