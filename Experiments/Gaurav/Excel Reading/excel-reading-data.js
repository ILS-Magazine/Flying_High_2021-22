var sampleData = [
    {
      "OrderDate": "01/06/2020",
      "Region": "East",
      "Rep": "Jones",
      "Item": "Pencil",
      "Units": 95,
      "UnitCost": 1.99,
      "Total": "189.05"
    },
    {
      "OrderDate": "1/23/2020",
      "Region": "Central",
      "Rep": "Kivell",
      "Item": "Binder",
      "Units": 50,
      "UnitCost": 19.99,
      "Total": "999.5"
    },
    {
      "OrderDate": "02/09/2020",
      "Region": "Central",
      "Rep": "Jardine",
      "Item": "Pencil",
      "Units": 36,
      "UnitCost": 4.99,
      "Total": "179.64"
    },
    {
      "OrderDate": "2/26/2020",
      "Region": "Central",
      "Rep": "Gill",
      "Item": "Pen",
      "Units": 27,
      "UnitCost": 19.99,
      "Total": "539.73"
    },
    {
      "OrderDate": "3/15/2020",
      "Region": "West",
      "Rep": "Sorvino",
      "Item": "Pencil",
      "Units": 56,
      "UnitCost": 2.99,
      "Total": "167.44"
    },
    {
      "OrderDate": "04/01/2020",
      "Region": "East",
      "Rep": "Jones",
      "Item": "Binder",
      "Units": 60,
      "UnitCost": 4.99,
      "Total": "299.4"
    },
    {
      "OrderDate": "4/18/2020",
      "Region": "Central",
      "Rep": "Andrews",
      "Item": "Pencil",
      "Units": 75,
      "UnitCost": 1.99,
      "Total": "149.25"
    },
    {
      "OrderDate": "05/05/2020",
      "Region": "Central",
      "Rep": "Jardine",
      "Item": "Pencil",
      "Units": 90,
      "UnitCost": 4.99,
      "Total": "449.1"
    },
    {
      "OrderDate": "5/22/2020",
      "Region": "West",
      "Rep": "Thompson",
      "Item": "Pencil",
      "Units": 32,
      "UnitCost": 1.99,
      "Total": "63.68"
    },
    {
      "OrderDate": "06/08/2020",
      "Region": "East",
      "Rep": "Jones",
      "Item": "Binder",
      "Units": 60,
      "UnitCost": 8.99,
      "Total": "539.4"
    },
    {
      "OrderDate": "6/25/2020",
      "Region": "Central",
      "Rep": "Morgan",
      "Item": "Pencil",
      "Units": 90,
      "UnitCost": 4.99,
      "Total": "449.1"
    },
    {
      "OrderDate": "07/12/2020",
      "Region": "East",
      "Rep": "Howard",
      "Item": "Binder",
      "Units": 29,
      "UnitCost": 1.99,
      "Total": "57.71"
    },
    {
      "OrderDate": "7/29/2020",
      "Region": "East",
      "Rep": "Parent",
      "Item": "Binder",
      "Units": 81,
      "UnitCost": 19.99,
      "Total": "1,619.19"
    },
    {
      "OrderDate": "8/15/2020",
      "Region": "East",
      "Rep": "Jones",
      "Item": "Pencil",
      "Units": 35,
      "UnitCost": 4.99,
      "Total": "174.65"
    },
    {
      "OrderDate": "09/01/2020",
      "Region": "Central",
      "Rep": "Smith",
      "Item": "Desk",
      "Units": 2,
      "UnitCost": 125,
      "Total": "250"
    },
    {
      "OrderDate": "9/18/2020",
      "Region": "East",
      "Rep": "Jones",
      "Item": "Pen Set",
      "Units": 16,
      "UnitCost": 15.99,
      "Total": "255.84"
    },
    {
      "OrderDate": "10/05/2020",
      "Region": "Central",
      "Rep": "Morgan",
      "Item": "Binder",
      "Units": 28,
      "UnitCost": 8.99,
      "Total": "251.72"
    },
    {
      "OrderDate": "10/22/2020",
      "Region": "East",
      "Rep": "Jones",
      "Item": "Pen",
      "Units": 64,
      "UnitCost": 8.99,
      "Total": "575.36"
    },
    {
      "OrderDate": "11/08/2020",
      "Region": "East",
      "Rep": "Parent",
      "Item": "Pen",
      "Units": 15,
      "UnitCost": 19.99,
      "Total": "299.85"
    },
    {
      "OrderDate": "11/25/2020",
      "Region": "Central",
      "Rep": "Kivell",
      "Item": "Pen Set",
      "Units": 96,
      "UnitCost": 4.99,
      "Total": "479.04"
    },
    {
      "OrderDate": "12/12/2020",
      "Region": "Central",
      "Rep": "Smith",
      "Item": "Pencil",
      "Units": 67,
      "UnitCost": 1.29,
      "Total": "86.43"
    },
    {
      "OrderDate": "12/29/2020",
      "Region": "East",
      "Rep": "Parent",
      "Item": "Pen Set",
      "Units": 74,
      "UnitCost": 15.99,
      "Total": "1,183.26"
    },
    {
      "OrderDate": "1/15/2021",
      "Region": "Central",
      "Rep": "Gill",
      "Item": "Binder",
      "Units": 46,
      "UnitCost": 8.99,
      "Total": "413.54"
    },
    {
      "OrderDate": "02/01/2021",
      "Region": "Central",
      "Rep": "Smith",
      "Item": "Binder",
      "Units": 87,
      "UnitCost": 15,
      "Total": "1,305.00"
    },
    {
      "OrderDate": "2/18/2021",
      "Region": "East",
      "Rep": "Jones",
      "Item": "Binder",
      "Units": 4,
      "UnitCost": 4.99,
      "Total": "19.96"
    },
    {
      "OrderDate": "03/07/2021",
      "Region": "West",
      "Rep": "Sorvino",
      "Item": "Binder",
      "Units": 7,
      "UnitCost": 19.99,
      "Total": "139.93"
    },
    {
      "OrderDate": "3/24/2021",
      "Region": "Central",
      "Rep": "Jardine",
      "Item": "Pen Set",
      "Units": 50,
      "UnitCost": 4.99,
      "Total": "249.5"
    },
    {
      "OrderDate": "04/10/2021",
      "Region": "Central",
      "Rep": "Andrews",
      "Item": "Pencil",
      "Units": 66,
      "UnitCost": 1.99,
      "Total": "131.34"
    },
    {
      "OrderDate": "4/27/2021",
      "Region": "East",
      "Rep": "Howard",
      "Item": "Pen",
      "Units": 96,
      "UnitCost": 4.99,
      "Total": "479.04"
    },
    {
      "OrderDate": "5/14/2021",
      "Region": "Central",
      "Rep": "Gill",
      "Item": "Pencil",
      "Units": 53,
      "UnitCost": 1.29,
      "Total": "68.37"
    },
    {
      "OrderDate": "5/31/2021",
      "Region": "Central",
      "Rep": "Gill",
      "Item": "Binder",
      "Units": 80,
      "UnitCost": 8.99,
      "Total": "719.2"
    },
    {
      "OrderDate": "6/17/2021",
      "Region": "Central",
      "Rep": "Kivell",
      "Item": "Desk",
      "Units": 5,
      "UnitCost": 125,
      "Total": "625"
    },
    {
      "OrderDate": "07/04/2021",
      "Region": "East",
      "Rep": "Jones",
      "Item": "Pen Set",
      "Units": 62,
      "UnitCost": 4.99,
      "Total": "309.38"
    },
    {
      "OrderDate": "7/21/2021",
      "Region": "Central",
      "Rep": "Morgan",
      "Item": "Pen Set",
      "Units": 55,
      "UnitCost": 12.49,
      "Total": "686.95"
    },
    {
      "OrderDate": "08/07/2021",
      "Region": "Central",
      "Rep": "Kivell",
      "Item": "Pen Set",
      "Units": 42,
      "UnitCost": 23.95,
      "Total": "1,005.90"
    },
    {
      "OrderDate": "8/24/2021",
      "Region": "West",
      "Rep": "Sorvino",
      "Item": "Desk",
      "Units": 3,
      "UnitCost": 275,
      "Total": "825"
    },
    {
      "OrderDate": "09/10/2021",
      "Region": "Central",
      "Rep": "Gill",
      "Item": "Pencil",
      "Units": 7,
      "UnitCost": 1.29,
      "Total": "9.03"
    },
    {
      "OrderDate": "9/27/2021",
      "Region": "West",
      "Rep": "Sorvino",
      "Item": "Pen",
      "Units": 76,
      "UnitCost": 1.99,
      "Total": "151.24"
    },
    {
      "OrderDate": "10/14/2021",
      "Region": "West",
      "Rep": "Thompson",
      "Item": "Binder",
      "Units": 57,
      "UnitCost": 19.99,
      "Total": "1,139.43"
    },
    {
      "OrderDate": "10/31/2021",
      "Region": "Central",
      "Rep": "Andrews",
      "Item": "Pencil",
      "Units": 14,
      "UnitCost": 1.29,
      "Total": "18.06"
    },
    {
      "OrderDate": "11/17/2021",
      "Region": "Central",
      "Rep": "Jardine",
      "Item": "Binder",
      "Units": 11,
      "UnitCost": 4.99,
      "Total": "54.89"
    },
    {
      "OrderDate": "12/04/2021",
      "Region": "Central",
      "Rep": "Jardine",
      "Item": "Binder",
      "Units": 94,
      "UnitCost": 19.99,
      "Total": "1,879.06"
    },
    {
      "OrderDate": "12/21/2021",
      "Region": "Central",
      "Rep": "Andrews",
      "Item": "Binder",
      "Units": 28,
      "UnitCost": 4.99,
      "Total": "139.72"
    }
   ];