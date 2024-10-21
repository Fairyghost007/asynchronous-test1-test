async function concurrentRequests() {
    await Promise.all([
      (async () => {
        const orderStatuses = ["Pending", "Shipped", "Delivered"];
        console.log("Order statuses fetched:", orderStatuses);
      })(),
      (async () => {
        const orders = [
          { id: 1, status: "Pending" },
          { id: 2, status: "Shipped" }
        ];
        console.log("Orders fetched:", orders);
      })()
    ]);
  }
  
  
