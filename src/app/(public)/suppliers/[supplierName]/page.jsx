"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import suppliers from "@/datas/suppliers";
import Select from "react-select";

const Page = ({ params }) => {
  const searchParams = useSearchParams();
  const [supplierData, setSupplierData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [supplier, setSupplier] = useState(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [dynamicLineCount, setDynamicLineCount] = useState(3);

  const router = useRouter();

  const isProduction = process.env.NODE_ENV === "production";
  const apiUrl = isProduction
    ? "https://frontendbackend-wn0p.onrender.com/api/suppliers"
    : "http://localhost:8080/api/suppliers";

  function stringToSlug(str) {
    str = str.replace("&", "and");
    return str
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");
  }

  const slugToOriginalName = (slug) => {
    if (!slug || slug.trim() === "") {
      return slug;
    }
    // Replace hyphens with spaces and convert to uppercase
    return slug.replace("-", " ").toUpperCase();
  };
  const brand = slugToOriginalName(params.supplierName);

  useEffect(() => {
    // Find the supplier data based on the brand
    const foundSupplier = suppliers.find((s) => s.brand === brand);
    setSupplier(foundSupplier);
  }, [searchParams, brand]);

  useEffect(() => {
    const fetchSupplierData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/name`, {
          params: { names: brand },
        });
        setSupplierData(response.data);
        setSelectedCategory(Object.keys(response.data)[0]); // Default to the first category
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching supplier data:", error);
        setIsLoading(false);
      }
    };

    fetchSupplierData();
  }, [brand]);

  // Always calculate dynamic lines after supplier data is updated
  useEffect(() => {
    if (supplierData && selectedCategory) {
      const productCount = supplierData[selectedCategory]?.length || 0;
      const calculatedLines = Math.min(3 + Math.floor(productCount / 5), 10); // Adjust the formula as needed
      setDynamicLineCount(calculatedLines);
    }
  }, [supplierData, selectedCategory]);

  const toggleDescription = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!supplierData) {
    return <p>Supplier not found.</p>;
  }

  const categories = Object.keys(supplierData);

  // Format categories for react-select
  const categoryOptions = categories.map(category => ({
    value: category,
    label: category
  }));

  const handleClick = (listing, category) => {
    const categorySlug =
      category === "Replacement Parts" || category === "Fluids & Lubricants"
        ? "replacement-parts"
        : "shop-supplies";

    const slug = stringToSlug(listing); // Convert listing to a slug
    router.push(`/${categorySlug}/${slug}`);
  };

  console.log('supplier: ',supplier)

  return (
    <>
      <div
        className="w-full bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/dpeocx0yy/image/upload/v1737539505/BANNER_fwflwx.png)`,
          backgroundSize: "contain", // Ensure the full image is visible
          height: "30vh", // Adjust this as needed
        }}
      >
        <div className="overlay bg-[#00000080] h-full w-full"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row flex-wrap md:flex-nowrap w-10/12 mx-auto gap-8">
        {/* Sidebar Section */}
        <div className="mt-[-100px] bg-white p-4 md:p-12 w-full md:w-1/3 shadow-md">
          {/* Logo Section */}
          <div className="w-full h-[100px] md:h-[100px] flex items-center justify-center border border-gray-300 bg-gray-100">
            <img
              className="object-contain max-w-full max-h-full"
              src={supplier.logoUrl || ""}
              alt={brand || "Supplier logo"}
            />
          </div>

          {/* Description Section */}
          <div className="mt-4">
            <p
              className={`text-sm text-gray-600 overflow-hidden transition-all ${isDescriptionExpanded ? "line-clamp-none" : `line-clamp-${dynamicLineCount}`
                }`}
            >
              {supplier.description || "No description available."}
            </p>
            {supplier.description &&
              supplier.description.length > 100 && ( // Show button only for long descriptions
                <button
                  className="mt-2 text-[#b12b29] font-semibold text-sm underline"
                  onClick={toggleDescription}
                >
                  {isDescriptionExpanded ? "View Less" : "View More"}
                </button>
              )}
          </div>
        </div>

        {/* Main Content Section */}
        <div className="w-full md:w-4/5 py-2 md:py-8">
          {/* Category Dropdown */}
          <div className="mb-4">
            
            <Select
              id="category-select"
              className="basic-single"
              classNamePrefix="select"
              value={categoryOptions.find((option) => option.value === selectedCategory)}
              onChange={(e) => setSelectedCategory(e.value)} // Use e.value to get the selected category
              options={categoryOptions} // Pass the category options here
              styles={{
                control: (base) => ({
                  ...base,
                  minHeight: '20px', // Adjust height
                  width: '380px', // Adjust width
                  fontSize: '16px', // Adjust font size
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  padding: '4px', // Adjust padding for the dropdown icon
                }),
                clearIndicator: (base) => ({
                  ...base,
                  padding: '4px', // Adjust padding for the clear icon
                }),
                valueContainer: (base) => ({
                  ...base,
                  padding: '2px 6px', // Adjust padding for the text inside
                }),
                // menu: (base) => ({
                //   ...base,
                //   width: '380px',
                //   fontSize: '16px', // Adjust font size in the dropdown options
                // }),
              }}
            />
          </div>

          {/* Products for Selected Category */}
          <div className="grid grid-cols-2 md:grid-cols-4">
            {supplierData[selectedCategory]?.map((product, i) => (
              <div
                key={i}
                className="bg-white p-4 hover:shadow-md hover:scale-105 transition border border-gray-100 cursor-pointer"
                onClick={() =>
                  handleClick(product.name, product.categoryName, product.subCategoryName)
                }
              >
                <img
                  src={product.imageUrl[0]}
                  alt={product.name}
                  className="w-full h-40 object-contain"
                />
                <h3 className="font-semibold mb-2 text-center text-sm">{product.name}</h3>
                <p className="text-gray-500 text-center text-xs">View Products</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
