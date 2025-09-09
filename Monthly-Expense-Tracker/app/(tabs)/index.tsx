import React, { useState } from 'react';
import { SafeAreaView, View, Button, Dimensions ,Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import AddExpensePage from '@/components/AddExpensePage';
import ExpenseComponent,{ ExpenseType, ChartDataType } from '@/components/Expense';
import style from '@/components/style';

export default function App() {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [chartData, setChartData] = useState<ChartDataType[]>([]);
  const [addForm, setAddForm] = useState(false);


  const addExpense = () => {
		setAddForm(true);
	};


  const chartColors: Record<string, string> = {
    Food: '#e74c3c',
    Transport: '#3498db',
    Entertainment: '#f1c40f',
    Others: '#9b59b6',
  };
  
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style= {style.heading2}>
				Expense Tracker using React-Native
			</Text>
        
         <PieChart
				data={  chartData.map(item => ({
          name: item.label,
          amount: item.value,
          color: chartColors[item.label] || '#000000',
          legendFontColor: '#7F7F7F',
          legendFontSize: 15,
        }))}
				width={300}
				height={200}
				chartConfig={{
					backgroundGradientFrom: "#1E2923",
					backgroundGradientTo: "#08130D",
					color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
				}}
				accessor="amount"
				backgroundColor="transparent"
				paddingLeft="15"
				absolute
			/>
          

      {addForm === true ? (
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
        <View style={{ flex: 1, alignItems: 'center',rowGap:10 }}>
          <Button title="Add Expense" onPress={addExpense}  color="green"
          />
        </View>
      )}

  <ExpenseComponent
            expenses={expenses}
            setExpenses={setExpenses}
            chartData={chartData}
            setChartData={setChartData}
        
          />

    </SafeAreaView>
  );
}

