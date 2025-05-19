import stevensSdx from "@/assets/monitoring/water/level/stevens-sdx.png";
import ecl8439 from "@/assets/monitoring/water/level/ecl8439.png";
import stevensSmartpt from "@/assets/monitoring/water/level/stevens-smartpt.png";
import type { Props as ProductCardProps } from "@/components/ProductCard.astro";

export const WaterLevelsTransmitters: ProductCardProps[] = [
  {
    id: "stevens-sdx",
    image: stevensSdx,
    name: "The Stevens SDX (Submersible Depth Transmitter)",
    overview: `The Stevens SDX (Submersible Depth Transmitter) is a pressure sensor that delivers accurate results. High impact, corrosion-resistant PVC Type II housing and potted electronics make the SDX extremely durable for most water and hostile fluid environments.
<br><br>
The SDX comes equipped with user specified vented cable lengths. The vent provides an atmospheric reference for the sensor, which is necessary for ensuring the highest possible accuracy when making a level measurement.
<br><br>
The SDX features one 4-20 mA analogue output signal that corresponds linearly to range, accuracy of ± 0.25% full span.
`,
  },
  {
    id: "ecl8439",
    image: ecl8439,
    name: "The ECL 8439 Submersible Pressure Transmitter",
    overview: `The ECL 8439 Submersible Pressure Transmitter is for measuring water level and water depth is based on a thick-film-on-ceramic technology. With the high-performance ASIC chip electronics it ensures a high level of accuracy over a wide temperature range,(± 0.5% full span). Featuring configurable pressure ranges (0 – 2Bar), integrated lightning protection and either a stainless steel or duplex stainless steel for fresh or saltwater installations.
<br><br>
The ECL 8439 is a suitable solution for groundwater, run-off, and surface water monitoring. The 4 – 20mA output signal it is supported by ICT International dataloggers and IoT nodes
`,
  },
  {
    id: "stevens-smartpt",
    image: stevensSmartpt,
    name: "Stevens SmartPT",
    overview: `The Smart PT is a ceramic membrane pressure and temperature sensor that delivers accurate results for a wide range of fluid level measurement applications. In addition to simple instantaneous measurements, this smart sensor features the ability to capture peak crest levels, and to automatically sample and report basic statistics on a configurable time interval.
<br><br>
Stainless-steel housing and potted electronics make Smart PT extremely durable and long lasting for submersible water applications.
<br><br>
Smart PT is available with a vented or absolute pressure sensing module. Both versions come equipped with user specified length of cable. The vent tube provides an atmospheric reference which compensates for variations in barometric pressure.
<br><br>
In addition to programmable corrections for local variations in Earth’s gravitational field, Smart PT also compensates automatically for the water temperature-density dependency.
`,
    features: `Depth scales available from 2 meters up to 200 meters.
<br><br>
Every Smart PT provides digital SDI-12, RS-485 and Modbus RTU over RS-485. Compatible with existing power and data logging instruments, the sensor can easily be deployed for data collection at remote monitoring sites.
`,
  },
];
