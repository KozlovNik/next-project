import React from "react";
import classNames from "classnames";
import styles from "./ProductFilter.module.css";

interface ProductFilterProps {
  label: string;
  open?: boolean;
}
// React.forwardRef(({ open, ...props }, ref) => (
const ProductFilter = React.forwardRef<HTMLDivElement, ProductFilterProps>(
  ({ open, label, ...props }, ref) => (
    <span
      className={classNames(styles.label, { [styles.labelActive]: open })}
      ref={ref}
      {...props}
    >
      {label}
    </span>
  )
);

export default ProductFilter;
