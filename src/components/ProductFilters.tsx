import { getBrandsTypes, getCountriesTypes } from "../lib/dataFunctions";

import PopupProductFilter from "./PopupProductFilter";
import ProductFilter from "./ProductFilter";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import FilterForm from "./FilterForm";
import PriceInput from "./PriceInput";

import styles from "./ProductFilters.module.css";
import { firstLetterUpper } from "../lib/utilFunctions";

interface ProductFiltersProps {
  countries: getCountriesTypes;
  brands: getBrandsTypes;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  countries,
  brands,
}) => {
  return (
    <div className={styles.filters}>
      <PopupProductFilter
        trigger={(open) => (
          <ProductFilter open={open} label="Сортировака по:" />
        )}
      >
        {(close) => (
          <FilterForm
            fields="price"
            close={close}
            render={(props) => (
              <>
                <Radio name="price" value="asc" {...props}>
                  Сначала дешевле
                </Radio>
                <Radio name="price" value="desc" {...props}>
                  Сначала дороже
                </Radio>
              </>
            )}
          />
        )}
      </PopupProductFilter>
      <PopupProductFilter
        trigger={(open) => <ProductFilter open={open} label="Бренды" />}
      >
        {(close) => (
          <FilterForm
            fields="brand"
            close={close}
            render={(props) => (
              <>
                {brands.map(({ name }) => (
                  <Checkbox name="brand" value={name} {...props}>
                    {firstLetterUpper(name)}
                  </Checkbox>
                ))}
              </>
            )}
          />
        )}
      </PopupProductFilter>
      <PopupProductFilter
        trigger={(open) => <ProductFilter open={open} label="Страны" />}
      >
        {(close) => (
          <FilterForm
            fields="country"
            close={close}
            render={(props) => (
              <>
                {countries.map(({ name }) => (
                  <Checkbox name="country" value={name} {...props}>
                    {firstLetterUpper(name)}
                  </Checkbox>
                ))}
              </>
            )}
          />
        )}
      </PopupProductFilter>

      <PopupProductFilter
        trigger={(open) => <ProductFilter open={open} label="Цена" />}
      >
        {(close) => (
          <FilterForm
            fields={["minPrice", "maxPrice"]}
            close={close}
            render={(props) => (
              <>
                <PriceInput name="minPrice" {...props}>
                  От
                </PriceInput>
                <PriceInput name="maxPrice" {...props}>
                  До
                </PriceInput>
              </>
            )}
          />
        )}
      </PopupProductFilter>
    </div>
  );
};

export default ProductFilters;
