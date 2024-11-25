import { NextRouter } from "next/router";
import { useContext, useRef, useState } from "react";
// import { Scrollbars } from "react-custom-scrollbars";
import qs from "qs";
import omit from "lodash/omit";
import useCatalogData from "../hooks/useCatalogData";
import fetchJson from "../lib/fetchJson";
import usePath from "../hooks/usePath";

// import Thumb from "./Thumb";

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
  const { router, mutate } = useCatalogData(undefined, {
    revalidateOnMount: false,
  });
  const { pathname } = usePath();
  const [query, setQuery] = useState(omit(router.query, "categorySlug"));

  return (
    <form className={styles.form} ref={formRef}>
      <div>{render({ query, setQuery })}</div>
      <div className={styles.buttons}>
        <button
          className={styles.reset}
          onClick={(e) => {
            e.preventDefault();
            setQuery(omit(query, fields));
          }}
        >
          Сбросить
        </button>
        <button
          type="submit"
          className={styles.apply}
          onClick={async (e) => {
            const queryString = qs.stringify({ ...query, page: "1" });
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
  );
};

export default FilterForm;
