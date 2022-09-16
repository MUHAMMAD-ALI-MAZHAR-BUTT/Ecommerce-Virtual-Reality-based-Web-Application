import * as React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="row justify-content-center mb-5">
            <div className="col-10">
                <div className="text-center mt-2 mb-3" id="heading">
                    <p className="h1 text-dark pb-0 my-4" style={{ fontFamily: 'Ultra, serif', }}>FAQ</p>
                    {/* <hr className="fw-bold w-75 " style={{ display: 'inline-block' }} /> */}
                </div>
                <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            General settings
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                            I am an accordion
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                            feugiat. Aliquam eget maximus est, id dignissim quam.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2bh-content"
                        id="panel2bh-header"
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>Users</Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                            You are currently not an owner
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Donec placerat, lectus sed mattis semper, neque lectus feugiat
                            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
                            laoreet laoreet.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                    >
                        <Typography sx={{ width: "33%", flexShrink: 0 }}>
                            Advanced settings
                        </Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                            Filtering has been entirely disabled for whole web server
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
                            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    );
}
