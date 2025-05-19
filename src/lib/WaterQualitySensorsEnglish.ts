import awqPh from "@/assets/monitoring/water/quality/AWQ-pH.webp";
import awqNtu from "@/assets/monitoring/water/quality/AWQ-NTU.png";
import awqCtzn from "@/assets/monitoring/water/quality/AWQ-CTZN.jpg";
import awqC4e from "@/assets/monitoring/water/quality/awq-c4e.jpg";
import awqDo from "@/assets/monitoring/water/quality/AWQ-DO.webp";

export const WaterQualitySensors = [
  {
    id: "awq-ph",
    image: awqPh,
    name: "AWQ-pH pH/Redox/Temp sensor",
    overview:
      "AWQ-pH pH/Redox/Temp sensor designed to perform under hard conditions, from pure mountain water with conductivity as low as 20 μS/cm, lakes and rivers (100 – 2000 μS/cm), seawater with conductivities of 50 mS/cm, to wastewater with conductivity higher than 200 mS/cm.",
    features:
      "The AWQ-pH pH/Redox/Temp sensor stores calibration and history data within the sensor and features long-life Plastogel® reference technology, increasing the lifetime of the probe and reducing the need to refill. Providing Modbus RS485 and SDI-12, the AWQ-pH sensor can be connected to most commonly used data collection devices.",
    specifications: [
      { name: "pH", value: "0 to 14" },
      { name: "Redox", value: "-1000 to +1000 mV" },
      { name: "Temperature", value: "-10°C to +50°C" },
      { name: "Type", value: "Combination pH/Redox/Temp sensor" },
      { name: "Interface", value: "Digital Sensor: Modbus RS 485/SDI-12" },
      { name: "Features", value: "Internal Calibration Data Storage" },
      { name: "Maintenance", value: "pH/ORP Cartridge for simple maintenance" },
    ],
  },
  {
    id: "awq-ntu",
    image: awqNtu,
    name: "AWQ-NTU sensor",
    overview:
      "AWQ-NTU sensor is an optical sensor for the measurement of Nephelometric Turbidity, based on IR nephelometry/850 nm.",
    features: `The AWQ-NTU measurement principle is based on IR nephelometry/850 nm. The sensor can be calibrated with a formazine standard solution. The AWQ-NTU sensor uses low-cost optical technology, requiring very little maintenance and no consumables. The sensor can be connected to any types of transmitters, display units, controllers, or data loggers with Modbus RS-485 or SDI-12 inputs. The optical sensor saves its calibration data for better measurement management. All data concerning calibration, history, users and measurements are processed within the AWQ-NTU sensor and transmitted via RS-485 or SDI-12.
<br><br>
<b>Applications include:</b>
<br>
•	Urban wastewater treatment (inlet/ outlet controls)<br>
•	Sanitation network<br>
•	Industrial effluent treatment<br>
•	Surface water monitoring<br>
•	Drinking water
`,
    specifications: [
      { name: "Range", value: "0 to 4000 NTU or 0-4500 mg/L" },
      { name: "Protection", value: "Robust and waterproof (IP68)" },
      { name: "Power", value: "Ultra low-power consumption" },
      { name: "Interface", value: "Digital output: Modbus RS-485 or SDI-12" },
    ],
  },
  {
    id: "awq-ctzn",
    image: awqCtzn,
    name: "AWQ-CTZN Inductive Conductivity/Salinity sensor",
    overview:
      "AWQ-CTZN Inductive Conductivity/Salinity sensor measures conductivity, salinity and temperature in water.",
    features: "",
    specifications: [
      {
        name: "Measurement Principle",
        value: "Inductive conductivity sensor, temperature regulated",
      },
      { name: "Measurement Range (Conductivity)", value: "0 to 100 ms/cm" },
      { name: "Resolution", value: "0.1 ms/cm" },
      { name: "Measurement Range (Salinity)", value: "5-60 g/Kg" },
      {
        name: "Temperature Compensation",
        value: "Inbuilt NTC or external measurement",
      },
      { name: "Accuracy T°C", value: "± 0.1°C, range 0-40°C" },
      {
        name: "Response Time",
        value: "90% of the value in less than 30 seconds",
      },
      {
        name: "Signal Interface",
        value: "Modbus RS-485 standard, SDI-12 optional",
      },
      { name: "Measurement Interval", value: "1Hz" },
    ],
  },
  {
    id: "awq-c4e",
    image: awqC4e,
    name: "AWQ-C4E",
    overview:
      "AWQ-C4E is for measuring conductivity, salinity and temperature in water uses 4 electrodes for accurate measurements.",
    features: "",
    specifications: [
      {
        name: "Electrode Type",
        value: "4 electrodes (2 graphite, 2 platinum)",
      },
      {
        name: "Measurement Range (Conductivity)",
        value: "0-200 μS/cm, 0–2000 μS/cm, 0–20 mS/cm, 0–200 mS/cm",
      },
      { name: "Resolution", value: "0.01 to 1, depending on range" },
      { name: "Accuracy", value: "±1% of the full range" },
      { name: "Measurement Range (Salinity)", value: "5-60 g/Kg" },
      { name: "Measurement Range (TDS-KCl)", value: "0-133000 ppm" },
      { name: "Response Time", value: "< 5s" },
    ],
  },
  {
    id: "awq-do",
    image: awqDo,
    name: "AWQ-DO Sensor for Dissolved Oxygen",
    overview:
      "AWQ-DO sensor measures dissolved oxygen in water using an optical luminescence measurement principle.",
    features: `Measuring dissolved oxygen in water, the OPTOD sensor uses an optical luminescence measurement principle.
With two versions, stainless steel and titanium, for different conditions:
<br>
<div class="px-4"> 
•	The OPTOD stainless steel sensor is used for measurement of urban wastewater and industrial effluent treatment, as well as surface water monitoring.
<br>
•	The titanium version is designed for seawater and other corrosive environment.
</div> 
Both versions share the same RS485 and SDI-12 signal output options, as well as the Aqualabo stored calibration data system enabling simple change over for maintenance purposes.

<br><br>
OPTICAL TECHNOLOGY
<br>
The AWQ-DO (Optical Dissolved Oxygen technology) is based on luminescent optical technology. The AWQ-DO sensor is in compliance with the ASTM International Method D888-05. AWQ-DO does not require calibration, and thanks to an ultra low power technology, the AWQ-DO sensor meets the demands of field work, short and long term installation. Without oxygen consumption, this technology allows you to accurate measure in all situations, especially in very low oxygen concentrations.
<br><br>
DIGITAL TECHNOLOGY
<br>
The AWQ-DO sensor stores calibration and history data within the sensor. This allows for a plug and play system without the need for re-calibration.
Thanks to Modbus RS485 and SDI-12, the AWQ-DO can be connected to most commonly used devices.
<br><br>
CONSTRUCTION
<br>
Compact, strong and light, the sensor can be used for portable measurement, or installed for fixed/permanent use.
Body in Stainless steel 316 L (passivation treated) or in Titanium for applications in corrosive environments.
`,
    specifications: [
      { name: "Measurement Range (ppm)", value: "0 to 20 ppm" },
      { name: "Measurement Range (%)", value: "0-200%" },
      { name: "Resolution", value: "0.01" },
      { name: "Accuracy", value: "± 0.1 mg/L, ± 0.1 ppm, or ± 1%" },
      {
        name: "Response Time",
        value: "90% of the value in less than 60 seconds",
      },
      { name: "Recommended Measurement Frequency", value: ">5 s" },
    ],
  },
];
