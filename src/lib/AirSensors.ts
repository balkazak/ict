import type { Props as ProductCardProps } from "@/components/ProductCard.astro";

import apogeeCloudburst from "@/assets/monitoring/air/apogee-cloudburst.jpg";
import windsonic from "@/assets/monitoring/air/windsonic.jpg";
import hf4Hailflow from "@/assets/monitoring/air/hf4-hailflow.jpg";

export const AirSensors: ProductCardProps[] = [
  {
    id: "apogee-cloudburst",
    image: apogeeCloudburst,
    name: "Apogee Cloudburst Weighing Precipitation Gauge",
    overview: `The Apogee Cloudburst weighing precipitation gauge is an SDI-12 all-weather weighing gauge with no moving parts. It collects and measures total precipitation from rain, snow, sleet, and hail and corrects for temperature, evaporation, and vibration.`,
    features: `The Apogee Cloudburst weighing precipitation gauge is available as a WMO compatible rain, snow, sleet, and hail precipitation gauge.
<br><br>
Able to measure these parameters via a sensitive weighing platform, the Cloudburst gauge is a low power unit that contains no moving parts.
`,
  },
  {
    id: "windsonic",
    image: windsonic,
    name: "WindSonic sensor for wind speed and direction",
    overview: `The WindSonic sensor is an ultrasonic anemometer with SDI-12 connection for the measurement of wind speed and direction.
The WindSonic has no moving parts (allowing for long term maintenance free installations), low power consumption, making it ideal for integration into meteorological and hydrological monitoring systems.
Designed for installation in temperatures between -35°C to +70°C and humidity up to 100%, the WindSonic can be installed in many situations.
Compatible with any SDI-12 data logger or node, the WindSonic is a versatile sensor in a weather station or risk monitoring station.`,
    features: `The WindSonic has no moving parts (allowing for long term maintenance free installations), low power consumption, making it ideal for integration into meteorological and hydrological monitoring systems.
Designed for installation in temperatures between -35°C to +70°C and humidity up to 100%, the WindSonic can be installed in many situations.`,
    specifications: [
      { name: "Wind Speed", value: "" },
      { name: "Range", value: "0 – 60 m/s (116 knots)" },
      { name: "Accuracy", value: "±2% @12 m/s" },
      { name: "Resolution", value: "0.01 m/s (0.02 knots)" },
      { name: "Response Time", value: "0.25 seconds" },
      { name: "Threshold", value: "0.01 m/s" },
      { type: "divider" },
      { name: "Direction", value: "" },
      { name: "Range", value: "0 – 359° (No dead band)" },
      { name: "Accuracy", value: "±2° @12 m/s" },
      { name: "Resolution", value: "1°" },
      { name: "Response Time", value: "0.25 seconds" },
      { type: "divider" },
      { name: "Measurements", value: "" },
      { name: "Update rate", value: "1 Hz" },
      {
        name: "Parameters",
        value: "Wind Speed & Direction or U and V (vectors)",
      },
      { name: "Units of Measure", value: "m/s" },
    ],
  },
  {
    id: "hf4-hailflow",
    image: hf4Hailflow,
    name: "HF4 HailFlow sensor for Hail Monitoring",
    overview: `The HF4 HailFlow sensor for Hail Monitoring is a non-mechanical hail sensor. An acoustic instrument, the HF4 enables the
•	detection of hail
•	characterisation of hailstone size
The sensor is able to distinguish between 15 classes of hailstone diameter, ranging from 0.5 to 8 cm, with a capability of counting up to 25 solid impacts per second.
The HF4 is compatible with any SDI-12 logger or IoT Node (such as the MFR-Node or S-Node).`,
    features: `The sensor is able to distinguish between 15 classes of hailstone diameter, ranging from 0.5 to 8 cm, with a capability of counting up to 25 solid impacts per second.
The HF4 is compatible with any SDI-12 logger or IoT Node (such as the MFR-Node or S-Node).
The HF4 HailFlow Sensors is:
•	Non obstructable
•	Instrument with no mobile parts – totally sealed acoustic instrument
•	Universal mounting kit available
•	Omni-directional – even under the highest winds
•	Corrosion free and resistant to the highest winds and the most extreme conditions
•	Plug-and-Play or totally configurable – microcontroller inside
•	Can be connected to almost any external unit
•	SDI-12 and IoT compatible – internal memory`,
    specifications: [
      { name: "Measuring surface", value: "200 mm outer diameter disc" },
      { name: "Precipitation detected", value: "Solid only (hail)" },
      {
        name: "Hail size classes",
        value:
          "15 classes, from 0.5 cm (minimal detectable diameter) to >7.5 cm (possible saturation of the instrument)",
      },
      { name: "Counting capacity", value: "Up to 25 impacts per second" },
      {
        name: "Measurement Accuracy",
        value:
          "For a given controlled elastic momentum impact (such as spheres of equal diameter, density, Young modulus, falling speed and incidence angle), the response of the sensor varies typically by ± 10%, depending on the spatial position of the impact on the disc and on the sensor (± 10% variability between two sensors)",
      },
    ],
  },
  {
    id: "sf4-sandflow",
    name: "SF4 SandFlow sensor for Sand and Dust Monitoring",
    overview: `The SF4 SandFlow sensor for sand and dust monitoring is a non-mechanical sensor that measures particles and wind when contact is made with the measuring surface of the sensor.
An acoustic instrument, the SF4 enables the
•	measurement of solid particle flux (such as sand) in grammes per square metre per second (g/m2/s)
•	estimate of the wind speed
The analogue voltage sensor is selectable to either 2.5 volt or 5 volt, with the maximum voltage output reflecting either 250 g/m2/s for particle flux or 250 km/h for wind speed.
The SF4 is compatible with any SDI-12 logger or IoT Node (such as the MFR-Node or S-Node).`,
    features: `The analogue voltage sensor is selectable to either 2.5 volt or 5 volt, with the maximum voltage output reflecting either 250 g/m2/s for particle flux or 250 km/h for wind speed.
The SF4 is compatible with any SDI-12 logger or IoT Node (such as the MFR-Node or S-Node).`,
    specifications: [
      {
        name: "Measuring surface",
        value: "32 mm diameter, 920 mm long cylindrical tube",
      },
      {
        name: "Physical phenomena detected",
        value:
          "Flux of solid particles transported by the wind (sand flow, aeolian sand transport, and more generally all kind of solid particle fluxes of the same range of kinetic energy generating impacts on the measuring surface).",
      },
      {
        name: "Wind measurement",
        value:
          "Wind speed (more generally, an estimation of the average speed of the laminar aeolian flux generating friction on measuring surface).",
      },
      { type: "divider" },
      {
        name: "Measurement accuracy (Flux)",
        value:
          "For a given controlled flux homogeneously distributed along the measuring surface of the sensor (such as particles of a given shape profile, density, Young modulus, falling speed and incidence angle), the response of the sensor varies of ± 5% and the variability between two sensors is below ± 10%.",
      },
      {
        name: "Measurement accuracy (Wind)",
        value:
          "In laminar established conditions and without external parasitic turbulences or low-frequency noise, the wind speed accuracy is ±15%.",
      },
      {
        name: "Particle velocity",
        value:
          "Not measured. Can only be an interpretation of the wind speed measurement.",
      },
    ],
  },
  {
    id: "rf4-rainflow",
    name: "RF4 RainFlow for Rain and Hail Monitoring",
    overview: `The RF4 RainFlow for Rain and Hail Monitoring is a non-mechanical rain and hail sensor. An acoustic instrument, the RF4 measures:
•	rain and hail precipitation
•	High-resolution disdrometry (number and size of raindrops)
The RF4 is compatible with any SDI-12 logger or IoT Node (such as the MFR-Node or S-Node).`,
    features: `The RF4 RainFall Sensors is:
•	Non obstructable
•	Instrument with no mobile parts – totally sealed acoustic instrument
•	Universal mounting kit available
•	Omni-directional – even under the highest winds
•	Corrosion free and resistant to the highest winds and the most extreme conditions
•	Plug-and-Play or totally configurable – microcontroller inside
•	Can be connected to almost any external unit
•	SDI-12 and IoT compatible – internal memory`,
    specifications: [
      {
        name: "Measuring surface",
        value: "160 mm outer diameter hemisphere (402 cm²)",
      },
      {
        name: "Precipitation detected",
        value:
          "Liquid (undifferentiated): rain, drizzle/rain, mixed rain/snow, sleet. Solid: hail.",
      },
      {
        name: "Rain Intensity accuracy",
        value:
          "15% at 100% duty-cycle (most global precision and accuracy criteria)",
      },
      {
        name: "Rain DSD",
        value:
          "27 classes from ≤ 0.75 mm to 7.0mm with a detection threshold (minimum detectable diameter) of about 0.5 mm",
      },
      { type: "divider" },
      {
        name: "Measurement accuracy (liquid only)",
        value:
          "A spatially distributed flux of controlled drops of a nominal diameter equal to the centre diameter of the class ± 20% produces an output centred in the corresponding class with typically 50% of the flux concentrated into the two lateral size-classes.",
      },
      {
        name: "Hail detection",
        value:
          "Counting of the number of hailstone impacts up to 5 impacts per second and for hailstone diameter detection threshold of 0.5 cm.",
      },
      { name: "Particle velocity", value: "Not measured." },
    ],
  },
];
