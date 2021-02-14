import PopupProductFilter from "./PopupProductFilter";
import ProductFilter from "./ProductFilter";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import FilterForm from "./FilterForm";
import PriceInput from "./PriceInput";

import styles from "./ProductFilters.module.css";

interface ProductFiltersProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({ setLoading }) => {
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
            setLoading={setLoading}
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
            setLoading={setLoading}
            render={(props) => (
              <>
                <Checkbox name="brand" value="black-professional" {...props}>
                  Black Professional
                </Checkbox>
                <Checkbox name="brand" value="bialetti" {...props}>
                  Bialetti
                </Checkbox>
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
            setLoading={setLoading}
            close={close}
            render={(props) => (
              <>
                <Checkbox name="country" value="russia" {...props}>
                  Россия
                </Checkbox>
                <Checkbox name="country" value="france" {...props}>
                  Франция
                </Checkbox>
                <Checkbox name="country" value="italy" {...props}>
                  Италия
                </Checkbox>
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
            setLoading={setLoading}
            fields={["price_min", "price_max"]}
            close={close}
            render={(props) => (
              <>
                <PriceInput name="price_min" {...props}>
                  От
                </PriceInput>
                <PriceInput name="price_max" {...props}>
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
