import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Image1 from "../../public/program.png";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
export default function Card1({ value }) {
  // console.log(value);
  const maxLength = 240;

  const trimDescription = (description) => {
    if (description.length > maxLength) {
      return description.substring(0, maxLength)+ "...";
    }
    return description;
  };
  return (
    <div className="cardcontainer  ">
      <Card sx={{ maxWidth: 320, minWidth: 320 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={value?.main_url}
            alt="green iguana"
          />
          <CardContent className=" bg-[#E6F5FA] ">
            <Typography
              gutterBottom
              variant="h5"
              className="heading-class"
              component="div"
            >
              <span className="heading  text-xl ">{value?.name}</span>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span className="para text-md text-black ">
                {trimDescription(value.description)}
              </span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          className="   bg-[#E6F5FA]  "
          style={{ paddingBottom: "18px" }}
        >
          <Button size="small" color="primary">
            <Link
              to={`/ParticularProgram/${value?._id}`}
              className="knowmorebtn text-md  font-semibold  normal-case   "
              style={{ width: "140px" }}
            >
              Know more
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
