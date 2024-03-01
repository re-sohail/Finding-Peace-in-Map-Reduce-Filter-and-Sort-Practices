// First Practice on Sale Data

let salesData = [
    { OrderDate: '2/26/18', Region: 'Central', Manager: 'Timothy', SalesMan: 'David', Item: 'Cell Phone', Units: 27, Unit_price: 225.00, Sale_amt: 6075.00 },
    { OrderDate: '10/22/18', Region: 'East', Manager: 'Martha', SalesMan: 'Alexander', Item: 'Tablet', Units: 64, Unit_price: 350.00, Sale_amt: 22400.00 },
    { OrderDate: '11/8/18', Region: 'East', Manager: 'Douglas', SalesMan: 'Karen', Item: 'Laptop', Units: 15, Unit_price: 850.00, Sale_amt: 12750.00 },
    { OrderDate: '4/27/19', Region: 'East', Manager: 'Martha', SalesMan: 'Diana', Item: 'Headphones', Units: 96, Unit_price: 45.00, Sale_amt: 4320.00 },
    { OrderDate: '9/27/19', Region: 'West', Manager: 'Timothy', SalesMan: 'Stephen', Item: 'Smartwatch', Units: 76, Unit_price: 150.00, Sale_amt: 11400.00 },
    { OrderDate: '5/12/20', Region: 'Central', Manager: 'Rebecca', SalesMan: 'Michael', Item: 'Laptop', Units: 35, Unit_price: 780.00, Sale_amt: 27300.00 },
    { OrderDate: '8/3/20', Region: 'West', Manager: 'Timothy', SalesMan: 'Cynthia', Item: 'Tablet', Units: 42, Unit_price: 320.00, Sale_amt: 13440.00 },
    { OrderDate: '11/18/20', Region: 'East', Manager: 'Martha', SalesMan: 'George', Item: 'Smartphone', Units: 50, Unit_price: 200.00, Sale_amt: 10000.00 },
    { OrderDate: '2/7/21', Region: 'Central', Manager: 'Timothy', SalesMan: 'Alice', Item: 'Headphones', Units: 20, Unit_price: 30.00, Sale_amt: 600.00 },
    { OrderDate: '3/15/19', Region: 'West', Manager: 'Steven', SalesMan: 'Emily', Item: 'Smartwatch', Units: 50, Unit_price: 180.00, Sale_amt: 9000.00 },
    { OrderDate: '6/8/19', Region: 'East', Manager: 'Diana', SalesMan: 'Peter', Item: 'Tablet', Units: 28, Unit_price: 300.00, Sale_amt: 8400.00 },
    { OrderDate: '9/22/19', Region: 'Central', Manager: 'Jonathan', SalesMan: 'Olivia', Item: 'Laptop', Units: 18, Unit_price: 900.00, Sale_amt: 16200.00 },
    { OrderDate: '12/10/19', Region: 'West', Manager: 'Steven', SalesMan: 'Emma', Item: 'Cell Phone', Units: 40, Unit_price: 250.00, Sale_amt: 10000.00 },
    { OrderDate: '2/5/20', Region: 'East', Manager: 'Diana', SalesMan: 'Joseph', Item: 'Headphones', Units: 15, Unit_price: 50.00, Sale_amt: 750.00 },
    { OrderDate: '7/14/20', Region: 'Central', Manager: 'Jonathan', SalesMan: 'Sophia', Item: 'Smartphone', Units: 60, Unit_price: 180.00, Sale_amt: 10800.00 },
    { OrderDate: '10/29/20', Region: 'West', Manager: 'Steven', SalesMan: 'Ethan', Item: 'Laptop', Units: 25, Unit_price: 800.00, Sale_amt: 20000.00 },
    { OrderDate: '1/16/21', Region: 'East', Manager: 'Diana', SalesMan: 'Aiden', Item: 'Smartwatch', Units: 35, Unit_price: 160.00, Sale_amt: 5600.00 },
    { OrderDate: '4/3/21', Region: 'Central', Manager: 'Jonathan', SalesMan: 'Isabella', Item: 'Cell Phone', Units: 48, Unit_price: 220.00, Sale_amt: 10560.00 },
    { OrderDate: '4/20/19', Region: 'East', Manager: 'Douglas', SalesMan: 'Lisa', Item: 'Tablet', Units: 30, Unit_price: 320.00, Sale_amt: 9600.00 },
    { OrderDate: '7/12/19', Region: 'Central', Manager: 'Timothy', SalesMan: 'Jessica', Item: 'Laptop', Units: 22, Unit_price: 750.00, Sale_amt: 16500.00 },
    { OrderDate: '10/5/19', Region: 'West', Manager: 'Steven', SalesMan: 'Andrew', Item: 'Smartphone', Units: 45, Unit_price: 210.00, Sale_amt: 9450.00 },
    { OrderDate: '1/25/20', Region: 'East', Manager: 'Martha', SalesMan: 'Benjamin', Item: 'Headphones', Units: 18, Unit_price: 40.00, Sale_amt: 720.00 },
    { OrderDate: '5/18/20', Region: 'West', Manager: 'Timothy', SalesMan: 'Grace', Item: 'Cell Phone', Units: 55, Unit_price: 230.00, Sale_amt: 12650.00 },
    { OrderDate: '8/10/20', Region: 'Central', Manager: 'Rebecca', SalesMan: 'Nicholas', Item: 'Laptop', Units: 20, Unit_price: 800.00, Sale_amt: 16000.00 },
    { OrderDate: '11/3/20', Region: 'East', Manager: 'Douglas', SalesMan: 'Hannah', Item: 'Smartwatch', Units: 40, Unit_price: 150.00, Sale_amt: 6000.00 },
    { OrderDate: '2/21/21', Region: 'West', Manager: 'Steven', SalesMan: 'Madison', Item: 'Tablet', Units: 32, Unit_price: 300.00, Sale_amt: 9600.00 },
    { OrderDate: '6/15/21', Region: 'Central', Manager: 'Rebecca', SalesMan: 'Alexander', Item: 'Cell Phone', Units: 28, Unit_price: 240.00, Sale_amt: 6720.00 },
    { OrderDate: '3/5/19', Region: 'West', Manager: 'Steven', SalesMan: 'Sophie', Item: 'Laptop', Units: 18, Unit_price: 780.00, Sale_amt: 14040.00 },
    { OrderDate: '6/18/19', Region: 'East', Manager: 'Diana', SalesMan: 'Daniel', Item: 'Smartphone', Units: 32, Unit_price: 190.00, Sale_amt: 6080.00 },
    { OrderDate: '9/30/19', Region: 'Central', Manager: 'Jonathan', SalesMan: 'Ava', Item: 'Tablet', Units: 25, Unit_price: 320.00, Sale_amt: 8000.00 },
    { OrderDate: '12/15/19', Region: 'West', Manager: 'Steven', SalesMan: 'Jackson', Item: 'Headphones', Units: 15, Unit_price: 55.00, Sale_amt: 825.00 },
    { OrderDate: '2/10/20', Region: 'East', Manager: 'Diana', SalesMan: 'Sophia', Item: 'Smartwatch', Units: 22, Unit_price: 160.00, Sale_amt: 3520.00 },
    { OrderDate: '7/20/20', Region: 'Central', Manager: 'Jonathan', SalesMan: 'Noah', Item: 'Cell Phone', Units: 40, Unit_price: 230.00, Sale_amt: 9200.00 },
    { OrderDate: '10/4/20', Region: 'West', Manager: 'Steven', SalesMan: 'Grace', Item: 'Laptop', Units: 28, Unit_price: 800.00, Sale_amt: 22400.00 },
    { OrderDate: '1/21/21', Region: 'East', Manager: 'Diana', SalesMan: 'William', Item: 'Smartphone', Units: 36, Unit_price: 200.00, Sale_amt: 7200.00 },
    { OrderDate: '4/8/21', Region: 'Central', Manager: 'Jonathan', SalesMan: 'Ella', Item: 'Headphones', Units: 20, Unit_price: 45.00, Sale_amt: 900.00 },
    { OrderDate: '4/8/20', Region: 'Central', Manager: 'Jonathan', SalesMan: 'Ella', Item: 'Headphones', Units: 20, Unit_price: 45.00, Sale_amt: 900.00 },
    
  ];

  // Q no 1: Calculate the total sales amount across all orders in salesData.
  let totalSalesAmount = salesData.reduce((total, next) => total + next.Sale_amt, 0)
  // console.log(totalSalesAmount);

  // Q no 2: Find the average sale amount in the dataset.
  let averageSales = salesData.reduce((first, second)=> Math.floor((first + second.Sale_amt)/salesData.length), 0)
  // console.log(averageSales);

  // Q no 3: Determine the highest and lowest Sale_amt values in salesData. 
  let lowHighValue = salesData.map((valu) => valu.Sale_amt);
  let low = Math.min(...lowHighValue)
  let high = Math.max(...lowHighValue)
  // console.log(low , high);  
  //  if I will use Reduce then I will become a Difficult So I use map()

  // Q no 4: Calculate the total number of sales for each distinct region.
  let totalSale = salesData.reduce((total, next) => {
    total[next.Region] = (total[next.Region] || 0) + 1
    return total
  },{})
// console.log(totalSale);

  // Q no 5: Count how many times each item type (e.g., 'Laptop', 'Smartphone') was sold
  let soldItems = salesData.reduce((total, next) => {
    total[next.Item] = (total[next.Item] || 0) + 1
    return total
  },{})
  // console.log(soldItems);

  // Q no 6: How many total sales were made in the 'West' region?
  let westSales = salesData
  .filter((westRegion)=> westRegion.Region === 'West') 
  .reduce((total, next) => total + next.Sale_amt, 0)
  // console.log(westSales);

  // Q no 7: How many sales in the 'East' region were for orders exceeding $15,000?
  let eastSales = salesData
  .filter((east) => east.Region === "East" && east.Sale_amt > 15000)
  .reduce((total, nest)=> total + nest.Sale_amt, 0)
  // console.log(eastSales);

  // Q no 8: Out of all regions, which region had the highest number of sales?
  let totalRegion = salesData.reduce((total, next) => {
    total[next.Region] = (total[next.Region] || 0) + 1
    return total
  },{})  
  console.log(totalRegion);
