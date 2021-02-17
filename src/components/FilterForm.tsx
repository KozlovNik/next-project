import { NextRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import { getQueryString, excludeProp, setValue } from "../lib/queries";
import useCatalogData from "../hooks/useCatalogData";
import fetchJson from "../lib/fetchJson";
import { Scrollbars } from "react-custom-scrollbars";
import usePath from "../hooks/usePath";

import Thumb from "./Thumb";

import styles from "./FilterForm.module.css";
import { LoadingContext } from "../lib/loadingContext";

type Query = NextRouter["query"];

interface FilterFormProps {
  render: (props: { query: Query; setQuery: any }) => React.ReactNode;
  close: any;
  fields: string | string[];
}

const FilterForm: React.FC<FilterFormProps> = ({ render, close, fields }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { setLoading } = useContext(LoadingContext);
  const { router, mutate } = useCatalogData(undefined, {revalidateOnMount: false});
  const { pathname } = usePath();
  const [query, setQuery] = useState<Query>(
    excludeProp(router.query, "categorySlug")
  );

  return (
    <Scrollbars
      renderThumbVertical={Thumb}
      autoHeight
      autoHeightMin={30}
      autoHeightMax={180}
    >
      <form className={styles.form} ref={formRef}>
        <div>{render({ query, setQuery })}</div>
        <div className={styles.buttons}>
          <button
            className={styles.reset}
            onClick={(e) => {
              e.preventDefault();
              const q = setValue(query, "", fields);
              setQuery(q);
            }}
          >
            Сбросить
          </button>
          <button
            type="submit"
            className={styles.apply}
            onClick={async (e) => {
              const queryString = getQueryString({ ...query, page: "1" });
              e.preventDefault();
              router.push(`${pathname}?${queryString}`, undefined, {
                shallow: true,
                scroll: false,
              });
              
              setLoading(true);
              await mutate(
                fetchJson(
                  `/api/products?category=${
                    router.query.categorySlug || ""
                  }&${queryString}`,
                  {}
                ),
                false
              );
              setLoading(false);
              close();
            }}
          >
            Применить
          </button>
        </div>
      </form>
    </Scrollbars>
  );
};

export default FilterForm;
