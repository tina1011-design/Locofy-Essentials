import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import DropDownPicker from "react-native-dropdown-picker";
import Header1 from "../components/Header1";
import BarEarupto1 from "../components/BarEarupto1";
import Milestones from "../components/Milestones";
import DialogTip from "../components/DialogTip";
import BtnPlayNEarn from "../components/BtnPlayNEarn";
import { Gap, Color, Width, Border, Height, Padding } from "../GlobalStyles";

const QuestsFeedEssentialBase = () => {
  const [dropdownMoreinfoOpen, setDropdownMoreinfoOpen] = useState(false);
  const [dropdownMoreinfoValue, setDropdownMoreinfoValue] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <Header1 />
      <ScrollView
        style={[styles.questsfeedEssentialBase, styles.bannerIconLayout]}
        contentContainerStyle={styles.questsFeedEssentialBaseScrollViewContent}
      >
        <View style={styles.scrollWrapper}>
        <View style={[styles.scroll, styles.infoFlexBox]}>
          <Image
            style={[styles.bannerIcon, styles.bannerIconLayout]}
            contentFit="cover"
            source={require("../assets/Banner.png")}
          />
          <View style={[styles.info, styles.infoFlexBox]}>
            <BarEarupto1 />
            <View style={styles.dropdownMoreinfo}>
              <DropDownPicker
                style={[
                  styles.dropdownpicker,
                  styles.dropdownMoreinfodropDownContainer,
                ]}
                open={dropdownMoreinfoOpen}
                setOpen={setDropdownMoreinfoOpen}
                value={dropdownMoreinfoValue}
                setValue={setDropdownMoreinfoValue}
                placeholder="More info"
                items={[]}
                labelStyle={styles.dropdownMoreinfoValue}
                placeholderStyle={styles.dropdownMoreinfoValue}
                dropDownContainerStyle={styles.dropdownMoreinfodropDownContent}
                zIndex={2000}
                zIndexInverse={0}
                dropDownDirection={"BOTTOM"}
              />
            </View>
          </View>
          <Milestones />
          <DialogTip />
        </View>
      </View>
      </ScrollView>
      <View style={styles.btnPlaynearnWrapper}>
        <BtnPlayNEarn />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
  dropdownMoreinfoValue: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
  },
  dropdownMoreinfodropDownContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
    height: 40,
    backgroundColor: "rgba(58, 15, 128, 0.5)",
    borderWidth: 0,
    borderColor: "",
    borderRadius: 16,
  },
  dropdownMoreinfodropDownContent: {
    borderColor: "",
    borderWidth: 0,
    borderRadius: 16,
  },
  questsFeedEssentialBaseScrollViewContent: {
    flexDirection: "column",
    paddingBottom: 105,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    height: 852,
  },
  bannerIconLayout: {
    maxWidth: "100%",
    width: "100%",
  },
  infoFlexBox: {
    gap: Gap.gap_16,
    alignItems: "center",
  },
  questsfeedEssentialBase: {
    backgroundColor: Color.layoutPageBackground,
    flex: 1,
    paddingTop: 160, // Height of Header1 to prevent overlap
  },
  scrollWrapper: {
    height: 499,
    paddingBottom: 21,
    flexDirection: "row",
    width: Width.width_393,
  },
  scroll: {
    height: 478,
    width: Width.width_393,
  },
  bannerIcon: {
    alignSelf: "stretch",
    overflow: "hidden",
    height: 132,
  },
  info: {
    zIndex: 5000,
    flexDirection: "row",
  },
  dropdownMoreinfo: {
    zIndex: 2000,
    width: 109,
    borderRadius: Border.br_16,
    height: Height.height_40,
    alignItems: "center",
    flexDirection: "row",
  },
  dropdownpicker: {
    paddingHorizontal: Padding.padding_16,
    paddingVertical: Padding.padding_8,
    minHeight: 40,
    height: 40,
    backgroundColor: Color.dialogBackground,
    borderWidth: 0,
    borderColor: "",
    borderRadius: 16,
  },
  btnPlaynearnWrapper: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    height: 88,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    zIndex: 1000,
  },
});

export default QuestsFeedEssentialBase;
