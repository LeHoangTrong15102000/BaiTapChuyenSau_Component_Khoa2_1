import logo from './logo.svg';
import './App.css';
import MultiComponent from './React _Multi_Component/MultiComponent';
import Props from './Props/Props';
import ProductList from './ProductList/ProductList';
import dataJson from './Data/data.json';
import DanhSachSanPham from './ProductPhone/DanhSachSanPham';
import CarStore from './CarStore/CarStore';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import BaiTapGioHangRedux from './BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapLacXiNgau from './BaiTapLacXiNgau/BaiTapLacXiNgau';
import BaiTapOanTuXi from './BaiTapOanTuXi/BaiTapOanTuXi';
import BaiTapBookingTicket from './CyberMovie/BaiTapBookingTicket';
import DemoPureComponent from './DemoPureComponent/DemoPureComponent';
import ContextDemo from './ContextDemo/ContextDemo';
import UserProfile from './FormValidation/UserProfie/UserProfile';

function App() {
  return (
    <div>
      <UserProfile />
    </div>
    // ******************** Context API học để biết
    // <div>
    //   <ContextDemo />
    // </div>

    // ******************** Pure Component
    // <div>
    //   <DemoPureComponent />
    // </div>

    // ********************* Bài tập về Cyber Movie để ôn luyện Redux
    // <div>
    //   <BaiTapBookingTicket />
    // </div>

    // ********************* Bài tập redux oẳn tù xì
    // <div>
    //   <BaiTapOanTuXi />
    // </div>

    // *********************  Bài tập Redux lắc xí ngầu
    // <div>
    //   <BaiTapLacXiNgau />
    // </div>

    // ********************* Bài tập giỏ hàng trong react sử dụng Redux\
    // <div>
    //   <BaiTapGioHangRedux />
    // </div>

    // ********************* Bài tập giỏ hàng trong React
    // <div className="container-fluid">
    //   <ShoppingCart />
    // </div>

    // **************  Bài tập truyền children giữa các component
    // <div className="container-fluid">
    //   <Props />
    // </div>

    // ******** Bài tập Product Car
    // <div className='container-fluid'>
    //   <CarStore />
    // </div>

    //******** bài tập Phone Product
    // <div className="container-fluid">
    //   <DanhSachSanPham />
    // </div>

    //******** Bài tập Shoes Product
    // <div className="container-fluid">
    //   <div className="row">
    //     <div className="col-4">
    //       {/* bên trái sẽ là chứa menu
    //       Bootstrap khi chia như vậy thì cái độ rộng của nó sẽ dài theo cái nội dung -> nên muốn nó xuống giữa được thì phải sét chiều dài tương đối cho nó
    //       */}
    //       <div
    //         className="nav flex-column nav-pills justify-content-center"
    //         style={{ minHeight: "800px" }}
    //         id="v-pills-tab"
    //         role="tablist"
    //         aria-orientation="vertical"
    //       >
    //         <a
    //           className="nav-link active"
    //           id="v-pills-home-tab"
    //           data-toggle="pill"
    //           href="#home"
    //           role="tab"
    //           aria-controls="home"
    //           aria-selected="true"
    //         >
    //           Home
    //         </a>
    //         <a
    //           className="nav-link"
    //           id="v-pills-shop-tab"
    //           data-toggle="pill"
    //           href="#shop"
    //           role="tab"
    //           aria-controls="shop"
    //           aria-selected="false"
    //         >
    //           Shop
    //         </a>
    //       </div>
    //     </div>

    //     {/* Lớp nội dụng của navs-tab

    //       shop - của chúng ta sẽ là những đôi giầy
    //       Ở video sẽ hướng dẫn dụng cái productList của Component product
    //      */}
    //     <div className="col-8 productList">
    //       <div className="tab-content" id="v-pills-tabContent">
    //         <div
    //           className="tab-pane fade show active"
    //           id="home"
    //           role="tabpanel"
    //           aria-labelledby="v-pills-home-tab"
    //         >
    //           <ProductList arrProduct={dataJson} />
    //         </div>
    //         <div
    //           className="tab-pane fade"
    //           id="shop"
    //           role="tabpanel"
    //           aria-labelledby="v-pills-shop-tab"
    //         >
    //           Hello Le Hoang Trong
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
