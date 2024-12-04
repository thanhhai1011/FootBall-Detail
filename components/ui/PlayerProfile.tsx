import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const PlayerProfile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* General Information */}
      <View style={styles.infoContainer}>
        <Text style={styles.sectionTitle}>INFORMASI UMUM</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Asosiasi</Text>
          <View style={styles.infoValue}>
            <Text style={styles.text}>Al Nassr FC</Text>
            <Text style={styles.contractText}>Kontrak hingga 2025-06-29</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Kewarganegaraan</Text>
          <Text style={styles.text}>🇵🇹 Portugal</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Ulang Tahun</Text>
          <Text style={styles.text}>5 Feb 1985 - 39 Tahun</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Tinggi</Text>
          <Text style={styles.text}>187 cm</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Kaki favorit</Text>
          <Text style={styles.text}>Kanan</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Posisi</Text>
          <Text style={styles.text}>F</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Nomor Punggung</Text>
          <Text style={styles.text}>7</Text>
        </View>
        <View style={styles.playerValue}>
          <Text style={styles.valueTitle}>Nilai Pemain</Text>
          <Text style={styles.value}>15.6M €</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E163B",
    padding: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  headerTime: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 8,
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
  infoContainer: {
    backgroundColor: "#1C234A",
    borderRadius: 10,
    padding: 16,
  },
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  infoLabel: {
    color: "#B0B5D4",
    fontSize: 14,
  },
  infoValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
  },
  contractText: {
    color: "#B0B5D4",
    fontSize: 12,
    marginLeft: 8,
  },
  logo: {
    width: 24,
    height: 24,
  },
  playerValue: {
    marginTop: 16,
    alignItems: "center",
  },
  valueTitle: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 4,
  },
  value: {
    color: "#FFD700",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PlayerProfile;
