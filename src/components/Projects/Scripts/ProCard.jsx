import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import proList from "./../Lists/proList";

export default function ProCard() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-row flex-wrap h-fit justify-around gap-10">
      {proList.map((item, index) => {
        return (
          <Card
            className="p-1 flex flex-col gap-5 border-4 border-white rounded-[20px] box w-[280px] md:w-[345px]"
            style={{ backgroundColor: "black", color: "white" }}
            data-aos={(item.id % 3) % 2 > 0 ? "fade-right" : "fade-left"}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              height="130"
              image={item.url}
              className="h-[150px]  p-3"
            />
            <hr className="border-2 border-white" />
            <CardContent className="h-[200px] md:h-[180px] ">
              <Typography gutterBottom variant="h5" component="div">
                {item.name}
              </Typography>
              <Typography variant="body2" color="gray">
                {item.desc}
              </Typography>
            </CardContent>
            <CardActions className="h-[30px] flex items-center">
              <Button size="small">
                <a href={item.git} target="_blank">
                  Git Repo
                </a>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}
