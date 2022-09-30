const SidebarData=[
    
    {name:"Dashboard",path:"/Dashboard",Icon:"fa-solid fa-house"},
    {name:"Customers",path:"/Customers",Icon:"fa-solid fa-users"},
    {name:"Products",path:"/Products",Icon:"fa-solid fa-list",
    subRoutes:[
        {name:"Add Product",path:"/Products/AddProducts",Icon:"fa-solid fa-plus"},
        {name:"View Product",path:"/Products/ViewProduct",Icon:"fa-solid fa-eye"}
    ]},
    {name:"Orders",path:"/Orders",Icon:"fa-regular fa-rectangle-list",
    subRoutes:[
        {name:"Completed",path:"/Orders/CompletedOrders",Icon:"fa-regular fa-circle-check"},
        {name:"Pending",path:"/Orders/PendingOrder",Icon:"fa-regular fa-ellipsis"}] 
    },
    {name:"Analytics",path:"/Analytics",Icon:"fa-solid fa-chart-area",
    subRoutes:[
        {name:"General Analytics",path:"/Analytics/GeneralAnalytics",Icon:"fa-solid fa-dollar-sign"},
        {name:"Payment Analytics",path:"/Analytics/PaymentAnalytics",Icon:"fa-solid fa-dollar-sign"},
        {name:"Product Analytics",path:"/Analytics/ProductAnalytics",Icon:"fa-solid fa-chart-mixed"}]
    },
    {name:"History",path:"/History",Icon:"fa-solid fa-clock-rotate-left"},
    {name:"Product Requests",path:"/ProductRequests",Icon:"fa-regular fa-clipboard-list",
    subRoutes:[
    {name:"Completed",path:"/ProductRequests/CompletedProductRequests",Icon:"fa-regular fa-circle-check"},
    {name:"Pending",path:"/ProductRequests/PendingProductRequests",Icon:"fa-sharp fa-solid fa-message-lines"}]
    },
    {name:"News Section",path:"/NewsSection",Icon:"fa-solid fa-newspaper"},
    {name:"Feedbacks",path:"/Feedbacks",Icon:"fa-solid fa-comments",
    subRoutes:[   
    {name:"General Feedback",path:"/Feedbacks/GeneralFeedback",Icon:"fa-solid fa-message-pen"},
    {name:"Product Feedback",path:"/Feedbacks/ProductFeedback",Icon:"fa-solid fa-star"}]
    },
    {name:"Setting",path:"/ProfileSetting",Icon:"fa-sharp fa-solid fa-gear"},
    {name:"Log Out",path:"#",Icon:"fa-solid fa-right-from-bracket"},
]
export default SidebarData;