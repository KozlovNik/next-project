import { NextRouter } from "next/router";
import { useRef, useState } from "react";
import { getQueryString, excludeProp, setValue } from "../lib/queries";
import useCatalogData from "../hooks/useCatalogData";
import fetchJson from "../lib/fetchJson";

import styles from "./FilterForm.module.css";

type Query = NextRouter["query"];

interface FilterFormProps {
  render: (props: { query: Query; setQuery: any }) => React.ReactNode;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  close: any;
  fields: string | string[];
}

const FilterForm: React.FC<FilterFormProps> = ({
  render,
  close,
  fields,
  setLoading,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const { router, mutate } = useCatalogData();
  const [query, setQuery] = useState<Query>(
    excludeProp(router.query, "categorySlug")
  );

  return (
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
            const queryString = getQueryString(query);
            e.preventDefault();
            router.push(
              `/catalog/${router.query.categorySlug ?? ""}?${queryString}`,
              undefined,
              {
                shallow: true,
                scroll: false,
              }
            );
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
