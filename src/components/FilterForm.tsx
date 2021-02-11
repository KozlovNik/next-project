import { useRouter, NextRouter } from "next/router";
import { useRef, useState } from "react";

import styles from "./FilterForm.module.css";

interface FilterFormProps {
  render: (props: {
    query: NextRouter["query"];
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => React.ReactNode;
}

const FilterForm: React.FC<FilterFormProps> = ({ render }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const [query, setQuery] = useState<NextRouter["query"]>(router.query);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      let qValue = query[name];
      const valArr = qValue ? qValue.toString().split(",") : [];
      let newVal = checked
        ? [...valArr, value]
        : valArr.filter((v) => v !== value);

      return setQuery({ [name]: newVal.join(",") });
    }
    setQuery((inputs) => ({ ...inputs, [name]: value }));
  };

  console.log(query);

  return (
    <form className={styles.form} ref={formRef}>
      <div>{render({ query: query, onChange })}</div>
      <div className={styles.buttons}>
        <button
          className={styles.reset}
          onClick={(e) => {
            e.preventDefault();
            formRef.current?.reset();
          }}
        >
          Сбросить
        </button>
        <button type="submit" className={styles.apply}>
          Применить
        </button>
      </div>
    </form>
  );
};

export default FilterForm;
