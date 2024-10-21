async function concurrentRequests() {
    await Promise.all([
      (async () => {
        const { data: orderStatuses } = await axios.get("http://localhost:3000/api/orderStatuses");
        console.log("Order statuses fetched:", orderStatuses);
      })(),
      (async () => {
        const { data: orders } = await axios.get("http://localhost:3000/api/orders");
        console.log("Orders fetched:", orders);
      })()
    ]);
  }
  
  