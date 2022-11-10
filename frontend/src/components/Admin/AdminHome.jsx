import { Box,Flex,Text } from '@chakra-ui/react';
import React from 'react';
import { BarChart,CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar} from 'recharts';
import Widget from './Widget';

const AdminHome = () => {
    const data = [
        {
          "name": "Jan",
          "offers": 4000,
          "profits": 2400
        },
        {
          "name": "Feb",
          "offers": 3000,
          "profits": 1398
        },
        {
          "name": "Mar",
          "offers": 2000,
          "profits": 9800
        },
        {
          "name": "Apr",
          "offers": 2780,
          "profits": 3908
        },
        {
          "name": "May",
          "offers": 1890,
          "profits": 4800
        },
        {
          "name": "Jun",
          "offers": 2390,
          "profits": 3800
        },
        {
          "name": "Jul",
          "offers": 3490,
          "profits": 4300
        },
        {
           "name": "Aug",
           "offers": 2000,
           "profits": 9800
        },
        {
           "name": "Sep",
            "offers": 2780,
            "profits": 3908
        },
        {
            "name": "Oct",
            "offers": 1890,
            "profits": 4800
        },
        {
            "name": "Nov",
            "offers": 2390,
            "profits": 3800
        },
        {
            "name": "Dec",
            "offers": 3490,
            "profits": 4300
        }
      ]
      
  return (
    <Box backgroundColor={'#f7f7f7'}>
        <Box padding='1rem 5rem'>
            <Text fontSize={42} fontWeight={700}>DashBoard</Text>
        </Box>
        <Flex padding='1rem 5rem' gap='1rem' >
            <Widget dimensions={[80,80]} logo={'https://static.vecteezy.com/system/resources/previews/005/567/661/original/rupee-icon-indian-currency-symbol-illustration-coin-symbol-free-vector.jpg'} title={'Total Sales'} figure={'Rs. 1,00,000'}/>
            <Widget dimensions={[60,60]} logo={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREeeWu-Nebjp0jzZI4xRhWMJzJgDBM5LfaSg&usqp=CAU'} title={'Total Orders'} figure={'3290'}/>
            <Widget dimensions={[100,100,20]} logo={'https://www.nicepng.com/png/detail/304-3048415_business-advice-product-icon-png.png'} title={'Total Products'} figure={'322'}/>
        </Flex>
        <Box backgroundColor='#fff' padding='3rem 1rem' margin='5rem' boxShadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px' borderRadius='6px'>
            <Box marginBottom={'2rem'}>
                <Text fontSize={36} fontWeight={700}>Sales Statistics</Text>
            </Box>
            <BarChart width={530} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="offers" fill="#8884d8" />
                <Bar dataKey="profits" fill="#82ca9d" />
            </BarChart>
        </Box>
    </Box>
  )
}

export default AdminHome
