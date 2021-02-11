import Popup from "reactjs-popup";
import ProductFilter from "./ProductFilter";
import Radio from "./Radio";
import Checkbox from "./Checkbox";
import FilterForm from "./FilterForm";
import PriceInput from "./PriceInput";

import styles from "./ProductFilters.module.css";

const ProductFilters = () => {
  return (
    <div className={styles.filters}>
      <Popup
        trigger={(open) => (
          <ProductFilter open={open} label="Сортировака по:" />
        )}
        position="bottom left"
        closeOnDocumentClick
      >
        <FilterForm
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
      </Popup>
      <Popup
        trigger={(open) => <ProductFilter open={open} label="Бренды" />}
        position="bottom left"
        closeOnDocumentClick
      >
        <FilterForm
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
      </Popup>
      <Popup
        trigger={(open) => <ProductFilter open={open} label="Страны" />}
        position="bottom left"
        closeOnDocumentClick
      >
        <FilterForm
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
      </Popup>

      <Popup
        trigger={(open) => <ProductFilter open={open} label="Цена" />}
        position="bottom left"
        closeOnDocumentClick
      >
        <FilterForm
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
      </Popup>
    </div>
  );
};

export default ProductFilters;
