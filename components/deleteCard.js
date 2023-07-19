import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";

const DeleteCard = ({ deleteCompLayout, setDeleteCompLayout }) => {
  const componentRef = useRef(null);
  const handleLayout = () => {
    componentRef.current.measure((x, y, width, height, pageX, pageY) => {
      setDeleteCompLayout({
        x: pageX,
        y: pageY,
        width: width,
        height: height,
      });
    });
  };
  return (
    <View
      style={styles.DeleteContainer}
      ref={componentRef}
      onLayout={handleLayout}
    >
      <Text style={styles.text}>Drag and drop here</Text>
      <Text style={styles.text}>Remove the Component</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  DeleteContainer: {
    flex: 1,
    backgroundColor: "pink",
    margin: 10,
    zIndex: -5,
    justifyContent: "center",
    alignItems: "center",
    width:"100%",
    minHeight: 500,
    marginBottom:70,
    borderRadius: 30,
  },
  text:{
    fontSize: 20,
    fontWeight: "bold",
    margin: 10,
  }
});
export default DeleteCard;
