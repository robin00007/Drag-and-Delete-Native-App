import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Draggable from "react-native-draggable";

import Card from "./card";
import DeleteCard from "./deleteCard";

const HorizontalScroll = () => {
  const [cards, setCards] = useState([0, 1, 2]);
  const [overlappingId, setOverlappingId] = useState([-1]);
  const [deleteCompLayout, setDeleteCompLayout] = useState(null);

  const handleDragRelease = (event, gestureState, id) => {
    const { dx, dy, x0, y0, moveX, moveY, stateID } = gestureState;
    const draggableLayout = {
      x: moveX,
      y: moveY,
      width: 100,
      height: 100,
    };

    const otherComponentLayout = {
      ...deleteCompLayout,
    };

    console.log("dx: ", dx);
    console.log("dy: ", dy);
    console.log("x0: ", x0);
    console.log("y0: ", y0);
    console.log("moveX: ", moveX);
    console.log("moveY: ", moveY);
    console.log(deleteCompLayout);
    console.log("id: ", stateID);
    console.log("id: ", id);

    const isColliding =
      draggableLayout.x < otherComponentLayout.x + otherComponentLayout.width &&
      draggableLayout.x + draggableLayout.width > otherComponentLayout.x &&
      draggableLayout.y <
        otherComponentLayout.y + otherComponentLayout.height &&
      draggableLayout.y + draggableLayout.height > otherComponentLayout.y;

    if (isColliding) {
      setOverlappingId([...overlappingId, id]);
    }
  };
  useEffect(() => {
    console.log("overlapping div : ", overlappingId);
  }, [overlappingId]);
  return (
    <ScrollView horizontal={true} contentContainerStyle={styles.container}>
      {cards.map((item, index, cards) => {
        return (
          <Draggable
            x={index * 150}
            y={10}
            id={index}
            key={index}
            debug={true}
            onDragRelease={(event, gestureState) => {
              handleDragRelease(event, gestureState, item);
            }}
          >
            <Card
              cards={cards}
              setCards={setCards}
              number={item}
              overlappingId={overlappingId}
              uniqueKey={item}
            />
          </Draggable>
        );
      })}

      <DeleteCard
        deleteCompLayout={deleteCompLayout}
        setDeleteCompLayout={setDeleteCompLayout}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    // backgroundColor: "yellow",
    height: "100%",
    display: "flex",
    width: "100%",
    position: "static",
    marginTop: 50,
  },
  draggable: {
    position: "absolute",
    backgroundColor: "red",
  },
});

export default HorizontalScroll;
