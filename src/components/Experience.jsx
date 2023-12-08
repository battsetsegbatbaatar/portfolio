import React from "react";
import { Label } from "./Label";
import { Card } from "./Card";

const histories = [
  {
    position: "Sr. Frontend Developer",
    startDate: "Nov 2021 ",
    endDate: " Present",
    highlights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    position: "Team Lead",
    startDate: "Jul 2017 ",
    endDate: " Oct 2021",
    highlights: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    position: "Full Stack Developer",
    startDate: "Dec 2015 ",
    endDate: " May 2017",
    highlights: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export const Experience = () => {
  return (
    <container className="w-screen bg-gray-50">
      <div className="bg-gray-50 max-w-200 flex flex-col px-8 gap-12 justify-center items-center">
        <Label
          text="Experience"
          para="Here is a quick summary of my most recent experiences:"
        />
        {histories.map((history) => (
          <Card
            title={history.position}
            highlights={history.highlights}
            startDate={history.startDate}
            endDate={history.endDate}
          />
        ))}
      </div>
    </container>
  );
};
