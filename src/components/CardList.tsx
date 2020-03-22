import React from "react";
import Card from "./Card";
import { IRobot } from "../containers/App";

interface ICardListProps {
  robots: Array<IRobot>;
}

const CardList = ({ robots }: ICardListProps): JSX.Element => {
  return (
    <div>
      {robots.map(robot => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default CardList;
