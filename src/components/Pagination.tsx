import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.css";

interface PaginationProps {
  total?: number;
  pageCount?: number;
  count?: number;
}

const Pagination: React.FC<PaginationProps> = ({ total, pageCount, count }) => {
  return (
    <div className={styles.wrapper}>
      {pageCount && pageCount > 1 && (
        <ReactPaginate
          pageCount={pageCount}
          pageRangeDisplayed={3}
          marginPagesDisplayed={1}
          previousLabel=""
          nextLabel=""
          containerClassName={styles.pagination}
          pageClassName={styles.item}
          activeClassName={styles.activeItem}
          breakClassName={styles.breakItem}
          breakLinkClassName={styles.link}
          pageLinkClassName={styles.link}
        />
      )}

      <div className={styles.info}>
        Показано товаров: {count} из {total}
      </div>
    </div>
  );
};

export default Pagination;
