import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

export default function TimelineCard(props) {
  return (
    <Timeline>
      {props.items.map((item, index) => {
        return (
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="white"
            >
              <p className="text-[12px] md:text-lg w-[40px] md:w-[100%] mx-auto">
                {item.year}
              </p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span" color="#E9E12F">
                <p className="text-sm md:text-lg w-[100px] md:w-[100%] m-0 p-0">
                  {item.course}
                </p>
              </Typography>
              <br />
              <Typography variant="p" className="text-xs">
                <p className="text-[10px] md:text-[14px] w-fit m-0 p-0">
                  {item.where}
                </p>
              </Typography>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
}
