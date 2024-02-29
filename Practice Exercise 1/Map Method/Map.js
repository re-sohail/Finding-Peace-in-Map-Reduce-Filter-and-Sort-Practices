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


  // Q no 1: Calculate an array where each element represents the total Sale_amt for each order in salesData.
  let saleAmount = salesData.map(salesAmout => salesAmout.Sale_amt)
  // console.table(saleAmount)
  

  // Q no 2: Create a new array containing only the distinct regions present in salesData.
  let allRegion = salesData.map((regions) => regions.Region)
  let distinctRegion = [... new Set(allRegion)]
  // console.log(distinctRegion)

  // example of Set(). it is Data Structure Term that give the Unique Value.
  let arr = [2,3,4,5,2,2,4,5,3,5,5,3,6,7,8,9]
  let uni = [... new Set(arr)]
  // console.log(uni)

  // Q no 3: Generate an array where each item's name is capitalized (e.g., 'Laptop' becomes 'LAPTOP').
  let capitalizedLetter = salesData.map((letters) => letters.Item.toUpperCase()) 
  // console.log(capitalizedLetter);

  // Q no 3: Generate a new array containing the order dates of all 'Tablet' sales in the 'East' region.

  let allDate = salesData
  .filter((regions) => regions.Region === "East")
  .map((dates) => dates.OrderDate)
  // console.log(allDate);

  // Q no 4: Create an array containing the Sale_amt of all orders where the Unit_price was above 300
  let orderSale = salesData
  .filter((price) => price.Unit_price > 300)
  .map((amount) => amount.Sale_amt)
  // console.log(orderSale);

  // Q no 5: Create an array with the names of Salespeople who have sold 'Smartwatch' items
  let salepeople = salesData
  .filter((items) => items.Item === "Smartwatch")
  .map((people) => people.SalesMan)
  // console.log(salepeople);

  // Q no 6: Create a new array where each element is the Sale_amt multiplied by 1.1 (representing a 10% increase).
  let elements = salesData.map((amount) => amount.Sale_amt * 1.1)
  // console.log(elements);

  // without in fraactions
  let saleAmountData =salesData.map((data) => Math.floor(data.Sale_amt * 1.1))
  // console.log(saleAmountData);

  // Q no 7: Calculate an array containing the profit for each sale, assuming a 30% cost on each item. (Profit = Sale_amt - (Unit_price * Units * 0.3))
  let salesProfit = salesData.map((amounts) => amounts.Sale_amt - (amounts.Unit_price * amounts.Units * 3))
  // console.log(salesProfit)

  // Q no 8: Explain the difference between using .map() and .forEach() to loop through an array like salesData. Choose a scenario where one might be better than the other.
  // first Try forEach()   => .forEach() doesn't return anything (it returns undefined).
  salesData.forEach(data =>{
    // console.log(data.Manager);
  })

  // for map     => .map() is designed to transform arrays. The length of the resulting array is the same as the original array.
  let managerData = salesData.map((data) => data.Manager)
  // console.log(managerData);


  // Q no 9: What does it mean that .map() is a non-mutating method? How does this differ from methods like .sort()?
  // sort() directly change the contents of the original array white map() do not change the content of origional content of Array.
  let arr2 = [1,2,3,2,,4,5,8,5,4,6,7,9]
  let sortedArray = arr2.sort()
  // console.log(sortedArray);
  let maping = arr2.map((number) => number * 2)
  // console.log(maping)

  // Sceond Practice on Inventors

  const inventorsData = [
    { Inventor: 'Alice Johnson', Invention: 'Time-Traveling Device', Year: 2050, Country: 'United States' },
    { Inventor: 'Hiroshi Tanaka', Invention: 'Floating Energy Generator', Year: 2045, Country: 'Japan' },
    { Inventor: 'Elena Rodriguez', Invention: 'Anti-Gravity Shoes', Year: 2038, Country: 'Spain' },
    { Inventor: 'Mohammed Al-Farsi', Invention: 'Bio-Enhancement Nanobots', Year: 2042, Country: 'Saudi Arabia' },
    { Inventor: 'Sophie Dubois', Invention: 'Smart Plant Growth System', Year: 2048, Country: 'France' },
    { Inventor: 'Raj Kapoor', Invention: 'Solar-Powered Air Purifier', Year: 2035, Country: 'India' },
    { Inventor: 'Isabella Chang', Invention: 'Mind-Reading Headset', Year: 2046, Country: 'China' },
    { Inventor: 'Antonio Morales', Invention: 'Ocean Cleanup Drones', Year: 2039, Country: 'Mexico' },
    { Inventor: 'Oliver Smith', Invention: 'Holographic Communication Device', Year: 2044, Country: 'United Kingdom' },
    { Inventor: 'Emma Williams', Invention: 'Invisible Cloak', Year: 2047, Country: 'Canada' },
    { Inventor: 'Liam Chen', Invention: 'Mind-Controlled Robotics', Year: 2043, Country: 'Australia' },
    { Inventor: 'Ava Kim', Invention: 'Biodegradable Plastics', Year: 2037, Country: 'South Korea' },
    { Inventor: 'Noah Gupta', Invention: 'AI-Powered Personal Assistant', Year: 2041, Country: 'Germany' },
    { Inventor: 'Olivia Rodriguez', Invention: 'Augmented Reality Glasses', Year: 2049, Country: 'Brazil' },
    { Inventor: 'Mia Patel', Invention: 'Self-Healing Materials', Year: 2036, Country: 'Netherlands' },
    { Inventor: 'Lucas Chang', Invention: 'Flying Car', Year: 2040, Country: 'Singapore' },
    { Inventor: 'Sophia Kim', Invention: 'Teleportation Device', Year: 2042, Country: 'New Zealand' },
    { Inventor: 'Jackson Nguyen', Invention: 'Robotics for Elderly Care', Year: 2039, Country: 'Sweden' },
    { Inventor: 'Liam Johnson', Invention: 'Bio-Printed Organs', Year: 2042, Country: 'United States' },
    { Inventor: 'Olivia Tanaka', Invention: 'Self-Driving Hoverboard', Year: 2048, Country: 'Japan' },
    { Inventor: 'Noah Rodriguez', Invention: 'Personalized Medicine Delivery Drones', Year: 2040, Country: 'Spain' },
    { Inventor: 'Emma Al-Farsi', Invention: 'AI-Powered Sustainable Farming System', Year: 2045, Country: 'Saudi Arabia' },
    { Inventor: 'Aiden Dubois', Invention: 'Smart Clothing with Health Monitoring', Year: 2037, Country: 'France' },
    { Inventor: 'Grace Kapoor', Invention: 'Clean Energy Harvesting Pavements', Year: 2043, Country: 'India' },
    { Inventor: 'Henry Chang', Invention: 'Neural Implant for Memory Enhancement', Year: 2039, Country: 'China' },
    { Inventor: 'Chloe Morales', Invention: 'Underwater Exploration Bots', Year: 2046, Country: 'Mexico' },
    { Inventor: 'William Smith', Invention: 'Quantum Computing Processor', Year: 2041, Country: 'United Kingdom' },
    { Inventor: 'Elijah Patel', Invention: 'Smart Home Ecosystem', Year: 2036, Country: 'Canada' },
    { Inventor: 'Amelia Kim', Invention: 'Solar-Powered Desalination System', Year: 2044, Country: 'Australia' },
    { Inventor: 'Mason Nguyen', Invention: 'AI-Enhanced Virtual Reality', Year: 2047, Country: 'South Korea' },
    { Inventor: 'Sophia Wang', Invention: 'Bionic Limbs with Touch Sensation', Year: 2038, Country: 'Germany' },
    { Inventor: 'Logan Garcia', Invention: 'Space Debris Cleanup Satellites', Year: 2049, Country: 'Brazil' },
    { Inventor: 'Evelyn Kim', Invention: 'Genetic Modification for Disease Resistance', Year: 2041, Country: 'Netherlands' },
    { Inventor: 'Jackson Lee', Invention: 'Mind-Uploaded Digital Immortality', Year: 2045, Country: 'Singapore' },
    { Inventor: 'Ava Hernandez', Invention: '3D-Printed Sustainable Homes', Year: 2040, Country: 'New Zealand' },
    { Inventor: 'Ethan Carter', Invention: 'Human-AI Collaboration for Creativity', Year: 2042, Country: 'Sweden' },
  ];
  
  

  // Third Practice on Company

  const companyData = [
    { CompanyName: 'Tech Innovators Inc.', Industry: 'Technology', FoundingYear: 2000, Headquarters: { City: 'San Francisco', Country: 'USA' } },
    { CompanyName: 'Eco Solutions Co.', Industry: 'Environmental', FoundingYear: 2005, Headquarters: { City: 'Berlin', Country: 'Germany' } },
    { CompanyName: 'Global Robotics Corporation', Industry: 'Robotics', FoundingYear: 2010, Headquarters: { City: 'Tokyo', Country: 'Japan' } },
    { CompanyName: 'HealthTech Solutions Ltd.', Industry: 'Healthcare', FoundingYear: 2008, Headquarters: { City: 'Sydney', Country: 'Australia' } },
    { CompanyName: 'Renewable Energy Innovations', Industry: 'Renewable Energy', FoundingYear: 2015, Headquarters: { City: 'Paris', Country: 'France' } },
    { CompanyName: 'Smart Devices Enterprises', Industry: 'Electronics', FoundingYear: 2003, Headquarters: { City: 'Bangalore', Country: 'India' } },
    { CompanyName: 'Biotech Breakthroughs LLC', Industry: 'Biotechnology', FoundingYear: 2012, Headquarters: { City: 'Toronto', Country: 'Canada' } },
    { CompanyName: 'Data Analytics Systems, LLC', Industry: 'Data Analytics', FoundingYear: 2011, Headquarters: { City: 'Seoul', Country: 'South Korea' } },
    { CompanyName: 'GreenTech Solutions', Industry: 'Green Technology', FoundingYear: 2018, Headquarters: { City: 'Stockholm', Country: 'Sweden' } },
    { CompanyName: 'InnoTech Solutions', Industry: 'Technology', FoundingYear: 2002, Headquarters: { City: 'New York', Country: 'USA' } },
    { CompanyName: 'GreenEnergy Innovations', Industry: 'Renewable Energy', FoundingYear: 2013, Headquarters: { City: 'Vancouver', Country: 'Canada' } },
    { CompanyName: 'BioTech Systems Ltd.', Industry: 'Biotechnology', FoundingYear: 2007, Headquarters: { City: 'Berlin', Country: 'Germany' } },
    { CompanyName: 'Future Dynamics Corp.', Industry: 'Robotics', FoundingYear: 2016, Headquarters: { City: 'Shanghai', Country: 'China' } },
    { CompanyName: 'HealthSolutions International', Industry: 'Healthcare', FoundingYear: 2009, Headquarters: { City: 'Sydney', Country: 'Australia' } },
    { CompanyName: 'DataVision Innovations', Industry: 'Data Analytics', FoundingYear: 2014, Headquarters: { City: 'Toronto', Country: 'Canada' } },
    { CompanyName: 'GreenBuild Tech', Industry: 'Green Technology', FoundingYear: 2010, Headquarters: { City: 'Stockholm', Country: 'Sweden' } },
    { CompanyName: 'ElectroInnovate', Industry: 'Electronics', FoundingYear: 2006, Headquarters: { City: 'Tokyo', Country: 'Japan' } },
    { CompanyName: 'SmartLiving Solutions', Industry: 'Smart Home', FoundingYear: 2015, Headquarters: { City: 'Los Angeles', Country: 'USA' } },
    { CompanyName: 'SmartTech Innovations', Industry: 'Technology', FoundingYear: 2001, Headquarters: { City: 'San Jose', Country: 'USA' } },
    { CompanyName: 'EnviroSolutions Global', Industry: 'Environmental', FoundingYear: 2011, Headquarters: { City: 'London', Country: 'United Kingdom' } },
    { CompanyName: 'RoboTech Dynamics', Industry: 'Robotics', FoundingYear: 2008, Headquarters: { City: 'Seoul', Country: 'South Korea' } },
    { CompanyName: 'MedTech Solutions Inc.', Industry: 'Healthcare', FoundingYear: 2013, Headquarters: { City: 'Melbourne', Country: 'Australia' } },
    { CompanyName: 'SolarPower Innovations', Industry: 'Renewable Energy', FoundingYear: 2016, Headquarters: { City: 'Rio de Janeiro', Country: 'Brazil' } },
    { CompanyName: 'DataDriven Insights', Industry: 'Data Analytics', FoundingYear: 2010, Headquarters: { City: 'Mumbai', Country: 'India' } },
    { CompanyName: 'EcoBuild Technologies', Industry: 'Green Technology', FoundingYear: 2012, Headquarters: { City: 'Oslo', Country: 'Norway' } },
    { CompanyName: 'ElectroGadgets Ltd.', Industry: 'Electronics', FoundingYear: 2007, Headquarters: { City: 'Paris', Country: 'France' } },
    { CompanyName: 'HomeSmart Innovate', Industry: 'Smart Home', FoundingYear: 2015, Headquarters: { City: 'Berlin', Country: 'Germany' } },
    { CompanyName: 'InnovateTech Solutions', Industry: 'Technology', FoundingYear: 2005, Headquarters: { City: 'Boston', Country: 'USA' } },
    { CompanyName: 'EcoFriendly Innovations', Industry: 'Environmental', FoundingYear: 2014, Headquarters: { City: 'Sydney', Country: 'Australia' } },
    { CompanyName: 'RoboInnovate Dynamics', Industry: 'Robotics', FoundingYear: 2009, Headquarters: { City: 'Beijing', Country: 'China' } },
    { CompanyName: 'MediCare Solutions Inc.', Industry: 'Healthcare', FoundingYear: 2012, Headquarters: { City: 'Tokyo', Country: 'Japan' } },
    { CompanyName: 'SolarEco Innovations', Industry: 'Renewable Energy', FoundingYear: 2018, Headquarters: { City: 'Berlin', Country: 'Germany' } },
    { CompanyName: 'DataInsights Hub', Industry: 'Data Analytics', FoundingYear: 2011, Headquarters: { City: 'San Francisco', Country: 'USA' } },
    { CompanyName: 'EcoSustainable Tech', Industry: 'Green Technology', FoundingYear: 2013, Headquarters: { City: 'London', Country: 'United Kingdom' } },
    { CompanyName: 'ElectroTech Ltd.', Industry: 'Electronics', FoundingYear: 2006, Headquarters: { City: 'Seoul', Country: 'South Korea' } },
    { CompanyName: 'SmartLiving Solutions', Industry: 'Smart Home', FoundingYear: 2016, Headquarters: { City: 'Mumbai', Country: 'India' } }
  ];
  
