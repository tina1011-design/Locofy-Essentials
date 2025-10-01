import * as React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import Octiconlinkexternal16 from "../assets/octicon-link-external-16.svg";
import {
  Border,
  Color,
  Padding,
  Gap,
  Width,
  Height,
  FontSize,
  FontFamily,
} from "../GlobalStyles";

const BtnContactSupport = () => {
  return (
    <Pressable style={styles.btnContactsupport}>
      <Octiconlinkexternal16
        style={styles.octiconlinkExternal16}
        width={NaN}
        height={NaN}
      />
      <Text style={styles.contactSupport}>Contact Support</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  btnContactsupport: {
    borderRadius: Border.br_8,
    backgroundColor: Color.buttonOutlinedBackground,
    borderStyle: "solid",
    borderColor: Color.buttonOutlinedOutline,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: Padding.padding_6,
    paddingVertical: Padding.padding_4,
    gap: Gap.gap_4,
  },
  octiconlinkExternal16: {
    width: Width.width_14,
    height: Height.height_14,
  },
  contactSupport: {
    height: Height.height_15,
    width: 87,
    fontSize: FontSize.fs_10,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.textButtonContact,
    textAlign: "left",
  },
});

export default BtnContactSupport;
