import React from "react";
import { View, StyleSheet, Text } from "react-native";
const Card = ({ number, overlappingId, uniqueKey, cards, setCards }) => {
  console.log("uniqueKey : ", uniqueKey);
  console.log("overlappingId : ", overlappingId);
  return (
    <View
      style={{
        ...styles.item,
        display: overlappingId.includes(uniqueKey) ? "none" : null,
      }}
    >
      <Text style={styles.text}>{number}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    width: 100,
    height: 100,
    margin: 10,
    zIndex: 3,
    backgroundColor: "gray",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 50,
    color: "white",
  },
});
export default Card;
