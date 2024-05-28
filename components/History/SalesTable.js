import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function SalesTable() {
  const salesTableHeader = [
    "Customer Name",
    "Time",
    "Branch",
    "Mode of Payment",
    "Order Mode",
    "No. of Ordered Items",
    "Ordered Items",
    "Price",
  ];
  
  const salesTableData = [
    [
      "Mikaela Faye Popes",
      "04:20",
      "Waltermart Taytay",
      "Cash",
      "Onsite",
      1,
      "Americano",
      250.55,
    ],
    [
      "Kurt Agripa",
      "04:20",
      "Waltermart Taytay",
      "Gcash",
      "Onsite",
      1,
      "Pantropiko",
      160.0,
    ],
    [
      "Alexia Marie Roque",
      "05:20",
      "Waltermart Taytay",
      "Cash",
      "Onsite",
      1,
      "Pantropiko",
      160.0,
    ],
  ];

  return (
    <View style={styles.container}>
      <Table borderStyle={styles.tableBorder} style={styles.tableShadow}>
        <Row data={salesTableHeader} style={styles.header} textStyle={styles.headerText}/>
        <Rows data={salesTableData} textStyle={styles.rowText} style={styles.row}/>
      </Table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
  },
  tableBorder: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#FFFFFF',
  },
  tableShadow: {
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 10,
  },
  header: {
    height: 40,
    backgroundColor: '#F9BC4D',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  row: {
    height: 35,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
  }, 
  rowText: {
    fontWeight: 'regular',
    textAlign: 'center',
  }
});
