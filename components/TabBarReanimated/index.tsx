import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import PlayerProfile from "../ui/PlayerProfile";

const screenWidth = Dimensions.get("window").width;

const TabBarReanimated = () => {
  const [activeTab, setActiveTab] = useState(0);
  const translateX = useSharedValue(0);

  const scrollViewRef = React.useRef<ScrollView>(null);

  const handleTabPress = (index: number) => {
    setActiveTab(index);
    translateX.value = withSpring(index * (screenWidth / 3));
    scrollViewRef?.current?.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
  };

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const renderContent = () => (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={event => {
        const index = Math.round(
          event.nativeEvent.contentOffset.x / screenWidth,
        );
        setActiveTab(index);
        translateX.value = withTiming(index * (screenWidth / 3));
      }}>
      <View style={styles.tabContent}>
        <PlayerProfile />
      </View>
      <View style={styles.tabContent}>
        <PlayerProfile />
      </View>
      <View style={styles.tabContent}>
        <PlayerProfile />
      </View>
    </ScrollView>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.profile}>
        <Image
          source={{
            uri: "https://hips.hearstapps.com/hmg-prod/images/cristiano-ronaldo-of-portugal-reacts-as-he-looks-on-during-news-photo-1725633476.jpg?crop=0.666xw:1.00xh;0.180xw,0&resize=640:*",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Cristiano Ronaldo</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {renderHeader()}
      {/* Custom TabBar */}
      <View style={styles.tabBar}>
        {["Tab 1", "Tab 2", "Tab 3"].map((tab, index) => (
          <TouchableOpacity
            key={index}
            style={styles.tabButton}
            onPress={() => handleTabPress(index)}>
            <Text
              style={[
                styles.tabLabel,
                activeTab === index && styles.activeTabLabel,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
        {/* Indicator */}
        <Animated.View style={[styles.indicator, animatedIndicatorStyle]} />
      </View>

      {/* Tab Content */}
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E163B",
  },
  tabBar: {
    flexDirection: "row",
    height: 50,
    backgroundColor: "#1C234A",
    position: "relative",
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabLabel: {
    color: "#B0B5D4",
    fontSize: 16,
  },
  activeTabLabel: {
    color: "#FFF",
    fontWeight: "bold",
  },
  indicator: {
    position: "absolute",
    height: 4,
    backgroundColor: "#007BFF",
    width: screenWidth / 3,
    bottom: 0,
  },
  tabContent: {
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0E163B",
  },
  tabText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  profile: {
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default TabBarReanimated;
