import React, { useState } from 'react';
import { SafeAreaView, View, Button, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import AddExpensePage from '@/components/AddExpensePage';
import ExpenseComponent,{ ExpenseType, ChartDataType } from '@/components/Expense';

export default function App() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [chartData, setChartData] = useState<ChartDataType[]>([]);
  const [addForm, setAddForm] = useState(false);

  const screenWidth = Dimensions.get('window').width;

  const chartColors: Record<string, string> = {
    Food: '#e74c3c',
    Transport: '#3498db',
    Entertainment: '#f1c40f',
    Others: '#9b59b6',
  };
  
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      {addForm ? (
        <AddExpensePage
          name={name}
          setName={setName}
          amount={amount}
          setAmount={setAmount}
          category={category}
          setCategory={setCategory}
          expenses={expenses}
          setExpenses={setExpenses}
          chartData={chartData}
          setChartData={setChartData}
          setAddForm={setAddForm}
        />
      ) : (
        <View>
          <Button title="Add Expense" onPress={() => setAddForm(true)} />

          <ExpenseComponent
            expenses={expenses}
            setExpenses={setExpenses}
            chartData={chartData}
            setChartData={setChartData}
          />

          {chartData.length > 0 && (
            <PieChart
              data={chartData.map((item) => ({
                name: item.label,
                amount: item.value,
                color: chartColors[item.label] || '#7f8c8d',
                legendFontColor: '#7F7F7F',
                legendFontSize: 15,
              }))}
              width={screenWidth}
              height={220}
              accessor="amount"
              backgroundColor="transparent"
              paddingLeft="15"
              absolute
            />
          )}
        </View>
      )}
    </SafeAreaView>
  );
}
