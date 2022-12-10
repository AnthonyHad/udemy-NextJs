import { useEffect, useState } from 'react';

function LastSalesPage() {
  const [sales, setSales] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://nextjs-course-d8498-default-rtdb.europe-west1.firebasedatabase.app/sales.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  //This is what pre-renders by Next js (without the effect)
  if (!sales) {
    return <p>No data yet</p>;
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export default LastSalesPage;

//client side data detching
//Examples: - Data changing with high frequency (stock data)
//          - Highly user specifc data (lat order in an online shop)
//          - Partial data (data used only on a part of the page)
