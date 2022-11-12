export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "title",
      headerName: "Title",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.title}
          </div>
        );
      },
    },
    {
      field: "category",
      headerName: "Category",
      width: 230,
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status==='active'? 'In Stock' : 'Out of Stock'}
          </div>
        );
      },
    },
  ];
  
  //temporary data
  export const productRows = [
    {
      id: 1,
      title: "IPhone 8",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      category: "Smartphone",
      price: 35000
    },
    {
      id: 2,
      title: "Acer Nitro",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "active",
      category: "Laptop",
      price: 80000,
    },
    {
      id: 3,
      title: "Think and Grow Rich",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      status: "passive",
      category: "Self-help books",
      price: 450,
    },
    {
        id: 4,
        title: "IPhone 8",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        category: "Smartphone",
        price: 35000
      },
      {
        id: 5,
        title: "Acer Nitro",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        category: "Laptop",
        price: 80000,
      },
      {
        id: 6,
        title: "Think and Grow Rich",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "passive",
        category: "Self-help books",
        price: 450,
      },
      {
        id: 7,
        title: "IPhone 8",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        category: "Smartphone",
        price: 35000
      },
      {
        id: 8,
        title: "Acer Nitro",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        category: "Laptop",
        price: 80000,
      },
      {
        id: 9,
        title: "Think and Grow Rich",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "passive",
        category: "Self-help books",
        price: 450,
      },
      {
        id: 10,
        title: "IPhone 8",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        category: "Smartphone",
        price: 35000
      },
      {
        id: 11,
        title: "Acer Nitro",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "active",
        category: "Laptop",
        price: 80000,
      },
      {
        id: 12,
        title: "Think and Grow Rich",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        status: "passive",
        category: "Self-help books",
        price: 450,
      }
]