import { View, Text, ScrollView } from "react-native";
import React from 'react';
import style from "./style";

// Define the type for an expense
export type ExpenseType = {
  id: number;
  name: string;
  amount: number;
  category: string;
};

export type ChartDataType = {
  label: string;
  value: number;
  color: string;
  legendFontColor: string;
  legendFontSize: number;
};
// Interface for component props
interface ExpenseComponentProps {
  expenses: ExpenseType[];
  setExpenses: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
  chartData: ChartDataType[];
  setChartData: React.Dispatch<React.SetStateAction<ChartDataType[]>>;
}

const ExpenseComponent: React.FC<ExpenseComponentProps> = ({
  expenses,
  setExpenses,
  chartData,
  setChartData,
}) => {
  return (
    <ScrollView>
      {expenses.length === 0 ? (
        <Text>No expenses recorded yet.</Text>
      ) : (
        expenses.map((expense) => (
          <View key={expense.id}>
            <Text>
              {expense?.name ?? 'No name'}: R{expense?.amount ?? 0} - {expense.category}
            </Text>
          </View>
        ))
      )}
    </ScrollView>
  );
};

export default ExpenseComponent;
