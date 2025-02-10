import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function CustomAccordion() {
  return (
    <div
      style={{ width: "100%", maxWidth: "900px" }}
      className="flex gap-5 flex-col font"
    >
      <Accordion
        className="w-full"
        style={{ border: "none", boxShadow: "none", borderTop: "none", borderBottom: "none" }} // Ensuring no border
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          style={{
            backgroundColor: "#F7F8FA",
            minHeight: "48px", // Adjusted to a more typical height
            borderTop: "none", // Ensure no top border
            borderBottom: "none" // Ensure no bottom border
          }}
        >
          <Typography className="text-[17px]" style={{ fontWeight: "bold" }}>
            What is Thevehiclevin Canada?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "16px" }}> {/* Adjusted padding for better content display */}
          <Typography className="font text-[15px]">
            Thevehiclevin offers an accessible and budget-friendly solution for
            Canadians seeking comprehensive vehicle history reports. Through
            Thevehiclevin, users can effortlessly perform VIN checks on
            Canadian-registered vehicles, obtaining detailed reports that
            include vital information. This encompasses matching records, where
            applicable, for cars imported from the United States, providing  
            users with a thorough understanding of their vehicle’s history. Is
            Thevehiclevin Canada legit?
            <br/>
            Compare Thevehiclevin vs Carfax in terms of cost and content.
            <br/>
            What is a Canada VIN Check vs VIN decoder?
            <br/>
            How does Thevehiclevin ensure the accuracy of its reports?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="w-full"
        style={{ border: "none", boxShadow: "none", borderTop: "none", borderBottom: "none" }} // Ensuring no border
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
          style={{
            backgroundColor: "#F7F8FA",
            minHeight: "48px", // Adjusted to a more typical height
            borderTop: "none", // Ensure no top border
            borderBottom: "none" // Ensure no bottom border
          }}
        >
          <Typography className="text-[17px]" style={{ fontWeight: "bold" }}>
            Is Thevehiclevin Canada legit?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "16px" }}> {/* Adjusted padding for better content display */}
          <Typography className="font text-[15px]">
            Yes, TheVehicleVin Canada is legitimate, as officially announced in
            a press release in 2020. The service, an extension of
            TheVehicleVin.com serving the U.S. since 2012, provides an
            affordable option for Canadians to access comprehensive vehicle
            history reports. Users can check a VIN registered in Canada and
            receive detailed reports, including matching registration records,
            salvage records, theft records, buyback records, and a bonus U.S.
            history report. TheVehicleVin has a proven track record,
            distributing over 10 million vehicle history reports in the U.S. at
            a fraction of the cost compared to similar reports from Carfax.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="w-full"
        style={{ border: "none", boxShadow: "none", borderTop: "none", borderBottom: "none" }} // Ensuring no border
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
          style={{
            backgroundColor: "#F7F8FA",
            minHeight: "48px", // Adjusted to a more typical height
            borderTop: "none", // Ensure no top border
            borderBottom: "none" // Ensure no bottom border
          }}
        >
          <Typography className="text-[17px]" style={{ fontWeight: "bold" }}>
            Compare Thevehicle vs Carfax in terms of cost and content
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "16px" }}> {/* Adjusted padding for better content display */}
          <Typography className="font text-[15px]">
          TheVehicleVin.ca offers a cost-effective alternative to Carfax,
            with a comprehensive vehicle history report priced at one-third or
            $29 less. TheVehicleVin is recommended for those prioritizing
            vehicle registration, status, and odometer readings, while Carfax
            may be preferable for in-depth accident and service records. For
            cost-efficient screening of a large number of cars, using both
            TheVehicleVin and Carfax reports is suggested. TheVehicleVin can be
            employed for initial pre-screening, and Carfax can be utilized for
            detailed validation of top choices.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        className="w-full"
        style={{ border: "none", boxShadow: "none", borderTop: "none", borderBottom: "none" }} // Ensuring no border
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
          style={{
            backgroundColor: "#F7F8FA",
            minHeight: "48px", // Adjusted to a more typical height
            borderTop: "none", // Ensure no top border
            borderBottom: "none" // Ensure no bottom border
          }}
        >
          <Typography className="text-[17px]" style={{ fontWeight: "bold" }}>
            What is Canada VIN check vs VIN decoder?
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ padding: "16px" }}> {/* Adjusted padding for better content display */}
          <Typography className="font text-[15px]">
          TheVehicleVin Canada is a comprehensive VIN check service
            specifically designed for Canadian-registered vehicles. It provides
            a VIN search to generate a detailed report on the history of a
            vehicle and even US historical records if available. While a VIN
            decoder provides basic information about a vehicle, TheVehicleVin
            Canada goes further by offering full car history reports. These
            reports include crucial details such as title history, accident
            records, odometer readings, and more, making it a more comprehensive
            tool for assessing the overall history and condition of a vehicle.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
