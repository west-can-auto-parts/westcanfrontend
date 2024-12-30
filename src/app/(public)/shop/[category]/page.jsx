"use client";

import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
import parts from "@/datas/catalogue";
import Link from "next/link";
import suppliers from "@/datas/suppliers";

import { RelatedProduct } from "./_components/related-product";
import { SubCategories } from "./_components/sub-categories";
import { AboutPart } from "./_components/about-part";
import { PartSupplier } from "./_components/part-supplier";
import { PartTags } from "./_components/part-tags";


const isProduction = process.env.NODE_ENV === 'production';
const apiUrl1 = isProduction
  ? 'https://frontendbackend-production.up.railway.app/'
  : 'http://localhost:8080/admin/api';

const apiUrl = apiUrl1+'api/product';
const apiUrl2 = apiUrl1+'api/suppliers';
const Page = ({ params }) => {
  const [myProduct, setMyProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [allSubCategory, setAllSubCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [categoryType, setCategoryType] = useState("");
  const [categorySlug, setCategorySlug] = useState("");

  const router = useRouter();
  const slug = params.category;
  const currentListing = slug || "";

  // Helper function to convert the string to a slug
  const stringToSlug = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${apiUrl}/products-category/subCategoryName?subCategoryName=${slug}`);
        if (!response.ok) throw new Error("Failed to fetch product data");
        const data = await response.json();
        setMyProduct(data);
        determineCategory(data[0])
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/subcategory`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setAllSubCategory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/subcategory/${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSubCategory(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  // Fetch suppliers by product category from the backend
  useEffect(() => {
    if (!currentListing) return;

    const fetchSuppliers = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${apiUrl2}/subcategory/search?query=${slug}`);
        if (!response.ok) {
          throw new Error("Failed to fetch suppliers");
        }
        const data = await response.json();
        setSuppliers(data); // Set the suppliers data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, [currentListing]);

  const handleClick = (listing, category) => {

    // Determine the category slug based on the category name
    const categorySlug = category === 'Replacement Parts' || category === 'Fluids & Lubricants'
      ? 'replacement-parts'
      : 'shop-supplies';

    // Navigate to the specific product page with category and subcategory
    router.push(`/${categorySlug}/${listing}`);
  };

  const determineCategory = (product) => {
    if (
      product.categoryName === "Replacement Parts" ||
      product.categoryName === "Fluids & Lubricants"
    ) {
      setCategoryType("Replacement Parts");
      setCategorySlug("replacement-parts");
    } else {
      setCategoryType("Tools & Equipments");
      setCategorySlug("shop-supplies");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // console.log('myProduct: ', myProduct)
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap w-10/12 mx-auto gap-8">
        {/* Sidebar Section */}
        <div className="w-full md:w-1/5 bg-white h-fit">
          <div className="mb-4">
            <SubCategories myProduct={myProduct} subCategory={slug} />
            <RelatedProduct subCategoryData={allSubCategory} />
            <PartTags tags={subCategory.tags || []} />
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full md:w-4/5 py-2 md:py-0">
          <div className="pb-2">
            <div className="flex flex-wrap gap-1 md:pb-4">
              <Link className="bg-gray-200 text-sm font-semibold px-2 rounded-md" href={`/`}>
                Home
              </Link>
              /
              <Link className="bg-gray-200 text-sm font-semibold px-2 rounded-md" href={`/categories/`}>
                Categories
              </Link>
              /
              {myProduct && myProduct[0] ? (
                <Link className="bg-gray-200 text-sm font-semibold px-2 rounded-md" href={`/${(categorySlug || "")}/`}>
                  {myProduct[0].categoryName || "Category"}
                </Link>
              ) : (
                <span className="bg-gray-200 text-sm font-semibold px-2 rounded-md">Category</span>
              )}
            </div>
            <h1 className="text-2xl font-bold py-2">{decodeURIComponent(slug) || "SubPart"}</h1>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {myProduct?.map((product, index) => (
              <div key={index} className="cursor-pointer" onClick={() => handleClick(product.name, product.categoryName)}>
                <div className="bg-white shadow-md rounded h-full flex flex-col justify-between group">
                  <div>
                    <img
                      src={product.imageUrl?.[0] || "/placeholder.jpg"}
                      alt={product.name || "Product"}
                      className="w-full h-[15vh] md:h-[20vh] object-cover object-center mb-4 rounded" />
                    <div className="p-3 md:p-4 group-hover:bg-gray-100 transition">
                      <h3 className="text-sm md:text-lg font-semibold mb-2 !line-clamp-1">{product.name || "Product Name"}</h3>
                      <p className="text-sm text-gray-600 mb-2 hidden md:block !line-clamp-3">
                        {product.description || "Product Description"}
                      </p>
                      <div className="flex justify-between items-center">
                        <button className="text-[#b12b29] py-1 text-sm font-semibold">Explore</button>
                        <FaChevronRight className="h-3 w-3 text-[#b12b29]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Supplier Section */}
          {/* <PartSupplier suppliers={suppliers} /> */}

        </div>
      </div>
      <div className="w-10/12 mx-auto my-8">
        <AboutPart mySubPart={subCategory} />

      </div>
    </>
  );
};

export default Page;
