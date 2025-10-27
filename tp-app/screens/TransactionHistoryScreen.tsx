import * as React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import Header from "../components/Header";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

interface TransactionHistoryScreenProps {
  activeTab: 'games' | 'rewards' | 'profile';
  onTabPress: (tab: 'games' | 'rewards' | 'profile') => void;
  onBack?: () => void;
  coinBalance?: number;
  cashBalance?: number;
  isFirstTimeUser?: boolean;
  welcomeGiftTimestamp?: Date;
}

interface TransactionItem {
  id: string;
  coinValue: string;
  isPositive: boolean;
  title: string;
  status: string;
  source: string;
  timestamp: string;
}

const TransactionHistoryScreen: React.FC<TransactionHistoryScreenProps> = ({ activeTab, onTabPress, onBack, coinBalance, cashBalance, isFirstTimeUser, welcomeGiftTimestamp }) => {
  
  // Calculate time elapsed since welcome gift
  const getTimeElapsed = (): string => {
    if (!welcomeGiftTimestamp) return "just now";
    
    const now = new Date();
    const diff = now.getTime() - welcomeGiftTimestamp.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (seconds < 60) return "just now";
    if (minutes < 2) return "1 minute ago";
    if (minutes < 60) return `${minutes} minutes ago`;
    if (hours < 2) return "1 hour ago";
    if (hours < 24) return `${hours} hours ago`;
    if (days < 2) return "1 day ago";
    return `${days} days ago`;
  };

  // Sample transaction data
  const normalTransactions: TransactionItem[] = [
    { id: "#ID1234", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "45 seconds ago" },
    { id: "#ID1235", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Pending", source: "Lucky wheel", timestamp: "2 minutes ago" },
    { id: "#ID1236", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "10 minutes ago" },
    { id: "#ID1237", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "1 hour ago" },
    { id: "#ID1238", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "2 hours ago" },
    { id: "#ID1239", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Pending", source: "Lucky wheel", timestamp: "3 hours ago" },
    { id: "#ID1240", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "5 hours ago" },
    { id: "#ID1241", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "6 hours ago" },
    { id: "#ID1242", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "8 hours ago" },
    { id: "#ID1243", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Pending", source: "Lucky wheel", timestamp: "10 hours ago" },
    { id: "#ID1244", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "12 hours ago" },
    { id: "#ID1245", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "1 day ago" },
    { id: "#ID1246", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "1 day ago" },
    { id: "#ID1247", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Pending", source: "Lucky wheel", timestamp: "2 days ago" },
    { id: "#ID1248", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "2 days ago" },
    { id: "#ID1249", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "3 days ago" },
    { id: "#ID1250", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "3 days ago" },
    { id: "#ID1251", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Pending", source: "Lucky wheel", timestamp: "4 days ago" },
    { id: "#ID1252", coinValue: "+100", isPositive: true, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "5 days ago" },
    { id: "#ID1253", coinValue: "-120", isPositive: false, title: "Transaction Title", status: "Complete", source: "Lucky wheel", timestamp: "1 week ago" },
  ];
  
  // FTUE transaction data
  const ftueTransactions: TransactionItem[] = [
    { 
      id: "#ID0001", 
      coinValue: "+100", 
      isPositive: true, 
      title: "Welcome Gift", 
      status: "Complete", 
      source: "free_welcome_gift", 
      timestamp: getTimeElapsed() 
    },
  ];
  
  const transactions = isFirstTimeUser ? ftueTransactions : normalTransactions;

  const handleBackPress = () => {
    if (onBack) {
      onBack();
    } else {
      onTabPress('profile');
    }
  };

  return (
    <View style={styles.container}>
      <Header coinBalance={coinBalance} cashBalance={cashBalance} />
      
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress} activeOpacity={0.8}>
        <Image
          style={styles.backButtonImage}
          contentFit="cover"
          source={require("../assets/btn-back.png")}
        />
      </TouchableOpacity>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.screenTitle}>Transaction History</Text>
        
        {/* Transaction List */}
        <View style={styles.transactionList}>
          {transactions.map((transaction, index) => (
            <View 
              key={index} 
              style={[
                styles.transactionBar,
                { backgroundColor: index % 2 === 0 ? "#E8EFF7" : "#FFFFFF" }
              ]}
            >
              {/* First Row */}
              <View style={styles.row}>
                <Text style={styles.idText}>{transaction.id}</Text>
                <View style={styles.valueContainer}>
                  <Image
                    style={styles.coinIcon}
                    contentFit="cover"
                    source={require("../assets/icon-coin.png")}
                  />
                  <Text style={[
                    styles.valueText,
                    { color: transaction.isPositive ? "#00A95A" : "#FF5F3B" }
                  ]}>
                    {transaction.coinValue}
                  </Text>
                </View>
              </View>

              {/* Second Row */}
              <View style={styles.row}>
                <Text style={styles.titleText}>{transaction.title}</Text>
                <View style={[
                  styles.statusTag,
                  { backgroundColor: transaction.status === "Complete" ? "#7CFF98" : "#FFE28B" }
                ]}>
                  <Text style={[
                    styles.statusText,
                    { color: transaction.status === "Complete" ? "#00A95A" : "#B97004" }
                  ]}>
                    {transaction.status}
                  </Text>
                </View>
              </View>

              {/* Third Row */}
              <View style={styles.row}>
                <Text style={styles.sourceText}>{transaction.source}</Text>
                <Text style={styles.timestampText}>{transaction.timestamp}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
  scrollView: {
    flex: 1,
    backgroundColor: Color.layoutPageBackground,
  },
  scrollContent: {
    paddingTop: 160,
    paddingBottom: 100,
    alignItems: "center",
  },
  screenTitle: {
    fontSize: 16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#7A7D91",
    backgroundColor: "#FFFFFF",
    marginBottom: 0,
    width: "100%",
    paddingHorizontal: 16,
    borderTopLeftRadius: Border.br_16,
    borderTopRightRadius: Border.br_16,
    height: 40,
    lineHeight: 40,
  },
  transactionList: {
    width: "100%",
    gap: 0,
    backgroundColor: "#FFFFFF",
    minHeight: 1000,
    paddingBottom: 100,
  },
  transactionBar: {
    borderRadius: 0,
    padding: Padding.padding_12,
    gap: 8,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  idText: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.poppinsRegular,
    color: "#7A7D91",
  },
  titleText: {
    fontSize: FontSize.fs_14,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    color: "#7A7D91",
  },
  statusTag: {
    borderRadius: Border.br_8,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  statusText: {
    fontSize: FontSize.fs_10,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  sourceText: {
    fontSize: FontSize.fs_12,
    fontFamily: FontFamily.poppinsRegular,
    color: "#7A7D91",
  },
  timestampText: {
    fontSize: FontSize.fs_10,
    fontFamily: FontFamily.poppinsRegular,
    color: "#7A7D91",
  },
  backButton: {
    position: "absolute",
    top: 80,
    right: 20,
    zIndex: 10,
  },
  backButtonImage: {
    width: 40,
    height: 40,
  },
  valueContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  coinIcon: {
    width: 20,
    height: 20,
  },
  valueText: {
    fontSize: FontSize.fs_16,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
});

export default TransactionHistoryScreen;

