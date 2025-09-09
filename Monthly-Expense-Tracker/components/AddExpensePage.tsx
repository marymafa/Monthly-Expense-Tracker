/* eslint-disable import/no-unresolved */
import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import style from './style';
import { ExpenseType, ChartDataType } from './Expense'; 

type AddExpensePageProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  expenses: ExpenseType[];
  setExpenses: React.Dispatch<React.SetStateAction<ExpenseType[]>>;
  chartData: ChartDataType[];
  setChartData: React.Dispatch<React.SetStateAction<ChartDataType[]>>;
  setAddForm: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddExpensePage: React.FC<AddExpensePageProps> = ({
  name,
  setName,
  amount,
  setAmount,
  category,
  setCategory,
  expenses,
  setExpenses,
  chartData,
  setChartData,
  setAddForm,
}) => {
const categories = ['others','Food', 'Transport', 'Entertainment'];

  const handleAddExpense = () => {
    const amountNumber = parseFloat(amount);

    if (isNaN(amountNumber) || amountNumber <= 0 || name.trim() === '' || category.trim() === '') {
      Alert.alert('Invalid input', 'Please enter a valid expense name, amount > 0, and category.');
      return;
    }

    const newId = expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1;

    const newExpense: ExpenseType = {
      id: newId,
      name,
      amount: amountNumber,
      category,
    };

    setExpenses([...expenses, newExpense]);

    // Update chart data
    const updatedChartData = [...chartData];
    const existingIndex = updatedChartData.findIndex((item) => item.label === category);

    if (existingIndex !== -1) {
      updatedChartData[existingIndex].value += amountNumber;
    } else {
      updatedChartData.push({
        label: category,
        value: amountNumber,
        color: '',
        legendFontColor: '',
        legendFontSize: 0
      });
    }

    setChartData(updatedChartData);

    Alert.alert('Expense Added', `${name} - R${amountNumber}`);

    // Reset fields
    setName('');
    setAmount('');
    setCategory('');
  };

  return (
    <View style={style.view}>
      <Text style={style.heading3}>Add Expense Page</Text>

      <Text style={style.label}>Expense Name</Text>
      <TextInput
        style={style.TextInput}
        value={name}
        onChangeText={setName}
        placeholder="Enter expense name"
       
      />

      <Text style={style.label}>Amount:</Text>
      <TextInput
        style={style.TextInput}
        value={amount}
        onChangeText={setAmount}
        placeholder="Enter amount"
        keyboardType="numeric"
      />

      <Text style={style.label}>Category:</Text>
      <Picker
        style={style.TextInput}
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Select category" value="" />
        {categories.map((cat, index) => (
          <Picker.Item key={index} label={cat} value={cat} />
        ))}


      </Picker>

      <View style={style.Button}>
        <Button title="Add Expense" onPress={handleAddExpense} />
      </View>
    
        
    </View>
  );
}

export default AddExpensePage;
