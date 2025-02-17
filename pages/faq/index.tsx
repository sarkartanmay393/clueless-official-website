import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, { AccordionSummaryProps } from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/shared/Navbar/Navbar";
import Footer from "../components/shared/Footer";
import Link from "next/link";

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  })
);

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />} {...props} />
))(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
  "& .MuiSvgIcon-root": {
    fill: "grey",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const Faq: NextPage = () => {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <div>
        <Head>
          <title>ClueLess | FAQ</title>
          <meta name="description" content="Generated by create next app" />
        </Head>
        <Navbar />
        <div className="w-4/5 m-auto">
          <h1 className="font-raleway text-[28px] md:text-[36px] font-semibold leading-normal my-3 md:text-[28]">
            Having Questions?
            <span className="font-raleway text-skin-main"> Try finding them below </span>:
          </h1>
          <p className="leading-6 text-sm md:text-base my-5">
            Below you’ll find answers to the most common questions you may have on ClueLess. If you still can’t find the
            answer you’re looking for, just Contact us!
          </p>

          {/* FAQ section */}
          <h1 className="font-raleway text-[28px] md:text-[36px] font-semibold leading-normal my-3 md:text-[28]">
            FAQ
          </h1>

          {/* Accordion  */}
          <div>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
              className="dark:text-white dark:bg-[#2E4053]"
            >
              <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                <Typography>What is Clueless?</Typography>
              </AccordionSummary>
              <AccordionDetails className="dark:bg-[#17202A]">
                <Typography>
                  Clueless in a virtual open-source community built with the motive of “Learn and Grow”. We, as a
                  community, encourage and guide enthusiasts to dive into the world of open-source. We provide the best
                  resources available on the internet, write blogs that helps other to explore their domain more deeply,
                  organize events, GitHub repositories, organize hackathons, and more couniting activities.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
              className="dark:text-white dark:bg-[#2E4053]"
            >
              <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                <Typography>What do we provide?</Typography>
              </AccordionSummary>
              <AccordionDetails className="dark:bg-[#17202A]">
                <Typography>
                  Internet is flooded with so many resources that can make one confused and clueless. So we, the
                  Clueless Community provide the best, filtered, and curated resources like YouTube videos, GitHub
                  repositories, websites, cheatsheets, etc!
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
              className="dark:text-white dark:bg-[#2E4053]"
            >
              <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                <Typography>Do we have a community?</Typography>
              </AccordionSummary>
              <AccordionDetails className="dark:bg-[#17202A]">
                <Typography>
                  Yes! we do have an amazing Discord community where you can interact with other audiences, ask and help
                  others. There are different channels for every tech domain.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
              className="dark:text-white dark:bg-[#2E4053]"
            >
              <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                <Typography>Is it free?</Typography>
              </AccordionSummary>
              <AccordionDetails className="dark:bg-[#17202A]">
                <Typography>Yes! It is absolutely free.</Typography>
              </AccordionDetails>
            </Accordion>
          </div>

          <div className="my-6 flex items-center">
            <h2 className="text-lg font-semibold mr-3">Have Questions other than this?</h2>
            <Link href="/contact-us" passHref>
              <button className=" btn-blue">Contact</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
