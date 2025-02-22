import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import Hero from "./Hero";
import { BiStar } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import storeIcon from "../../../assets/store-button.svg";
import arrow from "../../../assets/arrow.svg";

interface Product {
    name: string;
    price: number;
    discount: number;
    reviews_count: number;
    rating: number;
    available_units: number;
    featured_image_url: string;
}

const products: Product[] = [
    {
        name: "Product 1",
        price: 100,
        discount: 10,
        reviews_count: 150,
        rating: 4.5,
        available_units: 20,
        featured_image_url: "https://via.placeholder.com/150"
    },
    {
        name: "Product 2",
        price: 200,
        discount: 15,
        reviews_count: 85,
        rating: 4.0,
        available_units: 50,
        featured_image_url: "https://via.placeholder.com/150"
    },
    {
        name: "Product 3",
        price: 300,
        discount: 20,
        reviews_count: 200,
        rating: 4.8,
        available_units: 10,
        featured_image_url: "https://via.placeholder.com/150"
    }
];

const Market = () => {
    const location = useLocation();

    return (
        <div className="bg-white shadow-md px-4 py-8 max-w-screen-md mx-auto space-y-8">
            {/* Only show this component on the dashboard */}
            {location.pathname.includes("dashboard") && (
                <div className="flex items-center gap-4">
                    <div>
                        <BsArrowLeft size={30} />
                    </div>
                    <div>
                        <h2 className="text-2xl">Welcome to Hovertask Marketplace</h2>
                        <p className="text-xs text-[#000000BF]">
                            Your one-stop platform to buy, sell, and earn effortlessly.
                        </p>
                    </div>
                </div>
            )}

            {/* Hero */}
            <Hero />
            {/* Hero */}

            <div className="my-6">
                <p className="font-light text-[#000000BF]">
                    Discover trending products and services or showcase yours to thousands of buyers daily.
                </p>
            </div>

            {/* Trending Products & Services */}
            <TrendingProductsAndServices />
            {/* Trending Products & Services */}

            {/* Black Friday sales */}
            <BlackFridaySales />
            {/* Black Friday sales */}
        </div>
    );
};

const TrendingProductsAndServices = () => {
    return <ProductsSection heading="Trending Products & Services" products={products} />;
};

const BlackFridaySales = () => {
    return (
        <div className="grid [grid-template-columns:_auto_1fr] items-center gap-6 overflow-auto">
            <div className="w-[192px]">
                <img src="/assets/images/Group 1000004394.png" alt="Black friday banner" className="block w-fit" />
            </div>
            <ProductsSection products={products} />
        </div>
    );
};

const ProductsSection = ({ heading, products }: { heading?: string; products: Product[] }) => {
    return (
        <div className="space-y-4">
            {heading && (
                <div className="flex items-center justify-between">
                    <h2>{heading}</h2>
                    <Link to="#" className="font-light text-base">
                        View All
                    </Link>
                </div>
            )}
            <div className="flex gap-4 bg-[#EBEFFF] p-4 rounded-2xl overflow-x-auto max-w-full">
                {products.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </div>
    );
};

const ProductCard = (props: Product) => {
    return (
        <div className="min-w-[180px] w-[180px] bg-white shadow-lg rounded-2xl p-4 space-y-2">
            <div className="bg-zinc-200 rounded-2xl overflow-hidden">
                <img className="h-[97.7px]" src={props.featured_image_url} alt={props.name} />
            </div>
            <div>
                <div className="flex justify-between">
                    <h3 className="text-[11.28px] capitalize">{props.name}</h3>
                    <button className="text-[#FF00FB]">
                        <FaHeart />
                    </button>
                </div>
                <div className="flex gap-6">
                    <p className="text-[9.4px] text-[#77777A] line-through">{props.price}</p>
                    <p className="text-[11.28px]">{props.price * (props.discount / 100)}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <p className="text-[9.4px] flex items-center">
                        <BiStar /> {props.rating}
                    </p>
                    <p className="text-[9.4px] text-base">({props.reviews_count} Reviews)</p>
                    <p className="text-[#77777A] text-[9.11px]">{props.available_units} Units</p>
                </div>
            </div>
            <div className="flex items-center justify-between">
                <button className="flex gap-1 justify-center items-center bg-base text-white rounded-full h-[27.75px] w-[106px] text-[9.64px]">
                    <img src={storeIcon} alt="store icon" />
                    Buy Product
                </button>
                <Link
                    to="#"
                    className="flex items-center justify-center rounded-full h-[28.92px] w-[28.92px] border border-base"
                >
                    <img src={arrow} alt="Arrow north east" />
                </Link>
            </div>
        </div>
    );
};

export default Market;
