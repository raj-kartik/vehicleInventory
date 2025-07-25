import { OptionGrid } from "../../../components/card/ProductAccessoriesCard";
import CollapsibleCard from "../../../components/card/ProductCard";
import ProductDetails from "../../../components/Products/ProductDetails";
import ProductDimensions from "../../../components/Products/ProductDimensions";
import ProductFinance from "../../../components/Products/ProductFinance";
import ProductManagement from "../../../components/Products/ProductManagement";
import ProductMetaData from "../../../components/Products/ProductMetaData";
import ProductOptions from "../../../components/Products/ProductOptions";
import ProductTracking from "../../../components/Products/ProductTracking";
import ProductVehicle from "../../../components/Products/ProductVehicles";
import { productData } from "../../../data/Product/ProductDetails";
import { productOptionsData } from "../../../data/Product/ProductOption";
import { productData1 } from "../../../data/Product/Products1";
import {
  productAccessories,
  productAlternates,
} from "../../../data/Product/ProdutData2";
function ExistingProduct() {
  return (
    <div>
      <CollapsibleCard title="Product Tracking Details">
        <ProductDetails data={productData} />
      </CollapsibleCard>

      <CollapsibleCard title="Product Tracking Details">
        <ProductTracking data={productData1.trackingDetails} />
      </CollapsibleCard>

      {/* Product Metadata & Attributes */}
      <CollapsibleCard title="Product Metadata & Attributes">
        <ProductMetaData data={productData1.metadata} />
      </CollapsibleCard>

      {/* Product Dimensions */}
      <CollapsibleCard title="Product Dimensions">
        <ProductDimensions data={productData1.dimensionPower} />
      </CollapsibleCard>

      {/* Product Finance */}
      <CollapsibleCard title="Product Finance">
        <ProductFinance data={productData1.financials} />
      </CollapsibleCard>

      {/* Product vehicle */}
      <CollapsibleCard title="Product Vehicle">
        <ProductVehicle />
      </CollapsibleCard>

      {/* product alternates */}
      <CollapsibleCard title="Product Alternates">
        <OptionGrid items={productAlternates} />
      </CollapsibleCard>

      {/* product accessroies */}
      <CollapsibleCard title="Product Accessories">
        <OptionGrid items={productAccessories} />
      </CollapsibleCard>

      {/* product options */}
      <CollapsibleCard title="Product Options">
        <ProductOptions data={productOptionsData} />
      </CollapsibleCard>

      {/* product Assets Management */}
      <CollapsibleCard title="Product Assets Management">
        <ProductManagement />
      </CollapsibleCard>
    </div>
  );
}

export default ExistingProduct;
