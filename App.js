import "./index.css";
import "./App.css";
import Mycart from "./home/header/cart/mycart";
import Home from "./home/header/home";
import Signin from "./home/auth/signin";
import Login from "./home/auth/login";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Params,
} from "react-router-dom";
import Aboutus from "./home/store/about us/aboutuspg";
import Myshopproducts from "./home/store/myshopproducts";
import Webstore from "./home/store/store";
import Orderform from "./home/items.js/orderform";
import Profile from "./home/profile/profile";
import Storeabout from "./home/store/about us/shopaboutapp";
import Plans from "./home/plans/plans";
import Productdeatils from "./home/productdetails/productdeatils";
import Addshopform1 from "./home/addnewshop/addshopform1";
import ItemsDetails from "./home/items opened/itemsdetails";
import Productdetailsapp from "./home/items opened/prodsdetailsright";
import Dropshipping from "./home/dropshipping mode/dropshipping";
import Prodsright from "./home/items opened/prodsdetailsright";
import Productsdeatilspage from "./home/items opened/itemdetailspage";
import Shopsright from "./home/shopsowner/shopsright";
import Addproductstodatabase from "./home/addproducts/addproductsinshop";
import Addshopniche from "./home/addnewshop/addshopniche";
import Addfashionshopform from "./home/fashionstore/addfashionshopform";
import Fashionshop from "./home/fashionstore/fashionshop";
import Fashionshoppreview from "./home/fashionshoppreview/fashionshop";
import Saleschat from "./home/sales/saleschat";
import Order from "./home/order/order";
import Template3website from "./home/template3/template3website";
import Temp1rpeview from "./home/preview templates/temp1";
import Addtemplate3form from "./home/template3/addtemplate3";
import Temp2preview from "./home/preview templates/temp2";
import Template3preview from "./home/preview templates/temp3";
import Template4website from "./home/template4/template4website";
import Template5website from "./home/template5/template5website";
import Template6website from "./home/template5 copy/template6website";
import Template7website from "./home/template7/template7website";
import Template8website from "./home/template8/template8website";
import Search from "./home/search/search";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Mycart /> },
  { path: "/login", element: <Login /> },
  { path: "/signin", element: <Signin /> },
  {
    path: "/mystore/:shop_id/:shop_name/:shop_owner/:shop_about/:shop_prods/:user_id",
    element: <Shopsright />,
  },
  { path: "/aboutus", element: <Storeabout /> },
  { path: "/shop-products", element: <Myshopproducts /> },
  { path: "/orderproduct", element: <Orderform /> },
  { path: "/profile", element: <Profile /> },
  { path: "/Plans", element: <Plans /> },
  { path: "/Addshoppage1", element: <Addshopniche /> },
  { path: "/Dropshipping", element: <Dropshipping /> },
  {
    path: "/products/:id/:title/:price/:shop_id/",
    element: <Prodsright />,
  },
  { path: "/Addproducts", element: <Addproductstodatabase /> },
  { path: "/Defaultstore", element: <Addshopform1 /> },
  { path: "/AddFAshionShopForm", element: <Addfashionshopform /> },
  {
    path: "/mystore/fashion/:shop_id/:shop_name/:shop_owner/:shop_about/:shop_tagline/:shop_abouthead/:shop_block2/:shop_blockheading2/:shop_blockheading3/:shop_block3/:user_id",
    element: <Fashionshop />,
  },
  {
    path: "/temp1preview",
    element: <Temp1rpeview />,
  },
  {
    path: "/saleschat/:orders_id/:name/:Phone/:Email/:streetadrs/:city/:state/:zipcode/:country/:id/:product/:sender_id/:shop_id/:message",
    element: <Saleschat />,
  },
  { path: "/orders", element: <Order /> },
  { path: "/prevewtemp3", element: <Template3website /> },
  { path: "/addtemplate3form", element: <Addtemplate3form /> },
  {
    path: "/mystore/template3/:shop_id/:shop_name/:shop_owner/:shop_tagline/:shop_block2/:shop_blockhead2/:shop_blockhead3/:shop_block3/:user_id/:shop_blockhead1/:shop_block1/:shop_keyhead1/:shop_key1/:shop_keyhead2/:shop_key2/:shop_keyhead3/:shop_key3/:shop_email/:shop_phone/:insta",
    element: <Template3website />,
  },
  { path: "/previewtemplate2", element: <Temp2preview /> },
  { path: "/previewtemplate3", element: <Template3preview /> },
  { path: "/template4preview", element: <Template4website /> },
  { path: "/template5preview", element: <Template5website /> },
  { path: "/template6preview", element: <Template6website /> },
  { path: "/template7preview", element: <Template7website /> },
  { path: "/template8preview", element: <Template8website /> },
  {path: '/search', element:<Search/>}
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
